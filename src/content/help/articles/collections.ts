import type { HelpArticle } from "../types";

export const collectionArticles: readonly HelpArticle[] = [
  {
    slug: "collections",
    title: "Collections: grouping Tapes that belong together",
    description:
      "Optional folders for your Tapes — how to make one, fill it, order it, and remove it.",
    category: "collections",
    keywords: [
      "folder",
      "group",
      "album",
      "organise",
      "create collection",
      "delete collection",
      "reorder",
      "move",
    ],
    overview: [
      "A Collection is a group of Tapes that belong together — “2026”, “The Grandchildren”, “Every Holiday We've Ever Taken”. It's the one organising tool in Videflo, and it's entirely optional.",
      "Collections never move or copy anything. Every Tape stays exactly where it was in your main library; a Collection is simply another way of looking at some of them.",
    ],
    sections: [
      {
        id: "create",
        heading: "Making a Collection",
        blocks: [
          {
            kind: "steps",
            steps: [
              { title: "Go to the **Collections** tab." },
              {
                title:
                  "Tap **Create Collection** (or the **+** button once you have some).",
              },
              {
                title: "Give it a name and tap **Create**.",
              },
              {
                title: "Open it and add Tapes.",
                detail:
                  "Tap a Tape in the list to add it. You can also add one from any Tape's own menu with **Add to Collection**.",
              },
            ],
          },
        ],
      },
      {
        id: "one-collection",
        heading: "A Tape belongs to one Collection at a time",
        blocks: [
          {
            kind: "text",
            text: "This is the rule worth knowing. Adding a Tape that's already in another Collection **moves** it — the menu says **Move to Collection** rather than **Add** when that's what would happen, so it's never a surprise.",
          },
          {
            kind: "text",
            text: "It keeps things unambiguous: there's exactly one answer to “where does this Tape live?”, and no Tape quietly appearing in three places at once.",
          },
          {
            kind: "note",
            title: "Every Tape is always in the Tapes tab too",
            text: [
              "Putting a Tape in a Collection doesn't take it out of your main library. **Tapes** always shows everything.",
            ],
          },
        ],
      },
      {
        id: "order",
        heading: "Putting them in the right order",
        blocks: [
          {
            kind: "text",
            text: "Tapes inside a Collection can be arranged by hand, which is unusual in Videflo and deliberately so — a Collection is *your* arrangement rather than a record of what happened.",
          },
          {
            kind: "steps",
            steps: [
              { title: "Open the Collection." },
              { title: "Open its menu and choose **Reorder**." },
              {
                title: "Drag the handles to arrange them, then tap **Done**.",
                detail:
                  "Reordering only appears when there are at least two Tapes to arrange.",
              },
            ],
          },
        ],
      },
      {
        id: "remove-delete",
        heading: "Removing a Tape, and deleting a Collection",
        blocks: [
          {
            kind: "list",
            items: [
              "**Remove from Collection** takes a Tape out of the group. The Tape and every recording in it stay exactly where they are in your library.",
              "**Delete** on a Collection removes the group only. Videflo says so on the confirmation: its Tapes and recordings remain in All Tapes.",
            ],
          },
          {
            kind: "note",
            title: "Deleting a Collection never deletes video",
            text: [
              "This is one of the few destructive-sounding actions in Videflo that genuinely isn't. Nothing you filmed is at risk.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Years make excellent Collections. “2026” gathers a whole family's worth of Tapes with no thought required.",
      "So do people. A Collection per grandchild, filled over a decade, is a lovely thing to hand over one day.",
      "A Collection with no cover of its own borrows the first Tape's picture — so reordering also changes how the Collection looks.",
      "You can give a Collection its own cover photo, exactly as you would a Tape.",
    ],
    pitfalls: [
      {
        mistake:
          "Adding a Tape to a second Collection and wondering why it left the first.",
        fix: "That's the rule — one Collection per Tape. If you need it in two places, the Tape has to pick one.",
      },
      {
        mistake:
          "Deleting a Collection because you're worried it's duplicating storage.",
        fix: "It isn't. A Collection holds no video at all — it's a list of which Tapes belong together.",
      },
    ],
    troubleshooting: [
      {
        problem: "Reorder isn't in the menu.",
        solutions: [
          "There need to be at least two Tapes in the Collection — one Tape has nothing to reorder.",
        ],
      },
      {
        problem: "A Tape I added isn't showing in the Collection.",
        solutions: [
          "Check you added it rather than opening it — tapping a Tape in the add list is what adds it.",
          "Search the Collections tab for the Collection name to be sure you're looking at the right one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a Collection contain another Collection?",
        answer: [
          "No. Collections are one level deep, which keeps things simple to navigate.",
        ],
      },
      {
        question: "Do Collections use storage?",
        answer: [
          "Essentially none. A Collection is a name, an order, and an optional cover photo.",
        ],
      },
      {
        question: "Can I play a whole Collection end to end?",
        answer: [
          "No. Playing continuously is what a Tape does. A Collection is for finding things, and you play each Tape from it.",
        ],
      },
      {
        question: "What happens to a Collection if I delete a Tape in it?",
        answer: [
          "The Tape disappears from the Collection along with the rest of your library. The Collection itself carries on with whatever's left.",
        ],
      },
    ],
    related: ["managing-your-tapes", "cover-photos", "searching-your-library"],
  },
] as const;
