export default {
  label: 'Math Puzzle - 3',
  id: 'math-puzzle-3',
  list: [
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcrossword-20',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?+6=?
+b+b+
?+?=8
=b=b=
12+6=?`,
          answer: [4, 10, 8, 0, 18]
        },

        {
          text: `4+?=10
+b+b+
8+?=?
=b=b=
?+?=18`,
          answer: [6, 0, 8, 12, 6]
        },
        {
          text: `?−11=?
+b−b+
?+?=5
=b=b=
14−8=?`,
          answer: [12, 1, 2, 3, 6]
        },

        {
          text: `12−?=6
+b+b+
8−?=?
=b=b=
?−?=12`,
          answer: [6, 2, 6, 20, 8]
        },
        {
          text: `?−3=?
−b+b−
?+?=10
=b=b=
12−7=?`,
          answer: [18, 15, 6, 4, 5]
        },

        {
          text: `8−?=4
+b+b+
5−?=?
=b=b=
?−?=8`,
          answer: [4, 1, 4, 13, 5]
        },
        {
          text: `?−1=?
+b+b+
?−?=5
=b=b=
18−8=?`,
          answer: [6, 5, 12, 7, 10]
        },

        {
          text: `6−?=5
+b+b+
9−?=?
=b=b=
?−?=5`,
          answer: [1, 9, 0, 15, 10]
        },
        {
          text: `?−13=?
−b+b−
?+?=2
=b=b=
16−14=?`,
          answer: [17, 4, 1, 1, 2]
        },

        {
          text: `13−?=12
+b−b+
0+?=?
=b=b=
?+?=13`,
          answer: [1, 1, 1, 13, 0]
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword - 2',
      id: 'mathcross-2',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `4+?=10
+b+b+
8+?=?
=b=b=
?+?=18`,
          answer: [6, 0, 8, 12, 6]
        },
        {
          text: `?+6=?
+b+b+
?+?=8
=b=b=
12+6=?`,
          answer: [4, 10, 8, 0, 18]
        },
        {
          text: `12−?=1
+b−b+
2+?=?
=b=b=
?−?=6`,
          answer: [11, 3, 5, 14, 8]
        },
        {
          text: `?−6=?
+b+b+
?−?=6
=b=b=
20−8=?`,
          answer: [12, 6, 8, 2, 12]
        },
        {
          text: `18−?=15
  −b+b−
6+?=?
=b=b=
?−?=5`,
          answer: [3, 4, 10, 12, 7]
        },
        {
          text: `?−4=?
  +b+b+
?−?=4
=b=b=
13−5=?`,
          answer: [8, 4, 5, 1, 8]
        },
        {
          text: `6−?=5
  +b+b+
12−?=?
=b=b=
?−?=10`,
          answer: [1, 7, 5, 18, 8]
        },
        {
          text: `?−1=?
  +b+b+
?−?=0
=b=b=
15−10=?`,
          answer: [6, 5, 9, 9, 5]
        },
        {
          text: `17−?=4
  −b+b−
1+?=?
=b=b=
?−?=2`,
          answer: [13, 1, 2, 16, 14]
        },
        {
          text: `?−1=?
  +b−b+
?+?=1
=b=b=
13+0=?`,
          answer: [13, 12, 0, 1, 13]
        }
      ]
    },
    {
      type: 'balance',
      label: 'Balance the number',
      id: 'balance',
      data: [
        {
          left: 'x,x',
          right: '?',
          count: 10
        },
        {
          left: 'x0,x',
          right: '?',
          count: 10
        },
        {
          left: 'x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'xx, x',
          right: '?',
          count: 10
        },
        {
          left: 'x,x,x',
          right: '?',
          count: 10
        },
        {
          left: 'x',
          right: 'x,x,?',
          count: 10
        },
        {
          left: '1x',
          right: 'x, ?',
          count: 10
        },
        {
          left: '2x',
          right: '1x, ?',
          count: 10
        },
        {
          left: '20',
          right: 'x, ?',
          count: 10
        },
        {
          left: '30',
          right: 'x, ?',
          count: 10
        }
      ]
    }
  ]
};
