import { LegalPage } from "@/components/legal/LegalPage";
import { legal, site } from "@/config/site";
import { privacySections } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles information — your account, your recordings on your iPhone and in ${site.name} Cloud, Shared Tapes, subscriptions, and the controls you have.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary={`This page explains what information is involved when you use ${site.name} — on your iPhone, in ${site.name} Cloud, and when you share a Tape — who can see it, how long it is kept, and the controls you have.`}
      updated={legal.privacy}
      sections={privacySections}
    />
  );
}
