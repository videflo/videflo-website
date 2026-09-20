import { LegalPage } from "@/components/legal/LegalPage";
import { legal, site } from "@/config/site";
import { termsSections } from "@/content/legal/terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} app, ${site.name} Cloud and this website: accounts, subscriptions, storage, Shared Tapes, and your content.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="These terms cover your use of the Videflo app, Videflo Cloud and this website: your account and subscription, your recordings and Shared Tapes, what you can expect from us, and what we ask of you."
      updated={legal.terms}
      sections={termsSections}
    />
  );
}
