import Link from "next/link";
import { HelpSearch } from "@/components/help/HelpSearch";
import { ArticleCard, CategoryCard } from "@/components/help/HelpCards";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/config/site";
import {
  getCategory,
  helpCategoryIndex,
  helpFaq,
  popularArticles,
} from "@/content/help";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Help Center",
  description:
    "Everything you need to capture, organize, and relive life’s memories with Videflo — guides for recording, Tapes, Collections, playback, exporting, storage, and subscriptions.",
  path: "/help",
});

/**
 * Structured data for the hub.
 *
 * Three graph nodes, all describing things a visitor can actually see on this
 * page: the page itself, the breadcrumb trail, and the FAQ. No ratings, no
 * counts, nothing invented — the same rule the homepage follows.
 */
function HubStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/help#page`,
        url: `${site.url}/help`,
        name: `Help Center — ${site.name}`,
        description:
          "Guides and answers for recording, organising, watching, and exporting your Tapes.",
        isPartOf: { "@id": `${site.url}/#website` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/help#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Help Center",
            item: `${site.url}/help`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/help#faq`,
        mainEntity: helpFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer.join(" ") },
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

export default function HelpCenterPage() {
  return (
    <>
      <HubStructuredData />

      {/*
        Hero. `overflow-visible` matters: the search results panel is positioned
        against this section and would otherwise be clipped by `Section`'s own
        `overflow-hidden`.
      */}
      <Section
        tone="shell"
        spacing="tight"
        overflow="visible"
        className="pt-14 sm:pt-20"
      >
        <Container>
          <div className="max-w-3xl">
            {/*
              Not "Help Center" — the eyebrow sits two lines above an <h1> that
              already says it, and reading the same words twice in a row is the
              one thing a label above a heading must not do. Every other page on
              the site pairs a categorising eyebrow with a different headline.
            */}
            <Eyebrow>Guides &amp; answers</Eyebrow>
            <h1 className="font-display text-display-lg text-ink mt-6 font-semibold">
              Help Center
            </h1>
            <p className="text-lead text-ink-muted mt-6">
              Everything you need to capture, organize, and relive life&rsquo;s
              memories with {site.name}.
            </p>
          </div>

          <div className="relative z-20 mt-10 max-w-2xl">
            <HelpSearch />
          </div>

          <p className="text-ink-faint mt-5 text-sm">
            New here? Start with{" "}
            <Link
              href="/help/what-is-videflo"
              className="text-ink-muted hover:text-ink font-medium underline decoration-1 underline-offset-4"
            >
              what a Tape is
            </Link>
            , then{" "}
            <Link
              href="/help/create-your-first-tape"
              className="text-ink-muted hover:text-ink font-medium underline decoration-1 underline-offset-4"
            >
              make your first one
            </Link>
            .
          </p>
        </Container>
      </Section>

      {popularArticles.length > 0 ? (
        <Section tone="paper" spacing="tight" labelledBy="popular-heading">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2
                  id="popular-heading"
                  className="font-display text-display-sm text-ink font-semibold"
                >
                  Popular help topics
                </h2>
                <p className="text-ink-faint text-sm">
                  The questions we&rsquo;re asked most
                </p>
              </div>
            </Reveal>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {popularArticles.map((article, index) => (
                <Reveal
                  as="li"
                  key={article.slug}
                  delay={Math.min(index * 40, 200)}
                >
                  <ArticleCard
                    article={article}
                    showCategory
                    categoryLabel={getCategory(article.category).title}
                  />
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section tone="cream" labelledBy="topics-heading">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Browse</Eyebrow>
              <h2
                id="topics-heading"
                className="font-display text-display-md text-ink mt-6 font-semibold"
              >
                Find it by topic
              </h2>
              <p className="text-ink-muted mt-5 text-[1.0625rem] leading-relaxed">
                {helpCategoryIndex.length} topics covering every part of{" "}
                {site.name} — from your very first Tape to what happens when you
                move to a new iPhone.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpCategoryIndex.map(({ category, articles }, index) => (
              <Reveal
                as="li"
                key={category.id}
                delay={Math.min(index * 30, 210)}
              >
                <CategoryCard category={category} count={articles.length} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="paper" labelledBy="faq-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Questions</Eyebrow>
              <h2
                id="faq-heading"
                className="font-display text-display-md text-ink mt-6 font-semibold"
              >
                Frequently asked
              </h2>
              <p className="text-ink-muted mt-5 text-[1.0625rem] leading-relaxed">
                The short answers. Each one links to the article that covers it
                properly.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-line border-t">
                {helpFaq.map((item) => (
                  <details
                    key={item.question}
                    className="group border-line border-b [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="font-display text-ink hover:text-gold-deep flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold transition-colors sm:text-xl">
                      {item.question}
                      <span
                        aria-hidden="true"
                        className="border-line-strong text-ink-muted mt-1 grid size-6 shrink-0 place-items-center rounded-full border transition-transform duration-300 ease-out group-open:rotate-45"
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
                    <div className="pb-7 sm:pr-12">
                      {item.answer.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 32)}
                          className="text-ink-muted mt-3 text-[1.0625rem] leading-[1.75] first:mt-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {item.article ? (
                        <Link
                          href={`/help/${item.article}`}
                          className="text-ink hover:text-gold-deep mt-4 inline-block text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4"
                        >
                          Read the full article
                        </Link>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="tight" labelledBy="still-stuck-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <h2
                id="still-stuck-heading"
                className="font-display text-display-sm text-paper font-semibold"
              >
                Still stuck? A person will read it.
              </h2>
              <p className="text-cream-muted mt-4 text-[1.0625rem] leading-relaxed">
                {site.name} is made by a very small team, and every message is
                answered by someone who works on the app. Tell us your iPhone
                model, your iOS version, and what you were doing — it helps more
                than you&rsquo;d think.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
              <a
                href={`mailto:${contact.supportEmail}`}
                className="bg-paper text-ink hover:bg-cream inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.9375rem] font-semibold transition-colors"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-[1.125em]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
                  <path d="m3.5 6 6.5 5 6.5-5" />
                </svg>
                Email {contact.supportEmail}
              </a>
              <Link
                href="/support"
                className="text-cream-muted hover:text-paper text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4 transition-colors"
              >
                More ways to get support
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
