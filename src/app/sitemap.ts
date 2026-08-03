import type { MetadataRoute } from "next";
import { gate } from "@/config/gate";
import { legal, site } from "@/config/site";
import { helpArticles, helpCategories } from "@/content/help";

/**
 * Every public route.
 *
 * Static pages are listed by hand. The Help Center is *derived* from its content
 * registry, so publishing an article adds it to the sitemap automatically —
 * there is no second list to remember.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  /*
    While the site is gated the sitemap publishes nothing. Every URL below still
    resolves — to the Coming Soon page — so listing them would hand a crawler a
    complete map of the hidden site's routes and give it a reason to revisit
    each one. An empty `<urlset>` is served rather than a 404 so the endpoint
    itself stays valid.
  */
  if (gate.enabled) return [];

  const help: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/help`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...helpCategories.map((category) => ({
      url: `${site.url}/help/topics/${category.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...helpArticles.map((article) => ({
      url: `${site.url}/help/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...help,
    {
      url: `${site.url}/support`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(legal.privacy.iso),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${site.url}/terms`,
      lastModified: new Date(legal.terms.iso),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
