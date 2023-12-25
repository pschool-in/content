export default {
  id: 'water-3',
  label: 'Water',
  pdf: 'water-3.pdf',
  lockAfter: 3,
  list: [
    {
      label: 'Water - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Water',
        text: [
          `Water is one of the most important resources on Earth. All living things need water to survive. People use water for various purposes. Rain is one of the main sources of water.
# Potable Water
Drinking water is known as potable water. Not all water can be used for drinking or cooking.
Potable Water is:
1. free from harmful chemicals.
2. transparent.
3. odourless and colourless.
4. free from bacteria that cause diseases.
# Sources of Drinking Water
Water is available through many sources, but not all of them are suitable for drinking. It can be boiled to kill the germs and to make it suitable for drinking.
# Saving Water
Only 3% of the water in the entire Earth is freshwater. Thus, water is precious and we should never waste it.
Some ways to prevent the waste of water:
1. Never let water overflow from buckets.
2. Wash fruits and vegetables in a bowl and not under a running tap.
3. Always close the tap while brushing your teeth.
4. Pour leftover water in a plant.
5. Close the tap properly after use.
6. Use a sprinkler to water the garden.
# Conservation of Water Bodies
Rainwater flows through streams and rivers. Some water gets collected in low-lying areas like ponds and lakes. Rain water also seeps into the ground and is available as underground water. River waters can be blocked by building a dam, and we can use them in the Summer.
# Lake
It is a large area filled with water and surrounded by land. It is usually a part of a river or some other water source.
# Pond
A pond is a body of stagnant water, either natural or artificial and is smaller than a lake.
# Tanks
A water tank is a container that stores water for our daily use.
# Methods to Conserve Water Bodies
1. Deepening of ponds and lakes
2. Plant trees at the bank of water bodies
3. Reduce water pollution
4. Avoid digging too many wells in a region
# Waterborne diseases
Stagnant water is a breeding ground for mosquitoes that result in Malaria and Dengue.
Waterborne diseases such as cholera, dysentery, and typhoid are caused by drinking unclean water.
# Experiment
Let us assemble a Simple Pump`,
          { type: 'img', src: 'science/waterPumpExperiment.jpg' },
          `# Materials needed
A hollow tube - PVC, metal or even a long papaya stem
# Procedure
Hold the tube with your left hand and move it up and down into a bucket of water. Keep your right palm on top of the tube and open and close it with each up and down reciprocation. Soon, water will start squirting out. Here the up-down motion of the left hand does the pumping while the right palm acts like a valve.
# Do you know?
1. A camel can drink 60 to 100 liters of water at a time and live without water for several days.
2. World Water Day is on 22nd March.`
        ]
      }
    },
    {
      label: 'Choose the best Answer - Water',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which is the main source of water?',
            options: 'Rain, Lake, Sea'
          },
          {
            qText:
              ' Only _____ of the water in the entire Earth is fresh water.',
            options: '3%, 0.3%, 30%'
          },
          {
            qText: 'By __________ water, we can kill the germs present in it.',
            options: 'boiling, cooling, filtering'
          },
          {
            qText: 'Which of these is not true?',
            options:
              'We should always waste water, Plants and animals need water,  We should use water carefully,  Water is precious'
          },
          {
            qText: 'Where does the rainwater go?',
            options:
              '* Seeps into the ground, * Plants absorb the water, * Mingles with sea and ocean, * Mixes with lake and pond'
          },
          {
            qText: 'Which animal can live without water for several days?',
            options: 'camel, elephant, lion, tiger'
          },
          {
            qText: 'World water day is observed on _________.',
            options: 'March 22, March 2, May 2, May 22'
          },
          {
            qText: 'Which of the following can be man-made?',
            options: 'pond, sea, river, ocean'
          },
          {
            qText: 'Which of the following is responsible for water in a well?',
            options: 'groundwater, river, water tank, stream'
          },
          {
            qText:
              'Which of the following does not relate to preserving water?',
            options:
              'taking an umbrella while going out in rain, avoiding water pollution, planting more trees,saving rain water'
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        printTitle: 'Underline the odd one',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Hill, Lake, Pond, Sea
Rose, Lily, Lotus, Water Hyacinth   
Fish, Horse, Tiger, Cow
Combing, Swimming, Washing, Bathing
Water Tank, Sea, Ocean, Lake
Ice Cream, Water, Ice, Vapour`
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
            text: `Saving water is our duty.
Always close the tap while brushing.
Planting more trees leads to rainfall.
It is necessary to collect rainwater.`
          },
          {
            name: 'False',
            text: `Living things do not need water.
A tank is larger than a reservoir.
We should wash our vehicles every day.
We should bathe in the shower to save water.`
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
        printTitle: 'Fill in the blanks.',
        text: `Drinking water is known as *potable (pot)* water.
Water that collects in the low-lying areas is called *lake (sea)*.
It is our *responsibility (work)* to keep the public water resources clean.
The largest source of water on the earth is *ocean (sea)*.
*All (Few)* living things need water.
*Malaria (Cholera)* is caused by mosquitoes.`
      }
    },
    {
      label: 'Experiments with Water',
      type: 'passage',
      id: 'notes-more',
      data: {
        title: 'Experiments with Water',
        text: [
          `Add a spoon of salt to a cup of water and stir it with the spoon. Observe what happens. Repeat the same experiment using sand instead of salt. Observe the difference.
          # What mixes with water? 
          We can find salt dissolves in water. The added salt is not visible in the water. But sand doesn't dissolve in water. We can see them at the bottom of the cup.
          Substances like salt, sugar, and detergent dissolve in water. But oil, turmeric powder, sand, and sawdust don't dissolve in water.
          # Floats vs Sinks
          Matters that don't mix with water either float on the surface of the water or sink and settle at the bottom. If it is heavier than water then it sinks. If it is lighter than water then it floats.
          Things like coins, rocks, sand, marble sink in water. Things like wood, sponges, apples, paper, and erasers float in water.
# New Words!
1. Solution: The mixture of water and the substance dissolved in it is called a solution. Water retains the taste of the substance dissolved. For example, water with salt dissolved in it will taste salty.
2. ORS: It stands for Oral Rehydration Solution and is a solution of water, salt and sugar. People with upset stomachs can drink this.
3. Saline: It is usually a solution of salt and water that is given to patients in the hospitals through drips.
4. Micro-organism: An organism that is not visible to the naked eye. 'Microscopes' are the instruments used to see them. Some of these are very important and useful for both nature and us, humans.
# Do you know?
1. Sea water is unfit for drinking because it is saline.
2. The taste of well water differs from area to area. This is because the groundwater also dissolves different substances present in the soil.
3. Carbon dioxide is dissolved in water (under pressure) to make cold drinks.
4. Particles of soil are heavier than water but since they're small in size, they take time to sink. Also, swirling alum in water helps these particles to settle down faster.
5. Boiling the water kills micro-organisms present in it and makes it safe for drinking.`
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Salt and sugar *dissolve* in water.
Mixture obtained after dissolving a substance in water is called a *solution*.
Some microorganisms can cause *diseases* if they enter our body.
Things that float in water are *lighter*.
Things that sink in water are *heavier*.
*Alum* is swirled in muddy water to clean it.`
      }
    },
    {
      label: 'Classify: Dissolve',
      id: 'group-dissolve',
      type: 'group',
      data: {
        title: 'Identify what will dissolve in water.',
        types: [
          {
            name: 'Dissolve',
            text: 'Salt, Sugar, Detergent, Alum'
          },
          {
            name: 'Do not dissolve',
            text: 'Sand, Sawdust, Oil, Turmeric powder'
          }
        ]
      }
    },
    {
      label: 'Sink Vs Float',
      id: 'sink-float',
      type: 'group',
      data: {
        title: 'Identify what will sink and float in water.',
        types: [
          {
            name: 'Sink',
            text: 'Sand, Turmeric powder, Mud, Stone'
          },
          {
            name: 'Float',
            text: 'Leaves, Wood, Pencil, Flower, Paper'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `We need water to 
1. *wash* our face
2. *brush* our teeth
3. *cook* our food
4. *clean* the kitchen vessels
5. *grow* plants
6. *row* a bot`
      }
    },
    {
      label: 'Activities needing water',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify the activities that need water.',
        types: [
          {
            name: 'Needs water',
            text: 'Planting, Water coloring, Boating, Washing'
          },
          {
            name: "Doesn't need water",
            text: 'Playing, Singing, Running, Writing'
          }
        ]
      }
    },
    {
      type: 'sequence',
      label: 'Jumbled word',
      id: 'jumbled-words',
      data: {
        title: 'Find out the different sources of water.',
        text: 'rain, lake, pond, stream, well, sea, ocean'
      }
    },
    {
      label: 'Size of water bodies',
      type: 'sorting',
      id: 'sorting',
      data: {
        title:
          'Sort the water bodies based on their size. (Largest should come at the top)',
        printTitle: 'Order the below water bodies based on the size',
        text: 'ocean, sea, river, lake, pond, water tank'
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Sea, Salt Water
River, Fresh Water
Dengue, Mosquito
Typhoid, Unclean water
Well, Ground water`
      }
    }
    /*
    {
      id: 'notes-2',
      label: 'Our need For Water',
      type: 'passage',
      data: {
        title: 'Our need For Water',
        text: `# How do we know water is everywhere?
Apart from the water bodies like rivers, lakes and seas, there's plenty of water around us that we don't notice. For example, tears, saliva, water running from our nose, blood, lemon juice, juicy fruits, cucumber, tomato and many other things.
# Why do we feel thirsty?
Our body is 70% made of water. Its doesn't mean that it has flowing water within. It means that 70% functioning of our body is dependent on water. For example:
1. Water keeps our blood thin.
2. It helps to digest our food.
3. Urination of waste materials. 
Therefore, we must have sufficient water in our body for the easy performance of these functions. In case there's not enough water, we feel thirsty.
# Fun Fact!
There are some plants like Bulrushes, Lotus, Water chestnut, Hyacinth and Spider plant that grow only in water. If we try to grow them in soil, they simply don't.
# Importance of water
Water is important, not just for us, but also for the animals, plants and all other living beings. We need it for drinking, cleaning, bathing, cooking, agriculture, industries etc.
Water is very important in our lives!
`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `Water keeps the blood *thin (thick)*.
Animals *bathe (sleep)* in water.
Water is  * very (less )* important in the lives of people.
Roots of the plant absorb rainwater that has *seeped (sowed)* into the soil.
People take care to provide drinking water for the animals they *keep (don't keep)*.
We go near a waterhole in a forest to see *wild (domestic)* animals.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        title: 'Drag and drop the words at proper place.',
        fontSize: '1rem',
          dashWidth: 80,
        text: `Plants that grow in water are called *aquatic*.
Only *3%* of the earth's water is fresh.
Only *0.5%* of the fresh water is available to us.
Our body has *70%* of water in it.
We should drink *12* glasses of water everyday.
*Whale* is the largest animal.`
      }
    },
    {
      id: 'notes-3',
      label: 'Where does water come from?',
      type: 'passage',
      data: {
        title: 'Where does water come from?',
        text: `Simply put, it comes from THE RAIN.
Rain water leads to rise in rivulets, streams and rivers.
Still water forms lakes and ponds.
Some water gets deposited under the ground and we usually extract it through wells, hand-pumps and bore-wells.
# Fun fact!
Dams are built to slower the flow of water, to save it and to generate energy.
Rainwater harvesting is another good technique for conserving water in which the rainwater is collected from the roofs of the house and gets deposited in the tank.
# How rivers are formed?
When rain falls on the mountains, water flows down. Further, many rivulets combine to form a river.`
      }
    },
    {
      id: 'classify-2',
      label: 'Natural vs Man made.',
      type: 'group',
      data: {
        title: 'Classify the below.',
        types: [
          {
            name: 'Natural',
            text: 'Springs, Streams, Rivers, Lakes, Creeks, Seas, Oceans, Ponds'
          },
          {
            name: 'Man-made',
            text:
              'Wells, Dams, Bore-wells, Hand-pumps, Canals, Taps, Reservoirs'
          }
        ]
      }
    },
    {
      id: 'notes-4',
      label: 'More About Water',
      type: 'passage',
      data: {
        title: 'More About Water',
        text: `# 3 stages of water
Solid: At cold places in the form of ice and snow.
Liquid: The flowing state of water and the most commonly used one.
Gas/ Vapour: Formed at high temperatures.
# Fun fact!
1. Pure water has no shape, colour, taste or smell and is transparent.
2. Air also consists of water vapours. As a result of it, glass holding ice forms droplets of water on its outside surface.
# New words!
1. Transparent: Something that you can see through.
2. Transluscent: Something you can partially see through.
3. Opaque: Something you cannot see through.`
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water is transparent.
Natural water bodies consist of living organisms.
Starfish and Seahorse are aquatic animals.`
          },
          {
            name: 'False',
            text: `Pure water looks bluish in colour.
When water is heated a lot, it turns into ice.
Sugar does not dissolve in water.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        title: 'Drag and drop the words at proper place.',
        fontSize: '1rem',
        text: `*Pure* water has no colour, smell or taste.
Water is *transparent*.
Water does not have a *shape* of its own.
Ice is the *solid* state of water.`
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `India gets a lot of rain during *monsoon (summer, winter)* season. 
Water is a *transparent (opaque, transluscent)* body.       
Ice is formed at *cold (hot, room)* temperature.      
The process of evaporation talks about water turning into its *vapour (solid, liquid)* state.   
Humidity is caused due to the presence of *water (ice, blood)* in the air.     
Water takes the *shape (size, taste)* of the container it is kept in.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'wordsearch',
      label: 'WordSearch',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['R', 'A', 'I', 'N', 'W', 'A', 'T', 'E', 'R'],
            marker: [0, 0, 8, 8]
          },
          {
            word: ['R', 'I', 'V', 'E', 'R'],
            marker: [1, 2, 5, 2]
          },
          {
            word: ['L', 'A', 'K', 'E'],
            marker: [0, 5, 0, 8]
          },
          {
            word: ['P', 'O', 'N', 'D'],
            marker: [8, 0, 8, 3]
          },
          {
            word: ['S', 'E', 'A'],
            marker: [6, 7, 8, 7]
          },
          {
            word: ['W', 'E', 'L', 'L'],
            marker: [4, 4, 1, 4]
          },
          {
            word: ['O', 'C', 'E', 'A', 'N'],
            marker: [8, 1, 4, 1]
          },
          {
            word: ['C', 'A', 'N', 'A', 'L'],
            marker: [7, 1, 7, 5]
          },
          {
            word: ['B', 'A', 'Y'],
            marker: [2, 0, 0, 2]
          },
          {
            word: ['D', 'E', 'L', 'T', 'A'],
            marker: [8, 3, 8, 7]
          },
          {
            word: ['W', 'A', 'T', 'E', 'R'],
            marker: [1, 7, 5, 7]
          }
        ],
        title: 'Find the given words from the table.',
        lang: 'en',
        table: [
          ['R', 'K', 'B', 'C', 'G', 'C', 'L', 'S', 'P'],
          ['D', 'A', 'T', 'A', 'N', 'A', 'E', 'C', 'O'],
          ['Y', 'R', 'I', 'V', 'E', 'R', 'B', 'A', 'N'],
          ['H', 'Z', 'T', 'N', 'W', 'N', 'I', 'N', 'D'],
          ['B', 'L', 'L', 'E', 'W', 'C', 'V', 'A', 'E'],
          ['L', 'H', 'S', 'F', 'S', 'A', 'P', 'L', 'L'],
          ['A', 'C', 'O', 'L', 'S', 'Y', 'T', 'H', 'T'],
          ['K', 'W', 'A', 'T', 'E', 'R', 'S', 'E', 'A'],
          ['E', 'O', 'H', 'X', 'M', 'J', 'R', 'L', 'R']
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
            word: 'atlantic',
            marker: {
              x: 0,
              y: 3
            },
            hint:
              'It is the second largest ocean in the world. It separates Europe and Africa from South America',
            direction: 'across'
          },
          {
            word: 'pacific',
            marker: {
              x: 7,
              y: 1
            },
            hint:
              'It is the largest and the most deepest ocean on the surface of Earth',
            direction: 'down'
          },
          {
            word: 'southern',
            marker: {
              x: 0,
              y: 0
            },
            hint:
              'It is also known as the Antarctic Ocean, comprises the southernmost waters of the World Ocean and it encircles Antarctica.',
            direction: 'across'
          },
          {
            word: 'arctic',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'It is the smallest and shallowest ocean',
            direction: 'across'
          },
          {
            word: 'indian',
            marker: {
              x: 7,
              y: 4
            },
            hint:
              'It is the third largest ocean in the world. It is bounded by Asia to the north, Africa to the west and Australia to the east.',
            direction: 'across2'
          }
        ],
        title: 'Major oceans of the earth.',
        lang: 'en',
        table: [
          ['S', 'O', 'U', 'T', 'H', 'E', 'R', 'N'],
          ['', '', '', '', '', '', '', 'P'],
          ['', '', '', '', '', '', '', 'A'],
          ['A', 'T', 'L', 'A', 'N', 'T', 'I', 'C'],
          ['', '', 'N', 'A', 'I', 'D', 'N', 'I'],
          ['', '', '', '', '', '', '', 'F'],
          ['', '', '', '', '', '', '', 'I'],
          ['', '', 'A', 'R', 'C', 'T', 'I', 'C']
        ]
      }
    }*/
  ]
};
