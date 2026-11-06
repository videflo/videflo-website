import { cn } from "@/lib/cn";

/**
 * The continuous tape from the App Store gallery. Decorative only. It sits behind
 * content and is hidden from assistive technology.
 */
export function TapeRibbon({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const path =
    "M-40 330C210 420 370 110 640 150S1010 470 1260 360 1560 130 1660 170";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={cn("pointer-events-none absolute", className)}
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-gold)" />
          <stop offset="0.55" stopColor="var(--color-coral-bright)" />
          <stop offset="1" stopColor="var(--color-gold)" />
        </linearGradient>
      </defs>
      <path d={path} stroke={`url(#${id})`} strokeWidth="46" />
      <path d={path} stroke="#fff4e2" strokeOpacity="0.28" strokeWidth="26" />
      <path
        d={path}
        transform="translate(0 -17)"
        stroke="#fff7ea"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="0 24"
      />
      <path
        d={path}
        transform="translate(0 17)"
        stroke="#fff7ea"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="0 24"
      />
    </svg>
  );
}
