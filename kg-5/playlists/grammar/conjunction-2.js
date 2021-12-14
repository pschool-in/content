export default {
  id: 'conjunction-2',
  label: 'Conjunction',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Conjunctions',
        text: [
          `A conjuction is a word that is used for joining other words, phrases or sentences.
# and, or, but
'and' means 'also', 'added to'
'or' means  'any one of the two'
'but' is used to say something opposite.`,
          {
            type: 'hilight',
            text: `I like coffee and tea.
I like to have coffee or tea.
I don't like coffee, but I like tea.`
          },
          `# So vs Because
'Because' is used to explain the reason for the first event.
'So' is used to explain the result of the first event.`,
          {
            type: 'hilight',
            text: `I cannot go out because it is raining.
It was raining so I got wet.`
          },
          {
            type: 'html',
            text: `More Examples:<br>
I am having dinner <b>and</b> watching TV.<br>
Rahul tried to study <b>but</b> fell asleep.<br>
I want to play <b>but</b> I need to study.<br>
We can watch a movie <b>or</b> go for lunch.<br>
I will complete my homework today <b>or</b> tomorrow.<br>
My mother is late <b>so</b> I'm waiting for her.<br>
We're going to the park in the evening, <b>so</b> I'll take a nap in the noon.`
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Classify',
      type: 'group',
      data: {
        title: 'Classify the given words as conjunction or not.',
        types: [
          {
            name: 'Conjunction',
            text: 'And, But, Or, So, Because'
          },
          {
            name: 'Not a Conjunction',
            text: 'Can, May, Shall, Will, Become'
          }
        ]
      }
    },
    {
      id: 'and-or-but',
      label: 'And, Or, But',
      type: 'fillup',
      data: {
        title: "Click on the blanks and pick the correct connecting word.",
        text: `I wanted to wash my shoes, *but* I forgot to do it.
I bought a sandwich *and* coffee for lunch.
Her name is Priya *or* Maya.
She travels abroad once *or* twice a year.
She has a lot of talent, *but* she is very lazy.
My mom is either in the kitchen *or* in the garden.
I spent an hour *or* two cleaning my room.
He switched off the light *and* went to bed.
He has a ball *but* not a bat.
Please bring a paper *and* a pencil.`,
        options: 'and, but, or'
      }
    },
   {
      id: 'so-because',
      label: 'So vs Because',
      type: 'fillup',
      commonData: {
        title: "Click on the blanks and fill it with the correct options.",
        options: 'so, because'
      },
      data: [
        `I cannot go out *because* it is raining.
He missed the bus *because* he came late.
Priya was sick *so* she consulted a doctor.
He came late *so* he missed the bus.
She had no money *so* she did not buy the book.
She did not buy the book *because* she had no money.
The cat was hungry *so* it ate a fish.
I was on leave *because* I had a headache.
He was afraid of the dog *so* he ran away.
She went home early *because* she had to attend a function.`,

        `The rat ran fast *because* a cat was chasing it.
He drank cold water *so* he got a cough.
She lost her purse *so* she is sad.
I was late *because* there was heavy traffic.
He lost the key *so* he couldn't open his room.
I worked hard *so* I got the promotion.
Tom left the class *because* he was sick.
The classroom was noisy *because* the teacher was away.
I missed the bus *so* I took a taxi.
He was angry *because* I made fun of him.`,

        `She didn't have breakfast, *so* she is feeling hungry.
His father is a rich man, *so* he can buy expensive dresses.
We didn't go to the party *because* they didn't invite us.
The weather is hot *so* the kids are swimming.
The door was open *so* I closed it.
We didn't swim *because* the water wasn't clean.
I didn't complete the homework *because* I forgot about it.
She doesn't like him *because* he isn't honest.
The water wasn't clean *so* we didn't swim.
My mom quit her job *so* she is looking for a new job.`
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill in the Blanks',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and fill it with the correct options.`
      },
      data: [
        `Pink *and (or, but)* yellow are my favorite colors.
I think there are two *or (and, so)* three pens.
Tie your laces *so (and, or)* you don't fall.
I like shoes *but (so, or)* my sister likes sandals.
He is 13 *and (so, or)* she is 15.
It's sunny, *but (or, so)* the weather is good.
My mom prefers Chinese *or (but, so)* Italian food.
The weather is not nice *so (and, but)* we'll stay at home.
Tina plays the piano *and (or, so)* is also good at sports.
I play *or (and, so)* go to my grandma's place on weekends.`,

        `My teacher is strict *but (and, or)* she teaches well.
I came first *so (and, or)* my parents are very happy.
Sania is tall *and (but, so)* Divya is tall too.
He is sick *but (so, and)* ready for the party.
He practices a lot *so (and, but)* he comes first.
I sleep *or (so, but)* play at noon.
Raj *and (or, but)* Rohan are playing.
Ravi is intelligent *but (so, or)* he doesn't have many friends.
Siya *or (but, so)* Sameer did this.
He was ill *so (but, and)* he did not go to school.`
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      commonData: {
        title: 'True or False: The below sentence has a connecting word.',
        types: ['True', 'False']
      },
      data: [
        [
          `We wake up early and see the sunrise.
I love school but I hate maths class.
I completed my homework so I went to play.
I can play or watch a movie.`,

          `I can go out. I can eat.
I like playing with my friends a lot.
My family eats dinner together.
Natasha is a good girl.`
        ],
        [
          `The teacher was absent so we got to play.
I like dancing but never have time for classes.
He said thank you and left.
He sings well so he participated in the competition.`,

          `Naman is talking on the phone.
The hotel has a good view.
We run in the park every day.
I take a nap every afternoon.`
        ],
        [
          `I ate but did not sleep after that.
I love ice cream but can't eat it in winter.
Do you like cricket or hockey?
He's late so he won't come.`,

          `I will go to my friend's house on Thursday.
I can eat 10 chocolates at a time.
My best friend's name is Rashi.
My parents like my friends.`
        ],
        [
          `I lost the key so my dad will pick me up.
Who's smarter, Priya or Raj?
My mom and dad are doctors.`,

          `Do you have friends?
We are going on a vacation in the summer.
My parents love me a lot.`
        ]
      ]
    },
    {
      label: 'Right Match',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Choose the puzzle piece that completes the sentence.',
        printTitle: 'Fill up with the right option.',
        fontSize: '1rem'
      },
      data: [
        `I like drawing, and painting, so painting
She is smart, but rude, so rude
I am late, so won't come, but won't come
We can eat, or drink, but drink
We can walk, or run, so run
I will listen, and write, but write
I like tea, and coffee, so coffee
He is poor, but honest, so honest
I came early, so I cleaned my desk, or I cleaned my desk
I love pizza, but not chips, so not chips`,

        `Mom is working, or cooking, so cooking
Ram, and Shaam, so Shaam
I read stories, and novels, but novels
She is tired, but her homework is left, so her homework is left
He goes for running, or cycling, but cycling
I woke up early, so helped my mom, but helped my mom
I will go to Delhi, or Mumbai, so Mumbai
Cats, and dogs are pets, or dogs are pets
I like cats, but he likes dogs, so he likes dogs
It is raining, so we are at home, but we are at home`
      ]
    }
  ]
};
