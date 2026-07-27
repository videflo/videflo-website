import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * The Videflo wordmark, matched to the app's launch screen.
 *
 * The app draws it in the system sans at semibold — `vide` in `textPrimary`
 * (#F5F4F1) and `flo` in `accent` (#E6B85C) — over a widely-spaced
 * `L I F E   I N   T A P E S`. This reproduces that treatment rather than the
 * site's editorial serif, so the header reads as the same brand as the app the
 * visitor is about to download.
 *
 * Two deliberate departures, both forced by the medium:
 *
 *  - **The accent on light surfaces.** The app only ever shows the mark on
 *    near-black, where #E6B85C reads bright and clean. On cream it goes faint, so
 *    light surfaces use `gold-mark` — the app's own `accentDeep`, the dark end of
 *    its gold gradient. Charcoal surfaces get the app's exact gold.
 *  - **The subtitle size.** The app's 44/13pt ratio would put the subtitle near
 *    7px here. Tracked uppercase needs ~10px to stay readable, so the proportion
 *    is relaxed while the character of the line is kept.
 */
export function Wordmark({
  tone = "light",
  className,
  withIcon = false,
  withSubtitle = false,
}: {
  /** Surface the mark sits on. */
  tone?: "light" | "dark";
  className?: string;
  /** Shows the app icon to the left of the mark. */
  withIcon?: boolean;
  /** Adds the "LIFE IN TAPES" line beneath, as on the app launch screen. */
  withSubtitle?: boolean;
}) {
  const mark = (
    <span className="inline-flex flex-col items-start">
      {/*
        `font-sans` and `font-semibold` are the point of this block — they are
        what matches the app's system-font wordmark. Do not switch this to
        `font-display`.
      */}
      <span
        className={cn(
          "font-sans text-[1.375rem] leading-none font-semibold tracking-[-0.01em] sm:text-[1.5rem]",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        vide
        <span className={tone === "dark" ? "text-gold" : "text-gold-mark"}>
          flo
        </span>
      </span>
      {withSubtitle ? (
        <span
          className={cn(
            "mt-2 font-sans text-[0.625rem] leading-none font-semibold tracking-[0.34em] uppercase",
            tone === "dark" ? "text-cream-faint" : "text-ink-faint",
          )}
        >
          Life in Tapes
        </span>
      ) : null}
    </span>
  );

  if (!withIcon) {
    return (
      <span className={cn("inline-flex flex-col items-start", className)}>
        {mark}
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/*
        The icon source is full-bleed square artwork, exactly as iOS receives it,
        so the rounded corner has to be applied here. 22.37% is Apple's ratio for
        the app-icon mask; as a percentage it stays correct at any rendered size.
      */}
      <Image
        src="/brand/videflo-app-icon.png"
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        className={cn(
          "size-9 shrink-0 rounded-[22.37%]",
          tone === "dark" ? "ring-1 ring-white/10" : "ring-1 ring-black/5",
        )}
      />
      {mark}
    </span>
  );
}
