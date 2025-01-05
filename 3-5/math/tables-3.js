export default {
  label: 'Tables 11 to 15',
  id: 'tables-3',
  list: [
    {
      type: 'match',
      label: 'Match Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `11 × 1 =, 11
11 × 2 =, 22
11 × 3 =, 33
11 × 4 =, 44
11 × 5 =, 55
11 × 6 =, 66`,

        `11 × 7 =, 77
11 × 8 =, 88
11 × 9 =, 99
11 × 10 =, 110
11 × 11 =, 121
11 × 12 =, 132`,

        `12 × 1 =, 12
12 × 2 =, 24
12 × 3 =, 36
12 × 4 =, 48
12 × 5 =, 60
12 × 6 =, 72`,

        `12 × 7 =, 84
12 × 8 =, 96
12 × 9 =, 108
12 × 10 =, 120
12 × 11 =, 132
12 × 12 =, 144`,

        `13 × 1 =, 13
13 × 2 =, 26
13 × 3 =, 39
13 × 4 =, 52
13 × 5 =, 65
13 × 6 =, 78`,

        `13 × 7 =, 91
13 × 8 =, 104
13 × 9 =, 117
13 × 10 =, 130
13 × 11 =, 143
13 × 12 =, 156`,

        `14 × 1 =, 14
14 × 2 =, 28
14 × 3 =, 42
14 × 4 =, 56
14 × 5 =, 70
14 × 6 =, 84`,

        `14 × 7 =, 98
14 × 8 =, 112
14 × 9 =, 126
14 × 10 =, 140
14 × 11 =, 154
14 × 12 =, 168`,

        `15 × 1 =, 15
15 × 2 =, 30
15 × 3 =, 45
15 × 4 =, 60
15 × 5 =, 75
15 × 6 =, 90`,

        `15 × 7 =, 105
15 × 8 =, 120
15 × 9 =, 135
15 × 10 =, 150
15 × 11 =, 165
15 × 12 =, 180`
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
          number: 11
        },
        {
          number: 12
        },
        {
          number: 13
        },
        {
          number: 14
        },
        {
          number: 15
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
          type: 'mul~x~11'
        },
        {
          type: 'mul~x~12'
        },
        {
          type: 'mul~x~13'
        },
        {
          type: 'mul~x~14'
        },
        {
          type: 'mul~x~15'
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
          `1 img~ball costs ₹ 11.
5 img~ball cost ₹ ?0
6 img~ball cost ₹ ?1
8 img~ball cost ₹ ?2
55, 66, 88`,

          `1 img~pencil costs ₹ 12.
3 img~pencil cost ₹ ?0
5 img~pencil cost ₹ ?1
8 img~pencil cost ₹ ?2
36, 60, 96`,

          `1 img~grapes costs ₹ 13.
2 img~grapes cost ₹ ?0
5 img~grapes cost ₹ ?1
6 img~grapes cost ₹ ?2
26, 65, 78`,

          `1 img~capsicum costs ₹ 14.
3 img~capsicum cost ₹ ?0
4 img~capsicum cost ₹ ?1
9 img~capsicum cost ₹ ?2
42, 56, 126`,

          `1 img~mango costs ₹ 15.
5 img~mango cost ₹ ?0
7 img~mango cost ₹ ?1
9 img~mango cost ₹ ?2
75, 105, 135`
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
          title: 'Multiples of 11 or Not',
          types: [
            {
              name: 'Multiples of 11',
              text: '11, 22, 33, 44, 55, 66'
            },
            {
              name: 'Not',
              text: '14, 19, 24, 36, 49, 60'
            }
          ]
        },
        {
          title: 'Multiples of 12 or Not',
          types: [
            {
              name: 'Multiples of 12',
              text: '12, 24, 36, 48, 60, 72'
            },
            {
              name: 'Not',
              text: '14, 26, 34, 46, 64, 76'
            }
          ]
        },
        {
          title: 'Multiples of 13 or Not',
          types: [
            {
              name: 'Multiples of 13',
              text: '13, 26, 39, 52, 65, 78'
            },
            {
              name: 'Not',
              text: '16, 23, 36, 55, 63, 74'
            }
          ]
        },
        {
          title: 'Multiples of 14 or Not',
          types: [
            {
              name: 'Multiples of 14',
              text: '14, 28, 42, 56, 70, 84'
            },
            {
              name: 'Not',
              text: '18, 24, 65, 54, 67, 88'
            }
          ]
        },
        {
          title: 'Multiples of 15 or Not',
          types: [
            {
              name: 'Multiples of 15',
              text: '15, 30, 45, 60, 75, 90'
            },
            {
              name: 'Not',
              text: '25, 40, 50, 55, 70, 85'
            }
          ]
        },
        {
          title: 'Multiples of 11 or Not',
          types: [
            {
              name: 'Multiples of 11',
              text: '77, 88, 99, 110, 121, 132'
            },
            {
              name: 'Not',
              text: '78, 89, 98, 120, 131, 122'
            }
          ]
        },
        {
          title: 'Multiples of 12 or Not',
          types: [
            {
              name: 'Multiples of 12',
              text: '84, 96, 108, 120, 132, 144'
            },
            {
              name: 'Not',
              text: '92, 104, 116, 124, 136, 142'
            }
          ]
        },
        {
          title: 'Multiples of 13 or Not',
          types: [
            {
              name: 'Multiples of 13',
              text: '91, 104, 117, 130, 143, 156'
            },
            {
              name: 'Not',
              text: '96, 106, 107, 134, 165, 151'
            }
          ]
        },
        {
          title: 'Multiples of 14 or Not',
          types: [
            {
              name: 'Multiples of 14',
              text: '98, 112, 126, 140, 154, 168'
            },
            {
              name: 'Not',
              text: '96, 118, 124, 152, 158, 166'
            }
          ]
        },
        {
          title: 'Multiples of 15 or Not',
          types: [
            {
              name: 'Multiples of 15',
              text: '105, 120, 135, 150, 165, 180'
            },
            {
              name: 'Not',
              text: '115, 125, 140, 160, 170, 175'
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
          type: '11*x'
        },
        {
          type: '12*x'
        },
        {
          type: '13*x'
        },
        {
          type: '14*x'
        },
        {
          type: '15*x'
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
            'Connect the multiples of 11 and help the elephant to get the watermelon.',
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
          fills: `106,154,165,176,196,242
  168,143,120,187,116,231
  121,132,200,198,209,220
  110,62,64,107,112,124
  99,88,38,44,33,22
  43,77,66,55,34,11`,
          table: `0,1,1,1,0,1
  0,1,0,1,0,1
  1,1,0,1,1,1
  1,0,0,0,0,0
  1,1,0,1,1,1
  0,1,1,1,0,1`
        },
        {
          title:
            'Connect the multiples of 12 and help the baby to get the milk.',
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
          fills: `176,192,204,216,145,264
  168,180,194,228,240,252
  156,95,101,236,104,272
  144,132,41,60,48,36
  68,120,134,72,29,24
  122,108,96,84,44,12`,
          table: `0,1,1,1,0,1
  1,1,0,1,1,1
  1,0,0,0,0,0
  1,1,0,1,1,1
  0,1,0,1,0,1
  0,1,1,1,0,1`
        },
        {
          title:
            'Connect the multiples of 13 and help the girl to get the cycle.',
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
          fills: `247,207,195,182,169,156
  234,221,208,174,181,143
  81,76,75,104,117,130
  47,65,78,91,101,103
  55,52,49,14,21,35
  20,39,26,13,25,12`,
          table: `1,0,1,1,1,1
  1,1,1,0,0,1
  0,0,0,1,1,1
  0,1,1,1,0,0
  0,1,0,0,0,0
  0,1,1,1,0,0`
        },
        {
          title:
            'Connect the multiples of 14 and help the dog to get the bone.',
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
          fills: `266,161,182,168,154,98
  252,152,196,197,140,80
  238,224,210,161,126,112
  240,222,135,142,108,98
  32,54,42,56,70,84
  21,14,28,26,32,41`,
          table: `1,0,1,1,1,0
  1,0,1,0,1,0
  1,1,1,0,1,1
  0,0,0,0,0,1
  0,0,1,1,1,1
  0,1,1,0,0,0`
        },
        {
          title:
            'Connect the multiples of 15 and help the boy to get the calculator.',
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
          fills: `330,235,245,225,210,195
  315,225,295,240,135,180
  300,285,270,255,125,165
  90,290,280,110,135,150
  30,45,60,100,120,85
  15,20,75,90,105,115`,
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
          title: 'Select all multiples of 11 in the below table.',
          answer: 11
        },
        {
          title: 'Select all multiples of 12 in the below table.',
          answer: 12
        },
        {
          title: 'Select all multiples of 13 in the below table.',
          answer: 13
        },
        {
          title: 'Select all multiples of 14 in the below table.',
          answer: 14
        },
        {
          title: 'Select all multiples of 15 in the below table.',
          answer: 15
        }
      ]
    }
  ]
};
