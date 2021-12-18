export default {
  id: 'decimal-arithmetic-2',
  label: 'Decimal Arithmetic - 2',
  list: [
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Addition',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Decimal Addition',
        decimal: true
      },
      data: [
        {
          type: 'misc~x+0.x+0.x'
        },
        {
          type: 'misc~0.x+0.x+0.x'
        },
        {
          type: 'misc~x.x+0.9'
        },
        {
          type: 'misc~x.75+x.25'
        },
        {
          type: 'misc~x.5+x.25'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'quickArithmetic',
      label: 'Subtraction',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Decimal Subtraction',
        decimal: true
      },
      data: [
        {
          type: 'misc~1-0.xx'
        },
        {
          type: 'misc~xx-0.xx'
        },
        {
          type: 'misc~100-xx.x'
        },
        {
          type: 'misc~x.x-0.9'
        },
        {
          type: 'misc~x.75-x.25'
        },
        {
          type: 'misc~x.5+x.25'
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
        title: 'Multiply',
        decimal: true
      },
      data: [
        {
          type: 'mul~x0~0.5'
        },
        {
          type: 'mul~2x~0.5'
        },
        {
          type: 'mul~3x~0.5'
        },
        {
          type: 'mul~x0~0.x'
        },
        {
          type: 'mul~x00~0.0x'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Divide',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Divide',
        decimal: true
      },
      data: [
        {
          type: 'div~x.x~10'
        },
        {
          type: 'div~xx.x~10'
        },
        {
          type: 'div~xx~2'
        },
        {
          type: 'div~xx~4'
        },
        {
          type: 'div~xx~5'
        }
      ]
    },
    {
      id: 'addition-2',
      type: 'quickArithmetic',
      label: 'Addition',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Decimal Addition',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'misc~x+0.x+0.x'
        },
        {
          type: 'misc~0.x+0.x+0.x'
        },
        {
          type: 'misc~x.x+0.9'
        },
        {
          type: 'misc~x.75+x.25'
        },
        {
          type: 'misc~x.5+x.25'
        }
      ]
    },
    {
      id: 'subtract-2',
      type: 'quickArithmetic',
      label: 'Subtraction',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Decimal Subtraction',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'misc~1-0.xx'
        },
        {
          type: 'misc~xx-0.xx'
        },
        {
          type: 'misc~100-xx.x'
        },
        {
          type: 'misc~x.x-0.9'
        },
        {
          type: 'misc~x.75-x.25'
        },
        {
          type: 'misc~x.5+x.25'
        }
      ]
    },
    {
      id: 'multiply-2',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Multiply',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'mul~x0~0.5'
        },
        {
          type: 'mul~2x~0.5'
        },
        {
          type: 'mul~3x~0.5'
        },
        {
          type: 'mul~x0~0.x'
        },
        {
          type: 'mul~x00~0.0x'
        }
      ]
    },
    {
      id: 'divide-2',
      type: 'quickArithmetic',
      label: 'Divide',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Divide',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'div~x.x~10'
        },
        {
          type: 'div~xx.x~10'
        },
        {
          type: 'div~xx~2'
        },
        {
          type: 'div~xx~4'
        },
        {
          type: 'div~xx~5'
        }
      ]
    }
  ]
};
