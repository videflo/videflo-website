/**
 * The Help Center content model.
 *
 * Articles are **structured data, not JSX**. That is the load-bearing decision
 * behind this whole directory:
 *
 *  - the client-side search can index every word of every article without a
 *    parallel, hand-maintained keyword list going stale;
 *  - `HowTo` / `FAQPage` structured data is generated from the same words the
 *    visitor reads, so the two can never disagree;
 *  - a new article is a new object in an array. No layout work, no page file.
 *
 * The only markup allowed inside a string is `**emphasis**`, which the renderer
 * turns into `<strong>`. Use it for things the reader will look for on screen —
 * button names, setting names, tab names — and for nothing else.
 *
 * ACCURACY RULE (inherited from `src/content/faq.ts`, and the reason this file
 * exists at all): every sentence must describe Videflo as it actually behaves
 * today. Nothing here may promise cloud backup, accounts, sync, in-app sharing,
 * playback speed control, Android, or iPad.
 */

/** A topic in the Help Center. Categories are the top level of navigation. */
export type HelpCategoryId =
  | "getting-started"
  | "recording"
  | "tapes"
  | "collections"
  | "playback"
  | "exporting"
  | "storage"
  | "subscription"
  | "privacy"
  | "settings"
  | "troubleshooting";

export type HelpCategory = {
  id: HelpCategoryId;
  /** Shown on the category card and in breadcrumbs. */
  title: string;
  /** One friendly sentence describing what lives in here. */
  description: string;
};

/**
 * A block of article body content.
 *
 * `appStore` is the one block that renders a component rather than text: it
 * draws the shared download control, so the "coming soon" state stays driven by
 * `appStore.url` in `src/config/site.ts` instead of being written into an
 * article that would then be wrong the day the app ships.
 */
export type HelpBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: readonly string[] }
  | { kind: "steps"; steps: readonly HelpStep[] }
  | { kind: "note"; title?: string; text: readonly string[] }
  | { kind: "warning"; title?: string; text: readonly string[] }
  | { kind: "definitions"; items: readonly HelpDefinition[] }
  | { kind: "appStore" };

export type HelpStep = {
  /** The action itself — short, imperative: "Tap **Create Tape & Record**." */
  title: string;
  /** Optional extra sentence for anything the action alone doesn't explain. */
  detail?: string;
};

export type HelpDefinition = { term: string; description: string };

export type HelpSection = {
  /** Anchor id. Keep stable — these are linked to from other articles. */
  id: string;
  heading: string;
  blocks: readonly HelpBlock[];
};

export type HelpFaq = {
  question: string;
  /** One or more plain-text paragraphs. No markup — this feeds structured data. */
  answer: readonly string[];
};

/** A mistake people actually make, paired with what to do instead. */
export type HelpPitfall = { mistake: string; fix: string };

/** A symptom, and the things to try in the order worth trying them. */
export type HelpFix = { problem: string; solutions: readonly string[] };

export type HelpArticle = {
  /** URL segment. Stable forever once published — these get linked and bookmarked. */
  slug: string;
  title: string;
  /** One sentence. Card subtitle, search result, and the page meta description. */
  description: string;
  category: HelpCategoryId;
  /**
   * Extra search terms — words a person might type that don't appear in the
   * article itself ("crash", "won't work", "battery"). The body is indexed in
   * full, so never repeat words that are already in the text.
   */
  keywords: readonly string[];
  /** Two or three plain paragraphs answering "what is this and why do I care?". */
  overview: readonly string[];
  sections?: readonly HelpSection[];
  tips?: readonly string[];
  pitfalls?: readonly HelpPitfall[];
  troubleshooting?: readonly HelpFix[];
  faqs?: readonly HelpFaq[];
  /**
   * Slugs of articles worth reading next. Leave it out and the registry fills
   * in siblings from the same category, so an article is never a dead end.
   */
  related?: readonly string[];
};
