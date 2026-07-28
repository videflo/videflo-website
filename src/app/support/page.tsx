import Link from "next/link";
import { Callout, H3, LI, Mail, P, UL } from "@/components/legal/prose";
import { FaqAccordion } from "@/components/support/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/config/site";
import { faq } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Support",
  description: `Help with ${site.name} — Tapes, recording permissions, exporting, subscriptions, and keeping your memories safe.`,
  path: "/support",
});

const topics = [
  { id: "subscriptions", label: "Subscriptions" },
  { id: "restore", label: "Restore Purchases" },
  { id: "permissions", label: "Camera & microphone" },
  { id: "photos", label: "Photos access" },
  { id: "export", label: "Exporting a Tape" },
  { id: "storage", label: "Storage & backups" },
  { id: "troubleshooting", label: "Troubleshooting" },
] as const;

/** FAQPage structured data, generated from the same answers shown on the page. */
function FaqStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join(" "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function SupportPage() {
  return (
    <>
      <FaqStructuredData />

      <Section tone="shell" spacing="tight" className="pt-14 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Support</Eyebrow>
            <h1 className="font-display text-display-lg text-ink mt-6 font-semibold">
              We&rsquo;re here to help.
            </h1>
            <p className="text-lead text-ink-muted mt-6">
              Videflo is made by a very small team, and a person reads every
              message. Whether something isn&rsquo;t working or you just have a
              question about Tapes, write to us.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3">
              <a
                href={`mailto:${contact.supportEmail}`}
                className="bg-ink text-paper hover:bg-ink-soft inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.9375rem] font-semibold transition-colors"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-[1.125em]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
                  <path d="m3.5 6 6.5 5 6.5-5" />
                </svg>
                Email {contact.supportEmail}
              </a>
              <p className="text-ink-faint text-sm">
                Please include your iPhone model, your iOS version, and what you
                were doing when the problem happened.
              </p>
            </div>

            {/*
              The Help Center is the fuller answer to most questions; this page
              is the way to reach a person. Point at it before the topic list so
              nobody works through the sections looking for something that has
              its own article.
            */}
            <p className="text-ink-muted mt-7 text-[1.0625rem] leading-relaxed">
              Looking for how something works?{" "}
              <Link
                href="/help"
                className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
              >
                The Help Center
              </Link>{" "}
              has step-by-step guides for every part of {site.name}, and a
              search across all of them.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <nav
              aria-labelledby="topics-heading"
              className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
            >
              <h2
                id="topics-heading"
                className="text-ink-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
              >
                Help topics
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
                {topics.map((topic) => (
                  <li key={topic.id}>
                    <a
                      href={`#${topic.id}`}
                      className="border-line-strong text-ink-muted hover:border-ink hover:text-ink inline-block rounded-full border px-3.5 py-1.5 text-sm transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-0 lg:underline lg:decoration-transparent lg:decoration-1 lg:underline-offset-4 lg:hover:decoration-current"
                    >
                      {topic.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-8">
              <article
                id="subscriptions"
                className="border-line scroll-mt-28 border-t pt-10 first:border-0 first:pt-0"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Subscriptions and App Store billing
                </h2>
                <P>
                  Any {site.name} subscription is purchased through the Apple
                  App Store and billed to your Apple Account. Apple handles the
                  payment, the receipts, and the renewals — we never see your
                  card details.
                </P>
                <H3>Where to manage or cancel it</H3>
                <P>
                  Subscriptions are managed in your Apple Account, not inside{" "}
                  {site.name}. On your iPhone, open the{" "}
                  <strong className="text-ink">Settings</strong> app, tap your
                  name at the top, then{" "}
                  <strong className="text-ink">Subscriptions</strong>, and
                  select {site.name}.
                </P>
                <UL>
                  <LI>
                    Cancelling stops the next renewal. You keep access until the
                    end of the period you have already paid for.
                  </LI>
                  <LI>
                    Deleting the app does not cancel a subscription — it has to
                    be cancelled in your Apple Account.
                  </LI>
                  <LI>
                    Prices are shown by Apple in your local currency and can
                    differ by region.
                  </LI>
                </UL>
                <P>
                  Apple occasionally moves these settings between iOS versions.
                  If what you see doesn&rsquo;t match,{" "}
                  <a
                    href="https://support.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
                  >
                    Apple Support
                  </a>{" "}
                  publishes the current steps.
                </P>
                <H3>Refunds</H3>
                <P>
                  Because Apple bills for App Store purchases, refunds are
                  handled by Apple under Apple&rsquo;s policies — we
                  aren&rsquo;t able to issue one ourselves. Use Apple&rsquo;s
                  &ldquo;Report a Problem&rdquo; process or contact Apple
                  Support. If something in {site.name} is broken, please tell us
                  too at <Mail address={contact.supportEmail} /> so we can fix
                  it.
                </P>
              </article>

              <article
                id="restore"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Restoring a purchase
                </h2>
                <P>
                  If you reinstall {site.name}, or set up a new iPhone, your
                  subscription can be restored — it belongs to your Apple
                  Account rather than to the app.
                </P>
                <UL>
                  <LI>
                    Make sure the iPhone is signed in to the same Apple Account
                    you used to buy the subscription.
                  </LI>
                  <LI>
                    Open {site.name}&rsquo;s settings and choose{" "}
                    <strong className="text-ink">Restore Purchases</strong>.
                  </LI>
                  <LI>
                    If nothing is found, check that the subscription is still
                    active in{" "}
                    <strong className="text-ink">
                      Settings → your name → Subscriptions
                    </strong>
                    .
                  </LI>
                </UL>
                <Callout>
                  <p>
                    Restoring a purchase brings back access to paid features. It
                    does not bring back your recordings — those live on the
                    device where they were made.
                  </p>
                </Callout>
              </article>

              <article
                id="permissions"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Camera and microphone access
                </h2>
                <P>
                  {site.name} needs the camera to record video and the
                  microphone to record the sound with it. iOS asks you for each
                  one the first time it is needed, and you stay in control
                  afterwards.
                </P>
                <P>
                  To check or change them, open{" "}
                  <strong className="text-ink">Settings</strong> on your iPhone,
                  scroll to <strong className="text-ink">{site.name}</strong>,
                  and turn <strong className="text-ink">Camera</strong> and{" "}
                  <strong className="text-ink">Microphone</strong> on.
                </P>
                <H3>Common symptoms</H3>
                <UL>
                  <LI>
                    <strong className="text-ink">A black preview.</strong>{" "}
                    Camera access is off, or another app is using the camera —
                    close it and reopen {site.name}.
                  </LI>
                  <LI>
                    <strong className="text-ink">Silent recordings.</strong>{" "}
                    Microphone access is off. Turn it on and record again;
                    earlier recordings cannot have their sound added afterwards.
                  </LI>
                  <LI>
                    <strong className="text-ink">
                      Recording stops when a call comes in.
                    </strong>{" "}
                    iOS gives the call priority. {site.name} keeps what it
                    captured up to that point, and you can continue the same
                    Tape afterwards.
                  </LI>
                </UL>
              </article>

              <article
                id="photos"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Photos access
                </h2>
                <P>
                  {site.name} uses your photo library in two places: choosing a
                  cover photo for a Tape or Collection, and saving an exported
                  Tape.
                </P>
                <P>
                  When you pick a cover photo, iOS shows you its own picker and
                  hands {site.name} only the item you chose — the app does not
                  browse your library. Saving an exported video to Photos asks
                  for permission to add to your library, which you can review in{" "}
                  <strong className="text-ink">
                    Settings → {site.name} → Photos
                  </strong>
                  .
                </P>
              </article>

              <article
                id="export"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Exporting a Tape
                </h2>
                <P>
                  Exporting turns a whole Tape into one ordinary video file you
                  can keep anywhere. Open the Tape, choose{" "}
                  <strong className="text-ink">Prepare Tape</strong>, and when
                  it is ready choose{" "}
                  <strong className="text-ink">Export to Photos</strong>. The
                  video lands in your photo library, where you can share it,
                  AirDrop it, or save it to Files like any other video.
                </P>
                <UL>
                  <LI>
                    Preparing a long Tape takes time, and a higher recording
                    quality takes longer. You can keep using the rest of the app
                    while it works.
                  </LI>
                  <LI>
                    Exporting never alters your original recordings — it makes a
                    new copy.
                  </LI>
                  <LI>
                    Make sure there is enough free space on your iPhone for the
                    exported file before you start.
                  </LI>
                </UL>
              </article>

              <article
                id="storage"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Storage and device backups
                </h2>
                <P>
                  {site.name} is local-first: your recordings are created and
                  kept on your iPhone, and nothing is uploaded to us. That is
                  good for your privacy — and it means the safety of your
                  recordings depends on your device.
                </P>
                <Callout title="Videflo cannot recover a lost Tape">
                  <p>
                    There is no cloud backup in {site.name}. If your iPhone is
                    lost, stolen, damaged, or erased, or if the app is deleted,
                    recordings that exist only inside {site.name} may be gone
                    for good.
                  </p>
                </Callout>
                <H3>Two things worth doing today</H3>
                <UL>
                  <LI>
                    <strong className="text-ink">
                      Keep an iPhone backup switched on.
                    </strong>{" "}
                    A backup that includes app data will include your Tapes.
                    Check it in{" "}
                    <strong className="text-ink">
                      Settings → your name → iCloud
                    </strong>
                    , or back up to a computer. Video is large, so make sure the
                    backup has room to complete.
                  </LI>
                  <LI>
                    <strong className="text-ink">
                      Export the Tapes you could not replace.
                    </strong>{" "}
                    An exported copy in Photos, in Files, or on a computer is a
                    second copy that does not depend on {site.name} at all.
                  </LI>
                </UL>
              </article>

              <article
                id="troubleshooting"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Troubleshooting
                </h2>
                <H3>Recording won&rsquo;t start</H3>
                <P>
                  Check that Camera and Microphone are enabled for {site.name},
                  that no other app is using the camera, and that your iPhone
                  has free storage. If the Tape was started in a different
                  orientation, {site.name} asks you to hold the phone the same
                  way before it will record.
                </P>
                <H3>A Tape looks shorter than expected</H3>
                <P>
                  A Tape plays every recording it holds, in order. If one seems
                  to be missing, open the Tape&rsquo;s recordings list to see
                  what it contains. If a recording was interrupted — a call, a
                  crash, or the battery running out — {site.name} tries to
                  salvage the footage it had already captured the next time you
                  open the app.
                </P>
                <H3>Exporting fails or stalls</H3>
                <P>
                  Free up storage, make sure your iPhone is not in Low Power
                  Mode, and try again with the screen awake. If it keeps
                  failing, tell us the Tape&rsquo;s length and recording quality
                  so we can reproduce it.
                </P>
                <H3>Still stuck?</H3>
                <P>
                  Email <Mail address={contact.supportEmail} /> with your iPhone
                  model, your iOS version, the {site.name} version, and what you
                  were doing. Screenshots or a screen recording help a great
                  deal.
                </P>
              </article>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="cream" labelledBy="faq-heading">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Questions</Eyebrow>
            <h2
              id="faq-heading"
              className="font-display text-display-md text-ink mt-6 font-semibold"
            >
              Frequently asked
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion />
          </div>
          <p className="text-ink-muted mt-12 text-[1.0625rem] leading-relaxed">
            Didn&rsquo;t find it? Email <Mail address={contact.supportEmail} />{" "}
            — or read the{" "}
            <Link
              href="/privacy"
              className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
            >
              Terms of Service
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
