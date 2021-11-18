export default {
    id: 'conjunction-1',
    label: 'Conjunction - 1',
    pdf: '',
    list: [
      {
        label: 'Conjunction - 1',
        type: 'passage',
        id: 'conjunction-1-reading',
        data: {
          title: 'Joining Words',
    text: `Joining words are used to join two or more words and sentences. The two common joining words are 'and' and 'but'.
'And' is used when we are adding something to our statement. For example,
1. I like to play and eat.
2. I don't like spinach and guava.
3. I will dance and sing in the competition.
'But' is used to say something opposite. For example,
1. I want to play but I haven't done my HW.
2. I want to go to the party but I'm tired.
3. I like Ravi but I hate his brother.`
}
},
{
    id: 'fill-up',
    label: 'Fill in the blanks',
    type: 'fillup',
    commonData: {
      title: `Choose the correct joining word. Tap on blanks for options.`
    },
    data: [
`I want to go, *but (and)* it is too far.
We washed the clothes, *and (but)* we put them in sunlight.
I know Richa, *but (and)* I don't know her friend.
Rahul got ready, *but (and)* he forgot his watch.`,

`I will eat lunch *and (but)* watch TV.
My mom is cooking *and (but)* helping me with HW.
I like chocolates, *but (and)* I'm not allowed to eat.
My dad is working, *but (and)* he doesn't want to.`,

`This is good, *but (and)* it could be better.
My sister is yawning, *but (and)* not sleeping.
Rohan likes flowers *and (but)* green plants.
I baked the cookies, *but (and)* they were rotten.`,

`He is coming to the party *and (but)* he's bringing gifts.
The bus arrived *but (and)* it was late.
I put on my sweater *and (but)* muffler.
Maahi goes to the shop everyday *and (but)* buys candies.`,

`My mom gave me a watch *but (and)* I wanted a video game.
The teacher gives HW *but (and)* most students don't do it.
Priya lives in the city *and (but)* visits her grandma every Sunday.
She plays *and (but)* studies in the park.`
    ]
  },
  {
    label: 'Identify',
    id: 'yes-or-no',
    type: 'classifySentence',
    commonData: {
      title: 'Identify if these sentences have joining words or not.',
      types: ['Yes', 'No']
    },
    data: [
      [
        `Brush your teeth and put on your pyjamas.
        She likes football but I like cricket.`,

        `My name is Raj.
        I have to complete my homework by evening.`
      ],
      [
        `I will go to the school and meet my friends.
        I don't want to eat dal and rice.`,

        `Neha is going to Mumbai on Sunday.
        The Prime Minister will go abroad for meetings.`
      ],
      [
        `The school is closed but it will be open tomorrow.
        I want more chocolate but there isn't any left.`,

        `He is a very intelligent boy.
        She always comes first in class.`
      ],
      [
        `Deepika is sitting and reading a book.
        Dad wants more sweet but there's none left.`,

        `Dogs like playing fetch games.
        I drink a glass of milk everyday.`
      ],
      [
        `The trees and plants have lots of leaves.
        We get milk from cows and buffalos.`,

        `We should keep our room clean.
        We have a blackboard in the class.`
      ]
    ]
  },
  {
    type: 'selectWord',
    label: 'Select Word',
    id: 'select-word',
    commonData: {
      title: 'Tap on the joining words in these sentences.'
    },
    data: [
`I have a black shirt *and* a blue jeans.
He likes pasta *but* I like burgers.
We play cricket *and* chess at school.
My dad has a car *but* he likes to drive a motorcycle.
She studies at noon *and* plays in the evening.`,

`He goes for a walk daily *but* not on Sundays.
They have many books *and* markers.
The teacher is sick *but* she will teach us.
I can read *and* write well.
Her mom scolds her *but* she never listens.`,

`The cat eats fish *and* drinks milk.
The pencil is new *but* not sharped.
I bought the cake *and* candles.
The sofa is soft *but* very small.
The table is big *and* have drawers.`,

`Mom switched on the lamp *but* it wasn't working.
Put your toys away *and* go to sleep.
I have a chair *but* I need one more.
Sheep gives us wool *and* it is used in winters.
I throw the stick *but* my dog never runs to get it.`,

`Neha is friends with all boys *and* girls in the class.
We burn crackers *and* eat sweets on Diwali.
We have a dog *but* I also want a cat.
Mohan is a smart boy *but* he is not good at sports.
I like reading books *and* eating vegetables.`
    ]
  },
  {
    label: 'Right match',
    id: 'complete',
    type: 'completePuzzle',
    commonData: {
      type: 'rightOpen',
      title: 'Choose the puzzle piece with the correct joining word.',
      printTitle: 'Fill up with the right option.'
    },
    data: [
      `I like apples, and bananas, but bananas
      Raj is running, but I'm walking, and I'm walking
      Bees can fly, and sting, but sting
      He bought grapes, but did not eat them, and did not eat them`,

      `She likes tea, and juice, but juice
      He doesn't like me, and by friend, but my friend
      I love dogs, but can't pet one, and can't pet one
      I have a tricycle, but I like bicycles, and I like bicycles`,

      `The car is grey, and fast, but fast
      It is my playtime, but I'm sleepy, and I'm sleepy
      She said thank you, and she left, but she left
      We run, and play, but play`,

      `He studies hard, and comes first, but comes first
      Raj likes pizza, and I like pasta, but I like pasta
      I want to play outside, but it's raining, and it's raining
      Mom washed my clothes, but they're still dirty, and they're still dirty`,

      `Eggs boil, and float, but float
      I have videogames, but my friends play outside, and my friends play outside
      I am sick, and not going to school, but not going to school
      He practiced a lot, but did not win, and did not win`
          ]
        }
      ]
  };
