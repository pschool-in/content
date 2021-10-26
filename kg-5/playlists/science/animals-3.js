export default {
  id: 'animals-3',
  label: 'Animals',
  lockAfter: 4,
  list: [
    {
      label: 'Animal Shelters - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Animal Shelters',
        text: `Why do we need houses?
  1. We live in houses to protect ourselves from very cold weather, gusty winds, scorching sun, heavy rains as they can cause us great discomfort.
  2. A house also protects us from thefts.
  3. It protects the people living close to the forests from wild animals.
  Do you know, like us animals also need shelters to protect themselves? Some animals build a shelter for themselves while others find them ready in the surroundings.
  # Animals who build shelters for themselves
  Birds build nests as they are afraid of the animals that eat eggs. Nests protect the young birds as they are too weak to protect themselves. Nests are made up of grass, straw, and twigs. They may even contain cotton, wool, and pieces of thread and string.
  # Animals that found ready shelters in the surroundings
  Some animals do not make any efforts to build a shelter. They simply look around for a safe place. Some live in small hollows on high cliffs or live near our houses. They find shelter in gaps in walls.
  # Fun Fact
  It is believed that a cobra lives in an anthill. But anthills are built by ants, not by a cobra. The cobras live in holes.`
      }
    },
    {
      label: 'Build shelter themselves Vs find ready-shelters',
      id: '200',
      type: 'group',
      data: {
        title: 'Classify the below animals based on building habits',
        types: [
          {
            name: 'Build shelter themselves',
            text: 'Birds, Honey bees, Rats, Mice'
          },
          {
            name: 'Find ready shelters',
            text: 'Doves, Tiger, Bats, Cobra'
          }
        ]
      }
    },
    {
      label: 'Domestic Animals Vs Wild Animals',
      id: '300',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of their domestic nature',
        types: [
          {
            name: 'Domestic',
            text: 'Cow, Horse, Hens, Cat'
          },
          {
            name: 'Wild',
            text: 'Lion, Hyena, Leopard, Bat'
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Animals & their shelters - Match the following',
      type: 'match',
      data: {
        text: `Bird, Nest
                Honey Bee, Honeycomb
                Rat, Hole
                Leopard, Cave
                Bat, Dark Cavern
                Lion, Den`,
        title: 'Match the shelter name'
      }
    },
    {
      label: 'Drag and Drop - Animals Shelters',
      type: 'matchByDragDrop',
      id: '500',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Birds* use grass, straw, twigs and even cotton and wool, to build their *nests*.
                Weaverbird uses *thorny* trees to build their nest.
                Tailorbird selects a plant with *big* leaves and builds its nest by *stitching* the leaves together.
                Tigers and hyenas live in *caves*.
                *Bats* live in tall trees or look for shelter in old, deserted, tumble-down buildings.`
      }
    },
    {
      id: '600',
      label: 'Animal Shelter - Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A cat lies outside a hole to catch *rat (rabbit)*.
                A cow lives in *shed (den)*.
                The shelter for hens is called *chicken coop (nest)*.
                A stable is built for a *horse (dog)*.
                A cobra lives in *hole (anthill)*.`
      }
    },
    {
      label: 'Animal Shelters - True or False',
      id: '700',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The young birds are too weak to defend themselves and the nest keeps the young ones safe.
                    Animals that eat eggs find it difficult to reach the nest.
                    Rats and mice dig into the soil and make holes and burrows to live in.`
          },
          {
            name: 'False',
            text: `Anthills are built by cobras as their shelters.
                    Doves and pigeons make their shelters and live in caves.
                    Bats like to build their shelters in densely populated areas.`
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer - Animal Shelter',
      id: '800',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Birds build their nests to ___________.',
            options:
              'Protect their eggs from other animals, Protect young birds as they are too weak to defend themselves, Have a safe place for laying their eggs, * All'
          },
          {
            qText: 'Rats and Mice mostly build their shelters in ___________',
            options: 'Muddy houses, Cemented houses, Forests, Stable'
          },
          {
            qText: 'Which of the following lives in Caves?',
            options: 'Hyenas, Doves, Rabbit, Cow'
          },
          {
            qText: 'Which of the following is not the use of a house?',
            options:
              'Store wild animals, Protect from the scorching sun, Avoid heavy rains, Be away from gusty winds'
          },
          {
            qText: 'Which of the following does not live in a stable?',
            options: 'Cow, Horse, Donkey, Tiger'
          }
        ]
      }
    },
    {
      label: 'Animals & their habits - Reading',
      type: 'passage',
      id: '1700',
      data: {
        title: 'Animals & their habits',
        text: `Animal life can be broadly undertood on the basis of the following:
          1. Habitat of animals
          2. Undestanding the food procurement by animals
          3. Identifying the eating habits of the animals
          4. Knowing the mouthparts of the birds and insects
          5. By realising the importance of food chain and food web in the environment.
          # Animals in different environment
          The living place of an animal or a plant is called habitat. The basic needs such as food, water, shelter and place to breed are found in a habitat. Animals that live on land are called terrestrial animals. E.g., Ants, Cats and Lion. While, Animals that live in water are called aquatic animals. E.g., Fish, Dolphin and Crab.
          # How do animals get their foods?
          Animals cannot make their own food. They depend on plants or other plant-eating animals for their food. Some animals can even consume both plants and animals.
          # Identification on the basis of eating habits
          Animals that eat only plants are called herbivorous animals or herbivores (Plant eaters). Flesh eating animals are called carnivorous animals or carnivores. Some animals eat both plants and the flesh of other animals. These animals are called omnivorous animals or omnivores.
          # Mouthparts of animals
          Mouth parts are different parts of the mouth that are adapted based on the nature of food that the animal eats. It is difficult to identify them sometimes.
          # Food chain and food web
          A food chain gives us information on how living things are related with one another by the food they eat. For example, grass is eaten by deer. The deer is eaten by the tiger.
          A Food web is an interconnection of multiple food chains. Transfer of energy between organisms of different energy sources occurs through food web.
          `
      }
    },
    {
      label: 'Wings Vs No-Wings',
      id: '1800',
      type: 'group',
      data: {
        title: 'Classify the below animals based on wings',
        types: [
          {
            name: 'Wings',
            text: 'Sparrow, Dragonfly, Parrot, Butterfly, Bat'
          },
          {
            name: 'No-Wings',
            text: 'Snail, Tortoise, Fish, Penguin, Tiger'
          }
        ]
      }
    },
    {
      label: 'Terrestrial Vs Aquatic',
      id: '1900',
      type: 'group',
      data: {
        title:
          'Classify the below animals on whether they live on land or water.',
        types: [
          {
            name: 'Terrestrial',
            text: 'Bison, Tiger, Horse, Cow, Fox, Bear, deer'
          },
          {
            name: 'Aquatic',
            text:
              'Fish, Tortoise, Octopus, Seahorse, Jellyfish, Starfish, Mussel'
          }
        ]
      }
    },
    {
      label: 'Herbivore Vs Carnivore Vs Omnivore',
      id: '2000',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of their eating habits.',
        types: [
          {
            name: 'Herbivore',
            text: 'Cow, Buffalo, Goat, Elephant, Zebra'
          },
          {
            name: 'Carnivore',
            text: 'Lion, Leopard, Cheetah, Seal, Crocodile'
          },
          {
            name: 'Omnivore',
            text: 'Human, Bear, Hen, Fox, Crow'
          }
        ]
      }
    },
    {
      label: 'Plain Vs Forest',
      id: '2001',
      type: 'group',
      data: {
        title: 'Classify the below animals on the basis of their habitat.',
        types: [
          {
            name: 'Plain',
            text: 'cow, camel, hen, goat, sheep'
          },
          {
            name: 'Forest',
            text: 'fox, ber, bison, deer'
          }
        ]
      }
    },
    {
      label: 'Freshwater Vs Marine',
      id: '2002',
      type: 'group',
      data: {
        title: 'Classify the below animals on the basis of their habitat.',
        types: [
          {
            name: 'Freswater',
            text: 'mussel, fish, crab'
          },
          {
            name: 'Marine',
            text: 'seahorse, jellyfish, starfish, shark'
          }
        ]
      }
    },
    {
      label: 'Arboreal Vs Aerial Vs Amphibian',
      id: '2003',
      type: 'group',
      data: {
        title: 'Classify the below animals on the basis of their habitat.',
        types: [
          {
            name: 'Arboreal',
            text: 'monkey, squirrel'
          },
          {
            name: 'Aerial',
            text: 'crow, dove, parrot'
          },
          {
            name: 'Amphibian',
            text: 'toad, frog'
          }
        ]
      }
    },
    {
      id: '2100',
      label: 'Match the animals with their living places',
      type: 'match',
      data: {
        text: `Tiger, Forest
                Polar Bear, Polar region
                Whale, Salt water
                Camel, Desert
                Frogs, Fresh water`,
        title: 'Match the animals with their living places'
      }
    },
    {
      id: '2101',
      label: 'Match the animals with the food they eat',
      type: 'match',
      data: {
        text: `Honey Bee, honey
                Leopard, flesh
                Hen, grain
                Spider, insect
                Goat, plant`,
        title: 'Match the animals with their living places'
      }
    },
    {
      label: 'Drag and Drop - Animals & their Shelters',
      type: 'matchByDragDrop',
      id: '2201',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `A lion lives in a *den*.
                Birds live and lay their eggs in the *nest*.
                An *earthworm* is found in soil.
                We can find a number if fishes in a *pond*.
                Spider like to weave a *web* and honeybee likes to live in a *honeycomb*.`
      }
    },
    {
      label: 'Who am I?',
      type: 'matchByDragDrop',
      id: '2250',
      data: {
        isPractice: false,
        title: 'Who am I?.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `I have 8 arms and I live in the sea. Who am I ? *octopus*
          I am a bird but I cannot fly. I can swim very well. Who am I? *penguin*
          I am the largest animal in the sea. Who am I? *whale* 
          I do not have any legs. I like to crawl. Who am I? *snake*
          I have wings but I am not a bird. Who am I? *butterfly*
          I am the king of the forest. I eat animals like deer, zebra and giraffe. Who am I? *lion*
          I suck blood from animals. But males of my family feed on plant juices. Who am I? *female mosquito*
          I eat cereals, small insects, earthworms etc. I live on land. Who am I? *hen*
          I eat small insects that fall in my web. Who am I? *spider*`
      }
    },
    {
      label: 'Birds and Beaks',
      type: 'matchByDragDrop',
      id: '2200',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `It has strong, sharp, curved beak to catch prey and tear its flesh.- *Eagle*
          Fish-eating birds have spear-like beaks designed for stabbing fish.- *Kingfisher*
          The hooked, sharp beak helps to collect and eat the grains.- *Parrot*
          Strong chisel beak is used to make hole in the trees and catch small insects.- *Woodpecker*
          Short, conical beak which helps to crack open the shells and extract the inner nut or seed.- *Sparrow*
          Flat beak that helps to grip plant and insect from water.- *Duck*`
      }
    },
    {
      id: '2300',
      label: 'Animal Shelter - Fill Up-2',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Animals that live on trees are known as *arboreal (aerial)* animals.
                *Dove (Monkey)* is an example of aerial animal.
                *Toad (fish)* lives on both land and water.
                Crow flies in the sky, so it is an *aerial (arboreal)* animal.
                Squirrel and monkey are the examples of *arboreal (aquatic)* animals.`
      }
    },
    {
      label: 'Steps in Sexual Reproduction',
      type: 'sorting',
      id: '2301',
      commonData: {
        title: 'Arrange in correct order',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `Pre-fertilization, Fertilization, Post-fertilization, Embryo formation`
      ]
    },
    {
      label: 'Animal Food Habit - True or False',
      id: '2400',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Flesh eating animals are called carnivorous animals or carnivores.
                    Herbivores have sharp, straight edged, flat front teeth called incisors.
                    Animals that hunt other animals are called predators.`
          },
          {
            name: 'False',
            text: `The mosquitoes do not have a needle like structure to suck blood.
                    Animals that need both land and water to live are called aquatic animals.
                    Animals can make their own food.`
          }
        ]
      }
    },
    {
      id: '2500',
      type: 'sequence',
      label: 'Words related to Animal world',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [
        `NECTAR , DOVE , INCISORS , CANINES , PREY`,
        `SPORE, ZYGOTE, LARVA, EMBRYO, HYDRA`
      ]
    },
    {
      label: 'Choose the best Answer - Animal food habit',
      id: '2600',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Bear, man, crow and hen are examples of ___________.',
            options: 'Omnivores, Herbivores, Carnivores, Amphibians'
          },
          {
            qText:
              'The butterfly has a tube like structure called _________ to suck nectar from flowers.',
            options: 'proboscis, Canines, Incisors, None of the above'
          },
          {
            qText:
              'A __________ usually starts with plants and ends with carnivores or omnivores.',
            options: 'food chain, Food Web, connection, hunt'
          },
          {
            qText: 'Which of the animals given below suck their food?',
            options: 'Butterfly, bear, leopard, frog'
          },
          {
            qText: 'Which of the following us an example of carnivore?',
            options: 'Tiger, cow, horse, buffalo'
          }
        ]
      }
    },
    {
      label: 'Food chain - Right order',
      type: 'sorting',
      id: '2700',
      commonData: {
        title: 'Arrange in right order as a food chain',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `Leaves, Caterpillar, Hen, Hawk`,
        `Grass, Grasshopper, rat, owl`,
        `Flower, Flies, Frog, Snake, Eagle`,
        `Carrot, Rabbit, Fox, Lion`,
        `Tree, Deer, Lion`
      ]
    }
  ]
};
