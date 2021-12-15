export default {
  id: 'noun-4',
  label: 'Abstract and Concrete Noun',
  list: [
    {
      label: 'Noun - 4',
      type: 'passage',
      id: 'noun-4-reading',
      data: {
        title: 'Concrete Nouns',
        text: `A concrete noun is any noun word that we can see, touch, smell, hear or feel. In other words, any noun that is not abstract is concrete. For example: What is that noise ? In this sentence, the word noise is a concrete noun because we can hear it.
Another example is; You need patience to read a book. In this sentence, patience is an abstract noun because it is not physically present. On the other hand, the book is a concrete noun because we can see, touch and feel it.
Some more examples of concrete nouns are:
1. Shruti put her feet on the table.
2. The teacher ran away from the mouse.
3. Jeena saw a movie.`
      }
    },
    {
      type: 'group',
      label: 'Concrete vs Abstract',
      id: 'classify-concrete-abstract',
      commonData: {
        title: 'Classify these nouns as concrete or abstract.',
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
      label: 'Identify Abstract Noun',
      id: 'select-abstract',
      lockAfter: 1,
      commonData: {
        title: 'Select the abstract noun in the below sentence.',
        printTitle: 'Underline the abstract noun in the below sentences.'
      },
      data: [
        `Taj Mahal is known for its *beauty*.
Do you have the *strength* to break this brick?
Your *idea* is brilliant.
Due to his *fear* of dogs, he never visited our house.
I can still feel the *pain*.
Ram has *faith* on his father.
He was jumping up and down with *excitement*.
India got its *freedom* in 1947.
I went home after a long time, and my family members greeted me with *joy*.
He should be praised for his *honesty*.`,

        `I value your *opinion*.
Many families in this small town are living in *poverty*.
She has *power* to help others.
Parents should treat children with *compassion*.
She has the *skill* to climb this tree.
The musical concert was a *success*.
I have *energy* to play one more game.
Let's give Tom a *surprise* by visiting his house.
The *depth* of the well is twenty feet.
Do you know, when is his *birthday*?`,

        `Geeta shared her gifts with Swetha to save her *friendship*.
The king celebrated his *victory.*
I am not sure whether she is telling the *truth*.
The *height* of the tree is ten feet.
Pilot could control the *speed* of the plane.
It was a *surprise* when our teacher visited my home.
Raj is waiting for his exam *result*.
Students need to learn new *skills*.
The *weight* of this granite stone is 100 kg.
The rat stood *calm* in front of a cat.`,

        `Geeta is *famous* for her long hair.
Mohan won the game with great *luck*.
*Wastage* of food angers the nanny.
Dove is the symbol of *peace*.
My grandma is full of *wisdom*.
We have a *holiday* next week.
Raj couldn't hide his *disappointment*.
He won the game because of his *determination*.
*Bravery* of the soldiers was awarded by the President.
Don't loose *hope*. We can still win the game.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify Concrete Noun',
      id: 'identify-concrete',
      commonData: {
        title: 'Select the concrete noun in the below sentence.'
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
      id: 'identify-underlined',
      label: 'Classify the Underlined Noun',
      type: 'classifySentence',
      data: {
        title:
          'Classify whether the underlined nouns are concrete or abstract.',
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
      type: 'selectWord',
      label: 'Select all Abstract Nouns',
      id: '400',
      commonData: {
        title: 'Select all Abstract Nouns in the below text.',
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
  I had a brilliant *idea*. We decided to study together for *exams*. `
      ]
    },
    {
      type: 'selectWord',
      label: 'Select all Concrete Nouns',
      id: 'select-concrete',
      commonData: {
        title: 'Select all Concrete Nouns in the below text.',
        multiSelect: true
      },
      data: [
        `Do you know that a *pearl* is not man-made? It is obtained from *oysters* found in the *ocean*.
    A bunch of *bananas* were on the *tree*. A *monkey* climbed and ate them all.
    The *crocodiles* live in the ocean. It is a very dangerous *animal.*
    My *mother* is a *teacher*. She teaches science.
    We should take a *shower* everyday. It helps us stay clean and tidy.
    Someone stole my dad's *wallet* in the train. The *police* will try to catch the *thief*.
    I love everything that is *sweet*. I like *chocolates,* *pies* and *sweets*.
    My *brother* likes reading *newspaper*. He knows about almost everything that is going on.`
      ]
    }
    // old
  ]
};
