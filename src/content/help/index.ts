import { getCategory, helpCategories } from "./categories";
import { helpFaq } from "./faq";
import { collectionArticles } from "./articles/collections";
import { exportingArticles } from "./articles/exporting";
import { gettingStartedArticles } from "./articles/getting-started";
import { playbackArticles } from "./articles/playback";
import { privacyArticles } from "./articles/privacy";
import { recordingArticles } from "./articles/recording";
import { settingsArticles } from "./articles/settings";
import { storageArticles } from "./articles/storage";
import { subscriptionArticles } from "./articles/subscription";
import { tapeArticles } from "./articles/tapes";
import { troubleshootingArticles } from "./articles/troubleshooting";
import { stemTokens } from "@/lib/stem";
import type { HelpArticle, HelpBlock, HelpCategoryId } from "./types";

export { helpCategories, getCategory } from "./categories";
export { helpFaq, type HelpFaqItem } from "./faq";
export type * from "./types";

/**
 * The Help Center registry.
 *
 * Adding an article is one entry in one of the arrays below — no page file, no
 * route, no navigation change. Everything downstream (the hub, the topic pages,
 * the sitemap, the search index, related links) is derived from this list.
 *
 * The consistency checks at the bottom run at module load, which on a static
 * build means **at build time**. A duplicate slug or a link to an article that
 * doesn't exist fails the build rather than shipping a broken page.
 */
export const helpArticles: readonly HelpArticle[] = [
  ...gettingStartedArticles,
  ...recordingArticles,
  ...tapeArticles,
  ...collectionArticles,
  ...playbackArticles,
  ...exportingArticles,
  ...storageArticles,
  ...subscriptionArticles,
  ...privacyArticles,
  ...settingsArticles,
  ...troubleshootingArticles,
];

const bySlug = new Map(helpArticles.map((article) => [article.slug, article]));

/** The article at `/help/<slug>`, or `undefined` so the route can 404 properly. */
export function getArticle(slug: string): HelpArticle | undefined {
  return bySlug.get(slug);
}

/** Every article in a category, in the order they were declared. */
export function articlesInCategory(id: HelpCategoryId): readonly HelpArticle[] {
  return helpArticles.filter((article) => article.category === id);
}

/** Categories paired with their articles — what the hub and the sitemap iterate. */
export const helpCategoryIndex = helpCategories.map((category) => ({
  category,
  articles: articlesInCategory(category.id),
}));

/**
 * The shortcut row at the top of the hub — one curated, ordered, deliberately
 * short list.
 *
 * This was originally a `popular?: boolean` on the article itself, and it went
 * wrong in exactly the way a self-assigned flag does: 22 of 38 articles ended up
 * claiming it, so "Popular help topics" became eight rows of cards that buried
 * the actual topic grid beneath it. A row that contains most of the site tells a
 * reader nothing.
 *
 * Keeping the list here, rather than as a flag an article can set about itself,
 * means adding an article can never quietly inflate the hub — promoting one is a
 * deliberate edit to this line, and something has to come off it.
 *
 * Six entries, spanning six different categories: what it is, first use, the
 * core habit, getting video out, the one that prevents heartbreak, and the most
 * common billing problem.
 */
const POPULAR_SLUGS = [
  "what-is-videflo",
  "create-your-first-tape",
  "continue-recording-a-tape",
  "prepare-and-export-a-tape",
  "backups-and-new-iphone",
  "restore-purchases",
] as const;

export const popularArticles: readonly HelpArticle[] = POPULAR_SLUGS.map(
  (slug) => {
    const article = bySlug.get(slug);
    if (!article) {
      throw new Error(
        `POPULAR_SLUGS names an article that doesn't exist: ${slug}`,
      );
    }
    return article;
  },
);

/**
 * What to read next.
 *
 * An article's own `related` list wins. Where it falls short — or was left out
 * entirely — siblings from the same category fill the gap, so no article is ever
 * a dead end, however new it is.
 */
export function relatedArticles(article: HelpArticle, limit = 3) {
  const picked: HelpArticle[] = [];
  const seen = new Set<string>([article.slug]);

  const add = (candidate: HelpArticle | undefined) => {
    if (!candidate || seen.has(candidate.slug) || picked.length >= limit)
      return;
    seen.add(candidate.slug);
    picked.push(candidate);
  };

  for (const slug of article.related ?? []) add(bySlug.get(slug));
  for (const sibling of articlesInCategory(article.category)) add(sibling);

  return picked;
}

/* -------------------------------------------------------------------------
 * Search
 * ---------------------------------------------------------------------- */

/**
 * One searchable record per article.
 *
 * `haystack` is every word of the article — headings, steps, tips, mistakes,
 * troubleshooting, and FAQ answers — flattened and lower-cased once here, at
 * build time, so the browser never re-walks the content while someone types.
 *
 * It is deliberately built from the same objects the page renders. A keyword
 * list maintained beside the prose would drift the first time a sentence
 * changed; this cannot.
 */
export type HelpSearchDoc = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryId: HelpCategoryId;
  haystack: string;
  /**
   * Stemmed word lists for the title and description, precomputed here so the
   * browser doesn't re-tokenise 38 articles on every keystroke. Ranking only —
   * whether an article matches at all is decided by `haystack`.
   */
  titleStems: readonly string[];
  descriptionStems: readonly string[];
};

function blockText(block: HelpBlock): string[] {
  switch (block.kind) {
    case "text":
      return [block.text];
    case "list":
      return [...block.items];
    case "steps":
      return block.steps.flatMap((step) =>
        step.detail ? [step.title, step.detail] : [step.title],
      );
    case "note":
    case "warning":
      return block.title ? [block.title, ...block.text] : [...block.text];
    case "definitions":
      return block.items.flatMap((item) => [item.term, item.description]);
    case "appStore":
      // Renders a component rather than prose — nothing to index.
      return [];
  }
}

function articleText(article: HelpArticle): string {
  const parts: string[] = [
    article.title,
    article.description,
    ...article.keywords,
    ...article.overview,
  ];

  for (const section of article.sections ?? []) {
    parts.push(section.heading);
    for (const block of section.blocks) parts.push(...blockText(block));
  }

  parts.push(...(article.tips ?? []));

  for (const pitfall of article.pitfalls ?? []) {
    parts.push(pitfall.mistake, pitfall.fix);
  }

  for (const fix of article.troubleshooting ?? []) {
    parts.push(fix.problem, ...fix.solutions);
  }

  for (const faq of article.faqs ?? []) {
    parts.push(faq.question, ...faq.answer);
  }

  // `**` is the only markup allowed in article strings; stripping it here means
  // searching for "Continue Recording" matches "**Continue Recording**".
  return parts.join(" ").replaceAll("*", "").toLowerCase();
}

export const helpSearchIndex: readonly HelpSearchDoc[] = helpArticles.map(
  (article) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: getCategory(article.category).title,
    categoryId: article.category,
    haystack: articleText(article),
    titleStems: stemTokens(article.title),
    descriptionStems: stemTokens(article.description),
  }),
);

/* -------------------------------------------------------------------------
 * Build-time consistency checks
 * ---------------------------------------------------------------------- */

function assertConsistent() {
  const seen = new Set<string>();

  for (const article of helpArticles) {
    if (seen.has(article.slug)) {
      throw new Error(`Duplicate help article slug: "${article.slug}"`);
    }
    seen.add(article.slug);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
      throw new Error(
        `Help article slug must be lowercase and hyphenated: "${article.slug}"`,
      );
    }

    // Throws on an unknown id, so a typo'd category can't reach a page.
    getCategory(article.category);
  }

  for (const article of helpArticles) {
    for (const slug of article.related ?? []) {
      if (!seen.has(slug)) {
        throw new Error(
          `Help article "${article.slug}" links to unknown related article "${slug}"`,
        );
      }
    }
  }

  for (const item of helpFaq) {
    if (item.article && !seen.has(item.article)) {
      throw new Error(
        `Help FAQ "${item.question}" links to unknown article "${item.article}"`,
      );
    }
  }

  for (const { category, articles } of helpCategoryIndex) {
    if (articles.length === 0) {
      throw new Error(
        `Help category "${category.id}" has no articles — it would render as an empty card.`,
      );
    }
  }
}

assertConsistent();
