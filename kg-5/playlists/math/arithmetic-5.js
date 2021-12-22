export default {
  id: 'arithmetic-5',
  label: 'Arithmetic - 5',
  list: [
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
          type: 'mul~x00~2'
        },
        {
          type: 'mul~x0~20'
        },
        {
          type: 'mul~x00~5'
        },
        {
          type: 'mul~x0~50'
        },
        {
          type: 'mul~x00~x'
        },
        {
          type: 'mul~x0~x0'
        },
        {
          type: 'mul~x00~7'
        },
        {
          type: 'mul~x0~80'
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
          type: 'div~xx0~2'
        },
        {
          type: 'div~xx0~3'
        },
        {
          type: 'div~xx0~4'
        },
        {
          type: 'div~xx0~5'
        },
        {
          type: 'div~xx0~10'
        },
        {
          type: 'div~xx0~6'
        },
        {
          type: 'div~xx0~7'
        },
        {
          type: 'div~xx0~8'
        },
        {
          type: 'div~xx0~9'
        },
        {
          type: 'div~xx0~x'
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
          type: 'misc~xxx+x0-x0'
        },
        {
          type: 'misc~xxx-x0+x0'
        },
        {
          type: 'misc~xxx-x0-x0'
        },
        {
          type: 'misc~xxx-x0-x'
        },
        {
          type: 'misc~xxx-x-x0'
        },
        {
          type: 'misc~xxx-50+x'
        },
        {
          type: 'misc~xxx+50-x'
        },
        {
          type: 'misc~1000-x0+x'
        },
        {
          type: 'misc~1000-x00+x'
        },
        {
          type: 'misc~x0x-x0-x'
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
      id: 'fillup-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 2',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
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
    }
  ]
};
