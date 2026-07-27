import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export type LegalSection = {
  /** Anchor id — keep stable, these get linked from elsewhere. */
  id: string;
  heading: string;
  content: ReactNode;
};

/**
 * Shared shell for the Privacy Policy and Terms of Service.
 *
 * Long-form legal reading: a comfortable measure, generous line height, real
 * body-copy size (never microscopic grey text), a stable anchor per section, and
 * a table of contents that becomes a sticky sidebar on wide screens.
 */
export function LegalPage({
  eyebrow = "Legal",
  title,
  summary,
  updated,
  sections,
}: {
  eyebrow?: string;
  title: string;
  /** One or two plain sentences orienting the reader before the legal text. */
  summary: ReactNode;
  updated: { display: string; iso: string };
  sections: readonly LegalSection[];
}) {
  return (
    <>
      <Section tone="shell" spacing="tight" className="pt-14 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="font-display text-display-lg text-ink mt-6 font-semibold">
              {title}
            </h1>
            <p className="text-lead text-ink-muted mt-6">{summary}</p>
            <p className="text-ink-faint mt-7 text-sm">
              Last updated{" "}
              <time
                dateTime={updated.iso}
                className="text-ink-soft font-semibold"
              >
                {updated.display}
              </time>
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="default">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <nav
              aria-labelledby="legal-toc-heading"
              className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            >
              <h2
                id="legal-toc-heading"
                className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
              >
                On this page
              </h2>
              <ol className="mt-5 flex flex-col gap-2.5">
                {sections.map((section, index) => (
                  <li key={section.id} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="text-ink-faint pt-0.5 text-xs tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${section.id}`}
                      className="text-ink-muted hover:text-ink text-sm leading-snug underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:decoration-current"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="lg:col-span-8">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="border-line scroll-mt-28 border-t pt-10 first:border-0 first:pt-0 [&:not(:first-child)]:mt-12"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-display-sm text-ink font-semibold"
                  >
                    <span
                      aria-hidden="true"
                      className="text-ink-faint mr-3 text-base font-medium tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="mt-5">{section.content}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
