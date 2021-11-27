const dragdrop = {
  label: 'Drag & Drop',
  id: 'dragdrop',
  img: 'dragDrop',
  alt: 'Drag & Drop  activities icon',
  desc: 'Mark the parts of plants, animals, and other images.',
  list: [
    {
      label: 'Domestic vs Wild Animals',
      type: 'group',
      id: 'domestic-wild-animals',
      data: {
        title: 'Drag and drop the animals in the right boxes.',
        imageType: 'animals',
        types: [
          {
            name: 'Domestic',
            text: `cat, dog, goat, horse, pig, sheep`
          },
          {
            name: 'Wild Animals',
            text: `elephant, lion, monkey, rhino, tiger, zebra`
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-plant',
      label: 'Parts of Plant',
      data: { type: 'plant' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-dog',
      label: 'Parts of Dog',
      data: { type: 'dog', isPractice: false }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-face',
      label: 'Parts of Face',
      data: { type: 'face' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'Parts of Human',
      data: { type: 'human' }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-computer',
      label: 'Parts of Computer',
      data: { type: 'computer' }
    },
    {
      id: 'tree',
      label: 'Parts of Tree',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'Parts of Tree',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'leaf',
            x: 20,
            y: 30
          },
          {
            word: 'branch',
            x: 190,
            y: 230
          },
          {
            word: 'twig',
            x: 20,
            y: 220
          },
          {
            word: 'fruit',
            x: 210,
            y: 5
          },
          {
            word: 'flower',
            x: 240,
            y: 35
          },
          {
            word: 'trunk',
            x: 70,
            y: 240
          },
          {
            word: 'root',
            x: 40,
            y: 280
          },
          {
            word: 'roothairs',
            x: 260,
            y: 360
          }
        ]
      }
    },
    {
      id: 'water-cyle',
      label: 'Water Cycle',
      type: 'dragAndDrop',
      data: {
        img: 'water-cycle.jpg',
        title: 'Water Cycle',
        width: 400,
        height: 218,
        wordWidth: 80,
        words: [
          {
            word: 'collection',
            x: 20,
            y: 190
          },
          {
            word: 'precipitation',
            x: 10,
            y: 80
          },
          {
            word: 'evaporation',
            x: 300,
            y: 100
          },
          {
            word: 'condensation',
            x: 160,
            y: 5
          }
        ]
      }
    },
    {
      id: 'fish',
      label: 'Parts of a Fish',
      type: 'dragAndDrop',
      data: {
        img: 'fish.jpg',
        title: 'Parts of a Fish',
        width: 380,
        height: 280,
        wordWidth: 50,
        words: [
          {
            word: 'mouth',
            x: 10,
            y: 190
          },
          {
            word: 'eye',
            x: 10,
            y: 70
          },
          {
            word: 'gills',
            x: 30,
            y: 20
          },
          {
            word: 'scales',
            x: 150,
            y: 30
          },
          {
            word: 'fin',
            x: 210,
            y: 250
          },
          {
            word: 'tail',
            x: 280,
            y: 40
          }
        ]
      }
    },
    {
      id: 'flower',
      label: 'Parts of a Flower',
      type: 'dragAndDrop',
      data: {
        img: 'flower.jpg',
        title: 'Parts of a Flower',
        width: 380,
        height: 336,
        wordWidth: 50,
        words: [
          {
            word: 'petal',
            x: 30,
            y: 100
          },
          {
            word: 'stigma',
            x: 50,
            y: 40
          },
          {
            word: 'style',
            x: 30,
            y: 170
          },
          {
            word: 'sepal',
            x: 40,
            y: 250
          },
          {
            word: 'ovary',
            x: 100,
            y: 300
          },
          {
            word: 'receptacle',
            x: 280,
            y: 290
          },
          {
            word: 'anther',
            x: 280,
            y: 20
          },
          {
            word: 'filament',
            x: 320,
            y: 200
          }
        ]
      }
    },
    {
      id: 'skeleton',
      label: 'Skeletal System',
      type: 'dragAndDrop',
      data: {
        img: 'skeleton.jpg',
        title: 'Skeletal System',
        width: 350,
        height: 448,
        wordWidth: 70,
        words: [
          {
            word: 'vertebrae',
            x: 70,
            y: 160
          },
          {
            word: 'pelvis',
            x: 70,
            y: 200
          },
          {
            word: 'skull',
            x: 60,
            y: 30
          },
          {
            word: 'ribs',
            x: 60,
            y: 110
          },
          {
            word: 'femur',
            x: 70,
            y: 300
          }
        ]
      }
    },
    {
      id: 'organs',
      label: 'Organs',
      type: 'dragAndDrop',
      data: {
        img: 'organs.jpg',
        title: 'Match the Organs',
        width: 304,
        height: 354,
        wordWidth: 60,
        words: [
          {
            word: 'heart',
            x: 230,
            y: 140
          },
          {
            word: 'liver',
            x: 10,
            y: 160
          },
          {
            word: 'brain',
            x: 50,
            y: 10
          },
          {
            word: 'lungs',
            x: 230,
            y: 70
          },
          {
            word: 'kidney',
            x: 0,
            y: 210
          },
          {
            word: 'stomach',
            x: 220,
            y: 220
          },
          {
            word: 'small-intestine',
            x: 0,
            y: 250
          },
          {
            word: 'large-intestine',
            x: 210,
            y: 270
          }
        ]
      }
    },
    {
      id: 'bicycle',
      label: 'Parts of a Bicycle',
      type: 'dragAndDrop',
      data: {
        img: 'bicycle.jpg',
        title: 'Parts of a Bicycle',
        width: 380,
        height: 276,
        wordWidth: 60,
        words: [
          {
            word: 'seat',
            x: 40,
            y: 30
          },
          {
            word: 'crossbar',
            x: 160,
            y: 40
          },
          {
            word: 'handlebar',
            x: 170,
            y: 10
          },
          {
            word: 'brake-lever',
            x: 290,
            y: 40
          },
          {
            word: 'tyre',
            x: 0,
            y: 70
          },
          {
            word: 'wheel',
            x: 300,
            y: 70
          },
          {
            word: 'hub',
            x: 340,
            y: 100
          },
          {
            word: 'chain',
            x: 130,
            y: 240
          },
          {
            word: 'pedal',
            x: 200,
            y: 230
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match-numbers',
      data: {
        title: 'Match Number names',
        text: `1, One
          2, Two
          3, Three
          4, Four
          5, Five
          6, Six`
      }
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match-numbers',
      data: {
        title: 'Match Number names',
        text: `1, One
          2, Two
          3, Three
          4, Four
          5, Five
          6, Six`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Drag and Drop',
      id: 'dragDropImgLabel',
      data: {
        title: 'Drag and Drop the name on the images.',
        text: `apple | Apple
        orange | Orange
        pineapple | Pineapple
        papaya | Papaya
        mango | Mango
        grapes | Grapes`
      }
    },
    {
      type: 'dictation',
      label: 'Dictation',
      id: 'dictation',
      data: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/fruits.mp3',
        audioOffset: 0,
        words: 'apple, grapes, banana, cherry, avocado'
      }
    },
       {
      type: 'dictation',
      label: 'Dictation - Tamil',
      id: 'dictation-2',
      data: {
        title: 'Listen to the sound and type the word.',
        audio: 'ta/ta-animals.mp3',
        audioOffset: 2,
        lang: 'ta',
        words: 'பூனை, நாய், ஆடு, செம்மறி ஆடு, குதிரை'
      }
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'dictation-2',
      data: {
        title: 'Click on the empty cells and fill it with the correct value.',
        numbers: [2, 2, 4, 2, 2, 0, 4, 1, 4],
        symbols: ['+', '−', 'x', '÷', '+', '+'],
        blanks: [2, 5, 6, 7, 8]
      }
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross',
      data: {
        title: 'Click on the empty cells and fill it with the correct value.',
        text: `?, + , 10, =, ?
+, b, +, b, +
?, +, ?, =, 3
=, b, =, b, =
5, +, 12, =, ?`,
        answer: [4, 14, 1, 2, 17]
      }
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross',
      data: {
        title: 'Click on the empty cells and fill it with the correct value.',
        text: `?, + , 5, =, ?
+, b, +, b, +
?, +, ?, =, 3
=, b, =, b, =
10, +, 6, =, ?`,
        answer: [8, 13, 2, 1, 16]
      }
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross',
      data: {
        title: 'Click on the empty cells and fill it with the correct value.',
        text: `?, + , 2, =, ?
+, b, -, b, +
?, -, ?, =, 8
=, b, =, b, =
12, +, 1, =, ?`,
        answer: [3, 5, 9, 1, 13]
      }
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?, + , 6, =, ?
          +, b, +, b, +
          ?, +, ?, =, 8
          =, b, =, b, =
          12, +, 6, =, ?`,
          answer: [4, 10, 8, 0, 18]
        },
        {
          text: `?, - , 11, =, ?
          +, b, +, b, +
          ?, +, ?, =, 5
          =, b, =, b, =
          14, -, 8, =, ?`,
          answer: [12, 1, 2, 3, 6]
        },
        {
          text: `?, - , 6, =, ?
          +, b, +, b, +
          ?, +, ?, =, 6
          =, b, =, b, =
          20, -, 8, =, ?`,
          answer: [12, 1, 2, 3, 6]
        },
        {
          text: `?, - , 6, =, ?
          +, b, +, b, +
          ?, -, ?, =, 6
          =, b, =, b, =
          20, -, 8, =, ?`,
          answer: [12, 6, 8, 2, 12]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'conversion',
      label: 'Convert Units',
      lockAfter: 2,
      commonData: {
        title: 'Convert units as requested',
        type: 'conversion',
        fontSize: '1.5rem',
        allowFrac: true
      },
      data: [
        `1^hour = ?^minutes, 60
3^hours = ?^minutes, 180
1^hour = ?^seconds, 3600
1^minute = ?^seconds, 60
3^minutes = ?^seconds, 180`,

        `30^days = ?^weeks ?^days, 4, 2
4^years 1^month = ?^months, 49
5^days 17^hours = ?^hours, 137
?^hours = 2 half hours, 1 
349^seconds = ?^minutes ?^seconds, 5, 49`,

        `2^hours 47^minutes = ?^minutes, 167
4^hours 30^minutes = ?^minutes, 270
300^minutes = ?^hours, 5
300^seconds = ?^minutes, 5
?0^hours 20^minutes = 200^minutes`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-1-3',
      label: 'Answer the Word Problem -3',
      lockAfter: 2,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `The train left the terminal at 11:20 a.m. and arrived at its destination at 2:40 p.m. How long did the train travel? | ?0 hours ?1 minutes | 3, 20
        Jack’s meeting started at 2:45 p.m. and ended at 5:25 p.m. How long did the meeting last?  | ?0 hours ?1 minutes | 2, 40
        Class will start at 9:15 am, but I reached school at 8:55 am. How much time do I have to wait? | ?0 minutes | 20
        Ravi works for 8 hours in a day. A particular job takes 40 hours to complete. How many days should Ravi work to complete the job? | ?0 days | 5
        I left home at 9:30 am and reached theatre at 9:45 am and after 20 minutes the movie started. How long was the time between I left home and movie began? | ?0 minutes | 35`
      ]
    },
    {
      label: 'Force - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `It takes John 25 minutes to go to school and it takes Ashok 50 minutes to go to school. Today, John left home at 8:30 a.m. and Ashok left home at 8:15 a.m. Who arrived at school earlier?`,
            options: `John, Ashok, Both will reach at the same time`
          },
          {
            qText: `Sheela has a homework to write 5 pages. She takes 5 minutes to complete one page. Her little brother Ravi has a homework to write 2 pages. He takes 10 minutes to complete one page. Who will take more time to complete the homework.`,
            options: `Sheela, Ravi, Both will take same time`
          },
          {
            qText: `2 hour movie started at 10:30 am. By what time the movie gets over?`,
            options: `12:30 pm, 12:30 am, 12:00 am, 12:00 pm`
          },
          {
            qText: `The doctor takes 5 minutes for each patient. I am the sixth patient in the queue. If the doctor arrives after 15 minutes, how much time do I have to wait to see the doctor?`,
            options: `40 minutes, 25 minutes, 30 minutes`
          }
        ]
      }
    },
    {
      label: 'Adjectives-1',
      type: 'passage',
      id: 'adjectives-1-reading',
      data: {
        title: 'Describing Words',
        text: [
          `Describing words tell us about the noun. It describes the quality of the naming words.
eg: `,
          {
            type: 'html',
            text: `<b>smart</b> teacher <br>
<b>big</b> house <br>
<b>green</b> parrot <br>
<b>pretty</b> girl <br>
<b>two</b> boys <br>
<b>thundering</b> clouds <br>
<b>soft</b> toy <br>
<b>loving</b> parents`
          }
        ]
      }
    },
    {
      label: 'Type of Adjective',
      id: 'adjective-type',
      type: 'classifySentence',
      data: {
        title: 'Classify the highlighted adjective.',
        types: [
          {
            name: 'Quality',
            text: `He is a clever boy.
Naina has a *black* dog.
This box is *heavy*.
She is an *intelligent* girl.
Her father is an *honest* person.`
          },
          {
            name: 'Quantity',
            text: `There is *no* milk in the glass.
I ate *some* rice.
She ate the *whole* apple.
You should not spend *all* the money.
Is there *any* mango in the basket?`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Select the describing words',
      id: 'select-word',
      commonData: {
        title: 'Tap on the describing words in these sentences.',
        multiSelect: true
      },
      data: [
        `A *poor* man was sitting on roadside. He wore *dirty* clothes. He asked for *hot* water. I bought him in a *big* jug.
A *red* car was going on a *black* road. The *green* trees on *both* sides gave a *cool* breeze.
The well is *deep*. It has an *iron* pully and *think* rope connected to a *big* bucket. We can get *fresh* water.`,

        `A ball is *round* in shape.
        A *good* chess player is usually *smart*.
        My friend has a *brown* muffler.
        I have a *red* cap.
        Aman is *confused* about a maths problem.`,

        `I read a story about an *ugly* witch.
        A *fast* car always win in races.
        Coconut trees are *tall*.
        A lion roars very *loudly*.
        Goods train is very *long*.`,

        `A *poor* man was sitting on roadside.
       This is a *pleasant* weather.
       A *small* rat lives in our house.
       I have a *purple* dress.
       A *clean* table.`
      ]
    }
  ]
};

export default dragdrop;
