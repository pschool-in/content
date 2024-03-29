export default {
  label: 'Quick Math',
  id: 'quick-math-3',
  list: [
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Add the Numbers',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'add~xx~3'
        },
        {
          type: 'add~xx~4'
        },
        {
          type: 'add~xx~5'
        },
        {
          type: 'add~xx~6'
        },
        {
          type: 'add~xx~7'
        },
        {
          type: 'add~xx~9'
        },
        {
          type: 'add~xx~8'
        }
      ]
    },
    {
      id: 'subtraction',
      type: 'quickArithmetic',
      label: 'Subtract the Numbers',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'sub~xx~3'
        },
        {
          type: 'sub~xx~4'
        },
        {
          type: 'sub~xx~5'
        },
        {
          type: 'sub~xx~6'
        },
        {
          type: 'sub~xx~7'
        },
        {
          type: 'sub~xx~9'
        },
        {
          type: 'sub~xx~8'
        }
      ]
    },
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
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
          pattern: 'sx = s0 + x'
        },
        {
          pattern: 'sx + x = sx + x'
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
        },
        {
          pattern: 'st + x = st + x'
        },
        {
          pattern: 'st - x = st - x'
        },
        {
          pattern: 'x + x - x = x + x - x'
        }
      ]
    },
    {
      id: 'addition-2',
      type: 'quickArithmetic',
      label: 'Addition',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'misc~xx+11'
        },
        {
          type: 'misc~xx+12'
        },
        {
          type: 'misc~xx+20'
        },
        {
          type: 'misc~xx+21'
        },
        {
          type: 'misc~xx+19'
        }
      ]
    },
    {
      id: 'subtraction-2',
      type: 'quickArithmetic',
      label: 'Subtraction',
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'misc~xx-11'
        },
        {
          type: 'misc~xx-12'
        },
        {
          type: 'misc~xx-20'
        },
        {
          type: 'misc~xx-21'
        },
        {
          type: 'misc~xx-19'
        }
      ]
    }
  ]
};
