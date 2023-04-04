export default {
  id: 'adverb-8',
  label: 'Adverb and Adverbials',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Types of Adverbs',
        text: [
          `# Adverbs and Adverbials
An adverb is a word that modifies the meaning of a verb or an adjective or another adverb.
# Position of Adverbs
1. Adverbs of manner, time and place are usually placed after the verb, or after the object, if there is one.`,
          {
            type: 'html',
            text: `<b>Example</b> - The tiger attacked the deer <b>ferociously</b>.`
          },
          `2. Adverbs of frequency are placed between the subject and the verb or between the auxiliary and main verb.`,
          {
            type: 'html',
            text: `<b>Example</b> - She <b>never</b> gets up before eight o'clock.`
          },
          `3. With forms of the verb be, the adverb is placed after the verb.`,
          {
            type: 'html',
            text: `<b>Example</b> - I am <b>usually</b> at the theatre on Saturdays.`
          },
          `4. With the auxiliaries 'have to' and 'used to' the adverb is put before them.`,
          {
            type: 'html',
            text: `<b>Example</b> - I <b>often</b> have to accompany my parents to family functions.`
          },
          `# Adverbials
Adverbials are words or word groups that do the work of an adverb. `,
          {
            type: 'html',
            text: `<b>Example</b> - The boy <b>fought heroically</b>.`
          },
          `The term adverbial refers to a word, phrase or clause that functions like an adverb. Besides adverbs themselves, adverbials include adverb phrases and adverb clauses. 
Adverbial Phrases replace the adverb with a phrase that acts as an adverb. Adverbial phrases can be classified into those of time, manner, place, frequency and purpose. `,
          {
            type: 'html',
            text: `For example, the adverb <b>politely</b> can be replaced with the adverbial phrase <b>in a polite manner</b>.`
          },
          `Adverbials can also be clauses, containing a subject and a main verb. An adverbial clause is a dependent clause that does the work of an adverb. Usually, a subordinating conjunction (because, since, after, before, so that, etc.) introduces an adverbial clause.`,
          {
            type: 'html',
            text: `<b>Example</b> - I met Priya <b>before she started her new job</b>`
          },
          `# Order of adverbials
If there is more than one adverbial after a verb, then their order will be:-
adverbs of manner -> place -> frequency -> time -> purpose`,
          {
            type: 'html',
            text: `<b>Example</b>- He prayed <b>fervently</b> (manner) <b>at the church</b> (place) <b>yesterday</b> (time).`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Adverbs',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with suitable words.`
      },
      data: [
        `My sister is feeling *really (many)* low today. 
Keep this dustbin *outside (everywhere)*. 
Rishu was *much (many)* annoyed with his behavior. 
Meenu spoke *very (much)* slowly. 
Kapil complete his homework *quietly (quiet)*.`,

        `They could not find him *anywhere (nowhere)*. 
Sonu runs *faster (fastly)* than Harsh. 
It was *too (very)* cold to drink. 
I seldom or *never (ever)* refused the offer. 
Geeta gave up her marketing job four years *ago (since)*.`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Adverbs from Adjectives',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Form Adverbs from the given Adjectives.'
      },
      lockAfter: 2,
      data: [
        `Annual ⇒ *Annually*
Jubilant ⇒ *Jubilant*
Almost ⇒ *Almost*
Idiotic ⇒ *Idiotically*
Kind ⇒ *Kindly*
Bitter ⇒ *Bitterly*`,

        `Anxious ⇒ *Anxiously*
Intent ⇒ *Intently*
Merry ⇒ *Merrily*
Terrible ⇒ *Terribly*`
      ]
    },
    {
      label: 'Yes or No',
      type: 'classifySentence',
      id: 'yes-no',
      commonData: {
        title: 'Do the following sentences contain adverbs?',
        types: ['Yes', 'No']
      },
      data: [
        [
          `Our friends must also write a test.
I was only joking.
Did you both enjoy the flight?
Mary hardly ever watches TV.
He drives his car carefully.`,

          `Our friends must write a test.
I was joking. 
Did you enjoy the flight? 
Mary watches TV. 
He drives his car. `
        ],
        [
          `The children play football in the garden.
We went to the cinema yesterday.
John almost fell off the bike.
Her boyfriend will probably buy her some flowers.
My uncle is definitely moving to Stockholm soon.`,

          `The children play football. 
We went to the cinema. 
John fell off the bike. 
Her boyfriend will buy her some flowers. 
My uncle is moving to Stockholm soon.`
        ]
      ]
    },
    {
      type: 'selectWord',
      label: 'Adverbial Clause',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Identify the adverbial clause in the sentence',
        multiSelect: true
      },
      data: [
        `*After the crop is harvested*, it is sold in the market.
Don't disturb her *when she is singing*.
I will follow you *wherever you go*.
She has hidden the box *where it cannot be found*.`,

        `Rina learned English *so that she could get a better job*.
Ashwin called Sophie *so that he could get directions*.
A new club was formed *in order to discuss politics*. 
He is so kind-hearted *that everybody loves him*.`,

        `I will help you *because you are my true friend*.
Rahul did not call Tina *because he felt guilty*.
*If you save money*, you can buy a bigger house.
*Unless you study harder*, you will fail.
I will free you *on condition that you pay a fine*.`,

        `*Though he is not rich*, he gives to charity.
*Although she tried very hard*, she had to give up.
Tina is much younger *than she looks*.
He does not work *as hard as you think*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Adverbial Phrase',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the adverbial phrase in the sentence.',
        multiSelect: true
      },
      data: [
        `We have to finish this assignment *before the holidays*.
We will meet *in the afternoon*.
Raghu hit the ball *with great power*.
The boy answered *in a proud manner*.
The man lives *next door*.`,

        `She stood *on the bridge*.
I buy at least two dresses *every month*.
She goes on holiday *twice a year*.
Tina bought a lovely gift *for her husband*.
Rahul saved money to *buy a car*.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using suitable adverbial phrases.'
      },
      data: [
        `We have to finish this assignment *before the holidays*.
We will meet *in the afternoon*.
Raghu hit the ball *with great power*.
The boy answered *in a proud manner*.
The man lives *next door*.`,

        `She stood *on the bridge*.
I buy at least two dresses *every month*.
She goes on holiday *twice a year*.
Tina bought a lovely gift *for her husband*.
Rahul saved money to *buy a car*.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using suitable adverbial clauses.'
      },
      data: [
        `*After the crop is harvested*, it is sold in the market.
Don't disturb her *when she is singing*.
I will follow you *wherever you go*.
She has hidden the box *where it cannot be found*.`,

        `I will help you *because you are my true friend*.
Rahul did not call Tina *because he felt guilty*.
*If you save money*, you can buy a bigger house.
*Unless you study harder*, you will fail.
I will free you *on condition that you pay a fine*.`,

        `*Though he is not rich*, he gives to charity.
*Although she tried very hard*, she had to give up.
Tina is much younger *than she looks*.
He does not work *as hard as you think*.`
      ]
    },
    {
      id: 'yes-no-2',
      label: 'Order of Adjectives',
      type: 'classifySentence',
      data: {
        title: 'Is the order of adverbs correct in the following sentences?',
        types: [
          {
            name: 'Yes',
            text: ` He prayed fervently at the church yesterday.
Priya swims enthusiastically in the pool every morning before dawn to stay fit.
You start off slowly in the beginning.
She plays the piano really well. I've heard her.`
          },
          {
            name: 'No',
            text: `He frevently prayed yesterday at the church.
Priya enthusiastically swims every morning in the pool to stay fit before dawn.
You start off in the begening slowly.
She plays very well the piano. I've heard her.`
          }
        ]
      }
    },
    {
      id: 'phrase-clause',
      label: 'Phrase or Clause',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences based on the presence of adverbial phrases or adverbial clauses.',
        types: [
          {
            name: 'Phrase',
            text: ` She stood on the bridge.
I buy at least two dresses every month.
She goes on holiday twice a year.
Tina bought a lovely gift for her husband.
Rahul saved money to buy a car.`
          },
          {
            name: 'Clause',
            text: `After the crop is harvested, it is sold in the market.
Don't disturb her when she is singing.
I will follow you wherever you go.
She has hidden the box where it cannot be found.`
          }
        ]
      }
    }
  ]
};
