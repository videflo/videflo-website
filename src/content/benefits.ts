/**
 * Videflo's current, shipped capabilities.
 *
 * Everything here must be true of the app as it exists today. Do not add cloud
 * backup, sharing, sync, AI features, Android or web playback — none of those
 * exist. The local-first entry deliberately does NOT imply that keeping files on
 * the device protects them; the caveat below the list carries that.
 */
export type Benefit = { title: string; body: string };

export const benefits: readonly Benefit[] = [
  {
    title: "Continuous Tapes",
    body: "Add new recordings to the same memory over time. A Tape you started last spring is still waiting for today’s moment.",
  },
  {
    title: "No complicated editing",
    body: "There are no timelines to trim or clips to arrange. Press record, and the Tape grows on its own.",
  },
  {
    title: "Organized memories",
    body: "Give each Tape a name and gather related ones into Collections, so the memory you want is never buried.",
  },
  {
    title: "Export anytime",
    body: "Save a copy of a finished Tape out of Videflo whenever you want to keep it elsewhere or share it with family.",
  },
  {
    title: "Local-first privacy",
    body: "Your recordings are created and stored on your iPhone. Nothing leaves the app unless you export it yourself.",
  },
];
