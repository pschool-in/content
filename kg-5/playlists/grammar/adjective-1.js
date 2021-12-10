export default {
  id: 'adjective-1',
  label: 'Adjectives-1.',
  pdf: '',
  list: [
    {
      label: 'Adjectives-1',
      type: 'passage',
      id: 'adjectives-1-reading',
      data: {
        title: 'Describing Words',
        text: [
          `Describing words tell us about the noun. It describes the quality of the naming words.
eg: `,
          {
            type: 'html',
            text: `<b>smart</b> teacher <br>
<b>big</b> house <br>
<b>green</b> parrot <br>
<b>pretty</b> girl <br>
<b>two</b> boys <br>
<b>thundering</b> clouds <br>
<b>soft</b> toy <br>
<b>loving</b> parents`
          }
        ]
      }
    },
    {
      id: 'find-word',
      type: 'sequence',
      label: 'Find the Word',
      commonData: {
        title: 'Identify these describing words.'
      },
      data: [
        `Big, Pretty, Small, Round, Sweet, Soft`,
        `Hard, Brave, Great, Good, Brown, Red`,
        `Smart, Two, Loving, Bad, Strong, Weak`
      ]
    },
    {
      type: 'group',
      label: 'Naming word vs Describing word',
      id: '100',
      commonData: {
        title:
          'Identify the adjectives from the group of words and add them into the appropriate box.',
        types: ['Describing Word', 'Naming Word']
      },
      data: [
        [
          `Blue, Big, Loud, Few, Sweet, Bitter`,
          `Bag, Flowers, Pens, Chocolate, Apple`
        ],
        [`Sixty, Short, Thin, Long, Black`, `Bottles, Boy, Scarf, Sheep, Book`],
        [
          `Deep, Heavy, Huge, Juicy, Beautiful`,
          `Sea, Box, House, Mangoes, Girl`
        ],
        [
          `Handsome, Brave, Clean, Sharp, Bright`,
          `Man, Soldier, Plates, Teeth, Sun`
        ],
        [`Cold, Tasty, Fast, Famous, Small`, `Winter, Pizza, Car, Museum, Hut`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the describing words',
      id: 'select-word',
      commonData: {
        title: 'Tap on the describing words in these sentences.'
      },
      data: [
        `The sky is *blue*.
The sun is *bright*.
The food is *good*.
Our dog is *happy*.
My friend is *kind*.
My mom is *beautiful*.
A ball is *round* in shape.
My friend has a *brown* muffler.
I have a *red* cap.
Aman is *confused* about Maths.`,

        `I read a story about an *ugly* witch.
A *fast* car always wins in races.
Coconut trees are *tall*.
A lion roars very *loudly*.
A goods train is very *long*.
A *poor* man was sitting on the roadside.
We had a *pleasant* weather.
A *small* rat lives in our house.
I have a *purple* dress.
The *hungry* baby was crying for his bottle.`
      ]
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs.'
      },

      data: [
        `Big, Elephant
Dark, Night
Small, Ant
Pleasant, Weather
Loud, Lion`,

        `Clean, Room
Smart, Student
Long, Train
Ugly, Pig
Round, Ball`,

        `Red, Colour
Two, Hands
Soft, Toy
Fast, Horse
Sweet, Dish`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-adjectives-1',
      type: 'mcq',
      commonData: {
        title: 'Choose the correct describing words.'
      },
      data: [
        {
          questions: [
            {
              qText: 'Neha likes______cars.',
              options: 'fast, the, all'
            },
            {
              qText: 'I can climb_______trees.',
              options: 'small, big, large'
            },
            {
              qText: 'My mom is a______lady.',
              options: 'pretty, bad, old'
            },
            {
              qText: 'The dog found a______stick.',
              options: 'long, smart, round'
            },
            {
              qText: 'Disha caught the______ball.',
              options: 'red, far, near'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'I love my______puppy.',
              options: 'little, bad, slow'
            },
            {
              qText: 'We went down the_______slide.',
              options: 'long, round, steep'
            },
            {
              qText: 'My little sister loves_______toys.',
              options: 'soft, sweet, fast'
            },
            {
              qText: 'The_______sun warms our house.',
              options: 'bright, dull, small'
            },
            {
              qText: 'That is an_______bug.',
              options: 'ugly, sweet, long'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Snowbell is a______cat.',
              options: 'nice, dull, long'
            },
            {
              qText: 'There are_________trees in the garden.',
              options: 'beautiful, ugly, bad'
            },
            {
              qText: 'My_______brother is in his room.',
              options: 'little, bad, smart'
            },
            {
              qText: 'The elephant has______ears.',
              options: 'big, small, little'
            },
            {
              qText: 'My______bicycle is purple.',
              options: 'new, big, small'
            }
          ]
        }
      ]
    }
  ]
};
