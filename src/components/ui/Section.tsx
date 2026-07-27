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
  className,
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  className?: string;
  /** id of the heading that names this section, for screen readers. */
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative overflow-hidden",
        tones[tone],
        spacings[spacing],
        className,
      )}
    >
      {children}
    </section>
  );
}
