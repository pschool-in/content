export default {
  label: 'Natural Numbers',
  id: 'numbers-6-sc',
  list: [
    {
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      commonData: {
        title: 'Click on the Biggest Number.',
        fontSize: '2.5rem',
        type: 'math',
        probType: 'biggest'
      },
      data: [
        {
          pattern: 'xxxxx'
        },
        {
          pattern: 'x0 + x0'
        },
        {
          pattern: 'x0 - x0'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 's00 - xx'
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
          pattern: 'xxxxx'
        },
        {
          pattern: 'x0 + x0'
        },
        {
          pattern: 'x0 - x0'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 's00 - xx'
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
          pattern: 'xxxxx'
        },
        {
          pattern: 'x0 + x0'
        },
        {
          pattern: 'x0 - x0'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 's00 - xx'
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
          pattern: 'xxxxx'
        },
        {
          pattern: 'x0 + x0'
        },
        {
          pattern: 'x0 - x0'
        },
        {
          pattern: 's0 - x'
        },
        {
          pattern: 's00 - xx'
        },
        {
          pattern: 'x + x + x'
        }
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
        `11 × 7 =, 77
11 × 9 =, 99
11 × 6 =, 66
11 × 8 =, 88
11 × 3 =, 33
11 × 5 =, 55
11 × 2 =, 22`,

        `12 × 7 =, 84
12 × 9 =, 108
12 × 6 =, 72
12 × 8 =, 96
12 × 3 =, 36
12 × 5 =, 60
12 × 2 =, 24`,

        `13 × 7 =, 91
13 × 9 =, 117
13 × 6 =, 78
13 × 8 =, 104
13 × 3 =, 39
13 × 5 =, 65
13 × 2 =, 26`,

        `14 × 7 =, 98
14 × 9 =, 126
14 × 6 =, 84
14 × 8 =, 112
14 × 3 =, 42
14 × 5 =, 70
14 × 2 =, 28`,

        `15 × 7 =, 105
15 × 9 =, 135
15 × 6 =, 90
15 × 8 =, 120
15 × 3 =, 45
15 × 5 =, 75
15 × 2 =, 30`
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
        `77 ÷ 11, 7
99 ÷ 11, 9
66 ÷ 11, 6
88 ÷ 11, 8
33 ÷ 11, 3
55 ÷ 11, 5
22 ÷ 11, 2`,

        `84 ÷ 12, 7
108 ÷ 12, 9
72 ÷ 12, 6
96 ÷ 12, 8
36 ÷ 12, 3
60 ÷ 12, 5
24 ÷ 12, 2`,

        `91 ÷ 13, 7
117 ÷ 13, 9
78 ÷ 13, 6
104 ÷ 13, 8
39 ÷ 13, 3
65 ÷ 13, 5
26 ÷ 13, 2`,

        `98 ÷ 14, 7
126 ÷ 14, 9
84 ÷ 14, 6
112 ÷ 14, 8
42 ÷ 14, 3
70 ÷ 14, 5
28 ÷ 14, 2`,

        `105 ÷ 15, 7
135 ÷ 15, 9
90 ÷ 15, 6
120 ÷ 15, 8
45 ÷ 15, 3
75 ÷ 15, 5
30 ÷ 15, 2`
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
        `7 , 6.5 , 6 , *5.5* , *5* , *4.5*
5.5 , 6.5 , 7.5 , *8.5* , *9.5* , *10.5*
6 , 6.25 , 6.5 , *6.75* , *7* , *7.25*`,

        `1 , 2.5 , 4 , *5.5* , *7* , *8.5*
3 , 3.6 , 4.2 , *4.8* , *5.4* , *6*
0.2 , 0.4 , 0.6 , *0.8* , *1* , *1.2*`,

        `8.5 , 7 , 5.5 , *4* , *2.5* , *1*
6 , 5.4 , 4.8 , *4.2* , *3.6* , *3*
1.2 , 1 , 0.8 , *0.6* , *0.4* , *0.2*`
      ]
    }
  ]
};
