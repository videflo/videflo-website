/**
 * Temporary site gate.
 *
 * While `enabled` is true, every route on videflo.com serves one Coming Soon
 * page and nothing else. The real site — home, legal, support, the Help Center
 * and every article — stays in the codebase untouched; it is simply never
 * reached.
 *
 * This one flag is the whole switch. It is read in exactly five places:
 *
 *   - `src/proxy.ts`          rewrites every request to `gate.path`
 *   - `src/app/layout.tsx`    drops the header, footer, skip link and every
 *                             piece of discoverable metadata
 *   - `src/app/not-found.tsx` renders the Coming Soon page instead of the 404,
 *                             which the root layout serialises into the flight
 *                             payload of every response
 *   - `src/app/robots.ts`     disallows crawling, stops advertising the sitemap
 *   - `src/app/sitemap.ts`    publishes no URLs
 *
 * TO RESTORE THE SITE: set `enabled` to false. Nothing else has to change, and
 * no content had to be deleted to gate it in the first place.
 */
export const gate = {
  enabled: true,
  /** The single route every request is rewritten to while gated. */
  path: "/coming-soon",
} as const;
