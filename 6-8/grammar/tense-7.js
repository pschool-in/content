export default {
  id: 'tense-7',
  label: 'Tenses',
  lockAfter: 3,
  list: [
    {
      label: 'Present Tense',
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
            text: `Eg- He <i>drinks</i> tea every day.`
          },
          `2. Present Continous Tense: It is used for an action going on at the time of speaking or an action arranged to take place shortly.`,
          {
            type: 'html',
            text: `Eg- He <i>is drinking</i> tea.<br>
My father <i>is arriving</i> tomorrow.`
          },
          `3. Present Perfect Tense: This form of tense is used to denote an action beginning at some point in the past and continuing up to the present movement or to indicate completed activities in the immediate past.`,
          {
            type: 'html',
            text: `Eg- He <i>has just finished</i> drinking his tea.<br>
He <i>has been</i> ill since last week`
          },
          `4. Present Perfect Continous Tense: This indicates an action that began sometime in the past and is still continuing.`,
          {
            type: 'html',
            text: `Eg- He <i>has been sleeping</i> for five hours.`
          }
        ]
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
      id: 'fill-up-1',
      label: 'Fillup: Present Tense',
      type: 'fillup',
      data: [
        {
          title: `Complete the sentences in the simple present tense by choosing the appropriate option.`,
          text: `Malthi *lives (live)* in Delhi. 
Does Priya *feel (feels)* better now? 
Siji *learns (learn)* everything quickly. 
Her friend *earns (earn)* money from online business. 
Niki needs your *support (supports)*. 
Nimisha *loves (love)* to play indoor games. 
Alka and Neha *do not (does not)* play chess together. 
*Does (Do)* Manu sing a song?
Shipra likes to *watch (watched)* cricket matches on television. 
Vaishak *does not (did not)* study social science on Wednesday.`
        },
        {
          title: `Complete the sentences in the present continuous tense by choosing the appropriate option.`,
          text: `Kritika *is writing (writes)* content on women's equality. 
Jack *is not playing (has not played)* on the ground.
Jeshni *is going (has gone)* to Poland next Monday.
Sunny *is trying (tried)* to solve the mystery.
Are they *going (went)* outside?
He *is studying* (study) for his exam right now.
We *are watching (watch)*  a movie at home tonight.
The teacher *is teaching (teach)*  math to the students.
She *is listening (listen)*  to music now.
They are *traveling (travel)*  to different countries every year.`
        },
        {
          title: `Complete the sentences in the present perfect tense by choosing the appropriate option.`,
          text: `Sruthy *has not gone (will not go)* to the office today.
Priya *has visited (will visit)* the Taj Mahal.
We *have decided (decided)* to go by bus to Mangalore.
What *have (are)* they *decided (deciding)* about returning from Banglore?
Vivan *has (is)* just *visited (visting)* Jodhpur.
I *have finished (finished)* my homework.
They *have traveled (traveled)* to many countries.
She *has lived (lived)* in this city for five years.
We *have eaten (has eaten)* dinner already.
He *has studied (studied)* Spanish for two years.`
        },
        {
          title: `Complete the sentences in the present perfect continuous tense by choosing the appropriate option.`,
          text: `Nithi *has been studying (has studied)* for exams since the morning. 
Mark *has been playing (has played)* futsal with his friends for two hours.
*Has (Was)* Meera *been sitting (sitting)* here for one hour?
They *have (were)* not *been talking (talking)* to each other for five days.
Preethi *has been practicing (have practiced)* the guitar for two months now.
We *have been waiting (are waiting)* in line for over an hour.
He *has been playing (is playing)* the guitar since he was a child.
I *have been learning (am learning)* French for the past six months.
The kids *have been playing (are playing)* outside in the yard all day.
*Have (Are)* you *been exercising (excercising)* regularly lately?`
        }
      ]
    },
    {
      label: 'Past Tense',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Past Tense',
        text: [
          `1. Simple Past Tense: It is used to indicate an action completed in the past. It is also used to express past habits.`,
          {
            type: 'html',
            text: `Eg- I <i>received</i> his letter a week ago.<br>
She always <i>carried</i> an umbrella.`
          },
          `2. Past Continous Tense: It is used to indicate an action going on at some time in the past. The time of action may or may not be indicated.`,
          {
            type: 'html',
            text: `Eg- We <i>were listening</i> to the radio all evening.`
          },
          `3. Past Perfect Tense: It indicates an action completed before a certain moment in the past.`,
          {
            type: 'html',
            text: `Eg- I <i>had written</i> the letter before he arrived.`
          },
          `4. Past Perfect Continuous Tense: It is used for an action that began before a certain point in the past and continued up to that time.`,
          {
            type: 'html',
            text: `Eg- At that time <i>he had been writing</i> a novel for two months.`
          }
        ]
      }
    },
    {
      id: 'fill-up-2',
      label: 'Fillup: Past Tense',
      type: 'fillup',
      data: [
        {
          title: `Complete the sentences in the simple past tense by choosing the appropriate option.`,
          text: `I *received (receive)* your letter last morning. 
How many deer *did (do)* you see in the zoo? 
My uncle *bought (buy)* a new house last year.
Prices *rose (rise)* by sixty percent last year. 
Columbus *discovered (discover)* America.
Thousands of people *lost (lose)* their lives in the flood. 
Neha *borrowed (borrow)* ten thousand rupees from me. 
When *did (will)* you *return (returned)* from Australia? 
I *went (go)* to her house yesterday.
A thief *broke (break)* into her office last Sunday.`
        },
        {
          title: `Complete the sentences in the past continuous tense by choosing the appropriate option.`,
          text: `The toddler *was weeping (wept)* in her room.
Boys *were making (made)* so much noise in the classroom.
Why *were (was)* you *giving (gave)* her an angry look?
We saw the airplane while it *was taking (took)* off.
The students *were saying (said)* their morning prayer when I reached their school.
I *was showering (had showered)* when the doorbell rang.
My mother *was cooking (had cooked)* when I arrived home.
My sister *was reading (had read)* a novel while we were playing. 
Mother *was making (had made)* breakfast for us when the school bus came.
Renu saw that the baby *was crying (cried)* bitterly.`
        },
        {
          title: `Complete the sentences in the past perfect tense by choosing the appropriate option.`,
          text: `Pavitra *has (is)* already *taken (take)* her medicine.
If she *had prepared (prepare)* for the examination she would not have failed.
The bell *had gone (went)* before I reached the school. 
The patient *had died (dies)* before the doctor arrived. 
He *had (have)* not *left (leave)* the place before his father permitted him.
*Had (Did)* the child *slept (sleep)* before his father returned from office? 
The rain *had stopped (stops)* by the time we stepped out of our house.
If you *had helped (helps)* him, he would have got the first rank. 
The movie *had started (started)* when I reached the hall.
If he *had boarded (boards)* a bus instead of walking, he would have caught the train.`
        },
        {
          title: `Complete the sentences in the past perfect continuous tense by choosing the appropriate option.`,
          text: `He *had been studying (had studied)* hard since December. 
Mariyam *had been fooling (has fooled)* Priya for many years.
How long *had (has)* the three neighbors *been quarreling (quarreled)* when a fourth one joined them? 
Heena *had been sleeping (has slept)* for five hours when Riyas knocked at her door. 
Tenzing *had been trying (had tried)* to climb Everest for many years before he succeeded in his mission.
By the time I arrived, they *had been discussing (discussed)* the issue for hours.
Had you *been living (lived)* in the city long before you decided to move?
The company *had been experiencing (experienced)* financial difficulties for some time before it went bankrupt.
We *had been cooking (were cooking)* dinner when the power suddenly went out.
She *had been traveling (travelled)* around the world for six months before she returned home.`
        }
      ]
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
      label: 'Fillup: Past Tense',
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
We *travelled* to Europe last summer.`,

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
      label: 'Future Tense',
      type: 'passage',
      id: 'passage-3',
      data: {
        title: 'Future Tense',
        text: [
          `1. Simple Future Tense: It is used to talk about things that we cannot control. We use this tense to talk about what we think or believe will happen in the future.`,
          {
            type: 'html',
            text: `Eg- I <i>shall</i> be twenty next Saturday.<br>
I am <i>going</i> to buy a car.`
          },
          `2. Future Continuous Tense: It indicates actions that will progress at a time in the future or planned things that are expected to happen in the future.`,
          {
            type: 'html',
            text: `Eg- I <i>will be staying</i> there till next Sunday.`
          },
          `3. Future Perfect Tense: Is is used to talk about actions that will be completed by a certain time in the near future.`,
          {
            type: 'html',
            text: `Eg- I <i>shall have completed</i> my work by then.<br>
By the end of the month, <i>I will have worked</i> here for 5 years.`
          },
          `4. Future Perfect Continuous Tense: It is used for actions that had been in progress over a while and will end in the future.`,
          {
            type: 'html',
            text: `Eg- I <i>will have been teaching</i> for twenty years next July.`
          }
        ]
      }
    },
    {
      label: 'Fillup: Future Tense',
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
      label: 'Fillup: Tenses',
      type: 'fillup',
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
        `Vignesh *left (leave)*  his native village yesterday. 
I *completed (complete)* the work last week. 
He tells me that he *has solved (solve)* all the sums. 
I *had informed (inform)* you about this pending work before. 
I *have known (know)* you for many years. 
She *saw (see)* a hippo in the circus. 
He *has passed (pass)* in Hindi but failed in Social Studies. 
If you help me. I *will (have)* reward you. 
It *has been raining (rainning)*  heavily for a week.
The patient *had died (die)* before the doctor arrived. 
He *will meet (meet)* me as soon as he returns.
The teacher *punished (punish)* the boys because they were making a noise.`,

        `Yesterday, I *went (go)* to the mall with my friends. 
She *was studying (study)* for her exam all night. 
By the time I arrived, the party *had started (start)* already. 
He *wrote (write)* a letter to his friend yesterday. 
We *were playing (play)* basketball in the park when it started raining. 
My parents *took (take)* me to the beach last weekend. 
She *had finished (finish)* her project before the deadline. 
They *travelled (travel)* to Japan last year. 
He *ran (run)* in the marathon yesterday. 
The teacher *was explaining (explain)* the lesson in class when the fire alarm went off.`,

        `I *had eaten (ate)* breakfast by the time my friend arrived.
Sarah *had finished (finished)* playing soccer with her friends before it started raining.
We had already *walked (walk)* out of the zoo before the monkey had escaped.
The movie had already *started (starts)* by the time we got to the theater.
My parents *had visited (visited)* the zoo before, so they knew the way.
The teacher *had explained (explained)* the lesson before the test.
Jack *had studied (studied)* for his exam all week.
I *had visited (visited)* my grandparents several times before they moved to Durgapur.
She *had cleaned (cleaned)* her room yesterday morning before going out with her friends.
The concert had already *ended (ends)* by the time we arrived at the venue.`
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
When will you took the test?		
I am ill for four days.`
        ],
        [
          `She made a speech.
Our team scored two goals.
He talks as if he were mad.
What makes you laugh?`,

          `She make a speech.	
Our team score two goals.	
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
Our hen has lay ten eggs.`
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
    },
    {
      label: '12 Forms of Tense',
      type: 'passage',
      id: 'passage-4',
      data: {
        title: '12 Forms of Tense',
        text: [
          `# Examples 
I-write`,
          {
            type: 'hilight',
            text: `1. Simple Present: I write.
2. Present Continuous: I am writing.
3. Present Perfect: I have written.
4. Present Perfect Continuous: I have been writing.
5. Simple Past: I wrote.
6. Past Continuous: I was writing.
7. Past Perfect: I had written.
8. Past Perfect Continuous: I had been writing.
9. Simple Future: I will write.
10. Future Continuous: I will be writing.
11. Future Perfect: I will have written.
12. Future Perfect Continuous: I will have been writing.`
          },
          `I-eat`,
          {
            type: 'hilight',
            text: `1. Present simple: I eat.
2. Present continuous: I am eating.
3. Present perfect: I have eaten.
4. Present perfect continuous: I have been eating.
5. Past simple: I ate.
6. Past continuous: I was eating.
7. Past perfect: I had eaten.
8. Past perfect continuous: I had been eating.
9. Future simple: I will eat.
10. Future continuous: I will be eating.
11. Future perfect: I will have eaten.
12. Future perfect continuous: I will have been eating.`
          },
          `I-walk`,
          {
            type: 'hilight',
            text: `1. Present simple: I walk.
2. Present continuous: I am walking.
3. Present perfect: I have walked.
4. Present perfect continuous: I have been walking.
5. Past simple: I walked.
6. Past continuous: I was walking.
7. Past perfect: I had walked.
8. Past perfect continuous: I had been walking.
9. Future simple: I will walk.
10. Future continuous: I will be walking.
11. Future perfect: I will have walked.
12. Future perfect continuous: I will have been walking.`
          },
          `He-drive-car`,
          {
            type: 'hilight',
            text: `1. Simple Present: He drives a car.
2. Simple Past: He drove a car.
3. Simple Future: He will drive a car.
4. Present Continuous: He is driving a car.
5. Past Continuous: He was driving a car.
6. Future Continuous: He will be driving a car.
7. Present Perfect: He has driven a car.
8. Past Perfect: He had driven a car.
9. Future Perfect: He will have driven a car.
10. Present Perfect Continuous: He has been driving a car.
11. Past Perfect Continuous: He had been driving a car.
12. Future Perfect Continuous: He will have been driving a car.`
          },
          `I-study-English`,
          {
            type: 'hilight',
            text: `1. Simple Present: I study English.
2. Simple Past: I studied English.
3. Simple Future: I will study English.
4. Present Continuous: I am studying English.
5. Past Continuous: I was studying English.
6. Future Continuous: I will be studying English.
7. Present Perfect: I have studied English.
8. Past Perfect: I had studied English.
9. Future Perfect: I will have studied English.
10. Present Perfect Continuous: I have been studying English.
11. Past Perfect Continuous: I had been studying English.
12. Future Perfect Continuous: I will have been studying English.`
          }
        ]
      }
    },
    {
      type: 'makeSentence',
      label: 'Convert Tense',
      id: 'make-sentence-1',
      data: [
        {
          title:
            'Convert the sentences in Past Tense to Simple Future Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is yesterday last earlier for am',
          text: `I visited my grandparents last week. | I will visit my grandparents next week
They went to the beach yesterday. | they will go to the beach tomorrow
She cooked dinner for us last night. | she will cook dinner for us tonight
We watched a movie yesterday. | we will watch a movie tomorrow
He completed his homework yesterday. | he will complete his homework tomorrow`
        },
        {
          title:
            'Convert the sentences in Present Continuous Tense to Past Continuous Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is had have an the been us',
          text: `I am studying for my exam. | I was studying for my exam
She is working late tonight. | she was working late last night
They are watching a movie. | they were watching a movie
He is cooking dinner in the kitchen. | he was cooking dinner in the kitchen
We are waiting for the bus. | we were waiting for the bus`
        },
        {
          title:
            'Convert the sentences in Past Tense to Simple Future Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is yesterday last earlier for am',
          text: `They finished the project last month. | they will finish the project next month
She studied for her exam yesterday.| she will study for her exam tomorrow
We traveled to Paris last year.| we will travel to Paris next year
He bought a new car last week.| he will buy a new car next week
They celebrated their anniversary last night.| they will celebrate their anniversary tonight `
        },
        {
          title:
            'Convert the sentences in Present Continuous Tense to Future Continuous Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is had have an the been us',
          text: `I am watching a movie tonight. | I will be watching a movie tonight
She is meeting her friends for dinner tomorrow.| she will be meeting her friends for dinner tomorrow
They are traveling to Europe next month. | they will be traveling to Europe next month
He is working on a new project next week.| he will be working on a new project next week
We are studying for the exam this weekend.| we will be studying for the exam this weekend`
        },
        {
          title:
            'Convert the sentences in Past Tense to Simple Future Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is yesterday last earlier for am',
          text: `We finished reading the book last night.| we will finish reading the book tonight
He ran a marathon last month.| he will run a marathon next month
They cleaned the house yesterday.| they will clean the house tomorrow
We traveled to Europe last summer. | we will travel to Europe next summer
They visited the museum earlier today. | they will visit the museum later today`
        },
        {
          title:
            'Convert the sentences in Past Tense to Past Perfect Continuous Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is yesterday last earlier for am',
          text: ` I worked on the project for six hours.| I had been working on the project for six hours
She studied French for two years.| she had been studying French for two years
They played soccer all afternoon.| they had been playing soccer all afternoon
We traveled around Europe for a month. | we had been traveling around Europe for a month
He practiced the piano for hours.| he had been practicing the piano for hours`
        },
        {
          title:
            'Convert the sentences in Simple Future Tense to Future Perfect Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is had have an the been us',
          text: `I will finish my work by 5 PM. | I will have finished my work by 5 PM
She will have completed her degree by next year.| she will have completed her degree by next year
They will arrive at the airport before noon. | they will have arrived at the airport before noon
We will have saved enough money for our vacation by July.| we will have saved enough money for our vacation by July
He will have finished reading the book by tomorrow.| he will have finished reading the book by tomorrow`
        },
        {
          title:
            'Convert the sentences in Simple Present Tense to Present Continuous Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is had have an the been us',
          text: ` I eat breakfast every morning. | I am eating breakfast right now
She reads a book every evening.| she is reading a book at the moment
They play soccer on weekends.| they are playing soccer today
He works in an office downtown.| he is working in an office downtown
We study English at the language school.| we are studying English at the language school`
        },
        {
          title:
            'Convert the sentences in Past Continuous Tense to Past Perfect Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is had have an the been us',
          text: `I was studying when the phone rang. | I had been studying when the phone rang
She was cooking dinner when the power went out.| she had been cooking dinner when the power went out
They were playing basketball when it started raining. | they had been playing basketball when it started raining
We were waiting for the bus when it finally arrived.| we had been waiting for the bus when it finally arrived
He was working on his assignment when the computer crashed.| he had been working on his assignment when the computer crashed.`
        },
        {
          title:
            'Convert the sentences in Future Tense to Past Perfect Tense. Drag & Drop the words from the bottom and construct the sentence.',
          extras: 'is yesterday last earlier for am',
          text: `I will finish my work by 5 PM.| I had finished my work by 5 PM
She will have completed her degree by next year.| she had completed her degree by the following year
They will arrive at the airport before noon.| they had arrived at the airport before noon
We will have saved enough money for our vacation by July. | we had saved enough money for our vacation by July
He will have finished reading the book by tomorrow.| he had finished reading the book by the following day`
        }
      ]
    }
  ]
};
