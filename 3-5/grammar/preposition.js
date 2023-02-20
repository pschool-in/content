export default {
  label: 'Preposition',
  id: 'preposition',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading - Preposition',
      data: {
        title: 'Preposition',
        text: [
          `A preposition is a word that shows relationship between a noun, pronoun, or any other word in a sentence.
Find below, some of the common prepositions.`,
          {
            type: 'sitewords',
            text:
              'of, with, at, to, in, for, on, by, about, like, through, over, before, between, after, since, without, under, within, along, following, across, behind, beyond, near, from, into, during, including, until, against, among, throughout, despite, towards, upon, concerning',
            width: 80
          }
        ]
      }
    },
    {
      id: 'preposition-time',
      type: 'passage',
      label: 'Preposition of Time',
      data: {
        title: 'Preposition of time',
        text: `# at
'At' is used to represent particular time of a day.
{"type": "hilight", "text": "at 4 o'clock, at 10:30, at noon, at night, at midnight, at lunch time, at dinner time, at present, at the moment"}
'At' is also used with special celebrations.
{"type": "hilight", "text": "at Christmas, at the weekend"}
# in
'In' is used with months, seasons, year.
{"type": "hilight", "text": "in April, in the summer, in the spring, in 1990"}
'In' is also used to represent parts of the day.
{"type": "hilight", "text": "in the morning, in the afternoon, in the evening"}
# on
'On' is used to represent days.
{"type": "hilight", "text": "on Tuesday, on 15th June, on my birthday"}
On is also used to represent parts of a specific day.
{"type": "hilight", "text": "on Monday morning, on Friday evening, on Sunday afternoon"}
No need for preposition before 'Last' or 'Next'.
{"type": "hilight", "text": "Call me next week.\\nI met her last Friday."}
# For vs Since
'For' is used with a period of time.
'Since' is used to refer to a specific point in time.
{"type": "hilight", "text": "I have been waiting for 2 hours.\\nI have been waiting since 4'o clock."}
# Ago vs Before
Use 'ago' to talk about the past with reference to the present.
Use 'before' to talk about the past with reference to another time in the past.
{"type": "hilight", "text": "I completed the course, 3 years ago.\\nI met him, 2 weeks before the holidays."}
# By vs Until
'By' is used for one specific event that happens before a certain time in the future.
'Until' is used for a continuous event that stops at a certain time in the future.
{"type": "hilight", "text": "Please return my book by Monday.\\nI will study for exams until Monday."}
`
      }
    },
    {
      label: 'Find Preposition',
      type: 'selectWord',
      lockAfter: 2,
      commonData: {
        title: 'Select the preposition in these sentences.'
      },
      data: [
        `I’ll call you *after* reaching home.
Please send me the information *by* Monday.
He’s staying in London *until* the end of the month.
I haven’t met him *in* months.
It was the worst storm *in* decades.
He loves music *since* childhood.
I will be home *from* the morning walk soon.
No one was allowed to use any written materials *during* the exam. 
I have known him *since* our school days.
I have known him *for* a long time.`,

        `Radha was sitting *under* a tree.
The school will start *at* nine o'clock.
We will meet *during* lunchtime.
I cooked dinner *for* my mother.
Monday comes *after* Sunday.
Tell me *about* the film you saw yesterday.
Can I come *with* you?
We must submit the assignment *by* Saturday.
Can you please help me *with* my homework?
The ball rolled *down* the stairs.`,

        `Sam needs five pieces *of* chart paper.
Will you please give me a glass *of* water?
Mani bought a bag *of* rice yesterday.
Who is that little girl *with* curly hair?
We are living *in* Chennai.
Please don't mix the juice *with* water.
She will be going *to* a meeting now.
Some birds flew *over* the bridge.
I must complete my work *before* dinner.`,

        `Mamta has a meeting *in* the afternoon.
We will go to the movie *on* Sunday evening.
We get up early *in* the morning.
Anita had breakfast *at* 8 am.
It is always hot *in* summer.
I have my birthday *on* 15th May.
We go to bed *at* night.
The movie starts at two *in* the afternoon.
The autumn season begins *in* September.
My friends came to my house *on* my birthday.`,

        `Christmas comes *on* 25th December.
We shall meet *at* the weekend.
They were married *in* 1990.
The house was very quiet *at* midnight.
Let us meet *at* dinner time.
Christmas comes *in* December.
We usually have tea *in* the morning.
We shall meet *at* the party.
They play tennis *in* the evening.
Breakfast is served *at* seven o'clock.`,

        `They climbed *up* the trees.
The frog jumped *into* the pond.
Do not write *below* this line.
I am sitting *between* Anu and Vivek.
The crow dropped pebbles *into* the jar.
The flowers are *in* the vase.
We are sitting *on* the mat.
He hid my toy *under* the sofa.
John jumped *into* the pool.
She received a gift *from* her brother.`,

        `My uncle came *from* USA.
The books are *in* the bag.
They were hiding *inside* the wardrobe.
Keep silence *in* the library.
I live *across* the river.
The police broke *into* the house.
The car is *in* the garage.
There is a big tree *beside* the river.
Death valley is 86 meters *below* the sea level.`
      ],
      id: 'select-word'
    },
    {
      id: 'time-in-at-on',
      label: 'Preposition of Time : in, at, on',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title: 'Click on the blanks and pick the correct preposition.',
        options: 'at, in, on'
      },
      data: [
        `Mamta has a meeting *in* the afternoon.
We will go to a movie *on* Sunday evening.
We get up early *in* the morning.
Anita had breakfast *at* 8 am.
It is always hot *in* summer.
I have my birthday *on* 15th May.
We go to bed *at* night.
The movie starts at two *in* the afternoon.
The autumn season begins *in* September.
I will be ready *in* ten minutes.`,

        `Christmas is celebrated *on* 25th December.
We shall meet *on* the weekend.
They were married *in* 1990.
The house was very quiet *at* midnight.
Let us meet *at* dinner time.
Christmas comes *in* December.
We usually have tea *in* the morning.
We shall meet *at* the party.
They play tennis *in* the evening.
Breakfast is served *at* seven o'clock.`
      ]
    },
    {
      label: 'Correct Sentence',
      id: 'next-last',
      type: 'classifySentence',
      data: {
        title: 'Is this a correct sentence?',
        types: [
          {
            name: 'Correct',
            text: `We have an exam next week.
I met him last Sunday.
There was not much rain last winter.
We shall play tennis next time.
Where did you go last weekend?`
          },
          {
            name: 'Wrong',
            text: `We have an exam in next week.
I met him on last Sunday.
There was not much rain at last winter.
We shall play tennis in the next time.
Where did you go in the last weekend?`
          }
        ]
      }
    },
    {
      id: 'ago-before',
      label: 'Right Preposition: Ago, Before',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the correct preposition.',
        text: `It happened a long time *ago*.
Your dad called you 10 minutes *ago*.
I have seen this film *before*.
Have you been here *before*?
A few hours *ago*, the teacher made the announcement.
I have met him *before*.
Many years *ago*, there lived an old farmer.
You have to cancel the tickets at least a day *before*.
2 years *ago*, he started playing guitar.
Tim learned cycling one year *before* he started school.
I have never ridden a horse *before*.`,
        options: 'ago, before'
      }
    },
    {
      label: 'Until vs By',
      id: 'by-until',
      type: 'classifySentence',
      data: {
        title: 'Select the correct preposition that will fill the blanks.',
        types: [
          {
            name: 'By',
            text: `Please return my book _____ Monday.
The school will open _____ Monday.
We must finish our homework _____ 6 o'clock.
Make sure to return home _____ sunset.
According to the weather report, the rain will start _____ tomorrow.
_____ the time she arrived, the show had already begun.`
          },
          {
            name: 'Until',
            text: `I will study for exams _____ Monday.
The office should be open _____ 5 o'clock.
Don't do anything _____ your mom come.
According to the weather report, the rain will not stop _____ tomorrow.
I need time _____ Sunday to complete the work.
_____ what time are you open today?
Can you look after the baby _____ I get back?`
          }
        ]
      }
    },
    {
      id: 'for-since',
      label: 'For vs Since',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the correct preposition.',
        text: `He is sick *since* last Sunday.
Anu is playing tennis *for* two years.
We have had no exams *for* three months.
I am living in Mumbai *since* 2015.
I have been waiting for you *since* 6 o'clock.
She has not seen her father *for* many years.
I haven't eaten anything *since* breakfast.
You are watching TV *for* hours.
We are living here *for* two months.
Home many times, have you visited the park *since* winter?`,
        options: 'for, since'
      }
    },
    {
      id: 'as-like',
      label: 'As vs Like',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the correct preposition.',
        text: `His hair was so soft. It was just *like* silk.
She is working *as* a doctor.
Stop acting *like* a baby.
No one can paint *like* her.
Do it *as* I taught you.
He works *as* a hotel manager.
I'm not sure. It tastes *like* fish.
It is the same  *as* the one I bought.
It is very hot. It is *like* being in an oven.
He is known *as* one of the greatest actors in the country.`,
        options: 'as, like'
      }
    },
    {
      id: 'among-between',
      label: 'Among vs Between',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the correct preposition.',
        text: `In the forest, I saw a small house *among* the trees.
There was a big stone *between* the two wheels.
Our school is *between* the park and the police station.
The thief disappeared *among* the crowd.
The four friends shared the pizza *among* themselves.
I have to choose *between* tennis and cricket. I am confused because I like both games.
I had to sit *between* two students I don't know.
Choose *between* strawberry and chocolate. Which one do you like?
It rains a lot *between* October and December.
The distance *between* my house and school is 2 km.`,
        options: 'among, between'
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Reading - Preposition of direction',
      data: {
        title: 'Preposition of Direction',
        text: [
          `Preposition of direction can be used to show how something is directed to somewhere.`,
          `# to`,
          `It is used to indicate a movement in the direction of a place.`,
          {
            type: 'html',
            text: `He went <b>to</b> New York yesterday.<br>
They came <b>to</b> the theatre with their kid.`
          },
          `# towards`,
          `It is used to indicate the direction.`,
          {
            type: 'html',
            text: `They are driving <b>towards</b> the mall.<br>
She went <b>towards</b> the kitchen.`
          },
          `# into`,
          `It is used to indicate a movement going inside something.`,
          {
            type: 'html',
            text: `He put the garbage <b>into</b> the dustbin.<br>
The boy jumped <b>into</b> the well.`
          }
        ]
      }
    },
    {
      id: 'under-into-over',
      label: 'under vs into vs over',
      type: 'fillup',
      commonData: {
        title: 'Click on the blanks and pick the correct preposition.',
        options: 'under, into, over'
      },
      data: [
        `Mohan jumped *over* the wall.
Is he looking *into* the screen?
The cat is *under* the table.
You go straight *into* the office.
They stood *under* a tree.
We flew *over* the hills.
He hid *under* the bed.
Go *over* the railway line.
Let's go *into* the swimming pool.
The carpet *under* my feet is very hard.`,

        `Mom held the umbrella *over* both of us.
Rafi moved the table *into* the dining room.
We slept *under* the open sky.
A helicopter dropped flowers *over* the city.
Rajesh jumped *into* the lake.
He kept his shoes *under* the table.
There are clouds *over* the hills.`
      ]
    },
    {
      id: 'in-on-at',
      label: 'Preposition of Place: In, On, At',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct preposition in each sentence.',
        options: 'in, on, at'
      },
      data: [
        `Keep the book *on* the table.
Write your name *on* the paper.
I keep my pen *in* my bag.
Pooja was waiting *at* the bus stop.
Put the waste *in* the bin.
Raju stayed *at* home all weekend.
He lives *at* number 10, Patel Road.
The theatre is *on* the right.
They are *in* the car.`,

        `Look at the picture *on* the wall.
Look at the flower *in* the picture.
The milkman is *at* the door.
What's *on* the menu today?
She was sitting *at* her desk.
She is growing tomatoes *in* her garden.
He waited for his mom *at* school.
Riti was born *in* Chennai.
I am standing *on* the road.`
      ]
    }
  ]
};
