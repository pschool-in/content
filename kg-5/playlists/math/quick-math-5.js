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
      label: 'Fill Up',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: true,
        text: '',
        title: 'Fill in the blanks.'
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
      id: 'addition-2',
      type: 'quickArithmetic',
      label: 'Addition',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'misc~99+xx'
        },
        {
          type: 'misc~x01+xx'
        },
        {
          type: 'misc~x95+xx'
        },
        {
          type: 'misc~x05+xx'
        },
        {
          type: 'misc~x01+xx'
        },
        // Newly added on Dec 12
        {
          type: 'misc~xxx+98'
        },
        {
          type: 'misc~xxx+95'
        },
        {
          type: 'misc~xxx+110'
        },
        {
          type: 'misc~xxx+90'
        }
      ]
    },
    // Newly added on Dec 12
    {
      id: 'subtraction',
      type: 'quickArithmetic',
      label: 'Subtraction',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: false,
        text: '',
        title: 'Subtraction'
      },
      data: [
        {
          type: 'misc~xxx-95'
        },
        {
          type: 'misc~xxx-105'
        },
        {
          type: 'misc~xxx-90'
        }
      ]
    }
  ]
};
