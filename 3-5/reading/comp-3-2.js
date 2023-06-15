export default {
  label: 'Comprehension-2',
  id: 'comp-3-2',
  lockAfter: 2,
  list: [
    {
      id: 'shark',
      type: 'passage',
      label: 'Shark',
      style: 'big',
      data: {
        title: 'Shark',
        text: `In the vast ocean, amidst the shimmering waves, a sleek and powerful predator roams: the shark. 
  Sharks are predators which means they hunt other fishes as their food. The shark is a master of the sea, embodying grace and efficiency in every movement. 
  Swift and agile, the shark strikes with precision, its jaws snapping shut with a force that can rend through flesh and bone.
  A baby shark is called a pup. Sharks have an overall 30,000 pointed teeth in their life span. Their skin is the thickest of all the animals. 
  Sharks show their presence by swimming on the upper layer of water. The horn-like fin on their upper body is visible outside the water.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-shark',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Sharks are _____ .',
            options: 'predators, preys, mammals'
          },
          {
            qText: 'Sharks have _____ teeth.',
            options: 'pointed, blunt, human-like'
          },
          {
            qText: 'A baby shark is called a _____ .',
            options: 'pup, bub, baby'
          },
          {
            qText: 'Sharks move _____ their prey before attacking.',
            options: 'around, away, forward'
          },
          {
            qText: 'Sharks are _____ .',
            options: 'dangerous, friendly, non-friendly'
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        text: `Sharks are *predators*. 
  It means that they hunt other *fishes* as their food.
  A baby shark is called a *pup*.
  Sharks have an overall *30,000* pointed teeth in their life span. 
  Their skin is the thickest of all the *animals*. 
  Sharks show their *presence* by swimming on the upper layer of water. 
  The horn-like *fin* on their upper body is visible outside the water.`
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: ` A baby shark is called a pup.
  Swift and agile, the shark strikes with precision.`
          },
          {
            name: 'False',
            text: ` Sharks have 10,000 pointed teeth in their lifespan.
  Sharks swim on the lower layer of water.
  The skin of sharks is the thinnest of all animals.`
          }
        ]
      }
    },
    {
      id: 'shark-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Predator: An animal that hunts and feeds on other animals.
  Efficiency: The ability to accomplish something with the least amount of wasted time, effort, or resources.
  Agile: Quick and nimble in movement.
  Precision: The quality of being accurate and exact.
  Jaw: The mouth or oral cavity of an animal, especially one with sharp teeth.
  Flesh: The soft muscular tissue of an animal or human body.
  Bone: The hard, rigid connective tissue that forms the skeleton of vertebrates.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'shark-word',
      data: {
        text: `An animal that hunts and feeds on other animals.|PREDATOR
  The ability to accomplish something with the least amount of wasted time, effort, or resources.|EFFICIENCY
  Quick and nimble in movement.|AGILE
  The quality of being accurate and exact.|PRECISION
  The mouth or oral cavity of an animal, especially one with sharp teeth.|JAW
  The soft muscular tissue of an animal or human body.|FLESH
  The hard, rigid connective tissue that forms the skeleton of vertebrates.|BONE`
      }
    },
    {
      id: 'match-3',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Predator, Hunter
  Sleek, Smooth
  Powerful, Strong
  Swift, Quick
  Agile, Nimble
  Precision, Accuracy`
      }
    },
    {
      id: 'match-4',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Predator, Prey
  Sleek, Bulky
  Swift, Sluggish
  Agile, Rigid
  Powerful, Feeble`
      }
    },
    {
      id: 'snake',
      type: 'passage',
      label: 'Slithery Snake',
      style: 'big',
      data: {
        title: 'Slithery Snake',
        text: `In the depths of a lush jungle, a slithery snake silently glided through the undergrowth. Its scaly body shimmered with shades of emerald, blending seamlessly with the surrounding foliage. With eyes as sharp as diamonds, the snake flicked its tongue, tasting the air for signs of prey.
  Camouflaged and patient, it waited for the perfect moment to strike. With lightning speed, it coiled around its unsuspecting victim, squeezing tightly in its constricting embrace. The slithery snake was a master of stealth and strategy.
  Though feared by many, the snake played a vital role in the ecosystem. It controlled rodent populations, maintaining balance in nature. 
  With grace and serpentine elegance, the slithery snake navigated the jungle, a symbol of both danger and harmony.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-4',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: "What color did the snake's scaly body shimmer with?",
            options: `Emerald, Ruby, Sapphire`
          },
          {
            qText: 'What did the snake do to taste the air for signs of prey?',
            options: `Flicked its tongue
  Raised its head high
  Swayed from side to side`
          },
          {
            qText: 'How did the snake capture its prey?',
            options: `It coiled around them and constricted tightly.
  It pounced on them from above.
  It trapped them in a web.`
          },
          {
            qText: 'What important role did the snake play in the ecosystem?',
            options: ` Controlling rodent populations
  Protecting bird nests
  Producing oxygen`
          },
          {
            qText: "How would you describe the snake's movement in the jungle?",
            options: `Graceful and elegant
  Hasty and impatient
  Clumsy and slow`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `The snake's *camouflaged* body blended perfectly with the leaves and bushes.
  The snake waited *patiently* for the right moment to attack.
  The snake's *constricting* embrace left its prey helpless.
  The snake's role in the *ecosystem* is to control rodent populations.
  With its *graceful* movements, the snake moved through the jungle effortlessly.`
      }
    },
    {
      id: 'snake-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Slithery: Moving smoothly and sinuously, like a snake.
  Glide: Moved effortlessly and smoothly.
  Foliage: The leaves and branches of plants.
  Camouflage: Blended or disguised to match the surroundings for concealment.
  Constricting: Tightening or squeezing tightly.
  Embrace: A tight hold or grip.
  Stealth: The act of moving quietly and secretly to avoid detection.
  Strategy: A plan of action designed to achieve a specific goal.
  Rodent: A small mammal belonging to the order Rodentia, such as mice, rats, or squirrels.
  Serpentine: Resembling or characteristic of a serpent, or snake-like.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'snake-word',
      data: {
        text: `Moving smoothly and sinuously, like a snake.|SLITHERY
  Moved effortlessly and smoothly.|GLIDE
  The leaves and branches of plants.|FOLIAGE
  Blended or disguised to match the surroundings for concealment.|CAMOUFLAGE
  Tightening or squeezing tightly.|CONSTRICTING
  A tight hold or grip.|EMBRACE
  The act of moving quietly and secretly to avoid detection.|STEALTH
  A plan of action designed to achieve a specific goal.|STRATEGY
  A small mammal belonging to the order Rodentia, such as mice, rats, or squirrels.|RODENT
  Resembling or characteristic of a serpent, or snake-like.|SERPENTINE`
      }
    },
    {
      id: 'match-5',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Glide, Slid
  Shimmer, Glisten
  Camouflage, Disguise
  Patient, Calm
  Strike, Attack
  Strategy, Tactic`
      }
    },
    {
      id: 'match-6',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Glide, Stumble
  Shimmer, Dull
  Strike, Retreat
  Stealth, Noisy
  Strategy, Chaos
  Constrict, Relax`
      }
    },

    {
      id: 'monkey',
      type: 'passage',
      label: 'Monkey',
      style: 'big',
      data: {
        title: 'Monkey',
        text: `Monkey babies are called 'infants'. Monkeys can be easily seen in India. 
  We usually find them on top of buildings and trees. Their favorite food is bananas. They eat it just like humans, by removing the peels in the same manner. 
  Do you know that monkeys are our ancestors? Their hands and legs are very similar to humans. 
  A few years ago, there used to be street plays, in which monkeys danced and did tricks.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-6',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Monkeys babies are called _____ .',
            options: 'infants, cubs, bugs'
          },
          {
            qText: 'Monkey are our _____ .',
            options: 'ancestors, enemies, slaves'
          },
          {
            qText: 'Monkeys love eating _____ .',
            options: 'bananas, chocolates, apples'
          },
          {
            qText: 'Monkeys _____ from one tree to another.',
            options: 'climb, hop, walk'
          },
          {
            qText: 'Monkeys did _____ in the past.',
            options: 'street tricks, talking, theatre'
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-5',
      type: 'matchByDragDrop',
      data: {
        text: `Monkey babies are called *infants*.
  Monkeys can be easily seen in *India*. 
  We usually find them on top of buildings and on *trees*. 
  Monkey's favorite food is *banana*. 
  Monkeys eat bananas just like humans, by removing the *peels* in the same manner. 
  *Monkeys* are our ancestors`
      }
    },
    {
      id: 'monkey-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Buildings: Man-made structures where monkeys can be found perching or climbing on.
  Tree: Tall plants with a trunk and branches where monkeys often reside.
  Peel: The outer covering or skin of a banana that monkeys remove before eating.
  Ancestor: Referring to the theory of evolution, monkeys are considered to be distant relatives or predecessors of humans.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'monkey-word',
      data: {
        text: `Man-made structures where monkeys can be found perching or climbing on.| BUILDING
  Tall plants with a trunk and branches where monkeys often reside.|TREE
  The outer covering or skin of a banana that monkeys remove before eating.|PEEL
  Referring to the theory of evolution, monkeys are considered to be distant relatives or predecessors of humans.|ANCESTOR`
      }
    },
    {
      id: 'panda',
      type: 'passage',
      label: 'Panda',
      style: 'big',
      data: {
        title: 'Panda',
        text: `Pandas are amazing animals! They are big, cuddly bears that live in a country called China. Pandas have a unique black and white fur that makes them look so cute and special. They have round faces with black patches around their eyes, which make them look like they're wearing masks. 
    Pandas are very good at climbing trees, even though they are quite heavy. They have strong paws and sharp claws that help them grip onto branches. 
    But do you know what pandas love to eat the most? Bamboo! They munch on bamboo all day long. It's their favorite food. 
    Pandas are also known for being peaceful and calm animals. They spend most of their time relaxing and sleeping. Sometimes, they even roll around and play with each other. 
    Sadly, pandas are an endangered species, which means there aren't many of them left in the world. That's why it's important for us to protect them and their habitats. 
    Pandas are truly incredible creatures, and we should do our best to help them survive and thrive in the wild.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-5',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: "What feature makes pandas look like they're wearing masks?",
            options: `Black patches around their eyes, Long tail, Sharp claws`
          },
          {
            qText: 'What do pandas love to eat the most?',
            options: `Bamboo, Fruits, Grass`
          },
          {
            qText: 'What is one of the unique abilities of pandas?',
            options: `Climbing trees, Burrowing underground, Swimming`
          },
          {
            qText: `Why are pandas considered endangered?`,
            options: `Their habitat is being destroyed.
    They reproduce too quickly.
    They have no natural predators.`
          },
          {
            qText: 'What is an important role for humans in protecting pandas?',
            options: `Supporting conservation efforts.
    Selling panda products.
    Adopting pandas as pets.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        text: `Pandas have a unique black and white *fur* that makes them look cute and special.
    Pandas love to eat *bamboo*.
    Pandas are known for being peaceful and calm *animals*.
    Sadly, pandas are an *endangered* species.
    It's important to protect pandas and their *habitats*.`
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Pandas have black patches around their eyes. 
    Pandas are an endangered species. `
          },
          {
            name: 'False',
            text: `Pandas are good at swimming.
    Pandas spend most of their time eating bamboo.
    Panda sleep for 12 hours a day.`
          }
        ]
      }
    },
    {
      id: 'pand-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Endangered: Animals that are at risk of becoming extinct.
    Habitat: The natural home or environment of an animal.
    Fur: The thick hair covering the body of an animal.
    Bamboo: A type of plant that pandas eat.
    Pand: Large, cuddly bears that live in China.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'panda-word',
      data: {
        text: `Animals that are at risk of becoming extinct.|ENDANGERED
    The natural home or environment of an animal.|HABITAT
    The thick hair covering the body of an animal.|FUR
    A type of plant that pandas eat.|BAMBOO
    Large, cuddly bears that live in China.|PANDA`
      }
    },
    {
      id: 'flamingo',
      type: 'passage',
      label: 'Flamingo',
      style: 'big',
      data: {
        title: 'Flamingo',
        text: `Flamingos are fascinating birds that live in different parts of the world. These beautiful creatures are known for their vibrant pink feathers and long, slender legs. Flamingos can be found in places like Africa, Asia, the Americas, and even parts of Europe. They love to live near lakes, lagoons, and other bodies of water where they can find their favorite food, such as shrimp and algae.
    One of the most amazing things about flamingos is their unique way of standing. They balance on one leg while tucking the other leg up against their body. It may seem strange, but this position helps them conserve energy and stay balanced on uneven surfaces. Flamingos also use their long, curved beaks to catch food from the water. They filter out the small organisms they eat and swallow the water.
    Did you know that flamingos love to socialize? They often gather in large groups called colonies or flocks. These flocks can sometimes include hundreds or even thousands of flamingos! When they gather together, they communicate with each other by making loud calls and performing special dances. It's a spectacular sight to see!
    Flamingos are also excellent parents. They build nests out of mud and sticks, usually in shallow water. The female flamingo lays a single egg, and both the male and female take turns keeping it warm until it hatches. Once the chick is born, the parents feed it a special milk-like substance that they produce in their bodies.
    Flamingos are truly remarkable creatures. Their bright pink feathers, graceful stance, and social behavior make them a favorite bird for many people. Next time you see a picture of a flamingo or spot one in a zoo, remember how incredible these birds are and all the unique things they can do!`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-6',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What color are flamingos known for?',
            options: `Pink, Blue, Yellow`
          },
          {
            qText: 'How do flamingos stand?',
            options: `On one leg, On their wings, On all fours`
          },
          {
            qText: 'What do flamingos eat?',
            options: `Shrimp and algae, Nectar and pollen, Fish and insects`
          },
          {
            qText: `Where do flamingos build their nests?`,
            options: `On the ground, In caves, Underwater`
          },
          {
            qText: 'How do flamingo parents take care of their eggs?',
            options: `They sit on them all the time.
    They throw them in the water.
    They roll them around.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `Flamingos are known for their *vibrant* pink feathers.
    Flamingos balance on one *leg* while tucking the other leg up against their body.
    Flamingos use their long, curved *beaks* to catch food from the water.
    Flamingos often gather in large *colonies* or flocks.
    Female flamingos lay a single egg in their *nests*.`
      }
    },
    {
      id: 'flamingo-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Colony: A group of animals or birds living together
    Slender: Thin or slim in shape
    Vibrant: Bright and intense in color
    Nest: A structure built by birds to lay eggs and raise their young
    Algae: Simple plants that grow in water or moist environments`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'flamingo-word',
      data: {
        text: `A group of animals or birds living together.|COLONY
    Thin or slim in shape.|SLENDER
    Bright and intense in color.|VIBRANT
    A structure built by birds to lay eggs and raise their young.|NEST
    Simple plants that grow in water or moist environments.|ALGAE`
      }
    }
  ]
};
