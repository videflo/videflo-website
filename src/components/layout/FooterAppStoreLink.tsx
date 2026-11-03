"use client";

import { appStore } from "@/config/site";
import { useAppStoreHref } from "@/lib/useAppStoreHref";

/**
 * The footer's App Store text link. A client component only so it can read the
 * current path: on a campaign landing page (`appStoreCampaignLinks` in
 * `src/config/site.ts`) it carries that page's App Store Connect campaign link,
 * and everywhere else `appStore.url`, exactly as before.
 */
export function FooterAppStoreLink() {
  const href = useAppStoreHref();
  if (!href) return null;

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink hover:text-ink-muted text-sm font-semibold transition-colors"
      >
        {appStore.downloadLabel}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </li>
  );
}
