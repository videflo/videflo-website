import Image from "next/image";
import { AppStoreButton, AppStoreNote } from "@/components/ui/AppStoreButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";

export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="on-dark bg-ink relative isolate overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <Image
        src="/images/watching-together.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="from-ink/80 via-ink/65 to-ink/95 absolute inset-0 -z-10 bg-gradient-to-b"
      />
      <div
        aria-hidden="true"
        className="grain-layer absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
      />

      {/*
        Standard container so the closing section starts on the same left edge as
        every other section, rather than floating in the middle of the band.
      */}
      <Container>
        <Reveal>
          <h2
            id="download-heading"
            className="font-display text-display-lg text-paper max-w-4xl font-semibold"
          >
            The moments happening today become the memories you treasure
            tomorrow.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-lead text-cream-muted mt-7 max-w-xl">
            Start a Tape for the thing you&rsquo;d hate to forget. Record it as
            it happens. Watch it back years from now, all in one piece.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-col items-start gap-4">
            <AppStoreButton size="lg" variant="cream" />
            <AppStoreNote tone="dark" />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-display text-gold mt-14 text-2xl font-semibold">
            {site.brandPhrase}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
