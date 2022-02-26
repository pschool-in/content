export default {
  label: 'Kindergarten Math',
  id: 'kg-math',
  lockAfter: 4,
  list: [
    {
      type: 'tracing',
      label: 'Numbers (1 - 5)',
      id: 'write',
      data: {
        type: 'numbers',
        repeatCount: 3,
        chars: '12345'
      }
    },
    {
      type: 'tracing',
      label: 'Numbers (6 - 9)',
      id: 'write-2',
      data: {
        type: 'numbers',
        repeatCount: 3,
        chars: '67890'
      }
    },
    {
      type: 'counter',
      id: 'count',
      label: 'Count Objects',
      data: {
        level: 1
      }
    },
    {
      type: 'quickArithmetic',
      label: 'After Number',
      id: 'after-no',
      data: {
        type: 'after~x'
      }
    },
    {
      type: 'quickArithmetic',
      label: 'Before Number',
      id: 'before-no',
      data: {
        type: 'before~x'
      }
    },
    {
      type: 'compare',
      label: 'Compare Numbers',
      id: 'compare-no',
      data: {
        pattern: 'x = x'
      }
    },
    {
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      data: {
        title: 'Click on the Biggest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'biggest',
        pattern: 'x'
      }
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      data: {
        title: 'Click on the Smallest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'smallest',
        pattern: 'x'
      }
    },
    {
      type: 'match',
      label: 'Number Names',
      id: 'match',
      commonData: {
        title: 'Match Number names'
      },
      data: [
        `0, Zero
1, One
2, Two
3, Three
4, Four`,

        `5, Five
6, Six
7, Seven
8, Eight
9, Nine`
      ]
    }
  ]
};
