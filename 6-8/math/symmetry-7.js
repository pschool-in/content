export default {
  label: 'Symmetry - 7',
  id: 'symmetry-7',
  list: [
    {
      type: 'numberInput',
      id: 'lines-symmetry',
      label: 'Lines of Symmetry',
      commonData: {
        title: 'Find the number of lines of symmetry in the below figure.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 100 63 L 131 118  L 68 117   L 100 64 ',
                    fill: '#4fa7f7'
                  },
                  'M 83 91 C 32 72 56 20 100 20 C 147 25 159 69 115 90 M 116 89 C 161 61 192 104 169 140 C 141 178 96 166 100 117 M 100 119 C 102 168 48 178 30 140 C 11 96 44 63 83 92 '
                ],
                ansPaths: [
                  'M 23 57 L 189 152 M 99 171 L 101 5 M 165 60 L 11 151 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
  3`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  { d: 'M 20 20 H 180 V 180 H 20 Z', fill: '#4fa7f7' },
                  {
                    d: 'M 20 20 C 63 20 98 54 100 100 C 100 142 64 178 20 180 Z ',
                    fill: '#ffffff'
                  },
                  {
                    d: 'M 181 20 C 137 20 102 54 101 100 C 101 142 136 178 181 180 Z ',
                    fill: '#ffffff'
                  }
                ],
                ansPaths: ['M 100 7 L 100 202 M 8 99 L 204 99']
              },
              text: `No. of lines of symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 100 20 L 169 140 L 30 139 L 100 20 ',
                    fill: '#ffffff'
                  },
                  {
                    d: 'M 64 80 Q 101 100 133 79 Q 99 100 101 139 Q 99 99 65 81 ',
                    fill: '#4fa7f7'
                  }
                ],
                ansPaths: [
                  'M 23 57 L 189 152 M 101 172 L 100 7 M 165 60 L 11 151 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
  3`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 H 180 V 180 H 20 Z',
                  {
                    d: 'M 20 100 Q 35 35 100 20 Q 104 94 180 100 Q 165 165 100 180 Q 96 106 20 100 ',
                    fill: '#4fa7f7'
                  }
                ],
                ansPaths: ['M 188 13 L 13 186 M 14 13 L 189 188 ']
              },
              text: `No. of lines of symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 H 180 V 180 H 20 Z',
                  {
                    d: 'M 179 20 Q 132 29 99 59 Q 128 73 141 100 Q 172 71 180 20  M 180 179 Q 171 132 141 99 Q 127 128 100 141 Q 129 172 180 180  M 21 180 Q 68 171 101 141 Q 72 127 59 100 Q 28 129 20 180  M 19 21 Q 29 68 59 101 Q 73 72 99 59 Q 70 28 19 20 ',
                    fill: '#4fa7f7'
                  },
                  {
                    d: 'M 99 59 Q 127 72 141 100 Q 128 127 100 141 Q 73 128 59 100 Q 72 73 99 59 ',
                    fill: '#4fa7f7'
                  }
                ],
                ansPaths: [
                  'M 11 13 L 189 189 M 100 197 L 99 8 M 192 10 L 9 191 M 7 98 L 197 102 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
 4`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 178 100 C 178 144 143 179 98 180 C 55 180 20 145 20 100 ',
                    fill: '#4fa7f7'
                  },
                  {
                    d: 'M 20 100 L 20 21 C 69 20 98 66 99 100 Z ',
                    fill: '#4fa7f7'
                  },
                  {
                    d: 'M 178 100 L 178 21 C 128 20 99 66 99 100 Z ',
                    fill: '#4fa7f7'
                  }
                ],
                ansPaths: ['M 99 13 L 99 209 ']
              },
              text: `No. of lines of symmetry = ?0 
 1`
            }
          ]
        },
        {
          list: [
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  { d: 'M 60 60 H 140 V 140 H 60 Z', fill: '#4fa7f7' },
                  'M 140 100 C 161 100 179 117 180 140 C 180 161 162 180 140 180 C 118 180 100 162 100 140 M 100 140 C 100 161 83 179 60 180 C 39 180 20 162 20 140 C 20 118 38 100 60 100 M 60 100 C 39 100 20 83 19 60 C 19 39 37 20 59 20 C 81 20 99 38 100 60 M 100 59 C 99 39 116 21 140 19 C 161 19 180 37 180 59 C 180 81 162 99 140 100 '
                ],
                ansPaths: [
                  'M 11 13 L 189 189 M 100 197 L 100 8 M 192 10 L 9 191 M 9 99 L 197 102 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
  4`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 80 66 Q 79 43 99 30 Q 120 42 119 66 Q 143 55 160 65 Q 157 89 139 99 Q 161 114 160 135 Q 141 146 119 134 Q 119 157 100 169 Q 82 160 80 135 Q 60 145 39 135 Q 41 109 60 100 Q 41 88 39 66 Q 60 54 80 66 ',
                    fill: '#4fa7f7'
                  },
                  'M 141 60 C 163 60 180 78 181 100 C 181 122 163 139 141 140 C 119 140 101 122 100 100 C 99 78 117 61 141 60  M 59 140 C 37 140 20 122 19 100 C 18 78 36 61 58 60 C 81 60 99 78 100 100 C 101 122 83 139 59 140  M 114 155 C 103 174 79 180 59 170 C 40 159 34 135 44 115 C 55 96 80 89 100 100 C 119 110 125 134 114 155 M 85 44 C 96 25 120 19 140 29 C 160 39 165 64 155 83 C 144 103 119 110 100 100 C 80 89 74 65 85 44  M 44 84 C 33 65 40 41 59 29 C 78 18 102 25 114 44 C 125 63 118 88 100 100 C 81 111 57 104 44 84 M 155 115 C 166 134 159 158 140 170 C 121 182 98 174 86 156 C 74 136 81 111 100 100 C 118 88 142 95 155 115 '
                ],
                ansPaths: [
                  'M 51 15 L 153 190 M 100 197 L 100 8 M 149 18 L 40 202 M 11 99 L 197 99 M 183 53 L 16 147 M 21 53 L 183 151 '
                ],
                texts: []
              },
              text: `No. of lines of symmetry = ?0 
  6`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 100 20 C 149 20 179 57 180 100 C 180 149 143 179 100 180 C 51 180 21 143 20 100 C 19 51 56 21 99 20 ',
                    fill: '#4fa7f7'
                  },
                  {
                    d: 'M 79 72 L 106 21 L 123 72 L 176 79 L 134 114 L 142 169 L 99 138 L 50 165 L 65 113 L 24 72 L 79 72 ',
                    fill: '#ffffff'
                  }
                ],
                ansPaths: [
                  'M 45 21 L 153 185 M 95 197 L 107 5 M 162 23 L 41 177 M 10 129 L 195 73 M 189 133 L 7 66 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
 5`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 52 33 L 149 33 L 178 125 L 99 183 L 20 125 L 51 32 ',
                    fill: '#4fa7f7'
                  },
                  {
                    d: 'M 99 59 C 120 59 137 76 138 97 C 138 118 121 135 99 136 C 77 136 60 119 59 97 C 58 77 76 60 99 59 ',
                    fill: '#ffffff'
                  }
                ],
                ansPaths: [
                  'M 40 18 L 160 184 M 98 205 L 103 17 M 155 25 L 41 177 M 8 128 L 195 73 M 193 129 L 7 74'
                ]
              },
              text: `No. of lines of symmetry = ?0 
  5`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  {
                    d: 'M 100 100 C 73 -20 127 -20 100 100  M 100 100 C 165 -3 203 34 100 100  M 100 100 C 220 72 220 126 100 100  M 100 100 C 203 165 165 203 100 100  M 100 100 C 127 220 73 220 100 100  M 100 100 C 34 203 -3 165 100 100  M 100 100 C -20 127 -20 73 100 100  M 100 100 C -3 34 34 -3 100 100 ',
                    fill: '#4fa7f7'
                  }
                ],
                ansPaths: ['M 100 1 L 100 204 M 62 183 L 141 13 ']
              },
              text: `No. of lines of symmetry = ?0 
8`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 L 101 62 L 100 100 L 140 60 M 138 101 L 180 60  M 180 140 L 180 180 L 140 180 L 140 140 L 180 140 L 138 101 L 100 100 L 140 140 M 99 138 L 140 180  M 60 180 L 20 180 L 20 140 L 60 140 L 60 180 L 99 138 L 100 100 L 60 140 M 62 99 L 20 140  M 19 60 L 19 20 L 59 20 L 59 60 L 19 60 L 62 99 L 100 100 L 59 60 M 101 62 L 59 20 '
                ],
                ansPaths: [
                  'M 11 13 L 189 189 M 100 197 L 100 8 M 192 10 L 9 191 M 9 99 L 197 102 '
                ]
              },
              text: `No. of lines of symmetry = ?0 
4`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'shapes-symmetry',
      label: 'Shapes & Symmetry',
      data: {
        title:
          'State the number of lines of symmetry for the following figures:',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1rem',
        list: [
          `An equilateral triangle = ?0
          An isosceles triangle = ?1
          A scalene triangle = ?2
          A square = ?3
          A rectangle = ?4
          3, 1, 0, 4, 2`,

          `A rhombus = ?0
          A parallelogram = ?1
          A quadrilateral = ?2
          A regular hexagon = ?3
          A regular polygon = ?4
          2, 0, 0, 6, 5`
        ]
      }
    },
    {
      id: 'rot-sym',
      label: 'Order of Rotational Symmetry',
      type: 'classifySentence',
      data: {
        title: 'What is the order of rotational symmetry for the below figure?',
        imageType: 'svg',
        types: [
          {
            name: '1',
            list: [
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 100 L 140 100 L 140 140 L 100 140 L 100 100 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              }
            ]
          },
          {
            name: '2',
            list: [
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 60 L 100 60 L 100 100 L 60 100 L 60 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 100 L 140 100 L 140 140 L 100 140 L 100 100 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 100 20 L 140 20 L 140 60 L 100 60 L 100 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 140 L 100 140 L 100 180 L 60 180 L 60 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 20 L 100 20 L 100 60 L 60 60 L 60 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 140 L 140 140 L 140 180 L 100 180 L 100 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              }
            ]
          },
          {
            name: '4',
            list: [
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 100 60 L 140 60 L 140 100 L 100 100 L 100 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 100 L 100 100 L 100 140 L 60 140 L 60 100 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 60 L 100 60 L 100 100 L 60 100 L 60 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 100 L 140 100 L 140 140 L 100 140 L 100 100 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 100 20 L 140 20 L 140 60 L 100 60 L 100 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 140 L 100 140 L 100 180 L 60 180 L 60 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 60 L 60 60 L 60 100 L 20 100 L 20 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 100 L 180 100 L 180 140 L 140 140 L 140 100 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 100 60 L 140 60 L 140 100 L 100 100 L 100 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 100 L 100 100 L 100 140 L 60 140 L 60 100 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 60 L 100 60 L 100 100 L 60 100 L 60 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 100 L 140 100 L 140 140 L 100 140 L 100 100 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              },
              {
                type: 'svg',
                width: 200,
                height: 200,
                paths: [
                  'M 20 20 L 180 20 L 180 180 L 20 180 Z M 20 60 L 180 60 M 20 100 L 180 100 M 20 140 L 180 140 M 60 20 L 60 180 M 100 20 L 100 180 M 140 20 L 140 180',
                  {
                    d: 'M 140 60 L 180 60 L 180 100 L 140 100 L 140 60 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 20 L 180 20 L 180 60 L 140 60 L 140 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 100 L 60 100 L 60 140 L 20 140 L 20 100 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 140 L 60 140 L 60 180 L 20 180 L 20 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 60 20 L 100 20 L 100 60 L 60 60 L 60 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 20 20 L 60 20 L 60 60 L 20 60 L 20 20 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 100 140 L 140 140 L 140 180 L 100 180 L 100 140 ',
                    fill: '#B0BEC5'
                  },
                  {
                    d: 'M 140 140 L 180 140 L 180 180 L 140 180 L 140 140 ',
                    fill: '#B0BEC5'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'order-rot-sym',
      label: 'Answer the following',
      commonData: {
        title: 'Find the order of rotational symmetry for the below figure.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 98 20 C 142 20 176 54 178 99 C 178 143 144 178 98 180 C 55 180 20 145 20 99 C 18 56 52 21 98 20 ',
                  'M 100 20 L 100 180 M 20 100 L 180 100 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  4`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 101 10 L 183 151 L 19 151 Z '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  3`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 100 20 L 100 180 H 115 V 165 H 100 M 100 20 H 115 V 35 H 100'
                ]
              },
              text: `Order of rotational symmetry = ?0 
  1`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 25 100 L 175 100 M 25 20 V 180 M 175 25 V 180'
                ]
              },
              text: `Order of rotational symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 98 20 C 142 20 176 54 178 99 C 178 143 144 178 98 180 C 55 180 20 145 20 99 C 18 56 52 21 98 20 ',
                  'M 100 100 L 28 137 M 100 100 L 171 130 M 100 100 L 100 21 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  3`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 95 95 L 105 105 M 105 95 L 95 105 ',
                  'M 20 100 H 180 C 178 116 113 119 102 101 C 79 82 21 79 20 101 ',
                  'M 100 19 L 100 179 C 84 177 81 112 99 101 C 118 78 121 20 99 19 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  4`
            }
          ]
        },
        {
          list: [
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 100 92 L 100 107 M 107 100 L 92 100 ',
                  'M 30 30 L 170 170 L 154 189 L 153 152 M 30 30 L 49 10 L 47 47 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 100 92 L 100 107 M 107 100 L 92 100 ',
                  'M 43 18 L 156 181 ',
                  'M 157 18 L 44 181 ',
                  'M 87 83 Q 100 76 111 84 '
                ],
                texts: [{ str: '80°', x: 89, y: 60, width: 24, height: 20 }]
              },
              text: `Order of rotational symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 103 94 L 98 107 M 107 103 L 94 98 ',
                  'M 20 100 H 180 L 139 135 L 100 100 L 59 65 L 20 101 ',
                  'M 100 20 L 100 180 L 65 139 L 100 100 L 135 59 L 99 20 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  4`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 105 95 L 95 105 M 105 105 L 95 95 ',
                  'M 20 75 H 180 V 125 H 20 Z',
                  'M 125 20 L 125 180 L 75 180 L 75 20 Z '
                ]
              },
              text: `Order of rotational symmetry = ?0 
  2`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 105 95 L 95 105 M 105 105 L 95 95 ',
                  'M 103 9 L 183 72 L 150 169 L 51 166 L 23 68 L 103 9 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
5`
            },
            {
              svg: {
                width: 200,
                height: 200,
                paths: [
                  'M 105 95 L 95 105 M 105 105 L 95 95 ',
                  'M 77 69 L 100 20 L 123 69 M 122 68 L 176 75 L 136 112  M 136 111 L 147 164 L 99 138  M 100 138 L 52 164 L 63 111  M 63 112 L 23 75 L 77 68 '
                ]
              },
              text: `Order of rotational symmetry = ?0 
6`
            }
          ]
        }
      ]
    },
    {
      label: 'Rotate the figure (4 x 4)',
      type: 'numberTable',
      id: 'rot-4',
      commonData: {
        start: 1,
        step: 1,
        rows: 4,
        columns: 4,
        hideText: true,
        title: 'If the below shape is rotated $placeHolder, create the shape.'
      },
      data: [
        {
          placeHolder: '90° clockwise',
          quesArr: [1, 2, 3, 4],
          answer: [4, 8, 12, 16]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [1, 6, 11, 16],
          answer: [4, 7, 10, 13]
        },
        {
          placeHolder: '180° anti-clockwise',
          quesArr: [1, 6, 11, 16],
          answer: [1, 6, 11, 16]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [3, 5, 12, 14],
          answer: [3, 5, 12, 14]
        },
        {
          placeHolder: '90° clockwise',
          quesArr: [2, 4, 5, 7, 10, 12, 13, 15],
          answer: [1, 3, 6, 8, 9, 11, 14, 16]
        },
        {
          placeHolder: '90° clockwise',
          quesArr: [2, 6, 10, 11],
          answer: [6, 7, 8, 10]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [7, 10, 11, 12, 15],
          answer: [3, 6, 7, 8, 11]
        },
        {
          placeHolder: '270° clockwise',
          quesArr: [2, 6, 7, 8, 10],
          answer: [2, 6, 9, 10, 11]
        }
      ]
    },
    {
      label: 'Rotate the figure (6 x 6)',
      type: 'numberTable',
      id: 'rot-6',
      commonData: {
        start: 1,
        step: 1,
        rows: 6,
        columns: 6,
        title:
          'If the below shape is rotated $placeHolder, what do we get? Click the cells to color.',
        hideText: true
      },
      data: [
        {
          placeHolder: '90° clockwise',
          quesArr: [9, 15, 16, 22],
          answer: [16, 17, 21, 22]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [3, 9, 15, 16, 17, 23, 29, 35],
          answer: [9, 10, 11, 12, 15, 21, 20, 19]
        },
        {
          placeHolder: '90° clockwise',
          quesArr: [9, 10, 11, 15, 21, 22, 23, 29, 33, 34, 35],
          answer: [13, 15, 16, 17, 19, 21, 23, 25, 26, 27, 29]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [14, 15, 16, 17, 23, 29],
          answer: [9, 10, 11, 15, 21, 27]
        },
        {
          placeHolder: '90° clockwise',
          quesArr: [8, 9, 10, 11, 14, 17, 20, 21, 22, 23],
          answer: [9, 10, 11, 15, 17, 21, 23, 27, 28, 29]
        },
        {
          placeHolder: '270° clockwise',
          quesArr: [8, 9, 10, 11, 12, 16, 22, 28],
          answer: [2, 8, 14, 15, 16, 17, 20, 26]
        },
        {
          placeHolder: '270° anti-clockwise',
          quesArr: [8, 11, 14, 17, 20, 23, 26, 27, 28, 29],
          answer: [8, 9, 10, 11, 14, 20, 26, 27, 28, 29]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [10, 20, 21, 33, 34, 35],
          answer: [12, 14, 18, 22, 24, 28]
        },
        {
          placeHolder: '90° clockwise',
          quesArr: [8, 11, 20, 21, 22, 28],
          answer: [9, 11, 15, 20, 21, 29]
        },
        {
          placeHolder: '90° anti-clockwise',
          quesArr: [8, 9, 10, 11, 14, 17, 20, 21, 22, 23, 26, 32],
          answer: [8, 9, 10, 14, 16, 20, 22, 26, 27, 28, 29, 30]
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
              qText:
                'How many lines of symmetry are there in an equilateral triangle?',
              options: `3, 1, 2, 4`
            },
            {
              qText: 'How many lines of symmetry are there in a square?',
              options: `4, 3, 1, 2`
            },
            {
              qText: 'How many lines of symmetry are there in a rectangle?',
              options: `2, 3, 1, 4`
            },
            {
              qText:
                'How many lines of symmetry are there in a regular pentagon?',
              options: `5, 3, 1, 0`
            },
            {
              qText:
                'How many lines of symmetry are there in a regular hexagon?',
              options: `6, 3, 2, 4`
            }
          ]
        },
        {
          questions: [
            {
              qText: `How many lines of symmetry are there in the shape 'T' ?`,
              options: `1, 0, 2, 4`
            },
            {
              qText: `How many lines of symmetry are there in the below figure ?`, //img31
              options: `1, 2, 3, 4`,
              qImg: {
                width: 150,
                height: 130,
                paths: [
                  'M 10 41 L 9 122 L 92 122 L 92 60 L 130 60 L 130 7 L 75 7 L 75 41 Z '
                ]
              }
            },
            {
              qText: `How many lines of symmetry are there in the below figure ?`, //img32
              options: `1, 2, 3, 4`,
              qImg: {
                width: 150,
                height: 90,
                paths: [
                  'M 77 32 L 137 32 L 137 53 L 78 52 L 77 83 L 7 39 L 78 2 Z '
                ],
                texts: []
              }
            },
            {
              qText: `How many lines of symmetry are there in the below figure ?`, //img33
              options: `1, 2, 3, 4`,
              qImg: {
                height: 70,
                width: 150,
                paths: [
                  'M 6 65 L 6 4 L 42 26 L 81 4 L 81 64 L 66 64 L 66 29 L 42 41 L 20 29 L 20 65 L 6 65 '
                ],
                texts: []
              }
            },
            {
              qText: `How many lines of symmetry are there in the below figure ?`, //img34
              options: `1, 2, 3, 4`,
              qImg: {
                width: 100,
                height: 70,
                paths: [
                  'M 7 68 L 32 5 L 43 5 L 65 68 L 53 68 L 46 44 L 28 44 L 19 68 Z ',
                  'M 37 11 L 30 33 L 44 33 Z'
                ],
                texts: []
              }
            }
          ]
        },
        {
          questions: [
            {
              qText: `How many lines of symmetry are there in the below figure ?`, //img35
              options: `1, 2, 3, 4`,
              qImg: {
                width: 100,
                height: 80,
                paths: ['M 40 4 L 75 60 L 40 76 L 5 60 Z ']
              }
            },
            {
              qText: `How many lines of symmetry are there in a circle ?`,
              options: `Too many, 0, 4, 2`
            },
            {
              qText: `How many lines of symmetry are there in an isosceles triangle?`,
              options: `1, 2, 3, 4`
            },
            {
              qText: `How many lines of symmetry are there in a scalene triangle?`,
              options: `0, 1, 2, 3`
            },
            {
              qText: `How many lines of symmetry are there in a rhombus?`,
              options: `2, 4, 0, Too many`
            }
          ]
        },
        {
          questions: [
            {
              qText: `How many lines of symmetry are there in a parallelogram?`,
              options: `0, 1, 2, 4`
            },
            {
              qText: `How many lines of symmetry are there in a quadrilateral?`,
              options: `0, 1, 2, 4`
            },
            {
              qText: `The order of rotational symmetry of an equilateral triangle is _____.`,
              options: `3, 1, 2, 4`
            },
            {
              qText: `The order of rotational symmetry of a square is _____.`,
              options: `4, 3, 1, 2`
            },
            {
              qText: `What is the order of the rotational symmetry of the following figure?`, //img37
              options: `4, 3, 1, 2`,
              qImg: {
                height: 90,
                width: 100,
                paths: [
                  'M 11 53 L 84 53 C 77 63 54 62 49 53 C 41 44 20 43 11 53 ',
                  'M 49 14 L 49 87 C 39 80 40 57 49 52 C 58 44 59 23 49 14 '
                ]
              }
            }
          ]
        }
      ]
    }
  ]
};
