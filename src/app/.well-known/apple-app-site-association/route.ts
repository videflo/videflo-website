import { NextResponse } from "next/server";
import association from "./association.json";

/**
 * Apple App Site Association — what makes a Videflo invitation link open the
 * app instead of this website.
 *
 * A Shared Tape invitation is sent as an ordinary text message containing
 * `https://videflo.com/invite/<secret>`. The iOS app already parses that URL and
 * already redeems the invitation; what was missing was this file. Without it iOS
 * has no reason to believe videflo.com and the app belong to the same owner, so
 * it hands the link to Safari and the recipient lands on a web page instead of
 * in their invitation.
 *
 * ## Why this is a route handler and not a file in `public/`
 *
 * Apple requires the association file to be served as `application/json`, and it
 * must have no file extension. Those two requirements fight each other in a
 * static host: a file named `apple-app-site-association` with no extension has
 * no MIME type to look up, so it is served as `application/octet-stream`. A
 * route handler owns its own response, so the URL keeps the required shape and
 * the header is stated outright rather than inferred.
 *
 * It must also be reachable with **no redirect** — Apple does not follow one.
 * That is why `src/proxy.ts` excludes this path from the site gate: while the
 * gate is up every other request is rewritten to Coming Soon, and a rewritten
 * association file is an HTML page wearing the wrong name.
 *
 * ## Scope
 *
 * `/invite/*` and nothing else. Every other path on videflo.com — the marketing
 * pages, the legal documents, support, help — must keep opening in a browser.
 * Claiming them here would mean a person tapping a link to the Privacy Policy
 * got the app instead, and would hand the app authority over URLs it has no
 * screen for.
 *
 * The modern `components` form is used rather than the legacy `paths` array;
 * both are still read by iOS, but only this one can express exclusions and
 * query matching if this ever needs them.
 */

/**
 * Served fresh-ish rather than immutably. Apple's CDN caches this aggressively
 * on its own, and a short max-age keeps a correction — a bundle id change, an
 * added path — from being pinned to the edge for a day.
 */
export function GET() {
  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
