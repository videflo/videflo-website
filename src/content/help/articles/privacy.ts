import type { HelpArticle } from "../types";

export const privacyArticles: readonly HelpArticle[] = [
  {
    slug: "privacy-and-security",
    title: "Privacy and security in plain English",
    description:
      "What stays on your iPhone, what leaves it, and what Videflo knows about you.",
    category: "privacy",
    keywords: [
      "data",
      "tracking",
      "analytics",
      "ads",
      "secure",
      "encryption",
      "who can see",
      "gdpr",
      "children",
    ],
    overview: [
      "Videflo is local-first. Your recordings are made on your iPhone, kept on your iPhone, and never uploaded to us.",
      "That isn't a setting you have to find and switch on. It's how the app is built, and there's no version of it that behaves differently.",
    ],
    sections: [
      {
        id: "what-stays",
        heading: "What stays on your iPhone",
        blocks: [
          {
            kind: "list",
            items: [
              "**Every recording you make.** Videflo has no copy and no way to obtain one.",
              "**Tape and Collection names**, along with their order and settings.",
              "**Cover photos** you've chosen — stored as a resized copy inside the app.",
              "**Your preferences**, such as whether the timestamp is shown.",
            ],
          },
          {
            kind: "text",
            text: "All of it sits in Videflo's own storage on the device, protected by your iPhone's passcode and its built-in encryption like any other app's data.",
          },
        ],
      },
      {
        id: "what-leaves",
        heading: "What leaves your iPhone",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Subscription checks — to Apple",
                description:
                  "Videflo asks the App Store whether your subscription is active. That conversation is between your device and Apple; no footage and no personal details are involved.",
              },
              {
                term: "Exports — where you send them",
                description:
                  "When you export, the video goes into your own Photos library. Anything after that is your choice: AirDrop, a message, a shared album. Videflo isn't part of it.",
              },
              {
                term: "Your iPhone backup — if you have one",
                description:
                  "An iCloud or computer backup that includes app data will include your Tapes. That's Apple's system, set up by you, and it's a good thing — it's the main way your footage survives a lost phone.",
              },
              {
                term: "Emails you send us",
                description:
                  "If you write to support, we have whatever you chose to tell us. Nothing more.",
              },
            ],
          },
          {
            kind: "note",
            title: "There is no analytics in Videflo",
            text: [
              "No advertising, no third-party trackers, no usage analytics, and no account to profile. We genuinely don't know how many Tapes you have or what's in them.",
            ],
          },
        ],
      },
      {
        id: "permissions",
        heading: "The permissions, and why each is narrow",
        blocks: [
          {
            kind: "list",
            items: [
              "**Camera and microphone** are used only while you're recording, on the recording screen. Leave the screen and both are shut down.",
              "**Photos** is requested as *add only* — permission to save a video into your library, not to look through it.",
              "**Choosing a cover photo asks for nothing.** iOS shows its own picker and hands the app one picture. It never sees the rest.",
            ],
          },
          {
            kind: "text",
            text: "You can review or change all of these at any time in **Settings → Videflo** on your iPhone.",
          },
        ],
      },
      {
        id: "the-trade",
        heading: "The honest trade-off",
        blocks: [
          {
            kind: "warning",
            title: "Privacy this strong means backups are your job",
            text: [
              "Because nothing is uploaded, nothing can be restored by us. If your iPhone is lost, damaged, or erased, Tapes that exist only inside Videflo are gone.",
              "Please keep an iPhone backup switched on, and export the Tapes you couldn't bear to lose.",
            ],
          },
        ],
      },
    ],
    tips: [
      "The green dot in the corner of the screen is iOS telling you the camera is active. It's a system indicator, so it's true of every app, and it's worth trusting.",
      "Videflo works offline. Recording, playback, trimming, and exporting need no connection at all.",
      "If you're handing your phone to someone, remember the Tapes are in the app rather than in Photos — so anyone with your unlocked phone can open them.",
    ],
    faqs: [
      {
        question: "Can Videflo see my videos?",
        answer: [
          "No. Your recordings never leave your device, so there's nothing for us to see. We have no server holding your footage and no mechanism to request it.",
        ],
      },
      {
        question: "Do you sell my data?",
        answer: [
          "No. There's no advertising in Videflo, no third-party trackers, and no personal data collected to sell.",
        ],
      },
      {
        question: "Is Videflo suitable for recording children?",
        answer: [
          "Many people use it for exactly that, and the local-first design is one reason. Footage of your family stays on your phone unless you export and share it deliberately.",
        ],
      },
      {
        question: "Is my footage encrypted?",
        answer: [
          "It's stored in the app's own storage on your iPhone and protected by the device's encryption, which is active whenever your phone is locked with a passcode. A strong passcode is the single best thing you can do.",
        ],
      },
      {
        question: "How do I delete everything Videflo holds about me?",
        answer: [
          "Delete the app. Everything Videflo stores is on your device, so removing it removes the lot — including your Tapes, which is why you should export anything you want to keep first.",
          "Remember to cancel any subscription separately in your Apple Account.",
        ],
      },
    ],
    related: [
      "camera-and-microphone-permissions",
      "backups-and-new-iphone",
      "contact-support",
    ],
  },
] as const;
