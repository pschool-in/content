export default {
  id: 'noun-1',
  label: 'Nouns-1',
  pdf: '',
  list: [
    {
      label: 'Nouns-1',
      type: 'passage',
      id: 'nouns-reading',
      data: {
        title: 'Naming words',
        text: `Words that are used as names of person, place, thing or animal are called naming words. Another name for naming words is nouns. Some examples of nouns are:
1. Richa lives with his parents.
2. The books are very helpful.
3. Agra is a beautiful city.
4. Lion is the king of the jungle.`
      }
    },
    {
      type: 'group',
      label: 'Drag and drop',
      id: 'classify-Nouns-not-Nouns',
      commonData: {
        title: 'Identify which of these words are nouns and which are not.',
        types: ['Nouns', 'Not Nouns']
      },
      data: [
        [`Book, Boy, City, House, Dog`, `Big, Little, Sleep, Eat, Pretty`],
        [`Sakshi, School, Cat, Pen`, `Small, Play, Dance, Run`],
        [`Nita, Delhi, Tiger, Ring`, `Walk, Talk, Speak, Teach`]
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
    *Lavina* brought *cake* to the *party*.`
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
