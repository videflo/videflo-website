import type { HelpArticle } from "../types";

export const subscriptionArticles: readonly HelpArticle[] = [
  {
    slug: "subscription-plans",
    title: "Plans, prices, and what a subscription includes",
    description:
      "Monthly or yearly, what you get, and how billing works through the App Store.",
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
    ],
    overview: [
      "Videflo is a subscription app. Downloading it is free, and a subscription unlocks it — there's one tier, so subscribing gives you everything the app does.",
      "You can pay monthly or yearly. Everything about the payment itself is handled by Apple, through the same Apple Account you use for any other App Store purchase.",
    ],
    sections: [
      {
        id: "included",
        heading: "What's included",
        blocks: [
          {
            kind: "text",
            text: "All of it. There's no free tier, no locked features, and no limit on how many Tapes, recordings, or Collections you can make. Unlimited recording at every quality, playback, trimming, cover photos, preparing and exporting — one subscription, the whole app.",
          },
          {
            kind: "text",
            text: "Storage isn't part of the subscription, because Videflo doesn't store anything for you. Your recordings live on your iPhone, and the only limit on them is the space it has.",
          },
        ],
      },
      {
        id: "plans",
        heading: "Monthly or yearly",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Monthly",
                description:
                  "Renews every month. Best if you'd like to try Videflo across a few occasions before committing.",
              },
              {
                term: "Yearly",
                description:
                  "Renews once a year and works out cheaper per month. Best if you're keeping a Tape going across a whole year — which is rather the point of the app.",
              },
            ],
          },
          {
            kind: "note",
            title: "Prices are always shown before you buy",
            text: [
              "The subscription screen shows the real price in your own currency, along with what the yearly plan works out to per month. Apple sets the local price, so it varies by country.",
              "Videflo never shows an estimated or placeholder price — if the plans can't be loaded, it tells you so rather than guessing.",
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
              "**It renews automatically** until you cancel, which you do in your Apple Account rather than in Videflo.",
              "**Receipts come from Apple**, by email and in your Apple Account purchase history.",
              "**Switching between monthly and yearly** is a plan change rather than a second subscription — you can never end up paying for both.",
            ],
          },
        ],
      },
    ],
    tips: [
      "If you plan to keep a Tape going all year — a child's year, a house renovation, a season — the yearly plan is the sensible one.",
      "Cancelling doesn't take effect immediately. You keep access until the end of the period you've already paid for.",
      "The subscription belongs to your Apple Account, so it comes with you to a new iPhone. Your recordings don't — see **Backups and moving to a new iPhone**.",
    ],
    faqs: [
      {
        question: "Is there a free trial?",
        answer: [
          "Videflo doesn't offer a free trial today. If that ever changes, the subscription screen will show it clearly before you commit to anything.",
        ],
      },
      {
        question: "What happens to my Tapes if my subscription ends?",
        answer: [
          "They stay on your iPhone. Nothing is deleted, and nothing is uploaded anywhere.",
          "You'll need an active subscription to open the app and use them, and subscribing again restores access to everything exactly as it was.",
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
          "Videflo's subscription isn't set up for Family Sharing today, so it applies to the Apple Account that bought it.",
        ],
      },
      {
        question: "Why does an app that stores nothing charge a subscription?",
        answer: [
          "Videflo is made by a very small team and has no advertising, no data to sell, and nobody's attention to resell. The subscription is what pays for it being built and kept working.",
        ],
      },
    ],
    related: [
      "manage-subscription",
      "restore-purchases",
      "troubleshooting-subscription",
    ],
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
    ],
    overview: [
      "Subscriptions are managed in your Apple Account, not inside Videflo. Apple takes the payment, so Apple holds the controls — including cancelling, switching plans, and refunds.",
      "Videflo's Settings screen has a **Manage Subscription** link that takes you straight there.",
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
                detail:
                  "From here you can switch plans, cancel, or see when it next renews.",
              },
            ],
          },
          {
            kind: "text",
            text: "The shortcut inside the app is **Settings → Subscription → Manage Subscription**, which opens the same page.",
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
              "Your Tapes are not deleted. They stay on your iPhone whether you're subscribed or not.",
              "Subscribing again later restores access to everything, exactly as you left it.",
            ],
          },
          {
            kind: "warning",
            title: "Deleting the app does not cancel a subscription",
            text: [
              "Removing Videflo from your iPhone leaves the subscription running and renewing. It has to be cancelled in your Apple Account.",
              "Deleting the app *does* delete your Tapes — so cancel first, and export anything you want to keep before you remove it.",
            ],
          },
        ],
      },
      {
        id: "switch",
        heading: "Switching between monthly and yearly",
        blocks: [
          {
            kind: "text",
            text: "Both plans are part of the same subscription, so switching is a change rather than a second purchase — you can never end up holding both.",
          },
          {
            kind: "text",
            text: "Go to **Settings → your name → Subscriptions → Videflo** and pick the other option. Apple handles the timing and any proration according to its own rules: moving up usually takes effect straight away, and moving down usually takes effect at the next renewal.",
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
      "Export your Tapes before cancelling if you're planning to remove the app. Cancelling alone doesn't touch them, but deleting the app does.",
    ],
    pitfalls: [
      {
        mistake: "Deleting the app and assuming the billing stopped.",
        fix: "It doesn't. Cancel in **Settings → your name → Subscriptions** — and note that deleting the app also removes your Tapes.",
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
    ],
    faqs: [
      {
        question: "Will I lose my Tapes if I cancel?",
        answer: [
          "No. Your recordings stay on your iPhone. You'll need a subscription to use the app, but nothing is deleted, and resubscribing brings everything back exactly as it was.",
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
      "Your subscription belongs to your Apple Account rather than to the app, so it can always be brought back. Reinstall Videflo, tap **Restore Purchases**, and you're in.",
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
                title: "Open Videflo.",
              },
              {
                title: "Tap **Restore Purchases**.",
                detail:
                  "It's on the subscription screen if you're seeing that, and in **Settings → Subscription** inside the app if you're already past it.",
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
        id: "what-it-doesnt",
        heading: "What restoring doesn't do",
        blocks: [
          {
            kind: "warning",
            title: "It brings back access, not recordings",
            text: [
              "Restoring a purchase restores your subscription. It does not restore Tapes — those were saved on the iPhone where you filmed them, and they come back only from an iPhone backup.",
              "If your subscription restored but your library is empty, that's the expected result of setting a phone up as new. See **Backups and moving to a new iPhone**.",
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
          "Any iPhone signed in to the Apple Account that holds the subscription. Note that each device has its own separate Tapes, since nothing syncs between them.",
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
