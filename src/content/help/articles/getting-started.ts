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
      "Videflo is a camcorder for the moments you want to keep. It records video the way you'd expect, but instead of leaving you with a pile of separate clips, it keeps everything from one occasion together as a single **Tape**.",
      "A Tape is one memory that can keep growing. You make a Tape for an event or a chapter of life, and add to it whenever the moment happens. Press play, and the whole thing runs from beginning to end as one continuous video.",
      "Every recording is protected in **Videflo Cloud** automatically, and a Tape can be shared with the people who were there so they can add their own recordings to it. That's the entire idea. There's no timeline to edit, no clips to line up, and nothing to stitch together afterwards.",
    ],
    sections: [
      {
        id: "the-words",
        heading: "The words you'll see",
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
                  "A group of Tapes that belong together, like a folder called “2026” or “The Grandchildren”. Entirely optional.",
              },
              {
                term: "Videflo Cloud",
                description:
                  "Where your recordings are protected. Backup is automatic, and it's what brings your Tapes to a new phone and lets other people add to a Shared Tape.",
              },
              {
                term: "Shared Tape",
                description:
                  "A Tape you've invited someone to. Everyone on it can watch the whole thing and add their own recordings.",
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
            text: "In Videflo you make one Tape called **Emma's Birthday** and record into it all afternoon. Grandma, who filmed the candles from the other side of the table, adds her recording to the same Tape. When you watch it back, the whole day plays through in the order it happened. One thing to find, one thing to keep, one thing to show her in twenty years.",
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
              "**Not a video editor.** There are no filters, transitions, music tracks, timelines or trimming. A Tape is what happened, kept whole.",
              "**Not a social network.** There's no feed, no followers, no likes, and nothing is ever public. A Tape is seen only by the people you invite to it.",
              "**Not a replacement for your originals.** Videflo Cloud is a copy. The recording on your phone is never edited, and you can export any Tape to Photos whenever you like.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Name a Tape after **one event**, not a life stage. “Emma's Birthday” works beautifully. “Emma” would grow forever and never feel finished.",
      "You can have as many Tapes as you like. Making a new one costs nothing.",
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
        fix: "They don't. Videflo keeps them in its own library. Use **Export Tape** when you want a copy in Photos.",
      },
    ],
    faqs: [
      {
        question: "How long can a Tape be?",
        answer: [
          "Videflo sets no limit on how many recordings a Tape holds, and a Tape can grow over months or years.",
          "The practical limits are the free space on your phone and your Videflo Cloud allowance, since video is large. Longer Tapes also take longer to export.",
        ],
      },
      {
        question:
          "Can I put an existing video from my camera roll into a Tape?",
        answer: [
          "Yes, when you create a Tape. Under **Optional Setup** on the Start a New Tape screen, choose **Add Videos** and pick them from Photos. They become recordings in the new Tape, in the order you tapped them, keeping their original dates.",
        ],
      },
      {
        question: "Do the recordings inside a Tape get merged into one file?",
        answer: [
          "No, and that's deliberate. Your original recordings are never rewritten or combined on disk. Videflo plays them back as one continuous video without touching the files.",
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
      "What you need to run Videflo, and what happens the first time you open it.",
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
      "Videflo is an iPhone app, and the App Store is the only place to get it. Installing it works exactly like any other app, and there's nothing special to set up first.",
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
              "**Enough free space for video.** A few gigabytes to start with is sensible. See **How much space Tapes use**.",
              "**An Apple Account.** You already have one if you've ever installed an app. Videflo uses it for Sign in with Apple and for the subscription. There's no separate Videflo password.",
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
                title: "Open the **App Store** on your phone.",
              },
              {
                title: "Tap **Search** at the bottom, then type “Videflo”.",
              },
              {
                title:
                  "Tap **Get**, then confirm with Face ID, Touch ID, or your Apple Account password.",
                detail:
                  "Downloading the app is free. A subscription is needed to use it. See the Subscription articles.",
              },
              {
                title:
                  "When it's finished, tap **Open**, or find the Videflo icon on your Home Screen.",
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
                  "A few screens, and you can go back at any point. You can replay it later from Settings → About Videflo.",
              },
              {
                title: "Sign in with Apple.",
                detail:
                  "One tap and Face ID. This creates your Videflo account. See **Accounts, signing in, and signing out**.",
              },
              {
                title: "The subscription screen appears.",
                detail:
                  "Subscribe, or tap **Restore Purchases** if you've already paid on this Apple Account.",
              },
              {
                title: "Set up your Profile.",
                detail:
                  "A display name, a photo or one of Videflo's avatars, and a username. This is how family will find and recognise you.",
              },
              {
                title:
                  "Videflo opens on the Home screen, ready for your first Tape.",
              },
            ],
          },
          {
            kind: "text",
            text: "Videflo asks for camera and microphone access the first time you actually start recording, not on the way in. It asks about notifications once, after you've signed in.",
          },
        ],
      },
    ],
    tips: [
      "If the download stalls, check you're on Wi-Fi with a decent signal, then try pausing and resuming it by tapping the icon on your Home Screen.",
      "Videflo needs iOS 18. If your phone can't be updated that far, unfortunately it won't run.",
    ],
    troubleshooting: [
      {
        problem: "“This app requires iOS 18 or later.”",
        solutions: [
          "Open the Settings app and go to **General → Software Update** to see whether an update is waiting.",
          "If your phone is on the newest version it supports and that's below iOS 18, Videflo can't be installed on it.",
        ],
      },
      {
        problem: "The App Store says there isn't enough storage.",
        solutions: [
          "Check **Settings → General → iPhone Storage** to see what's using space.",
          "The app itself is small, but Videflo needs room for the video you're about to record, so free up a few gigabytes if you can.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Videflo free?",
        answer: [
          "The app is free to download, and a subscription is required to use it. The subscription screen shows the current price in your own currency before you commit to anything.",
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
      "Sign in with Apple, your Profile, what your account is for, and how to sign out or delete it.",
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
      "delete account",
    ],
    overview: [
      "Videflo has an account, and it's created with **Sign in with Apple**: one tap and Face ID. There's no Videflo password to invent and nothing to remember.",
      "Your account is what makes Videflo Cloud work: it's where your Tapes are protected, it's how they follow you to a new phone, and it's how the people you invite to a Shared Tape know who you are.",
    ],
    sections: [
      {
        id: "sign-in",
        heading: "Signing in",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Tap **Sign in with Apple**.",
                detail:
                  "It appears after the introduction the first time you open Videflo, and whenever you've signed out.",
              },
              {
                title:
                  "Confirm with Face ID, Touch ID, or your Apple Account password.",
                detail:
                  "Apple may offer to share or hide your email address. Either is fine. Videflo never shows your email address to anyone, and nobody can search for you by it.",
              },
              {
                title: "That's it. Your Videflo account now exists.",
              },
            ],
          },
          {
            kind: "note",
            title: "The account is separate from the subscription",
            text: [
              "Your Videflo account is who you are. Your subscription, bought from Apple, is what unlocks the app. Both use your Apple Account, and both come back on a new phone: the account when you sign in, the subscription when you tap **Restore Purchases**.",
            ],
          },
        ],
      },
      {
        id: "profile",
        heading: "Your Profile",
        blocks: [
          {
            kind: "text",
            text: "The first time you sign in, Videflo asks you to set up a Profile before you go any further:",
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Display name",
                description:
                  "What people see, such as “Grandma Sue” or “Tom”. You can change it any time in **Settings → Profile → Edit Profile**.",
              },
              {
                term: "Photo or avatar",
                description:
                  "A picture of you, or one of Videflo's built-in avatars. Required, and changeable later.",
              },
              {
                term: "Username",
                description:
                  "Unique, and how people find you: they search Videflo for your @username. Choose it carefully: once claimed, a username can't be changed.",
              },
            ],
          },
          {
            kind: "text",
            text: "Your Profile is shown to the people you interact with: your Friends & Family, anyone on a Tape you share or join, and anyone who searches for your exact username. There's no public directory.",
          },
        ],
      },
      {
        id: "signing-out",
        heading: "Signing out",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Open **Settings** from the gear on Home." },
              { title: "Tap **Profile**, then scroll to **Account**." },
              { title: "Tap **Sign Out**." },
            ],
          },
          {
            kind: "text",
            text: "Signing out returns you to the sign-in screen. Everything in Videflo Cloud stays exactly as it is, and signing back in brings it all back. Recordings on this phone that hadn't finished uploading stay on the phone too. They're not deleted by signing out.",
          },
        ],
      },
      {
        id: "delete-account",
        heading: "Deleting your account",
        blocks: [
          {
            kind: "text",
            text: "**Delete Account** is at the very bottom of Settings, on its own. It's permanent, and Videflo asks you to confirm before doing anything.",
          },
          {
            kind: "warning",
            title: "What Delete Account does",
            text: [
              "It deletes your account and Profile, your Friends & Family connections, and every Tape you own from Videflo Cloud, including recordings other people added to your Shared Tapes.",
              "Recordings you added to somebody else's Shared Tape stay in that Tape, because it's their memory, but they're no longer attributed to you.",
              "Videos already on this phone are not deleted by this. Your subscription is not cancelled either. That lives in your Apple Account.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Use the same Apple Account on every phone you own. That's what makes your account and your subscription follow you.",
      "If you're handing your phone to someone else, signing out is the right move. Deleting the app would remove the recordings on that phone.",
    ],
    faqs: [
      {
        question: "I forgot my Videflo password. How do I reset it?",
        answer: [
          "There isn't one. Videflo uses Sign in with Apple and never asks you to create a password.",
          "If you're being asked for a password, it's Apple asking for your Apple Account password, and Apple can help you reset it.",
        ],
      },
      {
        question: "Can two people share one account?",
        answer: [
          "Videflo's subscription isn't set up for Family Sharing today, so it applies to the Apple Account that bought it. Each person needs their own Videflo account to appear on a Shared Tape under their own name.",
          "You don't need to share an account to share memories. Make a Tape and invite them to it.",
        ],
      },
      {
        question: "Do you have my email address?",
        answer: [
          "Yes. Sign in with Apple gives Videflo the email address on your Apple Account, or Apple's private relay address if you chose Hide My Email. It identifies your account. It's never shown to other Videflo users, and nobody can search for you by it.",
        ],
      },
      {
        question: "Can I change my username?",
        answer: [
          "No. A username is fixed once it's claimed. Your display name and photo can be changed whenever you like.",
        ],
      },
    ],
    related: ["restore-purchases", "shared-tapes", "privacy-and-security"],
  },

  {
    slug: "create-your-first-tape",
    title: "Creating your first Tape",
    description:
      "Name it, choose how it will be filmed, and start recording, with a few optional extras if you want them.",
    category: "getting-started",
    keywords: ["new tape", "start", "begin", "setup", "first time", "make"],
    overview: [
      "Making a Tape takes about fifteen seconds. You give it a name, choose whether it's filmed upright or sideways, pick a quality, and you're recording.",
      "Two of those choices, orientation and quality, are fixed for the life of the Tape. That's what lets everything inside it play back as one seamless piece, so it's worth a moment's thought before you tap the button.",
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
                  "If this is your very first Tape, the button in the middle of the screen says **Start Your First Tape**, which is the same thing. You can also start one from the **Camera** tab.",
              },
              {
                title: "Type a name under **Tape Name**.",
                detail:
                  "Name it after the occasion: “Summer Vacation”, “Dad's 70th”, “Milo's First Year”. You can rename it later, so don't agonise.",
              },
              {
                title: "Choose **Tape Orientation**: Portrait or Landscape.",
                detail:
                  "Portrait is upright, best for watching on a phone. Landscape is sideways, best for a TV or a wide scene. Every recording in this Tape will be filmed that way.",
              },
              {
                title:
                  "Choose **Recording Quality**: Standard, High, or Smooth.",
                detail:
                  "Standard suits almost everyone. See **Choosing a recording quality** if you'd like the detail.",
              },
              {
                title: "Tap **Create Tape & Record**.",
                detail:
                  "The camera opens straight away, with the Tape already made and waiting. Or tap **Create Tape** to make it now and add memories later.",
              },
              {
                title:
                  "Press the big round button to start, and **Finish** when you're done.",
                detail:
                  "Videflo saves the recording into your new Tape, starts protecting it in Videflo Cloud, and takes you back.",
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
        id: "optional-setup",
        heading: "Optional Setup",
        blocks: [
          {
            kind: "text",
            text: "Below the name and quality is an **Optional Setup** area. Everything in it can be done later, but it's handy to do at the start:",
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Cover Photo",
                description:
                  "Take a photo or choose one from your library to represent the Tape. Otherwise Videflo uses a frame from the footage.",
              },
              {
                term: "Add Videos",
                description:
                  "Choose videos you already have in Photos, the ones you filmed before Videflo, and they become the first recordings in the Tape, in the order you tapped them, keeping their original dates.",
              },
              {
                term: "Invite to Tape",
                description:
                  "Choose people to invite the moment the Tape exists, so they can add their own recordings. See **Shared Tapes**.",
              },
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
            text: "A Tape plays as one continuous video. If half of it were filmed upright and half sideways, watching it back would mean the picture flipping and shrinking part way through, and no amount of clever software makes that pleasant.",
          },
          {
            kind: "text",
            text: "So Videflo settles both questions once, at the start, and holds them for the life of the Tape. When you come back to record more, it'll gently ask you to hold the phone the same way before it will start.",
          },
          {
            kind: "text",
            text: "If you picked wrong, the fix is simply to make a new Tape with the right settings. Nothing is lost. The old one is still there.",
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
        fix: "Standard looks lovely and uses roughly a quarter of the space, on your phone and in Videflo Cloud. Save High for the Tapes where the detail genuinely matters.",
      },
      {
        mistake:
          "Naming the first Tape “Test” and then filming something real into it.",
        fix: "Rename it. Hold down the Tape's card and choose **Rename**. Nothing about the footage changes.",
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
          "Put anything sensible in and carry on. Renaming a Tape takes two taps and doesn't touch the footage.",
        ],
      },
      {
        question: "What happens to videos I add from Photos?",
        answer: [
          "Videflo makes its own copy of each one and never touches the original in Photos. A landscape video in a portrait Tape is shown whole, with bars at the sides, rather than cropped.",
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
                term: "Camera (required)",
                description:
                  "Videflo is a camcorder; without the camera there's no picture. Asked for the first time you open the recording screen.",
              },
              {
                term: "Microphone (required for sound)",
                description:
                  "Without it your recordings are silent, and sound can't be added to a recording afterwards. Asked at the same time as the camera.",
              },
              {
                term: "Photos (add only, and only when you export)",
                description:
                  "Asked the first time you save a video to your photo library. Videflo asks only for permission to *add*. It never needs to read through your library.",
              },
            ],
          },
          {
            kind: "note",
            title: "Choosing a photo or a video asks for nothing at all",
            text: [
              "When you pick a cover image, or choose videos from Photos to add to a new Tape, iOS shows you its own picker and hands Videflo only the items you chose. The app never sees the rest of your library, which is why no permission prompt appears.",
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
                  "Turn **Camera**, **Microphone**, **Photos**, and **Notifications** on or off as you like.",
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
            text: "Only while you're on the recording screen with a recording running. Leave that screen and the camera and microphone are shut down completely, which is also why your phone goes back to locking normally after you've filmed.",
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
      "Recordings you made while the microphone was off stay silent. There's no way to add sound to footage that was captured without it.",
    ],
    troubleshooting: [
      {
        problem: "The preview is black when I open the camera.",
        solutions: [
          "Check **Settings → Videflo → Camera** is on.",
          "Close any other app that might be using the camera, then reopen Videflo.",
          "Check **Settings → Screen Time → Content & Privacy Restrictions → Camera** isn't switched off.",
          "Restart your phone if the preview stays black across app restarts.",
        ],
      },
      {
        problem: "My recordings have no sound.",
        solutions: [
          "Check **Settings → Videflo → Microphone** is on, then record a short test.",
          "Make sure nothing is covering the microphone at the bottom of the phone. A thick case or a finger will muffle it.",
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
          "Yes, and it will record perfectly well. The video will simply be silent. Most people want the sound, which is why Videflo asks.",
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
      "The four tabs, what lives on each one, the Together row, and where the settings are hiding.",
    category: "getting-started",
    keywords: [
      "navigation",
      "tabs",
      "home screen",
      "interface",
      "where is",
      "layout",
      "menu",
      "bell",
    ],
    overview: [
      "Videflo has four tabs along the bottom, one settings screen, and a notification bell. That's the whole app. Everything else is something you tap on a Tape.",
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
              "**Continue Your Story**: a large card for the Tape you filmed into most recently. Tap the picture to watch it, or **Continue Recording** to add to it.",
              "**Start a New Tape**: begins a fresh Tape.",
              "**Together**: a row of the people you share memories with. Tap someone to see what you share, or the **+** circle to add someone.",
              "**Recent Tapes**: the next few Tapes you've been working on. Tap one to open it.",
              "**See All Tapes**: jumps you over to the Tapes tab.",
              "**The bell**: notifications, meaning invitations, requests, and new memories on Shared Tapes.",
              "**The gear icon**: Settings.",
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
            text: "Everything you've recorded and everything shared with you, newest first. Tap a Tape to watch it. Press and hold one to bring up its menu: continue recording, manage recordings, invite people, add to a Collection, choose a cover photo, pin, rename, remove from or download to this phone, delete.",
          },
          {
            kind: "text",
            text: "In the header there's a magnifying glass for searching, filters (**All**, **On iPhone**, **Cloud**, **Shared**), and a button that switches between the picture grid and a tighter list.",
          },
        ],
      },
      {
        id: "camera",
        heading: "Camera",
        blocks: [
          {
            kind: "text",
            text: "Straight to filming. Choose a Tape to continue, or start a new one, and the recording screen opens with that Tape's own orientation and quality.",
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
            text: "The gear on the Home tab. It holds your Profile, playback and export preferences, the Videflo Cloud card (status, storage, backup settings), your subscription, notifications, links to help and feedback, About Videflo, and at the very bottom, Delete Account. Every screen is described in **Every setting explained**.",
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
      "Videflo shows a warm branded screen while it starts up. It's loading your library, and it's quick. There's no progress to wait on.",
      "A small cloud mark on a Tape's card tells you how it's protected: being backed up, backed up, or stored only in Videflo Cloud. See **Videflo Cloud: how backup works**.",
      "A Tape's card lights up gently at the edge when somebody else has added a new memory to a Shared Tape since you last opened it.",
    ],
    faqs: [
      {
        question: "Where's the button to edit a video?",
        answer: [
          "There isn't one. Videflo doesn't trim, cut or filter. A Tape is kept exactly as it was recorded. If a recording isn't wanted, you can delete it from **Manage Recordings**.",
        ],
      },
      {
        question: "Can I reorder the recordings inside a Tape?",
        answer: [
          "No. A Tape plays in the order things happened, which is what makes it a record of the day rather than an edit of it.",
          "You can reorder the Tapes inside a Collection, though.",
        ],
      },
      {
        question: "What's the pin for?",
        answer: [
          "**Pin Tape** tells Videflo which Tape you'd like to record into by default, so Camera and Home stop asking. It's handy when you're filming one thing all month. **Unpin Tape** undoes it. Pinning doesn't move the Tape or change anything about it.",
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
