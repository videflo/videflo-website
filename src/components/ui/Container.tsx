import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "default" | "narrow" | "wide";

const widths: Record<ContainerWidth, string> = {
  narrow: "max-w-[46rem]",
  default: "max-w-[74rem]",
  wide: "max-w-[86rem]",
};

/** Horizontal gutter + measure. The single source of page width. */
export function Container({
  children,
  width = "default",
  className,
}: {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        widths[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
