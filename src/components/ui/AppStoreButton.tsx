"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { appStore, contact } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * The single download call to action used everywhere on the site.
 *
 * Two rendered states, driven entirely by `appStore.url` in
 * `src/config/site.ts`:
 *
 *  1. `url` is a string  → a real external link to the App Store.
 *  2. `url` is null      → a complete, honest "coming soon" control. Depending
 *                          on `fallback` it either reveals a short notice with
 *                          an email path (`"notice"`, used where there is room
 *                          for it) or links to the download section of the
 *                          homepage (`"section"`, used in the header).
 *
 * There is deliberately no `href="#"` anywhere: a visitor never activates
 * something that silently goes nowhere.
 */

type Size = "lg" | "md" | "sm";
type Variant = "ink" | "cream";

const sizes: Record<Size, string> = {
  lg: "px-7 py-4 text-[0.9375rem] gap-3",
  md: "px-6 py-3.5 text-[0.9375rem] gap-2.5",
  sm: "px-4 py-2.5 text-[0.8125rem] gap-2",
};

const variants: Record<Variant, string> = {
  ink: "bg-ink text-paper hover:bg-ink-soft",
  cream: "bg-paper text-ink hover:bg-cream",
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
  variant = "ink",
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
  const noticeId = useId();
  const [noticeShown, setNoticeShown] = useState(false);

  const shared = cn(
    "inline-flex items-center justify-center rounded-full font-semibold",
    "transition-colors duration-200 ease-out",
    sizes[size],
    variants[variant],
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
        <DownloadGlyph />
        {label}
      </Link>
    );
  }

  return (
    <span className="inline-flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={() => setNoticeShown(true)}
        aria-describedby={noticeShown ? noticeId : undefined}
        className={shared}
      >
        <DownloadGlyph />
        {label}
      </button>
      <span
        id={noticeId}
        role="status"
        className={cn(
          "max-w-[26rem] text-sm leading-relaxed",
          variant === "cream" ? "text-cream-muted" : "text-ink-muted",
        )}
      >
        {noticeShown ? (
          <>
            {appStore.comingSoonNotice}{" "}
            <a
              href={`mailto:${contact.supportEmail}?subject=Videflo%20launch%20updates`}
              className={cn(
                "font-semibold underline decoration-1 underline-offset-4",
                variant === "cream" ? "text-paper" : "text-ink",
              )}
            >
              {contact.supportEmail}
            </a>
          </>
        ) : null}
      </span>
    </span>
  );
}

/** The "Coming soon to iPhone" / platform line that sits beneath a CTA. */
export function AppStoreNote({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm",
        tone === "dark" ? "text-cream-faint" : "text-ink-faint",
        className,
      )}
    >
      {appStore.url
        ? appStore.platformNote
        : `${appStore.comingSoonLabel} · ${appStore.platformNote}`}
    </p>
  );
}
