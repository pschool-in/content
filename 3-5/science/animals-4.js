export default {
  id: 'animals-4',
  label: 'Life of Animals',
  lockAfter: 2,
  list: [
    {
      label: 'Habitat - Notes',
      type: 'passage',
      id: 'notes-habitat',
      data: {
        title: 'Habitat',
        text: `Our Earth provides a place for lakhs and lakhs of animals to live. The living place of an animal or a plant is called habitat. The basic needs such as food, water, shelter and place to breed are found in a habitat.
Habitat can be as big as a forest or as small as a leaf. Animals live in different conditions.
# Land Habitat
Animals that live on land are called terrestrial animals. eg: Ant, Cat, Lion
It can further be divided into Plain and Forest habitats.
Animals like rats, cows, and camels live in plain. Deer, fox, bear, and bison live in the forest.
# Water Habitat
Animals that live in water are called aquatic animals. This can further be divided into two groups.
1. Freshwater - eg: Crab, Goldfish, Snail, Crab
2. Marine (Sea water) - eg: Shark, Seahorse, Octopus
# Arboreal Animals
Animals that live on trees are called arboreal animals. eg: Squirrel, Monkey
# Aerial animals
Animals that can fly most of the time are called aerial animals. eg: Crow, Dove
# Amphibians
Animals that need both land and water to live are called amphibians. Eg: Frog, Crocodile`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-habitat',
      data: {
        text: `Animals that live in trees are *arboreal*.
Animals that spend most of their time flying are *aerial*.
Animals that live in both land and water are *amphibians*.
Animals that live in water are *aquatic*.
River water is *freshwater*.`
      }
    },
    {
      label: 'Choose the Best Answer',
      id: 'mcq-habitat',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The living environment of an animal is called its _____.',
            options: 'habitat, house, shelter'
          },
          {
            qText: 'Which of the following is not an amphibian?',
            options: 'dolphin, crocodile, tortoise, crab'
          },
          {
            qText: 'Which of the following statements is false?',
            options: `Birds that can swim are called aquatic animals.
Birds that don't fly are not aerial animals.
Amphibians can live without water for a long time.`
          },
          {
            qText: 'Which of the following is not an aerial animal?',
            options: 'hen, crow, eagle, dove'
          },
          {
            qText: 'Domestic animals live in _____.',
            options: 'plains, cities, villages, towns'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false-habitat',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Some fishes live only in freshwater and some live only in seawater.
Animals like camels, cows, and goats live in plains.
The living place of an animal is called its habitat.`
          },
          {
            name: 'False',
            text: `Humans can live both on land and water.
Animals like foxes and wolves live in plains.
All birds are aerial animals.`
          }
        ]
      }
    },
    {
      label: 'Group the Animals',
      id: 'classify-habitat',
      type: 'group',
      commonData: {
        title: 'Group the animals based on the given label.'
      },
      data: [
        {
          types: [
            {
              name: 'Terrestrial',
              text: 'Bison, Tiger, Horse, Cow, Fox, Bear, Deer'
            },
            {
              name: 'Aquatic',
              text: 'Fish, Octopus, Seahorse, Jellyfish, Starfish'
            }
          ]
        },
        {
          types: [
            {
              name: 'Freshwater',
              text: 'Goldfish, Alligator, Water snakes'
            },
            {
              name: 'Marine',
              text: 'Seahorse, Jellyfish, Starfish, Shark'
            }
          ]
        },
        {
          types: [
            {
              name: 'Plain',
              text: 'Cow, Camel, Hen, Goat, Sheep'
            },
            {
              name: 'Forest',
              text: 'Fox, Bear, Bison, Deer'
            }
          ]
        },
        {
          types: [
            {
              name: 'Arboreal',
              text: 'Monkey, Squirrel, Chameleon'
            },
            {
              name: 'Aerial',
              text: 'Eagle, Vulture, Pigeon, Parrot'
            }
          ]
        },
        {
          types: [
            {
              name: 'Amphibian',
              text: 'Frog, Crab, Crocodile, Hippo'
            },
            {
              name: 'Not an Amphibian',
              text: 'Fish, Monkey, Snake, Elephant, Lizard'
            }
          ]
        }
      ]
    },
    {
      id: 'match-habitat',
      label: 'Match the following',
      type: 'match',
      data: [
        `Land, Terrestrial
Marine, Sea
Trees, Arboreal
Water, Aquatic
Habitat, Living Place`,

        `Tiger, Forest
Penguin, Polar region
Whale, Saltwater
Camel, Desert
Frogs, Freshwater`,

        `Terrestrial, Elephant
Arboreal, Squirrel
Aerial, Eagle
Marine, Whale
Freshwater, Goldfish
Amphibian, Hippo`,

        `Forest, Fox
Arboreal, Monkey
Aerial, Pigeon
Plain, Dog
Desert, Camel
Amphibian, Frog`
      ]
    },
    {
      label: 'Food Habit - Notes',
      type: 'passage',
      id: 'notes-food',
      data: {
        title: 'Food Habit of Animals',
        text: `# Herbivores
Animals that eat only plants are called herbivores or herbivorous animals. Eg: Deer, Cow, Goat, Elephant, Giraffe. They have sharp straight-edged flat front teeth called incisors to bite the grass and leaves.
# Carnivores
Flesh-eating animals are called carnivores or carnivorous animals. Eg: Hyena, Tiger, Lion, Cheetah. They have sharp, pointed teeth called canines and they are used to tear the flesh of animals.
# Omnivores
Some animals eat both plants and the flesh of other animals. These animals are called omnivores or omnivorous animals. Eg: Bear, Man, Crow, Hen, Fox. These animals have a combination of tearing, biting and grinding teeth.  
# Birds and Beaks
Different birds have different beaks based on their food habit.
1. The eagle has a strong sharp, curved beak to catch prey and tear its flesh.
2. Fish-eating birds like kingfishers have spear-like beaks designed for stabbing fish.
3. The hooked sharp beak of the parrot helps to collect and eat the grains
4. The strong chisel beak of woodpeckers is used to make holes in the trees and catch small insects.
5. Sparrow has a short, conical beak which helps to crack open the shells and extract the inner nut or seed.
6. Duck has a flat beak that helps to grip plants and insects from water.
# More facts
1. An elephant needs a lot of food. It feeds on coconut leaves, sugarcane, banana, and different plants. It uses its trunk to fetch its food and sucking water.
2. An earthworm lives in soil, and it can eat and digest soil along with organic wastes and microbes.
3. A spider spins webs and eats small insects that fall on it.
4. A butterfly has a tube-like structure (proboscis) to suck nectar from flowers.
5. Female mosquitoes suck blood from animals. They have a needle-like structure to suck blood. The male ones feed on plant juices.
6. The lizards and frogs have a sticky tongue to catch insects.
7. A Hen feeds on grains, small insects, earthworms etc.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-food',
      data: [
        `Plant-eating animals are called *herbivores* and they have *incisor* teeth.
Flesh-eating animals are called *carnivores* and they have *canine* teeth.
Animals that eat both plants and animals are called *omnivores*.`,

        `Eagles have a strong, sharp *curved* beaks.
Fish-eating birds have *spear* like beaks.
Woodpeckers have strong *chisel* like beaks.
Sparrows have short *conical* beaks.
Ducks have *flat* beaks.`,

        `The lizards and frogs have a *sticky* tongue.
*Female* mosquitoes suck blood from animals. *Male* mosquitoes feed on plant juices. They have *needle* like mouth.
Butterflies have a *tube* like mouth to suck nectar from flowers.`
      ]
    },
    {
      label: 'Choose the Best Answer',
      id: 'mcq-food',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Birds have different types of beaks based on their _____.',
            options: 'food habit, habitat they live, weight, neck structure'
          },
          {
            qText: 'The teeth used to bite grass are called _______.',
            options: 'incisors, canines, molars, pre-molars'
          },
          {
            qText: 'All animals have ______ teeth.',
            options: 'molar, incisor, canine'
          },
          {
            qText: 'Which animal can eat and digest soil?',
            options: 'Earthworm, Ant, Termite, Rat'
          },
          {
            qText: 'The teeth used to tear flesh are called _______.',
            options: 'canines, incisors, molars, pre-molars'
          },
          {
            qText:
              'Mosquito sucks its food. Which of the animals given below suck their food?',
            options: 'Butterfly, Parrot, Cockroach'
          },
          {
            qText:
              'Bear sometimes eats pumpkin and sometimes eats fish. So, it is an _________.',
            options: 'omnivore, carnivore, herbivore'
          },
          {
            qText:
              'A bird that has a beak which helps it to crack open shells and eat the seed inside is ______.',
            options: 'sparrow, owl, kingfisher'
          },
          {
            qText: 'Flesh-eating animals have well developed ______.',
            options: 'canines, tusks, molars'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false-food',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Dogs use their tongue to drink water.
Spiders spun webs to catch insects.
Only female mosquitoes suck blood from animals.`
          },
          {
            name: 'False',
            text: `Ducks have sharp beaks.
Elephants use their trunk to eat the food. 
The trunk is the mouth of elephants.`
          }
        ]
      }
    },
    {
      label: 'Group the Animals',
      id: 'classify-food',
      type: 'group',
      commonData: {
        title: 'Group the animals based on the given label.'
      },
      data: [
        {
          types: [
            {
              name: 'Herbivore',
              text: 'Cow, Buffalo, Goat, Elephant, Zebra'
            },
            {
              name: 'Carnivore',
              text: 'Lion, Leopard, Cheetah, Seal, Crocodile'
            }
          ]
        },
        {
          types: [
            {
              name: 'Carnivore',
              text: 'Tiger, Shark, Hyena, Eagle'
            },
            {
              name: 'Omnivore',
              text: 'Human, Bear, Hen, Crow, Fox'
            }
          ]
        }
      ]
    },
    {
      id: 'match-food',
      label: 'Match Animals and Food',
      type: 'match',
      data: [
        `Honey Bee, Nectar
Leopard, Flesh
Hen, Grain
Spider, Insect
Goat, Plant`,

        `Rabbit, Carrot
Cat, Milk
Goat, Grass
Tiger, Deer
Hen, Earthworm`,

        `Lion, Zebra
Cow, Grass
Elephant, Sugarcane
Parrot, Nuts
Spider, Insects`
      ]
    },
    {
      label: 'Young Ones - Notes',
      type: 'passage',
      id: 'notes-baby',
      data: {
        title: 'Young Ones',
        text: `The babies of animals, either grow in their mother's tummy or hatch out of the eggs. Some animals like crows, spiders, and lizards lay eggs. Unlike a chicken, their eggs are tiny. Some animals lay eggs that are too tiny to be observed with the naked eye.
Animals that lay eggs are called Oviparous. Animals that give birth to young ones are called Viviparous.   
# Hen
A hen lays eggs. The warmth that is provided by the hen to her eggs helps the chick inside the egg to grow. After the full growth, the chick breaks the eggshell and comes out.
When a hen is hatching her eggs, she becomes aggressive for fear of their safety. She attacks anyone who tries to go near the eggs.
Unlike, a chick which does not look very different from a hen, in some animals, the young one grows into an adult animal that looks very different from the young one. This change of form is called metamorphosis. eg: butterfly, frog
# Do you know?
After we have cleaned the grain we buy, we store it in a box. Even then, when we open the box after some days, we may see some insects in it.
There can be insects in the grain stored in places like warehouses, in the grocer's shop or even in our homes. Now, if a female insect lays eggs in this grain, we cannot see them because of their tiny size. The warmth and air they get in the box in which the grain is stored is enough for them to grow. So their growth continues inside the box. They also have the same stages of growth, namely, egg, larva, pupa and adult. When we open the box, we see the insects in the grain at the different stages of growth in which they are.`
      }
    },
    {
      label: 'Ones that lay eggs',
      id: 'classify-baby',
      type: 'group',
      data: {
        title: 'Classify the below animals.',
        types: [
          {
            name: 'Oviparous',
            text: 'Hen, Spider, Frog, Snake, Crow'
          },
          {
            name: `Viviparous`,
            text: 'Cat, Dog, Horse, Cow, Donkey'
          }
        ]
      }
    },
    {
      label: 'Life Cycle of Butterfly - Notes',
      type: 'passage',
      id: 'notes-butterfly',
      data: {
        title: 'Life Cycle of Butterfly',
        text: `A butterfly has to go through various stages of growth, unlike other animals. These stages are egg, larva, pupa, and adult. The adult stage is called the butterfly. All the butterflies have to go through these four stages.
Butterflies of various shapes and beautiful colors are a part of our environment. They live their life among plants. Let us take the example of the common plain tiger butterfly.
The female butterfly lays eggs on a Milkweed leaf. In 6 to 8 days, the larva emerges from the egg. The larva of a butterfly is called a caterpillar. 
When the caterpillar comes out of the egg it is very hungry. It begins to nibble and eat the very leaf on which it emerges from the egg. It eats very fast, and it grows very fast and it does not fit in its skin. To shed old skin to make way for new growth is called molt. 
Again it begins to gobble up the leaf and continues to grow rapidly. In 2 or 3 days, it molts a second time. In this way, it molts 4 times. It remains in the caterpillar stage for 10 to 12 days.
Just before the last molt the caterpillar weaves a button of a silken thread on a stalk or a leaf and hangs itself from it. When it molts this time it forms a pupa which is the next stage of its growth. The pupa of a butterfly is also called a chrysalis. It remains inside the chrysalis for the next 11 or 12 days. It does not eat anything during this stage.
However, inside the chrysalis, important changes take place in its body. The growth of the Plain Tiger is completed inside the chrysalis. Then, the adult butterfly emerges from the chrysalis. It now has four attractive wings and six long legs.
For each type of butterfly, the type of plant on whose leaves its female will lay eggs is fixed.
The time the larva takes to emerge from the eggs is different for different types of butterflies. There is a great variety of caterpillars. Different types of caterpillars are of different colors. Their body is long. Many types of caterpillars are hairy.`
      }
    },
    {
      id: 'drag-drop-image',
      label: 'Drag and Drop',
      type: 'dragAndDrop',
      data: {
        img: 'life-cycle-of-butterfly.jpg',
        title: 'Life Cycle of a Butterfly',
        width: 350,
        height: 370,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Eggs',
            x: 50,
            y: 40
          },
          {
            word: 'Larva',
            x: 280,
            y: 60
          },
          {
            word: 'Pupa',
            x: 260,
            y: 320
          },
          {
            word: 'Adult',
            x: 40,
            y: 320
          }
        ]
      }
    },
    {
      id: 'match-butterfly',
      label: 'Animals & their babies',
      type: 'match',
      data: {
        text: `Cat, Kitten
Dog, Puppy
Butterfly, Caterpillar
Goat, Kid
Lion, Cub
Horse, Foal`
      }
    },
    {
      label: 'Choose the Best Answer',
      id: 'mcq-butterfly',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Where does a plain tiger butterfly lay her egg?',
            options: 'Milkweed leaf, Mulberry leaf, Mango leaf, Neem leaf'
          },
          {
            qText: 'What is the pupa of a butterfly called?',
            options: 'Chrysalis, Shell, Budding, Larva'
          },
          {
            qText:
              'The process of change in the shape of animals is called ___________.',
            options:
              'Metamorphosis, Photosynthesis, Metagenesis, Crystallization'
          },
          {
            qText: 'The larva of a butterfly is called?',
            options: 'Caterpillar, Pupa, Worm, Stalk'
          },
          {
            qText: 'While hatching eggs, the hen becomes _______.',
            options: 'aggressive, kind, tired, bored'
          },
          {
            qText: 'Caterpillar is always very _______.',
            options: 'hungry, playful, angry, aggressive'
          },
          {
            qText: 'Caterpillar eats the ______.',
            options: 'leaf, stem, flower, fruit'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-butterfly',
      data: [
        `To shed old skin to make way for new growth is called *molt*.
The four stages of butterfly growth are egg, larva, pupa, and *adult*.
The change in the shape of animals as they grow is called *metamorphosis*.
The pupa of a butterfly is also called a *chrysalis*.
The larva of butterfly is called *caterpillar*.`,

        `All butterflies undergo *four* stages of growth.
Caterpillar molts for *five* times.
The butterfly remains in the chrysalis for *twelve* days.
The adult butterfly has *six* legs.
Usually the larva emerges from the egg in *seven* days.`
      ]
    },
    {
      label: 'True or False',
      id: 'true-false-butterfly',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Different types of caterpillars are of different colors.
Different types of butterflies lay eggs in different types of leaves.
Eggs of hen and tortoise need warmth to hatch.`
          },
          {
            name: 'False',
            text: `In the pupa stage, the butterfly eats a lot.
Once we clean the grains and put them in a box, they will be free from insects.`
          }
        ]
      }
    }
  ]
};
