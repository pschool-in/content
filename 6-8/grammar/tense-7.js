export default {
  id: 'tense-7',
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
          `Tense indicates the time when an action takes place.
# Present Tense
1. Simple Present Tense: This form of tense is used to express habitual action, general truths and to express a future event that is part of a fixed timetable.`,
          {
            type: 'html',
            text: `<b>Example</b> - He <b>drinks</b> tea every day.`
          },
          `2. Present Continous Tense: It is used for an action going on at the time of speaking or an action arranged to take place shortly.`,
          {
            type: 'html',
            text: `<b>Examples</b> - He <b>is drinking</b> tea.<br>
My father <b>is arriving</b> tomorrow.`
          },
          `3. Present Perfect Tense: This form of tense is used to denote an action beginning at some point in the past and continuing up to the present movement or to indicate completed activities in the immediate past.`,
          {
            type: 'html',
            text: `<b>Examples</b> - He <b>has just finished</b> drinking his tea.<br>
He <b>has been</b> ill since last week`
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
Shipra likes to *watch (watched)* cricket matches on television. 
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
Jack *is not playing (has not played)* on the ground.
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
Priya *has visited (will visit)* the Taj Mahal.
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
Mark sang a Kpop song at the music festival last week.`
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
Does Priya *feel* better now? (feel)
Siji *learns* everything quickly. (learn)
Her friend *earns* money from online business. (earn)
Niki needs your *support*. (support)`,

        `Do you *work* in the software industry? (work)
Do you *like* reading? (like)
It *does* not *work* on my hair. (work)
Mickey *is* not picky and *eats* all types of fruits. (eat)
Jay and Jake *like* to travel together. (like)`,

        `She *reads* (read) a new novel every Saturday.
They *play* (play) soccer every weekend.
I *like* (like) to eat dosa.
He *is studying* (study) for his exam right now.
We *are watching* (watch) a movie at home tonight.`,

        `The teacher *is teaching* (teach) math to the students.
My parents are *working* (work) hard every day.
She *is listening* (listen) to music now.
They are *traveling* (travel) to different countries every year.
He *plays* (play) the guitar in a band.`,

        `I *enjoy* (enjoy) spending time with my friends.
The chef is *cooking* (cook) delicious meals at the restaurant.
We *swim* (swim) in the pool on hot days.
They *read* (read) the newspaper every morning.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Past Tense',
        text: [
          `1. Simple Past Tense: It is used to indicate an action completed in the past. It is also used to express past habits.`,
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
          `3. Past Perfect Tense: It indicates an action completed before a certain moment in the past.`,
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
A thief *broke (break)* into her office last Sunday.`,

        `I *ate (eat)* breakfast at 7 am yesterday.
Sarah *played (play)* soccer with her friends last weekend.
We *went (go)* to the park yesterday afternoon.
The movie *started (starts)* at 8 pm and ended at 10 pm last night.
My parents *took (take)* me to the zoo last month.`,

        `The teacher *explained (explains)* the lesson in class yesterday.
Jack *studied (studies)* for his exam all night before the test.
I *visited (visit)* my grandparents during the summer vacation.
She *cleaned (cleans)* her room yesterday morning.
The Busan concert that *aired (airs)* last week *was (is)* spectacular.`,

        `We *finished (finishes)* our project before the deadline.
He *wrote (write)* a letter to his friend yesterday.
The train *arrived (arrives)* at the station on time yesterday.
The weather *was (is)* great on our trip last week.
She *practiced (practices)* playing the guitar for an hour yesterday.`
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
        `The toddler *was weeping (wept)* in her room.
Boys *were making (made)* so much noise in the classroom.
Why *were (was)* you *giving (gave)* her an angry look?
We saw the airplane while it *was taking (took)* off.
The students *were saying (said)* their morning prayer when I reached their school.`,

        `I *was showering (had showered)* when the doorbell rang.
My mother *was cooking (had cooked)* when I arrived home.
My sister *was reading (had read)* a novel while we were playing. 
Mother *was making (had made)* breakfast for us when the school bus came.
Renu saw that the baby *was crying (cried)* bitterly.`,

        `I *was eating (had ate)* breakfast yesterday when the accident occurred.
Sarah *was playing (had been playing)* soccer with her friends when it started raining.
We *were walking (had been walking)* in the park yesterday afternoon when we saw a squirrel.
The movie *was playing (had been playing)* when we arrived at the theater last night.
My parents *were driving (had been driving)* to the zoo when they got lost.`,

        `The teacher *was explaining (had been explaining)* the lesson in class when the fire alarm went off.
Jack *was studying (had been studying)* for his exam when his friend called him.
I *was doing (have been doing)* my homework when the power went out.
She *was cleaning (had been cleaning)* her room when her friend came over.
The concert *was starting (started)* when we arrived at the venue.`,

        `We *were working (had been working)* on our project all afternoon yesterday.
He *was writing (wrote)* a letter to his friend when his sister interrupted him.
The train *was leaving (had left)* the station when we arrived yesterday.
The weather *was changing (had changed)* rapidly on our trip last week.
She *was practicing (had to practice)* playing the guitar when her parents came home.`
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
        `Pavitra *has (is)* already *taken (take)* her medicine.
If she *had prepared (prepare)* for the examination she would not have failed.
The bell *had gone (went)* before I reached the school. 
The patient *had died (dies)* before the doctor arrived. 
He *had (have)* not *left (leave)* the place before his father permitted her.`,

        `*Had (Did)* the child *slept (sleep)* before his father returned from office? 
The rain *had stopped (stops)* by the time we stepped out of our house.
If you *had helped (helps)* him, he would have got the first rank. 
The movie *had started (started)* when I reached the hall.
If he *had boarded (boards)* a bus instead of walking, he would have caught the train.`,

        `I *had eaten (ate)* breakfast by the time my friend arrived.
Sarah *had finished (finished)* playing soccer with her friends before it started raining.
We had already *walked (walk)* out of the zoo before the monkey had escaped.
The movie had already *started (starts)* by the time we got to the theater.
My parents *had visited (visited)* the zoo before, so they knew the way.`,

        `The teacher *had explained (explained)* the lesson before the test.
Jack *had studied (studied)* for his exam all week.
I *had visited (visited)* my grandparents several times before they moved to Durgapur.
She *had cleaned (cleaned)* her room yesterday morning before going out with her friends.
The concert had already *ended (ends)* by the time we arrived at the venue.`,

        `We *had finished (finished)* our project before the deadline, so we had time to review it.
He had already *written (wrote)* the passage before the deadline was announced.
The train had already *left (been leaving)* the station by the time we arrived yesterday.
The weather *had been (was)* great on our trip last week, but it changed suddenly.
She *had practiced (practiced)* playing the guitar for months before her recital.`
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
Mariyam *had been fooling (has fooled)* Priya for many years.
How long *had (has)* the three neighbors *been quarreling (quarreled)* when a fourth one joined them? 
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
They left for Dubai yesterday at noon.
Riya wrote a letter to her father last night.
Babar founded the Mughal Empire.`
          },
          {
            name: 'No',
            text: `Rahul has passed the Secondary School Examination in 2017.
They had already left for Dubai yesterday at noon.
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
        `I *went* to the store yesterday.
She *finished* her homework before dinner.
They *saw* a movie last night.
He *played* soccer with his friends on Saturday.
We *traveled* to Europe last summer.`,

        `The teacher *explained* the lesson in class yesterday.
We *visited* the museum last week.
He *completed* his project before the deadline.
She *received* an award for her performance in the play.
They *went* on a road trip during the summer vacation.`,

        `We *were watching* FIFA all night. 
I *went* out with my cousins. 
Mary *was walking* toward the food truck. 
The bus *left* a few minutes back. 
The teacher *taught* us about bones.`,

        `We *drove* to Goa last week.
The actress *stood* next to the actor. 
The thief *broke* into the house last night. 
I *received* a trophy for the singing competition on the last day. 
Preeti *was playing*  chess last night. `,

        `I *had seen* Priya before she came to school.
I *had watched* the movie last night. 
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
          `1. Simple Future Tense: It is used to talk about things that we cannot control. We use this tense to talk about what we think or believe will happen in the future.`,
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
          `3. Future Perfect Tense: Is is used to talk about actions that will be completed by a certain time in the near future.`,
          {
            type: 'html',
            text: `<b>Examples</b> - I <b>shall have completed</b> my work by then.<br>
By the end of the month, <b>I will have worked</b> here for 5 years.`
          },
          `4. Future Perfect Continuous Tense: It is used for actions that had been in progress over a while and will end in the future.`,
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
The police *will bind* his hand and foot and hold him fast.
I *shall break* the lock open and get into the room in case I get locked out.
The gardener *will be* watering the plants at noon.
Mike *will have* committed a blunder by the time we reach.
You *will* find her crying bitterly.`
      }
    },
    {
      label: 'Tenses',
      type: 'fillup',
      id: 'fillup-drag-1',
      lockAfter: 1,
      commonData: {
        title:
          'Read the sentences and fill in the blanks with the correct form of tense.',
        noOptions: true,
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `Vignesh *left* (leave) his native village yesterday. (simple past)
I *completed* (complete) the work last week. (simple past)
He tells me that he *has solved* (solve) all the sums. (past perfect)
I *had informed* (inform) you about this pending work before. (past perfect)
I *have known* (know) you for many years. (present perfect)
She *saw* (see) a hippo in the circus. (simple past)`,

        `He *has passed* (pass) in Hindi but failed in Social Studies. (past perfect)
If you help me. I *will* reward you. (simple future)
It *has been raining* (rain) heavily for a week. (present perfect continuous)
The patient *had died* (die) before the doctor arrived. (past perfect)
He *will meet* (meet) me as soon as he returns. (simple future)
The teacher *punished* (punish) the boys because they were making a noise. (simple past)`,

        `Yesterday, I *went* (go) to the mall with my friends. (simple past)
She *was studying* (study) for her exam all night. (past continuous)
By the time I arrived, the party *had started* (start) already. (past perfect)
He *wrote* (write) a letter to his friend yesterday. (simple past)
We *were playing* (play) basketball in the park when it started raining. (past continuous)`,

        `My parents *took* (take) me to the beach last weekend. (simple past)
She *had finished* (finish) her project before the deadline. (past perfect)
They *traveled* (travel) to Japan last year. (simple past)
He *ran* (run) in the marathon yesterday. (simple past)
The teacher *was explaining* (explain) the lesson in class when the fire alarm went off. (past continuous)`,

        `I *met* (meet) my best friend after ten years. (simple past)
She *visited* (visit) her grandparents during the summer vacation. (simple past)
We *were studying* (study) for the test all week. (past continuous)
By the time we got to the theater, the movie *had started* (start) already. (past perfect)
They *moved* (move) to a new city last month. (simple past)`
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
Shipra likes to watch cricket matches on television. 
Vaishak does not study social science on Wednesday.
Nithi has been studying for exams since morning. 
Mark has been playing futsal with his friends for two hours.`
          },
          {
            name: 'Past',
            text: `We were watching FIFA all night. 
I went out with my cousins. 
Mary was walking toward the food truck. 
The bus left a few minutes back. 
The teacher taught us about bones.`
          },
          {
            name: 'Future',
            text: `I shall reach the station before the train leaves.
The log of wood will break and they will fall into the ditch.
The police will bind his hand and foot and hold him fast.
I shall break the lock open and get into the room in case I get locked out.`
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
          'Classify the following sentence based on the usage of tense in verb into correct or incorrect.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `He passed in English.
Light the lamp.
When will you take the test?
I have been ill for four days.`,

          `He is pass in English.	
When will you give the test?		
I am ill for four days.`
        ],
        [
          `She made a speech.
Our team scored two goals.
He talks as if he were mad.
What makes you laugh?`,

          `She make a speech.	
Our team made two goals.	
He talks as if he are mad.	
What make you laugh?`
        ],
        [
          `I hung my coat on the peg.
They came this morning.
He was so thirsty that he drank all the milk.`,

          `I hanged my coat on the peg.	
They have come this morning.	
He was so thirsty that he drunk all the milk.`
        ],
        [
          `I fear he will fail.
I looked into the bus - but saw none.
He fell off the roof and was injured.`,

          `I saw into the bus, but looked none.	
I feared he fail.	
He fall off the roof and injure.`
        ],
        [
          `The teacher will give us a test in English next week.
Two and two make four.
Our hen has laid ten eggs.`,

          `The teacher will take test in English next week.
Two and two makes four.
Our hen give ten eggs.`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-tense',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following tenses is used to describe actions that are happening now?`,
            options: `Present Continuous Tense, Simple Past Tense, Past Continuous Tense`
          },
          {
            qText: `Which of the following tenses is used to describe actions that were happening at a specific time in the past?`,
            options: `Past Continuous Tense, Simple Present Tense, Present Continuous Tense`
          },
          {
            qText: `Which of the following tenses is used to describe actions that happened at an unspecified time in the past or that started in the past and continue into the present?`,
            options: `Present Perfect Tense, Past Perfect Tense, Future Perfect Tense, Simple Past Tense`
          },
          {
            qText: `Which of the following tenses is used to describe actions that will be completed at a specific time in the future?`,
            options: `Future Perfect Tense, Future Continuous Tense, Present Perfect Tense, Simple Future Tense`
          },
          {
            qText: `Which of the following tenses is used to describe actions that were completed before another action in the past?`,
            options: ` Past Perfect Tense, Present Perfect Tense, Simple Past Tense, Past Continuous Tense`
          }
        ]
      }
    }
  ]
};
