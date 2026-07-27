"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { primaryNav } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Site header.
 *
 * Starts transparent over the hero and gains a soft translucent background plus
 * a hairline once the page scrolls — defined, never heavy. The mobile menu is a
 * standard disclosure: labelled toggle, Escape to close, focus returned to the
 * button, and body scroll locked while open.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        scrolled || menuOpen
          ? "border-line bg-paper/85 supports-[backdrop-filter]:bg-paper/70 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Link
            href="/"
            className="-m-2 rounded-md p-2"
            aria-label="Videflo — home"
          >
            <Wordmark withIcon />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <AppStoreButton size="sm" label="Download" fallback="section" />
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="text-ink -mr-2 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold lg:hidden"
          >
            <MenuGlyph open={menuOpen} />
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        tabIndex={-1}
        hidden={!menuOpen}
        className="border-line bg-paper border-t lg:hidden"
      >
        <Container>
          {/*
            Delegated click handler: any link inside the panel closes it. This
            also covers hash links to the page you are already on, where a route
            change would never fire.
          */}
          <nav
            aria-label="Primary (mobile)"
            className="py-6"
            onClick={() => setMenuOpen(false)}
          >
            <ul className="flex flex-col">
              {primaryNav.map((item) => (
                <li
                  key={item.href}
                  className="border-line border-b last:border-0"
                >
                  <Link
                    href={item.href}
                    className="font-display text-ink -mx-2 block rounded-md px-2 py-4 text-xl font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 pb-2">
              <AppStoreButton
                size="md"
                label="Download on the App Store"
                fallback="section"
                className="w-full"
              />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group text-ink-soft hover:text-ink relative -mx-1 rounded-md px-1 py-1 text-[0.9375rem] font-medium transition-colors"
    >
      {children}
      <span
        aria-hidden="true"
        className="bg-gold absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M5 5l10 10" />
          <path d="M15 5L5 15" />
        </>
      ) : (
        <>
          <path d="M3 6.5h14" />
          <path d="M3 13.5h14" />
        </>
      )}
    </svg>
  );
}
