export default {
  label: 'Comprehension',
  id: 'comprehension-3',
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
      id: 'water',
      type: 'passage',
      label: 'Water Park',
      style: 'big',
      data: {
        title: 'Water Park',
        text: `On the first day of summer, we went to the exciting new water park in town. Filled with pools, water slides, and playful sprinklers, it promised endless joy. Although the slides appeared intimidating at first, our fears dissolved after the exhilarating first ride.
Our love for the water slides grew with each subsequent plunge. The sprinklers provided refreshing relief on scorching days, while one pool delighted us by generating its own waves. The wave pool became a hub for daring kids attempting to surf. Despite the bustling crowds of children and adults, pets were regrettably not allowed. 
Our taste buds danced with delight at the snack bar's ice cream, alongside the tempting options of pop and donuts. 
The water park had captured our hearts entirely.`
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
            qText: 'What kind of attractions did the water park have?',
            options: `Pools, water slides, and playful sprinklers.
Roller coasters and ferris wheels.
Bumper cars and merry-go-rounds.`
          },
          {
            qText: 'What happened to the initial fear of the water slides?',
            options: `It dissipated after the exhilarating first ride.
It caused everyone to leave the water park.
It remained throughout the day.`
          },
          {
            qText: 'What did the wave pool at the water park offer?',
            options: `Generating its own waves for surfing.
A pool for diving competitions.
A place to relax and sunbathe.`
          },
          {
            qText: 'Were pets allowed at the water park?',
            options: ` No, pets were not allowed.
Only small pets were allowed.
Pets were allowed with certain restrictions.`
          },
          {
            qText: 'What kind of treats were available at the snack bar?',
            options: `Ice cream, pop, and donuts.
Hot dogs, hamburgers, and fries.
Pizza, nachos, and pretzels.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `Our fears *dissolved* after the exhilarating first ride.
Our love for the water slides grew with each subsequent *plunge*.
The water park was *bustling* with children and adults.
One pool *delighted* us by generating its own waves.
Our *taste buds* danced with delight at the snack bar's ice cream.`
      }
    },
    {
      id: 'water-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Exhilarating: Causing excitement and happiness
Intimidating: Making someone feel nervous or scared
Relief: Feeling of comfort or alleviation
Daring: Brave and courageous
Hub: Central point or gathering place
Tempting: Attractive and enticing
Captured: Ensnared or completely fascinated by something`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'water-word',
      data: {
        text: `Causing excitement and happiness.|EXHILARATING
Making someone feel nervous or scared.|INTIMIDATING
Feeling of comfort or alleviation.|RELIEF
Brave and courageous.|DARING
Central point or gathering place.|HUB
Attractive and enticing.|TEMPTING
Ensnared or completely fascinated by something.|CAPTURED`
      }
    },
    {
      id: 'match-5',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Endless, Infinite
Exhilarating, Thrilling
Intimidating, Daunting
Relief, Alleviation
Hub, Center`
      }
    },
    {
      id: 'match-6',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Endless, Limited
Exhilarating, Dull
Intimidating, Comforting
Relief, Distress
Hub, Periphery`
      }
    },
    {
      id: 'snowman',
      type: 'passage',
      label: 'Frosty',
      style: 'big',
      data: {
        title: 'Frosty',
        text: `Once upon a time, there was a little girl named Lily who loved playing in the snow. 
One winter day, she built a snowman with a carrot for a nose, rocks for eyes, and a big smile made of coal. She named him Frosty. 
Lily and Frosty became the best of friends. They danced and laughed in the snow all day long. But when the sun started to set, Frosty began to melt. 
Lily felt sad. She gave Frosty a warm hug and whispered, "Don't worry, Frosty. I'll build you again next winter." And so, they said goodbye, looking forward to the next snowy adventure.`
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
            qText: "What did Lily use for Frosty's nose?",
            options: `A carrot, A button, A twig`
          },
          {
            qText: "What did Lily use for Frosty's eyes?",
            options: `Rocks, Buttons, Twigs`
          },
          {
            qText: 'What happened to Frosty when the sun started to set?',
            options: `He began to melt, He grew bigger, He turned into a real person`
          },
          {
            qText: "What was Frosty's smile made of?",
            options: `Coal, Snowflakes, Buttons`
          },
          {
            qText: 'What did Lily promise Frosty when he started melting?',
            options: ` She would build him again next winter.
She would find a way to keep him cool.
She would give him a hat to protect him from the sun.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-4',
      type: 'matchByDragDrop',
      data: {
        text: `Lily built a *snowman* with a carrot for a nose.
Frosty had a big smile made of *coal*.
Lily and Frosty became the best of *friends*.
Frosty started to *melt* when the sunset.
Lily promised to build Frosty again next *winter*.`
      }
    },
    {
      id: 'snowman-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Winter: The season between fall and spring
Snowman: A frozen figure made of snow
Carrot: A vegetable that is orange and long
Melting: Changing from solid to liquid due to heat
Coal: A black material used for making fire`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'snowman-word',
      data: {
        text: `The season between fall and spring.|WINTER
A frozen figure made of snow.|SNOWMAN
A vegetable that is orange and long.|CARROT
Changing from solid to liquid due to heat.|MELTING
A black material used for making fire.|COAL`
      }
    },
    {
      id: 'friends',
      type: 'passage',
      label: 'The Beauty of Friendship',
      style: 'big',
      data: {
        title: 'The Beauty of Friendship',
        text: `In the African savannah, a mongoose and a hornbill formed an incredible friendship. Despite being different species, they shared an unbreakable bond that amazed everyone.
The mongoose was a small, agile mammal with excellent hunting skills. It would scurry through the grass, searching for prey like rodents and insects. The hornbill, a magnificent bird, soared through the sky, always on the lookout for food.
One day, the mongoose found itself in danger, cornered by a venomous snake. The hornbill quickly intervened, using its beak to distract the snake and save the mongoose. Together, they defeated the snake and became inseparable friends.
They explored the savannah, helping each other find food and stay safe. The mongoose dug up insects while the hornbill searched for fruits and seeds. They communicated through calls and chirps, a language unique to their friendship.
Their bond went beyond survival. They spent time grooming each other, strengthening their connection. They played together, hopping and flying in joy. Their friendship showed that differences don't matter when it comes to true connection.
The mongoose and hornbill taught us the beauty of friendship.`
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
            qText: 'What type of animal is the mongoose?',
            options: `Mammal, Reptile, Insect`
          },
          {
            qText:
              'How did the hornbill help the mongoose when it was in danger?',
            options: `It attacked the snake with its beak.
It ignored the situation.
It joined the snake in attacking the mongoose.`
          },
          {
            qText:
              'What did the mongoose and hornbill do to communicate with each other?',
            options: `They used calls and chirps.
They didn't communicate.
They used their sense of smell.`
          },
          {
            qText: `How did the mongoose and hornbill help each other find food?`,
            options: `The mongoose dug up insects while the hornbill searched for fruits and seeds.
The hornbill dug up insects.
They didn't help each other.`
          },
          {
            qText: "What did the mongoose and hornbill's friendship teach us?",
            options: `True connection can bridge differences.
Friends should always play together.
Friendship is not important.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-friend',
      type: 'matchByDragDrop',
      data: {
        text: `The mongoose and hornbill shared an *unbreakable* bond.
The mongoose is known for its *agile* hunting skills.
The hornbill soared through the sky, always on the *lookout* for food.
The hornbill *intervened* when it saw the mongoose in danger.
Their friendship went beyond *survival*, as they spent time grooming each other.`
      }
    },
    {
      id: 'friend-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Unbreakable: Impossible to break or separate.
Prey: An animal that is hunted and eaten by another animal.
Agile: Able to move quickly and easily.
Magnificent: Extremely beautiful or impressive.
Intervened: To come between or interrupt something.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'friend-word',
      data: {
        text: `Impossible to break or separate.|UNBREAKABLE
An animal that is hunted and eaten by another animal.|PREY
Able to move quickly and easily.|AGILE
Extremely beautiful or impressive.|MAGNIFICENT
To come between or interrupt something.|INTERVENED`
      }
    },
    {
      id: 'match-10',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Magnificent, Splendid
Danger, Peril
Explore, Discover
Unique, Distinct
Division, Separation`
      }
    },
    {
      id: 'match-11',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: ` Danger, Safety
Explore, Avoid
Unique, Common
Division, Unity`
      }
    },
    {
      id: 'donkey',
      type: 'passage',
      label: 'Donkey and Man',
      style: 'big',
      data: {
        title: 'Donkey and Man',
        text: `In a small village, there was a man who owned a donkey. The donkey helped the man with his work and carried heavy loads. However, the donkey often felt tired and longed for a break.
One hot day, they were walking together when the donkey saw a pond. Without thinking, the donkey ran towards it, leaving the man behind. The man became angry and tried to pull the donkey away, but the donkey refused to move and drank from the pond.
After some time, the man realized his anger was pointless. He decided to rest and observe the donkey. To his surprise, the donkey seemed refreshed after drinking and ready to work again.
The man approached the donkey with understanding. He promised to be kind and give the donkey breaks when needed. From that day on, they formed a deep bond based on compassion and empathy.
They continued their journey together, working as a team. The man made sure to give the donkey regular breaks and take care of its well-being. In return, the donkey remained loyal and dedicated.
The villagers noticed the strong partnership between the man and the donkey. They learned the importance of treating animals with kindness and understanding. The story became a timeless reminder of compassion for all creatures.`
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
            qText: "What was the man's relationship with the donkey?",
            options: `Coworkers, Strangers, Friends`
          },
          {
            qText: 'Why did the donkey run towards the pond?',
            options: `It was thirsty and wanted to drink.
It was scared of something nearby.
It was trying to escape from the man.`
          },
          {
            qText: "How did the man initially react to the donkey's actions?",
            options: `He scolded and tried to pull the donkey away.
He ignored the donkey and continued walking.
He felt happy for the donkey's enjoyment.`
          },
          {
            qText: `What did the man realize after observing the donkey?`,
            options: `He realized the donkey needed breaks and rest.
He realized the donkey didn't like working with him.
He realized the donkey needed more training.`
          },
          {
            qText:
              'What lesson did the villagers learn from the man and the donkey?',
            options: `The significance of taking breaks when needed.
The value of having animals as pets.
The necessity of always being in control.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `The donkey carried heavy *loads* for the man.
The donkey wanted to rest near the *pond*.
The man realized the importance of *compassion* and promised to be kind.
The donkey felt *refreshed* after drinking from the pond.
The villagers learned about the importance of treating animals with *kindness*.`
      }
    },
    {
      id: 'donkey-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Compassion: Feeling or showing concern and kindness towards others.
Loyal: Faithful and devoted.
Empathy: The ability to understand and share the feelings of others.
Refreshed: Feeling revitalized or reenergized.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'donkey-word',
      data: {
        text: `Feeling or showing concern and kindness towards others.|COMPASSION
Faithful and devoted.|LOYAL
The ability to understand and share the feelings of others.|EMPATHY
Feeling revitalized or reenergized.|REFRESHED`
      }
    }
  ]
};
