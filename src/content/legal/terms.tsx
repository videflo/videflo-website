/*
 * ============================================================================
 *  DRAFT — REQUIRES OWNER AND LEGAL REVIEW BEFORE PUBLICATION
 * ============================================================================
 *
 *  This is a drafting starting point, not legal advice, and it has not been
 *  reviewed by a lawyer. Before videflo.com goes live:
 *
 *    1. Have counsel review the entire document, with particular attention to
 *       the disclaimers, limitation of liability, indemnification, governing law,
 *       and dispute-resolution sections — these are the clauses most likely to be
 *       unenforceable if written generically, and consumer-protection law in some
 *       jurisdictions overrides them.
 *    2. Replace every `<Placeholder>` value — they render visibly on the page.
 *    3. Decide the dispute-resolution mechanism (informal resolution only, courts
 *       of a named venue, or arbitration with a class-action waiver). The section
 *       below deliberately does NOT impose arbitration; that is a decision for
 *       the owner and counsel.
 *    4. Confirm the subscription terms match what is actually configured in App
 *       Store Connect — in particular that no free trial or introductory offer is
 *       described here unless one really exists.
 *    5. Confirm compliance with Apple's required "minimum terms" for licensed
 *       applications (the EULA schedule in the Apple Developer Program
 *       agreement), including Apple as a third-party beneficiary.
 *    6. Update `legal.terms` in `src/config/site.ts` whenever the text changes.
 * ============================================================================
 */

import type { LegalSection } from "@/components/legal/LegalPage";
import {
  A,
  Callout,
  LI,
  Mail,
  P,
  Placeholder,
  UL,
} from "@/components/legal/prose";
import { contact, legal, site } from "@/config/site";

export const termsSections: readonly LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of terms",
    content: (
      <>
        <P>
          These Terms of Service (the “Terms”) are an agreement between you and{" "}
          {legal.entityName} (“{site.name}”, “we”, “us”) covering your use of
          the {site.name} iPhone app and this website (together, the “Service”).
        </P>
        <P>
          By downloading, installing, or using {site.name}, you agree to these
          Terms and to our <A href="/privacy">Privacy Policy</A>. If you do not
          agree, do not use the Service.
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
          You must be old enough to form a binding contract where you live, and
          at least the minimum age required by the App Store for this app, to
          use {site.name}.{" "}
          <Placeholder>
            Owner to state the minimum age and confirm it matches the App Store
            age rating.
          </Placeholder>
        </P>
        <P>
          If you use {site.name} on behalf of a household or family, you are
          responsible for making sure anyone who uses your device follows these
          Terms.
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
          {site.name} is an iPhone app for recording home videos. It lets you
          create a “Tape” for an event or chapter of life, add recordings to
          that Tape over time, watch a Tape as one continuous video, organise
          Tapes into Collections, and export copies of your Tapes.
        </P>
        <P>
          {site.name} stores your recordings on your device. It does not
          currently provide cloud backup, cross-device sync, sharing between
          accounts, web playback, or an Android version, and nothing in these
          Terms should be read as a commitment to build them.
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
            what you record, and for having the right and any necessary consent
            to record the people who appear in your videos;
          </LI>
          <LI>
            complying with the laws that apply where you record, including laws
            about recording other people and about audio recording; and
          </LI>
          <LI>
            keeping your own copies of anything you cannot afford to lose.
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
          Your recordings, Tapes, Collections, names, and cover photos are
          yours. You keep all rights in them. We claim no ownership of your
          content.
        </P>
        <P>
          Because your content stays on your device, we do not need — and do not
          ask for — a licence to host, distribute, or display it. If you choose
          to send us content as part of a support request, you give us
          permission to use it only to help you with that request.
        </P>
      </>
    ),
  },
  {
    id: "device-storage",
    heading: "Device storage and backups",
    content: (
      <>
        <P>
          {site.name} is local-first: your recordings live on your iPhone. Video
          files are large, and it is your responsibility to keep enough free
          storage for the recordings you make.
        </P>
        <Callout title="You are responsible for your own backups">
          <p>
            {site.name} does not back up your recordings and cannot recover
            them. If your device is lost, stolen, damaged, or erased, if iOS or
            the app is removed, or if a file is deleted, recordings that exist
            only inside {site.name} may be permanently lost. Maintain your own
            device backup and export the Tapes that matter most to you.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "subscriptions",
    heading: "Subscriptions",
    content: (
      <>
        <P>
          Some features of {site.name} may require a paid subscription. Where
          offered, subscriptions are sold as auto-renewable monthly or yearly
          plans through the Apple App Store.
        </P>
        <P>
          The price and billing period that apply to you are the ones shown to
          you by Apple at the moment of purchase. Prices are set and displayed
          by Apple, are charged in your local currency, and may differ by region
          and change over time.
        </P>
        <P>
          {site.name} does not currently offer a free trial. If an introductory
          offer or trial is made available in future, its terms will be shown by
          Apple before you purchase.
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
            plan.
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
          Deleting the {site.name} app does not cancel a subscription — the
          subscription is held in your Apple Account, so it must be cancelled
          there. The <A href="/support">Support</A> page explains where to find
          it.
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
          If you reinstall {site.name} or set up a new iPhone, you can use{" "}
          <strong className="text-ink">Restore Purchases</strong> in the app to
          restore an eligible active subscription that was bought with the same
          Apple Account.
        </P>
        <P>
          Restoring a purchase restores access to paid features only. It does
          not restore your recordings, which are stored on the device where they
          were made.
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
            use {site.name} to record anyone unlawfully or without required
            consent;
          </LI>
          <LI>
            use {site.name} to create or store content that is illegal, or that
            exploits or endangers a child;
          </LI>
          <LI>
            reverse engineer, decompile, or attempt to extract the source code
            of the app, except to the extent that applicable law expressly
            permits it;
          </LI>
          <LI>
            interfere with or attempt to circumvent security, licensing, or
            purchase verification; or
          </LI>
          <LI>
            copy, resell, sublicense, or redistribute the app or any part of it.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    content: (
      <>
        <P>
          The {site.name} app, this website, the {site.name} name and wordmark,
          and the design, text, and graphics we create are owned by{" "}
          {legal.entityName} and protected by intellectual property laws.
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
          downloads, purchases, and restoring purchases. Your use of the App
          Store and your Apple Account is governed by Apple’s terms, not ours.
        </P>
        <P>
          You acknowledge that Apple has no obligation to provide maintenance or
          support for {site.name}, and that Apple is a third-party beneficiary
          of these Terms and may enforce them against you.{" "}
          <Placeholder>
            Counsel to confirm the full set of Apple-required
            licensed-application terms is present.
          </Placeholder>
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
          We may add, change, or remove features, or stop offering {site.name}
          altogether. We may also stop supporting older versions of iOS.
        </P>
        <P>
          If we discontinue the Service, we will make reasonable efforts to give
          notice so you can export your Tapes. Your recordings remain on your
          device regardless.
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
          or free from data loss, that a recording will always succeed, or that
          a recording, Tape, or export will be preserved. You are responsible
          for your own backups.
        </P>
        <P>
          Some jurisdictions do not allow the exclusion of certain warranties,
          so some of the above may not apply to you, and nothing in these Terms
          limits rights you have under mandatory consumer protection law.
        </P>
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
        your use of the Service, your content, or your breach of these Terms —
        including a claim brought by someone who appears in a recording you
        made.
      </P>
    ),
  },
  {
    id: "termination",
    heading: "Termination",
    content: (
      <>
        <P>
          You may stop using {site.name} at any time by deleting the app.
          Remember to cancel any subscription separately in your Apple Account
          settings.
        </P>
        <P>
          We may suspend or terminate your access to the Service if you
          materially breach these Terms or if we are required to do so by law.
          Sections that by their nature should survive termination — including
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
      <P>
        These Terms are governed by the laws of the State of{" "}
        <Placeholder>{legal.governingState}</Placeholder>,{" "}
        {legal.governingCountry}, excluding its conflict-of-laws rules, except
        where the mandatory law of your country of residence applies instead.
      </P>
    ),
  },
  {
    id: "disputes",
    heading: "Dispute resolution",
    content: (
      <>
        <P>
          If you have a problem, please contact us first at{" "}
          <Mail address={contact.legalEmail} />. Most issues can be resolved
          informally, and we will try to do that within 30 days.
        </P>
        <P>
          <Placeholder>
            Placeholder — the dispute-resolution mechanism has not been decided.
            Owner and counsel to choose between informal resolution and the
            courts of a named venue, or binding arbitration with a class-action
            waiver, and to confirm what is enforceable for consumers in each
            market before launch.
          </Placeholder>
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
            Legal: <Mail address={contact.legalEmail} />
          </LI>
          <LI>
            Support: <Mail address={contact.supportEmail} />
          </LI>
          <LI>
            Postal address: <Placeholder>{legal.entityAddress}</Placeholder>
          </LI>
        </UL>
        <P>
          {legal.entityName} —{" "}
          <Placeholder>
            legal entity name to be confirmed on business registration
          </Placeholder>
          .
        </P>
      </>
    ),
  },
];
