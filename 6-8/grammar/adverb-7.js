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
            text: `Eg: I went there <i>early</i>.<br>
She will come <i>tomorrow</i>.<br><br>
They include <i>ago</i>, <i>after</i>, <i>already</i>, <i>late</i>, <i>afterward</i>, <i>early</i>, <i>immediately</i>, <i>now</i>, <i>soon</i>, <i>then</i>, <i>shortly</i>, <i>quickly</i>, <i>recently</i>, <i>today</i>, <i>tonight</i>, <i>tomorrow</i>, <i>yesterday</i>.`
          },
          `2. Adverbs of Frequency: They are used to show how often an event takes place.`,
          {
            type: 'html',
            text: `Eg: I have seen him <i>once</i>.<br>
You <i>always</i> make a noise.<br><br>
They include <i>seldom</i>, <i>often</i>, <i>never</i>, <i>ever</i>, <i>again</i>, <i>once</i>, <i>twice</i>, <i>thrice</i>, <i>always</i>, <i>frequently</i>, <i>usually</i>.`
          },
          `3. Adverbs of Manner: They are used to show how or in what manner an event takes place.`,
          {
            type: 'html',
            text: `Eg: I shall go there <i>certainly</i>.<br>
Read the facts <i>carefully</i>.<br><br>
They include <i>peacefully</i>, <i>quickly</i>, <i>certainly</i>, <i>loudly</i>, <i>well</i>, <i>carefully</i>, <i>gladly</i>, <i>so</i>, <i>thus</i>, <i>badly</i>, <i>fast</i>.`
          },
          `4. Adverbs of Place: They are used to show the place where an action took place.`,
          {
            type: 'html',
            text: `Eg: God is present <i>everywhere</i>.<br>
You may come <i>forward</i>.<br><br>
They include <i>near</i>, <i>far</i>, <i>away</i>, <i>anywhere</i>, <i>here</i>, <i>there</i>, <i>somewhere</i>, <i>nowhere</i>, <i>forward</i>, <i>backward</i>, <i>in</i>, <i>up</i>, <i>out</i>, <i>down</i>, <i>above</i>, <i>below</i>, <i>inside</i>, <i>outside</i>, <i>within</i>, <i>without</i>, <i>everywhere</i>.`
          },
          `5. Adverbs of Quantity/Extent/Degree: They are used to show 'how much'. `,
          {
            type: 'html',
            text: `Eg: He <i>barely</i> passed his exams because he didn't study enough.<br>
I <i>always</i> enjoy spending time with my family.<br><br>
They include <i>partly</i>, <i>fully</i>, <i>pretty</i>, <i>as</i>, <i>almost</i>, <i>very</i>, <i>more</i>, <i>much</i>, <i>so</i>, <i>enough</i>, <i>any</i>, <i>none</i>, <i>too</i>, <i>rather</i>, <i>little</i>, <i>quite</i>, <i>wholly</i>, <i>perfectly</i>.`
          },
          `6. Adverbs of Reason: They are used to show a reason for any action.`,
          {
            type: 'html',
            text: `Eg: He was late <i>so</i> he was punished.<br>
I didn't go to the office <i>because</i> it was raining.<br><br>
They include <i>hence</i>, <i>therefore</i>, <i>because</i>, <i>since</i>, <i>on account of</i>, <i>as a result</i>, <i>consequently</i>, <i>thereby</i>.`
          },
          `7. Interrogative Adverbs: They show a sense of question.`,
          {
            type: 'html',
            text: `Eg: <i>When</i> do they visit the zoo?<br>
<i>How</i> can I help you?<br><br>
They include <i>where</i>, <i>when</i>, <i>why</i>, <i>how</i>, <i>how much</i>, <i>how far</i>, <i>how long</i>, <i>how many</i>, <i>how often</i>.`
          },
          `8. Relative Adverbs: They serve as a bridge between two sentences or clauses. They also give more information about the antecedent (the noun or pronoun that the clause modifies).`,
          {
            type: 'html',
            text: `Eg: She let me know <i>how</i> to cook halwa.<br><br>
They include <i>why</i>, <i>how</i>, <i>where</i>, <i>when</i>.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-adv',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is an adverbial?`,
            options: `A word or phrase that modifies a verb, adjective, or other adverb
A type of noun
A type of adjective
A type of pronoun`
          },
          {
            qText: `Which type of adverb is used to show how often an event takes place?`,
            options: `Adverbs of Frequency, Adverbs of Manner, Adverbs of Place`
          },
          {
            qText: `Which type of adverb is used to show how an event takes place?`,
            options: `Adverbs of Manner, Adverbs of Place, Adverbs of Frequency `
          },
          {
            qText: `What does an adverbial answer?`,
            options: `How is the action being performed?
Who or what is performing the action?
What is being performed?`
          },
          {
            qText: `What is a degree adverb?`,
            options: `An adverb that describes the intensity of something
An adverb that describes how something is done
An adverb that describes when something is done
An adverb that describes how often something is done`
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

        `*Surely* you are mistaken. Ravi will not steal anything.
The movie is to end *soon*.
Your friend messaged *again*.
I am going out to play. I did my homework *already*.
I was *rather* busy. I didn't see your calls.`,

        `He was *so* late that he was punished.
We looked for the lost puppy *everywhere*.
She *hardly* ever exercises, which is why she feels tired all the time.
*How* long is the trip? I am tired of sitting in the car.
Monica *seldom* visits here.`,

        `I went there *early* to help set the party.
She will come *tomorrow*. There were no seats available on the flight to Mumbai today.
I have seen him *once*.
You *always* make a noise.
He *completely* forgot about the meeting and missed it.`,

        `Poorab is *perfectly* fine now.
*When* do they visit the zoo?
*How* can I help you?
She let me know *how* to cook halwa.
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

        `My elder brother *easily* passed the examinations this year. (easy)
This dog has been treated *badly* by their owner. (bad)
The party was *incredibly* loud and went on until the early hours of the morning. (incredible)
I have done this work *beautifully*. (beautiful)
The old woman prepared food *happily* for the guest. (happy)`,

        `He was driving the car *carefully* on the crowded road of the city. (careful)
The cook has *easily* prepared the dinner for everyone. (easy)
She *usually* comes here with an incomplete task. (usual)
Doctor, the patient is serious. Please attend to her *immediately*. (immediate)
He *loyally* served his country. (loyal)`,

        `The teacher spoke very *loudly* to get the attention of the students in the back of the classroom. (loud)
He *completely* forgot about the meeting and missed it. (complete)
He *barely* passed his exams because he didn't study enough. (bare)
She *hardly* ever exercises, which is why she feels tired all the time. (hard)
She *occasionally* goes to the gym, but usually prefers to exercise at home. (occasion)`,

        `Stand *there* now. Come forward only when you are called by the teacher.
My mother is *here*. She was late because of the traffic.
My cat follows me *everywhere* now.
*When* do they visit the zoo?
*How* can I help you?`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete Word - Adjective to Adverb',
      commonData: {
        title: 'Convert the given adjectives into corresponding adverbs.'
      },
      lockAfter: 2,
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

        `careful | carefully
beautiful | beautifully
strong | strongly
brave | bravely
quiet | quietly`,

        `polite | politely
clear | clearly
kind | kindly
accurate | accurately
intense | intensely`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Position of Adverbs',
        text: [
          `1. Adverbs of manner, time and place are usually placed after the verb, or after the object, if there is one.`,
          {
            type: 'html',
            text: `Eg - The tiger attacked the deer <i>ferociously</i>.`
          },
          `2. Adverbs of frequency are placed between the subject and the verb or between the auxiliary and main verb.`,
          {
            type: 'html',
            text: `Eg - She <i>never</i> gets up before eight o'clock.`
          },
          `3. With forms of the verb be, the adverb is placed after the verb.`,
          {
            type: 'html',
            text: `Eg - I am <i>usually</i> at the theatre on Saturdays.`
          },
          `4. With the auxiliaries 'have to' and 'used to' the adverb is put before them.`,
          {
            type: 'html',
            text: `Eg - I <i>often</i> have to accompany my parents to family functions.`
          },
          `# Adverbials
Adverbials are words or word groups that do the work of an adverb. `,
          {
            type: 'html',
            text: `Eg - The boy <i>fought heroically</i>.`
          },
          `The term adverbial refers to a word, phrase or clause that functions like an adverb. Besides adverbs themselves, adverbials include adverb phrases and adverb clauses. 
Adverbial Phrases replace the adverb with a phrase that acts as an adverb. Adverbial phrases can be classified into those of time, manner, place, frequency and purpose. `,
          {
            type: 'html',
            text: `For example, the adverb <i>politely</i> can be replaced with the adverbial phrase <i>in a polite manner</i>.`
          },
          `Adverbials can also be clauses, containing a subject and a main verb. An adverbial clause is a dependent clause that does the work of an adverb. Usually, a subordinating conjunction introduces an adverbial clause.`,
          {
            type: 'html',
            text: `Eg - I met Priya <i>before she started her new job</i>`
          },
          `# Order of adverbials
If there is more than one adverbial after a verb, then their order will be :-
adverbs of manner -> place -> frequency -> time -> purpose`,
          {
            type: 'html',
            text: `Eg- He prayed <i>fervently</i> (manner) <i>at the church</i> (place) <i>yesterday</i> (time).`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-adverb',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is an adverb?`,
            options: `A word that modifies the meaning of a verb or an adjective or another adverb, A word that functions as a subject in a sentence, A word that functions as an object in a sentence, A word that functions as a predicate in a sentence`
          },
          {
            qText: `Where are adverbs of manner, time and place usually placed in a sentence?`,
            options: `After the verb or after the object if there is one, Before the verb, After the object, Before the subject`
          },
          {
            qText: `With forms of the verb be, where is the adverb usually placed?`,
            options: `After the verb, Before the subject, Before the verb, After the subject `
          },
          {
            qText: `What are adverbial clauses?`,
            options: `Dependent clauses that function as adverbs, Independent clauses that function as adverbs, Dependent clauses that function as adjectives `
          },
          {
            qText: `How are adverbials ordered if there is more than one after a verb?`,
            options: `Manner -> place -> frequency -> time -> purpose, Time -> frequency -> manner -> place -> purpose, Purpose -> place -> manner -> frequency -> time `
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fillup',
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
The musician played the guitar *skillfully (with skills)*.`,

        `The car moved *slowly (slow)* through the heavy traffic.
The detective examined the evidence *thoroughly (thorough)*.
The bird flew *gracefully (with grace's)* in the sky.
The child ate the cake *greedily (greed)*.
The audience applauded *enthusiastically (enthusiasm)* after the performance.`,

        `The soldier marched *bravely (braver)* toward the enemy.
The painter mixed the colors *carefully (care)* to get the right shade.
The teacher explained the concept *simply (simpler)* for the students to understand.
The dog barked *loudly (louder)* at the intruder.
The comedian told the joke *humorously (humourfully)* and made everyone laugh.`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Fillup - Adverbs from Adjectives',
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

        `Aggressive ⇒ *Aggressively*
Comfortable ⇒ *Comfortably*
Confident ⇒ *Confidently*
Dangerous ⇒ *Dangerously*
Difficult ⇒ *Difficultly*`,

        `Easy ⇒ *Easily*
Efficient ⇒ *Efficiently*
Happy ⇒ *Happily*
Intense ⇒ *Intensely*
Irregular ⇒ *Irregularly*`,

        `Pleasant ⇒ *Pleasantly*
Quick ⇒ *Quickly*
Sincere ⇒ *Sincerely*
Tense ⇒ *Tensely*
Wise ⇒ *Wisely*`
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
Her friend will probably buy her some flowers.
My uncle is definitely moving to Stockholm soon.`,

          `The children play football. 
We went to the cinema. 
John fell off the bike. 
Her friend will buy her flowers. 
My uncle is moving to Stockholm.`
        ],
        [
          `She sings beautifully.
He walked slowly towards the door.
They spoke softly so as not to wake the baby.
The car drove dangerously fast on the highway.
She quickly solved the math problem.`,

          `She sings. 
He walked toward the door. 
The car drove on the highway.
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
She delivered the speech.
The athlete performed at the Olympic Games.
The baby slept through the night.`
        ],
        [
          `They carefully crossed the street while holding hands.
The train arrived unexpectedly early at the station.
The teacher explained the lesson clearly to the class.
The boy ran happily towards his mother.
The couple danced gracefully at their wedding reception.`,

          `They crossed the street.
The train arrived at the station.
The teacher explained the lesson to the class.
The boy ran toward his mother.
The couple danced at their wedding reception.`
        ]
      ]
    },
    {
      type: 'selectWord',
      label: 'Adverbial Clause - Identify',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the adverbial clause in the sentence',
        multiSelect: true
      },
      data: [
        `*After the crop is harvested*, it is sold in the market.
Don't disturb her *when she is singing*.
I will follow you *wherever you go*.
She has hidden the box *where it cannot be found*.
Rina learned English *so that she could get a better job*.
Ashwin called Sophie *so that he could get directions*.`,

        `A new club was formed *in order to discuss politics*. 
He is so kind-hearted *that everybody loves him*.
I will help you *because you are my true friend*.
Rahul did not call Tina *because he felt guilty*.
*If you save money*, you can buy a bigger house.
*Unless you study harder*, you will fail.``I will free you *on condition that you pay a fine*.
*Though he is not rich*, he gives to charity.
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
      label: 'Adverbial Phrase - Identify',
      id: 'select-word-3',
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
Tina bought a lovely gift *for her friend*.
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
Tina bought a lovely gift *for her friend*.
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
      type: 'makeSentence',
      label: 'Complete the Sentences',
      id: 'make-sentence',
      commonData: {
        title:
          'Complete the sentences using suitable adverbial clauses. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is of an the them us was'
      },
      data: [
        `______________________, it is sold in the market. | after the crop is harvested
Don't disturb her _____________________. | when she is singing
I will follow you _________________. | wherever you go
She has hidden the box ____________________. | where it cannot be found
__________________, he gives to charity. | though he is not rich`,

        `I will help you __________________. | because you are my true friend
Rahul did not call Tina _________________. | because he felt guilty
_______________, you can buy a bigger house. | if you save money
_________________, you will fail. | unless you study harder
I will free you __________________. | on condition that you pay a fine`,

        `_____________________, she had to give up. | although she tried very hard
Tina is much younger _____________. | than she looks
He does not work _______________________. |  as hard as you think`
      ]
    },
    /*{
label: 'Fill in the blanks - 2',
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
},*/
    {
      id: 'yes-no-2',
      label: 'Yes or No',
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
      id: 'sorting',
      label: 'Order of Adjectives',
      type: 'sorting',
      commonData: {
        title:
          'Arrange the words in the correct order and form meaningful sentences'
      },
      lockAfter: 1,
      data: [
        `He, prayed, fervently, at, the, church, yesterday.`,
        `They, laughed, loudly, and, happily, at, the, funny, movie.`,
        `You, start, off, slowly, in, the, beginning.`,
        `She, plays, the, piano, really, well.`,
        `She, sings, beautifully, in, the, church, choir, every, Sunday.`,
        `He, ran, quickly, through, the, park, to, catch, the, bus.`,
        `They, speak, English, fluently, and, confidently, in, public.`,
        `She, worked, hard, all, day, yesterday, at, the, office.`,
        `He, speaks, Spanish, very, well, and, with, great, enthusiasm.`,
        `She, dances, gracefully, and, elegantly, on, the, stage. `
      ]
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
            text: ` She stood *on the bridge*.
I buy at least two dresses *every month*.
She goes on holiday *twice a year*.
Tina bought a lovely gift *for her friend*.
Rahul saved money *to buy a car*.`
          },
          {
            name: 'Clause',
            text: `*After the crop is harvested*, it is sold in the market.
Don't disturb her *when she is singing*.
I will follow you *wherever you go*.
She has hidden the box *where it cannot be found*.`
          }
        ]
      }
    }
  ]
};
