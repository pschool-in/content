export default {
  label: 'Tables 2 to 5',
  id: 'tables',
  list: [
    {
      type: 'match',
      label: 'Match Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `2 × 1 =, 2
2 × 2 =, 4
2 × 3 =, 6
2 × 4 =, 8
2 × 5 =, 10
2 × 6 =, 12`,

        `2 × 7 =, 14
2 × 8 =, 16
2 × 9 =, 18
2 × 10 =, 20
2 × 11 =, 22
2 × 12 =, 24`,

        `3 × 1 =, 3
3 × 2 =, 6
3 × 3 =, 9
3 × 4 =, 12
3 × 5 =, 15
3 × 6 =, 18`,

        `3 × 7 =, 21
3 × 8 =, 24
3 × 9 =, 27
3 × 10 =, 30
3 × 11 =, 33
3 × 12 =, 36`,

        `4 × 1 =, 4
4 × 2 =, 8
4 × 3 =, 12
4 × 4 =, 16
4 × 5 =, 20
4 × 6 =, 24`,

        `4 × 7 =, 28
4 × 8 =, 32
4 × 9 =, 36
4 × 10 =, 40
4 × 11 =, 44
4 × 12 =, 48`,

        `5 × 1 =, 5
5 × 2 =, 10
5 × 3 =, 15
5 × 4 =, 20
5 × 5 =, 25
5 × 6 =, 30`,

        `5 × 7 =, 35
5 × 8 =, 40
5 × 9 =, 45
5 × 10 =, 50
5 × 11 =, 55
5 × 12 =, 60`
      ]
    },
    {
      type: 'matchByDragDrop',
      label: `Drag & Drop`,
      id: `table-drag`,
      commonData: {
        type: 'tables'
      },
      data: [
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 4
        },
        {
          number: 5
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x~2'
        },
        {
          type: 'mul~x~3'
        },
        {
          type: 'mul~x~4'
        },
        {
          type: 'mul~x~5'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Word Problem',
      data: {
        title: 'Fill the Blanks',
        type: 'word-problem',
        isSentence: false,
        inputType: 'small',
        fontSize: '1.3rem',
        bgColor: 'white',
        list: [
          `1 img~ball weighs 2 ^kg
5 img~ball weigh ?0 ^kg
6 img~ball weigh ?1 ^kg
8 img~ball weigh ?2 ^kg
10, 12, 16`,

          `1 img~pencil costs ₹ 3.
3 img~pencil cost ₹ ?0
5 img~pencil cost ₹ ?1
8 img~pencil cost ₹ ?2
9, 15, 24`,

          `1 img~lollipop costs ₹ 4.
3 img~lollipop cost ₹ ?0
4 img~lollipop cost ₹ ?1
9 img~lollipop cost ₹ ?2
12, 16, 36`,

          `1 img~mango costs ₹ 5.
5 img~mango cost ₹ ?0
7 img~mango cost ₹ ?1
9 img~mango cost ₹ ?2
25, 35, 45`
        ]
      }
    },
    {
      label: 'Group the Multiples',
      type: 'group',
      id: 'group',
      commonData: {
        fontSize: '1.5rem'
      },
      data: [
        {
          title: 'Multiples of 2 or Not',
          types: [
            {
              name: 'Multiples of 2',
              text: '2,4,6,8,10,12'
            },
            {
              name: 'Not',
              text: '1,3,5,7,9,11'
            }
          ]
        },
        {
          title: 'Multiples of 3 or Not',
          types: [
            {
              name: 'Multiples of 3',
              text: '3, 6, 9, 12, 15, 18'
            },
            {
              name: 'Not',
              text: '2, 7, 11, 5, 10, 13'
            }
          ]
        },
        {
          title: 'Multiples of 4 or Not',
          types: [
            {
              name: 'Multiples of 4',
              text: '4, 8, 12, 16, 20, 24'
            },
            {
              name: 'Not',
              text: '3, 6, 10, 14, 15, 18'
            }
          ]
        },
        {
          title: 'Multiples of 5 or Not',
          types: [
            {
              name: 'Multiples of 5',
              text: '5, 10, 15, 20, 25, 30'
            },
            {
              name: 'Not',
              text: '4, 18, 52, 54, 44, 12'
            }
          ]
        },
        {
          title: 'Multiples of 2 or Not',
          types: [
            {
              name: 'Multiples of 2',
              text: '14, 16, 18, 20, 22, 24'
            },
            {
              name: 'Not',
              text: '15, 17, 11, 19, 21, 25'
            }
          ]
        },
        {
          title: 'Multiples of 3 or Not',
          types: [
            {
              name: 'Multiples of 3',
              text: '21, 24, 27, 30, 33, 36'
            },
            {
              name: 'Not',
              text: '20, 22, 29, 35, 25, 37'
            }
          ]
        },
        {
          title: 'Multiples of 4 or Not',
          types: [
            {
              name: 'Multiples of 4',
              text: '28, 32, 36, 40, 44, 48'
            },
            {
              name: 'Not',
              text: '30, 38, 42, 46, 22, 26'
            }
          ]
        },
        {
          title: 'Multiples of 5 or Not',
          types: [
            {
              name: 'Multiples of 5',
              text: '35, 40, 45, 50, 55, 60'
            },
            {
              name: 'Not',
              text: '54, 59, 64, 68, 47, 49'
            }
          ]
        }
      ]
    },
    {
      id: 'multiply-rev',
      type: 'quickArithmetic',
      label: 'Fill up',
      commonData: {
        count: 10,
        title: 'Multiply',
        isReverse: true,
        blankPos: 1
      },
      data: [
        {
          type: '2*x'
        },
        {
          type: '3*x'
        },
        {
          type: '4*x'
        },
        {
          type: '5*x'
        }
      ]
    },
    {
      id: 'multiples',
      type: 'maze',
      label: 'Connect the Multiples',
      data: [
        {
          title:
            'Connect the multiples of 2 and help the girl to get the book.',
          start: 'girl',
          target: 'book',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `99,41,15,34,36,38
  87,59,71,32,31,35
  91,77,49,30,28,26
  6,8,10,9,11,24
  4,67,12,5,20,22
  2,1,14,16,18,13`,
          table: `0,0,0,1,1,1
  0,0,0,1,0,0
  0,0,0,1,1,1
  1,1,1,0,0,1
  1,0,1,0,1,1
  1,0,1,1,1,0`
        },
        {
          title:
            'Connect the multiples of 3 and help the squirrel to get the peanut.',
          start: 'squirrel',
          target: 'peanut',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `60,59,38,39,36,33
  57,56,45,42,41,30
  54,51,48,49,24,27
  16,14,17,18,21,22
  6,9,12,15,20,25
  3,1,8,4,7,16`,
          table: `1,0,0,1,1,1
  1,0,1,1,0,1
  1,1,1,0,1,1
  0,0,0,1,1,0
  1,1,1,1,0,0
  1,0,0,0,0,0`
        },
        {
          title:
            'Connect the multiples of 4 and help the man to get the motorbike.',
          start: 'man',
          target: 'motorbike',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `52,56,60,62,79,80
  48,57,64,68,72,76
  44,46,50,49,27,25
  40,42,51,18,21,23
  36,32,34,16,12,8
  30,28,24,20,1,4`,
          table: `1,1,1,0,0,1
  1,0,1,1,1,1
  1,0,0,0,0,0
  1,0,0,0,0,0
  1,1,0,1,1,1
  0,1,1,1,0,1`
        },
        {
          title:
            'Connect the multiples of 5 and help the elephant to get the watermelon.',
          start: 'elephant',
          target: 'watermelon',
          color: '#c05252',
          startPt: {
            x: 4,
            y: 5
          },
          endPt: {
            x: 4,
            y: 0
          },
          size: 50,
          fills: `84,82,90,95,100,69
  79,80,85,36,39,42
  70,75,78,35,30,25
  65,66,45,40,22,20
  60,55,50,52,10,15
  59,54,49,51,5,1`,
          table: `0,0,1,1,1,0
  0,1,1,0,0,0
  1,1,0,1,1,1
  1,0,1,1,0,1
  1,1,1,0,1,1
  0,0,0,0,1,0`
        }
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples-small',
      commonData: {
        start: 1,
        step: 1,
        rows: 6,
        columns: 6,
        cellSize: 45
      },
      data: [
        {
          title: 'Select all multiples of 2 in the below table.',
          answer: 2
        },
        {
          title: 'Select all multiples of 3 in the below table.',
          answer: 3
        },
        {
          title: 'Select all multiples of 4 in the below table.',
          answer: 4
        },
        {
          title: 'Select all multiples of 5 in the below table.',
          answer: 5
        }
      ]
    }
  ]
};
