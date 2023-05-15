export default {
  id: 'degree-7',
  label: 'Degrees of Comparrison',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'degree',
      data: {
        title: 'Affixation and Degrees of Comparrison',
        text: [
          `An affix is a word element of English grammar used to alter the meaning or form of a word and comes in the form of either a prefix or a suffix. 
# Affixation in Comparative and Superlative Degree
1. Most comparative and superlative degrees are made by adding -er and -est. If the adjective ends in -e, only then -r and -st are added.`,
          {
            type: 'html',
            text: `Eg: sweet -> sweet<b>er</b> -> sweet<b>est</b><br> 
safe -> saf<b>er</b> -> saf<b>est</b><br>
dark -> dark<b>er</b> -> dark<b>est</b>`
          },
          `2. Adjectives ending in y, drop the -y and take -ier and -iest.`,
          {
            type: 'html',
            text: `Eg: crazy -> craz<b>ier</b> -> craz<b>iest</b><br>
early  -> earl<b>ier</b> -> earl<b>iest</b><br>
happy -> happ<b>ier</b> -> happ<b>iest</b>`
          },
          `3. In some adjectives that have just one syllable, the last consonant is doubled.`,
          {
            type: 'html',
            text: `Eg: thin —> thi<b>nner</b> —> thi<b>nnest</b><br>
sad —> sa<b>dder</b> -> sa<b>ddest</b><br>
dim -> di<b>mmer</b> -> di<b>mmest</b>`
          },
          `4. Adjectives that have more than two or three syllables take more and most to make comparative and superlative degrees. These include adjectives that end in -ed, -ful, -less, -ing, etc.`,
          {
            type: 'html',
            text: `Eg: excited -> <b>more</b> excited —> <b>most</b> excited<br>
useful —> <b>more</b> useful -> <b>most</b> useful`
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
            options: `A word element used to alter the meaning or form of a word.
A grammatical construction that changes the tense of a verb.
A type of adverb used to modify a verb`
          },
          {
            qText: `What are the two forms of affixes in English?`,
            options: `Prefixes and suffixes, Adjectives and adverbs, Nouns and verbs, Conjunctions and prepositions`
          },
          {
            qText: `How are most comparative and superlative degrees formed?`,
            options: `By adding -er and -est
By adding -ed and -ing
By adding -ly
By adding -able and -ible`
          },
          {
            qText: `What happens to adjectives ending in -y when forming comparative and superlative degrees?`,
            options: `The -y is dropped and -er or -est is added
The -y is doubled
The -y is changed to -ly`
          },
          {
            qText: `What happens to some adjectives with just one syllable when forming comparative and superlative degrees?`,
            options: `The last consonant is doubled
The last vowel is doubled
The adjective is shortened
The adjective is lengthened`
          }
        ]
      }
    },
    {
      id: 'comparisson-2',
      label: 'Fillup',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the missing blanks with the most appropriate degree of comparison.'
      },
      lockAfter: 2,
      data: [
        `Big -> *Bigger* -> Biggest
Thin -> Thinner -> *Thinnest*
Fat -> *Fatter* -> Fattest
Dim -> Dimmer -> *Dimmest*
Hot -> *Hotter* -> Hottest`,

        `Sad -> Sadder -> *Saddest*
Slim -> *Slimmer* -> Slimmest
Red -> Redder -> *Reddest*
Bright -> *Brighter* -> Brightest
Short -> Shorter -> *Shortest*`,

        `Weak -> *Weaker* -> Weakest
Long -> Longer -> *Longest*
Smart -> *Smarter* -> Smartest
Cool -> Cooler -> *Coolest*
Dark -> *Darker* -> Darkest`,

        `Small -> Smaller -> *Smallest*
Bold -> *Bolder* -> Boldest
Humble -> Humbler -> *Humblest*
Simple -> *Simpler* -> Simplest
Fine -> Finer -> *Finest*`,

        `Noble -> *Nobler* -> Noblest
Brave -> Braver -> *Bravest*
Wealthy -> *Wealthier* -> Wealthiest
*Healthy* -> Healthier -> Healthiest
Costly -> *Costlier* -> Costliest`,

        `Busy -> Busier -> *Busiest*
*Cosy* -> Cosier -> Cosiest
Little -> *Less* -> *Least*
Many -> *More* -> Most`
      ]
    },
    {
      id: 'fill-up-comparisson',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the most appropriate degree of comparison.`
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
The *best (better)* players on the team are my brother and John.
The *best (good)* time to plant a tree was twenty years ago.`,

        `This problem is *more complicated (complicated)* than I thought.
This laptop is *faster (more fast)* than my old one.
She is *shorter (short)* than him.
She is *better (more good)* at singing than her sister.
He is *more skilled (more skill)* at math than me.`
      ]
    },
    {
      id: 'fillup-comp-2',
      label: 'Fill in the blanks - 2',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate degree of comparison.'
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
    },
    {
      id: 'fillup-adj',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blank with the correct degree of the adjective'
      },
      lockAfter: 2,
      data: [
        `Rohan is *wiser* than Ayush. (wise)
This bag is too big, do you have a *smaller* bag? (small)
The apples are *harder* than the plums. (hard)
French is *more difficult* than English. (difficult)
Compared to roti, naan is *better*. (good)`,

        `The tulips are *more beautiful* than roses. (beautiful)
MS Dhoni is one of the *best* cricket players in the world. (good)
This is the *most valuable* necklace in our shop. (valuable)
He is my *elder* brother. (old)
Burj Khalifa is the *tallest* building in the world. (tall)`,

        `Are you feeling *better* now? (good)
May is the *hottest* month of the year. (hot)
Sheela is *taller* than her sister. (tall)
Yogesh is the *wiser* of the two. (wise)
You are the *most regular* boy in the class. (regular)`,

        `My brother is *taller*  than me. (tall)
This is the *most interesting*  book I have ever read. (interesting)
The red dress is *more expensive*  than the blue one. (expensive)
John is the *happiest*  person I know. (happy)
The cat is the *laziest*  animal in the house. (lazy)`,

        `The test was *more difficult* than I expected. (difficult)
This pizza is *more delicious*  than the one we had last week. (delicious)
That movie was *scarier*  than I thought it would be. (scary)
This flower is *more beautiful*  than the one in my garden. (beautiful)
The elephant is the *biggest*  animal in the zoo. (big)`
      ]
    },
    {
      label: 'Positive, Comparative or Superlative',
      type: 'classifySentence',
      id: 'degree-classify',
      commonData: {
        title:
          'Classify based on the degree of comparison used in the following sentences.',
        types: ['Positive', 'Comparative', 'Superlative']
      },
      data: [
        [
          `The sun is shining.
She has a beautiful voice.
The book is interesting.
The flowers are colorful.`,

          `This building is taller than the one next to it.
She runs faster than her brother.
The elephant is bigger than the rhino.`,

          `The lion is the loudest animal in the zoo.
She is the strongest person in her class.
The giraffe is the tallest animal on earth.`
        ],
        [
          `He is a talented musician.
The sea is calm today.
The puppy is playful.`,

          `The vanilla cake is cheaper than the chocolate cake.
Her new phone is better than her old one.
He was braver than I thought he would be.
I am happier when I am with my friends.`,

          `The Pacific Ocean is the largest ocean in the world.
Losing his job was the saddest moment in his life.
The blue whale is the biggest animal on earth.`
        ],
        [
          `The biriyani smells delicious.
The mountain is majestic.
The rainbow is stunning.`,

          `Her family is wealthier than mine.
The weightlifter is stronger than the runner.
The suitcase is heavier than I expected.
The sun is brighter than the moon.`,

          `Her puppy is the smallest dog in the litter.
Einstein is one of the smartest people in history.
The firefighter is the bravest person I know.`
        ],
        [
          `The coffee is hot and fresh.
He is a generous person.
The ice cream is sweet and creamy.`,

          `She is kinder to animals than anyone I know.
The new car is more modern than the old one.
The math test was more difficult than the science test.`,

          `Being with her makes me the happiest.
Bill Gates is one of the richest people in the world.
The elephant is the heaviest animal on land.
She is the kindest person I have ever met.`
        ],
        [
          `She is a helpful teacher.
The sky is blue.
The children are adorable.
The movie is entertaining.`,

          `The streets are busier in the daytime.
The instructions for this game are simpler than the ones for the other game.
Eating vegetables is healthier than eating junk food.`,

          `The newest technology is the most modern.
Calculus is the most difficult subject in school.
The Mona Lisa is one of the most beautiful paintings in the world.`
        ],
        [
          `She is a wonderful friend.
The beach is relaxing.
Drawing is a creative work.`,

          `Her new dress is more beautiful than the old one.
The Great Wall of China is longer than the Berlin Wall.
His jokes are funnier than hers.`,

          `Usain Bolt is the fastest runner in the world.
The sun is not the brightest star in the Milky Way.
Times Square is one of the busiest places in New York City.
The alphabet is the simplest thing to learn.`
        ]
      ]
    }
  ]
};
