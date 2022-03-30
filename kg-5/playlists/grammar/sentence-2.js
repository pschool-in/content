export default {
  label: 'Types of Sentence',
  id: 'sentence-2',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading ',
      data: {
        title: 'Sentence',
        text: [
          `A sentence is usually a group of words connected to form a meaningful idea. Any written text is made up of a collection of sentences. Sentences can be classified into 4 types.
# Declarative
A declarative sentence simply makes a statement or expresses an opinion. In other words, it declares something. This is the most common and frequently used type of sentence. eg: 
I am reading a book.
# Imperative
An imperative sentence gives a command or makes a request. Usually, in imperative sentences, the subject is hidden and understood. eg:
Please sit down.
# Interrogative
An interrogative sentence asks a question. It usually ends with a question mark. eg:
What is your name?
# Exclamatory
An exclamatory sentence is a sentence that expresses great emotions such as excitement, surprise, happiness and anger, and ends with an exclamation point. eg: 
Wow! I really like it!`
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The declarative sentence is usually used to ',
            options: 'make statements, issue commands, ask questions'
          },
          {
            qText: 'Statements usually end with  _____ .',
            options:
              'a full-stop (period), a question mark, an exclamation mark'
          },
          {
            qText: 'An interrogative sentence usually ends with _______ .',
            options:
              'a question mark, a full-stop (period), an exclamation mark'
          },
          {
            qText:
              'The subject is usually understood and not mentioned in ________ sentence.',
            options: 'an imperative, an exclamatory, an interrogative '
          },
          {
            qText: 'The most frequent sentence type is _______ .',
            options: 'declarative, interrogative, imperative'
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'True or False',
      id: 'sentence-type',
      lockAfter: 2,
      commonData: {
        title: 'State whether the following statements are true or false.',
        types: ['True', 'False']
      },
      data: [
        [
          `Declarative sentences and statements are the same.
Orders and commands are called imperative sentences.
'Please sit down.' is an imperative sentence.`,
          `Imperative and exclamatory sentences are the same.
Sentences that ask questions are called imperative sentences.
Exclamatory sentences end with a question mark.`
        ],
        [
          `Sentences that ask questions are called interrogative sentences.
Exclamatory sentences express strong feelings.
Interrogative sentences always end with a question mark.`,
          `Interrogative and imperative sentences are the same.
Sentences are of 5 types.
'What a pleasant day!' is an interrogative sentence.`
        ]
      ]
    },
    {
      type: 'classifySentence',
      label: 'Classify Sentence Type',
      id: 'sentence-type-2',
      lockAfter: 2,
      commonData: {
        title: 'Classify the below sentences.',
        types: ['Declarative', 'Imperative', 'Interrogative']
      },
      data: [
        [
          `I like coffee.
Two plus two makes four.
Snow is white.`,
          `Please, come in.
Move out of my way!
Get out of here!`,
          `What is your name?
Why is the sky blue?
How are you today?
May I come in?`
        ],
        [
          `India won the match.
Ram is a brave fighter.
I have faith in God.
I am a student.`,
          `Wake up now!
Have some coffee.
Do the work right now.`,
          `Shall I take some rest?
Where is your house?
Do you play carrom?`
        ],
        [
          `The sun rises in the east.
Leaves are green in color.
Today is a holiday.`,
          `Please join us for dinner.
Complete the homework by tomorrow.
Make sure you come in clean clothes.
Find my eraser.`,
          `What is the time now?
Where have you gone?
Whose pen is this?`
        ],
        [
          `These grapes are sour.
Hens lay eggs.
He is a popular singer.`,
          `Please be quiet.
Pass the bag.
Go now!`,
          `Have you gone to the park?
Shall we climb on the tree?
Have you brushed your teeth today?
Is this your jacket?`
        ],
        [
          `Books are kept on the table.
Children are playing in the garden.
She is a very clever girl.
My favorite color is yellow.`,
          `Don't sit there!
Don't forget to complete your homework.
Pass the salt.`,
          `Why are you not interested?
Will they come tomorrow?
Does he dance western?`
        ],
        [
          `London is the capital of England.
I want to know where he is.
Ashok was working at night.`,
          `Wait for me.
Give me some water.
Close the window!
Enjoy your dinner.`,
          `Does she paint with pastels?
Does the dog bite?
Did you read the article?`
        ],
        [
          `There is no life in any other planets.
The teacher asked us to form a circle.
The Principal knows every student in our school.`,
          `Kindly, eat your food on time.
Show me your marks.
Sanitize your hands.`,
          `Did they lose the match?
Did he laugh at me?
Am I speaking to Anu?
Are you an Indian?`
        ],
        [
          `Julie is a really smart girl.
New Delhi is the capital of India.
Flowers in the garden are well maintained.
Mother had gone to office.`,
          `Be careful while crossing the road.
Help each other. 
Everybody, look at him.`,
          `Was it late yesterday to home?
Were they on leave for a week?
Was he writing an email?`
        ],
        [
          `The boy crossed the road safely.
Priya likes the diamond ring.
Daniel is a lawyer.`,
          `You stay out of this.
Somebody answer the phone.
Do forgive me.
Let the dance begin.`,
          `Is she a classical dancer?
Have you completed your homework?
Has he submitted the assignment?`
        ]
      ]
    },
    {
      label: 'Fill Up',
      type: 'matchByDragDrop',
      id: 'fill-up',
      lockAfter: 1,
      data: [
        `What an amazing experience! *Exclamatory*
Give me my notebook back. *Imperative*
I will be late for class. *Declarative*
May I borrow your pen? *Interrogative*`,

        `I don't have his phone number. *Declarative*
When is he coming from School? *Interrogative*
May God bless you! *Exclamatory*
Do as I say. *Imperative*`,

        `Wait for me. *Imperative*
What do you do? *Interrogative*
I am very happy!. *Exclamatory*
My mother makes delicious noodles. *Declarative*`,

        `I had ice cream in the morning. *Declarative*
Get out. *Imperative*
Where are we going? *Interrogative*
Hurry up! *Exclamatory*`,

        `Stop being so loud! *Exclamatory*
When do we leave for school? *Interrogative*
My favorite superhero is batman. *Declarative*
Clean your room. *Imperative*`
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
      type: 'fillup',
      label: 'Choose Appropriate Words',
      id: 'fillup',
      lockAfter: 1,
      data: [
        `John wanted to read *a (an, the)* comic book. *He (She, It) * went to the library. But *the (a, an)* library was closed.
*I (He, We) * am eight years old. John *is (are, am) * my friend. *He (She, It)* is also eight years old. *We (Us, Me)* go to school together.
Today, a group of dogs barked at *us (we, he)*. *We (He, She)* ran fast. 
*They (Them, We)* chased us. *We (Me, Us)*  climbed a tree to escape from *them (us, him)*. `,

        `There *was (were)* a tree in the backyard. It was a mango *tree (plant)*. It had *many (lot)* fruits. They were *very (so)* high. We were not *able (can)* to reach them with *our (my)* hands. 
We saw a monkey sitting on the tree. It was surprisingly looking *at (to)* us. We said 'hi' to *the (a, an)* monkey. It was impressive. It picked and *threw (throw)* a few mangoes to us. We collected *them (us, it)* happily and left the place.`,

        `Every week we *have (has, had)* Sunday as *our (my, they)* holiday.  Why Sunday is *so (to, do)* special for me?  My father takes *me (I, we)* along for his morning walk.  We walk briskly *to (do, so)* the seashore. It is *just (first)* ten minutes *from (on, in)* my home.  I can hear the rolling waves of the *sea (see, say)*.  It is so good to watch the waves in the morning *sun (moon, star)* rays.`
      ]
    }
    //old
  ]
};
