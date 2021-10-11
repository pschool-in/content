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
        fills: `0,33,35,37,0,0
  0,31,0,0,0,0
  0,29,27,25,23,0
  0,0,0,0,21,19
  0,5,7,9,0,17
  1,3,0,11,13,15`,
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
        fills: `40,42,44,0,52,54
  38,0,46,48,50,0
  36,0,28,26,24,0
  34,32,30,0,22,20
  4,6,8,0,16,18
  2,0,10,12,14,0`,
        table: `1,1,1,0,1,1
  1,0,1,1,1,0
  1,0,1,1,1,0
  1,1,1,0,1,1
  1,1,1,0,1,1
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
          x: 5,
          y: 0
        },
        size: 50,
        fills: `0,0,60,63,66,69
  0,0,57,54,45,42
  0,0,0,51,48,39
  9,12,15,0,0,36
  6,0,18,27,30,33
  3,0,21,24,0,0`,
        table: `0,0,1,1,1,1
  0,0,1,1,1,1
  0,0,0,1,1,1
  1,1,1,0,0,1
  1,0,1,1,1,1
  1,0,1,1,0,0`
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
          x: 2,
          y: 5
        },
        endPt: {
          x: 3,
          y: 0
        },
        size: 50,
        fills: `76,80,0,92,0,0
  72,84,88,90,0,0
  68,48,44,40,36,34
  64,52,0,0,0,32
  60,56,8,12,16,28
  0,0,4,0,20,24`,
        table: `1,1,0,1,0,0
  1,1,1,1,0,0
  1,1,1,1,1,1
  1,1,0,0,0,1
  1,1,1,1,1,1
  0,0,1,0,1,1`
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
          x: 5,
          y: 5
        },
        endPt: {
          x: 3,
          y: 0
        },
        size: 50,
        fills: `0,100,105,110,0,0
  90,95,0,35,30,0
  85,0,0,40,25,0
  80,55,50,45,20,0
  75,60,0,0,15,10
  70,65,0,0,0,5
  `,
        table: `0,1,1,1,0,0
  1,1,0,1,1,0
  1,0,0,1,1,0
  1,1,1,1,1,0
  1,1,0,0,1,1
  1,1,0,0,0,1`
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
          x: 3,
          y: 0
        },
        size: 50,
        fills: `0,0,0,120,114,0
  72,78,0,102,108,0
  66,84,90,96,0,0
  60,0,0,0,0,0
  54,0,30,24,18,12
  48,42,36,0,0,6`,
        table: `0,0,0,1,1,0
  1,1,0,1,1,0
  1,1,1,1,0,0
  1,0,0,0,0,0
  1,0,1,1,1,1
  1,1,1,0,0,1`
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
          x: 4,
          y: 5
        },
        endPt: {
          x: 5,
          y: 0
        },
        size: 50,
        fills: `0,0,0,0,0,147
  91,98,105,0,0,140
  84,0,112,119,126,133
  77,42,35,28,0,0
  70,49,0,21,14,0
  63,56,0,0,7,0`,
        table: `0,0,0,0,0,1
  1,1,1,0,0,1
  1,0,1,1,1,1
  1,1,1,1,0,0
  1,1,0,1,1,0
  1,1,0,0,1,0`
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
