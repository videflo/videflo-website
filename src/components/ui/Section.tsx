import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionTone = "paper" | "cream" | "shell" | "ink";

const tones: Record<SectionTone, string> = {
  paper: "bg-paper text-ink",
  cream: "bg-cream text-ink",
  shell: "bg-shell text-ink",
  // `on-dark` flips the focus ring so it stays visible against charcoal.
  ink: "bg-ink text-paper on-dark",
};

type SectionSpacing = "default" | "tight" | "loose";

const spacings: Record<SectionSpacing, string> = {
  tight: "py-14 sm:py-20",
  default: "py-20 sm:py-28 lg:py-36",
  loose: "py-24 sm:py-36 lg:py-48",
};

/** A full-bleed band of the page. Owns background tone and vertical rhythm. */
export function Section({
  children,
  id,
  tone = "paper",
  spacing = "default",
  overflow = "hidden",
  className,
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /**
   * Sections clip by default so decorative artwork can bleed past the gutter
   * without widening the page.
   *
   * `"visible"` is for a section holding something that is *meant* to escape it
   * — the Help Center's search results panel, which hangs below its field.
   *
   * This is a prop rather than an `overflow-visible` passed through `className`
   * on purpose: `cn()` concatenates, it does not resolve conflicts, so two
   * `overflow-*` utilities in one class list would be settled by the order
   * Tailwind happens to emit them in rather than by intent. Choosing between
   * them here means exactly one is ever produced.
   */
  overflow?: "hidden" | "visible";
  className?: string;
  /** id of the heading that names this section, for screen readers. */
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative",
        overflow === "visible" ? "overflow-visible" : "overflow-hidden",
        tones[tone],
        spacings[spacing],
        className,
      )}
    >
      {children}
    </section>
  );
}
