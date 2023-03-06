export default {
  id: "modals-8",
  label: "Modals",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Modals",
        text: [
          `# Modals
Auxiliary verbs provide additional and specific meanings to the main verb. Usually used to indicate probability/possibility, ability, permission, obligation/advice, offers, etc
1. should/ought to - indicate obligation, probability
2. must - indicate logical conclusion, necessity
3. will/would - indicate willingness, likelihood, certainity, habits
4. may/might/can/could - indicate possibility, future, plan, ability, permission, offer
5. need/needn't - As a modal verb, it is commonly used in negative sentences. It indicates something unnecessary
There are two modals that serve as the main verb as well.`,
          {
            type: "html",
            text: `They are: <b>dare</b> and <b>need</b>.`,
          },
          `Verbs used after modals are always in their original form.
Conditional sentences, frequently use modal auxiliaries. `,
          {
            type: "html",
            text: `The modals which are most commonly used are <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>must</b>, <b>should</b>, <b>will</b>, and <b>would</b>.`,
          },
        ],
      },
    },
    {
      id: "will-shall",
      label: "Will or Shall",
      type: "fillup",
      title: `Read the short paragraph. Fill in the blanks with a, an or the.`,
      data: [
        `They said that they *will (shall)* go to the park in the evening.
The warden thinks that I *shall (will)* finish the project soon.
The doctor *will (shall)* visit the patient at the alloted time.
My mother promised me that she *will (shall)* buy me a new dress.
The meeting *shall (will)* start at 10 am.`,
      ],
    },
    {
      id: "would-should",
      label: "Would or Should",
      type: "fillup",
      title: `Fill in the blanks using would or should.`,
      data: [
        `She *would (should)* sing her son to sleep every night.
We *should (would)* start preparing for the exams immediately.
I *would (should)* go for a red dress for the party.
I *would (should)* rather walk than a ride home.
One *should (would)* be kind to people.`,
      ],
    },
    {
      id: "fillup-1",
      label: "Fill in the blanks",
      type: "fillup",
      noOptions: true,
      title: "Fill in the blanks with suitable auxiliary verbs.",
      data: [
        `All *will* go well if you are prepared.
They *will* lose their confidence if reproached constantly.
*Will* you lend me that book?
You *should* exercise regularly.
He felt that he *ought* to visit his village soon.
There *might* be red ants in those bushes.
Everyone *must* be in their seats before noon.
I *need* a beautiful garden.`,
      ],
    },
    {
      label: "Conditionals",
      type: "matchByDragDrop",
      title: `Complete the conditional sentences using suitable modals.`,
      id: "fillup-drag-drop-3",
      data: {
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `If he *can* help, he does. 
If I *may* help, ask me.
If we *must* help, we do.
If you *should* need help, please ask us.
If he *will* help, he'll do a good job.
If I *could* leave work early today, I'd be very grateful.
If she *would* work harder, she'd succeed. `,
      },
    },
    {
      id: "mcq",
      label: "Choose the correct option",
      type: "mcq",
      data: {
        title: "Fill in the blanks by choosing the correct modal auxiliary.",
        questions: [
          {
            qText:
              "If I hadn't worked hard, I _____ never have been able to pass the examination.",
            options: `would, will, won't, would'nt`,
          },
          {
            qText: "_______ I help myself to some hot coffee?",
            options: `Should, Cannot, Will, May`,
          },
          {
            qText:
              "I ____ immediately make out from her accent that she was from France.",
            options: `could, would, should, can`,
          },
          {
            qText:
              "He ________ have negotiated with the landlord before the agreement was finalised.",
            options: `ought to, need, may, can`,
          },
          {
            qText:
              "________ it be better if we go by car instead of taking the bus?",
            options: `Wouldn't, Mustn't, Can't, Should`,
          },
          {
            qText:
              "Veena cannot join us as she ______ pick up her son from school.",
            options: `needs to, ought to, will, might`,
          },
          {
            qText: "You _______ spend more time with your children.",
            options: `ought to, will, would, need`,
          },
          {
            qText: "This _______ feel much better if you do some exercise.",
            options: `will, must, should, can`,
          },
          {
            qText: "He ________ have informed me before going there.",
            options: `should, ought, must, can`,
          },
        ],
      },
    },
    {
      id: "mcq-2",
      label: "Correct Choice",
      type: "mcq",
      data: {
        title:
          "Pick out the correct sentence from among the four sentences in each of the following examples.",
        questions: [
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `I could pass the exam. But I did not appear for it, I was able to pass the exam. But I could not appear for it, I was able to pass the exam. But I did not appeared for it, I was able to pass the exam. But I did not appear for it`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Nobody knows his whereabouts. He might be there in Doha, Nobody knows his whereabouts. He may was there in Doha, Nobody knew his whereabouts. He may be there in Doha, Nobody knews his where abouts. He is there in Doha`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `The drug addicts must not be tortured but should be rehabilitated, The drug addicts may not be tortured but should be rehabilitated, The drug addicts can not be tortured but must be rehabilitated, The drug addicts should not be tortured but might be rehabilitated`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `You ought to help the blind to cross the road, You must to help the blind to cross the road, You ought to help the blind to crossing the road, You should help the blinds to cross the road`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `You need not worry at all. I will take care of your luggage, You need not worry at all. I am take care of your luggage, You need to not worry at all. I will taking care of your luggage, You need not worry at all. I will be take care of your luggage`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Everyone should follow the path shown by his or her parents and teachers, Everyone may be follow the path shown by their parents and teachers, Every should be follow the path shown by his or her parents and teachers, Everyone might follow the path shown by his or her parents and teachers`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Abhi can achieve his goal if has strong determination, Abhi can achieve his goal if they have strong determination, Abhi may achieve his goal if he had strong determination, Abhi can achieve his goal but he has strong determination`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `This seems to be difficult. But I will make this happen, This seemed to be difficult. But I may make this happen, This seems to be difficult. But I shall make this happen, This seemed to be difficult. But I should make this happen`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `One should not be too careful about what is good or what is bad, One should not too careful about what is good or what is bad, One may not be too careful about what is good or what is bad, One will not be too careful about what is good or what is bad`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `He must pass the exam in the first attempt, He might be pass the exam in the first attempt, He must be pass the exam in the first attempt, He should be pass the exam in the first attempt`,
          },
        ],
      },
    },
  ],
};
