const grammar = {
  label: 'Grammar',
  id: 'grammar',
  img: 'grammar',
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
      type: 'group',
      id: 'identify-helping-main-verbs',
      label: 'Helping vs Main verbs',
      data: {
        title: 'Drag and drop the below verbs in the respective boxes.',
        types: [
          {
            name: 'Helping Verb',
            text: `am, is, are, was, can, could`
          },
          {
            name: 'Main Verb',
            text: `walk, laugh, play, cook, sleep, eat`
          }
        ]
      }
    },
    {
      type: 'fillup',
      id: 'is-am-are',
      label: 'is / am / are',
      data: {
        options: 'is, are, am',
        text: `Anil *is* swimming in the pool.
The school bell *is* ringing.
I *am* Anil.
Ships *are* sailing in the sea.
I *am* not a rabbit.
Birds *are* flying in the sky.
We *are* happy.
Raju and Anil *are* friends.
These children *are* playing in the garden.
The tiger *is* feeling hungry.
I *am* not an idiot.
This *is* a lotus flower.`
      }
    },
    {
      type: 'fillup',
      label: 'was / were',
      id: 'was-were',
      data: {
        options: 'was, were',
        text: `It *was* very hot yesterday.
*Were* you angry yesterday?
I *was* having fun at the park.
Where *were* you?
Why *were* you crying?
They *were* drinking water.
I *was* winning the race!
Where *were* you going?
I *was* so happy yesterday!
When *were* you at the park?
They *were* going to zoo.
Why *was* your brother sad?`
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
      type: 'selectWord',
      id: 'find-common-noun',
      label: 'Identify Common Noun',
      data: {
        title: 'Select the common noun in the below sentence.',
        text: `She is watching *TV.*
He is my *brother.*
His *father* is cooking.
They are playing in *garden.*
The *car* is moving fast.
We saw *birds* flying.
He is eating *ice-cream.*
I like to play *football.*
We have no *homework* today.
She goes to *market.*`
      }
    },
    {
      type: 'fillup',
      id: 'article',
      label: 'Article',
      data: {
        options: 'a, an, the',
        text: `Picasso was *an* artist.
      He is *an* honest man.
      I study at *a* small university in London.
      We used to live in *the* city centre.
      Are you *a* teacher?
      It takes me *an* hour to get to work.
      My cousin is *a* surgeon.
      It looks like it's going to rain. Do you have *an* umbrella?
      I have *a* one year old daughter.
      Singer Justin comes from *an* ordinary family.`
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
      type: 'classifySentence',
      label: 'Identify Tense',
      id: 'identify-tense',
      data: {
        title: 'Read the below sentence and find its tense.',
        types: [
          {
            name: 'Present',
            text: `Kumar is asking a question.
I am watching TV.
Anand is not feeling well.
Ramya is a obedient girl.
The sun rises in the east.
Please come in.`
          },
          {
            name: 'Past',
            text: `He helped his mum last Sunday.
Sita was watching some cartoons.
I went outside to check whether it was raining.
Last summer, we went to Ooty.
I was very cute, when I was a baby.`
          },
          {
            name: 'Future',
            text: `Ramya will go to movie tomorrow.
I will not do this mistake again.
In future, the temperature will increase due to global warming.
I wish, I will become the President of my country.
I will see you later.`
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Identify Noun Type',
      id: 'identify-noun-type',
      data: {
        title: 'Find the type of the underlined nouns in the below sentences.',
        types: [
          {
            name: 'Proper',
            text: `Every *Sunday* I go to the beach.
  *Tamil* is my mother tongue.
  We will visit *Taj Mahal* next month.
  My best friend is *John*.
  *Pacific Ocean* is the biggest ocean.`
          },
          {
            name: 'Common',
            text: `I like to ride my *bicycle*.
  All *shops* are closed.
  Wash your *hands* with soap and water.
  Jupiter is the biggest *planet* in Solar System.
  Please give me a *pencil*.`
          },
          {
            name: 'Abstract',
            text: `Ramya always speak the *truth*.
  We should work hard for *success*.
  I have no *idea* why he is sad.
  My grand-father is doing *good*.
  Don't under-estimate your *strength*.`
          }
        ]
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
      type: 'fillup',
      label: 'Homonyms',
      id: 'homonyms',
      data: {
        text: `I am not *allowed (aloud) * to drink soda. 
My *aunt (ant) * bought me a new bike! 
I was so hungry. I *ate (eight) * my entire dinner. 
I got a new bat and *ball (bowl) * last week. 
What do you want to *be (bee)*  when you grow up? 
Eat that last green *bean (been)* on your plate. 
I *beat (beet) * you in the race. I was first. 
I have a teddy *bear (bare)* at home. 
I was stung by a *bee (be) *. 
Where have you *been (bean) * all this time? `
      }
    },
    {
      type: 'fillup',
      label: 'Prepositions',
      id: 'prepositions',
      data: {
        text: `The key is *on (near, by) * the table. 
The fish is *inside  (outside, on) * the bowl.
I gave a present *to (for, by) * my mother. 
The cat is sitting *under (over, inside) * the table. 
Pick the flowers *from  ( to, by) * the plant.
Arrange your books *in (on, by) * your book shelf. 
The lion lives *in (on, near) * the forest. 
We go to school *by (on, to) * bus. 
The sun is *above (below, over) * the clouds. 
Be careful *with (in, on) * the glasses.`
      }
    },
    {
      type: 'match',
      label: 'Match Subjects and Predicates',
      id: 'subject-predicate',
      data: {
        title: 'Match Subjects and Predicates.',
        onlyBigScreen: true,
        text: `The two year old girl, cried when her mom took her toy.
        The baby calf, mooed at its mother.
        The crank old man, fussed at the bus driver.
        The large Christmas tree, was decorated with ornaments.
        The tiny wooden sailboat, rocked back and forth in the water.
        The playful chimpanzee, swung from the jungle vines.
        The cheerful pilot, welcomed passengers onto the plane.
        The humongous spider, spun its web by my back door.
        The patient teacher, taught her students how to multiply.`
      }
    }
  ]
};

export default grammar;
