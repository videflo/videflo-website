import type { Metadata } from "next";
import { ComingSoon } from "@/components/gate/ComingSoon";

/**
 * The route `src/proxy.ts` rewrites every request to while the gate is up, so
 * this is what `/`, `/privacy`, `/terms`, `/support`, `/help`, every article and
 * every unknown path all render.
 *
 * `openGraph.images` and `twitter.images` are set to empty arrays deliberately.
 * `src/app/opengraph-image.tsx` is a *file-based* metadata convention that
 * applies to every route beneath it, and its `alt` text carries the product
 * tagline — declaring the field explicitly is what overrides it. Removing the
 * fields would let the convention back in.
 */
export const metadata: Metadata = {
  title: "Videflo — Coming Soon",
  description: "Videflo is coming soon.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
