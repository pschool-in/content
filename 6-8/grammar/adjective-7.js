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
Adjectives can be formed by adding '-ly' to their root word. These adjectives describe how something is done.`,
          {
            type: 'html',
            text: `Eg: <i>quickly</i>, <i>carefully</i>, <i>quietly</i>, <i>happily</i>, <i>lazily</i>`
          },
          `# Participial Adjective
Participial adjectives are formed from the past participle (-ed) or present participle (-ing) of a verb.`,
          {
            type: 'html',
            text: `Eg : <i>bored</i>, <i>amazed</i>, <i>confused</i>, <i>exciting</i>, <i>exhausted</i>`
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
            options: `*Coffee, Mug, None of the above`
          },
          {
            qText: `Which of the following is a participial adjective?`,
            options: `*Exciting, Quick, Beautiful, All of the above`
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
He walked *six* kilometers.
Who was the *first* Prime Minister of India?
The students in the *last* row are talkative.
Are there *any* apples left in the fridge?`,

        `She ate only *half* a slice of pizza.
My uncle got job offer letters from *five* companies.
I will finish the *whole* book today.
We should eat *healthy* food.
The students have completed their *project* work.`,

        `Rohan made *several* calls from his mobile.
We participated in the *art* competition.
May I have *three* coffee, please?
There are *many* colleges across India.
A *few* people are allowed inside the room.`
      ]
    },
    {
      id: 'nouns',
      label: 'Identify',
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
              'When an adjective is used not in front of the noun, it is called a ______________.',
            options: `predicative adjective, attributive adjective, demonstrative adjective`
          },
          {
            qText:
              'When an adjective is used in front of the noun, it is called  ________________.',
            options: `an attributive adjective, a predicative adjective, a possessive adjective`
          }
        ]
      }
    },
    {
      id: 'fillup-adj-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with participial adjectives',
        text: `The *excited (excite)* child opened the present. 
The *blooming (bloom)* flowers filled the room with fragrance. 
The *racing (race)* car sped down the highway. 
The *falling (fall)* snowflakes covered the ground. 
The *determined (determine)* athlete won the race. `
      }
    }
  ]
};
