export default {
  label: 'Subject and Predicate',
  id: 'subject-predicate',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Notes',
        text: [
          `Every sentence has two parts: a subject and a predicate.`,
          `The subject is what (or whom) the sentence is about.`,
          `The predicate tells something about the subject.`,
          `In the below sentences, the highlighted part is subject and the remaining is predicate.`,
          {
            type: 'html',
            text: `eg: <br>
<b>John</b> plays cricket.<br>
<b>Rabbits</b> like carrot.<br>
<b>It</b> is raining.<br>
<b>I</b> like dogs.`
          },
          `Subjects can be made up of more than one words too.`,
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
          `The above sentence is not about 'dad' or 'cell phone'. It is about the ringtone. The other words are modifiers of 'ringtone'.`,
          `Usually the subject comes at the beginning of a sentence, but sometimes it comes at the end.`,
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
*Ram's new pencilbox* is ugly.
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
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the right part of the sentence.',
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
My friends| are coming.| is coming.`
        },
        {
          text: `They| are late.| is late.
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
It| is dark outside.| are dark outside.`
        },
        {
          text: `Ramya and Geeta| are playing together.| is playing together.
The class teacher| warned us.| is warned us.
John and his parents| are coming. | is coming.
All students in our classroom | are present. | is present.
The kitchen in our house | is empty. | are empty.`
        }
      ]
    }
  ]
};
