export default {
  label: 'Math Maze',
  id: 'math-maze-2',
  list: [
    {
      id: 'odd-numbers',
      type: 'maze',
      label: 'Connect Odd Numbers',
      lockAfter: 1,
      data: [
        {
          title:
            'Connect the odd numbers from 1 to 37 and help the boy to get the schoolbag.',
          start: 'boy',
          target: 'schoolbag',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 3,
            y: 0
          },
          size: 50,
          fills: `52,33,35,37,66,78
  48,31,42,36,26,32
  30,29,27,25,23,20
  2,4,6,10,21,19
  8,5,7,9,18,17
  1,3,90,11,13,15`,
          table: `0,1,1,1,0,0
  0,1,0,0,0,0
  0,1,1,1,1,0
  0,0,0,0,1,1
  0,1,1,1,0,1
  1,1,0,1,1,1`
        },
        {
          title:
            'Connect the odd numbers from 11 to 47 and help the girl to get the cycle.',
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
          fills: `47,50,39,37,35,33
          45,43,41,40,30,31
          30,28,26,25,27,29
          10,19,21,23,24,22
          20,17,18,16,10,12
          22,15,13,11,10,22`,
          table: `1,0,1,1,1,1
  1,1,1,0,0,1
  0,0,0,1,1,1
  0,1,1,1,0,0
  0,1,0,0,0,0
  0,1,1,1,0,0`
        },
        {
          title:
            'Connect the odd numbers from 31 to 67 and help the dog to get the bone.',
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
          fills: `67,60,55,53,51,50
          65,64,57,56,49,48
          63,61,59,54,47,45
          42,44,36,26,28,43
          40,38,35,37,39,41
          30,31,33,34,32,36`,
          table: `1,0,1,1,1,0
  1,0,1,0,1,0
  1,1,1,0,1,1
  0,0,0,0,0,1
  0,0,1,1,1,1
  0,1,1,0,0,0`
        }
      ]
    },
    {
      id: 'even-numbers',
      type: 'maze',
      label: 'Connect Even Numbers',
      lockAfter: 1,
      data: [
        {
          title:
            'Connect the even numbers from 2 to 38 and help the girl to get the book.',
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
            'Connect the even numbers from 20 to 58 and help the elephant to get the watermelon.',
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
          fills: `43,45,54,56,58,51
        53,50,52,45,47,49
        46,48,51,32,30,28
        44,43,36,34,55,26
        42,40,38,35,22,24
        13,23,33,17,20,19`,
          table: `0,0,1,1,1,0
0,1,1,0,0,0
1,1,0,1,1,1
1,0,1,1,0,1
1,1,1,0,1,1
0,0,0,0,1,0`
        },
        {
          title:
            'Connect the even numbers from 50 to 92 and help the elephant to get the watermelon.',
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
          fills: `77,76,78,80,75,92
        91,74,75,82,65,90
        70,72,49,84,86,88
        68,69,71,67,63,65
        66,64,55,56,54,52
        71,62,60,58,59,50`,
          table: `0,1,1,1,0,1
0,1,0,1,0,1
1,1,0,1,1,1
1,0,0,0,0,0
1,1,0,1,1,1
0,1,1,1,0,1`
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
    }
  ]
};
