import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { gate } from "@/config/gate";
import { ogImage, site } from "@/config/site";
import "./globals.css";

/*
  Both faces are self-hosted by `next/font` at build time — no font requests
  leave the visitor's browser, and there is no layout shift from a late swap.
*/
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/*
  While the site is gated, none of the real site's metadata may ship — no
  tagline, no description, no keywords, no social card, no canonical URLs for
  pages nobody can reach. `noindex, nofollow` is declared here as well as in the
  response header `src/proxy.ts` sets.

  The empty `images` arrays are load-bearing. `src/app/opengraph-image.tsx` is a
  *file-based* metadata convention that applies to every route beneath it, and
  its `alt` text carries the product tagline; declaring the field explicitly is
  what suppresses it. Omitting the field lets the convention back in.
*/
const gatedMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Coming Soon`,
  description: `${site.name} is coming soon.`,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: { images: [] },
  twitter: { images: [] },
};

const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "home videos",
    "family memories",
    "video journal",
    "iPhone camcorder app",
    "continuous recording",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.socialDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.socialDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "lifestyle",
};

export const metadata: Metadata = gate.enabled ? gatedMetadata : siteMetadata;

export const viewport: Viewport = gate.enabled
  ? { themeColor: "#1b1a18", colorScheme: "dark" }
  : {
      themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f7f2e8" },
        { media: "(prefers-color-scheme: dark)", color: "#1b1a18" },
      ],
      colorScheme: "light",
    };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  /*
    While the gate is up the shell renders the page and nothing else — no skip
    link, no header, no footer. The header and footer *are* the site's
    navigation, and every link in them points at a page that has to stay hidden,
    so none of that markup is produced rather than being hidden with CSS.

    Note what this does not achieve. `SiteHeader` and `AppStoreButton` are client
    components, so the static imports above still place `src/config/site.ts` —
    navigation labels, the support and legal addresses, the App Store
    configuration — into a JavaScript chunk the browser downloads even though the
    Coming Soon page renders none of it. Getting those strings out of the bundle
    means not importing them at all, which in turn means moving the chrome into a
    `(site)` route-group layout. That was tried and reverted: it takes
    `not-found.tsx` out of the position Next.js serves `/_not-found` from, so the
    site's own 404 page would silently be replaced by the framework default the
    moment the gate came down. Leaving those strings in an unrendered chunk is
    the smaller cost, and nothing they describe is reachable.

    Nothing here is deleted. Flipping `gate.enabled` back to false restores the
    site exactly as it was.
  */
  if (gate.enabled) {
    return (
      <html
        lang="en"
        className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      >
        <body className="bg-ink text-paper min-h-full">{children}</body>
      </html>
    );
  }

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-paper flex min-h-full flex-col">
        <SkipToContent />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
