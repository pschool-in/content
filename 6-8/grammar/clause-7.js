export default {
  id: 'clause-7',
  label: 'Clauses and Phrases',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'clause-phrase',
      data: {
        title: 'Clauses',
        text: [
          `A group of words containing a subject and a finite verb is called a clause. It is formed when a subject and a predicate are combined to communicate an idea. 
# Features of a clause
1. A clause has a subject and a predicate.
2. A clause has a finite verb.
3. The subject may be both implicit and explicit.
# Subordinate Clause 
Subordinate clauses are introduced by a subordinating conjunction (because, though, however, before) or relative pronouns (who, what, which) that function as subordinating conjunctions. They are mainly of four types.
1. Noun/Nominal Clause: When a subordinate clause performs the function of a standard noun in a sentence, it is known as a noun clause or nominal clause. It can be the subject or the object of a transitive verb, subject complements, delayed subjects or appositives.`,
          {
            type: 'html',
            text: `Eg - Rahima said <i>that she wanted to become an author</i>.`
          },
          `2. Adjective/Relative Clause: An adjective clause does the work of an adjective and modifies the noun, pronoun, or noun equivalent in a main clause or a dependent clause.`,
          {
            type: 'html',
            text: `Eg - Nisha, <i>who is my neighbor</i>, is an actress`
          },
          `3. Adverb Clause: When a verb is modified in the main clause and made to do the work of an adverb, it is called an adverb clause.`,
          {
            type: 'html',
            text: `Eg - Hari <i>came to meet me at the station</i> as I was leaving.`
          },
          `Adverb clauses can be of various kinds, depending on their functions. (Adverb clause of time, place, reason, result, condition, concession, manner and degree)
4. Conditional/If Clause: They are used
a) to express cause-effect relationships for physical conditions.
b) to suggest habitual actions.
c) to show real conditions.
d) to show actions when certain conditions are fulfilled.
e) to show willingness and likelihood/probability.
f) for unreal conditions.
g) for imaginary conditions.`,
          {
            type: 'html',
            text: `Eg - <i>If you see dark clouds in the sky</i>, you can expect rain.<br>
<i>Unless you tell me your problems</i>, I cannot help.<br>
<i>If I had come to the party</i>, I could have met my friend.`
          },
          `A phrase, on the other hand, is a group of words that does not contain a subject and a predicate, and it does not express a complete thought. Phrases can function as nouns, adjectives, or adverbs in a sentence.
A noun phrase functions as a noun in a sentence. For example: "The big red ball."
An adjective phrase functions as an adjective in a sentence. For example: "The girl with the curly hair."
An adverb phrase functions as an adverb in a sentence. For example: "He drove the car very slowly."`,
          {
            type: 'table',
            title: ['Phrases', 'Clauses'],
            text: [
              `A phrase does not have a subject and predicate.
A phrase is not complete, and cannot make sense or convey meaning if it stands on its own.
There are five types of phrases namely noun phrase, adverb phrase, adjective phrase and prepositional phrase.
Eg: There is an unidentified vehicle in front of our house.`,

              `A clause has a subject and a predicate.
In some cases, a clause can look complete, convey meaning and make sense when separated from the sentence.
There are two types of clauses namely independent clauses and dependent clauses.
Eg: I am sick, so I am going to see the doctor.`
            ]
          }
        ]
      }
    },
    /*{
label: 'Multiple Choice Questions',
type: 'mcq',
id: 'mcq-cl-ph',
data: {
title: 'Multiple Choice Questions',
questions: [
{
qText: `What is a clause?`,
options: `A group of words that contains a subject and a predicate, A complete thought that does not contain a subject and a predicate`
},
{
qText: `What is a phrase?`,
options: `A group of words that does not contain a subject and a predicate, A group of words that can function as a sentence on its own`
},
{
qText: `What is the function of a noun phrase in a sentence?`,
options: `noun, verb, adjective, adverb`
},
{
qText: `What is the function of an adjective phrase in a sentence?`,
options: `adjective, noun, verb, adverb`
},
{
qText: `What is the function of an adverb phrase in a sentence?`,
options: `adverb, adjective, noun, verb`
}
]
}
},*/
    {
      type: 'selectWord',
      label: 'Identify Subordinate Clause',
      id: 'select-subordinate',
      lockAfter: 1,
      commonData: {
        title: 'Identify the subordinate clauses in the sentences given below.',
        multiSelect: true
      },
      data: [
        `The director is the person *to whom you should write*.
Marina did not make the same mistakes *that her sister did*.
*If you want the minister to inaugurate the function*, you must plan early.
I know the student *who stood first*.
*Before I leave for London*, I want to meet you.
*If I had enough money*, I would have bought that house.
I was not able to attend the function *because I was ill*.`,

        `He always acts *as if he knows everything*.
*What I need now* is a cup of coffee.
No one knew that *he was planning to resign*.
*That he is the only boy in the group* does not qualify him to be the leader.
The bus *that you have been waiting for* has arrived.
I know the person *who wrote that article*.
*If you see dark clouds in the sky*, you can expect rain.`,

        `This is the reason *why I don't like traveling*.
*Whenever you may settle down*, do not forget your roots.
*Unless you tell me your problems*, I cannot help.
*If I had come to the party*, I could have met my friend.
*If you exercise daily*, you will reduce weight faster.`
      ]
    },
    {
      id: 'adjective-conditional',
      label: 'Adjective or Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as an Adjective Clause or Conditional Clause.',
        types: [
          {
            name: 'Adjective',
            text: ` The director is the person to *whom you should write*.
The book, *which was written by my favorite author*, is on the shelf.
I know the person who *wrote that article*.
The book *that I borrowed from the library* is due next week.`
          },
          {
            name: 'Conditional',
            text: `*If you see dark clouds in the sky*, you can expect rain.
*Unless you tell me your problems*, I cannot help.
*If I had come to the party*, I could have met my friend.
*If you exercise daily*, you will reduce weight faster.`
          }
        ]
      }
    },
    {
      id: 'adverb-noun',
      label: 'Adverb or Noun',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as Adverb Clause or Noun Clause.',
        types: [
          {
            name: 'Adverb',
            text: `*Before I leave for London*, I want to meet you.
*Whenever you may settle down*, do not forget your roots.
I was not able to attend the function *because I was ill*.
He always acts *as if he knows everything*.`
          },
          {
            name: 'Noun',
            text: `*What I need now* is a cup of coffee.
No one knew *that he was planning to resign*.
*That he is the only boy in the group* does not qualify him to be the leader.
The researcher said *that he had found the chemical compound*.`
          }
        ]
      }
    },
    {
      id: 'mcq-clause',
      label: 'Choose the correct alternative',
      type: 'mcq',
      data: {
        title: 'Complete the sentences using appropriate clauses.',
        questions: [
          {
            qText: 'Sangitha sang _________________.',
            options: `like a professional, as a professional, thinking as a professional`
          },
          {
            qText: 'Akash hid the box ___________________.',
            options: `under the table, at under the table, in the table`
          },
          {
            qText: 'Kartika left the office _______________.',
            options: `after finishing her work, finishing her work, at finishing her work`
          },
          {
            qText: 'Parvathi is a girl ______________________.',
            options: `who is good at dance, is good at dance, good at dance`
          },
          {
            qText: '____________________, we can go home together.',
            options: `If we meet after class, We meet after class, Meet after class`
          }
        ]
      }
    },
    {
      label: 'Clause or Phrase',
      type: 'classifySentence',
      id: 'clause-phrase-2',
      lockAfter: 1,
      commonData: {
        title: 'Classify the following as a clause or phrase.',
        types: ['Clause', 'Phrase']
      },
      data: [
        [
          `She sang a song.
If it rains, we'll stay inside.
He ate his lunch quickly.`,

          `The tall building
Walking in the park
A beautiful sunset`
        ],
        [
          `Because he was late, he missed the bus.
The book that she was reading was very interesting.
They will go to the beach if the weather is nice.`,

          `By the river
Singing a song
A boy with red hair`
        ],
        [
          `I like to play soccer when I have free time.
After the movie ended, we went home.
She runs every morning before work.`,

          `Running fast
The girl in the red dress
To the store`
        ],
        [
          `Since he is allergic to peanuts, he cannot eat them.
My sister, who is a doctor, gave me some medical advice.
Unless you study, you won't pass the test.`,

          `A cup of coffee
Sleeping soundly
On the table`
        ],
        [
          `The teacher explained the lesson clearly.
When the bell rang, the students went to their classes.
She is going to the store to buy some milk.`,

          `The woman with the long hair
A very tall building
Laughing out loud`
        ]
      ]
    },
    {
      label: 'Noun, Adjective or Adverb',
      type: 'classifySentence',
      id: 'noun-adj-adv',
      lockAfter: 1,
      commonData: {
        title:
          'Classify the following phrases as noun, adjective or adverb phrases',
        types: ['Noun', 'Adjective', 'Adverb']
      },
      data: [
        [
          `The red bicycle
The man with the hat`,

          `The smell of freshly baked cookies
Running quickly to catch the bus`,

          `He walked slowly down the street
She spoke very quietly to avoid waking up the baby`
        ],
        [
          `A glass of water
My favorite movie of all time`,

          `The house on the hill
The tall, dark, and handsome man`,

          `The bird chirped loudly in the morning
The car drove through the tunnel quickly`
        ],
        [
          `The book on the shelf
Playing with her toy car`,

          `The woman in the red dress
The cute and cuddly puppy`,

          `She danced gracefully across the stage
The athlete ran tirelessly for hours`
        ],
        [
          `The sound of the waves crashing on the shore
A trip to the beach`,

          `The book with the torn cover
A delicious slice of pizza`,

          `He ate the pizza hungrily after his long day at work
The sun set peacefully over the horizon`
        ],
        [
          `The girl with the curly hair
The smell of freshly baked cookies`,

          `The girl with the bright smile
The warm and cozy blanket`,

          `The cat slept soundly on the bed
He played the guitar beautifully`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-clause-2',
      data: {
        title:
          'Classify the underlined part of the following sentences as a clause or phrase.',
        questions: [
          {
            qText: `*I completed my project*, but I was not satisfied with it.`,
            options: `Clause, Phrase`
          },
          {
            qText: `Jacob knew about it; *however he kept asking everyone about it*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `I was waiting *at the park*.`,
            options: `Phrase, Clause`
          },
          {
            qText: `They all sang *extremely well*.`,
            options: `Phrase, Clause`
          },
          {
            qText: `*The girls in the black dresses are the ones* who won the competition last year.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*In the meantime*, I will help you with your domestic chores.`,
            options: `Phrase, Clause`
          },
          {
            qText: `*Santana and Brittany are good dancers*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `When we reach home, *we will call you*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*We were planning our summer vacation*.`,
            options: `Clause, Phrase`
          },
          {
            qText: `*She finally agreed to come with us* to the slumber party.`,
            options: `Clause, Phrase`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'relative-clause',
      data: {
        title: 'Relative Clauses',
        text: [
          `Relative clauses are non-essential parts of a sentence. They may add meaning, but if they are removed, the sentence will still function grammatically.
1. A defining clause tells us which specific person or thing we are talking about in a larger group of people or things.`,
          {
            type: 'html',
            text: `Eg - The woman <i>who visited me in the hospital</i> was very kind.`
          },
          `2. A non-defining clause gives us more information about the person or thing we are talking about.`,
          {
            type: 'html',
            text: `Eg - The farmer, <i>whose name was Ram</i>, sold us five pounds of cherries.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Relative Clause',
      id: 'select-relative-clause',
      data: {
        title: `Identify the relative clauses from the following sentences.`,
        multiSelect: true,
        text: `The woman *who visited me in the hospital* was very kind.
The umbrella *that I bought last week* is already broken.
The man *who stole my backpack* has been arrested.
The weather *that we had this summer* was beautiful.
The farmer, *whose name was Ram*, sold us five pounds of cherries.
Elephants, *which are the largest land mammals*, live in herds of ten or more.
The author, *who graduated from the same university as I did*, gave a wonderful motivation speech.
My mother, *who is fifty*, lives in Dubai.`
      }
    },
    {
      id: 'defining-non-defining',
      label: 'Defining or Non-defining',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences based on the type of relative clause used.',
        types: [
          {
            name: 'Defining',
            text: ` The woman who visited me in the hospital was very kind.
The umbrella that I bought last week is already broken.
The man who stole my backpack has been arrested.
The weather that we had this summer was beautiful.`
          },
          {
            name: 'Non-defining',
            text: `The farmer, whose name was Ram, sold us five pounds of cherries.
Elephants, which are the largest land mammals, live in herds of ten or more.
The author, who graduated from the same university as I did, gave a wonderful motivation speech.
My mother, who is fifty, lives in Dubai.`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'conditional-notes',
      data: {
        title: 'Conditionals',
        text: [
          `Conditional sentences express conditions that are required to be followed in order to achieve the desired results. 
1. Conditional Clauses: Conditional clauses begin with if or unless and express a condition.`,
          {
            type: 'html',
            text: `Eg - <i>If you would have studied well</i>, you could have passed the examination easily.`
          },
          `2. Zero Conditionals: A zero conditional sentence refers to a general truth. It denotes situations in which a particular thing or action always results in the other.`,
          {
            type: 'html',
            text: `Eg - <i>If you don't water the plants</i>, they die.`
          },
          {
            type: 'html',
            text: `Babies cry <i>when they are hungry and sick</i>.`
          },
          `3. First Conditionals: First conditional sentences are those sentences that express a situation in which the result would be the one to most likely happen. This, however, is not the guaranteed outcome.`,
          {
            type: 'html',
            text: `Eg - <i>If you take some medicines</i>, you will feel better.`
          },
          {
            type: 'html',
            text: `<i>If you go out now</i>, you will get wet in the rain.`
          },
          `4. Second Conditionals: Second conditional sentences are sentences in which hypothetical situations or unrealistic events that are not likely to ever happen are mentioned.`,
          {
            type: 'html',
            text: `Eg - <i>If I knew animation graphics</i>, I would create real-life animated characters.`
          },
          {
            type: 'html',
            text: `<i>If I had a time travel machine</i>, I could go back to my past and change a few things.`
          },
          `5. Third Conditionals: Third conditional sentences express alternate circumstances in the present. This is used to indicate that the outcome would have been different if there was a change in the past event mentioned in the dependent clause.`,
          {
            type: 'html',
            text: `Eg - <i>If you had not fought with me</i>, everything would have been fine.`
          },
          {
            type: 'html',
            text: `<i>If the teacher had informed us earlier</i>, we could have finished it in time.`
          }
        ]
      }
    },
    {
      id: 'zero-first',
      label: 'Zero or First Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Zero',
            text: `If you eat fast food every day, you get sick.
When you smoke, your lungs are affected.
The lawn gets wet when it rains.
Babies cry when they are hungry and sick.`
          },
          {
            name: 'First',
            text: `If you are focussed, you will achieve your goal.
If you take some medicines, you will feel better.
If you go out now, you will get wet in the rain.
If you like animated movies, you will like Inside Out.`
          }
        ]
      }
    },
    {
      id: 'second-third',
      label: 'Second or Third Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences based on the type of conditional clause used.',
        types: [
          {
            name: 'Second',
            text: `If I won the lottery, I would buy all the famous supercars.
If I had a choice, I would never marry at all.
If I had magical powers, I could change the world. 
If I were a bird, I would happily fly around the world.`
          },
          {
            name: 'Third',
            text: `If my parents had not consented to the surgery, my life would have been different.
If she had not gone home, she would have been happier.
If I had been there, I would have surely helped you in one way or another.
If Amrit had been with me, he would have known how to make me feel better.`
          }
        ]
      }
    },
    {
      id: 'conditional',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the missing blanks and complete the conditionals.'
      },
      lockAfter: 2,
      data: [
        `If I were the Prime Minister, I *would* start community kitchens all over the country.
If I were you, I *would* not marry him.
I *would* not have failed, if I had studied harder.
If you do not stop smoking, you *will* develop cancer.
If I were a doctor, I *would* treat poor people for free.`,

        `If he had asked me, I *would* have told him.
If I were a millionaire, I *would* help the poor and the needy.
If they had brought him in time, he *could* have been saved.
If he behaved more politely, he *would* not be in trouble.
If she earned a handsome salary, she *could* lead a better life.`,

        `If it rains, I *will* wear a raincoat.
You *will* not get good marks unless you study hard for the examination.
The dog *will* bite you if you keep teasing it.
If Alexander Bell had not been an inventor, today we *would* not be using telephones.
If Wellington had lost the battle of Waterloo, Napolean Bonaparte *would* have been the president of France.`,

        `Neil Armstrong *would* not have walked on the moon unless the Americans had not developed space flight.
The other team *will* win if we lose hope.
If you find problems difficult, you *should* keep trying and never give up.
If Samar does not have an umbrella, he *will* get wet in the rain.
If John Kennedy had not gone to Dallas, he *would* not have been assassinated.`,

        `If Madame Curie had been a housewife, she *would* not have discovered radium.
If I won a million rupees, I *would* buy a bungalow and a car.
If I were accidentally locked out of my house, I *would* call my friend for help.
If the poles of two magnets are opposite, they *will* repel each other.
The ice *will* melt if one places it in the sun.`,

        `I *would* not ask any question unless I could ask the president of America the secret of his success.
If the world were to end in five minutes, I *would* pray to God for mercy.
If I found a diamond on the street, I *would* search for its owner of it.
If a cat is fed, it *will* not kill rats.
In old age, if people had no fire, they *would* eat their meat raw.`
      ]
    }
  ]
};
