import type { HelpArticle } from "../types";

export const sharingArticles: readonly HelpArticle[] = [
  {
    slug: "shared-tapes",
    title: "Shared Tapes: one memory, filmed by everyone",
    description:
      "Inviting people to a Tape, joining one, adding your own recordings, and what the owner controls.",
    category: "sharing",
    keywords: [
      "share",
      "invite",
      "collaborate",
      "family",
      "join",
      "link",
      "members",
      "contributor",
      "owner",
      "leave",
    ],
    overview: [
      "A Shared Tape is a Tape with more than one person on it. You invite the people who were there; they can watch the whole Tape and add their own recordings to it, and so can you. Everyone sees one continuous memory, with each recording marked by who filmed it.",
      "Sharing is by invitation only. There's no feed, no followers, and nothing public — a Tape is seen by exactly the people its owner invited.",
    ],
    sections: [
      {
        id: "invite",
        heading: "Inviting someone to a Tape",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title: "Press and hold the Tape and choose **Invite to Tape**.",
                detail:
                  "Or, when creating a Tape, use **Invite to Tape** under **Optional Setup** to invite people the moment it exists.",
              },
              {
                title: "Choose who.",
                detail:
                  "Your **Friends & Family** are listed first. Below them you can **Search Videflo by @username** for anyone with a Videflo account, or tap **Invite by Text** to send a link to someone who isn't on Videflo yet.",
              },
              {
                title: "They see **Invited** until they accept.",
                detail:
                  "You can cancel an invitation from the same screen at any time.",
              },
              {
                title: "When the first person joins, the Tape becomes Shared.",
                detail:
                  "It gets a Shared badge, appears under the **Shared** filter, and the menu row becomes **Manage Shared Tape**.",
              },
            ],
          },
          {
            kind: "note",
            title: "Invitations out doesn't mean shared yet",
            text: [
              "A Tape with invitations that nobody has accepted is still private. Its menu says **Manage Invites**, and it stays in your personal Tapes until someone actually joins.",
            ],
          },
        ],
      },
      {
        id: "join",
        heading: "Joining a Tape you've been invited to",
        blocks: [
          {
            kind: "list",
            items: [
              "**Invited by username** — a notification arrives in the bell on Home, and the invitation is listed under **Settings → Profile → Tape Invitations**. Tap **Accept** to join, or decline.",
              "**Invited by text** — tap the link in the message. With Videflo installed, it opens straight in the app and offers **Join Tape**. Without it, the link opens a page telling you to get Videflo; install it, sign in, then tap the link again.",
            ],
          },
          {
            kind: "text",
            text: "Once you've joined, the Tape appears in your library like any other. You can watch it, and **Continue Recording** adds your own recordings to it.",
          },
        ],
      },
      {
        id: "contribute",
        heading: "Adding to a Shared Tape",
        blocks: [
          {
            kind: "text",
            text: "Everyone on a Tape records into it the same way: **Continue Recording**, hold the phone the way the Tape was started, film, **Finish**. Your recording is protected in Videflo Cloud and then appears for every member, in the order things happened.",
          },
          {
            kind: "list",
            items: [
              "**Each recording shows who filmed it.** Your name and picture sit beside yours; theirs beside theirs.",
              "**Renaming a recording is for the person who filmed it.** Nobody else can retitle your recording.",
              "**Deleting a recording is for the Tape's owner.** Only the owner can remove a recording from a Shared Tape — including their own and everyone else's — and doing so removes it for everyone.",
              "**A card lights up** at the edge when somebody else has added to a Tape since you last opened it.",
            ],
          },
          {
            kind: "warning",
            title: "Your backup setting applies to what you contribute",
            text: [
              "If you've switched off **Back Up to Videflo Cloud**, a recording you add to a Shared Tape stays on your iPhone and never reaches the other members. Turn backup on for contributions to be seen.",
            ],
          },
        ],
      },
      {
        id: "owner",
        heading: "What the owner controls",
        blocks: [
          {
            kind: "definitions",
            items: [
              {
                term: "Invite People",
                description: "Add more members, at any time.",
              },
              {
                term: "Remove",
                description:
                  "Take someone off the Tape. They won't be able to add anything new; what they already added stays in the Tape.",
              },
              {
                term: "Stop Accepting Recordings / Start Accepting Recordings Again",
                description:
                  "Close the Tape to new recordings — from everyone, including you — while leaving it watchable. Reopen it whenever you like.",
              },
              {
                term: "Export Tape",
                description:
                  "Only the owner can export the whole Tape to Photos. Every member can watch it.",
              },
              {
                term: "Delete Tape",
                description:
                  "Deletes the Tape for everyone, including recordings other people added. Videflo says so before it does it.",
              },
              {
                term: "Storage",
                description:
                  "The owner's Videflo Cloud allowance pays for the whole Tape, including other people's recordings. A Tape can't take new members while its owner's storage is full.",
              },
            ],
          },
        ],
      },
      {
        id: "leave",
        heading: "Leaving a Tape",
        blocks: [
          {
            kind: "text",
            text: "On a Tape somebody shared with you, the menu offers **Leave Tape** where Delete Tape would be. You'll stop seeing the Tape. Recordings you added stay in it — it's the owner's memory — and the copies on your own iPhone stay yours.",
          },
          {
            kind: "text",
            text: "If you'd rather a recording of yours didn't stay, ask the owner to delete it; only they can.",
          },
        ],
      },
    ],
    tips: [
      "Invite people at the start of an occasion, not the end. Grandma filming the candles from the other side of the table is exactly what Shared Tapes are for.",
      "A Friends & Family connection makes inviting quicker, but it isn't required — you can invite anyone by @username or by text.",
      "If you're the owner and space is tight, remember every member's recording counts against your allowance. **Manage Storage** shows the largest Tapes.",
    ],
    pitfalls: [
      {
        mistake:
          "Sending someone a Videflo invite link and assuming they're on the Tape.",
        fix: "A link is an invitation. They're on the Tape when they've installed Videflo, signed in, and tapped **Join Tape**. Until then the people screen shows them as invited.",
      },
      {
        mistake: "Deleting a Shared Tape to tidy your own library.",
        fix: "That deletes it for everyone. If you don't want to see it any more and you're not the owner, **Leave Tape** instead. If you are the owner, export it first — or just leave it be.",
      },
    ],
    troubleshooting: [
      {
        problem: "The Tape still says Invite to Tape after I invited someone.",
        solutions: [
          "Look again — with invitations out and nobody accepted, the row reads **Manage Invites**, and the Tape stays personal until someone joins.",
          "Once they accept, the Tape becomes Shared the next time your library refreshes: open the Tape, or pull the Tapes tab down. It isn't instant.",
        ],
      },
      {
        problem: "Someone joined but I can't see their recording.",
        solutions: [
          "Their recording has to finish uploading from their iPhone first. Ask them whether Back Up to Videflo Cloud is on and whether they're online.",
          "Open the Tape again, or pull to refresh — new recordings arrive on the next refresh.",
        ],
      },
      {
        problem: "Continue Recording isn't offered on a Shared Tape.",
        solutions: [
          "The owner may have chosen **Stop Accepting Recordings**. The Tape can still be watched.",
          "Check you're signed in. Videflo can't offer a contribution to an account it can't identify.",
        ],
      },
      {
        problem: "I couldn't invite someone: “storage is full”.",
        solutions: [
          "The owner's Videflo Cloud allowance is full, and a Tape can't take new members while it is. Free up space or choose a larger capacity in **Settings → Videflo Cloud → Manage Storage**, then invite again.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I share a Tape with someone who doesn't have Videflo?",
        answer: [
          "Yes — **Invite by Text** sends them a link. To join and add recordings they'll need Videflo, an account, and a subscription of their own. If you'd only like them to watch, export the Tape to Photos and send them the video instead.",
        ],
      },
      {
        question: "Does a member need their own subscription?",
        answer: [
          "Yes. Videflo requires a subscription to open, for everyone. Storage for the Shared Tape itself comes out of the owner's allowance, not the member's.",
        ],
      },
      {
        question: "Can I turn a Shared Tape back into a private one?",
        answer: [
          "Not today. You can remove every member and stop accepting recordings, which leaves it effectively yours, but the Tape stays marked as shared.",
        ],
      },
      {
        question: "Can two people be the owner?",
        answer: [
          "No. A Tape has one owner — the person who created it — and everyone else is a member.",
        ],
      },
    ],
    related: ["friends-and-family", "notifications", "export-a-tape"],
  },

  {
    slug: "friends-and-family",
    title: "Friends & Family and the Together row",
    description:
      "Connecting with the people you share memories with, finding someone by username, and what a connection does — and doesn't — do.",
    category: "sharing",
    keywords: [
      "connect",
      "connection",
      "request",
      "people",
      "search username",
      "together",
      "add someone",
      "contacts",
    ],
    overview: [
      "Friends & Family is your list of the people you share memories with. Once you're connected, inviting them to a Tape is a tap rather than a search, and they appear in the **Together** row on Home.",
      "A connection is a relationship, not a permission. Being connected to someone gives them no access to any of your Tapes — every Tape is still shared one invitation at a time.",
    ],
    sections: [
      {
        id: "together",
        heading: "The Together row on Home",
        blocks: [
          {
            kind: "text",
            text: "Below **Start a New Tape** on Home is a row of the people you share memories with. Tap a person to see the Tapes you have together. Tap the **+** circle — **Add someone** — to find a person on Videflo or invite somebody new.",
          },
        ],
      },
      {
        id: "connect",
        heading: "Connecting with someone",
        blocks: [
          {
            kind: "steps",
            steps: [
              {
                title:
                  "Tap **+** in the Together row, or open **Settings → Profile → Friends & Family**.",
              },
              {
                title: "Search Videflo by @username.",
                detail:
                  "Usernames are the only way to find someone. Videflo never searches by real name or email address, so a private archive doesn't become a directory of families.",
              },
              {
                title: "Send a request.",
                detail:
                  "They get a notification. Nothing happens until they accept — if you both sent each other a request, Videflo simply offers **Accept**.",
              },
              {
                title: "Or invite someone who isn't on Videflo yet.",
                detail:
                  "**Invite someone new** hands a link to the share sheet. When they install Videflo, sign in and open it, they're offered a connection with you — and again, only their explicit **Accept** connects you.",
              },
            ],
          },
        ],
      },
      {
        id: "manage",
        heading: "Accepting, declining and removing",
        blocks: [
          {
            kind: "list",
            items: [
              "**A request to you** arrives in the bell on Home and under **Friends & Family**. Accept or decline; the person who asked isn't told you declined.",
              "**A request you sent** shows as pending until they answer. You can cancel it.",
              "**Removing a connection** takes them off your list and you off theirs. It doesn't touch any Tape you're both on — leave or remove people from Tapes separately.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Connect with the handful of people you actually share life with. Videflo has no followers, no counts, and no suggestions — the list is only ever people you chose.",
      "Tell family your @username. It's the one thing they need to find you.",
    ],
    faqs: [
      {
        question: "Can someone see my Tapes once we're connected?",
        answer: [
          "No. A connection gives nobody access to anything. They see your Tapes only when you invite them to a specific Tape, and only that one.",
        ],
      },
      {
        question: "Can I find people from my contacts?",
        answer: [
          "No. Videflo never reads your contacts, and it never searches by name, phone number or email. Search is by @username only.",
        ],
      },
      {
        question: "What does the other person see?",
        answer: [
          "Your Profile — display name, username and picture. Never your email address.",
        ],
      },
    ],
    related: ["shared-tapes", "notifications", "accounts-and-signing-in"],
  },

  {
    slug: "notifications",
    title: "Notifications: the bell, and what arrives on the lock screen",
    description:
      "What Videflo tells you about, where to read it, and how to turn push notifications on or off.",
    category: "sharing",
    keywords: [
      "bell",
      "alert",
      "push",
      "banner",
      "badge",
      "unread",
      "lock screen",
      "turn off notifications",
    ],
    overview: [
      "The bell on Home is Videflo's notification centre. It shows the things that deserve a look: invitations to Tapes, Friends & Family requests, a request being accepted, somebody adding a new memory to a Shared Tape, and notices about your storage or account.",
      "The bell always works, whether or not you allow notifications on your iPhone. Allowing them additionally lets Videflo tap you on the shoulder when the app is closed.",
    ],
    sections: [
      {
        id: "bell",
        heading: "The bell",
        blocks: [
          {
            kind: "list",
            items: [
              "**A dot on the bell** means something unread.",
              "**An invitation or request** offers its answer right there — Accept, or decline. Reading it doesn't answer it; it waits until you do.",
              "**A new memory** on a Shared Tape opens that Tape when tapped. Several recordings from the same person arrive as one notification with a count.",
              "**Answered and read** items leave the list on their own. There's nothing to clear, and nothing to delete.",
            ],
          },
        ],
      },
      {
        id: "push",
        heading: "Notifications on the lock screen",
        blocks: [
          {
            kind: "text",
            text: "Shortly after you first sign in, Videflo explains what it would notify you about and asks once. Say yes and iOS shows its own permission prompt.",
          },
          {
            kind: "list",
            items: [
              "**The lock-screen text is deliberately plain** — “You're invited to a Shared Tape.” or “Someone added a new memory to a Tape you share.”, never who or which Tape. A lock screen is read by whoever is standing nearby; the detail is inside the app, behind your passcode.",
              "**Tapping one** opens the bell at that notification.",
              "**While Videflo is open**, nothing pops up — the bell simply updates.",
            ],
          },
        ],
      },
      {
        id: "settings",
        heading: "Turning them on or off",
        blocks: [
          {
            kind: "text",
            text: "**Settings → Notifications** in Videflo shows whether lock-screen notifications are on. If you said no the first time, it offers **Open Settings**, which takes you to the iPhone's own switch for Videflo — the app can't turn iOS permission on or off itself.",
          },
          {
            kind: "text",
            text: "Turning them off changes nothing about the bell. Everything still arrives there when you open the app.",
          },
        ],
      },
    ],
    tips: [
      "If you share Tapes with family, leave notifications on — a new memory appearing while you're on the sofa is one of the nicest things about a Shared Tape.",
      "Notifications aren't a history. Once you've acted on something, the Tape or the person is where the record lives.",
    ],
    troubleshooting: [
      {
        problem: "I'm not getting lock-screen notifications.",
        solutions: [
          "Check **Settings → Videflo → Notifications** on your iPhone is on.",
          "Check Focus or Do Not Disturb isn't silencing Videflo.",
          "Sign out and back in on this iPhone; that re-registers the phone for notifications.",
          "Lock-screen delivery is best-effort — iOS decides when to deliver. The bell in the app is always complete.",
        ],
      },
      {
        problem: "The bell shows something I've already dealt with.",
        solutions: [
          "Pull down to refresh. An invitation you accepted from Settings → Profile, or a request you answered on the other person's screen, clears on the next refresh.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Videflo notify me about my own recordings?",
        answer: [
          "No. Adding to a Shared Tape notifies the other members, never you.",
        ],
      },
      {
        question: "Is there an app-icon badge?",
        answer: [
          "Not today. The dot on the bell inside the app is the indicator.",
        ],
      },
      {
        question: "Can I mute one Tape?",
        answer: [
          "Not today. Notifications are on or off for Videflo as a whole, using the iPhone's own setting.",
        ],
      },
    ],
    related: ["shared-tapes", "friends-and-family", "settings-reference"],
  },
] as const;
