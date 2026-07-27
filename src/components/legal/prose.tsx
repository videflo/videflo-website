import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Body paragraph inside a legal or support document. */
export function P({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-ink-muted mt-4 text-[1.0625rem] leading-[1.75] first:mt-0",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Sub-heading within a section. */
export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-ink mt-8 text-lg font-semibold">
      {children}
    </h3>
  );
}

/** Bulleted list. */
export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="text-ink-muted marker:text-line-strong mt-4 flex list-disc flex-col gap-2.5 pl-5 text-[1.0625rem] leading-[1.7]">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

/** A point that must not be skimmed past — e.g. the device-loss warning. */
export function Callout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="border-line-strong bg-cream mt-6 rounded-xl border p-5 sm:p-6">
      {title ? (
        <p className="font-display text-ink text-base font-semibold">{title}</p>
      ) : null}
      <div
        className={cn(
          "text-ink-soft text-[1rem] leading-[1.7]",
          title && "mt-2",
        )}
      >
        {children}
      </div>
    </div>
  );
}

/** Inline mailto link. */
export function Mail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
    >
      {address}
    </a>
  );
}

/** Inline internal link. */
export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="text-ink hover:text-gold-deep font-semibold underline decoration-1 underline-offset-4"
    >
      {children}
    </Link>
  );
}

/**
 * A value the owner still has to supply. Renders visibly so an unfinished
 * document can never be mistaken for a finished one.
 */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="bg-shell text-gold-deep rounded px-1.5 py-0.5 text-[0.95em] font-medium">
      {children}
    </span>
  );
}
