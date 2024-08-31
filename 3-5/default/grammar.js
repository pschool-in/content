export default {
  label: 'Grammar',
  id: 'grammar',
  img: 'grammar',
  grade: '0-2',
  lockAfter: 100,
  list: [
    {
      label: 'Pick the Right Article',
      id: 'complete',
      type: 'completePuzzle',
      data: {
        type: 'leftOpen',
        title: 'Drag and drop the correct Article.',
        leftWidth: 75,
        rightWidth: 245,
        text: `banana, a, an
mango, a, an
igloo, an, a
cat, a, an
egg, an, a
ball, a, an
elephant, an, a
cake, a, an
zoo, a, an
singer, a, an`
      }
    },
    {
      type: 'sequence',
      label: 'Order Sentence',
      id: 'order-sentence',
      lockAfter: 2,
      data: [
        `keep quiet
sit down
stand up
please come in
thank you
this is pencil
these are mangoes
that is car
those are buses
it is hot`,

        `we are happy
it is dark
dog is hungry
they are coming
I am a boy
I live in Mumbai
please come in line
we are watching TV
they are playing cricket
I am reading poems`,

        `I have  a pet
it is raining
the sun is bright
I am hungry
my sister is angry
Siva has four pens
I have no pens
coloring is my hobby
this chair is broken
she is laughing loudly`,

        `what is your name
how old are you
can I help you
how are you feeling
what is the matter
what is your favorite snack
where is the restroom
can you help me
where is your mother
can you drive a car`,

        `we have holiday tomorrow
I am drinking water
I am going to Chennai
I am sitting in sofa
Siva is sleeping in bed
the cat is drinking milk
I am thinking of icecream
sun rises in the east
I am playing with my friends
I have not done my homework`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify action word (Verb)',
      id: 'find-action-word',
      data: {
        title: 'Select the action word in the below sentence.',
        text: `Subbu is *watching* TV.
The cat is *hiding* under the table.
The dog is *barking.*
The cat is *chasing* the mouse.
Tom is *bathing.*
My father is *washing* clothes.
My mother is *watering* the plants.
My sister is *sleeping.*
I am *reading* a book.
I am *studying.*`
      }
    },
    {
      type: 'fillup',
      id: 'is-am-are',
      label: 'is / am / are',
      data: {
        options: 'is, are, am',
        text: `Anil *is* a boy.
Priya *is* a girl.
I *am* Anil.
I *am* Priya.
Anil and Priya *are* friends.
We *are* good friends.
He *is* writing.
I *am* reading.
We *are* watching TV.
I *am* not hungry.
She *is* hungry.
They *are* hungry.`
      }
    },
    {
      type: 'fillup',
      label: 'was / were',
      id: 'was-were',
      data: {
        options: 'was, were',
        text: `Anil *was* tired.
Priya *was* tired.
Anil and Priya *were* tired.
They *were* tired.
Priya *was* hungry.
Anil and Priya *were* hungry.
They *were* hungry.
Anil *was* hungry.`
      }
    },
    {
      type: 'selectWord',
      id: 'find-proper-noun',
      label: 'Identify Proper Noun',
      data: {
        title: 'Select the proper noun in the below sentence.',
        text: `*Siva* is a farmer.
I am living in *Chennai.*
*Delhi* is very hot in summer.
*Devi* is studying.
We order food from *Swiggy.*
My mummy is doing online shopping in *Amazon.*
I know how to cook *Maggi.*
*Newton* was a great scientist.
We went to *Ooty* for vacation.
*Microsoft* is a famous software company.`
      }
    },
    {
      type: 'fillup',
      id: 'article',
      label: 'Article',
      data: {
        options: 'a, an',
        text: `Anil is *a* doctor.
Priya is *an* artist.
Buy me *an* ice-cream.
Buy me *a* pencil.
I have *a* toy train.
I saw *an* owl.
I saw *a* peacock.
I saw *an* elephant.
I have *an* aeroplane but it is *a* toy.`
      }
    },
    {
      type: 'fillup',
      id: 'choose-appropriate-word',
      label: 'Choose Appropriate Word',
      data: {
        text: `John wanted to read *a (an, the)* comic book. *He (She, It) * went to the library. But *the (a, an)* library was closed.
*I (He, We) * am eight years old. John *is (are, am) * my friend. *He (She, It)* is also eight years old. *We (Us, Me)* go to school together.
Today, a group of dogs barked at *us (we, he)*. *We (He, She)* ran fast. 
*They (Them, We)* chased us. *We (Me, Us)*  climbed a tree to escape from *them (us, him)*. `
      }
    },
    {
      type: 'group',
      id: 'identify-noun-verb',
      label: 'Noun vs Verb',
      data: {
        title: 'Drag and drop the below words in the respective boxes.',
        types: [
          {
            name: 'Noun',
            text: `tree, desk, table, house, shoe, dress`
          },
          {
            name: 'Verb',
            text: `walk, laugh, play, cook, sleep, eat`
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Sentence Type',
      id: 'identify-sentence',
      data: {
        title: 'Classify the below sentence.',
        types: [
          {
            name: 'Statement',
            text: `I am hungry.
Anil is very tired.
I live in Mumbai.
It is raining.
I am seven years old.`
          },
          {
            name: 'Question',
            text: `Are you hungry?
Who is tired?
Where do you live?
Is it raining?
How old are you?`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Words',
      id: 'match',
      lockAfter: 2,
      commonData: {
        title: 'Match the words that form a sentence.',
        fontSize: '1.2rem'
      },
      data: [
        `Sit , down
        Keep , quiet
        Thank , you
        Well , done
        Excuse , me`,

        `Run , fast
        Take , bath
        Join , me
        Look , around
        Call , him`,

        `walk , slowly
        sit , upright
        How , sad!
        Good, job
        Believe , me`,

        `Be , calm
        I , disagree
        No , problem
        Take,  care
        What , happened?`
      ]
    }
  ]
};
