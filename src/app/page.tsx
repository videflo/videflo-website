import { Benefits } from "@/components/home/Benefits";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { NoEditing } from "@/components/home/NoEditing";
import { PrivacyPromise } from "@/components/home/PrivacyPromise";
import { TheIdea } from "@/components/home/TheIdea";
import { UseCases } from "@/components/home/UseCases";
import { WhatIsATape } from "@/components/home/WhatIsATape";
import { appStore, site } from "@/config/site";

/*
  No `metadata` export here on purpose. The root layout already declares exactly
  what the homepage needs — the full brand title, the site description, the
  canonical `/`, and the Open Graph and Twitter cards — so re-declaring any of it
  would only create a second place for it to go stale.
*/

/*
  Structured data describes only what is verifiable: the app, the publisher, and
  the site. No ratings, review counts, download figures or prices — inventing any
  of those would be both dishonest and a rich-results violation.
*/
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        slogan: site.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#app`,
        name: site.name,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        description: site.socialDescription,
        publisher: { "@id": `${site.url}/#organization` },
        // Only emitted once the App Store URL is known.
        ...(appStore.url ? { installUrl: appStore.url } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Serialised on the server from a literal object; no user input involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <TheIdea />
      <WhatIsATape />
      <NoEditing />
      <UseCases />
      <Benefits />
      <PrivacyPromise />
      <FinalCta />
    </>
  );
}
