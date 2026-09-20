import type { HelpArticle } from "../types";

export const privacyArticles: readonly HelpArticle[] = [
  {
    slug: "privacy-and-security",
    title: "Privacy and security in plain English",
    description:
      "Where your recordings live, who can see them, what Videflo knows about you, and what it never does.",
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
      "email",
    ],
    overview: [
      "Videflo is a private memory archive. Your recordings are made on your phone and protected in Videflo Cloud, and a Tape is seen by nobody but you unless you invite them to it.",
      "There's no advertising, no tracking, no analytics, and nobody at Videflo looking at your footage. This article says plainly what the app does with your information; the **Privacy Policy** is the full version.",
    ],
    sections: [
      {
        id: "where",
        heading: "Where your recordings live",
        blocks: [
          {
            kind: "list",
            items: [
              "**On your phone**, in Videflo's own storage, protected by your passcode and the phone's built-in encryption like any other app's data.",
              "**In Videflo Cloud**, once each recording's upload finishes. This is the copy that survives a lost phone and follows you to a new one. Uploads are encrypted in transit.",
              "**In Photos**, only if you export one. From there it's an ordinary video and Videflo has nothing more to do with it.",
            ],
          },
          {
            kind: "text",
            text: "Your Tape and recording names, cover photos, and the date, time and time zone each recording was made go to Videflo Cloud with the video, so a Tape comes back complete on a new phone. Collections and your settings stay on the phone.",
          },
        ],
      },
      {
        id: "who-sees",
        heading: "Who can see what",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "A personal Tape",
                description: "You, and nobody else.",
              },
              {
                term: "A Shared Tape",
                description:
                  "The owner and every member who accepted an invitation. They can watch every recording in it and see who filmed each one.",
              },
              {
                term: "Your Profile: name, username, picture",
                description:
                  "People who search for your exact username, your Friends & Family, the members of Tapes you share or join, and anyone you exchange a request or invitation with. There's no public directory.",
              },
              {
                term: "Your email address",
                description:
                  "Nobody. Sign in with Apple gives Videflo the address on your Apple Account (or Apple's private relay address if you chose Hide My Email) to identify your account. It's never shown to other users and can't be searched.",
              },
              {
                term: "The Videflo team",
                description:
                  "We run the service, and we don't browse your Tapes. Nothing in Videflo analyses, transcribes or runs recognition on your footage, and nothing is used to train anything.",
              },
            ],
          },
        ],
      },
      {
        id: "what-leaves",
        heading: "What leaves your phone, and to whom",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Recordings and Tape details, to Videflo Cloud",
                description:
                  "While Back Up to Videflo Cloud is on. Videflo Cloud runs on Supabase, the infrastructure provider behind your account, your Tape details and your recordings.",
              },
              {
                term: "Subscription checks, to Apple and to RevenueCat",
                description:
                  "Videflo confirms your subscription with the App Store, and our subscription infrastructure provider, RevenueCat, records your App Store purchases against your Videflo account so your Videflo Cloud capacity follows you to a new phone. Neither sees your card details; Apple takes the payment.",
              },
              {
                term: "A device token, to Apple, if you allow notifications",
                description:
                  "So that Videflo can send lock-screen notifications through Apple. The text of a notification never names a person or a Tape.",
              },
              {
                term: "Exports, to wherever you send them",
                description:
                  "An exported video goes into your own Photos library. Anything after that is your choice.",
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
            title: "No analytics, no advertising, no tracking",
            text: [
              "Videflo contains no advertising, no advertising identifier, and no third-party analytics, attribution or crash-reporting software. We don't sell your information and we don't track you across other apps or websites.",
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
              "**Photos** is requested as *add only*: permission to save a video into your library, not to look through it.",
              "**Choosing a cover photo or videos to add asks for nothing.** iOS shows its own picker and hands the app only what you tapped. It never sees the rest.",
              "**Notifications** are asked once, after you sign in, and are optional. The bell in the app works either way.",
            ],
          },
          {
            kind: "text",
            text: "You can review or change all of these at any time in **Settings → Videflo** on your phone.",
          },
        ],
      },
      {
        id: "controls",
        heading: "What you can do about it",
        blocks: [
          {
            kind: "list",
            items: [
              "**Turn backup off** in Settings → Videflo Cloud → Backup Settings. New recordings then stay on your phone only.",
              "**Delete a Tape**, and it's gone from your phone and Videflo Cloud together.",
              "**Remove people from a Tape you own, or leave one** you were invited to.",
              "**Change your name and picture** in Settings → Profile → Edit Profile.",
              "**Delete your account** from the bottom of Settings. It removes your account, your Profile, your connections and every Tape you own from Videflo Cloud. Recordings you added to somebody else's Shared Tape stay in that Tape without your name.",
            ],
          },
        ],
      },
    ],
    tips: [
      "The green dot in the corner of the screen is iOS telling you the camera is active. It's a system indicator, so it's true of every app, and it's worth trusting.",
      "Videflo works offline. Recording, and watching any Tape that's on your phone, need no connection at all. Backup simply waits.",
      "If you're handing your phone to someone, remember the Tapes are in the app rather than in Photos, so anyone with your unlocked phone can open them. Sign out first if that matters.",
    ],
    faqs: [
      {
        question: "Can Videflo see my videos?",
        answer: [
          "Your recordings are stored in Videflo Cloud so they can be protected and played back to you and the people you share with. Nobody browses them, nothing analyses them, and access is enforced per account on the server: a personal Tape is reachable only by your account, a Shared Tape only by its members.",
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
          "Many people use it for exactly that. Footage of your family is seen only by you and the people you deliberately invite to a Tape, and Videflo never analyses it.",
        ],
      },
      {
        question: "Is my footage encrypted?",
        answer: [
          "On your phone it's protected by the device's encryption, which is active whenever your phone is locked with a passcode. On its way to and from Videflo Cloud it's encrypted in transit. A strong passcode is the single best thing you can do.",
        ],
      },
      {
        question: "How do I delete everything Videflo holds about me?",
        answer: [
          "Export anything you want to keep to Photos, then use **Delete Account** at the bottom of Settings. That removes your account and every Tape you own from Videflo Cloud. Then delete the app to remove the recordings on your phone, and cancel the subscription in your Apple Account.",
        ],
      },
    ],
    related: ["accounts-and-signing-in", "videflo-cloud", "shared-tapes"],
  },
] as const;
