"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { appStore, googlePlay, socials } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonStyles } from "./buttonStyles";
import { SocialIcons } from "./SocialIcons";

/**
 * The single download call to action used everywhere on the site.
 *
 * Driven entirely by `appStore.url` and `googlePlay.url` in
 * `src/config/site.ts`, each set by hand and independently:
 *
 *  1. A store's `url` is set → a real external link to that store. A store
 *                              without a `url` never gets a button.
 *  2. Neither is set         → "Coming Soon to the App Store & Google Play".
 *                              Depending on `fallback` it either points the
 *                              visitor at the social icons `AppStoreNote` draws
 *                              beneath it (`"notice"`: brought into view,
 *                              briefly lit in gold, and focused), or links to
 *                              the download section of the homepage
 *                              (`"section"`, used in the header).
 *
 * Nothing watches App Review or Google Play review. There is deliberately no
 * `href="#"` anywhere: a visitor never activates something that silently goes
 * nowhere.
 */

type Size = "lg" | "md" | "sm";
type Variant = "primary" | "secondary";

/** The stores that are publicly available, in the order they launch. */
const liveStores = [appStore, googlePlay].flatMap((store) =>
  store.url ? [{ url: store.url, label: store.downloadLabel }] : [],
);

const sizes: Record<Size, string> = {
  lg: "px-7 py-4 text-[0.9375rem] gap-3",
  md: "px-6 py-3.5 text-[0.9375rem] gap-2.5",
  sm: "px-4 py-2.5 text-[0.8125rem] gap-2",
};

function DownloadGlyph() {
  // Generic download glyph. The official "Download on the App Store" and
  // "Get it on Google Play" badges should replace this — see ASSETS.md.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-[1.125em] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3v9.5" />
      <path d="M6.25 9.25 10 13l3.75-3.75" />
      <path d="M4 15.5h12" />
    </svg>
  );
}

export function AppStoreButton({
  size = "md",
  variant = "primary",
  label,
  fallback = "notice",
  className,
}: {
  size?: Size;
  variant?: Variant;
  /** Replaces the store's own label, but only while one store is live. */
  label?: string;
  fallback?: "notice" | "section";
  className?: string;
}) {
  const shared = cn(
    "inline-flex items-center justify-center",
    sizes[size],
    buttonStyles[variant],
    className,
  );

  if (liveStores.length === 1) {
    const [store] = liveStores;
    return (
      <a
        href={store.url}
        target="_blank"
        rel="noopener noreferrer"
        className={shared}
      >
        <DownloadGlyph />
        {label ?? store.label}
      </a>
    );
  }

  if (liveStores.length > 1) {
    // In the header, one button leads to the homepage section that has both.
    if (fallback === "section") {
      return (
        <Link href="/#download" className={shared}>
          {label ?? "Download"}
        </Link>
      );
    }
    return (
      <div className="flex flex-wrap gap-3">
        {liveStores.map((store) => (
          <a
            key={store.url}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className={shared}
          >
            <DownloadGlyph />
            {store.label}
          </a>
        ))}
      </div>
    );
  }

  // The full pre-launch label wraps on a phone; keep it centred and even.
  const comingSoon = cn(shared, "text-center text-balance");

  if (fallback === "section") {
    return (
      <Link href="/#download" className={comingSoon}>
        {size === "sm"
          ? appStore.comingSoonShortLabel
          : appStore.comingSoonLabel}
      </Link>
    );
  }

  return (
    <Link href="/#download" onClick={showFollowRow} className={comingSoon}>
      {appStore.comingSoonLabel}
    </Link>
  );
}

/**
 * Bring the follow row that sits with this button into view and light it up
 * for a moment, moving focus to its first icon so keyboard and screen-reader
 * users land where the visual cue points. Every caller renders the button and
 * `AppStoreNote` in one wrapper; if a row isn't there the link simply goes to
 * the homepage's download section, which has one.
 */
function showFollowRow(event: MouseEvent<HTMLAnchorElement>) {
  const row =
    event.currentTarget.parentElement?.querySelector<HTMLElement>(
      "[data-follow-row]",
    );
  if (!row) return;
  event.preventDefault();

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { top, bottom } = row.getBoundingClientRect();
  if (top < 0 || bottom > innerHeight) {
    row.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }
  row.querySelector("a")?.focus({ preventScroll: true });

  row.dataset.highlight = "true";
  window.clearTimeout(Number(row.dataset.highlightTimer));
  row.dataset.highlightTimer = String(
    window.setTimeout(() => delete row.dataset.highlight, 1600),
  );
}

/**
 * The lines beneath a download button. Before launch they say iPhone comes
 * first and invite visitors to follow Videflo, with the social icons beneath.
 * While only one store is live they name the other as coming later, with the
 * icons. Once both are live, the brand line alone.
 */
export function AppStoreNote({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const muted = tone === "dark" ? "text-cream-faint" : "text-ink-muted";

  if (appStore.url && googlePlay.url) {
    return (
      <p
        className={cn(
          "text-sm",
          tone === "dark" ? "text-cream-faint" : "text-ink-faint",
          className,
        )}
      >
        {appStore.platformNote}
      </p>
    );
  }

  const comingLater = appStore.url
    ? googlePlay.comingLaterNote
    : googlePlay.url
      ? appStore.comingLaterNote
      : appStore.launchOrderNote;

  return (
    <div className={cn("flex flex-col items-start gap-3.5", className)}>
      <div className={cn("text-sm", muted)}>
        <p className={tone === "dark" ? "text-cream-muted" : "text-ink-soft"}>
          {comingLater}
        </p>
        {socials.length > 0 ? (
          <p className="mt-1">{appStore.followNote}</p>
        ) : null}
      </div>
      <SocialIcons />
    </div>
  );
}
