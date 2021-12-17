export default {
  label: 'Subject and Predicate',
  id: 'sentence-4',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Notes',
        text: [
          `Every sentence has two parts: a subject and a predicate.
The subject is what (or whom) the sentence is about.
The predicate tells something about the subject.
In the below sentences, the highlighted part is subject and the remaining is the predicate.`,
          {
            type: 'html',
            text: `eg: <br>
<b>John</b> plays cricket.<br>
<b>Rabbits</b> like carrot.<br>
<b>It</b> is raining.<br>
<b>I</b> like dogs.`
          },
          `Subjects can be made up of more than one word too.`,
          {
            type: 'html',
            text: `eg: <br>
<b>The children</b> played in the field.<br>
<b>Sam and John</b> are best friends.`
          },
          `The above sentence is not about 'Sam' or 'John' alone. It is about both of them.`,
          {
            type: 'html',
            text: `<b>My dad's cell phone ringtone</b> is funny.`
          },
          `The above sentence is not about 'dad' or 'cell phone'. It is about the ringtone. The other words are modifiers of 'ringtone'. 
Usually, the subject comes at the beginning of a sentence, but sometimes it comes at the end.`,
          {
            type: 'html',
            text: `Out of the woods came <b>a tiger</b>.<br>
Up and down went <b>the swing</b>.<br>
Down the road ran <b>the little boy</b>.`
          }
        ]
      }
    },
    {
      label: 'Find Subject',
      type: 'selectWord',
      id: 'select-word',
      commonData: {
        title: 'Click on the word(s) in the sentence, which forms the subject.',
        multiSelect: true
      },
      data: [
        `*Ramya* plays tennis.
*Cats* like milk.
*It* rained heavily.
*I* am sad.
*I* like your toy car.
*We* are watching TV.
*John* was crying.
*I* have three pens.
*They* are rich.
*Google* is a search engine.`,

        `*Your mom* is very kind.
*Her dress* is beautiful.
*The floor* is wet.
*The door* is locked.
*The horse* likes to eat hay.
*My parents* said that I could get a dog.
*The students* studied hard for the test.
*My mom* loves me very much.
*I* want to have a dog.
*I* took a picture of my family.
*Their house* was flooded last week.`,

        `*My friends and I* like to swing at the park.
*The bee* drank the nectar from the flower.
*Ram's new pencil box* is ugly.
*Sasha* is my beautiful cat!
*The train* was late again!
*The rose* is a beautiful flower!
*A squirrel* has a bushy tail.
*The audience* looked restless and bored!
*The horse* jumped easily over the fence
*Kiki, the parrot* was lost in the city.`
      ]
    },
    {
      label: 'Find Predicate',
      type: 'selectWord',
      id: 'select-word-2',
      commonData: {
        title: 'Click on the words in the sentence, which forms the predicate.',
        multiSelect: true
      },
      data: [
        `Gopal *is writing.*
He *is happy.*
Geeta *likes coffee.*
Gold *is expensive.*
Geeta and Gopal *are friends.*
Her dress *is beautiful.*
Tommy *is a dog.*
The water *is very cold.*
They are *buying gifts.*
The drama *was funny.*`,

        `The last room in the house *was locked.*
The oldest building in the village *is damaged.*
Me and my friends *played carrom.*
The smartest boy in the class *is naughty.*
The sun *was shining brightly.*
The dogs *were barking loudly.*
The umbrella *is broken.*
China *is a big country.*
The buildings in the city *are very high.*
My aunt *works in this hospital.*`
      ]
    },
    {
      label: 'Right Predicate',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'rightOpen',
        title: 'Match the right part that goes with the subject.',
        printTitle: 'Pick the right part of the sentence.',
        leftWidth: 125,
        rightWidth: 195,
        fontSize: '1rem'
      },
      data: [
        {
          fontSize: '1.6rem',
          text: `I| am a boy.| is a boy.
We| are friends.| is friends.
I| am late.| are late.
He| likes tea.| like tea.
My friends| are coming.| is coming.
They| are late.| is late.
Siva| is coming.| are coming.
Gopal| was sick.| are sick.
My dad| likes the movie.| like the movie.
It| is dark.| are dark.`
        },
        {
          text: `Their plan| failed.| is failed.
My goal| is to become a doctor.| are to become a doctor.
My friends| liked my joke.| likes my joke.
Their parents| are very strict.| is very strict.
It| is dark outside.| are dark outside.
Ramya and Geeta| are playing together.| is playing together.
The class teacher| warned us.| is warned us.
John and his parents| are coming. | is coming.
All students in our classroom | are present. | is present.
The kitchen in our house | is empty. | are empty.`
        }
      ]
    },
    {
      type: 'sequence',
      label: 'Find the Sentence',
      id: 'find-sentence',
      lockAfter: 2,
      commonData: {
        printTitle: 'Rewrite the words and form proper sentence.'
      },
      data: [
        `the report was sent yesterday
  do you understand my question
  be happy with what you have
  your performance will be observed
  competition details will be notified
  erase the drawing and draw again
  beggars live on the streets
  good habits make great kids
  list out the grocery items
  John climbed the coconut tree`,

        `the teacher gave us homework
  this pen belongs to Ruby
  I'm happy with my family
  your stage performance was wonderful
  father lit the candle
  dry leaves filled the ground
  John helps the needy people
  children are solving sudoku
  some books are damaged`,

        `Eskimos live in the igloos
  I like to learn guitar
  cats live longer than dogs
  these mangoes are sweet
  Fathima bought a torchlight
  playing treasure games is interesting
  Sam likes to read stories
  the teacher gave easy problems`,

        `my pet parrot flew away
  clean your hands with sanitizer
  Geetha kicked the ball
  the old man walks slowly
  your handwriting is legible
  climber plants need support
  students are waiting in the classroom
  octopus has eight tentacles
  mango has one big seed
  John hid the chocolate`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Classify Sentence Type',
      id: 'sentence-type',
      lockAfter: 2,
      commonData: {
        title: 'Classify the below sentences.',
        types: ['Declarative', 'Imperative', 'Interrogative']
      },
      data: [
        [
          `We have planned to go for a picnic.
            The gift was sent by her brother.
            I came first in the running race.`,
          `Don't play in the rain.
            Wipe your hands properly!
            Please remember your belongings.`,
          `Did they reach home on time?
            Who will raise the flag on important occasions?
            Does she have difficulties in maths?
            Do you want to come for the tour?`
        ],
        [
          `Fathima lost her water bottle.
            Wild animals live in the forest.
            Fruits and vegetables are good for health.
            Father came to school yesterday.`,
          `Wake up early in the morning
            Stop feeding the dog from the table.
            Please consider my opinion. `,
          `When is the English hour?
            Why have you scored less marks?
            Which is your place in the classroom?`
        ],
        [
          `John got a new watch as his birthday gift.
            Taylor is punctual every day.
            My pet parrot is sleeping on the couch.`,
          `Go straight ahead and take the second left.
            Don't eat too much junk food.
            Get out of my sight.
            Don't touch without washing your hands.`,
          `Who is in charge of your class? 
            How do you come to school?
            Whom do they want to meet?`
        ],
        [
          `I watched TV and forgot the homework.
            John brushes his teeth twice a day.
            Papers are torn by the child.`,
          `Nobody can stop the time.
            Stop biting your fingernails.
            Stop blabbering in front of people.`,
          `Can you help the old man?
            Will you call your friend?
            Could he throw away the waste materials?
            Which is the fastest route to the zoo?`
        ],
        [
          `Table lamp was on all day.
            She is a humble girl and never wears costly dresses.
            Food was spoiled because it was kept open all day.
            The teacher is so strict and won't excuse even small mistakes.`,
          `Have the grit to solve the problems.
            Hand me the file.
            Be there at 8'0 clock.`,
          `Why did Ramya leave so early?
            Is your house ready for visitors?
            Would they participate in the football tournament?`
        ],
        [
          `John wakes up early in the morning.
            There was heavy rain in the morning.
            I don't think anyone has met an alien.`,
          `Laugh louder for the joke.
            Join us for the dinner.
            Stay strong always. 
            Wash your clothes.`,
          `Should we submit an assignment tomorrow?
            Shall we change the prayer time?
            Can you clean the classroom?`
        ]
      ]
    }
  ]
};
