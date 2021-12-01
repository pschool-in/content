export default {
  id: 'conjunction-2',
  label: 'Conjunction - 2',
  pdf: '',
  list: [
    {
      label: 'Conjunction - 2',
      type: 'passage',
      id: 'conjunction-2-reading',
      data: {
        title: 'Conjunctions',
        text: `The word that joins two or more words or sentences is called a conjunction. In simple words, conjunctions are joining words. The most common conjunctions are 'and', 'but', 'so' and 'or'.
For example:
'The bird can fly.' 'The bird can sing.'
These two sentences can be joined together with the help of conjunction. We can write it as;
'The bird can fly and sing.'
Some more examples are;
1. The monkey can walk and climb.
2. I am eating and watching TV.
3. Rahul tried to study but fell asleep.
4. I want to play but I need to study.
5. We can watch a movie or go for lunch.
6. I will complete my HW today or tomorrow.
7. My mother is late so I'm waiting for her.
8. We're going to the park in the evening, so I'll take a nap in the noon.`
      }
    },
    {
      label: 'Identify',
      id: '100',
      type: 'classifySentence',
      commonData: {
        title: 'Identify if the below sentences have conjunction or not.',
        types: ['Yes', 'No']
      },
      data: [
        [
          `We wake up early and see the sunrise.
    I love school but I hate maths class.
    I completed my homework so I went to play.`,

          `I can play. I can eat.
    I like playing with my friends a lot.
    My family eats dinner together.`
        ],
        [
          `I can play or watch a movie.
    The teacher was absent so we got to play.
    I like dancing but never have time for classes.`,

          `Natasha is a good girl.
    Naman is talking on the phone.
    The hotel has a good view.`
        ],
        [
          `He said thankyou and left.
    He sings well so he participated in the competition.
    I ate but did not sleep after that.`,

          `We run in the park everyday.
    I take a nap every afternoon.
    I will go to my friend's house on Thursday.`
        ],
        [
          `I love ice cream but can't eat it in winters.
    Do you like cricket or hockey?
    He's late so he won't come.`,

          `I can eat 10 chocolates at a time.
    My best friend's name is Rashi.
    My parents like my friends.`
        ],
        [
          `I lost the key so my dad will pick me up.
    Who's smarter, Priya or Raj?
    My mom and dad are doctors.`,

          `Do you have friends?
    We are going for a vacation in summer.
    My parents love me a lot.`
        ]
      ]
    },
{
  id: '200',
  label: 'Drag and Drop',
  type: 'group',
  data: {
    title: 'Identify if these words are conjunctions or not.',
    types: [
      {
        name: 'Yes',
        text: 'And, But, Or, So'
      },
      {
        name: 'No',
        text: 'Can, May, Shall, Will'
      }
    ]
  }
},
    {
      id: '300',
      label: 'Fill up',
      type: 'fillup',
      commonData: {
        title: `Tap on each blank for options.`
      },
      data: [
        `Pink *and (or, but)* yellow are colors.
I think there are two *or (and, so)* three pens.
Tie your laces *so (and, or)* you don't fall.
I like shoes *but (so, or)* my sister likes sandals.`,

        `He is 13 *and (so, or)* she is 15.
It's sunny, *but (or, so)* the weather is good.
My mom prefers Chinese *or (but, so)* Italian food.
The weather is not nice *so (and, but)* we'll stay at home.`,

        `Tina plays the paino *and (or, so)* is also good at sports.
I play *or (and, so)* go to my grandma's place on weekends.
My teacher is strict *but (and, or)* she teaches well.
I came first *so (and, or)* my parents are very happy.`,

        `Sania is tall *and (but, so)* Divya is tall too.
He is sick *but (so,and)* ready for the party.
He practice a lot *so (and, but)* he comes first.
I sleep *or (so, but)* play at noon.`,

        `Raj *and (or, but)* Rohan are playing.
Ravi is intelligent *but (so, or)* he doesn't have much friends.
Siya *or (but, so)* Sameer did this.
He was ill *so (but, and)* he did not go to school.`
      ]
    },
    {
      label: 'Right match',
      id: '400',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Choose the puzzle piece with the correct conjunction.',
        printTitle: 'Fill up with the right option.',
        fontSize: '1rem'
      },
      data: [
        `I like drawing, and painting, so painting
She is smart, but rude, so rude
I am late, so won't come, but won't come
We can eat, or drink, but drink`,

        `We can walk, or run, so run
I will listen, and write, but write
I like tea, and coffee, so coffee
He is poor, but honest, so honest`,

        `I came early, so cleaned my desk, or cleaned my desk
I love pizza, but not chips, so not chips
Mom is working, or cooking, so cooking
Ram, and Shaam, so Shaam`,

        `I read stories, and novels, but novels
She is tired, but her homework is left, so her homework is left
He goes for running, or cycling, but cycling
I woke up early, so helped my mom, but helped my mom`,

        `I wil go to Delhi, or Mumbai, so Mumbai
Cats, and dogs are pets, or dogs are pets
I like cats, but he likes dogs, so he likes dogs
It is raining, so we are at home, but we are at home`
      ]
    },
    {
      id: '500',
      label: 'Complete the passage',
      type: 'fillup',
      commonData: {
        title: `Tap on each blank for options. Choose the correct conjunction.`
      },
      data: [
        `All of my friends are going to Richa's party. *But (So)* she has not invited me. *So (And)* we have decided that *neither (either)* me *nor (or)* my best friend will go. I bought a present for her, *but (or)* now I'll give it to my best friend.`,

        `Everyone loves Sundays. That is *because (so)* it’s a holiday. *But (Or)* for me, Sunday is the most boring day of the week. This is *because (either)* my parents take me to the farm every weekend. It was fun at first. *But (And)* now I don't like going there. This is *because (so)* all my friends are in the city.`,

        `I know that we should save water. *But (And)* I forget to turn off the tap. *So (Or)* I wrote a note *and (or)* stick it on the wall near the tap. Now I'll always remember to turn it off.`,

        `Neena loves chocolate. *But (So)* her mother doesn't let her eat much. She likes it because it's sweet *and (so)* tasty. Her mother hides the chocolate *or (so)* gives it to her friends. Her friends share the chocolate with her. *So (Or)* she gets to eat it.`,

        `Teacher asked us to be quiet *and (or)* study. *But (So)* the naughty boy in the class did not listen. He *and (or)* his friends went to the ground. *So (And)* the teacher got angry *and (but)* punished them.`
      ]
    }
  ]
};
