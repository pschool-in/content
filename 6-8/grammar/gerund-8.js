export default {
  id: "gerund-8",
  label: "Gerund",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Gerund",
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun.`,
          {
            type: "html",
            text: `<b>Example</b> - I learned <b>driving</b>.<br>
I like <b>watching</b> television.`,
          },
        ],
      },
    },
    {
      type: "selectWord",
      label: "Identify Gerund",
      id: "select-word",
      lockAfter: 1,
      commonData: {
        title: "Identify the Gerunds from the following sentences.",
      },
      data: [
        `*Swimming* is a good exercise.
I learnt *driving*.
I like *watching* television.
I am looking forward to *meeting* you.
He was used to *driving* on the right when he was in London.`,

        `*Writing* is my profession.
*Celebrating* various festivals is a common feature of the Hindu culture.
I enjoy *teaching* English.
*Walking* is a good exercise for health.
*Reading* books increases our knowledge.`,

        `*Working* hard makes you successful.
He dislikes *sleeping* long.
She hates *worrying* about the future.
I prefer *studying* computer science.`,

        `He is afraid of *telling* the truth.
My aim in life is *becoming* a writer.
Her objective is *starting* a home for parentless children.
What I want to do in life is *achieving* something useful for all.`,

        `I do not mind *having* a cup of tea.
I enjoy *reading* English novels.
Have you postponed *going* to Delhi?`,
      ],
    },
    {
      id: "gerund-infinitive",
      label: "Gerund or Infinitive",
      type: "classifySentence",
      data: {
        title:
          "Classify the below sentences based on the use of Gerund or Infinitive.",
        types: [
          {
            name: "Gerund",
            text: `Teach me speaking.
Advising is easier than practicing.
Reading is easier than writing.
Saving is earning.`,
          },
          {
            name: "Infinitive",
            text: ` Teach me to speak.
To advise is easier than to.
To read is easier than to write.
To save is to earn.`,
          },
        ],
      },
    },
    {
      id: "gerund-participle",
      label: "Gerund or Participle",
      type: "classifySentence",
      data: {
        title:
          "Classify the below sentences based on the use of Gerund or Participle.",
        types: [
          {
            name: "Gerund",
            text: `She is tired of writing.
I was prevented from meeting Padma.
Respecting our parents is our duty.`,
          },
          {
            name: "Participle",
            text: ` Writing letters to her husband, she forgot everything.
Meeting Padma for the first time, I thought she was quite gullible.
Respecting my parents words, I never tried to slack again.`,
          },
        ],
      },
    },
    {
      id: "fill-up",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks using gerunds.`,
      },
      data: [
        `*Swimming (To swim)* is a good exercise.
I learnt *driving (to drive)*.
I like *watching (to watch)* television.
I am looking forward to *meeting (meet)* you.
He was used to *driving (drive)* on the right when he was in London.`,

        `*Writing (To write)* is my profession.
*Celebrating (To celebrate)* various festivals is a common feature of the Hindu culture.
I enjoy *teaching (to teach)* English.
*Walking (To walk)* is a good exercise for health.
*Reading (To read)* books increases our knowledge.`,

        `*Working (To work)* hard makes you successful.
He dislikes *sleeping (to sleep)* long.
She hates *worrying (to worry)* about the future.
I prefer *studying (to study)* computer science.`,

        `He is afraid of *telling (to tell)* the truth.
My aim in life is *becoming (to become)* a writer.
Her objective is *starting (to start)* a home for parentless children.
What I want to do in life is *achieving (to acheive)* something useful for all.`,

        `I do not mind *having (to have)* a cup of tea.
I enjoy *reading (to read)* English novels.
Have you postponed *going (to go)* to Delhi?`,
      ],
    },
    {
      label: "Correct or Incorrect",
      type: "classifySentence",
      id: "correct-incorrect",
      commonData: {
        title:
          "Classify the following sentences based on the correct usage of Gerunds.",
        types: ["Correct", "Incorrect"],
      },
      data: [
        [
          `She insisted on my paying the money.
Padma objective to Vijaya's talking like that.
I am sorry for his having spent life uselessly.
I was shocked at Rajiv Gandhi being assassinated.`,

          `She insisted on me paying the money.
Padma objected to Vijaya talking like that.
I am sorry for him having spent life uselessly.
I was shocked at Rajiv Gandhi's being assassinated.`,
        ],
        [
          `We were delighted at Mother Teresa being awarded Noble Peace Prize.
There is no chance of the snow falling.
There is possibility of the election taking place.
Playing chess is his passion.`,

          `We were delighted at Mother Teresa's being awarded Noble Peace Prize.
There is no chance of the snow's falling.
There is possibility of the election's talking place.
The playing chess is his passion.
Playing of chess is his passion.`,
        ],
        [
          `I dislike cooking food and washing clothes.
The rapid reading of a book is useless.
Reading a book rapidly is useless.
He insisted on going there alone.`,

          `I dislike cooking food and the washing of clothes.
Rapid reading a book is useless.
He insisted to go there alone.`,
        ],
        [
          `He prevented me from going here alone.
I dislike your going there.
The reading of a book rapidly is useless.`,

          `He prevented me to go there alone.
I dislike you going there.
Rapid reading of book useless`,
        ],
        [
          `I do not mind Ram's attending the party.
He begged of me the favour of granting him leave.
The party was handicapped by one of their best players being ill.`,

          `I do not mind Ram attending the party.
He begged of my favour of granting him leave.
The party was handicapped by one's of their best players being ill.`,
        ],
      ],
    },
  ],
};
