import * as Vars from './_variables.js';

export default {
  label: 'Quick Math',
  id: 'math-6-sc',
  img: 'quickMath',
  grade: '6-8',
  appLink: Vars.mathApp,
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
          pattern: '-xx = -xx'
        },
        {
          text: `1 = 1/2
1 = 2/2
1/2 = 1/4
1/4 = 3/4
1 = 3/3
1 = 2/3
3/4 = 3/3
2/4 = 1/2
4/4 = 1
1/2 = 2/3`
        },
        {
          text: `2/5 = 3/10
3/4 = 4/6
7/9 = 5/10
3/6 = 5/6
3/7 = 4/8
2/10 = 4/5
2/9 = 5/10
4/6 = 2/4
6/7 = 4/8
3/6 = 4/5`
        },
        {
          text: `8/3 = 3
11/3 = 3
5/2 = 2
7/4 = 2
12/25 = 1/2`
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'addition-missingworkout',
      label: 'Missing Number in Workout',
      data: [
        {
          pattern: 'xxx + xxx + xxx',
          missingRow: [3]
        },
        {
          pattern: 'xxx + xxx + xxx',
          missing: [
            [0, 4, 8],
            [1, 3, 8],
            [2, 4, 6]
          ]
        },
        { pattern: 'bbb - aaa', missingRow: [0] },
        {
          pattern: 'xxx + xxx + xxx',
          missingRow: [0, 1, 2]
        },
        { pattern: 'aaa * aaa', missingRow: [4, 5] }
      ]
    },
    {
      label: 'Number Line: Find Number',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: -50,
          range: 60,
          minorLines: 5,
          labelGap: 5,
          unit: 80,
          text: '-45, -25, -47, -23, -37, -42, -8, -3, -27, -13'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 5,
          unit: 100,
          text: '0.28, 0.46, 0.92, 0.58, 0.78'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 10,
          unit: 100,
          text: '0.23, 0.47, 0.91, 0.38, 0.75'
        },
        {
          start: -10,
          range: 10,
          minorLines: 10,
          labelGap: 1,
          unit: 150,
          text: '-7.5, -5.2, -4.7, -8.2, -2.4, -6.9, -9.6, -0.8'
        },
        {
          start: -1,
          range: 2,
          minorLines: 10,
          labelGap: 0.2,
          unit: 90,
          text: '-0.8, 0.2, 0.8, -0.9, -0.1'
        }
      ]
    },
    {
      type: 'factorTree',
      id: 'factor-tree',
      label: 'Factor Tree',
      data: [
        {
          type: 0,
          arr: [30, 42, 8, 27, 12, 18, 20, 50, 45, 75]
        },
        {
          type: 1,
          arr: [24, 36, 16, 54, 90, 84, 40, 60, 150, 100]
        },
        {
          type: 2,
          arr: [24, 36, 16, 54, 90, 84, 40, 60, 150, 100]
        }
      ]
    },
    {
      type: 'geometry',
      label: 'Draw Shapes',
      id: 'draw',
      data: [
        `Draw a cone of radius 2 cm and height 5 cm. | cone | 2, 5
Draw a cone of radius 1.6 cm and height 3 cm. | cone | 1.6, 3
Draw a cone of radius 1 cm and height 4 cm. | cone | 1, 4
Draw a cone of diameter 3.6 cm and height 4 cm. | cone | 1.8, 4
Draw a cone of diameter 2.8 cm and height 3.8 cm. | cone | 1.4, 3.8`,

        `Draw a cylinder of radius 2 cm and height 5 cm. | cylinder | 2, 5
Draw a cylinder of radius 1.6 cm and height 3 cm. | cylinder | 1.6, 3
Draw a cylinder of radius 1 cm and height 4 cm. | cylinder | 1, 4
Draw a cylinder of diameter 3.6 cm and height 4 cm. | cylinder | 1.8, 4
Draw a cylinder of diameter 2.8 cm and height 3.8 cm. | cylinder | 1.4, 3.8`,

        `Draw a parallelogram of sides 3 and 4 cm, with one of its angle being 60 degree. | parallelogram | 3, 4, 60
Draw a parallelogram of sides 3 and 3 cm, with one of its angle being 90 degree. | parallelogram | 3, 3, 90
Draw a parallelogram of sides 3 and 2 cm, with one of its angle being 110 degree. | parallelogram | 3, 2, 110
Draw a parallelogram of sides 3 and 4 cm, with one of its angle being 75 degree. | parallelogram | 3, 4, 75
Draw a parallelogram of sides 2 and 3.6 cm, with one of its angle being 60 degree. | parallelogram | 2, 3.6, 60`
      ]
    },

    {
      type: 'geometryType',
      label: 'Find the missing Angle',
      id: 'missing-angle',
      commonData: {
        qText: 'Find the missing angle.',
        units: 'degree'
      },
      data: [
        {
          list: [30, 150, 45, 135, 90],
          probType: 'angle180'
        },
        {
          list: [90, 180, 270, 135, 300],
          probType: 'angle360'
        },
        {
          probType: 'triAngle',
          list: [
            {
              pts: [40, 260, 280, 260, 39, 93],
              angles: [90, 35, 0]
            },
            {
              pts: [40, 260, 280, 260, 166, 57],
              angles: [0, 60, 60]
            },
            {
              pts: [40, 260, 280, 260, 111, 195],
              angles: [45, 20, 0]
            },
            {
              pts: [40, 260, 280, 260, 237, 41],
              angles: [45, 80, 0]
            },
            {
              pts: [40, 260, 280, 260, 39, 93],
              angles: [0, 35, 55]
            }
          ]
        },
        {
          probType: 'parallelogramAngle',
          list: [
            {
              pts: [50, 193, 173, 193, 257, 50, 134, 50],
              angles: [60, 120, 0, 120]
            },
            {
              pts: [50, 193, 173, 193, 145, 50, 22, 50],
              angles: [0, 80, 100, 80]
            },
            {
              pts: [50, 119, 254, 119, 211, 50, 8, 50],
              angles: [120, 60, 0, 60]
            },
            {
              pts: [50, 268, 155, 268, 239, 50, 133, 50],
              angles: [0, 110, 70, 110]
            },
            {
              pts: [50, 193, 173, 193, 257, 50, 134, 50],
              angles: [60, 0, 60, 120]
            }
          ]
        }
      ]
    },

    {
      label: 'Picture Puzzle',
      type: 'picturePuzzle',
      id: 'value',
      commonData: {
        type: 2
      },
      data: [
        [
          `0 + 1 = 10
0 − 1 = 2
6, 4`,

          `0 + 1 = 15
0 − 1 = 5
10, 5`,

          `0 + 1 = 12
1 − 0 = 4
4, 8`,

          `1 − 0 = 10
0 + 1 = 50
20, 30`,

          `0 − 1 = 20
0 + 1 = 30
25, 5`
        ],
        [
          `3 × 0 = 9
5 × 1 = 25
3, 5`,

          `10 × 0 = 70
7 × 1 = 35
7, 5`,

          `2 × 0 = 40
3 × 1 = 30
20, 10`,

          `4 × 0 = 8
8 × 1 = 32
2, 4`,

          `3 × 0 = 12
5 × 1 = 45
4, 9`
        ],
        [
          `3 × 0 = 15
1 − 0 = 5
5, 10`,

          `6 × 0 = 24
1 − 0 = 4
4, 8`,

          `1 − 0 = 6
8 × 0 = 16
2, 8`,

          `0 + 1 = 11
5 × 0 = 30
6, 5`,

          `3 × 0 = 12
1 − 0 = 20
4, 24`
        ]
      ]
    },
    {
      type: 'balance',
      label: 'Balance the number',
      id: 'balance',
      data: [
        {
          left: 'xx, x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'x0, x0',
          right: 'x0, ?',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, x, ?',
          count: 10
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fraction',
      label: 'Fraction Arithmetic',
      commonData: {
        title: 'Solve the Problem.',
        type: 'word-problem',
        fontSize: '1.8rem',
        isSentence: false
      },
      data: [
        {
          list: [
            `2/5 + 1/5 = ?0/?1
3, 5`,
            `3/10 + 5/10 = ?0/?1
8, 10`,
            `2/7 + 3/7 = ?0/?1
5, 7`,
            `4/9 + 1/9 = ?0/?1
5, 9`,
            `3/11 + 5/11 = ?0/?1
8, 11`
          ]
        },
        {
          list: [
            `1/2 + 1/4 = ?0+?1/?2 = ?3/?4
2, 1, 4, 3, 4`,
            `1/5 + 1/10 = ?0+?1/?2 = ?3/?4 
2, 1, 10, 3, 10`,

            `1/5 + 1/7 = ?0+?1/?2 = ?3/?4 
7, 5, 35, 12, 35`,

            `3/10 + 2/15 = ?0+?1/?2 = ?3/?4 
9, 4, 30, 13, 30`,
            `1/3 + 10/27 = ?0+?1/?2 = ?3/?4 
9, 10, 27, 19, 27`
          ]
        },
        {
          list: [
            `2/3 × 2/3 = ?0/?1 
4, 9`,
            `1/5 × 2/5 = ?0/?1 
2, 25`,
            `4/9 × 5/9 = ?0/?1 
20, 81`,
            `3/10 × 7/10 = ?0/?1 
21, 100`,
            `3/8 × 5/8 = ?0/?1 
15, 64`
          ]
        },
        {
          list: [
            `5/8 - 2/16 = ?0-?1/?2 = ?3/?4 
= ?5/?6
10, 2, 16, 8, 16, 1, 2`,
            `7/5 - 4/10 = ?0-?1/?2 = ?3/?4 
= ?5
14, 4, 10, 10, 10, 1`,
            `3/10 - 2/15 = ?0-?1/?2 = ?3/?4 
= ?5/?6
9, 4, 30, 5, 30, 1, 6`,
            `3/4 - 5/12 = ?0-?1/?2 = ?3/?4 
= ?5/?6
9, 5, 12, 4, 12, 1, 3`,
            `5/6 - 1/3 = ?0-?1/?2 = ?3/?4
= ?5/?6
5, 2, 6, 3, 6,  1, 2`
          ]
        }
      ]
    },
    {
      type: 'algebraicInput',
      id: 'simplify',
      label: 'Simplify Algebraic Expressions',
      commonData: {
        title: 'Simplify Algebraic Expressions',
        fontSize: '2rem'
      },
      data: [
        `12𝑥-6𝑥+4𝑥 | 10𝑥
14𝑥-5𝑥-4𝑥 | 5𝑥
5𝑦+4𝑦-3𝑦 | 6𝑦
𝑦-10𝑦+2𝑦 | -7𝑦
3𝑥-2𝑥-2𝑥 | -𝑥`,

        `𝑥2+𝑥2+𝑥2 | 3𝑥2
𝑥2+𝑥2+𝑥 | 2𝑥2+𝑥
2𝑥+3𝑥+7𝑥 | 12𝑥
7𝑦+𝑦+𝑦 | 9𝑦
3𝑥+𝑦+𝑥 | 4𝑥+𝑦`,

        `2𝑥⋅4𝑥 | 8𝑥2
4𝑥⋅6𝑥 | 24𝑥2
12𝑥⋅2𝑥 | 24𝑥2
5𝑥⋅6𝑥 | 30𝑥2
3𝑥⋅7𝑥 | 21𝑥2`,

        `4𝑥(2𝑥2+4𝑥-3) | 8𝑥3+16𝑥2-12𝑥
2𝑦(7𝑦2+4𝑦+5) | 14𝑦3+8𝑦2+10𝑦
6𝑥(2𝑥2-4𝑥-6) | 12𝑥3-24𝑥2-36𝑥
𝑦(𝑦2-𝑦-1) | 𝑦3-𝑦2-𝑦
3𝑦(6𝑦2-5𝑦+9) | 18𝑦3-15𝑦2+27𝑦`,

        `𝑥2(5𝑥+99) | 5𝑥3+99𝑥2
3𝑦2(3𝑦-9) | 9𝑦3-27𝑦2
2𝑥2(3𝑥+5) | 6𝑥3+10𝑥2
5𝑦2(6𝑦+4) | 30𝑦3+20𝑦2
9𝑦2(9𝑦-7) | 81𝑦3-63𝑦2`,

        `4𝑥+12/4 | 𝑥+3
14𝑥+49/7 | 2𝑥+7
18𝑥+15/3 | 6𝑥+5 
40𝑦+20/2 | 20𝑦+10
45𝑦+60/5 | 9𝑦+12`
      ]
    },
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Quick Arithmetic',
      commonData: {
        count: 10,
        title: 'Quick Arithmetic',
        decimal: true
      },
      data: [
        {
          type: 'misc~0.x+0.x+0.x'
        },
        {
          type: 'misc~x.75+x.25'
        },
        {
          type: 'misc~1-0.xx'
        },
        {
          type: 'misc~100-xx.x'
        },
        {
          type: 'mul~x0~0.5'
        },
        {
          type: 'div~xx~2'
        }
      ]
    },
    {
      type: 'geometryType',
      label: 'Right, Acute, Obtuse angles',
      id: 'angle-type',
      data: { type: 'angle' }
    },
    {
      type: 'blocksCount',
      id: 'count-blocks',
      label: 'Calculate No. of Blocks',
      data: {}
    },

    ...(() =>
      [...Array(4)].map((dummy, i) => ({
        type: 'matchByDragDrop',
        label: `Tables - ${i + 12}`,
        id: `table-${i + 12}`,
        data: { type: 'tables', number: i + 12 }
      })))()
  ]
};
