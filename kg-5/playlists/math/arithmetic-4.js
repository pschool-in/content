export default {
  id: 'arithmetic-4',
  label: 'Arithmetic - 4',
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
          type: 'mul~x0~6'
        },
        {
          type: 'mul~x0~7'
        },
        {
          type: 'mul~x0~8'
        },
        {
          type: 'mul~x0~9'
        },
        {
          type: 'mul~x0~x'
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
          type: 'div~xx~6'
        },
        {
          type: 'div~xx~7'
        },
        {
          type: 'div~xx~8'
        },
        {
          type: 'div~xx~9'
        },
        {
          type: 'div~xx~x'
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
          type: 'misc~xx+x0-x0'
        },
        {
          type: 'misc~1xx-x0+x0'
        },
        {
          type: 'misc~xx-x0-x0'
        },
        {
          type: 'misc~xxx+x-x'
        },
        {
          type: 'misc~xxx-x+x'
        },
        {
          type: 'misc~xxx-x-x'
        },
        {
          type: 'misc~xxx-100+x'
        },
        {
          type: 'misc~xxx+100-x'
        },
        {
          type: 'misc~x000+x0-x'
        },
        {
          type: 'misc~x000+x00-x'
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
    }
  ]
};
