import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function PrivacyPromise() {
  return (
    <Section id="privacy" tone="shell" labelledBy="privacy-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Privacy</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="privacy-heading"
                className="font-display text-display-lg text-ink mt-6 font-semibold"
              >
                Your memories are personal.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lead text-ink-muted mt-7">
                Your Tapes are recorded on your phone and protected in Videflo
                Cloud. Nobody sees a Tape unless you invite them to it, and
                Videflo has no ads, no trackers, and no interest in what you
                film.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                href="/privacy"
                className="text-ink hover:text-gold-deep mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold underline decoration-1 underline-offset-[6px] transition-colors"
              >
                Read the Privacy Policy
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
                  <path d="M4 10h11" />
                  <path d="M11 6l4 4-4 4" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-6">
            <ul className="border-line-strong bg-paper/70 flex flex-col gap-5 rounded-2xl border p-7 sm:p-8">
              {[
                {
                  title: "Private unless you share",
                  body: "A Tape is yours alone until you invite someone. Sharing is by name or by a link you send. There’s no feed, no followers, and nothing is ever public.",
                },
                {
                  title: "Sign in with Apple, nothing else",
                  body: "Videflo has no password of its own. Your email address is never shown to other people and can’t be used to find you.",
                },
                {
                  title: "Your originals stay yours",
                  body: "Videflo Cloud is a protective copy, never a replacement. The files on your phone are never edited, and you can delete a Tape everywhere in one step.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-ink text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted mt-1.5 text-[0.9375rem] leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
