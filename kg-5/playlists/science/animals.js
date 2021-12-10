export default {
  id: 'animals',
  label: 'Animal',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Types of Animals',
      data: {
        title: 'Animals',
        text: [
`There are different types of animals.`,
`Some are domestic animals, and others are wild animals.`,
`Some live in group, and others live alone.`,
`Some lay eggs, and others give birth to young ones.`,
`Some live in land, and others live in water. Some live in both land and water.`,
`Some eat plants and others eat meat. Some eat both.`
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      commonData: {
        title: 'Classify the below sentences as True or False.',
        types: ['True', 'False']
      },
      data: [
        [
          `Dog is a domestic animal.
Tiger is a wild animal.
Rhino is a wild animal.`,

          `Goat is a wild animal.
Cat is a wild animal.`
        ],
        [
          ` Hippo is a wild animal.
Giraffe is a wild animal.`,

          `Zebra is a domestic animal.
Camel is a wild animal.
Crocodile is a domestic animal.`
        ],
        [
          `Bear is a wild animal.
Donkey is a domestic animal.`,

          ` Fox is a domestic animal.
Wolf is a domestic animal.
Horse is a wild animal.`
        ],
        [
          ` Cheetah is a wild animal.
Buffalo is a domestic animal.`,

          `Kangaroo is a domestic animal.
Wolf is a domestic animal.
Shark is a domestic animal.`
        ]
      ]
    },
    {
      label: 'Arrange by Size',
      type: 'sorting',
      id: 'ascending',
      lockAfter: 1,
      data: {
        title: 'Rearrange the animal by size. (The smallest at the top)',
        multiple: true,
        fontSize: '1.3rem',
        text: `cat, dog, bear, zebra, elephant
frog, rat, snake, monkey, hippo
cockroach, parrot, owl, eagle, flamingo 
sparrow, crow, hen, peacock, ostrich
mosquito, cockroach, lizard, rabbit, cheetah
ant, tortoise, pig, lion, buffalo
crab, fish, dolphin, shark, whale`
      }
    },
    {
      label: 'Arrange by Speed',
      type: 'sorting',
      id: 'ascending-2',
      lockAfter: 1,
      data: {
        title: 'Rearrange the animal by their speed. (The slowest at the top)',
        multiple: true,
        fontSize: '1.3rem',
        text: `tortoise, snake, cat, tiger
ant, rat, donkey, horse
lizard, elephant, rabbit, lion
hen, peacock, sparrow, eagle`
      }
    },
    {
      label: 'True or False - 2',
      id: 'truefalse-2',
      type: 'classifySentence',
      commonData: {
        title: 'Classify the below sentences as True or False.',
        types: ['True', 'False']
      },
      data: [
        [
          `Crocodile lay eggs.
Tortoise lay eggs.`,

          `Birds usually give birth to young ones.
Goat lay eggs.
Elephant can live both in land and water.`
        ],
        [
          `Bat gives birth to young ones.
Lions live in group.
Crocodile can live both in land and water.`,

          `Penguin can fly.
Ostrich can fly.`
        ],
        [
          `Tigers eat meat.
Cows eat plants.`,

          `Rabbit lay eggs.
Bear eats only plants.
Hen cannot fly.`
        ],
        [
          `Penguin cannot fly.
Ostrich cannot fly.
Hen can fly.`,

          `Rat lay eggs.
Snakes give birth to young ones.`
        ]
      ]
    }
  ]
};
