export default {
  label: 'Comprehension',
  id: 'comprehension-2',
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
    }
  ]
};
