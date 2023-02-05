const sudoku4Data = [
  `3002
0410
0320
4001`,

  `4000
0010
0240
0021`,

  `4000
0002
2014
0400`,

  `0210
0032
0100
2001`,

  `4021
0003
0000
0230`,

  `2403
0000
0340
0001`,

  `4000
0040
0120
2003`,

  `3000
0002
0103
0021`,

  `0030
2300
1000
3004`,

  `0300
1020
0040
4001`
];

export default {
  label: 'Sudoku',
  id: 'sudoku',
  img: 'sudoku',
  grade: '0-3',
  list: [
    {
      type: 'sudoku',
      id: 'linear-4',
      label: 'Sudoku (4 x 4) - Linear ',
      lockAfter: 8,
      commonData: {
        type: '4x4-numbers',
        title:
          'Fill the highlighted cell by selecting the right number given below.',
        isLinear: true
      },
      data: [
        {
          text: `4000
0002
2014
0400`,
          sequence: `21|3
30|1
10|3
11|1
01|2
12|4
02|3
03|1
32|2
33|3`
        },
        {
          text: `0210
0032
0100
2001`,
          sequence: `03|4
00|3
23|3
32|4
22|2
20|4
31|3
10|1
11|4`
        },
        {
          text: `4021
0003
0000
0230`,
          sequence: `01|3
12|4
22|1
11|1
10|2
21|4
30|1
20|3
23|2
33|4`
        },
        {
          sequence: `01|1
10|2
20|1
31|2
32|3 
23|4
13|3
02|4`,
          text: `3002
0410
0320
4001`
        },
        {
          sequence: `23|3
20|1
02|3
03|2
13|4
01|1
11|3
10|2
30|3
31|4`,

          text: `4000
0010
0240
0021`
        },
        {
          text: `3000
0002
0103
0021`,
          sequence: `22|4
20|2
03|4
02|1
01|2
12|3
11|4
10|1
30|4
31|3`
        },
        {
          text: `0030
2300
1000
3004`,
          sequence: `00|4
01|1
31|2
21|4
32|1
03|2
13|1
12|4
22|2
23|3`
        },
        {
          text: `0300
1020
0040
4001`,
          sequence: `00|2
20|3
11|4
13|3
03|4
02|1
32|3
23|2
21|1
31|2`
        },
        {
          text: `2403
0000
0340
0001`,
          sequence: `02|1
11|1
10|3
20|1
30|4
31|2
32|3
23|2
13|4
12|2`
        },
        {
          text: `4000
0040
0120
2003`,
          sequence: `20|3
10|1
23|4
32|1
31|4
02|3
13|2
03|1
01|2
11|3`
        }
      ]
    },
    {
      type: 'sudoku',
      id: '4',
      label: 'Sudoku (4 x 4)',
      lockAfter: 8,
      commonData: { type: '4x4-numbers', title: 'Sudoku (4 x 4)' },
      data: sudoku4Data
    },
    {
      type: 'sudoku',
      id: '4-images',
      label: 'Sudoku (4 x 4) with Images ',
      lockAfter: 8,
      commonData: { type: '4x4-images', title: 'Sudoku (4 x 4) with Images ' },
      data: sudoku4Data
    }
  ]
};
