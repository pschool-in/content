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
Sheenu *usually* helps her mother in the kitchen.`,

`The teacher checks our homework *weekly*.
He is *always* late.
*Sometimes* they come and eat with us.
I play cricket *occasionally*.
We *rarely* watch movies.`,

`We have our exams *twice* a year.
I eat meals *three times* a day.
I spoke to him *once*.
I drink a glass of water *every* hour.
I take a bath *daily*.`,
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
        ],
        [
          `Ocassionally, Normally, Now, Often`,
          `Intelligent, Slow, Sleep, Jump`
        ],
        [
          `Soon, Today, Generally, Ever`,
          `Walk, Talk, Dance, Speak`
        ]
      ]
    },
    {
      id: 'fill-up',
      label: 'Identify',
      type: 'fillup',
      commonData: {
        title: `Choose the correct adverb of frequency. Tap on each blank to view options.`
      },
      data: [
`We go on a vacation *annually (annualy, once)*.
He is *often (offten, twice)* late for class.
We should brush our teeth *twice (two, twise)* in a day.
I *usually (usual, general)* wake up late on holidays.
Ram is *never (not, nor)* late for work.
I *often (more, usual)* travel on weekends.
When do you *uaually (almost, utmost)* study?
My dad is late, *yet (but, for)* he'll go to the office.
*Yesterday (Yesternight, Usually)* we had sports day at school.
I will do my HW *tonight (some night, in day)*.`,

`My mom *always (anyways, alway)* gives me lunch.
I am *constantly (constant, most)* thinking about it.
I go to school *daily (usual, frequent)*.
He *generally (general, usual)* eats biscuits with tea.
I'll talk to you *later (late, lately)*.
Come here *now (today, you)*.
I *rarely (lowly, less)* speak to him.
My dad will be home *soon (fast, quick)*.
My aunt is coming to my home *today (to day, this day)*.
*Sometimes (Sometime, Usualy)* we stop to buy candies on our way home.`
      ]
    }
  ]
}; 
