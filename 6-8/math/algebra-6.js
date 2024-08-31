export default {
  label: 'Algebra (Class 6)',
  id: 'algebra-6',
  lockAfter: 10,
  list: [
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-11-1',
      label: 'Exercise Problems (11.1)',
      commonData: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true
      },
      data: [
        {
          title:
            'Find the rule which gives the number of matchsticks required to make the following matchstick patterns. Use a variable to write the rule.',
          list: [
            {
              svg: {
                width: 150,
                height: 150,
                paths: [
                  {
                    d: 'M 20 20 L 120 20 M 70 25 L 70 125',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter T as above.
Ans = ?0
2𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 150,
                height: 150,
                paths: [
                  {
                    d: 'M 20 20 L 120 20 M 20 100 L 120 100 M 120 25 20 95',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter Z as above.
Ans = ?0
3𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 150,
                height: 150,
                paths: [
                  {
                    d: 'M 20 20 L 20 120 M 130 20 L 130 120 M 25 120 L 125 120',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter U as above.
Ans = ?0
3𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 150,
                height: 150,
                paths: [
                  {
                    d: 'M 20 20 L 60 100 M 110 20 L 65 100',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter V as above.
Ans = ?0
2𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 250,
                height: 250,
                paths: [
                  {
                    d: 'M 20 20 L 20 120  M 20 130 L 20 230 M 30 20 L 130 20 M 30 125 L 130 125 M 30 230 L 130 230',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter E as above.
Ans = ?0
5𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 250,
                height: 250,
                paths: [
                  {
                    d: 'M 20 20 L 20 120 M 140 130 L 140 230 M 30 20 L 130 20 M 30 125 L 130 125 M 30 230 L 130 230',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter S as above.
Ans = ?0
5𝑛`,
              vars: '𝑛()'
            },
            {
              svg: {
                width: 250,
                height: 250,
                paths: [
                  {
                    d: 'M 20 20 L 20 120  M 20 130 L 20 230 M 30 20 L 130 20 M 30 125 L 130 125 M 140 20 L 140 120 M 140 130 L 140 230',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `A pattern of letter A as above.
Ans = ?0
6𝑛`,
              vars: '𝑛()'
            }
          ]
        },
        {
          title: 'Answer the following :',
          list: [
            {
              text: `Cadets are marching in a parade. There are 5 cadets in a row. What is the rule which gives the number of cadets, given the number of rows? (Use 𝑛 for the number of rows.)
Ans = ?0
5𝑛`,
              vars: '𝑛()'
            },
            {
              text: `If there are 50 mangoes in a box, how will you write the total number of mangoes in terms of the number of boxes? (Use 𝑏 for the number of boxes.)
Ans = ?0
50𝑏`,
              vars: '𝑏()'
            },
            {
              text: `The teacher distributes 5 pencils per student. Can you tell how many pencils are
needed, given the number of students? (Use 𝑠 for the number of students.)
Ans = ?0
5𝑠`,
              vars: '𝑠()'
            },
            {
              text: `A bird flies 1 kilometer in one minute. Can you express the distance covered by
the bird in terms of its flying time in minutes? (Use 𝑡 for flying time in minutes.)
Ans = ?0 km
𝑡`,
              vars: '𝑡()'
            },
            {
              text: `Radha is drawing a dot Rangoli (a beautiful pattern of lines joining dots) with chalk powder. She has 9 dots in a row. How many dots will her Rangoli have for 𝑟 rows? How many dots are there if there are 8 rows? If there are 10 rows?
For 𝑟 rows, the number of dots is
= ?0
For 8 rows, the number of dots is
= ?1
For 10 rows, the number of dots is
= ?2
9𝑟, 72, 90`,
              vars: 'r()'
            },
            {
              text: `Leela is Radha's younger sister. Leela is 4 years younger than Radha. Can you write Leela's age in terms of Radha's age? Take Radha's age to be 𝑥 years.
Ans = ?0 years
𝑥-4`,
              vars: '𝑥()'
            },
            {
              text: `Mother has made laddus. She gives some laddus to guests and family members; still 5 laddus remain. If the number of laddus mother gave away is 𝑙, how many laddus did she make?
Ans = ?0
𝑙+5`,
              vars: '𝑙()'
            },
            {
              text: `Oranges are to be transferred from larger boxes into smaller boxes. When a large box is emptied, the oranges from it fill two smaller boxes and still 10 oranges remain outside. If the number of oranges in a small box are taken to be 𝑥, what is the number of oranges in the larger box?
Ans = ?0
2𝑥+10`,
              vars: '𝑥()'
            }
          ]
        },
        {
          title: 'Answer the following :',
          list: [
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  {
                    d: 'M 10 10 L 50 10 M 55 15 L 55 55 M 50 60 L 10 60 M 5 15 L 5 55',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 95 10 L 135 10 M 140 15 L 140 55 M 135 60 L 95 60 M 90 15 L 90 55 M 145 10 H 185 M 190 15 V 55 M 145 60 H 185',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 15 90 L 55 90 M 60 95 L 60 135 M 55 140 L 15 140 M 10 95 L 10 135 M 65 90 H 105 M 110 95 V 135 M 65 140 H 105 M 115 90 H 155 M 160 95 V 135 M 115 140 H 155',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 15 170 L 55 170 M 60 175 L 60 215 M 55 220 L 15 220 M 10 175 L 10 215 M 65 170 H 105 M 110 175 V 215 M 65 220 H 105 M 115 170 H 155 M 160 175 V 215 M 115 220 H 155 M 165 170 H 205 M 210 175 V 215 M 165 220 H 205 ',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },

              text: `Look at the above matchstick pattern of squares. The squares are not separate. Two neighbouring squares have a common matchstick. Observe the patterns and find the rule that gives the number of matchsticks for the given number of squares.
Ans = ?0
3𝑥+1`,
              vars: '𝑥()'
            },
            {
              svg: {
                width: 320,
                height: 180,
                paths: [
                  {
                    d: 'M 17 55 L 40 15 M 45 15 L 67 55 M 67 60 H 17 ',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 167 59 L 190 19 M 195 19 L 217 59 M 217 64 H 167 M 223 58 L 246 18 M 192 14 H 247 ',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 6 157 L 29 117 M 34 117 L 56 157 M 56 162 H 6 M 62 156 L 85 116 M 90 116 L 112 156 M 31 112 H 86 M 61 162 H 111 ',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  },
                  {
                    d: 'M 156 153 L 179 113 M 184 113 L 206 153 M 206 158 H 156 M 212 152 L 235 112 M 240 112 L 262 152 M 268 151 L 291 111 M 181 108 H 236 M 211 158 H 261 M 241 108 H 286 ',
                    strokeWidth: 5,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },

              text: `This figure gives a matchstick pattern of triangles. Find the general rule that gives the number of matchsticks in terms of the number of triangles.
Ans = ?0
2𝑥+1`,
              vars: '𝑥()'
            }
          ]
        }
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-11-2',
      label: 'Exercise Problems (11.2)',
      data: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true,
        title: 'Answer the following:',
        list: [
          {
            text: `The side of an equilateral triangle is shown by 𝑙. Express the perimeter of the equilateral triangle using 𝑙.
Ans = ?0
3𝑙`,
            vars: '𝑙𝑛()'
          },
          {
            text: `The side of a regular hexagon is denoted by 𝑙. Express the perimeter of the hexagon using 𝑙.
Ans = ?0
6𝑙`,
            vars: '𝑙𝑛()'
          },
          {
            text: `A cube is a three-dimensional figure. It has six faces and all of them are identical squares. The length of an edge of the cube is given by 𝑙. Find the formula for the total length of the edges of a cube.
Ans = ?0
12𝑙`,
            vars: '𝑙𝑛()'
          },
          {
            text: `The diameter of a circle is a line which joins two points on the circle and also passes through the centre of the circle. Express the diameter of the circle (𝑑) in terms of its radius (𝑟).
Ans: ?0
𝑑=2𝑟 | 2𝑟=𝑑`,
            vars: '𝑑𝑟𝑛='
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Expression with Numbers',
      type: 'classifySentence',
      data: {
        title: `Classify the below expression as 'expression with numbers' or 'expression with variables.`,
        fontSize: '1.2rem',
        textAlign: 'center',
        types: [
          {
            name: 'Number',
            text: `5 (21 – 7) + 7 × 2
5`
          },
          {
            name: 'Variable',
            text: `𝑦 + 3
(7 × 20) – 8𝑧
3𝑥
5 – 5𝑛
(7 × 20) – (5 × 10) – 45 + 𝑝`
          }
        ]
      }
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-11-3',
      label: 'Exercise Problems (11.3)',
      commonData: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true,
        title: 'Give expression for the following cases.',
        vars: '𝑝𝑚𝑦'
      },
      data: [
        `7 added to 𝑝 | 𝑝+7
7 subtracted from 𝑝 | 𝑝-7
𝑝 multiplied by 7 | 7𝑝
𝑝 divided by 7 | 𝑝/7
7 subtracted from –𝑚 | -𝑚-7
– 𝑝 multiplied by 5 | -5𝑝
– 𝑝 divided by 5 | -𝑝/5
𝑝 multiplied by – 5 | -5𝑝`,

        `11 added to 2𝑚 | 2𝑚+11
11 subtracted from 2𝑚 | 2𝑚-11
5 times 𝑦 to which 3 is added | 5𝑦+3
5 times 𝑦 from which 3 is subtracted | 5𝑦-3 
𝑦 is multiplied by –8 | -8𝑦
𝑦 is multiplied by –8 and then 5 is added to the result | -8𝑦+5
𝑦 is multiplied by 5 and the result is subtracted from 16 | 16-5𝑦
𝑦 is multiplied by –5 and the result is added to 16 | -5𝑦+16`
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-11-4',
      label: 'Exercise Problems (11.4)',
      data: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true,
        title: 'Answer the following',
        list: [
          `Take Sarita's present age to be 𝑦 years
(i) What will be her age 5 years from now?
Ans = ?0
(ii) What was her age 3 years back?
Ans = ?1
(iii) Sarita's grandfather is 6 times her age. What is the age of her grandfather?
Ans = ?2
(iv) Grandmother is 2 years younger than grandfather. What is grandmother's age?
Ans = ?3
(v) Sarita's father's age is 5 years more than 3 times Sarita's age. What is her father's age?
Ans = ?4
𝑦+5, 𝑦-3, 6𝑦, 6𝑦-2, 3𝑦+5`,

          {
            text: `The length of a rectangular hall is 4 meters less than 3 times the breadth of the hall. What is the length, if the breadth is 𝑏 meters?
Ans = ?0 𝑚
3𝑏-4`,
            vars: `𝑎𝑏𝑐`
          },

          {
            text: `A rectangular box has height 𝐡 𝑐𝑚. Its length is 5 times the height and breadth is 10 𝑐𝑚 less than the length. Express the length and the breadth of the box in terms of the height.
Length = ?0 𝑐𝑚
Breadth = ?1 𝑐𝑚
5𝐡, 5𝐡-10`,
            vars: `𝐟𝐠𝐡`
          },

          {
            text: `Meena, Beena and Leena are climbing the steps to the hill top. Meena is at step 𝑠, Beena is 8 steps ahead and Leena 7 steps behind. Where are Beena and Meena? The total number of steps to the hill top is 10 less than 4 times what Meena has reached. Express the total number of steps using 𝑠.
Beena's position = ?0
Leena's position = ?1
Total Steps = ?2
𝑠+8, 𝑠-7, 4𝑠-10`,
            vars: `𝑠𝑡𝑢`
          },
          {
            text: `A bus travels at 𝑣 km per hour. It is going from Daspur to Beespur. After the bus has travelled 5 hours, Beespur is still 20 𝑘𝑚 away. What is the distance from Daspur to Beespur? Express it using 𝑣.
Ans = ?0 𝑘𝑚
5𝑣+20`,
            vars: `𝑠𝑡𝑢𝑣`
          }
        ]
      }
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
                'The rule, which gives the number of matchsticks required to make the matchstick pattern L is',
              options: `2𝑛, 3𝑛, 4𝑛, 5𝑛`
            },
            {
              qText:
                'The rule, which gives the number of matchsticks required to make the matchstick pattern E is',
              options: `5𝑛, 2𝑛, 3𝑛, 4𝑛`
            },
            {
              qText: 'The side of a square is 𝑙. Its perimeter is',
              options: `4𝑙, 3𝑙, 6𝑙, 2𝑙`
            },
            {
              qText:
                'The side of an equilateral triangle is 𝑙. Its perimeter is',
              options: `3𝑙, 6𝑙, 2𝑙, 4𝑙`
            },
            {
              qText: 'The side of a regular pentagon is 𝑙. Its perimeter is',
              options: `5𝑙, 6𝑙, 2𝑙, 4𝑙`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The side of a regular hexagon is 𝑙. Its perimeter is',
              options: `6𝑙, 5𝑙, 2𝑙, 4𝑙`
            },
            {
              qText:
                'The length of an edge of a cube is 𝑙. The total length of its edges is',
              options: `12𝑙, 6𝑙, 8𝑙, 4𝑙`
            },
            {
              qText: 'The radius of a circle is 𝑟. Its diameter is',
              options: `2𝑟, 4𝑟, 3𝑟, 6𝑟`
            },
            {
              qText:
                'Which of the following is an expression with numbers only?',
              options: `3, 1-𝑥, 2𝑥, 𝑥+1`
            },
            {
              qText:
                'Which of the following is an expression with numbers only?',
              options: `2(4 – 3) + 5 × 6
        2 × 3 – 4𝑥
        4 × 5 – 10 × 2 – 25 + 𝑥
        𝑥/8`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The expression for '1 added to p' is`,
              options: `~𝑝+1, ~𝑝-1, ~-𝑝+1, ~-𝑝-1`
            },
            {
              qText: `The expression for '1 subtracted to p' is`,
              options: `~𝑝-1, ~1-𝑝, ~-𝑝+1, ~-𝑝-1`
            },
            {
              qText: `The expression for '𝑝 multiplied by 2' is`,
              options: `~2𝑝, ~𝑝-2, ~𝑝+2, ~𝑝2`
            },
            {
              qText: `The expression for '𝑝 divided by 2' is`,
              options: `𝑝/2 , 𝑝/𝑝, 2/𝑝, ~𝑝-2`
            },
            {
              qText: 'Solve: r + 5 = 5',
              options: `0, 5, -5, 1`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Solve: 7u = 21',
              options: `3, 2, 1, 4`
            },
            {
              qText: 'Solve: 𝑥/2 + 5 = 7',
              options: `4, 2, 1, 3`
            },
            {
              qText: 'Which of the following is an equation in a variable?',
              options: `~𝑥-1=0, ~2<10, ~3>12, ~2+3=3+2`
            },
            {
              qText: 'Which of the following is an equation in a variable?',
              options: ` 2𝑥 = 8, 10/2 = 5, 2 × 3 + 2 × 1 = 9, 2 × 4 = 5`
            },
            {
              qText:
                'The salary of Hari Kishan is two times the salary of Manish (which in Rs. 𝑥), then the salary of Hari Kishan, in rupees, is',
              options: `2𝑥, 𝑥/2, ~𝑥+2, ~𝑥-2`
            }
          ]
        }
      ]
    }
  ]
};
