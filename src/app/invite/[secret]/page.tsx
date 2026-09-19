import type { Metadata } from "next";
import { AppStoreButton, AppStoreNote } from "@/components/ui/AppStoreButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";

/**
 * The fallback for a Videflo invitation link, and only the fallback.
 *
 * When Videflo is installed, iOS reads `/.well-known/apple-app-site-association`
 * and opens the app directly — this page is never rendered. It exists for the
 * one case the app cannot handle: a person who does not have Videflo yet.
 *
 * A link under `/invite/` is one of two things, and this page cannot tell which
 * (the app asks the server once the person is signed in): an invitation to add
 * to a Shared Tape, or an invitation to connect as Friends & Family. The copy
 * therefore says "invited on Videflo" rather than naming either.
 *
 * ## What it deliberately does not know
 *
 * The invitation secret is in the URL, and this page never reads it, renders it,
 * logs it, or sends it anywhere. It is a single-use credential for joining
 * somebody's private memory, and the only thing entitled to redeem it is the app
 * on the recipient's phone, after they have signed in.
 *
 * For the same reason there is no lookup. Naming the Tape or the person who sent
 * the invitation would mean a public endpoint that turns a secret into somebody's
 * display name and the title of their family memory — readable by anyone who
 * intercepted, forwarded or guessed a link. The text message the visitor is
 * holding already says who invited them and to what; this page does not need to
 * repeat it, and could not do so safely.
 *
 * `params` is therefore accepted and ignored. Next.js requires the dynamic
 * segment for the route to exist at all; nothing reads it, which is the point.
 */
export const metadata: Metadata = {
  title: `You're invited — ${site.name}`,
  description: `Someone invited you on ${site.name}.`,
  /*
    Never indexed. These URLs are private one-time links; a crawler following one
    would put it in a search index, and a search result for an invitation is an
    invitation handed to a stranger.
  */
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function InvitePage() {
  return (
    <Section>
      <Container className="max-w-xl">
        <Eyebrow>Invitation</Eyebrow>

        <h1 className="text-ink mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          You&rsquo;ve been invited on {site.name}
        </h1>

        <p className="text-ink-soft mt-5 text-lg">
          Someone wants to share memories with you on {site.name} — a private
          video archive kept by the few people who were actually there. Get the
          app, sign in with Apple, and the invitation is waiting.
        </p>

        <div className="mt-10">
          <AppStoreButton size="lg" label={`Get ${site.name}`} />
          <AppStoreNote className="mt-3" />
        </div>

        {/*
          The one instruction that makes the flow work.

          Installing the app does not carry the invitation across with it —
          Videflo does no install attribution, deliberately, because the
          alternative is an attribution SDK that watches every visitor in order
          to help a handful of them. The invitation is still sitting in the
          recipient's messages, and tapping it a second time now opens the app,
          because by then iOS has associated the domain.
        */}
        <div className="border-ink/10 bg-cream-soft mt-12 rounded-2xl border p-6">
          <h2 className="text-ink text-base font-semibold">
            Already have {site.name}?
          </h2>
          <p className="text-ink-soft mt-2">
            Go back to your messages and tap the invitation link again. It will
            open straight to the invitation in {site.name}, where you can accept
            it.
          </p>
          <p className="text-ink-faint mt-4 text-sm">
            Just installed {site.name}? Do the same thing — finish setting up
            your account first, then tap the link in your message once more.
          </p>
        </div>
      </Container>
    </Section>
  );
}
