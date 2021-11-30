export default {
    id: 'adjective-2',
    label: 'Adjective-2',
    pdf: '',
    list: [
      {
        label: 'Adjective',
        type: 'passage',
        id: 'adjective-2-reading',
        data: {
          title: 'Adjective',
text: `The words which describe a naming word (noun) or a pronoun are called adjectives. Adjectives usually tell us about what kind of, how many or what color etc, any person, a place, thing or animal is. Adjectives usually come before a noun and make them more specific. Adjectives also have their opposites like - "tall-short", "big-small", "black-white".
For example:
1. My study table is "small".
2. Manish is a "smart" boy.
3. My sister has "long" hair.
The words "small", "smart", "long" are called adjectives.`
  }
},
{
type: 'group',
label: 'Group the adjectives',
id: '100',
commonData: {
    title: 'Identify the adjectives from the group of words and add them into the appropriate box.',
    types: ['Adjectives', 'Non-adjectives']
    },
    data: [
          [
            `Blue, Big, Loud, Few, Sweet, Bitter`,
            `Bag, Flowers, Pens, Chocolate, Apple`
          ],
          [
            `Sixty, Short, Thin, Long, Black`,
            `Bottles, Boy, Scarf, Sheep, Book`
          ],
          [
            `Deep, Heavy, Huge, Juicy, Beautiful`,
            `Sea, Box, House, Mangoes, Girl`
          ],
          [
            `Handsome, Brave, Clean, Sharp, Bright`,
            `Man, Soldier, Plates, Teeth, Sun`
          ],
          [
            `Cold, Tasty, Fast, Famous, Small`,
            `Winter, Pizza, Car, Museum, Hut`
          ]
        ]
      },
      {
        id: '200',
        label: 'Match - Adjectives and Nouns',
        type: 'match',
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
Porcelain, cup
sour, grapes
brown, bear
red, rose`,
      ]
    },
{
  id: '300',
  label: 'Matching adjectives',
  type: 'match',
  commonData: {
      title: 'Match the adjectives with their corresponding opposites'
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
polite, rude`
        ]
      },
  {
  id: '400',
  label: 'Choose the adjective',
  type: 'fillup',
  commonData: {
    title: `Fill in the blanks with the appropriate adjective.`
  },
  data: [
`The elephant is a *large (small)* animal. 
The peacock is a *beautiful (ugly)* bird.
The rat is a *small (big)* animal.
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
Meera eats *chocolate (clever)* biscuits.
The chocolate cake was *tasty (wide)*.
My pillow is *soft (tall)*.
We wear *cotton (warm)* clothes in summer.
Wolf is a *dangerous (pretty)* animal.
These bananas are *sweet (sour)*.`
    ]
  },
{
type: 'selectWord',
label: 'Identify the adjectives',
id: '500',
commonData: {
    title: 'Spot the adjectives in the following sentences.',
    multiSelect: true
  },
data: [
`One *rainy* day, my *little* cat jumped and sat on the *black* sofa and played with his *new* toy. 
My *younger* brother was watching it play and he was *happy*. 
Soon, my *playful* cat yawned. He was *tired*. I picked him up and put him on a *soft* bed and he slept.`,

`Sita and Meera are twins. Preethi and Swapna live next door. Meera's mom packed some *tasty* snacks and water in a *big* basket. 
The *four* friends walk to the nearby woods for a picnic. They spot an *old* tree. 
Sita spreads the *new* mat under the tree and they all have their snacks. 
Swapna sits on a *small* bench and watches the squirrels running up and down.`
    ]
},
  {
    label: 'Complete the story',
    type: 'matchByDragDrop',
    id: '600',
    data: {
      isPractice: false,
      title: 'Complete the story by filling the blanks with suitable adjectives.',
      styles: {
        fontSize: '1rem',
        dashWidth: 70
      },
      text: `Sita was a *young* girl. She lived in a *small* village in karnataka. 
One day, on a *cloudy* morning, she went for a walk into the nearby fields.
She was wearing a *white* frock and a red ribbon. After sometime, she came across a hut. 
It was a *small* hut but was *warm* inside. Sita was feeling *tired*. 
So, she went inside the hut and slept on the cot.
Soon a *loud* bang on the door woke her up!`
    }
  },
  {
  label: 'Adjective - Opposite',
  type: 'matchByDragDrop',
  id: '700',
  commonData: {
    isPractice: false,
    title: 'Fill in the blanks with the adjectives that are opposite in the meaning to those who are put in quotation marks.',
    styles: {
      fontSize: '1rem',
      dashWidth: 80
    }
  },
  data: [
`The rat is "small" but the dog is *big*.
The coconut trees are "tall" but apple trees are *short*.
The ladybug is "beautiful" but the cockroach is *ugly*.
Coffee is "hot" but ice-cream is *cold*.
The hair is "black" but the teeth are *white*.`,

`The rabbit is "fast" but tortoise is *slow*.
Summer is "hot" but winter is *cold*.
The school bag is "heavy" but the lunch bag is *light*.
Saritha's car is "old" but the car tires are *new*.
The bed is "hard" but the pillows are *soft*.`,

`The bicycle is "cheap" but the car is *expensive*.
Meera's dad is "tall" but her uncle is *short*.
Sunflower is "big" but rose is *small*.
Cooking is "hard" but eating is *easy*.
Sita's brother is "strong" but her sister is *weak*.`
          ]
        }
      ]
  };
