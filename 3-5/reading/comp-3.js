export default {
  label: 'Comprehension',
  id: 'comprehension-3',
  lockAfter: 2,
  list: [
    {
      id: 'lunchbox',
      type: 'passage',
      label: 'The Adventures of a Lunchbox',
      style: 'big',
      data: {
        title: 'The Adventures of a Lunchbox',
        text: `Once upon a time, in a factory far away, I came to life as a lunchbox. It has been a year since my creation, and I remember the process vividly. Red and violet plastic sheets were carefully molded together to form my sturdy body. To add some character, a friendly lady adorned my lid with a vibrant sticker. I felt proud and ready for my purpose.
Soon, I found myself wrapped in a protective plastic sheet and placed in a bustling shop. The shop was filled with an array of boxes like me, as well as bottles, plates, glasses, and cups. We eagerly awaited our new owners, hoping to be chosen for a grand adventure.
One fortunate day, a little boy named Abdul entered the shop with his father. His eyes sparkled when he noticed my sticker, and he pleaded with his father to purchase me. The joy that surged through me was immeasurable. I couldn't wait to join Abdul on his journey.
At Abdul's home, his caring mother took exceptional care of me. Each day, she would lovingly wash me with warm water and soap, ensuring my cleanliness. Then, she would fill me with delicious food and gently place me inside Abdul's school bag. Abdul treated me with kindness and respect, making me feel valued and cherished. For seven wonderful months, I was Abdul's faithful companion.
However, fate had a different plan for me. One day, while Abdul and his friends were playing in the field, an unexpected turn of events occurred. A ball struck me with great force, causing me to plummet to the ground. I suffered a massive crack, leaving me in pain.
Abdul was devastated by my unfortunate fate, but he had no choice but to bid me farewell and dispose of me in a trash bin. From the bin, I was transported to a vast recycling ground, where my plastic would be transformed into a new existence.
And now, here I am, ready to transform. My plastic will be recycled, allowing me to contribute to the creation of a brand-new lunchbox.`
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
              'What were the colors of the plastic sheets used to create the lunchbox?',
            options: `Red and violet, Green and orange, Black and white`
          },
          {
            qText: "Who adorned the lunchbox's lid with a vibrant sticker?",
            options: `A friendly lady, Abdul's father, Abdul's mother`
          },
          {
            qText: "How did Abdul's mother take care of the lunchbox?",
            options: `She washed it with warm water and soap.
She sprayed it with disinfectant.
She didn't take care of it.`
          },
          {
            qText: `How long was the lunchbox Abdul's faithful companion?`,
            options: ` 7 months, 7 years, 7 days`
          },
          {
            qText: 'What caused the lunchbox to crack?',
            options: `It was struck by a ball.
Abdul's friend stepped on it.
It fell off a table.`
          },
          {
            qText: 'What happened to the lunchbox after it cracked?',
            options: ` Abdul threw it away.
Abdul gifted it to his friend.
Abdul sold it at a yard sale.`
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
        text: `Lunchbox made from plastic sheets, Adorned with vibrant sticker, Wrapped and displayed in a shop, Bought by a little boy, Formed a massive crack, Disposed of in the bin, Recycled`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        text: `The lunchbox's lid was *adorned* with a vibrant sticker.
The shop was filled with an *array* of boxes, bottles, plates, and cups.
The lunchbox *plunged* to the ground after being struck by the ball.
Abdul was *devastated* by the lunchbox's unfortunate fate.
Abdul had no choice but to *dispose* of the lunchbox in a trash bin.
The plastic would be *transformed* into a new lunchbox through recycling.`
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
            text: `Adorned: To decorate or add beauty to something.
Array: A large number or variety of things.
Plunge: To fall suddenly or quickly.
Devastated: To feel extreme sadness or grief.
Dispose: To get rid of or throw away.
Transform: To change the form, appearance, or nature of something.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'box-word',
      data: {
        text: `To decorate or add beauty to something.| ADORNED
A large number or variety of things.| ARRAY
To fall suddenly or quickly.| PLUNGE
To feel extreme sadness or grief.| DEVASTATED
To get rid of or throw away.| DISPOSE
To change the form, appearance, or nature of something.| TRANSFORM`
      }
    },
    {
      id: 'match',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Sturdy, Strong
Adorned, Decorated
Array, Assortment
Immeasurable, Boundless`
      }
    },
    {
      id: 'match-2',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Sturdy, Fragile
Adorned, Bare
Array, Single
Immeasurable, Limited`
      }
    },
    {
      id: 'cake',
      type: 'passage',
      label: 'Topsy-Turvy Triumph',
      style: 'big',
      data: {
        title: 'Topsy-Turvy Triumph',
        text: `Once upon a time in a small town lived a talented baker named John. Known for his exceptional skills and creativity, John was always filled with excitement whenever he had the opportunity to showcase his baking masterpieces. Today was a particularly special day for him as he had entered the prestigious cake competition of the year.
John had poured his heart and soul into creating the most magnificent cakes anyone had ever laid eyes on. His imagination ran wild as he designed a truly awe-inspiring creation. The centerpiece of his cake was a white square-shaped layer. On top of the square layer, he carefully placed a pink circular cake. He added a generous amount of red jam infused with juicy chunks of strawberries. John adorned the cake with delicate white chocolate pearls and tied a beautiful ribbon around it.
With great care, John lifted the stunning creation and placed it onto a trolley, ready to transport it to the competition hall. He pushed the trolley down a long corridor. However, the trolley suddenly caught on the carpet and veered off course, causing the cake to tumble and twist upon impact.
The once-impeccable arrangement was now turned upside down, with the circular layer on top and the square layer at the bottom. Despite his disappointment, John refused to give up.
John collected the fallen cake and proceeded to the competition hall. However, the judges' faces lit up with intrigue and excitement. They marveled at the unexpected transformation of his cake, praising the unique topsy-turvy arrangement. The judges awarded him the first prize. He realized that sometimes, even accidents can lead to extraordinary outcomes.
From that day forward, John's topsy-turvy cake became his signature creation, earning him a reputation as a visionary baker.`
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
            qText: "What was the centerpiece of John's cake?",
            options: `A pink circular layer.
A white square-shaped layer.
A red jam infused with strawberries.`
          },
          {
            qText: 'What caused the cake to tumble and twist?',
            options: `The carpet catching the trolley.
A sudden gust of wind.
The weight of the cake.`
          },
          {
            qText: 'How did the judges react to the fallen cake?',
            options: `They praised the unique topsy-turvy arrangement.
They deducted points for the damaged cake.
They were disappointed and discouraged John.`
          },
          {
            qText: 'What prize did John receive at the cake competition?',
            options: `First Prize, Second Prize, Third Prize`
          },
          {
            qText: "What did John's topsy-turvy cake become known as?",
            options: `John's Signature Creation, The Fallen Masterpiece, The Accidental Creation`
          }
        ]
      }
    },
    {
      id: 'match-5',
      label: 'Match the following',
      type: 'match',
      data: {
        title: `Match the following`,
        text: `Competition, Challenge
Trolley, Cart
Impact, Collision
Signature, Distinctive
Accident, Mishap`
      }
    },
    {
      id: 'cake-g',
      type: 'passage',
      label: 'Glossary',
      data: {
        title: 'Glossary',
        text: [
          {
            type: 'hilight',
            text: `Baker: A person who bakes goods, such as bread, pastries, and cakes.
Creativity: The ability to think imaginatively and come up with original ideas.
Trolley: A wheeled cart or platform used for transporting items.
Carpet: A floor covering made of thick woven fabric, typically used in homes or commercial spaces.
Impact: The forceful collision or contact between two objects.
Upside down: Reversed or inverted from the normal or expected position.
Judges: Individuals responsible for evaluating and rating the cakes in a competition based on predetermined criteria.
Topsy-turvy: A state of disarray or disorder, referring to the rearrangement of the cake layers.
Visionary: Someone who has original and creative ideas, often associated with forward-thinking and innovation.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'cake-word',
      data: {
        text: `A person who bakes goods, such as bread, pastries, and cakes.| BAKER
The ability to think imaginatively and come up with original ideas.|CREATIVITY
A wheeled cart or platform used for transporting items.|TROLLEY
A floor covering made of thick woven fabric, typically used in homes or commercial spaces.|CARPET
The forceful collision or contact between two objects.|IMPACT
Reversed or inverted from the normal or expected position.|UPSIDE DOWN| U_____ D___
Individuals responsible for evaluating and rating the cakes in a competition based on predetermined criteria.|JUDGES
A state of disarray or disorder, referring to the rearrangement of the cake layers.|TOPSY-TURVY| T____-T____
Someone who has original and creative ideas, often associated with forward-thinking and innovation.|VISIONARY `
      }
    },
    {
      id: 'match-6',
      label: 'Match: Synonyms',
      type: 'match',
      data: {
        title: `Match the synonym pairs.`,
        text: `Talented, Skilled
Creativity, Imagination
Magnificent, Splendid
Intrigue, Fascination
Visionary, Innovative`
      }
    },
    {
      id: 'match-7',
      label: 'Match: Antonyms',
      type: 'match',
      data: {
        title: `Match the antonym pairs.`,
        text: `Filled, Empty
Opportunity, Misfortune
Disappointment, Satisfaction
Expected, Unexpected
Praise, Criticize
Reputation, Infamy`
      }
    }
  ]
};
