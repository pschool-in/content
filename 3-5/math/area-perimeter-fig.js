export default {
  id: 'area-perimeter-fig',
  label: 'Area and Perimeter (from figure)',
  list: [
    {
      type: 'numberInput',
      id: 'square',
      label: 'Square',
      data: {
        title: 'Find the area and perimeter of square',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 110 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '4 cm',
                  x: 90,
                  y: 50,
                  rot: 270
                }
              ]
            },
            text: `Perimeter = ?0 cm 
Area = ?1 sq cm 
16, 16`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 35 10 H 110 V 85 H 35 V 10 Z'],
              texts: [
                {
                  str: '3 cm',
                  x: 90,
                  y: 50,
                  rot: 270
                }
              ]
            },
            text: `Perimeter = ?0 cm 
Area = ?1 sq cm 
12, 9`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 35 10 H 110 V 85 H 35 V 10 Z'],
              texts: [
                {
                  str: '5 m',
                  x: 65,
                  y: 72
                }
              ]
            },
            text: `Perimeter = ?0 cm 
Area = ?1 sq cm 
20, 25`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 110 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '10 m',
                  x: 65,
                  y: 97
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
40, 100`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 110 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '6 m',
                  x: 10,
                  y: 40,
                  rot: 90
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
24, 36`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 60 V 60 H 10 V 10 Z'],
              texts: [
                {
                  str: '2 m',
                  x: 7,
                  y: 30,
                  rot: 90
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
8, 4`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'rect',
      label: 'Rectangle',
      data: {
        title: 'Find the area and perimeter of rectangle',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 145 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '4 cm',
                  x: 125,
                  y: 50,
                  rot: 270
                },
                {
                  str: '6 cm',
                  x: 65,
                  y: 97
                }
              ]
            },
            text: `Perimeter = ?0 cm 
Area = ?1 sq cm 
20, 24`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 110 V 85 H 10 V 10 Z'],
              texts: [
                {
                  str: '3 cm',
                  x: 90,
                  y: 40,
                  rot: 270
                },
                {
                  str: '6 cm',
                  x: 45,
                  y: 72
                }
              ]
            },
            text: `Perimeter = ?0 cm 
Area = ?1 sq cm 
18, 18`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 35 10 H 125 V 85 H 35 V 10 Z'],
              texts: [
                {
                  str: '5 m',
                  x: 65,
                  y: 72
                },
                {
                  str: '6 m',
                  x: 110,
                  y: 40,
                  rot: 270
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
22, 30`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 145 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '7 m',
                  x: 130,
                  y: 50,
                  rot: 270
                },
                {
                  str: '9 m',
                  x: 65,
                  y: 97
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
32, 63`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 10 10 H 130 V 110 H 10 V 10 Z'],
              texts: [
                {
                  str: '6 m',
                  x: 10,
                  y: 40,
                  rot: 90
                },
                {
                  str: '8 m',
                  x: 65,
                  y: 97
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
28, 48`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 30 60 H 130 V 110 H 30 V 60 Z'],
              texts: [
                {
                  str: '2 m',
                  x: 27,
                  y: 80,
                  rot: 90
                },
                {
                  str: '4 m',
                  x: 65,
                  y: 47
                }
              ]
            },
            text: `Perimeter = ?0 m 
Area = ?1 sq m 
12, 8`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'peri-3angle',
      label: 'Perimeter of Triangle',
      data: {
        title: 'Find the perimeter of triangle.',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 47 11 L 121 104 L 25 104 Z '],
              texts: [
                { str: '10 cm', x: 52, y: 91 },
                { str: '8 cm', x: 17, y: 48, rot: '285' },
                { str: '10 cm', x: 77, y: 53, rot: '50' }
              ]
            },
            text: `Perimeter = ?0 cm 
28`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 72 7 L 121 104 L 25 104 Z '],
              texts: [
                { str: '7 cm', x: 52, y: 91 },
                { str: '9 cm', x: 28, y: 50, rot: '295' },
                { str: '10 cm', x: 89, y: 50, rot: '60' }
              ]
            },
            text: `Perimeter = ?0 cm 
26`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 107 12 L 96 107 L 15 52 Z '],
              texts: [
                { str: '10 cm', x: 42, y: 81, rot: '35' },
                { str: '11 cm', x: 43, y: 20, rot: '330' },
                { str: '12 cm', x: 92, y: 50, rot: '95' }
              ]
            },
            text: `Perimeter = ?0 cm 
33`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 138 14 L 82 111 L 7 112 Z '],
              texts: [
                { str: '4 cm', x: 33, y: 98, rot: '0' },
                { str: '16 cm', x: 45, y: 59, rot: '325' },
                { str: '14 cm', x: 95, y: 65, rot: '120' }
              ]
            },
            text: `Perimeter = ?0 cm 
34`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 27 27 L 139 61 L 7 112 Z '],
              texts: [
                { str: '17 cm', x: 49, y: 75, rot: '335' },
                { str: '11 cm', x: -1, y: 53, rot: '280' },
                { str: '13 cm', x: 80, y: 33, rot: '20' }
              ]
            },
            text: `Perimeter = ?0 cm 
41`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 109 7 L 96 107 L 15 52 Z '],
              texts: [
                { str: '12 cm', x: 42, y: 81, rot: '35' },
                { str: '13 cm', x: 43, y: 20, rot: '330' },
                { str: '13 cm', x: 92, y: 50, rot: '95' }
              ]
            },
            text: `Perimeter = ?0 cm 
38`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'peri-polygon-90',
      label: 'Perimeter of Polygon (90°) ',
      data: {
        title:
          'Find the perimeter of the below closed shape where all angles are 90°',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 10 18 L 138 18 L 138 116 L 68 116 L 68 69 L 9 68 L 10 18 '
              ],
              texts: [
                { str: '6 cm', x: 56, y: 5 },
                { str: '7 cm', x: 116, y: 49, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 cm 
26`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 122 8 L 122 121 L 24 121 L 24 61 L 71 61 L 72 8 L 122 8'
              ],
              texts: [
                { str: '5 cm', x: 60, y: 107 },
                { str: '8 cm', x: 100, y: 49, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 cm 
26`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 111 95 L 17 95 L 17 14 L 47 14 L 47 52 L 111 53 L 111 95 '
              ],
              texts: [
                { str: '9 m', x: 58, y: 94 },
                { str: '7 m', x: 0, y: 47, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 m 
32`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 9 122 L 9 6 L 117 6 L 117 44 L 65 44 L 65 122 L 9 122 '
              ],
              texts: [
                { str: '12 m', x: 61, y: 6 },
                { str: '14 m', x: 5, y: 51, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 m 
52`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 9 122 L 9 6 L 117 6 L 117 85 L 41 84 L 41 122 L 9 122 '
              ],
              texts: [
                { str: '17 m', x: 61, y: 6 },
                { str: '21 m', x: 2, y: 51, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 m 
76`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 111 95 L 17 95 L 17 14 L 87 14 L 87 52 L 111 53 L 111 95 '
              ],
              texts: [
                { str: '20 m', x: 58, y: 94 },
                { str: '15 m', x: 11, y: 47, rot: '270' }
              ]
            },
            text: `Perimeter = ?0 m 
70`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'peri-quad',
      label: 'Perimeter of Quadrilateral',
      data: {
        title: 'Find the perimeter of quadrilateral.',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 11 15 L 131 15 L 89 114 L 24 83 L 11 15 '],
              texts: [
                { str: '12 m', x: 62, y: 2 },
                { str: '12 m', x: 87, y: 61, rot: '290' },
                { str: '10 m', x: 44, y: 84, rot: '30' },
                { str: '7 m', x: 2, y: 50, rot: '250' }
              ]
            },
            text: `Perimeter = ?0 m 
41`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 47 16 L 117 17 L 139 124 L 12 76 L 47 16 '],
              texts: [
                { str: '15 m', x: 62, y: 2 },
                { str: '12 m', x: 25, y: 38, rot: '290' },
                { str: '21 m', x: 53, y: 83, rot: '25' },
                { str: '19 m', x: 104, y: 52, rot: '255' }
              ]
            },
            text: `Perimeter = ?0 m 
67`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 47 16 L 88 17 L 139 108 L 10 106 L 47 16 '],
              texts: [
                { str: '2 m', x: 54, y: 4 },
                { str: '9 m', x: 13, y: 49, rot: '290' },
                { str: '10 m', x: 64, y: 93, rot: '0' },
                { str: '12 m', x: 105, y: 50, rot: '60' }
              ]
            },
            text: `Perimeter = ?0 m 
33`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 47 16 L 127 61 L 129 106 L 10 106 L 47 16 '],
              texts: [
                { str: '12 m', x: 80, y: 27, rot: '30' },
                { str: '12 m', x: 10, y: 49, rot: '290' },
                { str: '14 m', x: 64, y: 93, rot: '0' },
                { str: '6 m', x: 125, y: 77, rot: '90' }
              ]
            },
            text: `Perimeter = ?0 m 
44`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 70 8 L 130 41 L 73 118 L 11 54 L 70 8 '],
              texts: [
                { str: '8 m', x: 90, y: 12, rot: '30' },
                { str: '7 m', x: 23, y: 19, rot: '320' },
                { str: '9 m', x: 32, y: 70, rot: '45' },
                { str: '10 m', x: 85, y: 63, rot: '300' }
              ]
            },
            text: `Perimeter = ?0 m 
34`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 130 13 L 93 60 L 136 121 L 11 58 L 130 13 '],
              texts: [
                { str: '8 m', x: 105, y: 36, rot: '305' },
                { str: '16 m', x: 46, y: 25, rot: '340' },
                { str: '16 m', x: 48, y: 87, rot: '30' },
                { str: '8 m', x: 104, y: 74, rot: '55' }
              ]
            },
            text: `Perimeter = ?0 m 
48`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'peri-polygon',
      label: 'Perimeter of Polygon',
      data: {
        title: 'Find the perimeter of polygon.',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        list: [
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 73 17 L 128 53 L 106 109 L 21 93 L 19 51 L 73 17 '],
              texts: [
                { str: '5 cm', x: 28, y: 22, rot: 330 },
                { str: '7 cm', x: 88, y: 21, rot: 35 },
                { str: '6 cm', x: 99, y: 69, rot: 290 },
                { str: '8 cm', x: 39, y: 87, rot: 10 },
                { str: '4 cm', x: 2, y: 62, rot: 265 }
              ]
            },
            text: `Perimeter = ?0 cm 
  30`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 76 18 L 131 55 L 128 122 L 76 61 L 8 52 L 76 18 '],
              texts: [
                { str: '4 cm', x: 25, y: 20, width: 34, height: 13, rot: 335 },
                { str: '4 cm', x: 120, y: 71, width: 34, height: 13, rot: 90 },
                { str: '4 cm', x: 37, y: 45, width: 34, height: 13 },
                { str: '5 cm', x: 92, y: 26, width: 34, height: 13, rot: 35 },
                { str: '5 cm', x: 73, y: 80, width: 34, height: 13, rot: 50 }
              ]
            },
            text: `Perimeter = ?0 cm 
 22`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 76 18 L 131 55 L 71 119 L 8 95 L 9 34 L 76 18 '],
              texts: [
                { str: '7 m', x: 19, y: 14, width: 34, height: 13, rot: 345 },
                { str: '9 m', x: 80, y: 75, width: 34, height: 13, rot: 310 },
                { str: '7 m', x: -1, y: 56, width: 34, height: 13, rot: 90 },
                { str: '8 m', x: 92, y: 26, width: 34, height: 13, rot: 35 },
                { str: '8 m', x: 21, y: 92, width: 34, height: 13, rot: 25 }
              ]
            },
            text: `Perimeter = ?0 m 
39`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 76 18 L 142 18 L 123 98 L 71 119 L 10 114 L 9 76 L 76 18 '
              ],
              texts: [
                { str: '8 m', x: 22, y: 35, width: 34, height: 13, rot: 320 },
                { str: '5 m', x: 93, y: 5, width: 34, height: 13 },
                { str: '5 m', x: 77, y: 96, width: 34, height: 13, rot: 335 },
                { str: '3 m', x: 0, y: 86, width: 34, height: 13, rot: 85 },
                { str: '9 m', x: 108, y: 52, width: 34, height: 13, rot: 280 },
                { str: '7 m', x: 29, y: 104, width: 34, height: 13, rot: 5 }
              ]
            },
            text: `Perimeter = ?0 m 
37`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: ['M 77 6 L 137 50 L 134 116 L 10 115 L 11 47 L 77 6'],
              texts: [
                { str: '10 m', x: 20, y: 16, width: 34, height: 13, rot: 325 },
                { str: '10 m', x: 96, y: 18, width: 34, height: 13, rot: 40 },
                { str: '16 m', x: 51, y: 103, width: 34, height: 13 },
                { str: '10 m', x: 1, y: 70, width: 34, height: 13, rot: 90 },
                { str: '10 m', x: 112, y: 70, width: 34, height: 13, rot: 270 }
              ]
            },
            text: `Perimeter = ?0 m 
56`
          },
          {
            svg: {
              version: 2,
              scale: 1.5,
              width: 150,
              height: 130,
              fontSize: 10,
              paths: [
                'M 77 6 L 137 50 L 134 116 L 72 74 L 10 115 L 11 47 L 77 6 '
              ],
              texts: [
                { str: '7 m', x: 20, y: 16, width: 34, height: 13, rot: 325 },
                { str: '7 m', x: 96, y: 18, width: 34, height: 13, rot: 40 },
                { str: '8 m', x: 27, y: 92, width: 34, height: 13, rot: 325 },
                { str: '8 m', x: 77, y: 91, width: 34, height: 13, rot: 35 },
                { str: '6 m', x: 1, y: 70, width: 34, height: 13, rot: 90 },
                { str: '6 m', x: 112, y: 70, width: 34, height: 13, rot: 270 }
              ]
            },
            text: `Perimeter = ?0 m 
42`
          }
        ]
      }
    }
  ]
};
