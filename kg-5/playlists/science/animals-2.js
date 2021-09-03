export default {
  id: 'animals-2',
  label: 'Animals-2',
  pdf: '',
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
      label: 'The Life Cycle of Animals - Reading',
      type: 'passage',
      id: '900',
      data: {
        title: 'The Life Cycle of Animals',
        text: `In animals, the babies either grow in their mother's tummy or hatch out of the eggs. Some animals like crows, spiders, and lizards lay eggs. Unlike a chicken, their eggs are tiny. Some animals lay eggs that are too tiny to be observed with naked eyes.
  # Hen
  A hen lays eggs. The warmth which is provided by the hen to her eggs helps the chick inside the egg to grow. After the full growth, the chick breaks the eggshell and comes out.
  Unlike, a chick which does not look very different from a hen, in some animals, the young one grows into an adult animal that looks very different from the young one. This change of form is called metamorphosis.
  # Butterfly
  A butterfly has to go through various stages of growth, unlike other animals. These stages are egg, larva, pupa, and adult. The adult stage is called the butterfly. All the butterflies have to go through these four stages.`
      }
    },
    {
      label: 'Egg-laying Vs Non-egg laying',
      id: '1000',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of whether they lay eggs or not',
        types: [
          {
            name: 'Lay eggs',
            text: 'Hen, Spider, Frog, Snake, Crow'
          },
          {
            name: 'do not lay eggs',
            text: 'Cat, Dog, Horse, Cow, Donkey'
          }
        ]
      }
    },
    {
      id: '1100',
      label: 'animals & their babies - Match the following',
      type: 'match',
      data: {
        text: `Cat, Kitten
                Dog, Puppy
                Butterfly, Caterpillar
                Goat, Lamb
                Lion, Cub
                Horse, Foal`,
        title: 'Match the babies'
      }
    },
    {
      label: 'Choose the best Answer - Animal life cycle',
      id: '1200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which one of the following is not the stage of butterfly growth?',
            options: 'None of the options, Egg, Larva, Pupa, Adult'
          },
          {
            qText: 'Where does Plain Tiger Butterfly lay her egg?',
            options:
              'Milkweed (Rui) leaf, Mulberry leaf, Mango leaf, Maple leaf'
          },
          {
            qText: 'What is the pupa of a butterfly called?',
            options: 'Chrysalis, Shell, Budding, Larva'
          },
          {
            qText: 'The process of the change of form is known as ___________.',
            options:
              'Metamorphosis, Photosynthesis, Metagenesis, Crystallization'
          },
          {
            qText: 'The larva of a butterfly is called?',
            options: 'Caterpillar, Pupa, Worm, Stalk'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop - Animals Lifecycle',
      type: 'matchByDragDrop',
      id: '1300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The four stages of butterfly growth are egg, larva, *pupa*, and adult.
                In some animals, the young ones look very different from the adult form, this change in the form is called *metamorphosis*.
                Animals like *ants*, snakes, frogs, and crow lay eggs.
                There are many *differences* between the caterpillar and butterfly.
                A butterfly lays eggs on the *leaves* of a plant.
                *Moult* means to shed old skin to make way for new growth.`
      }
    },
    {
      id: '1400',
      label: 'Animal Lifecycle - Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `All the butterflies have to undergo *four (five)* stages of growth.
                It takes * Six to eight weeks (nine to twelve)* for the larva to emerge from the egg.
                When the caterpillar comes out of the egg it *is (is not)* very hungry.
                A Spider lays *tiny (big)* eggs.
                A butterfly during its growth remains in the caterpillar stage for *ten to twelve days (two to three days)*.`
      }
    },
    {
      label: 'Animal Lifecycle - True or False',
      id: '1500',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The pupa of a butterfly is also called a chrysalis.
                    A butterfly has four attractive wings and six long legs.
                    Different types of caterpillars are of different colors.`
          },
          {
            name: 'False',
            text: `For each type of butterfly, the type of plant on whose leaves its female will lay eggs is not fixed.
                    In three to four days, the larva emerges from the egg.`
          }
        ]
      }
    },
    {
      label: 'Complete the life cycle',
      type: 'sorting',
      id: '1600',
      commonData: {
        title: 'Sort the lifecycle starting with Egg',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `egg, tadpole, tadpole with legs, young frog, adult frog`,
        `egg, caterpillar, chrysalis, butterfly`,
        `egg, embryo, hatching, chick, chicken`
      ]
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
        `Pre-fertilization, fertilization, post-fertilization, embryo formation`
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
    },

    {
      label: 'Life Journey of Animals - Reading',
      type: 'passage',
      id: '2800',
      data: {
        title: 'Life Journey of Animals',
        text: `Each animal has some unique behaviour. Animal behaviour includes the activities of an animal and its interaction with other organisms.
  # Group Behaviour in Animals
  Animals gain a lot of benefits from spending time together with other members of the same species. This is called group behaviour. Honey bees live together in a group and follow a hierarchy. Bees have one queen bee in every hive. There are a few male bees called drones. There are hundreds of female bees, which are the worker bees.
  In birds, Some birds permanently live in groups while others come together only during the breeding season. Not all the bird species build nests. Some of them lay their eggs on the ground or in gap between rocks.
  Elephant group is called Herd or Parade. For each group there is a female head, which leads the group towards the availability of food, water and safety.
  # Adaptation in Animals
  The changes in an animal's behaviour to adjust with its habitat is called adaptation. There are three types of adaptations:
  Changes in the physical features of the animal are called structural adaptations. Changes in the functions of the animal‛s body are called physiological adaptations. Changes in the activities of the animal are behavioural adaptations.
  # Structure of Insects
  Insects have three main body regions. They are:
  The main visible parts on the head are the large compound eyes, the antennae (feelers) and the mouth parts. The thorax is the middle region of the body. Abdomen The abdomen is the last part of the insect body. `
      }
    },
    {
      label: 'Lives Alone Vs Group',
      id: '2900',
      type: 'group',
      data: {
        title:
          'Classify the below animals on whether they live alone or in groups.',
        types: [
          {
            name: 'Alone',
            text: 'Tiger, Bear, Leopard, Mole, Sloth'
          },
          {
            name: 'Group',
            text: 'Elephants, Wolf, Whale, Sheep, Deer'
          }
        ]
      }
    },
    {
      label: 'Nocturnal Vs Diurnal',
      id: '2950',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of their nocturnal behaviour..',
        types: [
          {
            name: 'Nocturnal',
            text: 'Cat, Mouse, Firefly, Owl, Bat, Moth'
          },
          {
            name: 'Diurnal',
            text: 'Dog, Cow, Horse, Sheep, Sparrow, Crow'
          }
        ]
      }
    },
    {
      label: 'Fur Vs No Fur',
      id: '3000',
      type: 'group',
      data: {
        title: 'Classify the below animals based on the presence of fur.',
        types: [
          {
            name: 'Fur',
            text: 'Fox, Rabbit, Sheep, Polar Bear, Beaver'
          },
          {
            name: 'No Fur',
            text: 'Zebra, Dog, Fish, Frog, Snake'
          }
        ]
      }
    },
    {
      id: '3100',
      label: 'animals & their groups - Match the following',
      type: 'match',
      data: {
        text: `Lion, Pride
                Wolf, Pack
                Sheep, Flock
                Ant, Colony
                Owl, Parliament`,
        title: 'Match the Animal with their group name'
      }
    },
    {
      label: 'Drag and Drop - Interesting facts about animals',
      type: 'matchByDragDrop',
      id: '3200',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The animals which are active at night are called *Nocturnal* animals.
                *Kangaroo* is best known for parental care.
                *Honeybees* lives in hives.
                The human *baby* is completely helpless at birth.
                Animals that are active during day time are known as *Diurnal* animals.`
      }
    },
    {
      id: '3300',
      label: 'Animal Shelter - Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Nocturnal (Diurnal)* creatures have highly developed senses of hearing, smell, and eyesight.
                *Cow (Sheep)* gives milk and protects its calf from the enemies.
                *Humans (Kangaroo)* support the physical, emotional, social and intellectual development of their child.
                The compound eyes of insects are made up of small units called *ommatidia (proboscis)*.
                The *thorax (abdomen)* is the middle region of an insect body.`
      }
    },
    {
      label: 'Choose the best Answer - Some Animal facts ',
      id: '3400',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is the group of parrots called?',
            options: 'Flock, Pride, Parliament, herd'
          },
          {
            qText: 'Which of the following is associated with group of cranes?',
            options: 'Stare, Hive, Shoal, Pack'
          },
          {
            qText:
              'The changes in an animal behaviour to adjust with its habitat is called _________.',
            options: 'Adaptation, Metamorphosis, Fertilisation, Parenting'
          },
          {
            qText: 'Which organ does a fish use to breathe in water?',
            options: 'Gills, Lungs, Skin, Tougue'
          },
          {
            qText:
              'Bats use ultrasonic sounds to find their way in dark and detect objects. This is called ____.',
            options: 'Echolocation, Navigation, Adaptation, Nocturnal'
          }
        ]
      }
    },
    {
      label: 'Interesting facts on animals  - True or False',
      id: '3500',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Vampire bats feed on the blood of their prey.
                    Female kangaroo carries its baby in its pouch.
                    Ants have organs of smell and taste in their antennae.`
          },
          {
            name: 'False',
            text: `Birds do not migrate from their shelters to avoid adverse conditions.
                    A group of elephants is known as herd.
                    All the species of birds build nests for their shelters.`
          }
        ]
      }
    },
    {
      id: '3600',
      type: 'sequence',
      label: 'Words related to Animal world',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [`PRIDE , THORAX , DIURNAL , FLOCK , TRUNK`]
    },
    {
      label: 'Conservation of Animals- Reading',
      type: 'passage',
      id: '3700',
      data: {
        title: 'Conservation of Animals',
        text: `Due to increasing exploitation of animals, it is important to understand reproduction in animals, extinction of animals and the ways to preserve them.
  # Reproduction in Animals
  Reproduction is the biological process by which an organism gives rise to a new organism. There are two types of reproduction in animals: sexual reproduction and asexual reproduction.              
  Sexual reproduction consists of the following stages:
  1. Pre-fertilization 
  2. Fertilization 
  3. Post-fertilization              
  Animals in which embryo develops outside the body are called oviparous animals, ex: Butterfly and Frogs. Animals in which the embryo develops inside the body are called viviparous animals. Humans, cows, deer and dogs are some examples.
  The type of reproduction in which only a single parent, gets divided into two new offspring, is known as asexual reproduction. There are four primary ways of asexual reproduction in animals: Fission, Budding, Fragmentation and Spore formation.
  # Conservation of Animals
  A National park is an area which is strictly reserved for the betterment of the wild life. The national parks cover an area of 100 – 500 square kilometers. In these areas, private ownership rights are not allowed.              
  A sanctuary is a protected area which is reserved for the conservation of animals only. Harvesting of timber, collection of forest products and private ownership rights are allowed here.`
      }
    },
    {
      label: 'Oviparous Vs Viviparous',
      id: '3800',
      type: 'group',
      data: {
        title: 'Classify the below animals on whether they lay eggs or not',
        types: [
          {
            name: 'Oviparous',
            text: 'Duck, Frog, Sparrow, Butterfly, Eagle'
          },
          {
            name: 'Viviparous',
            text: 'Human, Deer, Lion, Tiger, Elephant'
          }
        ]
      }
    },
    {
      label: 'Endangered Vs Not Endangered',
      id: '3900',
      type: 'group',
      data: {
        title: 'Classify the below animals',
        types: [
          {
            name: 'Endangered',
            text:
              'Umbrella Tree, Malabar Lily, Rafflesia Flower, Indian Mallo, Musli Plant'
          },
          {
            name: 'Not Endangered',
            text: 'Lotus, Rose, Marigold, Jasmine, Water Lily'
          }
        ]
      }
    },
    {
      label: 'National Parks Vs Wildlife Sanctuaries',
      id: '4000',
      type: 'group',
      data: {
        title: 'Classify as per National Parks Vs Wildlife Sanctuaries',
        types: [
          {
            name: 'National Park',
            text: 'Jim Corbett, Gir Forest, Kaziranga, Sundarban, Periyar'
          },
          {
            name: 'Wildlife Santuary',
            text: 'Kalakkad, Mudumalai, Mundanthrai, Anaimalai, Vedanthangal'
          }
        ]
      }
    },
    {
      id: '4101',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Black, confirmed extinct
          Red, endangered species
          White, rare species
          Green, formerly endangered`,
        title: 'Match the with appropriate choice'
      }
    },
    {
      label: 'Choose the best Answer - Animal Facts',
      id: '4200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which of the following location has Viralimalai Bird Sanctury?',
            options: 'Trichi, Mumbai, Patna, Dehradun'
          },
          {
            qText:
              'Which of the following is not associated with asexual reproduction?',
            options: 'Zygote, Fission, Budding, Fragmentation'
          },
          {
            qText: '_____ is not a Viviparous animal.',
            options: 'Crow, Tiger, Zebra, Cow'
          },
          {
            qText: '______ is the first stage of butterfly formation.',
            options: 'Egg, Zygote, Pupa, Larva'
          },
          {
            qText: 'The fusion of gametes (sex cells) is known as _________.',
            options: 'Fertilisation, Ovulation, Fission, Fragmentation'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop - Animals facts',
      type: 'matchByDragDrop',
      id: '4300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Reproduction in animals are of two types, *sexual* and asexual. 
                Pupa is also known as *Chrysalis*.
                *Fission* is the process of reproduction in flatworms.
                Budding takes place in animals like *Hydras* and corals.
                *Asiatic Lion* is an example of endangered animal.`
      }
    },
    {
      id: '4400',
      label: 'Animal Facts - Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Project Tiger was initiated in India in *1972 (1975)* to protect the Bengal Tiger.
                In the Red Data Book, *Red (Black)* color is used to denote endangered species.
                *Kaziranga (Gir)* national park is famous for one horned Rhino.
                *Blue Cross (Red Data Book)* of India was founded by Captain V. Sundaram of Chennai.
                *Amoeba (Sea Stars)* reproduces through Fission.`
      }
    },
    {
      label: 'Animal Facts ',
      id: '4500',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentence as characteristics of oviparous or viviparous.',
        types: [
          {
            name: 'Oviparous',
            text: `The development of the embryo takes place outside the animal.
                    They produce their young ones by laying eggs.
                    The embryo receives the nutrients from the egg yolk. `
          },
          {
            name: 'Viviparous',
            text: `The development of the embryo takes place inside the animal.
                    They directly give birth to the young ones.
                    The embryo receives the nutrients from the mother.`
          }
        ]
      }
    },
    {
      label: 'Animal Facts - True or False',
      id: '4600',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The third stage of butterfly growth is pupa.
                    Dogs are an example of Vivparous animals.
                    Endangered species have population less than 50 or less than 250 for the past three years.`
          },
          {
            name: 'False',
            text: `Rafflesia Flower is not an endangered species.
                    Sea Anemone reproduces through budding process.
                    UNESCO has declared Gir National Park as a World Heritage Site.`
          }
        ]
      }
    }
  ]
};
