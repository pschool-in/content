export default {
  label: 'Numbers Basics',
  id: 'numbers-sc',
  list: [
    {
      type: 'tracing',
      label: 'Writing Numbers',
      id: 'write',
      data: {
        type: 'numbers',
        yGuides: [20, 120, 220, 320],
        audio: 'math/no-1-50.mp3',
        source: [
          {
            id: '1',
            paths: ['M 37 20 L 37 220'],
            width: 100,
            audio: 0
          },
          {
            id: '2',
            paths: [
              'M 22 40 C 67 15 128 9 122 64 C 114 115 63 175 15 220 ',
              'M 15 220 L 180 220'
            ],
            width: 200,
            audio: 2
          },
          {
            id: '3',
            paths: [
              'M 17 20 Q 117 20 117 70 Q 117 120 17 120 ',
              'M 17 120 Q 117 120 117 170 Q 117 220 17 220 '
            ],
            width: 130,
            audio: 4
          },
          {
            id: '4',
            paths: [
              'M 15 20 L 15 120',
              'M 15 120 L 120 120 ',
              'M 73 55 L 73 200 '
            ],
            width: 140,
            audio: 6
          },
          {
            id: '5',
            paths: [
              'M 125 20 L 15 20 L 15 120 ',
              'M 15 120 C 54 77 114 81 124 129 C 140 207 72 239 14 205 '
            ],
            width: 140,
            audio: 8
          },
          {
            id: '6',
            paths: [
              'M 101 21 C 20 41 12 142 25 181 C 38 235 136 230 137 177 ',
              'M 137 177 C 140 149 120 86 20 123 '
            ],
            width: 150,
            audio: 10
          },
          {
            id: '7',
            paths: ['M 15 20 L 130 20 ', 'M 130 20 L 70 220'],
            width: 150,
            audio: 12
          },
          {
            id: '8',
            paths: [
              'M 80 20 C 41 20 6 55 39 104 C 52 125 83 127 98 142 C 124 160 128 219 80 220 ',
              'M 80 220 C 9 221 18 165 37 147 C 54 127 78 111 110 85 C 134 64 122 19 80 20 '
            ],
            width: 150,
            audio: 14
          },
          {
            id: '9',
            paths: [
              'M 100 20 Q 15 21 15 71 Q 15 121 100 120 ',
              'M 100 20 L 100 220 '
            ],
            width: 110,
            audio: 16
          },
          {
            id: '10',
            paths: [
              'M 20 20 L 20 220',
              'M 145 21 C 245 21 245 221 145 221 ',
              'M 145 221 C 45 221 45 21 145 21 '
            ],
            width: 230,
            audio: 18
          }
        ]
      }
    },
    {
      type: 'dominos',
      id: 'dominos',
      label: 'Single Domino',
      data: {
        type: 1
      }
    },
    {
      type: 'dominos',
      id: 'dominos-2',
      label: 'Two Dominos',
      data: {
        type: 2
      }
    },
    {
      type: 'counter',
      id: 'count',
      label: 'Count Objects',
      data: {
        level: 1
      }
    },
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
          pattern: 'x = x'
        },
        {
          pattern: 'x0 = x0'
        },
        {
          pattern: 'xx = xx'
        },
        {
          pattern: 's0 + x = s0 + x'
        },
        {
          pattern: 'x + x = x + x'
        },
        {
          pattern: 'x00 = x00'
        }
      ]
    },
    {
      id: 'connect-ascending',
      type: 'maze',
      label: 'Connect Numbers: Ascending Order',
      lockAfter: 2,
      data: [
        {
          title:
            'Connect the numbers from 1 to 15 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
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
          fills: `15,11,12,13,14,15
14,10,2,20,9,7
5,9,8,7,1,8
11,21,4,6,10,5
9,10,11,5,7,8
1,2,3,4,6,7`,
          table: `0,1,1,1,1,1
0,1,0,0,0,0
0,1,1,1,0,0
0,0,0,1,0,0
0,0,0,1,0,0
1,1,1,1,0,0`
        },
        {
          title:
            'Connect the numbers from 11 to 30 and help the squirrel to get the peanut.',
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
          fills: `30,12,11,23,22,21
29,15,25,24,17,20
28,27,26,12,18,19
21,19,20,16,17,11
12,13,14,15,13,12
11,20,9,10,19,18`,
          table: `1,0,0,1,1,1
1,0,1,1,0,1
1,1,1,0,1,1
0,0,0,1,1,0
1,1,1,1,0,0
1,0,0,0,0,0`
        },
        {
          title:
            'Connect the numbers from 21 to 40 and help the man to get the motorbike.',
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
          fills: `33,34,35,30,31,40
32,29,36,37,38,39
31,39,40,42,33,34
30,11,20,21,33,34
29,28,38,24,23,22
39,27,26,25,40,21`,
          table: `1,1,1,0,0,1
1,0,1,1,1,1
1,0,0,0,0,0
1,0,0,0,0,0
1,1,0,1,1,1
0,1,1,1,0,1`
        },
        {
          title:
            'Connect the numbers from 31 to 50 and help the elephant to get the watermelon.',
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
          fills: `52,51,48,49,50,40
51,46,47,34,33,32
44,45,42,37,36,35
43,50,39,38,49,34
42,41,40,27,32,33
35,36,37,28,31,38`,
          table: `0,0,1,1,1,0
0,1,1,0,0,0
1,1,0,1,1,1
1,0,1,1,0,1
1,1,1,0,1,1
0,0,0,0,1,0`
        },
        {
          title:
            'Connect the numbers from 41 to 62 and help the elephant to get the watermelon.',
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
          fills: `51,54,55,56,52,62
50,53,42,57,40,61
51,52,41,58,59,60
50,62,63,64,51,50
49,48,60,44,43,42
40,47,46,45,51,41`,
          table: `0,1,1,1,0,1
0,1,0,1,0,1
1,1,0,1,1,1
1,0,0,0,0,0
1,1,0,1,1,1
0,1,1,1,0,1`
        },
        {
          title:
            'Connect the numbers from 51 to 69 and help the girl to get the cycle.',
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
          fills: `69,62,65,64,63,62
68,67,66,70, 71,61
51,52,53,58,59,60
60,55,56,57,69,68
61,54,62,63,64,65
70,53,52,51,49,50`,

          table: `1,0,1,1,1,1
1,1,1,0,0,1
0,0,0,1,1,1
0,1,1,1,0,0
0,1,0,0,0,0
0,1,1,1,0,0`
        },
        {
          title:
            'Connect the numbers from 62 to 80 and help the dog to get the bone.',
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
          fills: `80,81,74,73,72,85
79,86,75,64,71,63
78,77,76,74,70,69
60,61,62,63,59,68
76,77,64,65,66,67
58,62,63,69,68,78`,
          table: `1,0,1,1,1,0
1,0,1,0,1,0
1,1,1,0,1,1
0,0,0,0,0,1
0,0,1,1,1,1
0,1,1,0,0,0`
        },
        {
          title:
            'Connect the numbers from 50 to 65 and help the boy to get the calculator.',
          start: 'boy',
          target: 'calculator',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 5
          },
          endPt: {
            x: 3,
            y: 0
          },
          size: 50,
          fills: `85,63,64,65,86,91
61,62,15,18,92,48
60,72,96,42,22,10
59,58,8,54,53,52
81,57,56,55,18,51
22,30,43,11,16,50`,
          table: `0,1,1,1,0,0
1,1,0,0,0,0
1,0,0,0,0,0
1,1,0,1,1,1
0,1,1,1,0,1
0,0,0,0,0,1`
        },
        {
          title:
            'Connect the numbers from 60 to 75 and help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
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
          fills: ` 86,10,18,54,75,74
40,67,68,69,38,73
50,66,16,70,71,72
91,65,64,19,29,39
45,56,63,62,78,89
12,23,34,61,60,11`,
          table: ` 0,0,0,0,1,1
0,1,1,1,0,1
0,1,0,1,1,1
0,1,1,0,0,0
0,0,1,1,0,0
0,0,0,1,1,0`
        },
        {
          title:
            'Connect the numbers from 70 to 85 and help the girl to get the cycle.',
          start: 'girl',
          target: 'cycle',
          color: '#c05252',
          startPt: {
            x: 1,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `30,22,11,63,51,85
75,76,77,78,65,84
74,16,50,79,64,83
73,72,40,80,81,82
10,71,66,90,51,99
12,70,23,34,45,56`,
          table: `0,0,0,0,0,1
1,1,1,1,0,1
1,0,0,1,0,1
1,1,0,1,1,1
0,1,0,0,0,0
0,1,0,0,0,0`
        },
        {
          title:
            'Connect the numbers from 80 to 95 and help the baby to get the milk.',
          start: 'baby',
          target: 'milk',
          color: '#c05252',
          startPt: {
            x: 4,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `95,19,61,70,68,52
94,51,13,30,20,41
93,76,87,86,85,84
92,16,88,11,10,83
91,90,89,22,81,82
67,78,56,45,80,34`,
          table: `1,0,0,0,0,0
1,1,0,0,0,0
1,0,1,1,1,1
1,0,1,0,0,1
1,1,1,0,1,1
0,0,0,0,1,0`
        },
        {
          title:
            'Connect the numbers from 90 to 105 and help the squirrel to get the peanut.',
          start: 'squirrel',
          target: 'peanut',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 5
          },
          endPt: {
            x: 3,
            y: 0
          },
          size: 50,
          fills: `18,51,76,105,86,49
16,102,103,104,61,54
100,101,13,34,38,25
99,88,95,94,93,12
98,97,96,44,92,91
11,22,33,45,67,90`,
          table: `0,0,0,1,0,0
0,1,1,1,0,0
1,1,0,0,0,0
1,0,1,1,1,0
1,1,1,0,1,1
0,0,0,0,0,1`
        }
      ]
    },
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
          pattern: 'x'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: '3x'
        },
        {
          pattern: 'x9'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      commonData: {
        title: 'Click on the Smallest Number.',
        fontSize: '2.5rem',
        type: 'math',
        probType: 'smallest'
      },
      data: [
        {
          pattern: 'x'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: '3x'
        },
        {
          pattern: 'x9'
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
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: '3x'
        },
        {
          pattern: '9x'
        },
        {
          pattern: 'x00'
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
          pattern: 'x'
        },
        {
          pattern: 'x0'
        },
        {
          pattern: 'xx'
        },
        {
          pattern: '3x'
        },
        {
          pattern: '9x'
        },
        {
          pattern: 'x00'
        }
      ]
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match',
      commonData: {
        title: 'Match Number names'
      },
      data: [
        `0, Zero
1, One
2, Two
3, Three
4, Four`,

        `5, Five
6, Six
7, Seven
8, Eight
9, Nine`,

        `11, Eleven
15, Fifteen
13, Thirteen
17, Seventeen
19, Nineteen`,

        `50, Fifty
70, Seventy
20, Twenty
30, Thirty
60, Sixty`,

        `100, Hundred
1000, Thousand
10000, Ten Thousand
100000, Lakh
1000000, Ten Lakh`
      ]
    },
    {
      label: 'Number Names',
      type: 'matchByDragDrop',
      id: 'numbername1020',
      commonData: {
        fontSize: '1.6rem',
        title: 'Drag and drop the numbers at right places.'
      },
      data: [
        `Seven : *7*
Four : *4*
Six : *6*
Five : *5*
Two : *2*
Eight: *8*`,

        `Fifteen : *15*
Twenty : *20*
Eighteen : *18*
Eleven : *11*
Fourteen : *14*
Twelve : *12*`,

        `Fifty : *50*
Ninety : *90*
Eighty: *80*
Sixty: *60*
Thirty: *30*`
      ]
    },
    {
      type: 'sequence',
      label: 'Number Order',
      id: 'connect',
      lockAfter: 2,
      commonData: {
        title: 'Connect the numbers in ascending order'
      },
      data: [
        `2345, 6789, 5678, 4567, 45678, 12345, 23456, 56789, 34567`,

        `6 7 8 9 10
9 10 11 12 13
11 12 13 14 15
7 8 9 10 11
10 11 12 13 14
8 9 10 11 12
14 15 16 17 18 
12 13 14 15 16
16 17 18 19 20
13 14 15 16 17
`,
        `45 46 47 48 49
67 68 69 70 71
38 39 40 41 42
49 50 51 52 53
89 90 91 92 93
17 18 19 20 21
60 61 62 63 64
82 83 84 85 86
22 23 24 25 26
95 96 97 98 99`,

        `13 14 15 16 17
26 27 28 29 30
32 33 34 35 36
44 45 46 47 48
54 55 56 57 58
62 63 64 65 66
79 80 81 82 83
49 50 51 52 53
68 69 70 71 72
75 76 77 78 79`,

        `32 33 34 35 36
44 45 46 47 48
54 55 56 57 58
68 69 70 71 72
75 76 77 78 79
62 63 64 65 66
79 80 81 82 83
49 50 51 52 53
13 14 15 16 17
26 27 28 29 30`,

        `89 90 91 92 93
17 18 19 20 21
60 61 62 63 64
82 83 84 85 86
67 68 69 70 71
38 39 40 41 42
49 50 51 52 53
22 23 24 25 26
95 96 97 98 99
45 46 47 48 49`
      ]
    },
    {
      // patterns for class 1 students
      type: 'whatNext',
      id: 'number-2',
      label: 'What Comes next?',
      commonData: {
        type: 'letters'
      },
      data: [
        [
          ['1, 3, 5', '7, 6, 0, 2'],
          ['1, 4, 7, 10', '13, 11, 9, 8'],
          ['5, 10, 15', '20, 10, 15, 25'],
          ['28, 30, 32, 34', '36, 26, 20, 38'],
          ['20, 30, 40, 50', '60, 70, 10, 55']
        ],
        [
          ['14, 10, 6', '2, 4, 16, 0'],
          ['40, 30, 20', '10, 40, 50, 0'],
          ['27, 22, 17, 12', '7, 2, 22, 10'],
          ['55, 45, 35, 25', '15, 5, 20, 65'],
          ['52, 39, 26', '13, 20, 15, 17']
        ],
        [
          ['10, 12, 15, 19', '24, 20, 25, 22'],
          ['36, 31, 26, 21', '16, 18, 20, 11'],
          ['40, 35, 29, 22', '14, 12, 10, 16'],
          ['2, 4, 8, 16', '32, 16, 20, 26'],
          ['5, 10, 20, 40', '80, 40, 60, 20']
        ]
      ]
    }
  ]
};
