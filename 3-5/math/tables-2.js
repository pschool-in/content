export default {
  label: 'Tables : 6 to 10',
  id: 'tables-2',
  list: [
    {
      type: 'match',
      label: 'Match Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `6 × 1 =, 6
6 × 2 =, 12
6 × 3 =, 18
6 × 4 =, 24
6 × 5 =, 30
6 × 6 =, 36`,

        `6 × 7 =, 42
6 × 8 =, 48
6 × 9 =, 54
6 × 10 =, 60
6 × 11 =, 66
6 × 12 =, 72`,

        `7 × 1 =, 7
7 × 2 =, 14
7 × 3 =, 21
7 × 4 =, 28
7 × 5 =, 35
7 × 6 =, 42`,

        `7 × 7 =, 49
7 × 8 =, 56
7 × 9 =, 63
7 × 10 =, 70
7 × 11 =, 77
7 × 12 =, 84`,

        `8 × 1 =, 8
8 × 2 =, 16
8 × 3 =, 24
8 × 4 =, 32
8 × 5 =, 40
8 × 6 =, 48`,

        `8 × 7 =, 56
8 × 8 =, 64
8 × 9 =, 72
8 × 10 =, 80
8 × 11 =, 88
8 × 12 =, 96`,

        `9 × 1 =, 9
9 × 2 =, 18
9 × 3 =, 27
9 × 4 =, 36
9 × 5 =, 45
9 × 6 =, 54`,

        `9 × 7 =, 63
9 × 8 =, 72
9 × 9 =, 81
9 × 10 =, 90
9 × 11 =, 99
9 × 12 =, 108`,

        `10 × 1 =, 10
10 × 2 =, 20
10 × 3 =, 30
10 × 4 =, 40
10 × 5 =, 50
10 × 6 =, 60`,

        `10 × 7 =, 70
10 × 8 =, 80
10 × 9 =, 90
10 × 10 =, 100
10 × 11 =, 110
10 × 12 =, 120`
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
          number: 6
        },
        {
          number: 7
        },
        {
          number: 8
        },
        {
          number: 9
        },
        {
          number: 10
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
          type: 'mul~x~6'
        },
        {
          type: 'mul~x~7'
        },
        {
          type: 'mul~x~8'
        },
        {
          type: 'mul~x~9'
        },
        {
          type: 'mul~x~10'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Word Problem',
      data: {
        title: 'Fill the Blanks',
        type: 'word-problem',
        isSentence: false,
        inputType: 'small',
        fontSize: '1.3rem',
        bgColor: 'white',
        list: [
          `1 img~apple costs ₹ 6.
3 img~apple cost ₹ ?0
6 img~apple cost ₹ ?1
8 img~apple cost ₹ ?2
18, 36, 48`,

          `1 img~ice-cream costs ₹ 7.
2 img~ice-cream cost ₹ ?0
4 img~ice-cream cost ₹ ?1
7 img~ice-cream cost ₹ ?2
14, 28, 49`,

          `1 img~stone weighs 8 ^kg
5 img~stone weigh ?0 ^kg
6 img~stone weigh ?1 ^kg
8 img~stone weigh ?2 ^kg
40, 48, 64`,

          `1 img~grapes costs ₹ 9.
2 img~grapes cost ₹ ?0
5 img~grapes cost ₹ ?1
6 img~grapes cost ₹ ?2
18, 45, 54`,

          `1 img~capsicum costs ₹ 10.
3 img~capsicum cost ₹ ?0
4 img~capsicum cost ₹ ?1
9 img~capsicum cost ₹ ?2
30, 40, 90`
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
          title: 'Multiples of 6 or Not',
          types: [
            {
              name: 'Multiples of 6',
              text: '6, 12, 18, 24, 30, 36'
            },
            {
              name: 'Not',
              text: '5, 9, 15, 21, 38, 44'
            }
          ]
        },
        {
          title: 'Multiples of 7 or Not',
          types: [
            {
              name: 'Multiples of 7',
              text: '7, 14, 21, 28, 35, 42'
            },
            {
              name: 'Not',
              text: '6, 17, 16, 27, 19, 26'
            }
          ]
        },
        {
          title: 'Multiples of 8 or Not',
          types: [
            {
              name: 'Multiples of 8',
              text: '8, 16, 24, 32, 40, 48'
            },
            {
              name: 'Not',
              text: '12, 20, 22, 36, 46, 30'
            }
          ]
        },
        {
          title: 'Multiples of 9 or Not',
          types: [
            {
              name: 'Multiples of 9',
              text: '9, 18, 27, 36, 45, 54'
            },
            {
              name: 'Not',
              text: '6, 19, 29, 26, 46, 35'
            }
          ]
        },
        {
          title: 'Multiples of 10 or Not',
          types: [
            {
              name: 'Multiples of 10',
              text: '10, 20, 30, 40, 50, 60'
            },
            {
              name: 'Not',
              text: '15, 24, 32, 25, 44,45'
            }
          ]
        },
        {
          title: 'Multiples of 6 or Not',
          types: [
            {
              name: 'Multiples of 6',
              text: '42, 48, 54, 60, 66, 72'
            },
            {
              name: 'Not',
              text: '46, 50, 56, 76, 64, 68'
            }
          ]
        },
        {
          title: 'Multiples of 7 or Not',
          types: [
            {
              name: 'Multiples of 7',
              text: '49, 56, 63, 70, 77, 84'
            },
            {
              name: 'Not',
              text: '47, 74, 59, 66, 54, 39'
            }
          ]
        },
        {
          title: 'Multiples of 8 or Not',
          types: [
            {
              name: 'Multiples of 8',
              text: '56, 64, 72, 80, 88, 96'
            },
            {
              name: 'Not',
              text: '94, 60, 68, 78, 84, 86'
            }
          ]
        },
        {
          title: 'Multiples of 9 or Not',
          types: [
            {
              name: 'Multiples of 9',
              text: '63, 72, 81, 90, 99, 108'
            },
            {
              name: 'Not',
              text: '56, 65, 79, 95, 92, 88'
            }
          ]
        },
        {
          title: 'Multiples of 10 or Not',
          types: [
            {
              name: 'Multiples of 10',
              text: '70, 80, 90, 100, 110, 120'
            },
            {
              name: 'Not',
              text: '75, 105, 108, 85, 95, 64'
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
          type: '6*x'
        },
        {
          type: '7*x'
        },
        {
          type: '8*x'
        },
        {
          type: '9*x'
        },
        {
          type: '10*x'
        }
      ]
    },
    {
      id: 'maze',
      type: 'maze',
      label: 'Connect the Multiples',
      data: [
        {
          title:
            'Connect the multiples of 6 and help the elephant to get the watermelon.',
          start: 'elephant',
          target: 'watermelon',
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
          fills: `76,84,90,96,98,132
  68,78,80,102,116,126
  66,72,74,108,114,120
  60,62,64,107,112,124
  54,48,38,24,18,12
  43,42,36,30,4,6`,
          table: `0,1,1,1,0,1
  0,1,0,1,0,1
  1,1,0,1,1,1
  1,0,0,0,0,0
  1,1,0,1,1,1
  0,1,1,1,0,1`
        },
        {
          title:
            'Connect the multiples of 7 and help the baby to get the milk.',
          start: 'baby',
          target: 'milk',
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
          fills: `106,112,119,126,145,154
  98,105,128,133,140,147
  91,95,101,107,30,27
  84,77,41,35,28,21
  68,70,46,42,29,14
  65,63,56,49,44,7`,
          table: `0,1,1,1,0,1
  1,1,0,1,1,1
  1,0,0,0,0,0
  1,1,0,1,1,1
  0,1,0,1,0,1
  0,1,1,1,0,1`
        },
        {
          title:
            'Connect the multiples of 8 and help the girl to get the cycle.',
          start: 'girl',
          target: 'cycle',
          color: '#c05252',
          startPt: {
            x: 3,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `152,143,120,112,104,96
  144,136,128,74,81,88
  51,49,75,64,72,80
  47,40,48,56,50,44
  26,32,22,14,21,35
  20,24,16,8,4,12`,
          table: `1,0,1,1,1,1
  1,1,1,0,0,1
  0,0,0,1,1,1
  0,1,1,1,0,0
  0,1,0,0,0,0
  0,1,1,1,0,0`
        },
        {
          title: 'Connect the multiples of 9 and help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252',
          startPt: {
            x: 1,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `171,161,117,108,99,98
  162,152,126,97,90,80
  153,144,135,61,81,72
  40,20,35,42,53,63
  32,17,27,36,45,54
  21,9,18,26,32,41`,
          table: `1,0,1,1,1,0
  1,0,1,0,1,0
  1,1,1,0,1,1
  0,0,0,0,0,1
  0,0,1,1,1,1
  0,1,1,0,0,0`
        },
        {
          title:
            'Connect the multiples of 10 and help the boy to get the calculator.',
          start: 'boy',
          target: 'calculator',
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
          fills: `220,235,245,150,140,130
  210,225,195,160,135,120
  200,190,180,170,125,110
  92,82,72,65,90,100
  20,30,40,55,80,85
  10,15,50,60,70,75`,
          table: `1,0,0,1,1,1
  1,0,0,1,0,1
  1,1,1,1,0,1
  0,0,0,0,1,1
  1,1,1,0,1,0
  1,0,1,1,1,0`
        }
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples',
      commonData: {
        start: 1,
        step: 1
      },
      data: [
        {
          title: 'Select all multiples of 6 in the below table.',
          answer: 6
        },
        {
          title: 'Select all multiples of 7 in the below table.',
          answer: 7
        },
        {
          title: 'Select all multiples of 8 in the below table.',
          answer: 8
        },
        {
          title: 'Select all multiples of 9 in the below table.',
          answer: 9
        },
        {
          title: 'Select all multiples of 10 in the below table.',
          answer: 10
        }
      ]
    }
  ]
};
