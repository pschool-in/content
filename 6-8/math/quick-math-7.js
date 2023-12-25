export default {
  label: 'Quick Math - 7',
  id: 'quick-math-7',
  list: [
    {
      id: 'evaluate',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        title: 'Evaluate',
        allowNegative: true
      },
      data: [
        {
          type: '±(±x)',
          retainPlus: true
        },
        {
          type: '±x±x'
        },
        {
          type: '±x±(±x)'
        },
        {
          type: '±x±(x±x)'
        },
        {
          type: '(±x±x)(±x±x)'
        }
      ]
    },
    {
      id: 'evaluate-2',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        title: 'Evaluate',
        allowNegative: true
      },
      data: [
        {
          type: '±x*±x'
        },
        {
          type: '±a*±a*±a'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Divide',
      lockAfter: 2,
      commonData: {
        title: 'Evaluate',
        allowNegative: true
      },
      data: [
        {
          type: '±aa/±x'
        },
        {
          type: '±a*±a/±a'
        }
      ]
    }
  ]
};
