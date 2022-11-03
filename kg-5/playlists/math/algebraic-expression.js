export default {
  label: 'Algebraic Expression',
  id: 'algebraic-expression',
  list: [
    {
      label: 'Number of Terms',
      id: 'no-of-terms',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the number of terms in the below expression.',
        types: ['2', '3', '4']
      },
      data: [
        [
          `~x2+y2
~x3-10`,

          `~x4+y4+5
~x2+y2+25`,
          `~x2+y2+xy+10`
        ],
        [
          `~x2y2+100
~x3+x2`,

          `~3x3-2x2-100
~x2+xy+y2`,

          `~5x2+10xy+25y2-20`
        ],

        [
          `~3xy + 3`,
          `~x2+x+1`,
          `~x2+y2+10xy-10
~10-2x2-5y2+20x
~5x2+4y2+3z2+100`
        ]
      ]
    },
    {
      label: 'Number of Factors',
      id: 'no-of-factors',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the number of factors in the underlined term.',
        types: ['2', '3', '4']
      },
      data: [
        [
          `~x2+_y2_+xy+10
~x2+y2+_xy_+10`,

          `~5x2+_10xy_+25y2-20
~_x3_-10`,

          `~x4+_y4_+5`
        ],
        [
          `~x2+_y2_`,
          `~_x3_+x2
~5x2+_10xy_+25y2-20`,
          `~_x2y2_+100
~_3x3_-2x2-100`
        ],
        [
          `~5x2+_17x_+23`,
          `~_3y2_-2y-100
~5y2-_4xy_+5x2`,
          `~_10x3_+5x2-2x+19
~5x3+_4x2y_+3y4`
        ]
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Like Terms',
      commonData: {
        title: 'Match Like Terms'
      },
      data: [
        `~4x, ~7x
~11y, ~y
75, 100
~13x2, ~x2
~y2, ~2y2`,

        `~11xy2, ~7xy2
~9x2y, ~10x2y
~75xy, ~10xy
~15x2, ~2x2
~7x2y2, ~11x2y2`,

        `~5xy, ~12xy
~19x2, ~12x2
54, 45
~6x2y, ~10x2y
~8x2y2, ~21x2y2`
      ]
    },
    {
      type: 'numberInput',
      id: 'add',
      label: 'Add the Arithmetic Expressions',
      commonData: {
        title: 'Add the Arithmetic Expressions',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '2rem',
        inputType: 'small'
      },
      data: [
        {
          list: [
            `~2𝑥+3
~3𝑥+5
−−−−−−
~?0𝑥+?1
5, 8`,

            `~7𝑥+5
~𝑥+1
−−−−−−
~?0𝑥+?1
8, 6`,

            `~10𝑥+3
~2𝑥+31
−−−−−−
~?0𝑥+?1
12, 34`,

            `~5𝑥+8
~4𝑥+3
−−−−−−
~?0𝑥+?1
9, 11`,

            `~4𝑥+3
~2𝑥+8
−−−−−−
~?0𝑥+?1
6, 11`
          ]
        },

        {
          list: [
            `~3𝑥-3
~7𝑥-9
−−−−−−
~?0𝑥-?1
10, 12`,

            `~6𝑥-6
~𝑥-1
−−−−−−
~?0𝑥-?1
7, 7`,

            `~10𝑥-3
~2𝑥-9
−−−−−−
~?0𝑥-?1
12, 12`,

            `~7𝑥+8
~3𝑥-3
−−−−−−
~?0𝑥+?1
10, 5`,

            `~8𝑥+13
~3𝑥-3
−−−−−−
~?0𝑥+?1
11, 10`
          ]
        },

        {
          list: [
            `~𝑥2+2𝑥-3
~𝑥2+7𝑥-5
−−−−−−−−−
~?0𝑥2+?1𝑥-?2
2, 9, 8`,

            `~3𝑥2+7𝑥+3
~𝑥2+2𝑥+3
−−−−−−−−−
~?0𝑥2+?1𝑥+?2
4, 9, 6`,

            `~7𝑥2-9𝑥+8
~3𝑥2+7𝑥-7
−−−−−−−−−
~?0𝑥2-?1𝑥+?2
10, 2, 1`,

            `~4𝑥2+5𝑥-9
~2𝑥2+2𝑥-5
−−−−−−−−−
~?0𝑥2+?1𝑥-?2
6, 7, 14`,

            `~𝑥2-2𝑥-3
~8𝑥2-7𝑥-5
−−−−−−−−−
~?0𝑥2-?1𝑥-?2
9, 9, 8`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'subtract',
      label: 'Subtract the Arithmetic Expressions',
      commonData: {
        title: 'Subtract the Arithmetic Expressions',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '2rem',
        inputType: 'small'
      },
      data: [
        {
          list: [
            `~5𝑥+8
~3𝑥+5
−−−−−−
~?0𝑥+?1
2, 3`,

            `~7𝑥+5
~𝑥+1
−−−−−−
~?0𝑥+?1
6, 4`,

            `~10𝑥+31
~2𝑥+11
−−−−−−
~?0𝑥+?1
8, 20`,

            `~5𝑥+8
~3𝑥+3
−−−−−−
~?0𝑥+?1
2, 5`,

            `~4𝑥+13
~2𝑥+8
−−−−−−
~?0𝑥+?1
2, 5`
          ]
        },

        {
          list: [
            `~13𝑥-3
~7𝑥-9
−−−−−−
~?0𝑥+?1
6, 6`,

            `~6𝑥-6
~𝑥-1
−−−−−−
~?0𝑥-?1
5, 5`,

            `~10𝑥-3
~2𝑥-7
−−−−−−
~?0𝑥+?1
8, 4`,

            `~7𝑥+8
~3𝑥-3
−−−−−−
~?0𝑥+?1
4, 11`,

            `~8𝑥+13
~3𝑥-3
−−−−−−
~?0𝑥+?1
5, 16`
          ]
        },

        {
          list: [
            `~3𝑥2+2𝑥-3
~𝑥2+7𝑥-5
−−−−−−−−−
~?0𝑥2-?1𝑥+?2
2, 5, 2`,

            `~3𝑥2+7𝑥+3
~𝑥2+2𝑥+1
−−−−−−−−−
~?0𝑥2+?1𝑥+?2
2, 5, 2`,

            `~7𝑥2-9𝑥+8
~3𝑥2+7𝑥-7
−−−−−−−−−
~?0𝑥2-?1𝑥+?2
4, 16, 15`,

            `~4𝑥2+5𝑥-9
~2𝑥2+2𝑥-5
−−−−−−−−−
~?0𝑥2+?1𝑥-?2
2, 3, 4`,

            `~11𝑥2-2𝑥-3
~8𝑥2-7𝑥-5
−−−−−−−−−
~?0𝑥2+?1~𝑥+?2
3, 5, 2`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiply',
      commonData: {
        title: 'Fill in the boxes and complete the solution',
        type: 'word-problem',
        inputType: 'small',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem'
      },
      data: [
        `~2(𝑥+5)=?0𝑥+?1 | 2, 10
        ~4(2𝑥-3)=?0𝑥-?1 | 8, 12
        ~4(3𝑥2-2𝑥-3) ~=?0𝑥2-?1𝑥-?2 | 12, 8, 12
        ~3(2𝑥2-5𝑥+10) ~=?0𝑥2-?1𝑥+?2 | 6, 15, 30
        ~5(2𝑥2-11)=?0𝑥2-?1 | 6, 15, 30`,

        `~2𝑥(𝑥-4)=?0𝑥2-?1𝑥 | 2, 8
        ~3𝑥(3𝑥+5)=?0𝑥2+?1𝑥 | 9, 15
        ~4𝑥(𝑥2+2𝑥+3) ~=?0𝑥3+?1𝑥2+?2𝑥 | 4, 8, 12
        ~3𝑥(2𝑥2-5𝑥+10) ~=?0𝑥3-?1𝑥2+?2𝑥 | 6, 15, 30
        ~5𝑥(4𝑥2-3)=?0𝑥3-?1𝑥 | 20, 15`
      ]
    },
    {
      type: 'numberInput',
      id: 'divide',
      label: 'Divide',
      commonData: {
        title: 'Fill in the boxes and complete the solution',
        type: 'word-problem',
        inputType: 'small',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem'
      },
      data: [
        `~4𝑥2+10/2 = ~?0𝑥2+?1 | 2, 5
        ~15𝑦2+9𝑦-18/3 = ~?0𝑦2+?1𝑦-?2 | 5, 3, 6
        ~10𝑦2+15/5 = ~?0𝑦2+?1 | 2, 3
        ~14𝑥2+21𝑥-7/7 = ~?0𝑥2+?1𝑥-?2 | 2, 3, 1
        ~18𝑥+17/6 = ~?0𝑥 + ?1/?2 | 3, 17, 6`,

        `~6𝑥4+8𝑥3/2𝑥 = ~?0𝑥3+?1𝑥2 | 3, 4
        ~9𝑦3+9𝑦2-15𝑦/3𝑦 = ~?0𝑦2+?1𝑦-?2 | 3, 3, 5
        ~15𝑦3+25𝑦2/~5𝑦2 = ~?0𝑦+?1 | 3, 5
        ~21𝑥3+14𝑥2-7𝑥/7𝑥 = ~?0𝑥2+?1𝑥-?2 | 3, 2, 1
        ~15𝑥2+27𝑥/3𝑥 = ~?0𝑥+?1 | 5, 9`
      ]
    }
  ]
};
