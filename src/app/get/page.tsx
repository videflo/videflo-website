import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { CampaignAppStoreLink } from "@/components/ui/CampaignAppStoreLink";
import { SubscriptionRequired } from "@/components/ui/SubscriptionRequired";
import { appScreens } from "@/components/visuals/appScreens";
import { DeviceFrame } from "@/components/visuals/DeviceFrame";
import { TapeRibbon } from "@/components/visuals/TapeRibbon";
import { appStore, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";

/**
 * /get — the landing page for Videflo's first paid campaign (Meta Launch 01,
 * approved by the owner 2026-11-03), restyled to match the "Bright Gallery Nov
 * 2026" App Store screenshots.
 *
 * A real page, not a redirect: it explains Videflo, shows the real app, and
 * leaves the decision to the visitor. It says a subscription is required beside
 * each download call to action, without the price (owner decision, 2026-11-05).
 * The App Store listing and the paywall state the price before any charge.
 * Nothing here navigates on its own: no timers, no pop-ups, no scripts.
 *
 * It has no top navigation: `SiteHeader` renders nothing on this path, and the
 * hero carries the branding.
 *
 * Every download link on this page (its own two, and the shared footer link)
 * uses an App Store Connect campaign link chosen by `?src=`
 * (`getPageSourceLinks`; plain /get = the paid Meta link), exactly as App
 * Store Connect generated it for the campaign `Videflo_Meta_Launch01`. The
 * `pt` (provider) and `ct` (campaign) tokens are what attribute App Store page
 * views and first-time downloads to this campaign in App Store Connect →
 * Analytics → Campaigns. Do not edit the string; generate a new link in App
 * Store Connect for a new campaign instead.
 *
 * Apple's badge rules (see `StoreBadges.tsx`) apply here too: the official
 * badge, unmodified, once on the page; the second call to action is the site's
 * own text button.
 */

const PAGE_TITLE = "Get Videflo | Life in Tapes";
const base = pageMetadata({
  title: PAGE_TITLE,
  description:
    "Capture birthdays, vacations, and everyday moments in one continuous Tape instead of scattered video clips.",
  path: "/get",
});

export const metadata: Metadata = {
  ...base,
  // Exactly this title in the tab and in link previews: `absolute` skips the
  // layout's "%s | Videflo" template, and the social titles are set to match.
  title: { absolute: PAGE_TITLE },
  openGraph: { ...base.openGraph, title: PAGE_TITLE },
  twitter: { ...base.twitter, title: PAGE_TITLE },
  // A campaign landing page: reachable by anyone, but not a search result.
  robots: { index: false, follow: true },
};

const moments = [
  {
    title: "Keep adding memories.",
    body: "Come back anytime and continue the same Tape.",
    screen: appScreens.homeContinue,
    panel: "bg-peach",
  },
  {
    title: "Relive every moment.",
    body: "Watch it all back as one continuous Tape.",
    screen: appScreens.playback,
    panel: "bg-sky",
  },
  {
    title: "Make memories together.",
    body: "Family and friends add to the same Tape. Each person who adds recordings needs their own subscription.",
    screen: appScreens.sharedTapes,
    panel: "bg-card ring-line ring-1",
  },
] as const;

function AppStoreBadge({ className }: { className?: string }) {
  return (
    <CampaignAppStoreLink
      className={cn(
        "focus-visible:outline-gold-mark inline-block rounded-[0.55rem] outline-offset-4 focus-visible:outline-2",
        className,
      )}
    >
      <Image
        src="/brand/app-store-badge.svg"
        alt={appStore.badgeAlt}
        width={168}
        height={56}
        unoptimized
        priority
        className="block h-16 w-auto"
      />
    </CampaignAppStoreLink>
  );
}

/**
 * Google Play, not yet available. Deliberately not Google's badge (its artwork
 * may only link to a live Play listing) and deliberately not a link or button:
 * a quiet, non-focusable line of text, so the App Store stays the one call to
 * action on the page.
 */
function GooglePlayComingSoon({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-ink-muted cursor-default text-sm select-none",
        className,
      )}
    >
      <span className="sr-only">
        Google Play: coming soon. Videflo is not available on Android yet.
      </span>
      <span aria-hidden="true">Google Play: Coming soon</span>
    </p>
  );
}

export default function GetVidefloPage() {
  return (
    <>
      <section className="bg-paper relative isolate overflow-hidden pt-6 sm:pt-12 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 -z-20 size-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(248,185,95,0.4),transparent)]"
        />
        <TapeRibbon
          id="get-ribbon"
          className="top-[66%] left-1/2 -z-10 h-64 w-[200%] -translate-x-1/2 lg:top-[34%] lg:left-[66%] lg:h-96 lg:w-[58%] lg:translate-x-0"
        />

        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-16">
            <div className="max-w-xl lg:pb-24">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/videflo-app-icon.png"
                  alt=""
                  width={44}
                  height={44}
                  priority
                  className="shadow-soft size-11 rounded-[0.8rem]"
                />
                <p className="text-ink font-sans text-lg leading-none font-semibold tracking-[-0.01em]">
                  {site.name}
                </p>
              </div>

              <h1 className="font-display text-display-xl text-ink mt-5 font-bold sm:mt-8">
                Your Life.
                <br />
                <span className="text-coral">One Tape.</span>
              </h1>

              <p className="text-lead text-ink-soft mt-4 text-balance sm:mt-6">
                Capture birthdays, vacations, and everyday moments in one
                continuous Tape.
              </p>

              <p className="text-ink-muted mt-2 font-medium text-balance sm:mt-3">
                No editing. Private unless you share. Keep adding memories.
              </p>

              <div className="mt-5 flex flex-col items-start gap-3 sm:mt-7">
                <AppStoreBadge />
                <SubscriptionRequired className="max-w-md" />
                <GooglePlayComingSoon />
              </div>
            </div>

            <div className="mx-auto h-[24rem] w-full max-w-[19rem] overflow-hidden sm:h-[32rem] sm:max-w-[23rem] lg:h-[38rem] lg:max-w-none">
              <DeviceFrame
                screen={appScreens.recording}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 368px, 304px"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="get-moments-heading"
        className="bg-shell py-12 sm:py-20"
      >
        <Container>
          <h2
            id="get-moments-heading"
            className="font-display text-display-md text-ink max-w-2xl font-bold"
          >
            Don&rsquo;t just capture moments. Keep the whole memory together.
          </h2>

          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
            {moments.map((moment) => (
              <li
                key={moment.title}
                className={cn(
                  "flex flex-col overflow-hidden rounded-3xl",
                  moment.panel,
                )}
              >
                <div className="p-6 pb-6">
                  <h3 className="font-display text-ink text-2xl font-bold">
                    {moment.title}
                  </h3>
                  <p className="text-ink-muted mt-2 leading-relaxed">
                    {moment.body}
                  </p>
                </div>
                <div className="mt-auto h-64 overflow-hidden px-[16%] lg:h-80">
                  <DeviceFrame
                    screen={moment.screen}
                    sizes="(min-width: 768px) 22vw, 68vw"
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-14">
            <CampaignAppStoreLink
              className={cn(
                buttonStyles.primary,
                "inline-flex h-14 items-center justify-center px-7 text-[0.9375rem]",
              )}
            >
              {appStore.downloadLabel}
            </CampaignAppStoreLink>
            <SubscriptionRequired className="max-w-md" />
            <GooglePlayComingSoon />
          </div>
        </Container>
      </section>
    </>
  );
}
