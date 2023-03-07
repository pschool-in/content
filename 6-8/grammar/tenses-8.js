export default {
  id: 'tenses-8',
  label: 'Tenses',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Tenses',
        text: [
          `# Tenses
Tense indicates the time when an action takes place.
# Present Tense
1. Simple Present Tense: This form of tense is used to express habitual action, general truths and to express a future event that is part of a fixed timetable.`,
          {
            type: 'html',
            text: `<b>Example</b> - He <b>drinks</b> tea every day.`
          },
          `2. Present Continous Tense: It is used for an action going on at the time of speaking or an action arranged to take place shortly.`,
          {
            type: 'html',
            text: `<b>Examples</b> - He <b>is drinking</b> tea.`,
            text: `My father <b>is arriving</b> tomorrow.`
          },
          `3. Present Perfect Tense: This form of tense is used to denote an action beginning at some point in the past and continuing up to the present movement or to indicate completed activities in the immediate past.`,
          {
            type: 'html',
            text: `<b>Examples</b> - He <b>has just finished</b> drinking his tea.`,
            text: `He <b>has been</b> ill since last week`
          },
          `4. Present Perfect Continous Tense: This indicates an action that began sometime in the past and is still continuing.`,
          {
            type: 'html',
            text: `<b>Example</b> - He <b>has been sleeping</b> for five hours.`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Simple Present Tense',
      type: 'fillup',
      data: {
        title:
          'Complete the sentences in the simple present tense by choosing the appropriate option.',
        text: `Nimisha *loves (love)* to play indoor games. 
Alka and Neha *do not (does not)* play chess together. 
*Does (Do)* Manu sing a song?
Shipra likes to *watch (watched)* a cricket match on television. 
Vaishak *does not (did not)* study social science on Wednesday.`
      }
    },
    {
      id: 'fillup-1',
      label: 'Present Continuous Tense',
      type: 'fillup',
      data: {
        title:
          'Complete the sentences in the present continuous tense by choosing the appropriate option.',
        text: `Kritika *is writing (writes)* content on women's equality. 
Jack *is not playing (has not played)* in the ground.
Jeshni *is going (has gone)* to Poland next Monday.
Sunny *is trying (tried)* to solve the mystery.
Are they *going (went)* outside?`
      }
    },
    {
      id: 'fillup-2',
      label: 'Present Perfect Tense',
      type: 'fillup',
      data: {
        title:
          'Complete the sentences in the present perfect tense by choosing the appropriate option.',
        text: `Sruthy *has not gone (will not go)* to the office today.
Priya *has visited (will visit)* the Taj Mahal in the noon.
We *have decided (decided)* to go by bus to Mangalore.
What *have (are)* they *decided (deciding)* about returning from Banglore?
Vivan *has (is)* just *visited (visting)* Jodhpur.`
      }
    },
    {
      id: 'fillup-3',
      label: 'Present Perfect Continuous Tense',
      type: 'fillup',
      data: {
        title:
          'Complete the sentences in the present perfect continuous tense by choosing the appropriate option.',
        text: `Nithi *has been studying (has studied)* for exams since the morning. 
Mark *has been playing (has played)* futsal with his friends for two hours.
*Has (Was)* Meera *been sitting (sitting)* here for one hour?
They *have (were)* not *been talking (talking)* to each other for five days.
Preethi *has been practicing (have practiced)* the guitar for two months now.`
      }
    },
    {
      id: 'present-past',
      label: 'Present or Past',
      type: 'classifySentence',
      data: {
        title: 'Classify based on the tense used in the sentence.',
        types: [
          {
            name: 'Present',
            text: `  I am still working on it.
We are going to watch a movie.
Mark is singing a Kpop song.`
          },
          {
            name: 'Past',
            text: `I finished working on it two days ago.
We went to watch a movie last Sunday.
Mark sang a Kpop song at the music festvial last week.`
          }
        ]
      }
    },
    {
      id: 'fill-up-4',
      label: 'Present Tense',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: `Fill in the blanks with the correct form of the present tense.`
      },
      data: [
        `Malthi *lives* in Delhi. (live)
*Does* Priya *feel* better now. (feel)
Siji *learns* everything quickly. (learn)
Her friend *earns* money from online business. (earn)
Niki need your *support*. (support)`,

        `*Do* you *work* in the software industry? (work)
*Do* you *like* reading? (like)
It *does* not *work* on my hair. (work)
Mickey *eats* all the fruits. (eat)
Jay and Jake *likes* to travel together. (like)`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Past Tense',
        text: [
          `# Past Tense 
1. Simple Past Tense: It is used to indicate an action completed in the past. It is also used to express past habits.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I <b>received</b> his letter a week ago.<br>
She always <b>carried</b> an umbrella.`
          },
          `2. Past Continous Tense: It is used to indicate an action going on at some time in the past. The time of action may or may not be indicated.`,
          {
            type: 'html',
            text: `<b>Example</b> - We <b>were listening</b> to the radio all evening.`
          },
          `3. Present Perfect Tense: This form of tense is used to denote an action beginning at some point in the past and continuing up to the present movement or to indicate completed activities in the immediate past3. Past Perfect Tense: It indicates an action completed before a certain moment in the past.`,
          {
            type: 'html',
            text: `<b>Example</b> - I <b>had written</b> the letter before he arrived.`
          },
          `4. Past Perfect Continuous Tense: It is used for an action that began before a certain point in the past and continued up to that time.`,
          {
            type: 'html',
            text: `<b>Example</b> - At that time <b>he had been writing</b> a novel for two months.`
          }
        ]
      }
    },
    {
      id: 'fill-up-5',
      label: 'Simple Past Tense',
      type: 'fillup',
      commonData: {
        title: `Complete the sentences in the simple past tense by choosing the appropriate option.`
      },
      data: [
        `I *received (receive)* your letter last morning. 
How many deer *did (do)* you see in the zoo? 
My uncle *bought (buy)* a new house last year.
Prices *rose (rise)* by sixty percent last year. 
Columbus *discovered (discover)* America.`,

        `Thousands of people *lost (lose)* their lives in the flood. 
Neha *borrowed (borrow)* ten thousand rupees from me. 
When *did (will)* you *return (returned)* from Australia? 
I *went (go)* to her house yesterday.
A thief *broke (break)* into her office last Sunday.`
      ]
    },
    {
      id: 'fill-up-6',
      label: 'Past Continous Tense',
      type: 'fillup',
      commonData: {
        title: `Complete the sentences in the past continuous tense by choosing the appropriate option.`
      },
      data: [
        `The toddler *was weeping (weeped)* in her room.
Boys *were making (made)* so much noise in the classroom.
Why *were (was)* you *giving (gave)* her an angry look ?
We saw the aeroplane while it *was taking (took)* off.
The students *were saying (said)* their morning prayer when I reached their school.`,

        `I *was showering (had showered)* when the telephone bell rang.
My mother *was cooking (had cooked)* when I returned home.
My grandmother *was reading (had read)* the Gita when the guests arrived. 
Mother *was making (had made)* breakfast for us when the school bus came.
Renu saw that the baby *was crying (cried)* bitterly.`
      ]
    },
    {
      id: 'fill-up-7',
      label: 'Past Perfect Tense',
      type: 'fillup',
      commonData: {
        title: `Complete the sentences in the past perfect tense by choosing the appropriate option.`
      },
      data: [
        `Pavitra *has (is)* already *taken (take)* his breakfast.
If she *had prepared (prepare)* for the examination she would not have failed.
The bell *had gone (went)* before I reached the school. 
The patient *had died (dies)* before the doctor arrived. 
He *had (have)* not *left (leave)* the place before his father permitted her.`,

        `*Had (Did)* the child *slept (sleep)* before his father returned from office? 
The rain *had stopped (stops)* when we stepped out of our house.
If you *had helped (helps)* him, he would have got first rank. 
The movie *had started (started)* when I reached the hall.
If he *had boarded (boards)* a bus, he would have caught the train.`
      ]
    },
    {
      id: 'fillup-8',
      label: 'Past Perfect Continuous Tense',
      type: 'fillup',
      data: {
        title:
          'Complete the sentences in the past perfect continuous tense by choosing the appropriate option.',
        text: `He *had been studying (had studied)* hard since December. 
Mariyam *had been fooling (has fooled)* her boyfriend for many years.
How long *had (has)* the three neighbors *been quarreling (quarelled)* when a forth one joined them? 
Heena *had been sleeping (has slept)* for five hours when Riyas knocked at her door. 
Tenzing *had been trying (had tried)* to climb Everest for many years before he succeeded in his mission. `
      }
    },
    {
      id: 'yes-no',
      label: 'Yes or No',
      type: 'classifySentence',
      data: {
        title: 'Is the tense used in the following sentence simple past tense?',
        types: [
          {
            name: 'Yes',
            text: `Rahul passed the Secondary School Examination in 2017.
They left for Dubai yesterday noon.
Riya wrote a letter to her father last night.
Babar founded the Mughal Empire.`
          },
          {
            name: 'No',
            text: `Rahul has passed the Secondary School Examination in 2017.
They have left for Dubai yesterday noon.
Riya has written a letter to her father last night.
Babar has founded the Mughal Empire.`
          }
        ]
      }
    },
    {
      label: 'Past Tense',
      type: 'matchByDragDrop',
      id: 'fillup-drag',
      lockAfter: 1,
      commonData: {
        title:
          'Read the sentences and fill in the blanks with the correct form of the past tense.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `We *were watching* FIFA all night. 
I *went* out with my cousins. 
Mary *was walking* towards the food truck. 
The bus *left* a few minutes back. 
The teacher *taught* us about bones. 
We *drove* to Goa last week.`,

        `The actress *stood* next to the actor. 
The thief *broke* into the house last night. 
I *received* a trophy for the singing competition on the last day. 
Preeti *was playing*  chess last night. 
I *had seen* Priya before she came to school.`,

        `I *had watched* the movie last night. 
The opponent *played* well. 
Andy *ate* all the biscuits. 
Arathi *was mending* the roof when it started to rain. `
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-3',
      data: {
        title: 'Future Tense',
        text: [
          `# Future Tense
1. Simple Future Tense: It is used to talk about things that we cannot control. It expresses the future as fact. We use this tense to talk about what we think or believe will happen in the future.`,
          {
            type: 'html',
            text: `<b>Example</b> - I <b>shall</b> be twenty next Saturday.<br>
I am <b>going</b> to buy a car.`
          },
          `2. Future Continuous Tense: It indicates actions that will progress at a time in the future or planned things that are expected to happen in the future.`,
          {
            type: 'html',
            text: `<b>Example</b> - I <b>will be staying</b> there till next Sunday.`
          },
          `3. Future Perfect Tense: Is is used to talk about actions that will be completed by a certain future time.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I <b>shall have completed</b> my work by then.<br>
            By the end of the month, <b>I will have worked</b> here for 5 years.`
          },
          `4. Future Perfect Continuous Tense: It is used for actions that will be in progress over a while that will end in the future.`,
          {
            type: 'html',
            text: `<b>Example</b> - I <b>will have been teaching</b> for twenty years next July.`
          }
        ]
      }
    },
    {
      label: 'Future Tense',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `I *shall reach* the station before the train leaves.
The log of wood *will break* and they will fall into the ditch.
They *will bind* his hand and foot and hold him fast.
I *shall break* the lock open and get into the room.
The gardener *will be* watering the plants.
Mike *will have* really committed a blunder.
You *will* find her crying bitterly.`
      }
    },
    {
      label: 'Tenses',
      type: 'matchByDragDrop',
      id: 'fillup-drag-1',
      lockAfter: 1,
      commonData: {
        title:
          'Read the sentences and fill in the blanks with the correct form of tense.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Vignesh *left* his native village yesterday.
I *completed* the work.
He tells me that he *has solved* all the sums.
I *had informed* you about this pending work before.
I *have known* you for many years.
She *saw* a hippo in the circus.`,

        `He *has passed* in Hindi but failed in Social Studies.
If you help me. I *will* reward you.
It *has been raining* heavily for a week.
The patient *had died* before the doctor arrived.
He *will* meet me as soon as he returns.
The teacher *punished* the boys because they were making a noise.`
      ]
    },
    {
      id: 'past-present-future',
      label: 'Present, Past or Future',
      type: 'classifySentence',
      data: {
        title: 'Classify based on the tense used.',
        types: [
          {
            name: 'Present',
            text: `Does Manu sing a song?
Shipra likes to watch a cricket match on television. 
Vaishak does not study social science on Wednesday.
Nithi has been studying for exams since the morning. 
Mark has been playing futsal with his friends for two hours.`
          },
          {
            name: 'Past',
            text: `We were watching FIFA all night. 
I went out with my cousins. 
Mary was walking towards the food truck. 
The bus left a few minutes back. 
The teacher taught us about bones.`
          },
          {
            name: 'Future',
            text: `I shall reach the station before the train leaves.
The log of wood will break and they will fall into the ditch.
They will bind his hand and foot and hold him fast.
I shall break the lock open and get into the room.`
          }
        ]
      }
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect',
      lockAfter: 1,
      commonData: {
        title:
          'Identify the degree of comparison.Classify the following sentence based on the usage of tense in verb into correct or incorrect.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `He passed in English.
Light the lamp.
When will you take the test?
The teacher will give us a test in English next week.
I have been ill for four days.`,

          `He is pass in English.	
Burn the lamp.	
When will you give the test?	
The teacher will take our test in English next week.	
I am ill for four days.`
        ],
        [
          `She made a speech.
Our team scored two goals.
I wish I were young again!
He talks as if he were mad.
What makes you laugh?`,

          `She gave a speech.	
Our team made two goals.	
I wish I was young again.	
He talks as if he is mad.	
What make you laugh?`
        ],
        [
          `I hung my coat on the peg.
The murderer was hanged.
Two and two make four.
They came this morning.
He was so thirsty that he drank all the milk.`,

          `I hanged my coat on the peg.	
The murderer was hung.	
Two and two makes four.	
They have come this morning.	
He was so thirsty that he drunk all the milk.`
        ],
        [
          `I fear he will fail.
I looked into the bus, but saw none.
He works hard lest he should fail.
Our hen has laid ten eggs.
He fell off the roof and was injured.`,

          `I hope he will fail.	
I saw into the bus, but looked none.	
He works hard lest he should not fail.	
Our hen has given ten eggs.	
He fell off the roof and injure.`
        ]
      ]
    }
  ]
};
