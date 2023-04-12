export default {
  id: 'adverb-7',
  label: 'Adverb and Adverbials',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'Adverbs',
      data: {
        title: 'Adverbs',
        text: [
          `Adverbs are words that add meaning to the verbs, adjectives or to an adverb itself.
# Types of Adverbs
1. Adverbs of Time: They are used to reflect time.`,
          {
            type: 'html',
            text: `<b>Examples</b>: I went there <b>early</b>.<br>
She will come <b>tomorrow</b>.<br>
They include <b>ago</b>, <b>after</b>, <b>already</b>, <b>late</b>, <b>afterward</b>, <b>early</b>, <b>immediately</b>, <b>now</b>, <b>soon</b>, <b>then</b>, <b>shortly</b>, <b>quickly</b>, <b>recently</b>, <b>today</b>, <b>tonight</b>, <b>tomorrow</b>, <b>yesterday</b> etc.`
          },
          `2. Adverbs of Frequency: They are used to show how often an event takes place.`,
          {
            type: 'html',
            text: `<b>Examples</b>: I have seen him <b>once</b>.<br>
You <b>always</b> make a noise.<br>
They include <b>seldom</b>, <b>often</b>, <b>never</b>, <b>ever</b>, <b>again</b>, <b>once</b>, <b>twice</b>, <b>thrice</b>, <b>always</b>, <b>frequently</b>, <b>usually</b> etc.`
          },
          `3. Adverbs of Manner: They are used to show how or in what manner an event takes place.`,
          {
            type: 'html',
            text: `<b>Examples</b>: I shall go there <b>certainly</b>.<br>
Read the facts <b>carefully</b>.<br>
They include <b>peacefully</b>, <b>quickly</b>, <b>certainly</b>, <b>loudly</b>, <b>well</b>, <b>carefully</b>, <b>gladly</b>, <b>so</b>, <b>thus</b>, <b>badly</b>, <b>fast</b> etc.`
          },
          `4. Adverbs of Place: They are used to show the place where an action took place.`,
          {
            type: 'html',
            text: `<b>Examples</b>: God is present <b>everywhere</b>.<br>
You may come <b>forward</b>.<br>
They include <b>near</b>, <b>far</b>, <b>away</b>, <b>anywhere</b>, <b>here</b>, <b>there</b>, <b>somewhere</b>, <b>nowhere</b>, <b>forward</b>, <b>backward</b>, <b>in</b>, <b>up</b>, <b>out</b>, <b>down</b>, <b>above</b>, <b>below</b>, <b>inside</b>, <b>outside</b>, <b>within</b>, <b>without</b>, <b>everywhere</b> etc.`
          },
          `5. Adverbs of Quantity/Extent/Degree: They are used to show 'how much'. `,
          {
            type: 'html',
            text: `<b>Examples</b>: Your dress is <b>fantastically</b> awesome.<br>
Poorab is <b>perfectly</b> fine now.<br>
They include <b>partly</b>, <b>fully</b>, <b>pretty</b>, <b>as</b>, <b>almost</b>, <b>very</b>, <b>more</b>, <b>much</b>, <b>so</b>, <b>enough</b>, <b>any</b>, <b>none</b>, <b>too</b>, <b>rather</b>, <b>little</b>, <b>quite</b>, <b>wholly</b>, <b>perfectly</b> etc.`
          },
          `6. Adverbs of Reason: They are used to show a reason for any action.`,
          {
            type: 'html',
            text: `<b>Examples</b>: He was late <b>so</b> he was punished.<br>
I didn't go to the office <b>because</b> it was raining.<br>
They include <b>hence</b>, <b>therefore</b>, <b>because</b>, <b>since</b>, <b>on account of</b>, <b>as a result</b>, <b>consequently</b>, <b>thereby</b> etc.`
          },
          `7. Interrogative Adverbs: They show a sense of question.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>When</b> do they visit the zoo?<br>
<b>How</b> can I help you?<br>
They include <b>where</b>, <b>when</b>, <b>why</b>, <b>how</b>, <b>how much</b>, <b>how far</b>, <b>how long</b>, <b>how many</b>, <b>how often</b>, etc.`
          },
          `8. Relative Adverbs: They are used to join two sentences or two clauses. Relative adverbs indicate their antecedents in the process of joining.`,
          {
            type: 'html',
            text: `<b>Examples</b>: e.g. This is the <b>way</b> to prepare a chart.<br>
She let me know <b>how</b> to cook halwa.<br>
They include <b>why</b>, <b>how</b>, <b>where</b>, <b>when</b> etc.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify - Adverbs',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Identify the adverbs from the below sentences'
      },
      data: [
        `The boy is *too* careless. That is why he keeps losing his stuff.
The winds are *very* strong. The pots were pushed off the wall by the wind.
The baby slept *soundly* while the other kids went out to play.
The soldiers fought the war *valiantly*.
Joey *always* tries his best to achieve his goal.`,

        `*Surely* you are mistaken. Ravi would never steal anything.
The movie is to end *soon*.
Your friend messaged *again*.
I did my homework *already*. Now, I am going out to play.
I was *rather* busy. I didn't see your calls.`,

        `He was late *so* he was punished.
We looked for the lost puppy *everywhere*.
We do *not* know her. She just tagged along with us for no reason.
*How* long is the trip? I am tired of sitting in the car.
Monica *seldom* visits here.`,

        `I went there *early* to help set the party.
She will come *tomorrow*. There were no seats available on the flight to Mumbai today.
I have seen him *once*.
You *always* make a noise.
She let me know *how* to cook halwa.`,

        `Poorab is *perfectly* fine now.
*When* do they visit the zoo?
*How* can I help you?
This is the *way* to prepare a chart.
I didn't go to the office *because* it was raining.`
      ]
    },
    {
      id: 'fillup-adverb',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using suitable adverbs.'
      },
      lockAfter: 2,
      data: [
        `The lady purchased the clothes from the market *quickly*. (quick)
The employees are working *very* hard these days.
Harry writes *clearly*. (clear)
The author writes the story *very* well.
She cooks *tasty* food. (taste)`,

        `Stand *there* now. Come forward only when you are called by the teacher.
My mother is *here*. She was late because of the traffic.
My cat follows me *everywhere* now.
*When* do they visit the zoo?
*How* can I help you?`,

        `*When* did the ship reach there?
*How* did he manage to escape from there?
*Where* were you going today?
*Why* are you so happy?
*Why* do you tell him everything?`,

        `My elder brother *easily* passed the examinations this year. (easy)
This dog has been treated *badly* by their owner. (bad)
He behaved with everyone *nicely* at the party. (nice)
I have done this work *beautifully*. (Beautiful)
The old woman prepared food *happily* for the guest. (happy)`,

        `He was driving the car *carefully* on the crowded road of the city. (careful)
The cook has *easily* prepared the dinner for everyone. (easy)
She *usually* comes here with an incomplete task. (usual)
Doctor, the patient is serious. Please attend to her *immediately*. (immediate)
He *loyally* served his country. (loyal)`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Adjective to Adverb',
      title: 'Convert the given adjectives into corresponding adverbs.',
      data: [
        `cheap| cheaply
quick| quickly
slow| slowly
easy| easily
angry| angrily`,

        `happy| happily
lucky| luckily
probable| probably
terrible| terribly
gentle| gently`,

        `basic| basically
tragic| tragically
economic| economically
Loud | loudly
Sad | sadly`,

        `Careful | carefully
Beautiful | beautifully
Strong | strongly
Brave | bravely
Quiet | quietly
Happy | happily`,

        `Polite | politely
Clear | clearly
Kind | kindly
Accurate | accurately
Simple | simply
Intense | intensely`
      ]
    },
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
Geeta gave up her marketing job four years *ago (since)*.`,

        `The train arrived *promptly (prompt)* at the station.
The little boy walked *carefully (carefull)* across the bridge.
She smiled *happily (happier)* when she received the gift.
The athlete jumped *high (highly)* over the hurdle.
The musician played the guitar *skillfully (with skill)*.`,

        `The car moved *slowly (slow)* through the heavy traffic.
The detective examined the evidence *thoroughly (thorough)*.
The bird flew *gracefully (with grace)* in the sky.
The child ate the cake *greedily (with greed)*.
The audience applauded *enthusiastically (with enthusiasm)* after the performance.`,

        `The soldier marched *bravely (braver)* toward the enemy.
The painter mixed the colors *carefully (with care)* to get the right shade.
The teacher explained the concept *simply (simpler)* for the students to understand.
The dog barked *loudly (louder)* at the intruder.
The comedian told the joke *humorously (humourfully)* and made everyone laugh.`
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
Kind ⇒ *Kindly*`,

        `Bitter ⇒ *Bitterly*
Anxious ⇒ *Anxiously*
Intent ⇒ *Intently*
Merry ⇒ *Merrily*
Terrible ⇒ *Terribly*`,

        `Aggressive - *Aggressively*
Comfortable - *Comfortably*
Confident - *Confidently*
Dangerous - *Dangerously*
Difficult - *Difficultly*`,

        `Easy - *Easily*
Efficient - *Efficiently*
Happy - *Happily*
Intense - *Intensely*
Irregular - *Irregularly*`,

        `Pleasant - *Pleasantly*
Quick - *Quickly*
Sincere - *Sincerely*
Tense - *Tensely*
Wise - *Wisely*`
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
        ],
        [
          `She sings beautifully.
He walked slowly towards the door.
They spoke softly so as not to wake the baby.
The car drove dangerously fast on the highway.
She quickly solved the math problem.`,

          `She sings. 
He walked towards the door. 
The car drove fast on the highway.
She solved the math problem.`
        ],
        [
          `The dog barked loudly at the mailman.
He patiently waited for his turn.
She confidently delivered the speech in front of the audience.
The athlete performed impressively at the Olympic Games.
The baby slept peacefully through the night.`,

          `The dog barked at the mailman.
He waited for his turn.
She delivered the speech in front of the audience.
The athlete performed at the Olympic Games.
The baby slept through the night.`
        ],
        [
          `They carefully crossed the street while holding hands.
The train arrived unexpectedly early at the station.
The teacher explained the lesson clearly to the class.
The boy ran happily towards his mother.
The couple danced gracefully at their wedding reception.`,

          `They crossed the street while holding hands.
The train arrived early at the station.
The teacher explained the lesson to the class.
The boy ran towards his mother.
The couple danced at their wedding reception.`
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
He does not work *as hard as you think*.`,

        `*Although it was raining*, he still went for a walk.
*While she was studying*, her brother was watching TV.
*Because she was tired*, she went to bed early.
*Whenever he sees a dog*, he gets scared.
*After we finish our homework*, we can play video games.`
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
Rahul saved money to *buy a car*.`,

        `*In the morning*, I like to have a cup of coffee.
*By the end of the day*, she was exhausted.
*With a smile on her face*, she greeted her friends.
*On the top shelf*, there is a book that I want to read.
*In the middle of the night*, the phone rang.`,

        `*At the end of the movie*, everyone applauded.
*With great effort*, he climbed to the top of the mountain.
*In a hurry*, she left the house without her keys.
*In the distance*, we could see the mountains.
*By accident*, he spilled his drink on the carpet.`,

        `*At the last minute*, they decided to cancel the trip.
*With a loud noise*, the door slammed shut.
*In the corner of the room*, there was a spider web.
*At the age of 18*, she moved away from home.
*By the light of the moon*, we went for a walk in the park.`
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
Rahul saved money to *buy a car*.`,

        `She waited for the bus *at the bus stop*.
He finished his homework *late at night*.
The flowers bloomed *in the springtime*.
They played soccer *on the beach*.
The cat slept *on the windowsill*.`,

        `The children ran *in the park*.
The sun sets *in the west*.
The birds sang *in the morning*.
The teacher explained the lesson *clearly to the class*.
The dog barked *loudly at the mailman*.`,

        `She wrote a letter * to her friend yesterday*.
The car drove *down the winding road*.
They watched a movie *last night at the theater*.
He ate breakfast *quickly before work*.
She danced *gracefully at the ball*.`
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
