export default {
  label: 'Lines and Angles',
  id: 'angles',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Line',
        text: [
          `A line segment has two end points. If we extend the two end points in either direction endlessly, we get a line. Thus, we can say that a line has no end points.
          An angle is formed when lines or line segments meet.
          # Complementary Angles
          When the sum of the measures of two angles is 90°, the angles are called complementary angles.
`
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Find the right option',
      type: 'mcq',
      data: {
        title: 'Find the right option.',
        questions: [
          {
            qText: 'Can two acute angles be complement to each other?',
            options: `Yes, No, Always`
          },
          {
            qText: 'Can two obtuse angles be complement to each other?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two right angles be complement to each other?',
            options: `No, Yes, Always`
          },
          {
            qText: `If you make one full rotation about the point you are standing, you have covered ______.`,
            options: `360°, 180°, 90°, 270°`
          },
          {
            qText: `If you make an 'about turn', you have covered ______.`,
            options: `180°, 90°, 360°, 270°`
          },
          {
            qText: `You are facing East. If you turn your body so that you face North, you have covered ______.`,
            options: ` 90°, 180°, 360°, 270°`
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Find the Complement Angle',
      id: 'angle-90',
      commonData: {
        qText: 'Find the Complement Angle.',
        units: 'degree',
        probType: 'angle90'
      },
      data: [
        {
          list: [30, 45, 50, 40, 25]
        },
        {
          list: [60, 75, 55, 65, 20]
        },
        {
          list: [46, 32, 58, 28, 62]
        }
      ]
    },
    {
      type: 'geometry',
      label: 'Angle',
      id: 'make-angle',
      data: [
        `Make an angle of 60 degree. | angle | 60
Make an angle of 25 degree. | angle | 25
Make an angle of 45 degree. | angle | 45
Make an angle of 30 degree. | angle | 30
Make an angle of 55 degree. | angle | 55`,

        `Make an angle of 100 degree. | angle | 100
Make an angle of 180 degree. | angle | 180
Make an angle of 135 degree. | angle | 135
Make an angle of 150 degree. | angle | 150
Make an angle of 120 degree. | angle | 120`,

        `Make an angle of 200 degree. | angle | 200
Make an angle of 250 degree. | angle | 250
Make an angle of 225 degree. | angle | 225
Make an angle of 190 degree. | angle | 190
Make an angle of 260 degree. | angle | 260`,

        `Make an angle of 270 degree. | angle | 270
Make an angle of 315 degree. | angle | 315
Make an angle of 300 degree. | angle | 300
Make an angle of 350 degree. | angle | 350
Make an angle of 330 degree. | angle | 330`,

        `Make an angle of 50 degree. | angle | 50
Make an angle of 140 degree. | angle | 140
Make an angle of 185 degree. | angle | 185
Make an angle of 310 degree. | angle | 310
Make an angle of 20 degree. | angle | 20`,

        `Make an angle of 40 degree. | angle | 40
Make an angle of 130 degree. | angle | 130
Make an angle of 210 degree. | angle | 210
Make an angle of 340 degree. | angle | 340
Make an angle of 205 degree. | angle | 205`
      ]
    },
    {
      label: 'Supplementary & Adjacent Angles',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Supplementary Angles',
        text: [
          `When the sum of the measures of two angles is 180°, the angles are called Supplementary angles.
          #Adjacent Angles
          They have a common vertex, have a common arm, and the non-common arms are on either side of the common arm.
          #Vertically Opposite Angles
          When two lines intersect, the vertically opposite angles so formed are equal.`
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Find the right option.',
      type: 'mcq',
      data: {
        title: 'Find the right answer.',
        questions: [
          {
            qText: 'Can two obtuse angles be supplementary?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two acute angles be supplementary?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two right angles be supplementary?',
            options: `Always, No, Yes`
          },
          {
            qText: 'Can an acute angle and obtuse angle be supplementary?',
            options: `Yes, Always, No`
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Missing angle (180 degree)',
      id: 'angle-180',
      commonData: {
        qText: 'Find the missing angle.',
        units: 'degree',
        probType: 'angle180'
      },
      data: [
        {
          list: [30, 150, 45, 135, 90]
        },
        {
          list: [60, 120, 90, 130, 25]
        },
        {
          list: [100, 65, 140, 80, 110]
        }
      ]
    },
    {
      type: 'geometryType',
      label: 'Missing angle (360 degree)',
      id: 'angle-360',
      commonData: {
        qText: 'Find the missing angle.',
        units: 'degree',
        probType: 'angle360'
      },
      data: [
        {
          list: [90, 180, 270, 135, 300]
        },
        {
          list: [150, 45, 225, 120, 200]
        },
        {
          list: [280, 210, 130, 190, 160]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'add',
      label: 'Find 𝑥',
      data: {
        title: 'Find 𝑥',
        type: 'word-problem',
        isSentence: true,
        answerBox: false,
        inputType: 'small',
        list: [
          /*
          {
            svg: {
              width: 200,
              height: 130,
              paths: [
                'M 23 95 L 193 95 L 92 95 L 161 37 M 105 83 C 97 76 78 83 79 95 M 113 79 Q 124 84 117 95 '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑥', x: 122, y: 70 },
                { str: '2𝑥', x: 62, y: 60 }
              ]
            },
            text: `As 𝑥 and 2𝑥 are supplementary angles,
            𝑥 + 2𝑥 = ?0 °
            ?1 𝑥 = ?2 °
            𝑥 = ?3 °
            180, 3, 180, 60`
          },
          {
            svg: {
              width: 200,
              height: 130,
              paths: [
                'M 93 20 L 92 95 L 193 95 L 92 95 L 178 46 M 108 85 Q 107 75 92 78 M 117 81 Q 123 90 117 95'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑥', x: 125, y: 72 },
                { str: '2𝑥', x: 97, y: 57 }
              ]
            },
            text: `As 𝑥 and 2𝑥 are complementary angles,
            𝑥 + 2𝑥 = ?0 °
            ?1 𝑥 = ?2 °
            𝑥 = ?3 °
            90, 3, 90, 30`
          },
          */
          {
            svg: {
              width: 200,
              height: 150,
              paths: [
                'M 193 95 L 92 95 L 41 30 M 104 95 C 106 81 93 77 83 83 M 99 95 C 96 107 78 99 87 89 '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑥', x: 99, y: 62 },
                { str: '2𝑥', x: 72, y: 93 }
              ]
            },
            text: `In the above fig,
            𝑥 + 2𝑥 = ?0 °
            ?1 𝑥 = ?2 °
            𝑥 = ?3 °
            360, 3, 360, 120`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'opposite-angles',
      label: 'Opposite Angles',
      data: {
        title: 'In the below fig, find the missing angles.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '2rem',
        inputType: 'small',
        list: [
          /*
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 30 156 L 194 53 M 183 49 L 194 53 L 190 64 M 41 159 L 30 155 L 36 144',
                'M 37 40 L 183 166 M 184 155 L 183 166 L 172 164 M 38 51 L 38 40 L 51 42 M 101 95 Q 113 86 125 96 M 101 112 Q 113 123 122 113 M 131 93 Q 143 107 127 117'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '100°', x: 97, y: 64 },
                { str: '𝑥', x: 100, y: 112 },
                { str: '𝑦', x: 136, y: 88 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            100, 80`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 13 99 L 207 106 M 200 97 L 207 106 L 198 113 M 22 108 L 14 99 L 24 93',
                'M 37 40 L 183 166 M 184 155 L 183 166 L 172 164 M 38 51 L 38 40 L 51 42 M 101 95 C 110 86 124 90 125 103 M 95 102 C 99 113 110 119 122 113 M 135 103 Q 137 113 127 117'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '120°', x: 73, y: 107 },
                { str: '𝑥', x: 134, y: 100 },
                { str: '𝑦', x: 115, y: 65 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            60, 120`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 30 156 L 194 53 M 183 49 L 194 53 L 190 64 M 41 159 L 30 155 L 36 144',
                'M 37 40 L 183 166 M 184 155 L 183 166 L 172 164 M 38 51 L 38 40 L 51 42 M 101 95 Q 113 86 125 96 M 101 112 Q 113 123 122 113 M 131 93 Q 143 107 127 117'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '70°', x: 137, y: 91 },
                { str: '𝑥', x: 100, y: 112 },
                { str: '𝑦', x: 103, y: 63 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            110, 110`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 13 99 L 207 106 M 200 97 L 207 106 L 198 113 M 22 108 L 14 99 L 24 93',
                'M 37 40 L 183 166 M 184 155 L 183 166 L 172 164 M 38 51 L 38 40 L 51 42 M 101 95 C 110 86 124 90 125 103 M 95 102 C 99 113 110 119 122 113 M 135 103 Q 137 113 127 117'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '135°', x: 110, y: 65 },
                { str: '𝑥', x: 64, y: 76 },
                { str: '𝑦', x: 137, y: 101 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            45, 45`
          },
          */
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 229 55 L 61 206 M 71 206 L 61 206 L 62 196 M 218 54 L 229 55 L 227 66',
                `M 148 129 L 82 54 M 82 64 L 82 54 L 92 54 M 136 115 Q 150 106 160 117 M 159 129 C 158 140 145 143 138 137 Q 132 135 134 129 Q 131 122 138 118 M 157 120 Q 164 122 162 129`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '120°', x: 141, y: 139 },
                { str: '80°', x: 133, y: 83 },
                { str: '𝑥', x: 166, y: 104 },
                { str: '𝑦', x: 112, y: 126 },
                { str: '𝒵', x: 111, y: 106 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            60, 60, 40`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 219 214 L 65 49 M 65 59 L 65 49 L 75 50 M 220 203 L 219 214 L 209 212',
                `M 139 130 L 84 213 M 93 211 L 84 213 L 82 204 M 129 145 Q 118 140 122 129 M 133 122 C 141 118 146 122 146 129 L 153 129 Q 153 136 147 137 Q 141 145 134 138 M 126 129 Q 123 122 131 120`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '55°', x: 90, y: 132 },
                { str: '50°', x: 130, y: 143 },
                { str: '𝑥', x: 145, y: 99 },
                { str: '𝑦', x: 104, y: 104 },
                { str: '𝒵', x: 157, y: 124 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            105, 75, 75`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 229 55 L 61 206 M 71 206 L 61 206 L 62 196 M 218 54 L 229 55 L 227 66',
                `M 148 129 L 82 54 M 82 64 L 82 54 L 92 54 M 136 115 Q 150 106 160 117 M 159 129 C 158 140 145 143 138 137 Q 132 135 134 129 Q 131 122 138 118 M 157 120 Q 164 122 162 129`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '45°', x: 101, y: 103 },
                { str: '45°', x: 98, y: 127 },
                { str: '𝑥', x: 166, y: 104 },
                { str: '𝑦', x: 147, y: 130 },
                { str: '𝒵', x: 145, y: 85 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            45, 135, 90`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 219 214 L 65 49 M 65 59 L 65 49 L 75 50 M 220 203 L 219 214 L 209 212',
                `M 139 130 L 84 213 M 93 211 L 84 213 L 82 204 M 129 145 Q 118 140 122 129 M 133 122 C 141 118 146 122 146 129 L 153 129 Q 153 136 147 137 Q 141 145 134 138 M 126 129 Q 123 122 131 120`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '65°', x: 127, y: 140 },
                { str: '125°', x: 139, y: 97 },
                { str: '𝑥', x: 105, y: 106 },
                { str: '𝑦', x: 158, y: 123 },
                { str: '𝒵', x: 99, y: 130 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            55, 55, 60`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 229 55 L 61 206 M 71 206 L 61 206 L 62 196 M 218 54 L 229 55 L 227 66',
                `M 148 129 L 82 54 M 82 64 L 82 54 L 92 54 M 136 115 Q 150 106 160 117 M 159 129 C 158 140 145 143 138 137 Q 132 135 134 129 Q 131 122 138 118 M 157 120 Q 164 122 162 129`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '35°', x: 100, y: 104 },
                { str: '45°', x: 169, y: 105 },
                { str: '𝑥', x: 113, y: 122 },
                { str: '𝑦', x: 134, y: 85 },
                { str: '𝒵', x: 144, y: 137 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            45, 100, 135`
          },
          {
            svg: {
              width: 300,
              height: 250,
              paths: [
                'M 261 129 L 35 129 M 43 136 L 35 129 L 43 122 M 254 121 L 261 129 L 253 136',
                'M 219 214 L 65 49 M 65 59 L 65 49 L 75 50 M 220 203 L 219 214 L 209 212',
                `M 139 130 L 84 213 M 93 211 L 84 213 L 82 204 M 129 145 Q 118 140 122 129 M 133 122 C 141 118 146 122 146 129 L 153 129 Q 153 136 147 137 Q 141 145 134 138 M 126 129 Q 123 122 131 120`
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '55°', x: 92, y: 135 },
                { str: '40°', x: 85, y: 102 },
                { str: '𝑥', x: 154, y: 123 },
                { str: '𝑦', x: 131, y: 141 },
                { str: '𝒵', x: 137, y: 95 }
              ]
            },
            text: `𝑥 = ?0 ° 
            𝑦 = ?1 °
            𝒵 = ?2 °
            40, 85, 140`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'findx-parallel',
      label: 'Parallel Lines - Find 𝑥',
      data: {
        title: 'In the below fig, 𝑎 & 𝑏 are parallel lines. Find 𝑥',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '2rem',
        inputType: 'small',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 25 81 L 219 81 M 210 73 L 219 81 L 210 89 M 33 89 L 24 81 L 34 73 M 22 153 L 216 153 M 31 161 L 22 153 L 32 145 M 209 144 L 218 152 L 209 160',
                'M 48 193 L 159 34 M 147 35 L 159 34 L 159 46 M 60 192 L 48 192 L 49 180 M 139 63 Q 148 69 145 81 M 86 137 Q 95 143 92 155'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 183, y: 57 },
                { str: '𝑏', x: 178, y: 127 },
                { str: '60°', x: 144, y: 49 },
                { str: '𝑥', x: 97, y: 125 }
              ]
            },
            text: `𝑥 = ?0 ° 
            60`
          },

          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 25 81 L 219 81 M 210 73 L 219 81 L 210 89 M 33 89 L 24 81 L 34 73 M 22 153 L 216 153 M 31 161 L 22 153 L 32 145 M 209 144 L 218 152 L 209 160',
                'M 48 193 L 159 34 M 147 35 L 159 34 L 159 46 M 60 192 L 48 192 L 49 180 M 131 74 C 126 65 110 72 115 80 M 82 144 C 74 136 60 143 63 153'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 183, y: 57 },
                { str: '𝑏', x: 178, y: 127 },
                { str: '115°', x: 52, y: 116 },
                { str: '𝑥', x: 105, y: 46 }
              ]
            },
            text: `𝑥 = ?0 ° 
            115`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 25 81 L 219 81 M 210 73 L 219 81 L 210 89 M 33 89 L 24 81 L 34 73 M 22 153 L 216 153 M 31 161 L 22 153 L 32 145 M 209 144 L 218 152 L 209 160',
                'M 48 193 L 159 34 M 147 35 L 159 34 L 159 46 M 60 192 L 48 192 L 49 180 M 133 71 C 123 66 114 69 111 81 M 86 137 Q 95 143 92 155'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 183, y: 57 },
                { str: '𝑏', x: 178, y: 127 },
                { str: '60°', x: 94, y: 123 },
                { str: '𝑥', x: 98, y: 49 }
              ]
            },
            text: `𝑥 = ?0 ° 
            120`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 25 81 L 219 81 M 210 73 L 219 81 L 210 89 M 33 89 L 24 81 L 34 73 M 22 153 L 216 153 M 31 161 L 22 153 L 32 145 M 209 144 L 218 152 L 209 160',
                'M 48 193 L 159 34 M 147 35 L 159 34 L 159 46 M 60 192 L 48 192 L 49 180 M 135 68 Q 145 67 150 81 M 82 144 C 74 136 60 143 63 153'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 183, y: 57 },
                { str: '𝑏', x: 178, y: 127 },
                { str: '115°', x: 52, y: 116 },
                { str: '𝑥', x: 144, y: 51 }
              ]
            },
            text: `𝑥 = ?0 ° 
            65`
          },

          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 25 81 L 219 81 M 210 73 L 219 81 L 210 89 M 33 89 L 24 81 L 34 73 M 22 153 L 216 153 M 31 161 L 22 153 L 32 145 M 209 144 L 218 152 L 209 160',
                'M 48 193 L 159 34 M 147 35 L 159 34 L 159 46 M 60 192 L 48 192 L 49 180 M 138 81 Q 136 95 119 92 M 86 137 Q 95 143 92 155'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 183, y: 57 },
                { str: '𝑏', x: 178, y: 127 },
                { str: '55°', x: 94, y: 123 },
                { str: '𝑥', x: 127, y: 85 }
              ]
            },
            text: `𝑥 = ?0 ° 
            125`
          },

          {
            svg: {
              width: 250,
              height: 230,
              paths: [
                'M 70 18 L 210 153 M 209 141 L 210 153 L 198 153 M 71 30 L 70 18 L 82 19 M 18 68 L 158 203 M 19 80 L 18 68 L 31 69 M 159 191 L 160 203 L 148 203 ',
                'M 58 184 L 169 25 M 157 26 L 169 25 L 169 37 M 70 183 L 58 183 L 59 171 M 142 63 C 151 66 149 85 140 85 M 96 128 Q 87 120 82 131 '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 188, y: 113 },
                { str: '𝑏', x: 141, y: 168 },
                { str: '75°', x: 74, y: 98 },
                { str: '𝑥', x: 151, y: 57 }
              ]
            },
            text: `𝑥 = ?0 ° 
            105`
          },
          {
            svg: {
              width: 250,
              height: 230,
              paths: [
                'M 216 115 L 31 175 M 42 180 L 31 175 L 37 164 M 205 110 L 216 115 L 209 125 M 196 45 L 11 105 M 185 40 L 196 45 L 189 56 M 21 112 L 10 107 L 16 97',
                'M 209 159 L 12 30 M 13 43 L 12 30 L 25 30 M 201 144 L 209 158 L 195 161 M 74 69 Q 65 76 71 84 M 156 124 C 162 114 179 113 184 125'
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 20, y: 76 },
                { str: '𝑏', x: 56, y: 161 },
                { str: '140°', x: 157, y: 88 },
                { str: '𝑥', x: 52, y: 60 }
              ]
            },
            text: `𝑥 = ?0 ° 
            40`
          },
          {
            svg: {
              width: 250,
              height: 230,
              paths: [
                'M 70 18 L 210 153 M 209 141 L 210 153 L 198 153 M 71 30 L 70 18 L 82 19 M 18 68 L 158 203 M 19 80 L 18 68 L 31 69 M 159 191 L 160 203 L 148 203 ',
                'M 47 173 L 158 14 M 146 15 L 158 14 L 158 26 M 59 172 L 47 172 L 48 160 M 131 52 C 140 55 138 74 129 74 M 69 117 Q 59 129 70 141 '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 188, y: 113 },
                { str: '𝑏', x: 141, y: 168 },
                { str: '100°', x: 148, y: 48 },
                { str: '𝑥', x: 43, y: 118 }
              ]
            },
            text: `𝑥 = ?0 ° 
            100`
          },
          {
            svg: {
              width: 250,
              height: 230,
              paths: [
                'M 216 115 L 31 175 M 42 180 L 31 175 L 37 164 M 205 110 L 216 115 L 209 125 M 196 45 L 11 105 M 185 40 L 196 45 L 189 56 M 21 112 L 10 107 L 16 97',
                'M 209 159 L 12 30 M 13 43 L 12 30 L 25 30 M 201 144 L 209 158 L 195 161 M 75 71 C 86 64 98 63 109 73 M 156 124 Q 149 126 149 137 '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 20, y: 76 },
                { str: '𝑏', x: 56, y: 161 },
                { str: '35°', x: 112, y: 114 },
                { str: '𝑥', x: 90, y: 41 }
              ]
            },
            text: `𝑥 = ?0 ° 
            145`
          },
          {
            svg: {
              width: 250,
              height: 230,
              paths: [
                'M 70 18 L 210 153 M 209 141 L 210 153 L 198 153 M 71 30 L 70 18 L 82 19 M 18 68 L 158 203 M 19 80 L 18 68 L 31 69 M 159 191 L 160 203 L 148 203 ',
                'M 47 173 L 158 14 M 146 15 L 158 14 L 158 26 M 59 172 L 47 172 L 48 160 M 129 55 Q 119 44 111 58 M 69 117 Q 59 129 70 141  '
              ],
              props: {
                fill: 'none',
                stroke: '#0d3756',
                strokeWidth: 1
              },
              texts: [
                { str: '𝑎', x: 188, y: 113 },
                { str: '𝑏', x: 141, y: 168 },
                { str: '110°', x: 25, y: 117 },
                { str: '𝑥', x: 110, y: 24 }
              ]
            },
            text: `𝑥 = ?0 ° 
            70`
          }
        ]
      }
    }
  ]
};
