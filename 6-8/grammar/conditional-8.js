export default {
  id: 'conditional-8',
  label: 'Conditionals',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Conditionals',
        text: [
          `Conditional sentences express conditions that are required to be followed in order to achieve the desired results. 
1. Conditional Clauses: Conditional clauses begin with if or unless and express a condition.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you would have studied well</b>, you could have passed the examination easily.`
          },
          `2. Zero Conditionals: A zero conditional sentence refers to a general truth. It denotes situations in which a particular thing or action always results in the other.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you don't water the plants</b>, they die.`
          },
          {
            type: 'html',
            text: `Babies cry <b>when they are hungry and sick</b>.`
          },
          `3. First Conditionals: First conditional sentences are those sentences that express a situation in which the result would be the one to most likely happen. This, however, is not the guaranteed outcome.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you take some medicines</b>, you will feel better.`
          },
          {
            type: 'html',
            text: `<b>If you go out now</b>, you will get wet in the rain.`
          },
          `4. Second Conditionals: Second conditional sentences are sentences in which hypothetical situations or unrealistic events that are not likely to ever happen are mentioned.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If I knew animation graphics</b>, I would create real-life animated characters.`
          },
          {
            type: 'html',
            text: `<b>If I had a time travel machine</b>, I could go back to my past and change a few things.`
          },
          `5. Third Conditionals: Third conditional sentences express alternate circumstances in the present. This is used to indicate that the outcome would have been different if there was a change in the past event mentioned in the dependent clause.`,
          {
            type: 'html',
            text: `<b>Examples</b> - <b>If you had not fought with me</b>, everything would have been fine.`
          },
          {
            type: 'html',
            text: `<b>If the teacher had informed us earlier</b>, we could have finished it in time.`
          }
        ]
      }
    },
    {
      id: 'zero-first',
      label: 'Zero or First Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Zero',
            text: `If you eat fast food every day, you get sick.
When you smoke, your lungs are affected.
The lawn gets wet when it rains.
Babies cry when they are hungry and sick.`
          },
          {
            name: 'First',
            text: `If you are focussed, you will achieve your goal.
If you take some medicines, you will feel better.
If you go out now, you will get wet in the rain.
If you like animated movies, you will like Inside out.`
          }
        ]
      }
    },
    {
      id: 'second-third',
      label: 'Second or Third Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Second',
            text: `If I won the lottery, I would buy all the famous super cars.
If I had a choice, I would never marry at all.
If I had magical powers, I could change the world. 
If I were a bird, I would happily fly around the world.`
          },
          {
            name: 'Third',
            text: `If my parents had not consented to the surgery, my life would have been different.
If she had not gone home, she would have been happier.
If I had been there, I would have surely helped you in one way or another.
If Amrit had been with me, he would have known how to make me feel better.`
          }
        ]
      }
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the missing blanks and complete the conditionals.'
      },
      lockAfter: 2,
      data: [
        `If I were the Prime Minister, I *would* start community kitchens all over the country.
If I were you, I *would* not marry him.
I *would* not have failed, if I had studied harder.
If you do not stop smoking, you *will* develop cancer.
If I were a doctor, I *would* treat poor people for free.`,

        `If he had asked me, I *would* have told him.
If I were a millionaire, I *would* help the poor and the needy.
If they had brought him in time, he *could* have been saved.
If he behaved more politely, he *would* not be in trouble.
If she earned a handsome salary, she *could* lead a better life.`,

        `If it rains, I *will* wear a raincoat.
You *will* not get good marks unless you study hard for the examination.
The dog *will* bite you if you keep teasing it.
If Alexander Bell had not been an inventor, today we *would* not be using telephones.
If Wellington had lost the battle of Waterloo, Napolean Bonaparte *would* have been the president of France.`,

        `Neil Armstrong *would* not have walked upon the moon unless the Americans had not developed space flight.
The other team *will* win if we lose hope.
If you find problems difficult, you *should* keep trying and never give up.
If Samar does not have an umbrella, he *will* get wet in the rain.
If John Kennedy had not gone to Dallas, he *would* not have been assassinated.`,

        `If Madame Curie had been a housewife, she *would* not have discovered radium.
If I won a million rupees, I *would* buy a bungalow and a car.
If I were accidentally locked out of my house, I *would* call my friend for help.
If the poles of two magnets are opposite, they *will* repel each other.
The ice *will* melt if one places it in the sun.`,

        `I *would* not ask any question unless I could ask the president of America the secret of his success.
If the world were to end in five minutes, I *would* pray to God for mercy.
If I found a diamond on the street, I *would* search for the owner of it.
If a cat is fed, it *will* not kill rats.
In old age, if people had no fire, they *would* eat their meat raw.`
      ]
    }
  ]
};
