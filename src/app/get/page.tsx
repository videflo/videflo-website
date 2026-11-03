import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
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

export const metadata = {
  ...pageMetadata({
    title: "Get Videflo for iPhone",
    description:
      "Capture birthdays, vacations, and everyday moments in one continuous Tape instead of scattered video clips.",
    path: "/get",
  }),
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

function SubscriptionNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-ink-muted text-sm leading-relaxed", className)}>
      Videflo requires a subscription:{" "}
      <strong className="text-ink font-semibold">
        {subscription.basePriceUSD}/{subscription.billingPeriod}
      </strong>{" "}
      in the US, including {subscription.includedStorageLabel} of Videflo Cloud.
      It renews monthly until you cancel in your Apple Account settings.
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

              <Eyebrow className="mt-10">For iPhone</Eyebrow>

              <h1 className="font-display text-display-xl text-ink mt-5 font-bold">
                Your memories.
                <br />
                One Tape.
              </h1>

              <p className="text-lead text-ink-muted mt-6">
                Capture birthdays, vacations, and everyday moments in one
                continuous Tape instead of scattered video clips.
              </p>

              <div className="mt-8">
                <AppStoreBadge />
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
          <a
            href={CAMPAIGN_APP_STORE_URL}
            className={cn(
              buttonStyles.primary,
              "mt-8 inline-flex items-center justify-center px-7 py-4 text-[0.9375rem]",
            )}
          >
            {appStore.downloadLabel}
          </a>
          <SubscriptionNote className="mx-auto mt-6 max-w-md" />
        </Container>
      </section>
    </>
  );
}
