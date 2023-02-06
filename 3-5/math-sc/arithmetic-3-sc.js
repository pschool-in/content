export default {
  label: 'Arithmetic',
  id: 'arithmetic-3-sc',
  list: [
    {
      type: 'quickArithmetic',
      label: 'After Number',
      id: 'after-no',
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
      type: 'quickArithmetic',
      label: 'Before Number',
      id: 'before-no',
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
      type: 'missingWorkout',
      id: 'missing-addition',
      label: 'Addition - Complete',
      lockAfter: 1,
      data: [
        { pattern: 'aaa + aaa', missingRow: [2] },
        { pattern: 'xxx + xxx', missingRow: [2] },
        { pattern: 'bbb + bbb', missingRow: [2] },
        { pattern: 'aaaa + aaaa', missingRow: [2] },
        { pattern: 'xxxx + xxxx', missingRow: [2] },

        { pattern: 'aa + aa', missingRow: [0, 1] },
        { pattern: 'xx + xx', missingRow: [0, 1] },
        { pattern: 'bb + bb', missingRow: [0, 1] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction - Complete',
      lockAfter: 1,
      data: [
        { pattern: 'bbb - aa', missingRow: [2] },
        { pattern: 'bbb - bb', missingRow: [2] },
        { pattern: 'aaa - bb', missingRow: [2] },
        { pattern: 'bb - aa', missingRow: [0] },
        { pattern: 'bb - aa', missingRow: [1] },
        { pattern: 'xaa - bb', missing: [1, 2, 3] }
      ]
    }
  ]
};
