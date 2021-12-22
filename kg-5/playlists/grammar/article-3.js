export default {
  id: 'article-3',
  label: 'No Article Rules',
  pdf: '',
  list: [
    {
      label: 'Reading',
      type: 'passage',
      id: 'article-reading',
      data: {
        title: 'No Article Rules',
        text: [
          `To talk about things in general.`,
          {
            type: 'hilight',
            text: `Fried foods are unhealthy.
Boys are usually fond of outdoor games.`
          },
          `No article is used before plural and uncountable nouns.`,
          { type: 'hilight', text: 'cars, people, life, water' },
          `No article is used before abstract nouns.`,
          { type: 'hilight', text: 'education, happiness, music' },
          `No article is used before single countable nouns.`,
          {
            type: 'html',
            text: `<b>People</b>: Mary, Ashok<br><b>Places</b>: Jupiter, Russia, Oxford street<br><b>Language</b>: English, Hindi<br><b>Subjects</b>: History, Law, Science<br><b>Days, months</b>: Monday, November<br><b>Games</b>: football, chess<br><b>Meals</b>: breakfast, dinner<br><b>Routine Places</b>: in bed, at home, to school, to work<br><b>Movement or Transport</b>: on foot, by car, by air`
          }
        ]
      }
    },
    {
      label: 'Pick the Right Article',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct Article.',
        printTitle: 'Pick the correct Article',
        leftWidth: 75,
        rightWidth: 245
      },

      data: [
        `woman, a, an
officer, an, a
bottle, a, an
baby, a, an
urn, an, a
old carpet, an, a
beehive, a, an
remote, a, an
mobile, a, an
hospital, a, an`,

        `guitar, a, an
pony tail, a, an
apple, an, a
pencil, a, an
elastic, an, a
animal, an, a
biscuit, a, an
ostrich, an, a
board, a, an
sofa, a, an`,

        `arrow, an, a
ugly, an, a
nice, a, an
oval, an, a
axe, an, a
pair, a, an
empty, an, a
ant, an, a
kite, a, an
European, a, an
engine, an, a`,

        `year, a, an
Indian, an, a
umbrella, an, a
honest, an, a
hour, an, a
universe, a, an
university, a, an
x-ray, an, a
one, a, an
wonderful, a, an`,

        `utensil, a, an
uncle, an, a
uniform, a, an
ugly dog, an, a
half, a, an
actor, an, a
invitation, an, a
dollar, a, an
rupee, a, an
envelope, an, a`
      ]
    },
    {
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the right word to match the article.',
        printTitle: 'Pick the right word that goes with the article.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `an, eagle, crow
an, honour, dishonour
an, apron, coat
a, lamp, inkpot
an, egg, chick
a, computer, aeroplane
a, pizza, onion
an, Ipad, table
an, idea, pen
an, old woman, young woman`,

        `a, man, elephant
a, European, Indian
a, little, ice cream
a, year, hour
an, island, beach
an, honest man, clever man
a, usual, unusual
a, horse, ox
an, American, Russian
a, kindman, honest`,

        `a, golden watch, apple
a, bird, ostrich
an, exam, paper
an, English book, science book
a, young, old
an, octopus, shark
a, dictionary, aeroplane
an, option, student
a, trophy, animal
an, ambulance, lorry`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Articles',
      id: 'select-word',
      commonData: {
        title:
          'Select all the articles in the below sentence. There can be zero or more articles.',
        multiSelect: true
      },
      data: [
        `I live in Hyderabad. It is *a* big city. *The* Charminar is *a* famous monument in our city.
*The* Birla Planetarium is *the* most frequently visited place by many students every year.
Nehru Zoological park is *a* famous zoo in Hyderabad which consists of different kinds of animals.
My neighborhood is *a* very nice place. There is *a* big supermarket at *the* end of *the* road.
There is also *a* small park near my home. Also, we have *a* health center in *the* colony.
In addition, there is *a* preschool where my little sister studies.
I have *a* dog and *a* parrot for pets. *The* dog is always quiet but *the* parrot is very noisy!`,

        `Once upon *a* time *a* woman had *an* only son whose name was Aladdin.
One day as he was looking for wild figs out in *the* desert, he came across *a* dungeon.
Aladdin went into *the* dungeon and found *a* magic lamp.
When Aladdin rubbed *the* magic lamp *a* Genie arrived and asked him to wish for something.
*A* dog is *a* pet animal and is *the* most obedient animal. There are different kinds of dogs in *the* world.
Kids love to play with dogs in *the* playground. It is *a* very playful animal.
I feed *the* parrot with *a* lot of fresh vegetables and fruits. *The* dog eats pedigree and curd rice.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Fill in the Blanks',
      type: 'fillup',
      lockAfter: 2,
      commonData: {
        title: 'Click on the blanks and pick the correct Article.',
        options: 'a, an, the'
      },
      data: [
        `He ate *an* apple.
I will meet *the* President today.
The mangoes cost thirty rupees *a* piece.
I have *an* exam today.
*The (A, An)* dog is barking.
She goes to the temple in *the* mornings.
Abhinav is *the* best singer in the class.
*The (A, An)* camel is the ship of the desert.
Aarav is sleeping on *the* grey sofa.
*The (An, A)* sun is shining bright today!
He is holding *a* bag.`,

        `There is *a* cat in my room.
My brother bought *a* gift for me.
He is eating *an* apple.
I saw *an* elephant.
My sister poured honey on *the* fruits.
I saw *a* snake in my garden.
My uncle is *a* policeman.
Are you going to *the* park this evening?
There is *a* fountain at the entrance of the temple.
My cousins visited *the* Tajmahal last year.`,

        `I am reading *a* novel.
It is *a* sweet memory.
I want *a* burger.
She wants to buy *an* umbrella.
We can see *the* stars at night.
*The (A, An)* elephants are very big animals.
That is *an* interesting book.
My brother has *a* headache.
I have *a* test today.
She is eating *a* chocolate pastry.`
      ]
    },
    {
      id: 'no-article',
      label: 'No Article - Fill up',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and pick the correct Article. Select ' - ' for no article.`,
        options: '-, a, an'
      },
      data: [
        `*-* man is mortal.
Can you tell me *a* story?
She goes to *-*school every day. 
I am fond of *-* music.
I will go to school by *-* walk.
Ashoka was *an* honest king.
I left my book at *-* home.
I saw *a* snake in my garden.
He likes to read *-* short stories.
A teacher is *an* important person in everyone's life.`,

        `I bought *a* pair of shoes.
*-* elephants are very intelligent animals.
I saw *a* movie last night.
They are staying at *a* hostel.
Ram played with *-* determination.
*-* penguins live in the South Pole.
I could see *-* clouds in the sky.
There was *-* milk on the table.
I gave it to *-* Jhonny.
She arrived in *-* India yesterday.`,

        `She is *a* famous actress.
Do you speak *-* English?
He is good at *-* cricket.
People will travel to *-* Mars soon.
I do not like *-* basketball.
Shall we play *a* game of chess?
My grandma was sick. We took her to *-* hospital. Now she is good.
We saw *an* elephant in the zoo.
Do you eat *-* rice every day?
My brother does not like *-* chicken.`
      ]
    },
    {
      label: 'Classify Article Type',
      id: 'classify-article-type',
      type: 'classifySentence',
      commonData: {
        title:
          'Select whether the sentence has a definite,indefinite or no article.',
        types: ['Definite', 'Indefinite', 'No Article']
      },
      data: [
        [
          `I wake up at 6 0'clock in the morning.
The Arabian sea lies to the west of India.
It is better, to tell the truth.`,

          `Mihir wants a pair of jeans.
She is an hour late.
I just read an interesting novel.`,

          `Please keep quiet! Don't make noise!
We love to eat Indian food.`
        ],
        [
          `The cow gives us milk.
Can you switch off the light?
There is someone at the door.`,

          `He has a daughter.
It is a good bike.
Tia wants an ink pen.`,

          `Milk is good for you.
Men are always fond of cricket.`
        ]
      ]
    },
    {
      label: 'Correct or Incorrect',
      id: 'classify-correct',
      type: 'classifySentence',
      commonData: {
        title: 'Check whether the article usage is correct in the sentence.',
        types: ['Correct', 'Incorrect']
      },
      data: [
        [
          `I have a book.
Look at the beach!
I like the red T-shirt.
Mahesh's father is an engineer.
Rahul has a terrible headache.`,

`Do you live in the Hyderabad?
The London is big city.
Who is an lady in a picture?
Do you still live in the Banglore?
What did you have for a breakfast today?`          
],
[
`My dad came an hour ago.
An octopus has eight tentacles.
Nandana is the fastest swimmer in our group.`,

`We live in an village.
My friend gave me an basket of fruits.
I saw a eagle near my farm.
A owl was sitting on the roof of my house.`          
],
[
`I work as an English teacher in a school.
He is a friend of mine.
A gun is a very dangerous weapon.
I collected the postcard from the post office.`,
  
`I had a ice-cream after my dinner.
My grandfather has a inkpot on his writing-table.
He is best player in the team.`
    ]
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
        `I saw *a* colorful kite hanging on our mango tree.
Subrat is the *tallest* boy in the class.
Rakesh is *an* honest man in my village.
My cousin gave me an *Inkpen* for writing.
My brother is an *MBA* graduate and is working at Deloitte.`,

        `We will return from the park after *an* hour.
It might rain today! Please carry an *umbrella*.
I met a *European* tourist in Agra last year.
Ram uses *the* internet a lot these days!
Mrs. Sunitha Bhan is an *English* teacher in my son's school.`,

        `The fourth standard students went on *a* field trip to the zoo.
I quickly ate *the* cookies kept on my kitchen table.
I eat *an* egg daily before breakfast.
The *rose* plant in my garden is growing well.
The *lion* is the king of the jungle.`
      ]
    }
  ]
};
