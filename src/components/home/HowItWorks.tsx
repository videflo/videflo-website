import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { appScreens, type AppScreen } from "@/components/visuals/appScreens";
import { DeviceFrame } from "@/components/visuals/DeviceFrame";

const steps: readonly {
  title: string;
  body: string;
  screen: AppScreen;
  panel: string;
}[] = [
  {
    title: "Start a Tape.",
    body: "Name it for a birthday, a trip, or anything worth remembering, then press record.",
    screen: appScreens.recordingCandles,
    panel: "bg-card ring-line ring-1",
  },
  {
    title: "Keep adding memories.",
    body: "Come back days, months, or years later and continue the same Tape.",
    screen: appScreens.homeContinue,
    panel: "bg-peach",
  },
  {
    title: "Relive the story.",
    body: "Press play and every recording plays through as one continuous memory.",
    screen: appScreens.playback,
    panel: "bg-sky",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="shell" labelledBy="how-it-works-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>How Videflo works</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="how-it-works-heading"
              className="font-display text-display-lg text-ink mt-6 font-bold"
            >
              One memory. One growing Tape.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 70}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-3xl ${step.panel}`}
              >
                <div className="p-6 pb-7 sm:p-7">
                  <p className="text-coral text-sm font-bold tabular-nums">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display text-display-sm text-ink mt-2 font-bold">
                    {step.title}
                  </h3>
                  <p className="text-ink-muted mt-3 leading-relaxed">
                    {step.body}
                  </p>
                </div>
                <div className="mt-auto h-[23rem] overflow-hidden px-[14%] md:h-[20rem] lg:h-[25rem]">
                  <DeviceFrame
                    screen={step.screen}
                    sizes="(min-width: 768px) 24vw, 72vw"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
