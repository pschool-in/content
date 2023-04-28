export default {
  id: 'adjective-7',
  label: 'Adjectives',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'adjectives',
      data: {
        title: 'Adjectives',
        text: [
          `A word that is used to add more meaning to a noun or a pronoun is known as an Adjective.`,
          {
            type: 'html',
            text: `Eg: Ramesh is <i>intelligent</i>.<br>
An <i>intelligent</i> boy won the quiz.<br><br>
In both sentences, '<i>intelligent</i>' is used to describe the quality of nouns so it is an adjective in both sentences.<br><br>
In the first sentence, '<i>intelligent</i>' is used as part of the predicate, so it is called a predicative adjective.<br><br>
In the second sentence, '<i>intelligent</i>' is used in front of the noun, so it is called an attributive adjective.<br><br>
Some adjectives like <i>afraid, well, ill, glad, alive</i>  can be used only predicatively.`
          },
          `# Types of Adjectives
There are three common types:
1. Adjective of Quantity: It shows how much of anything is described.`,
          {
            type: 'html',
            text: `Eg: She has <i>some</i> time.<br>
Sheela has <i>little</i> patience.`
          },
          `2. Adjective of Number (Numeral Adjective): It shows how many persons or things are described. It also shows the order of any person or thing.`,
          {
            type: 'html',
            text: `Eg:There are <i>three</i> halls in the palace.<br>
<i>All</i> students will pass this year.`
          },
          `3. Adjective of Quality: It shows the kind of quality of any person or thing. (i.e., it describes the attribute of any person or thing)`,
          {
            type: 'html',
            text: `Eg: Sapna is an <i>honest</i> girl.<br>
You are a <i>foolish</i> man.`
          },
          `# Comparison of Adjectives
Here are some examples of adjectives in their different degrees of comparison:
1. Positive: It is the simple form of the adjective that is used to describe a single thing.`,
          {
            type: 'html',
            text: `Eg: My sister is <i>beautiful</i>.<br>
The dog is <i>cute</i>.<br>
The flowers are <i>colorful</i>.`
          },
          `2. Comparative: It is used to compare two things. The comparative degree is formed by adding -er to the end of the adjective for short adjectives or by adding "more".`,
          {
            type: 'html',
            text: `Eg: My sister is <i>more beautiful</i> than my mother.<br>
The dog is <i>cuter</i> than the cat.<br>
The flowers are <i>more colorful</i> than the leaves.`
          },
          `3. Superlative: It is used to compare more than two things. The superlative degree is formed by adding -est to the end of the adjective for short adjectives or by adding "most".`,
          {
            type: 'html',
            text: `Eg: My sister is the <i>most beautiful</i> woman in the world.<br>
The dog is the <i>cutest</i> animal in the park.<br>
The flowers are the <i>most colorful</i> thing in the garden.`
          },
          `# Nouns as Adjectives
Nouns can be used as adjectives to modify other nouns in a sentence. This type of adjective is called a noun adjunct or attributive noun. Nouns used as adjectives help to provide more information about the noun they modify.`,
          {
            type: 'html',
            text: `Eg: <i>football</i> player<br>
            <i>dog</i> food<br>
<i>coffee</i> mug<br>
<i>sea</i> breeze<br>
<i>Tennis</i> shoes<br><br>
In the above examples, the highlighted nouns play the role of adjectives.`
          },
          `# Adjectives with -ly
Adjectives can be formed by adding <i>-ly</i> to their root word. These adjectives describe how something is done.`,
          {
            type: 'html',
            text: `Eg: <i>quickly</i>; <i>carefully</i>; <i>quietly</i>; <i>happily</i>; <i>lazily</i>`
          },
          `# Participial Adjective
Participial adjectives are formed from the past participle (-ed) or present participle (-ing) of a verb.`,
          {
            type: 'html',
            text: `Eg : <i>bored</i>; <i>amazed</i>; <i>confused</i>; <i>exciting</i>; <i>exhausted</i>`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-adj',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is not a type of adjective?`,
            options: `Adjective of Color, Adjective of Quantity, Adjective of Quality, Adjective of Number `
          },
          {
            qText: `Which type of adjective is used to compare two things?`,
            options: `Comparative, Positive, Superlative`
          },
          {
            qText: `In the phrase "coffee mug", which word is acting as an adjective?`,
            options: `Coffee, Mug, *None of the above`
          },
          {
            qText: `Which of the following is a participial adjective?`,
            options: `Exciting, Quick, Beautiful, *All of the above`
          },
          {
            qText: `Which of the following adjectives cannot be used attributively?`,
            options: `Afraid, Intelligent, Beautiful`
          }
        ]
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      data: {
        title: 'Classify the following sentences as True or False',
        types: [
          {
            name: 'True',
            text: `Adjectives modify nouns or pronouns.
Adjectives can be used to compare two or more nouns or pronouns.
Adjectives can be formed by adding suffixes to nouns or verbs.
Adjectives can be used to indicate age.`
          },
          {
            name: 'False',
            text: `Adjectives have no comparative or superlative forms.
Adjectives can be used to show possession.
Adjectives are always placed before the nouns they modify.
Adjectives can be used to indicate purpose.
Adjectives can be used to indicate time.
Adjectives are only used to describe people, not things.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify - Adjectives',
      id: 'select-word-adj',
      lockAfter: 1,
      commonData: {
        title: 'Identify the adjectives from the following sentences.'
      },
      data: [
        `*Good* people are always welcomed everywhere.
The girls were preparing for the *upcoming* exam.
There were *several* mistakes in his essay.
Gulliver did not get *sufficient* food.
Parvati secured the *seventh* rank in the test.`,

        `*Which* pen belongs to you?
*Our* team won the match.
Bill wrote *many* novels.
*Some* people work at the factory as weavers.
It was a *difficult* question, but I solved it.`,

        `This Diwali I bought my grandmother *two* sarees.
He walked *six* kilometer.
Who was the *first* Prime Minister of India?
The students on the *last* row are talkative.
Are there *any* apples left in the fridge?`,

        `She ate only *half* a slice of pizza.
My uncle got job offer letters from *five* companies.
I will finish the *whole* book today.
We should eat *healthy* food.
The students have completed their *project* work.`,

        `Rohan made *several* calls from his mobile.
We participated in the *art* competitions.
May I have *three* coffee, please?
There are *many* colleges across India.
A *few* people are allowed inside the room.`
      ]
    },
    {
      id: 'fillup-adj',
      label: 'Comparison of Adjectives',
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
Eating vegetables is healthier than eating junk food.
`,

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
          The sun is not the brightest star in the Milky way.
          Times Square is one of the busiest places in New York City.
The alphabet is the simplest thing to learn.`
        ]
      ]
    },
    {
      id: 'nouns',
      label: 'Nouns as Adjectives',
      type: 'selectWord',
      commonData: {
        title:
          'Identify the nouns that are acting as adjectives from the following sentences.'
      },
      lockAfter: 2,
      data: [
        `The *book* cover is blue.
The *car* engine is loud.
The *restaurant* menu has vegetarian options.
The *music* player is portable.
The *cake* icing is sweet.`,

        `The *classroom* chalkboard is green.
The *coffee* mug is ceramic.
The *language* course is comprehensive.
The *hiking* trail map is helpful.
The *baby* toy is soft.`,

        `The *coffee* shop ambiance is cozy.
The *science* apparatus present in our lab was broken.
The *bus* driver is young but experienced.
The *theater* popcorn is buttery and salty.
The *wedding* invitation design is elegant.`,

        `The *travel* guidebook is informative.
The *sports* uniform is red and white.
The *building* materials are brought from a nearby city.
The *art* museum exhibits are contemporary.
The *winter* fabrics are made of wool.`,

        `The *software* program is easy to learn.
The *photo* album is slightly damaged.
The *garden* shed is made of wood.
The *pet*  bowl is made of stainless steel.
The *smartphone* charger is not working. We need to get a new one.`
      ]
    },
    {
      id: 'mcq-adjective',
      label: 'Multiple Choice Questions ',
      type: 'mcq',
      data: {
        title: 'Choose the correct alternative',
        questions: [
          {
            qText:
              'A word that is used with a noun or a pronoun to describe it is known as _____________.',
            options: `an adjective, an adverb, a participle`
          },
          {
            qText:
              'The nature of any person or thing is shown by __________________.',
            options: `Adjective of Quality, Adjective of Quantity, Adjective of Number`
          },
          {
            qText:
              'The order of any person or thing is shown by _________________.',
            options: `Adjective of Number, Adjective of Quality, Adjective of Quantity`
          },
          {
            qText:
              'When adjective is used not in front of the noun, it is called a ______________.',
            options: `predicative adjective, attributive adjective, demonstrative adjective`
          },
          {
            qText:
              'When adjective is used in front of the noun, it is called  ________________.',
            options: `an attributive adjective, a predicative adjective, a possessive adjective`
          }
        ]
      }
    },
    {
      id: 'fillup-adj-2',
      label: 'Participal Adjectives',
      type: 'fillup',
      noOptions: true,
      data: {
        title: 'Fill in the blanks with participal adjectives',
        text: `The *excited* child opened the present. (excite)
The *blooming* flowers filled the room with fragrance. (bloom)
The *racing* car sped down the highway. (race)
The *falling* snowflakes covered the ground. (fall)
The *determined* athlete won the race. (determine)`
      }
    }
  ]
};
