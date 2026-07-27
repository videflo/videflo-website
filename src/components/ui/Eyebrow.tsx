import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small label above a section heading. Never the only way meaning is conveyed. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.22em] uppercase",
        tone === "dark" ? "text-cream-faint" : "text-ink-faint",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-6",
          tone === "dark" ? "bg-line-dark" : "bg-line-strong",
        )}
      />
      {children}
    </p>
  );
}
