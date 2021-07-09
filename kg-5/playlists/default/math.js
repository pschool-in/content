const math = {
  label: 'Quick Math',
  id: 'math',
  img: 'quickMath',
  list: [
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      data: { pattern: 'xx = xx' }
    },
    {
      type: 'areaGraph',
      id: 'area',
      label: 'Area under the Shape',
      data: {
        title: 'Calculate the Area under the closed boundary.',
        arr: [
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
8`,

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
        ]
      }
    },
    {
      type: 'addition',
      id: 'after-number',
      label: 'After Number',
      data: { type: 'after~xx' }
    },
    {
      type: 'addition',
      id: 'before-number',
      label: 'Before Number',
      data: { type: 'before~xx' }
    },
    {
      label: 'Count Arithmetic - Addition',
      type: 'countArithmetic',
      data: { type: 'addition' },
      id: 'count-add'
    },
    {
      type: 'addition',
      id: 'addition',
      label: 'Addition',
      data: { type: 'add~xx~x' }
    },
    {
      type: 'addition',
      id: 'misc',
      label: 'Evaluate',
      data: { type: 'misc~xx+x-x', title: 'Solve.' }
    },
    {
      type: 'counter',
      id: 'count-10-100',
      label: 'Find Value - (10 - 100)',
      data: { level: 2 }
    },
    {
      type: 'addition',
      id: 'multiplication',
      label: 'Multiplication',
      data: { type: 'mul~xx~x' }
    },
    {
      type: 'addition',
      id: 'division',
      label: 'Division',
      data: { type: 'div~xx~x' }
    },
    {
      type: 'addition',
      id: 'evaluate',
      label: 'Missing Number',
      data: {
        type: 'add~xx~x',
        isReverse: true,
        title: 'Write the missing number.'
      }
    },
    {
      type: 'missingWorkout',
      id: 'addition-missing',
      label: 'Addition - Missing Number',
      data: {
        pattern: 'xx + xx',
        missing: [0, 1, 2, 3]
      }
    },
    {
      type: 'missingWorkout',
      id: 'subtraction-missing',
      label: 'Subtraction - Missing Number',
      data: { pattern: 'xx - xx', missing: [0, 1, 2, 3] }
    } /*
    {
      type: 'biggestNumber',
      id: 'biggest-number',
      label: 'Biggest Number',
      data: { totalNos: 4, isBiggest: true, type: 2 }
    },*/,
    {
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      data: {
        title: 'Click on the Biggest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'biggest',
        pattern: 'xx'
      }
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      data: {
        title: 'Click on the Smallest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'smallest',
        pattern: 'xxx'
      }
    },
    {
      type: 'ascendingOrder',
      id: 'ascending-order',
      label: 'Ascending Order',
      data: { totalNos: 4, isAscending: true, type: 2 }
    },
    {
      type: 'ascendingOrder',
      id: 'descending-order',
      label: 'Descending Order',
      data: { totalNos: 4, isAscending: false, type: 2 }
    },
    {
      type: 'factorTree',
      id: 'factor-tree',
      label: 'Factor Tree',
      data: [
        {
          type: 0,
          arr: [30, 42, 8, 27, 12, 18, 20, 50, 45, 75]
        },
        {
          type: 1,
          arr: [24, 36, 16, 54, 90, 84, 40, 60, 150, 100]
        },
        {
          type: 2,
          arr: [24, 36, 16, 54, 90, 84, 40, 60, 150, 100]
        }
      ]
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
    {
      type: 'blocksCount',
      id: 'count-blocks',
      label: 'Calculate No. of Blocks',
      data: {}
    },
    { type: 'fraction', id: 'fraction', label: 'Fraction', data: {} },
    {
      type: 'fraction',
      id: 'fraction-read',
      label: 'Read Fraction',
      data: { probType: 'read' }
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
      type: 'picturePuzzle',
      id: 'picture-puzzle',
      label: 'Picture Puzzle',
      data: {
        type: 2,
        arr: [
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
      }
    },
    {
      type: 'geometry',
      id: 'geometry',
      label: 'Geometry',
      data: {
        text: `Draw a line of length 4 cm. | line | 4
      Draw a circle of radius 2.4 cm. | circle | 2.4
      Draw a rectangle of sides 2.8 and 2.4 cm. | rect | 2.8, 2.4
      Make an angle of 75 degree. | angle | 75
      Make an angle of 170 degree. | angle | 170`
      }
    },
    {
      type: 'geometryType',
      label: 'Right, Acute, Obtuse angles',
      id: 'angle-type',
      data: { type: 'angle' }
    },
    {
      type: 'balance',
      label: 'Balance the Numbers',
      id: 'balance',
      data: {
        left: 'x,x',
        right: 'v',
        count: 10
      }
    },
    ...(() =>
      [...Array(14)].map((dummy, i) => ({
        type: 'matchByDragDrop',
        label: `Tables - ${i + 2}`,
        id: `table-${i + 2}`,
        data: { type: 'tables', number: i + 2 }
      })))()
  ]
};

export default math;
