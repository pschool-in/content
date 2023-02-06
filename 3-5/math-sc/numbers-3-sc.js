export default {
  label: 'Whole Numbers',
  id: 'numbers-3-sc',
  list: [
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      lockAfter: 3,
      commonData: {
        fontSize: '2.5rem',
        type: 'math',
        probType: 'compare'
      },
      data: [
        {
          pattern: 'st + x = st + x'
        },
        {
          pattern: 'st - x = st - x'
        },
        {
          pattern: 'xx - x = xx + x'
        },
        {
          pattern: 'x + x - x = x + x - x'
        },
        {
          pattern: 'st - 1x = st - 1x'
        }
      ]
    },
    {
      id: 'multiples',
      type: 'maze',
      label: 'Connect the Multiples',
      lockAfter: 2,
      data: [
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
        },
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
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      commonData: {
        title: 'Click on the Biggest Number.',
        fontSize: '2.5',
        type: 'math',
        probType: 'biggest'
      },
      data: [
        {
          pattern: 'xxx'
        },
        {
          pattern: 'x00 + x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x - x'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 'x0 - x'
        },
        {
          pattern: 's00 + x'
        },
        {
          pattern: 'sx + x'
        },
        {
          pattern: 's * x'
        },
        {
          pattern: 'x * x'
        },
        {
          pattern: 'x + x + x'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      commonData: {
        title: 'Click on the Smallest Number.',
        fontSize: '2.5',
        type: 'math',
        probType: 'smallest'
      },
      data: [
        {
          pattern: 'xxx'
        },
        {
          pattern: 'x00 + x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x - x'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 'x0 - x'
        },
        {
          pattern: 's00 + x'
        },
        {
          pattern: 'sx + x'
        },
        {
          pattern: 's * x'
        },
        {
          pattern: 'x * x'
        },
        {
          pattern: 'x + x + x'
        }
      ]
    },
    {
      type: 'sorting',
      id: 'ascending',
      label: 'Ascending Order',
      lockAfter: 3,
      commonData: {
        title: 'Rearrange the numbers in ascending order.',
        fontSize: '2rem',
        type: 'math',
        probType: 'ascending'
      },
      data: [
        {
          pattern: 'xxx'
        },
        {
          pattern: 'x00 + x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x - x'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 'x0 - x'
        },
        {
          pattern: 's00 + x'
        },
        {
          pattern: 'sx + x'
        },
        {
          pattern: 's * x'
        },
        {
          pattern: 'x * x'
        },
        {
          pattern: 'x + x + x'
        }
      ]
    },
    {
      type: 'sorting',
      id: 'descending',
      label: 'Descending Order',
      lockAfter: 3,
      commonData: {
        title: 'Rearrange the numbers in descending order.',
        fontSize: '2rem',
        type: 'math',
        probType: 'descending'
      },
      data: [
        {
          pattern: 'xxx'
        },
        {
          pattern: 'x00 + x0 + x'
        },
        {
          pattern: 'x + x'
        },
        {
          pattern: 'x - x'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 'x0 - x'
        },
        {
          pattern: 's00 + x'
        },
        {
          pattern: 'sx + x'
        },
        {
          pattern: 's * x'
        },
        {
          pattern: 'x * x'
        },
        {
          pattern: 'x + x + x'
        }
      ]
    },
    {
      label: 'Arrange Number Names',
      type: 'sorting',
      id: 'sort',
      lockAfter: 2,
      commonData: {
        title:
          'Drag and drop and arrange the numbers. The smallest should come on top.'
      },
      data: [
        'one, three, five, seven, eight, nine, ten',
        'fifty five, fifty nine, sixty one, sixty five, sixty seven, sixty nine',
        'eleven, twelve, thirteen, fifteen, sixteen, eighteen, nineteen',
        'twenty two, twenty five, twenty six, thirty two,  thirty five,  thirty six',
        'twenty, forty, sixty, seventy, ninety, hundred'
      ]
    },
    {
      label: 'Odd vs Even Numbers',
      type: 'group',
      id: 'group',
      lockAfter: 1,
      commonData: {
        title:
          'Classify the below numbers as Odd and Even. Drag and drop them in the right boxes',
        fontSize: '2rem',
        types: ['Even', 'Odd']
      },
      data: [
        ['12, 14, 16, 18, 20', '11, 13, 15, 17, 19'],
        ['44, 66, 88, 98, 22', '33,11, 55, 77, 99'],
        ['48, 52, 56, 68, 64', '49, 51, 57, 59, 61'],
        ['20, 40, 60, 80, 50', '25, 45, 65, 75, 85'],
        ['18, 28, 12, 32, 38', '91, 83, 75, 67, 59']
      ]
    },
    {
      type: 'match',
      label: 'Match Multiply',
      id: 'match-multiply',
      lockAfter: 1,
      commonData: {
        title: 'Match Multiply'
      },
      data: [
        `7 × 7, 49
6 × 9, 54
5 × 9, 45
8 × 6, 48
6 × 6, 36
7 × 6, 42
8 × 7, 56`,

        `8 × 8, 64
7 × 7, 49
6 × 6, 36
9 × 9, 81
4 × 4, 16
10 × 10, 100
5 × 5, 25`,

        `9 × 8, 72
7 × 6, 42
8 × 6, 48
6 × 9, 54
9 × 4, 36
9 × 7, 63
5 × 9, 45`,

        `8 × 8, 64
9 × 9, 81
7 × 7, 49
6 × 6, 36
5 × 5, 25
4 × 4, 16
3 × 3, 9`,

        `8 × 6, 48
9 × 7, 63
7 × 7, 49
6 × 9, 54
5 × 8, 40
6 × 4, 24
9 × 8, 72`
      ]
    },
    {
      type: 'match',
      label: 'Match Division',
      id: 'match-divide',
      lockAfter: 1,
      commonData: {
        title: 'Match Division'
      },
      data: [
        `49 ÷ 7, 7
54 ÷ 9, 6
45 ÷ 9, 5
48 ÷ 6, 8
36 ÷ 4, 9
32 ÷ 8, 4`,

        `36 ÷ 6, 6
56 ÷ 7, 8
81 ÷ 9, 9
66 ÷ 6, 11
70 ÷ 7, 10
49 ÷ 7, 7`,

        `64 ÷ 8, 8
81 ÷ 9, 9
49 ÷ 7, 7
36 ÷ 6, 6
25 ÷ 5, 5
16 ÷ 4, 4
9  ÷ 3, 3`,

        `48 ÷ 8, 6
63 ÷ 9, 7
45 ÷ 9, 5
54 ÷ 6, 9
40 ÷ 5, 8
24 ÷ 6, 4
99  ÷ 9, 11`,

        `72 ÷ 8, 9
42 ÷ 6, 7
48 ÷ 6, 8
54 ÷ 9, 6
36 ÷ 9, 4
45 ÷ 9, 5
66  ÷ 6, 11`
      ]
    },
    {
      label: 'Number Sequence',
      type: 'matchByDragDrop',
      id: 'complete',
      lockAfter: 1,
      commonData: {
        title:
          'Complete the sequence by moving the numbers to the respective boxes',
        fontSize: '1.5rem',
        dashWidth: 40
      },
      data: [
        `5, 10, 15, *20*, *25*, *30*
7, 14, 21, *28*, *35*, *42*
9, 18, 27, *36*, *45*, *54*, *63*`,

        `20, 22, 24, *26*, *28*, *30*
12, 15, 18, *21*, *24*, *27*
20, 25, 30, *35*, *40*, *45*, *50*`,

        `28, 32, 36, *40*, *44*, *48*
6, 12, 18, *24*, *30*, *36*, *42*
6, 9, 12, *15*, *18*, *21*`
      ]
    }
  ]
};
