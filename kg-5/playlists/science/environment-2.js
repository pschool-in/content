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
          text: [
            `# What is an environment?`,
            `Everything that we see and many many things that we can't see are present in our surroundings and are together known as the environment. For example sunlight, air, water, food, plants, animals, microbes, dust, insects etc.`,
  
            `# The Biosphere`,
  
            `The zone of life where all the life forms interact is called biosphere. It basically includes everything the environment has. It is sub-divided as;`,          
            `Lithosphere: all the land of the environment.`,
            `Hydrosphere: all the major, minor and minute water-bodies.`,
            `Atmosphere: envelope of air around the earth.`,
  
            `# The atmosphere`,
  
            `Higher the level above the ground, lesser the oxygen. It includes several other gases like nitrogen, carbondioxide, water vapour etc. Some layers of the atmosphere are:
            
            Troposphere: extends 13km from the earth's surface.
            Stratosphere: extends 50km from the earth's surface.
            Ozone: protects from harmful UV rays of the sun.`,
            
            `# Water cycle`,
  
            `Water on the earth evaporates continuously due to the heat of the sun.As water vapour is lighter than air, it rises high up into the atmosphere.As it goes higher, cools and condenses to form clouds.The small droplets join together and formbigger drops which are heavy. Such drops of water fall down as rain. This continuous process of evaporation and condensation is called water cycle.`,
  
            `# Food chain`,
  
            `A worm eats grass and leaves. A grasshopper eats worms. Birds eat Grasshoppers.They are all connected. One component is food for the next one. That is why we say that they form a chain. Such a chain is called a food chain. Each of these components is a link in a food chain.
            
            The most important food in a food chain is plants.One living thing can be a part of a number of food chains. That gives rise to a food web in nature.`,
  
            `# Environmental balance`,
  
            `There are many food chains in our environment. Micro-organisms living in the soil help the process of decomposition of plant residue, dead animals, excreta, etc. This helps in plant growth.Thus plants use substances in the soil for their growth and when plants and animals die, the decomposition of their remains adds these substances to the soil once again. This is an important cycle in the environment.          
            For the existence of living things, it is important that environmental balance is maintained.`
          ]
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
          text: [
            `# Types of Environment`,
  
            `There are two main types of environment. It includes physical environment and biological environment.`,
            
            `1. Physical environment:all non-living things like land, water and air.`,
            `2. Biological environment:the living things such as plants and animals.`,
           ` 3. Natural environment has lot of economic values. Plants and animals in our environment are useful to us in a number of ways. These economically important animals are raised in farms.`,
  
            `# Farms`,
  
            `Farming is the activity of growing crops and raising livestock. It is a part of agriculture.An area of land with fields and sturctures devoted to growing crops or raising domestic animals or both as a business is called farm.`,
            
            `1. Diary farm: Type of agriculture that focuses on extraction of milk and preparation of various milk products like cheese, butter, curd, ghee etc.`,
            `2. Poultry farms: In poultry farms avian species are reared and bred for the purpose of egg, meat or both. Poultry birds grown for meat are called broilers. Layers are the female fowls grown for egg production.`,
            `3. Apiculture: Rearing of honey bee for honey is known as apiculture. It is also called bee keeping. In this technique honey bees are reared in a specially designed wooden box.`,
  
            `# Uses of Dairy Farming:`,
  
            `1. Bullocks are used to plough land, harvest and thrash crops.`,
            
            `2. Cattle are employed in transportation.`,
            
            `3. Cattle dung is used as manure. It is also used as fuel and for generation of biogas.`,
            
            `4. Panchagavya is an ayurvedic medicine used in agriculture to control pest and fungi.It is a mixer of dung and urine of cows, fresh milk, curd, jaggary and ghee.`,
            
            `5. Leather goods are manufactured from cattle hides.`,

            `# Uses of Poultry Farming:`,
            
            `1. Poultry birds are good source of nutritive food.`,
            
            `2. Their feathers are used for making pillows and quilts.`,
            
            `3. Dropping of the poultry birds is used as manure. It is highly valuable for crops.`,

            `# Uses of Apiculture:`,
            
            `1. Honey has an antiseptic and antibacterial property.It builds up haemoglobin content in the blood.`,
            
            `2. Honey is used in Ayurvedic and Unani system of medicines.It prevents cough, cold, fever and relieves sore throat.`,
            
            `3. Honey also enhances digestion and appetite.`,
            
            `4. Bee wax is secreted by worker bee to build the combs of bee hive.It is widely used in cosmetics.`,
  
            `# Manure and Vermiculture`,
  
            `Manure is an organic matter used as fertilizer. It is mostly derived from animal and plant residues. It increases the fertility of the soil. It is a natural form of fertilizer.`,
            
            `1. Farmyard manure: It contains the feces and urine of different livestock.`,
            `2. Green manure: It is obtained by decomposition of green leaves, twigs of trees, shrubs and herbs.`,
            `3. Compost: It is obtained by decomposition of organic matter by various microorganisms.`,
            `Vermiculture or Vermicomposting is a method of transforming organic wastes such as waste papers, leaves, pieces of woods etc., into a nutrient rich fertilizer using earth worms.`,
            
            `1. It is a healthy and clean way to eliminate wastes going into our landfills.`,
            `2. It keeps the environment clean.`,
            `3. It improves the water holding capacity of the soil and prevents soil erosion.`,
          ]
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
          text: [
            `# What are wastes?`,
  
            `Simply put, all the unwanted and thrown away materials are called wastes. They can be solids, liquids or gases and are produced from households, industries, hospitals etc. resulting in environmental pollution.`,
  
            `# Waste Management`,
  
            `We need to make sure that our environment does not get dirty and polluted, and thus, management of both biodegradable and non-biodegradable wastes is necessary.`,
  
            `# Steps in waste management`,
  
            `1. Separation of Waste`,
            `2. Waste collection and transportation`,
            `3. Waste recycling and composting`,
            `4. Waste disposal`,
            `# What are the three R‛s in waste management?`,
  
            `1. Reduce: make/ use less material.`,
            `2. Reuse: using the same thing again.`,
            `3. Recycle: make new things out of scarp. It also helps in conservation of resources.`,
  
            `# Waste Separation`,
  
            `1. Biodegradable: left over food, vegetable waste etc.`,
            `2. Recycleable: paper waste, glass waste, aluminum waste etc.`,
            `3. Non-recycleable: plastic wrap, wax boxes etc.`,
  
            `# Environment friendly materials`,
  
            `Micro-organisms can decompose some waster materials and make it beneficiary for the soil. Such materials are called environment friendly materials.`
          ]
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
          title: 'Classify the below sentences as Good and Bad for the environment.',
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
      }
    ]
  }
