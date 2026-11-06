import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { subscription } from "@/config/site";
import { appScreens, type AppScreen } from "@/components/visuals/appScreens";
import { DeviceFrame } from "@/components/visuals/DeviceFrame";

/**
 * The homepage's trust details, in one place. Everything here must be true of
 * the app today. Export is worded for "your Tapes" because only a Shared Tape's
 * owner may export it.
 */
const assurances: readonly {
  title: string;
  body: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "Private unless you share",
    body: "A Tape is yours alone until you invite someone. No feed, no followers, no ads, and no trackers.",
    link: { href: "/privacy", label: "Read the Privacy Policy" },
  },
  {
    title: "Your originals stay yours",
    body: "Videflo Cloud is a protective copy, never a replacement. The files on your phone are never edited, and you can delete a Tape everywhere in one step.",
  },
  {
    title: "Export anytime",
    body: "Save your Tapes to Photos as one finished video whenever you want to keep them elsewhere.",
  },
];

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
    // `why-videflo` is the target of the header and footer "Why Videflo" links.
    <Section id="why-videflo" tone="cream" labelledBy="features-heading">
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
            <p className="text-ink-muted mt-6 leading-relaxed sm:mt-7">
              No clips to arrange. Press record, and the Tape grows on its own.
            </p>
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

        <Reveal delay={80}>
          <div id="privacy" className="bg-shell mt-5 rounded-3xl p-6 sm:p-9">
            <dl className="grid gap-6 md:grid-cols-3">
              {assurances.map((item) => (
                <div key={item.title}>
                  <dt className="font-display text-ink text-xl font-bold">
                    {item.title}
                  </dt>
                  <dd className="text-ink-muted mt-2 leading-relaxed">
                    {item.body}
                    {item.link ? (
                      <>
                        {" "}
                        <Link
                          href={item.link.href}
                          className="text-ink font-semibold underline decoration-1 underline-offset-4"
                        >
                          {item.link.label}
                        </Link>
                      </>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>

            {/*
              Required caveat: Videflo Cloud is a protective copy, not a
              guarantee, and a recording made with backup switched off — or
              interrupted before its upload finished — exists on one phone only.
              Do not remove or soften this without owner sign-off.
            */}
            <p className="text-ink-faint border-line mt-7 border-t pt-6 text-sm leading-relaxed sm:mt-9">
              One honest note: Videflo Cloud protects a recording once its
              upload has finished, and only while backup is switched on. Until
              then a recording exists on your phone alone. Keep a device backup
              too, and export the Tapes you couldn&rsquo;t replace.{" "}
              <Link
                href="/support#storage"
                className="text-ink font-semibold underline decoration-1 underline-offset-4"
              >
                How Videflo keeps your Tapes safe
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
