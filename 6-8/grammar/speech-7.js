export default {
  id: 'speech-7',
  label: 'Improve your Speech',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'word-formn',
      data: {
        title: 'Word Formation',
        text: [
          `Compound words are formed by combining two or more words to create a new word that has a different meaning. Compound words are mainly of three types.
1. Closed Compounds: These are compound words that are written as one word without any space or hyphens.`,
          {
            type: 'sitewords',
            text: 'anybody, everybody, nobody, somebody, anyone, everyone, someone, anything, everything, nothing, something, anywhere, everywhere, nowhere, somewhere, babysit, background, barefoot, baseball, basketball, football, bathroom, bedroom, blackberry, blueberry, breakfast, cannot, checkout, cowboy, daylight, desktop, fingerprint, firefly, forever, gentleman, grandmother, grandfather, granddaughter, grapefruit, grasshopper, headquarters, handshake, inside, keyboard, lipstick, mailbox, nevertheless, nonetheless, notebook, outside, payday, railroad, rainbow, raincoat, skateboard, smartphone, snowball, sometimes, sunflower, toothbrush, turntable, undercover, upstream, waterfall, watermelon, weekend, within, without',
            width: 120
          },
          `2. Open Compounds: These are compound words that are written as two separate words.`,
          {
            type: 'sitewords',
            text: 'book store, black eye, cell phone, close call, common sense, cotton candy, dining room, first aid, full moon, French fry, heart attack, high school, hot dog, ice cream, life jacket, living room, no one, peanut butter, post office, prime minister, real estate, remote control, report card, rib cage, role model, roller coaster, salad dressing, search engine, slam dunk, sleeping bag, time capsule, vacuum cleaner, vending machine, video game, waiting room, washing machine, web page',
            width: 120
          },
          `3. Hyphenated Compounds: These are compound words that are written with a hyphen in between the words.`,
          {
            type: 'sitewords',
            text: 'check-in, clean-cut, editor-in-chief, empty-handed, far-fetched, father-in-law, mother-in-law, sister-in-law, free-for-all, know-how, know-it-all, life-size, merry-go-round, long-distance, long-term, mind-blowing, nitty-gritty, one-sided, one-dimensional, two-dimensional, over-the-counter, run-in, runner-up, strong-arm, topsy-turvy, toss-up, up-to-date, well-being, word-of-mouth',
            width: 120
          },
          `=> Compounds words can also be classified as the following:
1. Compound nouns: These are nouns formed by combining two or more words.
Examples: toothbrush, sunglasses, teapot, birthday.
2. Compound adjectives: These are adjectives formed by combining two or more words.
Examples: red-hot, well-known, high-speed, open-minded.
3. Compound verbs: These are verbs formed by combining two or more words.
Examples: drive-in, break up, turn off, pick up.
4. Compound prepositions: These are prepositions formed by combining two or more words.
Examples: according to, because of, in spite of, out of.`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-cmp',
      label: 'Complete Word - Compound Words',
      title: 'Answer the riddles with compound words.',
      data: [
        `I can be high or low, but I'm always full of energy. What am I? |Power surge| P____ surge
I'm something you can hold in your hand, but I'm not solid. What am I?| Air pocket| A__ pocket
I'm a tool that can be used to cut, but I'm not a knife. What am I?| Wire cutter| W___ cutter
I'm something you can wear on your head, but I'm not a hat. What am I?| Headband| H___band`,

        `I'm something you can use to light up a room, but I'm not a lamp. What am I? |Light bulb| L____ bulb
I'm something you can use to clean your teeth, but I'm not toothpaste. What am I? |Dental floss| D_____ floss
I'm a machine that can be used to lift heavy objects, but I'm not a crane. What am I? |Hydraulic jack| H________ jack
I'm something you use to hold two things together, but I'm not glue. What am I? |Paperclip| P____clip`,

        `I'm a container that you can carry around, but I'm not a bag. What am I? |Lunchbox| L____box
I'm something you use to make a call, but I'm not a mobile. What am I? |Telephone| T___phone
I'm something you can use to write, but I'm not a pen. What am I? |Chalkboard| C____board
I'm a machine that can be used to cook food, but I'm not an oven. What am I? |Microwave| M____wave`,

        `I'm a tool that can be used to cut down trees, but I'm not an ax. What am I? |Chainsaw| C____saw
I'm something you can use to make coffee, but I'm not a coffee maker. What am I? |Coffee grounds| C_____ grounds
I can be opened and closed, and I keep your food fresh. What am I? |Ziplock| Z__lock
I'm something you use to write on a chalkboard. What am I? |Chalk stick| C____ stick`,

        `I'm something you tie before you go outside. What am I? |Shoe lace| S___ lace
I'm the type of ball that you bounce. What am I? |Rubber ball| R_____ ball
I'm something you use to clean the dishes. What am I? |Dish soap| D___ soap
I'm something you wear on your head to keep warm. What am I? |Winter hat| W_____ hat`,

        `I'm a type of cheese that is yellow and has holes in it. What am I? |Swiss cheese| S____ cheese
I'm something you use to brush your hair. What am I? |Hair brush| H___ brush
I'm something you wear on your feet to go swimming. What am I? |Swim fin| S___ fin
I'm something you use to clean your teeth, but I'm not toothpaste. What am I? |Toothbrush| T____brush`,

        `I'm something you use to carry your things, but I'm not a backpack. What am I? |Handbag| H___bag
I'm something you use to keep food fresh, but I'm not a fridge. What am I? |Tupperware| T_____ware
I'm something you can use to clean the floor, but I'm not a broom. What am I? |Dustpan| D___pan`
      ]
    },
    {
      type: 'group',
      label: 'Closed or Open',
      id: 'closed-open',
      lockAfter: 1,
      commonData: {
        title: 'Classify the following words as closed or open compound words',
        types: ['Closed compound word', 'Open compound word']
      },
      data: [
        [
          `anybody, everybody, nobody, somebody, anyone`,
          `book store, black eye, cell phone`
        ],
        [
          `everyone, someone, anything, everything, nothing`,
          `close call, common sense, cotton candy`
        ],
        [
          `something, anywhere, everywhere, nowhere, somewhere`,
          `dining room, first aid, full moon`
        ],
        [
          `babysit, background, barefoot, baseball, basketball`,
          `French fry, heart attack, high school`
        ],
        [
          `football, bathroom, bedroom, blackberry, blueberry`,
          `hot dog, ice cream, life jacket`
        ],
        [
          `breakfast, cannot, checkout, cowboy, daylight`,
          `living room, no one, peanut butter`
        ],
        [
          `desktop, fingerprint, firefly, forever, gentleman`,
          `post office, prime minister, real estate`
        ],
        [
          `grandmother, grandfather, granddaughter, grapefruit, grasshopper`,
          `remote control, report card, rib cage`
        ],
        [
          `headquarters, handshake, inside, keyboard, lipstick`,
          `role model, roller coaster, salad dressing`
        ],
        [
          `mailbox, nevertheless, nonetheless, notebook, outside`,
          `search engine, slam dunk, sleeping bag`
        ],
        [
          `payday, railroad, rainbow, raincoat, skateboard`,
          `time capsule, vacuum cleaner, vending machine`
        ],
        [
          `smartphone, snowball, sometimes, sunflower, toothbrush`,
          `video game, waiting room, washing machine, web page.`
        ]
      ]
    },
    {
      label: 'Noun or Adjective',
      type: 'group',
      id: 'noun-adj',
      data: {
        title: 'Classify the following as compound noun or compound adjective.',
        types: [
          {
            name: 'Noun',
            text: 'toothbrush, sunglasses, teapot, birthday'
          },
          {
            name: 'Adjective',
            text: 'red-hot, well-known, high-speed, open-minded'
          }
        ]
      }
    },
    {
      label: 'Verb or Preposition',
      type: 'group',
      id: 'verb-pre',
      data: {
        title:
          'Classify the following as compound verb or compound preposition.',
        types: [
          {
            name: 'Verb',
            text: 'drive-in, break up, turn off, pick up'
          },
          {
            name: 'Preposition',
            text: 'according to, because of, in spite of, out of'
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'affixation',
      data: {
        title: 'Affixation',
        text: [
          `An affix is a word element of English grammar used to alter the meaning or form of a word and comes in the form of either a prefix or a suffix. 
# Affixation in Comparative and Superlative Degree
1. Most comparative and superlative degrees are made by adding -er and -est. If the adjective ends in -e, only then -r and -st are added.`,
          {
            type: 'html',
            text: `<b>Examples</b>: sweet -> sweet<b>er</b> -> sweet<b>est</b>; safe -> saf<b>er</b> -> saf<b>est</b>; dark -> dark<b>er</b> -> dark<b>est</b>`
          },
          `2. Adjectives ending in y, drop the -y and take -ier and -iest.`,
          {
            type: 'html',
            text: `<b>Examples</b>: crazy -> craz<b>ier</b> -> craz<b>iest</b>; early  -> earl<b>ier</b> -> earl<b>iest</b>; happy -> happ<b><ier</b> -> happ<b>iest</b>`
          },
          `3. In some adjectives that have just one syllable, the last consonant is doubled.`,
          {
            type: 'html',
            text: `<b>Examples</b>: thin —> thi<b>nner</b> —> thi<b>nnest</b>; sad —> sa<b>dder</b> -> sa<b>ddest</b>; dim -> di<b>mmer</b> -> di<b>mmest</b>`
          },
          `4. Adjectives that have more than two or three syllables take more and most to make comparative and superlative degrees. These include adjectives that end in -ed, -ful, -less, -ing, etc.`,
          {
            type: 'html',
            text: `<b>Examples</b>: excited -> <b>more</b> excited —> <b>most</b> excited; useful —> <b>more</b> useful -> <b>most</b> useful`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-affix',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is an affix in English grammar?`,
            options: `A word element used to alter the meaning or form of a word, A grammatical construction that changes the tense of a verb, A type of adverb used to modify a verb`
          },
          {
            qText: `What are the two forms of affixes in English?`,
            options: `Prefixes and suffixes, Adjectives and adverbs, Nouns and verbs, Conjunctions and prepositions`
          },
          {
            qText: `How are most comparative and superlative degrees formed?`,
            options: `By adding -er and -est, By adding -ed and -ing, By adding -ly, By adding -able and -ible`
          },
          {
            qText: `What happens to adjectives ending in -y when forming comparative and superlative degrees?`,
            options: `The -y is dropped and -er/-est is added, The -y is doubled, The -y is changed to -ly`
          },
          {
            qText: `What happens to some adjectives with just one syllable when forming comparative and superlative degrees?`,
            options: `The last consonant is doubled, The last vowel is doubled, The adjective is shortened, The adjective is lengthened`
          }
        ]
      }
    },
    {
      id: 'fill-up-comparisson',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the most appropriate degree of comparison in the following sentences.`
      },
      data: [
        `Athiya is *smarter (smartest)* than most of her friends.
Nobody is as *good (best)* as you.
Priya was the *most elegant (more elegant)* of all.
Harminder is *taller (tallest)* than her brother.
The most recent movie was *excellent (excellenter)*.`,

        `Mount Everest is the *highest (higher)* peak.
Woody is the *most watched (watched more)* series.
Sreya is *happier (happy)* than Tina.
Arhan is a *patient (patienter)* kid.
These maths problems are *easy (easiest)*.`,

        `This flower is *prettier (pretty)* than that one.
My sister is *more intelligent (intelligent)* than me.
Who is the *tallest (most tall)* in your class?
She is the *best (most good)* of all the singers in the competition.
This is the *most expensive (expensive)* restaurant I have ever been to.`,

        `My uncle's house is *bigger (big)* than mine.
That was the *most surprising (most surprised)* news I had ever heard.
This dress is *more beautiful (beautiful)* than the one I saw yesterday.
The *best (better)* players in the team are my brother and John.
The *best (good)* time to plant a tree was twenty years ago.`,

        `This problem is *more complicated (complicated)* than I thought.
This laptop is *faster (more fast)* than my old one.
She is *shorter (short)* than him.
She is *better (more good)* at singing than her sister.
He is *more skilled (more skill)* at math than me.`
      ]
    },
    {
      id: 'comparisson-2',
      label: 'Degrees of Comparisson',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the missing blanks with the most appropriate degree of comparison.'
      },
      lockAfter: 2,
      data: [
        `Big, *Bigger*, Biggest
Thin, Thinner, *Thinnest*
Fat, *Fatter*, Fattest
Dim, Dimmer, *Dimmest*
Hot, *Hotter*, Hottest`,

        `Sad, Sadder, *Saddest*
Slim, *Slimmer*, Slimmest
Red, Redder, *Reddest*
Bright, *Brighter*, Brightest
Short, Shorter, *Shortest*
Weak, *Weaker*, Weakest`,

        `Long, Longer, *Longest*
Smart, *Smarter*, Smartest
Cool, Cooler, *Coolest*
Dark, *Darker*, Darkest
Small, Smaller, *Smallest*`,

        `Bold, *Bolder*, Boldest
Humble, Humbler, *Humblest*
Simple, *Simpler*, Simplest
Fine, Finer, *Finest*
Noble, *Nobler*, Noblest`,

        `Brave, Braver, *Bravest*
Wealthy, *Wealthier*, Wealthiest
*Healthy*, Healthier, Healthiest
Costly, *Costlier*, Costliest`,

        `Busy, Busier, *Busiest*
*Cosy*, Cosier, Cosiest
Little, *Less*, *Least*
Many, *More*, Most`
      ]
    },
    {
      id: 'fillup-comp-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate degree of comparison in the following sentences.'
      },
      lockAfter: 2,
      data: [
        `Mira works hard. Her sister works *harder*. Her brother works the *hardest*.
You should do well on your test. It should be *better* than last time. In fact, you should do the *best* this time.
Ben is crazy. Zen is *crazier* than Ben. But Ron is the *craziest* of them all.`,

        `Rabab is thin. Her sister Rehab is *thinner*. But Rhea is the *thinnest* of them.
Kartik did badly in his entrance test. Hemant did *worse* than him. Sachin did the *worst*.
Sangita draws sketches as good as Sanchi does. Sanjay does *better* than his sister. But their mother can draw pictures the *best*.`,

        `Shilpa is tall.	Sheena is *taller* than Shilpa.	Samira is the *tallest* of all the girls.
She is pretty. Reem is *prettier* than her sister. Riya is the *prettiest* of them.
Sam is intelligent.	Sam is *more intelligent* than Tina. Sam is the *most intelligent* kid in class.`,

        `He is smart. He is *smarter* than Geetha. He is the *smartest* among them.
Rinita has a big house.	Rinita has a *bigger* house than Seena.	Roshini has the *biggest* house among them.
My friend, Bindhu looks happy. Bindhu looks *happier* than my other friends. Bindhu, looks the *happiest* while playing.`,

        `This cake is delicious. That cake is *more delicious* than this one. The chocolate cake is the *most delicious* of all.
Mary is smart. Jane is *smarter* than Mary. Sara is the *smartest* person I know.
This book is interesting. That book is *more interesting* than this one. The other book is the *most interesting* of all.`
      ]
    }
  ]
};
