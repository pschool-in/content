export default {
  label: 'Negative Numbers',
  id: 'negative-numbers',
  list: [
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      commonData: {
        fontSize: '2.5rem',
        type: 'math',
        probType: 'compare'
      },
      data: [
        {
          pattern: '-x = -x'
        },
        {
          pattern: '-xx = -xx'
        },
        {
          pattern: '-xxx = -xxx'
        }
      ]
    },
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Add the Numbers',
      commonData: {
        count: 10,
        title: 'Add the Numbers',
        allowNegative: true
      },
      data: [
        {
          type: 'misc~x-xx'
        },
        {
          type: 'misc~10-1x'
        },
        {
          type: 'misc~-x-x'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'find-value',
      label: 'Find the Value',
      commonData: {
        title: 'Find the value.',
        type: 'word-problem',
        fontSize: '1.8rem',
        isSentence: false,
        answerBox: false
      },
      data: [
        `7 − (−3) = ?0 | 10
9 − (−3) = ?0  | 12
7 − (−7) = ?0  | 14
7 − (−5) = ?0  | 12
11 − (−8) = ?0  | 19`,

        `5 − 15 = ?0  | -10
12 − 19 = ?0  | -7
25 − 50 = ?0  | -25
20 − 35 = ?0  | -15
15 − 17 = ?0  | -2`,

        `−5 + (−3) = ?0  | -8
−8 + (−4) = ?0  | -12
−11 + (−3) = ?0  | -14
−25 + (−25) = ?0  | -50
−17 + (−8) = ?0  | -25`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-value-2',
      label: 'Find the Value (Decimal)',
      commonData: {
        title: 'Find the value.',
        type: 'word-problem',
        fontSize: '1.8rem',
        isSentence: false,
        answerBox: false
      },
      data: [
        `1 − (−0.4) = ?0  | 1.4
12 − (−0.9) = ?0 | 12.9
10 − (−0.6) = ?0 | 10.6
6 − (−2.5) = ?0 | 8.5
5 − (−1.9) = ?0 | 6.9`,

        `7 − 7.8 = ?0 | -0.8
6 − 6.9 = ?0 | -0.9
5 − 5.4 = ?0 | -0.4
12 − 10.5 = ?0 | 1.5
15 − 16.5 = ?0 | -1.5`,

        `−5.1 + 0.1 = ?0 | -5
−6.4 + 0.3 = ?0 | -6.1
−80.9 + 0.7 = ?0 | -80.2
−11.9 + 0.8 = ?0 | -11.1
−29.5 + 1.5 = ?0 | -28`,

        `−10.5 + 12.5 = ?0 | 2
17.6 − 19.7 = ?0 | -2.1
6.5 − 5.9 = ?0 | 0.6
−7.7 − 1.1 = ?0 | -8.8
−12.3 − 1.9 = ?0 | -14.2`,

        `−2.4 + (−2.2) = ?0 | -4.6
1.6 − (+2.1) = ?0 | -0.5
−0.9 − 0.9 = ?0 | -1.8
(+5.4) + (+2.2) = ?0 | 7.6
(+3.2) − (+1.2) = ?0 | 2`
      ]
    }
  ]
};
