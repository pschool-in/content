export default {
  label: 'Area and Perimeter',
  id: 'area-perimeter-7',
  list: [
    //These activities are taken from M7

    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Square and Rectangle',
      commonData: {
        title: 'Problem',
        type: 'word-problem',
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `Find the perimeter of a rectangle ABCD in which AB = 15 ^cm and BC = 8 ^cm.
In a rectangle AB and BC are adjacent sides.
∴ Perimeter = 2 × ( ?0 + ?1 )
= 2 × ?2 = ?3 ^cm
15, 8, 23, 46`,

            `Find the perimeter of a square PQRS in which PQ = 17 ^cm.
In a square, all sides are equal.
∴ Perimeter = 4a = 4 × ?0
= ?1 ^cm
17, 68`,

            `Find the perimeter of an equilateral triangle XYZ in which XY = 7.5 cm
In an equilateral triangle, all sides are of equal length.
∴ Perimeter = 3 × sides = 3 × ?0
= ?1 ^cm
7.5, 22.5`,

            `Find the area of a rectangle of length 16 ^cm and breadth 12 ^cm.
Area = length × breadth
= ?0 × ?1
= ?2
16, 12, 192`,

            `Find the area of a square of side 14 ^cm.
Area = side × side
= 14 × 14
= ?0 ^sq.cm
196`
          ]
        },
        {
          list: [
            `The perimeter of a square is 52 ^cm. Find its area.
We know, perimeter = 4 × side
side = perimeter/4 = ?0/4
= ?1 ^cm
52, 13`,

            `The perimeter of a rectangle of length 17 ^cm is 64 ^cm. Find its area.
perimeter = 2 × (length + breadth)
length + breadth = perimeter/2
breadth = perimeter/2 - length
= ?0/2 - ?1 = ?2 ^cm
area = length × breadth
= ?3 × ?4 = ?5 ^sq.cm
64, 17, 15, 17, 15, 255`,

            `The length of a hall is 8 ^m more than its breadth. If the perimeter of the hall is 40 ^m, find the cost of laying a carpet at the cost of ₹ 12 per ^sq.m
To find the cost of laying a carpet we need to find the area.
Lets take breadth = 𝑥
length = 𝑥 + 8
2 × (length + breadth ) = perimeter
2 × (𝑥 + 8 + 𝑥) = ?0
?1 𝑥 + 8 = ??0/2 = ?2
??1 𝑥 = ?3 
𝑥 = ?4
area = ?5 × ?6 = ?7
Cost of laying carpet = area × cost per square unit
= ??7 × ?8 = ₹ ?9
40, 2, 20, 12, 6, 14, 6, 84, 12, 1008`,

            `The area of  a rectangle field of breadth 48 ^m is the same as the area of a square field of side 60 ^m. Find the perimeter of the rectangle field.
Area of square = ?0 × ?1 = ?2 ^sq.m
As the area of square and rectangle are same,
length of rectangle = ??2/?3 = ?4 ^m
∴ Perimeter = 2 × ( ??3 + ??4)
= 2 × ?5 = ?6 ^m
60, 60, 3600, 48, 75, 123, 246`,

            `A wire is in the form of a square of side 16 ^cm. It is bent to make a rectangle of breadth 10 ^cm. Find the length of the rectangle formed. Find which one has more area.
The perimeter of both square and rectangle are same.
Perimeter of square = 4 × ?0 = ?1 ^cm
For rectangle, length = perimeter/2 - breadth
= ??1/2 - ?2  = ?3 ^m
Area of rectangle = ??3 × ??2 = ?4 ^sq.cm
Area of square = ??0 × ??0 = ?5 ^sq.cm
The square has more area than the rectangle.
16, 64, 10, 22, 220, 256`
          ]
        },
        {
          list: [
            `A wire of length 1 ^m 20 ^cm is cut into two equal pieces. One piece is bent to form a square and the other piece bent to form a rectangle of length 22 ^cm. Compare the areas of the rectangle and the square formed.
Length of each piece = ?0 ^cm
Side of the square = ??0/4 = ?1 ^cm
Area of the square = ??1 × ??1 = ?2 ^sq.cm
breadth of rectangle = ??0/2 - ?3 = ?4 ^cm
Area of rectangle = ??3 × ??4 = ?5 ^sq.cm
Area of the square is bigger than the area of the rectangle.
60, 15, 225, 22, 8, 176`,

            `Anita wants to fence her rectangular kitchen garden on three sides with measurements as 15 ^m, 8 ^m and 8 ^m. Find the cost of fencing it at the rate of ₹ 12 per metre and levelling at the rate of ₹ 4 per ^sq.m
Fencing is needed only on 3 sides.
So Perimeter = 15 + 8 + 8 = ?0 ^m
Cost of fencing = 12 × ??0 = ₹  ?1
Area for leveling = 15 × 8
= ?2 ^sq.m
Cost of leveling = 4 × ??2 = ₹ ?3
31, 372, 120, 480`,

            `A door of length 2.5 ^m and breadth 1.5 ^m is fitted in a wall. The length and breadth of the wall are 6 ^m and 4.5 ^m respectively. Find the cost of white-washing the wall at the rate of ₹ 30 per ^sq.m
Area of Wall Needs painting = Total Area - Area of Door
Area of Door = 2.5 × 1.5 = ?0 ^sq m
Total Area = 6 × 4.5 = ?1 ^sq m
Area needing painting = ??1 - ??0 = ?2
Painting cost = 30 × 23.25 = ₹ ?3 
3.75, 27, 23.25, 697.50`,

            `There is a compound wall of length 250 ^m and height 2.5 ^m. A contractor charges ₹25 per ^sq.m, including the material for white-washing. But the members of the club decided to white-wash both sides of the wall. Find the amount saved, if they spent ₹15,000 for buying the material required for white-washing.
Area of the wall = 250 × 2.5 = ?0 ^sq.m
As both sides need painting, total area to be painted 
= ??0 × 2 = ?1 ^sq.m
Cost quoted by contractor = 25 × ??1 = ?2
To get the money saved, we need to subtract it from the material cost.
Saved = ??2 - 15000 = ₹ ?3
625, 1250, 31250, 16250
`
          ]
        }
      ]
    },

    {
      type: 'numberInput',
      id: 'triangle',
      label: 'Triangle and Parallelogram',
      commonData: {
        title: 'Problem',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        // isSentence: false,
        //answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          title: 'Find the area of the below Triangle',
          list: [
            {
              svg: {
                width: 350,
                height: 200,
                paths: ['M 37 37 L 309 175 L 38 173 L 37 38'],
                texts: [
                  { str: '12 cm', x: 167, y: 173 },
                  { str: '5 cm', x: 40, y: 99 },
                  { str: 'R', x: 27, y: 15 },
                  { str: 'P', x: 15, y: 155 },
                  { str: 'Q', x: 308, y: 157 }
                ]
              },
              text: `Area = 1/2 × base × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
12, 5,  30`
            },
            {
              svg: {
                width: 250,
                height: 200,
                paths: ['M 152 41 L 248 130 L 44 130 L 153 41 L 152 129 '],
                texts: [
                  { str: '5 cm', x: 132, y: 134 },
                  { str: '2 cm', x: 156, y: 85 },
                  { str: 'A', x: 150, y: 20 },
                  { str: 'B', x: 37, y: 130 },
                  { str: 'C', x: 242, y: 127 }
                ]
              },
              text: `Area = 1/2 × base × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
5, 2, 5`
            },
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 182 46 L 309 175 L 38 173 L 182 46',
                  {
                    d: 'M 182 175 L 182 46',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 182 158 L 196 158 L 197 174 '
                ],
                texts: [
                  { str: '10 cm', x: 167, y: 173 },
                  { str: '2.5 cm', x: 186, y: 104 },
                  { str: 'R', x: 176, y: 22 },
                  { str: 'P', x: 15, y: 155 },
                  { str: 'Q', x: 308, y: 157 }
                ]
              },
              text: `Area = 1/2 × base × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
10, 2.5, 12.5`
            },
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 37 37 L 309 175 L 38 173 L 37 38 ',
                  {
                    d: 'M 38 173 L 93 65 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 86 79 L 99 85 L 106 72'
                ],
                texts: [
                  { str: '11 cm', x: 150, y: 80 },
                  { str: '3 cm', x: 64, y: 116 },
                  { str: 'R', x: 17, y: 15 },
                  { str: 'P', x: 15, y: 155 },
                  { str: 'Q', x: 204, y: 156 }
                ]
              },
              text: `Though it looks like a right angle, base and height value are not given. Instead hypotenuse and the perpendicular to it are given.
So we have to consider the hypotenuse as the base and the perpendicular as the height.
Area = 1/2 × base × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
11, 3, 11.5`
            }
          ]
        },
        {
          title: 'Find the area of the below parallelogram',
          list: [
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 89 37 L 320 37 L 273 168 L 39 170 L 89 37 ',
                  {
                    d: 'M 89 170 L 89 37 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 88 153 L 103 153 L 103 169 '
                ],
                texts: [
                  { str: '8 cm', x: 167, y: 173 },
                  { str: '3 cm', x: 93, y: 93 },
                  { str: 'A', x: 77, y: 14 },
                  { str: 'B', x: 312, y: 13 },
                  { str: 'D', x: 19, y: 157 },
                  { str: 'C', x: 278, y: 157 }
                ]
              },
              text: `Area = base × height
= ?0 × ?1
= ?2 ^sq.cm
8, 3, 24`
            },
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 27 37 L 243 37 L 335 154 L 91 155 L 27 37 ',
                  {
                    d: 'M 243 155 L 243 37 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 243 138 L 258 138 L 258 154'
                ],
                texts: [
                  { str: '7 cm', x: 177, y: 152 },
                  { str: '2 cm', x: 204, y: 85 },
                  { str: 'A', x: 17, y: 15 },
                  { str: 'B', x: 233, y: 13 },
                  { str: 'C', x: 326, y: 151 },
                  { str: 'D', x: 74, y: 151 }
                ]
              },
              text: `Area = base × height
= ?0 × ?1
= ?2 ^sq.cm
7, 2, 14`
            },
            {
              svg: {
                width: 350,
                height: 300,
                paths: [
                  'M 103 33 L 258 32 L 201 212 L 46 215 L 104 32 ',
                  {
                    d: 'M 101 215 L 104 32 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 101 198 L 116 198 L 116 214 '
                ],
                texts: [
                  { str: '4 cm', x: 112, y: 215 },
                  { str: '5 cm', x: 105, y: 105 },
                  { str: 'A', x: 76, y: 12 },
                  { str: 'B', x: 263, y: 8 },
                  { str: 'C', x: 198, y: 209 },
                  { str: 'D', x: 16, y: 215 }
                ]
              },
              text: `Area = base × height
= ?0 × ?1
= ?2 ^sq.cm
4, 5, 20`
            },
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 99 61 L 266 31 L 217 166 L 61 205 L 100 60 ',
                  {
                    d: 'M 245 88 L 101 61',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 233 85 L 236 73 L 249 77'
                ],
                texts: [
                  { str: '5 cm', x: 232, y: 126 },
                  { str: '6 cm', x: 146, y: 74 },
                  { str: 'A', x: 80, y: 35 },
                  { str: 'B', x: 263, y: 8 },
                  { str: 'C', x: 214, y: 165 },
                  { str: 'D', x: 40, y: 204 }
                ]
              },
              text: `
As perpendicular is given for the line BC, consider it as base. Imagine the parallelogram as rotated.
Area = base × height
= ?0 × ?1
= ?2 ^sq.cm
5, 6, 30`
            }
          ]
        },
        {
          title: 'Find the unknown value in a parallelogram',
          list: [
            {
              widths: '100, 100, 140',
              text: `Base  | Height | Area
6 ^cm  | 7 ^cm| ?0 ^sq.cm
10 ^cm  | 5.5 ^cm| ?1 ^sq.cm
16 ^cm  | 8 ^cm| ?2 ^sq.cm
12 ^cm | ?3 ^cm | 96 ^sq.cm
?4 ^cm  | 3.5 ^cm| 52.5 ^sq.cm
8.9 ^cm  | ?5 ^cm | 64.08 ^sq.m
42, 55, 128, 8, 15, 7.2`
            }
          ]
        },
        {
          title: 'Find the unknown value in a triangle',
          list: [
            {
              widths: '100, 100, 140',
              text: `Base  | Height | Area
4 ^cm  | 8 ^cm| ?0 ^sq.cm
9 ^cm  | 3 ^cm| ?1 ^sq.cm
18 ^cm  | ?2 ^cm| 18 ^sq.cm
11.5 ^cm  | 4 ^cm| ?3 ^sq.cm
11.2 ^cm | ?4 ^cm | 43.68 ^sq.cm
19.4 ^cm  | 8.9 ^cm| ?5 ^sq.cm
16, 13.5, 2, 23, 3.9, 172.66`
            }
          ]
        },
        {
          title: 'Answer the below question.',
          list: [
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 99 32 L 298 31 L 216 173 L 5 175 L 100 32 ',
                  {
                    d: 'M 215 173 L 78 65 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 85 56 L 95 63 L 87 72 ',
                  'M 298 31 L 295 170 L 214 173 '
                ],
                texts: [
                  { str: '12 cm', x: 97, y: 173 },
                  { str: '6.2 cm', x: 298, y: 101 },
                  { str: 'A', x: 2, y: 172 },
                  { str: 'B', x: 203, y: 172 },
                  { str: 'C', x: 301, y: 15 },
                  { str: 'D', x: 89, y: 8 },
                  { str: 'E', x: 287, y: 168 },
                  { str: 'F', x: 57, y: 47 }
                ]
              },
              text: `In the parallelogram ABCD, AB = 12 ^cm, AD = 8 ^cm and CE = 6.2 ^cm. Find
a. the area of the parallelogram
b. the length BF
In the parallelogram ABCD
base = ?0 ^cm   height = ?1 ^cm
area = ??0 × ??1 = ?2 ^sq.cm
We know AD = 8 ^cm. So BC = ?3 ^cm
BF is perpendicular to BC. If we consider BC as base then BF is the height.
As we already know the area of the parallelogram, we can find BF
BF (height) = area/base 
= ??2/??3 = ?4 ^cm
12, 6.2, 74.4, 8, 9.3`
            },
            {
              text: `The altitudes to the sides AB and AD of parallelogram ABCD are 5 ^cm and 20 ^cm respectively. If the area of the parallelogram is 160 ^sq.cm, find its perimeter.
We can find the area, by using either AB or AD as base.
AB = area/height = 160/?0 = ?1 ^cm
AD = 160/?2 = ?3
Perimeter = 2 × (AB + AD)
= 2 × ( ??1 + ??3 )
= 2 × ?4 = ?5 ^cm
5, 32, 20, 8, 40, 80`
            },
            {
              svg: {
                width: 350,
                height: 200,
                paths: [
                  'M 117 39 L 27 160 L 280 161 L 117 39',
                  {
                    d: 'M 117 39 L 117 160 ',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 117 141 L 133 141 L 133 160 '
                ],
                texts: [
                  { str: '12 cm', x: 160, y: 161 },
                  { str: '15 cm', x: 190, y: 74 },
                  { str: '10 cm', x: 30, y: 64 },
                  { str: 'A', x: 8, y: 161 },
                  { str: 'B', x: 268, y: 161 },
                  { str: 'C', x: 118, y: 14 },
                  { str: 'D', x: 107, y: 160 }
                ]
              },
              text: `The perimeter of the given △ABC is 41.36 cm. Find the area of △ABC?
First lets find the height (CD)
△BCD is a right triangle
So ~CD~2 = ~15~2 - ~12~2  
CD = ?0 (Remembering pythagoras triplet)
Now lets find the length AD,
AD = 41.36 - (10 + 15 + 12)
= 41.36 - ?1 = ?2
Base = AD + DB = ?3
Area of △ABC = 1/2 × ??3 × ??0
= ?4 ^sq.cm
9, 37, 4.36, 16.36, 73.62`
            },
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 46 113 L 335 117 L 139 41 L 46 113 L 45 223 L 334 117',
                  {
                    d: 'M 139 41 L 139 113',
                    stroke: 'blue',
                    strokeDasharray: '10, 5'
                  },
                  'M 139 99 L 151 99 L 151 115',
                  'M 46 127 L 59 128 L 59 113'
                ],
                texts: [
                  { str: '8 cm', x: 189, y: 114 },
                  { str: '1.5 cm', x: 140, y: 59 },
                  { str: '3 cm', x: 48, y: 143 },
                  { str: 'A', x: 132, y: 12 },
                  { str: 'B', x: 24, y: 101 },
                  { str: 'C', x: 35, y: 220 },
                  { str: 'D', x: 330, y: 89 },
                  { str: 'E', x: 127, y: 113 }
                ]
              },
              text: `Find the area of the quadrilateral ABCD, given that BC = 3 ^cm, BD = 8 ^cm and AE = 1.5 ^cm.
Solution:
The area of the quadrilateral is the sum of the △ABD and △BCD.
Area of △ABD = 1/2 × base × height
= 1/2 × ?0 × ?1 = ?2 ^sq.cm
Area of △BCD =  = 1/2 × ?3 × ?4 = ?5 ^sq.cm
Area of quadrilateral = ??2 + ??5  = ?6 ^sq.cm
8, 1.5, 6, 8, 3, 12, 18`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'circle',
      label: 'Circle',
      commonData: {
        title: 'Problem',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        // isSentence: false,
        //answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          title:
            'Find the circumference of the circle which has the below radius. (Take π = 22/7)',
          list: [
            {
              text: `radius = 7 ^cm
circumference = 2πr
= 2 × ?0/?1 × ?2
= ?3 ^cm
22, 7, 7, 44`
            },
            {
              text: `radius = 21 ^cm
circumference = 2πr
= 2 × 22/7 × ?0
= 2 × 22 × ?1
= 2 × ?2
= ?3 ^cm
21, 3, 66, 132`
            },
            {
              text: `radius = 14 ^cm
circumference = 2πr
= 2 × 22/7 × ?0
= 2 × 22 × ?1
= 2 × ?2
= ?3 ^cm
14, 2, 44, 88`
            },
            {
              text: `radius = 7/2 ^cm
circumference = 2πr
= 2 × 22/7 × 7/2
= 2 × ?0
= ?1 ^cm
11, 22`
            }
          ]
        },
        {
          title:
            'Find the area of the circle which has the below radius. (Take π = 22/7)',
          list: [
            {
              text: `radius = 28 ^cm
area = ~πr~2
= ?0/?1 × ?2 × ??2
= ??0 × ??2 × ?3
= ??0 × ?4
= ?5 ^sq.cm
22, 7, 28, 4, 112, 2464`
            },
            {
              text: `radius = 14 ^cm
area = ~πr~2
= 22/7 × ?0 × ??0
= 22 × ??0 × ?1
= 22 × ?2
= ?3 ^sq.cm
14, 2, 28, 616`
            },
            {
              text: `radius = 7/2 ^cm
area = ~πr~2
= 22/7 × 7/2 × 7/2
= ?0 × ?1/?2
= ?3/??2
= ?4 ^sq.cm
11, 7, 2, 77, 38.5`
            },
            {
              text: `radius = 42 ^cm
area = ~πr~2
= 22/7 × ?0 × ??0
= 22 × ??0 × ?1
= 22 × ?2
= ?3 ^sq.cm
42, 6, 252, 5544`
            }
          ]
        },
        {
          title: 'Answer the following.',
          list: [
            {
              text: `The diameter of a circular metal sheet is 1.4 ^m. Find its circumference and area (Take π = 22/7 )
Solution:
radius = diameter/2 = ?0 ^m
circumference = 2πr
= 2 × 22/7 × ??0
= 2 × ?1 = ?2 ^m
area = ~πr~2 = 22/7 × ??0 × ??0 
= 22 × ?3 = ?4 ^sq.m
0.7, 2.2, 4.4, 0.07, 1.54`
            },

            {
              text: `The circumference of a circle is 264 ^cm. Find its area. (Take π = 22/7 ) 
Solution:
Lets find the radius.
We know circumference (C)= 2πr
r = C/2π = 264/2 × 7/22 
= ?0 × 7   = ?1 ^cm
area = ~πr~2 = 22/7 × 42 × 42 
= 22 × ?2 = ?3
6, 42, 252, 5544`
            },
            {
              text: `The area of a circular field is 13.86 ~m2. Find the circumference of the field. (Take π = 22/7 ) 
Solution:
Lets find the radius.
We know Area (A)=  ~πr~2
~r~2 = A/π = 13.86 × 7/22
= ?0 × 7 = ?1
r = ?2 
C = 2πr = 2 × 22/7 × ??2
= 2 × ?3 = ?4 ^m
0.63, 4.41, 2.1, 6.6, 13.2`
            },
            {
              text: `The diameter of a flowerbed in a garden is 2.8 ^m. Find the cost of fencing it at the rate of ₹ 55 per ^m. (Take π = 22/7 ) 
Solution:
radius = diameter/2 = ?0 ^m
For fencing we need to find circumference.
C = 2πr = 2 × 22/7 × ??0
= 2 × ?1 = ?2 ^m
Cost of fencing = ??2 × ?3 = ₹ ?4
1.4, 4.4, 8.8, 55, 484`
            },
            {
              text: `Anita wants to make a circular grass bed in her garden. If the cost of levelling the ground is ₹ 18 per ^sq.m , find the amount she has to spend to make a circular grassbed of diameter 7 ^m.
Solution:
We need to find the area.
Lets take the radius as 7/2 ^m
Area =  ~πr~2 = 22/7 × 7/2 × 7/2 
= ?0 × ?1/?2 = ?3/??2 = ?4 ^sq.m
Cost = ?4 × ?5 = ₹ ?6
11, 7, 2, 77, 38.5, 18,  693`
            }
          ]
        },
        {
          title: 'Answer the following.',
          list: [
            {
              text: `Ashok sells carpets. For a circular type of carpet, he charges ₹ 250 per ^sq.m. If you want to buy a circular carpet of radius 1.4 ^m, find how much money you have to pay.  (Take π = 22/7 ) 
Solution:
Area = ~πr~2 = 22/7 × 1.4 × 1.4 
= 22 × ?0
= ?1 ^sq.m
Charges = 250 × ??1
= ₹ ?2
0.28, 6.16, 1540`
            },
            {
              text: `There are two wires each of length 88 ^cm. One is bent to form a square and the other is bent to form a circle. Find which one of them has more area. (Take π = 22/7 ) 
Solution:
The perimeter of the square and the circumference of the circle are given.
Side of square = perimeter/4 
= ?0/4 = ?1 ^cm
Area of square = side × side = ?2 ^sq.cm
Radius of circle = circumference/2π
= ?3/2 × ?4/?5 = ?6 × ??4
= ?7 ^cm
Area of circle =  ~πr~2 = 22/7 × ??7 × ??7
= 22 × ?8 = ?9 ^sq.cm
∴ The area of circle is bigger than the area of square.
88, 22, 484, 88, 7, 22, 2, 14, 28, 616
`
            },
            {
              text: `Find the number of times a wheel of radius 56 ^cm must rotate to cover a distance of 264 ^m. 
Solution:
We need to divide the distance by circumference of the wheel to get the number of times the wheel should rotate.
Circumference = 2πr = 2 × 22/7 × ?0
= 2 x 22 x ?1 = ?2 ^cm
Total distance = ?3 ^cm
No. of Rotation = ??3/??2 = ?4
56, 8, 352, 26400, 75`
            },
            {
              text: `The radius of a circular brass plate is 20 ^cm. Find the cost of polishing the top surface of 12 such plate at the rate of ₹ 450 ^sq.m. (Take π = 3.14)
Solution:
Area of Plate = ~πr~2 = 3.14 × 20 × 20 
= 3.14 × ?0 = ?1 ^sq.cm
Area of 12 plates = ??1 × 12 = ?2 ^sq.cm
= ?3 ^sq.m
Cost = 450 × ??3 = ₹ ?4 
400, 1256, 15072, 1.5072, 678.24`
            },
            {
              text: `From a square metallic sheet of side 60 ^cm, a circle of maximum size was cut out. Find the area of the remaining metallic sheet. (Take π = 3.14)
Solution:
We need to subtract the area of the circle form the area of the square.
Radius of circle = ?0 ^cm
Area of circle = 3.14 × ??0 × ??0 
= 3.14 × ?1 = ?2 ^sq.cm
Area of square = 60 × 60 = ?3 ^sq.cm
Remaining area = ??3 - ??2 = ?4 ^sq.cm
30, 900, 2826, 3600, 774
`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'real-life',
      label: 'Application in Real Life',
      commonData: {
        title: 'Problem',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        // isSentence: false,
        //answerBox: false,
        fontSize: '1rem'
      },
      data: [
        {
          title: 'Answer the following.',
          list: [
            {
              text: `The area of a square field is 9 hectares. Find the cost of fencing it at the rate of ₹ 32 per ^metre.
Solution: 
We know 1 ^hectare = ?0 ^sq.m
9 ^hectare = ?1 ^sq.m
side of square = ?2 ^m
perimeter = ?3 ^m
cost of fencing = 32 × ??3
= ₹ ?4
10000, 90000, 300, 1200, 38400`
            },
            {
              text: `The length and breadth of a plot are 125 ^m and 95 ^m respectively. A builder wants to buy the plot to construct a residential colony. Find the amount he has to pay if the cost of the plot is ₹ 12,000 per ^sq.m
Solution:
First we need to find the area of rectangular plot.
A = 125 × 95 = ?0 ^sq.m
Cost = ??0 × 12000 =  ₹ ?1
11875, 142500000`
            },
            {
              svg: {
                width: 330,
                height: 220,
                paths: [
                  'M 10 10 L 300 10 L 300 200 L 10 200 Z',
                  {
                    d: 'M 30 30 L 280 30 L 280 180 L 30 180 Z',
                    stroke: 'none',
                    fill: '#aaffaa'
                  },
                  'M 153 180 L 153 200 M 149 196 L 153 200 L 157 196 M 149 184 L 153 180 L 157 184'
                ],
                texts: [
                  { str: '4 m', x: 158, y: 177 },
                  { str: '96 m', x: 144, y: 29 },
                  { str: '74 m', x: 233, y: 86 }
                ]
              },
              text: `The length and breadth of a rectangular plot are 96 ^m and 74 ^m respectively. A path of 4 ^m wide is to be constructed outside and around the garden. Find the area of the path.
Solution:
To find the area of the path, we need to subtract the area of rectangle excluding the path, from the area of rectangle including the path.
Area of garden = 96 × 74 = ?0 ^sq.m
width including the path = ?1
breadth including the path = ?2
Area including the path = ?3 ^sq.m
∴ Area of path = ??3 - ??0 
=  ?4 ^sq.m
7104, 104, 82, 8528, 1424
`
            },
            {
              svg: {
                width: 330,
                height: 250,
                paths: [
                  {
                    d: 'M 35 40 L 235 40 L 235 230 L 35 230 Z ',
                    stroke: 'none',
                    fill: '#aaffaa'
                  },
                  {
                    d: 'M 56 61 L 215 61 L 215 211 L 56 211 Z ',
                    stroke: 'none',
                    fill: '#aaaaff'
                  },
                  'M 129 211 L 129 231 M 125 227 L 129 231 L 133 227 M 125 215 L 129 211 L 133 215 '
                ],
                texts: [
                  { str: '1 m', x: 134, y: 206 },
                  { str: '50 m', x: 99, y: 15 },
                  { str: '50 m', x: 237, y: 120 }
                ]
              },
              text: `There is a grassbed of width 1 ^m running around a square waterbed inside a park of side 50 ^m as shown in the figure. Find the area of the grassbed.
Solution:
Area of grassbed is the difference between the area of square including the grassbad and the area of square excluding the grassbed.
Area including the grassbed 
= 50 × 50 = ?0 ^ sq.m
Side excluding water bed = ?1 ^m
Area excluding the grassbed
= ??1 × ??1 = ?2 ^sq.m
Area of grassbed = ??0 - ??2 = ?3 ^sq.m 
2500, 48, 2304, 196
`
            },
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 33 43 L 323 43 L 323 233 L 33 233 Z ',
                  {
                    d: 'M 53 63 L 303 63 L 303 213 L 53 213 Z '
                    //stroke: 'none',
                    //fill: '#aaffaa'
                  },
                  'M 129 212 L 129 232 M 125 228 L 129 232 L 133 228 M 125 216 L 129 212 L 133 216 '
                ],
                texts: [
                  { str: '2 m', x: 134, y: 210 },
                  { str: '54 m', x: 162, y: 18 },
                  { str: '36 m', x: 329, y: 124 }
                ]
              },
              text: `The length and breadth of a rectangular park are 54 ^m and 36 ^m respectively. A path of width 2 ^m is to be build inside the park. Find the area of the path. Find the cost of cementing it at the rate of ₹30 per ^sq.m
Solution:
To find the area of the path, we need to subtract the area of rectangle excluding the path, from the area of rectangle including the path.
Area of park = 54 × 36 = ?0 ^sq.m
width excluding the path = ?1
breadth excluding the path = ?2
Area excluding the path = ?3 ^sq.m
Area of path = ??0 - ??3 
=  ?4 ^sq.m
Cost of cementing = 30 × ??4
= ₹ ?5
1944, 50, 32, 1600, 344, 10320
`
            }
          ]
        },
        {
          title: 'Answer the following.',
          list: [
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 18 28 L 282 28 L 282 216 L 18 216 Z ',
                  {
                    d: 'M 17 102 L 131 101 L 131 28 L 158 28 L 158 102 L 282 103 L 282 129 L 158 127 L 159 216 L 131 216 L 133 127 L 18 128 ',
                    //stroke: 'none',
                    fill: '#aaaaaa'
                  },
                  'M 55 105 L 55 125 M 51 121 L 55 125 L 59 121 M 51 109 L 55 105 L 59 109 '
                ],
                texts: [
                  { str: '3 m', x: 64, y: 103 },
                  { str: '80 m', x: 184, y: 6 },
                  { str: '60 m', x: 286, y: 152 }
                ]
              },
              text: `Two crossroads, each of width 3 ^m, run at right angles and parallel to the sides of a rectangular plot of dimensions 80 ^m x 60 ^m. Find the area of the roads.
Solution:
Area of the road running along the length 
= 80 × 3 = ?0 ^sq.m
Area of the road running along the breadth 
= 60 × 3 = ?1 ^sq.m  
If we add, the two we should get the total area of the road. But the intersecting area will be counted twice. So we need to subtract it.
Intersecting area = ?2 × ?3 = ?4 ^sq.m
∴ Area of road = ??0 + ??1 - ??4 
= ?5 ^sq.m
240, 180, 3, 3, 9, 411`
            },
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 18 28 L 247 28 L 247 219 L 18 219 Z',
                  {
                    d: 'M 17 103 L 116 102 L 116 28 L 142 28 L 142 103 L 247 104 L 247 131 L 142 129 L 142 219 L 116 219 L 117 129 L 17 130 ',
                    //stroke: 'none',
                    fill: '#aaaaaa'
                  },
                  'M 55 105 L 55 125 M 51 121 L 55 125 L 59 121 M 51 109 L 55 105 L 59 109 '
                ],
                texts: [
                  { str: '4 m', x: 64, y: 103 },
                  { str: '800 m', x: 184, y: 6 },
                  { str: '800 m', x: 249, y: 151 }
                ]
              },
              text: `A square field of side 800 ^m has two crossroads that cut at right angles through the centre of the field. Find the area of the field, excluding the crossroads in hectares, given that the width of both the roads are 4 ^m and they are parallel to the sides of the field.
Solution:
Both Roads are of same length
Area of one road = 800 × 4 = ?0 ^sq.m
Area of two roads = 2 × ??0 = ?1 ^sq.m
The intersecting area is counted twice. So we need to subtract it.
Intersecting area = ?2 × ?3 = ?4 ^sq.m
∴ Area of road = ??1 - ??4 
= ?5 ^sq.m
Area of the field = 800 × 800 = ?6 ^sq.m
Area excluding roads = ??6 - ??5 = ?7 ^sq.m
In hectare, area = ?8 ^sq.m (rounding off to two decimal points)
3200, 6400, 4, 4, 16, 6384, 640000, 633616, 63.36`
            },
            {
              text: `There is a circular waterbed of diameter 14 ^m in a garden. It is surrounded by a path of width 2 ^m to keep flower pots. Find the area of the path and also calculate the cost of cementing this path at the rate of ₹ 32 per ^sq.m
Solution:
Radius of waterbed = ?0 ^m
Area of waterbed =  ~πr~2 = 22/7 × ??0 × ??0 
= 22  × ?1 = ?2 ^sq.m
Radius of waterbed including the path = ?3 ^m
Area of waterbed including the path 
= ~πr~2 = 22/7 × ??3 × ??3 
= ?4 ^ sq.m (roundoff to 2 decimal points)
Area of path = ??4 - ??2 = ?5 ^sq.m
cost of cementing = ??5 × 32 = ₹ ?6
7,7, 154,  9,  254.57, 100.57, 3218.24
`
            },
            {
              svg: {
                width: 320,
                height: 210,
                paths: [
                  'M 31 28 H 263 V 169 H 31 V 28 ',
                  'M 154 52 C 183 52 206 73 207 101 C 207 128 184 149 154 151 C 125 151 102 129 101 101 C 100 74 123 53 154 52',
                  'M 152 101 L 206 102'
                ],
                texts: [
                  { str: '5 m', x: 156, y: 79 },
                  { str: '15 m', x: 155, y: 4 },
                  { str: '12 m', x: 263, y: 84 }
                ]
              },
              text: `There is a circular waterbed of radius 5 ^m inside a rectangular park of length 15 ^m and breadth 12 ^m, as shown in the figure. Find the area of the park excluding the waterbed and also find the cost of fencing the water bed at the rate of ₹60 per ^m. (Take π = 3.14)
Solution:
Area of rectangular park = 15 × 12 = ?0 ^sq.m
Area of waterbed =  ~πr~2 = 22/7 × 5 × 5
= ?1 ^sq.m
Area of park excluding waterbed 
= ??0 - ??1 = ?2 ^sq.m
Circumference of waterbed = 2πr
= 2 × 22/7 × 5 = ?3 ^m (upto 1 decimal point)
Cost of fencing = ??3 × 60 = ₹ ?4
180, 78.57, 101.43, 31.4, 1884`
            }
          ]
        },
        {
          title: 'Find the area of the shaded region for the following figure.',
          list: [
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 35 30 H 259 V 241 H 35 V 30 ',
                  {
                    d: 'M 147 31 L 259 241 H 36 Z ',
                    //stroke: 'none',
                    fill: '#aaffaa'
                  }
                ],
                texts: [
                  { str: '15 cm', x: 57, y: 8 },
                  { str: '15 cm', x: 174, y: 9 },
                  { str: '30 cm', x: 262, y: 132 }
                ]
              },
              text: `Solution:
By observing the fig, we can say the area of the filled and unfilled part are the same.
Also the shaded region is a triangle whose base and height we know.
Shaded area = 1/2 × base × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
30, 30, 450`
            },
            {
              svg: {
                width: 350,
                height: 250,
                paths: [
                  'M 61 40 H 276 V 170 H 61 V 40 ',
                  {
                    d: 'M 164 40 L 274 104 L 164 170 L 60 104 Z ',
                    //stroke: 'none',
                    fill: '#ffffaa'
                  }
                ],
                texts: [
                  { str: '10 cm', x: 73, y: 17 },
                  { str: '10 cm', x: 193, y: 17 },
                  { str: '10 cm', x: 196, y: 167 },
                  { str: '10 cm', x: 81, y: 169 },
                  { str: '6 cm', x: 15, y: 62 },
                  { str: '6 cm', x: 15, y: 131 },
                  { str: '6 cm', x: 278, y: 124 },
                  { str: '6 cm', x: 278, y: 58 }
                ]
              },
              text: `Solution:
If we split the rectangle either horizontally or vertically into two equal parts, the area formed by the shaded and non-shaded region are the same.
Shaded area = 1/2 × width × height
= 1/2 × ?0 × ?1
= ?2 ^sq.cm
20, 12, 120`
            }
          ]
        }
      ]
    }
  ]
};
