export default {
  label: 'Mixed Math',
  id: 'mixed-math',
  list: [
    {
      type: 'dominos',
      id: 'dominos',
      label: 'Dominos',
      data: { type: 1 }
    },
    {
      type: 'dominos',
      id: 'dominos-2',
      label: 'Dominos - 2',
      data: { type: 2 }
    },
    {
      type: 'counter',
      id: 'count-1-9',
      label: 'Count Objects (1 - 9)',
      locked: true,
      data: { level: 1 }
    },
    {
      label: 'Count Arithmetic - Addition',
      type: 'countArithmetic',
      data: { type: 'addition', prefill: true },
      id: 'count-add'
    },
    {
      label: 'Count Arithmetic - Addition - 2',
      type: 'countArithmetic',
      data: { type: 'addition' },
      id: 'count-add-2'
    },
    {
      label: 'Count Arithmetic - Subtraction',
      type: 'countArithmetic',
      data: { type: 'subtraction', prefill: true },
      locked: true,
      id: 'count-sub'
    },
    {
      label: 'Count Arithmetic - Subtraction - 2',
      type: 'countArithmetic',
      data: { type: 'subtraction' },
      locked: true,
      id: 'count-sub-2'
    },
    {
      label: 'Find the Value',
      type: 'picturePuzzle',
      id: 'value',
      lockAfter: 2,
      commonData: {
        type: 1
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
          `0 + 0 = 4
0 + 1 = 4
1 + 1 = 4
2, 2`,
          `0 + 0 = 4
1 + 1 = 6
1 + 0 = 5
2, 3`,
          `0 + 0 = 10
1 + 1 = 4
0 + 1 = 7
5, 2`,
          `0 + 0 = 8
1 + 1 = 6
1 + 0 = 7
4, 3`,
          `0 + 0 = 6
0 + 1 = 5
1 + 1 = 4
3, 2`
        ],
        [
          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
2, 1`,

          `0 + 0 + 1 = 5
1 + 1 + 0 = 7
1, 3`,

          `1 + 0 + 0 = 8
0 + 1 + 1 = 7
3, 2`,

          `0 + 0 + 0 = 6
0 + 1 + 1 = 6
2, 2`,

          `1 + 0 + 0 = 12
0 + 1 + 1 = 9
5, 2`
        ],
        [
          `1 + 1 + 1 = 9
0 + 0 + 1 = 5
1 + 1 + 0 = 7
1, 3`,

          `0 + 0 + 0 = 6
1 + 1 + 1 = 3
0 + 1 + 0 = 5
2, 1`,

          `1 + 0 + 0 = 8
0 + 1 + 1 = 7
0 + 0 + 0 = 9
3, 2`,

          `0 + 0 + 0 = 6
0 + 1 + 1 = 6
1 + 1 + 1 = 6
2, 2`,

          `1 + 1 + 1 = 6
1 + 0 + 0 = 12
0 + 1 + 1 = 9
5, 2`
        ],
        [
          `0 + 0 = 8
1 + 1 = 4
4, 2`,
          `0 + 1 = 3
1 + 0 = 3
2, 1`,

          `1 + 0 = 9
0 + 1 = 9
1 + 1 = 8
5, 4`,

          `0 + 0 + 1 = 5
1 + 1 + 0 = 4
2, 1`,

          `0 + 0 + 1 = 9
1 + 1 + 1 = 15
1 + 1 + 0 = 12
2, 5`
        ],
        [
          `0 + 2 = 5
1 + 1 = 4
2, 2, 3`,
          `0 + 1 = 4
2 + 1 = 5
1, 3, 2`,
          `2 + 0 = 4
0 + 1 = 5
3, 2, 1`,
          `0 + 2 = 7
0 + 1 = 4
2, 2, 5`,
          `0 + 0 = 10
1 + 2 = 6
5, 2, 4`
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
          `0 + 2 + 0 = 7
1 + 2 + 1 = 5
2, 1, 3`,

          `0 + 0 + 2 = 4
1 + 1 + 2 = 8
1, 3, 2`,

          `1 + 0 + 2 = 6
0 + 2 + 1 = 6
3, 2, 1`,

          `0 + 0 + 2 = 7
0 + 1 + 1 = 6
2, 2, 3`,

          `1 + 0 + 0 = 12
0 + 1 + 2 = 10
5, 2, 3`
        ],
        [
          `1 + 2 + 2 = 7
0 + 0 + 1 = 5
1 + 1 + 0 = 7
1, 3, 2`,

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
5, 2, 3`
        ],
        [
          `0 + 0 = 8
1 + 2 = 3
4, 2, 1`,
          `2 + 1 = 5
1 + 0 = 3
2, 1, 4`,

          `1 + 0 = 9
0 + 2 = 7
1 + 1 = 8
5, 4, 2`,

          `0 + 0 + 2 = 9
1 + 1 + 0 = 4
2, 1, 5`,

          `0 + 0 + 1 = 9
1 + 1 + 1 = 15
1 + 2 + 0 = 9
2, 5, 2`
        ]
        //new one ends here - 2
      ]
    },
    {
      label: 'Number Name (10-20)',
      type: 'matchByDragDrop',
      id: 'numbername1020',

      data: {
        fontSize: '1.6rem',
        text: `Fifteen : *15*
Twenty : *20*
Eighteen : *18*
Eleven : *11*
Fourteen : *14*
Twelve : *12*`
      }
    }
  ]
};
