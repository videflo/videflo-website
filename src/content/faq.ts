/**
 * Support FAQ.
 *
 * Answers are plain text so the same words can be rendered on the page and
 * emitted as FAQPage structured data without the two versions drifting apart.
 * An optional `link` is rendered after the answer and is left out of the
 * structured data.
 *
 * ACCURACY RULE: every answer must describe the app as it actually behaves
 * (Videflo 1.0). Nothing here may promise Android, iPad, web playback, a free
 * trial, a yearly plan, or Family Sharing — none of those exist.
 */
export type FaqItem = {
  question: string;
  /** One or more plain-text paragraphs. No markup. */
  answer: readonly string[];
  link?: { href: string; label: string; external?: boolean };
};

export const faq: readonly FaqItem[] = [
  {
    question: "What is a Tape?",
    answer: [
      "A Tape is one memory that can keep growing. Instead of ending up with dozens of separate clips, you create a Tape for an event or a chapter of life — a holiday, a birthday, a football season, a child’s first year — and add recordings to it whenever the moment happens.",
      "When you press play, the whole Tape plays through as one continuous video, in the order the moments happened. You can keep as many Tapes as you like.",
    ],
  },
  {
    question: "How do I continue recording an existing Tape?",
    answer: [
      "Open the Tape from Home or from your Tapes library and choose Continue Recording. The new recording joins the end of that Tape automatically — there is nothing to stitch together afterwards.",
      "Videflo will ask you to hold your iPhone the same way the Tape was started, portrait or landscape, so the finished Tape plays back without flipping between the two.",
    ],
  },
  {
    question: "Do I need an account?",
    answer: [
      "Yes. Videflo uses Sign in with Apple — there is no Videflo password to create. Your account is what lets Videflo Cloud protect your Tapes, bring them to a new iPhone, and share a Tape with the people you invite.",
    ],
    link: { href: "/support#account", label: "Accounts and signing in" },
  },
  {
    question: "Where are my Tapes stored?",
    answer: [
      "On your iPhone first, inside Videflo’s own storage. While Back Up to Videflo Cloud is on — it is on by default — every recording is also copied to Videflo Cloud, so a Tape survives a lost or replaced phone. Your original files on the iPhone are never changed.",
    ],
    link: {
      href: "/support#storage",
      label: "How Videflo keeps your Tapes safe",
    },
  },
  {
    question: "Does Videflo back up my videos to the cloud?",
    answer: [
      "Yes. Videflo Cloud is included with your subscription, and backup is automatic. A recording is protected once its upload has finished; until then it exists only on your iPhone, so it is still worth keeping an iPhone backup switched on as well.",
      "Once a Tape is fully protected you can remove its files from your iPhone to free space and it will play by streaming — and you can download it again whenever you like.",
    ],
    link: {
      href: "/support#storage",
      label: "Videflo Cloud, storage and backups",
    },
  },
  {
    question: "Can I share a Tape with my family?",
    answer: [
      "Yes. Open the Tape’s menu and choose Invite to Tape. You can pick people from Friends & Family, search Videflo by @username, or send a link by text message. Everyone who joins can watch the whole Tape and add their own recordings to it.",
      "You can also export any Tape to Photos as one video and share the file from there, exactly as you would any other video.",
    ],
    link: { href: "/support#sharing", label: "Shared Tapes" },
  },
  {
    question: "How do I export a Tape?",
    answer: [
      "Open the Tape, tap the ⋯ menu in the player and choose Export Tape. Videflo turns the whole Tape into one video and saves it straight to your Photos library — no preparing step, and nothing left behind in Videflo.",
      "Keep the app on screen while it exports. A long Tape or a higher recording quality takes longer, and you can cancel at any time.",
    ],
  },
  {
    question: "How do I restore my subscription?",
    answer: [
      "If you reinstall Videflo or set up a new iPhone, sign in with Apple and, if the subscription screen appears, tap Restore Purchases while signed in to the same Apple Account you bought the subscription with.",
      "Restoring brings back access. Your Tapes come back separately, from Videflo Cloud, as soon as you sign in to the same Videflo account.",
    ],
  },
  {
    question: "How do I cancel my subscription?",
    answer: [
      "Subscriptions are billed and managed by Apple, not inside Videflo. On your iPhone, open the Settings app, tap your name at the top, then Subscriptions, and select Videflo.",
      "Cancelling stops the next renewal; you keep access until the end of the period you have already paid for. Nothing is deleted — your Tapes stay on your iPhone and in Videflo Cloud. If the option is somewhere else on your version of iOS, Apple Support has the current steps.",
    ],
    link: {
      href: "https://support.apple.com",
      label: "Apple Support",
      external: true,
    },
  },
  {
    question: "What happens if I delete Videflo?",
    answer: [
      "Deleting the app removes the recordings stored on that iPhone. Your account and everything already protected in Videflo Cloud stay exactly as they are, and come back when you reinstall and sign in. Recordings that were never backed up — because backup was off, or the upload had not finished — exist only on that iPhone and are lost with it.",
      "Deleting the app also does not cancel a subscription — that lives in your Apple Account and has to be cancelled there.",
    ],
  },
  {
    question: "Why does Videflo need camera and microphone access?",
    answer: [
      "Videflo is a camcorder, so it needs the camera to record video and the microphone to record the sound that goes with it. Without microphone access your recordings would be silent.",
      "iOS asks you for each permission, and you can change your answer at any time in Settings. Videflo records only while you have started a recording in the app.",
    ],
  },
  {
    question: "How can I contact support?",
    answer: [
      "Email us and a person will read it. Telling us your iPhone model, your iOS version, and what you were doing when something went wrong helps us help you faster.",
    ],
  },
];
