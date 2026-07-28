import type { HelpArticle } from "../types";

export const recordingArticles: readonly HelpArticle[] = [
  {
    slug: "recording-a-tape",
    title: "Recording: start, pause, resume, finish",
    description:
      "Everything on the recording screen, and what each control actually does.",
    category: "recording",
    keywords: [
      "record button",
      "pause",
      "stop",
      "film",
      "capture",
      "timer",
      "rec",
      "camera screen",
    ],
    overview: [
      "The recording screen is deliberately plain: a big round button in the middle, **Finish** beside it, and a few quiet controls for the camera itself.",
      "The key thing to understand is that pausing is not stopping. You can pause and resume as many times as you like, and it all becomes one smooth recording. **Finish** is the one that ends the session and saves it into your Tape.",
    ],
    sections: [
      {
        id: "controls",
        heading: "What's on screen",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "The round button",
                description:
                  "Starts recording, pauses it, and resumes it. It never moves and never changes size, so you can find it without looking.",
              },
              {
                term: "Finish",
                description:
                  "Ends the session and saves everything you just filmed into the Tape. This is the one that finishes the job.",
              },
              {
                term: "Flip",
                description:
                  "Switches between the rear and front cameras. You can do this mid-recording.",
              },
              {
                term: "The status dot and timer",
                description:
                  "Green means ready, red and gently pulsing means recording right now, gold means paused. The timer counts the footage you've captured this session.",
              },
              {
                term: "The zoom slider and lens buttons",
                description:
                  "A slider above the main controls, and — on iPhones with more than one rear lens — small buttons like 0.5×, 1× and 3×.",
              },
            ],
          },
        ],
      },
      {
        id: "how-to",
        heading: "Recording something",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Open the recording screen.",
                detail:
                  "Either by making a new Tape, or by choosing **Continue Recording** on one you already have.",
              },
              {
                title: "Hold your iPhone the way the Tape was started.",
                detail:
                  "If it's the wrong way round, Videflo shows a card asking you to turn it. It disappears the moment you do.",
              },
              {
                title: "Tap the round button to start.",
                detail: "The dot turns red and the timer begins.",
              },
              {
                title: "Tap it again to pause whenever you like.",
                detail:
                  "The dot turns gold. Nothing is lost — you're simply between takes.",
              },
              {
                title: "Tap once more to carry on.",
                detail: "Pause and resume as often as you want.",
              },
              {
                title: "Tap **Finish** when you're done.",
                detail:
                  "Videflo saves everything from the session into your Tape as a single recording, and takes you back.",
              },
            ],
          },
          {
            kind: "note",
            title: "Saving takes a moment",
            text: [
              "After **Finish**, Videflo joins the pieces together. Usually that's about a second. Long sessions filmed at High quality take a little longer — let the screen finish rather than force-closing the app.",
            ],
          },
        ],
      },
      {
        id: "discard",
        heading: "Throwing a session away",
        blocks: [
          {
            kind: "text",
            text: "Closing the recording screen while you have footage captured asks whether you want to discard it, and tells you exactly how much you'd be losing. **Keep Recording** takes you back; **Discard** throws that session away.",
          },
          {
            kind: "warning",
            title: "Discarding can't be undone",
            text: [
              "Footage you discard is deleted straight away. If you're not certain, tap **Finish** instead — you can always delete the recording from the Tape afterwards, and you'll have had a chance to watch it first.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Your iPhone won't dim or lock while you're recording, so you can put it on a table and let it run.",
      "Pause rather than finish between shots. One recording made of six pauses plays back better than six recordings — and it's less to manage later.",
      "Keep an eye on the low-storage warning in the corner. It appears while there's still room to finish what you're doing, not once it's too late.",
    ],
    pitfalls: [
      {
        mistake:
          "Tapping **Finish** between every shot, so a single afternoon becomes fifteen recordings.",
        fix: "Use pause instead. The Tape plays back identically either way, but you'll have far less to scroll through in **Manage Recordings**.",
      },
      {
        mistake: "Swiping the app away while it's still saving.",
        fix: "Wait for the screen to return on its own. If you do interrupt it, Videflo will offer to rescue the footage next time you open the app.",
      },
    ],
    troubleshooting: [
      {
        problem: "The record button doesn't respond.",
        solutions: [
          "Look for the orientation card — Videflo won't start until the phone is held the way the Tape was created.",
          "Check the storage warning. With almost no free space, recording can't begin.",
          "Confirm camera and microphone access are on in **Settings → Videflo**.",
        ],
      },
      {
        problem: "Recording stopped by itself.",
        solutions: [
          "A phone call, an alarm, or another app taking over the camera will interrupt it. Videflo keeps what it captured up to that point.",
          "Very low battery or very low storage will also stop it. Both are worth checking before a long session.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does pausing create a separate video?",
        answer: [
          "Not as far as you're concerned. Everything from one session — however many times you paused — is saved as a single recording, and it plays back seamlessly.",
        ],
      },
      {
        question: "Can I switch to the front camera part way through?",
        answer: [
          "Yes. Tap **Flip** at any point, including while recording. The Tape carries on as one continuous piece.",
        ],
      },
      {
        question: "Can I lock the screen while it records?",
        answer: [
          "No — recording needs the app to be on screen. Videflo keeps the display awake for you, so it won't dim or lock on its own while you film.",
        ],
      },
      {
        question: "Is there a maximum recording length?",
        answer: [
          "Videflo doesn't impose one. Free storage and battery are the real limits, and the low-storage warning gives you notice before space becomes a problem.",
        ],
      },
    ],
    related: [
      "continue-recording-a-tape",
      "camera-controls",
      "interruptions-and-recovery",
    ],
  },

  {
    slug: "continue-recording-a-tape",
    title: "Adding to a Tape you already have",
    description:
      "How Continue Recording works, and why it's the heart of the whole app.",
    category: "recording",
    keywords: [
      "append",
      "add more",
      "resume tape",
      "later",
      "second recording",
      "keep going",
      "grow",
    ],
    overview: [
      "**Continue Recording** adds a new recording to the end of an existing Tape. Come back to it an hour later or a year later — the Tape simply gets longer, and still plays as one continuous memory.",
      "This is what makes a Tape different from a folder of clips, and it's worth building the habit early.",
    ],
    sections: [
      {
        id: "where",
        heading: "Three places to find it",
        blocks: [
          {
            kind: "list",
            items: [
              "**Home** — the gold **Continue Recording** button on the large card at the top, for whichever Tape you filmed into last.",
              "**Any Tape's menu** — press and hold a Tape anywhere it appears and choose **Continue Recording**.",
              "**While watching** — the **Continue Recording** button on the playback screen.",
            ],
          },
        ],
      },
      {
        id: "what-happens",
        heading: "What Videflo does for you",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "It reopens the camera with that Tape's own settings.",
                detail:
                  "The same orientation and the same recording quality it was created with — you don't choose again, and you can't get it wrong.",
              },
              {
                title:
                  "It asks you to hold the phone the right way, if you aren't already.",
                detail:
                  "A card appears explaining which way round, and clears itself the moment you turn the phone.",
              },
              {
                title: "You record exactly as before.",
                detail: "Start, pause, resume, **Finish**.",
              },
              {
                title: "The new footage joins the end of the Tape.",
                detail:
                  "No stitching, no export, no choosing where it goes. It's simply part of the Tape now.",
              },
            ],
          },
          {
            kind: "note",
            title: "The order is the order things happened",
            text: [
              "New recordings always go on the end. That's deliberate — a Tape is a record of how a memory unfolded, so it isn't rearranged after the fact.",
            ],
          },
        ],
      },
    ],
    tips: [
      "It's worth making the Tape at the *start* of an occasion, even before anything interesting happens. Adding to it costs a tap; gathering scattered clips afterwards isn't possible.",
      "A Tape can grow for years. “Milo's First Year” filmed once a month is one of the nicest things Videflo does.",
      "If you've already prepared the Tape for export, adding to it marks the prepared copy as **Tape Changed** — prepare it again when you next want a fresh export.",
    ],
    pitfalls: [
      {
        mistake:
          "Making a second Tape called “Emma's Birthday 2” because the first one was already saved.",
        fix: "A saved Tape is never closed. Open its menu and choose **Continue Recording** — it takes new footage forever.",
      },
      {
        mistake:
          "Turning the phone sideways for “just one wide shot” in a portrait Tape.",
        fix: "Videflo will ask you to turn it back, and it's right to. If you genuinely need the other orientation, that's a job for a second Tape.",
      },
    ],
    troubleshooting: [
      {
        problem: "Videflo keeps asking me to rotate the phone.",
        solutions: [
          "The Tape was created in the other orientation, and every recording in it has to match.",
          "If your iPhone's Rotation Lock is on, turning the phone won't be enough — swipe down from the top-right corner and switch Rotation Lock off, then turn the phone.",
        ],
      },
      {
        problem: "I can't find Continue Recording on a Tape.",
        solutions: [
          "Press and hold the Tape's picture rather than tapping it — tapping opens playback, holding opens the menu.",
          "A Tape that's currently being prepared for export has some actions hidden while that runs. Wait for it to finish, or cancel the preparation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many recordings can one Tape hold?",
        answer: [
          "There's no limit in the app. Storage on your iPhone is the practical ceiling.",
        ],
      },
      {
        question: "Can I add to a Tape from a different iPhone?",
        answer: [
          "No. Tapes live on the device where they were made, and Videflo has no sync between devices.",
        ],
      },
      {
        question: "Will the join between two recordings be visible?",
        answer: [
          "No. Videflo plays a Tape as one continuous piece with no black flash or gap at the joins, including the sound.",
        ],
      },
    ],
    related: [
      "recording-a-tape",
      "portrait-and-landscape",
      "manage-recordings",
    ],
  },

  {
    slug: "portrait-and-landscape",
    title: "Portrait and landscape orientation",
    description:
      "Why every Tape locks its orientation when you create it, and how to choose between the two.",
    category: "recording",
    keywords: [
      "orientation",
      "rotate",
      "sideways",
      "upright",
      "vertical",
      "horizontal",
      "rotation lock",
      "turn phone",
    ],
    overview: [
      "Each Tape is filmed either upright (portrait) or sideways (landscape), and that's decided once, when you create it.",
      "It's the single most important choice on the setup screen, because it's the one you can't revisit. Happily, it's also an easy one.",
    ],
    sections: [
      {
        id: "choosing",
        heading: "Which one to choose",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Portrait — hold the phone upright",
                description:
                  "Best for people, for anything tall, and for watching back on a phone. The natural choice for most everyday memories.",
              },
              {
                term: "Landscape — hold the phone sideways",
                description:
                  "Best for wide scenes, stages, sports, and anything you'll want to watch on a TV or a computer.",
              },
            ],
          },
          {
            kind: "text",
            text: "If you're unsure, ask where you'll most likely watch it. Phone means portrait. Television means landscape.",
          },
        ],
      },
      {
        id: "the-gate",
        heading: "The card that asks you to turn the phone",
        blocks: [
          {
            kind: "text",
            text: "When you continue a Tape while holding the phone the wrong way, Videflo shows a calm card with a small phone icon resting in the required position, and won't start recording until you match it. Turn the phone and the card fades away by itself.",
          },
          {
            kind: "text",
            text: "It isn't being fussy. Half a Tape recorded sideways would flip and shrink in the middle of playback, and that can't be fixed afterwards.",
          },
          {
            kind: "warning",
            title: "Rotation Lock will stop this working",
            text: [
              "If your iPhone's Rotation Lock is on, the phone won't register that you've turned it. Swipe down from the top-right corner of the screen, tap the padlock-with-an-arrow icon to switch Rotation Lock off, and try again.",
            ],
          },
        ],
      },
      {
        id: "playback",
        heading: "Watching either kind",
        blocks: [
          {
            kind: "text",
            text: "Both play beautifully. Turn your iPhone sideways while watching a landscape Tape and the player fills the screen. Portrait Tapes fill the screen held upright. Nothing needs to be set.",
          },
        ],
      },
    ],
    tips: [
      "Filming children, pets, or anyone talking to camera? Portrait, almost always.",
      "Landscape footage is what looks right when it eventually ends up on a television — worth choosing for the big occasions.",
      "You can film in both — just make two Tapes. There's no cost to having more.",
    ],
    pitfalls: [
      {
        mistake:
          "Assuming the app got it wrong when it refuses to record sideways.",
        fix: "It's matching the Tape you're adding to. Check which Tape you opened — a portrait Tape will always ask for portrait.",
      },
    ],
    faqs: [
      {
        question: "Can I rotate a Tape after it's recorded?",
        answer: [
          "No. Videflo never alters your original recordings, and there's no rotate function.",
        ],
      },
      {
        question: "Which orientation looks better?",
        answer: [
          "Neither is better — they suit different things. Portrait matches how phones are held and watched; landscape matches how televisions and cinema screens are shaped.",
        ],
      },
      {
        question: "Why not just let me mix them?",
        answer: [
          "Because a Tape plays as one continuous video. Mixing orientations would mean the picture flipping and letterboxing part way through, every single time you watched it back.",
        ],
      },
    ],
    related: [
      "create-your-first-tape",
      "continue-recording-a-tape",
      "playback-basics",
    ],
  },

  {
    slug: "choosing-recording-quality",
    title: "Choosing a recording quality",
    description:
      "Standard, High, and Smooth — what each one means for how it looks and how much room it takes.",
    category: "recording",
    keywords: [
      "4k",
      "1080p",
      "60fps",
      "resolution",
      "frame rate",
      "file size",
      "hd",
      "quality setting",
    ],
    overview: [
      "Every Tape is filmed at one of three qualities, chosen when you create it and used for every recording inside it.",
      "Standard is the right answer for almost everyone. The other two exist for specific reasons, and both use noticeably more storage.",
    ],
    sections: [
      {
        id: "options",
        heading: "The three options",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Standard — 1080p at 30 frames per second",
                description:
                  "Full HD. Looks lovely on a phone and perfectly good on a television, and uses the least space. Recommended.",
              },
              {
                term: "High — 4K at 30 frames per second",
                description:
                  "Four times the detail, and roughly four times the file size. Worth it for a big occasion you'll watch on a large screen.",
              },
              {
                term: "Smooth — 1080p at 60 frames per second",
                description:
                  "Twice as many frames a second, so movement looks fluid. Good for sport, running children, and anything fast.",
              },
            ],
          },
          {
            kind: "note",
            title: "Rough guide to space",
            text: [
              "As a very approximate rule, an hour of Standard footage uses a few gigabytes; High uses several times that; Smooth sits in between.",
              "The actual size depends on what you're filming — a still room compresses far smaller than a windy beach.",
            ],
          },
        ],
      },
      {
        id: "why-locked",
        heading: "Why it's fixed for the whole Tape",
        blocks: [
          {
            kind: "text",
            text: "Because everything in a Tape plays as one continuous video, and it should look the same throughout. Keeping one quality across a Tape also lets Videflo save your recordings without re-encoding them, which is why finishing a session is usually a matter of a second or two rather than a minute.",
          },
          {
            kind: "text",
            text: "If you want a different quality, make a new Tape. Existing Tapes are unaffected, and Tapes at different qualities live happily side by side in your library.",
          },
        ],
      },
    ],
    tips: [
      "Choose High for the wedding. Choose Standard for the Tuesday.",
      "Smooth is the one people forget about, and it's genuinely lovely for sports days and toddlers learning to run.",
      "Higher quality also means longer export times. A 4K Tape takes noticeably longer to prepare than a 1080p one.",
    ],
    pitfalls: [
      {
        mistake:
          "Picking High for everything on the theory that better is better.",
        fix: "You'll fill your iPhone far faster, and on a phone screen you'd struggle to tell the difference. Save it for the Tapes that deserve it.",
      },
      {
        mistake: "Expecting Smooth to make the picture sharper.",
        fix: "Smooth changes how fluid motion looks, not how detailed the picture is. For detail, that's High.",
      },
    ],
    faqs: [
      {
        question: "Can I change a Tape's quality later?",
        answer: [
          "No. It's set when the Tape is created and applies to every recording in it.",
        ],
      },
      {
        question: "Does exporting reduce the quality?",
        answer: [
          "No. Exporting builds a copy at the quality the Tape was filmed at.",
        ],
      },
      {
        question: "What about HDR or Cinematic mode?",
        answer: [
          "Videflo records with the standard settings your iPhone camera provides for the chosen resolution and frame rate. There are no separate HDR, Cinematic, Action, or slow-motion modes.",
        ],
      },
    ],
    related: [
      "create-your-first-tape",
      "storage-space",
      "prepare-and-export-a-tape",
    ],
  },

  {
    slug: "camera-controls",
    title: "Zoom, lenses, and flipping the camera",
    description:
      "The controls around the record button, and how to use them without wobbling the shot.",
    category: "recording",
    keywords: [
      "zoom in",
      "zoom out",
      "0.5x",
      "3x",
      "telephoto",
      "ultra wide",
      "selfie",
      "front camera",
      "pinch",
      "slider",
    ],
    overview: [
      "Videflo gives you three ways to control the picture: a zoom slider, quick lens buttons, and the flip control. All of them work while you're recording.",
    ],
    sections: [
      {
        id: "zoom",
        heading: "Zooming",
        blocks: [
          {
            kind: "list",
            items: [
              "**The slider** sits centred just above the record button. Drag it left or right and the picture follows your finger exactly. It's in the middle of the screen so it's the same reach for either thumb.",
              "**Pinch on the preview** with two fingers, exactly as you would in Photos.",
            ],
          },
          {
            kind: "text",
            text: "Zoom is smooth rather than stepped, so you can ease in gently while recording. Let go and it stays where you left it.",
          },
        ],
      },
      {
        id: "lenses",
        heading: "Lens buttons",
        blocks: [
          {
            kind: "text",
            text: "If your iPhone has more than one rear lens, small buttons appear — typically **0.5×**, **1×**, and **3×**, depending on the model. Tapping one jumps straight to that lens, which is faster and steadier than sliding.",
          },
          {
            kind: "text",
            text: "Videflo reads the lenses your particular iPhone actually has, so you'll only ever see buttons that do something. On a single-lens iPhone, and on the front camera, they don't appear at all.",
          },
        ],
      },
      {
        id: "flip",
        heading: "Flipping between front and rear",
        blocks: [
          {
            kind: "text",
            text: "Tap **Flip** to swap between the rear camera and the selfie camera. You can do it mid-recording, and the Tape carries on as one continuous piece.",
          },
          {
            kind: "note",
            title: "The front camera records what others see",
            text: [
              "The preview is mirrored, the way a mirror is, so it feels natural while you film. The saved recording is not mirrored — text and faces appear the right way round when you watch it back.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Zooming out to 0.5× makes small rooms look much larger — good for a house tour or a crowded kitchen.",
      "For a steady shot, tap the lens button rather than dragging the slider. Fingers on a slider tend to wobble the phone.",
      "Big zoom on a phone is digital past a point, so the picture softens. Getting a step closer nearly always looks better.",
    ],
    pitfalls: [
      {
        mistake: "Zooming right in for a distant subject at a school play.",
        fix: "Zoom a little, then hold the phone against something solid. Heavily zoomed handheld footage is very hard to watch back.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "The zoom jumps or lands somewhere unexpected after I flip cameras.",
        solutions: [
          "Give the flip a moment to settle, then set the zoom again — the two cameras have different ranges.",
          "If it still looks wrong, tap a lens button to jump to a known position.",
        ],
      },
      {
        problem: "The lens buttons aren't showing.",
        solutions: [
          "You're on the front camera — it has one lens, so there's nothing to choose between.",
          "Some iPhone models have only one rear lens, in which case the buttons are correctly hidden.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there a flash or torch?",
        answer: [
          "There's no torch control in Videflo. For dim scenes, more light in the room helps far more than zoom or settings will.",
        ],
      },
      {
        question: "Can I lock the focus or exposure?",
        answer: [
          "There are no manual focus or exposure controls today. Videflo uses your iPhone's automatic camera behaviour.",
        ],
      },
      {
        question: "Does zooming reduce the quality of the recording?",
        answer: [
          "Switching to a real lens doesn't. Zooming beyond what the lenses provide is digital, which crops into the picture and softens it — the same as in the built-in Camera app.",
        ],
      },
    ],
    related: [
      "recording-a-tape",
      "choosing-recording-quality",
      "troubleshooting-recording",
    ],
  },

  {
    slug: "interruptions-and-recovery",
    title: "Calls, crashes, and rescuing an interrupted recording",
    description:
      "What happens when something interrupts you mid-recording — and how Videflo gets your footage back.",
    category: "recording",
    keywords: [
      "phone call",
      "interrupted",
      "battery died",
      "crash",
      "lost recording",
      "recover",
      "salvage",
      "app closed",
    ],
    overview: [
      "Life interrupts filming. A call comes in, the battery gives up, or the app closes unexpectedly. Videflo is built on the assumption that this will happen, and it keeps what it had already captured.",
      "The next time you open the app, anything left in limbo is offered back to you rather than quietly discarded.",
    ],
    sections: [
      {
        id: "what-interrupts",
        heading: "What stops a recording",
        blocks: [
          {
            kind: "list",
            items: [
              "**An incoming phone call or FaceTime.** iOS gives calls priority over the camera.",
              "**Another app taking the camera**, or the phone being locked.",
              "**The battery running out**, or Low Power Mode kicking in at a bad moment.",
              "**Running out of storage.** Videflo warns you while there's still room to finish.",
              "**The app closing unexpectedly**, or being swiped away mid-save.",
            ],
          },
          {
            kind: "text",
            text: "In every one of these cases, the footage captured up to that moment is already written to your iPhone. It isn't held in memory waiting to be saved.",
          },
        ],
      },
      {
        id: "recovery",
        heading: "The recovery card",
        blocks: [
          {
            kind: "text",
            text: "If a recording finished but never made it into a Tape, Videflo shows a card the next time you open the app: **Recover This Recording**, along with how much footage it's holding.",
          },
          {
            kind: "steps",
            steps: [
              {
                title: "Open Videflo.",
                detail:
                  "The card appears on Home if there's anything to recover.",
              },
              {
                title: "Tap it and choose what to do.",
                detail:
                  "**Save as New Tape** gives it a name and a home of its own. **Attach to an Existing Tape Instead** adds it to the end of a Tape you already have.",
              },
              {
                title: "Or tap **Discard Recording** if you don't want it.",
                detail:
                  "This is the one place recovered footage is ever deleted, and it asks you to confirm first.",
              },
            ],
          },
          {
            kind: "note",
            title: "There's no rush",
            text: [
              "The card waits for you. Videflo won't discard recovered footage on its own, however long you leave it.",
            ],
          },
        ],
      },
      {
        id: "during",
        heading: "If you're interrupted mid-session",
        blocks: [
          {
            kind: "text",
            text: "Take the call. When you come back, Videflo will have kept what it captured. Depending on how the interruption ended you may be able to carry straight on with the same session — otherwise, tap **Finish**, then **Continue Recording** to add the rest to the same Tape. Either way it stays one Tape.",
          },
        ],
      },
    ],
    tips: [
      "Turn on Do Not Disturb before filming something you can't repeat. It's the single most effective thing you can do.",
      "Long sessions are much happier on a charger. Video recording is one of the hardest things a phone does.",
      "If the app closes unexpectedly, open it again straight away rather than reinstalling — reinstalling would remove the footage waiting to be recovered.",
    ],
    pitfalls: [
      {
        mistake: "Deleting and reinstalling the app after a crash to “fix” it.",
        fix: "That deletes your Tapes and any footage waiting to be recovered. Reopen the app first and see what it offers you.",
      },
      {
        mistake:
          "Ignoring the recovery card for weeks, then tidying it away without looking.",
        fix: "Open it and watch what's inside before discarding — it's real footage from a real day.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "My recording isn't in the Tape and no recovery card appeared.",
        solutions: [
          "Open the Tape's **Manage Recordings** list — it may be there under a plain name like “Recording 3”.",
          "Check whether the session was discarded rather than finished; discarded footage is deleted immediately.",
          "If footage was interrupted very early, there may not have been enough captured to keep.",
        ],
      },
      {
        problem: "The recovery card keeps coming back.",
        solutions: [
          "It stays until you choose an outcome. Pick **Save as New Tape**, attach it to an existing Tape, or discard it, and it won't return.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I lose the whole session if I'm interrupted at the end?",
        answer: [
          "No. Everything captured before the interruption is kept, and Videflo offers it back to you when you next open the app.",
        ],
      },
      {
        question: "Can Videflo recover a Tape I deleted on purpose?",
        answer: [
          "No. Deleting a Tape removes its recordings from your iPhone permanently, and Videflo keeps no copy anywhere.",
        ],
      },
      {
        question: "Does an interrupted recording end up lower quality?",
        answer: [
          "No. What was captured is captured at the Tape's full quality — the recording is simply shorter than you intended.",
        ],
      },
    ],
    related: [
      "recording-a-tape",
      "troubleshooting-recording",
      "backups-and-new-iphone",
    ],
  },
] as const;
