"use client";

import type { ReactNode } from "react";
import { useAppStoreHref } from "@/lib/useAppStoreHref";

/**
 * A plain `<a>` to the App Store whose href follows `useAppStoreHref`, so the
 * `/get` page's own badge and button carry the visitor's `?src=` campaign link.
 * Renders exactly the markup it is given; nothing visual is added.
 */
export function CampaignAppStoreLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const href = useAppStoreHref();
  if (!href) return null;
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
