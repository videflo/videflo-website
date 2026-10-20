/*
  The app's two buttons, `VidefloPrimaryButton` and `VidefloSecondaryButton`
  (`Videflo/Design/VidefloComponents.swift`): the gold gradient with `onAccent`
  ink for the one dominant action on a screen, and a recessed cream fill with a
  hairline for everything quieter. Both use the 12pt `control` radius, not a
  pill, and both press the way `VidefloPressableStyle` does — a small scale and
  dim.

  Colour, shape and motion only; each caller sets its own size and layout.
*/
const pressable =
  "rounded-xl font-semibold transition-[filter,background-color,transform,opacity] duration-150 ease-out motion-safe:active:scale-[0.97] active:opacity-90";

export const buttonStyles = {
  primary: `${pressable} bg-[linear-gradient(135deg,var(--color-gold-bright),var(--color-gold)_55%,var(--color-gold-mark))] text-on-gold shadow-soft hover:brightness-[1.04]`,
  secondary: `${pressable} bg-shell text-ink border border-line hover:bg-card`,
} as const;
