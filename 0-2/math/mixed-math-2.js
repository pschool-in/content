export default {
  label: 'Mixed Math 2',
  id: 'mixed-math-2',
  list: [
    {
      label: 'Count Arithmetic - Multiply',
      type: 'countArithmetic',
      data: { type: 'multiply', prefill: true },
      id: 'count-mul'
    },
    {
      label: 'Count Arithmetic - Multiply - 2',
      type: 'countArithmetic',
      data: { type: 'multiply' },
      id: 'count-mul-2'
    },
    {
      type: 'counter',
      id: 'count-linear',
      label: 'Count Objects',
      data: {
        type: 'linear',
        level: 2
        // width: 100,
      }
    },
    {
      type: 'counter',
      id: 'count-10-100',
      label: 'Find Value - (10 - 100)',
      data: { level: 2 }
    },
    {
      type: 'counter',
      id: 'count-100-1000',
      label: 'Find Value - (100 - 1000)',
      data: { level: 3 }
    },
    {
      label: 'Find the Value',
      type: 'picturePuzzle',
      id: 'value',
      commonData: {
        type: 2
      },
      data: [
        [
          `0 + 0 = 4
1 + 0 = 3
2, 1`,

          `0 + 1 = 4
1 + 1 = 6
1, 3`,

          `0 + 0 = 6
0 + 1 = 5
3, 2`,

          `0 + 0 = 4
0 + 1 = 4
2, 2`,

          `0 + 0 = 10
1 + 1 = 4
5, 2`
        ],
        [
          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
2, 1`,

          `0 + 0 + 0 = 3
1 + 1 + 1 = 9
1, 3`,

          `0 + 0 + 0 = 9
0 + 0 + 1 = 8
3, 2`,

          `1 + 1 + 1 = 6
0 + 1 + 1 = 6
2, 2`,

          `1 + 0 + 0 = 12
1 + 1 + 1 = 6
5, 2`
        ],
        [
          `0 + 0 = 4
1 + 2 = 4
2 + 2 = 6
2, 1, 3`,

          `0 + 1 = 4
1 + 1 = 6
1 + 2 = 5
1, 3, 2`,

          `0 + 0 = 6
0 + 1 = 5
1 + 2 = 6
3, 2, 4`,

          `0 + 0 = 4
2 + 1 = 6
0 + 1 = 4
2, 2, 4`,

          `0 + 0 = 10
2 + 0 = 6
1 + 1 = 4
5, 2, 1`
        ],
        [
          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
2 + 2 + 2 = 9
2, 1, 3`,

          `1 + 0 + 0 = 8
0 + 1 + 2 = 9
0 + 0 + 0 = 9
3, 2, 4`,

          `0 + 0 + 0 = 6
0 + 1 + 1 = 6
2 + 2 + 1 = 12
2, 2, 5`,

          `1 + 1 + 1 = 6
2 + 2 + 0 = 11
0 + 1 + 1 = 9
5, 2, 3`,

          `2 + 2 + 2 = 6
0 + 0 + 1 = 5
1 + 1 + 2 = 8
1, 3, 2`
        ]
      ]
    }
  ]
};
