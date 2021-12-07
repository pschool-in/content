export default {
  label: 'Quick Math',
  id: 'quick-math-5',
  list: [
    {
      id: 'sub-2',
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
          type: 'sub~1000~x'
        },
        {
          type: 'sub~1000~1x'
        },
        {
          type: 'sub~1000~2x'
        },
        {
          type: 'sub~1000~xx'
        },
        {
          type: 'sub~200~x'
        },
        {
          type: 'sub~200~xx'
        },
        {
          type: 'sub~500~x'
        },
        {
          type: 'sub~500~xx'
        },
        {
          type: 'sub~600~x'
        },
        {
          type: 'sub~600~xx'
        }
      ]
    },
    {
      id: 'sub-3',
      type: 'quickArithmetic',
      label: 'Subtract the Numbers',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: true,
        text: '',
        title: 'Subtract the Numbers'
      },
      data: [
        {
          type: 'sub~1000~x'
        },
        {
          type: 'sub~1000~1x'
        },
        {
          type: 'sub~1000~2x'
        },
        {
          type: 'sub~1000~xx'
        },
        {
          type: 'sub~200~x'
        },
        {
          type: 'sub~200~xx'
        },
        {
          type: 'sub~500~x'
        },
        {
          type: 'sub~500~xx'
        },
        {
          type: 'sub~600~x'
        },
        {
          type: 'sub~600~xx'
        }
      ]
    }
  ]
};
