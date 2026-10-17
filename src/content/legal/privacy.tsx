/*
 * ============================================================================
 *  PRIVACY POLICY — Videflo 1.0
 * ============================================================================
 *
 *  Written against the shipping product (Videflo 1.0, build 23) and its privacy
 *  manifest, `Videflo/PrivacyInfo.xcprivacy`, which declares email address,
 *  name, user ID, photos or videos, other user content, purchase history and
 *  device ID — all linked to the person, none used for tracking, and
 *  `NSPrivacyTracking` false. Every factual claim below describes behaviour
 *  that exists in that build:
 *
 *    - Sign in with Apple is required; identity comes from Apple's signed token.
 *    - A Profile (display name, username, photo or preset avatar) is required.
 *    - Recordings are made on the phone and, while "Back Up to Videflo Cloud"
 *      is on (the default), copied to Videflo Cloud with their Tape details.
 *    - Shared Tapes let invited people add recordings and watch the whole Tape.
 *    - Purchases go through Apple; subscription status is verified server-side
 *      with Apple and through RevenueCat.
 *    - Third-party code in the app is limited to the Supabase and RevenueCat
 *      SDKs. There is no analytics, advertising or crash-reporting SDK.
 *
 *  DRAFT REVISION (October 2026): the 30-day cloud retention period after a
 *  subscription ends, subscription service emails, Shared Tape deletion and
 *  device removal, the per-member full-Tape download permission, deletion
 *  records, and short-lived playback links. Not yet approved or published.
 *
 *  This document is a carefully written statement of that behaviour. It is not
 *  legal advice and has not been reviewed by counsel. Before publication:
 *
 *    1. Have counsel review it for the launch markets set in
 *       `availability.launchMarkets`: the United States (CCPA/CPRA and other
 *       state laws), Canada (PIPEDA), Australia (Privacy Act 1988 / APPs) and
 *       New Zealand (Privacy Act 2020) — plus Apple's App Store requirements.
 *    2. Resolve every OWNER DECISION in `src/config/site.ts` (postal address,
 *       exact entity name, monitored inboxes). Nothing renders as a placeholder;
 *       a missing value is simply omitted.
 *    3. Confirm the App Store privacy questionnaire ("App Privacy Details")
 *       matches the manifest and this text exactly.
 *    4. Update `legal.privacy` in `src/config/site.ts` whenever the text changes.
 *
 *  Do not add claims about features Videflo does not have, and do not restore
 *  the pre-Cloud claims ("no account", "nothing is uploaded") — they are false
 *  for this build.
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

export const privacySections: readonly LegalSection[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <P>
          This Privacy Policy explains how {legal.entityName},{" "}
          {legal.entityDescription} (“{site.name}”, “we”, “us”), handles
          information in connection with the {site.name} app, {site.name} Cloud,
          and this website. It applies wherever you use {site.name}.
        </P>
        <P>
          {site.name} is a camcorder and a private memory archive. The videos
          you record are created on your device and kept there. With a{" "}
          {site.name} account and subscription, they are also protected in{" "}
          {site.name} Cloud, and a Tape can be shared with people you invite so
          that they can add their own recordings to it. This policy describes
          the information each of those parts involves, who can see it, and the
          controls you have.
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
    id: "how-videflo-works",
    heading: "How Videflo works, in brief",
    content: (
      <>
        <UL>
          <LI>
            <strong className="text-ink">You sign in with Apple.</strong>{" "}
            {site.name} requires a {site.name} account, and Sign in with Apple
            is the only way to create one. There is no {site.name} password.
          </LI>
          <LI>
            <strong className="text-ink">You subscribe.</strong> {site.name} is
            a paid app. The subscription is bought from Apple and includes{" "}
            {site.name} Cloud storage.
          </LI>
          <LI>
            <strong className="text-ink">You set up a Profile.</strong> A
            display name, a username, and a photo or one of {site.name}’s
            built-in avatars. This is how other {site.name} users recognise you.
          </LI>
          <LI>
            <strong className="text-ink">You record Tapes.</strong> Recordings
            are saved on your device first. While{" "}
            <strong className="text-ink">Back Up to {site.name} Cloud</strong>{" "}
            is on (it is on by default), each recording and its Tape details are
            also copied to {site.name} Cloud.
          </LI>
          <LI>
            <strong className="text-ink">You can share a Tape.</strong> Inviting
            someone lets them see the Tape, watch it, and add their own
            recordings to it. The Tape’s owner controls it.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "information-we-process",
    heading: "Information Videflo processes",
    content: (
      <>
        <P>
          The categories below describe what {site.name} processes, where it
          comes from, and where it lives.
        </P>

        <H3>Account and sign-in information</H3>
        <P>
          When you sign in with Apple, Apple gives {site.name} a signed identity
          token. From it, {site.name} Cloud creates your account and records a
          stable account identifier and the email address associated with your
          Apple Account. If you chose Apple’s{" "}
          <strong className="text-ink">Hide My Email</strong>, that address is
          Apple’s private relay address rather than your real one. {site.name}{" "}
          uses this to identify your account. Your email address is never shown
          to other {site.name} users and cannot be used to search for you.
        </P>

        <H3>Profile information</H3>
        <P>
          Your display name, your username, and your profile photo or chosen
          avatar. You provide these yourself when you set up your Profile.
          Usernames are unique and, once claimed, cannot be changed. A profile
          photo is stored in {site.name} Cloud under your account; a built-in
          avatar is stored only as a choice.
        </P>
        <P>
          Your Profile is visible to other {site.name} users in the situations
          described under <A href="/privacy#visibility">Who can see what</A>.
        </P>

        <H3>Your recordings and Tapes</H3>
        <P>
          The videos you record with {site.name}, videos you choose to import
          from your photo library into a Tape, and the details that describe
          them: Tape names, recording names, cover photos, the date and time
          each recording was made and the time zone it was made in, the Tape’s
          orientation, and each recording’s length and file size. {site.name}{" "}
          also computes a fingerprint (a cryptographic hash) of each recording
          file so that {site.name} Cloud can verify an upload arrived intact and
          never stores the same recording twice.
        </P>
        <P>
          All of this is stored on your device. While Back Up to {site.name}{" "}
          Cloud is on, it is also uploaded to and stored in {site.name} Cloud.
          The original files on your device are never modified. They are
          removed from your device when you choose{" "}
          <strong className="text-ink">Remove from This iPhone</strong> for a
          Tape that is already protected in {site.name} Cloud, and in two cases
          involving Shared Tapes: a recording you add to a Shared Tape is
          removed from your device automatically once its upload to{" "}
          {site.name} Cloud is confirmed complete (a recording whose upload is
          unfinished, failed or unconfirmed stays, and copies you download with
          Download to This iPhone are not removed this way), after which you can
          reach it only through {site.name} Cloud while you have access to the
          Tape; and when the owner of a Shared Tape uses Delete for Everyone,
          its recordings are removed from {site.name} on every member’s device.
          Videos you have exported to Apple Photos are never removed by{" "}
          {site.name}.
        </P>
        <P>
          Collections, the groups you organise Tapes into, and your app
          preferences stay on your device and are not uploaded.
        </P>

        <H3>Shared Tapes, invitations and Friends &amp; Family</H3>
        <P>
          When you share a Tape, {site.name} Cloud records who owns it, who has
          been invited, who accepted, which recordings each person added, and,
          for each member, whether the owner has allowed them to download and
          export the whole Tape. When you send or accept a Friends &amp; Family request, it records
          that connection. An invitation sent by text message contains a
          single-use link; the link identifies the invitation, not you, and the
          page it opens on this website names no Tape and no person.
        </P>

        <H3>Reports and blocks</H3>
        <P>
          When you report a person, a Shared Tape or a recording, {site.name}{" "}
          Cloud records your account, what you reported, the reason you chose,
          any details you add, and when you reported it. It also stores the
          reported person’s display name and username and the Tape’s title as
          they were at that moment, so that a later change of name cannot hide
          what was reported. As a report is reviewed, {site.name} records its
          status, any notes the reviewer makes, who reviewed it and when.
        </P>
        <P>
          When a report is submitted, {site.name} automatically sends an email
          about it to the {site.name} support mailbox so that it can be
          reviewed. The email contains the details of the report: the account
          identifiers, display names and usernames of the person who made the
          report and the person reported, the reason chosen, any details
          written, when the report was made and its status, and how many other
          reports concern the same account. Where a Shared Tape or a recording
          was reported, it also includes the Tape’s title and identifier and
          information that identifies the recording, such as its title, its
          length, when it was recorded and who added it. Report emails never
          include a recording, a link to one, or the location where any file is
          stored.
        </P>
        <P>
          When you block somebody, {site.name} Cloud records that you blocked
          them and when. Display names, usernames and Shared Tape titles are
          checked against a list of words that are not allowed; this check looks
          only at that text.
        </P>

        <H3>Notifications</H3>
        <P>
          {site.name} keeps a record of the notifications it shows you inside
          the app, for example that somebody invited you to a Tape, accepted
          your request, or added a recording to a Shared Tape. Each notification
          stores the name and username of the person it is about and the title
          of the Tape it concerns, as they were at the time, so the notification
          reads correctly even when you are offline.
        </P>
        <P>
          If you allow notifications on your device, {site.name} registers the
          device token Apple assigns to your device, together with the app
          version and whether the app is a test or App Store build, so that it
          can deliver push notifications through Apple. The text of a push
          notification is generic: it never contains a name, a Tape title, a
          username or a file name.
        </P>

        <H3>Subscription and purchase information</H3>
        <P>
          Purchases are made through your Apple Account using Apple’s in-app
          purchase system, and Apple processes the payment. We do not collect or
          store your card number, bank details or billing address. To confirm
          that your subscription is active and to set your {site.name} Cloud
          allowance, {site.name} receives from Apple, directly and through our
          subscription infrastructure provider, information about your
          transactions: the product, its status, when it renews or expires,
          transaction identifiers, and whether it was made in Apple’s sandbox or
          production environment.
        </P>

        <H3>Device and technical information</H3>
        <P>
          Our subscription infrastructure provider receives your {site.name}{" "}
          account identifier and an identifier for your device so that a
          purchase can be matched to your account. Our backend provider
          processes standard technical information about each request the app
          makes, such as your IP address and the time of the request, in order
          to deliver the service and keep it secure. {site.name} does not use
          the advertising identifier, and it contains no advertising or
          analytics identifiers of any kind.
        </P>

        <H3>Information you send us directly</H3>
        <P>
          If you email support, we receive your email address, your message, and
          anything you choose to attach, which may include a description of your
          device or a screenshot. We use it to answer you.
        </P>

        <H3>Website information</H3>
        <P>
          When you visit this website, our hosting provider processes standard
          technical information such as your IP address, browser type, and the
          pages you request, in order to serve the site and keep it secure. This
          website uses no analytics service, no advertising trackers, and sets
          no tracking cookies.
        </P>
      </>
    ),
  },
  {
    id: "permissions",
    heading: "Camera, microphone and Photos access",
    content: (
      <>
        <P>
          {site.name} is a recording app, so it asks iOS for access to the
          hardware it needs. Every permission is requested by iOS, granted by
          you, and can be changed or revoked at any time in{" "}
          <strong className="text-ink">Settings → {site.name}</strong> on your
          device.
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
            <strong className="text-ink">Photos, add only.</strong> Requested
            only when you save a video from {site.name} into your photo library.
            {site.name} never asks to read your library.
          </LI>
        </UL>
        <P>
          Choosing a cover photo, or choosing videos from your library to add to
          a new Tape, uses Apple’s own picker: iOS shows you your library and
          hands {site.name} only the items you tap. {site.name} does not see the
          rest of your library, which is why no permission prompt appears.
        </P>
        <P>
          If you decline a permission, the related part of the app simply will
          not work; nothing else about your use of {site.name} changes.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How information is used",
    content: (
      <>
        <P>We use the information described above to:</P>
        <UL>
          <LI>
            create and operate your {site.name} account and Profile, and let
            other users recognise you where you choose to interact with them;
          </LI>
          <LI>
            store your recordings and Tapes in {site.name} Cloud, play them back
            to you, including on a new phone, and let you download them again;
          </LI>
          <LI>
            operate Shared Tapes: deliver invitations, show members the Tape and
            its recordings, and attribute recordings to the people who made
            them;
          </LI>
          <LI>
            confirm your subscription, apply the {site.name} Cloud allowance it
            includes, and tell you when that allowance is nearly or fully used;
          </LI>
          <LI>
            send you service emails about your account at the email address
            associated with it, for example when your subscription is scheduled
            to end or has ended, and before content in {site.name} Cloud is
            deleted. These are not marketing;
          </LI>
          <LI>
            make sure a Tape or recording that has been deleted stays deleted
            on every device, including one that was offline when it was
            deleted;
          </LI>
          <LI>deliver the notifications you have chosen to receive;</LI>
          <LI>respond to your support requests;</LI>
          <LI>
            keep the service secure and working, and detect, prevent and address
            abuse;
          </LI>
          <LI>
            review reports, apply blocks, and enforce our Terms of Service to
            protect the people who use {site.name}; and
          </LI>
          <LI>comply with legal obligations.</LI>
        </UL>
      </>
    ),
  },
  {
    id: "what-we-do-not-do",
    heading: "What Videflo does not do",
    content: (
      <>
        <UL>
          <LI>
            <strong className="text-ink">
              No advertising and no tracking.
            </strong>{" "}
            {site.name} contains no advertising, no advertising identifiers, and
            no third-party analytics, attribution or crash-reporting software.
            We do not track you across other companies’ apps or websites.
          </LI>
          <LI>
            <strong className="text-ink">
              No selling of your information.
            </strong>{" "}
            We do not sell your personal information, and we do not share it for
            advertising.
          </LI>
          <LI>
            <strong className="text-ink">No analysis of your footage.</strong>{" "}
            {site.name} does not analyse, transcribe, run recognition on, or use
            your recordings to train any model, and it does not monitor or scan
            them. Thumbnails you see in the app are generated on your own
            device. A person at {site.name} looks at a recording only when it
            has been reported and the report cannot be decided without it.
          </LI>
          <LI>
            <strong className="text-ink">
              No reading of your photo library.
            </strong>{" "}
            Every photo or video {site.name} receives from your library is one
            you picked yourself in Apple’s picker.
          </LI>
          <LI>
            <strong className="text-ink">No {site.name} password.</strong> We
            never hold a password for you. Sign in with Apple is the only way
            in.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "visibility",
    heading: "Who can see what",
    content: (
      <>
        <H3>Other Videflo users</H3>
        <UL>
          <LI>
            <strong className="text-ink">Your Profile</strong> (display name,
            username and avatar) can be seen by people who search for your exact
            username, by your Friends &amp; Family connections, by the members
            of any Tape you share or join, and by anyone you send or receive a
            request or invitation from. There is no public directory, no
            followers, and no way to search by real name or email address.
          </LI>
          <LI>
            <strong className="text-ink">A Shared Tape</strong> (its title,
            cover, every recording in it, and who added each recording) can be
            seen and watched by the Tape’s owner and every member who has
            accepted an invitation. Recordings you add to somebody else’s Shared
            Tape become part of that Tape. Members can download and export the
            recordings they made, and the whole Tape only if the owner allows
            it. That permission is not copy protection: anyone who can watch a
            recording could capture it by other means, so share Tapes only with
            people you trust.
          </LI>
          <LI>
            <strong className="text-ink">A personal Tape</strong> is visible to
            nobody but you.
          </LI>
          <LI>
            A Friends &amp; Family connection on its own gives nobody access to
            any of your Tapes.
          </LI>
          <LI>
            <strong className="text-ink">Reports and blocks</strong> are not
            visible to other {site.name} users. A person you report or block is
            not told, and nobody is told who reported them. You cannot read a
            report back after sending it.
          </LI>
        </UL>

        <H3>The {site.name} team</H3>
        <P>
          Reports are reviewed only by authorized members of the {site.name}{" "}
          team, through access restricted to that purpose, including the support
          mailbox that receives report notifications. When reviewing a report,
          they look at the report and, only where needed to decide it, the
          reported Profile, Tape or recording. A reported recording is viewed
          only in {site.name} Cloud, never by email.
        </P>
        <H3>Service providers</H3>
        <P>
          The providers listed under{" "}
          <A href="/privacy#service-providers">Service providers</A> process
          information on our behalf in order to run {site.name}. They may not
          use it for their own purposes.
        </P>
        <H3>Legal requirements</H3>
        <P>
          We may disclose information if required to do so by law, or where we
          believe in good faith that disclosure is necessary to protect the
          rights, safety or property of {site.name}, our users or the public.
        </P>
        <H3>A change of ownership</H3>
        <P>
          If {legal.entityName} is involved in a merger, acquisition or sale of
          assets, information may be transferred as part of that transaction. We
          will make reasonable efforts to tell you before your information
          becomes subject to a different privacy policy.
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
          We rely on a small number of providers to operate {site.name}. Each
          processes information only as needed to provide its service to us.
        </P>
        <UL>
          <LI>
            <strong className="text-ink">Apple:</strong> Sign in with Apple, App
            Store distribution, in-app purchases and subscription billing, and
            push notification delivery. Apple’s handling of your Apple Account
            and payment information is governed by Apple’s own privacy policy.
          </LI>
          <LI>
            <strong className="text-ink">Supabase:</strong> the infrastructure
            behind {site.name} Cloud: your account, the database that holds your
            Tape details, Profile, connections and notifications, the storage
            that holds your recordings and profile photo, and the server code
            that enforces who may access what.
          </LI>
          <LI>
            <strong className="text-ink">RevenueCat:</strong> subscription
            infrastructure that records your App Store purchases against your{" "}
            {site.name} account, so that your subscription and {site.name} Cloud
            allowance follow you to a new phone.
          </LI>
          <LI>
            <strong className="text-ink">Vercel:</strong> hosting for this
            website.
          </LI>
          <LI>
            <strong className="text-ink">Resend:</strong> delivers the automated
            emails {site.name} sends: service emails to you about your
            subscription and {site.name} Cloud, and, to our support mailbox,
            notifications of new reports and operational alerts about the
            service. Operational alerts contain counts and status information
            about {site.name}’s systems, not information about you.
          </LI>
          <LI>
            <strong className="text-ink">Microsoft:</strong> Microsoft 365 hosts
            our support mailbox, which receives your support emails, report
            notifications and operational alerts.
          </LI>
        </UL>
        <P>
          The <strong className="text-ink">Share Feedback</strong> link in{" "}
          {site.name}’s Settings opens a feedback board run by a separate
          company, outside the app. Anything you post there is governed by that
          service’s own terms and privacy policy.
        </P>
      </>
    ),
  },
  {
    id: "videflo-cloud",
    heading: "Videflo Cloud, your device, and storage allowances",
    content: (
      <>
        <P>
          For your personal Tapes, {site.name} Cloud is a copy, never a
          replacement. A recording is written to your device first, and the
          original file there is never modified by a backup, a download, or
          playback. Recordings in a Shared Tape are the exception: once their
          upload is confirmed, the copy in {site.name} Cloud is the one{" "}
          {site.name} keeps, and the copy on your device is removed, as
          described in{" "}
          <A href="/privacy#information-we-process">Information Videflo processes</A>.
        </P>
        <UL>
          <LI>
            <strong className="text-ink">Back Up to {site.name} Cloud</strong>{" "}
            can be switched off in Settings → {site.name} Cloud → Backup
            Settings. While it is off, new recordings stay on your device only.
            Anything already in {site.name} Cloud stays there; see{" "}
            <A href="/privacy#retention">How long information is kept</A>.
          </LI>
          <LI>
            <strong className="text-ink">Remove from This iPhone</strong> frees
            the space a protected Tape uses on your device. The Tape then plays
            by streaming from {site.name} Cloud, and{" "}
            <strong className="text-ink">Download to This iPhone</strong> brings
            the files back. {site.name} verifies that every recording is safely
            in {site.name} Cloud before it will remove a local copy.
          </LI>
          <LI>
            <strong className="text-ink">Your allowance.</strong> Your
            subscription includes {subscription.includedStorageLabel} of{" "}
            {site.name} Cloud, and larger capacities are available. The owner of
            a Shared Tape pays for that Tape’s storage, including recordings
            other members add. If your account goes over its allowance, for
            example after moving to a smaller capacity, {site.name} keeps
            everything already stored and stops accepting new uploads until you
            are back within it. You have {subscription.overAllowanceGraceDays}{" "}
            days to free up space or choose a larger capacity; {site.name} does
            not delete your content automatically because you are over your
            allowance.
          </LI>
        </UL>
        <Callout title="If your subscription ends">
          <p>
            {site.name} cannot be used until you subscribe again. Your
            recordings stay on your device, and we keep your content in{" "}
            {site.name} Cloud, locked, for 30 days from the end of your paid
            access. Subscribing again within those 30 days restores access to
            all of it. After that, content in {site.name} Cloud may be
            permanently deleted. {site.name} does not currently delete it
            automatically, and we will tell you before we begin doing so. While
            a Shared Tape’s owner’s subscription has lapsed, that Tape is
            unavailable to its members. See the{" "}
            <A href="/terms#videflo-cloud">Terms of Service</A>.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "retention",
    heading: "How long information is kept",
    content: (
      <>
        <UL>
          <LI>
            <strong className="text-ink">Recordings and Tapes</strong> in{" "}
            {site.name} Cloud are kept while your account exists and your
            subscription is active, until you delete them. If your subscription
            ends, we keep them for 30 days from the end of your paid access,
            during which you can subscribe again and regain access. After that
            they may be permanently deleted; {site.name} does not currently do
            this automatically, and we will tell you before we begin. Deleting
            a Tape removes it from your device and from {site.name} Cloud,
            including from every member’s view of a Shared Tape. When the owner
            deletes a Shared Tape with Delete for Everyone, it is removed
            immediately, including
            recordings other members added and copies on members’ devices inside{" "}
            {site.name}. On a Shared Tape, the owner can delete any single
            recording, and a member can delete a recording they added, from{" "}
            {site.name} Cloud for everyone. On a personal Tape, deleting a
            single recording removes it from your device and from {site.name}{" "}
            Cloud. If you are offline, the recording disappears from the Tape
            immediately, and cloud deletion completes when your iPhone
            reconnects. {site.name} may temporarily retain the local file until
            the deletion is confirmed, then removes it.
          </LI>
          <LI>
            <strong className="text-ink">
              Your account, Profile, connections, invitations and notification
              history
            </strong>{" "}
            are kept while your account exists and removed when you delete it;
            see{" "}
            <A href="/privacy#deleting-your-account">Deleting your account</A>.
          </LI>
          <LI>
            <strong className="text-ink">Notifications</strong> expire on their
            own. Informational notifications are removed 72 hours after you read
            them, or 7 days after they arrive if you never do. Notifications
            that ask you to act, such as an invitation or a request, stay until
            you answer them, and are removed 7 days after that if you had read
            them or 14 days after if you had not.
          </LI>
          <LI>
            <strong className="text-ink">Deletion records.</strong> When a Tape
            is deleted, {site.name} Cloud keeps a minimal record of the
            deletion: the Tape’s identifier, its owner’s account identifier, the
            reason, when it was deleted, and when its stored files were
            cleared. It
            contains no recording, title or other content, and it is used only
            to stop a deleted Tape from coming back from a device that missed
            the deletion. These records are kept for as long as they are needed
            for that purpose, including after the account is deleted.
          </LI>
          <LI>
            <strong className="text-ink">Push registrations</strong> are
            deactivated when you sign out or when Apple reports that the device
            can no longer be reached, and deleted with your account.
          </LI>
          <LI>
            <strong className="text-ink">Reports</strong> and their review
            history are kept for as long as we need them to review and act on
            reports and to protect the people who use {site.name}. We have not
            set a fixed period; if we do, this policy will say so. Blocks are
            kept until you unblock the person. Report notification emails in our
            support mailbox are kept for as long as they are needed for these
            same purposes. Our email delivery provider may also keep a record of
            each message it delivers, for a limited period set by its own
            retention settings.
          </LI>
          <LI>
            <strong className="text-ink">Subscription records</strong> are kept
            while your account exists, so that your access and allowance can be
            confirmed.
          </LI>
          <LI>
            <strong className="text-ink">Support emails</strong> are kept for as
            long as needed to handle your request and to keep a reasonable
            record of it.
          </LI>
        </UL>
        <P>
          Content that is deleted from {site.name} Cloud is removed from our
          storage by a scheduled process shortly afterwards.
        </P>
      </>
    ),
  },
  {
    id: "deleting-your-account",
    heading: "Deleting your account",
    content: (
      <>
        <P>
          <strong className="text-ink">Delete Account</strong>, at the bottom of{" "}
          {site.name}’s Settings, permanently deletes your {site.name} account.
          It cannot be undone. When you confirm:
        </P>
        <UL>
          <LI>
            your account, Profile, profile photo, Friends &amp; Family
            connections, invitations, notifications and push registrations are
            deleted;
          </LI>
          <LI>
            blocks you made, and blocks other people made of you, are deleted;
            reports you made are kept but are no longer linked to your account,
            although they still contain what you reported and any details you
            wrote; reports about you are kept and are no longer linked to your
            account, but they still contain the display name, username and any
            Tape title recorded when they were made, so they are not anonymous;
          </LI>
          <LI>
            every Tape you own is deleted from {site.name} Cloud, together with
            all of its recordings, including every Shared Tape you own and the
            recordings other people contributed to it. This happens immediately,
            with no recovery period. Recordings from those Tapes already stored on members’ iPhones are preserved when their devices synchronize. Members can save them to Photos, keep them as personal Tapes, or delete them. Recordings that were kept only in {site.name} Cloud cannot be recovered;
          </LI>
          <LI>
            recordings you added to somebody else’s Shared Tape stay in that
            Tape, because they are part of that person’s memory, but they are no
            longer attributed to you;
          </LI>
          <LI>
            videos already on your device are not deleted by this; deleting the
            app, or the Tapes inside it, is a separate step; and
          </LI>
          <LI>
            your subscription is not cancelled, because it is held by Apple.
            Cancel it in your Apple Account settings.
          </LI>
        </UL>
        <P>
          When you use <strong className="text-ink">Delete Account</strong>,{" "}
          {site.name} first asks Apple to revoke {site.name}’s access to
          your Sign in with Apple account. Once Apple confirms revocation,{" "}
          {site.name}’s access is revoked. If Apple cannot confirm it,
          nothing is deleted and the app asks you to try again. Only then does{" "}
          {site.name} delete your account and data as described above. If you
          sign in with Apple again later, it starts a new account. You can also
          check or remove {site.name} yourself: open the Settings app on your
          iPhone, tap your name, then tap Sign in with Apple (on some versions
          of iOS this is inside Sign-In &amp; Security). Apple explains this in{" "}
          <A href="https://support.apple.com/en-us/102571">
            Manage your apps with Sign in with Apple
          </A>
          .
        </P>
        <P>
          Neither step cancels an App Store subscription. Cancel it separately
          in your Apple Account settings.
        </P>
      </>
    ),
  },
  {
    id: "choices",
    heading: "Your choices and controls",
    content: (
      <>
        <UL>
          <LI>
            <strong className="text-ink">Backup.</strong> Turn Back Up to{" "}
            {site.name} Cloud on or off, and choose whether backups may use
            cellular data, in Settings → {site.name} Cloud → Backup Settings.
          </LI>
          <LI>
            <strong className="text-ink">Your content.</strong> Delete a
            recording, a Tape or a Collection in the app; remove a Tape from
            your device or download it again; and export a copy to Photos
            whenever you want one.
          </LI>
          <LI>
            <strong className="text-ink">Sharing.</strong> Choose whom to
            invite, cancel an invitation, remove a member from a Tape you own,
            choose whether each member may download and export the whole Tape,
            stop a Tape you own from accepting new recordings, or leave a Tape
            somebody else shared with you.
          </LI>
          <LI>
            <strong className="text-ink">Profile.</strong> Change your display
            name and photo in Settings → Profile → Edit Profile. Your username
            is fixed once claimed.
          </LI>
          <LI>
            <strong className="text-ink">Friends &amp; Family.</strong> Decline
            or cancel a request, or remove a connection, at any time.
          </LI>
          <LI>
            <strong className="text-ink">Notifications.</strong> Allow or
            withdraw notification permission in iOS Settings. In-app
            notifications continue to work without it.
          </LI>
          <LI>
            <strong className="text-ink">Permissions.</strong> Camera,
            microphone and Photos access can be granted or withdrawn at any time
            in iOS Settings.
          </LI>
          <LI>
            <strong className="text-ink">Subscription.</strong> View, change or
            cancel it in your Apple Account settings; see the{" "}
            <A href="/support">Support</A> page.
          </LI>
          <LI>
            <strong className="text-ink">Sign out and delete.</strong> Sign out
            in Settings → Profile, or delete your account as described above.
          </LI>
          <LI>
            <strong className="text-ink">Privacy requests.</strong> Depending on
            where you live, you may have rights to access, correct, delete or
            obtain a copy of personal information we hold about you, or to
            object to certain processing. Most of these you can exercise
            yourself in the app. For anything else, contact{" "}
            <Mail address={contact.privacyEmail} /> and we will respond as
            applicable law requires.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children’s privacy",
    content: (
      <>
        <P>
          {site.name} is intended for adults, in particular parents and family
          members recording their own memories, and is not directed to children.
          We do not knowingly create accounts for, or collect personal
          information from, children below the age at which they can agree to an
          online service in their country. Where a parent or guardian’s consent
          is required, they must be the one to accept our{" "}
          <A href="/terms">Terms of Service</A> and to supervise use of the app.
        </P>
        <P>
          Families often record children. A recording of a child made with{" "}
          {site.name} is handled exactly like any other recording: it belongs to
          the account that made it, it is protected in {site.name} Cloud on the
          same terms, and it is visible to other people only if that account
          shares the Tape.
        </P>
        <P>
          If you believe a child has created a {site.name} account or provided
          us with personal information, please contact{" "}
          <Mail address={contact.privacyEmail} /> so we can delete it.
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
          Information travelling between the app and {site.name} Cloud is
          encrypted in transit. Access to {site.name} Cloud is enforced on the
          server for every request, so that your personal Tapes are reachable
          only by your account and a Shared Tape only by its members. Recordings
          stream from {site.name} Cloud through links that are issued to your
          account and expire after two minutes. We hold no password for you,
          and we never see your payment details.
        </P>
        <P>
          Report notifications and operational alerts are sent by email. Email
          is not end-to-end encrypted, so our email delivery provider and our
          mailbox provider can process the contents of these messages in order
          to deliver and store them. For that reason, report emails carry only
          the details of the report and never your recordings. Access to the
          support mailbox is restricted to authorized {site.name} personnel and
          protected with multi-factor authentication.
        </P>
        <P>
          On your iPhone, {site.name}’s data benefits from the protections iOS
          applies to app data, such as the device passcode and platform-level
          file protection. Protecting your device with a strong passcode and
          keeping iOS up to date meaningfully protects the recordings stored in{" "}
          {site.name}.
        </P>
        <P>
          No app, website, or method of transmission or storage is completely
          secure, and we cannot guarantee that unauthorised access will never
          occur.
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
          {site.name} Cloud (your account, your Tape details and the recordings
          you back up) is hosted for us by Supabase in the{" "}
          {legal.governingCountry}. Our other providers, named under{" "}
          <A href="/privacy#service-providers">Service providers</A>, may
          process the information they handle for us in the{" "}
          {legal.governingCountry} and in other countries where they operate.
          Those countries may have data protection laws that differ from your
          own. Where the law of your country requires it, we take reasonable
          steps to see that the information stays protected to a comparable
          standard, including under Australian Privacy Principle 8 and
          Information Privacy Principle 12 of New Zealand’s Privacy Act 2020.
        </P>
        <H3>Europe and the United Kingdom</H3>
        <P>
          {site.name} is not currently offered in the European Economic Area or
          the United Kingdom, and we do not target users there. If you write to
          us from those regions we will still handle your message carefully and
          honour the rights described below, but the app is not sold in your
          country yet.
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
          A growing number of other states, including {legal.governingState},
          where {site.name} is registered, give residents comparable rights to
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

        <Callout title="Most of it is in your hands">
          <p>
            You can see, change, export and delete most of what {site.name}{" "}
            holds about you directly in the app: your Profile, your Tapes and
            recordings, your connections, and your account itself. We will help
            with anything the app does not let you do yourself.
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
          make reasonable efforts to tell you, for example in the app or on this
          website, before it takes effect.
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
            Email: <Mail address={contact.privacyEmail} />
          </LI>
          {legal.entityAddress ? (
            <LI>Postal address: {legal.entityAddress}</LI>
          ) : null}
        </UL>
        <P>
          The data controller is {legal.entityName}, {legal.entityDescription}.
        </P>
      </>
    ),
  },
];
