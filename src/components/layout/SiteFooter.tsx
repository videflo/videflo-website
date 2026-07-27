import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { contact, footerNav, site, socials } from "@/config/site";

export function SiteFooter() {
  // Evaluated when the page is rendered/built, so the year never goes stale in
  // source. Re-deploys pick up the new year automatically.
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-line-dark bg-ink text-paper border-t">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="max-w-sm">
            <Wordmark tone="dark" withSubtitle />
            <p className="font-display text-paper mt-6 text-xl leading-snug">
              {site.tagline}
            </p>
            <p className="text-cream-muted mt-4 text-sm leading-relaxed">
              Questions, feedback, or trouble with the app? Write to us — a
              person reads every message.
            </p>
            <a
              href={`mailto:${contact.supportEmail}`}
              className="text-gold hover:text-gold-soft mt-3 inline-block text-sm font-semibold underline decoration-1 underline-offset-4 transition-colors"
            >
              {contact.supportEmail}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
            <nav aria-labelledby="footer-nav-heading">
              <h2
                id="footer-nav-heading"
                className="text-cream-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
              >
                Videflo
              </h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-cream-muted hover:text-paper text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {socials.length > 0 ? (
              <nav aria-labelledby="footer-social-heading">
                <h2
                  id="footer-social-heading"
                  className="text-cream-faint text-[0.6875rem] font-semibold tracking-[0.22em] uppercase"
                >
                  Elsewhere
                </h2>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream-muted hover:text-paper text-sm transition-colors"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>

        <div className="border-line-dark text-cream-faint flex flex-col gap-4 border-t py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.brandPhrase}</p>
        </div>
      </Container>
    </footer>
  );
}
