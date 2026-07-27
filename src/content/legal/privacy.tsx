/*
 * ============================================================================
 *  DRAFT — REQUIRES OWNER AND LEGAL REVIEW BEFORE PUBLICATION
 * ============================================================================
 *
 *  This document is a carefully written starting point, not legal advice, and it
 *  has not been reviewed by a lawyer. Before videflo.com goes live:
 *
 *    1. Have counsel review the whole document for the launch markets, which are
 *       set in `availability.launchMarkets` in the site config: the United
 *       States (CCPA/CPRA and other state laws), Canada (PIPEDA), Australia
 *       (Privacy Act 1988 / APPs) and New Zealand (Privacy Act 2020) — plus
 *       Apple's own App Store privacy requirements.
 *
 *       Videflo is deliberately NOT sold in the EEA or the UK at launch, so the
 *       GDPR is addressed but not relied on. Before adding any European market,
 *       re-read "International users and transfers": an EU Article 27
 *       representative and a UK representative may have to be APPOINTED, which
 *       is an action, not a wording change.
 *    2. Replace every `<Placeholder>` value — they render visibly on the page.
 *    3. Confirm the factual claims against the shipping build. In particular the
 *       "Diagnostics and analytics" section asserts what the app does and does
 *       NOT collect; that must be verified against the actual binary and any
 *       third-party SDKs before publication.
 *    4. Make sure this matches the App Store privacy questionnaire ("App Privacy
 *       Details") answers exactly. A mismatch is an App Review rejection.
 *    5. Update `legal.privacy` in `src/config/site.ts` whenever the text changes.
 *
 *  Written to reflect the product as it exists today: local-first storage, no
 *  cloud backup, no account, no sharing feature, purchases handled by Apple.
 *  Do not add claims about features Videflo does not have.
 * ============================================================================
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import {
  A,
  Callout,
  H3,
  LI,
  Mail,
  P,
  Placeholder,
  UL,
} from "@/components/legal/prose";
import { availability, contact, legal, site } from "@/config/site";
import { formatList } from "@/lib/format";

export const privacySections: readonly LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <P>
          This Privacy Policy explains how {legal.entityName},{" "}
          {legal.entityDescription} (“{site.name}”, “we”, “us”), handles
          information in connection with the {site.name} iPhone app and this
          website. It applies wherever you use {site.name}.
        </P>
        <P>
          {site.name} is built to be local-first. The videos you record are
          created and stored on your device, and the app is designed so that you
          do not need to create an account or send your recordings to us in
          order to use it.
        </P>
        <P>
          If you do not agree with this policy, please do not use {site.name}.
          Your use of the app is also governed by our{" "}
          <A href="/terms">Terms of Service</A>.
        </P>
      </>
    ),
  },
  {
    id: "information-we-process",
    heading: "Information Videflo may process",
    content: (
      <>
        <P>
          We have designed {site.name} to work with as little information as
          possible. The categories below describe what may be processed and
          where it lives.
        </P>

        <H3>Content you create</H3>
        <P>
          Your recordings, Tapes, Collections, Tape names, and any cover photo
          you choose. This content is stored on your device. We do not receive
          it, and
          {site.name} contains no feature that uploads your recordings to us.
        </P>

        <H3>Information you send us directly</H3>
        <P>
          If you email support, we receive your email address, your message, and
          anything you choose to attach — which may include a description of
          your device or a screenshot. We use it to answer you.
        </P>

        <H3>Purchase information</H3>
        <P>
          If you buy a subscription, the transaction is handled by Apple. We may
          receive confirmation of subscription status and non-identifying
          transaction records from Apple. We do not receive your full payment
          card details.
        </P>

        <H3>Website information</H3>
        <P>
          When you visit this website, our hosting provider processes standard
          technical information such as your IP address, browser type, and the
          pages you request, in order to serve the site and keep it secure.{" "}
          <Placeholder>
            Owner to confirm which website analytics, if any, are enabled before
            launch.
          </Placeholder>
        </P>
      </>
    ),
  },
  {
    id: "permissions",
    heading: "Photos, videos, camera, and microphone access",
    content: (
      <>
        <P>
          {site.name} is a recording app, so it asks iOS for access to the
          hardware and libraries it needs. Every one of these permissions is
          requested by iOS, granted by you, and can be changed or revoked at any
          time in{" "}
          <strong className="text-ink">
            Settings → Privacy &amp; Security
          </strong>{" "}
          or in <strong className="text-ink">Settings → {site.name}</strong>.
        </P>
        <UL>
          <LI>
            <strong className="text-ink">Camera.</strong> Required to record
            video. {site.name} records only while you have started a recording
            in the app.
          </LI>
          <LI>
            <strong className="text-ink">Microphone.</strong> Required to
            capture sound with your video. Without it, {site.name} cannot record
            audio.
          </LI>
          <LI>
            <strong className="text-ink">Photos.</strong> Used only if you
            choose a cover photo for a Tape or Collection, or export a Tape to
            your photo library. When you pick a photo, iOS shows you its own
            picker and hands
            {site.name} only the item you selected — {site.name} does not browse
            your library.
          </LI>
        </UL>
        <P>
          If you decline a permission, the related part of the app simply will
          not work; nothing else about your use of {site.name} changes.
        </P>
      </>
    ),
  },
  {
    id: "local-storage",
    heading: "Local device storage",
    content: (
      <>
        <P>
          Your Tapes, recordings, Tape names, Collections, cover photos, and app
          settings are stored in {site.name}’s own storage area on your iPhone.
          The original recording files are treated as the source of truth and
          are not modified in place.
        </P>
        <P>
          Because this storage is part of the app, it is included in an iPhone
          backup that covers app data (for example an iCloud or computer backup
          you have configured yourself). {site.name} does not operate that
          backup and cannot restore your recordings for you.
        </P>
        <Callout title="Local storage is not a backup">
          <p>
            {site.name} does not offer cloud backup, cross-device sync, or
            recovery from a lost device. If your iPhone is lost, damaged, or
            erased, or if you delete the app, recordings that exist only inside{" "}
            {site.name} may be permanently lost. Keep your own device backup,
            and export the Tapes you cannot replace.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "subscriptions",
    heading: "Subscription and purchase information",
    content: (
      <>
        <P>
          {site.name} may offer paid subscriptions. Purchases are made through
          your Apple Account using Apple’s in-app purchase system, and Apple
          processes the payment.
        </P>
        <UL>
          <LI>
            We do not collect or store your credit card number, bank details, or
            billing address.
          </LI>
          <LI>
            We may receive from Apple information needed to confirm whether a
            subscription is active, such as a receipt or transaction identifier
            and the product purchased.
          </LI>
          <LI>
            Apple’s handling of your payment information is governed by Apple’s
            own privacy policy, not this one.
          </LI>
        </UL>
        <P>
          Subscription terms, renewal, and cancellation are described in the{" "}
          <A href="/terms">Terms of Service</A>.
        </P>
      </>
    ),
  },
  {
    id: "apple",
    heading: "Apple and StoreKit",
    content: (
      <>
        <P>
          {site.name} is distributed through the Apple App Store and uses
          Apple’s StoreKit framework for purchases and for restoring previous
          purchases. When you download the app, buy a subscription, or restore
          purchases, Apple processes information about that activity.
        </P>
        <P>
          Apple may also provide us with aggregate, non-identifying reports
          about the app — for example App Store statistics, or crash and
          performance data where you have chosen to share it with developers in
          iOS settings.
        </P>
        <P>
          We do not control Apple’s systems. Please refer to Apple’s privacy
          policy for how Apple handles your information.
        </P>
      </>
    ),
  },
  {
    id: "diagnostics",
    heading: "Diagnostics and analytics",
    content: (
      <>
        <P>
          {site.name} is designed to work without tracking how you use it, and
          it contains no advertising and no advertising identifiers.
        </P>
        <P>
          <Placeholder>
            Owner to confirm before publication: whether the shipping build
            includes any third-party analytics, attribution, or crash-reporting
            SDK. If one is added, name it here, describe what it collects, and
            update the App Store privacy questionnaire to match.
          </Placeholder>
        </P>
        <P>
          Separately from the app, Apple may make aggregate diagnostic
          information available to us as described in the section above. That
          information comes from iOS and is subject to your device settings, not
          to a choice made inside {site.name}.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How information may be used",
    content: (
      <>
        <P>Where we do process information, we use it to:</P>
        <UL>
          <LI>provide and operate the app and this website;</LI>
          <LI>confirm and manage subscription status;</LI>
          <LI>respond to your support requests;</LI>
          <LI>
            diagnose crashes and defects, and improve the stability and quality
            of the app;
          </LI>
          <LI>
            detect, prevent, and address fraud, abuse, and security incidents;
            and
          </LI>
          <LI>comply with legal obligations.</LI>
        </UL>
        <P>
          We do not sell your personal information, and we do not use your
          recordings to train machine-learning models.
        </P>
      </>
    ),
  },
  {
    id: "service-providers",
    heading: "Service providers",
    content: (
      <>
        <P>
          We rely on a small number of providers to operate {site.name} — for
          example Apple for app distribution and payments, our website hosting
          provider, and our email provider for support correspondence.
        </P>
        <P>
          These providers process information on our behalf and only as needed
          to provide their service.{" "}
          <Placeholder>
            Owner to list the specific providers used at launch (hosting, email,
            and any analytics) once they are finalised.
          </Placeholder>
        </P>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Data retention",
    content: (
      <>
        <P>
          Your recordings and Tapes stay on your device for as long as you keep
          them. You can delete an individual recording, a Tape, or a Collection
          in the app, and deleting {site.name} removes the app’s local data from
          your device.
        </P>
        <P>
          Support emails are kept for as long as needed to handle your request
          and to keep a reasonable record of it. Purchase records provided by
          Apple are kept as long as needed to support your subscription and to
          meet accounting and legal requirements.
        </P>
      </>
    ),
  },
  {
    id: "choices",
    heading: "Your choices and permissions",
    content: (
      <>
        <UL>
          <LI>
            <strong className="text-ink">Permissions.</strong> Camera,
            microphone, and Photos access can be granted or withdrawn at any
            time in iOS Settings.
          </LI>
          <LI>
            <strong className="text-ink">Your content.</strong> You can delete
            recordings, Tapes, and Collections inside the app, and export copies
            whenever you want one.
          </LI>
          <LI>
            <strong className="text-ink">Subscriptions.</strong> You can view,
            change, or cancel a subscription in your Apple Account settings —
            see the <A href="/support">Support</A> page.
          </LI>
          <LI>
            <strong className="text-ink">Privacy requests.</strong> Depending on
            where you live, you may have rights to access, correct, delete, or
            port personal information we hold about you, or to object to certain
            processing. Contact us at <Mail address={contact.privacyEmail} />{" "}
            and we will respond as required by applicable law.
          </LI>
        </UL>
        <P>
          Because {site.name} keeps your recordings on your device and not on
          our servers, we generally cannot access, retrieve, or delete your
          Tapes on your behalf.
        </P>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children’s privacy",
    content: (
      <>
        <P>
          {site.name} is intended for adults — in particular parents and family
          members recording their own memories — and is not directed to
          children. We do not knowingly collect personal information from
          children.
        </P>
        <P>
          Families often record children. Recordings of children made with{" "}
          {site.name} stay on the device of the adult who made them, in the same
          way as any other recording, and are not sent to us.
        </P>
        <P>
          The age at which someone can consent to an online service on their own
          varies between our launch markets — it is 13 in the{" "}
          {legal.governingCountry} under COPPA, while Canada, Australia, and New
          Zealand judge it by whether the young person can understand what they
          are agreeing to. Where a parent or guardian’s consent is required,
          they must be the one to accept our{" "}
          <A href="/terms">Terms of Service</A> and to supervise use of the app.
        </P>
        <P>
          If you believe a child has provided us with personal information,
          please contact <Mail address={contact.privacyEmail} /> so we can
          delete it.{" "}
          <Placeholder>
            Owner to confirm the minimum age matches the App Store age rating
            and the Terms of Service, and counsel to confirm the position for
            each market Videflo is offered in.
          </Placeholder>
        </P>
      </>
    ),
  },
  {
    id: "security",
    heading: "Security",
    content: (
      <>
        <P>
          We take reasonable measures to protect information we handle, and{" "}
          {site.name} benefits from the protections iOS applies to app data on
          your device, such as the device passcode and platform-level file
          protection.
        </P>
        <P>
          No app, website, or method of transmission is completely secure, and
          we cannot guarantee that unauthorised access will never occur.
          Protecting your device with a passcode and keeping iOS up to date
          meaningfully protects the recordings stored in {site.name}.
        </P>
      </>
    ),
  },
  {
    id: "international",
    heading: "International users and transfers",
    content: (
      <>
        <P>
          {site.name} is operated from {legal.governingState},{" "}
          {legal.governingCountry}. It is currently offered through the App
          Store in {formatList(availability.launchMarkets)}. We expect to add
          more countries over time, and will update this policy when we do.
        </P>
        <P>
          If you use {site.name} from outside the {legal.governingCountry}, the
          limited information we do process — a support email, a subscription
          status relayed by Apple — is transferred to and handled in the{" "}
          {legal.governingCountry}, and in other countries where our service
          providers operate. Those countries may have data protection laws that
          differ from your own. Where the law of your country requires it, we
          take reasonable steps to see that the information stays protected to a
          comparable standard — including under Australian Privacy Principle 8
          and Information Privacy Principle 12 of New Zealand’s Privacy Act
          2020.
        </P>
        <Callout title="Your recordings are not part of any transfer">
          <p>
            This section is about the small amount of information we handle, not
            about your Tapes. Your recordings stay on your device, are never
            uploaded to us, and therefore never cross a border because of{" "}
            {site.name}.
          </p>
        </Callout>
        <H3>Europe and the United Kingdom</H3>
        <P>
          {site.name} is not currently offered in the European Economic Area or
          the United Kingdom, and we do not target users there. If you write to
          us from those regions we will still handle your message carefully and
          honour the rights described below, but the app is not sold in your
          country yet.
        </P>
        <P>
          <Placeholder>
            Before adding any EEA or UK country in App Store Connect: confirm
            whether GDPR Article 27 requires an EU representative to be
            appointed and the UK GDPR a UK representative, and confirm the
            transfer mechanism you rely on. If they apply, a person or firm must
            actually be appointed and named here — it is not a wording change.
            Set <code>availability.offeredInEeaUk</code> to true in the site
            config at the same time.
          </Placeholder>
        </P>
      </>
    ),
  },
  {
    id: "regional-rights",
    heading: "Regional privacy rights",
    content: (
      <>
        <P>
          Some of the rights below may not apply to you, and some may go further
          than the law of your country requires. We would rather offer them to
          everyone than make you prove where you live.
        </P>

        <H3>The United States</H3>
        <P>
          If you are in California, you may request to know, delete, or correct
          personal information we hold, and you may not be discriminated against
          for exercising those rights. We do not sell your personal information,
          and we do not share it for cross-context behavioural advertising, as
          those terms are defined by the CCPA as amended by the CPRA.
        </P>
        <P>
          A growing number of other states — including {legal.governingState},
          where {site.name} is registered — give residents comparable rights to
          access, correct, delete, and obtain a copy of their personal
          information. Write to us and we will honour them.
        </P>

        <H3>Canada</H3>
        <P>
          Under PIPEDA you may ask what personal information we hold about you,
          ask us to correct it, and challenge how we have handled it. If you are
          not satisfied with our response, you may complain to the Office of the
          Privacy Commissioner of Canada.
        </P>

        <H3>Australia</H3>
        <P>
          Under the Privacy Act 1988 and the Australian Privacy Principles you
          may request access to the personal information we hold about you and
          ask us to correct it. If you believe we have mishandled it, you may
          complain to us first, and then to the Office of the Australian
          Information Commissioner if you are not satisfied.
        </P>

        <H3>New Zealand</H3>
        <P>
          Under the Privacy Act 2020 you have the right to access the personal
          information we hold about you and to request correction. Complaints
          can be made to the Office of the Privacy Commissioner.
        </P>

        <H3>Everywhere else</H3>
        <P>
          Other countries and states grant similar rights. Write to{" "}
          <Mail address={contact.privacyEmail} /> and we will handle your
          request as the law that applies to you requires. We will not charge
          you for it except where the law allows, and we may need to verify your
          identity before acting.
        </P>
        <P>
          Where the GDPR or UK GDPR applies to you, {legal.entityName} is the
          controller of the limited personal information described in this
          policy, and our lawful bases are: performing our agreement with you
          (providing the app and answering support requests); our legitimate
          interests (keeping the app secure and working); your consent (the
          device permissions you grant in iOS); and compliance with legal
          obligations. As noted above, {site.name} is not currently sold in
          those regions.
        </P>

        <Callout title="What we can and cannot do for you">
          <p>
            Because your Tapes live on your device rather than our servers, we
            cannot retrieve, correct, export, or delete a recording on your
            behalf — we have no copy of it. Those actions are yours to take in
            the app, and deleting {site.name} removes its local data from your
            iPhone.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    content: (
      <>
        <P>
          We may update this Privacy Policy as {site.name} changes or as the law
          requires. When we do, we will revise the “Last updated” date at the
          top of this page.
        </P>
        <P>
          If a change materially affects how information is handled, we will
          make reasonable efforts to tell you — for example in the app or on
          this website — before it takes effect.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact information",
    content: (
      <>
        <P>Questions about this policy, or about privacy in {site.name}:</P>
        <UL>
          <LI>
            Privacy: <Mail address={contact.privacyEmail} />
          </LI>
          <LI>
            Support: <Mail address={contact.supportEmail} />
          </LI>
          <LI>
            Postal address: <Placeholder>{legal.entityAddress}</Placeholder>
          </LI>
        </UL>
        <P>
          The data controller is {legal.entityName}, {legal.entityDescription}.{" "}
          <Placeholder>
            Confirm the exact registered name against the Utah filing before
            publication.
          </Placeholder>
        </P>
      </>
    ),
  },
];
