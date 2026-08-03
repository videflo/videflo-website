import type { MetadataRoute } from "next";
import { gate } from "@/config/gate";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  /*
    While the site is gated there is exactly one page to crawl and it should not
    be indexed. The sitemap is not advertised either — pointing crawlers at a
    list of URLs that all serve the Coming Soon page would be useless, and an
    invitation to keep checking them.
  */
  if (gate.enabled) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
