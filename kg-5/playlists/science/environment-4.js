export default {
  id: 'environment-4',
  label: 'Green Environment',
  lockAfter: 4,
  list: [
    {
      label: 'Green Environment - Reading',
      type: 'passage',
      id: 'raeding',
      data: {
        title: 'Green Environment',
        text: `# What are wastes?
Simply put, all the unwanted and thrown away materials are called wastes. They can be solids, liquids or gases and are produced from households, industries, hospitals etc. resulting in environmental pollution.
# Waste Management
We need to make sure that our environment does not get dirty and polluted, and thus, management of both biodegradable and non-biodegradable wastes is necessary.
# Steps in waste management
1. Separation of Waste
2. Waste collection and transportation
3. Waste recycling and composting
4. Waste disposal
# What are the three R‛s in waste management?
1. Reduce: make/ use less material.
2. Reuse: using the same thing again.
3. Recycle: make new things out of scarp. It also helps in conservation of resources.
# Waste Separation
1. Biodegradable: left over food, vegetable waste etc.
2. Recyclable: paper waste, glass waste, aluminum waste etc.
3. Non-recyclable: plastic wrap, wax boxes etc.
# Environment friendly materials
Micro-organisms can decompose some waste materials and make it beneficiary for the soil. Such materials are called environment friendly materials.`
      }
    },
    {
      label: 'Biodegradable vs Non biodegradable',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify the below items based on its degrading capacity',
        types: [
          {
            name: 'Biodegradable',
            text: 'Plants, Fruits, Flowers, Vegetables, Animals'
          },
          {
            name: 'Non biodegradable',
            text:
              'Glass, Metal, Electronic devices, Plastics, Batteries, Computer parts'
          }
        ]
      }
    },
    {
      label: ' Blue waste vs Red waste',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Classify the below items based on its degrading capacity',
        types: [
          {
            name: 'Blue waste',
            text:
              'newspapers, magazines, glass, cardboard, food tins, tetra packs'
          },
          {
            name: 'Red waste',
            text: 'plastic wrap, bubble wrap, wax, used towels'
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer -Green Environment',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '________ is used to make bags, dustbins and tooth brushes.',
            options: 'Bamboo, cotton,jute'
          },
          {
            qText:
              'Plastic plates stay in the environment for over _______ years.',
            options: '1000, 100, 2000'
          },
          {
            qText:
              'Glass containers for food and beverages are ________ recyclable.',
            options: '100%, 90%, 80%'
          },
          {
            qText:
              'Moving the waste from one place to another is called _________.',
            options: 'Transportation, waste collection, land-filling'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop -Green Enviroment',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Things that can be decomposed or broken down by microorganisms are *biodegradable*.
Picking up the waste is called *Waste collection*.
*Compost* makes the soil fertile.
*Reduce* is to make or use less materials.
*Reuse* is using a thing repeatedly for the same or for another purpose.`
      }
    },
    {
      id: 'fillup',
      label: 'Green Environment- Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Recycle (reuse)* is to take materials from things you throw away and make new products by using them.
*Conservation (preservation)* of environment means to protect all things found in nature.
*Unwanted (wanted)* materials pollute our environment.
*Reducing (reusing)* the waste is the first and most important step in waste management.
The first‘R‛ in the three R‛s is *reduce (reuse)*.`
      }
    },
    {
      label: 'Green Environment - True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Green bin stands for biodegradable waste.
Blue bins stands for recyclable waste.
Red bin stands for non- recyclable waste.
Picking up the waste is called Waste collection.`
          },
          {
            name: 'False',
            text: `Glass cannot be recycled.
Metals are biodegradable.
Plastics are not hazardous to animals.
Food waste and plastics waste are collected together.`
          }
        ]
      }
    },
    {
      label: 'Green Environment - Good vs Bad',
      id: 'good-bad',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentences as Good and Bad for the environment.',
        types: [
          {
            name: 'Good',
            text: `Recyle old newspapers.
Replace plastic drinking bottles with glass or steel bottles.
Save water.
Adapt rain water harvesting techniques.
Reuse non biodegradable materials.
Plant a tree.`
          },
          {
            name: 'Bad',
            text: `Use disposable plates and cups.
Buying single use items.
Using pesticides.
Not closing the tap after use.
Throwing out recyclables.
Putting non-recyclable items in the recycling bin.
Throwing out electronics.`
          }
        ]
      }
    },
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
      editable: true,
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
      editable: true,
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
    }
  ]
};
