import { cn } from "@/lib/cn";

/** The disclosure beneath every main download call to action. */
export function SubscriptionRequired({ className }: { className?: string }) {
  return (
    <p
      data-subscription-disclosure
      className={cn(
        "text-ink-muted text-sm leading-snug font-normal text-balance",
        className,
      )}
    >
      Subscription required.
    </p>
  );
}
