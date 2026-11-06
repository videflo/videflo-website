import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { SubscriptionRequired } from "@/components/ui/SubscriptionRequired";
import { appScreens } from "@/components/visuals/appScreens";
import { DeviceFrame } from "@/components/visuals/DeviceFrame";
import { TapeRibbon } from "@/components/visuals/TapeRibbon";

export function Hero() {
  return (
    <section className="bg-paper relative isolate overflow-hidden pt-8 sm:pt-14 lg:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 -z-20 size-[44rem] rounded-full bg-[radial-gradient(closest-side,rgba(248,185,95,0.42),transparent)]"
      />
      <TapeRibbon
        id="hero-ribbon"
        className="top-[62%] left-1/2 -z-10 h-72 w-[190%] -translate-x-1/2 sm:h-96 lg:top-[34%] lg:left-[64%] lg:w-[60%] lg:translate-x-0"
      />

      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16">
          <div className="max-w-2xl lg:pb-28">
            <h1 className="font-display text-display-xl text-ink font-bold">
              Your Life.
              <br />
              <span className="text-coral">One Tape.</span>
            </h1>
            <p className="text-lead text-ink-soft mt-6 max-w-xl">
              Capture birthdays, vacations, and everyday moments in one
              continuous Tape.
            </p>
            {/* The page's one App Store badge (Apple: one per layout). */}
            <StoreBadges className="mt-8" />
            <SubscriptionRequired className="mt-4" />
          </div>

          <div className="mx-auto h-[27rem] w-full max-w-[20rem] overflow-hidden sm:h-[34rem] sm:max-w-[24rem] lg:h-[40rem] lg:max-w-none">
            <DeviceFrame
              screen={appScreens.recording}
              sizes="(min-width: 1024px) 432px, (min-width: 640px) 384px, 320px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
