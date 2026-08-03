import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon } from "@/components/gate/ComingSoon";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { gate } from "@/config/gate";
import { primaryNav } from "@/config/site";

export const metadata: Metadata = gate.enabled
  ? {
      title: "Videflo — Coming Soon",
      description: "Videflo is coming soon.",
      robots: { index: false, follow: false },
    }
  : {
      title: "Page not found",
      description:
        "That page doesn’t exist — but your memories are still here.",
      robots: { index: false, follow: true },
    };

export default function NotFound() {
  /*
    Nothing reaches this page while the gate is up — `src/proxy.ts` rewrites
    unknown paths to the Coming Soon route before Next.js can 404 them. The
    branch exists for a different reason: the root layout serialises its
    `notFound` slot into the React flight payload of *every* page it renders, so
    without it the 404 copy below, and its links to `/privacy`, `/support` and
    `/help`, would ship inside the Coming Soon response itself.
  */
  if (gate.enabled) return <ComingSoon />;

  return (
    <div className="bg-cream">
      <Container>
        <div className="flex min-h-[68vh] flex-col justify-center py-24">
          <div className="max-w-2xl">
            <Eyebrow>Error 404</Eyebrow>
            <h1 className="font-display text-display-lg text-ink mt-6 font-semibold">
              This part of the Tape is missing.
            </h1>
            <p className="text-lead text-ink-muted mt-6">
              The page you were looking for isn&rsquo;t here. It may have moved,
              or the link may have been mistyped.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="bg-ink text-paper hover:bg-ink-soft inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.9375rem] font-semibold transition-colors"
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
                  <path d="M9 6l-4 4 4 4" />
                </svg>
                Back to Videflo
              </Link>
              <Link
                href="/support"
                className="text-ink hover:text-gold-deep text-[0.9375rem] font-semibold underline decoration-1 underline-offset-[6px] transition-colors"
              >
                Get support
              </Link>
            </div>

            <nav aria-label="Site sections" className="mt-14">
              <h2 className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase">
                Or try one of these
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-ink-muted decoration-line-strong hover:text-ink text-[0.9375rem] underline decoration-1 underline-offset-4 transition-colors hover:decoration-current"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
}
