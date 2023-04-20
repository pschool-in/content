export default {
  id: 'gerund-8',
  label: 'Gerund, Infinitive and Participle',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'participle',
      data: {
        title: 'Participles',
        text: [
          `A participle is a word that is formed from a verb and takes the nature of both a verb and an adjective.`,
          {
            type: 'html',
            text: `Example - <b>Looking</b> at the snake, Maria screamed and sprang up out of his chair.`
          },
          `In this sentence, 'looking' is the present participle (look+ing) which qualifies the noun 'Maria.' Hence it acts like an adjective. It is formed from a verb and also denotes the action of looking. Hence it acts as a verb too.
1. Present Participle: It is formed by adding 'ing' to the original form of the main verb.
e.g. Knowing, following etc.
2. Perfect Participle: It shows that the action is complete, either at some time in the past or at present.
e.g.Having walked continuously, I am fully exhausted now.
Having lost his wallet, he had to ask others for help.
3. Past Participle: The third form of the verb is called a past participle.
e.g. Frozen, loaded etc.
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
            options: `A word that is formed from a verb and takes the nature of both a verb and an adjective, A word that is formed from an adjective and takes the nature of both an adjective and a verb`
          },
          {
            qText: `What is the present participle?`,
            options: `It is formed by adding 'ing' to the original form of the main verb, It shows that the action is complete, either at some time in the past or at present`
          },
          {
            qText: `What is the perfect participle?`,
            options: `It shows that the action is complete, either at some time in the past or at present, It is used as an adjective to describe the subject of the sentence`
          },
          {
            qText: `What is the past participle?`,
            options: `It is the third form of the verb and is used to form various tenses,  It is formed by adding 'ing' to the original form of the main verb`
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
          'Classify the participle in the sentence as a present participle or past participle',
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
        title:
          'Fill in the blanks in the following choosing the best alternative'
      },
      lockAfter: 1,
      data: [
        `Remya came *to see(for see, seeing, having seen)* you.
The sun *having risen (rise, to rise, rising)* the birds began to chirp.
Everybody worships the *rising (rise, having risen, to rise)* idol Jake.
*Placing (Place, Having place, To place)* the books on the table Jay ran away.
I saw a woman *cross (having crossed, to cross, crossed)* the road.`,

        `A *broken (break, breaking, to break)* glass cannot hold water.
*Hit (Being hitted, Having hit, Hitting)* by an arrow, the bird fell dead.
I found him *drinking (drink, to drink, having drunk)*.
The marriage *has been fixed (fixed, fixing, to fix)*, no change is possible now.`,

        `You better *leave (to leave) before Tarun arrives.
I saw the storm *approaching (approach)*.
*Hearing (Hear)* a noise, I turned around.
*Considering (consider)* the facts, he received scant justice.`,

        `The rain came *pouring (pour)* down.
*Having elected (elect)* him President, the people gave him their loyal support.
*Having seen (See)* the film once, I do not want to see it again.
*Having lost (Lose)* my book, I reported the matter to the teacher.`,

        `*Seeing See)* the Principal, the students ran away. 
*Having worked (Work)* hard, my sister got good marks.
*Starving (Starve)* is better than *begging*(beg).
*Reaching (Reach)* home, I asked my mother to make tea.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'gerund',
      data: {
        title: 'Gerund',
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun.`,
          {
            type: 'html',
            text: `<b>Example</b> - I learned <b>driving</b>.<br>
I like <b>watching</b> television.`
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
            options: `A word ending with -ing and has the force of a noun and a verb, A word ending with -ing and has the force of an adjective and a verb, A word ending with -ed and has the force of an adjective and a verb`
          },
          {
            qText: `How is a gerund used in a sentence?`,
            options: `As both a noun and a verb, As a verb only, As a noun only, As an adjective only`
          },
          {
            qText: `What is another term for a gerund?`,
            options: `Verbal noun, Adverb, Adjective, Pronoun`
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
I learned *driving*.
I like *watching* television.
I am looking forward to *meeting* you.
He was used to *driving* on the right when he was in London.`,

        `*Writing* is my profession.
*Celebrating* various festivals together is common among Indians.
I enjoy *teaching* English.
*Walking* is good exercise for health.
*Reading* books increases our knowledge.`,

        `*Working* hard makes you successful.
He dislikes *sleeping* for long hours.
She hates *worrying* about the future.
I prefer *studying* computer science.`,

        `He is afraid of *telling* the truth.
My aim in life is *becoming* a writer.
Her objective is *starting* a home for parentless children.
What I want to do in life is *achieving* something useful for all.`,

        `I do not mind *having* a cup of tea.
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
          'Classify the below sentences based on the use of Gerund or Infinitive.',
        types: [
          {
            name: 'Gerund',
            text: `Teach me speaking.
Advising is easier than practicing.
Reading is easier than writing.
Saving is earning.`
          },
          {
            name: 'Infinitive',
            text: ` Teach me to speak.
To advise is easier than to.
To read is easier than to write.
To save is to earn.`
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
          'Classify the below sentences based on the use of Gerund or Participle.',
        types: [
          {
            name: 'Gerund',
            text: `She is tired of writing.
I was prevented from meeting Padma.
Respecting our parents is our duty.`
          },
          {
            name: 'Participle',
            text: ` Writing letters to her husband, she forgot everything.
Meeting Padma for the first time, I thought she was quite gullible.
Respecting my parent's words, I never tried to slack again.`
          }
        ]
      }
    },
    {
      id: 'fill-up-gerund',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using gerunds.`
      },
      data: [
        `*Swimming (To swim)* is good exercise.
I learned *driving (to drive)*.
I like *watching (to watch)* television.
I am looking forward to *meeting (meet)* you.
He was used to *driving (drive)* on the right when he was in London.`,

        `*Writing (To write)* is my profession.
*Celebrating (To celebrate)* various festivals together is common among Indians.
I enjoy *teaching (to teach)* English.
*Walking (To walk)* is good exercise for health.
*Reading (To read)* books increases our knowledge.`,

        `*Working (To work)* hard makes you successful.
He dislikes *sleeping (to sleep)* long.
She hates *worrying (to worry)* about the future.
I prefer *studying (to study)* computer science.`,

        `He is afraid of *telling (to tell)* the truth.
My aim in life is *becoming (to become)* a writer.
Her objective is *starting (to start)* a home for parentless children.
What I want to do in life is *achieving (to acheive)* something useful for all.`,

        `I do not mind *having (to have)* a cup of tea.
I enjoy *reading (to read)* English novels.
Have you postponed *going (to go)* to Delhi?`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-gerund',
      commonData: {
        title:
          'Classify the following sentences based on the correct usage of Gerunds.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `She insisted on me paying the money.
Padma objected to Vijaya talking like that.
I am sorry for him having spent life uselessly.
I was shocked at Rajiv Gandhi's being assassinated.`,

          `She insisted on my paying the money.
          Padma objective to Vijaya's talking like that.
          I am sorry for his having spent life uselessly.
          I was shocked at Rajiv Gandhi being assassinated.`
        ],
        [
          `We were delighted at Mother Teresa being awarded Noble Peace Prize.
There is no chance of snow falling.
There is a possibility of the election taking place.
Playing chess is his passion.`,

          `We were delighted at Mother Teresa's being awarded Noble Peace Prize.
There is no chance of the snow's falling.
There is possibility of the election's talking place.
The playing chess is his passion.
Playing of chess is his passion.`
        ],
        [
          `I dislike cooking food and washing clothes.
The rapid reading of a book is useless.
Reading a book rapidly is useless.
He insisted on going there alone.`,

          `I dislike cooking food and the washing of clothes.
Rapid reading a book is useless.
He insisted to go there alone.`
        ],
        [
          `He prevented me from going here alone.
I dislike your going there.
The reading of a book rapidly is useless.`,

          `He prevented me to go there alone.
I dislike you going there.
Rapid reading of book useless`
        ],
        [
          `I do not mind Ram attending the party.
He begged of me the favor of granting him leave.
The match was handicapped by one of their best players being ill.`,

          `I do not mind Ram's attending the party.
He begged of my favour of granting him leave.
The match was handicapped by one's of their best players being ill.`
        ]
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'infinitive',
      data: {
        title: 'Infinitives',
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun. A word that is not limited by the person or number of the subject is known as an Infinitive. It is a kind of verb having certain features of a noun. So it is also treated as a verb-noun.
Infinitive = 'to + the base form of the verb', e.g., to sing, to dance, to run.`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>To advise others</b> is easy.<br>
<b>To learn</b> English is difficult.`
          },
          `Infinitives don't have to stand alone. Infinitives can work with other words to form an infinitive phrase. To put it simply, infinitive phrases use additional words to modify or further describe the main infinitive.`,
          {
            type: 'html',
            text: `<b>Example</b> - My boss <b>told me to pay attention</b>, but I wasn't listening.<br>
I <b>need you to get me out of here</b>.`
          },
          `# Use of Infinitive 
1. As the subject of the a verb`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>It is easy to advise</b> others.<br>
<b>To advise others</b> is easy.`
          },
          `2. As the object of a transitive verb`,
          {
            type: 'html',
            text: `<b>Example</b> - I wish <b>to become a poet</b>.`
          },
          `3. As the complement of a verb`,
          {
            type: 'html',
            text: `<b>Example</b> - Our greatest pleasure is ,b>to help the poor</b>.`
          },
          `4. As the object of a preposition`,
          {
            type: 'html',
            text: `<b>Example</b> - I had no choice <b>but to give up my hope</b>.`
          },
          `5. As an object complement`,
          {
            type: 'html',
            text: `<b>Example</b> - I noticed Madhavi <b>smile at me</b>.`
          },
          `6. To qualify a verb to express purpose`,
          {
            type: 'html',
            text: `<b>Example</b> - I read books <b>to increase my knowledge</b>.`
          },
          `7. To qualify an adjective`,
          {
            type: 'html',
            text: `<b>Example</b> - It is hard <b>to please Padma</b>. `
          },
          `8. To qualify a noun`,
          {
            type: 'html',
            text: `<b>Example</b> - It is not the time <b>to sleep</b>.`
          },
          `9. To qualify a sentence`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>To tell the truth</b>, we have no problem with you.`
          },
          `Infinitives are of two types: bare infinitive and split infinitive. Bare Infinitives can be replaced by 'to' Infinitives.`,
          {
            type: 'html',
            text: `<b>Example</b> - I can <b>teach</b>. => I am <b>able to teach</b>.`
          },
          `It is generally treated wrong to split an Infinitive in the middle. The adverb can be used either before 'to' or after the Infinitive.`,
          {
            type: 'html',
            text: `I expect Madhavi to carefully read the letter. => <b>Incorrect</b><br>
I expect Madhavi to read the letter carefully.=> <b>Correct</b>`
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
        `I love *to speak* English.
She likes *to swim*.
*To advise others* is easy.
*To learn English* is difficult.
*To please Padma* is hard.`,

        `*It is easy to advise* others.
*It is difficult to learn* English.
*It is hard to please* Padma.
I wish *to become a poet*.
He likes *to read books*.`,

        `We propose *to visit Agra*.
Our greatest pleasure is *to help the poor*.
Her plan is *to settle in Australia*.
I had no choice *but to give up hope*.
We are *about to begin our work*.`,

        `We heard him *speak to his father*.
We found her *open the door*.
I noticed Madhavi *smile at me*.
We have come *to see Madhavi*.
I read books *to increase my knowledge*.`,

        `It is hard *to please Padma*.
English is difficult *to learn*.
It is not the time *to sleep*.
I have the letters *to post*.
She has a child *to look after*.`,

        `*To tell the truth*, we have no problem with you.
*To explain bluntly*, we are in need of money.
*To tell you frankly*, I am not able to help you.
She *made* me *understand* life.
I *helped* her *learn* English.`,

        `I *heard* Madhavi *tell* her friend about me.
You *need* not *worry* about it.
She *dared* not *speak* with her father.
I *shall go* there.
You *should know* that.`,

        `She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can* wait here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-infinitive',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using the most suitable words.'
      },
      data: [
        `You *should do* your work.
He *can win* this match.
You *must abide* by the law.
You *ought to* respect your elders.
I *shall go* there.`,

        `You *should know* that.
She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can wait* here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`,

        `*To learn* a new language is on my bucket list.
I need *to buy* some groceries to make dinner tonight.
She decided *to take* a nap after finishing her homework.
It's important *to exercise* regularly for good health.
My goal is *to read* 50 books this year.`,

        `I would love *to travel* to Japan someday.
*To become* a doctor, one must attend medical school.
He promised *to call* his mother every week.
I'm trying *to save* money to buy a new car.
She loves *to sing* in the shower when no one is home.`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-infinitive',
      commonData: {
        title:
          'Classify the following sentences based on the correct usage of Infinitives.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `I expect Madhavi to read the letter carefully.
She tried to explain clearly the situation.
He did nothing but laugh.
He did no more than laugh.`,

          `I expect Madhavi to carefully read the letter.
She tried to clearly explain the situation.
He did nothing but to laugh.
He did no more than to laugh.`
        ],
        [
          `I went there personally to see the situation.
I request you kindly to grant my application.
He helped me to progress and prosper.
It lies in my power to succeed or to fail.`,

          `I went there to personally see the situation.
I request you to kindly grant my application.
He helped me to progress and to prosper.
It lies in my power to succeed or fail.`
        ],
        [
          `We are advised to rejoice and to weep with others.
I should have like to go.
He seemed to have enjoyed his stay in Mumbai.
I gave him a pen to write with.
He has no paper to write on.`,

          `We are advised to rejoice and weep with others.
I should have liked to have gone.
He seemed to enjoy his stay in Mumbai.
I gave him a pen to write.
He has no paper to write.`
        ],
        [
          `I and my friends are planning to go to the beach next weekend.
          I want to lie down and take a nap.
          She needs to stop procrastinating and start studying. `,

          `Me and my friends are planning to went to the beach next weekend.
          I want to laid down and take a nap.
          She needs to stopped procrastinating and start studying. `
        ],
        [
          `He offered to give me a ride to the airport.
          They decided to go to the concert last minute.
          She wants to run a marathon next year. `,

          `He offered to gave me a ride to the airport.
          They decided to went to the concert last minute.
          She wants to ran a marathon next year. `
        ]
      ]
    },
    {
      id: 'mcq-infinitive',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Multiple Choice Questions'
      },
      data: [
        {
          questions: [
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'He knows how to read and write English, He knows to read and write English'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'My father taught him how to drive a car, My father taught him to drive a car'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'Rekha was punished for coming late, Rekha was punished to coming late'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'The student was made to write an essay by me, The student was made by me to write an essay'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options: 'I was let go by him, I was by him let go'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'That way to behave is dangerous, That is a dangerous way to behave'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'It is important to be patient for Jake to his little brother, It is important for Jake to be patient to his little brother'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'To do this is the right thing, This is the right thing to do'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'When to press the button tell me, Tell me when to press the button'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'I request you to kindly grant my application, I request you kindly to grant my application.'
            }
          ]
        }
      ]
    }
  ]
};
