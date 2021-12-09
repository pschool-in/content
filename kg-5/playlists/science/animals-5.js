export default {
  id: 'animals-5',
  label: 'Animals 5',
  lockAfter: 4,
  list: [
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
      label: 'Oviparous Vs Viviparous',
      id: 'classify',
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
      id: 'classify-2',
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
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
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
