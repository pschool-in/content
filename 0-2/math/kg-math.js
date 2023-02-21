export default {
  label: 'Kindergarten Math',
  id: 'kg-math',
  list: [
    {
      type: 'tracing',
      label: 'Numbers (1 - 5)',
      id: 'write',
      data: {
        type: 'numbers',
        source: [
          {
            id: '1',
            paths: ['M 37 20 L 37 220'],
            width: 100
          },
          {
            id: '2',
            paths: [
              'M 22 40 C 67 15 128 9 122 64 C 114 115 63 175 15 220 ',
              'M 15 220 L 180 220'
            ],
            width: 200
          },
          {
            id: '3',
            paths: [
              'M 17 20 Q 117 20 117 70 Q 117 120 17 120 ',
              'M 17 120 Q 117 120 117 170 Q 117 220 17 220 '
            ],
            width: 130
          },
          {
            id: '4',
            paths: [
              'M 15 20 L 15 120',
              'M 15 120 L 120 120 ',
              'M 73 55 L 73 200 '
            ],
            width: 140
          },
          {
            id: '5',
            paths: [
              'M 125 20 L 15 20 L 15 120 ',
              'M 15 120 C 54 77 114 81 124 129 C 140 207 72 239 14 205 '
            ],
            width: 140
          }
        ]
      }
    },
    {
      type: 'tracing',
      label: 'Numbers (6 - 10)',
      id: 'write-2',
      data: {
        type: 'numbers',
        source: [
          {
            id: '6',
            paths: [
              'M 101 21 C 20 41 12 142 25 181 C 38 235 136 230 137 177 ',
              'M 137 177 C 140 149 120 86 20 123 '
            ],
            width: 150
          },
          {
            id: '7',
            paths: ['M 15 20 L 130 20 ', 'M 130 20 L 70 220'],
            width: 150
          },
          {
            id: '8',
            paths: [
              'M 80 20 C 41 20 6 55 39 104 C 52 125 83 127 98 142 C 124 160 128 219 80 220 ',
              'M 80 220 C 9 221 18 165 37 147 C 54 127 78 111 110 85 C 134 64 122 19 80 20 '
            ],
            width: 150
          },
          {
            id: '9',
            paths: [
              'M 100 20 Q 15 21 15 71 Q 15 121 100 120 ',
              'M 100 20 L 100 220 '
            ],
            width: 110
          },
          {
            id: '10',
            paths: [
              'M 20 20 L 20 220',
              'M 145 21 C 245 21 245 221 145 221 ',
              'M 145 221 C 45 221 45 21 145 21 '
            ],
            width: 230
          }
        ]
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
        fontSize: '2.5rem',
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
        fontSize: '2.5rem',
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
