export default {
  label: 'Visualizing Solid Shapes',
  id: 'visualize-3d-7',
  list: [
    {
      type: 'numberInput',
      id: 'count-face',
      label: 'Faces, Vertices & Edges',
      data: {
        title: 'Find the number of Faces, Vertices & Edges for the 3d shape',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.5rem',
        list: [
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                'M 20 60 H 130 V 180 H 20 Z L 80 21 L 180 20 V 128 L 130 180 L 20 180 L 79 128 L 80 21 M 130 60 L 180 20 M 79 128 L 180 128 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
6, 8, 12`
          },
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                'M 20 180 L 79 128 L 180 128 L 130 180 L 19 180 L 106 11 L 79 128 M 129 180 L 106 12 L 180 128 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
5, 5, 8`
          },
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                {
                  d: 'M 19 180 L 104 116 L 169 178 L 19 180 ',
                  fill: '#D7CCC8'
                },
                'M 20 180 L 104 116 L 171 179 L 19 180 L 106 11 L 171 179 M 104 116 L 106 12 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
4, 4, 6`
          },
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                'M 71 77 L 124 112 L 125 180 L 20 180 L 20 114 Z ',
                'M 117 26 L 162 60 L 160 126 L 66 126 L 68 58 Z ',
                'M 20 179 L 66 126 M 160 126 L 125 180 M 20 114 L 68 58 M 117 26 L 71 77 M 124 112 L 162 61 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
7, 10, 15`
          },
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                'M 17 104 H 127 V 179 H 17 Z L 77 79 L 177 79 V 146 L 127 179 L 17 179 L 76 146 L 77 79 M 127 104 L 177 79 M 76 146 L 177 146 ',
                'M 17 104 L 109 5 L 77 79 M 127 105 L 109 5 L 178 80 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
9, 9, 16`
          },
          {
            svg: {
              width: 200,
              height: 182,
              paths: [
                'M 79 81 L 177 96 L 122 169 L 14 133 Z L 32 16 L 14 133 M 122 169 L 119 13 L 177 96 M 119 14 L 32 16 '
              ]
            },
            text: `Faces = ?0 
            Vertices = ?1 
            Edges = ?2 
5, 6, 9`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'count-cubes',
      label: 'Count the cubes',
      commonData: {
        title:
          'A set of cube boxes are arranged together. The front, side and top view are given. Find the number of cubes.',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 29 30 H 89 V 50 H 29 Z M 49 30 V 50 M 69 30 V 50 ',
                  'M 183 30 H 243 V 50 H 183 Z M 203 30 V 50 M 223 30 V 50 ',
                  'M 128 30 H 148 V 50 H 128 Z '
                ]
              },
              text: `No. of cubes = ?0 
    3`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 34 40 H 94 V 60 H 34 Z M 54 60 V 20 H 74 V 60 ',
                  'M 153 20 L 153 60 L 133 60 L 133 20 Z M 153 40 L 133 40 ',
                  'M 183 30 H 243 V 50 H 183 Z M 203 30 V 50 M 223 30 V 50 '
                ]
              },
              text: `No. of cubes = ?0 
      4`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 51 60 V 20 H 31 V 60 H 71 V 40 H 31 ',
                  'M 136 60 V 20 H 156 V 60 H 116 V 40 H 156 ',
                  'M 201 20 H 241 V 60 H 201 Z M 221 20 V 60 M 201 40 H 241 '
                ]
              },
              text: `No. of cubes = ?0 
      5`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 201 20 H 241 V 60 H 201 Z M 221 20 V 60 M 201 40 H 241 ',
                  'M 116 20 H 156 V 60 H 116 Z M 136 20 V 60 M 116 40 H 156 ',
                  'M 31 20 H 71 V 60 H 31 Z M 51 20 V 60 M 31 40 H 71 '
                ]
              },
              text: `No. of cubes = ?0 
        8`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 201 20 H 241 V 60 H 201 Z M 221 20 V 60 M 201 40 H 241 ',
                  'M 140 60 V 20 H 120 V 60 H 160 V 40 H 120 ',
                  'M 31 20 H 71 V 60 H 31 Z M 51 20 V 60 M 31 40 H 71 '
                ]
              },
              text: `No. of cubes = ?0 
        6`
            }
          ]
        },

        {
          list: [
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 61 60 V 20 H 41 V 60 H 81 V 40 H 41 ',
                  'M 189 30 H 229 V 50 H 189 Z M 209 30 V 50 ',
                  'M 143 20 L 143 60 L 123 60 L 123 20 Z M 143 40 L 123 40 '
                ]
              },
              text: `No. of cubes = ?0 
        3`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 202 30 H 242 V 50 H 202 Z M 222 50 V 10 H 242 V 30 M 202 50 V 70 H 222 V 50 ',
                  'M 31 30 H 71 V 50 H 31 Z M 51 30 V 50 ',
                  'M 105 30 H 165 V 50 H 105 Z M 125 30 V 50 M 145 30 V 50 '
                ]
              },
              text: `No. of cubes = ?0 
       4`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 188 40 H 248 V 60 H 188 Z M 208 60 V 20 H 228 V 60 ',
                  'M 115 30 H 155 V 50 H 115 Z M 135 30 V 50 ',
                  'M 25 30 H 85 V 50 H 25 Z M 45 30 V 50 M 65 30 V 50 '
                ]
              },
              text: `No. of cubes = ?0 
        4`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 184 20 H 244 V 60 H 184 Z M 204 20 V 60 M 224 20 V 60 M 184 40 H 244 ',
                  'M 111 20 H 151 V 60 H 111 Z M 131 20 V 60 M 111 40 H 151 ',
                  'M 20 20 H 40 V 40 H 80 V 60 H 20 V 20 M 20 40 H 40 V 60 M 60 40 V 60'
                ]
              },
              text: `No. of cubes = ?0 
        8`
            },

            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 20 20 H 80 V 60 H 20 Z M 40 20 V 60 M 60 20 V 60 M 20 40 H 80 ',
                  'M 102 40 H 162 V 60 H 102 Z M 122 60 V 20 H 142 V 60 ',
                  'M 190 9 H 250 V 69 H 190 Z M 210 9 V 69 M 230 9 V 69 M 190 29 H 250 M 190 49 H 250 '
                ]
              },
              text: `No. of cubes = ?0 
        12`
            }
          ]
        },

        {
          list: [
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 28 20 H 68 V 60 H 28 Z M 48 20 V 60 M 28 40 H 68 ',
                  'M 104 20 H 164 V 60 H 104 Z M 124 20 V 60 M 144 20 V 60 M 104 40 H 164 ',
                  'M 239 10 L 239 70 L 199 70 L 199 10 Z M 239 30 L 199 30 M 239 50 L 199 50 M 219 10 L 219 70 '
                ]
              },
              text: `No. of cubes = ?0 
       12`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 55 60 V 20 H 75 V 60 H 35 V 40 H 75 ',
                  'M 131 60 V 20 H 151 V 60 H 111 V 40 H 151 ',
                  'M 210 20 V 60 H 190 V 20 H 230 V 40 H 190 '
                ]
              },
              text: `No. of cubes = ?0 
        4`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 18 10 H 78 V 70 H 18 Z M 38 10 V 70 M 58 10 V 70 M 18 30 H 78 M 18 50 H 78 ',
                  'M 102 10 H 122 V 50 H 162 V 70 H 102 V 10 M 102 30 H 122 M 102 50 H 122 V 70 M 142 50 V 70 M 122 30 H 142 V 50 ',
                  'M 186 10 H 246 V 70 H 186 Z M 206 10 V 70 M 226 10 V 70 M 186 30 H 246 M 186 50 H 246 '
                ]
              },
              text: `No. of cubes = ?0 
        18`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 33 30 H 53 V 50 H 33 Z ',
                  'M 101 30 H 161 V 50 H 101 Z M 121 30 V 50 M 141 30 V 50 ',
                  'M 224 10 L 224 70 L 204 70 L 204 10 Z M 224 30 L 204 30 M 224 50 L 204 50 '
                ]
              },
              text: `No. of cubes = ?0 
        3`
            },
            {
              svg: {
                width: 270,
                height: 80,
                paths: [
                  'M 13 20 H 73 V 60 H 13 Z M 33 20 V 60 M 53 20 V 60 M 13 40 H 73 ',
                  'M 104 20 H 164 V 60 H 104 Z M 124 20 V 60 M 144 20 V 60 M 104 40 H 164 ',
                  'M 197 40 H 257 V 60 H 197 Z M 237 60 V 20 H 257 V 40 M 197 60 V 80 H 217 V 40 '
                ]
              },
              text: `No. of cubes = ?0 
        10`
            }
          ]
        }
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      lockAfter: 2,
      commonData: {
        title: 'Find the right option.',
        fontSize: '1.1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          questions: [
            {
              qText: `The number of vertices in a cube is _____.`,
              options: `8, 12, 6, 4`
            },
            {
              qText: `The number of edges in a cube is _____.`,
              options: `12, 8, 6, 4`
            },
            {
              qText: `The number of faces in a cube is _____.`,
              options: `6, 12, 8, 4`
            },
            {
              qText: `The number of vertices, faces and edges of the below solid shape are respectively _____.`, //img44
              options: `4, 4, 6
                3, 3, 3,
                4, 6, 4,
                8, 4, 6`,
              qImg: {
                width: 150,
                height: 90,
                paths: [
                  { d: 'M 54 60 L 102 84 L 6 84 Z ', fill: '#B0BEC5' },
                  'M 6 84 L 58 3 L 102 84 ',
                  'M 58 3 L 54 60'
                ],
                texts: []
              }
            },
            {
              qText: `The number of vertices, faces and edges of the below solid shape are respectively _____.`, //img45
              options: `9, 9, 16
                4, 3, 12
                6, 6, 6
                8, 8, 8`,
              qImg: {
                width: 150,
                height: 115,
                paths: [
                  'M 14 93 L 91 92 L 120 109 L 28 109 Z ',
                  'M 13 42 L 90 41 L 119 58 L 27 58 Z ',
                  'M 13 41 L 14 93 M 27 58 L 28 109 M 90 41 L 91 92 M 119 58 L 120 109 M 74 3 L 13 42 M 74 3 L 27 58 M 74 3 L 90 41 M 74 3 L 119 58 '
                ],
                texts: []
              }
            }
          ]
        },
        {
          questions: [
            {
              qText: `Two cubes of edge length 2 cm are placed side by side. The length of the resulting cuboid is ____.`,
              options: `4 cm, 2 cm, 8 cm, 1 cm`
            },
            {
              qText: `What cross-section do you get when you cut a die horizontally?`,
              options: `Square, Rectangle, Triangle, Circle`
            },
            {
              qText: `What cross-section do you get when you cut a brick vertically?`,
              options: `Rectangle, Square, Triangle, Circle`
            },
            {
              qText: `The shadow of a cube when seen under an overhead lamp is _____.`,
              options: `Square, Rectangle, Triangle, Circle`
            },
            {
              qText: `What cross-section do you get when you give a horizontal cut to an ice-cream cone?`,
              options: `Circle, Triangle, Square, Rectangle`
            }
          ]
        }
      ]
    }
  ]
};
