export default {
  id: "infinitive-8",
  label: "Infinitives",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Infinitives",
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun. A word that is not limited by the person or number of the subject is known as an Infinitive. It is a kind of verb having certain features of a noun. So it is also treated as a verb-noun.
Infinitive = to + the base form of the verb, e.g., to sing, to dance, to run.`,
          {
            type: "html",
            text: `<b>Example</b> - <b>To advise others</b> is easy.<br>
<b>To learn</b> English is difficult.`,
          },
          `Infinitives don't have to stand alone. Infinitives can work with other words to form an infinitive phrase. To put it simply, infinitive phrases use additional words to modify or further describe the main infinitive.`,
          {
            type: "html",
            text: `<b>Example</b> - My boss <b>told me to pay attention</b>, but I wasn't listening.<br>
I <b>need you to get me out of here</b>.`,
          },
          `# Use of Infinitive 
1. As the subject of the a verb`,
          {
            type: "html",
            text: `<b>Example</b> - <b>It is easy to advise</b> others.<br>
<b>To advise others</b> is easy.`,
          },
          `2. As the object of a transitive verb`,
          {
            type: "html",
            text: `<b>Example</b> - I wish <b>to become a poet</b>.`,
          },
          `3. As the complement of a verb`,
          {
            type: "html",
            text: `<b>Example</b> - Our greatest pleasure is ,b>to help the poor</b>.`,
          },
          `4. As the object of a preposition`,
          {
            type: "html",
            text: `<b>Example</b> - I had no choice <b>but to give up my hope</b>.`,
          },
          `5. As an object complement`,
          {
            type: "html",
            text: `<b>Example</b> - I noticed Madhavi <b>smile at me</b>.`,
          },
          `6. To qualify a verb to express purpose`,
          {
            type: "html",
            text: `<b>Example</b> - I read books <b>to increase my knowledge</b>.`,
          },
          `7. To qualify an adjective`,
          {
            type: "html",
            text: `<b>Example</b> - It is hard <b>to please Padma</b>. `,
          },
          `8. To qualify a noun`,
          {
            type: "html",
            text: `<b>Example</b> - It is not the time <b>to sleep</b>.`,
          },
          `9. To qualify a sentence`,
          {
            type: "html",
            text: `<b>Example</b> - <b>To tell the truth</b>, we have no problem with you.`,
          },
          `Infinitives are of two types: bare infinitive and split infinitive. Bare Infinitives can be replaced by 'to' Infinitives.`,
          {
            type: "html",
            text: `<b>Example</b> - I can <b>teach</b>. => I am <b>able to teach</b>.`,
          },
          `It is generally treated wrong to split an Infinitive in the middle. The adverb can be used either before 'to' or after the Infinitive.`,
          {
            type: "html",
            text: `I expect Madhavi to carefully read the letter. => <b>Incorrect</b><br>
I expect Madhavi to read the letter carefully.=> <b>Correct</b>`,
          },
        ],
      },
    },
    {
      type: "selectWord",
      label: "Identify Infinitives",
      id: "select-word",
      lockAfter: 1,
      commonData: {
        title: "Identify the Infinitives from the following sentences.",
        multiSelect: true,
      },
      data: [
        `I love *to speak* English.
She likes *to swim*.
*To advise others* is easy.
*To learn English* is difficult.
*To please Padma* is hard.`,

        `*It is easy to advise* others.
*It is difficult to learn* English.
*It is hard to please* Padma.
I wish *to become a poet*.
He likes *to read books*.`,

        `We propose *to visit Agra*.
Our greatest pleasure is *to help the poor*.
Her plan is *to settle in Australia*.
I had no choice *but to give up my hope*.
We are *about to begin our work*.`,

        `We heard him *speak to his father*.
We found her *open the door*.
I noticed Madhavi *smile at me*.
We have come *to see Madhavi*.
I read books *to increase my knowledge*.`,

        `It is hard *to please Padma*.
English is difficult *to learn*.
It is not the time *to sleep*.
I have the letters *to post*.
She has a child *to look after*.`,

        `*To tell the truth*, we have no problem with you.
*To explain bluntly*, we are in need of money.
*To tell you frankly*, I am not able to help you.
She *made* me *understand* life.
I *helped* her *learn* English.`,

        `I *heard* Madhavi *tell* her friend about me.
You *need* not *worry* about it.
She *dared* not *speak* with her father.
I *shall go* there.
You *should know* that.`,

        `She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can* wait here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`,
      ],
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "drag-drop",
      lockAfter: 1,
      commonData: {
        title: "Fill in the blanks using the most suitable words.",
      },
      data: [
        `You *should do* your work.
He *can win* this match.
You *must abide* by law.
You *ought to* respect your elders.
I *shall go* there.`,

        `You *should know* that.
She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can wait* here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`,
      ],
    },
    {
      label: "Correct or Incorrect",
      type: "classifySentence",
      id: "correct-incorrect",
      commonData: {
        title:
          "Classify the following sentences based on the correct usage of Infinitives.",
        types: ["Correct", "Incorrect"],
      },
      data: [
        [
          `I expect Madhavi to read the letter carefully.
She tried to explain clearly the situation.
He did nothing but laugh.
He did no more than laugh.`,

          `I expect Madhavi to carefully read the letter.
She tried to clearly explain the situation.
He did nothing but to laugh.
He did no more than to laugh.`,
        ],
        [
          `I went there personally to see the situation.
I request you kindly to grant my application.
He helped me to progress and prosper.
It lies in my power to succeed or to fail.`,

          `I went there to personally see the situation.
I request you to kindly grant my application.
He helped me to progress and to prosper.
It lies in my power to succeed or fail.`,
        ],
        [
          `We are advised to rejoice and to weep with others.
I should have like to go.
He seemed to have enjoyed his stay in Mumbai.
I gave him a pen to write with.
He has no paper to write on.`,

          `We are advised to rejoice and weep with others.
I should have liked to have gone.
He seemed to enjoy his stay in Mumbai.
I gave him a pen to write.
He has no paper to write.`,
        ],
      ],
    },
    {
      id: "mcq",
      label: "Multiple Choice Questions",
      type: "mcq",
      commonData: {
        title: "Multiple Choice Questions",
      },
      data: [
        {
          questions: [
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "He knows how to read and write English, He knows to read and write English",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "My father taught him how to drive a car, My father taught him to drive a car",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "Rekha was punished for coming late, Rekha was punished to coming late",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "The student was made to write an essay by me, The student was made by me to write an essay",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options: "I was let go by him, I was by him let go",
            },
          ],
        },
        {
          questions: [
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "That way to behave is dangerous, That is a dangerous way to behave",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "It is important to be patient for Jake to his little brother, It is important for Jake to be patient to his little brother",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "To do this is the right thing, This is the right thing to do",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "When to press the button tell me, Tell me when to press the button",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "I request you to kindly grant my application, I request you kindly to grant my application.",
            },
          ],
        },
      ],
    },
  ],
};
