import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The core product diagram: separate recordings, captured days apart, resolving
 * into one continuous Tape.
 *
 * Each recording shows a frame from the same fictional family's vacation (the
 * family on the Summer Vacation Tape card), generated for Videflo; see
 * ASSETS.md. The palette gradient sits beneath each photo while it loads and
 * still colours the joined timeline. The steps below are a real ordered list,
 * so the sequence reads correctly to a screen reader.
 */

type Moment = {
  label: string;
  when: string;
  /** Share of the finished Tape's timeline, in percent. Must total 100. */
  share: number;
  palette: { base: string; accent: string };
  image: { src: string; alt: string; position?: string };
};

const moments: readonly Moment[] = [
  {
    label: "Arriving",
    when: "Sat",
    share: 24,
    palette: { base: "#2a221c", accent: "#c98f52" },
    image: {
      src: "/images/tapes/summer-vacation/1-arriving.jpg",
      alt: "A family arriving on vacation, the parents walking up a sandy path with a suitcase and beach bag as their two children run ahead toward a yellow beach cottage.",
      position: "50% 55%",
    },
  },
  {
    label: "The beach",
    when: "Sun",
    share: 19,
    palette: { base: "#232a28", accent: "#d9ab5f" },
    image: {
      src: "/images/tapes/summer-vacation/2-the-beach.jpg",
      alt: "The same family laughing as they build a sandcastle together at the water's edge on a sunny morning.",
      position: "50% 50%",
    },
  },
  {
    label: "Birthday dinner",
    when: "Tue",
    share: 33,
    palette: { base: "#2c211f", accent: "#c2704d" },
    image: {
      src: "/images/tapes/summer-vacation/3-birthday-dinner.jpg",
      alt: "The same family at a seaside terrace table at dusk under string lights, a little girl gasping with delight at the candles on her birthday cake.",
      position: "50% 55%",
    },
  },
  {
    label: "Last sunset",
    when: "Thu",
    share: 24,
    palette: { base: "#241f1d", accent: "#e6b85c" },
    image: {
      src: "/images/tapes/summer-vacation/4-last-sunset.jpg",
      alt: "The same family sitting close together on a blanket on the sand, smiling as they watch the sun set over the ocean.",
      position: "55% 50%",
    },
  },
];

export type FlowStep = { title: string; body: string };

export function TapeFlow({ steps }: { steps: readonly FlowStep[] }) {
  return (
    <div>
      {/*
        Drawn on the app's `card` surface, as its onboarding draws the player
        and filmstrip on cream, rather than the dark theater.
      */}
      <Reveal className="bg-card ring-line shadow-soft relative overflow-hidden rounded-3xl p-6 ring-1 sm:p-9 lg:p-11">
        <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="font-display text-ink text-xl font-semibold sm:text-2xl">
            Summer Vacation
          </p>
          <p className="text-ink-muted text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
            Four recordings · one Tape
          </p>
        </div>

        {/* Individual recordings */}
        <ul className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {moments.map((moment) => (
            <li key={moment.label}>
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
                style={
                  {
                    backgroundImage: `linear-gradient(156deg, color-mix(in srgb, ${moment.palette.accent} 30%, #fbf3e2) 0%, color-mix(in srgb, ${moment.palette.accent} 75%, #f1e4cc) 120%)`,
                  } as CSSProperties
                }
              >
                <Image
                  src={moment.image.src}
                  alt={moment.image.alt}
                  fill
                  sizes="(min-width: 640px) 240px, 45vw"
                  style={{ objectPosition: moment.image.position }}
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="ring-line absolute inset-0 rounded-xl ring-1 ring-inset"
                />
                {/* A cream label with a soft shadow stays readable on any photo. */}
                <span className="bg-card/90 text-ink absolute bottom-2 left-2 rounded-md px-1.5 py-0.5 text-[0.625rem] font-semibold tracking-[0.14em] uppercase shadow-sm">
                  {moment.when}
                </span>
              </div>
              <p className="text-ink-muted mt-2 text-xs">{moment.label}</p>
            </li>
          ))}
        </ul>

        {/* The joined timeline */}
        <div className="relative mt-9">
          <p className="text-ink-muted text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
            Plays as one memory
          </p>
          <div
            aria-hidden="true"
            className="bg-shell mt-3 flex h-3 w-full gap-px overflow-hidden rounded-full"
          >
            {moments.map((moment) => (
              <span
                key={moment.label}
                className="h-full"
                style={{
                  width: `${moment.share}%`,
                  backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${moment.palette.accent} 45%, #f4e3c2), ${moment.palette.accent})`,
                }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="text-ink-faint mt-2 flex justify-between text-[0.625rem] tabular-nums"
          >
            <span>0:00</span>
            <span>12:41</span>
          </div>
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 70}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <span className="bg-gold text-on-gold grid size-7 shrink-0 place-items-center rounded-full text-[0.6875rem] font-semibold tabular-nums">
                {index + 1}
              </span>
              <span aria-hidden="true" className="bg-line-strong h-px flex-1" />
            </div>
            {/*
              A fixed heading box at lg so a two-line title (step four) does not
              push its body copy out of line with the other three.
            */}
            <h3 className="font-display text-ink mt-4 text-lg font-semibold lg:min-h-14">
              {step.title}
            </h3>
            <p className="text-ink-muted mt-2 text-[0.9375rem] leading-relaxed">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
