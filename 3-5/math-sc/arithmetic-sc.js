export default {
  label: 'Arithmetic Basics',
  id: 'arithmetic-sc',
  list: [
    {
      type: 'quickArithmetic',
      label: 'After Number',
      id: 'after-no',
      data: [
        {
          type: 'after~x'
        },
        {
          type: 'after~x0'
        },
        {
          type: 'after~xx'
        },
        {
          type: 'after~x9'
        }
      ]
    },
    {
      type: 'quickArithmetic',
      label: 'Before Number',
      id: 'before-no',
      data: [
        {
          type: 'before~x'
        },
        {
          type: 'before~xx'
        },
        {
          type: 'before~x9'
        },
        {
          type: 'before~x0'
        }
      ]
    },
    {
      label: 'Count Arithmetic - Addition',
      type: 'countArithmetic',
      data: { type: 'addition' },
      id: 'count-add'
    },
    {
      label: 'Count Arithmetic - Subtraction',
      type: 'countArithmetic',
      data: { type: 'subtraction' },
      id: 'count-sub'
    },
    {
      label: 'Count Arithmetic - Multiply ',
      type: 'countArithmetic',
      data: { type: 'multiply' },
      id: 'count-mul'
    },
    {
      type: 'match',
      label: 'Match Addition',
      id: 'match',
      lockAfter: 2,
      commonData: {
        title: 'Match Addition'
      },
      data: [
        `5 + 5 =, 10
6 + 6 =, 12
4 + 4 =, 8
3 + 3 =, 6
7 + 7 =, 14
10 + 10 =, 20`,

        `6 + 7 =, 13
4 + 6 =, 10
10 + 4 =, 14
5 + 3 =, 8
7 + 5 =, 12
7 + 4 =, 11`,

        `7 + 7 =, 14
6 + 6 =, 12
10 + 3 =, 13
5 + 3 =, 8
5 + 5 =, 10
7 + 4 =, 11`,

        `15 + 4 =, 19
14 + 6 =, 20
17 + 4 =, 21
11 + 7 =, 18
9 + 7 =, 16
12 + 3 =, 15`,

        `20 + 4 =, 24
12 + 10 =, 22
17 + 8 =, 25
21 + 5 =, 26
15 + 8 =, 23
21 + 8 =, 29`
      ]
    },
    {
      type: 'match',
      label: 'Match Subtraction',
      id: 'match-2',
      lockAfter: 2,
      commonData: {
        title: 'Match Subtraction'
      },
      data: [
        `8 - 2 =, 6
9 - 4 =, 5
5 - 4 =, 1
8 - 1 =, 7
8 - 4 =, 4
7 - 5 =, 2`,

        `11 - 2 =, 9
10 - 4 =, 6
10 - 5 =, 5
11 - 1 =, 10
13 - 2 =, 11
15 - 3 =, 12`,

        `19 - 7 =, 12
17 - 2 =, 15
19 - 6 =, 13
15 - 4 =, 11
18 - 2 =, 16
18 - 4 =, 14`,

        `25 - 4 =, 21
28 - 2 =, 26
29 - 7 =, 22
27 - 2 =, 25
29 - 6 =, 23
28 - 4 =, 24`,

        `35 - 3 =, 32
38 - 8 =, 30
39 - 6 =, 33
37 - 6 =, 31
38 - 4 =, 34
40 - 5 =, 35`
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
        title: 'Add the Numbers'
      },
      data: [
        {
          type: 'misc~x+x'
        },
        {
          type: 'misc~x0+x'
        },
        {
          type: 'misc~xx+10'
        },
        {
          type: 'misc~xx+3'
        },
        {
          type: 'misc~xx+5'
        },
        {
          type: 'misc~xx+9'
        }
      ]
    },
    {
      id: 'subtract',
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
          type: 'misc~x-x'
        },
        {
          type: 'misc~x9-x'
        },
        {
          type: 'misc~xx-2'
        },
        {
          type: 'misc~xx-3'
        },
        {
          type: 'misc~xx-10'
        }
      ]
    },
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
          type: 'mul~x~2'
        },
        {
          type: 'mul~x~3'
        },
        {
          type: 'mul~x~4'
        },
        {
          type: 'mul~x~5'
        },
        {
          type: 'mul~x~10'
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'missing-addition',
      label: 'Addition - Missing Numbers',
      lockAfter: 1,
      data: [
        { pattern: 'aa + aa', missing: [4, 5] },
        { pattern: 'xx + xx', missing: [4, 5] },
        { pattern: 'aa + aa', missingRow: [2] },
        { pattern: 'bb + bb', missing: [4, 5, 6] },
        { pattern: 'xx + xx', missing: [2] },
        { pattern: 'bb + bb', missing: [2] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction - Missing Numbers',
      lockAfter: 1,
      data: [
        { pattern: 'bb - aa', missing: [4] },
        { pattern: 'bb - aa', missingRow: [2] },
        { pattern: '99 - xx', missingRow: [2] },
        { pattern: '100 - xx', missingRow: [2] }
      ]
    }
  ]
};
