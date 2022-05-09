export default {
  id: 'animals',
  label: 'Animal',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Types of Animals',
      data: {
        title: 'Animals',
        text: [
          `There are different types of animals.
Some are domestic animals, and others are wild animals.
Some live in group, and others live alone.
Some lay eggs, and others give birth to young ones.
Some live in land, and others live in water. Some live in both land and water.
Some eat plants and others eat meat. Some eat both.
# Domestic Animals
dog, cat, goat, cow, donkey, horse, camel, buffalo
# Wild Animals
tiger, lion, deer, bear, fox, giraffe, camel, crocodile
# Lay Eggs
birds, crocodile, tortoise, lizard, cockroach
# Give birth to young ones
goat, elephant, bat, lions, rat
# Do you know?
Not every birds can fly. Big birds like ostrich, emu, penguin cannot fly.
Though bat can fly, it is not a bird. Bat give birth to young ones and don't lay eggs.
Some animals like snail and tortoise move very slowly. Some animals like deer, cheetah can move very fast.
Some animals like dinosaur lived thousands of years ago, but got extinct now. You cannot find a real dinosaur now. But you can find their skeletons in a museum.

Each bird's nest looks different. Birds use sticks, thorns, cotton and fibre to build their nests. Some birds such as the woodpecker, owl and parrot live in the holes in the tree trunks called hollows.
The cuckoo does not build a nest. It lays its eggs in the nests of other birds. `
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      lockAfter: 1,
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
        title: 'Rearrange the animals from smallest to largest.',
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
        title: 'Rearrange the animals from slowest to fastest (speed).',
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
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Find the Animal',
      data: {
        title: 'Find the animal based on the hint.',
        text: `A wild animal with a long neck. | GIRAFFE | G______
An animal with long ears and big teeth that lives in burrow. | RABBIT | R_____
A desert animal | CAMEL | ____L
A wild animal with stripes | TIGER | T____
A big animal that lives in very cold region. | POLARBEAR | P________
A black and white bird that lives in very cold region. | PENGUIN | P______
A dangerous animal that lives in both land and water. | CROCODILE | C________
A very big animal that lived thousands of years ago. | DINOSAUR | D_______
A slow moving small animal. | SNAIL | S____
It can fly but not a bird. | BAT | B__`
      }
    },
    {
      id: 'match',
      label: 'Number of Legs',
      type: 'match',
      data: {
        text: `Crow, 2 Legs
Butterfly, 6 Legs
Zebra, 4 Legs
Spider, 8 Legs
Snake, No Legs`,
        title: 'Match the animals and the number of legs they have.'
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `slowest, snail
tallest, giraffe
fastest, cheetah
biggest, elephant
smallest, virus`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Elephants have *trunk (stripe)*. *Tusks (Trunks)* are modified form of teeth. They have *small (large)* eyes and *large (small)* ears.`
      }
    },
    {
      label: 'Find the Animals',
      type: 'completeWord',
      id: 'drag-drop-3',
      data: {
        title: 'Find the Animal',
        text: `I live in trees and jumb between branches. I like bananas. Who am I? | MONKEY
        I have sharp teeth. I am the king of the jungle. Who am I? | LION  
        I have no legs. But I slither on the ground and trees. Who am I? | SNAKE   
        I am not a bird, but I can fly. I collect nectar from flowers and make honey. Who am I? | BEE | ___
        I have big ears and a long trunk. Who am I? | ELEPHANT`
      }
    }
  ]
};
