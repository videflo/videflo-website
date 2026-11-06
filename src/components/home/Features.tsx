import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { subscription } from "@/config/site";
import { appScreens, type AppScreen } from "@/components/visuals/appScreens";
import { DeviceFrame } from "@/components/visuals/DeviceFrame";

const tapeFeatures = [
  {
    title: "Continuous recording",
    body: "Record inside Videflo, and every recording joins the same Tape.",
  },
  {
    title: "Continue Recording",
    body: "One tap takes you back into the Tape, ready to add the next moment.",
  },
  {
    title: "Tape playback",
    body: "Watch it from beginning to end instead of hunting through separate clips.",
  },
] as const;

const showcases: readonly {
  title: string;
  body: string;
  note?: string;
  screen: AppScreen;
  panel: string;
}[] = [
  {
    title: "Make memories together.",
    body: "Invite family and friends to a Shared Tape, and everyone's recordings come together in one place.",
    note: "Each person who adds recordings needs their own active Videflo subscription.",
    screen: appScreens.sharedTapes,
    panel: "bg-peach",
  },
  {
    title: "Your memories, organized.",
    body: "Your Tapes keeps every birthday, trip, and ordinary Tuesday where you can find it again.",
    screen: appScreens.yourTapes,
    panel: "bg-card ring-line ring-1",
  },
  {
    title: "Preserve what matters.",
    body: `Back up your Tapes to Videflo Cloud. Your subscription includes ${subscription.includedStorageLabel} of storage.`,
    screen: appScreens.cloud,
    panel: "bg-sky",
  },
];

export function Features() {
  return (
    <Section id="features" tone="cream" labelledBy="features-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Inside Videflo</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="features-heading"
              className="font-display text-display-lg text-ink mt-6 font-bold"
            >
              Made to keep the whole memory together.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="bg-shell mt-12 rounded-3xl p-6 sm:mt-16 sm:p-9">
            <Image
              src="/images/app-screens/filmstrip.jpg"
              alt="Videflo's timeline showing a Tape with two recordings joined from 0:01 to 0:10."
              width={1210}
              height={382}
              sizes="(min-width: 1280px) 1080px, 90vw"
              quality={82}
              className="h-auto w-full rounded-2xl"
            />
            <dl className="mt-7 grid gap-6 sm:mt-9 md:grid-cols-3">
              {tapeFeatures.map((feature) => (
                <div key={feature.title}>
                  <dt className="font-display text-ink text-xl font-bold">
                    {feature.title}
                  </dt>
                  <dd className="text-ink-muted mt-2 leading-relaxed">
                    {feature.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {showcases.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 70}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-3xl ${item.panel}`}
              >
                <div className="p-6 pb-7 sm:p-7">
                  <h3 className="font-display text-display-sm text-ink font-bold">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted mt-3 leading-relaxed">
                    {item.body}
                  </p>
                  {item.note ? (
                    <p className="text-ink-faint mt-3 text-sm leading-relaxed">
                      {item.note}
                    </p>
                  ) : null}
                </div>
                <div className="mt-auto h-[23rem] overflow-hidden px-[14%] md:h-[20rem] lg:h-[25rem]">
                  <DeviceFrame
                    screen={item.screen}
                    sizes="(min-width: 768px) 24vw, 72vw"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
