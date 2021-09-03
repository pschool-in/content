export default {
  id: 'environment-2',
  label: 'Environment-2',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'The Earth and its Living World- Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Our Earth and Living World',
        text: `# What is an environment?
Everything that we see and many many things that we can't see are present in our surroundings and are together known as the environment. For example sunlight, air, water, food, plants, animals, microbes, dust, insects etc.
# The Biosphere
The zone of life where all the life forms interact is called biosphere. It basically includes everything the environment has. It is sub-divided as;
1. Lithosphere: all the land of the environment.
2. Hydrosphere: all the major, minor and minute water-bodies.
3. Atmosphere: envelope of air around the earth.
# The atmosphere
Higher the level above the ground, lesser the oxygen. It includes several other gases like nitrogen, carbondioxide, water vapour etc. Some layers of the atmosphere are:
1. Troposphere: extends 13km from the earth's surface.
2. Stratosphere: extends 50km from the earth's surface.
3. Ozone: protects from harmful UV rays of the sun.
# Water cycle
Water on the earth evaporates continuously due to the heat of the sun.As water vapour is lighter than air, it rises high up into the atmosphere.As it goes higher, cools and condenses to form clouds.The small droplets join together and formbigger drops which are heavy. Such drops of water fall down as rain. This continuous process of evaporation and condensation is called water cycle.
# Food chain
A worm eats grass and leaves. A grasshopper eats worms. Birds eat Grasshoppers.They are all connected. One component is food for the next one. That is why we say that they form a chain. Such a chain is called a food chain. Each of these components is a link in a food chain. 
The most important food in a food chain is plants.One living thing can be a part of a number of food chains. That gives rise to a food web in nature.
# Environmental balance
There are many food chains in our environment. Micro-organisms living in the soil help the process of decomposition of plant residue, dead animals, excreta, etc. This helps in plant growth.Thus plants use substances in the soil for their growth and when plants and animals die, the decomposition of their remains adds these substances to the soil once again. This is an important cycle in the environment.          
For the existence of living things, it is important that environmental balance is maintained.`
      }
    },
    {
      label: 'Lithosphere vs Hydrosphere',
      id: '200',
      type: 'group',
      data: {
        title:
          'Classify the below things based on where they belong in the environment',
        types: [
          {
            name: 'Lithosphere',
            text: 'Mountains, Rocks, Stones, Top soil, Sand'
          },
          {
            name: 'Hydrosphere',
            text: 'Oceans, Lakes, Ponds, Streams, Glaciers, Groundwater'
          }
        ]
      }
    },
    {
      label: 'Atmosphere vs Biosphere',
      id: '300',
      type: 'group',
      data: {
        title:
          'Classify the below things based on where they belong in the environment',
        types: [
          {
            name: 'Atmosphere',
            text: 'Carbon dioxide, Oxygen, Nitrogen, Water vapour'
          },
          {
            name: 'Biosphere',
            text: 'Plants, Animals, Humans, Microbes, Insects'
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Match the things with their place in the environment',
      type: 'match',
      data: {
        text: `Oxygen, Atmosphere
            Plants, Biosphere
            Ocean, Hydrosphere
            Sand, Lithosphere`,
        title: 'Match the things with their place in the environment'
      }
    },
    {
      label: 'Arrange the links to form a food chain',
      type: 'sorting',
      id: '500',
      commonData: {
        title: 'Arrange the links to form a food chain',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `Nectar, butterflies, small birds, foxes`,
        `Dead plants, centipede, robin, raccoon`,
        `Grass, grasshopper, frog, snake, eagle`,
        `Decayed plants, worms, birds, eagles`
      ]
    },
    {
      label: 'Choose the best Answer - Environment',
      id: '600',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Water on the earth ___________ continuously due to the heat of the sun.',
            options: 'evaporates, condensate, cycles'
          },
          {
            qText: 'A biosphere contains _______________ .',
            options: 'Plants, Animals, Humans, Microorganisms,*All'
          },
          {
            qText:
              'The envelope of air around the earth is called the _______________ ',
            options: 'Atmosphere, Biosphere, Lithosphere, Hydrosphere'
          },
          {
            qText: 'The most important food in a food chain is  _______.',
            options: 'Plants, animals, birds, humans'
          },
          {
            qText:
              'The layer that extends from the earth’s surface to a height of about 13 km is called the ___________. ',
            options: 'Troposphere, Stratosphere, Mesosphere, Ionosphere'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop - Enviroment',
      type: 'matchByDragDrop',
      id: '700',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `For the existence of living things, it is important that *environmental balance* is maintained.
            Biosphere is also known as *the zone of life*.
            One *living thing* can be a part of a number of food chains.
            Our surroundings and all the living and non living things are together known as the *environment*.
            The *biosphere* spreads in all the other three spheres.`
      }
    },
    {
      id: '800',
      label: 'Environment- Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `About *a third (two-third)* of the surface of the earth consists of land.
            Micro-organisms living in the soil help the process of *decomposition (evaporation)* of plant residue, dead animals, excreta, etc.
            As we go higher from the surface of the earth, the air in the atmosphere becomes *rarer (denser)*.
            Each of the components in a food chain is called a *link (web)*.
            The lithosphere is the *solid (liquid)* part of the Earth such as rocks and mountains.`
      }
    },
    {
      label: 'Environment - True or False',
      id: '900',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The zone of life where all the life forms interact is called biosphere.
                The ozone layer absorbs Ultraviolet rays and protects the living world from these rays.
                Water vapour cools and condenses forming very fine droplets of water forming clouds.`
          },
          {
            name: 'False',
            text: `In the lower part of the ionosphere, there is a layer of a gas called ozone.
                One-third of the earth’s surface is covered with water.`
          }
        ]
      }
    },
    {
      label: 'Our Environment - Reading',
      type: 'passage',
      id: '1000',
      data: {
        title: 'Our Environment',
        text: `# Types of Environment
There are two main types of environment. It includes physical environment and biological environment.
1. Physical environment:all non-living things like land, water and air.
2. Biological environment:the living things such as plants and animals.
3. Natural environment has lot of economic values. Plants and animals in our environment are useful to us in a number of ways. These economically important animals are raised in farms.
# Farms
Farming is the activity of growing crops and raising livestock. It is a part of agriculture.An area of land with fields and sturctures devoted to growing crops or raising domestic animals or both as a business is called farm.
1. Diary farm: Type of agriculture that focuses on extraction of milk and preparation of various milk products like cheese, butter, curd, ghee etc.
2. Poultry farms: In poultry farms avian species are reared and bred for the purpose of egg, meat or both. Poultry birds grown for meat are called broilers. Layers are the female fowls grown for egg production.
3. Apiculture: Rearing of honey bee for honey is known as apiculture. It is also called bee keeping. In this technique honey bees are reared in a specially designed wooden box.
# Uses of Dairy Farming:
1. Bullocks are used to plough land, harvest and thrash crops.
2. Cattle are employed in transportation.
3. Cattle dung is used as manure. It is also used as fuel and for generation of biogas.
4. Panchagavya is an ayurvedic medicine used in agriculture to control pest and fungi.It is a mixer of dung and urine of cows, fresh milk, curd, jaggary and ghee.
5. Leather goods are manufactured from cattle hides.
# Uses of Poultry Farming:
1. Poultry birds are good source of nutritive food.
2. Their feathers are used for making pillows and quilts.
3. Dropping of the poultry birds is used as manure. It is highly valuable for crops.
# Uses of Apiculture:
1. Honey has an antiseptic and antibacterial property.It builds up haemoglobin content in the blood.
2. Honey is used in Ayurvedic and Unani system of medicines.It prevents cough, cold, fever and relieves sore throat.
3. Honey also enhances digestion and appetite.
4. Bee wax is secreted by worker bee to build the combs of bee hive.It is widely used in cosmetics.
# Manure and Vermiculture
Manure is an organic matter used as fertilizer. It is mostly derived from animal and plant residues. It increases the fertility of the soil. It is a natural form of fertilizer.
1. Farmyard manure: It contains the feces and urine of different livestock.
2. Green manure: It is obtained by decomposition of green leaves, twigs of trees, shrubs and herbs.
3. Compost: It is obtained by decomposition of organic matter by various microorganisms.
Vermiculture or Vermicomposting is a method of transforming organic wastes such as waste papers, leaves, pieces of woods etc., into a nutrient rich fertilizer using earth worms.
1. It is a healthy and clean way to eliminate wastes going into our landfills.
2. It keeps the environment clean.
3. It improves the water holding capacity of the soil and prevents soil erosion.`
      }
    },
    {
      label: 'Diary farm vs Poultry farm',
      id: '1100',
      type: 'group',
      data: {
        title: 'Classify the animals based on the environment they belong',
        types: [
          {
            name: 'Diary farm',
            text: 'Cows, Buffalo, Goat, Sheeps, Camels'
          },
          {
            name: 'Poultry farm',
            text: 'Chicken, Fowls, Ducks, Geese, Turkeys'
          }
        ]
      }
    },
    {
      id: '1200',
      label: 'Match the animals with their products',
      type: 'match',
      data: {
        text: `Cow, Milk
            Bees, Honey
            Chicken, Eggs
            Earthworms, Fertilizer`,
        title: 'Match the animals with their products'
      }
    },
    {
      label: 'Drag and Drop - Facts on Enviroment',
      type: 'matchByDragDrop',
      id: '1300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The term Green Revolution is associated with *food grains*.
            The term Blue Revolution is associated with *fish*.
            The term Silver Revolution is associated with *eggs*.
            The term Yellow Revolution is associated with *oil seeds*.
            The term Golden Revolution is associated with *honey*.`
      }
    },
    {
      id: '1400',
      label: 'Environment- Do you know these ?',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Chicken occupy *90% (80%)* of the total poultry.
            India ranks *fifth (fourth)* in poultry production in the world.
            Whitelegon is the most *egg (milk)* yielding breed in the world.
            An area of land with fields and buildings that is devoted primarily to growing crops or raising domestic animals or both as a business is called *farm (field)*.
            *Dairy farming (poultry farming)* is a type of agriculture that focuses on extraction of milk and preparation of various milk products.
            *Buffaloes (sheeps)* produce more amount of milk than cows.
            Dr.Verghese Kurien is called the Father of *White (blue)* Revolution.`
      }
    },
    {
      label: 'Fact check on Environment - True or False',
      id: '1500',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The roughage contains high amount of fiber and it includes fodder, hay, straw and silage.
                Concentrates include broken grams, cereals, millets, rice polish, cotton seeds and oil cakes.
                Bullocks are used to plough land, harvest and thrash crops.
                Panchagavya is an ayurvedic medicine used in agriculture to control pest and fungi.
                Veterinary medicine deals with the prevention, diagnosis and treatment of disease, disorder and injury for domestic and non-domestic animals.
                `
          },
          {
            name: 'False',
            text: `Worker bees lays eggs.
                Egg type fowls are called broilers.
                Surti is a cow breed.
                Assel is a buffalo breed.`
          }
        ]
      }
    },
    {
      label: 'Green Environment - Reading',
      type: 'passage',
      id: '1600',
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
2. Recycleable: paper waste, glass waste, aluminum waste etc.
3. Non-recycleable: plastic wrap, wax boxes etc.
# Environment friendly materials
Micro-organisms can decompose some waster materials and make it beneficiary for the soil. Such materials are called environment friendly materials.`
      }
    },
    {
      label: 'Biodegradable vs Non biodegradable',
      id: '1700',
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
      id: '1800',
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
      id: '1900',
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
      id: '2000',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Things that can be decomposed or broken down by microorganisms are *biodegradable*.
Picking up the waste is called *Waste collection*.
*Compost* makes the soil fertile.
*Reduce* is to make or use less materials.
*Reuse* is using a thing repeatedly for the same or for another purpose.`
      }
    },
    {
      id: '2100',
      label: 'Green Environment- Fill Up',
      type: 'fillupOptions',
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
Leaving water running.
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
        showWords: false
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
