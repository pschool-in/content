export default {
  id: 'nouns-1',
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
          [
            `Book, Boy, City, House, Dog`,
            `Big, Little, Sleep, Eat, Pretty`
          ],
          [
            `Sakshi, School, Cat, Pen`,
            `Small, Play, Dance, Run`
          ],
          [
            'Nita, Delhi, Tiger, Ring',
            'Walk, Talk, Speak, Teach'
          ]
        ]
      },
      {
        id: 'Jumbled-words',
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
            ]
          };
