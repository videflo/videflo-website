import type { MetadataRoute } from "next";
import { legal, site } from "@/config/site";

/** Every public route. Add new pages here when you add them to the app router. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
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
