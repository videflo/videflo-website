import Image from "next/image";
import { AppStoreButton, AppStoreNote } from "@/components/ui/AppStoreButton";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    // The header floats over this section, hence the extra top padding.
    <section className="bg-cream relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28">
      {/* Warm light falling from the top of the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(230,184,92,0.18),transparent_72%)]"
      />

      <Container>
        <div className="relative max-w-3xl">
          <Reveal>
            <Eyebrow>Made for the moments that matter</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="font-display text-display-xl text-ink mt-6 font-semibold">
              Capture Today.
              <br />
              Cherish Forever.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lead text-ink-muted mt-7 max-w-2xl">
              Turn life&rsquo;s moments into continuous Tapes you can revisit
              for years to come.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-col items-start gap-4">
              <AppStoreButton size="lg" />
              <AppStoreNote />
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-14 sm:mt-20">
        <Reveal delay={120}>
          <figure className="relative">
            <div className="bg-ink shadow-lift relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[3/2] lg:aspect-[16/9]">
              <Image
                src="/images/hero-family-sunset.jpg"
                alt="A family standing together on a headland at dusk, watching the sun set over the ocean."
                fill
                priority
                sizes="(min-width: 1280px) 1152px, (min-width: 640px) 92vw, 100vw"
                className="object-cover"
              />
              {/* Camcorder timestamp, the same treatment the app uses. */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8">
                <span className="text-paper/80 block text-[0.625rem] font-semibold tracking-[0.22em] uppercase">
                  Tape
                </span>
                <span className="font-display text-paper mt-1 block text-lg font-semibold sm:text-xl">
                  Summer Vacation
                </span>
                <span className="text-paper/85 mt-0.5 block text-xs tabular-nums">
                  Jul 09, 2026 · 7:48 PM
                </span>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
