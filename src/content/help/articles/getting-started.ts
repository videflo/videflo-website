import type { HelpArticle } from "../types";

export const gettingStartedArticles: readonly HelpArticle[] = [
  {
    slug: "what-is-videflo",
    title: "What Videflo is, and what a Tape is",
    description:
      "The one idea behind the whole app: a Tape is a single memory that keeps growing.",
    category: "getting-started",
    keywords: ["tape meaning", "concept", "camcorder", "why", "explain"],
    overview: [
      "Videflo is a camcorder for the moments you want to keep. It records video the way you'd expect — but instead of leaving you with a pile of separate clips, it keeps everything from one occasion together as a single **Tape**.",
      "A Tape is one memory that can keep growing. You make a Tape for an event or a chapter of life, and add to it whenever the moment happens. Press play, and the whole thing runs from beginning to end as one continuous video.",
      "That's the entire idea. There's no timeline to edit, no clips to line up, and nothing to stitch together afterwards.",
    ],
    sections: [
      {
        id: "the-words",
        heading: "The three words you'll see",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Tape",
                description:
                  "One memory. A holiday, a birthday, a season of football, a baby's first year. A Tape always plays as one continuous video.",
              },
              {
                term: "Recording",
                description:
                  "One session of filming inside a Tape. Every time you press record and later finish, that's a recording joining the end of the Tape.",
              },
              {
                term: "Collection",
                description:
                  "A group of Tapes that belong together — like a folder called “2026” or “The Grandchildren”. Entirely optional.",
              },
            ],
          },
        ],
      },
      {
        id: "example",
        heading: "What that looks like in real life",
        blocks: [
          {
            kind: "text",
            text: "Say it's your daughter's birthday. In an ordinary camera app you'd end up with eleven separate videos: the cake, the candles, the paper being torn, someone's dog stealing a sausage roll. Weeks later they're scattered through your camera roll among receipts and screenshots.",
          },
          {
            kind: "text",
            text: "In Videflo you make one Tape called **Emma's Birthday** and record into it all afternoon. When you watch it back, the whole day plays through in the order it happened. One thing to find, one thing to keep, one thing to show her in twenty years.",
          },
        ],
      },
      {
        id: "what-it-is-not",
        heading: "What Videflo deliberately isn't",
        blocks: [
          {
            kind: "list",
            items: [
              "**Not a video editor.** There are no filters, transitions, music tracks, or timelines. You can trim the start and end of a recording, and that's on purpose.",
              "**Not a social network.** There's no feed, no profile, no followers, and nothing is published anywhere.",
              "**Not a cloud service.** Your recordings are made and kept on your iPhone. Videflo has no copy of them and no way to fetch them back.",
            ],
          },
          {
            kind: "text",
            text: "The last one matters most, so it has its own article — please read **Backups and moving to a new iPhone** before you rely on Videflo for something irreplaceable.",
          },
        ],
      },
    ],
    tips: [
      "Name a Tape after **one event**, not a life stage. “Emma's Birthday” works beautifully. “Emma” would grow forever and never feel finished.",
      "You can have as many Tapes as your iPhone has room for. Making a new one costs nothing.",
      "A Tape with a single recording in it is a perfectly normal Tape. Not every memory needs eleven parts.",
    ],
    pitfalls: [
      {
        mistake:
          "Making a separate Tape for every clip, the way you'd take separate videos.",
        fix: "Make the Tape once, then use **Continue Recording** each time the moment comes back. That's what keeps the memory in one piece.",
      },
      {
        mistake:
          "Expecting your Tapes to appear in the Photos app automatically.",
        fix: "They don't — Videflo keeps them in its own storage. Use **Export** when you want a copy in Photos.",
      },
    ],
    faqs: [
      {
        question: "How long can a Tape be?",
        answer: [
          "Videflo sets no limit. A Tape can hold as many recordings as you like, and can grow over months or years.",
          "The practical limit is the free space on your iPhone, since video is large. Longer Tapes also take longer to prepare when you want to export one.",
        ],
      },
      {
        question:
          "Can I put an existing video from my camera roll into a Tape?",
        answer: [
          "No. Videflo records the footage in a Tape itself, so everything inside one was captured through the app.",
          "Photos from your library are used in one place only: choosing a cover image for a Tape or a Collection.",
        ],
      },
      {
        question: "Do the recordings inside a Tape get merged into one file?",
        answer: [
          "No, and that's deliberate. Your original recordings are never rewritten or combined on disk — Videflo plays them back as one continuous video without touching the files.",
          "When you export a Tape, Videflo builds a brand-new single video file from them and leaves the originals exactly as they are.",
        ],
      },
    ],
    related: [
      "download-videflo",
      "create-your-first-tape",
      "continue-recording-a-tape",
    ],
  },

  {
    slug: "download-videflo",
    title: "Downloading and installing Videflo",
    description:
      "What you need to run Videflo, and how to get it onto your iPhone.",
    category: "getting-started",
    keywords: [
      "install",
      "app store",
      "requirements",
      "ipad",
      "android",
      "mac",
      "compatible",
      "get",
    ],
    overview: [
      "Videflo is an iPhone app, and the App Store is the only place to get it. Installing it works exactly like any other app — there's nothing special to set up first.",
    ],
    sections: [
      {
        id: "requirements",
        heading: "What you need",
        blocks: [
          {
            kind: "list",
            items: [
              "**An iPhone running iOS 18 or later.** You can check in the Settings app under **General → About**, and update under **General → Software Update**.",
              "**Enough free space for video.** A few gigabytes to start with is sensible — see **How much space Tapes use**.",
              "**An Apple Account.** You already have one if you've ever installed an app. Videflo doesn't ask you to create an account of its own.",
            ],
          },
          {
            kind: "note",
            title: "iPhone only, for now",
            text: [
              "Videflo isn't available for iPad, Mac, Apple TV, or Android. It's built around holding a phone and filming, so an iPhone is the only thing it runs on today.",
            ],
          },
        ],
      },
      {
        id: "install",
        heading: "Installing the app",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Open the **App Store** on your iPhone.",
              },
              {
                title: "Tap **Search** at the bottom, then type “Videflo”.",
              },
              {
                title:
                  "Tap **Get**, then confirm with Face ID, Touch ID, or your Apple Account password.",
                detail:
                  "Downloading the app is free. A subscription is needed to use it — see the Subscription articles.",
              },
              {
                title:
                  "When it's finished, tap **Open** — or find the Videflo icon on your Home Screen.",
              },
            ],
          },
          { kind: "appStore" },
        ],
      },
      {
        id: "first-launch",
        heading: "What happens the first time you open it",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "A short introduction explains what a Tape is.",
                detail:
                  "Four screens, and you can go back at any point. You can replay it later from Settings.",
              },
              {
                title: "The subscription screen appears.",
                detail:
                  "Choose a plan, or restore a purchase you've already made.",
              },
              {
                title:
                  "Videflo opens on the Home screen, ready for your first Tape.",
              },
            ],
          },
          {
            kind: "text",
            text: "Videflo asks for camera and microphone access the first time you actually start recording — not on the way in.",
          },
        ],
      },
    ],
    tips: [
      "If the download stalls, check you're on Wi-Fi with a decent signal, then try pausing and resuming it by tapping the icon on your Home Screen.",
      "Videflo needs iOS 18. If your iPhone can't be updated that far, unfortunately it won't run.",
    ],
    troubleshooting: [
      {
        problem: "“This app requires iOS 18 or later.”",
        solutions: [
          "Open the Settings app and go to **General → Software Update** to see whether an update is waiting.",
          "If your iPhone is on the newest version it supports and that's below iOS 18, Videflo can't be installed on it.",
        ],
      },
      {
        problem: "The App Store says there isn't enough storage.",
        solutions: [
          "Check **Settings → General → iPhone Storage** to see what's using space.",
          "The app itself is small, but Videflo needs room for the video you're about to record — free up a few gigabytes if you can.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Videflo free?",
        answer: [
          "The app is free to download, and a subscription is required to use it. The subscription screen shows the current plans and prices in your own currency before you commit to anything.",
        ],
      },
      {
        question: "Will there be an Android version?",
        answer: [
          "There's nothing to announce. Videflo is built specifically for the iPhone camera, so a version for another platform would be a separate project rather than a port.",
        ],
      },
      {
        question: "Can I use Videflo on my iPad?",
        answer: [
          "Not today. Videflo is an iPhone app and isn't offered for iPad.",
        ],
      },
    ],
    related: [
      "accounts-and-signing-in",
      "create-your-first-tape",
      "subscription-plans",
    ],
  },

  {
    slug: "accounts-and-signing-in",
    title: "Accounts, signing in, and signing out",
    description:
      "Videflo has no account to create. Here's what that means and what your Apple Account is used for.",
    category: "getting-started",
    keywords: [
      "login",
      "log in",
      "sign up",
      "register",
      "password",
      "email",
      "username",
      "forgot password",
      "sign out",
      "logout",
    ],
    overview: [
      "There's no Videflo account. No email address to give, no password to invent, and nothing to sign into or out of.",
      "Your Tapes live on your iPhone rather than on a server somewhere, so there's no account for them to belong to. It's one less thing to remember, and one less place your details could sit.",
    ],
    sections: [
      {
        id: "apple-account",
        heading: "Where your Apple Account comes in",
        blocks: [
          {
            kind: "text",
            text: "Your Apple Account — the one you already use for the App Store — does two things, and only two:",
          },
          {
            kind: "list",
            items: [
              "**It's how you get the app.** Downloading anything from the App Store uses it.",
              "**It's who the subscription belongs to.** Apple handles the payment and the renewals, and the subscription follows that Apple Account rather than the app.",
            ],
          },
          {
            kind: "text",
            text: "That second point is genuinely useful: set up a new iPhone, sign in to the same Apple Account, install Videflo, and tap **Restore Purchases** — your subscription comes straight back.",
          },
          {
            kind: "warning",
            title: "Your subscription travels. Your recordings don't.",
            text: [
              "Restoring a purchase brings back your access to the app. It does not bring back your Tapes, because those were saved on the iPhone where you made them.",
              "Moving your recordings to a new iPhone is a separate job — see **Backups and moving to a new iPhone**.",
            ],
          },
        ],
      },
      {
        id: "signing-out",
        heading: "Signing out",
        blocks: [
          {
            kind: "text",
            text: "There's nothing to sign out of inside Videflo. If you're handing your iPhone to someone else and want the app closed off, the options are to delete the app or to lock the phone as usual.",
          },
          {
            kind: "warning",
            title: "Deleting the app deletes your Tapes",
            text: [
              "Videflo's recordings are stored inside the app, so removing it removes them unless they're in an iPhone backup or you've exported them.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "I forgot my Videflo password. How do I reset it?",
        answer: [
          "There isn't one — Videflo never asks you to create a password or an account.",
          "If you're being asked for a password, it's Apple asking you to confirm an App Store purchase. That's your Apple Account password, and Apple can help you reset it.",
        ],
      },
      {
        question: "Can two people share one subscription?",
        answer: [
          "Videflo's subscription isn't set up for Family Sharing today, so it applies to the Apple Account that bought it.",
          "Each person's Tapes stay on their own iPhone regardless, since nothing is shared between devices.",
        ],
      },
      {
        question: "Do you have my email address?",
        answer: [
          "Only if you've written to us. Videflo doesn't ask for one, and the app doesn't send us any account details — there are none to send.",
        ],
      },
    ],
    related: [
      "restore-purchases",
      "backups-and-new-iphone",
      "privacy-and-security",
    ],
  },

  {
    slug: "create-your-first-tape",
    title: "Creating your first Tape",
    description:
      "Name it, choose how it will be filmed, and start recording — three decisions, one screen.",
    category: "getting-started",
    keywords: ["new tape", "start", "begin", "setup", "first time", "make"],
    overview: [
      "Making a Tape takes about fifteen seconds. You give it a name, choose whether it's filmed upright or sideways, pick a quality, and you're recording.",
      "Two of those choices — orientation and quality — are fixed for the life of the Tape. That's what lets everything inside it play back as one seamless piece, so it's worth a moment's thought before you tap the button.",
    ],
    sections: [
      {
        id: "steps",
        heading: "Making the Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "On the **Home** tab, tap **Start a New Tape**.",
                detail:
                  "If this is your very first Tape, the button in the middle of the screen says **Start Your First Tape** — same thing. You can also start one from the **Tapes** tab.",
              },
              {
                title: "Type a name under **Tape Name**.",
                detail:
                  "Name it after the occasion: “Summer Vacation”, “Dad's 70th”, “Milo's First Year”. You can rename it later, so don't agonise.",
              },
              {
                title: "Choose **Tape Orientation** — Portrait or Landscape.",
                detail:
                  "Portrait is upright, best for watching on a phone. Landscape is sideways, best for a TV or a wide scene. Every recording in this Tape will be filmed that way.",
              },
              {
                title:
                  "Choose **Recording Quality** — Standard, High, or Smooth.",
                detail:
                  "Standard suits almost everyone. See **Choosing a recording quality** if you'd like the detail.",
              },
              {
                title: "Tap **Create Tape & Record**.",
                detail:
                  "The camera opens straight away, with the Tape already made and waiting.",
              },
              {
                title:
                  "Press the big round button to start, and **Finish** when you're done.",
                detail:
                  "Videflo saves the recording into your new Tape and takes you back.",
              },
            ],
          },
          {
            kind: "note",
            title: "Nothing is created if you cancel",
            text: [
              "Tapping **Cancel** on the setup screen leaves your library exactly as it was. No empty Tape is left behind.",
            ],
          },
        ],
      },
      {
        id: "locked-choices",
        heading: "Why orientation and quality can't be changed later",
        blocks: [
          {
            kind: "text",
            text: "A Tape plays as one continuous video. If half of it were filmed upright and half sideways, watching it back would mean the picture flipping and shrinking part way through — and no amount of clever software makes that pleasant.",
          },
          {
            kind: "text",
            text: "So Videflo settles both questions once, at the start, and holds them for the life of the Tape. When you come back to record more, it'll gently ask you to hold the phone the same way before it will start.",
          },
          {
            kind: "text",
            text: "If you picked wrong, the fix is simply to make a new Tape with the right settings. Nothing is lost — the old one is still there.",
          },
        ],
      },
    ],
    tips: [
      "The **Create Tape & Record** button stays greyed out until the name has something in it. That's the only thing it's waiting for.",
      "Filming a person, a room, or anything vertical? Portrait. Filming a landscape, a stage, or a football pitch? Landscape.",
      "Not sure how long the occasion will run? Start the Tape anyway. Adding to it later is the whole point.",
    ],
    pitfalls: [
      {
        mistake:
          "Choosing High (4K) for a Tape you plan to grow all year, then running out of space in March.",
        fix: "Standard looks lovely and uses roughly a quarter of the space. Save High for the Tapes where the detail genuinely matters.",
      },
      {
        mistake:
          "Naming the first Tape “Test” and then filming something real into it.",
        fix: "Rename it — hold down the Tape's card and choose **Rename**. Nothing about the footage changes.",
      },
    ],
    faqs: [
      {
        question: "Can I change a Tape's orientation afterwards?",
        answer: [
          "No. Orientation is fixed when the Tape is created and applies to every recording inside it, which is what keeps playback seamless.",
          "Make a new Tape if you need the other orientation.",
        ],
      },
      {
        question: "What if I don't know what to call it yet?",
        answer: [
          "Put anything sensible in and carry on — renaming a Tape takes two taps and doesn't touch the footage.",
        ],
      },
      {
        question: "Does creating a Tape use up storage before I record?",
        answer: [
          "Practically none. A Tape with no recordings in it is just a name and a couple of settings. The space goes on the video you film into it.",
        ],
      },
    ],
    related: [
      "recording-a-tape",
      "portrait-and-landscape",
      "choosing-recording-quality",
    ],
  },

  {
    slug: "camera-and-microphone-permissions",
    title: "Camera, microphone, and Photos permissions",
    description:
      "What Videflo asks for, why it needs each one, and how to change your mind later.",
    category: "getting-started",
    keywords: [
      "permission",
      "access",
      "allow",
      "denied",
      "black screen",
      "no sound",
      "silent",
      "privacy settings",
    ],
    overview: [
      "Videflo asks for three things across its life, each at the moment it's actually needed, and never before. You can change any of your answers later in the iPhone's own Settings app.",
    ],
    sections: [
      {
        id: "what-and-why",
        heading: "The three requests",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Camera — required",
                description:
                  "Videflo is a camcorder; without the camera there's no picture. Asked for the first time you open the recording screen.",
              },
              {
                term: "Microphone — required for sound",
                description:
                  "Without it your recordings are silent, and sound can't be added to a recording afterwards. Asked at the same time as the camera.",
              },
              {
                term: "Photos — add only, and only when you export",
                description:
                  "Asked the first time you save a video to your photo library. Videflo asks only for permission to *add* — it never needs to read through your library.",
              },
            ],
          },
          {
            kind: "note",
            title: "Choosing a cover photo asks for nothing at all",
            text: [
              "When you pick a cover image, iOS shows you its own picker and hands Videflo only the picture you chose. The app never sees the rest of your library, which is why no permission prompt appears.",
            ],
          },
        ],
      },
      {
        id: "changing",
        heading: "Changing your answer later",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Open the **Settings** app on your iPhone." },
              {
                title: "Scroll down and tap **Videflo**.",
                detail:
                  "Apps are listed alphabetically near the bottom of the main Settings list.",
              },
              {
                title:
                  "Turn **Camera**, **Microphone**, and **Photos** on or off as you like.",
              },
            ],
          },
          {
            kind: "text",
            text: "Videflo also offers a shortcut: if access is missing when you try to record, the app shows an **Open Settings** button that takes you straight to that page.",
          },
        ],
      },
      {
        id: "when-recording",
        heading: "When Videflo is actually using the camera",
        blocks: [
          {
            kind: "text",
            text: "Only while you're on the recording screen with a recording running. Leave that screen and the camera and microphone are shut down completely — which is also why your iPhone goes back to locking normally after you've filmed.",
          },
          {
            kind: "text",
            text: "iOS shows a green dot in the corner of the screen whenever any app is using the camera, and an orange one for the microphone. Those indicators come from iOS itself, so they're a reliable check on any app, not just this one.",
          },
        ],
      },
    ],
    tips: [
      "If you said “Don't Allow” by accident, nothing is broken. Turn it back on in Settings and record again.",
      "Recordings you made while the microphone was off stay silent — there's no way to add sound to footage that was captured without it.",
    ],
    troubleshooting: [
      {
        problem: "The preview is black when I open the camera.",
        solutions: [
          "Check **Settings → Videflo → Camera** is on.",
          "Close any other app that might be using the camera, then reopen Videflo.",
          "Check **Settings → Screen Time → Content & Privacy Restrictions → Camera** isn't switched off.",
          "Restart your iPhone if the preview stays black across app restarts.",
        ],
      },
      {
        problem: "My recordings have no sound.",
        solutions: [
          "Check **Settings → Videflo → Microphone** is on, then record a short test.",
          "Make sure nothing is covering the microphone at the bottom of the phone — a thick case or a finger will muffle it.",
          "Check the phone isn't connected to something that takes the audio input, like AirPods left in a pocket.",
        ],
      },
      {
        problem: "Videflo doesn't appear in the Settings app.",
        solutions: [
          "Apps only appear there after they've asked for their first permission. Open Videflo and start a recording once, then look again.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Videflo record when I'm not in the app?",
        answer: [
          "No. Recording happens only on the recording screen, only after you press the record button, and it stops when you leave.",
        ],
      },
      {
        question: "Why does Videflo want Photos access at all?",
        answer: [
          "Only so it can save a video into your library when you export one. It asks for add-only access, which doesn't let it look through what's already there.",
        ],
      },
      {
        question: "Can I use Videflo without the microphone?",
        answer: [
          "Yes, and it will record perfectly well — the video will simply be silent. Most people want the sound, which is why Videflo asks.",
        ],
      },
    ],
    related: [
      "recording-a-tape",
      "privacy-and-security",
      "troubleshooting-recording",
    ],
  },

  {
    slug: "finding-your-way-around",
    title: "Finding your way around",
    description:
      "The three tabs, what lives on each one, and where the settings are hiding.",
    category: "getting-started",
    keywords: [
      "navigation",
      "tabs",
      "home screen",
      "interface",
      "where is",
      "layout",
      "menu",
    ],
    overview: [
      "Videflo has three tabs along the bottom and one settings screen. That's the whole app — everything else is something you tap on a Tape.",
    ],
    sections: [
      {
        id: "home",
        heading: "Home",
        blocks: [
          {
            kind: "text",
            text: "Home answers one question: what do you want to record today?",
          },
          {
            kind: "list",
            items: [
              "**Continue Your Story** — a large card for the Tape you filmed into most recently. Tap the picture to watch it, or the gold **Continue Recording** button to add to it.",
              "**Start a New Tape** — begins a fresh Tape.",
              "**Recent Tapes** — the next few Tapes you've been working on. Tap one to open it.",
              "**See All Tapes** — jumps you over to the Tapes tab.",
              "**The gear icon, top right** — Settings.",
            ],
          },
        ],
      },
      {
        id: "tapes",
        heading: "Tapes",
        blocks: [
          {
            kind: "text",
            text: "Everything you've ever recorded, newest first. Tap a Tape to watch it. Press and hold one to bring up its menu — continue recording, manage recordings, add to a Collection, choose a cover photo, prepare, export, rename, delete.",
          },
          {
            kind: "text",
            text: "In the header there's a magnifying glass for searching, and a button that switches between the picture grid and a tighter list.",
          },
        ],
      },
      {
        id: "collections",
        heading: "Collections",
        blocks: [
          {
            kind: "text",
            text: "Optional folders for Tapes that belong together. If you never make one, this tab simply stays empty and nothing else changes. A Tape can sit in one Collection at a time, and it always remains in the main Tapes list as well.",
          },
        ],
      },
      {
        id: "settings",
        heading: "Settings",
        blocks: [
          {
            kind: "text",
            text: "The gear on the Home tab. It holds the timestamp preferences, your subscription status and **Restore Purchases**, links to help and feedback, **Replay Introduction**, and the app's version number. Every setting is listed in **Every setting explained**.",
          },
        ],
      },
      {
        id: "gestures",
        heading: "Two gestures worth knowing",
        blocks: [
          {
            kind: "list",
            items: [
              "**Press and hold** a Tape or Collection anywhere it appears to open its menu. That's where most actions live.",
              "**Tap the video** while a Tape is playing to show or hide the controls.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Videflo shows a warm branded screen while it starts up. It's loading your library, and it's quick — there's no progress to wait on.",
      "If a Tape has a coloured dot or a percentage on its card, it's being prepared for export. You can carry on using the app while that runs.",
    ],
    faqs: [
      {
        question: "Where's the button to edit a video?",
        answer: [
          "There isn't a general editor. To trim the start or end of one recording, open the Tape's menu, choose **Manage Recordings**, then tap **Edit** on the recording you want to shorten.",
        ],
      },
      {
        question: "Can I reorder the recordings inside a Tape?",
        answer: [
          "No. A Tape plays in the order things happened, which is what makes it a record of the day rather than an edit of it.",
          "You can reorder the Tapes inside a Collection, though.",
        ],
      },
    ],
    related: [
      "managing-your-tapes",
      "searching-your-library",
      "settings-reference",
    ],
  },
] as const;
