export default {
  id: 'decimal-arithmetic',
  label: 'Decimal Arithmetic',
  list: [
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Addition',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Decimal Addition',
        decimal: true
      },
      data: [
        {
          type: 'misc~x+0.x'
        },
        {
          type: 'misc~xx+0.x'
        },
        {
          type: 'misc~x.5+x.5'
        },
        {
          type: 'misc~0.x+0.x'
        },
        {
          type: 'misc~x.x+0.x'
        },
        {
          type: 'misc~x+0.x+0.0x'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'quickArithmetic',
      label: 'Subtraction',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Decimal Subtraction',
        decimal: true
      },
      data: [
        {
          type: 'misc~1-0.x'
        },
        {
          type: 'misc~x-0.x'
        },
        {
          type: 'misc~10-0.x'
        },
        {
          type: 'misc~xx-0.x'
        },
        {
          type: 'misc~x-x.5'
        },
        {
          type: 'misc~0.x-0.x'
        },
        {
          type: 'misc~x.x-0.x'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Multiply',
        decimal: true
      },
      data: [
        {
          type: 'mul~xx~0.1'
        },
        {
          type: 'mul~xx~0.01'
        },
        {
          type: 'mul~xxx~0.001'
        },
        {
          type: 'mul~xx~0.001'
        },
        {
          type: 'mul~x~0.x'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Divide',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Divide',
        decimal: true
      },
      data: [
        {
          type: 'div~xx~10'
        },
        {
          type: 'div~xxx~10'
        },
        {
          type: 'div~xxx~100'
        },
        {
          type: 'div~xxxx~1000'
        },
        {
          type: 'div~xx~100'
        }
      ]
    },
    {
      id: 'addition-2',
      type: 'quickArithmetic',
      label: 'Fill Up',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Fill Up',
        decimal: true,
        isReverse: true
      },
      data: [
        {
          type: 'misc~x+0.x'
        },
        {
          type: 'misc~xx+0.x'
        },
        {
          type: 'misc~x.5+x.5'
        },
        {
          type: 'misc~0.x+0.x'
        },
        {
          type: 'misc~x.x+0.x'
        },
        {
          type: 'misc~x+0.x+0.0x'
        }
      ]
    },
    {
      id: 'subtract-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 2',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Fill Up',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'misc~1-0.x'
        },
        {
          type: 'misc~x-0.x'
        },
        {
          type: 'misc~10-0.x'
        },
        {
          type: 'misc~xx-0.x'
        },
        {
          type: 'misc~x-x.5'
        },
        {
          type: 'misc~0.x-0.x'
        },
        {
          type: 'misc~x.x-0.x'
        }
      ]
    },
    {
      id: 'multiply-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 3',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Fill Up',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'mul~xx~0.1'
        },
        {
          type: 'mul~xx~0.01'
        },
        {
          type: 'mul~xxx~0.001'
        },
        {
          type: 'mul~xx~0.001'
        },
        {
          type: 'mul~x~0.x'
        }
      ]
    },
    {
      id: 'divide-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 4',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Fill Up',
        isReverse: true,
        decimal: true
      },
      data: [
        {
          type: 'div~xx~10'
        },
        {
          type: 'div~xxx~10'
        },
        {
          type: 'div~xxx~100'
        },
        {
          type: 'div~xxxx~1000'
        },
        {
          type: 'div~xx~100'
        }
      ]
    }
  ]
};
