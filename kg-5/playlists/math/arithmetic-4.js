export default {
  id: 'arithmetic-4',
  label: 'Arithmetic - 4',
  list: [
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
          type: 'mul~x0~6'
        },
        {
          type: 'mul~x0~7'
        },
        {
          type: 'mul~x0~8'
        },
        {
          type: 'mul~x0~9'
        },
        {
          type: 'mul~x0~x'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Division',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Division'
      },
      data: [
        {
          type: 'div~xx~6'
        },
        {
          type: 'div~xx~7'
        },
        {
          type: 'div~xx~8'
        },
        {
          type: 'div~xx~9'
        },
        {
          type: 'div~xx~x'
        }
      ]
    },
    {
      id: 'evaluate',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Evaluate'
      },
      data: [
        {
          type: 'misc~xx+x0-x0'
        },
        {
          type: 'misc~xx-x0+x0'
        },
        {
          type: 'misc~xx-x0-x0'
        },
        {
          type: 'misc~xxx+x-x'
        },
        {
          type: 'misc~xxx-x+x'
        },
        {
          type: 'misc~xxx-x-x'
        },
        {
          type: 'misc~xxx-100+x'
        },
        {
          type: 'misc~xxx+100-x'
        },
        {
          type: 'misc~1000+x0-x'
        },
        {
          type: 'misc~1000+x00-x'
        }
      ]
    },
    {
      id: 'fillup',
      type: 'quickArithmetic',
      label: 'Fill Up',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~x00+x'
        },
        {
          type: 'misc~x00+x0'
        },
        {
          type: 'misc~x00+x0+x'
        },
        {
          type: 'misc~x00+xx+3'
        },
        {
          type: 'misc~xxx+x'
        },
        {
          type: 'misc~xxx+x0'
        },
        {
          type: 'misc~xxx+x00'
        },
        {
          type: 'misc~x0+x0'
        },
        {
          type: 'misc~xx+50'
        },
        {
          type: 'misc~xx+1x'
        }
      ]
    },
    {
      id: 'fillup-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 2',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~xx-30'
        },
        {
          type: 'misc~xx-x0'
        },

        {
          type: 'misc~x0-x0'
        },
        {
          type: 'misc~x5-x5'
        },
        {
          type: 'misc~xx-9'
        },
        {
          type: 'misc~xx-11'
        },
        {
          type: 'misc~xx-15'
        },
        {
          type: 'misc~xx-19'
        },
        {
          type: 'misc~x09-x'
        },
        {
          type: 'misc~x99-x'
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
