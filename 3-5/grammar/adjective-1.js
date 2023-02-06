export default {
  id: 'adjective-1',
  label: 'Describing Word',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Describing Words',
        text: [
          `Describing words tell us about the naming word.`,
          {
            type: 'html',
            text: `Eg:<br>
<b>cute</b> puppy <br>
<b>hot</b> coffee <br>
<b>green</b> parrot`
          },
          'It gives more meaning to the sentence by describing the noun.',
          {
            type: 'html',
            text: `Eg:<br>
Hari is a boy.<br>
Hari is a <b>good</b> boy.<br>
I saw a puppy.<br>
I saw a <b>cute</b> puppy.`
          }
        ]
      }
    },
    {
      id: 'find-word',
      type: 'sequence',
      label: 'Find the Word',
      lockAfter: 1,
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
      lockAfter: 1,
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
      label: 'Select the Describing Word',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Select the adjective in the below sentences.'
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
We had *pleasant* weather yesterday.
A *small* rat lives in our house.
I have a *purple* dress.
The *hungry* baby was crying for his bottle.`
      ]
    },
    {
      id: 'match',
      label: 'Match the Pairs',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the describing word with the related naming word.'
      },

      data: [
        `five, stars
big, tree
kind, girl
true, friend
white, milk`,

        `big, elephant
dark, night
small, ant
green, light
fresh, fruits`,

        `clean, room
smart, student
long, train
ugly, pig
round, ball`,

        `red, colour
two, hands
soft, toy
long, hair
sweet, mango`
      ]
    }
  ]
};
