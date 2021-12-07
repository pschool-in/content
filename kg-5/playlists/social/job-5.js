export default {
  id: 'job-5',
  label: 'Job-5',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Agriculture- Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Agriculture ',
        text: `Agriculture is our necessity and includes the preparation of soil for cultivation, growing crops, and raising livestock. Since our country is an agricultural country, agricultural development is important for the country's economic growth.
# Farmers
They cultivate crops and rear animals. Our country is a land of farmers and they're the backbone of our economy.
# Subsistence farming
In this, crops are cultivated and they are only used by the farmer's family. Small and marginal farmers practice this on small pieces of land they own. The method of farming is generally archaic.
# Commercial farming
In this type of farming, crops are cultivated and are used for commercial purposes. This is done using modern techniques, tools, and machines.
# Plantation farming
It is practiced on lands where single cash crops are cultivated on a large scale. For example, tea, coffee, rubber, etc.
# Mixed farming
It means, rearing of animals along with cultivation. It is very economical.
# Do you know?
1. Farmers who cultivate in areas less than 1 hectare are called micro farmers.
2. The government has established the Food Corporation of India (FCI) for purchasing farm products directly from the farmers, at reasonable rates.`
      }
    },
    {
      label: 'Irrigation - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Irrigation',
        text: `In agriculture, sufficient water is supplied to the crops in the fields through irrigation.
# Well irrigation
This is a less expensive method in which water is drawn out from nearby wells for irrigation.
# Canal irrigation
It is the most important type and in this, canals of water are dug as stripes between the crops. These canals carry water from a nearby river or a reservoir to the field of crops.
# Sprinkler irrigation
This is similar to a waterfall. In this, water is sprayed over the crops through sprinklers.
# Drip irrigation
This method conserves both water and soil nutrients. In this, water drips slowly into the roots of plants through pipes.
# Do you know?
1. Central Ground Water Board (CGWB) monitors the level and nature of groundwater.
2. Green Revolution increased crop production as a result of a variety of seeds, pesticides, and new agricultural techniques.
3. Horticulture is the science of cultivating fruits, vegetables, flowers, or ornamental plants.`
      }
    },
    {
      label: 'Fiil by drag',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*CGWB* monitors the level and nature of groundwater.
*Horticulture* is the science of cultivating fruits, vegetables, flowers, or ornamental plants.
*Green Revolution* increased crop production.
Farmers who cultivate in areas less than 1 hectare are called *micro farmers*.
The government has established *FCI*for purchasing farm products.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Which industry do these raw materials belong to?',
        questions: [
          {
            qText: ' __________ is the cultivation of crops.',
            options: 'Agriculture, Irrigation, Excavation'
          },
          {
            qText: 'A __________ is a person who is engaged in agriculture.',
            options: 'farmer, doctor, teacher'
          },
          {
            qText:
              '__________ farming refers to the raising of animals along with the crops.',
            options: 'Mixed, Commercial, Subsistence'
          },
          {
            qText: '__________ monitors the level and nature of groundwater.',
            options:
              'Central Ground Water Board, Metro Water Board, Sewage Water Board'
          },
          {
            qText: '__________saves water and soil nutrients.',
            options: 'Drip irrigation, Sprinkler system, Well irrigation'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Rice is the leading food crop in Tamil Nadu.
Drip irrigation is a type of micro-irrigation system.
CGWB monitors the level and nature of groundwater.`
          },
          {
            name: 'False',
            text: `Plantation farming is very economical.
Drip irrigation is similar to a waterfall.
Subsistence farming means the rearing of animals along with cultivation.`
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['P', 'L', 'A', 'N', 'T', 'A', 'T', 'I', 'O', 'N'],
            marker: [0, 9, 9, 9]
          },
          {
            word: ['C', 'O', 'M', 'M', 'E', 'R', 'C', 'I', 'A', 'L'],
            marker: [1, 0, 1, 9]
          },
          {
            word: ['R', 'E', 'V', 'O', 'L', 'U', 'T', 'I', 'O', 'N'],
            marker: [9, 0, 9, 9]
          },
          {
            word: ['C', 'R', 'O', 'P', 'S'],
            marker: [1, 6, 5, 6]
          },
          {
            word: ['D', 'R', 'I', 'P'],
            marker: [0, 5, 3, 5]
          },
          {
            word: ['F', 'A', 'R', 'M', 'E', 'R'],
            marker: [4, 0, 9, 0]
          },
          {
            word: ['W', 'E', 'L', 'L', 'S'],
            marker: [5, 2, 5, 6]
          },
          {
            word: ['C', 'A', 'S', 'H'],
            marker: [7, 4, 4, 7]
          }
        ],
        table: [
          ['R', 'C', 'D', 'S', 'F', 'A', 'R', 'M', 'E', 'R'],
          ['O', 'O', 'Z', 'V', 'O', 'M', 'A', 'V', 'L', 'E'],
          ['J', 'M', 'S', 'L', 'E', 'W', 'S', 'U', 'L', 'V'],
          ['I', 'M', 'G', 'H', 'S', 'E', 'R', 'D', 'N', 'O'],
          ['M', 'E', 'J', 'L', 'S', 'L', 'Y', 'C', 'C', 'L'],
          ['D', 'R', 'I', 'P', 'P', 'L', 'A', 'Q', 'J', 'U'],
          ['D', 'C', 'R', 'O', 'P', 'S', 'M', 'L', 'O', 'T'],
          ['A', 'I', 'I', 'A', 'H', 'E', 'Q', 'T', 'I', 'I'],
          ['K', 'A', 'B', 'Z', 'N', 'C', 'L', 'Q', 'F', 'O'],
          ['P', 'L', 'A', 'N', 'T', 'A', 'T', 'I', 'O', 'N']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword',
      type: 'crossword',
      label: 'Crossword',
      data: {
        title: 'Identify the terms with the help of hints. ',
        words: [
          {
            word: 'sprinkler',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'similar to a waterfall.',
            direction: 'across'
          },
          {
            word: 'Drip',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'conserves water and soil nutrients.',
            direction: 'down'
          },
          {
            word: 'mixed',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'rearing of animals with cultivation.',
            direction: 'down'
          },
          {
            word: 'cash',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'crops are grown on a large scale.',
            direction: 'across'
          },
          {
            word: 'canal',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'laid as strips between the crops.',
            direction: 'down'
          },
          {
            word: 'well',
            marker: {
              x: 3,
              y: 7
            },
            hint: 'uses groundwater.',
            direction: 'across'
          }
        ],
        table: [
          ['', '', 'D', '', '', '', '', '', ''],
          ['S', 'P', 'R', 'I', 'N', 'K', 'L', 'E', 'R'],
          ['', '', 'I', '', '', '', '', '', ''],
          ['M', '', 'P', '', '', 'C', 'A', 'S', 'H'],
          ['I', '', '', '', '', 'A', '', '', ''],
          ['X', '', '', '', '', 'N', '', '', ''],
          ['E', '', '', '', '', 'A', '', '', ''],
          ['D', '', '', 'W', 'E', 'L', 'L', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-2',
      type: 'wordsearch',
      label: 'WordSearch - 2',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['W', 'H', 'E', 'A', 'T'],
            marker: [0, 1, 0, 5]
          },
          {
            word: ['R', 'I', 'C', 'E'],
            marker: [2, 1, 5, 1]
          },
          {
            word: ['M', 'A', 'I', 'Z', 'E'],
            marker: [2, 5, 6, 5]
          },
          {
            word: ['J', 'O', 'W', 'A', 'R'],
            marker: [2, 3, 6, 3]
          },
          {
            word: ['C', 'O', 'F', 'F', 'E', 'E'],
            marker: [1, 7, 6, 7]
          },
          {
            word: ['T', 'E', 'A'],
            marker: [7, 0, 7, 2]
          },
          {
            word: ['R', 'U', 'B', 'B', 'E', 'R'],
            marker: [1, 4, 6, 4]
          }
        ],
        table: [
          ['H', 'B', 'I', 'Y', 'M', 'U', 'C', 'T'],
          ['W', 'I', 'R', 'I', 'C', 'E', 'D', 'E'],
          ['H', 'W', 'C', 'X', 'A', 'A', 'O', 'A'],
          ['E', 'Q', 'J', 'O', 'W', 'A', 'R', 'X'],
          ['A', 'R', 'U', 'B', 'B', 'E', 'R', 'U'],
          ['T', 'B', 'M', 'A', 'I', 'Z', 'E', 'S'],
          ['W', 'O', 'X', 'B', 'S', 'T', 'J', 'J'],
          ['W', 'C', 'O', 'F', 'F', 'E', 'E', 'C']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword-2',
      type: 'crossword',
      label: 'Crossword - 2',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Drying',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'Process in which foodstuffs are dried',
            direction: 'across'
          },
          {
            word: 'Rabi',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'Season from October to March',
            direction: 'down'
          },
          {
            word: 'Zaid',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'Crops grown between kharif and rabi seasons',
            direction: 'across'
          },
          {
            word: 'Barley',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'Major cereal grain',
            direction: 'across'
          },
          {
            word: 'Yield',
            marker: {
              x: 7,
              y: 2
            },
            hint: 'Measurement of the amount of a crop grown',
            direction: 'down'
          },
          {
            word: 'Farmer',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'Person engaged in agriculture',
            direction: 'down'
          }
        ],
        table: [
          ['', 'D', 'R', 'Y', 'I', 'N', 'G', ''],
          ['', '', 'A', '', '', '', '', ''],
          ['', 'F', 'B', 'A', 'R', 'L', 'E', 'Y'],
          ['Z', 'A', 'I', 'D', '', '', '', 'I'],
          ['', 'R', '', '', '', '', '', 'E'],
          ['', 'M', '', '', '', '', '', 'L'],
          ['', 'E', '', '', '', '', '', 'D'],
          ['', 'R', '', '', '', '', '', '']
        ],
        lang: 'en'
      }
    }
  ]
};
