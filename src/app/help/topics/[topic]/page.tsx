import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryIcon } from "@/components/help/CategoryIcon";
import { HelpBreadcrumbs, type Crumb } from "@/components/help/HelpBreadcrumbs";
import { ArticleRow, CategoryCard } from "@/components/help/HelpCards";
import { HelpSearch } from "@/components/help/HelpSearch";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import {
  articlesInCategory,
  helpCategories,
  helpCategoryIndex,
  type HelpCategory,
} from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

type Params = { topic: string };

export function generateStaticParams(): Params[] {
  return helpCategories.map((category) => ({ topic: category.id }));
}

export const dynamicParams = false;

/** Narrow a raw route segment to a real category, without casting. */
function findCategory(topic: string): HelpCategory | undefined {
  return helpCategories.find((category) => category.id === topic);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { topic } = await params;
  const category = findCategory(topic);
  if (!category) return { title: "Topic not found", robots: { index: false } };

  return pageMetadata({
    title: `${category.title} — Help`,
    description: category.description,
    path: `/help/topics/${category.id}`,
  });
}

function TopicStructuredData({
  category,
  slugs,
}: {
  category: HelpCategory;
  slugs: readonly string[];
}) {
  const url = `${site.url}/help/topics/${category.id}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: `${category.title} — ${site.name} Help`,
        description: category.description,
        isPartOf: { "@id": `${site.url}/#website` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Help Center",
            item: `${site.url}/help`,
          },
          { "@type": "ListItem", position: 3, name: category.title, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#articles`,
        itemListElement: slugs.map((slug, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/help/${slug}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default async function HelpTopicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { topic } = await params;
  const category = findCategory(topic);
  if (!category) notFound();

  const articles = articlesInCategory(category.id);
  const otherTopics = helpCategoryIndex.filter(
    (entry) => entry.category.id !== category.id,
  );

  const crumbs: Crumb[] = [
    { label: "Help Center", href: "/help" },
    { label: category.title },
  ];

  return (
    <>
      <TopicStructuredData
        category={category}
        slugs={articles.map((article) => article.slug)}
      />

      <Section
        tone="shell"
        spacing="tight"
        overflow="visible"
        className="pt-10 sm:pt-14"
      >
        <Container>
          <HelpBreadcrumbs crumbs={crumbs} />

          <div className="mt-7 max-w-3xl">
            <span className="bg-paper text-ink-soft border-line inline-grid size-12 place-items-center rounded-xl border">
              <CategoryIcon id={category.id} />
            </span>
            <h1 className="font-display text-display-md text-ink mt-6 font-semibold">
              {category.title}
            </h1>
            <p className="text-lead text-ink-muted mt-5">
              {category.description}
            </p>
          </div>

          <div className="relative z-20 mt-9 max-w-xl">
            <HelpSearch autoFocusHint={false} />
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="tight" labelledBy="articles-heading">
        <Container>
          <h2
            id="articles-heading"
            className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
          >
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </h2>

          <div className="mt-5 max-w-3xl">
            {articles.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream" spacing="tight" labelledBy="other-topics-heading">
        <Container>
          <h2
            id="other-topics-heading"
            className="font-display text-display-sm text-ink font-semibold"
          >
            Other topics
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherTopics.map((entry, index) => (
              <Reveal
                as="li"
                key={entry.category.id}
                delay={Math.min(index * 30, 180)}
              >
                <CategoryCard
                  category={entry.category}
                  count={entry.articles.length}
                />
              </Reveal>
            ))}
          </ul>

          <Link
            href="/help"
            className="text-ink hover:text-gold-deep mt-10 inline-flex items-center gap-2 text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4 transition-colors"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 10H5" />
              <path d="m9 6-4 4 4 4" />
            </svg>
            Back to the Help Center
          </Link>
        </Container>
      </Section>
    </>
  );
}
