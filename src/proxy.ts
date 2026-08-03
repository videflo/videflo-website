import { NextResponse, type NextRequest } from "next/server";
import { gate } from "@/config/gate";

/**
 * The site gate.
 *
 * While `gate.enabled` is true this rewrites *every* request — `/`, `/privacy`,
 * `/terms`, `/support`, `/help`, every help article, every unknown path, and
 * every file under `public/` — to the single Coming Soon route. A rewrite, not
 * a redirect: the visitor's URL is left alone, and the page they asked for is
 * never rendered, so none of its markup, copy or data reaches the browser.
 *
 * Doing it here rather than in each page is the point. There is one decision,
 * in one place, and it applies to routes that don't exist yet as much as to the
 * ones that do — a new page cannot be published by accident while the gate is
 * up.
 *
 * Next.js 16 renamed the `middleware.ts` convention to `proxy.ts`; this is that
 * file. The matcher must be a static literal (it is read from the AST at build
 * time), so it cannot be derived from `gate` — the runtime check below is what
 * makes the flag authoritative.
 */
export function proxy(request: NextRequest) {
  if (!gate.enabled) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname === gate.path) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = gate.path;
  /*
    Query strings are dropped as well. They are meaningless to the Coming Soon
    page, and carrying them through would let a crawler mint an unbounded number
    of distinct URLs for it.
  */
  url.search = "";

  return NextResponse.rewrite(url, {
    /*
      The gated page also carries `noindex, nofollow` in its own metadata. This
      header is the belt to that brace, and it covers the responses that have no
      HTML `<head>` to put a meta tag in.
    */
    headers: { "X-Robots-Tag": "noindex, nofollow" },
  });
}

/**
 * Everything is gated except:
 *
 *  - `/_next/*`        the framework's own build output — the gated page needs it
 *  - `/robots.txt`     gated separately, in `src/app/robots.ts`
 *  - `/sitemap.xml`    gated separately, in `src/app/sitemap.ts`
 *  - the icon files    so the browser tab still shows the Videflo mark
 *
 * Note what is *not* excluded: `public/images/*` and `public/brand/*`. The
 * marketing photography is part of the hidden site, so it is gated too.
 */
export const config = {
  matcher: [
    "/((?!_next/|robots\\.txt|sitemap\\.xml|favicon\\.ico|icon\\.png|apple-icon\\.png).*)",
  ],
};
