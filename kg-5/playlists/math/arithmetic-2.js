export default {
  id: 'arithmetic-2',
  label: 'Arithmetic',
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
          type: 'after~xxx'
        },
        {
          type: 'after~xx9'
        },
        {
          type: 'after~xxxx'
        },
        {
          type: 'after~xxx9'
        },
        {
          type: 'after~xx99'
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
          type: 'before~xxx'
        },
        {
          type: 'before~xx0'
        },
        {
          type: 'before~xxxx'
        },
        {
          type: 'before~xxx0'
        },
        {
          type: 'before~xx00'
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
        isReverse: false,
        text: '',
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'add~x00~x'
        },
        {
          type: 'add~x00~x0'
        },
        {
          type: 'add~x~x~x '
        },
        {
          type: 'add~xxx~x'
        },
        {
          type: 'add~xxx~x0'
        },
        {
          type: 'add~xxx~x00'
        },
        {
          type: 'add~x0~x0'
        },
        {
          type: 'add~x5~x5'
        },
        {
          type: 'add~x0~x0~10'
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
        isReverse: false,
        text: '',
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'sub~x09~x'
        },
        {
          type: 'sub~x99~x'
        },
        {
          type: 'sub~x99~x0'
        },
        {
          type: 'sub~xxx~3'
        },
        {
          type: 'sub~xxx~10'
        },
        {
          type: 'sub~xxx~x'
        },
        {
          type: 'sub~xxx~x0'
        },
        {
          type: 'sub~xxx~x0'
        },
        {
          type: 'sub~x0~x0'
        },
        {
          type: 'sub~x5~x5'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiplication',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x~x'
        },
        {
          type: 'mul~x0~x'
        },
        {
          type: 'mul~x00~x'
        },
        {
          type: 'mul~x0~x0'
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
        isReverse: false,
        text: '',
        title: 'Division'
      },
      data: [
        {
          type: 'div~x~x'
        },
        {
          type: 'div~x0~x'
        },
        {
          type: 'div~x00~x'
        },
        {
          type: 'div~x0~x0'
        }
      ]
    }
  ]
};
