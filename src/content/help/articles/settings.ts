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
      "open videflo to",
    ],
    overview: [
      "Videflo's Settings screen is short on purpose. Most of what shapes a Tape, its orientation and its quality, is decided when you create it, so there's very little left to configure globally.",
      "Open it from the gear icon on the **Home** tab. It's one list of cards; anything that needs more than a row lives one tap away on a screen of its own. Here's every card in order.",
    ],
    sections: [
      {
        id: "profile",
        heading: "Profile",
        blocks: [
          {
            kind: "text",
            text: "Your picture, name and @username, and a **Profile** row that opens your Profile screen:",
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Edit Profile",
                description:
                  "Change your display name and your photo or avatar. Your username is fixed once claimed.",
              },
              {
                term: "Friends & Family",
                description:
                  "The people you're connected with, requests waiting for you, and search by @username. See **Friends & Family and the Together row**.",
              },
              {
                term: "Tape Invitations",
                description:
                  "Tapes you've been invited to and haven't answered yet.",
              },
              {
                term: "Sign Out",
                description:
                  "Under **Account**. Returns you to the sign-in screen; everything in Videflo Cloud stays as it is.",
              },
            ],
          },
        ],
      },
      {
        id: "preferences",
        heading: "Preferences",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Open Videflo To",
                description:
                  "Whether the app opens on **Home** or straight into the **Camera**.",
              },
              {
                term: "Playback Settings → Show Timestamp",
                description:
                  "Shows the date and time a piece of footage was filmed in the corner of the picture while you watch. On by default. It's an overlay only. Your recordings are never altered.",
              },
              {
                term: "Playback Settings → Timestamp Position",
                description:
                  "Which corner. Greyed out while Show Timestamp is off, since there'd be nothing to position.",
              },
              {
                term: "Export Settings → Export with Timestamp",
                description:
                  "Whether the date and time are drawn permanently into a Tape you export to Photos. Separate from the playback setting: one is about watching, the other about the file you hand out. See **Timestamps**.",
              },
            ],
          },
        ],
      },
      {
        id: "cloud",
        heading: "Videflo Cloud",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Status",
                description:
                  "Whether Videflo Cloud is active for your account.",
              },
              {
                term: "Storage",
                description:
                  "How much of your allowance is used, for example **12.4 GB of 50 GB**.",
              },
              {
                term: "Last Backup",
                description: "When a recording last finished uploading.",
              },
              {
                term: "Backup Settings",
                description:
                  "The two switches: **Back Up to Videflo Cloud** and **Use Cellular Data**. See **Videflo Cloud: how backup works**.",
              },
              {
                term: "Manage Storage",
                description:
                  "Your largest Tapes with **Free Up Space** to remove them from the phone, and **Storage Options** to change capacity.",
              },
            ],
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
                term: "Videflo Plan",
                description:
                  "Shows whether your subscription is active. It only says so when the App Store has actually confirmed it. Videflo never guesses.",
              },
              {
                term: "Manage Subscription",
                description:
                  "Opens Apple's own subscription page, where you cancel. Videflo can't do that itself. (Restore Purchases lives on the subscription screen, where you need it.)",
              },
            ],
          },
        ],
      },
      {
        id: "notifications",
        heading: "Notifications",
        blocks: [
          {
            kind: "text",
            text: "Whether lock-screen notifications are on for Videflo. If they're off, **Turn On Notifications** asks iOS, or, if you've said no before, **Open Settings** takes you to the phone's own switch. The bell in the app works regardless. See **Notifications**.",
          },
        ],
      },
      {
        id: "support",
        heading: "Support",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Help Center",
                description:
                  "Opens this website, the same articles you're reading now.",
              },
              {
                term: "Share Feedback",
                description:
                  "Opens the feedback portal, where you can suggest features, report problems, and see what others have asked for.",
              },
              {
                term: "About Videflo",
                description:
                  "Links to the website, the Privacy Policy and the Terms of Service (the live pages, so they're always current), plus **Replay Introduction** and the **Version** row, which is worth quoting if you write to support.",
              },
            ],
          },
          {
            kind: "text",
            text: "Rows that open outside the app have a small arrow beside them.",
          },
        ],
      },
      {
        id: "delete-account",
        heading: "Delete Account",
        blocks: [
          {
            kind: "text",
            text: "On its own at the very bottom, because it's the one thing here that can't be undone. It permanently deletes your Videflo account and every Tape you own in Videflo Cloud, and asks you to confirm first. See **Accounts, signing in, and signing out**.",
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
              "**Recording quality**: chosen per Tape when you create it, so a single Tape can never end up half in one quality and half in another.",
              "**Orientation**: likewise chosen per Tape.",
              "**A cancel button**: subscriptions are cancelled in your Apple Account; Manage Subscription takes you there.",
              "**A dark mode switch**: Videflo uses its own warm design in both appearances.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Settings is reached from the Home tab only. It isn't buried in the iPhone's own Settings app. That page is for permissions.",
      "If a link in the Support section doesn't open, check your connection: those rows go out to the web.",
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
          "Not during playback. The setting applies across the app. Export with Timestamp is also one setting, so switch it before exporting the Tape you want clean.",
        ],
      },
    ],
    related: ["timestamps", "videflo-cloud", "app-updates"],
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
      "Videflo updates through the App Store like any other app. Updating never touches your Tapes. Your recordings stay exactly where they are, on your phone and in Videflo Cloud.",
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
            text: "Open Videflo's **Settings** from the gear on Home, tap **About Videflo**, and look at the **Version** row. It's worth quoting if you ever write to support.",
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
            title: "Updating is safe. Deleting is a different thing.",
            text: [
              "An update keeps everything. **Deleting** the app removes the recordings on this phone. Everything already in Videflo Cloud is safe, but a recording that hadn't finished uploading isn't. If an update is misbehaving, don't delete and reinstall as a first step: check the Tapes say **Backed Up**, and ask us first.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Updates are worth taking. Small fixes to recording and saving are exactly the sort of thing you want on the phone before an occasion, not after it.",
      "If an update is waiting and you're about to film something important, either update first or leave it until afterwards, not halfway through the afternoon.",
    ],
    troubleshooting: [
      {
        problem: "The update won't download.",
        solutions: [
          "Check your connection and free storage.",
          "Sign out of and back into the App Store in **Settings → your name → Media & Purchases**.",
          "Restart your phone and try again.",
        ],
      },
      {
        problem: "The app misbehaves after updating.",
        solutions: [
          "Force-close it by swiping up from the bottom of the screen and swiping Videflo away, then reopen it.",
          "Restart your phone.",
          "Tell us what's wrong, with your phone model, iOS version, and the Videflo version. Please check your Tapes say Backed Up before deleting the app.",
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
          "The App Store doesn't allow that. If a new version has broken something for you, please tell us. That's the fastest route to a fix.",
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
                term: "Email, for anything that's gone wrong",
                description:
                  "Best when something isn't working, or when you'd rather not post publicly. The address is on the support page and at the bottom of every page on this site.",
              },
              {
                term: "Share Feedback, for ideas",
                description:
                  "Open Videflo's **Settings → Share Feedback**. It's the place for feature suggestions, and you can see and support what other people have asked for.",
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
            text: "The more of this you can tell us, the faster we can help. It's often the difference between fixing something today and guessing at it for a week.",
          },
          {
            kind: "list",
            items: [
              "**Your phone model**, for example iPhone 15 Pro.",
              "**Your iOS version**, from **Settings → General → About**.",
              "**Your Videflo version**, from Videflo's **Settings → About Videflo → Version**.",
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
        heading: "Things we genuinely can't do",
        blocks: [
          {
            kind: "list",
            items: [
              "**Recover a recording that never reached Videflo Cloud.** If a recording was made with backup off, or the phone was lost before its upload finished, there's no copy anywhere for us to restore from. Everything that did upload comes back when you sign in.",
              "**Issue refunds or cancel subscriptions.** Apple bills for App Store purchases, so both live in your Apple Account. Do tell us if something's broken, though. We can't refund, but we can fix.",
              "**Look at your Tapes.** We can see that an account exists and how much storage it uses; we don't browse anybody's memories, and we won't open yours to diagnose a problem.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Have a look through the Help Center first. A great many questions are answered here, and it's faster than waiting on a reply.",
      "One email per problem is easier to follow than one long one covering several.",
      "If it's a feature you'd like rather than something broken, the feedback portal is the better home for it: other people can add their voice.",
    ],
    faqs: [
      {
        question: "How quickly will I get a reply?",
        answer: [
          "As soon as we reasonably can. We're a small team, so it's hours to a couple of days rather than instant, but a real person will answer.",
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
          "Please do. **Settings → Share Feedback** in the app is the best place. Suggestions there are visible to other people, who can add their support.",
        ],
      },
    ],
    related: ["app-updates", "videflo-cloud", "troubleshooting-app"],
  },
] as const;
