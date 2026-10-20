"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { appStore, socials } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonStyles } from "./buttonStyles";
import { SocialIcons } from "./SocialIcons";

/**
 * The single download call to action used everywhere on the site.
 *
 * Two rendered states, driven entirely by `appStore.url` in
 * `src/config/site.ts`:
 *
 *  1. `url` is a string  → a real external link to the App Store.
 *  2. `url` is null      → "Coming Soon to the App Store". Depending on
 *                          `fallback` it either points the visitor at the
 *                          social icons `AppStoreNote` draws beneath it
 *                          (`"notice"`: brought into view, briefly lit in gold,
 *                          and focused), or links to the download section of
 *                          the homepage (`"section"`, used in the header).
 *
 * Setting `url` is the only switch; nothing watches App Review. There is
 * deliberately no `href="#"` anywhere: a visitor never activates something that
 * silently goes nowhere.
 */

type Size = "lg" | "md" | "sm";
type Variant = "primary" | "secondary";

const sizes: Record<Size, string> = {
  lg: "px-7 py-4 text-[0.9375rem] gap-3",
  md: "px-6 py-3.5 text-[0.9375rem] gap-2.5",
  sm: "px-4 py-2.5 text-[0.8125rem] gap-2",
};

function DownloadGlyph() {
  // Generic download glyph. The official Apple "Download on the App Store"
  // badge should replace this before launch — see ASSETS.md.
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
  label = "Download on the App Store",
  fallback = "notice",
  className,
}: {
  size?: Size;
  variant?: Variant;
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

  if (appStore.url) {
    return (
      <a
        href={appStore.url}
        target="_blank"
        rel="noopener noreferrer"
        className={shared}
      >
        <DownloadGlyph />
        {label}
      </a>
    );
  }

  if (fallback === "section") {
    return (
      <Link href="/#download" className={shared}>
        {size === "sm"
          ? appStore.comingSoonShortLabel
          : appStore.comingSoonLabel}
      </Link>
    );
  }

  return (
    <Link href="/#download" onClick={showFollowRow} className={shared}>
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
 * The line beneath a download button. Before launch it invites visitors to
 * follow Videflo, with the social icons beneath it; after launch it is the
 * brand line alone.
 */
export function AppStoreNote({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  if (appStore.url) {
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

  return (
    <div className={cn("flex flex-col items-start gap-3.5", className)}>
      <p
        className={cn(
          "text-sm",
          tone === "dark" ? "text-cream-faint" : "text-ink-muted",
        )}
      >
        {socials.length > 0 ? appStore.followNote : appStore.comingSoonLabel}
      </p>
      <SocialIcons />
    </div>
  );
}
