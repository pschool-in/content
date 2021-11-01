export default {
  id: 'Simile',
  label: 'Simile',
  pdf: '',
  list: [
    {
      label: 'Simile - Reading',
      type: 'passage',
      id: 'Simile-reading',
      data: {
        title: 'Simile',
        text: `A Simile is a term used to compare two different things and show a common quality between them. A Simile uses words like or as to draw a comparison. Similes are an important tool that makes the language more creative, descriptive and entertaining.
For example:
1. He is as busy as a bee. Here the sentence implies that the subject is working very hard.
2. She moved like a deer. Here the sentence implies that the subject has certain qualities of deer like moving/walking gracefully.

# Some more phrases that represent examples of similes are:
1. as bold as brass
2. as cute as a kitten
3. as thin as a rail
4. swims like a Dolphin
5. runs like the wind
6. climbs like a Monkey
7. sing like an angel
8. swim like a fish
9. shine like diamonds
10. as tough as old boots
11. as tall as Giraffe
12. as sweet as a pie
13. as sharp as a razor
14. as quick as lightning
15. as large as life`
      }
    },
    {
        label: 'Sentences with Simile',
        type: 'matchByDragDrop',
        id: 'drag-and-drop',
        commonData: {
          isPractice: false,
          title: 'Use each word to make a simile in each sentence given below',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          }
        },
        data: [
          `Shhh! You must be as *quiet* as a mouse! The baby is asleep. 
          This box is as *light* as a feather. I can carry it easily.
          His perfume smells as *sweet* as a rose.
          Your children were as *good* as gold. I loved babysitting them!
          A newborn baby is as *weak* as a kitten. He can't even hold his head up.`,
  
          `Suresh is a very polite student. He is as *sweet* as pie!
          The soldier was as *tough* as nails. He survived in the forest for days.
          Madhu is as *clever* as a fox. she is sly!
          My grandmother is as *old* as the hills. She is 97 now!
          Jaswanth's as *strong* as an ox. He moved the table all by himself.`,
  
          `Ram's as *blind* as a bat. He needs to get some glasses.
          Ramya is as *busy* as a bee. She works a lot.
          Varun is as *sick* as a dog. Poor guy! He caught the flu yesterday.
          Marry is as *happy* as a lark. She is finally getting her new car. 
          Sunny is as *free* as a bird. He can go wherever he wants.`
        ]
      },
      {
        type: 'selectWord',
        label: 'Pick Out (selection of simile)',
        id: 'select-word',
        commonData: {
          title: 'Read the sentence below and select the simile'
        },
        data: [
          `Last night I slept *like a baby*.
          My little sister eats *like a bird*.
          My Grandmother is *as wise as an owl*.
          She is *as white as a ghost*.
        Her brother is *as timid as a rabbit*.`,
  
          `They fought *like cats and dogs*.
          The dancer moved *like a gazelle*.
          Jessey could hear *like an owl*.
          They are *as different as day and night*.
          His mind is *as sharp as a Samurai's sword*.`,
  
          `The boy runs *like the wind*.
          Please do not cry *like a baby*.
          He is quick *as a cat*.
          He is *as smart as a fox*.
          Jatin is *as quiet as a mouse*.`,

          `My mother sings *like an angel*.
          You were *as brave as a lion*.
          Your house is *as clean as a whistle*.
          This dress is perfect because it fits *like a glove*.
          I am so thirsty that my throat is *as dry as the Sahara desert*.`,

          `The boy snarled *like a rabid dog*.
          She fluttered *like a hummingbird* around the house.
          My Hindi teacher is *sweet like sugar*.
          I hid under the bed *as flat as a pancake*.
          I went for a long walk and now I am *as hungry as a Wolf*.`
        ]
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        commonData: {
            title: 'Match each simile with its meaning.'
        },
       
        data: [
         `smart as a fox, to be very smart
         quick as a cat, to be very fast
         tough as nails, to be very strong
         cry like a baby, to cry a lot
         as clear as crystal, to be very clear`,
         
         `run like the wind, to run fast
         slither like a snake, to move quickly and fast
         drink like a fish, to drink a lot of water
         fight like a lion, to fight very hard
         hard as a rock, to be sturdy and strong`,
             ]
           },
           {
            label: 'Simile or Not a simile',
            id: 'classify-Sentence',
            type: 'classifySentence',
            commonData: {
                title: 'Identify whether the given sentence is a simile or not a simile',
                types: ['Simile', 'Not a simile']
              },
            data: [
               [
                 `My teacher roared like a lion in the misbehaving classroom.
                 The instructions were as clear as mud.
                 She swims like a fish.`,
        `You are are my sunshine.
        My life is an open book.`
               ],
               [
              `Her smile is as bright as the sun.
              The friends are like two peas in a pod.
              Her skin is soft like velvet.`,
        `Life is but a dream.
        My mom is a bear in the mornings.`
                  ]
               ]
            },
          ]
        };
      
