import type { HelpArticle } from "../types";

export const subscriptionArticles: readonly HelpArticle[] = [
  {
    slug: "subscription-plans",
    title: "The subscription, storage capacities, and what's included",
    description:
      "One monthly subscription with Videflo Cloud included, three storage sizes, and how billing works through the App Store.",
    category: "subscription",
    keywords: [
      "price",
      "cost",
      "monthly",
      "yearly",
      "annual",
      "free trial",
      "billing",
      "pay",
      "upgrade",
      "paywall",
      "50 gb",
      "100 gb",
      "250 gb",
    ],
    overview: [
      "Videflo is a subscription app. Downloading it is free, and one subscription unlocks everything — the camcorder, the library, Shared Tapes, exporting, and Videflo Cloud with **50 GB** of storage included.",
      "There is one plan, billed monthly. The only choice you make is how much Videflo Cloud you'd like: 50 GB comes with the subscription, and 100 GB or 250 GB are available as an upgrade to it. Everything about the payment itself is handled by Apple, through the same Apple Account you use for any other App Store purchase.",
    ],
    sections: [
      {
        id: "included",
        heading: "What's included",
        blocks: [
          {
            kind: "text",
            text: "All of it. There's no free tier and no locked features. Unlimited Tapes, recordings and Collections at every quality, playback, cover photos, Shared Tapes, exporting to Photos, and automatic backup to Videflo Cloud — one subscription, the whole app.",
          },
          {
            kind: "text",
            text: "Storage is part of the subscription, because Videflo Cloud is where your Tapes are protected. The base subscription includes 50 GB; if you fill it, a larger capacity is a tap away.",
          },
        ],
      },
      {
        id: "capacities",
        heading: "The three storage capacities",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "50 GB",
                description:
                  "Included with the subscription. Plenty for most families' everyday Tapes at Standard quality.",
              },
              {
                term: "100 GB",
                description:
                  "The same Videflo, with twice the room. An upgrade to your existing subscription, not a second one.",
              },
              {
                term: "250 GB",
                description:
                  "The largest capacity Videflo sells today. For 4K Tapes, big Shared Tapes, or years of memories.",
              },
            ],
          },
          {
            kind: "text",
            text: "Change capacity in **Settings → Videflo Cloud → Manage Storage → Storage Options**. Moving up takes effect straight away, and Apple prorates what you've already paid. Moving down takes effect at your next renewal — until then you keep the room you paid for.",
          },
          {
            kind: "note",
            title: "Prices are always shown before you buy",
            text: [
              "In the United States the subscription is $9.99 a month; the App Store shows every price in your own currency, and the larger capacities are priced on the subscription screen. Apple sets the local price, so it varies by country.",
              "Videflo never shows an estimated or placeholder price — if the subscription can't be loaded from the App Store, it tells you so rather than guessing.",
            ],
          },
        ],
      },
      {
        id: "billing",
        heading: "How billing works",
        blocks: [
          {
            kind: "list",
            items: [
              "**Apple takes the payment**, using whatever payment method your Apple Account uses. We never see your card details.",
              "**It renews automatically** every month until you cancel, which you do in your Apple Account rather than in Videflo.",
              "**Receipts come from Apple**, by email and in your Apple Account purchase history.",
              "**Changing capacity is a change, not a second subscription** — you can never end up paying for two.",
            ],
          },
        ],
      },
      {
        id: "storage-owner",
        heading: "Who pays for a Shared Tape",
        blocks: [
          {
            kind: "text",
            text: "The owner. Every recording in a Tape counts against the allowance of the person who created it, including recordings other members add. Recordings you add to somebody else's Tape don't use your allowance at all.",
          },
        ],
      },
    ],
    tips: [
      "Standard quality goes a long way: a 4K Tape uses roughly four times the room of a 1080p one, on the phone and in Videflo Cloud.",
      "Cancelling doesn't take effect immediately. You keep access until the end of the period you've already paid for.",
      "The subscription belongs to your Apple Account, so it comes with you to a new iPhone. So do your Tapes — from Videflo Cloud, when you sign in.",
    ],
    faqs: [
      {
        question: "Is there a free trial?",
        answer: [
          "Videflo doesn't offer a free trial today. If that ever changes, the subscription screen will show it clearly before you commit to anything.",
        ],
      },
      {
        question: "Is there a yearly plan?",
        answer: ["Not today. Videflo is billed monthly."],
      },
      {
        question: "What happens to my Tapes if my subscription ends?",
        answer: [
          "Nothing is deleted when it ends. Your recordings stay on your iPhone, and Videflo doesn't currently remove content from Videflo Cloud because a subscription has lapsed.",
          "You'll need an active subscription to open the app, and subscribing again restores access to everything exactly as it was. If Videflo ever sets retention rules for accounts that stay lapsed, we'll give notice first, as the Terms describe.",
        ],
      },
      {
        question: "Can I buy Videflo outright instead of subscribing?",
        answer: [
          "There's no one-off purchase option today — the subscription is how Videflo is offered.",
        ],
      },
      {
        question: "Is there a family plan?",
        answer: [
          "Videflo's subscription isn't set up for Family Sharing today, so it applies to the Apple Account that bought it. Each person on a Shared Tape has their own account and subscription; the Tape's storage comes out of the owner's allowance.",
        ],
      },
      {
        question: "Why is Videflo a subscription?",
        answer: [
          "Videflo is made by a very small team and has no advertising, no data to sell, and nobody's attention to resell. The subscription pays for the app being built and kept working, and for the storage that keeps your memories safe.",
        ],
      },
    ],
    related: ["manage-subscription", "restore-purchases", "videflo-cloud"],
  },

  {
    slug: "manage-subscription",
    title: "Changing, cancelling, or refunding a subscription",
    description:
      "All of it happens in your Apple Account — here's exactly where to look.",
    category: "subscription",
    keywords: [
      "cancel",
      "unsubscribe",
      "stop",
      "refund",
      "money back",
      "change plan",
      "switch",
      "renewal",
      "turn off",
      "downgrade",
    ],
    overview: [
      "Subscriptions are managed in your Apple Account, not inside Videflo. Apple takes the payment, so Apple holds the controls — including cancelling and refunds.",
      "Videflo's Settings screen has a **Manage Subscription** link, under **Videflo Plan**, that takes you straight there. Changing storage capacity is the one thing you do inside Videflo, in **Manage Storage**.",
    ],
    sections: [
      {
        id: "where",
        heading: "Where to find it",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Open the **Settings** app on your iPhone." },
              { title: "Tap your name at the very top." },
              { title: "Tap **Subscriptions**." },
              {
                title: "Choose **Videflo** from the list.",
                detail: "From here you can cancel, or see when it next renews.",
              },
            ],
          },
          {
            kind: "text",
            text: "The shortcut inside the app is **Settings → Videflo Plan → Manage Subscription**, which opens the same page.",
          },
          {
            kind: "note",
            title: "Apple moves these things around",
            text: [
              "The exact wording changes between iOS versions. If what you see doesn't match, Apple Support publishes the current steps for managing subscriptions.",
            ],
          },
        ],
      },
      {
        id: "cancel",
        heading: "Cancelling",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Go to **Settings → your name → Subscriptions → Videflo**.",
              },
              { title: "Tap **Cancel Subscription** and confirm." },
            ],
          },
          {
            kind: "list",
            items: [
              "Cancelling stops the **next** renewal. You keep access until the end of the period you've already paid for.",
              "Your Tapes are not deleted. They stay on your iPhone, and Videflo doesn't currently remove content from Videflo Cloud because a subscription has ended.",
              "Subscribing again later restores access to everything, exactly as you left it.",
            ],
          },
          {
            kind: "warning",
            title: "Deleting the app does not cancel a subscription",
            text: [
              "Removing Videflo from your iPhone leaves the subscription running and renewing. It has to be cancelled in your Apple Account.",
              "Neither does signing out or deleting your Videflo account. All three leave the subscription exactly where it was.",
            ],
          },
        ],
      },
      {
        id: "capacity",
        heading: "Changing storage capacity",
        blocks: [
          {
            kind: "text",
            text: "This one is inside Videflo: **Settings → Videflo Cloud → Manage Storage → Storage Options**. Pick the size you want and confirm with Apple.",
          },
          {
            kind: "list",
            items: [
              "**Moving up** takes effect straight away. Apple prorates the difference for the rest of the current month.",
              "**Moving down** takes effect at your next renewal. Until then you keep the allowance you've paid for, and Videflo shows the change as scheduled.",
              "If you'll be using more than the smaller capacity holds, Videflo keeps everything and gives you 30 days after the change to free space or move back up. Nothing is deleted on its own.",
            ],
          },
        ],
      },
      {
        id: "refunds",
        heading: "Refunds",
        blocks: [
          {
            kind: "text",
            text: "Apple bills for App Store purchases, so Apple handles refunds under its own policies. We aren't able to issue one ourselves, however much we might like to.",
          },
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Go to **reportaproblem.apple.com** and sign in with your Apple Account.",
              },
              {
                title:
                  "Find the Videflo purchase and choose **Request a Refund**.",
              },
              {
                title:
                  "Pick a reason and submit it. Apple decides the outcome.",
              },
            ],
          },
          {
            kind: "text",
            text: "If something in Videflo is broken, please tell us as well as Apple. We can't refund you, but we can fix it — and we'd like to.",
          },
        ],
      },
    ],
    tips: [
      "Cancel a day or two before the renewal date rather than on it. Apple charges for the next period slightly in advance.",
      "Check when it renews in that same Subscriptions screen — it's shown right under the plan.",
      "If you're cancelling for good and want your memories outside Videflo, export the Tapes you care about to Photos first. Nothing is deleted when you cancel, but you won't be able to open the app to export later.",
    ],
    pitfalls: [
      {
        mistake: "Deleting the app and assuming the billing stopped.",
        fix: "It doesn't. Cancel in **Settings → your name → Subscriptions**.",
      },
      {
        mistake: "Looking for a cancel button inside Videflo.",
        fix: "There isn't one, because an app can't cancel an Apple subscription. **Manage Subscription** in Videflo's Settings takes you to the right place.",
      },
    ],
    troubleshooting: [
      {
        problem: "Videflo isn't listed under Subscriptions.",
        solutions: [
          "Check you're signed in with the Apple Account that bought it — a family member's account is a common surprise.",
          "If the subscription has already expired it may no longer be listed as active. Look under **Expired** on the same screen.",
        ],
      },
      {
        problem: "I cancelled but I still have access.",
        solutions: [
          "That's correct. Access runs to the end of the period you've paid for, then stops.",
        ],
      },
      {
        problem:
          "I chose a smaller capacity but Videflo still shows the bigger one.",
        solutions: [
          "That's expected. Apple keeps the larger capacity in force until the renewal date, and Videflo shows the smaller one as scheduled.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I lose my Tapes if I cancel?",
        answer: [
          "No. Your recordings stay on your iPhone, and Videflo doesn't currently remove content from Videflo Cloud because a subscription has ended. You'll need a subscription to use the app, and resubscribing brings everything back exactly as it was.",
        ],
      },
      {
        question: "Can you cancel it for me?",
        answer: [
          "We're not able to — only Apple can change an App Store subscription, and only from the account that holds it. The steps above take about thirty seconds.",
        ],
      },
      {
        question: "I was charged after cancelling.",
        answer: [
          "Check the date the cancellation took effect in your Apple Account. If a charge landed after that, it's Apple that took it, and reportaproblem.apple.com is the place to raise it.",
        ],
      },
    ],
    related: [
      "subscription-plans",
      "restore-purchases",
      "troubleshooting-subscription",
    ],
  },

  {
    slug: "restore-purchases",
    title: "Restoring a purchase",
    description:
      "Getting your subscription back after reinstalling or setting up a new iPhone.",
    category: "subscription",
    keywords: [
      "restore",
      "reinstall",
      "new phone",
      "already paid",
      "not recognised",
      "purchases",
      "paywall again",
    ],
    overview: [
      "Your subscription belongs to your Apple Account rather than to the app, so it can always be brought back. Reinstall Videflo, sign in, tap **Restore Purchases** on the subscription screen, and you're in.",
    ],
    sections: [
      {
        id: "how",
        heading: "Restoring",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Make sure the iPhone is signed in to the Apple Account you bought the subscription with.",
                detail:
                  "Check in the **Settings** app — your name is at the very top.",
              },
              {
                title: "Open Videflo and sign in with Apple.",
              },
              {
                title: "On the subscription screen, tap **Restore Purchases**.",
                detail:
                  "It's on that screen, where you need it. Once you're past it there's nothing to restore.",
              },
              {
                title:
                  "Confirm with Face ID, Touch ID, or your password if Apple asks.",
              },
              {
                title: "Access comes back straight away.",
              },
            ],
          },
        ],
      },
      {
        id: "when",
        heading: "When you'd need it",
        blocks: [
          {
            kind: "list",
            items: [
              "You deleted and reinstalled Videflo.",
              "You set up a new iPhone.",
              "You signed out of the App Store and back in.",
              "You're being shown the subscription screen even though you're sure you've paid.",
            ],
          },
        ],
      },
      {
        id: "what-it-does",
        heading: "What restoring does, and what brings your Tapes back",
        blocks: [
          {
            kind: "note",
            title: "Two things, two routes",
            text: [
              "**Restore Purchases** brings back access — the subscription. It checks with Apple and re-applies your Videflo Cloud capacity.",
              "**Signing in** brings back your Tapes — from Videflo Cloud, as soon as you're in the same Videflo account. They appear marked **In Videflo Cloud** and play by streaming; **Download to This iPhone** puts the files back. See **Moving to a new iPhone**.",
            ],
          },
        ],
      },
    ],
    tips: [
      "You don't need to restore on a phone that's already working — it's only for a fresh install or a new device.",
      "A cancelled password prompt looks exactly like a failure. Try once more and let it complete.",
      "Restoring needs a network connection, since it checks with the App Store.",
    ],
    troubleshooting: [
      {
        problem: "Restore Purchases finds nothing.",
        solutions: [
          "Check which Apple Account you're signed in with — the subscription follows the account that bought it.",
          "Check the subscription is still active in **Settings → your name → Subscriptions**. An expired one has nothing to restore.",
          "Make sure you're online, then try once more.",
          "If it was bought by a family member on their own account, it can't be restored to yours.",
        ],
      },
      {
        problem: "It says it can't reach the App Store.",
        solutions: [
          "Check your connection, then try again.",
          "Occasionally the App Store itself is having a moment — Apple's System Status page will say so.",
        ],
      },
      {
        problem: "The subscription screen keeps reappearing.",
        solutions: [
          "Restore once and let it finish rather than tapping repeatedly.",
          "Close Videflo completely and reopen it.",
          "Confirm the subscription is genuinely active in your Apple Account.",
          "If it's active and restoring still doesn't work, email us with your iPhone model and iOS version.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will restoring charge me again?",
        answer: [
          "No. Restoring only re-checks a purchase you've already made. It never starts a new one.",
        ],
      },
      {
        question: "How many devices can I restore onto?",
        answer: [
          "Any iPhone signed in to the Apple Account that holds the subscription. Sign in to Videflo with the same account and your Tapes come with you too.",
        ],
      },
      {
        question: "Do I need to restore every time I open the app?",
        answer: [
          "No. Videflo checks with the App Store on its own, including offline, and works normally without a connection. Restoring is only for a fresh install or a new device.",
        ],
      },
    ],
    related: [
      "manage-subscription",
      "backups-and-new-iphone",
      "troubleshooting-subscription",
    ],
  },
] as const;
