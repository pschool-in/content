export default {
  id: 'arithmetic',
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
          type: 'after~x'
        },
        {
          type: 'after~xx'
        },
        {
          type: 'after~x0'
        },
        {
          type: 'after~x9'
        },
        {
          type: 'after~9x'
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
          type: 'before~x'
        },
        {
          type: 'before~xx'
        },
        {
          type: 'before~x9'
        },
        {
          type: 'before~x0'
        },
        {
          type: 'before~9x'
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
          type: 'mul~x~2'
        },
        {
          type: 'mul~x~3'
        },
        {
          type: 'mul~x~4'
        },
        {
          type: 'mul~x~5'
        },
        {
          type: 'mul~x~10'
        }
      ]
    }
  ]
};
