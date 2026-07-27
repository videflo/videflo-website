import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The core product diagram: separate recordings, captured days apart, resolving
 * into one continuous Tape.
 *
 * Entirely CSS — no icons, no images, no library. The steps below it are a real
 * ordered list, so the sequence survives with images off and reads correctly to
 * a screen reader.
 */

type Moment = {
  label: string;
  when: string;
  /** Share of the finished Tape's timeline, in percent. Must total 100. */
  share: number;
  palette: { base: string; accent: string };
};

const moments: readonly Moment[] = [
  {
    label: "Arriving",
    when: "Sat",
    share: 24,
    palette: { base: "#2a221c", accent: "#c98f52" },
  },
  {
    label: "The beach",
    when: "Sun",
    share: 19,
    palette: { base: "#232a28", accent: "#d9ab5f" },
  },
  {
    label: "Birthday dinner",
    when: "Tue",
    share: 33,
    palette: { base: "#2c211f", accent: "#c2704d" },
  },
  {
    label: "Last sunset",
    when: "Thu",
    share: 24,
    palette: { base: "#241f1d", accent: "#e6b85c" },
  },
];

export type FlowStep = { title: string; body: string };

export function TapeFlow({ steps }: { steps: readonly FlowStep[] }) {
  return (
    <div>
      <Reveal className="bg-ink shadow-lift relative overflow-hidden rounded-3xl p-6 sm:p-9 lg:p-11">
        <div
          aria-hidden="true"
          className="grain-layer absolute inset-0 opacity-[0.05] mix-blend-overlay"
        />

        <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="font-display text-paper text-xl font-semibold sm:text-2xl">
            Summer Vacation
          </p>
          <p className="text-cream-faint text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
            Four recordings · one Tape
          </p>
        </div>

        {/* Individual recordings */}
        <ul
          aria-hidden="true"
          className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {moments.map((moment) => (
            <li key={moment.label}>
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
                style={
                  {
                    backgroundImage: `linear-gradient(156deg, ${moment.palette.base} 8%, ${moment.palette.accent} 132%)`,
                  } as CSSProperties
                }
              >
                <div className="absolute inset-0 bg-[radial-gradient(32%_26%_at_80%_14%,rgba(255,236,196,0.55),transparent_72%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_110%,rgba(0,0,0,0.6),transparent_58%)]" />
                <div className="grain-layer absolute inset-0 opacity-[0.13] mix-blend-overlay" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset" />
                <span className="text-paper/85 absolute bottom-2 left-2.5 text-[0.625rem] font-semibold tracking-[0.14em] uppercase">
                  {moment.when}
                </span>
              </div>
              <p className="text-cream-muted mt-2 text-xs">{moment.label}</p>
            </li>
          ))}
        </ul>

        {/* The joined timeline */}
        <div className="relative mt-9">
          <p className="text-cream-faint text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
            Plays as one memory
          </p>
          <div
            aria-hidden="true"
            className="bg-ink-raised mt-3 flex h-3 w-full gap-px overflow-hidden rounded-full"
          >
            {moments.map((moment) => (
              <span
                key={moment.label}
                className="h-full"
                style={{
                  width: `${moment.share}%`,
                  backgroundImage: `linear-gradient(90deg, ${moment.palette.base}, ${moment.palette.accent})`,
                }}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="text-cream-faint mt-2 flex justify-between text-[0.625rem] tabular-nums"
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
              <span className="bg-ink text-gold grid size-7 shrink-0 place-items-center rounded-full text-[0.6875rem] font-semibold tabular-nums">
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
