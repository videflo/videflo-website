import type { Metadata } from "next";
import { ogImage, site } from "@/config/site";

/**
 * Build a page's metadata.
 *
 * Next.js replaces the whole `openGraph` object when a page declares one, rather
 * than merging field by field — so a page that sets `openGraph.title` and
 * nothing else silently loses the inherited social image. Routing every page
 * through this helper means the canonical URL, the Open Graph block, and the
 * Twitter card can never fall out of step.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page title, without the site name — the layout's template adds that. */
  title: string;
  description: string;
  /** Route path beginning with a slash, e.g. "/privacy". */
  path: string;
}): Metadata {
  const socialTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: `${site.url}${path}`,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
