export default {
  id: 'noun-4',
  label: 'Noun-4',
  pdf: '',
  list: [
    {
      label: 'Concrete Nouns',
      type: 'passage',
      id: 'noun-4-reading',
      data: {
        title: 'Concrete Nouns',
        text: `A concrete noun is any noun word that we can see, touch, smell, hear or feel. In other words, any noun that is not abstract is concrete. 
For example: 
What is that noise ? 
In this sentence, the word noise is a concrete noun because we can hear it.
Another example is; 
You need patience to read a book. 
In this sentence, patience is an abstract noun because it is not physically present. On the other hand, the book is a concrete noun because we can see, touch and feel it.
Some more examples of concrete nouns are:
1. Shruti put her feet on the table.
2. The teacher ran away from the mouse.
3. Jeena saw a movie.`
      }
    },
    {
      type: 'group',
      label: 'Drag and drop',
      id: 'classify-concrete-abstract',
      commonData: {
        title: 'Identify these nouns as concrete and abstract.',
        types: ['Concrete', 'Abstract']
      },
      data: [
        [`Phone, Police, Cat, Pen`, `Clever, Courage, Loyalty, Bravery`],
        [`Girl, Boy, Bowl, Bird`, `Hope, Love, Angry, Trust`],
        [
          `Soldier, Friend, Artist, Judge`,
          `Peace, Justice, Artistry, Friendship`
        ],
        [`Table, Feet, Melody, Pie`, `Luxury, Joy, Maturity, Work`],
        [`Fish, Grapes, Soap, Stairs`, `Happiness, Dinner, Habit, Manners`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the word.',
      id: '100',
      commonData: {
        title: 'Select the concrete noun in the below sentences.'
      },
      data: [
        `The *melody* is wonderful.
You can have some *pie* after dinner.
The loud *noise* made mom upset.
You need good *friends*.
Seema felt love for her new *dog*.
My throat is swollen due to *cold water*.
My father bought me the *book*.
My skin is very *dry*.
This is my favorite *sweater*.
It was difficult to go home because of the *wind*.`,

        `Curiosity killed the *cat*.
A *dove* is a symbol of peace.
Owning two *cars* is a luxury.
Your story needs more *excitement*.
The math *formula* is stored in your memory.
It is impossible to sleep in this *noise*.
The smell of her *perfume* is very sweet.
They turned off the *lights*.
I'm *afraid* of dogs.
I'm not going outside in the *fear* of dogs.`
      ]
    },
{
id: '200',
label: 'Identify',
type: 'classifySentence',
data: {
  title: 'Identify whether the underlined nouns are concrete or abstract.',
  types: [
    {
      name: 'Concrete',
      text: `An *apple* is kept on the *table.*
      There are tons of *books* in the *library.*
      A *dog* is a very common pet.
      The *sweater* is made of *wool.*
      I saw *banana trees* on the way.
      She reads three *books* in a week.
      The *elephant* is very big.`
    },
    {
      name: 'Abstract',
      text: `He is not telling the *truth.*
      People lose *faith* when you lie.
      He will *defeat* her.
      They laughed at my *joke.*
      Pia is *afraid* of heights.
      She is *angry.*
      The girls love to *gossip.*`
      }
    ]
  }
},
{
id: '300',
label: 'Identify-2',
type: 'classifySentence',
data: {
  title: 'Identify whether the below nouns are countable or uncountable.',
  types: [
    {
      name: 'Countable',
      text: `There are a few chinese *restaurants* in the city.
      Priya took many *pictures* on her vacation.
      Many *books* are kept on the table.
      The *beds* we have are very old.
      My *phone* is not working properly.`
    },
    {
      name: 'Uncountable',
      text: `Do you have a *water* bottle?
      I like *butter* on my bread slice.
      The police needs *information* about the thief.
      Her *intelligence* is undoubtful.
      The *milk* is in the bottle.`
    }
    ]
  }
},
{
  type: 'selectWord',
  label: 'Select-1',
  id: '400',
  commonData: {
      title: 'Tap on the abstract nouns.',
      multiSelect: true
    },
  data: [
  `The team was practicing a lot yesterday. This is the reason for their *victory*.
  He studied in a big city. He gained good *education*.
  *Opportunities* don't come to just anyone. We have to work *hard* for it.
  She is my best friend. Our *friendship* is unbreakable.
  I was sick. So I couldn't study for *exams*. It was my bad *luck*.
  Our teacher's *strictness* scares all the naughty students in the class. Everyone studies in her class.
  We don't like Savita. Her *ego* pushes everyone away.
  I had a brilliant *idea*. We decided to study together for *exams*. `,
     ]
  },
  {
    type: 'selectWord',
    label: 'Select-2',
    id: '500',
    commonData: {
        title: 'Tap on the concrete nouns.',
        multiSelect: true
      },
    data: [
    `Do you know that a *pearl* is not man-made? It is obtained from *oysters* found in the *ocean*.
    A bunch of *bananas* were on the *tree*. A *monkey* climbed and ate them all.
    The *crocodiles* live in the *ocean*. It is a very dangerous *animal.*
    My *mother* is a *teacher*. She teaches science.
    We should take a *shower* everyday. It helps us stay clean and tidy.
    Someone stole my dad's *wallet* in the train. The *police* will try to catch the *thief*.
    I love everything that is *sweet*. I like *chocolates,* *pies* and *sweets*.
    My *brother* likes reading *newspaper*. He knows about almost everything that is going on.`,
       ]
    }
  ]
};
