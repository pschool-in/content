export default {
  label: 'Place Value - Basics',
  id: 'place-value-basic',
  list: [
    {
      label: 'Find the Number',
      type: 'placeValueAbacus',
      id: 'abacus-placevalue',
      lockAfter: 1,
      commonData: {},
      data: [
        { pattern: 'aa' },
        { pattern: 'xx' },
        { pattern: 'bb' },
        { pattern: 'aaa' },
        { pattern: 'xxx' },
        { pattern: 'bbb' }
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Number',
      lockAfter: 1,
      commonData: { title: 'Write the Number', type: 'word-problem' },
      data: [
        `5 Tens + 3 Ones | 53
7 Tens + 5 Ones | 75
2 Tens + 9 Ones | 29
9 Tens + 3 Ones | 93
6 Tens + 4 Ones | 64`,
        `3 Hundreds + 2 Tens + 3 Ones | 323
6 Hundreds + 5 Tens + 9 Ones | 659
9 Hundreds + 3 Tens + 7 Ones | 937
7 Hundreds + 7 Tens + 7 Ones | 777
8 Hundreds + 7 Tens + 3 Ones | 873`,
        `3 Hundreds +  Ten + 3 Ones | 313
Hundred + 5 Tens + 9 Ones | 159
9 Hundreds + 3 Tens + One | 931
Hundred + 7 Tens + One | 171
Hundred + Ten + One | 111`,
        `6 Hundreds +  2 Ones | 602
Hundred + 5 Tens | 150
3 Tens + One | 31
7 Tens + One | 71
9 Hundreds + 4 Tens | 940`,
        `5 Hundreds +  12 Ones | 512
Hundred + 15 Tens | 250
13 Tens + One | 131
7 Tens + 11 Ones | 81
9 Hundreds + 14 Tens | 1040`
      ]
    },
    {
      type: 'counter',
      id: 'count-10-100',
      label: 'Find Value - Two Digit',
      data: { level: 2 }
    },
    {
      type: 'counter',
      id: 'count-1000',
      label: 'Find Value - Three Digit',
      data: { level: 3 }
    },
    {
      type: 'numberInput',
      id: 'number-names-2',
      label: 'Fill in the Boxes',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the Boxes',
        type: 'word-problem',
        firstLineFontSize: '2.5rem',
        fontSize: '1rem'
      },
      data: [
        `53 | ?0 Tens + ?1 Ones | 5, 3
75 | ?0 Tens + ?1 Ones | 7, 5
29 | ?0 Tens + ?1 Ones | 2, 9
93 | ?0 Tens + ?1 Ones | 9, 3
64 | ?0 Tens + ?1 Ones | 6, 4`,
        `323 | ?0 Hundreds + ?1 Tens + ?2 Ones | 3,2,3
659 | ?0 Hundreds + ?1 Tens + ?2 Ones | 6, 5, 9
937 |  ?0 Hundreds + ?1 Tens + ?2 Ones | 9, 3, 7
777 |  ?0 Hundreds + ?1 Tens + ?2 Ones | 7, 7, 7
873 | ?0 Hundreds + ?1 Tens + ?2 Ones | 8, 7, 3`,
        `313 | ?0 Hundreds +  Ten + ?1 Ones | 3 , 3
159 | Hundred + ?0 Tens + ?1 Ones | 5, 9
931 | ?0 Hundreds + ?1 Tens + One | 9, 3
171 | Hundred + ?0 Tens + One | 7
155 | Hundred + ?0 Tens + ?1 Ones | 5, 5`,
        `602 | ?0 Hundreds +  ?1 Ones | 6, 2
250 | ?0 Hundreds + ?1 Tens | 2, 5
35 | ?0 Tens + ?1 Ones | 3, 5
72 | ?0 Tens +  ?1 Ones | 7, 2
940 | ?0 Hundreds + ?1 Tens | 9, 4`
      ]
    },
    {
      type: 'match',
      label: 'Match Place Value and Numbers',
      id: 'match',
      lockAfter: 2,
      commonData: { title: 'Match Place Values' },
      data: [
        {
          title: 'Match the place value of the numbers in 73452',
          text: `5, 10
3, 1000
7, 10000
2, 1
4, 100`
        },
        {
          title: 'Match the place value of the numbers in 92568',
          text: `5, 100
6, 10
9, 10000
2, 1000
8, 1`
        },
        {
          title: 'Match the place value of the numbers in 58926',
          text: `5, 10000
6, 1
9, 100
2, 10
8, 1000`
        },
        {
          title: 'Match the place value of the numbers in 71438',
          text: `4, 100
1, 1000
7, 10000
3, 10
8, 1`
        },
        {
          title: 'Match the place value of the numbers in 14378',
          text: ` 7, 10
3, 100
4, 1000
1, 10000
8, 1`
        }
      ]
    },
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Add the Numbers',
      lockAfter: 2,
      commonData: { count: 10, title: 'Add the Numbers' },
      data: [
        { type: 'misc~a00+a0+a' },
        { type: 'misc~x00+x0+x' },
        { type: 'misc~b00+b0+b' },
        { type: 'misc~x000+x0+x' },
        { type: 'misc~x000+x00+x' },
        { type: 'misc~x000+x00+x0' }
      ]
    }
  ]
};
