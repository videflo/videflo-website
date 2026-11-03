import Image from "next/image";
import { appStore, googlePlay } from "@/config/site";
import { cn } from "@/lib/cn";
import { AppStoreButton, AppStoreNote } from "./AppStoreButton";
import { CampaignAppStoreLink } from "./CampaignAppStoreLink";

/**
 * The download badges: Apple's official "Download on the App Store" badge,
 * with a quiet, non-interactive "Android · Coming soon" placeholder beside it
 * while Google Play is not live.
 *
 * ## Apple's badge rules this follows
 *
 * (App Store Marketing Guidelines, "Badges", read 2026-11-02.)
 *
 *  - **Official artwork, unmodified.** `public/brand/app-store-badge.svg` is the
 *    black US-English badge exactly as Apple's marketing-tools service serves
 *    it. No recolouring, hover effect, animation or angle: the link around it
 *    shows focus with an outline *outside* the artwork and nothing else.
 *  - **The black badge** whenever another platform appears in the layout, and
 *    the App Store badge **first** in the lineup.
 *  - **One App Store badge per layout.** Only one caller per page renders this
 *    component; every other call to action on the page is the site's own text
 *    button (`AppStoreButton`), which never imitates the badge or uses the
 *    Apple logo.
 *  - **Clear space of a quarter of the badge height** on every side. The badge
 *    is 48 px tall, so nothing comes within 12 px: the row and stack gaps are
 *    16 px.
 *  - **At least 40 px tall on screen.** It is 48 px at every breakpoint.
 *
 * ## The Android placeholder
 *
 * It is deliberately not Google's badge — Google's artwork may only be shown as
 * a link to a live Play listing, and there isn't one. It is Videflo's own type
 * in a dashed outline, and it is a paragraph: not a link, not a button, not
 * focusable, and with no hover state, so nothing invites a tap. Screen readers
 * hear one plain sentence instead of the two visual fragments.
 *
 * ## Before launch
 *
 * While `appStore.url` is null this renders the pre-launch button and note
 * instead, so the component can stay where it is for any future store switch.
 */
export function StoreBadges({ className }: { className?: string }) {
  if (!appStore.url) {
    return (
      <div className={cn("flex flex-col items-start gap-4", className)}>
        <AppStoreButton size="lg" />
        <AppStoreNote />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <p className="text-ink-soft flex items-center gap-2.5 text-sm font-semibold">
        {/* Gold on cream is a fill, never thin text, as in the app. */}
        <span aria-hidden="true" className="bg-gold size-2 rounded-full" />
        {appStore.availableNowLabel}
      </p>

      <ul className="flex flex-wrap items-center gap-4">
        <li>
          <CampaignAppStoreLink
            newTab
            className="focus-visible:outline-gold-mark block rounded-[0.55rem] outline-offset-4 focus-visible:outline-2"
          >
            <Image
              src="/brand/app-store-badge.svg"
              alt={appStore.badgeAlt}
              width={144}
              height={48}
              unoptimized
              className="block h-12 w-auto"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </CampaignAppStoreLink>
        </li>

        <li>
          {googlePlay.url ? (
            <a
              href={googlePlay.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-line bg-shell text-ink hover:bg-card inline-flex h-12 items-center rounded-[0.55rem] border px-5 text-[0.9375rem] font-semibold transition-colors"
            >
              {googlePlay.downloadLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <AndroidComingSoon />
          )}
        </li>
      </ul>
    </div>
  );
}

function AndroidComingSoon() {
  return (
    <p className="border-line-strong inline-flex h-12 cursor-default items-center rounded-[0.55rem] border border-dashed px-5 select-none">
      <span className="sr-only">{googlePlay.comingSoonAccessibleLabel}</span>
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span className="text-ink-faint text-[0.625rem] font-semibold tracking-[0.18em] uppercase">
          {googlePlay.comingSoonEyebrow}
        </span>
        <span className="font-display text-ink-soft mt-1.5 text-[1.0625rem] font-semibold">
          {googlePlay.comingSoonPlatform}
        </span>
      </span>
    </p>
  );
}
