export default {
  label: 'Triangle',
  id: 'triangle',
  lockAfter: 5,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Line',
        text: [
          `A triangle is a simple closed curve made of three line segments. It has three vertices, three sides and three angles.`,
          {
            type: 'svg',
            width: 250,
            height: 160,
            paths: ['M 148 38 L 31 117 L 189 116 L 148 39'],
            texts: [
              { str: 'A', x: 137, y: 13 },
              { str: 'B', x: 10, y: 110 },
              { str: 'C', x: 191, y: 110 }
            ]
          },
          {
            type: 'html',
            text: `Sides: <span class="ol">AB</span>, <span class="ol">BC</span>, <span class="ol">CA</span><br>
Angles: ∠BAC, ∠ABC, ∠BCA <br>
Vertices: A, B, C`
          },
          `Based on the sides, trianges are classified into Scalene, Isosceles & Equilateral triangles.
Based on Angles, triangles are classified into acute-angled, obtuse-angled and right-angled triangle.
# Medians of a Triangle
`,
          {
            type: 'svg',
            width: 250,
            height: 160,
            paths: [
              'M 148 38 L 31 117 L 189 116 L 148 39 L 108 116',
              'M 68 111 L 68 121 M 72 111 L 72 121 M 141 111 L 141 121 M 145 111 L 145 121'
            ],
            texts: [
              { str: 'A', x: 137, y: 13 },
              { str: 'B', x: 10, y: 110 },
              { str: 'C', x: 191, y: 110 },
              { str: 'D', x: 97, y: 113 }
            ]
          },
          {
            type: 'html',
            text: `The line segment AD, joining the mid-point of <span class="ol">BC</span> to its opposite vertex A is called a median of a triangle.<br><br>
|| represents the segments are of equal length.<br><br>
A median connects a vertex of a triangle to the mid-point of the opposite side. A triangle has 3 medians.`
          },
          `# Altitudes of a Triangle`,
          {
            type: 'svg',
            width: 250,
            height: 160,
            paths: ['M 148 38 L 31 117 L 189 116 L 148 39 L 147 116'],
            texts: [
              { str: 'A', x: 137, y: 13 },
              { str: 'B', x: 10, y: 110 },
              { str: 'C', x: 191, y: 110 },
              { str: 'L', x: 136, y: 114 }
            ]
          },
          {
            type: 'html',
            text: `The line drawn from the vertex A to the line segment BC in such a way, the length is minimum is altitude. <br><br>
In the above figure, AL is an altitude. <br><br>
∠ALB = ∠ALC = 90°`
          },
          `# Properties of Triangle
Sum of the lengths of any two sides of a triangle is always greater than the length of the third side.
`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'perimeter',
      label: 'Perimeter of a Triangle',
      data: {
        title: 'Find the perimeter of the below Triangle.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1.5rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 136 31 L 193 131 L 44 130 L 136 31',
                'M 168 76 L 159 82 M 160 85 L 171 78 M 80 83 L 89 90 M 91 88 L 82 80 M 118 123 L 117 135 M 120 135 L 122 123 '
              ],
              texts: [{ str: '5 m', x: 123, y: 129 }]
            },
            text: `Perimeter = ?0 m 
15`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 136 31 L 193 131 L 44 130 L 136 31',
                'M 168 76 L 159 82 M 160 85 L 171 78 M 80 83 L 89 90 M 91 88 L 82 80 M 118 123 L 117 135 M 120 135 L 122 123 '
              ],
              texts: [{ str: '0.2 m', x: 123, y: 129 }]
            },
            text: `Perimeter = ?0 cm 
60`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 145 18 L 201 148 L 73 149 L 145 19',
                'M 175 75 L 166 81 M 167 84 L 178 77 M 102 85 L 111 92 M 113 90 L 104 82'
              ],
              texts: [
                { str: '5 m', x: 123, y: 145 },
                { str: '7 m', x: 178, y: 86, rot: 63 }
              ]
            },
            text: `Perimeter = ?0 m 
19`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 142 33 L 226 119 L 41 118 L 143 33',
                'M 185 69 L 176 75 M 177 78 L 188 71 M 93 67 L 102 74 M 104 72 L 95 64'
              ],
              texts: [
                { str: '8 m', x: 120, y: 119 },
                { str: '5 m', x: 196, y: 75, rot: 48 }
              ]
            },
            text: `Perimeter = ?0 m 
18`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 136 31 L 193 131 L 44 130 L 136 31',
                'M 168 76 L 159 82 M 160 85 L 171 78 M 80 83 L 89 90 M 91 88 L 82 80 M 118 123 L 117 135 M 120 135 L 122 123 '
              ],
              texts: [{ str: '50 cm', x: 123, y: 129 }]
            },
            text: `Perimeter = ?0 m 
1.5`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 142 33 L 226 119 L 41 118 L 143 33',
                'M 185 69 L 176 75 M 177 78 L 188 71 M 93 67 L 102 74 M 104 72 L 95 64'
              ],
              texts: [
                { str: '1 m', x: 120, y: 119 },
                { str: '0.6 m', x: 196, y: 75, rot: 48 }
              ]
            },
            text: `Perimeter = ?0 cm 
220`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 145 18 L 201 148 L 73 149 L 145 19',
                'M 175 75 L 166 81 M 167 84 L 178 77 M 102 85 L 111 92 M 113 90 L 104 82'
              ],
              texts: [
                { str: '1 m', x: 123, y: 145 },
                { str: '1.5 m', x: 65, y: 97, rot: 300 }
              ]
            },
            text: `Perimeter = ?0 cm 
400`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 136 31 L 193 131 L 44 130 L 136 31',
                'M 168 76 L 159 82 M 160 85 L 171 78 M 80 83 L 89 90 M 91 88 L 82 80 M 118 123 L 117 135 M 120 135 L 122 123 '
              ],
              texts: [{ str: '200 cm', x: 123, y: 129 }]
            },
            text: `Perimeter = ?0 m 
6`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 145 18 L 201 148 L 73 149 L 145 19',
                'M 175 75 L 166 81 M 167 84 L 178 77 M 102 85 L 111 92 M 113 90 L 104 82'
              ],
              texts: [
                { str: '50 cm', x: 123, y: 145 },
                { str: '75 cm', x: 173, y: 93, rot: 63 }
              ]
            },
            text: `Perimeter = ?0 m 
2`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 142 33 L 226 119 L 41 118 L 143 33',
                'M 185 69 L 176 75 M 177 78 L 188 71 M 93 67 L 102 74 M 104 72 L 95 64'
              ],
              texts: [
                { str: '70 cm', x: 120, y: 119 },
                { str: '45 cm', x: 41, y: 75, rot: -38 }
              ]
            },
            text: `Perimeter = ?0 m 
1.6`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'external-angle',
      label: 'External Angles - Find 𝑥 and 𝑦',
      data: {
        title: 'External Angles: Find the unknown values.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1.5rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 261 158 L 24 158 L 116 29 L 205 158',
                'M 43 132 Q 59 137 55 158 M 101 51 Q 114 61 128 47 M 185 131 Q 162 137 173 157 M 193 141 C 203 129 224 141 221 157'
              ],
              texts: [
                { str: '60°', x: 98, y: 54 },
                { str: '55°', x: 59, y: 121 },
                { str: '𝑥', x: 147, y: 125 },
                { str: '𝑦', x: 221, y: 118 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
65, 115`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 19 159 L 220 157 L 200 27 L 87 159',
                'M 102 141 Q 112 148 109 158 M 187 43 Q 193 50 203 46 M 99 145 C 86 134 71 147 71 159 M 217 140 Q 203 143 202 157'
              ],
              texts: [
                { str: '30°', x: 178, y: 45 },
                { str: '70°', x: 181, y: 124 },
                { str: '𝑥', x: 111, y: 131 },
                { str: '𝑦', x: 55, y: 124 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
80, 100`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 115 60 L 175 150 L 35 148 L 150 22 ',
                'M 49 133 Q 59 137 56 148 M 104 72 Q 113 82 123 73 M 165 135 Q 153 140 156 150 M 122 70 C 127 69 128 56 122 53'
              ],
              texts: [
                { str: '60°', x: 59, y: 123 },
                { str: '50°', x: 128, y: 125 },
                { str: '𝑥', x: 104, y: 70 },
                { str: '𝑦', x: 128, y: 46 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
70, 110`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 19 159 L 220 157 L 200 27 L 87 159',
                'M 102 141 Q 112 148 109 158 M 187 43 Q 193 50 203 46 M 99 145 C 86 134 71 147 71 159 M 217 140 Q 203 143 202 157'
              ],
              texts: [
                { str: '45°', x: 178, y: 45 },
                { str: '80°', x: 181, y: 124 },
                { str: '𝑥', x: 111, y: 131 },
                { str: '𝑦', x: 55, y: 124 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
55, 125`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 115 60 L 175 150 L 35 148 L 150 22 ',
                'M 49 133 Q 59 137 56 148 M 104 72 Q 113 82 123 73 M 165 135 Q 153 140 156 150 M 122 70 C 127 69 128 56 122 53'
              ],
              texts: [
                { str: '60°', x: 59, y: 123 },
                { str: '65°', x: 128, y: 125 },
                { str: '𝑥', x: 104, y: 70 },
                { str: '𝑦', x: 128, y: 46 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
55, 125`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 261 158 L 24 158 L 116 29 L 205 158',
                'M 43 132 Q 59 137 55 158 M 101 51 Q 114 61 128 47 M 185 131 Q 162 137 173 157 M 193 141 C 203 129 224 141 221 157'
              ],
              texts: [
                { str: '50°', x: 98, y: 54 },
                { str: '50°', x: 59, y: 121 },
                { str: '𝑥', x: 147, y: 125 },
                { str: '𝑦', x: 221, y: 118 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
80, 100`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 78 19 L 194 158 L 43 157 L 161 22',
                'M 107 55 Q 120 46 132 56 M 107 83 Q 118 94 131 83 M 57 140 Q 70 147 67 157 M 182 144 Q 170 149 170 158'
              ],
              texts: [
                { str: '60°', x: 67, y: 130 },
                { str: '60°', x: 103, y: 24 },
                { str: '𝑥', x: 110, y: 85 },
                { str: '𝑦', x: 154, y: 128 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
60, 60`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 202 109 L 27 155 L 92 20 L 152 189',
                'M 81 44 Q 92 51 100 43 M 124 109 Q 106 114 113 132 M 37 135 Q 50 138 49 149 M 148 124 Q 151 140 137 147 '
              ],
              texts: [
                { str: '60°', x: 44, y: 116 },
                { str: '80°', x: 149, y: 129 },
                { str: '𝑥', x: 95, y: 98 },
                { str: '𝑦', x: 79, y: 45 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
80, 40`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 78 19 L 194 158 L 43 157 L 161 22',
                'M 107 55 Q 120 46 132 56 M 107 83 Q 118 94 131 83 M 57 140 Q 70 147 67 157 M 182 144 Q 170 149 170 158'
              ],
              texts: [
                { str: '50°', x: 144, y: 129 },
                { str: '75°', x: 103, y: 24 },
                { str: '𝑥', x: 110, y: 85 },
                { str: '𝑦', x: 67, y: 127 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
75, 55`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 202 109 L 27 155 L 92 20 L 152 189',
                'M 81 44 Q 92 51 100 43 M 124 109 Q 106 114 113 132 M 37 135 Q 50 138 49 149 M 148 124 Q 151 140 137 147 '
              ],
              texts: [
                { str: '90°', x: 149, y: 129 },
                { str: '30°', x: 79, y: 45 },
                { str: '𝑥', x: 95, y: 98 },
                { str: '𝑦', x: 44, y: 116 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 °
90, 60`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'variable-angle',
      label: 'Unknown Angles',
      data: {
        title: 'Find the unknown angle(s).',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1.5rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 193 153 L 27 155 L 110 21 L 192 152',
                'M 119 37 Q 109 47 100 36 M 41 134 Q 52 143 48 154 M 175 127 Q 154 135 161 154 '
              ],
              texts: [
                { str: '𝑥', x: 103, y: 40 },
                { str: '𝑥', x: 49, y: 124 },
                { str: '𝑥', x: 147, y: 118 }
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
                'M 31 29 L 204 29 L 32 144 L 31 29',
                'M 44 29 L 44 44 L 31 44 M 32 117 Q 48 117 48 132 M 167 30 Q 167 42 178 46'
              ],
              texts: [
                { str: '30°', x: 137, y: 30 },
                { str: '𝑥', x: 41, y: 97 }
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
                'M 187 183 L 24 99 L 182 15 L 187 183 M 183 43 Q 165 47 155 30 M 51 113 Q 62 99 49 87 M 164 173 Q 170 157 187 157'
              ],
              texts: [
                { str: '50°', x: 61, y: 86 },
                { str: '𝑥', x: 151, y: 38 },
                { str: '𝑥', x: 157, y: 135 }
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
                'M 197 133 L 24 133 L 196 17 L 197 133 M 184 133 L 184 118 L 197 118 M 196 44 Q 180 44 180 29 M 61 132 Q 61 120 50 116'
              ],
              texts: [
                { str: '2𝑥', x: 170, y: 38 },
                { str: '𝑥', x: 64, y: 104 }
              ]
            },
            text: `𝑥 = ?0 ° 
30`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 187 183 L 17 185 L 182 15 L 187 183 M 183 43 Q 171 47 162 34 M 165 182 Q 167 161 187 157 M 39 163 Q 49 171 43 185'
              ],
              texts: [
                { str: '𝑥', x: 158, y: 38 },
                { str: '2𝑥', x: 52, y: 153 },
                { str: '3𝑥', x: 142, y: 148 }
              ]
            },
            text: `𝑥 + 2𝑥 + 3𝑥 = ?0 ° 
𝑥 = ?1 ° 
180, 30`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'variable-angle',
      label: 'Isosceles Triangle - Unknown Angles',
      data: {
        title: 'Find the unknown angle(s).',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        fontSize: '1.5rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 221 115 L 19 117 L 127 23 L 221 115 M 189 116 Q 189 103 203 97 M 37 101 Q 47 107 42 117 M 75 63 L 82 72 M 78 60 L 85 69 M 177 63 L 169 71 M 181 67 L 173 75 '
              ],
              texts: [
                { str: '40°', x: 168, y: 87 },
                { str: '𝑥', x: 45, y: 90 }
              ]
            },
            text: `𝑥 = ?0 ° 
40`
          },
          {
            //2
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 138 137 L 30 136 L 31 20 L 138 137 M 114 137 Q 113 126 121 119 M 31 121 Q 44 123 44 136 M 23 79 L 37 79 M 23 74 L 37 74 M 81 141 L 81 130 M 76 141 L 76 130 '
              ],
              texts: [
                { str: '45°', x: 91, y: 109 },
                { str: '𝑥', x: 43, y: 103 }
              ]
            },
            text: `𝑥 = ?0 ° 
90`
          },
          {
            //3
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 147 131 L 32 72 L 135 11 L 147 131 M 129 122 Q 134 113 145 113 M 117 22 Q 125 31 136 27 M 91 96 L 83 104 M 95 100 L 87 108 M 69 45 L 76 54 M 72 42 L 79 51 '
              ],
              texts: [
                { str: '50°', x: 106, y: 27 },
                { str: '𝑥', x: 119, y: 91 }
              ]
            },
            text: `𝑥 = ?0 ° 
50`
          },
          {
            //4
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 221 115 L 19 117 L 127 23 L 221 115 M 114 35 Q 125 44 137 33 M 37 101 Q 47 107 42 117 M 75 63 L 82 72 M 78 60 L 85 69 M 177 63 L 169 71 M 181 67 L 173 75 '
              ],
              texts: [
                { str: '100°', x: 110, y: 37 },
                { str: '𝑥', x: 45, y: 90 }
              ]
            },
            text: `𝑥 = ?0 ° 
40`
          },
          {
            //5
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 24 137 L 132 136 L 131 20 L 24 137 M 131 37 Q 123 43 115 37 M 131 121 L 118 121 L 118 136 M 139 79 L 125 79 M 139 74 L 125 74 M 81 141 L 81 130 M 86 141 L 86 130'
              ],
              texts: [{ str: '𝑥', x: 111, y: 34 }]
            },
            text: `𝑥 = ?0 ° 
45`
          },
          {
            //6
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 33 131 L 148 72 L 45 11 L 33 131 M 51 122 Q 46 113 35 113 M 131 62 Q 123 71 128 83 M 83 98 L 89 107 M 87 95 L 93 104 M 95 34 L 88 43 M 99 36 L 92 45 '
              ],
              texts: [
                { str: '40°', x: 97, y: 57 },
                { str: '𝑥', x: 38, y: 90 }
              ]
            },
            text: `𝑥 = ?0 ° 
60`
          },
          {
            //7
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 221 115 L 19 117 L 103 20 L 171 115 M 163 104 C 177 98 186 104 189 115 M 34 100 Q 47 107 42 117 M 139 60 L 131 68 M 143 64 L 135 72 M 58 64 L 65 73 M 61 61 L 68 70'
              ],
              texts: [
                { str: '120°', x: 170, y: 79 },
                { str: '𝑥', x: 46, y: 88 }
              ]
            },
            text: `𝑥 = ?0 ° 
60`
          },
          {
            //11
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 131 11 L 132 170 L 24 171 L 131 54 M 48 171 Q 49 160 41 153 M 131 155 L 118 155 L 118 170 M 118 68 C 115 58 118 44 131 43 M 139 113 L 125 113 M 139 108 L 125 108 M 81 175 L 81 164 M 86 175 L 86 164'
              ],
              texts: [
                { str: '𝑥', x: 49, y: 142 },
                { str: '𝑦', x: 91, y: 34 }
              ]
            },
            text: `𝑥 = ?0 ° 
𝑦 = ?1 ° 
45, 135`
          }
        ]
      }
    },
    {
      id: 'impossible-triangle',
      label: 'Impossible Triangle',
      type: 'classifySentence',
      data: {
        title:
          'Is it possible to create a triangle with sides of the below given lengths?',
        types: [
          {
            name: 'Possible',
            text: `4 cm, 5 cm, 8 cm
19 cm, 7 cm, 11 cm`
          },
          {
            name: 'Impossible',
            text: `11 cm, 10 cm, 22 cm
6 cm, 16 cm, 9 cm
20 cm, 11 cm, 10 cm`
          }
        ]
      }
    },
    {
      id: 'type-angle',
      label: 'Triangle Type (Angle)',
      type: 'classifySentence',
      data: {
        title: 'By observing the triangle, classify it.',
        svgBased: true,
        types: [
          {
            name: 'Acute-angled',
            list: [
              `M 28 116 L 89 19 L 138 100 L 28 116`,
              `M 4 66 L 134 35 L 109 139 L 4 66`
            ]
          },
          {
            name: 'Right-angled',
            list: [
              `M 119 110 L 118 11 L 22 109 L 119 110`,
              `M 83 130 L 157 65 L 20 56 L 83 130 `
            ]
          },
          {
            name: 'Obtuse-angled',
            list: [
              `M 82 98 L 157 65 L 20 56 L 82 98 `,
              `M 83 98 L 173 59 L 7 25 L 83 98`
            ]
          }
        ]
      }
    },
    {
      id: 'type-side',
      label: 'Triangle Type (Sides)',
      type: 'classifySentence',
      data: {
        title: 'By observing the triangle, classify it.',
        svgBased: true,
        types: [
          {
            name: 'Equilateral',
            list: [
              `M 150 33 L 44 156 L 210 154 L 149 33 
6 cm | 65 | 83 | -51
6 cm | 166 | 62 | 62
6 cm | 111 | 155 `,

              `M 185 29 L 40 47 L 135 155 L 184 28
11 cm | 77 | 18 | -7
11 cm | 52 | 87 | 47
11 cm | 149 | 75 | 288`
            ]
          },
          {
            name: 'Isosceles',
            list: [
              `M 236 126 L 104 25 L 70 165 L 236 126 
8 cm | 130 | 147 | -7
8 cm | 152 | 50 | 38
7 cm | 60 | 72 | -77 `,

              `M 267 167 L 183 55 L 25 59 L 266 167 
11 cm | 76 | 34
11 cm | 200 | 76 | 58
18 cm | 96 | 100 | 382 `
            ]
          },
          {
            name: 'Scalene',
            list: [
              `M 267 167 L 183 55 L 25 59 L 266 167 
7 cm | 73 | 37
12 cm | 202 | 75 | 55
17 cm | 114 | 108 | 380 `,

              `M 215 162 L 212 38 L 56 50 L 215 162 
4 cm | 118 | 20
5 cm | 206 | 78 | 87
7 cm | 108 | 101 | 395 `
            ]
          }
        ]
      }
    },
    {
      label: 'Pythagoras Theorm',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Pythagoras Theorm',
        text: [
          `In a right-angled triangle, the side opposite to the right angle
          is called the hypotenuse.The other two sides are known as the legs of the right-angled triangle. They are also known as base and perpendicular.`,
          {
            type: 'svg',
            width: 340,
            height: 200,
            paths: ['M 68 33 L 333 179 L 68 179 Z M 68 163 L 83 163 L 83 179 '],
            texts: [
              { str: 'Hypotenuse', x: 149, y: 69, rot: 31 },
              { str: 'Base', x: 146, y: 181 },
              { str: 'Perpendicular', x: 6, y: 96, rot: -90 }
            ]
          },
          {
            type: 'html',
            text: `Perpendicular<sup>2</sup> + Base<sup>2</sup> = Hypotenuse<sup>2</sup><br><br>
            Pythagorean triples are set of three positive integers a, b and c which holds true for the condition<br>
            a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup><br><br>`
          },
          `The smallest triples is [3,4,5]. Some other examples are 
1. [5, 12, 13]
2. [8, 15, 17],
3. [7, 24, 25]`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'findx-pythagorus',
      label: 'Find 𝑥',
      data: {
        title: 'Find 𝑥 by applying the pythagorus theorm.',
        type: 'word-problem',
        isSentence: false,
        answerBox: false,
        inputType: 'small',
        // fontSize: '2rem',
        list: [
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 68 33 L 191 176 L 68 179 Z M 68 163 L 83 163 L 83 179 '
              ],
              texts: [
                { str: '𝑥', x: 138, y: 89, rot: 34 },
                { str: '3 cm', x: 101, y: 180 },
                { str: '4 cm', x: 40, y: 100, rot: -90 }
              ]
            },
            text: `~𝑥~2 = ~3~2 + ~4~2
            ~𝑥~2 = ?0 + ?1
            ~𝑥~2 = ?2
            𝑥 = ?3 cm
9, 16, 25, 5`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 164 33 L 69 177 L 164 179 Z M 164 163 L 149 163 L 149 179'
              ],
              texts: [
                { str: '𝑥', x: 97, y: 92, rot: -45 },
                { str: '5 cm', x: 101, y: 180 },
                { str: '12 cm', x: 154, y: 92, rot: 90 }
              ]
            },
            text: `~𝑥~2 = ~12~2 + ~5~2
            ~𝑥~2 = ?0 + ?1
            ~𝑥~2 = ?2
            𝑥 = ?3 cm
144, 25, 169, 13`
          },
          {
            svg: {
              width: 250,
              height: 150,
              paths: [
                'M 201 23 L 32 117 L 203 115 Z M 203 99 L 188 99 L 188 115'
              ],
              texts: [
                { str: '𝑥', x: 106, y: 47, rot: -45 },
                { str: '15 cm', x: 106, y: 117 },
                { str: '8 cm', x: 196, y: 52, rot: 88 }
              ]
            },
            text: `~𝑥~2 = ~15~2 + ~8~2
            ~𝑥~2 = ?0 + ?1
            ~𝑥~2 = ?2
            𝑥 = ?3 cm
225, 64, 289, 17`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 68 33 L 191 176 L 68 179 Z M 68 163 L 83 163 L 83 179 '
              ],
              texts: [
                { str: '𝑥', x: 138, y: 89, rot: 34 },
                { str: '3 cm', x: 101, y: 180 },
                { str: '5 cm', x: 40, y: 100, rot: -90 }
              ]
            },
            text: `~𝑥~2 = ~5~2 - ~3~2
            ~𝑥~2 = ?0 - ?1
            ~𝑥~2 = ?2
            𝑥 = ?3 cm
    25, 9, 16, 4`
          },
          {
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 164 33 L 69 177 L 164 179 Z M 164 163 L 149 163 L 149 179'
              ],
              texts: [
                { str: '13 cm', x: 82, y: 92, rot: -54 },
                { str: '5 cm', x: 101, y: 180 },
                { str: '𝑥', x: 173, y: 92, rot: 90 }
              ]
            },
            text: `~𝑥~2 = ~13~2 - ~5~2
            ~𝑥~2 = ?0 - ?1
            ~𝑥~2 = ?2
            𝑥 = ?3 cm
    169, 25, 144, 12`
          }
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
            qText:
              'The longest side in a right-angled triangle is called ________.',
            options: `hypotenuse, base, perpendicular`
          },
          {
            qText: 'Classify the below triangle.',
            qImg: {
              width: 300,
              height: 150,
              paths: ['M 49 21 L 262 81 L 131 83 L 49 21'],
              texts: [
                { str: '20 m', x: 135, y: 24, rot: 15 },
                { str: '12 m', x: 161, y: 81 },
                { str: '12 m', x: 61, y: 45, rot: 38 }
              ]
            },
            options: `Isosceles , Obtused Angled, * Both`
          },
          {
            qText: 'Pythagoras Theorm is applicable only to ________.',
            options: `Right-angled triangle, Isosceles triangle, Acute-angled triangle`
          },
          {
            qText: 'The number of medians in a triangle is ________.',
            options: `three, two, one`
          },
          {
            qText: 'In an Isosceles triangle ________.',
            options: `two sides and two angles are equal
            two sides are equal
            two angles are equal`
          }
        ]
      }
    }
  ]
};
