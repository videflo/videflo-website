import { LegalPage } from "@/components/legal/LegalPage";
import { legal, site } from "@/config/site";
import { privacySections } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles information. ${site.name} is local-first: your recordings are created and stored on your device.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary={`${site.name} is a local-first app. This page explains what information is involved when you use it, what stays on your device, and who to contact about privacy.`}
      updated={legal.privacy}
      sections={privacySections}
    />
  );
}
