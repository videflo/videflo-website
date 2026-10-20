import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/** The quiet, sincere section. Deliberately restrained — no CTA, no ornament. */
export function TheIdea() {
  return (
    <Section id="the-idea" tone="cream" labelledBy="the-idea-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2
                id="the-idea-heading"
                className="font-display text-display-lg text-ink font-bold"
              >
                Life doesn&rsquo;t happen in highlight reels.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lead text-ink-muted mt-7">
                It happens in birthdays, road trips, ordinary mornings, family
                dinners, laughter, and moments you don&rsquo;t realize
                you&rsquo;ll miss until later.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-lead text-ink-soft mt-5">
                Videflo helps you keep those moments together.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-7">
            <figure>
              <div className="bg-shell shadow-soft ring-line relative aspect-[3/2] w-full overflow-hidden rounded-3xl ring-1">
                <Image
                  src="/images/onboarding/scattered-clips.jpg"
                  alt="Small printed video stills from many different moments, scattered loosely across a cream tabletop."
                  fill
                  sizes="(min-width: 1024px) 660px, (min-width: 640px) 92vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-ink-faint mt-4 text-sm">
                Without somewhere to keep them, the moments scatter into a
                hundred short clips, out of order, in a camera roll nobody
                scrolls back through.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
