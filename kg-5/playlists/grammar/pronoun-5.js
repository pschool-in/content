export default {
  id: 'pronoun-5',
  label: 'Interrogative Pronoun',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Interrogative Pronoun',
        text: [
          `These are used to ask questions. The sentences with interrogative pronouns always end with question marks. There are five Interrogative pronouns:
1. What
2. Which
3. Who
4. Whom
5. Whose`,
          {
            type: 'html',
            text: `<b>What</b> is your name?<br>
<b>Which</b> is your favourite food?<br>
<b>Who</b> did this?<br>
<b>Whom</b> did you meet yesterday?<br>
<b>Whose</b> bike is this?`
          }
        ]
      }
    },
    {
      label: 'Interrogative vs Possessive',
      id: 'drag-and-drop',
      type: 'group',
      data: {
        title: 'Drag and drop the given words in the right boxes.',
        types: [
          {
            name: 'Interrogative',
            text: `What, Who, Whom, Which, Whose`
          },
          {
            name: 'Possessive',
            text: `His, Hers, Mine, Yours, Ours`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the Sentence',
      type: 'match',
      commonData: {
        title: 'Match the Sentence',
        fontSize: '1rem'
      },
      data: [
        `What, time is it?
Who, did this?
Whose, book is this?
Which, car is yours?
To whom, should I address this letter?`,

        `Which, is the song you like?
What, is this flavor called?
Whose is, this trophy?
What is, your score?
Whose are, these folders?`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title:
          'Click on the blank and fill in the correct interrogative pronoun.'
      },
      data: [
        `*Why (What)* is the flight late?
*Who (When)* left the door open?
*Why (What)* are you sad?
*What (Which)* is your brother's name?
*Which (Whom)* car is yours?
*Who (When)* is the new student in the class?
*What (When)* would you like to wear tomorrow?
*Which (What)* one of these burgers is made of meat?
To *whom (who)* was the song dedicated?
*What (Which)* do you want to do?`,

        `*What (When)* do you want for lunch?
*What (Whom)* is your mobile number?
*Whose (Which)* bike is this?
*Whose (Who)* books are those?
*What (Which)* is the time now?
*Whom (When)* is he talking to?
*Who (Whom)* is your favorite cartoon character?
*Which (What)* of these dresses do you like?
To *whom (what)* did he give his watch?
*What (When)* did you see in the park?`
      ]
    },
    {
      id: 'classify-sentence',
      label: 'Identify the type of pronoun',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the type of pronoun.'
      },
      data: [
        {
          types: [
            {
              name: 'Reflexive pronoun',
              text: `I will do the job myself.
She went to the park by herself.
The dog hurt itself.
Shaanvi sang quietly to herself.`
            },
            {
              name: 'Possessive pronoun',
              text: `This notebook is mine.
That bike is theirs.
Is this pencil yours?
The lipstick is hers.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Interrogative pronoun',
              text: `Please tell me who took my book.
Whom are you calling?
Which one is your house?
What is this flavor called?
Whose voice was that?`
            },
            {
              name: 'Emphatic pronoun',
              text: `She herself did it.
You yourself can find your talent.
I myself will cook the dinner.
She herself baked a cake.
He himself did it.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Reflexive',
              text: `He cuts *himself* while chopping the vegetables.
I don't trust *myself* in tough times.
We blame *ourselves* for the accident.
He was speaking to *himself*.
Be careful. You may hurt *yourself*.`
            },
            {
              name: 'Emphatic',
              text: `She *herself* cooked the food.
I *myself* saw him.
He *himself* cut the cake.
We will watch the game *ourselves*.
We saw the President *himself*.`
            }
          ]
        }
      ]
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks - 2',
      type: 'fillup',
      commonData: {
        title: 'Click on the blank and fill in the right pronoun.'
      },
      data: [
        `*Her(His)* name is Sita.
*You (They)* are my best friend.
This pen is *mine(theirs)*.
*They(It)* are making a snowman.
*He (They)* sings beautifully.
I folded my clothes by *myself(themselves)*.
*Who (What)* is the new teacher?
*Which (Who)* is your favorite food?
*I (Me)* went to the library.
Is that present for *me (I)*?`,

        `*We (Us)* are going to Corbett National Park on Sunday.
*We (Us)* live in a small house.
*She (He)* is a smart girl.
This is my book. Give it to *me (I)*.
I can tell *that (those)* he is tensed.
*This (Those)* is my favorite place for the morning walk.
We bought *ourselves (themselves)* some French fries before the match.
When I woke up, I found *myself(itself)* on the sofa.
Manisha has a dog. *It (They)* is called Garfield.
Look at my shoes. *They (It)* are so colorful.`,

        `Saranya likes to cook. Everyone likes *her (his) * cooking. 
Kumar and his brother enjoy watching action films. This movie is for *them (they)*. 
Do you like movies? Please join *us (them) * at the theatre. 
I will meet Sangeetha tomorrow. I am meeting *her (him)* for the first time. 
You left *your (yours)* textbooks on the table. 
I want to know *who (whom)* is going to play a villain. 
Please eat whatever you want. The choice is *yours (your)*. 
Rekha told *him (his)* about the celebration next week. `,

        `Rahul cannot come with *us (them)* today. 
She grows Jasmine on her terrace. *They (Them)* smell sweet. 
Peacock is our national bird. *It (They)* has beautiful feathers. 
Ram will visit *his (her) * grandmother this week. 
Don't walk fast. *We (Us)* feel tired. 
Every Sunday, we meet *them (they)* at the seashore.`
      ]
    },

    {
      label: 'Type of Pronoun',
      id: 'pronoun-type',
      type: 'classifySentence',
      commonData: {
        title:
          'Identify the type of the underlined pronouns in these sentences.',
        types: ['Possessive', 'Interrogative', 'Reflexive', 'Emphatic']
      },
      data: [
        [
          `This glass is *yours* and that is *mine*.
What is *mine* is *yours*.`,

          `*What* do you want for your birthday?
*Which* of these is your shirt?`,

          `My Dad cut *himself* while shaving.
I blame *myself* for being late.`,

          `She *herself* informed me.
The city *itself* is usually dry.`
        ],
        [
          `The house across the street is *theirs*.
My laptop is not working. May I borrow *yours*?`,

          `To *whom* are you speaking?
*Whose* socks are those?`,

          `Sometimes, I talk to *myself*.
He is talking to *himself* in front of the mirror.`,

          `We *ourselves* will go to the market.
You *yourself* can do your homework.`
        ],
        [
          `I forgot my book, so he lent me *his*.
That dog is cute, but not as cute as *ours*.`,

          `*Who* wants ice cream?
*Which* of these people have you met?`,

          `We need to believe in *ourselves*.
I locked the house *myself*.`,

          `They *themselves* prefer to eat in a restaurant.
He met the President *himself*.`
        ]
      ]
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Click on the blank and fill in the right pronoun.'
      },
      data: [
        `He *himself (herself)* attended the class.
*Where (Who)* are the apples?
I saw a friend of *yours (yourself)* at the party.
*We (Us)* enjoyed hearing *her (herself)* sing.
The dog fetches the stick *itself (himself)*.
*These (Them)* shoes are very comfortable.
She asked *what (when)* we wanted for lunch.
The building *itself (herself)* is very tall.`,

        `Her writing is so much better than *mine (my)*.
*You (Yours)* are the best player on the team.
*Who (Whom)* will win the championship?
Is *that (them)* bag *yours (your)*?
*They (Them)* are coming from America.
This book is *mine (my)* not *yours (your)*.
*That (You)* is such an interesting book.`
      ]
    },
    {
      id: 'match-2',
      label: 'Match Pronouns',
      type: 'match',
      commonData: {
        title: 'Match the pronoun with its type.',
        fontSize: '1rem'
      },
      data: [
        `Me & You, Personal
This & That, Demonstrative
Mine & Hers, Possessive
Herself & Myself, Reflexive
What & Whom, Interrogative`,

        `He & She, Personal
These & Those, Demonstrative
Theirs & Ours, Possessive
Themselves & Yourself, Emphatic
Which & Whose, Interrogative`
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        isPractice: false,
        title:
          'Fill in the blanks by dragging the options given at the bottom.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `I *myself* did it.
*Whose* purse is this?
That table is *ours*.
None of *these* options are right.
*You* must stop lying now.`,

        `*That* is an amazing shop.
You *yourself* can complete this.
*He* climbed the tree very fast.
I know this glass is *yours*.
*What* are we going to do?`,

        `The dog is *hers*.
*I* want to read this book.
We will solve this problem *ourselves*.
*Which* one is the right answer?
There is no end to *this*.`
      ]
    },
    {
      id: 'fill-up',
      label: 'Type in the blanks',
      type: 'fillup-type',
      commonData: {
        title: `Click on the blanks type the right pronoun to complete the sentence.`,
        noOptions: true
      },
      data: [
      `I love cats. The cat in the picture is *mine*.
Priya spilled ink on my notebook. *She* will have to pay for *it*.
The school is taking us on a trip. *We* are very excited.
Ravi bought chocolates today. It is *his* birthday.
The class was empty. The only people there were *us*.`,

      `The dog covered *itself* with the blanket.
I bought this book. *It* is *mine*.
They are discussing the topic among *themselves*.
*You* are my best friend. What is mine, is *yours*.
She *herself* made the cake.
I will make tea by *myself*.
The village *itself* is very small.
Ishaan studies in this school. It is *his*.
I borrowed this dress from Alia. This is *hers*.
My new neighbors have a dog. This dog is *theirs*`,

      `*What* do you mean?
In *those* days, we were innocent.
*Whose* dress is this?
Those are chips and *these* are chocolates.
*Which* one of these is yours?
My dad gave *me* a present.
*Whoever* has a dog, I won't go to their house.
*This* is my bike and that is *yours*.
*Who* is at the door?
To *whom* shall I send these?`
      ]
    }
  ]
};
