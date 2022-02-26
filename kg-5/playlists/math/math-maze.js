export default {
  label: 'Math Maze',
  id: 'math-maze',
  list: [
    {
      id: 'connect-ascending',
      type: 'maze',
      label: 'Connect Numbers: Asending Order',
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
          fills: `80,0,74,73,72,0
79,0,75,64,71,63
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
75,76,77,78,0,84
74,16,50,79,0,83
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
      id: 'connect-descending',
      type: 'maze',
      label: 'Connect Numbers: Desending Order',
      data: [
        {
          title:
            'Connect the numbers in descending order from 15 to 1 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          size: 45,
          startPt: {
            x: 2,
            y: 7
          },
          endPt: {
            x: 1,
            y: 0
          },
          fills: `9,1,5,4,3,2
          3,2,6,7,8,9
          4,14,13,12,11,1
          5,6,7,8,9,2
          19,18,17,16,10,3
          9,8,7,6,11,9
          6,7,14,13,12,8
          10,9,15,16,17,18`,

          table: `0,1,0,0,0,0
1,1,0,0,0,0
1,0,0,0,0,0
1,1,1,1,1,0
0,0,0,0,1,0
0,0,0,0,1,0
0,0,1,1,1,0
0,0,1,0,0,0`
        },
        {
          title:
            'Connect the numbers from 30 to 16 and help the man to get the motorbike.',
          start: 'man',
          target: 'motorbike',
          color: '#9999ff',
          size: 45,
          startPt: {
            x: 0,
            y: 7
          },
          endPt: {
            x: 5,
            y: 0
          },
          fills: `22,23,19,18,17,16
11,12,20,30,29,28
42,41,21,22,30,40
15,16,17,23,20,19
21,22,25,24,32,31
20,27,26,30,29,28
21,28,24,23,22,21
30,29,35,34,32,31`,
          table: `0,0,1,1,1,1
0,0,1,0,0,0
0,0,1,1,0,0
0,0,0,1,0,0
0,0,1,1,0,0
0,1,1,0,0,0
0,1,0,0,0,0
1,1,0,0,0,0`
        },
        {
          title:
            'Connnect from 50 to 31 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 7
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 45,
          fills: `39,40,37,38,35,31
37,36,35,34,33,32
38,46,47,48,49,50
39,29,30,44,45,46
40,41,42,43,60,47
55,54,53,52,51,48
50,49,70,69,68,49
49,60,48,80,79,50`,
          table: `0,0,0,0,0,1
1,1,1,1,1,1
1,0,0,0,0,0
1,0,0,1,1,1
1,1,1,1,0,1
0,0,0,0,0,1
0,0,0,0,0,1
0,0,0,0,0,1`
        },
        {
          title:
            'Connect the numbers in descending order from 65 to 50 and help the elephant to get the watermelon.',
          start: 'elephant',
          target: 'watermelon',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 2,
            y: 0
          },
          size: 50,
          fills: `26,42,50,39,16,11
  70,18,51,87,23,20
  90,72,52,53,54,46
  39,78,86,98,55,56
  23,63,62,61,32,57
  65,64,23,60,59,58`,
          table: `0,0,1,0,0,0
  0,0,1,0,0,0
  0,0,1,1,1,0
  0,0,0,0,1,1
  0,1,1,1,0,1
  1,1,0,1,1,1`
        },
        {
          title:
            'Connect the numbers in descending order from 75 to 60 and help the man to get the motorbike.',
          start: 'man',
          target: 'motorbike',
          color: '#c05252',
          startPt: {
            x: 1,
            y: 5
          },
          endPt: {
            x: 1,
            y: 0
          },
          size: 50,
          fills: `89,60,18,78,30,42
  29,61,59,65,66,67
  15,62,63,64,19,68
  50,52,45,36,70,69
  12,10,73,72,71,11
  25,75,74,32,80,90`,
          table: `0,1,0,0,0,0
  0,1,0,1,1,1
  0,1,1,1,0,1
  0,0,0,0,1,1
  0,0,1,1,1,0
  0,1,1,0,0,0`
        },
        {
          title:
            'Connect the numbers in descending order from 85 to 70 and help the squirrel to get the peanut.',
          start: 'squirrel',
          target: 'peanut',
          color: '#c05252',
          startPt: {
            x: 3,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `30,22,69,25,51,70
  78,77,76,75,15,71
  79,10,69,74,73,72
  80,81,82,19,90,50
  45,56,83,84,12,66
  23,43,33,85,52,11`,
          table: `0,0,0,0,0,1
  1,1,1,1,0,1
  1,0,0,1,1,1
  1,1,1,0,0,0
  0,0,1,1,0,0
  0,0,0,1,0,0`
        },
        {
          title:
            'Connect the numbers in descending order from 95 to 80 and help the girl to get the book.',
          start: 'girl',
          target: 'book',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 4,
            y: 0
          },
          size: 50,
          fills: `10,35,66,78,80,81
  89,88,87,61,54,82
  90,40,86,85,84,83
  91,92,20,17,51,16
  60,93,75,45,12,19
  95,94,23,56,42,60`,
          table: `0,0,0,0,1,1
  1,1,1,0,0,1
  1,0,1,1,1,1
  1,1,0,0,0,0
  0,1,0,0,0,0
  1,1,0,0,0,0`
        },
        {
          title:
            'Connect the numbers in descending order from 105 to 90 and help the boy to get the schoolbag.',
          start: 'boy',
          target: 'schoolbag',
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
          fills: `96,95,94,26,90,49
  97,18,93,92,91,21
  98,62,70,52,39,9
  99,100,101,86,43,30
  11,10,102,103,104,88
  20,33,54,45,105,72`,
          table: `1,1,1,0,1,0
  1,0,1,1,1,0
  1,0,0,0,0,0
  1,1,1,0,0,0
  0,0,1,1,1,0
  0,0,0,0,1,0`
        },
        {
          title:
            'Connect the numbers 99 to 65 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 9
          },
          endPt: {
            x: 9,
            y: 0
          },
          size: 32,
          fills: `69,68,54,55,56,57,68,67,66,65
          50,51,52,55,54,53,69,62,63,64
          79,78,77,76,75,80,70,71,72,79
          54,55,56,57,58,59,60,61,73,70
          94,93,92,91,90,89,24,25,74,65
          95,99,98,97,96,88,61,62,75,80
          96,99,98,85,86,87,70,71,76,72
          97,69,68,84,80,90,50,40,77,44
          98,88,89,83,82,81,80,79,78,89
          99,59,69,79,80,81,82,83,84,85`,
          table: `0,0,0,0,0,0,1,1,1,1
0,0,0,0,0,0,1,0,0,0
0,0,0,0,0,0,1,1,1,0
0,0,0,0,0,0,0,0,1,0
1,1,1,1,1,1,0,0,1,0
1,0,0,0,0,1,0,0,1,0
1,0,0,1,1,1,0,0,1,0
1,0,0,1,0,0,0,0,1,0
1,0,0,1,1,1,1,1,1,0
1,0,0,0,0,0,0,0,0,0`
        },
        {
          title:
            'Connect the numbers 90 to 58 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          size: 32,
          startPt: {
            x: 9,
            y: 9
          },
          endPt: {
            x: 0,
            y: 0
          },
          fills: `58,59,60,80,70,71,72,73,74,75
81,71,61,65,69,80,81,82,83,76
55,56,62,50,68,60,59,58,57,77
99,98,63,80,67,60,81,80,79,78
11,12,64,65,66,99,82,90,89,88
51,53,55,57,78,77,83,60,59,58
76,75,80,70,71,72,84,85,86,87
99,59,69,79,80,81,82,83,84,88
79,78,77,76,75,80,70,71,72,89
99,59,69,79,80,81,82,83,84,90`,
          table: `1,1,1,0,1,1,1,1,1,1
0,0,1,0,1,0,0,0,0,1
0,0,1,0,1,0,0,0,0,1
0,0,1,0,1,0,1,1,1,1
0,0,1,1,1,0,1,0,0,0
0,0,0,0,0,0,1,0,0,0
0,0,0,0,0,0,1,1,1,1
0,0,0,0,0,0,0,0,0,1
0,0,0,0,0,0,0,0,0,1
0,0,0,0,0,0,0,0,0,1`
        }
      ]
    }
  ]
};
