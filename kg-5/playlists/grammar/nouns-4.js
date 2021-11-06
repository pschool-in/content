export default {
    id: 'nouns-4',
    label: 'Nouns-4',
    pdf: '',
    list: [
      {
        label: 'Nouns-4',
        type: 'passage',
        id: 'nouns-4-reading',
        data: {
          title: 'Concrete Nouns',
          text: `A concrete noun is any noun word that we can see, touch, smell, hear or feel. In other words, any noun that is not abstract is concrete. For example: What is that noise ? In this sentence, the word noise is a concrete noun because we can hear it.

Another example is; You need patience to read a book. In this sentence, patience is an abstract noun because it is not physically present. On the other hand, the book is a concrete noun because we can see, touch and feel it.

Some more examples of concrete nouns are:

1. Shruti put her feet on the table.
2. The teacher ran away from the mouse.
3. Jeena saw a movie.`
    }
      },
      {
      type: 'group',
      label: 'Drag and drop',
      id: 'classify-concrete-abstract',
      commonData: {
        title: 'Identify these nouns as concrete and abstract.',
        types: ['Concrete', 'Abstract']
          },
          data: [
            [
              `Phone, Police, Cat, Pen`,
              `Clever, Courage, Loyalty, Bravery`
            ],
            [
              `Girl, Boy, Bowl, Bird`,
              `Hope, Love, Angry, Trust`
            ],
            [
              `Soldier, Friend, Artist, Judge`,
              `Peace, Justice, Artistry, Friendship`
            ]
          ]
        },
          {
      type: 'selectWord',
      label: 'Select the word.',
      id: 'select-word',
      commonData: {
      title: 'Select the concrete noun in the below sentences.'
          },
      data: [
    `The *melody* is wonderful.
    You can have some *pie* after dinner.
    The loud *noise* made mom upset.
    You need good *friends*.
    Seema felt love for her new *dog*.`,
      
      `Curiosity killed the *cat*.
      A *dove* is a symbol of peace.
      Owning two *cars* is a luxury..
      Your story needs more *excitement*.
      The math *formula* is stored in your memory.`
                   ]
                },
{
  label: 'Classify-1',
  type: 'classifySentence',
  id: 'classify-abstract-concrete',
  data: {
  title: 'Classify whether these nouns are abstract or concrete.',
    types: [
      {
    name: 'Abstract',
    text: `Luxury
           Joy
           Maturity
           Work`
  },
  {
    name: 'Concrete',
    text: `Table
           Feet
           Melody
           Pie`
          }
        ]
      }
    },
    {
      label: 'Classify-2',
      type: 'classifySentence',
      id: 'classify-abstract-concrete-2',
      data: {
      title: 'Identify if these sentences have alliteration or not',
        types: [
          {
            name: 'Abstract',
            text: `Happiness
                   Dinner
                   Habit
                   Manners`
          },
          {
            name: 'Concrete',
            text: `Fish
                   Grapes
                   Soap
                   Stairs`
          }
        ]
      }
    }
  ]
};
