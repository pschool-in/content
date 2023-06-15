export default {
  label: 'Comprehension',
  id: 'comp-2',
  lockAfter: 2,
  list: [
    {
      id: 'dolphin',
      type: 'passage',
      label: 'The Dolphin Show',
      style: 'big',
      data: {
        title: 'The Dolphin Show',
        text: `Raj was very excited this Sunday morning because he was promised a trip to the Dolphin Village. Raj was most excited to see the dolphin show. On reaching the venue Raj happily hopped out of the car and dashed around the dolphin village.
He stood in front of the Dolphin Museum and carefully read all the information. It said that dolphins are very playful creatures. They are intelligent mammals that live in the sea. They are extremely social and they love to make friends with humans. Now, Raj was even more excited to meet the dolphins.
He excitedly sat in his seat and waited for the show to begin. "The Dolphins can move as fast as eight miles per hour in the water." said the trainer. Raj watched all the stunts performed by the dolphins in amusement.
Finally, he had his photograph taken with the dolphin. Raj fell fast asleep in the car on their way back home dreaming of visiting the dolphins again someday. `
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
            qText: 'What was Raj excited about on Sunday morning?',
            options: `Going to the Dolphin Village.
Reading about dolphins in the museum.
Taking a photograph with a dolphin.`
          },
          {
            qText: 'Where do dolphins live?',
            options: 'sea, land, pond, pool'
          },
          {
            qText: 'What did Raj learn about dolphins in the museum?',
            options: `They are intelligent and social.
They dislike human interaction.
They are slow-moving creatures.`
          },
          {
            qText: 'How fast can dolphins move in the water?',
            options: `Eight miles per hour
Twenty miles per hour
Fifty miles per hour`
          },
          {
            qText: 'What did Raj do before falling asleep in the car?',
            options: `Took a photograph with a dolphin.
Read about dolphins in the museum.
Played with dolphins in the water.`
          }
        ]
      }
    },
    {
      label: 'Arrange the Events',
      type: 'sorting',
      id: 'sort',

      data: {
        title: 'Arrange the events in the correct order.',
        text: `Raj got in the car, Reached Dolphin Village, Went to the Dolphin Museum, Watched the Dolphin Show, Took a photograph with the dolphins, Fell asleep in the car, Dreamt of meeting dolphins`
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
            text: `Dolphins are playful creatures.
Raj had his photograph taken with a dolphin.
Raj went to the Dolphin Village. `
          },
          {
            name: 'False',
            text: `Dolphins are reptiles.
Dolphins can move as fast as five miles per hour in the water.`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `Dolphins are intelligent *mammals* that live in the sea.
Dolphins love to make *friends* with humans.
The dolphins in the show performed incredible *stunts*.
Raj fell fast asleep in the car, dreaming of visiting the dolphins *again* someday.`
      }
    },
    {
      id: 'dolphin-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Amusement: Enjoyment or entertainment.
Stunt: Actions or feats that require skill or daring.
Mammals: Animals that give birth to live young and nurse them with milk.
Social: Friendly and interactive with others.
Playful: Lively and full of energy, enjoying fun and games.
Trainer: A person who trains people or animals.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'dolp-word',
      data: {
        text: `Enjoyment or entertainment.| AMUSEMENT
Actions or feats that require skill or daring.| STUNT
Animals that give birth to live young and nurse them with milk.|MAMMAL
Friendly and interactive with others.|SOCIAL
Lively and full of energy, enjoying fun and games.|PLAYFUL
A person who trains people or animals.|TRAINER`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Excited, Thrilled
Carefully, Diligently
Intelligent, Smart
Extremely, Very`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Excited, Calm
Carefully, Carelessly
Intelligent, Stupid
Extremely, Moderately`
      }
    },
    {
      id: 'tortoise',
      type: 'passage',
      label: "Peter's Swimming Lesson",
      style: 'big',
      data: {
        title: "Peter's Swimming Lesson",
        text: `Peter, the little tortoise, felt scared and nervous as it approached the water. It was the first time Peter would swim in the deep sea without any older turtles.
Peter could feel the cool water beneath his feet as he slowly made his way. Peter passed by large rocks and started swimming, but big waves repeatedly pushed him back toward the shore. 
Peter exerted great effort and kept pushing forward. Eventually, Peter reached a calm area of the sea. He rested on the sea bed for a while before resurfacing to breathe. Peter made friends with other turtles and learned how to play and bounce on the sea bed. 
It was the best day of Peter's life, and it would always hold a special place in his memory.`
      }
    },
    {
      label: 'Choose the correct answer',
      type: 'mcq',
      id: 'mcq-peter',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              "What was Peter's initial feeling as he approached the water?",
            options: `Scared and nervous, Confused, Indifferent`
          },
          {
            qText:
              'Why was Peter scared and nervous about swimming in the deep sea?',
            options: `He had never swum without older turtles before.
He was afraid of big waves.
He was afraid of other sea creatures.`
          },
          {
            qText: 'What obstacles did Peter face while swimming?',
            options: `Big waves pushing him back, Strong currents, Seagulls`
          },
          {
            qText: 'How did Peter overcome the obstacles while swimming?',
            options: ` He kept pushing forward with great effort.
He waited for the waves to subside.
He gave up and returned to the shore.`
          },
          {
            qText: 'Where did Peter rest after overcoming the obstacles?',
            options: `On the sea bed, On the shore, In a cave`
          },
          {
            qText: 'What did Peter do after resurfacing to breathe?',
            options: ` Made friends with other turtles
Looked for food
Explored the large rocks`
          },
          {
            qText: 'How did Peter feel about his experience in the deep sea?',
            options: `It was the best day of his life, Frustrated, Disappointed`
          },
          {
            qText: 'What did Peter learn from his time in the deep sea?',
            options: `How to play and bounce on the sea bed
How to find food
How to hide from predators`
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        text: `Peter felt *scared* and nervous as he approached the water.
Big waves *repeatedly* pushed him back toward the shore.
Peter *exerted* great effort and kept pushing forward.
Peter rested on the *sea bed* for a while before *resurfacing* to breathe.
It was the *best* day of Peter's life.`
      }
    },
    {
      id: 'peter-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Approach: To come near or closer to someone or something
Nervous: Feeling worried or uneasy
Repeatedly: Doing something over and over again
Exerted: Making an effort or applying force
Resurfaced: Coming up to the surface again after being underwater`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'peter-word',
      data: {
        text: `Feeling worried or uneasy.|NERVOUS
To come near or closer to someone or something.|APPROACH
Doing something over and over again.|REPEATEDLY
Making an effort or applying force.|EXCERTED
Coming up to the surface again after being underwater.|RESURFACED`
      }
    },
    {
      id: 'match-3',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Scared, Afraid
Approached, Neared
Calm, Peaceful
Best, Greatest`
      }
    },
    {
      id: 'match-4',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Scared, Brave
Approached, Retreated
Calm, Turbulent
Best, Worst`
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
      id: 'puppy',
      type: 'passage',
      label: 'The Lost Puppy',
      style: 'big',
      data: {
        title: 'The Lost Puppy',
        text: `One sunny afternoon, a young boy named Alex was exploring a nearby park when he stumbled upon a tiny, abandoned puppy. Its caramel-colored fur was matted, and its sad eyes tugged at his heart. Alex gently scooped up the pup and vowed to find its rightful owner.
He searched high and low, approaching everyone he encountered, hoping to reunite the puppy with its family. After what felt like an eternity, a woman with worried eyes said, "Oh, my goodness! That's my puppy, Daisy! I've been searching tirelessly for her!" Alex's face lit up with joy as he handed over the puppy.
Overwhelmed with gratitude, the woman thanked Alex wholeheartedly and showered him with praise. Their chance encounter had not only brought Daisy back to her owner, but it had also created an unexpected friendship between Alex and the woman, proving that even in the smallest acts of kindness, great connections can be formed.`
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
            qText: 'What did Alex find in the park?',
            options: `A caramel-colored puppy, A shiny toy, A basket of flowers`
          },
          {
            qText: 'How did the puppy look?',
            options: `It had green eyes and fluffy fur.
It had blue eyes and curly fur.
It had brown eyes and sleek fur.`
          },
          {
            qText: 'How did the woman react when she saw the puppy?',
            options: `She was overjoyed and recognized it as her own
She thought it was a different dog
She was angry with Alex`
          },
          {
            qText: 'What did Alex decide to do when he found the puppy?',
            options: `Find its owner.
Leave it in the park.
Keep it for himself.`
          },
          {
            qText: 'What did the encounter between Alex and the woman create?',
            options: `An unexpected friendship
A fight between them
A sense of confusion`
          }
        ]
      }
    },
    {
      id: 'puppy-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: ` Tugged: To pull or tug with force
Vowed: To promise or swear solemnly
Encounter: To meet or come across unexpectedly
Reunite: To bring together again
Overwhelmed: Feeling a sense of being completely overcome or flooded
Abandoned: To leave behind or forsake completely`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'puppy-word',
      data: {
        text: `To pull or tug with force.|TUGGED
To promise or swear solemnly.|VOWED
To meet or come across unexpectedly.|ENCOUNTER
To bring together again.|REUNITE
Feeling a sense of being completely overcome or flooded.|OVERWHELMED
To leave behind or forsake completely.|ABANDONED`
      }
    },
    {
      id: 'match-7',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Tiny, Small
Abandoned, Deserted
Grateful, Thankful
Encounter, Meet
Joy, Happiness`
      }
    },
    {
      id: 'match-8',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Tiny, Enormous
Abandoned, Cherished
Unexpected, Predictable
Tirelessly, Lazily`
      }
    }
  ]
};
