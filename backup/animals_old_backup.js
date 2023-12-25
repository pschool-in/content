export default {
  id: 'animals',
  label: 'Animal',
  list: [
    {
      label: 'Animals & their habits - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Animals & their habits',
        text: `Animal life can be broadly understood on the basis of the following:
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
A Food web is an interconnection of multiple food chains. Transfer of energy between organisms of different energy sources occurs through food web.`
      }
    },
    {
      label: 'Drag and Drop - Animals & their Shelters',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `A lion lives in a *den*.
Birds live and lay their eggs in the *nest*.
An *earthworm* is found in soil.
We can find a number if fishes in a *pond*.
Spider like to weave a *web* and honeybee likes to live in a *honeycomb*.`
      }
    },
    {
      label: 'Who am I?',
      type: 'completeWord',
      id: 'drag-drop-4',
      data: {
        text: `I have 8 arms and I live in the sea. Who am I ?|OCTOPUS| O__O__S
I am a bird but I cannot fly. I can swim very well. Who am I?|PENGUIN|P__G__N
I am the largest animal in the sea. Who am I?|WHALE| W__L_
I do not have any legs. I like to crawl. Who am I?|SNAKE| S__K_
I have wings but I am not a bird. Who am I?|BUTTERFLY|B_T___F__`
      }
    },
    {
      label: 'Birds and Beaks',
      type: 'completeWord',
      id: 'drag-drop-5',
      data: {
        text: `It has strong, sharp, curved beak to catch prey and tear its flesh.|EAGLE|E__L_
Fish-eating birds have spear-like beaks designed for stabbing fish.|KINGFISHER|K_NG____E_
The hooked, sharp beak helps to collect and eat the grains.|PARROT|P__R__
Strong chisel beak is used to make hole in the trees and catch small insects.|WOODPECKER| W__D___K__
Short, conical beak which helps to crack open the shells and extract the inner nut or seed.|SPARROW|S__R__W
Flat beak that helps to grip plant and insect from water.|DOVE | D___`
      }
    },
    {
      id: 'fillup-2',
      label: 'Animal Shelter - Fill Up-2',
      type: 'fillup',
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
      label: 'Who am I?',
      type: 'completeWord',
      id: 'drag-drop-animals',
      data: {
        text: `I am the king of the forest. I eat animals like deer, zebra and giraffe. Who am I?|LION| L___
I suck blood from animals. But males of my family feed on plant juices. Who am I?|FEMALE MOSQUITO| F___L_ M__QU___
I eat cereals, small insects, earthworms etc. I live on land. Who am I?|HEN| _E_
I eat small insects that fall in my web. Who am I?|SPIDER| S__D__`
      }
    },
    {
      label: 'Steps in Sexual Reproduction',
      type: 'sorting',
      id: 'sorting',
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
      id: 'true-false-3',
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
      id: 'word-connect',
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
      id: 'mcq-2',
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
      id: 'sorting-2',
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
      label: 'Body structure of animals  - Reading',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Body structure of animals ',
        text: `# Body structure of reptiles 
Reptiles have scales instead of hair or feathers. Reptiles are considered to be ancestors of birds and mammals. Dinosaurs are well known reptiles that became extinct. Reptiles include snakes, lizards, turtles, alligators and crocodiles. Snakes are reptiles that are without limbs. Reptiles shed and replace their scales throughout their lifetime.
# Body structure of insects
The common insects we see around us are bees, houseflies, mosquitoes and beetles. All insects have three main parts in their body which are called head, thorax and abdomen.
The head contains two eyes, mouth and two hairy parts that are called antennae. The thorax is the part of the body that bears wings and legs. The abdomen is the part of the body that consists of the heart and stomach.
# Body structure of fish
There are many different kinds of fish but all of them have some things in common. They breathe through organs called gills. They have fins in place of arms and legs. They are often covered by scales. The shape of their body helps them swim freely.
# Body structure of birds
All birds have wings but not all of them can fly. All birds also have feathers, Birds are the only living animals that have feathers. Birds are able to fly because of their body structure and feathers. Flying birds are strong but light. Their powerful chest muscles help them flap their wings. Their bodies are narrow towards the ends. Every bird has two legs, two feet and a bill or beak.
# Feathers
Feathers protect birds from water, heat and cold. At least once a year, birds shed their old feathers and grow new ones. This is called molting. Birds mainly have three types of feathers. The flight feathers help them to fly and are found on the wings and tail. The body feathers are usually coloured and they cover the entire body. The down feathers are soft, fluffy and always seen close to the body of a bird. It keeps them warm.
# Feet and Claws
All birds have two feet and four toes. They help the bird to walk, wade through water and catch food. The woodpecker has two toes in the front and two at the back. Their claws are long and curved. This helps them to climb up trees. Duck has three toes that are webbed and a little toe at the back. These help them to swim. The vulture has four toes with very sharp claws. These help them to catch prey. The sparrow has three toes in the front and one at the back so that they can hold on to the branches tightly. Cranes have long legs and four toes that are spread wide so that they can walk near banks of rivers and lakes to eat fish.
# Nesting Habits
Birds bulid nests to lay eggs and protect their babies. They use grass, straw, twigs and leaves to build their nests. Tailorbird uses its beak to stitch leaves to build the nest. Different birds build different kinds of nest in trees, but there are some birds like a peacock or a duck who build their nests on the ground.`
      }
    },
    {
      id: 'match-4',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Snake, limbless
Gills, fish
Antennae, insects
Feathers, birds
Dinosaur, extinct`,
        title: 'Match the following'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-4',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Reptiles have *scales* instead of hair or feathers.
All insects have three main parts in their body which are called head, *thorax* and abdomen.
All birds have *wings* but not all of them can fly.
Feathers *protect* birds from water, heat and cold.`
      }
    },
    {
      label: 'Who am I?',
      type: 'completeWord',
      id: 'drag-drop-birds',
      data: {
        text: `I have 2 toes in front and 2 at the back. My claws are long and curved. Who am I?|WOODPECKER|W__D__C___
I have webbed feet with a little toe at the back. Who am I?|DUCK|D___
I have 4 toes with very sharp claws to catch prey. Who am I?|VULTURE|V__T__E
I have 3 toes in front and one at back to hold on to the branches. Who am I?|SPARROW|S__R__w`
      }
    },
    {
      id: 'fillup-6',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Tailorbird uses its *beak (claws)* to stitch leaves to build the nest.
Birds mainly have *three (four)* types of feathers
Reptiles are considered to be ancestors of *birds (insects)* and mammals.
All birds have two feet and *four (six)* toes.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-5',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Reptiles have scales instead of hair.
Birds are strong but light.`
          },
          {
            name: 'False',
            text: `Sparrow uses beak to stitch its nest.
Crane has webbed feet.
Fish breathes through lungs.`
          }
        ]
      }
    },
    {
      label: 'Choose the best Answer - Animal food habit',
      id: 'mcq-4',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `How many parts are there in an insect's body?`,
            options: '3, 4, 5'
          },
          {
            qText: 'What do fishes have in place of arms and legs?',
            options: 'fins, scales, gills'
          },
          {
            qText: `Which part of the insect's body bears wings?`,
            options: 'thorax, head, abdomen'
          },
          {
            qText:
              'What is the process through which birds shed their feathers and grow new ones called?',
            options: 'molting, malting, melting'
          }
        ]
      }
    },
    // animals-4
    {
      label: 'Life Journey of Animals - Reading',
      type: 'passage',
      id: 'reading-2',
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
The main visible parts on the head are the large compound eyes, the antennae (feelers) and the mouth parts. The thorax is the middle region of the body. 
# Abdomen 
The abdomen is the last part of the insect body. `
      }
    },
    {
      label: 'Lives Alone Vs Group',
      id: 'classify-3',
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
      id: 'classify-4',
      type: 'group',
      data: {
        title:
          'Classify the below animals on the basis of their nocturnal behaviour .',
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
      id: 'classify-5',
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
      id: 'match-2',
      label: 'Animals & their groups - Match the following',
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
      id: 'drag-drop-3',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `The animals which are active at night are called *Nocturnal* animals.
*Kangaroo* is best known for parental care.
*Honeybees* lives in hives.
The human *baby* is completely helpless at birth.
Animals that are active during day time are known as *Diurnal* animals.`
      }
    },
    {
      id: 'fillup-3',
      label: 'Animal Shelter - Fill Up',
      type: 'fillup',
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
      id: 'mcq-3',
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
      id: 'true-false-3',
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
      id: 'words',
      type: 'sequence',
      label: 'Words related to Animal world',
      commonData: {
        title: 'connect the letter to create word'
      },
      data: [`PRIDE , THORAX , DIURNAL , FLOCK , TRUNK`]
    },
    //animals-5 (old)
    {
      label: 'Conservation of Animals- Reading',
      type: 'passage',
      id: 'reading',
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
      label: 'Endangered Vs Not Endangered',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Classify the below plants',
        types: [
          {
            name: 'Endangered',
            text: 'Umbrella Tree, Malabar Lily, Rafflesia Flower, Indian Mallo, Musli Plant'
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
      id: 'classify-3',
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
      id: 'match',
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
      id: 'mcq',
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
      id: 'drag-drop',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Reproduction in animals are of two types, *sexual* and asexual. 
Pupa is also known as *Chrysalis*.
*Fission* is the process of reproduction in flatworms.
Budding takes place in animals like *Hydras* and corals.
*Asiatic Lion* is an example of endangered animal.`
      }
    },
    {
      id: 'fillup',
      label: 'Animal Facts - Fill Up',
      type: 'fillup',
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
      id: 'classify-sentence',
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
      id: 'true-false',
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
    },
    {
      label: 'Animal Senses - Reading',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Animal Senses',
        text: `# Animal Senses
We know that human beings have five senses. All animals have similar senses too but most of them have a particular sense that is well developed to match their specific survival needs. Moles, that live in the underground where it is dark have little use for good eyesight. They rely on a well developed sense of touch to find food. A spider relies on its eyesight to catch prey. Shark relies on its superior sense of smell to follow the scent of a fish. It can detect even a small amount of blood in a large volume of water.
# Hearing 
A humpback whale communicates with beeps and calls that sound like a song. Other whales can hear the songs miles away. Male humpbacks repeat long songs that probably attract females and warn other males to keep away. Bats and whales find their way around by listening for echoes that bounce off objects. Birds have an acute sense of hearing too. Their ears are small openings in the skull protected by feathers. Birds are able to hear much sharper sounds than humans can. Ants do not have organs of hearing, but they have sensors on their feet and knees to pick up vibrations passing through leaves or the ground. Snakes do not have external ears but their inner ear is well developed . They can hear only low frequency sound or vibrations which travel through the bones to their inner ear.
# Taste
Butterflies, bees and houseflies taste with their feet. Before laying eggs on a plant, a butterfly walks on the leaf to make sure it is edible for the caterpillar. A fly can feel with its mouth parts, its antennae and its feet. A male moth's feathery antennae can detect special floating chemicals given off by the female moth even if she is two or three kilometers away. A shark has a group of taste buds all around the inside of its mouth and also on the front of its snout. A snake's tongue has no taste buds. The forked tongue is able to collect smells from two places at once and the stronger smell gives the snake a sense of direction. Smells and tastes are then separated in two pits, called the Jacobson's organs on the roof of the mouth. Ants also have a well developed sense of taste and can distinguish sour, sweet, bitter and salty taste.
# Smell
Dogs have an excellent sense of smell. A bloodhound's ability to smell helps people to track escaped prisoners or lost children. Bloodhounds can  follow a scent that is nearly four days old. The membrane that detects odours is much bigger and much more sensitive in a bloodhound's nose than in a human nose. A male silkworm moth can sniff out a possible mate 11kms away but can not smell anything else. Eel use their sense of smell to hunt rather than sight. The ant's most highly developed sense is that of smell, which helps it to recognise its nest mates, follow trails laid down by its nest mates and find food. Most birds have a poor sense of smell and taste.
# Touch 
Nocturnal animals tend to have a well developed sense of touch. This sense gives animals information about their surroundings. Animals also use the sense of touch to communicate and find food. Touch receptors are seen in the whiskers of cats. A whisker helps the cat to find its way in the dark. Mice have long whiskers that can sense an enemy approaching. A bird's tongue, palate and bill are most sensitive to the sense of touch. These structures contain nerve endings that respond to touch by sending a signal to the brain.
# Sight
Birds have a keen sense of sight. Their eyes are large and produce large, sharp images especially helpful during flight. Birds of prey have the best distance vision in the animal kingdom. A bald eagle can spot a mouse in a field from high up in the sky. An eagle's eyesight is four to eight times sharper than that of a person with perfect vision. Nocturnal creatures have the best night vision. They include cats, mice, bats, owls and moths. They have larger eyes than animals that are active during the day. Their large eyes pick up the faintest light. Most bony fish have good eyesight and can see in colour. Some birds like duck and heron have a transparent membrane that covers the eyes when they dive underwater. This allows them to see underwater. Most insects have compound eyes, it helps them to see in all directions at once. Snakes appear to have a fixed stare because their eyes have no lids, instead a transparent protective membrane covers the eye. Snakes do not have very good eyesight but make up for it with an excellent sense of hearing and smell.`
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `shark, taste
birds, sight
bat, echoes
dog, smell
mice, touch`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Choose the best Answer - Animal Senses',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' How do bats find their way?',
            options: 'echoes, music, sounds of animals'
          },
          {
            qText: 'Where are the taste buds of butterflies located?',
            options: 'feet, tongue, wings'
          },
          {
            qText: `Which type of sense is present on a cat's whisker?`,
            options: 'touch, smell, sight'
          },
          {
            qText: 'What helps the snakes to stare?',
            options: 'transparent membrane, lids, lashes'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-2',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `The animals that are active at night are called *nocturnal* animals.
Shark has taste buds in its mouth as well as on its *snout*.
Ants multi sensory organs are called *antennae*.
Humpback whale communicates with *beeps* and calls that sound like a song.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Snakes have a fixed stare because their eyes do not have lids.
Birds of prey have excellent eyesight.`
          },
          {
            name: 'False',
            text: `Moles have excellent eyesight.
Snake's tongue helps to sense smell.
Most bony fish have good eyesight but can not see colours.`
          }
        ]
      }
    }
  ]
};
