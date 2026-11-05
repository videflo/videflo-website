import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { CampaignAppStoreLink } from "@/components/ui/CampaignAppStoreLink";
import { appStore, site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/cn";

/**
 * /get — the landing page for Videflo's first paid campaign (Meta Launch 01,
 * approved by the owner 2026-11-03).
 *
 * A real page, not a redirect: it explains Videflo, shows the real app, and
 * leaves the decision to the visitor. It mentions neither the subscription nor
 * its price (owner decision, 2026-11-04). Nothing here navigates on its own: no
 * timers, no pop-ups, no scripts.
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

const iconProps = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  className: "size-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const sharedSteps = [
  {
    title: "Create a Tape",
    body: "Start recording a birthday, vacation, wedding, or any experience.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="6" width="13" height="12" rx="2.5" />
        <path d="m16 10.5 5-3v9l-5-3" />
      </svg>
    ),
  },
  {
    title: "Invite Family & Friends",
    body: "Invite others to contribute their recordings to the same Tape.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8.5" r="3.2" />
        <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
        <path d="M18 8v6M15 11h6" />
      </svg>
    ),
  },
  {
    title: "Relive Together",
    body: "Watch the recordings come together as one continuous memory.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8.5 5 3.5-5 3.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
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
      <section className="bg-paper relative overflow-hidden pt-7 pb-14 sm:pt-14 sm:pb-20 lg:pt-20">
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

              <h1 className="font-display text-display-xl text-ink mt-7 font-bold sm:mt-10">
                Your memories.
                <br />
                One Tape.
              </h1>

              <p className="text-lead text-ink-muted mt-6">
                Capture birthdays, vacations, and everyday moments in one
                continuous Tape instead of scattered video clips.
              </p>

              <p className="font-display text-ink-soft border-gold/60 mt-5 border-l-2 pl-4 text-lg font-medium sm:text-xl">
                Don&rsquo;t just capture moments. Keep the whole memory
                together.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <AppStoreBadge />
                <GooglePlayComingSoon />
              </div>
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

      {/*
        Shared Tapes showcase (owner-approved copy, 2026-11-03).

        The phone shows Videflo's real Shared filter on Your Tapes, the same
        capture published as App Store screenshot #4: genuine app interface,
        with CC0 / public-domain tile photos and no identifiable people (see
        Videflo-Marketing/stock/CREDITS.md). The steps describe only what any
        member can do or see; ordering and Finalize Tape stay unmentioned
        because they belong to the Tape's owner.
      */}
      <section
        aria-labelledby="shared-tapes-heading"
        className="bg-paper border-line relative overflow-hidden border-t py-16 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(45%_55%_at_50%_0%,rgba(230,184,92,0.14),transparent_72%)]"
        />
        <Container className="relative">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-ink-faint flex items-center justify-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase">
              <span
                aria-hidden="true"
                className="bg-gold size-2 rounded-full"
              />
              Shared Tapes
            </p>
            <h2
              id="shared-tapes-heading"
              className="font-display text-ink mt-5 text-4xl font-bold tracking-[-0.025em] sm:text-5xl"
            >
              Better memories, together.
            </h2>
            <p className="text-ink-soft mt-5 text-lg font-medium sm:text-xl">
              One event. Different perspectives. One continuous Tape.
            </p>
          </header>

          <div className="mt-14 grid items-center gap-12 sm:mt-20 lg:grid-cols-[auto_1fr] lg:gap-20">
            <figure className="order-2 mx-auto w-full max-w-[17rem] sm:max-w-[19rem] lg:order-1">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[999px] bg-[radial-gradient(60%_50%_at_50%_45%,rgba(230,184,92,0.22),transparent_70%)] blur-xl"
                />
                <div className="bg-ink shadow-lift relative rounded-[2.6rem] p-2 ring-1 ring-white/12">
                  <div className="relative aspect-[860/1737] overflow-hidden rounded-[2.1rem] bg-black">
                    <Image
                      src="/images/get/shared-tapes-screen.jpg"
                      alt="Videflo's Your Tapes screen with the Shared filter on, showing nine Shared Tapes such as Birthday Party by Mike and Family Reunion by David."
                      fill
                      sizes="(min-width: 640px) 304px, 272px"
                      quality={88}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <figcaption className="text-ink-muted mt-5 text-center text-sm">
                Shared Tapes, gathered in one place in the app.
              </figcaption>
            </figure>

            <div className="order-1 max-w-xl lg:order-2">
              <h3 className="font-display text-ink text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">
                Everyone remembers the moment differently.
              </h3>
              <p className="text-ink-muted mt-5 text-lg leading-relaxed">
                Mom captures the birthday candles. Dad records the laughter.
                Grandma catches the moments everyone else missed.
              </p>
              <p className="text-ink-muted mt-4 text-lg leading-relaxed">
                With Videflo Shared Tapes, everyone can contribute their
                recordings to the same Tape, creating one complete memory to
                relive together.
              </p>

              <ol className="mt-10 grid gap-4">
                {sharedSteps.map((step, i) => (
                  <li
                    key={step.title}
                    className="bg-card ring-line flex gap-4 rounded-2xl p-5 ring-1"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-gold text-on-gold grid size-10 shrink-0 place-items-center rounded-full"
                    >
                      {step.icon}
                    </span>
                    <div>
                      <p className="text-ink font-semibold">
                        <span className="text-ink-faint mr-2 tabular-nums">
                          {i + 1}.
                        </span>
                        {step.title}
                      </p>
                      <p className="text-ink-muted mt-1 text-sm leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream border-line border-t py-14 sm:py-20">
        <Container width="narrow" className="text-center">
          <p className="font-display text-ink text-2xl font-semibold sm:text-3xl">
            Videflo. Life in Tapes.
          </p>
          <p className="text-ink-muted mx-auto mt-4 max-w-md">{site.tagline}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <CampaignAppStoreLink
              className={cn(
                buttonStyles.primary,
                "inline-flex h-14 items-center justify-center px-7 text-[0.9375rem]",
              )}
            >
              {appStore.downloadLabel}
            </CampaignAppStoreLink>
            <GooglePlayComingSoon />
          </div>
        </Container>
      </section>
    </>
  );
}
