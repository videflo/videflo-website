import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TapeFlow, type FlowStep } from "@/components/visuals/TapeFlow";

const steps: readonly FlowStep[] = [
  {
    title: "Create a Tape",
    body: "Name it for a person, a season, a trip, a celebration — whatever this memory is.",
  },
  {
    title: "Record a moment",
    body: "Open Videflo and record as it happens. That first recording starts the Tape.",
  },
  {
    title: "Return and record again",
    body: "Days or months later, continue the same Tape. Every recording joins the story.",
  },
  {
    title: "Watch one continuous memory",
    body: "Press play and the whole Tape plays through, beginning to end, in order.",
  },
];

export function WhatIsATape() {
  return (
    <Section id="how-it-works" tone="cream" labelledBy="how-it-works-heading">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="how-it-works-heading"
              className="font-display text-display-lg text-ink mt-6 font-semibold"
            >
              One memory. One growing Tape.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lead text-ink-muted mt-7">
              Start a Tape for a person, season, trip, celebration, or chapter
              of life. Record whenever the moment happens. Videflo keeps every
              recording together as one continuous story.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-18">
          <TapeFlow steps={steps} />
        </div>

        <Reveal className="mt-16 sm:mt-20">
          <figure>
            <div className="bg-ink shadow-soft relative aspect-[3/2] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
              <Image
                src="/images/tape-filmstrip.jpg"
                alt="A strip of film frames from one family holiday, laid out in order along a single timeline."
                fill
                sizes="(min-width: 1280px) 1152px, (min-width: 640px) 92vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-ink-muted mt-5 max-w-2xl text-[0.9375rem] leading-relaxed">
              And you&rsquo;re never limited to one. Keep a Tape for each child,
              each holiday, each season — as many as you have memories worth
              keeping.
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
