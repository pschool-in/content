export default {
  label: 'Plants ',
  id: 'plants-3',
  lockAfter: 4,
  pdf: 'plants.pdf',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Passage',
      data: {
        title: 'Plants-Notes',
        text: `Plants are an important part of nature. Plants need good soil, water and sunlight. The main parts of the plant are root, stem, leaf, flower, vegetable and fruit. Plants gives us food, fresh air, medicine, wood etc.
# Leaf
It is usually green in colour. Leaves are of different shapes and sizes. Leaves have a life cycle on its own. A new leaf would be soft and small. It grows in size. And finally it will dry and fall to the ground. Leaves are food to animals like goat, cow and deer. We too eat some of the leaves. Though they are not tasty, they are healthy. 
# Flower
Many kids feel that flowers are the most attractive part of a plant. Flowers are of different shapes and colours. Some flowers smell nicely. We can see butterflies and bees sitting on flowers and drinking honey. 
# Vegetable & Fruit
In most of the plants, flowers become vegetables and fruits. They provide food to humans like us, and they are very healthy. 
# Seed
Seeds are very important to plant, because they help in bringing new plants. Farmers sow the seeds to grow plants. Birds eat the fruits and throw the seeds in some other places. And after few days, a new plant will come from the seeds.
# Stem
Stem is the strongest part of a plant. It helps the plant to stand straight. Plants with weak stems are usually creepers. They need support to grow.
# Root
Root is responsible for absorbing water and other minerals from the soil. The strength of the plant depends on the strength of the roots. Plants with weak roots fell during rain and heavy winds.`
      }
    },
    {
      id: 'find-word',
      type: 'sequence',
      label: 'Find the word',
      data: {
        title: 'Connect the letters',
        printTitle: 'Find the jumbled words',
        text: 'plant, stem, flower, bud, root, fruit, tree, leaf, soil, water'
      }
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Plant',
      data: {
        img: 'parts_plant.jpg',
        fontSize: '1.2rem',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'roots', x: 4, y: 139 },
          { word: 'stem', x: 190, y: 10 },
          { word: 'leaves', x: 197, y: 78 },
          { word: 'flower', x: 18, y: 16 },
          { word: 'bud', x: 4, y: 88 }
        ]
      },
      id: 'plant'
    },
    {
      label: 'Plants Function',
      id: 'drag-drop-function',
      type: 'matchByDragDrop',
      data: {
        text: `The *root* absorbs water from the soil and helps to hold the plant in the soil. 
The *leaf* uses the sun and air to make food for the plant. 
The *stem* helps the plant to stand straight. 
The *flower* makes the seeds and fruits. 
All plants start as a *seed*.`
      }
    },
    {
      id: 'classify-below',
      label: 'Below vs Above Ground',
      type: 'group',
      data: {
        title: 'Identify whether the below things grow above or below ground.',
        types: [
          {
            name: 'Above ground',
            text: 'grapes, cabbage, coconut, mango, rose'
          },
          {
            name: 'Below ground',
            text: 'potato, garlic, onion, carrot, beetroot'
          }
        ]
      }
    },
    {
      id: 'match-parts',
      type: 'match',
      label: 'Food and Part',
      data: {
        title: 'Food and Parts of the plant',
        text: `carrot, root
cauliflower, flower
orange, fruit
spinach, leaf
peas, seed`
      }
    },
    {
      id: 'match-flower-color',
      type: 'match',
      label: 'Flower and Color',
      data: {
        title: 'Match the flowers with its usual colour',
        text: `Jasmine, White
Sunflower, Yellow
Hibiscus, Red
Lotus, Pink
Marigold, Orange`
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which part of the plant carries seeds?',
            options: 'Fruit, Bud, Leaf'
          },
          {
            qText: 'Which is the sour fruit?',
            options: 'Lemon, Banana, Watermelon'
          },
          {
            qText: 'Which vegetable is long?',
            options: 'snake gourd, bitter gourd, carrot'
          },
          {
            qText: 'Which fruit has one seed?',
            options: 'Mango, Apple, Papaya'
          },
          {
            qText:
              '______ are plants which have weak stems and cannot stand straight on their own.',
            options: 'creepers, shrubs, herbs'
          },
          {
            qText: 'Trees are the house to animals like ______',
            options: 'monkeys, giraffes, tigers'
          },
          {
            qText: 'Bees sit on a flower _____.',
            options: 'for honey, for water, to take rest'
          },
          {
            qText: 'Plants need _______ for their growth',
            options: 'sun light, moon light, wind'
          },
          {
            qText: 'Which of the following is a fruit?',
            options: 'tomato, onion, brinjal'
          },
          {
            qText: 'Which of the following is a stem?',
            options: 'sugarcane, drumstick, snake gourd'
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Humans can eat some kind of leaves. 
Roots help plants to get water.`
          },
          {
            name: 'False',
            text: `It is a good habit to pluck flowers from public garden. 
All flowers become fruits. 
Plants can move from one place to another.`
          }
        ]
      }
    },
    {
      id: 'drag-drop-parts',
      label: 'Drag and Drop Blanks ',
      type: 'matchByDragDrop',
      data: {
        text: `*Flower* is the most attractive part of a plant.
*Seed* helps in growing new plant.
*Stem* helps the plant to stand straight.
*Root* helps the plant to get water.
*Fruit* is the important edible part of a plant.`
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'Word Search',
      data: {
        lang: 'en',
        words: [
          {
            word: 'plant',
            marker: [4, 1, 8, 1]
          },
          {
            word: 'flower',
            marker: [5, 0, 5, 5]
          },
          {
            word: 'leaf',
            marker: [5, 1, 8, 4]
          },
          {
            word: 'fruit',
            marker: [8, 4, 8, 8]
          },
          {
            word: 'soil',
            marker: [0, 0, 3, 3]
          },
          {
            word: 'water',
            marker: [2, 4, 6, 4]
          },
          {
            word: 'seed',
            marker: [2, 6, 5, 6]
          },
          {
            word: 'stem',
            marker: [3, 2, 6, 5]
          },
          {
            word: 'bud',
            marker: [0, 8, 2, 8]
          },
          {
            word: 'root',
            marker: [5, 5, 8, 8]
          }
        ],
        showWords: true,
        desc: 'Find the given words',
        table: [
          ['S', 'S', 'O', 'U', 'J', 'F', 'W', 'T', 'A'],
          ['J', 'O', 'X', 'B', 'P', 'L', 'A', 'N', 'T'],
          ['R', 'E', 'I', 'S', 'U', 'O', 'E', 'I', 'C'],
          ['Q', 'Z', 'C', 'L', 'T', 'W', 'G', 'A', 'G'],
          ['Q', 'M', 'W', 'A', 'T', 'E', 'R', 'R', 'F'],
          ['S', 'F', 'V', 'E', 'S', 'R', 'M', 'R', 'R'],
          ['M', 'L', 'S', 'E', 'E', 'D', 'O', 'W', 'U'],
          ['V', 'H', 'S', 'U', 'F', 'M', 'F', 'O', 'I'],
          ['B', 'U', 'D', 'M', 'K', 'X', 'T', 'P', 'T']
        ]
      }
    },
    {
      label: 'Plants as Food - Notes',
      type: 'passage',
      id: 'plants-as-food-notes',
      data: {
        title: 'Plants as Food',
        text: `Humans and other animals often use plants as food. Plants we eat are edible. Edible parts of some plants include leaves, stems and roots. We also eat fruits produced by plants.
        # Roots as food
        Many plants store excess food in their roots. They have thick and swollen roots. Eg: Carrot, Beetroot, Tapioca
        # Stems as food
        In some plants the stem stores the excess food in it. Eg: sugarcane, potato, onion, ginger. Though some of them grow underground, they are not roots. 
        # Leaves as food
        We eat the leaves of plants like cabbage, coriander,moringa.
        # Flowers as food
        Many flowers are used as food. Eg: banana flower, Cauliflower, clove.
        # Seeds as food.
        Grains are seeds.  Pulses, cereals, fenugreek are the commonly eaten seeds.`
      }
    },

    {
      label: 'Roots - Notes',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Roots',
        text: `Root is a part of the plant that usually grows under the soil. Roots can be of different shapes and sizes. They are of two main types: taproot and fibrous root.
        # Taproot
        Taproot has one main, thick root. It grows from the radicle and goes deep into the soil. Many small thin roots grow out from the main root. Plants such as carrot, beetroot, turnip, mango and neem have taproots. 
        # Fibrous Root
        A fibrous root consists of many thin roots of different sizes. They grow from the base of the stem and all of them are bunched together. They do not go deep into the soil. Plants such as grass, paddy, wheat and onion have fibrous roots. Coconut and palm tree have fibrous root.
        In some plants, roots store food. Eg: Carrot, Beetroot, Radish`
      }
    },
    {
      label: 'True or False',
      id: 'roots-true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Grass has fibrous root.
            Taproot usually grow very deep.
            Neem and mango trees have tap root.
            Palm and coconut trees have fibrous root.`
          },
          {
            name: 'False',
            text: `All trees have tap root.
            Fibrous root has one main root.`
          }
        ]
      }
    },
    {
      label: ' Tap root vs Fibrous root',
      id: 'roots-classify',
      type: 'group',
      data: {
        types: [
          {
            name: 'Tap root',
            text: 'Beetroot, Carrot, Neem, Banyan, Mango'
          },
          {
            name: 'Fibrous root',
            text: 'Paddy, Wheat, Grass, Palm, Coconut'
          }
        ]
      }
    },
    {
      label: 'Stem - Notes',
      type: 'passage',
      id: 'stem-notes',
      data: {
        title: 'Stem',
        text: `Stem is the main part of the shoot system. It grows towards the sunlight. It looks green when it is young. Branches, leaves, buds, flowers and fruits grow from the stem.
Herbs such as coriander and mint have a thin and weak stem. Trees such as peepal and banyan have very strong and thick stem called trunk. As trees grow older, their trunks grow wider.
# Functions of the Stem
1. It supports the whole plant.
2. It transports food from leaf and water from root to various parts of the plant.
3. Some stems store excess food in them. E.g., Potato, Onion.`
      }
    },
    {
      label: 'Fill in the Blanks',
      id: 'stem-fillup',
      type: 'matchByDragDrop',
      data: {
        text: `Stem is the main part of the *shoot* system. It grows towards the *sunlight*. Herbs like coriander have a *weak* stem. Banyan tree has a *strong* stem and it is called *trunk*.`
      }
    },
    {
      label: 'Fruits and Seeds - Notes',
      type: 'passage',
      id: 'fruits-notes',
      data: {
        title: 'Fruits and Seeds',
        text: `Fruit is the fleshy part of the plant. The fruits are developed from the flowers. Most fruits have seeds. Some fruits have only one seed. Eg: Apricot, Mango, Coconut, Peach.
Some fruits have many seeds. Eg: Papaya, Watermelon, Orange
Some fruits are seedless. Eg: Pineapple, Banana`
      }
    },
    {
      label: ' Single vs Multiple Seeds',
      id: 'seeds-classify',
      type: 'group',
      data: {
        types: [
          {
            name: 'Single Seed',
            text: 'Mango, Coconut, Cherry, Date'
          },
          {
            name: 'Multiple Seeds',
            text: 'Papaya, Watermelon, Orange, Apple'
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-plants',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following fruits do not have seeds?',
            options: 'Pineapple, Papaya, Apricot'
          },
          {
            qText: 'Which of the following is not part of shoot system?',
            options: 'Root, Stem, Seed, Flower'
          },
          {
            qText: `Which of the following doesn't have fibrous root?`,
            options: 'Radish, Paddy, Grass, Wheat'
          },
          {
            qText: 'Which fruit has exactly one seed?',
            options: 'Cherry, Apple, Banana, Orange'
          },
          {
            qText: 'Which part of the plant supports the whole plant?',
            options: 'Stem, Branch, Leaf, Fruit'
          }
        ]
      }
    }
  ]
};
