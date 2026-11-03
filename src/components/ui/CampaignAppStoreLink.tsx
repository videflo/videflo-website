"use client";

import type { ReactNode } from "react";
import { useAppStoreHref } from "@/lib/useAppStoreHref";

/**
 * A plain `<a>` to the App Store whose href follows `useAppStoreHref`, so the
 * `/get` page's own badge and button, and the homepage badge, carry the visitor's
 * campaign link.
 * Renders exactly the markup it is given; nothing visual is added.
 */
export function CampaignAppStoreLink({
  className,
  children,
  newTab = false,
}: {
  className?: string;
  children: ReactNode;
  /** Opens in a new tab, as the homepage's App Store badge always has. */
  newTab?: boolean;
}) {
  const href = useAppStoreHref();
  if (!href) return null;
  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
