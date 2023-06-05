export default {
  id: 'gerund-8',
  label: 'Gerund, Infinitive and Participle',
  lockAfter: 3,
  list: [
    {
      label: 'Participle',
      type: 'passage',
      id: 'participle',
      data: {
        title: 'Participles',
        text: [
          `A participle is a word that is formed from a verb and takes the nature of both a verb and an adjective.`,
          {
            type: 'html',
            text: `Eg - <i>Looking</i> at the snake, Maria screamed and sprang up out of his chair.`
          },
          `In this sentence, 'looking' is the present participle (look+ing) which qualifies the noun 'Maria.' Hence it acts like an adjective. It is formed from a verb and also denotes the action of looking. Hence it acts as a verb too.
1. Present Participle: It is formed by adding 'ing' to the original form of the main verb.
Eg: Knowing, following 
2. Perfect Participle: It shows that the action is complete, either at some time in the past or at present.
Eg: Having walked continuously, I am fully exhausted now.
Having lost his wallet, he had to ask others for help.
3. Past Participle: The third form of the verb is called a past participle.
Eg: Frozen, loaded 
Since the participle is a verb-adjective it must be attached to some noun or pronoun. It must always have a proper subject of reference.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-prt',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a participle?`,
            options: `A word that is formed from a verb and takes the nature of both a verb and an adjective.
A word that is formed from an adjective and takes the nature of both an adjective and a verb.`
          },
          {
            qText: `What is the present participle?`,
            options: `It is formed by adding 'ing' to the original form of the main verb.
It shows that the action is complete, either at some time in the past or at present.`
          },
          {
            qText: `What is the perfect participle?`,
            options: `It shows that the action is complete, either at some time in the past or at present.
It is used as an adjective to describe the subject of the sentence.`
          },
          {
            qText: `What is the past participle?`,
            options: `It is the third form of the verb and is used to form various tenses.
It is formed by adding 'ing' to the original form of the main verb.`
          },
          {
            qText: `What must a participle always be attached to?`,
            options: `A noun or pronoun, A verb, An adjective`
          }
        ]
      }
    },
    {
      id: 'present-past',
      label: 'Present or Past',
      type: 'classifySentence',
      data: {
        title:
          'Determine whether the participle in the sentence is a present participle or past participle.',
        types: [
          {
            name: 'Present',
            text: `*Being* fully satisfied, they did not want to eat anymore.
Reem felt quite ashamed of *getting* scolded by her favorite aunt.
*Deluding* yourself, you can be happy for a short period in your life.`
          },
          {
            name: 'Past',
            text: `Extremely *fascinated* by the view, Ram decided to settle there.
Jake has a habit of keeping her things well *organized* all the time.
Niki was highly *irritated* as Jake kept poking him.`
          }
        ]
      }
    },
    {
      id: 'fillup-participle',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Fill in the blanks with participles.'
      },
      lockAfter: 1,
      data: [
        `Remya came *to see (for see, seeing)* you.
The sun *having risen (rise, to rise)* the birds began to chirp.
Everybody worships the *rising (rise, to rise)* idol, Jake.
*Placing (Place, Having place)* the books on the table Jay ran away.
I saw a woman *cross (having crossed, crossed)* the road.
A *broken (break, to break)* glass cannot hold water.
*Hit (Being hitted, Hitting)* by an arrow, the bird fell.
You better *leave (to leave)* before Tarun arrives.
I saw the storm *approaching (approach)*.
*Hearing (Hear)* a noise, I turned around.`,

        `*Considering (consider)* the facts, he received scant justice.
The rain came *pouring (pour)* down.
*Having elected (elect)* him President, the people gave him their loyal support.
*Having seen (See)* the film once, I do not want to see it again.
*Having lost (Lose)* my book, I reported the matter to the teacher.
*Seeing (See)* the Principal, the students ran away. 
*Having worked (Work)* hard, my sister got good marks.
*Reaching (Reach)* home, I asked my mother to make tea.`
      ]
    },
    {
      label: 'Gerund',
      type: 'passage',
      id: 'gerund',
      data: {
        title: 'Gerund',
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun.`,
          {
            type: 'html',
            text: `Eg - I learned <i>driving</i>.<br>
I like <i>watching</i> television.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-ger',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a gerund?`,
            options: `A word ending with -ing and has the force of a noun and a verb.
A word ending with -ing and has the force of an adjective and a verb.
A word ending with -ed and has the force of an adjective and a verb`
          },
          {
            qText: `How is a gerund used in a sentence?`,
            options: `As both a noun and a verb.
As a verb only.
As a noun only.
As an adjective only.`
          },
          {
            qText: `What is another term for a gerund?`,
            options: `Verbal noun, Adverb, Adjective, Pronoun`
          },
          {
            qText: `What part of speech does a gerund act as?`,
            options: `Noun, Adverb, Adjective, Verb`
          },
          {
            qText: `Which of the following is not a gerund?`,
            options: `To run, running, eating, sleeping`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Gerund',
      id: 'select-word-gerund',
      lockAfter: 1,
      commonData: {
        title: 'Identify the Gerunds from the following sentences.'
      },
      data: [
        `*Swimming* is good exercise.
I like *watching* television.
He was used to *driving* on the right when he was in London.
*Writing* is my profession.
*Celebrating* various festivals together are common among Indians.
I enjoy *teaching* English.
*Walking* is good exercise for health.
*Reading* books increases our knowledge.
*Working* hard makes you successful.`,

        `He dislikes *sleeping* for long hours.
She hates *worrying* about the future.
I prefer *studying* computer science.
He is afraid of *telling* the truth.
Her objective is *starting* a home for parentless children.
What I want to do in life is *achieving* something useful for all.
I do not mind *having* a cup of tea.
I enjoy *reading* English novels.
Have you postponed *going* to Delhi?`
      ]
    },
    {
      id: 'gerund-infinitive',
      label: 'Gerund or Infinitive',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences below based on their use of Gerund or Infinitive.',
        types: [
          {
            name: 'Gerund',
            text: `Teach me *speaking*.
*Advising* is easier than *practicing*.
*Reading* is easier than *writing*.
*Saving* is *earning*.`
          },
          {
            name: 'Infinitive',
            text: ` Teach me *to speak*.
*To advise* is easier than to.
*To read* is easier than to write.
*To save* is to earn.`
          }
        ]
      }
    },
    {
      id: 'gerund-participle',
      label: 'Gerund or Participle',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentences below based on thier use of Gerund or Participle.',
        types: [
          {
            name: 'Gerund',
            text: `She is tired of *writing*.
*Meeting* Padma for the first time, I thought she was quite gullible.
*Respecting* my parent's words, I never tried to slack again.            
I was prevented from *meeting* Padma.
*Respecting* our parents is our duty.`
          },
          {
            name: 'Participle',
            text: `The *howling* dog kept me awake all night.
The *broken* vase lay on the floor. 
The *smiling* girl waved goodbye. `
          }
        ]
      }
    },
    {
      label: 'Infinitive',
      type: 'passage',
      id: 'infinitive',
      data: {
        title: 'Infinitives',
        text: [
          ` A word that is not limited by the person or number of the subject is known as an Infinitive. It is a kind of verb having certain features of a noun. So it is also treated as a verb-noun.
Infinitive = 'to + the base form of the verb'
Eg: to sing, to dance, to run.`,
          {
            type: 'html',
            text: `Eg - <i>To advise others</i> is easy.<br>
<i>To learn</i> English is difficult.`
          },
          `Infinitive phrases use additional words to modify or further describe the main infinitive.`,
          {
            type: 'html',
            text: `Eg - My boss <i>told me to pay attention</i>, but I wasn't listening.<br>
I <i>need you to get me out of here</i>.`
          },
          `# Use of Infinitive 
1. As the subject of the a verb`,
          {
            type: 'html',
            text: `Eg - <i>It is easy to advise</i> others.<br>
<i>To advise others</i> is easy.`
          },
          `2. As the object of a transitive verb`,
          {
            type: 'html',
            text: `Eg - I wish <i>to become a poet</i>.`
          },
          `3. As the complement of a verb`,
          {
            type: 'html',
            text: `Eg - Our greatest pleasure is <i>to help the poor</i>.`
          },
          `4. As the object of a preposition`,
          {
            type: 'html',
            text: `Eg - I had no choice <i>but to give up my hope</i>.`
          },
          `5. As an object complement`,
          {
            type: 'html',
            text: `Eg - I noticed Madhavi <i>smile at me</i>.`
          },
          `6. To qualify a verb to express purpose`,
          {
            type: 'html',
            text: `Eg - I read books <i>to increase my knowledge</i>.`
          },
          `7. To qualify an adjective`,
          {
            type: 'html',
            text: `Eg - It is hard <i>to please Padma</i>. `
          },
          `8. To qualify a noun`,
          {
            type: 'html',
            text: `Eg - It is not the time <i>to sleep</i>.`
          },
          `9. To qualify a sentence`,
          {
            type: 'html',
            text: `Eg - <i>To tell the truth</i>, we have no problem with you.`
          },
          `Infinitives are of two types: bare infinitive and split infinitive. Bare Infinitives can be replaced by 'to' Infinitives.`,
          {
            type: 'html',
            text: `Eg - I can <i>teach</i>. ⇒ I am <i>able to teach</i>.`
          },
          `It is generally treated wrong to split an Infinitive in the middle. The adverb can be used either before 'to' or after the Infinitive.`,
          {
            type: 'html',
            text: `I expect Madhavi to carefully read the letter. ⇒ <i>Incorrect</i><br>
I expect Madhavi to read the letter carefully.⇒ <i>Correct</i>`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-inf',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is an Infinitive?`,
            options: ` A kind of verb with features of a noun, A word that describes a verb, A word that describes an adjective`
          },
          {
            qText: `What is the structure of an Infinitive?`,
            options: `to + base form of the verb, base form of the verb + ed, to + base form of the verb + ing`
          },
          {
            qText: `In which of the following cases can Infinitives be used as the complement of a verb?`,
            options: `As the object complement of a verb, As the subject of a verb, As the object of a transitive verb, As the object of a preposition`
          },
          {
            qText: `Which of the following is an example of a split infinitive?`,
            options: `To run quickly, To quickly run, To suddenly stop`
          },
          {
            qText: `Which of the following is an example of a bare infinitive?`,
            options: `To be, To have been, To have being, To being`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Infinitives',
      id: 'select-word-infinitive',
      lockAfter: 1,
      commonData: {
        title: 'Identify the Infinitives from the following sentences.',
        multiSelect: true
      },
      data: [
        `I love *to speak English*.
She likes *to swim*.
*To advise others* is easy.
*To learn English* is difficult.
*To please Padma* is hard.
*It is easy to advise* others.
*It is difficult to learn* English.
*It is hard to please* Padma.
I wish *to become a poet*.
He likes *to read books*.`,

        `We propose *to visit Agra*.
Our greatest pleasure is *to help the poor*.
Her plan is *to settle in Australia*.
I had no choice *but to give up hope*.
We are *about to begin our work*.
We heard him *speak to his father*.
We found her *open the door*.
I noticed Madhavi *smile at me*.
We have come *to see Madhavi*.
I read books *to increase my knowledge*.`,

        `It is hard *to please Padma*.
English is difficult *to learn*.
It is not the time *to sleep*.
I have the letters *to post*.
She has a child *to look after*.
*To tell the truth*, we have no problem with you.
*To explain bluntly*, we are in need of money.
*To tell you frankly*, I am not able to help you.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'fillup',
      id: 'drag-drop-infinitive',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using the most suitable words.'
      },
      data: [
        `*Learning (To learn)* a new language is on my bucket list.
I need *to buy (buy)* some groceries to make dinner tonight.
She decided *to take (taking)* a nap after finishing her homework.
Her objective is *to start (starting)* a home for parentless children.
What I want to do in life is *to achieve (achieving)* something useful for all.
I do not mind *having (to have)* a cup of tea.
I enjoy *reading (to read)* English novels.
Have you postponed *going (to go)* to Delhi?
It's important *to exercise (exercising)* regularly for good health.
My goal is *to read (read)* 50 books this year.`,

        `*Swimming (To swim)* is good exercise.
I learned *driving (to drive)*.
I like *watching (to watch)* television.
I am looking forward to *meeting (meet)* you.
He was used to *driving (drive)* on the right when he was in London.
*Writing (To write)* is my profession.
*Celebrating (To celebrate)* various festivals together are common among Indians.
I enjoy *teaching (to teach)* English.
I would love *to travel (travel)* to Japan someday.
*To become (becoming)* a doctor, one must attend medical school.`,

        `He promised *to call (calling)* his mother every week.
*Walking (To walk)* is good exercise for health.
*Reading (To read)* books increases our knowledge.
*Working (To work)* hard makes you successful.
He dislikes *sleeping (to sleep)* long.
She hates *worrying (to worry)* about the future.
I prefer *studying (to study)* computer science.
He is afraid of *telling (to tell)* the truth.
I'm trying *to save (saving)* money to buy a new car.
She loves *to sing (singing)* in the shower when no one is home.`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-infinitive',
      commonData: {
        title:
          'Classify the following sentences based on the usage of grammar as correct or incorrect.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `I expect Madhavi to read the letter carefully.
She tried to clearly explain the situation.
He did nothing but laugh.
He did no more than laugh.`,

          `Your beautiful. 
Do you know when your going? 
Can I have you're coat? `
        ],
        [
          `It was much hotter today than yesterday.
Every boy must sign in when he arrives.
Every girl must bring her own lunch.`,

          `Their going to be here soon. 
We should contact they're friend.  
Can we use there house? `
        ],
        [
          `I and my friends are planning to go to the beach next weekend.
I want to lie down and take a nap.
She needs to stop procrastinating and start studying. `,

          `He almost walked for the entire day.
My mothers cabin is next to his' cabin.
Its a cold day for October.`
        ],
        [
          `He offered to give me a ride to the airport.
They decided to go to the concert last minute.
She wants to run a marathon next year. `,

          `These recipes is good for beginning chefs.
At eight years old, my father gave me a pony for Christmas.
The dad found the boy, and he was happy. `
        ],
        [
          `For what reason did he come here?
Their father went to school there.
The rain had a good effect on the farmer's field.`,

          `The dogs dish was full of bone's.
Susan gave me a real nice bouquet of flowers.
He was laying on the couch.`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-infinitive',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is the correct usage of infinitive?',
            options: `He knows how to read and write English.
He knows to read and write English.`
          },
          {
            qText: 'Which of the following is the correct usage of infinitive?',
            options: `My father taught him how to drive a car.
My father taught him to drive a car.`
          },
          {
            qText: 'Which of the following is the correct usage of infinitive?',
            options: `Rekha was punished for coming late.
Rekha was punished to coming late`
          },
          {
            qText: 'Which of the following is the correct usage of infinitive?',
            options: `The student was made to write an essay by me.
The student was made by me to write an essay.`
          },
          {
            qText: 'Which of the following is the correct usage of infinitive?',
            options: `I was let go by him.
I was by him let go`
          },
          {
            qText:
              'Which of the following is the incorrect usage of infinitive?',
            options: `That way to behave is dangerous.
That is a dangerous way to behave.`
          },
          {
            qText:
              'Which of the following is the incorrect usage of infinitive?',
            options: `It is important to be patient for Jake to his little brother.
It is important for Jake to be patient to his little brother.`
          },
          {
            qText:
              'Which of the following is the incorrect usage of infinitive?',
            options: `To do this is the right thing.
This is the right thing to do.`
          },
          {
            qText:
              'Which of the following is the incorrect usage of infinitive?',
            options: `When to press the button tell me.
Tell me when to press the button`
          }
        ]
      }
    }
  ]
};
