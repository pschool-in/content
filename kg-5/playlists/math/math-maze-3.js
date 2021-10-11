export default {
  label: 'Math Maze',
  id: 'math-maze-3',
  list: [
    {
      id: 'connect-odd-numbers',
      type: 'maze',
      label: 'Connect the odd numbers',
      data: {
        title: 'Connect the odd numbers and help the boy to get the schoolbag.',
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
      }
    },
    {
      id: 'connect-even-numbers',
      type: 'maze',
      label: 'Connect the even numbers',
      data: {
        title: 'Connect the even numbers and help the girl to get the book.',
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
        fills: `99,41,15,34,36,40
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
      }
    },
    {
      id: 'connect-multiples-of-three',
      type: 'maze',
      label: 'Connect the multiples of three',
      data: {
        title:
          'Connect the multiples of three and help the squirrel to get the peanut.',
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
      }
    },
    {
      id: 'connect- multiples of four',
      type: 'maze',
      label: 'Connect the multiples of four',
      data: {
        title:
          'Connect the multiples of four and help the man to get the motorbike.',
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
      }
    },
    {
      id: 'connect- multiples of five',
      type: 'maze',
      label: 'Connect the multiples of five',
      data: {
        title:
          'Connect the multiples of five and help the elephant to get the watermelon.',
        start: 'elephant',
        target: 'watermelon',
        color: '#c05252',
        startPt: {
          x: 4,
          y: 5
        },
        endPt: {
          x: 3,
          y: 0
        },
        size: 50,
        fills: `84,82,90,100,62,69
 79,80,85,36,39,42
 70,75,78,35,30,25
 65,66,45,40,22,20
 60,55,50,52,10,15
 59,54,49,51,5,1`,
        table: `0,0,1,1,0,0
  0,1,1,0,0,0
  1,1,0,1,1,1
  1,0,1,1,0,1
  1,1,1,0,1,1
  0,0,0,0,1,0`
      }
    },
    {
      id: 'connect- multiples of six',
      type: 'maze',
      label: 'Connect the multiples of six',
      data: {
        title:
          'Connect the multiples of six and help the woodpecker to get the table.',
        start: 'woodpecker',
        target: 'table',
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
      }
    },
    {
      id: 'connect- multiples of seven',
      type: 'maze',
      label: 'Connect the multiples of seven',
      data: {
        title:
          'Connect the multiples of seven and help the baby to get the milk.',
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
      }
    },
    {
      id: 'connect- multiples of eight',
      type: 'maze',
      label: 'Connect the multiples of eight',
      data: {
        title:
          'Connect the multiples of eight and help the girl to get the cycle.',
        start: 'girl',
        target: 'cycle',
        color: '#c05252',
        startPt: {
          x: 5,
          y: 5
        },
        endPt: {
          x: 4,
          y: 0
        },
        size: 50,
        fills: `0,0,0,0,168,0
  0,0,0,0,160,152
  0,0,104,112,0,144
  80,88,96,120,128,136
  72,0,0,32,24,16
  64,56,48,40,0,8`,
        table: `0,0,0,0,1,0
  0,0,0,0,1,1
  0,0,1,1,0,1
  1,1,1,1,1,1
  1,0,0,1,1,1
  1,1,1,1,0,1`
      }
    },
    {
      id: 'connect- multiples of nine',
      type: 'maze',
      label: 'Connect the multiples of nine',
      data: {
        title:
          'Connect the multiples of nine and help the dog to get the bone.',
        start: 'dog',
        target: 'bone',
        color: '#c05252',
        startPt: {
          x: 2,
          y: 5
        },
        endPt: {
          x: 0,
          y: 0
        },
        size: 50,
        fills: `189,0,0,0,0,0
  180,0,144,135,126,0
  171,162,153,0,117,108
  0,36,45,54,63,90
  0,27,18,0,72,81
  0,0,9,0,0,0`,
        table: `1,0,0,0,0,0
  1,0,1,1,1,0
  1,1,1,0,1,1
  0,1,1,1,1,1
  0,1,1,0,1,1
  0,0,1,0,0,0`
      }
    },
    {
      id: 'connect- multiples of ten',
      type: 'maze',
      label: 'Connect the multiples of ten',
      data: {
        title:
          'Connect the multiples of ten and help the boy to get the calculator.',
        start: 'boy',
        target: 'calculator',
        color: '#c05252',
        startPt: {
          x: 5,
          y: 5
        },
        endPt: {
          x: 1,
          y: 0
        },
        size: 50,
        fills: `0,250,0,0,0,0
  0,240,100,90,80,70
  220,230,120,0,50,60
  210,0,130,0,40,0
  200,190,140,150,30,20
  0,180,170,160,0,10`,
        table: `0,1,0,0,0,0
  0,1,1,1,1,1
  1,1,1,0,1,1
  1,0,1,0,1,0
  1,1,1,1,1,1
  0,1,1,1,0,1`
      }
    }
  ]
};
