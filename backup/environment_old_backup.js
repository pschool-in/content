export default {
  id: 'animals',
  label: 'Animal',
  list: [
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Birds, Nest
Silk, Clothes
Wooden chair, Tree
Soil Fertile, humus
Pollution, Environment`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Animals can  __________',
            options: `eat food
move one place to another
reproduce the little ones
*All the above`
          },
          {
            qText: 'Houses are built using ___________',
            options: `bricks and cement
steel and glasses
wood
*All the above`
          },
          {
            qText: 'Environment is made up of __________.',
            options: `living and non-living things
animals and plants
human beings and animals
earth and sky`
          },
          {
            qText:
              'Human used to make many things like _____, ______ from the environment.',
            options: `paper, baskets
water, soil
stone, plants
mountain, land`
          },
          {
            qText: 'Seeds of the plants are scattered by _________.',
            options: 'wind, animals, insects , *All the above'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        fontSize: '1rem',
        text: `Living things bring changes in *non-living things* too.
Living things need *food* to grow.
Humans used to weave *clothes* using cotton, silk, wool.
Some animals used to hunt and eat other *animal's flesh*.
For survival, living things take their needs from the *environment*.`
      }
    },

    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions - MCQ-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_______ will crawl from one place to another place.',
            options: `Snake, Elephant, Bat, Horse`
          },
          {
            qText: 'Butterflies have ______ legs.',
            options: `six, seven, eight, nine`
          },
          {
            qText: '_______ has mane in their body.',
            options: `Horse, Cow, Elephant, Deer`
          },
          {
            qText: '_______ have different colors in their body.',
            options: `Peacock, Crow, Eagle, Dove`
          },
          {
            qText: '_________ grows in stagnant water.',
            options: `Mosquito, Housefly, Cockroach, Fruitfly`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop-2',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `Crocodiles are *reptiles*.
*Elephants* have trunk.
*Snake* is a cold-blooded animal.
*Chameleon* can change its skin color.
*Monkey* is a warm-blooded animal.`
      }
    },
    {
      id: 'notes-3',
      label: 'The Inter-relationships Between Living Things',
      type: 'passage',
      data: {
        title: 'The Inter-relationships Between Living Things',
        text: `Living things take their necessary things from the environment. All living things need food, water, air for survival and it is fulfilled in the environment. Moreover, there are more differences in needs for every living organism. You can find the living things in their suitable place, where its necessary things are getting fulfilled. For example; a Lemon tree lives in the land, but it will not survive in water areas.
# Animal's Need
Animals need is fulfilled in the environment. Animals can live in the area where it is getting supported by the environment. For eg; Fish lives in water, but it is very difficult to live in the land. Similarly, many animals depend upon plants, animals, and other surroundings in the environment.
# Animals and trees support each other
Some animals live on trees as well as on land also. For example; monkeys, squirrels, etc., will live on both trees and land. In this case, both trees and animals help each other. Trees will give fruits, vegetables to these animals. These animals will move and roam in the surroundings and spread the seeds unknowingly. While roaming, these kinds of animals and birds spread the seeds in the land and it will help in growing the new plants.
# Human’s Need
Animals and plants give us abundantly and they are satisfying our needs. Humans also take care of some animals for their domestic use and they are called domestic animals. Plants give us vegetables, fruits, flowers, seeds, and many products for our daily use. Besides, many plants have more medicinal values and their extraction is used as medicines.
# Seasons
We have four seasons and they are summer, winter, spring, autumn (or) fall. Every season brings changes in the environment. For example, Cotton clothes are comfortable to wear during the summer season. Woolen clothes are comfortable to wear during winter season. Seasons give changes to other living things too. For eg; the animals which have fur will become much thicker during the winter season. During the spring seasons, fresh buds will start to bloom and it is the season of new beginnings. During the autumn (fall) seasons, trees leave changing color and some trees will lose their leaves. Not only trees, change in seasons will affect all living things.`
      }
    },
    {
      id: 'classify-3',
      label: 'Carnivores Vs. Omnivores',
      type: 'group',
      data: {
        title: 'Classify the below animals based on their food habits.',
        types: [
          {
            name: 'Carnivores',
            text: 'Shark, Hyena, Polar Bear, Snake'
          },
          {
            name: 'Omnivores',
            text: 'Fox, Dog, Human, Bear'
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match-3',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Summer, Heatwaves
Winter, Cold and frost
Spring, a new beginning 
Autumn, fall season
Monsoon, Overflow of river`
      }
    },
    {
      id: 'mcq-3',
      label: 'Multiple Choice Questions - MCQ-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Mangoes are available in the ________ season',
            options: `Summer, Winter, Autumn, Spring`
          },
          {
            qText: '__________ is an arboreal animal.',
            options: `Primate, Alligator, Lion, Pig`
          },
          {
            qText: '_______ is a root vegetable.',
            options: `Garlic, Tomato, Brinjal, Cauliflower`
          },
          {
            qText: '_________ lives on land.',
            options: `Panda, Seals, Penguins, Walrus`
          },
          {
            qText: '__________ is a reptile.',
            options: `Turtle
Gila monster
Alligator
*All the above`
          }
        ]
      }
    },
    {
      id: 'drag-drop-3',
      label: 'Drag and Drop-3',
      type: 'matchByDragDrop',
      data: {
        text: `Cow dung is used for the *production of biogas*.
Plants in *marshes* are called mangroves.
*Sheep pellets* can be used as manure for plants.
*Roots* of the plant grow under the soil.
Silk is obtained from the cocoon of the larvae of *silkworm*.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'fillup-options-3',
      label: 'Fill in the blanks-3',
      type: 'fillup',
      data: {
        text: `Cattle dung is used in *plastering (constructing)* the mud houses.
Change in season will affect * living things (non-living things)*.
Plants prepare their food by *photosynthesis (Absorption)*.
We depend upon *Agriculture (Weaving)* for our food.
The *Shearing (Ginning)* process involved in obtaining the wool from sheep.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False-3',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Monkey is an arboreal animal.
Deer is an herbivore.
Kangaroo is a wild animal.`
          },
          {
            name: 'False',
            text: `Frogs can live only during rainy days.
During autumn, fresh buds will bloom, and the new beginning of life starts.`
          }
        ]
      }
    },
    {
      id: 'notes-4',
      label: 'Biotic Factors',
      type: 'passage',
      data: {
        title: '',
        text: `# Biotic Factors
Biotic factors are the living organisms in our environment. example: trees, animals, birds
# Abiotic factors
Abiotic factors are the non-living organisms in our environment. example: water, air, stone
# Difference between Biotic and Abiotic factors
Biotic factors are also called living things and abiotic factors are also called non-living things. Biotic factors can feel, breathe and grow. They need food for living and they will give birth to young ones. Abiotic factors do not live. So, food is not necessary for them. Abiotic and biotic factors are linked together in the environment by the flow of energy via food. They both interact with one another in the environment. Moreover, plants are immobile, but they can grow well. Plants prepare their food by using abiotic factors like soil, water, air, sunlight, etc. Every biotic factor depends on other things for food in the environment.
# Balanced – Ecosystem
The food chain plays a more important role in every biotic/ living thing in the environment. Living things are dependent on both living things and non-living things for food, survival in this ecosystem. Based on consumption of food, living things are categorized into three types. They are Producers, Consumers, and Decomposers. Our ecosystem supports living things such as plants, animals, human beings, and also micro-organisms to grow in the environment.
# Producers
Some types of living things prepare their food by themselves and they are called producers. For example, trees. Plants prepare food by the process called photosynthesis. Plants are also called primary producers. Moreover, humans and some types of animals depend upon plants for their food. Some types of plants do not prepare their food by themselves and they depend upon other plants for food. These types of plants are called parasitic plants. For example, Cuscuta.
# Consumers
Some types of living things are not able to produce food on their own and it is dependent for food on plants and animals. They are called Consumers and they can be classified into three categories. They are Herbivores, Carnivores and Omnivores.
1. Herbivores eat only plants
2. Carnivores eat only the meat of other animals.
3. Omnivores eat both plants and meat.
# Decomposers
Microorganisms that feed on the decaying waste such as dead plants and animals for their survival are called decomposers. Those micro-organisms support the environment by giving nutrients to the soil. So soil turns more fertile and this helps to grow the plants and trees well. For example; Bacteria, fungi, etc.`
      }
    },
    {
      label: 'Drag and Drop-4',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        text: `Amoeba is a *unicellular* organism.
  *Ecology* is the science that deals with the relationship between biotic factors and their physical environment.
  Plants prepare their own food and the process is called *photosynthesis*.
  *Parasitic* plants are dependent on other plants for their food.
  Carnivores are *flesh* eating animals.`
      }
    },
    {
      id: 'fillup-4',
      label: 'Fill in the blanks-4',
      type: 'fillup',
      data: {
        text: `*Decomposers (Producers)* get food from the decay of animals and plants.
  Trees give *Oxygen (Carbon-dioxide)* during day time.
  *Lentils (Insects)* grows in the fertile soil.
  *Cats (Hens)* gives birth to kittens. 
  *Tree (Sapling)*provides both shelter and food to other living things.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-4',
      label: 'True or False-4',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Fungi is a micro-organism.
  The young plant is called a sapling.
  Stones are an abiotic factor`
          },
          {
            name: 'False',
            text: `An elephant is an omnivore animal.
  Soil is a consumer.`
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      label: 'Living things - Wordsearch',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['A', 'N', 'T'],
            marker: [0, 0, 2, 0]
          },
          {
            word: ['T', 'I', 'G', 'E', 'R'],
            marker: [2, 0, 2, 4]
          },
          {
            word: ['C', 'R', 'O', 'W'],
            marker: [1, 4, 4, 4]
          },
          {
            word: ['L', 'O', 'T', 'U', 'S'],
            marker: [5, 0, 5, 4]
          },
          {
            word: ['E', 'A', 'G', 'L', 'E'],
            marker: [0, 4, 4, 0]
          },
          {
            word: ['F', 'O', 'X'],
            marker: [3, 3, 3, 5]
          }
        ],
        title: 'Find the hidden living things ',
        lang: 'en',
        table: [
          ['A', 'N', 'T', 'K', 'E', 'L'],
          ['I', 'H', 'I', 'L', 'T', 'O'],
          ['Y', 'R', 'G', 'G', 'D', 'T'],
          ['F', 'A', 'E', 'F', 'O', 'U'],
          ['E', 'C', 'R', 'O', 'W', 'S'],
          ['O', 'Y', 'L', 'X', 'L', 'K']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword',
      label: 'Non-Living things - Crossword',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'Mat',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Lying on the floor near the door step',
            direction: 'across'
          },
          {
            word: 'Nest',
            marker: {
              x: 2,
              y: 5
            },
            hint: 'Bird house',
            direction: 'down2'
          },
          {
            word: 'PENCIL',
            marker: {
              x: 5,
              y: 1
            },
            hint: 'Friend of eraser',
            direction: 'across2'
          },
          {
            word: 'Dress',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'Human being',
            direction: 'across'
          },
          {
            word: 'Pen',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'A stationary thing that helps to write',
            direction: 'down'
          },
          {
            word: 'TANK',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'Helps to store water that comes through pipe.',
            direction: 'across'
          },
          {
            word: 'NET',
            marker: {
              x: 3,
              y: 3
            },
            hint: 'Connected with threads',
            direction: 'across'
          },
          {
            word: 'CAB',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'Another word for Taxi',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['M', 'A', 'T', '', 'P', ''],
          ['L', 'I', 'C', 'N', 'E', 'P'],
          ['', '', 'T', 'A', 'N', 'K'],
          ['', '', 'S', 'N', 'E', 'T'],
          ['D', 'R', 'E', 'S', 'S', ''],
          ['', '', 'N', 'C', 'A', 'B']
        ]
      }
    },
    {
      id: 'wordsearch-2',
      label: 'Domestic Animals - Wordsearch',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['B', 'U', 'F', 'F', 'A', 'L', 'O'],
            marker: [0, 0, 6, 6]
          },
          {
            word: ['C', 'A', 'T'],
            marker: [3, 4, 5, 4]
          },
          {
            word: ['D', 'O', 'G'],
            marker: [6, 5, 6, 7]
          },
          {
            word: ['H', 'E', 'N'],
            marker: [7, 0, 5, 2]
          },
          {
            word: ['C', 'O', 'C', 'K'],
            marker: [3, 4, 3, 7]
          },
          {
            word: ['G', 'O', 'A', 'T'],
            marker: [4, 5, 1, 5]
          },
          {
            word: ['D', 'O', 'N', 'K', 'E', 'Y'],
            marker: [0, 7, 5, 7]
          },
          {
            word: ['D', 'U', 'C', 'K'],
            marker: [1, 6, 4, 6]
          }
        ],
        title: 'Find the hidden domestic animals',
        lang: 'en',
        table: [
          ['B', 'R', 'Z', 'F', 'T', 'P', 'Z', 'H'],
          ['T', 'U', 'L', 'F', 'Y', 'Q', 'E', 'B'],
          ['R', 'X', 'F', 'M', 'I', 'N', 'F', 'U'],
          ['B', 'J', 'E', 'F', 'H', 'Z', 'U', 'R'],
          ['D', 'U', 'U', 'C', 'A', 'T', 'S', 'X'],
          ['O', 'T', 'A', 'O', 'G', 'L', 'D', 'I'],
          ['I', 'D', 'U', 'C', 'K', 'Z', 'O', 'Y'],
          ['D', 'O', 'N', 'K', 'E', 'Y', 'G', 'K']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword-2',
      label: 'Wild animals - Crossword',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'ELEPHANT',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'A big animal with a trunk',
            direction: 'down'
          },
          {
            word: 'LEOPARD',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'An animal with lot of spots; belongs to cat family',
            direction: 'across'
          },
          {
            word: 'DEER',
            marker: {
              x: 6,
              y: 1
            },
            hint: 'Grass eating wild animal. May have lot of spots on body.',
            direction: 'down'
          },
          {
            word: 'BEAR',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'A fat wild animal that can walk on two legs',
            direction: 'across'
          },
          {
            word: 'SNAKE',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'A poisonous animal with no legs',
            direction: 'across'
          },
          {
            word: 'CROCODILE',
            marker: {
              x: 0,
              y: 8
            },
            hint: 'A reptile with rough skin and big mouth',
            direction: 'across'
          },
          {
            word: 'GIRAFFE',
            marker: {
              x: 8,
              y: 1
            },
            hint: 'Long necked animal',
            direction: 'down'
          },
          {
            word: 'MONKEY',
            marker: {
              x: 1,
              y: 5
            },
            hint: 'An animal well known for jumping from tree to tree',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['E', '', '', '', '', '', '', '', ''],
          ['L', 'E', 'O', 'P', 'A', 'R', 'D', '', 'G'],
          ['E', '', 'S', 'N', 'A', 'K', 'E', '', 'I'],
          ['P', '', '', '', '', 'B', 'E', 'A', 'R'],
          ['H', '', '', '', '', '', 'R', '', 'A'],
          ['A', 'M', 'O', 'N', 'K', 'E', 'Y', '', 'F'],
          ['N', '', '', '', '', '', '', '', 'F'],
          ['T', '', '', '', '', '', '', '', 'E'],
          ['C', 'R', 'O', 'C', 'O', 'D', 'I', 'L', 'E']
        ]
      }
    },
    {
      id: 'wordsearch-3',
      label: 'Carnivores- Word search',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['T', 'I', 'G', 'E', 'R'],
            marker: [0, 0, 4, 4]
          },
          {
            word: ['L', 'I', 'O', 'N'],
            marker: [1, 0, 1, 3]
          },
          {
            word: ['E', 'A', 'G', 'L', 'E'],
            marker: [3, 3, 3, 7]
          },
          {
            word: ['W', 'O', 'L', 'F'],
            marker: [1, 6, 4, 6]
          },
          {
            word: ['F', 'O', 'X'],
            marker: [2, 1, 0, 3]
          },
          {
            word: ['S', 'N', 'A', 'K', 'E'],
            marker: [7, 3, 3, 3]
          },
          {
            word: ['S', 'H', 'A', 'R', 'K'],
            marker: [1, 4, 5, 4]
          },
          {
            word: ['S', 'E', 'A', 'L', 'S'],
            marker: [7, 3, 7, 7]
          },
          {
            word: ['F', 'R', 'O', 'G'],
            marker: [2, 1, 5, 1]
          }
        ],
        title: 'Find the hidden carnivores',
        lang: 'en',
        table: [
          ['T', 'L', 'R', 'E', 'H', 'G', 'M', 'A'],
          ['K', 'I', 'F', 'R', 'O', 'G', 'N', 'O'],
          ['V', 'O', 'G', 'B', 'G', 'S', 'D', 'V'],
          ['X', 'N', 'R', 'E', 'K', 'A', 'N', 'S'],
          ['O', 'S', 'H', 'A', 'R', 'K', 'F', 'E'],
          ['Z', 'B', 'S', 'G', 'I', 'G', 'H', 'A'],
          ['F', 'W', 'O', 'L', 'F', 'G', 'F', 'L'],
          ['X', 'B', 'M', 'E', 'E', 'I', 'L', 'S']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword-3',
      label: 'Omnivores- Crossword',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'HUMAN',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Our type of animal',
            direction: 'across'
          },
          {
            word: 'ANT',
            marker: {
              x: 3,
              y: 0
            },
            hint: 'Small disciplined animal that goes in line',
            direction: 'down'
          },
          {
            word: 'BEAR',
            marker: {
              x: 7,
              y: 4
            },
            hint: 'Teddy',
            direction: 'across2'
          },
          {
            word: 'MONKEY',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'Lives in Tree',
            direction: 'down'
          },
          {
            word: 'DOG',
            marker: {
              x: 7,
              y: 1
            },
            hint: `Man's best friend`,
            direction: 'across2'
          },
          {
            word: 'CROW',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'Black color bird',
            direction: 'down'
          },
          {
            word: 'PIG',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'An animal that lives in sty.',
            direction: 'across'
          },
          {
            word: 'BAT',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'Flying mammal',
            direction: 'down2'
          },
          {
            word: 'RAT',
            marker: {
              x: 2,
              y: 5
            },
            hint: 'Living in holes',
            direction: 'across2'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['H', 'U', 'M', 'A', 'N', '', 'M', ''],
          ['', '', '', 'N', '', 'G', 'O', 'D'],
          ['', '', '', 'T', '', '', 'N', ''],
          ['P', 'I', 'G', '', 'C', '', 'K', ''],
          ['', '', '', '', 'R', 'A', 'E', 'B'],
          ['T', 'A', 'R', '', 'O', '', 'Y', ''],
          ['A', '', '', '', 'W', '', '', ''],
          ['B', '', '', '', '', '', '', '']
        ]
      }
    },

    //environment-4
    {
      id: 'wordsearch-1',
      type: 'wordsearch',
      label: 'Biodegradable Items',
      data: {
        title: 'Find 10 biodegradable items ',
        words: [
          {
            word: ['P', 'L', 'A', 'N', 'T'],
            marker: [0, 0, 4, 0]
          },
          {
            word: ['A', 'N', 'I', 'M', 'A', 'L'],
            marker: [2, 0, 2, 5]
          },
          {
            word: ['P', 'A', 'P', 'E', 'R'],
            marker: [0, 0, 0, 4]
          },
          {
            word: ['M', 'A', 'G', 'A', 'Z', 'I', 'N', 'E'],
            marker: [0, 7, 7, 7]
          },
          {
            word: ['L', 'E', 'A', 'F'],
            marker: [2, 5, 5, 2]
          },
          {
            word: ['F', 'L', 'O', 'W', 'E', 'R'],
            marker: [1, 5, 6, 5]
          },
          {
            word: ['R', 'O', 'C', 'K'],
            marker: [7, 0, 7, 3]
          },
          {
            word: ['E', 'G', 'G', 'S', 'H', 'E', 'L', 'L'],
            marker: [0, 6, 7, 6]
          },
          {
            word: ['F', 'O', 'O', 'D'],
            marker: [1, 5, 1, 2]
          },
          {
            word: ['J', 'U', 'T', 'E'],
            marker: [3, 1, 3, 4]
          }
        ],
        table: [
          ['P', 'L', 'A', 'N', 'T', 'P', 'P', 'R'],
          ['A', 'O', 'N', 'J', 'I', 'F', 'S', 'O'],
          ['P', 'D', 'I', 'U', 'L', 'F', 'N', 'C'],
          ['E', 'O', 'M', 'T', 'A', 'M', 'M', 'K'],
          ['R', 'O', 'A', 'E', 'S', 'A', 'T', 'G'],
          ['O', 'F', 'L', 'O', 'W', 'E', 'R', 'H'],
          ['E', 'G', 'G', 'S', 'H', 'E', 'L', 'L'],
          ['M', 'A', 'G', 'A', 'Z', 'I', 'N', 'E']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'wordsearch-2',

      type: 'wordsearch',
      label: 'Non Biodegradable Items',
      data: {
        title: 'Find 10 non biodegradable items',
        words: [
          {
            word: ['P', 'L', 'A', 'S', 'T', 'I', 'C'],
            marker: [0, 0, 6, 0]
          },
          {
            word: ['M', 'E', 'T', 'A', 'L'],
            marker: [1, 4, 1, 0]
          },
          {
            word: ['B', 'A', 'T', 'T', 'E', 'R', 'Y'],
            marker: [0, 7, 6, 1]
          },
          {
            word: ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R'],
            marker: [7, 0, 7, 7]
          },
          {
            word: ['G', 'L', 'A', 'S', 'S'],
            marker: [2, 7, 6, 3]
          },
          {
            word: ['T', 'I', 'N', 'S'],
            marker: [5, 7, 5, 4]
          },
          {
            word: ['T', 'I', 'R', 'E', 'S'],
            marker: [3, 4, 3, 0]
          },
          {
            word: ['C', 'A', 'N', 'S'],
            marker: [6, 6, 6, 3]
          },
          {
            word: ['P', 'E', 'N', 'S'],
            marker: [0, 0, 0, 3]
          },
          {
            word: ['C', 'O', 'A', 'L'],
            marker: [2, 1, 2, 4]
          }
        ],
        table: [
          ['P', 'L', 'A', 'S', 'T', 'I', 'C', 'C'],
          ['E', 'A', 'C', 'E', 'B', 'V', 'Y', 'O'],
          ['N', 'T', 'O', 'R', 'C', 'R', 'C', 'M'],
          ['S', 'E', 'A', 'I', 'E', 'O', 'S', 'P'],
          ['S', 'M', 'L', 'T', 'O', 'S', 'N', 'U'],
          ['J', 'Z', 'T', 'Z', 'A', 'N', 'A', 'T'],
          ['Q', 'A', 'V', 'L', 'E', 'I', 'C', 'E'],
          ['B', 'N', 'G', 'B', 'N', 'T', 'X', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword-1',
      type: 'crossword',
      label: 'Crossword 1',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'milk',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'white revolution',
            direction: 'across'
          },
          {
            word: 'manure',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'natural fertilizer',
            direction: 'down'
          },
          {
            word: 'leather',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'manufactured from cattle hides',
            direction: 'down'
          },
          {
            word: 'egg',
            marker: {
              x: 4,
              y: 1
            },
            hint: 'silver revolution',
            direction: 'across'
          },
          {
            word: 'virus',
            marker: {
              x: 2,
              y: 6
            },
            hint: 'cause fever and diarrhea in birds',
            direction: 'across'
          },
          {
            word: 'flees',
            marker: {
              x: 6,
              y: 2
            },
            hint: 'parasite in poultry',
            direction: 'down'
          },
          {
            word: 'fish',
            marker: {
              x: 6,
              y: 2
            },
            hint: 'blue revolution',
            direction: 'across'
          },
          {
            word: 'honey',
            marker: {
              x: 9,
              y: 2
            },
            hint: 'liquid gold',
            direction: 'down'
          },
          {
            word: 'oilseed',
            marker: {
              x: 7,
              y: 1
            },
            hint: 'yellow revolution',
            direction: 'down'
          },
          {
            word: 'drones',
            marker: {
              x: 7,
              y: 7
            },
            hint: 'fertile male bees',
            direction: 'across2'
          },
          {
            word: 'workers',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'sterile female bees',
            direction: 'down'
          },
          {
            word: 'bee',
            marker: {
              x: 5,
              y: 5
            },
            hint: 'they produce honey',
            direction: 'across'
          },
          {
            word: 'wax',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'used in preparation of shoe polish',
            direction: 'across'
          },
          {
            word: 'compost',
            marker: {
              x: 8,
              y: 7
            },
            hint: 'obtained by decomposition of organic matter',
            direction: 'down2'
          },
          {
            word: 'earthworm',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'produce vermicopost',
            direction: 'down'
          },
          {
            word: 'ghee',
            marker: {
              x: 3,
              y: 4
            },
            hint: 'milk product',
            direction: 'across'
          },
          {
            word: 'bee venom',
            marker: {
              x: 8,
              y: 8
            },
            hint: 'product obtained from bees',
            direction: 'across2'
          }
        ],
        table: [
          ['W', 'E', 'M', 'I', 'L', 'K', '', '', '', ''],
          ['O', 'A', 'A', '', 'E', 'G', 'G', 'O', 'T', ''],
          ['R', 'R', 'N', 'W', 'A', 'X', 'F', 'I', 'S', 'H'],
          ['K', 'T', 'U', '', 'T', '', 'L', 'L', 'O', 'O'],
          ['E', 'H', 'R', 'G', 'H', 'E', 'E', 'S', 'P', 'N'],
          ['R', 'W', 'E', '', 'E', 'B', 'E', 'E', 'M', 'E'],
          ['S', 'O', 'V', 'I', 'R', 'U', 'S', 'E', 'O', 'Y'],
          ['', 'R', 'S', 'E', 'N', 'O', 'R', 'D', 'C', ''],
          ['', 'M', 'O', 'N', 'E', 'V', 'E', 'E', 'B', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'crossword-2',
      type: 'crossword',
      label: 'Crossword 2',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'tetrapack',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'used to make milk carton',
            direction: 'across'
          },
          {
            word: 'plastic',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'non biodegradable material',
            direction: 'down'
          },
          {
            word: 'metals',
            marker: {
              x: 7,
              y: 4
            },
            hint: 'non biodegradable ',
            direction: 'across2'
          },
          {
            word: 'leaf',
            marker: {
              x: 5,
              y: 1
            },
            hint: 'part of plant, biodegradable',
            direction: 'across'
          },
          {
            word: 'flower',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'biodegradable, part of plant',
            direction: 'down2'
          },
          {
            word: 'reduce',
            marker: {
              x: 1,
              y: 5
            },
            hint: "first R in three R's ",
            direction: 'down2'
          },
          {
            word: 'tire',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'part of automobile, non biodegradable',
            direction: 'down'
          },
          {
            word: 'reuse',
            marker: {
              x: 0,
              y: 2
            },
            hint: "second R in three R's ",
            direction: 'down'
          },
          {
            word: 'recycle',
            marker: {
              x: 7,
              y: 6
            },
            hint: "last R in three R's ",
            direction: 'across2'
          },
          {
            word: 'food',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'biodegradable',
            direction: 'across2'
          }
        ],
        table: [
          ['T', 'E', 'T', 'R', 'A', 'P', 'A', 'C', 'K'],
          ['I', 'C', '', 'E', '', 'L', 'E', 'A', 'F'],
          ['R', 'U', '', 'W', '', 'A', '', '', ''],
          ['E', 'D', 'O', 'O', 'F', 'S', '', '', ''],
          ['U', 'E', 'S', 'L', 'A', 'T', 'E', 'M', ''],
          ['S', 'R', '', 'F', '', 'I', '', '', ''],
          ['E', 'E', 'L', 'C', 'Y', 'C', 'E', 'R', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'crossword-3',
      type: 'crossword',
      label: 'Crossword 3',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'BIOSPHERE',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'zone of life',
            direction: 'down'
          },
          {
            word: 'nitrogen',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'gas in atmosphere',
            direction: 'across'
          },
          {
            word: 'atmosphere',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'blanket of air',
            direction: 'across'
          },
          {
            word: 'polarbear',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'animal seen in polar region',
            direction: 'across'
          },
          {
            word: 'lake',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'waterbody',
            direction: 'down2'
          },
          {
            word: 'pond',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'waterbody',
            direction: 'down'
          },
          {
            word: 'ozone',
            marker: {
              x: 9,
              y: 7
            },
            hint: 'protect from UV rays',
            direction: 'down2'
          },
          {
            word: 'stream',
            marker: {
              x: 1,
              y: 8
            },
            hint: 'waterbody',
            direction: 'across'
          },
          {
            word: 'lion',
            marker: {
              x: 6,
              y: 4
            },
            hint: 'animal seen in hot climate',
            direction: 'across'
          },
          {
            word: 'air',
            marker: {
              x: 8,
              y: 0
            },
            hint: 'atmosphere',
            direction: 'down'
          },
          {
            word: 'rarer',
            marker: {
              x: 3,
              y: 8
            },
            hint: 'air at heights are more.......',
            direction: 'down2'
          },
          {
            word: 'ice',
            marker: {
              x: 7,
              y: 4
            },
            hint: 'in glacier water is in form of.....',
            direction: 'down'
          },
          {
            word: 'glacier',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'frozen waterbody',
            direction: 'across'
          },
          {
            word: 'link',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'component in food chain',
            direction: 'across'
          }
        ],
        table: [
          ['L', 'I', 'N', 'K', 'B', '', '', '', 'A', ''],
          ['G', 'L', 'A', 'C', 'I', 'E', 'R', '', 'I', ''],
          ['N', 'I', 'T', 'R', 'O', 'G', 'E', 'N', 'R', ''],
          ['A', 'T', 'M', 'O', 'S', 'P', 'H', 'E', 'R', 'E'],
          ['', '', 'E', 'R', 'P', 'O', 'L', 'I', 'O', 'N'],
          ['', '', 'K', 'E', 'H', 'N', '', 'C', '', 'O'],
          ['', '', 'A', 'R', 'E', 'D', '', 'E', '', 'Z'],
          ['P', 'O', 'L', 'A', 'R', 'B', 'E', 'A', 'R', 'O'],
          ['', 'S', 'T', 'R', 'E', 'A', 'M', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-3',

      type: 'wordsearch',
      label: 'Living Things',
      data: {
        title: 'Find 13 living things',
        words: [
          {
            word: ['P', 'L', 'A', 'N', 'T'],
            marker: [0, 0, 0, 4]
          },
          {
            word: ['L', 'I', 'O', 'N'],
            marker: [0, 1, 3, 1]
          },
          {
            word: ['M', 'O', 'N', 'K', 'E', 'Y'],
            marker: [2, 0, 2, 5]
          },
          {
            word: ['F', 'I', 'S', 'H'],
            marker: [1, 0, 1, 3]
          },
          {
            word: ['T', 'R', 'E', 'E', 'S'],
            marker: [0, 4, 4, 4]
          },
          {
            word: ['B', 'I', 'R', 'D', 'S'],
            marker: [4, 0, 4, 4]
          },
          {
            word: ['I', 'N', 'S', 'E', 'C', 'T'],
            marker: [5, 0, 5, 5]
          },
          {
            word: ['T', 'O', 'U', 'C', 'A', 'N'],
            marker: [6, 0, 6, 5]
          },
          {
            word: ['P', 'A', 'R', 'R', 'O', 'T'],
            marker: [0, 6, 5, 6]
          },
          {
            word: ['C', 'R', 'O', 'W'],
            marker: [7, 0, 7, 3]
          },
          {
            word: ['F', 'L', 'O', 'W', 'E', 'R'],
            marker: [0, 7, 5, 7]
          },
          {
            word: ['D', 'E', 'E', 'R'],
            marker: [7, 4, 7, 7]
          },
          {
            word: ['Y', 'A', 'K'],
            marker: [2, 5, 4, 5]
          }
        ],
        table: [
          ['P', 'F', 'M', 'R', 'B', 'I', 'T', 'C'],
          ['L', 'I', 'O', 'N', 'I', 'N', 'O', 'R'],
          ['A', 'S', 'N', 'Y', 'R', 'S', 'U', 'O'],
          ['N', 'H', 'K', 'J', 'D', 'E', 'C', 'W'],
          ['T', 'R', 'E', 'E', 'S', 'C', 'A', 'D'],
          ['A', 'V', 'Y', 'A', 'K', 'T', 'N', 'E'],
          ['P', 'A', 'R', 'R', 'O', 'T', 'Z', 'E'],
          ['F', 'L', 'O', 'W', 'E', 'R', 'U', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'wordsearch-4',
      type: 'wordsearch',
      label: 'Non Living Things ',
      data: {
        title: 'Find 13 non living things',
        words: [
          {
            word: ['C', 'H', 'A', 'I', 'R'],
            marker: [0, 0, 0, 4]
          },
          {
            word: ['R', 'O', 'C', 'K'],
            marker: [0, 4, 3, 4]
          },
          {
            word: ['B', 'O', 'O', 'K'],
            marker: [1, 2, 1, 5]
          },
          {
            word: ['B', 'E', 'D'],
            marker: [1, 2, 3, 2]
          },
          {
            word: ['T', 'A', 'B', 'L', 'E'],
            marker: [4, 0, 4, 4]
          },
          {
            word: ['B', 'R', 'I', 'C', 'K'],
            marker: [2, 7, 2, 3]
          },
          {
            word: ['N', 'E', 'W', 'S', 'P', 'A', 'P', 'E', 'R'],
            marker: [5, 0, 5, 8]
          },
          {
            word: ['M', 'A', 'G', 'A', 'Z', 'I', 'N', 'E'],
            marker: [6, 0, 6, 7]
          },
          {
            word: ['P', 'E', 'N'],
            marker: [1, 0, 3, 0]
          },
          {
            word: ['P', 'E', 'N', 'C', 'I', 'L'],
            marker: [7, 0, 7, 5]
          },
          {
            word: ['T', 'O', 'Y'],
            marker: [1, 1, 3, 1]
          },
          {
            word: ['C', 'L', 'O', 'C', 'K'],
            marker: [3, 8, 3, 4]
          },
          {
            word: ['S', 'O', 'F', 'A'],
            marker: [4, 5, 4, 8]
          }
        ],
        table: [
          ['C', 'P', 'E', 'N', 'T', 'N', 'M', 'P'],
          ['H', 'T', 'O', 'Y', 'A', 'E', 'A', 'E'],
          ['A', 'B', 'E', 'D', 'B', 'W', 'G', 'N'],
          ['I', 'O', 'K', 'M', 'L', 'S', 'A', 'C'],
          ['R', 'O', 'C', 'K', 'E', 'P', 'Z', 'I'],
          ['M', 'K', 'I', 'C', 'S', 'A', 'I', 'L'],
          ['O', 'J', 'R', 'O', 'O', 'P', 'N', 'G'],
          ['M', 'F', 'B', 'L', 'F', 'E', 'E', 'Q'],
          ['W', 'U', 'H', 'C', 'A', 'R', 'J', 'B']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      label: 'Getting to know India - Reading',
      type: 'passage',
      id: 'gettingtoknowindia',
      data: {
        title: 'Getting to know India',
        text: `Rivers, mountains, plateaus, plains, islands, and other features can be found across our country. On three sides, the Indian subcontinent is surrounded by water, which narrows as it moves south. This area is known as Indian Peninsula.
The majestic Himalayan mountains form our northern border.          
Forests, plains, and deserts can be found across our land.          
Our country has a big area to cover. The height above sea level varies and can reach 8000 metres or more.          
In our country, there are people from many classes, tribes, and religions.          
It is possible to hear a variety of languages. In addition, different regions have diverse food, clothes, festivals, and celebrations.          
Wheat is a major crop in the northern states. In the south and along the coast, rice is a major crop. In central India, jowar is grown on a big scale.          
New Delhi is India's capital. Rajasthan is India's largest state in terms of land area. Madhya Pradesh comes in second. The state of Maharashtra is ranked third. Goa is the smallest state in India.`
      }
    },
    {
      label: 'Fill in the blanks -1',
      type: 'matchByDragDrop',
      id: 'gettingtoknowindiafilldrag-1',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `*Diversity* has a significant effect on our lifestyle, traditions and culture.
Historical forts are also known as *sea forts*.
Landforms, water bodies, forests are *geographical* features.
The *Lakshadweep* islands are situated in Arabian sea.
There are *twenty eight* states in India.
`
      }
    },
    {
      id: 'gettingtoknowindiamatch-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Northern region, Wheat
Southern region, Rice
Central region, Jowar
India's capital, New Delhi
Union territories, Eight`,
        title: 'Match the following'
      }
    },
    {
      label: 'Answer the following in one word',
      type: 'matchByDragDrop',
      id: 'gettingtoknowindiafilldrag-2',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        fontSize: '1.3rem',
        text: `Largest state- *Rajasthan*
State born in 2014- *Telangana*
The state in which apples are grown- *Jammu and Kashmir*
The part which is surrounded by the water on three sides- *Indian Peninsula*
Fifth largest state- *Gujarat*`
      }
    }
  ]
};
