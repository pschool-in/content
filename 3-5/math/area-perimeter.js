export default {
  id: 'area-perimeter',
  label: 'Area and Perimeter',
  list: [
    {
      id: 'area',
      type: 'areaGraph',
      label: 'Area under the Shape',
      commonData: {
        title: 'Calculate the Area under the closed boundary.'
      },
      data: [
        [
          `7,1
8,1
8,7
7,7
7,1
6`,

          `2,2
2,4
4,4
4,2
2,2
4`,

          `1,1
1,5
4,5
4,1
1,1
12`,

          `2,2
2,6
4,6
4,2
2,2
8`,

          `1, 4
8, 4
8, 8
1, 8
1, 4
28`,

          `5,1
8,1
8,8
5,8
5,1
21`,

          `3,3
3,9
8,9
8,3
3,3
30`,

          `1,1
8,1
8,4
1,4
1,1
21`
        ],

        [
          `1,1
5,5
1,5
1,1
8`,

          `3,1
8,1
8, 5
3,1
10`,

          `8, 4
8, 8
1, 8
8, 4
14`,

          `3,3
3,9
8,3
3,3
15`,

          `5, 2
7,8
5, 8
5, 2
6`,

          `1,1
7,7
7,1
1,1
18`,

          `9,9 
5, 9
9, 5
9, 9
8`,

          `3,3
8,9
8,3
3,3
15`
        ],

        [
          `3,3
5,3,
5,7
1,7
1,5
3,5
3,3
12`,

          `1, 4
8, 4
8, 6
6, 6
6, 8
1, 8
1, 4
24`,

          `5,1
8,1
8,8
6,8
6,3
5,3
5,1
16`,

          `1,1
1, 3
6, 3
6, 5
7, 5
7, 1
1, 1
14`,

          `1,1
1, 7
6, 7
6, 5
5, 5
5, 1
1, 1
26`,

          `3,1
3, 7
8, 7
8, 5
5, 5
5, 1
3, 1
18`,

          `3,5
3,9
8,9
8,3
5,3
5,5
3,5
26`,

          `9, 1
9, 9
1, 9
1, 7
7,7
7,1
9,1
28`
        ],

        [
          `2,7
2, 8
8,8
8,7
6,7
6,5
4,5
4,7
2,7
10`,

          `1, 5
1, 7
7, 7
7, 5
5, 5
5, 3
3, 3
3, 5
1,5
16`,

          `1,1
3,1
3,2
5,2
5,5
3,5
3,6
1,6
1,1
16`,

          `3,1
6,1
6,3
7,3
7,5
2, 5
2, 3
3, 3
3,1
16`,

          `2, 3
2, 5
6, 5
6, 8
9, 8
9, 1
6, 1
6, 3
2, 3
29`,

          `5,2
5, 8
7, 8
7, 6
9, 6
9, 4
7, 4
7, 2
5, 2
16`
        ]
      ]
    },
    {
      id: 'perimeter-2',
      type: 'areaGraph',
      label: 'Perimeter under the Shape',
      commonData: {
        title: 'Calculate the perimeter of the closed boundary.',
        unit: 'units'
      },
      data: [
        [
          `7,1
8,1
8,7
7,7
7,1
14`,

          `2,2
2,4
4,4
4,2
2,2
8`,

          `1,1
1,5
4,5
4,1
1,1
14`,

          `2,2
2,6
4,6
4,2
2,2
12`,

          `1, 4
8, 4
8, 8
1, 8
1, 4
22`,

          `5,1
8,1
8,8
5,8
5,1
20`,

          `3,3
3,9
8,9
8,3
3,3
22`,

          `1,1
8,1
8,4
1,4
1,1
20`
        ],

        [
          `3,3
5,3,
5,7
1,7
1,5
3,5
3,3
16`,

          `1, 4
8, 4
8, 6
6, 6
6, 8
1, 8
1, 4
22`,

          `5,1
8,1
8,8
6,8
6,3
5,3
5,1
20`,

          `1,1
1, 3
6, 3
6, 5
7, 5
7, 1
1, 1
20`,

          `1,1
1, 7
6, 7
6, 5
5, 5
5, 1
1, 1
22`,

          `3,1
3, 7
8, 7
8, 5
5, 5
5, 1
3, 1
22`,

          `3,5
3,9
8,9
8,3
5,3
5,5
3,5
22`,

          `9, 1
9, 9
1, 9
1, 7
7,7
7,1
9,1
32`
        ],

        [
          `2,7
2, 8
8,8
8,7
6,7
6,5
4,5
4,7
2,7
18`,

          `1, 5
1, 7
7, 7
7, 5
5, 5
5, 3
3, 3
3, 5
1,5
20`,

          `1,1
3,1
3,2
5,2
5,5
3,5
3,6
1,6
1,1
18`,

          `3,1
6,1
6,3
7,3
7,5
2, 5
2, 3
3, 3
3,1
18`,

          `2, 3
2, 5
6, 5
6, 8
9, 8
9, 1
6, 1
6, 3
2, 3
28`,

          `5,2
5, 8
7, 8
7, 6
9, 6
9, 4
7, 4
7, 2
5, 2
20`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'find-peri-triangle',
      label: 'Perimeter of a Triangle',
      data: {
        title: 'Find the perimeter of the below Triangle.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        // fontSize: '2rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 148 38 L 31 117 L 189 116 L 148 39'],
              texts: [
                { str: '7 cm', x: 73, y: 53, rot: -37 },
                { str: '5 cm', x: 161, y: 62, rot: 57 },
                { str: '9 cm', x: 92, y: 116 }
              ]
            },
            text: `Perimeter = ?0 cm 
21`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 18 41 L 49 115 L 189 116 L 17 40'],
              texts: [
                { str: '6 cm', x: 7, y: 67, rot: 64 },
                { str: '14 cm', x: 83, y: 53, rot: 26 },
                { str: '10 cm', x: 89, y: 114 }
              ]
            },
            text: `Perimeter = ?0 cm 
30`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 108 24 L 39 135 L 201 155 L 108 24'],
              texts: [
                { str: '10 cm', x: 49, y: 56, rot: -60 },
                { str: '12 cm', x: 135, y: 57, rot: 55 },
                { str: '14 cm', x: 85, y: 143, rot: 6 }
              ]
            },
            text: `Perimeter = ?0 cm 
36`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 236 29 L 37 114 L 200 116 L 236 29'],
              texts: [
                { str: '5 cm', x: 207, y: 72, rot: 292 },
                { str: '9 cm', x: 94, y: 113 },
                { str: '13 cm', x: 89, y: 60, rot: -27 }
              ]
            },
            text: `Perimeter = ?0 cm 
27`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 148 38 L 31 117 L 189 116 L 148 39'],
              texts: [
                { str: '10 cm', x: 73, y: 53, rot: -37 },
                { str: '6 cm', x: 161, y: 62, rot: 57 },
                { str: '13 cm', x: 92, y: 116 }
              ]
            },
            text: `Perimeter = ?0 cm 
29`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 108 24 L 39 135 L 201 155 L 108 24'],
              texts: [
                { str: '5 cm', x: 49, y: 56, rot: -60 },
                { str: '7 cm', x: 135, y: 57, rot: 55 },
                { str: '6 cm', x: 85, y: 143, rot: 6 }
              ]
            },
            text: `Perimeter = ?0 cm 
18`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 18 41 L 49 115 L 189 116 L 17 40'],
              texts: [
                { str: '3.2 cm', x: 4, y: 73, rot: 64 },
                { str: '5.2 cm', x: 83, y: 53, rot: 26 },
                { str: '3.6 cm', x: 89, y: 114 }
              ]
            },
            text: `Perimeter = ?0 cm 
12`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 148 38 L 31 117 L 189 116 L 148 39'],
              texts: [
                { str: '3.5 cm', x: 70, y: 53, rot: -37 },
                { str: '2 cm', x: 161, y: 62, rot: 57 },
                { str: '4.5 cm', x: 92, y: 116 }
              ]
            },
            text: `Perimeter = ?0 cm 
10`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 108 24 L 39 135 L 201 155 L 108 24'],
              texts: [
                { str: '6.4 cm', x: 49, y: 56, rot: -60 },
                { str: '7.2 cm', x: 135, y: 57, rot: 55 },
                { str: '8.2 cm', x: 85, y: 143, rot: 6 }
              ]
            },
            text: `Perimeter = ?0 cm 
21.8`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: ['M 236 29 L 37 114 L 200 116 L 236 29'],
              texts: [
                { str: '2.5 cm', x: 207, y: 72, rot: 292 },
                { str: '4.5 cm', x: 94, y: 113 },
                { str: '3.5 cm', x: 89, y: 60, rot: -27 }
              ]
            },
            text: `Perimeter = ?0 cm 
10.5`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'perimeter',
      label: 'Perimeter of Polygon',
      data: {
        title: 'Find the perimeter of the below Polygon.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        list: [
          {
            svg: {
              width: 300,
              height: 200,
              paths: ['M 37 33 L 250 32 L 253 180 L 147 180 L 36 91 Z'],
              texts: [
                { str: '10 m', x: 116, y: 30 },
                { str: '5 m', x: 166, y: 157 },
                { str: '5 m', x: 227, y: 80, rot: 270 },
                { str: '8 m', x: 90, y: 112, rot: 45 },
                { str: '2 m', x: 36, y: 44, rot: 90 }
              ]
            },
            text: `Perimeter = ?0 m 
  30`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: ['M 37 33 L 193 34 L 282 93 L 200 157 L 40 156 Z'],
              texts: [
                { str: '8 cm', x: 116, y: 30 },
                { str: '8 cm', x: 112, y: 132 },
                { str: '6 cm', x: 205, y: 53, rot: 35 },
                { str: '6 cm', x: 207, y: 113, rot: 320 },
                { str: '8 cm', x: 31, y: 74, rot: 90 }
              ]
            },
            text: `Perimeter = ?0 cm 
  36`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: ['M 59 101 L 154 20 L 257 21 L 60 195 Z'],
              texts: [
                { str: '3 cm', x: 171, y: 17 },
                { str: '3 cm', x: 51, y: 124, rot: 90 },
                { str: '6 cm', x: 80, y: 42, rot: 320 },
                { str: '9 cm', x: 148, y: 75, rot: 320 }
              ]
            },
            text: `Perimeter = ?0 cm 
  21`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: ['M 35 28 L 183 59 L 229 120 L 127 158 Z '],
              texts: [
                { str: '6 cm', x: 96, y: 22, rot: 13 },
                { str: '7 cm', x: 160, y: 139, rot: 339 },
                { str: '9 cm', x: 47, y: 75, rot: 53 },
                { str: '5 cm', x: 190, y: 64, rot: 55 }
              ]
            },
            text: `Perimeter = ?0 cm 
  27`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: ['M 33 116 L 130 38 L 268 65 L 141 95 L 178 184 Z'],
              texts: [
                { str: '4 cm', x: 174, y: 29, rot: 13 },
                { str: '6 cm', x: 180, y: 80, rot: 345 },
                { str: '5 cm', x: 150, y: 120, rot: 65 },
                { str: '6 cm', x: 70, y: 140, rot: 20 },
                { str: '7 cm', x: 60, y: 55, rot: 325 }
              ]
            },
            text: `Perimeter = ?0 cm 
  28`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 35 117 L 103 36 L 233 35 L 238 139 L 160 212 L 35 209 Z'
              ],
              texts: [
                { str: '4 cm', x: 146, y: 32 },
                { str: '4 cm', x: 208, y: 65, rot: 90 },
                { str: '3 cm', x: 175, y: 150, rot: 315 },
                { str: '4 cm', x: 70, y: 188 },
                { str: '3 cm', x: 30, y: 140, rot: 90 },
                { str: '3 cm', x: 50, y: 50, rot: 315 }
              ]
            },
            text: `Perimeter = ?0 cm 
  21`
          }
        ]
      }
    },
    {
      id: 'area-2',
      type: 'areaGraph',
      label: 'Area under the Shape',
      commonData: {
        title: 'Calculate the Area of the filled region.',
        cellSize: 50,
        rowCount: 6,
        colCount: 6
      },
      data: [
        [
          [
            `1, 2
2, 1
3, 1
4, 2
4, 5
3, 5
3, 4
2, 4
2, 5
1, 5
1, 2`,

            `2, 2
3, 2
3, 3
2, 3
2, 2`,

            9
          ],

          `4, 1
2, 1
1, 2
1, 4
2, 5
4, 5
4, 4
2, 4
2, 2
4, 2
4, 1
7`,

          `5, 0
1, 0
1, 5
5, 5
5, 4
2, 4
2, 3
4, 3
4, 2
2, 2
2, 1
5, 1
5, 0
13`,

          `4, 0
3, 0
3, 2
1, 2
1, 0
0, 0
0, 5
1, 5
1, 3
3, 3
3, 5
4, 5
4, 0
12`
        ],
        [
          `1, 1
1, 5
4, 5
4, 4
2, 4
2, 1
1, 1
6`,

          `1, 1
1, 5
2, 5
2, 2
3, 3
4, 2
4, 5
5, 5
5, 1
4, 1
3, 2
2, 1
1, 1
10`,

          [
            `2, 1
1, 2
1, 4
2, 5
3, 5
4, 4
4, 2
3, 1
2, 1`,

            `2, 2
3, 2
3, 4
2, 4
2, 2`,
            8
          ],

          [
            `1, 1
1, 5
2, 5
2, 4
3, 4
4, 3
4, 2
3, 1
1, 1`,

            `2, 2
2, 3
3, 3
3, 2
2, 2`,

            8
          ]
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Find the Missing Value',
      commonData: {
        type: 'word-problem'
      },
      data: [
        {
          title: 'The length of the side of squares are given. Find the areas.',
          list: [
            {
              widths: '120, 120',
              text: `Side | Area
2 ^cm | ?0 ^sq.cm
10 ^cm | ?1 ^sq.cm
5 ^cm | ?2 ^sq.cm
4 ^m | ?3 ^sq.m
3 ^km | ?4 ^sq.km
4, 100, 25, 16, 9`
            }
          ]
        },
        {
          title:
            'The length of the side of squares are given. Find the perimeter.',
          list: [
            {
              widths: '120, 120',
              text: `Side | Perimeter
2 ^cm | ?0 ^cm
10 ^cm | ?1 ^cm
5 ^cm | ?2 ^cm
4 ^m | ?3 ^m
3 ^km | ?4 ^km
8, 40, 20, 16, 12`
            }
          ]
        },
        {
          title: 'The length and width of rectangles are given. Find the area?',
          list: [
            {
              widths: '100, 100, 100',
              text: `Length | Width | Area
3 ^cm | 2 ^cm | ?0 ^sq.cm
5 ^cm |4 ^cm | ?1 ^sq.cm
7 ^cm |5 ^cm | ?2 ^sq.cm
11 ^m | 2 ^m | ?3 ^sq.m
3 ^km | 8 ^km |?4 ^sq.km
6, 20, 35, 22, 24`
            }
          ]
        },
        {
          title:
            'The length and width of rectangles are given. Find the perimeter?',
          list: [
            {
              widths: '100, 100, 100',
              text: `Length | Width | Perimeter
3 ^cm | 2 ^cm | ?0 ^cm
5 ^cm |4 ^cm | ?1 ^cm
7 ^cm |5 ^cm | ?2 ^cm
11 ^m | 2 ^m | ?3 ^m
3 ^km | 8 ^km |?4 ^km
10, 18, 24, 26, 22`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-problem',
      label: 'Word Problems',
      commonData: {
        title: 'Answer the word problems.',
        type: 'word-problem'
      },
      data: [
        `The area of a square is 25 ^sq.m. What is the length of its side? | ?0 ^m | 5
The perimeter of a square is 36 ^cm. What is the length of its side? | ?0 ^cm | 9
The area of a square is 1 ^sq.m. What is its perimeter? | ?0 ^m | 4
The area and the perimeter of a square are equal in value. What is the length of its side? | ?0 ^cm | 4
The length of a rectangle is 2 ^m. Its width is twice its length. What is its area? | ?0 ^sq.m | 8`,

        `A square of side 6 ^cm, is diagonally cut into two triangles. What is the area of one triangle? | ?0 ^sq.cm | 18
The sides of a triangle are of length 3 ^cm, 4 ^m and 5 ^cm. What is its perimeter? | ?0 ^cm | 12
The perimeter of a rectangle is 50 ^m. Its width is 15 ^m. What is its length? | ?0 ^m | 10
The area of a square is 144 ^sq.cm. What is the length of its side? | ?0 ^cm | 12
The area of a square is 100 ^sq.cm. What is its perimeter? | ?0 ^cm | 40`,

        `Each side of a hexagon is of length 10 ^m. What is its perimeter? | ?0 ^m | 60
Each side of a hexagon is of length 2 ^m. What is its perimeter? | ?0 ^cm | 1200 
All sides of a pentagon are of equal length. Its perimeter is 45 ^m. What is the length of its sides? | ?0 ^m | 9
Each side of a pentagon is of length 11 ^m. What is its perimeter? | ?0 ^m | 55
A square whose sides are 10 ^m is broken into two rectangles of equal size. What is the perimeter of one rectangle? | ?0 ^m | 30`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Perimeter or Area',
      id: 'perimeter-or-area',
      data: {
        title: 'Read the word problem and find what needs to be found.',
        types: [
          {
            name: 'Perimeter',
            text: `Kumar is planning to put a fence around his garden with a wire. How much wire does he need to buy?
Priya ran one round on the jogging track around a park. Find the distance she ran.
Priya is colouring the border of a rangoli before her house. How long is the border?`
          },
          {
            name: 'Area',
            text: `David is measuring the floor in his drawing room to cover it with a carpet. How much square feet of carpet does he require?
Priya needs to plant her garden with rose plants covering a rectangle of sides 5 m and 7 m. She should leave a space of 1 m between each plant. Find the number of plants she can plant.`
          }
        ]
      }
    }
  ]
};
