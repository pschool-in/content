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
        type: 'plant'
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
      label: 'Plants - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Plants',
        text: `Like our body a plant also has many parts. The main parts of a plant include root, stem, leaf, flower, fruit and seed. Each part has a set of jobs to do to keep the plant healthy.
Roots are found below the soil and it holds the plant firmly in its position. It absorbs the water and minerals from the soil. Sometimes it also stores food. Roots are of two main types: tap root and ﬁbrous root.
The stem is the part that stays above the ground. A stem usually bears leaves, flowers and fruits. It distributes the water and minerals from the root to the leaves and flowers. The stem is the support system of the plant.
The leaves grow out of the side of the stem. Their main function is to make food for the plant by the process known as photosynthesis. Also they help in removing any excess water via stomata and this process is known as transpiration.
Flowers are the reproductive part of a plant. The flower has both female parts, called the pistil, and male parts, called the staemens. They work together to fertilize the plant and produce seeds.
The fruit is a fleshy or dry ripened part of a plant, enclosing the seed or seeds.
The hard part inside the fruit is called seed. Most plants grow from seeds.`
      }
    },
    {
      label: 'Terrestrial vs Aquatic-1',
      id: 'terrestrial-aquatic',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the habitat they belong',
        types: [
          {
            name: 'Terrestrial',
            text: 'sunflower, rose, daffodils, poison ivy'
          },
          {
            name: 'Aquatic',
            text: 'lotus, water lily, duckweed, watercress'
          }
        ]
      }
    },
    {
      label: 'Terrestrial vs Aquatic-2',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the habitat they belong',
        types: [
          {
            name: 'Terrestrial',
            text: ' tulip, cactus, papaya, pineapple, apricot'
          },
          {
            name: 'Aquatic',
            text: 'water hyacinth, hydrilla, vallisneria'
          }
        ]
      }
    },
    {
      label: 'Free floating vs Fixed rooted',
      id: 'classify-3',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Free floating',
            text: 'duckweed, mosquito fern, water hyacinth, pistia'
          },
          {
            name: 'Fixed rooted',
            text: 'lotus, watershield, water lily'
          }
        ]
      }
    },
    {
      label: 'Fixed rooted vs Submerged',
      id: 'classify-4',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Fixed rooted',
            text: 'lotus, watershield, water lily'
          },
          {
            name: 'Submerged',
            text: 'vallisneria, hydrilla, pondweed'
          }
        ]
      }
    },
    {
      label: 'Desert vs Mountain vs Plain',
      id: 'classify-5',
      type: 'group',
      data: {
        title: 'Classify the below plants into their respective type',
        types: [
          {
            name: 'Desert',
            text: 'opuntia, aloe vera, cactus, date palm'
          },
          {
            name: 'Mountain',
            text: 'pine, maple, cedar, oak, deodar'
          },
          {
            name: 'Plain',
            text: 'mango, banyan, teak'
          }
        ]
      }
    },
    {
      label: 'Cold climate vs Hot climate',
      id: 'classify-6',
      type: 'group',
      data: {
        title: 'Classify the below plants based on the climate they grow in',
        types: [
          {
            name: 'Cold climate',
            text:
              'beet, carrot, turnip, radish, kale, spinach, pea, onion, lettuce, potatoes'
          },
          {
            name: 'Hot climate',
            text:
              'lily, rose, chrysanthemum, bougainvillea, brinjal, chilli, cucumber, tomato'
          }
        ]
      }
    },
    {
      label: 'One seed vs Many seeds vs Seedless',
      id: 'classify-7',
      type: 'group',
      data: {
        title:
          'Classify the below fruits based on the number of seeds they produce',
        types: [
          {
            name: 'One seed',
            text: 'avocado, mango, cherry, apricot'
          },
          {
            name: 'Many seeds',
            text:
              'guava, watermelon, strawberry, figs, jackfruit, tomato, pomegranate'
          },
          {
            name: 'Seedless',
            text: 'pineapple, banana'
          }
        ]
      }
    },
    {
      label: ' Tap root vs Fibrous root',
      id: 'classify-8',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on the type of root system the contain.',
        types: [
          {
            name: 'Tap root',
            text: 'beet root, carrot, parsnip, parsley'
          },
          {
            name: 'Fibrous root',
            text: 'rice, wheat, barley, oats, rye, millet'
          }
        ]
      }
    },
    {
      label: ' Weak vs Strong',
      id: 'classify-9',
      type: 'group',
      data: {
        title:
          'Classify the below plants based on the type of stem the contain',
        types: [
          {
            name: 'Weak',
            text: 'watermelon, grapes, pumpkin, bean, cucumber'
          },
          {
            name: 'Strong',
            text: 'neem, banyan, mango, deodar'
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Root, Absorption
Stem, Support
Leaf, Photosynthesis
Flower, Reproduction
Seed, Germination`,
        title: 'Match the plant parts with their function'
      }
    },
    {
      id: 'plant-fillup',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Fibrous (tap)* roots are developed from the base of the stem.
Avecinnia plants have roots *above (below)* the ground.
Trees such as peepal and banyan have very strong and thick stem called *trunk (wood)*.
The loss of water in the form of gas happens through the tiny pores in the leaves is called *transpiration (evaporation)*.`
      }
    },
    {
      id: 'plant-fillup-2',
      label: 'Plants - Fill in the Blanks ',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The soft and brightly colored part of a flower is called *petal (tepal)*.
The green part that lies under the petal and supports it is called *sepal (petal)*.
The middle of the flower has two parts called the *stamen (style)* and pistil.
The natural home of a plant is called its *habitat (niche)*.
Plants make suitable adjustment with their surroundings to meet their requirements. This is known as *adaptation (evolution)*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-5',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Deserts get very less rainfall and experience high temperature.
Leaves are changed to spines to reduce the loss of water.
Needle like leaves help them to survive in cold conditions like snow.
Plants in plains need to adapt to both dry conditions and extreme temperatures`
          },
          {
            name: 'False',
            text: `Banyan, Peepal and Tamarind trees live less than hundred years.
Mountain trees leaves are called frond`
          }
        ]
      }
    },
    {
      id: 'words',
      type: 'sequence',
      label: 'Words related to plants',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [`Plant, leaf, bud, flower, root, desert, mountain, seed`]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Tomato, Carrot, Radish, Beetroot
Turmeric,Cabbage,  Greens,  Spinach
Neem,  Aloe vera,  Datepalm,  Opuntia
Mango, Apple, Orange, Papaya
Opuntia, Hydrilla,  Water hyacinth, Vallisneria`
      }
    },
    {
      id: 'match-7',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Deserts, Cactus
Mountains, Pine
Plains, Teak
Coastal areas, Coconut
Trees, Neem`,
        title: 'Match plants to the parts we eat'
      }
    },
    {
      label: 'Plants - Choose the best Answer',
      id: 'mcq-plants',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which part of the plant absorbs water and nutrients for the plants?',
            options: 'Roots, Leaves, Stem'
          },
          {
            qText:
              ' Which part of the plant transports food from leaf and water from root to various parts of the plant?',
            options: 'Stem, Flower, Fruit'
          },
          {
            qText:
              ' The plant that grows in deserts and needs very little water is called ______',
            options: 'Cactus, Rose, Marigold'
          },
          {
            qText:
              ' ______ are the colourful part of a flower which attracts insects and birds.',
            options: 'Petals, Pistils, Stamens'
          },
          {
            qText:
              ' The leaves carries out transpiration through tiny pores called ______.',
            options: 'stomata, petiole, lamina'
          },
          {
            qText:
              ' Primary function of the ______ is to hold up buds, flowers, leaves, and fruits to the plant.',
            options: 'stem, root, branch'
          },
          {
            qText: ' Which of the following fruits that do not have seeds?',
            options: 'Pineapple, Papaya, Apricot'
          },
          {
            qText:
              'The plants that grow in water bodies like ponds and lakes are called ______ plants.',
            options: 'aquatic, terrestrial, coastal'
          }
        ]
      }
    }
  ]
};
