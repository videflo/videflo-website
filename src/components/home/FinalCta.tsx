import Image from "next/image";
import { AppStoreButton, AppStoreNote } from "@/components/ui/AppStoreButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SubscriptionRequired } from "@/components/ui/SubscriptionRequired";

export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="bg-paper relative isolate overflow-hidden pb-24 sm:pb-32 lg:pb-40"
    >
      {/*
        The onboarding's own composition: the photograph on top, fading into
        the cream beneath it so the headline sits on a clean field whatever the
        bottom of the image holds (`OnboardingPhotoView`).
      */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:aspect-auto lg:h-[34rem]">
        <Image
          src="/images/onboarding/reliving-memory.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-[40%_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-[45%] bg-[linear-gradient(to_top,var(--color-paper)_0%,var(--color-paper)_6%,color-mix(in_srgb,var(--color-paper)_65%,transparent)_45%,transparent)]"
        />
      </div>

      <Container className="relative -mt-6 sm:-mt-10">
        <Reveal>
          <h2
            id="download-heading"
            className="font-display text-display-lg text-ink max-w-4xl font-bold"
          >
            The moments happening today become the memories you treasure
            tomorrow.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-lead text-ink-muted mt-7 max-w-xl">
            Start a Tape for the thing you&rsquo;d hate to forget.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-col items-start gap-4">
            <AppStoreButton size="lg" />
            <SubscriptionRequired />
            <AppStoreNote />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
