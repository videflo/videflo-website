import { LegalPage } from "@/components/legal/LegalPage";
import { legal, site } from "@/config/site";
import { termsSections } from "@/content/legal/terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} app and this website, including how App Store subscriptions work.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="These terms cover your use of the Videflo app and this website — what you can expect from us, what we ask of you, and how subscriptions work."
      updated={legal.terms}
      sections={termsSections}
    />
  );
}
