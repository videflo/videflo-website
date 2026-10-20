import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TapeFrame } from "@/components/visuals/TapeFrame";
import { useCases } from "@/content/use-cases";

/**
 * Editorial layout, index-matched to `useCases`.
 *
 * One column on phones; paired at `sm`; an asymmetric twelve-column composition
 * at `lg` so the grid never reads as a row of identical cards. Tiles that share
 * an `lg` row share a fixed height (rather than an aspect ratio) so their edges
 * always line up even though their widths differ; the full-width last tile
 * stands alone and keeps an aspect ratio instead. Below `lg` the *cover* holds
 * the aspect ratio, as the app's Tape card holds a 4:3 thumbnail, and the
 * caption sits beneath it at its natural height.
 */
type Tile = { span: string; frame: string; cover: string; sizes: string };

const tiles: readonly Tile[] = [
  {
    span: "sm:col-span-2 lg:col-span-7",
    frame: "lg:h-[28rem]",
    cover: "aspect-[4/3] sm:aspect-[2/1] lg:aspect-auto",
    sizes: "(min-width: 1024px) 56vw, 100vw",
  },
  {
    span: "lg:col-span-5",
    frame: "lg:h-[28rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    frame: "lg:h-[30rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    frame: "lg:h-[30rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-4",
    frame: "lg:h-[30rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-5",
    frame: "lg:h-[28rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    span: "lg:col-span-7",
    frame: "lg:h-[28rem]",
    cover: "aspect-[4/3] lg:aspect-auto",
    sizes: "(min-width: 1024px) 56vw, (min-width: 640px) 46vw, 100vw",
  },
  {
    // Full width, alone in its row, so nothing needs its edges to line up:
    // the cover keeps a cinematic 5:2 instead of a fixed height, which at full
    // width left a 6:1 sliver that showed little more than the faces.
    span: "sm:col-span-2 lg:col-span-12",
    frame: "",
    cover: "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[5/2]",
    sizes: "100vw",
  },
];

export function UseCases() {
  return (
    <Section id="tapes" tone="paper" labelledBy="tapes-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Tapes worth keeping</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="tapes-heading"
              className="font-display text-display-lg text-ink mt-6 font-bold"
            >
              A Tape for every chapter.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lead text-ink-muted mt-6">
              A Tape can be a year, a weekend, a season, or one afternoon you
              never want to forget.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {useCases.map((tape, index) => {
            const tile = tiles[index];
            return (
              <Reveal
                as="li"
                key={tape.name}
                delay={(index % 3) * 70}
                className={tile.span}
              >
                <TapeFrame
                  tape={tape}
                  sizes={tile.sizes}
                  className={`w-full ${tile.frame}`}
                  coverClassName={tile.cover}
                />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
