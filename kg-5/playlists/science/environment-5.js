export default {
  id: 'environment-5',
  label: 'Our Environment',
  lockAfter: 4,
  list: [
    {
      label: 'The Earth and its Living World- Reading',
      type: 'passage',
      id: 'reading',
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
Water on the earth evaporates continuously due to the heat of the sun.As water vapour is lighter than air, it rises high up into the atmosphere.As it goes higher, cools and condenses to form clouds.The small droplets join together and form bigger drops which are heavy. Such drops of water fall down as rain. This continuous process of evaporation and condensation is called water cycle.
# Food chain
A worm eats grass and leaves. A grasshopper eats worms. Birds eat grasshoppers.They are all connected. One component is food for the next one. That is why we say that they form a chain. Such a chain is called a food chain. Each of these components is a link in a food chain. 
The most important food in a food chain is plants.One living thing can be a part of a number of food chains. That gives rise to a food web in nature.
# Environmental balance
There are many food chains in our environment. Micro-organisms living in the soil help the process of decomposition of plant residue, dead animals, excreta, etc. This helps in plant growth.Thus plants use substances in the soil for their growth and when plants and animals die, the decomposition of their remains adds these substances to the soil once again. This is an important cycle in the environment.          
For the existence of living things, it is important that environmental balance is maintained.`
      }
    },
    {
      label: 'Lithosphere vs Hydrosphere',
      id: 'classify',
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
      id: 'classify-2',
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
      id: 'match',
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
      id: 'sorting',
      commonData: {
        title: 'Arrange the links to form a food chain',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `Nectar, Butterflies, Small birds, Foxes`,
        `Dead plants, Centipede, Robin, Raccoon`,
        `Grass, Grasshopper, Frog, Snake, Eagle`,
        `Decayed plants, Worms, Birds, Eagles`
      ]
    },
    {
      label: 'Choose the best Answer - Environment',
      id: 'mcq',
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
      id: 'drag-drop-2',
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
      id: 'fillup-2',
      label: 'Environment- Fill Up',
      type: 'fillup',
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
      id: 'true-false-2',
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
      id: 'reading-2',
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
      id: 'classify-3',
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
      id: 'match-2',
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
      id: 'drag-drop-4',
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
      id: 'fillup-4',
      label: 'Environment- Do you know these ?',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Chicken occupy *90% (80%)* of the total poultry.
India ranks *fifth (fourth)* in poultry production in the world.
Whitelegon is the most *egg (milk)* yielding breed in the world.
An area of land with fields and buildings that is devoted primarily to growing crops or raising domestic animals or both as a business is called *farm (field)*.`
      }
    },
    {
      id: 'fillup-5',
      label: 'Environment- Do you know these ?-2 ',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Dairy farming (poultry farming)* is a type of agriculture that focuses on extraction of milk and preparation of various milk products.
*Buffaloes (sheeps)* produce more amount of milk than cows.
Dr.Verghese Kurien is called the Father of *White (blue)* Revolution.
Honey also enhances digestion and *appetite (thirst)*.`
      }
    },
    {
      label: 'Fact check on Environment - True or False',
      id: 'true-false-3',
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
Veterinary medicine deals with the prevention, diagnosis and treatment of disease, disorder and injury for domestic and non-domestic animals. `
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
    }
  ]
};
