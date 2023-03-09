export default {
  id: "punctuation-8",
  label: "Punctuation",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Punctuation",
        text: [
          `# Punctuation
1. Hyphen: Depicted by '-' is used between two words that are parts of a name or a compound word.`,
          {
            type: "html",
            text: `For example, long<b>-</b>term, get<b>-</b>together`,
          },
          `2. Dash: A dash (—) is a punctuation mark that resembles a hyphen, but is longer. A dash is used to separate parts of a sentence and indicate a break. It indicates a longer pause than a comma and a semicolon.`,
        ],
      },
    },
    {
      id: "fill-up",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks in the following sentences with suitable Punctuations.`,
      },
      data: [
        `One*- (—)*fourth of the students in the class have parents from another country.
My work timings are from 8*— (-)*5.
The trek will be organised from May 12*— (-)*15.
We will have a get*- (—)*together next weekend to celebrate your birthday.
The game started out as an organized game of tag, but it ended up a free*- (—)*for*- (—)*all.`,

        `We know one thing for sure *— (-)* something unexpected is coming our way.
Many children *— (-)* living in orphanages *— (-)* do not know what love feels like.
She wore a charcoal*- (—)*gray rain jacket.
People *— (-)* both young and old *— (-)* were advised to take vaccinations at the earliest.`,

        `The mathematician*— (-)*philosopher has won the Nobel Prize this year.
I like vanilla*- (—)*flavored ice cream.
Molotov*— (-)*Ribbentrop Pact was officially declared null in 1941.
A lot has changed since last year *— (-)* probably for the better.`,

        `Teresa preferred the red*- (-)*embroidered lace dress.
The Chennai*— (-)*Mumbai flight will leave at 10:00 a.m.
Dinesh *— (-)* the boy from Thanjavur *— (-)* has arrived.
The majority of you scored between eighty*- (—)*eight and ninety*- (—)*nine percent on the test.`,
      ],
    },
  ],
};
