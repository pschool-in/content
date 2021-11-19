export default {
    id: 'adverb-5',
    label: 'Adverb-5',
    pdf: '',
    list: [
      {
        label: 'Adverb of Frequency',
        type: 'passage',
        id: 'adverb-of-frequency',
        data: {
          title: 'Adverb of Frequency',
          text: `Adverb of frequency tells us;
1. how many times an action has occurred in the past.
2. how many times does it occur in the present.
3. how many times will it occur in the future.

Examples are sometimes, usually, always, generally, seldom, rarely, often, ever, weekly, monthly, etc.
1. Rashi never plays cricket.
2. Amir visits his grandparents weekly.
3. She sometimes teaches younger kids.
4. We should brush our teeth twice.`
}
      },
      {
        type: 'selectWord',
        label: 'Select the Adverb',
        id: 'select-word',
        commonData: {
        title: 'Tap on the adverb of frequency in the below sentences.'
            },
            data: [
`*Sometimes*, the school take the kids to the zoo.
Ayushi is *usually* very rude.
My grandma *often* goes for a walk in the morning.
I *never* go outside in the afternoon.
He *often* listens to the radio.`,

`He sleeps during the classes *frequently*.
The newspaper is *usually* delivered in the morning.
Does she *often* help her mother?
Sheena *rarely* studies for exams.
Aman is *usually* in bed by 10 o'clock.`,

`Neena is *always* complaining.
Molly's sister *occasionally* comes to the park.
He is *often* late.
My little sister is *always* hungry.
Sheenu *usually* helps her mother in the kitchen.`
            ]
          },
       {
      type: 'group',
      label: 'Drag and Drop',
      id: 'drag-and-drop',
      commonData: {
        title: 'Identify if these words are adverbs of frequency or not.',
        types: ['Yes', 'No']
      },
      data: [
        [
          `Rarely, Weekly, Usually, Monthly`,
          `Quickly, Slowly, Peacefully, Godly`
        ],
        [
          `Thrice, Sometimes, Ever, Always`,
          `Smart, Running, Fasting, Grains`
        ],
        [
          `Twice, Never, Seldom, Often`,
          `Noisily, Safely, Intelligent, Great`
        ]
      ]
    }
    ]
  }; 
