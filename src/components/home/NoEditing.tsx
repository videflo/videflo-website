import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";

const highlights: readonly string[] = [
  "Record naturally, the way you already do",
  "Continue the same Tape later",
  "Keep moments in the order they happened",
  "Watch them back as one story",
];

export function NoEditing() {
  return (
    <Section id="no-editing" tone="cream" labelledBy="no-editing-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>No editing required</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="no-editing-heading"
                className="font-display text-display-lg text-ink mt-6 font-bold"
              >
                Be there. Don&rsquo;t edit there.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lead text-ink-muted mt-7 max-w-xl">
                Videflo is designed so you can focus on the moment instead of
                timelines, clips, transitions, and complicated editing tools.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-9 flex flex-col gap-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3.5">
                    <span
                      aria-hidden="true"
                      className="bg-gold mt-2 size-1.5 shrink-0 rounded-full"
                    />
                    <span className="text-ink text-[1.0625rem] leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-ink-faint mt-8 max-w-xl text-sm leading-relaxed">
                Videflo still does the technical work of joining your recordings
                into one Tape. You just never have to do it yourself.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-6">
            <PhoneMockup
              src="/images/onboarding/event-memory.jpg"
              alt="Videflo’s recording screen, filmed on a family at sunset."
              timestamp="Thu, Jul 09 2026 · 7:52 PM"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
