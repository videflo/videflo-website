import { RichText } from "@/components/help/RichText";
import { AppStoreButton, AppStoreNote } from "@/components/ui/AppStoreButton";
import type { HelpArticle, HelpBlock } from "@/content/help";

/**
 * Renders an article's structured content.
 *
 * Every article is laid out in the same order — overview, sections, tips,
 * mistakes, troubleshooting, FAQ — so a reader who has been here before always
 * knows where to look. A section with nothing in it is simply absent; there are
 * no empty headings.
 */

function Block({ block }: { block: HelpBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="text-ink-muted mt-5 text-[1.0625rem] leading-[1.75] first:mt-0">
          <RichText text={block.text} />
        </p>
      );

    case "list":
      return (
        <ul className="text-ink-muted marker:text-line-strong mt-5 flex list-disc flex-col gap-2.5 pl-5 text-[1.0625rem] leading-[1.7]">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="mt-6 flex flex-col gap-5">
          {block.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="border-line-strong text-ink-soft mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border text-[0.8125rem] font-semibold tabular-nums"
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="text-ink text-[1.0625rem] leading-[1.6]">
                  <RichText text={step.title} />
                </p>
                {step.detail ? (
                  <p className="text-ink-muted mt-1.5 text-[1rem] leading-[1.7]">
                    <RichText text={step.detail} />
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      );

    case "note":
    case "warning": {
      const isWarning = block.kind === "warning";
      return (
        <div
          className={
            isWarning
              ? "border-rec/35 bg-rec/6 mt-6 rounded-xl border-l-[3px] py-5 pr-5 pl-5 sm:pr-6"
              : "border-line-strong bg-cream mt-6 rounded-xl border p-5 sm:p-6"
          }
        >
          {block.title ? (
            <p className="font-display text-ink flex items-start gap-2.5 text-base font-semibold">
              {isWarning ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="text-rec mt-0.5 size-[1.125em] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 3.5 18 17H2Z" />
                  <path d="M10 8.5v3.5" />
                  <path d="M10 14.4h.01" />
                </svg>
              ) : null}
              {block.title}
            </p>
          ) : null}
          <div className={block.title ? "mt-2" : undefined}>
            {block.text.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-ink-soft mt-2.5 text-[1rem] leading-[1.7] first:mt-0"
              >
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      );
    }

    case "definitions":
      return (
        <dl className="border-line divide-line mt-6 flex flex-col divide-y border-y">
          {block.items.map((item) => (
            <div
              key={item.term}
              className="py-4 sm:grid sm:grid-cols-3 sm:gap-6"
            >
              <dt className="text-ink text-[1rem] font-semibold sm:col-span-1">
                <RichText text={item.term} />
              </dt>
              <dd className="text-ink-muted mt-1.5 text-[1rem] leading-[1.7] sm:col-span-2 sm:mt-0">
                <RichText text={item.description} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "appStore":
      return (
        <div className="mt-7 flex flex-col items-start gap-3">
          <AppStoreButton size="md" label="Download on the App Store" />
          <AppStoreNote />
        </div>
      );
  }
}

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="font-display text-ink scroll-mt-28 text-[1.375rem] font-semibold sm:text-[1.5rem]"
    >
      {children}
    </h2>
  );
}

/** The wrapper every top-level block of an article shares. */
function Part({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-line mt-12 border-t pt-9 first:mt-0 first:border-0 first:pt-0"
    >
      <SectionHeading id={id}>{heading}</SectionHeading>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function ArticleBody({ article }: { article: HelpArticle }) {
  return (
    <div>
      {/* Overview — deliberately not behind a heading. It's the opening of the
          article, and a reader shouldn't have to step past a label to reach it. */}
      <div className="border-line border-b pb-9">
        {article.overview.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-ink-soft mt-5 text-[1.125rem] leading-[1.75] first:mt-0"
          >
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      {article.sections?.map((section) => (
        <Part key={section.id} id={section.id} heading={section.heading}>
          {section.blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </Part>
      ))}

      {article.tips?.length ? (
        <Part id="tips" heading="Tips">
          <ul className="flex flex-col gap-3.5">
            {article.tips.map((tip) => (
              <li key={tip} className="flex gap-3.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="text-gold-deep mt-1 size-[1.0625rem] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2.8v1.4M4.9 4.9l1 1M2.8 10h1.4M15.1 4.9l-1 1M17.2 10h-1.4" />
                  <path d="M8 15.2h4M8.6 17.4h2.8" />
                  <path d="M7.2 12.6a3.6 3.6 0 1 1 5.6 0c-.5.6-.8 1.1-.9 1.6H8.1c-.1-.5-.4-1-.9-1.6Z" />
                </svg>
                <p className="text-ink-muted text-[1.0625rem] leading-[1.7]">
                  <RichText text={tip} />
                </p>
              </li>
            ))}
          </ul>
        </Part>
      ) : null}

      {article.pitfalls?.length ? (
        <Part id="common-mistakes" heading="Common mistakes">
          <ul className="flex flex-col gap-6">
            {article.pitfalls.map((pitfall) => (
              <li key={pitfall.mistake}>
                <p className="text-ink text-[1.0625rem] leading-[1.6] font-semibold">
                  <RichText text={pitfall.mistake} />
                </p>
                <p className="text-ink-muted border-line-strong mt-2 border-l-2 pl-4 text-[1.0625rem] leading-[1.7]">
                  <RichText text={pitfall.fix} />
                </p>
              </li>
            ))}
          </ul>
        </Part>
      ) : null}

      {article.troubleshooting?.length ? (
        <Part id="troubleshooting" heading="Troubleshooting">
          <div className="flex flex-col gap-8">
            {article.troubleshooting.map((fix) => (
              <div key={fix.problem}>
                <h3 className="font-display text-ink text-lg font-semibold">
                  <RichText text={fix.problem} />
                </h3>
                <ul className="text-ink-muted marker:text-line-strong mt-3 flex list-disc flex-col gap-2.5 pl-5 text-[1.0625rem] leading-[1.7]">
                  {fix.solutions.map((solution) => (
                    <li key={solution} className="pl-1">
                      <RichText text={solution} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Part>
      ) : null}

      {article.faqs?.length ? (
        <Part id="faq" heading="Frequently asked">
          {/*
            Native <details>: keyboard operable for free, no ARIA to get wrong,
            and every answer is in the HTML for search engines and Find-in-page.
          */}
          <div className="border-line border-t">
            {article.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-line border-b [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="font-display text-ink hover:text-gold-deep flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-semibold transition-colors sm:text-lg">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="border-line-strong text-ink-muted mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-transform duration-300 ease-out group-open:rotate-45"
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
                <div className="pb-6 sm:pr-12">
                  {faq.answer.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-ink-muted mt-3 text-[1.0625rem] leading-[1.75] first:mt-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </Part>
      ) : null}
    </div>
  );
}

/** The article's own sections, for the sidebar table of contents. */
export function articleOutline(article: HelpArticle) {
  const outline: { id: string; label: string }[] = [
    ...(article.sections ?? []).map((section) => ({
      id: section.id,
      label: section.heading,
    })),
  ];

  if (article.tips?.length) outline.push({ id: "tips", label: "Tips" });
  if (article.pitfalls?.length)
    outline.push({ id: "common-mistakes", label: "Common mistakes" });
  if (article.troubleshooting?.length)
    outline.push({ id: "troubleshooting", label: "Troubleshooting" });
  if (article.faqs?.length)
    outline.push({ id: "faq", label: "Frequently asked" });

  return outline;
}
