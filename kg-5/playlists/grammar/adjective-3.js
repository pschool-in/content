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
    text: `Describing words are called adjectives. In general, adjectives usually give us more information about a noun or pronoun by describing it or providing more information about it. They are also called "descriptive adjectives". They inform or tell us about how she or he looks, sounds, smells, feels or tastes.
For example - a. The dog is "black". (here dog is a naming word or noun and black is the adjective i.e., it is describing how the dog looks) b. The sweater is "fluffy". (here the sweater is a naming word and fluffy describes how the sweater feels like)
Similarly, names of the colors are used as adjectives.
Adjectives are also used to describe the qualities of two things or people. They are called "adjectives of quality".

Example -
It is a "tall" building.
It was a "rainy" day.
Hyderabad is a "big" city.

Adjectives of quantity determine or describe how much of the noun is being specified in the sentence.
Words like "much", "little", "some", "any", "whole" etc are used to describe the quantity.

For example -
1. Preethi ate the "whole" cake.
2. How "much" money do you have?

Adjectives are also used to compare the qualities of two nouns and more than two nouns. These are known as "degrees of comparison".
When we compare qualities of two nouns we add "-er" + "than". 

Example - Hari is "taller than" Krishna.

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
        `Park, Bread, Pencil, Rose, Board, peacock`
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
      title: 'Match the following adjectives with their corresponding naming words.'
    },
    data: [
      `Cheerful, boy
      Tall, building
      Sweet, mangoes
      Colorful, umbrella`,

`New, dress
Clever, girl
Yellow, flowers
Big, house`
    ]
  },
  {
    label: 'Pick-out',
    type: 'matchByDragDrop',
    id: 'drag-and-drop',
    commonData: {
      isPractice: false,
      title: 'Drag and drop the correct adjective to complete the sentence.',
      styles: {
        fontSize: '1rem',
        dashWidth: 80
      }
    },
    data: [
      `A *fat* cow.
A *red* apple.
A *colorful* kite.
A *green* parrot.
A *black* board.
A *tall* tree.`,

      `An *intelligent* person.
An *orange* chair.
A *wide* road.
A *soft* carpet.
She is *pretty*.
A *big* basket.`,

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
She loves to eat *sweet (slim)* apples.
Rahul has *curly (deep)* hair.
A ball is *round (curly)* in shape.
Birds have *little (high)* feathers.`,

`Harish saw a *funny (clumsy)* clown.
Jasmines have *white (black)* petals.
The Earth is *round (oval)*.
Grandma gave me a *sweet (sour)* chocolate.
The book is very *colorful (ill)*.`,

`A car has *four (three)* wheels.
Coffee is hot but ice is *cold ( black)*.
I like to sleep on a *soft (hard)* bed.
The Indian team was *delighted (sad)* when they won the match.
I saw some *black (green)* clouds.`
    ]
  },
  {
    type: 'selectWord',
    label: 'Identify-1',
    id: 'select-word-1',
    commonData: {
      title: 'Select the correct comparative degree of adjective in the sentence.'
    },
    data: [
      `Giraffe is *bigger than* lion.
      Suhani is a *clever* girl.
      The Ganga is *longer than* Yamuna.
      Mahesh is *the tallest* boy in the class.
      Mount Everest in *the highest* peak in the world.`,

      `Mangoes are *sweeter than* oranges.
      Gold is *costlier than* silver.
      My house is *bigger than* yours.
      This is *the biggest* park in the city.
      May is *hotter than* March.`
    ]
  },
  {
    label: 'Identify-2',
    type: 'selectWord',
    id: 'select-word-2',
    data: {
      title: `Select the correct adjective of quantity in the sentence.`,
      text: `There are *five* pencils in my box.
      I drank *some* milk.
      He ate only *half* of his breakfast.
      Do you have *any* money?
      I read the *whole* book.`
    }
  },
  {
    label: 'Identify-3',
    type: 'selectWord',
    id: 'select-word-3',
    data: {
      title: `Select the descriptive adjective in the sentence.`,
      text: `The girl was very *smart*.
      This is a *beautiful* garden.
      Siri is a *noisy* girl.
      Rohan lives in a *big* city.
      These are the *fresh* fruits.`
      }
    }
  ]
};
