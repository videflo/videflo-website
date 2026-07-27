import Image from "next/image";
import type { CSSProperties } from "react";
import type { UseCase } from "@/content/use-cases";
import { cn } from "@/lib/cn";

/**
 * A single Tape tile.
 *
 * Until real lifestyle photography is supplied, each tile renders as a warm
 * duotone "still frame" built from the Tape's own palette — layered gradients, a
 * soft flare, film grain and a vignette — so the grid reads as a shelf of home
 * videos rather than a set of empty boxes.
 *
 * To use a photograph instead, add `image: { src, alt }` to the entry in
 * `src/content/use-cases.ts`. Nothing else has to change; see ASSETS.md.
 */
export function TapeFrame({
  tape,
  className,
  sizes,
}: {
  tape: UseCase;
  className?: string;
  sizes?: string;
}) {
  const { base, mid, accent } = tape.palette;

  return (
    <figure
      className={cn(
        "group bg-ink relative isolate flex flex-col justify-end overflow-hidden rounded-2xl",
        className,
      )}
      style={
        {
          "--tape-base": base,
          "--tape-mid": mid,
          "--tape-accent": accent,
        } as CSSProperties
      }
    >
      {tape.image ? (
        <Image
          src={tape.image.src}
          alt={tape.image.alt}
          fill
          sizes={
            sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="absolute inset-0 -z-10 object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* Graded field, dark corner to warm corner. */}
          <div className="absolute inset-0 bg-[linear-gradient(152deg,var(--tape-base)_0%,var(--tape-mid)_56%,var(--tape-accent)_142%)] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]" />
          {/* A single distant light source. */}
          <div className="absolute inset-0 bg-[radial-gradient(26%_20%_at_84%_16%,rgba(255,234,190,0.42),transparent_74%)]" />
          {/* Vignette — pulls the eye in and grounds the caption. */}
          <div className="absolute inset-0 bg-[radial-gradient(105%_78%_at_50%_108%,rgba(0,0,0,0.7),transparent_56%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_50%,transparent_36%,rgba(0,0,0,0.46)_100%)]" />
          <div className="grain-layer absolute inset-0 opacity-[0.13] mix-blend-overlay" />
          {/*
            Sprocket band along the top edge. One graphic device is what makes a
            tile read as a frame of film awaiting its photograph, rather than as
            an image that failed to load.
          */}
          <div className="absolute inset-x-0 top-0 h-5 bg-black/45" />
          <div className="absolute inset-x-0 top-[0.4375rem] h-1.5 bg-[repeating-linear-gradient(90deg,transparent_0_0.375rem,rgba(240,210,154,0.3)_0.375rem_0.75rem)]" />
          <div className="absolute inset-x-0 top-5 h-px bg-white/10" />
        </div>
      )}

      {/* Frame edge, so a tile always has a defined boundary on cream. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset"
      />

      {/* Legibility scrim under the label. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black/72 via-black/28 to-transparent"
      />

      <figcaption className="relative p-5 sm:p-6">
        <span className="text-paper/70 flex items-center gap-2 text-[0.625rem] font-semibold tracking-[0.2em] uppercase tabular-nums">
          <span aria-hidden="true" className="bg-gold size-1.5 rounded-full" />
          {tape.date}
        </span>
        <h3 className="font-display text-paper mt-2.5 text-xl leading-tight font-semibold sm:text-2xl">
          {tape.name}
        </h3>
        <p className="text-paper/80 mt-1.5 max-w-[26ch] text-sm leading-relaxed">
          {tape.line}
        </p>
      </figcaption>
    </figure>
  );
}
