export default {
  id: 'adjective-2',
  label: 'Adjective',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Adjective',
        text: [
          `An adjective is a word that gives more meaning to a noun or pronoun.
Adjectives usually tell us about what kind of, how many, or what color.
Adjectives usually come before nouns and make them more specific.`,
          {
            type: 'html',
            text: `Eg:<br>
It is a <b>big</b> tree.<br>
Manish is a <b>smart</b> boy.<br>
My sister has <b>long</b> hair.<br><br>
The words <b>big</b>, <b>smart</b>, <b>long</b> are called adjectives.<br><br>
Sometimes, the adjective comes after the noun.<br>
Eg:<br>
The table is <b>small</b>.<br>
My friend's house is <b>big</b>.<br>
The food is <b>tasty</b>.
`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Adjective or Not',
      id: 'group',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words in the right boxes.',
        types: ['Adjective', 'Not an adjective']
      },
      data: [
        [
          `Beautiful, Tall, Black, Red, Happy, Fat`,
          `Park, Bread, Pencil, Rose, Board, Peacock`
        ],
        [
          `Angry, Bad, Blue, Clean, Dark, Easy`,
          `Egg, Shirt, Room, Chocolate, Tiger`
        ],
        [
          `Hungry, Good, Funny, Gentle, Happy`,
          `Girl, Cat, Dress, Soap, Forest`
        ],
        [
          `Interesting, Large, Healthy, Tasty, Lazy, Costly`,
          `Hospital, Book, Food, cookies, Dog, Coat`
        ],
        [
          `Attractive, Brave, Colorful, Fresh, Large`,
          `Car, Dress, Soldier, Fruits, Building`
        ]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Adjective',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Select the adjective in the sentence.'
      },
      data: [
        `The girl was very *smart*.
This is a *beautiful* garden.
Siri is a *noisy* girl.
Rohan lives in a *big* city.
These are the *fresh* fruits.
Hyderabad is a *beautiful* city.
Charminar is an *old* monument located in Hyderabad.
Reshma has a *pink* dress.
My mom has a *grey* handbag.
I saw a *white* pigeon on my balcony.`,

        `Neeta has *long* hair.
This is a *funny* movie.
This is a *huge* snake.
I have a pair of *yellow* shoes.
We live in a *small* village.
My father is a *tall* man.
My village has *narrow* roads.
These bananas are very *raw*.
My grandfather sat on a *broken* chair.
I lost my *gold* bracelet.`
      ]
    },
    {
      id: 'match',
      label: 'Match - Adjectives and Nouns',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the following adjectives with appropriate nouns.'
      },
      data: [
        `high, mountain
sunny, day
deep, river
hard, pillow
beautiful, girl
tasty, ice-cream`,

        `fast, car
large, Home
right, answer
chocolate, cake
cotton, shirt
fresh, grapes`,

        `furry, dog
cold, drink
plastic, bag
honest, man
windy, night
sharp, knife`,

        `easy, question
crowded, bus
colorful, belt
spicy, biryani
handsome, boy
steep, hill`,

        `leather, belt
naughty, kid
plastic, cup
sour, grapes
brown, bear
red, rose`
      ]
    },
    {
      id: 'match-opposites',
      label: 'Match Opposites',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the adjectives with their opposites.'
      },
      data: [
        `old, new
tall, short
big, small
early, late
fat, thin
far, near`,

        `clean, dirty
cheap, costly
hard, soft
happy, sad
rich, poor
beautiful, ugly`,

        `old, young
heavy, light
strong, weak
dry, wet
easy, difficult
long, short`,

        `good, bad
wide, narrow
first, last
noisy, quiet
deep, shallow
polite, rude`,

        `high, low
cold, hot
heavy, light
right, wrong
best, worst
interesting, boring`,

        `smooth, rough
ancient, modern
fresh, rotten
fast, slow
active, dull
thick, thin`
      ]
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title: `Fill in the blanks with the appropriate adjective.`
      },
      data: [
        `Elephant is a *large (small)* animal.
Peacock is a *beautiful (ugly)* bird.
Rat is a *small (big)* animal.
He is a *tall (wide)* man.
The sky is *blue(long)*.
She is wearing a *pink (tall)* shirt.
A spider has *eight (two)* legs.
My mom has *long (round)* hair.
A car has *four (three)* wheels.
The giraffe has a *long (short)* neck.`,

        `Honey is *sweet (sour)*.
My mom is making a *tasty (short)* milkshake.
We visited an *old (short)* palace.
I have a *black (round)* jacket.
Meera eats *chocolate (cold)* biscuits.
The chocolate cake was *tasty (wide)*.
My pillow is *soft (tall)*.
We wear *cotton (warm)* clothes in summer.
Wolf is a *dangerous (pretty)* animal.
These bananas are *sweet (sour)*.`
      ]
    },
    {
      label: 'Complete the story',
      type: 'matchByDragDrop',
      id: 'fill-up-story',
      lockAfter: 1,
      data: {
        title:
          'Complete the story by filling the blanks with suitable adjectives.',
        text: `Sita was a *young* girl. She lived in a *small* village in Karnataka. One day, on a *cloudy* morning, she went for a walk into the nearby fields. She was wearing a *white* frock and a red ribbon. After some time, she came across a hut. It was a small hut but was *warm* inside. Sita was feeling *tired*. So, she went inside the hut and slept on the cot. Soon a *loud* bang on the door woke her up!`
      }
    },
    {
      label: 'Adjective - Opposite',
      type: 'matchByDragDrop',
      id: 'fillup-opposites',
      lockAfter: 1,
      commonData: {
        title:
          'Fill in the blanks with the adjectives that are opposite in the meaning to those who are put in quotation marks.'
      },
      data: [
        `A rat is "small" but a dog is *big*.
The coconut trees are "tall" but the apple trees are *short*.
A ladybug is "beautiful" but a cockroach is *ugly*.
Coffee is "hot" but ice cream is *cold*.
Our hair is "black" but our teeth are *white*.`,

        `A rabbit is "fast" but a tortoise is *slow*.
Summer is "hot" but winter is *cold*.
The school bag is "heavy" but the lunch bag is *light*.
Saritha's car is "old" but the car tires are *new*.
The bed is "hard" but the pillows are *soft*.`,

        `The bicycle is "cheap" but the car is *expensive*.
Meera's dad is "tall" but her uncle is *short*.
A sunflower is "big" but a rose is *small*.
Cooking is "hard" but eating is *easy*.
Sita's brother is "strong" but her sister is *weak*.`
      ]
    }
  ]
};
