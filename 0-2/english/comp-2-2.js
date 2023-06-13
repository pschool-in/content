export default {
  label: 'Comprehension-2',
  id: 'comprehension-2-2',
  lockAfter: 2,
  list: [
    {
      id: 'pig',
      type: 'passage',
      label: 'Three Little Pigs',
      style: 'big',
      data: {
        title: 'Three Little Pigs',
        text: `Once upon a time, three little pigs set out to build their homes. The first pig built a house of straw, quick and easy. The second pig chose sticks, a bit stronger. But the third pig worked diligently to construct a sturdy brick house.
One day, a big, bad wolf arrived, huffing and puffing. He blew down the straw house with a single breath. The second pig's stick house fell with a few blows. However, the wolf couldn't knock down the brick house. Frustrated, he left.
The three little pigs learned the value of hard work and resilience. From that day on, they lived happily in their safe brick home.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'What materials did the three little pigs use to build their houses?',
            options: `Straw, sticks, and bricks
Straw, wood, and bricks
Wood, bricks, and stone`
          },
          {
            qText:
              'Which house did the big, bad wolf blow down with a single breath?',
            options: `The straw house
The stick house
The brick house`
          },
          {
            qText:
              'How did the three little pigs feel after the wolf failed to blow down the brick house?',
            options: `Happy and relieved
Scared and frightened
Angry and frustrated`
          },
          {
            qText:
              "What happened to the second pig's house when the wolf blew on it?",
            options: `It collapsed with a few blows.
It became stronger.
It remained standing.`
          },
          {
            qText: "What did the third pig's house withstand?",
            options: `The wolf's huffing and puffing.
A strong storm.
The weight of the bricks.`
          }
        ]
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
            text: `The wolf managed to blow down the second pig's stick house. 
The three little pigs learned the value of hard work and resilience.`
          },
          {
            name: 'False',
            text: `The first pig built a house of bricks.
The three little pigs didn't learn anything from the incident.
The wolf left feeling satisfied after blowing down the straw and stick houses.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `The first pig built a house of *straw*.
The *wolf* tried to blow down the houses.
The third pig's house was made of *bricks*.
The wolf was *frustrated* when he couldn't blow down the brick house.
The three little pigs learned the value of hard work and *resilience*.`
      }
    },
    {
      id: 'pig-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Stick: A material made from thin pieces of wood.
Brick: A building material made from clay or concrete.
Straw: Dried stalks of grain plants.
Wolf: A carnivorous mammal known for its howl.
Resilience: The ability to recover quickly from difficulties or setbacks.
Hardwork: Diligent effort and determination put into achieving a goal.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'pig-word',
      data: {
        text: `A material made from thin pieces of wood.| STICK
A building material made from clay or concrete.|BRICK
Dried stalks of grain plants.|STRAW
A carnivorous mammal known for its howl.|WOLF
The ability to recover quickly from difficulties or setbacks.|RESILIENCE
Diligent effort and determination put into achieving a goal.|HARDWORK`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Setout, Embark
Sturdy, Strong
Quick, Rapid
Easy, Effortless
Diligent, Hardworking`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Quick, Slow
Happy, Sad
Safe, Dangerous
Strong, Weak
Easy, Hard`
      }
    },
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
      id: 'bear',
      type: 'passage',
      label: 'Aurora',
      style: 'big',
      data: {
        title: 'Aurora',
        text: `Once upon a time in the icy Arctic, there lived a magnificent polar bear named Aurora. She was pure white, with thick fur and sharp claws. Aurora roamed the frozen tundra, gracefully gliding on the glistening ice.
One day, Aurora set out on a journey to find food for her hungry cubs. She swam through the freezing waters, her powerful strokes propelling her forward. As she reached the shore, she spotted a seal basking on an ice floe. With lightning speed, Aurora pounced and caught her meal.
While enjoying her feast, Aurora noticed a tiny cub struggling to keep up with its family on a distant iceberg. Without hesitation, she swam towards the stranded cub and nudged it gently onto her back. With the cub safely clinging to her fur, Aurora made her way back to its worried family.
The grateful polar bear family thanked Aurora for her kindness and bravery. From that day on, Aurora became a hero in the Arctic, known for her selflessness and compassion. She showed the world that even in the harshest of environments, love and kindness can thrive.`
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
            qText: 'What was the name of the polar bear in the story?',
            options: `Aurora, Frost, Luna`
          },
          {
            qText: 'Why did Aurora swim towards the stranded cub?',
            options: `To find its family
To protect it from predators
To teach it how to swim`
          },
          {
            qText: 'How did Aurora help the stranded cub?',
            options: `She carried it on her back.
She taught it how to swim.
She built a shelter for it.`
          },
          {
            qText: "How did the polar bear family react to Aurora's help?",
            options: ` They thanked her.
They ran away.
They attacked her.`
          },
          {
            qText: 'What did Aurora become known for in the Arctic?',
            options: `Her selflessness and compassion
Her powerful roar
Her hunting skills`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-4',
      type: 'matchByDragDrop',
      data: {
        text: `Aurora *glided* on the ice, her movements were smooth and elegant.
The seal was *glistening* in the sun, its fur sparkling with water droplets.
Without any *hesitation*, Aurora rushed to help the stranded cub.
The polar bear family showed their *compassion* to Aurora for saving their cub.
The Arctic is known for its vast *tundra*, covered in snow and ice.`
      }
    },
    {
      id: 'bear-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Arctic: Refers to the region surrounding the North Pole, characterized by cold temperatures and icy landscapes.
Polar bear: A large bear species native to the Arctic, known for its white fur and ability to swim long distances.
Tundra: A vast, flat, and treeless Arctic region, consisting of frozen soil and characterized by low temperatures.
Ice floe: A large, flat piece of floating ice.
Seal: A marine mammal that lives in the Arctic and Antarctic regions and is a common prey for polar bears.
Selflessness: The act of putting the needs and well-being of others before oneself.
Compassion: A feeling of deep sympathy and empathy for others, accompanied by a desire to help and alleviate their suffering.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'bear-word',
      data: {
        text: `Refers to the region surrounding the North Pole, characterized by cold temperatures and icy landscapes.|ARCTIC
A large bear species native to the Arctic, known for its white fur and ability to swim long distances.|POLAR BEAR| P____ B___
A vast, flat, and treeless Arctic region, consisting of frozen soil and characterized by low temperatures.|TUNDRA
A large, flat piece of floating ice.|ICE FLOE| I__ F___
A marine mammal that lives in the Arctic and Antarctic regions and is a common prey for polar bears.|SEAL
The act of putting the needs and well-being of others before oneself.|SELFLESSNESS
A feeling of deep sympathy and empathy for others, accompanied by a desire to help and alleviate their suffering.|COMPASSION`
      }
    },
    {
      id: 'match-7',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Magnificent, Splendid
Pure, Pristine
Thick, Dense
Glistening, Shimmering
Journey, Expedition
Hungry, Famished
Powerful, Mighty`
      }
    },
    {
      id: 'match-8',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Icy, Warm
Pure, Impure
Thick, Thin
Gliding, Stumbling
Glistening, Dull
Powerful, Weak`
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
    }
  ]
};
