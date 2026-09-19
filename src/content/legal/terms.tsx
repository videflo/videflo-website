/*
 * ============================================================================
 *  TERMS OF SERVICE — Videflo 1.0
 * ============================================================================
 *
 *  Written against the shipping product (Videflo 1.0, build 23): a required
 *  Videflo account (Sign in with Apple), one auto-renewing monthly subscription
 *  that includes Videflo Cloud at a choice of storage capacities, automatic
 *  cloud protection of recordings, Shared Tapes with invited members, Delete
 *  Tape that removes a Tape everywhere, and Delete Account.
 *
 *  This is a drafting starting point, not legal advice, and it has not been
 *  reviewed by a lawyer. Before publication:
 *
 *    1. Have counsel review the entire document for the launch markets set in
 *       `availability.launchMarkets`: the United States, Canada, Australia and
 *       New Zealand. Pay particular attention to the content licence, the
 *       Shared Tape terms, the disclaimers, limitation of liability,
 *       indemnification, governing law and dispute-resolution sections. Note
 *       that the Australian Consumer Law and New Zealand's Consumer Guarantees
 *       Act create guarantees that CANNOT be excluded; the carve-outs for both
 *       are in the Disclaimers and Limitation of liability sections and must
 *       not be removed.
 *    2. Resolve every OWNER DECISION in `src/config/site.ts`. Nothing renders
 *       as a placeholder; a missing value is omitted.
 *    3. DECIDED (owner): informal resolution for 30 days, then exclusive venue
 *       in Utah, with an explicit carve-out preserving consumers' right to sue
 *       in their home country under their own mandatory law. No arbitration
 *       clause and no class-action waiver. Counsel still needs to confirm this
 *       is enforceable in each market.
 *    4. Confirm the subscription terms match App Store Connect: one monthly
 *       subscription, three storage capacities in one subscription group, no
 *       free trial, no introductory offer, no Family Sharing.
 *    5. Confirm compliance with Apple's required "minimum terms" for licensed
 *       applications (the EULA schedule in the Apple Developer Program
 *       agreement), including Apple as a third-party beneficiary.
 *    6. Update `legal.terms` in `src/config/site.ts` whenever the text changes.
 * ============================================================================
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import { A, Callout, H3, LI, Mail, P, UL } from "@/components/legal/prose";
import {
  availability,
  contact,
  legal,
  site,
  subscription,
} from "@/config/site";
import { formatList } from "@/lib/format";

export const termsSections: readonly LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of terms",
    content: (
      <>
        <P>
          These Terms of Service (the “Terms”) are an agreement between you and{" "}
          {legal.entityName} (“{site.name}”, “we”, “us”) covering your use of
          the {site.name} app, {site.name} Cloud, and this website (together,
          the “Service”).
        </P>
        <P>
          By downloading, installing, signing in to, or using {site.name}, you
          agree to these Terms and to our <A href="/privacy">Privacy Policy</A>.
          If you do not agree, do not use the Service.
        </P>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    content: (
      <>
        <P>
          You must be old enough to form a binding contract in the country where
          you live, and at least the minimum age required by the App Store for
          this app, to use {site.name}. The minimum age differs by country: it
          is higher in some places, and several countries set a separate minimum
          age for consenting to online services.
        </P>
        <P>
          If you are under that age, you may use {site.name} only with the
          involvement of a parent or guardian, who accepts these Terms on your
          behalf and is responsible for your use of the app.
        </P>
        <P>
          If you use {site.name} on behalf of a household or family, you are
          responsible for making sure anyone who uses your device or your
          account follows these Terms.
        </P>
      </>
    ),
  },
  {
    id: "service-description",
    heading: "The Videflo service",
    content: (
      <>
        <P>
          {site.name} is an app for recording and keeping home videos. It lets
          you create a “Tape” for an event or chapter of life, add recordings to
          that Tape over time, watch a Tape as one continuous video, organise
          Tapes into Collections, and export copies of your Tapes to your photo
          library.
        </P>
        <P>
          With a {site.name} account and an active subscription, {site.name}{" "}
          also protects your recordings in {site.name} Cloud, plays them back
          from {site.name} Cloud on any device you sign in to, and lets you
          share a Tape with people you invite so that they can add their own
          recordings to it.
        </P>
        <P>
          {site.name} is an iPhone app. It does not currently offer an iPad,
          Mac, web or Android version, and nothing in these Terms should be read
          as a commitment to build one.
        </P>
        <P>
          {site.name} is currently offered through the Apple App Store in{" "}
          {formatList(availability.launchMarkets)}. We expect to add more
          countries over time. Pricing, currency, and the languages the app is
          offered in vary by region and can change. Being able to download{" "}
          {site.name} in your country is not a representation that it complies
          with any local requirement beyond those Apple applies, and you are
          responsible for your own compliance with the law where you use it.
        </P>
      </>
    ),
  },
  {
    id: "accounts",
    heading: "Your account",
    content: (
      <>
        <P>
          {site.name} requires an account, created and accessed with Sign in
          with Apple. You may create one account for yourself. You are
          responsible for everything that happens under your account, for
          keeping your Apple Account and your device secure, and for telling us
          promptly if you believe your account has been used without your
          permission.
        </P>
        <P>
          Your Profile — your display name, username and photo or avatar — is
          shown to other {site.name} users you interact with. You must not use a
          name, username or picture that impersonates somebody else, that you do
          not have the right to use, or that is offensive or unlawful. Usernames
          are unique and cannot be changed once claimed.
        </P>
        <P>
          You can sign out at any time, and you can permanently delete your
          account from within the app — see{" "}
          <A href="/terms#termination">Ending your account</A>.
        </P>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    heading: "Your responsibilities",
    content: (
      <>
        <P>You are responsible for:</P>
        <UL>
          <LI>
            the device you use, its passcode, its storage space, and its
            backups;
          </LI>
          <LI>
            what you record, import and share, and for having the right and any
            necessary consent to record the people who appear in your videos and
            to share those videos with the people you invite;
          </LI>
          <LI>
            complying with the laws that apply where you record, including laws
            about recording other people and about audio recording; and
          </LI>
          <LI>
            keeping your own copies of anything you cannot afford to lose.{" "}
            {site.name} Cloud is a protective copy, not a guarantee — see{" "}
            <A href="/terms#videflo-cloud">{site.name} Cloud</A>.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "user-content",
    heading: "Your content",
    content: (
      <>
        <P>
          Your recordings, imported videos, Tapes, Collections, names, cover
          photos and Profile (together, your “Content”) are yours. You keep all
          rights in them. We claim no ownership of your Content.
        </P>
        <P>
          To provide the Service, we need your permission to handle your
          Content. You grant {legal.entityName} a worldwide, non-exclusive,
          royalty-free licence to store, copy, transmit, stream, display and
          otherwise process your Content solely as necessary to operate the
          Service for you and for the people you choose to share with — for
          example to keep a copy in {site.name} Cloud, to play a Tape back to
          you, to render an export you request, and to show a Shared Tape to its
          members. This licence exists only for that purpose, does not let us
          use your Content for advertising, promotion or training any model, and
          ends when you delete the Content or your account, except to the extent
          it has been shared with others as described below or we are required
          by law to retain it.
        </P>
        <P>
          If you choose to send us content as part of a support request, you
          give us permission to use it only to help you with that request.
        </P>
      </>
    ),
  },
  {
    id: "videflo-cloud",
    heading: "Videflo Cloud",
    content: (
      <>
        <P>
          While{" "}
          <strong className="text-ink">Back Up to {site.name} Cloud</strong> is
          on, each recording you make and its Tape details are copied to{" "}
          {site.name} Cloud. The original file stays on your device and is never
          modified by a backup. You can turn backup off, and you can choose
          whether it may use cellular data, in the app’s Settings.
        </P>
        <H3>Storage allowance</H3>
        <P>
          Your subscription includes {subscription.includedStorageLabel} of{" "}
          {site.name} Cloud storage. Larger capacities are available as upgrades
          within the same subscription, at the price the App Store shows you.
          The owner of a Tape pays for that Tape’s storage, including recordings
          other members add to a Shared Tape. Recordings you add to somebody
          else’s Shared Tape count against their allowance, not yours.
        </P>
        <P>
          If your account is over its allowance — for example after moving to a
          smaller capacity — {site.name} keeps everything already stored and
          declines new uploads until you are within your allowance again. You
          will have at least {subscription.overAllowanceGraceDays} days to free
          up space or choose a larger capacity. {site.name} does not currently
          delete stored content automatically; if that ever changes, we will
          give you notice and a reasonable opportunity to download or export
          your Content first.
        </P>
        <H3>Removing and downloading</H3>
        <P>
          Once a Tape is fully protected in {site.name} Cloud, you may remove
          its files from your device to free space; the Tape then plays by
          streaming, and you may download it to your device again at any time. A
          copy on your device and a copy in {site.name} Cloud are two different
          things: playing a Tape from {site.name} Cloud does not put its files
          back on your device.
        </P>
        <Callout title="A protective copy, not a guarantee">
          <p>
            {site.name} Cloud materially reduces the chance of losing a memory,
            and we work to keep it reliable. It is still a service that depends
            on your device, your network, Apple, and our providers, and it can
            be interrupted. Keep your own device backup, and export the Tapes
            you could not bear to lose. We are not responsible for loss of
            Content that was never uploaded, that was removed from your device
            before its upload completed, or that you deleted.
          </p>
        </Callout>
        <H3>If your subscription ends</H3>
        <P>
          {site.name} requires an active subscription to open. If yours ends,
          your recordings stay on your device, and we do not currently delete
          Content from {site.name} Cloud because a subscription has ended;
          subscribing again restores access to all of it. This is a description
          of current practice, not a promise to store Content indefinitely. We
          may establish retention or deletion rules for accounts that remain
          lapsed, subject to applicable law and these Terms; if we do, we will
          give you notice and a reasonable opportunity to subscribe again or to
          recover your Content before anything is removed.
        </P>
      </>
    ),
  },
  {
    id: "shared-tapes",
    heading: "Shared Tapes",
    content: (
      <>
        <P>
          You may invite other {site.name} users to a Tape you own, by username
          or by a single-use link sent as a text message. A person who accepts
          becomes a member of that Tape: they can watch the whole Tape and add
          their own recordings to it. Being connected to somebody in Friends
          &amp; Family does not, on its own, give them access to any of your
          Tapes.
        </P>
        <H3>If you own a Shared Tape</H3>
        <UL>
          <LI>
            You control it. You may cancel invitations, remove members, stop the
            Tape from accepting new recordings, and delete the Tape.
          </LI>
          <LI>
            Deleting a Shared Tape deletes it for everyone, including recordings
            that other members added. Do not delete a Tape that holds somebody
            else’s recordings without considering them.
          </LI>
          <LI>
            The Tape’s storage, including members’ recordings, counts against
            your allowance.
          </LI>
          <LI>
            You are responsible for whom you invite. Anyone who receives a link
            you send can join the Tape until the link is used.
          </LI>
        </UL>
        <H3>If you add a recording to somebody else’s Tape</H3>
        <UL>
          <LI>
            Your recording becomes part of that person’s Tape. Every member can
            watch it, and the owner can delete the Tape or remove you from it.
          </LI>
          <LI>
            If you leave the Tape or delete your account, recordings you added
            stay in the Tape — they are part of that person’s memory — but are
            no longer attributed to you. Only the Tape’s owner can remove a
            recording from a Shared Tape, so if you do not want a recording of
            yours to remain, ask the owner to delete it.
          </LI>
          <LI>
            Only the owner of a Shared Tape can export the whole Tape to their
            photo library. Every member can watch it in the app.
          </LI>
          <LI>
            You grant the Tape’s owner and its members permission to watch the
            recordings you add, and the owner permission to keep them as part of
            the Tape, on the terms described here.
          </LI>
        </UL>
        <P>
          You must only add recordings you have the right to share, and you must
          not use a Shared Tape to harass, deceive or harm anybody. We may
          remove content or suspend accounts that breach these Terms.
        </P>
      </>
    ),
  },
  {
    id: "device-storage",
    heading: "Device storage",
    content: (
      <>
        <P>
          Recordings are written to your device first. Video files are large,
          and it is your responsibility to keep enough free storage for the
          recordings you make. {site.name} warns you while you record if space
          is running low, and it lets you free space by removing Tapes that are
          already protected in {site.name} Cloud.
        </P>
        <P>
          Deleting the {site.name} app removes the recordings stored on that
          device. It does not delete your account, your Content in {site.name}{" "}
          Cloud, or your subscription.
        </P>
      </>
    ),
  },
  {
    id: "subscriptions",
    heading: "Subscriptions",
    content: (
      <>
        <P>
          {site.name} requires a paid subscription. It is sold as one
          auto-renewable monthly subscription through the Apple App Store, and
          includes {site.name} Cloud storage. The same subscription is offered
          at more than one storage capacity; moving between capacities is a
          change to your existing subscription, not a second subscription.
        </P>
        <P>
          The price and billing period that apply to you are the ones shown to
          you by Apple at the moment of purchase. Prices are set and displayed
          by Apple, are charged in your local currency, and may differ by region
          and change over time.
        </P>
        <P>
          {site.name} does not currently offer a free trial, an introductory
          offer, or Family Sharing. If any is made available in future, its
          terms will be shown by Apple before you purchase.
        </P>
      </>
    ),
  },
  {
    id: "billing",
    heading: "Billing and automatic renewal",
    content: (
      <>
        <UL>
          <LI>
            Payment is charged to your Apple Account at confirmation of
            purchase.
          </LI>
          <LI>
            A subscription renews automatically for the same period unless you
            cancel it at least 24 hours before the end of the current period.
          </LI>
          <LI>
            Your Apple Account is charged for the renewal within 24 hours before
            the end of the current period, at the then-current price for your
            capacity.
          </LI>
          <LI>
            Changing to a larger capacity takes effect when Apple processes the
            change and is prorated by Apple. Changing to a smaller capacity
            takes effect at your next renewal; until then you keep the allowance
            you have paid for.
          </LI>
          <LI>
            Apple manages billing, receipts, and renewal notices. We do not
            process or store your payment details.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "cancellation",
    heading: "Cancellation",
    content: (
      <>
        <P>
          You can cancel at any time in your Apple Account subscription settings
          on your iPhone. Cancelling stops future renewals; your subscription
          remains active until the end of the period you have already paid for.
        </P>
        <P>
          Deleting the {site.name} app, signing out, or deleting your{" "}
          {site.name} account does not cancel a subscription — the subscription
          is held in your Apple Account, so it must be cancelled there. The{" "}
          <A href="/support">Support</A> page explains where to find it.
        </P>
      </>
    ),
  },
  {
    id: "refunds",
    heading: "Refunds",
    content: (
      <>
        <P>
          Purchases made through the App Store are billed by Apple, and refunds
          are handled by Apple under Apple’s policies. We are not able to issue
          a refund for an App Store purchase ourselves.
        </P>
        <P>
          To request a refund, use Apple’s “Report a Problem” process or contact
          Apple Support. If you believe something in {site.name} is not working
          as it should, please also write to{" "}
          <Mail address={contact.supportEmail} /> so we can try to fix it.
        </P>
      </>
    ),
  },
  {
    id: "restore-purchases",
    heading: "Restore Purchases",
    content: (
      <>
        <P>
          Your subscription belongs to your Apple Account. If you reinstall{" "}
          {site.name} or set up a new phone, sign in with Apple and, if the
          subscription screen appears, use{" "}
          <strong className="text-ink">Restore Purchases</strong> to restore an
          eligible active subscription bought with the same Apple Account.
        </P>
        <P>
          Restoring a purchase restores access. Your Tapes come back separately,
          from {site.name} Cloud, when you sign in to the same {site.name}{" "}
          account; recordings that were never backed up exist only on the phone
          that made them.
        </P>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    content: (
      <>
        <P>You agree not to:</P>
        <UL>
          <LI>
            use {site.name} to record or share anyone unlawfully or without
            required consent;
          </LI>
          <LI>
            use {site.name} to create, store or share content that is illegal,
            or that exploits or endangers a child;
          </LI>
          <LI>
            use invitations, Friends &amp; Family requests or Shared Tapes to
            harass, deceive, impersonate or harm anybody, or send invitations to
            people who have not agreed to receive them;
          </LI>
          <LI>
            access or attempt to access another person’s account, Tape or
            Content without their permission;
          </LI>
          <LI>
            reverse engineer, decompile, or attempt to extract the source code
            of the app, except to the extent that applicable law expressly
            permits it;
          </LI>
          <LI>
            interfere with or attempt to circumvent security, storage
            allowances, licensing, or purchase verification; or
          </LI>
          <LI>
            copy, resell, sublicense, or redistribute the app or any part of it.
          </LI>
        </UL>
        <P>
          Recording laws differ sharply between countries and, in the United
          States, between states — some require the consent of everyone being
          recorded, particularly for audio. You are responsible for knowing and
          following the rules that apply where you are recording.
        </P>
      </>
    ),
  },
  {
    id: "export",
    heading: "Export controls and sanctions",
    content: (
      <>
        <P>
          {site.name} is provided from the {legal.governingCountry} and is
          subject to its export control and sanctions laws, as well as those of
          any other country that applies to you.
        </P>
        <P>By using {site.name}, you confirm that:</P>
        <UL>
          <LI>
            you are not located in, and are not ordinarily resident in, a
            country or territory subject to comprehensive{" "}
            {legal.governingCountry} sanctions;
          </LI>
          <LI>
            you are not listed on any {legal.governingCountry} government list
            of prohibited or restricted parties; and
          </LI>
          <LI>
            you will not export, re-export, or transfer {site.name} in breach of
            those laws.
          </LI>
        </UL>
        <P>
          Apple applies its own controls on where the App Store distributes
          apps, which operate independently of these Terms.
        </P>
      </>
    ),
  },
  {
    id: "language",
    heading: "Language",
    content: (
      <P>
        These Terms are written in English. If we provide a translation, it is
        offered for convenience only, and the English version governs to the
        extent the two conflict — except where the law of your country requires
        otherwise, in which case the version in your language governs.
      </P>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    content: (
      <>
        <P>
          The {site.name} app, {site.name} Cloud, this website, the {site.name}{" "}
          name and wordmark, the built-in avatars, and the design, text, and
          graphics we create are owned by {legal.entityName} and protected by
          intellectual property laws.
        </P>
        <P>
          We grant you a personal, limited, non-exclusive, non-transferable,
          revocable licence to use one copy of the app on Apple-branded devices
          you own or control, as permitted by the App Store Terms of Service,
          for your own non-commercial use. No other rights are granted.
        </P>
      </>
    ),
  },
  {
    id: "feedback",
    heading: "Feedback",
    content: (
      <P>
        If you send us ideas, suggestions, or feature requests, we may use them
        to improve {site.name} without any obligation, payment, or
        confidentiality, and without giving you any rights in the result. Please
        do not send us anything you consider confidential or that you do not
        want us to use.
      </P>
    ),
  },
  {
    id: "third-party",
    heading: "Third-party services",
    content: (
      <>
        <P>
          {site.name} is distributed by Apple and uses Apple services for
          downloads, sign-in, purchases, restoring purchases and notification
          delivery. Your use of the App Store and your Apple Account is governed
          by Apple’s terms, not ours.
        </P>
        <P>
          You acknowledge that Apple has no obligation to provide maintenance or
          support for {site.name}, and that Apple is a third-party beneficiary
          of these Terms and may enforce them against you.
        </P>
        <P>
          {site.name} Cloud runs on infrastructure provided by third parties,
          and our subscription records are held by a subscription infrastructure
          provider; both are named in the{" "}
          <A href="/privacy#service-providers">Privacy Policy</A>. They act on
          our behalf, and these Terms are between you and us alone.
        </P>
      </>
    ),
  },
  {
    id: "availability",
    heading: "Service availability and changes",
    content: (
      <>
        <P>
          We may add, change, or remove features, change the storage capacities
          we offer, or stop offering {site.name} altogether. We may also stop
          supporting older versions of iOS. {site.name} Cloud may occasionally
          be unavailable for maintenance or for reasons outside our control; the
          app is built so that recording and watching Tapes already on your
          device continue to work without a connection.
        </P>
        <P>
          If we discontinue the Service or {site.name} Cloud, we will make
          reasonable efforts to give you notice and a reasonable period to
          download your Tapes to your device or export them to your photo
          library before anything is removed.
        </P>
      </>
    ),
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    content: (
      <>
        <P>
          The Service is provided “as is” and “as available”, without warranties
          of any kind, whether express, implied, or statutory, including any
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </P>
        <P>
          We do not warrant that the Service will be uninterrupted, error-free,
          or free from data loss, that a recording, upload, download or export
          will always succeed, or that a recording, Tape or Content in{" "}
          {site.name} Cloud will be preserved. You are responsible for your own
          backups.
        </P>
        <P>
          Some jurisdictions do not allow the exclusion of certain warranties,
          so some of the above may not apply to you, and nothing in these Terms
          limits rights you have under mandatory consumer protection law.
        </P>
        <Callout title="Australia and New Zealand">
          <p>
            Nothing in these Terms excludes, restricts, or modifies any
            guarantee, right, or remedy you have under the Australian Consumer
            Law or, in New Zealand, the Consumer Guarantees Act 1993 and the
            Fair Trading Act 1986, where those laws apply to you. Those
            guarantees cannot be excluded. Where we are permitted to limit our
            liability for a breach of them, our liability is limited to
            re-supplying the Service or paying the cost of having it
            re-supplied.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    content: (
      <>
        <P>
          To the maximum extent permitted by law, {legal.entityName} will not be
          liable for any indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for any loss of data, recordings,
          or memories, loss of profits, or loss of goodwill, arising out of or
          relating to your use of the Service.
        </P>
        <P>
          To the maximum extent permitted by law, our total liability for all
          claims relating to the Service is limited to the greater of the amount
          you paid us (or paid Apple for {site.name}) in the twelve months
          before the claim, or twenty-five United States dollars (US$25).
        </P>
        <P>
          These limits apply even if we have been advised of the possibility of
          such damages, and even if a limited remedy fails of its essential
          purpose. Some jurisdictions do not allow certain limitations, so parts
          of this section may not apply to you.
        </P>
        <P>
          Nothing in this section limits liability that cannot be limited by law
          — including liability for death or personal injury caused by
          negligence, for fraud, and for any consumer guarantee that applicable
          law says cannot be excluded, such as those under the Australian
          Consumer Law and New Zealand’s Consumer Guarantees Act 1993.
        </P>
      </>
    ),
  },
  {
    id: "indemnification",
    heading: "Indemnification",
    content: (
      <P>
        You agree to indemnify and hold harmless {legal.entityName} and its
        officers, employees, and agents from any claims, damages, liabilities,
        costs, and expenses (including reasonable legal fees) arising out of
        your use of the Service, your Content, the Content you share or add to
        somebody else’s Tape, or your breach of these Terms — including a claim
        brought by someone who appears in a recording you made or shared.
      </P>
    ),
  },
  {
    id: "termination",
    heading: "Ending your account",
    content: (
      <>
        <P>
          You may stop using {site.name} at any time. Signing out leaves your
          account and your Content in {site.name} Cloud as they are. Deleting
          the app removes the recordings on that device only.
        </P>
        <P>
          <strong className="text-ink">Delete Account</strong>, in the app’s
          Settings, permanently deletes your account and every Tape you own in{" "}
          {site.name} Cloud, including recordings other people added to your
          Shared Tapes. Recordings you added to somebody else’s Shared Tape
          remain in that Tape without attribution. Videos already on your device
          are not deleted by this, and your subscription is not cancelled —
          cancel it separately in your Apple Account settings. Deletion cannot
          be undone.
        </P>
        <P>
          We may suspend or terminate your access to the Service if you
          materially breach these Terms, if we are required to do so by law, or
          if we discontinue the Service as described above. Sections that by
          their nature should survive termination — including your content
          licence to the extent Content remains in other people’s Shared Tapes,
          intellectual property, disclaimers, limitation of liability, and
          indemnification — continue to apply.
        </P>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing law",
    content: (
      <>
        <P>
          {legal.entityName} is {legal.entityDescription}. These Terms and any
          dispute arising out of them are governed by the laws of the State of{" "}
          {legal.governingState}, {legal.governingCountry}, excluding its
          conflict-of-laws rules.
        </P>
        <Callout title="This does not take away your local consumer rights">
          <p>
            If you are a consumer, you keep the protection of the mandatory
            consumer-law rules of the country where you live, and nothing in
            these Terms limits them. Where those rules conflict with{" "}
            {legal.governingState} law, the mandatory rules of your country
            apply. That includes, without limitation, the Australian Consumer
            Law, New Zealand’s Consumer Guarantees Act 1993, and Canadian
            provincial consumer-protection legislation.
          </p>
        </Callout>
        <P>
          The United Nations Convention on Contracts for the International Sale
          of Goods does not apply to these Terms.
        </P>
      </>
    ),
  },
  {
    id: "disputes",
    heading: "Dispute resolution",
    content: (
      <>
        <H3>Talk to us first</H3>
        <P>
          If something goes wrong, please contact us at{" "}
          <Mail address={contact.legalEmail} /> before starting formal
          proceedings, and describe the problem and the outcome you are looking
          for. We will make a genuine effort to resolve it with you within 30
          days. Most problems are settled this way, and it costs neither of us
          anything.
        </P>

        <H3>If that does not resolve it</H3>
        <P>
          Any dispute that is not resolved informally will be brought
          exclusively in {legal.venue}, and you and {legal.entityName} each
          consent to the personal jurisdiction of those courts —{" "}
          <strong className="text-ink">
            except where the paragraph below gives you a different right.
          </strong>
        </P>

        <Callout title="Consumers may sue where they live">
          <p>
            If you are a consumer, nothing above prevents you from bringing
            proceedings in the courts of the country where you live, or from
            relying on any mandatory consumer-protection law of that country.
            You may also complain to your local consumer-protection regulator —
            for example the ACCC in Australia, the Commerce Commission in New
            Zealand, or your provincial consumer affairs office in Canada. We do
            not require you to arbitrate, and these Terms contain no
            class-action waiver.
          </p>
        </Callout>

        <P>
          Purchases are made from Apple rather than from us, so a dispute about
          billing, a charge, or a refund is generally between you and Apple. See{" "}
          <A href="/terms#refunds">Refunds</A>.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    content: (
      <>
        <P>
          We may update these Terms as {site.name} changes or as the law
          requires. When we do, we will revise the “Last updated” date at the
          top of this page.
        </P>
        <P>
          If a change is material, we will make reasonable efforts to notify you
          before it takes effect. Continuing to use {site.name} after a change
          takes effect means you accept the updated Terms.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact information",
    content: (
      <>
        <P>Questions about these Terms:</P>
        <UL>
          <LI>
            Email: <Mail address={contact.legalEmail} />
          </LI>
          {legal.entityAddress ? (
            <LI>Postal address: {legal.entityAddress}</LI>
          ) : null}
        </UL>
        <P>
          {legal.entityName}, {legal.entityDescription}.
        </P>
      </>
    ),
  },
];
