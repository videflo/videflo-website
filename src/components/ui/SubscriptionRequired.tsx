import { cn } from "@/lib/cn";

/** The disclosure beneath every main download call to action. */
export function SubscriptionRequired({ className }: { className?: string }) {
  return (
    <p
      data-subscription-disclosure
      className={cn(
        "text-ink-soft text-[0.9375rem] leading-snug font-medium text-balance",
        className,
      )}
    >
      Subscription required.
    </p>
  );
}
