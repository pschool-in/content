import * as Vars from './_variables.js';

const math = {
  label: 'Quick Math',
  id: 'math',
  img: 'quickMath',
  grade: '0-2',
  appLink: Vars.mathApp,
  list: [
    {
      type: 'dominos',
      id: 'dominos',
      label: 'Count Dominos',
      data: { type: 2 }
    },
    {
      label: 'Find the Number',
      type: 'placeValueAbacus',
      id: 'abacus-placevalue',
      lockAfter: 1,
      commonData: {},
      data: [
        { pattern: 'aa' },
        { pattern: 'xx' },
        { pattern: 'bb' },
        { pattern: 'aaa' },
        { pattern: 'xxx' },
        { pattern: 'bbb' }
      ]
    },
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      data: { pattern: 'xx = xx' }
    },
    {
      type: 'quickArithmetic',
      id: 'after-number',
      label: 'After Number',
      data: { type: 'after~xx' }
    },
    {
      type: 'quickArithmetic',
      id: 'before-number',
      label: 'Before Number',
      data: { type: 'before~xx' }
    },
    {
      label: 'Count Arithmetic',
      type: 'countArithmetic',
      id: 'count-arithmetic',
      data: [
        { type: 'addition' },
        { type: 'subtraction' },
        {
          type: 'multiply',
          arr: [
            [2, 4],
            [3, 3],
            [2, 4],
            [4, 4],
            [3, 2],
            [2, 5],
            [3, 4],
            [4, 5],
            [5, 5],
            [5, 2]
          ]
        }
      ]
    },
    {
      //from money-2
      type: 'denomination',
      id: 'calulate',
      label: 'Calculate the total Money',
      commonData: {
        showImg: true,
        calculateMoney: true
      },
      data: [
        {
          format: 'a',
          denos: [2, 1]
        },
        {
          format: 'a',
          denos: [10, 5]
        },
        {
          format: 'a',
          denos: [100, 1]
        },
        {
          format: 'a',
          denos: [100, 10]
        },
        {
          format: 'a',
          denos: [20, 10]
        },
        {
          format: 'a',
          denos: [5, 2, 1]
        },
        {
          format: 'a',
          denos: [100, 10]
        }
      ]
    },
    {
      type: 'quickArithmetic',
      id: 'addition',
      label: 'Addition',
      data: [
        { type: 'add~xx~x' },
        { type: 'add~xx~5' },
        { type: 'add~xx~7' },
        { type: 'add~xx~9' }
      ]
    },
    {
      type: 'quickArithmetic',
      id: 'subtraction',
      label: 'Subtraction',
      data: [
        { type: 'sub~xx~x' },
        { type: 'sub~xx~5' },
        { type: 'sub~xx~7' },
        { type: 'sub~xx~9' }
      ]
    },
    {
      type: 'counter',
      id: 'count-10-100',
      label: 'Find Value - (10 - 100)',
      data: { level: 2 }
    },
    {
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      commonData: {
        title: 'Click on the Biggest Number.',
        fontSize: '1.5rem',
        type: 'math',
        probType: 'biggest'
      },
      data: [
        { pattern: 'xx' },
        { pattern: '1xx' },
        { pattern: '2xx' },
        { pattern: '3xx' }
      ]
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      commonData: {
        title: 'Click on the Smallest Number.',
        fontSize: '1.5rem',
        type: 'math',
        probType: 'smallest',
        pattern: 'xxx'
      },
      data: [
        { pattern: 'xx' },
        { pattern: '1xx' },
        { pattern: '2xx' },
        { pattern: '3xx' }
      ]
    },
    {
      type: 'sorting',
      id: 'ascending-order',
      label: 'Ascending Order',
      commonData: {
        title: 'Rearrange the numbers in ascending order.',
        fontSize: '2rem',
        type: 'math',
        probType: 'ascending'
      },
      data: [
        { pattern: 'xx' },
        { pattern: '1xx' },
        { pattern: '2xx' },
        { pattern: '3xx' }
      ]
    },
    {
      type: 'sorting',
      id: 'descending-order',
      label: 'Descending Order',
      commonData: {
        title: 'Rearrange the numbers in descending order.',
        fontSize: '2rem',
        type: 'math',
        probType: 'descending'
      },
      data: [
        { pattern: 'xx' },
        { pattern: '1xx' },
        { pattern: '2xx' },
        { pattern: '3xx' }
      ]
    },

    { type: 'fraction', id: 'fraction', label: 'Fraction', data: {} },
    {
      type: 'fraction',
      id: 'fraction-read',
      label: 'Read Fraction',
      data: { probType: 'read' }
    },
    {
      label: 'Find the Value',
      type: 'picturePuzzle',
      id: 'value',
      commonData: {
        type: 1
      },
      data: [
        [
          `0 + 0 = 4
1 + 0 = 3
2, 1`,

          `0 + 1 = 4
1 + 1 = 6
1, 3`,

          `0 + 0 = 6
0 + 1 = 5
3, 2`,

          `0 + 0 = 4
0 + 1 = 4
2, 2`,

          `0 + 0 = 10
1 + 1 = 4
5, 2`
        ],
        [
          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
2, 1`,

          `0 + 0 + 0 = 3
1 + 1 + 1 = 9
1, 3`,

          `0 + 0 + 0 = 9
0 + 0 + 1 = 8
3, 2`,

          `1 + 1 + 1 = 6
0 + 1 + 1 = 6
2, 2`,

          `1 + 0 + 0 = 12
1 + 1 + 1 = 6
5, 2`
        ],
        [
          `0 + 0 = 4
1 + 2 = 4
2 + 2 = 6
2, 1, 3`,

          `0 + 1 = 4
1 + 1 = 6
1 + 2 = 5
1, 3, 2`,

          `0 + 0 = 6
0 + 1 = 5
1 + 2 = 6
3, 2, 4`,

          `0 + 0 = 4
2 + 1 = 6
0 + 1 = 4
2, 2, 4`,

          `0 + 0 = 10
2 + 0 = 6
1 + 1 = 4
5, 2, 1`
        ],
        [
          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
2 + 2 + 2 = 9
2, 1, 3`,

          `1 + 0 + 0 = 8
0 + 1 + 2 = 9
0 + 0 + 0 = 9
3, 2, 4`,

          `0 + 0 + 0 = 6
0 + 1 + 1 = 6
2 + 2 + 1 = 12
2, 2, 5`,

          `1 + 1 + 1 = 6
2 + 2 + 0 = 11
0 + 1 + 1 = 9
5, 2, 3`,

          `2 + 2 + 2 = 6
0 + 0 + 1 = 5
1 + 1 + 2 = 8
1, 3, 2`
        ]
      ]
    },
    {
      type: 'missingWorkout',
      id: 'addition-missingworkout',
      label: 'Complete the Problem',
      data: [
        { pattern: 'aa + aa', missingRow: [2] },
        { pattern: 'bb - aa', missingRow: [2] },
        { pattern: 'xx + 1x', missingRow: [2] },
        { pattern: 'bx - 1x', missingRow: [2] },
        { pattern: 'bb + aa', missingRow: [2] }
      ]
    },
    {
      label: 'Word Problems',
      type: 'classifySentence',
      id: 'word-problem-type',
      data: {
        title:
          'Classify the below problem as addition, subtraction, multiplication, division',
        optionFontSize: '3rem',
        types: [
          {
            name: '+',
            text: `Subbu got a new camera. She took 131 pictures of her friends. She took 68 pictures of her family. How many pictures did she take in all?
Jack spent 172 minutes in reading last week. He read for 111 minutes this week. How many minutes did he read in all?
Simbu collects stamps. He has 354 stamps in a box. He has 235 more stamps in a book. How many stamps does he have in all?`
          },
          {
            name: '−',
            text: `Rita has a book that has 750 pages. She read 567 pages. How many pages are left unread?
In a cricket match, Australia made 356 runs. India has made 268 runs. How many more runs does India need to win?
Selvi had Rs 978 in her purse. She bought a book for Rs 357. How many money is left in her purse?`
          },
          {
            name: '×',
            text: `The cost of one bat is Rs 245. What is the total cost of 7 bats?
There are 25 fruits on a tree. How many fruits will be there on 16 trees?`
          },
          {
            name: '÷',
            text: `There are 117 students going for a picnic in cars. 9 students can go in one car. How many cars will be required for all students?
Gagan has to sell 672 dolls. He sells 7 dolls in one day. How many days will he take to sell all the dolls?`
          }
        ]
      }
    },

    {
      type: 'geometry',
      id: 'geometry',
      label: 'Geometry',
      data: [
        `Draw a line of length 4 cm. | line | 4
Draw a circle of radius 2.4 cm. | circle | 2.4
Draw a square of sides 3 cm. | rect | 3, 3
Draw a rectangle of sides 2.8 and 2.4 cm. | rect | 2.8, 2.4
Draw a line of length 2.6 cm. | line | 2.6`,

        `Draw a line of length 3.6 cm. | line | 3.6
Draw a vertical line of length 4.2 cm. | vLine | 4.2
Draw a horizontal line of length 3 cm. | hLine | 3
Draw a horizontal line of length 2.4 cm. | hLine | 2.4
Draw a vertical line of length 3.4 cm. | vLine | 3.4`,

        `Draw a rectangle of sides 4 and 3 cm. | rect | 3, 4
Draw a square of side 1.8 cm. | rect | 1.8, 1.8
Draw a square of side 3.4 cm. | rect | 3.4, 3.4
Draw a rectangle of sides 2.2 and 3.2 cm. | rect | 2.2, 3.2
Draw a rectangle of sides 4 and 1 cm. | rect | 4,1`,

        `Draw a circle of radius 2 cm. | circle | 2
Draw a circle of radius 2.4 cm. | circle | 2.4
Draw a circle of radius 1.8 cm. | circle | 1.8
Draw a circle of radius 1.2 cm. | circle | 1.2
Draw a circle of radius 2.2 cm. | circle | 2.2`
      ]
    },

    {
      type: 'informationProcessing',
      id: 'picto',
      label: 'Pictographs',
      commonData: {
        type: 'pictograph'
      },
      data: [
        {
          title: 'Everyday few apples were plucked from an apple tree. ',
          labels:
            'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
          values: '5, 4, 2, 7, 1, 9, 0',
          image: 'apple',
          questions: [
            {
              qText: 'On which day, less number of apples were plucked?',
              options: 'Sunday, Friday, Wednesday'
            },
            {
              qText: 'How many apples were plucked on Tuesday?',
              type: 'number',
              value: 4
            },
            {
              qText: 'On which day, more number of apples were plucked?',
              options: 'Saturday, Friday, Monday'
            },
            {
              qText: 'How many apples were plucked on Tuesday and Wednesday?',
              type: 'number',
              value: 6
            },
            {
              qText: 'How many apples were plucked in total?',
              type: 'number',
              value: 28
            },
            {
              qText: 'True or False: Atleast one apple was plucked everyday.',
              options: 'False, True'
            }
          ]
        },
        {
          title: 'Ravi went to the zoo and counted the animals he saw.',
          labels: 'Lion, Elephant, Bear, Zebra, Giraffe',
          values: '6, 4, 7, 6, 2',
          image: ['lion', 'elephant', 'bear', 'zebra', 'giraffe'],
          questions: [
            {
              qText: 'Which of the following animals was more in number?',
              options: 'Zebra, Giraffe, Elephant'
            },
            {
              qText: 'How many elephants did he count?',
              type: 'number',
              value: 4
            },
            {
              qText: 'How many plant eating animals did he count ?',
              type: 'number',
              value: 12
            },
            {
              qText: 'How many animals did he count in total?',
              type: 'number',
              value: 25
            },
            {
              qText: 'Which two animals were equal in number?',
              options: 'Lion and Zebra, Lion and Tiger, Zebra and Bear'
            }
          ]
        },
        {
          title:
            'Ramya got bored and counted the different types of vehicles in the parking area.',
          labels: 'Cycle, Motorbike, Car, Auto, Van, Tractor',
          values: '6, 8, 5, 3, 4, 2',
          image: ['cycle', 'motorbike', 'car', 'auto', 'van', 'tractor'],
          questions: [
            {
              qText: 'How many cars were found?',
              type: 'number',
              value: 5
            },
            {
              qText: 'How many two-wheelers were found?',
              type: 'number',
              value: 14
            },
            {
              qText: "How many vehicles that don't need fuel were found?",
              type: 'number',
              value: 6
            },
            {
              qText:
                'True or False: The number of cars is more than the combined count of tractors and vans.',
              options: 'False, True'
            },
            {
              qText: 'How many different types of vehicles were parked?',
              type: 'number',
              value: 6
            },
            {
              qText: 'What is the total count of vehicles?',
              type: 'number',
              value: 28
            }
          ]
        }
      ]
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match-numbers',
      commonData: {
        title: 'Match Number names'
      },
      data: [
        `1, One
2, Two
3, Three
4, Four
5, Five
6, Six`,

        `13, Thirteen
15, Fifteen
19, Nineteen
14, Fourteen
18, Eighteen`,

        `30, Thirty
50, Fifty
90, Ninety
40, Forty
70, Seventy`
      ]
    },
    ...(() =>
      [...Array(4)].map((dummy, i) => ({
        type: 'matchByDragDrop',
        label: `Tables - ${i + 2}`,
        id: `table-${i + 2}`,
        data: { type: 'tables', number: i + 2 }
      })))()
  ]
};

export default math;
