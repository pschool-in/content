export default {
  id: 'arithmetic-2',
  label: 'Arithmetic',
  list: [
    {
      id: 'after-number',
      type: 'quickArithmetic',
      label: 'After Number ',
      commonData: {
        title: 'Write the after number.',
        count: 10
      },
      data: [
        {
          type: 'after~xxx'
        },
        {
          type: 'after~xx0'
        },
        {
          type: 'after~xx9'
        },
        {
          type: 'after~x9x'
        },
        {
          type: 'after~x99'
        }
      ]
    },
    {
      id: 'before-number',
      type: 'quickArithmetic',
      label: 'Before Number ',
      commonData: {
        title: 'Write the before number.',
        count: 10
      },
      data: [
        {
          type: 'before~xxx'
        },
        {
          type: 'before~xx9'
        },
        {
          type: 'before~xx0'
        },
        {
          type: 'before~x0x'
        },
        {
          type: 'before~x00'
        }
      ]
    },
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Add the Numbers',
      commonData: {
        count: 10,
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'misc~x00+x'
        },
        {
          type: 'misc~x00+x0'
        },
        {
          type: 'misc~x00+x0+x'
        },
        {
          type: 'misc~x00+xx+3'
        },
        {
          type: 'misc~xxx+x'
        },
        {
          type: 'misc~xxx+x0'
        },
        {
          type: 'misc~xxx+x00'
        },
        {
          type: 'misc~x0+x0'
        },
        {
          type: 'misc~xx+50'
        },
        {
          type: 'misc~xx+1x'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'quickArithmetic',
      label: 'Subtract the Numbers',
      commonData: {
        count: 10,
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'misc~xx-30'
        },
        {
          type: 'misc~xx-x0'
        },

        {
          type: 'misc~x0-x0'
        },
        {
          type: 'misc~x5-x5'
        },
        {
          type: 'misc~xx-9'
        },
        {
          type: 'misc~xx-11'
        },
        {
          type: 'misc~xx-15'
        },
        {
          type: 'misc~xx-19'
        },
        {
          type: 'misc~x09-x'
        },
        {
          type: 'misc~x99-x'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x~6'
        },
        {
          type: 'mul~x~7'
        },
        {
          type: 'mul~x~8'
        },
        {
          type: 'mul~x~9'
        },
        {
          type: 'mul~x~x'
        }
      ]
    }
  ]
};
