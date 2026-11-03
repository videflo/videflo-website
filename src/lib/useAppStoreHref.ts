"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { appStoreUrlFor } from "@/config/site";

const noSubscribe = () => () => {};
const readQuery = () => window.location.search;
const serverQuery = () => "";

/**
 * The App Store link for the current page and its `src` / `utm_source` query
 * values (see `appStoreUrlFor` in `src/config/site.ts`).
 *
 * The prerendered HTML is built with no query (the paid campaign link on
 * `/get`, the plain App Store link on `/`); in the browser the link switches
 * to the source's own link. Read
 * through `useSyncExternalStore` so hydration starts from the server value and
 * then updates, with no mismatch warning and no change to the page's layout.
 */
export function useAppStoreHref(): string | null {
  const pathname = usePathname();
  const query = useSyncExternalStore(noSubscribe, readQuery, serverQuery);
  const params = new URLSearchParams(query);
  return appStoreUrlFor(pathname, params.get("src"), params.get("utm_source"));
}
