export default {
  id: "auxiliary-verb-8",
  label: "Auxiliary Verb",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Auxiliary Verb",
        text: [
          `# Auxiliary Verb
Auxiliary verbs have no meaning on their own. They are necessary because they help the main verb to form the grammatical structure of a sentence. The main functions of auxiliary verbs are to form questions, short answers, question tags and to avoid repetition.
Auxiliary verbs fall into three basic groups:
1. primary or main auxiliary verbs: The primary auxiliary verbs are called so because they are the most used in forming tenses, negatives and questions. `,
          {
            type: "html",
            text: `These are forms of the verbs <b>be</b>, <b>have</b> and <b>do</b>.`,
          },
          `2. modals or modal auxiliary verbs: Modal auxiliary verbs are also helping verbs. They are used before main verbs to express a range of meanings such as ability, possibility, certainty, suggestion, permission, obligation and so on. In almost all cases, the modal verb does not change according to the subject of the sentence. This means that the modal verb need not agree with the subject in number and person.`,
          {
            type: "html",
            text: `Examples include <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>shall</b>, <b>should</b>, <b>will</b>, <b>would</b>, <b>must</b>, etc.`,
          },
          `3. other auxiliary verbs with the characteristics of modals: Some words do not always behave as modals. Such phrases are called semi-modals.`,
          {
            type: "html",
            text: `Examples include, <b>be about to</b>, <b>be able to</b>, <b>be likely to</b>, <b>had better</b>, <b>have to</b>, <b>ought to<b>, <b>used to</b>, <b>need to</b>, <b>dare</b> and <b>would rather</b>.`,
          },
        ],
      },
    },
    {
      id: "fill-up",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks with the most suitable option`,
      },
      data: [
        `*May (Can)* you have a long life! Sweetheart.
Numair *could (may)* speak two languages when he was eigt.
You *should (would)* watch Kriti's latest movies.
*Shall (Will)* we go on a long drive today?
You *might (may)* want to try this recipie once you taste it.`,

        `*Will (Should)* you, please stop gossiping about Abdu.
He has lost your watch and he *dare (must)* not to tell you.
I *used to (need to)* play cricket daily in the morning when I was ten.
Liya *may (should)* go to the museum whenever she likes.
You *ought to (dare to)* consult a Dentist.`,
      ],
    },
    {
      id: "had-has",
      label: "Has or Had",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: "Fill in the blanks using has or had.",
      },
      lockAfter: 2,
      data: [
        `Jake and Niki *had* a fight yesterday.
Charlie *has* a blanket.
Mike *had* an injury, but now he's fine.
I *had* rabbits when I was 8 years old.
Tina *has* a ear infection.`,

        `India *has* many states.
My dad *had* a white coat which he used to wear.
The lion *has* sharp claws.
Niya *had* broken her leg a few months ago.
Natalie *has* a sweet smile.`,

        `The children *had* a lot of fun last night.
Her grandparents *had* passed away a long time ago.
William Shakespeare *has* written many plays.
*Has* the baby fallen asleep?
Renu *has* a purple dress.`,
      ],
    },
    {
      id: "am-is-are",
      label: "Am, Is or Are",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: "Fill in the blanks using is, am and are.",
      },
      lockAfter: 2,
      data: [
        `The children *are* playing cricket.
Mahi *is* going to the market.
The moon *is* shining brightly.
Strong winds *are* blowing.
I *am* playing with toy trucks.`,

        `Richa *is* drawing a landscape.
*Are* you going somewhere?
Sunny *is* mowing the lawn.
I *am* doing my homework.
The duckd *are* in the pond.`,

        `Tom and Saira *are* enacting Romeo and Juliet on stage.
Thunder *is* rumbling.
People *are* jogging in the park nearby.
Mike *is* coming back from New York.
I *am* studying for a teaching eligibility exam.`,
      ],
    },
    {
      id: "yes-no",
      label: "Yes or No",
      type: "classifySentence",
      data: {
        title: "Do the following sentences contain modal auxiliary verbs?",
        types: [
          {
            name: "Yes",
            text: `Can you please help me?
Will you be able to finish the work by tommorow?
You might regret doing this the next day.
He said I can use his mobile at any time.
Will you pick me up on Sunday also?`,
          },
          {
            name: "No",
            text: `My sister was able to read the alphabet when she was 18 months old.
Do not wash the car. The paint is still wet.
I am certain that they have left already.
I am sure he is over seventy.
It was not necessary to meet him but i met him.`,
          },
        ],
      },
    },
    {
      id: "modal",
      label: "Modal Auxiliary Verbs",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Complete the following sentences using suitable modal auxiliary verbs.",
      },
      lockAfter: 2,
      data: [
        `*Will* Shaleen come with me to the hospital?
It *could* be what you wished for. 
*Should* I submit all the documents on monday?
There *might* be some problem with the computer software.
All students *must* wear their uniforms every day.`,

        `*May* I come in?
*Can* you help me with this math problem?
My phone *would* be out of charge by the time we reached the destination.
Roshini *could* not make it to the reception as she missed the flight.
Everyone *must* follow traffic rules to ensure the safety of all.`,

        `You *might* get tickets for the concert if you are lucky.
Rahul *will* not like this for sure.
Amrita said that she *would* be on leave the next day.
*Should* everyone fill the scolarship forms?
Fathima *can* finish this in an hour.`,
      ],
    },
    {
      id: "mcq",
      label: "Choose the correct alternative",
      type: "mcq",
      data: {
        title: "Choose the correct alternative",
        questions: [
          {
            qText: "I do not think I _____ be able to go.",
            options: `shall, should, can`,
          },
          {
            qText: "He ____ not pay unless he is compelled",
            options: `will, shall, dare`,
          },
          {
            qText: "You _____ be punctual.",
            options: `should, would, ought`,
          },
          {
            qText: "I wish you _____ tell me earlier.",
            options: `would, should, must `,
          },
          {
            qText: "_____ I assist you?",
            options: `Shall, Will, Would`,
          },
          {
            qText: "_____ you please help me with this?",
            options: `Would, Should, Shall`,
          },
          {
            qText: "You ______ to pay your debts.",
            options: `ought, should, must`,
          },
          {
            qText: "He said I ___ use his telephone at any time.",
            options: `might, could, can`,
          },
          {
            qText: "If you ______ see him, give him my regards",
            options: `should, would, shall`,
          },
          {
            qText:
              "He ____ not ask for a raise, for the fear of losing his job.",
            options: `dare, need, would`,
          },
        ],
      },
    },
  ],
};
