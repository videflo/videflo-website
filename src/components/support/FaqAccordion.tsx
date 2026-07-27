import Link from "next/link";
import { faq } from "@/content/faq";

/**
 * FAQ list built on native `<details>` / `<summary>`.
 *
 * No JavaScript, no ARIA to get wrong, keyboard operable for free, and every
 * answer is present in the HTML for search engines and for Find-in-page.
 */
export function FaqAccordion() {
  return (
    <div className="border-line border-t">
      {faq.map((item) => (
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

            {item.link ? (
              item.link.external ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-gold-deep mt-4 inline-block text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4"
                >
                  {item.link.label}
                </a>
              ) : (
                <Link
                  href={item.link.href}
                  className="text-ink hover:text-gold-deep mt-4 inline-block text-[0.9375rem] font-semibold underline decoration-1 underline-offset-4"
                >
                  {item.link.label}
                </Link>
              )
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
