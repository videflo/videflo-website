import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { benefits } from "@/content/benefits";

export function Benefits() {
  return (
    <Section id="why-videflo" tone="cream" labelledBy="why-videflo-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Why Videflo</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="why-videflo-heading"
                className="font-display text-display-lg text-ink mt-6 font-semibold"
              >
                What Videflo does today.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-ink-muted mt-6 text-[1.0625rem] leading-relaxed">
                Everything listed here works in the app right now. We&rsquo;d
                rather tell you exactly what Videflo is than promise what it
                isn&rsquo;t.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <dl className="border-line border-t">
              {benefits.map((benefit, index) => (
                <Reveal
                  as="div"
                  key={benefit.title}
                  delay={index * 50}
                  className="border-line border-b py-7 sm:grid sm:grid-cols-12 sm:gap-8"
                >
                  <dt className="font-display text-display-sm text-ink font-semibold sm:col-span-5">
                    {benefit.title}
                  </dt>
                  <dd className="text-ink-muted mt-2.5 text-[1.0625rem] leading-relaxed sm:col-span-7 sm:mt-0">
                    {benefit.body}
                  </dd>
                </Reveal>
              ))}
            </dl>

            {/*
              Required caveat: Videflo Cloud is a protective copy, not a
              guarantee, and a recording made with backup switched off — or
              interrupted before its upload finished — exists on one iPhone only.
              Do not remove or soften this without owner sign-off.
            */}
            <Reveal delay={120}>
              <p className="text-ink-faint mt-8 max-w-2xl text-sm leading-relaxed">
                One honest note: Videflo Cloud protects a recording once its
                upload has finished, and only while backup is switched on. Until
                then a recording exists on your iPhone alone. Keep a device
                backup too, and export the Tapes you couldn&rsquo;t replace.{" "}
                <Link
                  href="/support#storage"
                  className="text-ink font-semibold underline decoration-1 underline-offset-4"
                >
                  How Videflo keeps your Tapes safe
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
