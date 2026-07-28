import type { HelpArticle } from "../types";

export const settingsArticles: readonly HelpArticle[] = [
  {
    slug: "settings-reference",
    title: "Every setting explained",
    description:
      "A guided tour of Videflo's Settings screen, top to bottom, with nothing left out.",
    category: "settings",
    keywords: [
      "options",
      "preferences",
      "gear",
      "replay introduction",
      "version",
      "about",
      "help centre",
      "feedback",
      "toggle",
    ],
    overview: [
      "Videflo's Settings screen is short on purpose. Most of what shapes a Tape — its orientation, its quality — is decided when you create it, so there's very little left to configure globally.",
      "Open it from the gear icon in the top-right corner of the **Home** tab. Here's every section in order.",
    ],
    sections: [
      {
        id: "playback",
        heading: "Playback",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Show Timestamp",
                description:
                  "Shows the date and time a piece of footage was filmed in the corner of the picture while you watch. On by default. It's an overlay only — your recordings are never altered.",
              },
              {
                term: "Timestamp Position",
                description:
                  "Bottom Left or Bottom Right. Greyed out while Show Timestamp is off, since there'd be nothing to position.",
              },
            ],
          },
          {
            kind: "text",
            text: "Both apply to every Tape as you watch it. Burning the date permanently into an exported video is a separate choice you make at export time — see **The date stamp on your Tapes**.",
          },
        ],
      },
      {
        id: "subscription",
        heading: "Subscription",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "The status row",
                description:
                  "Shows whether your subscription is active, which plan it is, and when the current period ends. It only names a plan or a date when the App Store has actually confirmed one — Videflo never guesses.",
              },
              {
                term: "Restore Purchases",
                description:
                  "Brings back a subscription after reinstalling or moving to a new iPhone. See **Restoring a purchase**.",
              },
              {
                term: "Manage Subscription",
                description:
                  "Opens Apple's own subscription page, where you cancel or switch plans. Videflo can't do either itself.",
              },
            ],
          },
        ],
      },
      {
        id: "help",
        heading: "Help",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Help Center",
                description:
                  "Opens this website — the same articles you're reading now.",
              },
              {
                term: "Share Feedback",
                description:
                  "Opens the feedback portal, where you can suggest features, report problems, and see what others have asked for.",
              },
            ],
          },
          {
            kind: "text",
            text: "Both open outside the app, which is why each row has a small arrow beside it.",
          },
        ],
      },
      {
        id: "introduction",
        heading: "Introduction",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Replay Introduction",
                description:
                  "Shows the four welcome screens again from the beginning. Useful when you're handing the app to someone else, or if you skimmed them the first time.",
              },
            ],
          },
          {
            kind: "note",
            title: "It touches nothing",
            text: [
              "Replaying the introduction doesn't affect a single Tape, recording, Collection, or preference. It simply shows the screens again and returns you to the app afterwards.",
            ],
          },
        ],
      },
      {
        id: "about",
        heading: "About Videflo",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Website",
                description: "Opens videflo.com.",
              },
              {
                term: "Privacy Policy",
                description:
                  "Opens the live policy on this site, so it's always the current version rather than one frozen into an old app update.",
              },
              {
                term: "Terms of Service",
                description: "Opens the live terms, for the same reason.",
              },
              {
                term: "Version",
                description:
                  "Which version of Videflo you have — for example, Version 1.0. The only row on the screen that doesn't do anything when tapped. Worth quoting if you write to support.",
              },
            ],
          },
        ],
      },
      {
        id: "not-here",
        heading: "Things you might expect but won't find",
        blocks: [
          {
            kind: "list",
            items: [
              "**Recording quality** — chosen per Tape when you create it, so a single Tape can never end up half in one quality and half in another.",
              "**Orientation** — likewise chosen per Tape.",
              "**A cloud or sync switch** — there's nothing to switch on; Videflo doesn't upload anything.",
              "**An account section** — there's no Videflo account to manage.",
              "**Notifications** — Videflo doesn't send any.",
              "**A dark mode switch** — Videflo uses its own warm design in both appearances.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Settings is reached from the Home tab only. It isn't buried in the iPhone's own Settings app — that page is for permissions.",
      "If a link in the Help section doesn't open, check your connection: those rows go out to the web.",
    ],
    faqs: [
      {
        question: "Where do I change the recording quality?",
        answer: [
          "You don't, globally. Quality is chosen when you create a Tape and stays fixed for that Tape's life, which is what keeps everything inside it consistent.",
        ],
      },
      {
        question: "Does Replay Introduction delete anything?",
        answer: [
          "No. It shows the welcome screens again and nothing else. Your Tapes, Collections, and preferences are untouched.",
        ],
      },
      {
        question: "Can I turn off the timestamp for one Tape only?",
        answer: [
          "Not during playback — the setting applies across the app. Exports are per-export, so you can burn the date into one and leave another clean.",
        ],
      },
    ],
    related: ["timestamps", "manage-subscription", "app-updates"],
  },

  {
    slug: "app-updates",
    title: "Updating Videflo",
    description:
      "How updates arrive, whether they affect your Tapes, and what to do if one goes wrong.",
    category: "settings",
    keywords: [
      "update",
      "new version",
      "upgrade app",
      "changelog",
      "what's new",
      "automatic updates",
      "version",
    ],
    overview: [
      "Videflo updates through the App Store like any other app. Updating never touches your Tapes — your recordings stay exactly where they are.",
    ],
    sections: [
      {
        id: "updating",
        heading: "Getting the latest version",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Open the **App Store**." },
              {
                title: "Tap your picture in the top-right corner.",
              },
              {
                title:
                  "Scroll to the list of available updates and tap **Update** beside Videflo.",
                detail:
                  "Or pull down on that screen to refresh the list if nothing's showing.",
              },
            ],
          },
          {
            kind: "text",
            text: "To have updates arrive on their own, turn on **Settings → App Store → App Updates**. It's the simplest way to stay current.",
          },
        ],
      },
      {
        id: "which-version",
        heading: "Checking which version you have",
        blocks: [
          {
            kind: "text",
            text: "Open Videflo's **Settings** from the gear on Home and look at the **Version** row under **About Videflo**. It's worth quoting if you ever write to support.",
          },
        ],
      },
      {
        id: "safety",
        heading: "Do updates affect my Tapes?",
        blocks: [
          {
            kind: "text",
            text: "No. Updating replaces the app, not its data. Your Tapes, recordings, Collections, cover photos and preferences all carry across, and Videflo is careful to keep reading libraries created by earlier versions.",
          },
          {
            kind: "warning",
            title: "Updating is safe. Deleting is not.",
            text: [
              "An update keeps your data. **Deleting** the app removes it. If an update is misbehaving, never delete and reinstall as a first step — ask us first, because reinstalling would take your Tapes with it.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Updates are worth taking. Small fixes to recording and saving are exactly the sort of thing you want on the phone before an occasion, not after it.",
      "If an update is waiting and you're about to film something important, either update first or leave it until afterwards — not halfway through the afternoon.",
    ],
    troubleshooting: [
      {
        problem: "The update won't download.",
        solutions: [
          "Check your connection and free storage.",
          "Sign out of and back into the App Store in **Settings → your name → Media & Purchases**.",
          "Restart your iPhone and try again.",
        ],
      },
      {
        problem: "The app misbehaves after updating.",
        solutions: [
          "Force-close it — swipe up from the bottom of the screen and swipe Videflo away — then reopen it.",
          "Restart your iPhone.",
          "Tell us what's wrong, with your iPhone model, iOS version, and the Videflo version. Please don't delete the app; that would take your Tapes with it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I have to pay for updates?",
        answer: ["No. Updates are included with your subscription."],
      },
      {
        question: "Where can I see what changed?",
        answer: [
          "The App Store shows release notes on Videflo's page under **What's New**. The feedback portal linked from Settings also carries announcements.",
        ],
      },
      {
        question: "Can I go back to an older version?",
        answer: [
          "The App Store doesn't allow that. If a new version has broken something for you, please tell us — that's the fastest route to a fix.",
        ],
      },
    ],
    related: ["settings-reference", "contact-support", "troubleshooting-app"],
  },

  {
    slug: "contact-support",
    title: "Getting in touch",
    description:
      "How to reach a human, and what to include so we can actually help.",
    category: "settings",
    keywords: [
      "email",
      "help",
      "contact",
      "feedback",
      "bug",
      "feature request",
      "report",
      "support",
    ],
    overview: [
      "Videflo is made by a very small team, and a person reads every message. There's no ticket robot and no phone tree.",
      "If something's wrong, or you've an idea, we'd genuinely like to hear it.",
    ],
    sections: [
      {
        id: "how",
        heading: "Two ways to reach us",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Email — for anything that's gone wrong",
                description:
                  "Best when something isn't working, or when you'd rather not post publicly. The address is on the support page and at the bottom of every page on this site.",
              },
              {
                term: "Share Feedback — for ideas",
                description:
                  "Open Videflo's **Settings → Help → Share Feedback**. It's the place for feature suggestions, and you can see and support what other people have asked for.",
              },
            ],
          },
        ],
      },
      {
        id: "what-to-include",
        heading: "What to include",
        blocks: [
          {
            kind: "text",
            text: "The more of this you can tell us, the faster we can help — and often the difference between fixing something today and guessing at it for a week.",
          },
          {
            kind: "list",
            items: [
              "**Your iPhone model** — for example iPhone 15 Pro.",
              "**Your iOS version** — from **Settings → General → About**.",
              "**Your Videflo version** — from Videflo's **Settings → About Videflo → Version**.",
              "**What you were doing** when it happened, step by step if you can.",
              "**What you expected**, and what happened instead.",
              "**A screenshot or screen recording** if there's anything to see. These help enormously.",
            ],
          },
          {
            kind: "note",
            title: "Never send us your footage",
            text: [
              "We don't need it, and we'd rather not have it. A description or a screenshot is plenty. Your recordings are yours.",
            ],
          },
        ],
      },
      {
        id: "cant-help",
        heading: "Two things we genuinely can't do",
        blocks: [
          {
            kind: "list",
            items: [
              "**Recover lost recordings.** Videflo keeps no copy of anything, so if a Tape is gone from your iPhone, there is nothing on our side to restore it from. This is worth knowing *before* you need it — see **Backups and moving to a new iPhone**.",
              "**Issue refunds or cancel subscriptions.** Apple bills for App Store purchases, so both live in your Apple Account. Do tell us if something's broken, though — we can't refund, but we can fix.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Have a look through the Help Center first — a great many questions are answered here, and it's faster than waiting on a reply.",
      "One email per problem is easier to follow than one long one covering several.",
      "If it's a feature you'd like rather than something broken, the feedback portal is the better home for it: other people can add their voice.",
    ],
    faqs: [
      {
        question: "How quickly will I get a reply?",
        answer: [
          "As soon as we reasonably can. We're a small team, so it's hours to a couple of days rather than instant — but a real person will answer.",
        ],
      },
      {
        question: "Is there a phone number or live chat?",
        answer: [
          "No. Email is the way to reach us, and it means we can look properly at what you've sent rather than guessing on the spot.",
        ],
      },
      {
        question: "Can I suggest a feature?",
        answer: [
          "Please do. **Settings → Help → Share Feedback** in the app is the best place — suggestions there are visible to other people, who can add their support.",
        ],
      },
    ],
    related: ["app-updates", "backups-and-new-iphone", "troubleshooting-app"],
  },
] as const;
