import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import {
  appStore,
  appStoreCampaignLinks,
  site,
  subscription,
} from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";

/**
 * /get — the landing page for Videflo's first paid campaign (Meta Launch 01,
 * approved by the owner 2026-11-03).
 *
 * A real page, not a redirect: it explains Videflo, shows the real app, states
 * the subscription price, and leaves the decision to the visitor. Nothing here
 * navigates on its own: no timers, no pop-ups, no scripts.
 *
 * Every download link on this page (its own two, and the shared header and
 * footer links via `appStoreCampaignLinks`) uses Apple's App Store Connect
 * campaign link, exactly as App Store Connect generated it for the campaign `Videflo_Meta_Launch01`. The
 * `pt` (provider) and `ct` (campaign) tokens are what attribute App Store page
 * views and first-time downloads to this campaign in App Store Connect →
 * Analytics → Campaigns. Do not edit the string; generate a new link in App
 * Store Connect for a new campaign instead.
 *
 * Apple's badge rules (see `StoreBadges.tsx`) apply here too: the official
 * badge, unmodified, once on the page; the second call to action is the site's
 * own text button.
 */
const CAMPAIGN_APP_STORE_URL = appStoreCampaignLinks["/get"];

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

const screens = [
  {
    src: "/images/get/recording-screen.jpg",
    alt: "Videflo's recording screen on iPhone, filming a girl blowing out birthday candles in a Tape named Mayas Birthday.",
    title: "Record",
    caption: "Every moment of the event goes into the same Tape.",
  },
  {
    src: "/images/get/playback-screen.jpg",
    alt: "Videflo's player on iPhone, playing the Mayas Birthday Tape as one continuous video with a Continue Recording button.",
    title: "Relive",
    caption: "Play it back as one continuous story, and keep adding to it.",
  },
] as const;

function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href={CAMPAIGN_APP_STORE_URL}
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
        className="block h-14 w-auto"
      />
    </a>
  );
}

/**
 * Google Play, not yet available. Deliberately not Google's badge (its artwork
 * may only link to a live Play listing) and deliberately not a link or button:
 * a plain, non-focusable label in a dashed outline, matching the site's
 * existing "Android · Coming soon" placeholder in `StoreBadges.tsx`.
 */
function GooglePlayComingSoon({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "border-line-strong inline-flex h-14 cursor-default items-center rounded-[0.6rem] border border-dashed px-5 select-none",
        className,
      )}
    >
      <span className="sr-only">
        Google Play: coming soon. Videflo is not available on Android yet.
      </span>
      <span aria-hidden="true" className="flex flex-col text-left leading-none">
        <span className="text-ink-faint text-[0.625rem] font-semibold tracking-[0.18em] uppercase">
          Coming soon
        </span>
        <span className="font-display text-ink-soft mt-1.5 text-[1.0625rem] font-semibold">
          Google Play
        </span>
      </span>
    </p>
  );
}

function SubscriptionNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-ink-muted text-sm leading-relaxed", className)}>
      Videflo requires a subscription.{" "}
      <strong className="text-ink font-semibold">
        {subscription.basePriceUSD}/{subscription.billingPeriod} (USD)
      </strong>{" "}
      in the US, including {subscription.includedStorageLabel} of Videflo Cloud.
      Prices may vary by country. Automatically renews until canceled.
    </p>
  );
}

export default function GetVidefloPage() {
  return (
    <>
      <section className="bg-paper relative overflow-hidden pt-14 pb-14 sm:pt-20 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(230,184,92,0.16),transparent_72%)]"
        />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/videflo-app-icon.png"
                  alt=""
                  width={56}
                  height={56}
                  priority
                  className="shadow-soft size-14 rounded-[1.1rem]"
                />
                <div>
                  <p className="text-ink font-sans text-xl leading-none font-semibold tracking-[-0.01em]">
                    {site.name}
                  </p>
                  <p className="text-ink-faint mt-1.5 text-[0.625rem] font-semibold tracking-[0.22em] uppercase">
                    Life in Tapes
                  </p>
                </div>
              </div>

              <h1 className="font-display text-display-xl text-ink mt-10 font-bold">
                Your memories.
                <br />
                One Tape.
              </h1>

              <p className="text-lead text-ink-muted mt-6">
                Capture birthdays, vacations, and everyday moments in one
                continuous Tape instead of scattered video clips.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreBadge />
                <GooglePlayComingSoon />
              </div>

              <SubscriptionNote className="mt-6 max-w-md" />
            </div>

            <ul className="mx-auto grid w-full max-w-[34rem] grid-cols-2 gap-4 sm:gap-6 lg:w-[34rem]">
              {screens.map((screen, i) => (
                <li key={screen.src} className={i === 1 ? "mt-10" : ""}>
                  <figure>
                    <div className="bg-ink shadow-lift rounded-[2rem] p-[0.45rem] ring-1 ring-white/12 sm:rounded-[2.4rem] sm:p-2">
                      <div className="relative aspect-[860/1737] overflow-hidden rounded-[1.6rem] bg-black sm:rounded-[1.9rem]">
                        <Image
                          src={screen.src}
                          alt={screen.alt}
                          fill
                          sizes="(min-width: 1024px) 260px, 45vw"
                          quality={88}
                          priority={i === 0}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-4">
                      <span className="text-ink block text-sm font-semibold">
                        {screen.title}
                      </span>
                      <span className="text-ink-muted mt-1 block text-sm">
                        {screen.caption}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-cream border-line border-t py-14 sm:py-20">
        <Container width="narrow" className="text-center">
          <p className="font-display text-ink text-2xl font-semibold sm:text-3xl">
            Videflo. Life in Tapes.
          </p>
          <p className="text-ink-muted mx-auto mt-4 max-w-md">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CAMPAIGN_APP_STORE_URL}
              className={cn(
                buttonStyles.primary,
                "inline-flex h-14 items-center justify-center px-7 text-[0.9375rem]",
              )}
            >
              {appStore.downloadLabel}
            </a>
            <GooglePlayComingSoon />
          </div>
          <SubscriptionNote className="mx-auto mt-6 max-w-md" />
        </Container>
      </section>
    </>
  );
}
