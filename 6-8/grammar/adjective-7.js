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
          `A word that is used with a noun or a pronoun to describe it is known as an Adjective.`,
          {
            type: 'html',
            text: `<b>Examples</b>: Ramesh is <b>intelligent</b>.<br>
An <b>intelligent</b> boy won the quiz.<br>
In both sentences, '<b>intelligent</b>' is used to describe the quality of nouns so it is an adjective in both sentences.<br>
=> In the first sentence, '<b>intelligent</b>' is used as a part of the predicate, so it is called a <b>predicative adjective</b>.<br>
In the second sentence, '<b>intelligent</b>' is used to describe the attribute of the noun, so it is called an <b>attributive adjective</b>.<br>
=> Some adjectives like '<b>afraid</b>', '<b>well</b>' etc can be used only <b>predicatively</b>.`
          },
          `# Kinds of Adjectives
Adjectives are of three kinds:
1. Adjective of Quantity: It shows how much of anything is described.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She has <b>some</b> time.<br>
Sheela has <b>little</b> patience.`
          },
          `2. Adjective of Number (Numeral Adjective): It shows how many persons or things are described. It also shows the order of any person or thing.`,
          {
            type: 'html',
            text: `<b>Examples</b>:There are <b>three</b> halls in the palace.<br>
<b>All</b> students will pass this year.`
          },
          `3. Adjective of Quality: It shows the kind of quality of any person or thing. (ie.., it describes the attribute of any person or thing)`,
          {
            type: 'html',
            text: `<b>Examples</b>: Sapna is an <b>honest</b> girl.<br>
You are a <b>foolish</b> man.`
          },
          `# Comparisson of Adjectives
Here are some examples of adjectives in their different degrees of comparison:
1. Positive: It is the simple form of the adjective that is used to describe a single thing.`,
          {
            type: 'html',
            text: `<b>Examples</b>: My sister is <b>beautiful</b>.<br>
The dog is <b>cute</b>.<br>
The flowers are <b>colorful</b>.`
          },
          `2. Comparative: It is used to compare two things. The comparative degree is formed by adding -er to the end of the adjective for short adjectives or by adding "more".`,
          {
            type: 'html',
            text: `<b>Examples</b>:My sister is <b>more beautiful</b> than my mother.<br>
The dog is <b>cuter</b> than the cat.<br>
The flowers are <b>more colorful</b> than the leaves.`
          },
          `3. Superlative: It is used to compare more than two things. The superlative degree is formed by adding -est to the end of the adjective for short adjectives or by adding "most".`,
          {
            type: 'html',
            text: `<b>Examples</b>: My sister is the <b>most beautiful</b> woman in the world.<br>
The dog is the <b>cutest</b> animal in the park.<br>
The flowers are the <b>most colorful</b> thing in the garden.`
          },
          `# Nouns as Adjectives
Nouns can be used as adjectives to modify other nouns in a sentence. This type of adjective is called a noun adjunct or attributive noun. Nouns used as adjectives help to provide more information about the noun they modify.`,
          {
            type: 'html',
            text: `<b>Examples</b>: 1. <b>Football</b> player - In this phrase, "<b>football</b>" is used as an adjective to describe the type of player.<br>
2. <b>Dog</b> food - In this phrase, "<b>dog</b>" is used as an adjective to describe the type of food.<br>
3. <b>Coffee</b> mug - In this phrase, "<b>coffee</b>" is used as an adjective to describe the type of mug.<br>
4. <b>Ocean</b> breeze - In this phrase, "<b>ocean</b>" is used as an adjective to describe the type of breeze.<br>
5. <b>Tennis</b> shoes - In this phrase, "<b>tennis</b>" is used as an adjective to describe the type of shoes.`
          },
          `# Adjectives with -ly
Adjectives with -ly are adjectives that are formed by adding -ly to a base adjective. These adjectives describe how something is done or how something is done.`,
          {
            type: 'html',
            text: `Examples: <b>Quickly</b>; <b>Carefully</b>; <b>Quietly</b>; <b>Happily</b>; <b>Lazily</b>`
          },
          `# Participal Adjective
Participial adjectives are formed from the past participle (-ed) or present participle (-ing) of a verb. They are used to provide more detail and add interest to a sentence.`,
          {
            type: 'html',
            text: `Examples: <b>Bored</b>; <b>Amazed</b>; <b>Confused</b>; <b>Exciting</b>; <b>Exhausted</b>`
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
            qText: `Which of the following is not a kind of adjective?`,
            options: `Adjective of Color, Adjective of Quantity, Adjective of Quality, Adjective of Number `
          },
          {
            qText: `Which type of adjective is used to compare two things?`,
            options: `Comparative, Positive, Superlative`
          },
          {
            qText: `In the phrase "coffee mug", which word is acting as an adjective?`,
            options: `Coffee, Mug, None of the above`
          },
          {
            qText: `Which of the following is a participial adjective?`,
            options: `Exciting, Quick, Beautiful, All of the above`
          },
          {
            qText: `Which of the following adjectives cannot be used attributively?`,
            options: `Afraid, Well, Intelligent, Beautiful`
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
*Those* girls were preparing for the upcoming exam.
There were *several* mistakes in his essay.
Gulliver did not get *sufficient* food.
Parvati secured the *seventh* rank in the test.`,

        `*Which* pen belongs to you?
*Our* team won the match.
Bill wrote *many* novels.
*Some* people work at the factory as weavers.
It was a *difficult* question, but I solved it.`,

        `This summer I wrote my grandmother *some* letters.
I have *six* fingers on my right toe.
Who was the *first* Prime Minister of India?
The *sixth* boy on the last row is talkative.
Are there *any* apples left in the fridge?`,

        `She ate only *half* a slice of pizza.
I got offer letters from *five* companies.
I will finish this *whole* book today.
Each *one* of us should eat healthy food.
*Most* of the students have completed their project work.`,

        `Rohan made *several* calls from his mobile.
*Many* students participated in the art competitions.
May I have *three* coffee, please?
There are *many* call centers of amazon across India
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
You are the *most regular* boy in class. (regular)`,

        `My brother is *taller*  than me. (tall)
This is the *most interesting*  book I have ever read. (interesting)
The red dress is *more expensive*  than the blue one. (expensive)
John is the *happiest*  person I know. (happy)
The cat is the *laziest*  animal in the house. (lazy)`,

        `The test was *more difficult* than I expected. (difficult)
This pizza is *more delicious*  than the one we had last week. (delicious)
That movie was *scarier*  than I thought it would be. (scary)
This flower is *more beautiful*  than the one in my garden. (beautiful)
The elephant is *the biggest*  animal in the zoo. (big)`
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

          `The vanilla cake is cheaper than the chocholate cake.
Her new phone is better than her old one.
He was braver than I thought he would be.
I am happier when I am with my friends.`,

          `The Pacific Ocean is the largest ocean in the world.
Losing his job was the saddest moment in his life.
Usain Bolt is the fastest runner in the world.
The blue whale is the biggest animal on earth.`
        ],
        [
          `The pizza smells delicious.
She is a wonderful friend.
The mountain is majestic.
The rainbow is stunning.`,

          `Her family is richer than mine.
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
The beach is relaxing.
The Art is creative.
The ice cream is sweet and creamy.`,

          `She is kinder to animals than anyone I know.
The new car is more modern than the old one.
The math test was more difficult than the science test.
Her new dress is more beautiful than the old one.`,

          `Being with her makes me the happiest.
Bill Gates is one of the richest people in the world.
The elephant is the heaviest animal on land.
The sun is the brightest star in our solar system.
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
The Great Wall of China is longer than the Berlin Wall.
His jokes are funnier than hers.`,

          `The newest technology is the most modern.
Calculus is the most difficult subject in school.
The Mona Lisa is one of the most beautiful paintings in the world.
Times Square is one of the busiest places in New York City.
The alphabet is the simplest thing to learn.`
        ]
      ]
    },
    {
      id: 'nouns',
      label: 'Nouns as Adjectives',
      type: 'fillup',
      commonData: {
        noOptions: true,
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
The *language* course textbook is comprehensive.
The *hiking* trail map is helpful.
The *baby* toy is soft.`,

        `The *coffee* shop ambiance is cozy.
The *science* experiment apparatus is precise.
The *school bus* driver is experienced.
The *movie* theater popcorn is buttery.
The *wedding* invitation design is elegant.`,

        `The *travel* guidebook is informative.
The *sports* team uniform is red and white.
The *building* material is brick.
The *art* museum exhibit is contemporary.
The *winter* coat fabric is wool.`,

        `The *software* program is user-friendly.
The *photo* album pages are glossy.
The *garden* tool shed is wooden.
The *pet* food bowl is stainless steel.
The *smartphone* charger cable is long.`
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
              'The kind of quality of any person or thing is shown by __________________.',
            options: `Adjective of Quality, Adjective of Quantity, Adjective of Number`
          },
          {
            qText:
              'The order of any person or thing is shown by _________________.',
            options: `Adjective of Number, Adjective of Quality, Adjective of Quantity`
          },
          {
            qText:
              'When adjective is used as a part of the predicate, it is called a ______________.',
            options: `predicative adjective, attributive adjective, demonstrative adjective`
          },
          {
            qText:
              'When adjective is used to describe the attribute of the noun, it is called an ________________.',
            options: `attributive adjective, predicative adjective, possessive adjective`
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
        text: `The *excied* child opened the present. (excite)
The *blooming* flowers filled the room with fragrance. (bloom)
The *racing* car sped down the highway. (race)
The *falling* snowflakes covered the ground. (fall)
The *determined* athlete won the race. (determine)
The *crumbling* building was destroyed by the earthquake. (crumble)`
      }
    }
  ]
};
