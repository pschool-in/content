export default {
  id: 'noun-1',
  label: 'Naming Word',
  pdf: '',
  list: [
    {
      label: 'Naming words',
      type: 'passage',
      id: 'naming-words-reading',
      data: {
        title: 'Naming words',
        text: [
          `Words that are used as names of person, place, thing, or animal are called naming words. Another name for naming words is nouns. Some examples of nouns are:`,
          {
            type: 'html',
            text: `<b>Richa</b> lives with her <b>parents</b>.<br>
The <b>books</b> are very helpful.<br>
<b>Agra</b> is a beautiful <b>city</b>.<br>
<b>Lion</b> is the king of the <b>jungle</b>.<br>`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Classify Naming word or Not',
      id: 'classify',
      lockAfter: 1,
      commonData: {
        title: 'Drop the words given at the bottom in the right boxes.',
        types: ['Naming word', 'Not a Naming word']
      },
      data: [
        [`Book, Boy, City, House, Dog`, `Big, Little, Sleep, Eat, Pretty`],
        [`Sakshi, School, Cat, Pen, Eraser`, `Small, Play, Dance, Run, Jump`],
        [`Nita, Delhi, Tiger, Ring, Phone`, `Walk, Talk, Speak, Teach, Repeat`],
        [`Dog, Cat, Puppy, Cow, Pig`, `Dance, Sing, Drink, Lie`],
        [`Kitten, Birds, Flowers, Fruits`, `Beautiful, Black, Slept, Sit`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Naming word',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Select the naming words in the below sentences.'
      },
      data: [
        `*Neha* likes grapes.
The *clown* gave a *balloon* to the *boy*.
The *pear* fell off the *tree*.
The *teacher* rings the *bell*.
*Monkeys* swing in *trees*.
The *cat* is purring.
The *bus* stops at the red *light*.
These *flowers* are beautiful.
We saw *tigers* at the *zoo*.
The *boy* kicked the *ball*.`,

        `Who likes *apples*?
The *rabbit* hopped across the *road*.
*Ice* floats on *water*.
We're having *soup* for *dinner*.
*Lavina* brought *cake* to the *party*.
An *apple* a day keeps the doctor away.
The *broom* is used to clean the house.
The *sand* is found on the *beach*.
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
      label: 'Same Basket',
      type: 'matchByDragDrop',
      id: 'same-basket',
      lockAfter: 1,
      commonData: {
        title:
          'Drag and drop words, so that nouns of the same group are together.',
        fontSize: '1.5rem',
        dashWidth: 70
      },
      data: [
        `cat, dog, *cow*
lion, tiger, *fox*
leaf, stem, *root*
cake, bun, *bread*
north, south, *east*`,

        `water, tea, *juice*
apple, cherry, *grapes*
crow, dove, *duck*
door, wall, *window*
sun, moon, *star*`,

        `ear, eye, *nose*
snake, rat, *ant*
whale, shark, *fish*
car, bus, *van*
carrot, tomato, *potato*`
      ]
    }
  ]
};
