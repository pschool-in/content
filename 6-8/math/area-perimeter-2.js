export default {
  id: 'area-perimeter-2',
  label: 'Area and Perimeter',
  list: [
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
              paths: [
                'M 50 50 L 170 50 L 167 148 L 49 148 Z',
                'M 90 40 L 90 55 M 161 97 L 175 97 M 97 143 L 97 155 M 40 97 L 57 97'
              ],
              texts: [{ str: '10.5 m', x: 99, y: 26 }]
            },
            text: `Perimeter = ?0 m 
42`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: [
                'M 50 50 L 170 50 L 209 155 L 82 154 Z',
                'M 90 40 L 90 55 M 188 76 L 174 78 M 136 147 L 137 161 M 55 99 L 76 97 '
              ],
              texts: [{ str: '7.5 m', x: 185, y: 100, rot: 65 }]
            },
            text: `Perimeter = ?0 m 
30`
          },
          {
            svg: {
              width: 300,
              height: 150,
              paths: [
                'M 38 22 L 213 23 L 212 111 L 35 108 Z',
                'M 85 15 L 85 30 M 91 16 L 91 31 M 96 102 L 96 115 M 91 100 L 91 115 M 29 88 L 43 89 M 204 67 L 221 67'
              ],
              texts: [
                { str: '11 m', x: 136, y: 20 },
                { str: '5 m', x: 32, y: 39, rot: 90 }
              ]
            },
            text: `Perimeter = ?0 m 
32`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: [
                'M 38 92 L 198 23 L 233 103 L 70 172 Z',
                'M 84 64 L 90 78 M 89 63 L 94 75 M 129 139 L 134 151 M 124 141 L 130 153 M 50 142 L 63 137 M 209 64 L 221 59'
              ],
              texts: [
                { str: '10 cm', x: 121, y: 25, rot: 337 },
                { str: '4 cm', x: 38, y: 99, rot: 67 }
              ]
            },
            text: `Perimeter = ?0 cm 
28`
          },
          {
            svg: {
              width: 300,
              height: 200,
              paths: [
                'M 111 25 L 174 85 L 106 158 L 38 83 Z',
                'M 87 36 L 94 45 M 143 47 L 132 56 M 133 119 L 145 129 M 63 125 L 75 114'
              ],
              texts: [{ str: '5.25 m', x: 35, y: 40, rot: 325 }]
            },
            text: `Perimeter = ?0 m 
21`
          },
          {
            svg: {
              width: 300,
              height: 150,
              paths: [
                'M 102 21 L 229 84 L 90 114 L 24 59 Z',
                'M 53 39 L 58 48 M 44 71 L 38 79 M 120 101 L 123 113 M 124 100 L 127 112 M 131 29 L 127 41 M 135 31 L 131 43 '
              ],
              texts: [
                { str: '7.5 m', x: 156, y: 34, rot: 30 },
                { str: '3.5 m', x: 50, y: 75, rot: 40 }
              ]
            },
            text: `Perimeter = ?0 m 
22`
          },
          {
            svg: {
              width: 300,
              height: 150,
              paths: [
                'M 102 21 L 174 84 L 94 141 L 38 103 L 39 46 Z',
                'M 82 23 L 87 32 M 43 58 L 33 56 M 65 115 L 59 123 M 111 121 L 118 131 M 114 119 L 121 129 M 115 23 L 104 30 M 117 27 L 106 34 '
              ],
              texts: [
                { str: '5 m', x: 132, y: 35, rot: 45 },
                { str: '3 m', x: 33, y: 70, rot: 90 }
              ]
            },
            text: `Perimeter = ?0 m 
19`
          },
          {
            svg: {
              width: 300,
              height: 150,
              paths: [
                'M 78 21 L 187 21 L 238 70 L 186 119 L 69 117 L 17 65 Z',
                'M 55 29 L 60 38 M 49 104 L 58 99 M 213 38 L 207 46 M 196 102 L 201 111 M 92 14 L 93 27 M 96 14 L 97 27 M 88 111 L 89 124 M 92 111 L 93 124'
              ],
              texts: [
                { str: '11 cm', x: 111, y: 2 },
                { str: '4 cm', x: 25, y: 65, rot: 35 }
              ]
            },
            text: `Perimeter = ?0 m 
38`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'perimeter',
      label: 'Find the Perimeter',
      data: {
        title: 'Find the perimeter of the below figure.',
        type: 'word-problem',
        answerBox: false,
        list: [
          {
            title:
              'Two regular pentagons are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 80 16 L 131 54 L 110 113 L 48 112 L 30 52 L 80 16 M 131 54 L 194 56 L 211 116 L 161 151 L 110 114 '
              ],
              texts: [{ str: '5 m', x: 198, y: 70, rot: 71 }]
            },
            text: `No. of sides at the boundary = ?0
Length of each side = ?1 m
Perimeter = ?2 m
8, 5, 40`
          },
          {
            title:
              'Two regular hexagons of sides measuring 6 cm are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 150,
              paths: [
                'M 84 11 L 131 33 L 133 83 L 84 111 L 35 86 L 33 35 L 84 11 M 182 9 L 229 31 L 231 81 L 182 109 L 133 84 L 131 33 L 182 9'
              ]
            },
            text: `No. of sides at the boundary = ?0
Length of each side = ?1 cm
Perimeter = ?2 cm
10, 6, 60`
          },
          {
            title:
              'Three regular hexagons of sides measuring 4 cm are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 84 11 L 131 33 L 133 83 L 84 111 L 35 86 L 33 35 L 84 11 M 182 9 L 229 31 L 231 81 L 182 109 L 133 84 L 131 33 L 182 9 M 182 109 L 185 160 L 136 188 L 87 163 L 84 111 '
              ]
            },
            text: `No. of sides at the boundary = ?0
Length of each side = ?1 cm
Perimeter = ?2 cm
12, 4, 48`
          },
          {
            title:
              'The shape shown is a square with four equilateral triangles drawn on its four sides. If the side of the square is 8 cm, find the perimeter of the figure.',
            svg: {
              width: 250,
              height: 240,
              paths: [
                'M 101 19 L 138 76 H 65 Z M 197 113 L 138 150 L 138 76 Z M 102 209 L 65 151 L 138 150 Z M 7 114 L 65 77 L 65 151 Z '
              ]
            },
            text: `No. of sides at the boundary = ?0
Length of each side = ?1 cm
Perimeter = ?2 cm
8, 8, 64`
          },
          {
            title:
              'Five equilateral triangles of side length 6 cm are combined to form a figure as given below. Find its perimeter.',
            svg: {
              width: 300,
              height: 160,
              paths: [
                'M 54 24 L 98 99 H 13 Z M 139 24 L 183 99 H 98 Z M 224 24 L 268 99 H 183 Z M 224 24 L 54 24'
              ]
            },
            text: `No. of sides at the boundary = ?0
Length of each side = ?1 cm
Perimeter = ?2 cm
7, 6, 42`
          },
          {
            title:
              'In below figure find the change in perimeter if side length of each smaller square is 2 cm. (Olympiad)',
            svg: {
              width: 320,
              height: 150,
              paths: [
                'M 15 15 H 115 V 115 H 15 Z M 40 15 V 115 M 65 15 V 115 M 90 15 V 115 M 15 40 H 115 M 15 65 H 115 M 15 90 H 115',
                'M 200 40 H 300 V 90 H 200 Z M 225 40 V 90 M 250 40 V 90 M 275 40 V 90 M 200 65 H 300',
                'M 136 60 H 158 V 52 L 173 64 L 158 77 V 68 H 136 V 68 Z'
              ]
            },
            text: `For the first figure,
No. of small square sides at the boundary = ?0
For the second figure,
No. of small square sides at the boundary = ?1
Difference in the no. of sides = ?2
Length of each side = ?3 cm
Difference in perimeter = ?4 cm
16, 10, 6, 2, 12`
          },
          {
            title:
              'Find the change in perimeter from first figure to second figure if the side length of each small square is 4 cm (Olympiad).',
            svg: {
              width: 320,
              height: 150,
              paths: [
                'M 15 15 H 115 V 115 H 15 Z M 40 15 V 115 M 65 15 V 115 M 90 15 V 115 M 15 40 H 115 M 15 65 H 115 M 15 90 H 115',
                'M 200 40 H 300 V 90 H 200 Z M 225 40 V 90 M 250 40 V 90 M 275 40 V 90 M 200 65 H 300',
                'M 275 15 L 275 115 L 225 115 L 225 15 Z M 275 40 L 225 40 M 275 65 L 225 65 M 275 90 L 225 90 M 250 15 L 250 115',
                'M 136 60 H 158 V 52 L 173 64 L 158 77 V 68 H 136 V 68 Z'
              ]
            },
            text: `For the first figure,
No. of small square sides at the boundary = ?0
For the second figure,
No. of small square sides at the boundary = ?1
Difference in the no. of sides = ?2
Length of each side = ?3 cm
Difference in perimeter = ?4 cm
16, 16, 0, 4, 0`
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
            qText: 'Perimeter of a regular pentagon = ',
            options: `5 x Length of a side
6 x Length of a side
4 x Length of a side
3 x Length of a side`
          },
          {
            qText:
              'Side length of square is the first multiple of 3. Find its perimeter.',
            options: `12 units, 24 units, 36 units, 9 units`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'area-perimeter',
      label: 'Find Area & Perimeter',
      data: {
        title:
          'In the below figure, all lines are horizontal or vertical. Fill in the boxes.',
        type: 'word-problem',
        answerBox: false,
        list: [
          {
            svg: {
              width: 300,
              height: 220,
              paths: [
                'M 39 25 L 272 25 L 273 106 L 156 106 L 157 171 L 40 170 L 40 24 '
              ],
              texts: [
                { str: '20 km', x: 103, y: 24 },
                { str: '10 km', x: 63, y: 145 },
                { str: '10 km', x: 30, y: 54, rot: 90 },
                { str: '5 km', x: 245, y: 45, rot: 90 }
              ]
            },
            text: `Area = ?0 sq km
Perimeter = ?1 km
150, 60`
          }
        ]
      }
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
    },

   

    /*
    {
      //activity book
      type: 'numberInput',
      id: 'convert-paise',
      label: 'Convert Money',
      data: {
        type: 'word-problem',
        title: 'Round the given amounts to the nearest rupees',
        fontSize: '1.5rem',
        text: `6.40, 3.80, 4.90, 5.10, 2.60, 7.70, 1.20, 8.30, 35.10, 28.90, 67.40, 94.20, 64.80, 51.30, 49.70, 117.40, 437.20, 629.60, 358.30, 246.90` //activity book - page 5
        `36.30 + 57.21
        59.05 + 94.45
        81.25 + 33.28
        83.69 + 43.29
        21.48 + 42.27` // activity book - page 11
        `52.45 - 38.14
        95.42 - 74.63
        87.37 - 18.29
        69.05 - 34.10
        55.34 - 26.27
        85.04 - 68.52``506.44 + 16.34 + 22.84
        352.96 + 550.00 + 56.76
        41.14 + 36.56 + 95.15
        96.56 + 53.60 + 11.05
        770.00 + 511.05 + 85.67
        632.54 + 264.84 + 139.16`
      }
    },
    */
    {
      type: 'makeSentence',
      label: 'Numbers to Number Names',
      id: 'convert-names',
      commonData: {
        title: 'Convert the given number to number name.',
        fontSize: '2rem',
        extras: 'one five seven nine forty eighty hundred thousand'
      },
      data: [
        `3010 |  three thousand and ten
955 | nine hundred and fify five
543 | five hundred and forty three
1111 | one thousand one hundred and eleven
2222 | two thousand two hundred and twenty two`,

        `4343 | four thousand three hundred and forty three
9509 | nine thousand five hundred and nine
8305 | eight thousand three hundred and five
7105 | seven thousand one hundred and five
3999 | three thousand nine hundred and ninety nine`,

        `14014 | fourteen thousand and forteen
19034 | nineteen thousand and thirty four
64340 | sixty four thousand three hundred and forty
99999 | ninety nine thousand nine hundred and ninety nine 
30303 | thirty thousand three hundred and three`,

        `67,00,300 | sixty seven lakhs and three hundred
53,04,050 | fifty three lakhs four thousand and fifty
7,23,000 | seven lakh and twenty three thousand
75,25,772 | seventy five lakhs twenty five thousand seven hundred and seventy two
50,25,125 | fifty lakhs twenty five thousand one hundred and twenty five`,

        `75,45,325 | seventy five lakhs forty five thousand three hundred and twenty five
43,43,403 | forty three lakhs forty three thousand four hundred and three
95,33,200 | ninety five lakhs thirty three thousand and two hundred
23,45,320 | twenty three lakhs forty five thousand three hundred and twenty
32,99,099 | thirty two lakhs ninety nine thousand and ninety nine`,

        `4,25,00,000 | four crores and twenty five lakhs
8,32,23,000 | eight crores thirty two lakhs and twenty three thousand
2,00,50,000 | two crores and fifty thousand
7,05,04,000 | seven crores five lakhs and four thousand
32,40,00,500 | thirty two crores forty lakhs and five hundred.`
      ]
    },
    {
      type: 'counter',
      id: 'count',
      label: 'Count Objects',
      data: {
        type: 'linear',
        level: 2
        // width: 100,
      }
    },

    {
      type: 'counter',
      id: 'count',
      label: 'Count Objects',
      data: [
        {
          width: 100,
          type: 'money',
          rs: [2000],
          arr: [2, 5, 3, 6, 4, 8, 10, 7]
        },
        {
          width: 100,
          type: 'money',
          rs: [20, 10],
          arr: [
            [2, 5],
            [4, 2],
            [5, 3],
            [3, 4],
            [2, 3]
          ]
        },
        {
          width: 100,
          type: 'money',
          rs: [2, 1],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        },
        {
          width: 100,
          type: 'money',
          rs: [20, 10],
          arr: [
            [2, 5],
            [4, 2],
            [5, 3],
            [3, 4],
            [2, 3]
          ]
        },
        {
          width: 80,
          type: 'money',
          rs: [10, 5],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        }
      ]
    }
  ]
};
