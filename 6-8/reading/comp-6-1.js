export default {
  label: 'Comprehension',
  id: 'comprehension-6',
  lockAfter: 2,
  list: [
    {
      id: 'mystery',
      type: 'passage',
      label: 'The Mystery of the Missing Lunchbox',
      style: 'big',
      data: {
        title: 'The Mystery of the Missing Lunchbox',
        text: `Once upon a time, there was a boy named Alex who brought his favorite lunchbox to school every day. One day, after recess, Alex discovered that his lunchbox was missing from his backpack. He told his friends about it, and they all started looking for the lunchbox. Some of them thought that maybe it was stolen, while others believed that Alex might have left it somewhere. They all had different opinions about what could have happened.
Meanwhile, the teacher noticed their commotion and asked what was going on. Alex explained that his lunchbox was missing, and the teacher decided to investigate. She asked Alex if he remembered where he had last seen it. Alex said he had left it in his backpack before going to the playground.
The teacher then checked the lost and found box in the school office and found Alex's lunchbox. She returned it to him, and Alex was relieved. The fact was that Alex's lunchbox was found in the lost and found box, and it was not stolen as some of his friends had believed. It turned out that their opinions were incorrect, but they were trying to help Alex by sharing their thoughts.`
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
            qText: "What happened to Alex's lunchbox?",
            options: ` It was found in the lost and found box
It disappeared mysteriously
It was stolen`
          },
          {
            qText: 'Where did Alex last remember seeing his lunchbox?',
            options: `In his own backpack
On the playground
In his friend's backpack`
          },
          {
            qText: 'How did the teacher resolve the situation?',
            options: `By checking the lost and found box
By punishing the person who stole the lunchbox
By searching the entire school for the lunchbox`
          },
          {
            qText: `What were some of Alex's friends' opinions about the missing lunchbox?`,
            options: `Alex left it on the playground
It was lost forever
It was hidden by the teacher`
          },
          {
            qText: "What did the story teach us about the friends' opinions?",
            options: `Their opinions were incorrect
Their opinions caused more confusion
Their opinions were not mentioned in the story`
          }
        ]
      }
    },
    {
      id: 'fact-opinion-2',
      label: 'Fact or Opinion',
      type: 'classifySentence',
      data: {
        title: 'Classify the statements as fact or opinion.',
        types: [
          {
            name: 'Fact',
            text: `Alex's lunchbox was found in the lost and found box.
The teacher investigated the situation.`
          },
          {
            name: 'Opinion',
            text: `Some of Alex's friends believed that the lunchbox was stolen.
Alex might have left his lunchbox somewhere.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Angry, Upset
Beautiful, Stunning
Delicious, Yummy
Tired, Exhausted
Small, Tiny`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Hot, Cold
Tall, Short
Fast, Slow
Happy, Sad
Open, Closed`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'mystery-word',
      data: {
        text: `I'm carried to school, a trusty friend, Holding meals, a treasure to defend. Lost or stolen, a mystery to solve, Where am I?|BACKPACK
It disappears, causing worry and stress, Thoughts of theft, a possible guess. But it was found, a happy end, What am I? |LUNCHBOX
Some said stolen, some said misplaced, The truth emerged, their theories erased. They were wrong, but their hearts were kind, Who were they? |FRIENDS
I'm a secret you hold, a truth untold, A story or fact that's yet to unfold. Your friends speculate, but I hold the key, What am I? |TRUTH
I'm a whisper of doubt, a hint of mistrust, When opinions clash, it's me they discuss. In solving a mystery, I often appear, What am I?|SUSPICION`
      }
    },

    {
      id: 'butterfly',
      type: 'passage',
      label: 'The Butterfly Effect',
      style: 'big',
      data: {
        title: 'The Butterfly Effect',
        text: `Once upon a time, in a small town, there was a young girl named Emily. Emily loved nature and spent most of her free time in her garden, watching butterflies flutter around the flowers. One day, she noticed a butterfly with a torn wing struggling to fly.
Feeling compassionate, Emily carefully caught the butterfly and took it inside her house. She gently mended its wing and fed it with sweet nectar. After a few days, the butterfly's wing healed, and it was ready to fly again.
Emily opened the window, letting the butterfly go free. As it flew away, the butterfly spread its wings, showcasing their vibrant colors. Inspired by the butterfly's beauty, Emily started a butterfly conservation club at her school.
The club planted more flowers and created butterfly-friendly habitats in the town. Over time, the number of butterflies increased, bringing joy to everyone who witnessed their graceful dance in the air.`
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
            qText:
              'What did Emily do when she found the butterfly with a torn wing?',
            options: `She caught it and took it home.
She left it alone and observed it from afar.
She called for help from her neighbors.`
          },
          {
            qText: 'How did Emily help the butterfly?',
            options: `She mended its torn wing.
She taught it how to fly.
She built a special house for it.`
          },
          {
            qText: 'What did Emily do after releasing the healed butterfly?',
            options: `She started a butterfly conservation club.
She kept it as a pet in her house.
She planted more flowers in her garden.`
          },
          {
            qText: `What did Emily do after the butterfly's wing healed?`,
            options: `She released it back into the wild.
She kept it as a pet in a terrarium.
She took it to a butterfly sanctuary.`
          },
          {
            qText: "How did Emily's actions inspire others in the town?",
            options: ` She created a butterfly conservation club.
She initiated a photography club.
She started a gardening club.`
          }
        ]
      }
    },
    {
      id: 'cause-effect',
      label: 'Cause or Effect',
      type: 'classifySentence',
      data: {
        title: 'Classify the statements as cause or effect.',
        types: [
          {
            name: 'Cause',
            text: `Emily noticed a butterfly with a torn wing struggling to fly.
Emily carefully mended the butterfly's wing and fed it with sweet nectar.
Emily released the healed butterfly through an open window.
The butterfly conservation club planted more flowers and created butterfly-friendly habitats.`
          },
          {
            name: 'Effect',
            text: `Emily caught the butterfly and took it inside her house to mend its wing.
The butterfly's wing healed, and it regained its ability to fly.
The butterfly flew away, spreading its vibrant wings and showcasing its beauty.
The number of butterflies in the town increased over time.`
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match: Synonym',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Torn, Damaged
Mended, Repaired
Healed, Recovered
Caught, Captured
Spread, Extended`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-3',
      type: 'matchByDragDrop',
      data: {
        text: `Emily noticed a butterfly with a *torn* wing struggling to fly.
Emily *caught* the butterfly and took it inside her house.
She gently *mended* its wing and fed it with sweet nectar.
The butterfly's wing *healed*, and it was ready to fly again.
The butterfly *spread* its wings, showcasing their vibrant colors.`
      }
    },
    {
      id: 'key',
      type: 'passage',
      label: 'The Lost Key',
      style: 'big',
      data: {
        title: 'The Lost Key',
        text: `Once upon a time, in a small village, there was a mischievous boy named Sam. One sunny day, while playing in the park, he found a shiny key lying on the ground. Curious to know what it unlocked, Sam decided to take it home. That evening, he discovered that the key belonged to the old abandoned house at the end of the street.
Curiosity got the better of him, and the next morning, Sam sneaked into the house. As he explored the dusty rooms, he accidentally knocked over a vase. The sound startled a family of mice living in the attic. The mice, scared by the noise, rushed out of their hiding places and startled Sam.
Frightened, Sam dashed towards the exit but tripped over a loose floorboard. The floorboard gave way, revealing a hidden compartment. Inside the compartment, he found a treasure map. Excited by the discovery, he decided to follow the map's clues to find the hidden treasure.`
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
            qText: 'What did Sam find in the abandoned house?',
            options: `A shiny key
A treasure map
A family of mice`
          },
          {
            qText: 'What startled Sam while he was exploring the house?',
            options: `A vase falling over
Tripping over a loose floorboard
A hidden compartment`
          },
          {
            qText:
              'What did Sam discover when he tripped over the loose floorboard?',
            options: `A hidden compartment
The family of mice
A treasure map`
          },
          {
            qText: `How did the family of mice in the attic react when Sam knocked over the vase?`,
            options: `They rushed out of their hiding places
They ignored the noise
They attacked Sam`
          },
          {
            qText: 'What did Sam find inside the hidden compartment?',
            options: ` A treasure map
A loose floorboard
A family of mice`
          }
        ]
      }
    },
    {
      id: 'cause-effect-2',
      label: 'Cause or Effect',
      type: 'classifySentence',
      data: {
        title: 'Classify the statements as cause or effect.',
        types: [
          {
            name: 'Cause',
            text: `Curiosity got the better of Sam.
Sam accidentally knocked over a vase.
The mice were scared by the noise.
The mice startled Sam.`
          },
          {
            name: 'Effect',
            text: `am sneaked into the old abandoned house.
The sound startled the family of mice living in the attic.
Sam was frightened and dashed towards the exit.`
          }
        ]
      }
    },
    {
      id: 'match-5',
      label: 'Match: Synonym',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Mischievous, Naughty
Abandoned, Deserted
Curiosity, Inquisitiveness
Startled, Astonished
Compartment, Partition`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-4',
      type: 'matchByDragDrop',
      data: {
        text: `Sam found a *shiny* key lying on the ground.
The old house at the end of the street was *abandoned*.
Sam's *curiosity* led him to sneak into the house.
The sound of the vase falling *startled* the family of mice.
Sam discovered a hidden *compartment* under the loose floorboard.`
      }
    },
    {
      label: 'Where Am I?',
      type: 'completeWord',
      id: 'where-word',
      data: {
        text: `I have books and shelves galore, A quiet place where minds explore. Where am I? |LIBRARY
A place to dine, enjoy a feast, Food and drinks for every taste. Where am I? |RESTAURENT
Treadmills, weights, and fitness classes, A place to exercise and work on your fitness. Where am I? |GYM
Rows of seats and a giant screen, Where movies and stories come to be seen. Where am I? |MOVIE THEATER| M___E T__A___
Shoppers flock to me, a bustling place, Clothes and shoes, a fashion chase. Sales and discounts, a shopper's dream, Where am I?|MALL`
      }
    }
  ]
};
