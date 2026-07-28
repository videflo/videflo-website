import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody, articleOutline } from "@/components/help/ArticleBody";
import { CategoryIcon } from "@/components/help/CategoryIcon";
import { HelpBreadcrumbs, type Crumb } from "@/components/help/HelpBreadcrumbs";
import { ArticleRow } from "@/components/help/HelpCards";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/config/site";
import {
  getArticle,
  getCategory,
  helpArticles,
  relatedArticles,
  type HelpArticle,
} from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

type Params = { slug: string };

/** The contents list itself, shared by the collapsed mobile and open desktop renderings. */
function ArticleToc({
  outline,
  className,
}: {
  outline: readonly { id: string; label: string }[];
  className?: string;
}) {
  return (
    <ol className={`flex flex-col gap-2.5 ${className ?? ""}`}>
      {outline.map((entry, index) => (
        <li key={entry.id} className="flex gap-3">
          <span
            aria-hidden="true"
            className="text-ink-faint pt-0.5 text-xs tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <a
            href={`#${entry.id}`}
            className="text-ink-muted hover:text-ink text-sm leading-snug underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:decoration-current"
          >
            {entry.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

/**
 * One route serves every article, and the list of them comes from the content
 * registry — so publishing a new article is a content change alone. There is no
 * page file to add, no route to register, and nothing to remember.
 */
export function generateStaticParams(): Params[] {
  return helpArticles.map((article) => ({ slug: article.slug }));
}

/** Anything outside `generateStaticParams` is a genuine 404, not a stale build. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false } };

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/help/${article.slug}`,
  });
}

function ArticleStructuredData({ article }: { article: HelpArticle }) {
  const category = getCategory(article.category);
  const url = `${site.url}/help/${article.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "TechArticle",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.description,
      url,
      inLanguage: "en-US",
      isPartOf: { "@id": `${site.url}/#website` },
      publisher: { "@id": `${site.url}/#organization` },
      about: category.title,
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
        {
          "@type": "ListItem",
          position: 3,
          name: category.title,
          item: `${site.url}/help/topics/${category.id}`,
        },
        { "@type": "ListItem", position: 4, name: article.title, item: url },
      ],
    },
  ];

  // Only emitted when the article genuinely has questions on the page.
  if (article.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer.join(" ") },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const outline = articleOutline(article);
  const related = relatedArticles(article);

  const crumbs: Crumb[] = [
    { label: "Help Center", href: "/help" },
    { label: category.title, href: `/help/topics/${category.id}` },
    { label: article.title },
  ];

  return (
    <>
      <ArticleStructuredData article={article} />

      <Section tone="shell" spacing="tight" className="pt-10 sm:pt-14">
        <Container>
          <HelpBreadcrumbs crumbs={crumbs} />

          <div className="mt-7 max-w-3xl">
            <p className="text-ink-faint flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase">
              <CategoryIcon
                id={category.id}
                className="text-ink-faint size-4"
              />
              {category.title}
            </p>
            <h1 className="font-display text-display-md text-ink mt-5 font-semibold">
              {article.title}
            </h1>
            <p className="text-lead text-ink-muted mt-5">
              {article.description}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/*
              Sidebar.

              Below `lg` this is one collapsed row rather than the open list:
              expanded, an eight-entry contents pushed the article's first
              sentence roughly a screen and a half down a phone, so the reader
              met navigation where they expected the answer. Breadcrumbs sit
              directly above and already carry them back, so the mobile list is
              opt-in and the "All help topics" link — a third piece of
              navigation ahead of the content — is desktop-only.

              Two renderings rather than one element toggled by CSS: `<details>`
              cannot be reliably forced open at a breakpoint, and the headings
              carry different ids so nothing is duplicated.
            */}
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              {outline.length > 0 ? (
                <>
                  <details className="border-line bg-cream/40 group rounded-xl border px-4 lg:hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="text-ink-faint flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase">
                      On this page
                      <span
                        aria-hidden="true"
                        className="border-line-strong text-ink-muted grid size-6 shrink-0 place-items-center rounded-full border transition-transform duration-300 ease-out group-open:rotate-45"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="size-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <path d="M10 5v10" />
                          <path d="M5 10h10" />
                        </svg>
                      </span>
                    </summary>
                    <ArticleToc outline={outline} className="pt-1 pb-5" />
                  </details>

                  <nav
                    aria-labelledby="article-toc-heading"
                    className="hidden lg:block"
                  >
                    <h2
                      id="article-toc-heading"
                      className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
                    >
                      On this page
                    </h2>
                    <ArticleToc outline={outline} className="mt-5" />
                  </nav>
                </>
              ) : null}

              <div
                className={
                  outline.length > 0
                    ? "border-line mt-8 hidden border-t pt-8 lg:block"
                    : "hidden lg:block"
                }
              >
                <Link
                  href="/help"
                  className="text-ink-muted hover:text-ink inline-flex items-center gap-2 text-sm font-semibold transition-colors"
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
                  All help topics
                </Link>
              </div>
            </div>

            <article className="lg:col-span-8">
              <ArticleBody article={article} />

              {related.length > 0 ? (
                <section
                  aria-labelledby="related-heading"
                  className="border-line mt-14 border-t pt-9"
                >
                  <h2
                    id="related-heading"
                    className="font-display text-ink text-[1.375rem] font-semibold"
                  >
                    Related articles
                  </h2>
                  <div className="mt-4">
                    {related.map((item) => (
                      <ArticleRow key={item.slug} article={item} />
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="border-line bg-cream mt-12 rounded-2xl border p-6 sm:p-8">
                <h2 className="font-display text-ink text-lg font-semibold">
                  Did this answer your question?
                </h2>
                <p className="text-ink-muted mt-2 text-[1rem] leading-relaxed">
                  If not, write to us — a person reads every message. Please
                  include your iPhone model, your iOS version, and what you were
                  doing when the problem happened.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={`mailto:${contact.supportEmail}?subject=${encodeURIComponent(
                      `Help: ${article.title}`,
                    )}`}
                    className="bg-ink text-paper hover:bg-ink-soft inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[0.9375rem] font-semibold transition-colors"
                  >
                    Email support
                  </a>
                  <Link
                    href={`/help/topics/${category.id}`}
                    className="text-ink hover:text-gold-deep text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4 transition-colors"
                  >
                    More on {category.title}
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </>
  );
}
