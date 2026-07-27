"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Gentle fade-and-rise on first scroll into view.
 *
 * The motion itself lives in `globals.css` and is gated behind
 * `prefers-reduced-motion: no-preference` *and* `scripting: enabled`, so content
 * is never hidden from a visitor who has motion turned off or no JavaScript.
 *
 * The visible state is written straight to the DOM attribute rather than held in
 * React state: it is a one-way message to a stylesheet, so there is no reason to
 * re-render the subtree for it.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger in milliseconds. Keep under ~250ms so nothing feels slow. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.setAttribute("data-visible", "true");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-visible="false"
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
