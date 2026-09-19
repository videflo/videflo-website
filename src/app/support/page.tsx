import Link from "next/link";
import { Callout, H3, LI, Mail, P, UL } from "@/components/legal/prose";
import { FaqAccordion } from "@/components/support/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { contact, site, subscription } from "@/config/site";
import { faq } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Support",
  description: `Help with ${site.name} — your account, subscriptions, Videflo Cloud, Shared Tapes, exporting, permissions, and how to reach a person.`,
  path: "/support",
});

const topics = [
  { id: "account", label: "Account & signing in" },
  { id: "subscriptions", label: "Subscriptions & storage" },
  { id: "restore", label: "Restore Purchases" },
  { id: "storage", label: "Videflo Cloud & backups" },
  { id: "sharing", label: "Shared Tapes" },
  { id: "permissions", label: "Camera & microphone" },
  { id: "photos", label: "Photos access" },
  { id: "export", label: "Exporting a Tape" },
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
                id="account"
                className="border-line scroll-mt-28 border-t pt-10 first:border-0 first:pt-0"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Your account and signing in
                </h2>
                <P>
                  {site.name} uses{" "}
                  <strong className="text-ink">Sign in with Apple</strong> and
                  nothing else. There is no {site.name} password to create or
                  forget: tap the button, confirm with Face ID, and your account
                  exists. If you are asked for a password, it is Apple asking
                  for your Apple Account password, and Apple can reset it.
                </P>
                <P>
                  On first sign-in {site.name} asks for a Profile — a display
                  name, a username, and a photo or one of the built-in avatars.
                  The username can&rsquo;t be changed once it&rsquo;s claimed;
                  everything else can be edited in{" "}
                  <strong className="text-ink">Settings → Profile</strong>.
                </P>
                <UL>
                  <LI>
                    <strong className="text-ink">Sign Out</strong> is in
                    Settings → Profile → Account. Signing out leaves your Tapes
                    in {site.name} Cloud exactly as they are.
                  </LI>
                  <LI>
                    <strong className="text-ink">Delete Account</strong> is at
                    the bottom of Settings. It permanently deletes your account
                    and every Tape you own in {site.name} Cloud, and it cannot
                    be undone. Recordings you added to someone else&rsquo;s
                    Shared Tape stay in that Tape. It does not cancel your
                    subscription — do that in your Apple Account.
                  </LI>
                </UL>
              </article>

              <article
                id="subscriptions"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Subscriptions, storage and App Store billing
                </h2>
                <P>
                  {site.name} is one monthly subscription that includes{" "}
                  {subscription.includedStorageLabel} of {site.name} Cloud.
                  Larger capacities are available from Settings → {site.name}{" "}
                  Cloud → Manage Storage. It is purchased through the Apple App
                  Store and billed to your Apple Account. Apple handles the
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
                    differ by region. In the United States the base subscription
                    is {subscription.basePriceUSD} a{" "}
                    {subscription.billingPeriod}; the larger capacities are
                    priced on the subscription screen.
                  </LI>
                  <LI>
                    Moving to a larger capacity takes effect straight away and
                    Apple prorates it. Moving to a smaller one takes effect at
                    your next renewal.
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
                    Open {site.name} and sign in with Apple. If the subscription
                    screen appears, tap{" "}
                    <strong className="text-ink">Restore Purchases</strong> on
                    it.
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
                    Restoring a purchase brings back access. Your Tapes come
                    back separately, from {site.name} Cloud, as soon as you sign
                    in to the same {site.name} account — they appear in your
                    library and play by streaming, and{" "}
                    <strong className="text-ink">
                      Download to This iPhone
                    </strong>{" "}
                    puts the files back on the device.
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
                  {site.name} uses your photo library in three places: choosing
                  a cover photo for a Tape or Collection, adding videos you
                  filmed before {site.name} to a new Tape, and saving an export.
                </P>
                <P>
                  When you pick a cover photo or choose videos to add, iOS shows
                  you its own picker and hands {site.name} only the items you
                  chose — the app does not browse your library, which is why no
                  permission prompt appears. Saving a video to Photos asks for
                  permission to <em>add</em> to your library, which you can
                  review in{" "}
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
                  Exporting turns a whole Tape into one ordinary video and saves
                  it to your Photos library. Open the Tape, tap the{" "}
                  <strong className="text-ink">⋯</strong> menu in the player,
                  and choose <strong className="text-ink">Export Tape</strong>.
                  {site.name} shows the progress and tells you when the video is
                  in Photos, where you can share it, AirDrop it, or save it to
                  Files like any other video.
                </P>
                <UL>
                  <LI>
                    Keep {site.name} on screen while it exports. A long Tape or
                    a higher recording quality takes longer, and you can cancel
                    at any time.
                  </LI>
                  <LI>
                    A Tape stored only in {site.name} Cloud exports too — it
                    streams while it renders, without downloading first.
                  </LI>
                  <LI>
                    Exporting never alters your original recordings and leaves
                    nothing behind in {site.name} — it makes one new copy in
                    Photos.
                  </LI>
                  <LI>
                    Whether the date and time are stamped into the export is set
                    in Settings → Export Settings →{" "}
                    <strong className="text-ink">Export with Timestamp</strong>.
                  </LI>
                  <LI>
                    On a Shared Tape, only the owner can export the whole Tape.
                    Every member can watch it.
                  </LI>
                </UL>
              </article>

              <article
                id="storage"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Videflo Cloud, storage and backups
                </h2>
                <P>
                  Recordings are saved on your iPhone first. While{" "}
                  <strong className="text-ink">
                    Back Up to {site.name} Cloud
                  </strong>{" "}
                  is on — it is on by default — each recording is also copied to{" "}
                  {site.name} Cloud, where it survives a lost or replaced phone.
                  Your original files are never changed. Both switches live in
                  Settings → {site.name} Cloud → Backup Settings, and the second
                  one, <strong className="text-ink">Use Cellular Data</strong>,
                  decides whether backups may run away from Wi-Fi.
                </P>
                <UL>
                  <LI>
                    <strong className="text-ink">
                      Remove from This iPhone
                    </strong>{" "}
                    frees the space a Tape uses once every recording in it is
                    safely in {site.name} Cloud. The Tape stays in your library
                    and plays by streaming.
                  </LI>
                  <LI>
                    <strong className="text-ink">
                      Download to This iPhone
                    </strong>{" "}
                    brings the files back for offline watching.
                  </LI>
                  <LI>
                    <strong className="text-ink">Manage Storage</strong> shows
                    how much of your allowance is used, lets you free space by
                    removing your largest Tapes from the phone, and offers the
                    larger capacities.
                  </LI>
                  <LI>
                    If you go over your allowance, {site.name} keeps everything
                    already stored and pauses new uploads. You have{" "}
                    {subscription.overAllowanceGraceDays} days to free space or
                    choose a larger capacity; nothing is deleted automatically.
                  </LI>
                </UL>
                <Callout title="Cloud protection starts when the upload finishes">
                  <p>
                    A recording is protected once its upload has completed. With
                    backup switched off, or before an upload finishes, it exists
                    on your iPhone alone — so keep an iPhone backup switched on
                    as well, and export the Tapes you could not replace. And if
                    your subscription lapses, your Tapes stay on your iPhone,
                    and {site.name} does not currently remove content from{" "}
                    {site.name} Cloud because a subscription has ended —
                    subscribe again and everything is there.
                  </p>
                </Callout>
              </article>

              <article
                id="sharing"
                className="border-line mt-12 scroll-mt-28 border-t pt-10"
              >
                <h2 className="font-display text-display-sm text-ink font-semibold">
                  Shared Tapes
                </h2>
                <P>
                  Any Tape you own can be shared. Open the Tape&rsquo;s menu and
                  choose <strong className="text-ink">Invite to Tape</strong>,
                  then pick people from Friends &amp; Family, search {site.name}{" "}
                  by @username, or send a link by text with{" "}
                  <strong className="text-ink">Invite by Text</strong>. Someone
                  who accepts sees the whole Tape, can watch it, and can add
                  their own recordings with Continue Recording.
                </P>
                <UL>
                  <LI>
                    A Tape with invitations out but nobody accepted yet is still
                    private. It becomes Shared when the first person joins.
                  </LI>
                  <LI>
                    The owner can cancel invitations, remove someone, stop the
                    Tape accepting new recordings, and delete it for everyone.
                    Members can leave; their recordings stay in the Tape.
                  </LI>
                  <LI>
                    The owner&rsquo;s {site.name} Cloud allowance pays for the
                    whole Tape, including recordings other people add.
                  </LI>
                  <LI>
                    A Friends &amp; Family connection on its own gives nobody
                    access to your Tapes — it only makes inviting quicker.
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
                  Mode, and try again with {site.name} on screen. A Tape stored
                  only in {site.name} Cloud needs a connection while it exports.
                  If it keeps failing, tell us the Tape&rsquo;s length and
                  recording quality so we can reproduce it.
                </P>
                <H3>A Tape says it needs attention, or backup seems stuck</H3>
                <P>
                  Check that Back Up to {site.name} Cloud is on, that the phone
                  is online (or on Wi-Fi if Use Cellular Data is off), and that
                  your storage allowance isn&rsquo;t full. {site.name} retries
                  on its own; a Tape that has stopped will say so on its card
                  and offer to retry.
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
