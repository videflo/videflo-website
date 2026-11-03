"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { appStoreUrlFor } from "@/config/site";

const noSubscribe = () => () => {};
const readSrc = () => new URLSearchParams(window.location.search).get("src");
const serverSrc = () => null;

/**
 * The App Store link for the current page and its `?src=` value
 * (see `appStoreUrlFor` in `src/config/site.ts`).
 *
 * The prerendered HTML is built with no `src`, which is the paid campaign link
 * on `/get`; in the browser the link switches to the source's own link. Read
 * through `useSyncExternalStore` so hydration starts from the server value and
 * then updates, with no mismatch warning and no change to the page's layout.
 */
export function useAppStoreHref(): string | null {
  const pathname = usePathname();
  const src = useSyncExternalStore(noSubscribe, readSrc, serverSrc);
  return appStoreUrlFor(pathname, src);
}
