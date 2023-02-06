export default {
  label: 'Grammar',
  id: 'grammar-3-sc',
  img: 'grammar',
  grade: '3-5',
  list: [
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
Ramya is an obedient girl.
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
    }
  ]
};
