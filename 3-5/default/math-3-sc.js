import * as Vars from './_variables.js';

export default {
  label: 'Maths',
  id: 'math-3-sc',
  img: 'quickMath',
  grade: '3-5',
  appLink: Vars.mathApp,
  lockAfter: 100,
  list: [
    {
      type: 'picturePuzzle',
      id: 'picture-puzzle',
      label: 'Picture Puzzle',
      commonData: {
        type: 2
      },
      data: [
        [
          `0 + 0 = 24
1 + 1 = 12
12, 6`,
          `0 + 0 = 14
0 + 1 = 10
7, 3`,
          `0 + 0 + 0 = 21
0 + 0 + 1 = 19
7, 5`,
          `0 + 1 = 10
1 + 1 = 8
6, 4`,
          `0 + 0 + 1 = 9
1 + 1 + 1 = 3
4, 1`
        ],
        [
          `0 + 0 + 0 = 15
1 + 1 + 0 = 13
0 + 1 + 2 = 10
5, 4, 1`,

          `1 + 1 + 0 = 11
0 + 0 + 0 = 21
2 + 2 + 0 = 15
7, 2, 4`,

          `0 + 1 + 2 = 16
0 + 0 + 1 = 16
1 + 1 + 1 = 12
6, 4, 6`,

          `1 + 1 + 0 = 21
2 + 1 + 0 = 16
0 + 0 + 0 = 3
1, 10, 5`,

          `0 + 0 + 0 = 18
2 + 1 + 0 = 13
1 + 1 + 0 = 12
6, 3, 4`
        ],
        [
          `0 + 0 + 0 = 15
1 + 1 + 1 = 12
0 + 1 + 2 = 10
5, 4, 1`,

          `0 + 0 + 0 = 21
1 + 1 + 0 = 11
2 + 2 + 0 = 15
7, 2, 4`,

          `0 + 1 + 2 = 18
0 + 0 + 0 = 18
1 + 1 + 1 = 18
6, 6, 6`,

          `2 + 1 + 0 = 16
1 + 1 + 0 = 21
0 + 0 + 0 = 3
1, 10, 5`,

          `0 + 0 + 0 = 6
2 + 1 + 0 = 9
1 + 1 + 0 = 8
2, 3, 4`
        ]
      ]
    },
    {
      type: 'missingWorkout',
      id: 'quickArithmetic-missing',
      label: 'Missing Number',
      commonData: {
        missing: [0, 1, 2, 3]
      },
      data: [
        {
          pattern: 'aa + aa'
        },
        {
          pattern: 'bb - aa'
        },
        {
          pattern: 'aaa + aaa'
        },
        {
          pattern: 'bbb - aaa'
        }
      ]
    },
    {
      type: 'balance',
      label: 'Balance the Numbers',
      id: 'balance',
      commonData: {
        count: 10
      },
      data: [
        {
          left: 'x,x',
          right: '?'
        },
        {
          left: 'x0,x',
          right: '?',
          count: 10
        },
        {
          left: 'xx, x',
          right: '?',
          count: 10
        },
        {
          left: 'x,x,x',
          right: '?',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, ?',
          count: 10
        }
      ]
    },
    {
      type: 'areaGraph',
      id: 'area',
      label: 'Area under the Shape',
      commonData: {
        title: 'Calculate the Area under the closed boundary.'
      },
      data: [
        [
          `2,2
2,4
4,4
4,2
2,2
4`,

          `2,2
2,6
4,6
4,2
2,2
8`,

          `1, 4
8, 4
8, 8
1, 8
1, 4
28`,

          `5,1
8,1
8,8
5,8
5,1
21`,

          `1,1
5,5
1,5
1,1
8`
        ],
        [
          `3,1
8,1
8, 5
3,1
10`,

          `8, 4
8, 8
1, 8
8, 4
14`,

          `1,1
1, 3
6, 3
6, 5
7, 5
7, 1
1, 1
14`,

          `1,1
1, 7
6, 7
6, 5
5, 5
5, 1
1, 1
26`,

          `3,1
3, 7
8, 7
8, 5
5, 5
5, 1
3, 1
18`
        ],
        [
          `3,3
5,3,
5,7
1,7
1,5
3,5
3,3
12`,

          `1, 4
8, 4
8, 6
6, 6
6, 8
1, 8
1, 4
24`,

          `5,1
8,1
8,8
6,8
6,3
5,3
5,1
16`,

          `1,1
1, 3
6, 3
6, 5
7, 5
7, 1
1, 1
14`,

          `1,1
1, 7
6, 7
6, 5
5, 5
5, 1
1, 1
26`
        ],
        [
          `2,7
2, 8
8,8
8,7
6,7
6,5
4,5
4,7
2,7
10`,

          `1, 5
1, 7
7, 7
7, 5
5, 5
5, 3
3, 3
3, 5
1,5
16`,

          `1,1
3,1
3,2
5,2
5,5
3,5
3,6
1,6
1,1
16`,

          `3,1
6,1
6,3
7,3
7,5
2, 5
2, 3
3, 3
3,1
16`,

          `2, 3
2, 5
6, 5
6, 8
9, 8
9, 1
6, 1
6, 3
2, 3
29`
        ]
      ]
    },
    {
      label: 'Number Line: Find Number',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: 0,
          range: 40,
          minorLines: 2,
          labelGap: 4,
          text: '20, 32, 12, 36, 14, 18, 38, 22, 8, 16'
        },
        {
          start: 0,
          range: 60,
          minorLines: 2,
          labelGap: 6,
          text: '36, 54, 18, 48, 33, 45, 9, 39, 3, 51'
        },
        {
          start: 0,
          range: 80,
          minorLines: 2,
          labelGap: 8,
          text: '16, 28, 48, 76, 56, 64, 32, 72, 52, 60'
        },
        {
          start: 0,
          range: 100,
          minorLines: 2,
          labelGap: 10,
          text: '50, 25, 75, 40, 10, 85, 15, 60, 45, 65'
        },
        {
          start: 0,
          range: 40,
          minorLines: 4,
          labelGap: 4,
          text: '38, 22, 19, 23, 31, 11, 17, 4, 30, 7'
        }
      ]
    },
    {
      label: 'Find the Problem',
      type: 'numberLine',
      id: 'number-line',
      lockAfter: 2,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~xx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx-a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx-a',
          dynamicStart: true,
          range: 20
        }
      ]
    },
    {
      //from money
      type: 'denomination',
      id: 'denomination',
      label: 'Write Denomination',
      commonData: {
        showImg: true
      },
      data: [
        {
          format: 'aa0',
          denos: [100, 10]
        },
        {
          format: 'xx',
          denos: [10, 2, 1]
        },
        {
          format: 'xx5',
          denos: [100, 10, 5]
        },
        {
          format: 'xx0',
          denos: [200, 100, 10]
        },
        {
          format: 'xx0',
          denos: [100, 50, 10]
        }
      ]
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
          text: `4+?=10
+b+b+
8+?=?
=b=b=
?+?=18`,
          answer: [6, 0, 8, 12, 6]
        },
        {
          text: `?+6=?
+b+b+
?+?=8
=b=b=
12+6=?`,
          answer: [4, 10, 8, 0, 18]
        },
        {
          text: `12−?=1
+b−b+
2+?=?
=b=b=
?−?=6`,
          answer: [11, 3, 5, 14, 8]
        },
        {
          text: `?−6=?
+b+b+
?−?=6
=b=b=
20−8=?`,
          answer: [12, 6, 8, 2, 12]
        }
      ]
    },
    {
      type: 'geometry',
      label: 'Geometry - Make Angle',
      id: '700',
      data: [
        `Make an angle of 60 degree. | angle | 60
Make an angle of 180 degree. | angle | 180
Make an angle of 45 degree. | angle | 45
Make an angle of 135 degree. | angle | 135
Make an angle of 75 degree. | angle | 75`,

        `Make an angle of 50 degree. | angle | 50
Make an angle of 170 degree. | angle | 170
Make an angle of 270 degree. | angle | 270
Make an angle of 65 degree. | angle | 65
Make an angle of 300 degree. | angle | 300`,

        `Make an angle of 200 degree. | angle | 200
Make an angle of 100 degree. | angle | 100
Make an angle of 225 degree. | angle | 225
Make an angle of 320 degree. | angle | 320
Make an angle of 250 degree. | angle | 250`
      ]
    },
    {
      type: 'quickArithmetic',
      id: 'misc',
      label: 'Evaluate',
      data: [
        { type: 'misc~x00+x0+x', title: 'Solve.' },
        { type: 'misc~xx+x-x', title: 'Solve.' },
        { type: 'misc~xx+x0', title: 'Solve.' },
        { type: 'misc~100-xx', title: 'Solve.' },
        { type: 'misc~xx+1x', title: 'Solve.' },
        { type: 'misc~xx-1x', title: 'Solve.' }
      ]
    },
    {
      type: 'quickArithmetic',
      id: 'multiplication',
      label: 'Multiplication',
      data: [{ type: 'mul~x~x' }, { type: 'mul~x0~x' }, { type: 'mul~x00~x' }]
    },
    {
      type: 'quickArithmetic',
      id: 'division',
      label: 'Division',
      data: [{ type: 'div~xx~2' }, { type: 'div~xx~3' }, { type: 'div~xx~x' }]
    },
    {
      type: 'quickArithmetic',
      id: 'evaluate',
      label: 'Missing Number',
      commonData: {
        type: 'add~xx~x',
        isReverse: true,
        title: 'Write the missing number.'
      },
      data: [
        { type: 'add~x0~x' },
        { type: 'add~xx~x' },
        { type: 'sub~xx~x' },
        { type: 'sub~1x0~x' }
      ]
    },
    {
      type: 'geometryType',
      label: 'Area of Rectangle',
      id: 'rectangle-area',
      locked: true,
      data: {
        qText: 'Find the area of the below rectangles.',
        units: 'sq cm',
        probType: 'rectArea',
        list: [
          {
            width: 4,
            height: 5,
            unit: 50
          },
          {
            width: 8,
            height: 7,
            unit: 30
          },
          {
            width: 2,
            height: 3,
            unit: 75
          },
          {
            width: 4,
            height: 4,
            unit: 60
          },
          {
            width: 2,
            height: 5,
            unit: 50
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Word Problem',
      data: {
        title: 'Answer the word problem.',
        type: 'word-problem',
        list: [
          `The cost of 3 pens is ₹ 18. What is the cost of 5 pens?
solution:
The cost of 1 pen = ₹ ?0
The cost of 5 pens = ₹ ?1
6, 30`,

          `Sam had ₹ 100. He bought an ice-cream for ₹ 40 and candies for ₹ 20. How much does he have as balance?
solution:
Total spending = ₹ ?0
Balance in hand = ₹ ?1
60, 40`,

          `Sam's car can cover 150 km in 3 hr. How much time will it take to cover 500 km?
solution:
Distance covered in 1 hr = ?0 km
Time taken for 500 km = ?1 hr
50, 10`,

          `48 balls can be packed in 6 boxes. How many balls can be packed in 9 boxes?
solution:
No. of balls in 1 box = ?0
No. of balls in 9 boxes = ?1
8, 72`,

          `The cost of 5 notebooks is ₹ 150. What is the cost of 12 notebooks?
solution:
Cost of 1 notebook = ₹ ?0
Cost of 12 notebooks = ₹ ?1
30, 360`
        ]
      }
    },
    {
      label: 'Count Arithmetic - Multiply',
      type: 'countArithmetic',
      id: 'count-multiply',
      data: {
        type: 'multiply',
        arr: [
          [7, 6],
          [6, 8],
          [8, 7],
          [9, 8],
          [10, 7],
          [9, 6],
          [7, 8],
          [10, 6],
          [7, 7],
          [10, 8]
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'bar',
      label: 'Bar Chart',
      data: {
        title:
          'In the ice-cream shop, the total quantity sold on a particular day are given in the below bar chart. Answer the questions given at the bottom.',
        type: 'vbar',
        labels: 'vanilla, chocolate, pista, strawberry, others',
        values: '20, 60, 40, 40, 30',
        questions: [
          {
            qText: 'What was the favorite ice-cream in the shop?',
            options: ' Chocolate, pista, strawberry'
          },
          {
            qText: 'How many more Pista are sold than Vanilla?',
            type: 'number',
            value: 20
          },
          {
            qText: 'Which of the followed was liked the least?',
            options: 'vanilla, Chocolate, pista, strawberry'
          },
          {
            qText: 'How many total ice-creams are sold?',
            type: 'number',
            value: 190
          },
          {
            qText: 'Which two are equally sold?',
            options:
              'pista and strawberry, vanilla and chocolate, chocolate and pista'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'pie',
      label: 'Pie Chart',
      data: {
        title:
          'The below pie chart tells how students come to school. Please answer the questions given at the bottom.',
        type: 'pie',
        labels: 'walk, cycle, car, bus',
        values: '30, 50, 20, 80',
        questions: [
          {
            qText: 'How many students come by walk or cycle?',
            type: 'number',
            value: 80
          },
          {
            qText:
              'What is the most common mode of transport to reach the school?',
            options: 'bus, walk, cycle, car'
          },
          {
            qText:
              'How many students use some type of vehicle to reach school?',
            type: 'number',
            value: 150
          },
          {
            qText:
              'True or False: The number of students coming by walk or cycle is same as the number of students coming by bus.',
            options: 'True, False'
          },
          {
            qText: 'How many students use car or bus?',
            type: 'number',
            value: 100
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'tally',
      label: 'Tally Chart',
      data: {
        title:
          'John was given the task to count the number of trees present in the prime locations. Find below the tally chart. Answer the questions, given at the bottom.',
        type: 'tally',
        labels: 'school, park, hospital, bank, river-side',
        values: '5, 18, 9, 4, 10',
        questions: [
          {
            qText: 'Where can we find the most number of trees?',
            options: 'park, hospital, school'
          },
          {
            qText: 'Where can we find the least number of trees?',
            options: 'bank, school, hospital'
          },
          {
            qText: 'How many trees John has counted?',
            type: 'number',
            value: 46
          },
          {
            qText: 'How many trees are present in the park and river-side?',
            type: 'number',
            value: 28
          },
          {
            qText:
              'True or False: The number of trees present in river-side is greater than the combined school and bank.',
            options: 'True, False'
          }
        ]
      }
    },
    ...(() =>
      [...Array(6)].map((dummy, i) => ({
        type: 'matchByDragDrop',
        label: `Tables - ${i + 6}`,
        id: `table-${i + 6}`,
        data: { type: 'tables', number: i + 6 }
      })))()
  ]
};
