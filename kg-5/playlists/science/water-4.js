export default {
  label: 'Water Cycle',
  id: 'water-4',
  pdf: 'water-4.pdf',
  lockAfter: 3,
  list: [
    {
      label: 'Water - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Water',
        text: [
          `# Three states of water
Water occurs naturally in three forms: ice, water and water vapour. These forms are also called states of water. Ice is in solid form, water is in liquid form and water vapour is in gaseous form. These states occur naturally because of temperature changes. Water becomes ice in cold regions, remains as water in oceans/rivers and becomes water vapour due to the heat of the Sun.
We measure heat and cold using temperature. The natural temperature is known as room temperature. When we get fever, our body temperature will raise. We can measure temperature using a thermometer
At temperature below 0° C, water becomes ice. This process is called freezing.
# Water Cycle
Continuous movement of water from the Earth to the atmosphere and back to the Earth is known as water cycle or hydrologic cycle. Water cycle consists of the following four stages.
# Evaporation
Water can slowly convert to water vapour even in room temperature. It is called evaporation. It takes place from the surfaces of rivers, oceans, lakes and ponds. Wet clothes dry when exposed to sunlight or air due to evaporation.  Plants also release water by transpiration.
# Condensation
The process of converting water vapour into water on cooling is called condensation. Water vapour in the atmosphere being lighter, rises up and cools down. It further condenses to form tiny water droplets.
# Precipitation
The water droplets join together to form clouds. As they get cooler, the droplets become bigger and heavier and fall as rain. If the air is very cold, they freeze to fall as hail of snow.
# Flowing back to Oceans
Rain water forms streams and springs which join together to form rivers. Rivers flow finally into the sea and ocean thereby completing the cycle.
# Activity 1
Take half a glass of water. Clean the outside part of the glass. Add few ice cubes and leave it for 5-10 minutes. You will observe drops of water appearing outside the glass. This happens because the water vapour in the air condenses on the cold surface of the glass.
# Let us do
1. Fill water in an ice tray and keep it in the freezer. After few hours, take it out. What happened to the water?
2. Now keep this ice tray on a table for some time. What happens to the ice?
3. Pour water from the ice tray into a kettle. Ask an elder at your home to heat the kettle and observe the mouth of the kettle when the water starts boiling. What do you see?
# Rainwater harvesting
It is the process of collecting and storing rainwater for future use. Rainwater can be collected in natural reservoirs or artificial tanks. Roof top harvesting is also a type of rainwater harvesting. The rainwater on the top of the building is collected and passed into the ground through pipes. Water passing through the pipes enters the pit which consist of gravels and coarse sand. As it passes impurities are filtered and stored as ground water. Do you know?
1. Each day, we lose a little more than a cup of water when we exhale.
2. 73% of our brain's mass consists of water.
3. The Antarctic region has about 70% of the world's fresh water.`
        ]
      }
    },
    {
      label: 'Choose the Correct Answer - Water',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Water is the most __________ resource on the Earth',
            options: 'precious, solid, gas'
          },
          {
            qText: 'Water exists in _________ states.',
            options: 'three, four, two'
          },
          {
            qText: ' At temperature below _______ water freezes to form ice.',
            options: '0° C, 10° C, 100° C'
          },
          {
            qText:
              '___________ is the process by which water becomes water vapour.',
            options: 'Evaporation, Condensation, Freezing'
          },
          {
            qText: 'Which controls the ecological functions of life?',
            options: 'Water cycle, Bicycle,  Recycle Water'
          },
          {
            qText:
              'Water is present in huge quantities as vapour and clouds in the ________',
            options: 'atmosphere,sky,earth,rain'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Water is converted into *water vapour (ice cube)* when heated.
Water becomes ice on *freezing (heating)*.
Water droplets combine to form *clouds (rain)*.
Water cycle increases the availability of *ground (sea) *water.
Rainwater *harvesting (recyling) * helps in improving ground water.`
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water becoming water vapour on heating is called vapourization.
Water is a good example for the three states of matter.
Water cycle controls Earth's temperature.`
          },
          {
            name: 'False',
            text: `37% of our brain's mass consists of water.
At 100° C, water becomes ice.
Roof top harvesting method is used in agriculture field.`
          }
        ]
      }
    },
    {
      label: 'Water, Ice and Vapor',
      type: 'matchByDragDrop',
      id: 'drag-drop-water',
      data: {
        text: `If you *heat* water to a temperature of *100 °C*, it *vapourize* to form water vapour.
If you *cool* water to a temperature of *0 °C*, it *freezes* to form ice.
Ice *melts* when we keep it in *room* temperature. `
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Freezing Point, 0° C
Boiling Point, 100° C
Temperature, Thermometer
Water, 3 States
Condensation, Clouds`,
        title: 'Match the following'
      }
    },
    {
      label: 'Temperature',
      type: 'sorting',
      id: 'sorting',
      data: {
        title:
          'Sort the below items based on their usual temperature. (Coolest should come at the top)',
        printTitle: 'Rearrage the below based on their usual temparature.',
        text: 'ice cubes, cool drinks, tap water, hot water, boiling water'
      }
    },
    {
      label: 'Storing and Fetching Water',
      type: 'passage',
      id: 'reading-3',
      data: {
        title: 'Storing and Fetching Water',
        text: [
          `In olden days, people lived near to rivers and other water sources, so that they get access to water.
Later they dug wells on the ground, so that they can use the available ground water. They were called draw wells. Water was taken out using a bucket tied to a rope. Fetching water will be easier with the help of pulley or rotating rod.
In olden days, bunds were built across the rivers to save water. They also built reservoirs and tanks to save water. They built cannels to take river water and rain water to the tanks. These made life possible in the summer and during times when there was no rain.
# New Storage Methods
# Dams
Big dams were built across rivers to store large quantity of water. These dams also helps in generating electicity.
# Borewells
These wells are very deep and narrow. The groundwater is extracted with the help of electric pumps and motors. 
# Water Towers
They are build in our locality and water is pumped and stored at a height. It is connected through pipes and reaches our bathroom and kitchen.`,

          { type: 'img', src: 'img/science/water-tower.png' },
          `In olden days, there was no tap water in the houses. People have to walk a distance to get water. But nowadays, we get water in our houses directly through pipes. In case if there is any problem in getting water, we will call a plumber who will fix the problem for us.`
        ]
      }
    },
    {
      label: 'Old ways Vs New ways',
      id: 'old-new',
      type: 'group',
      data: {
        title: 'Drag and drop the water storage techniques accordingly. ',
        types: [
          {
            name: 'Old ways',
            text: 'Draw Wells, Bunds, Reservoirs'
          },
          {
            name: 'New ways',
            text: 'Dams, Borewells, Water Tower'
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which is the most important technique for water storage?',
            options: 'Dams, Reservoirs, Forts'
          },
          {
            qText: 'Which of these does not require machine work?',
            options: 'Draw-wells, Borewells, Dams'
          },
          {
            qText: '___________ were built in areas with no major river.',
            options: 'Reservoirs, Dams, Borewells'
          },
          {
            qText:
              'We get water in our house through pipes connected from a ________.',
            options: 'water tower, dam, river'
          }
        ]
      }
    },

    {
      label: 'Clean Water - Reading',
      type: 'passage',
      id: 'reading-5',
      data: {
        title: 'Clean Water',
        text: `Earlier, earthen pots and copper pots were used to store water at homes. But these days we generally use plastic or steel bottles and containers for the same.
# How to keep water clean:
1. Keep the containers covered to prevent dust and insects.
2. Keep a dipper to take out water from these containers, else dirt from our hands will contaminate the water. Also, we can have a tap on these containers to avoid contamination.
3. Wash the container before refilling it.
# Do you know?
People think that we can't drink water from previous day. But the truth is, water remains as clean as it was before if kept safely. So, we can drink the water we stored on previous day.
# New Word!
1. Water tower: It is basically a huge water tank and water is stored on its top. Electric pumps and motors are used to raise the water to its top. It stores purified water and supplies water to different areas through a large network of pipes.`
      }
    },
    {
      label: 'How water reaches us?',
      type: 'sorting',
      data: {
        title: 'Arrange these steps in the order of occurrence.',
        text:
          'Source of water, Purification of water, Storage of water in water tower, Spread of water through pipelines, Reaching homes and industries'
      },
      id: 'sorting-5'
    },
    {
      id: 'match-5',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Pure water, Water tower
Copper pots, Old way
Water supply, Pipelines
Groundwater, Wells
Potable water, Drinkable`,
        title: 'Match the following'
      }
    }
    /*
    {
      id: 'wordsearch',
      label: 'WordSearch',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['B', 'O', 'R', 'E', 'W', 'E', 'L', 'L', 'S'],
            marker: [7, 0, 7, 8]
          },
          {
            word: ['P', 'A', 'N', 'P', 'O', 'I'],
            marker: [3, 1, 8, 1]
          },
          {
            word: ['D', 'A', 'M', 'S'],
            marker: [4, 8, 7, 8]
          },
          {
            word: ['W', 'E', 'L', 'L', 'S'],
            marker: [0, 3, 4, 7]
          },
          {
            word: ['D', 'R', 'A', 'W', 'W', 'E', 'L', 'L', 'S'],
            marker: [0, 0, 0, 8]
          },
          {
            word: ['B', 'U', 'N', 'D', 'S'],
            marker: [4, 3, 4, 7]
          },
          {
            word: ['F', 'O', 'R', 'T', 'S'],
            marker: [2, 0, 2, 4]
          }
        ],
        title: 'Find the given words from the table.',
        lang: 'en',
        table: [
          ['D', 'A', 'F', 'U', 'K', 'L', 'V', 'B', 'D'],
          ['R', 'A', 'O', 'P', 'A', 'N', 'P', 'O', 'I'],
          ['A', 'B', 'R', 'H', 'H', 'S', 'K', 'R', 'B'],
          ['W', 'H', 'T', 'H', 'B', 'L', 'C', 'E', 'F'],
          ['W', 'E', 'S', 'H', 'U', 'O', 'A', 'W', 'O'],
          ['E', 'T', 'L', 'B', 'N', 'J', 'H', 'E', 'B'],
          ['L', 'T', 'D', 'L', 'D', 'E', 'D', 'L', 'M'],
          ['L', 'Q', 'R', 'H', 'S', 'M', 'G', 'L', 'A'],
          ['S', 'V', 'O', 'M', 'D', 'A', 'M', 'S', 'G']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword',
      label: 'Crossword',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'borewell',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'extracts ground water through motors.',
            direction: 'down'
          },
          {
            word: 'bunds',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'made on the banks of river to save water.',
            direction: 'across'
          },
          {
            word: 'pipes',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'They helps water to reach our house',
            direction: 'across'
          },
          {
            word: 'panpoi',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'free drinking water on roadsides.',
            direction: 'down'
          },
          {
            word: 'dams',
            marker: {
              x: 7,
              y: 4
            },
            hint: 'stores water as well as generates energy.',
            direction: 'down'
          },
          {
            word: 'tanks',
            marker: {
              x: 2,
              y: 3
            },
            hint: 'most common storage in big buildings.',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['B', 'U', 'N', 'D', 'S', '', '', ''],
          ['O', '', '', '', '', '', '', ''],
          ['R', '', '', 'P', 'I', 'P', 'E', 'S'],
          ['E', '', 'T', 'A', 'N', 'K', 'S', ''],
          ['W', '', '', 'N', '', '', '', 'D'],
          ['E', '', '', 'P', '', '', '', 'A'],
          ['L', '', '', 'O', '', '', '', 'M'],
          ['L', '', '', 'I', '', '', '', 'S']
        ]
      }
    },
    {
      id: 'wordsearch-2',
      label: 'WordSearch - 2',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['F', 'I', 'L', 'T', 'R', 'A', 'T', 'I', 'O', 'N'],
            marker: [0, 0, 9, 9]
          },
          {
            word: ['A', 'L', 'U', 'M'],
            marker: [5, 5, 5, 8]
          },
          {
            word: ['S', 'E', 'T', 'T', 'L', 'I', 'N', 'G'],
            marker: [1, 3, 8, 3]
          },
          {
            word: ['M', 'I', 'C', 'R', 'O', 'B', 'E', 'S'],
            marker: [1, 4, 8, 4]
          },
          {
            word: ['B', 'O', 'I', 'L', 'I', 'N', 'G'],
            marker: [0, 9, 6, 9]
          },
          {
            word: ['S', 'A', 'L', 'I', 'N', 'E'],
            marker: [9, 0, 9, 5]
          },
          {
            word: ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'],
            marker: [2, 7, 9, 7]
          }
        ],
        title: 'Find the given words from the table.',
        lang: 'en',
        table: [
          ['F', 'G', 'X', 'S', 'O', 'F', 'M', 'E', 'C', 'S'],
          ['X', 'I', 'F', 'T', 'B', 'U', 'N', 'U', 'E', 'A'],
          ['J', 'T', 'L', 'O', 'V', 'Y', 'Y', 'T', 'Z', 'L'],
          ['S', 'S', 'E', 'T', 'T', 'L', 'I', 'N', 'G', 'I'],
          ['B', 'M', 'I', 'C', 'R', 'O', 'B', 'E', 'S', 'N'],
          ['X', 'C', 'D', 'Y', 'R', 'A', 'Q', 'E', 'T', 'E'],
          ['V', 'J', 'G', 'A', 'O', 'L', 'T', 'V', 'G', 'R'],
          ['G', 'E', 'S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'],
          ['O', 'D', 'V', 'G', 'G', 'M', 'S', 'M', 'O', 'F'],
          ['B', 'O', 'I', 'L', 'I', 'N', 'G', 'Z', 'T', 'N']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword-2',
      label: 'Crossword - 2',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'microscope',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'used to see micro-organisms.',
            direction: 'across'
          },
          {
            word: 'salt',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'dissolved in seawater.',
            direction: 'down'
          },
          {
            word: 'filtration',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'process of separating particles from water.',
            direction: 'across'
          },
          {
            word: 'boiling',
            marker: {
              x: 9,
              y: 1
            },
            hint: 'kills micro-organisms present in water.',
            direction: 'down'
          },
          {
            word: 'alum',
            marker: {
              x: 1,
              y: 4
            },
            hint: 'helps particles to settle down in water quickly.',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['M', 'I', 'C', 'R', 'O', 'S', 'C', 'O', 'P', 'E'],
          ['', '', '', '', '', 'A', '', '', '', 'B'],
          ['', '', '', '', '', 'L', '', '', '', 'O'],
          ['', '', '', '', '', 'T', '', '', '', 'I'],
          ['', 'A', 'L', 'U', 'M', '', '', '', '', 'L'],
          ['', '', '', '', '', '', '', '', '', 'I'],
          ['F', 'I', 'L', 'T', 'R', 'A', 'T', 'I', 'O', 'N'],
          ['', '', '', '', '', '', '', '', '', 'G']
        ]
      }
    }*/
  ]
};
