export default {
  id: 'decimal-6',
  label: 'Decimal Numbers',
  list: [
    {
      type: 'balance',
      label: 'Balance the Numbers',
      id: 'balance',
      commonData: {
        fontSize: '1rem'
      },
      data: [
        {
          left: '1.a,1.a',
          right: '?',
          count: 10
        },
        {
          left: 'a.5,a.5',
          right: '?',
          count: 10
        },
        {
          left: 'a.a,a.a',
          right: '?',
          count: 10
        },
        {
          left: 'a.25, a.75',
          right: '?',
          count: 10
        },
        {
          left: 'a.5,a.5, a.5',
          right: '?',
          count: 10
        },
        { left: '0.a, 0.a, 0.a', right: '0.a, ?', count: 10 },
        { left: 'a.a, 0.a, 0.a', right: 'a, ?', count: 10 },
        { left: '1.a, 1.a, 1.a', right: '1.a, ?', count: 10 },
        [
          (`0.4, ?
    1
    0.6, 0.4, 0.2, 0.8`,
          `0.5, ?
    1
    0.5, 0.4, 0.2, 0.8`,
          `0.75, ?
    1
    0.5, 0.4, 0.25, 0.45`,
          `0.7, ?
    1
    0.7, 0.2, 0.3, 0.4`,
          `1.5, ?
    2
    1.5, 1.4, 0.2, 0.5`)
        ],
        [
          `?, ?
    1
    0.6, 0.4, 0.2, 0.7, 0.5`,

          `?, ?
    2
    1.2, 1.8, 0.2, 0.5, 0.8`,

          `0.2, ? , ?
    1
    0.3, 0.5, 0.7, 0.8, 0.4`,

          `1, ?, ?
    4
    2.5, 1.5, 0.5, 3, 2`,

          `1.5, 0.5, 0.5
    ?
    2.5, 2, 1.6, 3`
        ],
        [
          `3
    ?, 1.8
    1.2, 0.8, 2.2, 2`,

          `5
    ?, 2.4
   2.6, 2.2, 3.6, 3.2`,

          `4
    ?, ?
    3.3, 0.7, 2.5, 1.6, 1.4`,

          `7
    ?, ?
  3.5, 3.5, 2.5, 5.5, 4`,

          `4.5
    ?, ?
    1.25, 2.25, 3.25, 4.25`
        ],
        [
          `3, ?
    ?
    1.5, 4.5, 2.5, 0.5`,

          `2.2, ?
    ?
   0.8, 3, 4, 0.2`,

          `1.5, ?
    ?
   1.5, 3, 2.5, 2`,

          `6
    ?, ?
  4.1, 1.9, 2.9, 3.1`,

          `5.5, ?
    ?
   4.5, 10, 9, 5.5`
        ]
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcrossword-20',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?+0.6=?
  +b+b+
  ?+?=0.8
  =b=b=
  1.2+0.6=?`,
          answer: [0.4, 1, 0.8, 0, 1.8]
        },
        {
          text: `0.4+?=1
      +b+b+
      0.8+?=?
      =b=b=
      ?+?=1.8`,
          answer: [0.6, 0, 0.8, 1.2, 0.6]
        },
        {
          text: `?−1.1=?
      +b−b+
      ?+?=0.5
      =b=b=
      1.4−0.8=?`,
          answer: [1.2, 0.1, 0.2, 0.3, 0.6]
        },

        {
          text: `1.2−?=0.6
      +b+b+
      0.8−?=?
      =b=b=
      ?−?=1.2`,
          answer: [0.6, 0.2, 0.6, 2, 0.8]
        },
        {
          text: `?−0.3=?
      −b+b−
      ?+?=1
      =b=b=
      1.2−0.7=?`,
          answer: [1.8, 1.5, 0.6, 0.4, 0.5]
        },

        {
          text: `0.8−?=0.4
      +b+b+
      0.5−?=?
      =b=b=
      ?−?=0.8`,
          answer: [0.4, 0.1, 0.4, 1.3, 0.5]
        },
        {
          text: `?−0.1=?
      +b+b+
      ?−?=0.5
      =b=b=
      1.8−0.8=?`,
          answer: [0.6, 0.5, 1.2, 0.7, 1]
        },

        {
          text: `0.6−?=0.5
      +b+b+
      0.9−?=?
      =b=b=
      ?−?=0.5`,
          answer: [0.1, 0.9, 0, 1.5, 1]
        },
        {
          text: `?−1.3=?
      −b+b−
      ?+?=0.2
      =b=b=
      1.6−1.4=?`,
          answer: [1.7, 0.4, 0.1, 0.1, 0.2]
        },

        {
          text: `1.3−?=1.2
      +b−b+
      0+?=?
      =b=b=
      ?+?=1.3`,
          answer: [0.1, 0.1, 0.1, 1.3, 0]
        }
      ]
    }
  ]
};