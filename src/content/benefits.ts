/**
 * Videflo's current, shipped capabilities.
 *
 * Everything here must be true of the app as it exists today (Videflo 1.0).
 * Do not add AI features, Android, iPad or web playback — none of those exist.
 * The Videflo Cloud entry deliberately does NOT promise that a recording can
 * never be lost; the caveat beneath the list on the homepage carries that.
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
    title: "Protected in Videflo Cloud",
    body: "Every recording is backed up automatically, so a Tape survives a lost phone and follows you to a new phone. Your originals stay on your device, untouched.",
  },
  {
    title: "Shared Tapes",
    body: "Invite family to a Tape and everyone can add their own recordings to it. One memory, filmed by all the people who were there.",
  },
  {
    title: "Organized memories",
    body: "Give each Tape a name and gather related ones into Collections, so the memory you want is never buried.",
  },
  {
    title: "Export anytime",
    body: "Save any Tape to Photos as one finished video whenever you want to keep it elsewhere or send it on.",
  },
];
