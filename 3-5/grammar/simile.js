export default {
  id: 'simile',
  label: 'Simile',
  pdf: '',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'simile-reading',
      data: {
        title: 'Simile',
        text: `A Simile is a term used to compare two different things and show a common quality between them. A simile uses the words "like" or "as" to draw a comparison. 
For example: 
1. He is "as busy as a bee". Here the sentence implies that the subject is working very hard. 
2. She moved "like a deer". Here the sentence implies that the subject has certain qualities of deer-like moving/walking gracefully.        
Some more phrases that represent examples of similes are:
1. as bold as brass
2. as cute as a kitten
3. as thin as a rail
4. swims like a Dolphin
5. runs like the wind
6. climbs like a Monkey
7. sing like an angel
8. swims like a fish
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
      lockAfter: 1,
      commonData: {
        fontSize: '1rem'
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
      label: 'Find Me',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Click on the words that form the simile.',
        printTitle: 'Read the below text and underline the simile',
        multiSelect: true
      },
      data: [
        `Last night I *slept* *like* *a* *baby*.
My little sister *eats* *like* *a* *bird*.
My grandmother is *as* *wise* *as* *an* *owl*.
She is *as* *white* *as* *a* *ghost*.
Her brother is *as* *timid* *as* *a* *rabbit*.
My mother is *as* *brave* *as* *a* *lion*.
Today's exam was *as* *easy* *as* *ABC*.
His eyes were *as* *dry* *as* *dust*.
Mihira's teeth are *as* *white* *as* *pearls*.
My friend is *as* *smart* *as* *a* *fox*.`,

        `They fought *like* *cats* *and* *dogs*.
The dancer moved *like* *a* *gazelle*.
Jessey could *hear* *like* *an* *owl*.
They are *as* *different* *as* *day* *and* *night*.
His mind is *as* *sharp* *as* *a* *Samurai's* *sword*.
My classmates *fight* *like* *wild* *beasts*.
Sangeeta can *jump* *like* *a* *gazelle*.
The instructions given by my teacher were *as* *clear* *as* *mud*.
Her clothes *smell* *like* *a* *rose*.
The grass in the garden *grows* *like* *a* *weed*.`,

        `The boy *runs* *like* *the* *wind*.
Please do not *cry* *like* *a* *baby*.
He is quick *as* *a* *cat*.
He is *as* *smart* *as* *a* *fox*.
Jatin is *as* *quiet* *as* *a* *mouse*.
The river flows *like* *a* *stream* *of* *glass*.
Her words are *sweet* *like* *sugar*.
My sports teacher is *as* *tall* *as* a *giraffe*.
The road was *as* *slippery* *as* *an* *eel*.
The pizza base was *as* *stiff* *as* *a* *board*.`,

        `My mother sings *like* *an* *angel*.
You were *as* *brave* *as* *a* *lion*.
Your house is *as* *clean* *as* *a* *whistle*.
This dress is perfect because it fits *like* *a* *glove*.
I am so thirsty that my throat is *as* *dry* *as* *the* *Sahara* *desert*.
Her dress was *as* *white* *as* *snow*.
My kitchen sink leaked *like* *a* *sieve*.
Classical music is *as* *soothing* *as* *rain*.
My little puppy is *as* *light* *as* *a* *feather*.
My schoolbag is *as* *heavy* *as* *a* *bag* *of* *bricks*.`,

        `The boy snarled *like* *a* *rabid* *dog*.
She fluttered *like* *a* *hummingbird* around the house.
My Hindi teacher is *sweet* *like* *sugar*.
I hid under the bed *as* *flat* *as* *a* *pancake*.
I went for a long walk and now I am *as* *hungry* *as* *a* *wolf*.
The rain was *like* *a* *piercing* *arrow*.
Meera puffed up *like* *a* *pufferfish* after a fight.
The water in the lake was *as* *clear* *as* *crystal*.
My karate master is *as* *strong* *as* *an* *ox*.
The light in my room was *as* *bright* *as* *the* *sun*.`
      ]
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the related words that form a simile'
      },
      data: [
        `as smart,  as a fox
as quick, as a cat
as tough, as nails
cry like, a baby
as clear,  as crystal`,

        `run, like the wind
slither, like a snake
drink, like a fish
fight, like a lion
hard, as a rock`
      ]
    },
    {
      label: 'Has a Simile?',
      id: 'classify-sentence',
      type: 'classifySentence',
      commonData: {
        title: 'Classify whether the given sentence has a simile or not.',
        types: ['Simile', 'Not a simile']
      },
      data: [
        [
          `My teacher roared like a lion in the misbehaving classroom.
The instructions were as clear as mud.
She swims like a fish.`,
          `You are my sunshine.
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
    }
  ]
};
