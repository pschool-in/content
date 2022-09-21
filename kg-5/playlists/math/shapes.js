export default {
  label: 'Shapes',
  id: 'shapes',
  lockAfter: 4,
  list: [
    {
      id: 'draw-shapes',
      label: 'Trace the Shapes',
      type: 'tracing',
      data: {
        type: 'custom',
        noPicker: true,
        audio: 'kg-5/shapes.mp3',
        source: [
          {
            id: 'circle',
            paths: [
              'M 150 20 C 225 20 280 75 280 150',
              'M 280 150 C 280 225 225 280 150 280 ',
              'M 150 280 C 75 280 20 225 20 150',
              'M 20 150 C 20 75 75 20 150 20'
            ],
            width: 300,
            audio: 0
          },
          {
            id: 'triangle',
            paths: [
              'M 150 20 L 20 280',
              'M 20 280 L 280 280',
              'M 280 280 L 150 20'
            ],
            width: 300,
            audio: 2
          },
          {
            id: 'rectangle',
            paths: [
              'M 20 20 L 280 20 ',
              'M 280 20 L 280 180',
              'M 280 180 L 20 180',
              'M 20 180 L 20 20'
            ],
            width: 300,
            audio: 4
          },
          {
            id: 'oval',
            paths: [
              'M 150 20 C 200 20 255 75 255 150',
              'M 255 150 C 255 225 200 280 150 280  ',
              'M 150 280 C 100 280 45 225 45 150',
              'M 45 150 C 45 75 100 20 150 20 '
            ],
            width: 300,
            audio: 6
          },
          {
            id: 'diamond',
            paths: [
              'M 150 20 L 280 150 ',
              'M 280 150 L 150 280 ',
              'M 150 280 L 20 150',
              'M  20 150 L 150 20'
            ],
            width: 300,
            audio: 8
          },
          {
            id: 'heart',
            paths: [
              'M  150 85 C 300 0 300 150 150 280',
              'M 150 280 C 0 150 0 0 150 85'
            ],
            width: 300,
            audio: 10
          },
          {
            id: 'square',
            paths: [
              'M 20 20 L 280 20',
              'M  280 20 L 280 280',
              'M 280 280 L 20 280',
              'M 20 280 L 20 20'
            ],
            width: 300,
            audio: 12
          },
          {
            id: 'parallelogram',
            paths: ['M 70 15 L 295 15 L 255 160 L 30 160 L 70 15'],
            width: 300,
            audio: 14
          },
          {
            id: 'hexagon',
            paths: [
              'M 75 20 L 225 20 L 280 150',
              'M  280 150 L 225 280 L 75 280 ',
              'M  75 280 L 20 150 L 75 20'
            ],
            width: 300,
            audio: 16
          },
          {
            id: 'pentagon',
            paths: [
              'M 150 10 L 290 140 L 244 277 ',
              'M 244 277 H 50 L 10 140 L 150 10 '
            ],
            width: 300,
            audio: 18
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Shapes',
      id: 'pick-shape',
      lockAfter: 0,
      commonData: {
        title: 'Listen to the sound and click on the shape.',
        type: 'image',
        imageType: 'svg',
        audio: 'kg-5/shapes.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: ` M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0
M 100 10 L 190 190 H 10 Z
M 10 45 H 190 V 155 H 10 Z
M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0
M 100 10 L 150 100 L 100 190 L 50 100 Z
M 98 24 C 224 -45 224 80 98 192 M 98 192 C -26 80 -26 -45 98 24 
M 10 10 H 190 V 190 H 10 Z
M 70 15 L 195 15 L 155 110 L 30 110 L 70 15
M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z`
        },
        {
          audioOffset: 18,
          text: `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z
M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160
M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50
M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150
M 87 123 L 179 125 L 150 182 L 18 181 L 87 123 M 17 182 L 110 29 L 150 182 M 87 123 L 110 29 L 179 125
M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z
M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100
M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z`
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Match Shapes',
      id: 'land-forms',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.',
        images: 'svg'
      },
      data: [
        `M 10 10 H 190 V 190 H 10 Z | Square
M 100 10 L 190 190 H 10 Z | Triangle
M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0 | Circle
M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0 | Oval
M 10 45 H 190 V 155 H 10 Z | Rectangle
M 100 10 L 150 100 L 100 190 L 50 100 Z | Diamond`,

        `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z | Pentagon
M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z | Hexagon
M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100 | Moon
M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z | Star
M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z | Arrow`,

        `M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150 | Cube
M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50 | Cone
M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160 | Cylinder
M 87 123 L 179 125 L 150 182 L 18 181 L 87 123 M 17 182 L 110 29 L 150 182 M 87 123 L 110 29 L 179 125 | Pyramid 
M 70 15 L 195 15 L 155 110 L 30 110 L 70 15 | Parallelogram
M 98 24 C 224 -45 224 80 98 192 M 98 192 C -26 80 -26 -45 98 24 | Heart`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-1',
      label: 'Find First Letter',
      lockAfter: 1,
      commonData: {
        images: 'svg'
      },
      data: [
        {
          text: `SQUARE | _QUARE
TRIANGLE | _RIANGLE
CIRCLE | _IRCLE
OVAL | _VAL
RECTANGLE | _ECTANGLE
PENTAGON | _ENTAGON
HEXAGON | _EXAGON
DIAMOND | _IAMOND`,
          svgs: [
            `M 10 10 H 190 V 190 H 10 Z`,
            `M 100 10 L 190 190 H 10 Z`,
            `M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0`,
            `M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0`,
            `M 10 45 H 190 V 155 H 10 Z`,
            `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z`,
            `M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z`,
            `M 100 10 L 150 100 L 100 190 L 50 100 Z`
          ]
        },
        {
          text: `MOON | _OON
STAR | _TAR
ARROW | _RROW
CUBE | _UBE
CONE | _ONE
CYLINDER | _YLINDER`,
          svgs: [
            'M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100',
            'M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z',
            `M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z`,
            `M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150`,
            `M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50`,
            `M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160`
          ]
        }
      ]
    },
    {
      id: 'draw-shapes-2',
      label: 'Trace the Shapes - 2',
      type: 'tracing',
      data: {
        type: 'custom',
        noPicker: true,
        audio: 'kg-5/shapes.mp3',
        source: [
          {
            id: 'cylinder',
            paths: [
              'M 40 81 C 35 9 243 1 242 85 ',
              'M 242 85 C 242 123 41 120 39 80',
              'M 39 80 L 40 251',
              'M 243 85 L 244 261',
              'M 40 251 C 45 327 243 323 244 261'
            ],
            audio: 20,
            width: 280
          },
          {
            id: 'cone',
            paths: [
              'M 38 49 C 37 -12 252 -9 253 50 ',
              'M 38 49 C 39 104 251 111 253 50 ',
              'M 38 51 L 133 259 L 252 57 '
            ],
            audio: 22,
            width: 280
          },
          {
            id: 'cube',
            paths: [
              'M 17 91 L 219 89 L 217 267 ',
              'M 217 267 L 17 265 L 17 91',
              'M 17 91 L 123 27',
              'M 219 90 L 291 30',
              'M 217 265 L 291 205',
              'M 123 27 L 293 29 L 291 205'
            ],
            audio: 24,
            width: 300
          },
          {
            id: 'pyramid',
            paths: [
              'M 30 196 L 139 25 L 265 199',
              'M 265 199 L 29 198',
              'M 29 198 L 25 114 L 138 25 '
            ],
            audio: 26,
            width: 270
          },
          {
            id: 'star-6',
            paths: [
              'M 12 210 L 114 20 L 206 210',
              'M 206 210 L 12 210',
              'M 13 75 L 207 74 L 101 265',
              'M 101 265 L 13 75'
            ],
            audio: 28,
            width: 190
          },

          {
            id: 'moon',
            paths: [
              'M 73 35 C -3 84 17 189 72 221 C 134 265 276 231 274 153',
              'M 274 153 C 167 208 63 126 73 35 '
            ],
            audio: 30,
            width: 280
          },
          {
            id: 'star',
            paths: [
              'M 30 103 L 275 101 L 53 277 ',
              'M 53 277 L 164 15 L 233 277 ',
              'M 233 277 L 31 102'
            ],
            audio: 28,
            width: 280
          },
          {
            id: 'arrow',
            paths: [
              'M 10 90 L 190 90 L 190 10 L 290 125',
              'M 290 125 L 190 240 L 190 160 L 10 160 L 10 90'
            ],
            audio: 32,
            width: 300
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-3',
      label: 'Complete the Word',
      commonData: {
        images: 'svg'
      },
      data: [
        {
          text: `SQUARE | S_____
TRIANGLE | T__A____
CIRCLE | C_____
OVAL | O___
RECTANGLE | R________
PENTAGON | P_______
HEXAGON | H______
DIAMOND | D______`,
          svgs: [
            `M 10 10 H 190 V 190 H 10 Z`,
            `M 100 10 L 190 190 H 10 Z`,
            `M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0`,
            `M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0`,
            `M 10 45 H 190 V 155 H 10 Z`,
            `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z`,
            `M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z`,
            `M 100 10 L 150 100 L 100 190 L 50 100 Z`
          ]
        },
        {
          text: `MOON | M___
STAR | S___
ARROW | A____
CUBE | C___
CONE | C___
CYLINDER | C_______`,
          svgs: [
            'M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100',
            'M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z',
            `M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z`,
            `M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150`,
            `M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50`,
            `M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160`
          ]
        }
      ]
    }
  ]
};
