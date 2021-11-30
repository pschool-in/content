export default {
  id: 'noun-1',
  label: 'Noun-1',
  pdf: '',
  list: [
    {
      label: 'Naming words',
      type: 'passage',
      id: 'naming-words-reading',
      data: {
        title: 'Naming words',
        text: `Words that are used as names of person, place, thing or animal are called naming words. Another name for naming words is nouns. Some examples of nouns are:
1. Richa lives with her parents.
2. The books are very helpful.
3. Agra is a beautiful city.
4. Lion is the king of the jungle.`
      }
    },
    {
    type: 'group',
    label: 'Drag and drop',
    id: 'classify',
    commonData: {
      title: 'Identify which of these words are nouns and which are not.',
      types: ['Nouns', 'Not Nouns']
        },
        data: [
          [
            `Book, Boy, City, House, Dog`,
            `Big, Little, Sleep, Eat, Pretty`
          ],
          [
            `Sakshi, School, Cat, Pen, Eraser`,
            `Small, Play, Dance, Run, Jump`
          ],
          [
            `Nita, Delhi, Tiger, Ring, Phone`,
            `Walk, Talk, Speak, Teach, Repeat`
          ],
          [
            `Dog, Cat, Puppy, Cow, Pig`,
            `Dance, Sing, Drink, Lie`
          ],
          [
            `Kitten, Birds, Flowers, Fruits`,
            `Beautiful, Black, Slept, Sit`
          ]
        ]
      },
      {
        id: 'jumbled-words',
        type: 'sequence',
        label: 'Jumbled Words',
        commonData: {
            title: 'Identify these naming words.'
          },
        data: [
            'Dog, Cat, Child, Mother, Father, Doctor',
    'House, Room, Bed, Book, Pencil, Eraser',
    'Mobile, Boy, Laptop, Girl, Spoon, Bowl'
              ]
        },
        {
  type: 'selectWord',
  label: 'Select the noun',
  id: 'select-word',
  commonData: {
  title: 'Select the nouns in the below sentences.'
                },
                data: [
  `*Neha* likes grapes.
  The *clown* gave a *balloon* to the *boy*.
  The *pear* fell off the *tree*.
  The *teacher* rings the *bell*.
  *Monkeys* swing in *trees*.`,
    
    `The *cat* is purring.
    The *bus* stops at the red *light*.
    These *flowers* are beautiful.
    We saw *tigers* at the *zoo*.
    The *boy* kicked the *ball*.`,

    `Who likes *apples*?
    The *rabbit* hopped across the *road*.
    *Ice* floats on *water*.
    We’re having *soup* for *dinner*.
    *Lavina* brought *cake* to the *party*.`,

    `An *apple* a day keeps the doctor away.
    The *broom* is used to clean the house.
    The *sand* is found in the *beach*.
    My *dog* is very playful.
    The *airplane* flies in the sky.`,

    `I click very good *pictures*.
    *Books* are kept on the *table*.
    *Rani* wrote a *letter*.
    The *dog* barks at *strangers*.
    I love *balloons*.`
                ]
              },
{
  type: 'selectWord',
  label: 'Select the noun-2',
  id: 'multi-select-word',
  commonData: {
      title: 'Tap on all the nouns.',
      multiSelect: true
    },
  data: [
  `His name is *Varun*. He lives in *Delhi*. He went to see the *Red Fort* yesterday.
  I am a *student*. I go to *school* regularly. I have many *friends* there.
  My *dad* brings me a *gift* every month. I like *surprises*.
  I like *pizza*. But *mom* says that *market* food is unhealthy. So, she will make a *pizza* for me at *home.*
  *Sheena* is my *bestfriend.* We play, eat *lunch* and sit in the *class* together.
  I got a new *bicycle* on my birthday. I don't know how to ride. My *mom* will teach me in the *evening*.
  My *brother* is an *artist.* He works in *Mumbai.* He's planning to display his *drawings* at a *fare*.
  *Samir* is a naughty *boy.* He never listens to *teachers.* The *principal* has called his *parents*.`
    ]
  },
  {
  id: '1635961075354',
  editable: true,
  type: 'wordsearch',
  label: 'WordSearch - nouns',
  data: {
    title: 'Find the given words from the table.',
    words: [
          {
            word: ['N', 'O', 'U', 'N', 'S'],
            marker: [3, 2, 7, 6]
          },
          {
            word: ['P', 'E', 'R', 'S', 'O', 'N'],
            marker: [1, 5, 6, 5]
          },
          {
            word: ['P', 'L', 'A', 'C', 'E'],
            marker: [1, 5, 5, 9]
          },
          {
            word: ['A', 'N', 'I', 'M', 'A', 'L'],
            marker: [6, 4, 6, 9]
          },
          {
            word: ['W', 'O', 'R', 'D', 'S'],
            marker: [9, 0, 9, 4]
          },
          {
            word: ['T', 'H', 'I', 'N', 'G'],
            marker: [3, 0, 7, 0]
          },
          {
            word: ['N', 'A', 'M', 'E', 'S'],
            marker: [0, 1, 4, 5]
          }
        ],
        table: [
          ['H', 'O', 'C', 'T', 'H', 'I', 'N', 'G', 'K', 'W'],
          ['N', 'O', 'P', 'S', 'M', 'O', 'V', 'P', 'W', 'O'],
          ['P', 'A', 'M', 'N', 'B', 'G', 'P', 'K', 'J', 'R'],
          ['T', 'M', 'M', 'N', 'O', 'F', 'C', 'D', 'X', 'D'],
          ['K', 'C', 'A', 'E', 'V', 'U', 'A', 'K', 'F', 'S'],
          ['U', 'P', 'E', 'R', 'S', 'O', 'N', 'K', 'B', 'J'],
          ['J', 'Q', 'L', 'D', 'U', 'M', 'I', 'S', 'L', 'H'],
          ['H', 'M', 'S', 'A', 'K', 'M', 'M', 'F', 'N', 'V'],
          ['R', 'L', 'I', 'E', 'C', 'C', 'A', 'E', 'R', 'B'],
          ['D', 'N', 'Q', 'J', 'U', 'E', 'L', 'V', 'K', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
