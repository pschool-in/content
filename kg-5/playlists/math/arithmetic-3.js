export default {
  id: 'arithmetic-3',
  label: 'Arithmetic - 3',
  list: [
    {
      id: 'after-number',
      type: 'quickArithmetic',
      label: 'After Number ',
      lockAfter: 2,
      commonData: {
        title: 'Write the after number.',
        count: 10,
        isReverse: false
      },
      data: [
        {
          type: 'after~xxxx'
        },
        {
          type: 'after~xxx9'
        },
        {
          type: 'after~xx99'
        },
        {
          type: 'after~x999'
        },
        {
          type: 'after~x0x9'
        }
      ]
    },
    {
      id: 'before-number',
      type: 'quickArithmetic',
      label: 'Before Number ',
      lockAfter: 2,
      commonData: {
        title: 'Write the before number.',
        count: 10,
        isReverse: false
      },
      data: [
        {
          type: 'before~xxxx'
        },
        {
          type: 'before~xxx0'
        },
        {
          type: 'before~xx00'
        },
        {
          type: 'before~x000'
        },
        {
          type: 'before~x9x0'
        }
      ]
    },
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Add the Numbers',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'misc~x+x+x'
        },
        {
          type: 'misc~x0+x0+10'
        },
        {
          type: 'misc~x0+x+x'
        },
        {
          type: 'misc~x0+x0+x'
        },
        {
          type: 'misc~x0+x0+x0'
        },
        {
          type: 'misc~xx+x+x'
        },
        {
          type: 'misc~x0x+x+x'
        },
        {
          type: 'misc~xx+x+100'
        },
        {
          type: 'misc~x0+x+100'
        },
        {
          type: 'misc~x5+x5'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'quickArithmetic',
      label: 'Subtract the Numbers',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'misc~x99-x0'
        },
        {
          type: 'misc~x00-x'
        },

        {
          type: 'misc~x00-x0'
        },
        {
          type: 'misc~x00-9'
        },
        {
          type: 'misc~xxx-3'
        },
        {
          type: 'misc~xxx-10'
        },
        {
          type: 'misc~xxx-x'
        },
        {
          type: 'misc~xxx-x0'
        },
        {
          type: 'misc~xxx-100'
        },
        {
          type: 'misc~xxx-200'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x0~2'
        },
        {
          type: 'mul~x0~3'
        },
        {
          type: 'mul~x0~4'
        },
        {
          type: 'mul~x0~5'
        },
        {
          type: 'mul~x0~10'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Division',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Division'
      },
      data: [
        {
          type: 'div~xx~2'
        },
        {
          type: 'div~xx~3'
        },
        {
          type: 'div~xx~4'
        },
        {
          type: 'div~xx~5'
        },
        {
          type: 'div~xx~10'
        }
      ]
    },
    {
      id: 'evaluate',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Evaluate'
      },
      data: [
        {
          type: 'misc~100+x-x'
        },
        {
          type: 'misc~500+x-x'
        },
        {
          type: 'misc~100+x0-x'
        },
        {
          type: 'misc~500+x0-x'
        },
        {
          type: 'misc~100-x0+x'
        },
        {
          type: 'misc~500-x0+x'
        },
        {
          type: 'misc~xx+x-x'
        },
        {
          type: 'misc~xx-x+x'
        },
        {
          type: 'misc~xx-x-x'
        },
        {
          type: 'misc~xxx-x+100'
        }
      ]
    },
    {
      id: 'fillup',
      type: 'quickArithmetic',
      label: 'Fill Up',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~x+x'
        },
        {
          type: 'misc~x0+x'
        },
        {
          type: 'misc~xx+10'
        },
        {
          type: 'misc~xx+3'
        },
        {
          type: 'misc~xx+5'
        },
        {
          type: 'misc~xx+9'
        },
        {
          type: 'misc~xx+x'
        },
        {
          type: 'misc~xx+20'
        },
        {
          type: 'misc~xx+30'
        },
        {
          type: 'misc~xx+x0'
        }
      ]
    },
    {
      id: 'fillup-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 2',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: true,
        title: 'Fill in the blanks.'
      },
      data: [
        {
          type: 'misc~x-x'
        },
        {
          type: 'misc~x9-x'
        },
        {
          type: 'misc~xx-2'
        },
        {
          type: 'misc~xx-3'
        },
        {
          type: 'misc~xx-10'
        },
        {
          type: 'misc~xx-4'
        },
        {
          type: 'misc~xx-5'
        },
        {
          type: 'misc~xx-9'
        },
        {
          type: 'misc~xx-x'
        },
        {
          type: 'misc~xx-20'
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcrossword-20',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?+6=?
  +b+b+
  ?+?=8
  =b=b=
  12+6=?`,
          answer: [4, 10, 8, 0, 18]
        },

        {
          text: `4+?=10
  +b+b+
  8+?=?
  =b=b=
  ?+?=18`,
          answer: [6, 0, 8, 12, 6]
        },
        {
          text: `?−11=?
  +b+b+
  ?+?=5
  =b=b=
  14−8=?`,
          answer: [12, 1, 2, 3, 6]
        },

        {
          text: `12−?=6
  +b+b+
  8−?=?
  =b=b=
  ?−?=12`,
          answer: [6, 2, 6, 20, 8]
        },
        {
          text: `?−3=?
            −b+b−
  ?+?=10
  =b=b=
  12−7=?`,
          answer: [18, 15, 6, 4, 5]
        },

        {
          text: `8−?=4
            +b+b+
  5−?=?
  =b=b=
  ?−?=8`,
          answer: [4, 1, 4, 13, 5]
        },
        {
          text: `?−1=?
            +b+b+
  ?−?=5
  =b=b=
  18−8=?`,
          answer: [6, 5, 12, 7, 10]
        },

        {
          text: `6−?=5
            +b+b+
  9−?=?
  =b=b=
  ?−?=5`,
          answer: [1, 9, 0, 15, 10]
        },
        {
          text: `?−13=?
            −b+b−
  ?+?=2
  =b=b=
  16−14=?`,
          answer: [17, 4, 1, 1, 2]
        },

        {
          text: `13−?=12
            +b−b+
  0+?=?
  =b=b=
  ?+?=13`,
          answer: [1, 1, 0, 13, 0]
        }
      ]
    }
  ]
};
