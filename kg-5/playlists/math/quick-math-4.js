export default {
  label: 'Quick Math',
  id: 'quick-math-3',
  list: [
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
          type: 'add~xxx~3'
        },
        {
          type: 'add~xxx~4'
        },
        {
          type: 'add~xxx~5'
        },
        {
          type: 'add~xxx~6'
        },
        {
          type: 'add~xxx~7'
        },
        {
          type: 'add~xxx~9'
        },
        {
          type: 'add~xxx~8'
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
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'sub~xxx~3'
        },
        {
          type: 'sub~xxx~4'
        },
        {
          type: 'sub~xxx~5'
        },
        {
          type: 'sub~xxx~6'
        },
        {
          type: 'sub~xxx~7'
        },
        {
          type: 'sub~xxx~9'
        },
        {
          type: 'sub~xxx~8'
        }
      ]
    }
  ]
};
