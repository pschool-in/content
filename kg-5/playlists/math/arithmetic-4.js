export default {
  id: 'arithmetic-4',
  label: 'Arithmetic - 4',
  list: [
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross',
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
  +b+b+
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
          answer: [1, 1, 0, 13, 0]
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword - 2',
      id: 'mathcross',
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
        +b+b+
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
        1+?=2
        =b=b=
        ?−?=?`,
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
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross-big-20',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?−9=?+1=?
+b+b+b+b+
?−3=5+?=5
=b=b=b=b=
19−?=?+1=?
−b+b−b−b−
5+?=5+?=6
=b=b=b=b=
?−12=?+?=?`,
          answer: [11, 2, 3, 8, 0, 12, 7, 8, 0, 1, 14, 2, 0, 2]
        },
        {
          text: `?−13=?+3=?
+b−b+b+b+
?+2=2+?=5
=b=b=b=b=
18−?=?+6=?
−b−b−b+b+
5−?=2−?=0
=b=b=b=b=
?−8=?+?=?`,
          answer: [18, 5, 8, 0, 3, 11, 7, 13, 3, 2, 13, 5, 8, 13]
        },
        {
          text: `?−14=?+2=?
+b−b+b+b+
?+9=9+?=11
=b=b=b=b=
15−?=?+4=?
+b−b+b−b+
3+?=6−?=4
=b=b=b=b=
?−2=?+?=?`,
          answer: [15, 1, 3, 0, 2, 5, 10, 14, 3, 2, 18, 16, 2, 18]
        },
        {
          text: `?+4=?−7=?
+b+b+b+b+
?+8=9+?=9
=b=b=b=b=
5+?=?−7=?
−b−b−b−b−
2+?=14−?=8
=b=b=b=b=
?+0=?−?=?`,
          answer: [4, 8, 1, 1, 0, 12, 17, 10, 12, 6, 3, 3, 1, 2]
        },
        {
          text: `?+8=?−4=?
−b+b−b+b−
?−1=1+?=7
=b=b=b=b=
4+?=?−10=?
+b−b−b−b−
9−?=6−?=2
=b=b=b=b=
?−6=?−?=?`,
          answer: [6, 14, 10, 2, 6, 9, 13, 3, 3, 4, 13, 7, 6, 1]
        },
        {
          text: `?+17=?−4=?
+b−b+b−b+
?−12=3+?=7
=b=b=b=b=
15+?=?+0=?
−b+b−b+b−
9−?=8−?=6
=b=b=b=b=
?+6=?+?=?`,
          answer: [0, 17, 13, 15, 4, 5, 20, 20, 1, 2, 6, 12, 2, 14]
        },
        {
          text: `?−13=?+16=?
−b−b−b−b−
?−12=1+?=4
=b=b=b=b=
3−?=?+13=?
−b+b+b−b−
1+?=4+?=13
=b=b=b=b=
?+4=?−?=?`,
          answer: [16, 3, 19, 13, 3, 1, 2, 15, 3, 9, 2, 6, 4, 2]
        },
        {
          text: `?−9=?+13=?
+b−b+b+b−
?+8=13+?=14
=b=b=b=b=
18−?=?−14=?
−b−b−b−b+
14−?=13−?=0
=b=b=b=b=
?+0=?−?=?`,
          answer: [13, 4, 17, 5, 1, 1, 17, 3, 1, 13, 4, 4, 1, 3]
        },
        {
          text: `?+6=?+8=?
+b+b+b−b+
?+1=6−?=2
=b=b=b=b=
5+?=?+4=?
+b−b+b+b−
5−?=4+?=12
=b=b=b=b=
?+6=?−?=?`,
          answer: [0, 6, 14, 5, 4, 7, 12, 16, 1, 8, 10, 16, 12, 4]
        },
        {
          text: `?−6=?+6=?
−b+b−b+b−
?+7=10−?=3
=b=b=b=b=
14−?=?+13=?
+b−b+b−b+
4+?=16−?=4
=b=b=b=b=
?−1=?+?=?`,
          answer: [17, 11, 17, 3, 7, 13, 1, 14, 12, 12, 18, 17, 1, 18]
        }
      ]
    }
  ]
};
