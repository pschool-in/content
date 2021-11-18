export default {
    id: 'adjective-3',
    label: 'Adjective-3',
    pdf: '',
    list: [
      {
        label: 'Adjective-3',
        type: 'passage',
        id: 'adjective-3-reading',
        data: {
          title: 'Adjective-3',
    text: `The words that are used to describe a noun or a pronoun are called as adjectives. They give us more information about a noun or pronoun by describing it. They inform or tell us about how she or he looks, sounds, smells, feels or tastes. Names of the colors are also used as adjectives.
For example -
a. The dog is "black". (here dog is a noun and black is the adjective i.e., it is describing how the dog looks)
b. The sweater is "fluffy". (here the sweater is a noun and fluffy describes how the sweater feels like)
Adjectives are used to describe the qualities of things or people. They are called "adjectives of quality".
Example -
It is a "tall" building.
It was a "rainy" day.
Hyderabad is a "big" city.
Adjectives are used to determine or describe the quantity of the noun. Words like "much", "little", "some", "any", "whole" etc are used to describe the quantity of the noun.
For example -
1. Preethi ate the "whole" cake.
2. How "much" money do you have?
Adjectives are used to compare the qualities of two nouns and more than two nouns. These are known as "degrees of comparison".
When we compare qualities of two nouns we add "-er" + "than".
Example- Hari is "taller than" Krishna.
When we compare qualities of more than three nouns we add "-est" +"the".
Example - Hari is "the tallest" boy in the class.`
}
},
{
    type: 'group',
    label: 'Drag and Drop',
    id: 'classify',
    commonData: {
      title: 'Identify which one of the following is an adjective and which is not.',
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
      ]
    ]
  },
  {
    label: 'True or False',
    id: 'tf',
    type: 'classifySentence',
    data: {
      title: 'Identify whether the following statements are true or false.',
      types: [
        {
          name: 'True',
          text: `Describing word is called adjective.
          Adjectives describe nouns or pronouns.
          Names of the colors are used as adjectives.`
        },
        {
          name: 'False',
          text: `Naming words are called as adjectives.
          Adjectives describe action words.
          Adjectives are used in joining the words.`
        }
      ]
    }
  },
  {
    type: 'match',
    label: 'Match',
    id: 'match',
    commonData: {
      title: 'Match the most appropriate adjectives with their corresponding naming words.'
    },
    data: [
      `Cheerful, boy
      Tall, building
      Sweet, mangoes
      Colorful, umbrella
      Black, dog
      Pretty, women`,

`New, dress
Clever, girl
Yellow, flowers
Brick, house
Green, parrot
Crunchy, chips`,

`Black, board
Tall, tree
Narrow, road
Pretty, girl
Colorful, kite
Strong, bull`,

`Blue, sky
Big, room
Soft, carpet
Thorny, bush
Brown, bear
Wild, dog`,
]
  },
  {
    label: 'Drag and drop',
    type: 'matchByDragDrop',
    id: 'drag-and-drop-1',
    commonData: {
      isPractice: false,
      title: 'Drag and drop the appropriate adjective to complete the sentence.',
      styles: {
        fontSize: '1rem',
        dashWidth: 80
      }
    },
    data: [
      `He is a *short* boy.
      She wore a *beautiful* dress.
      She bought a *big* kite.
      I saw a *green* parrot in the zoo.
      There is a *black* board in my classroom.
      There is a *tall* mango tree in my garden.`,

      `She is an *intelligent* student in the class.
      I bought an *orange* chair from the market.
      We live in a *big* city.
      Ram is a *funny* guy.
      She has a *black* cat.
      My mother has a *curly* hair.`,

      `The dress is *pretty*.
      The day is *bright*.
      Mango is a *sweet* fruit.
      Sita is an *honest* girl.
      Our teacher is very *kind*.`
    ]
  },
  {
    id: 'fill-up',
    label: 'Fill in the blanks',
    type: 'fillup',
    commonData: {
      title: `Select the correct word to complete the sentence.`
    },
    data: [
`Manisha is wearing a *beautiful (tall)* dress.
She loves to eat *fresh (slim)* apples.
Rahul has *curly (deep)* hair.
A ball is *round (curly)* in shape.
Birds have *beautiful (high)* feathers.`,

`Harish saw a *funny (clumsy)* clown.
Jasmines have *white (black)* petals.
The Earth is *round (oval)*.
Grandma gave me a *sweet (sour)* chocolate.
The book is very *colorful (ill)*.`,

`A car has *four (three)* wheels.
Coffee is hot but ice is *cold ( black)*.
I like to sleep on a *soft (hard)* bed.
The Indian team was *happy (sad)* when they won the match.
I saw some *black (green)* clouds.`
    ]
  },
  {
    label: 'Fill-Up',
    type: 'matchByDragDrop',
    id: 'drag-and-drop-2',
    commonData: {
      isPractice: false,
      title: 'Drag and drop the appropriate adjective in the sentence.',
      styles: {
        fontSize: '1rem',
        dashWidth: 80
      }
    },
    data: [
      `The lion is a *big* animal.
      The Rhinoceros is *bigger* than lion.
      The elephant is the *biggest* of three animals.`,

      `Suhani is a *clever* girl.
      Geeta is *cleverer* than Suhani. 
      Sita is the *cleverest* of all three.`,
      
      `Krishna is a *tall* boy.
      Hari is *taller* than Krishna.
      Mahesh is the *tallest* boy in the class.`,

      `Teju is an *active* girl.
      Laukya is *more active* than Teju.
      Padma is the *most active* girl among three.`
    ]
  },
  {
    label: 'Identify-1',
    type: 'selectWord',
    id: 'select-word-1',
    data: {
      title: `Select the adjective of quantity in the sentence.`,
      text: `There are *five* pencils in my box.
      I drank *some* milk.
      He ate only *half* of his breakfast.
      Do you have *any* money?
      I read the *whole* book.`
    }
  },
  {
    type: 'selectWord',
    label: 'Identify-2',
    id: 'select-word-2',
    commonData: {
      title: 'Select the adjective in the sentence.'
    },
    data: [
      `The girl was very *smart*.
      This is a *beautiful* garden.
      Siri is a *noisy* girl.
      Rohan lives in a *big* city.
      These are the *fresh* fruits.`,

      `Neeta has *long* hair.
      This is a *funny* movie.
      This is a *huge* snake.
      I have a pair of *yellow* shoes.
      We live in a *small* village.`
    ]
  }
 ]
};
