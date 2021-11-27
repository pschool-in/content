export default {
  id: 'adjective-3',
  label: 'Adjective-3',
  pdf: '',
  list: [
    {
      label: 'Adjective of Quality and Quantity',
      type: 'passage',
      id: 'adjective-3-reading',
      data: {
        title: 'Adjective of Quality and Quantity',
        text: [
          `The words that are used to describe a noun or a pronoun are called as adjectives. They give us more information about a noun or pronoun by describing it. They inform or tell us about how she or he looks, sounds, smells, feels or tastes. Names of the colors are also used as adjectives.`,
          {
            type: 'html',
            text: `eg: <br>
             The dog is <b>black</b>. (here dog is a noun and black is the adjective i.e., it is describing how the dog looks)<br>
             The sweater is <b>fluffy</b>. (here the sweater is a noun and fluffy describes how the sweater feels like)`
          },
          `# Adjective of quality`,
          {
            type: 'html',
            text: `It is a type of adjective used to describe the qualities of things or people. Eg: <br>
            It is a <b>tall</b> building.<br>
            It was a <b>rainy</b> day.<br>
            Hyderabad is a <b>big</b> city. `
          },
          '# Adjective of quantity',
          {
            type: 'html',
            text: `Words like <i>much</i>, <i>little</i>, <i>some</i>, <i>any</i>, <i>whole</i> are used to describe the quantity of the noun. eg: <br>
            Preethi ate the <b>whole</b> cake.
            How <b>much</b> money do you have?`
          },
          `# degrees of comparison`,
          `Adjectives are used to compare the qualities of two nouns and more than two nouns.
When we compare qualities of two nouns we add "-er" + "than".`,
          {
            type: 'html',
            text: `Hari is <b>taller than</b> Krishna.`
          },
          `When we compare qualities of more than three nouns we add "-est" +"the".`,
          {
            type: 'html',
            text: `Hari is <b>the tallest</b> boy in the class.`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: 'classify',
      commonData: {
        title:
          'Identify which one of the following is an adjective and which is not.',
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
        [`Hungry, Good, Funny, Gentle, Happy`, `Girl, Cat, Dress, Soap, Forest`]
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
        title:
          'Match the most appropriate adjectives with their corresponding naming words.'
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
Wild, dog`
      ]
    },
    {
      label: 'Drag and drop',
      type: 'matchByDragDrop',
      id: 'drag-and-drop-1',
      commonData: {
        isPractice: false,
        title:
          'Drag and drop the appropriate adjective to complete the sentence.',
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
Birds have *beautiful (high)* feathers.
The blanket is *soft (round)*.
There was very *little (huge)* water in the bottle.
I wore a *red (short)* saree for my friend's wedding.
Ravi is an *obedient (white)* student.
My dad is wearing a *black (square)* coat.`,

        `Harish saw a *funny (clumsy)* clown.
Jasmines have *white (black)* petals.
The Earth is *round (oval)*.
Grandma gave me a *sweet (sour)* chocolate.
The book is very *colorful (ill)*.
Priya loves to eat *sweet (grey)* mangoes.
Dog is an *honest (sour)* animal.
Neeta is a *clever (much)* girl.
Paddy fields are very *green (blue)*.
The *black (blue)* soil is rich in nutrients.`,

        `A car has *four (three)* wheels.
Coffee is hot but ice is *cold ( black)*.
I like to sleep on a *soft (hard)* bed.
The Indian team was *happy (sad)* when they won the match.
I saw some *black (green)* clouds.
An *angry (black)* tiger jumped out of the cage.
My mom cooks *tasty (beautiful)* payasam.
A squirrel is a *small (huge)* animal.
The earth is *round(sqaure)* in shape.
My cousin's house is very *big (fat)*.`
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
      label: 'Identify-Adjective of Quantity',
      type: 'selectWord',
      id: 'select-word-1',
      data: {
        title: `Select the adjective of quantity in the sentence.`,
        text: `Chandan gave *all* his pens to Manish.
      I drank *some* milk.
      He ate only *half* of his breakfast.
      Do you have *any* money?
      I read the *whole* book.
      *Many* students were present for the seminar today.
I took *some* notebooks from the school library.
I have finished *most* of my homework.
Mannu has *little* interest in singing.
My sister ate the *whole* banana.`
      }
    },
    {
      type: 'selectWord',
      label: 'Identify-Adjective',
      id: 'select-word-2',
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
I saw a *white* pigeon in my blacony.`,

        `Neeta has *long* hair.
      This is a *funny* movie.
      This is a *huge* snake.
      I have a pair of *yellow* shoes.
      We live in a *small* village.
      My father is a *tall* man.
My village has *narrow* roads.
These bananas are very *raw*.
My Grandfather sat on a *broken* chair.
I lost my *gold* bracelet.`
      ]
    }
  ]
};
