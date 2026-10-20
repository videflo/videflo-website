import Image from "next/image";
import type { CSSProperties } from "react";
import type { UseCase } from "@/content/use-cases";
import { cn } from "@/lib/cn";

/**
 * A single Tape tile, drawn as the app draws a Tape card (`TapeCard.swift`): a
 * cover on top, then the Tape's details in ink on the soft `card` surface, with
 * the 18pt card radius and a hairline edge.
 *
 * Until real lifestyle photography is supplied, each cover renders as a bright,
 * warm "still frame" built from the Tape's own palette — the palette washed
 * toward cream, a low sun, soft grain and a sprocket band — so the grid reads as
 * a shelf of home videos in the same light as the app's onboarding photography,
 * rather than a set of empty boxes.
 *
 * To use a photograph instead, add `image: { src, alt }` to the entry in
 * `src/content/use-cases.ts`. Nothing else has to change; see ASSETS.md.
 */
export function TapeFrame({
  tape,
  className,
  coverClassName,
  sizes,
}: {
  tape: UseCase;
  className?: string;
  /** Sizing for the cover alone, e.g. its aspect ratio on small screens. */
  coverClassName?: string;
  sizes?: string;
}) {
  const { mid, accent } = tape.palette;

  return (
    <figure
      className={cn(
        "group bg-card ring-line shadow-soft relative isolate flex flex-col overflow-hidden rounded-2xl ring-1",
        className,
      )}
      style={
        {
          "--tape-mid": mid,
          "--tape-accent": accent,
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "bg-shell relative min-h-40 flex-1 overflow-hidden",
          coverClassName,
        )}
      >
        {tape.image ? (
          <Image
            src={tape.image.src}
            alt={tape.image.alt}
            fill
            sizes={
              sizes ??
              "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            {/* Graded field: the Tape's accent, washed toward cream. */}
            <div className="absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_srgb,var(--tape-accent)_26%,#fdf6e8)_0%,color-mix(in_srgb,var(--tape-accent)_48%,#f6e7cb)_58%,color-mix(in_srgb,var(--tape-accent)_78%,#efd6a8)_115%)] transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]" />
            {/* A low, warm sun. */}
            <div className="absolute inset-0 bg-[radial-gradient(34%_30%_at_82%_18%,rgba(255,248,232,0.95),transparent_72%)]" />
            {/* Soft ground shadow, never a black vignette. */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_120%,color-mix(in_srgb,var(--tape-mid)_22%,transparent),transparent_60%)]" />
            <div className="grain-layer absolute inset-0 opacity-[0.08] mix-blend-multiply" />
            {/*
              Sprocket band along the top edge. One graphic device is what makes
              a cover read as a frame of film awaiting its photograph, rather
              than as an image that failed to load.
            */}
            <div className="absolute inset-x-0 top-0 h-5 bg-[color-mix(in_srgb,var(--tape-accent)_45%,transparent)]" />
            <div className="absolute inset-x-0 top-[0.4375rem] h-1.5 bg-[repeating-linear-gradient(90deg,transparent_0_0.375rem,rgba(255,250,240,0.7)_0.375rem_0.75rem)]" />
          </div>
        )}
      </div>

      <figcaption className="border-line relative border-t px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
        <span className="text-ink-muted flex items-center gap-2 text-[0.625rem] font-semibold tracking-[0.2em] uppercase tabular-nums">
          <span aria-hidden="true" className="bg-gold size-1.5 rounded-full" />
          {tape.date}
        </span>
        <h3 className="font-display text-ink mt-2 text-xl leading-tight font-semibold sm:text-[1.375rem]">
          {tape.name}
        </h3>
        {/*
          Two lines reserved at lg, where tiles in a row share a fixed height,
          so a one-line tagline does not move its cover's lower edge out of
          line with its neighbours'.
        */}
        <p className="text-ink-muted mt-1 max-w-[34ch] text-sm leading-relaxed lg:min-h-[2lh]">
          {tape.line}
        </p>
      </figcaption>
    </figure>
  );
}
