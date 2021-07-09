export default {
  label: 'Plants ',
  id: 'plants',
  pageBreaks: '5',
  pdf: 'plants.pdf',
  list: [
    {
      id: '100',
      type: 'passage',
      label: 'Passage',
      data: {
        editable: true,
        title: 'Plants-Introduction',
        text:
          'Plants are an important part of nature. Plants need good soil, water and sunlight. The main parts of the plant are root, stem, leaf, flower, vegetable and fruit. Plants gives us food, fresh air, medicine, wood etc.\nLEAF\nLeaf is usually green in colour. Leaves are of different shapes and sizes. Leaves have a life cycle on its own. A new leaf would be soft and small. It grows in size. And finally it will dry and fall to the ground. Leaves are food to animals like goat, cow and deer. We too eat some of the leaves. Though they are not tasty, they are healthy. \nFLOWER\nMany kids feel that flowers are the most attractive part of a plant. Flowers are of different shapes and colours. Some flowers smell nicely. We can see butterflies and bees sitting on flowers and drinking honey. \nVEGETABLE & FRUIT\nIn most of the plants, flowers become vegetables and fruits. They provide food to humans like us, and they are very healthy. \nSEEDS\n Seeds are very important to plant, because they help in bringing new plants. Farmers sow the seeds to grow plants. Birds eat the fruits and throw the seeds in some other places. And after few days, a new plant will come from the seeds.\nSTEM\nStem is the strongest part of a plant. It helps the plant to stand straight. Plants with weak stems are usually creepers. They need support to grow.\nROOT\nRoot is responsible for absorbing water and other minerals from the soil. The strength of the plant depends on the strength of the roots. Plants with weak roots fell during rain and heavy winds.'
      }
    },
    {
      id: '200',
      type: 'sequence',
      label: 'Find the word',
      data: {
        editable: true,
        title: 'Connect the letters',
        printTitle: 'Find the jumbled words',
        text: 'plant, stem, flower, bud, root, fruit, tree, leaf, soil, water'
      }
    },
    {
      id: '300',
      type: 'dragAndDrop',
      label: 'Parts of Plant',
      data: {
        img: 'plant',
        title: 'Parts of Plant',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          {
            word: 'roots',
            x: 4,
            y: 139
          },
          {
            word: 'stem',
            x: 190,
            y: 10
          },
          {
            word: 'leaves',
            x: 197,
            y: 78
          },
          {
            word: 'flower',
            x: 18,
            y: 16
          },
          {
            word: 'bud',
            x: 4,
            y: 88
          }
        ]
      }
    },
    {
      label: 'Plants Function',
      id: '350',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the plant parts at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 50
        },
        text:
          'The *root* absorbs water from the soil and helps to hold the plant in the soil. \n  The *leaf* uses the sun and air to make food for the plant. \n The *stem* helps the plant to stand straight. \n  The *flower* makes the seeds and fruits. \n All plants start as a *seed*.'
      }
    },
    {
      id: '400',
      label: 'Drag and Drop',
      type: 'group',
      data: {
        editable: true,
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
      id: '500',
      type: 'match',
      label: 'Food and Part',
      data: {
        editable: true,
        title: 'Food and Parts of the plant',
        text:
          'carrot, root\ncauliflower, flower\norange, fruit\nspinach, leaf\npeas, seed'
      }
    },
    {
      id: '600',
      type: 'match',
      label: 'Flower and Color',
      data: {
        editable: true,
        title: 'Match the flowers with its usual colour',
        text:
          'Jasmine, White\nSunflower, Yellow\nHibiscus, Red\nLotus, Pink\nMarigold, Orange'
      }
    },
    {
      id: '700',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        editable: true,
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
      id: '800',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text:
              'Humans can eat some kind of leaves. \nRoots help plants to get water.'
          },
          {
            name: 'False',
            text:
              'It is a good habit to pluck flowers from public garden. \nAll flowers become fruits. \nPlants can move from one place to another.'
          }
        ]
      }
    },
    {
      id: '900',
      label: 'Drag and Drop Blanks ',
      type: 'matchByDragDrop',
      data: {
        editable: true,
        isPractice: false,
        title: 'Drag and drop the words ',
        printTitle: 'Fill in the blanks',
        printHideOptions: true,
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text:
          '*Flower* is the most attractive part of a plant.\n*Seed* helps in growing new plant.\n*Stem* helps the plant to stand straight.\n*Root* helps the plant to get water.\n*Fruit* is the important edible part of a plant.'
      }
    },
    {
      id: '1000',
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
    }
  ]
};
