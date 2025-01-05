export default {
  label: '(NCERT - 8) Mensuration',
  id: 'mensuration-8',
  list: [
    {
      type: 'numberInput',
      id: 'ex1',
      label: 'Ex 11.1 : Area and Perimeter',
      data: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        list: [
          {
            svg: {
              width: 350,
              height: 120,
              paths: [
                'M 8 15 L 105 15 L 105 109 L 8 109 L 8 15 ',
                'M 117 34 L 227 34 L 227 109 L 117 109 L 117 34 '
              ],
              texts: [
                { str: '60 m', x: 29, y: 90, width: 48, height: 14 },
                { str: '80 m', x: 148, y: 90, width: 48, height: 14 }
              ]
            },
            text: `A square and a rectangular field with measurements as given in the figure have the same perimeter. Which field has a larger area?
            
            Perimeter of square = 4 × side 
            = 4 × ?0 = ?1 m
            
            It is given, the perimeter of the square and rectangle are same.
            Breadth of rectangle = Perimeter/2 - length
            = ??1/2 - ?2 = ?3 m
            Area of square = ?4 sq m
            Area of rectangle = ?5 sq m
            Therefore, #<?6, square, rectangle> has larger area.
            60, 240, 80, 40, 3600, 3200, square`
          },
          {
            svg: {
              width: 350,
              height: 150,
              paths: [
                {
                  d: 'M 28 10 L 154 10 L 154 130 L 28 130 L 28 10 ',
                  fill: '#B0BEC5'
                },
                {
                  d: 'M 45 38 L 137 38 L 137 104 L 45 104 L 45 38 ',
                  fill: '#ffffff'
                }
              ],
              texts: [
                { str: '25 m', x: 69, y: 126, width: 38, height: 11 },
                { str: '20 m', x: 70, y: 84, width: 38, height: 11 },
                { str: '15 m', x: 36, y: 61, width: 38, height: 11, rot: 90 },
                { str: '25 m', x: 0, y: 61, width: 38, height: 11, rot: 270 }
              ]
            },
            text: `Mrs. Kaushik has a square plot with the measurement as shown in the figure. She wants to construct a house in the middle of the plot. A garden is developed around the house. Find the total cost of developing a garden around the house at the rate of ₹ 55 per ~m^2
            Area of the garden can be calculated by subtracting the area of house from the total area.
            Total Area = side x side 
             = ?0 sq m
            Area of house = length x breadth
             = ?1 x ?2 = ?3 sq m
            Area of garden = ??0 - ??3
             = ?4 sq m
            Cost of per ~m^2 of garden = ₹ ?5
            Total cost = ??4 x ??5 
                = ₹ ?6 ##<mul, 325, 55>

             625, 20, 15, 300, 325, 55, 17875
            `
          },
          {
            svg: {
              width: 270,
              height: 150,
              paths: [
                'M 54 36 L 181 37 L 181 112 L 54 111 L 54 36 ',
                'M 54 36 C 36 35 15 49 15 69 C 15 90 25 112 54 111 ',
                'M 181 37 C 199 36 220 50 220 70 C 220 91 210 113 181 112 ',
                'M 16 125 L 96 126 M 16 118 L 16 132 ',
                'M 217 125 L 137 126 M 217 118 L 217 132 ',
                'M 244 38 L 244 69 M 239 38 L 251 38 ',
                'M 244 113 L 244 85 M 239 113 L 251 113 '
              ],
              texts: [
                { str: '20 m', x: 99, y: 115, width: 33, height: 13 },
                { str: '7 m', x: 227, y: 64, width: 33, height: 13 }
              ]
            },
            text: `The shape of a garden is rectangular in the middle and semi circular at the ends as shown in the diagram. Find the area and the perimeter of this garden.
            Radius of the semi circle = ?0 m
            Breadth of rectangle = ?1 m
            Lenght of rectangle = ?2 m
            Area of 2 semi-circle 
            = πr²= 22/7 x 7/2 x 7/2 = ?3 m²
            Area of rectangle = ?4 m²
            Total area = ??3 + ??4 = ?5 m²
            Total perimeter = perimeter of circle + 2 sides
             = ?6 + ?7 = ?8 m
            3.5, 7, 13, 38.5, 91, 129.5, 22, 26, 48 `
          },
          `A flooring tile has the shape of a parallelogram whose base is 24 cm and the corresponding height is 10 cm. How many such tiles are required to cover a floor of area 1080 m² ? 
          We need to find the area of single tile, and divide it by the total area to get the number of tiles required.
          Area of a tile = base x height
           = ?0 x ?1 = ?2 cm²
          Area of floor = ?3 cm²
          No. of tiles required 
           = ??3/??2 = ?4 ##<div, 10800000, 240>
          24, 10, 240, 10800000, 45000`,
          {
            svg: {
              width: 470,
              height: 180,
              paths: [
                'M 12 70 L 116 70 C 117 48 95 17 69 17 C 25 16 13 47 12 70 ',
                'M 116 81 L 85 81 M 116 77 L 116 85 ',
                'M 11 81 L 42 81 M 11 77 L 11 85 ',
                'M 265 91 C 266 69 244 38 218 38 C 174 37 162 68 161 91 L 161 19 L 265 19 L 265 91 ',
                'M 264 105 L 233 105 M 264 101 L 264 109 ',
                'M 284 95 L 284 64 M 288 95 L 280 95 ',
                'M 283 20 L 283 39 M 287 20 L 279 20 ',
                'M 160 104 L 191 104 M 160 100 L 160 108 ',
                'M 445 81 C 446 59 424 28 398 28 C 354 27 342 58 341 81 L 394 155 Z ',
                'M 447 26 L 416 26 M 447 22 L 447 30 ',
                'M 402 161 L 426 130 M 399 158 L 406 164 ',
                'M 384 159 L 360 128 M 387 156 L 380 162 ',
                'M 454 88 L 446 101 M 458 90 L 450 85 ',
                'M 329 90 L 340 103 M 325 93 L 335 87 ',
                'M 347 26 L 378 26 M 347 22 L 347 30 '
              ],
              texts: [
                {
                  str: '2.8 cm',
                  x: 47,
                  y: 73,
                  width: 35,
                  height: 13,
                  fontSize: '12px'
                },
                {
                  str: '2.8 cm',
                  x: 195,
                  y: 95,
                  width: 35,
                  height: 13,
                  fontSize: '12px'
                },
                {
                  str: '1.5 cm',
                  x: 267,
                  y: 41,
                  width: 35,
                  height: 13,
                  fontSize: '12px'
                },
                {
                  str: '2.8 cm',
                  x: 380,
                  y: 14,
                  width: 35,
                  height: 13,
                  fontSize: '12px'
                },
                {
                  str: '2 cm',
                  x: 418,
                  y: 105,
                  width: 35,
                  height: 13,
                  rot: -55,
                  fontSize: '12px'
                },
                {
                  str: '2 cm',
                  x: 332,
                  y: 108,
                  width: 35,
                  height: 13,
                  rot: 55,
                  fontSize: '12px'
                }
              ]
            },
            text: `An ant is moving around a few food pieces of different shapes scattered on the floor. For which food-piece would the ant have to take a longer round? 
            We need to find the perimeter of three figures and find which one is longest.
            Perimeter of first fig = Perimeter of semicircle + diameter
             = ?0 + ?1 = ?2 cm
             Perimeter of second fig = Perimeter of semicircle + 3 sides
             = ?3 + ?4 = ?5
             Perimeter of third fig = Perimeter of semicircle + 2 sides
            = ?6 + ?7 = ?8
            The ant has to take the longest round in the #<?9, first, second, third> figure.
             4.4, 2.8, 7.2, 4.4, 5.8, 10.2, 4.4, 4, 8.8, second`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'ex2',
      label: 'Ex 11.2: Quadrilateral & Trapezium',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `The shape of the top surface of a table is a trapezium. Find its area if its parallel sides are 1 m and 1.2 m and perpendicular distance between them is 0.8 m.
              Area of trapezium = h x (a+b)/2
              = ?0 x (?1+?2)/2
              = ??0 x ?3 = ?4 m²
              0.8, 1, 1.2, 1.1, 0.88  `,

            `The area of a trapezium is 34 cm² and the length of one of the parallel sides is 10 cm and its height is 4 cm. Find  the length of the other parallel side.
              Area of trapezium = h x (a+b)/2
              a+b = 2A/h
              b = 2A/h - a
              = 2 x ?0/?1 - ?2
              = ?3 - ??2
              = ?4 cm
  34, 4, 10, 17, 7`,

            {
              svg: {
                width: 275,
                height: 160,
                paths: [
                  'M 38 31 L 189 31 L 250 132 L 38 132 L 38 31 ',
                  'M 37 115 L 53 115 L 53 132 '
                ],
                texts: [
                  { str: 'A', x: 23, y: 15, width: 29, height: 19 },
                  { str: 'B', x: 20, y: 134, width: 29, height: 19 },
                  { str: 'C', x: 241, y: 129, width: 29, height: 19 },
                  { str: 'D', x: 181, y: 14, width: 29, height: 19 }
                ]
              },
              text: `Length of the fence of a trapezium shaped field ABCD is 120 m. If BC = 48 m, CD = 17 m and AD = 40 m, find the area of this field. Side AB is perpendicular to the parallel sides AD and BC.
              Sum of three sides = ?0
              AB = Perimeter - ??0
               = ?1 - ??0 = ?2 m
              AB is the height of trapezium because it is perpendicular to the 2 parallel sides.
               Area of trapezium = h x (a+b)/2
              = ?3 x (?4)/2
              = ??3 x ?4 = ?5 m²
              105, 120, 15, 15, 88, 44, 660`
            },
            {
              svg: {
                width: 240,
                height: 150,
                paths: [
                  'M 14 86 L 81 10 L 225 86 L 168 136 Z L 225 86 M 168 135 L 169 85 M 81 10 L 83 85 '
                ],
                texts: [
                  {
                    str: '8 m',
                    x: 170,
                    y: 98,
                    width: 29,
                    height: 16,
                    fontSize: '12px'
                  },
                  {
                    str: '24 m',
                    x: 109,
                    y: 72,
                    width: 29,
                    height: 16,
                    fontSize: '12px'
                  },
                  {
                    str: '13 m',
                    x: 84,
                    y: 43,
                    width: 29,
                    height: 16,
                    fontSize: '12px'
                  }
                ]
              },
              text: `The diagonal of a quadrilateral shaped field is 24 m and the perpendiculars dropped on it from the remaining opposite vertices are 8 m and 13 m. Find the area of the field. 
              
              Area of quadrilateral = 1/2 x d x (h₁+h₂)
              = 1/2 x ?0 x ( ?1 + ?2 )
              = ?3 m²
              24, 8, 13, 252`
            },

            `The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area.
            Area of rhombus = 1/2 d₁ d₂
            = 1/2 x ?0 x ?1
            = ?2 cm²
            7.5, 12, 45`,

            `Find the area of a rhombus whose side is 5 cm and whose altitude is 4.8 cm. If one of its diagonals is 8 cm long, find the length of the other diagonal.
            Area of rhombus = base x height
            = ?0 x ?1 = ?2 cm²
            d₂ = 2 x A/d₁ = 2 x ??2/?3
             = ?4 cm
            5, 4.8, 24, 8, 6`,

            `The floor of a building consists of 3000 tiles which are rhombus shaped and each of its diagonals are 45 cm and 30 cm in length. Find the total cost of polishing the floor, if the cost per m² is ₹ 4.
            Area of 1 tile = 1/2 d₁ d₂ 
            = 1/2 x ?0 x ?1 = ?2 cm² ##<mul, 45, 15> 
            Floor area = area of tile x total tiles
            = ?3 x ?4 = ?5 cm² ##<mul, 675, 3> 
            = ?6 m²
            Cost of polishing = ??6 x ?7 = ₹ ?8
            45, 30, 675, 675, 3000, 2025000, 202.5, 4, 810`
          ]
        },

        {
          list: [
            {
              svg: {
                width: 260,
                height: 180,
                paths: [
                  'M 15 36 L 251 39',
                  'M 15 150 L 251 153 ',
                  'M 87 37 L 25 149',
                  'M 188 38 L 240 152',
                  'M 107 37 L 105 77 M 99 43 L 107 38 L 113 44 ',
                  'M 103 151 L 105 103 M 95 145 L 103 150 L 109 144 '
                ],
                texts: [
                  { str: 'Road', x: 111, y: 19, width: 46, height: 16 },
                  { str: 'River', x: 108, y: 157, width: 46, height: 16 },
                  { str: '100 m', x: 79, y: 78, width: 46, height: 16 }
                ]
              },
              text: `Mohan wants to buy a trapezium shaped field. Its side along the river is parallel to and twice the side along the road. If the area of this field is 10500 m² and the perpendicular distance between the two parallel sides is 100 m, find the length of the side along the river.
              Area of trapezium = h x (a+b)/2
              The sides a and b are not given, but b is twice a.
              A = h x 3a/2
              a = A/h x 2/3
              = ?0/?1 x 2/3 = ?2 x 2/3 = ?3 m
              Length of the side along the river 
               = ?4 m
              10500, 100, 105, 70, 140`
            },

            {
              svg: {
                width: 200,
                height: 150,
                paths: [
                  'M 166 102 L 121 140 L 56 139 L 12 100 L 12 51 L 62 7 L 130 8 L 167 49 Z ',
                  {
                    d: 'M 11 52 L 168 49 ',
                    fill: 'none',
                    strokeDasharray: '3'
                  },
                  { d: 'M 63 6 L 61 52 ', fill: 'none', strokeDasharray: '3' },
                  'M 176 49 L 182 49 M 179 49 L 179 65 ',
                  'M 176 102 L 182 102 M 179 102 L 179 81 '
                ],
                texts: [
                  { str: '4 m', x: 65, y: 18, width: 27, height: 14 },
                  { str: '11 m', x: 84, y: 51, width: 27, height: 14 },
                  { str: '5 m', x: 167, y: 64, width: 27, height: 14 }
                ]
              },
              text: `Top surface of a raised platform is in the shape of a regular octagon as shown in the figure. Find the area of the octagonal surface.
The octogan can be split into 3 parts.
2 trapezium of same area at the top and bottom, and a rectangle at the center.
area of rectangle = length x breadth
= ?0 x ?1 = ?2 m²
area of trapezium = h x (a+b)/2
= ?3 x ?4/2 = ?5 m²
Area of octagon = 2 x ?6 + ?7
= ?8 m²
11, 5, 55, 4, 16, 32, 32, 55, 119`
            },
            {
              svg: {
                width: 430,
                height: 170,
                paths: [
                  'M 88 8 L 138 69 L 138 143 L 35 143 L 35 67 Z ',
                  'M 239 6 L 289 67 L 289 141 L 186 141 L 186 65 Z M 186 131 L 195 131 L 195 141 M 239 130 L 249 130 L 249 140 M 289 130 L 278 130 L 278 140 ',
                  'M 364 4 L 414 65 L 414 139 L 311 139 L 311 63 Z M 311 129 L 320 129 L 320 139 M 414 129 L 406 129 L 406 139 ',
                  'M 20 67 L 20 92 M 17 67 L 23 67 ',
                  'M 158 7 L 158 32 M 155 7 L 161 7 ',
                  'M 126 70 L 126 95 M 123 70 L 129 70 ',
                  'M 20 142 L 20 110 M 17 142 L 23 142 ',
                  'M 35 158 L 67 158 M 35 155 L 35 161 ',
                  'M 137 157 L 105 157 M 137 154 L 137 160 ',
                  'M 155 143 L 157 53 M 152 143 L 158 143 ',
                  'M 126 143 L 126 111 M 123 143 L 129 143 ',
                  {
                    d: 'M 239 6 L 239 141',
                    fill: 'none',
                    strokeDasharray: '3'
                  },
                  {
                    d: 'M 311 63 L 414 65 ',
                    fill: 'none',
                    strokeDasharray: '3'
                  }
                ],
                texts: [
                  {
                    str: '15 m',
                    x: 8,
                    y: 97,
                    width: 24,
                    height: 13,
                    fontSize: '12px'
                  },
                  {
                    str: '30 m',
                    x: 144,
                    y: 34,
                    width: 24,
                    height: 13,
                    fontSize: '12px'
                  },
                  {
                    str: '15 m',
                    x: 113,
                    y: 96,
                    width: 24,
                    height: 13,
                    fontSize: '12px'
                  },
                  {
                    str: '15 m',
                    x: 73,
                    y: 149,
                    width: 24,
                    height: 13,
                    fontSize: '12px'
                  },
                  {
                    str: 'Joyti',
                    x: 200,
                    y: 150,
                    width: 44,
                    height: 13,
                    fontSize: '12px'
                  },
                  {
                    str: 'Kavita',
                    x: 350,
                    y: 150,
                    width: 44,
                    height: 13,
                    fontSize: '12px'
                  }
                ]
              },
              text: `There is a pentagonal shaped park as shown in the figure. For finding its area Jyoti and Kavita divided it in two different ways. Find the area of this park using both ways.
              Joyti created two trapeziums of equal area.
              A = 2 x h x (a+b)/2
              = 2 x ?0 x ?1/2 = ?2 m² ##<mul, 75, 45>
              Kavita created a triangle and square.
              A of triangle = 1/2 x ?3 x ?4
              = ?5 m² ##<div, 225, 2>
              A of square = ?6 x ??6
              = ?7 m²
              Total area = ??5 + ??7 = ?8 m²
              7.5, 45, 337.5, 15, 15, 112.5, 15, 225, 337.5`
            },
            {
              svg: {
                width: 170,
                height: 170,

                paths: [
                  'M 18 24 L 123 24 L 123 146 L 18 146 L 18 24 ',
                  'M 38 47 L 101 47 L 101 125 L 38 125 L 38 47 ',
                  'M 18 24 L 39 48 M 122 24 L 101 47 M 123 146 L 101 125 M 18 146 L 38 125 ',
                  'M 140 146 L 140 98 M 137 146 L 144 146 ',
                  'M 18 154 L 50 154 M 18 151 L 18 158 ',
                  'M 122 154 L 92 154 M 122 151 L 122 158 ',
                  'M 141 24 L 141 80 M 138 24 L 145 24 '
                ],
                texts: [
                  {
                    str: '28 cm',
                    x: 128,
                    y: 80,
                    width: 32,
                    height: 12,
                    fontSize: '12px'
                  },
                  {
                    str: '24 cm',
                    x: 55,
                    y: 147,
                    width: 32,
                    height: 12,
                    fontSize: '12px'
                  },
                  {
                    str: '16 cm',
                    x: 52,
                    y: 110,
                    width: 32,
                    height: 12,
                    fontSize: '12px'
                  },
                  {
                    str: '20 cm',
                    x: 76,
                    y: 75,
                    width: 32,
                    height: 12,
                    rot: 270,
                    fontSize: '12px'
                  }
                ]
              },
              text: `Diagram of the adjacent picture frame has outer dimensions = 24 cm × 28 cm and inner dimensions 16 cm × 20 cm. Find the area of each section of the frame, if the width of each section is same.
              It has 4 section. Top and bottom are similar and have equal area.
              Similarly, left and right section have equal area.
              Each section is a trapezium.
              width of frame = ?0 cm
              Area of top = h x (a+b)/2
              = ?1 x ?2/2 = ?3 cm²
              Area of left = ??1 x ?4/2
               = ?5 cm²
              4, 4, 40, 80, 48, 96`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ex3',
      label: 'Ex 11.3: Surface Area of cube and cylinder',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            {
              svg: {
                width: 370,
                height: 160,

                paths: [
                  'M 15 67 L 130 67 L 130 137 L 15 137 L 15 67 L 68 42 L 177 43 L 177 109 L 130 137 M 130 67 L 177 43 ',
                  'M 219 44 L 318 45 L 320 135 L 220 134 L 219 43 L 270 19 L 353 20 L 353 98 L 320 135 M 317 45 L 353 20 '
                ],
                texts: [
                  { str: '60 cm', x: 46, y: 137, width: 43, height: 14 },
                  { str: '50 cm', x: 248, y: 134, width: 43, height: 14 },
                  {
                    str: '50 cm',
                    x: 291,
                    y: 77,
                    width: 43,
                    height: 14,
                    rot: 270
                  },
                  {
                    str: '50 cm',
                    x: 321,
                    y: 112,
                    width: 43,
                    height: 14,
                    rot: 310
                  },
                  {
                    str: '40 cm',
                    x: 138,
                    y: 120,
                    width: 43,
                    height: 14,
                    rot: 330
                  },
                  {
                    str: '50 cm',
                    x: 102,
                    y: 95,
                    width: 43,
                    height: 14,
                    rot: 270
                  }
                ]
              },
              text: `There are two cuboidal boxes as shown in the adjoining figure. Which box requires the lesser amount of material to make?
              The first one is a cuboid.
              𝑙 = 60 cm, b = 40 cm, h = 50 cm
              TSA = 2 (𝑙𝑏 + 𝑏𝒽 + 𝒽𝑙)
              = 2 x ( ?0 + ?1 + ?2 )
              = 2 x ?3 = ?4 cm²
              The second one is a cube.
              TSA = 6 x side x side = 6 x ?5 x ??5
              = 6 x ?6 = ?7 cm²
              The #<?8, first, second> box requires lesser amount of material.
              2400, 2000, 3000, 7400, 14800, 50, 2500, 15000, first`
            },

            `A suitcase with measures 80 cm × 48 cm × 24 cm is to be covered with a tarpaulin cloth. How many metres of tarpaulin of width 96 cm is required to cover 100 such suitcases?
             𝑙 = 80 cm, b = 48 cm, h = 24 cm
            TSA = 2 (𝑙𝑏 + 𝑏𝒽 + 𝒽𝑙) ##<mul, 48, 24>
             = 2 x ( ?0 + ?1 + ?2 )
             = 2 x ?3 = ?4 cm² ##<add, 3840, 1152, 1920>
             Length of tarpaulin cloth required 
             = A/width = ?5/?6 = ?7 cm ##<div, 13824, 96>
             = ?8 m
  3840, 1152, 1920, 6912, 13824, 13824, 96, 14400, 144`,

            `Find the side of a cube whose surface area is 600 cm².
  TSA of cube = 6 x side x side = ?0 cm²
  SA of 1 side = ?1 cm²
  side = ?2 cm
  600, 100, 10`,

            `Rukhsar painted the outside of the cabinet of measure 1 m × 2 m × 1.5 m. How much surface area did she cover if she painted all except the bottom of the cabinet
   𝑙 = 1 m, b = 2 m, h = 1.5 m
  Surface area excluding base
  = 2 (𝑏𝒽 + 𝒽𝑙) + 𝑙𝑏
  = 2 ( ?0 + ?1 ) + ?2
  = ?3 m²
  3, 1.5, 2, 11`,

            `Daniel is painting the walls and ceiling of a cuboidal hall with length, breadth and height of 15 m, 10 m and 7 m respectively. From each can of paint 100 m² of area is painted. How many cans of paint will she need to paint the room?
   𝑙 = 15 m, b = 10 m, h = 7 m
  Surface area excluding base
  = 2 (𝑏𝒽 + 𝒽𝑙) + 𝑙𝑏
  = 2 ( ?0 + ?1) + ?2
  = ?3 + ??2
  = ?4 m²
  No. of cans = {Total Area}/{Area per can}
  = ??4/?5 = ?6 cans
  70, 105, 150, 350, 500, 100, 5`
          ]
        },
        {
          list: [
            {
              svg: {
                width: 340,
                height: 180,

                paths: [
                  'M 192 49 L 291 50 L 293 140 L 193 139 L 192 48 L 243 24 L 326 25 L 326 103 L 293 140 M 290 50 L 326 25 ',
                  'M 77 15 C 107 15 131 23 133 32 C 133 41 108 49 77 49 C 46 49 22 42 21 32 C 20 23 44 16 77 15 M 21 31 L 21 135 Q 70 165 133 135 L 133 32 ',
                  'M 20 159 L 52 159 M 19 153 L 19 163 ',
                  'M 132 159 L 100 159 M 133 153 L 133 163 '
                ],
                texts: [
                  {
                    str: '7 cm',
                    x: 294,
                    y: 58,
                    width: 43,
                    height: 14,
                    rot: 270
                  },
                  {
                    str: '7 cm',
                    x: 295,
                    y: 118,
                    width: 43,
                    height: 14,
                    rot: 310
                  },
                  { str: '7 cm', x: 54, y: 151, width: 43, height: 14 },
                  {
                    str: '7 cm',
                    x: 124,
                    y: 81,
                    width: 43,
                    height: 14,
                    rot: 270
                  },
                  { str: '7 cm', x: 218, y: 141, width: 42, height: 15 }
                ]
              },
              text: `Describe how the two figures at the right are alike and how they are different. Which box has larger lateral surface area?
              The first figure is a cylinder of diameter and height 7 cm.
              The second figure is a cube of sides 7 cm.
              LSA of cylinder = 2π𝑟𝒽
              = 2 x 22/7 x ?0 x ?1
              = ?2 cm² ##<mul, 22, 7>
              LSA of cube = 4 x side x side
              = 4 x ?3 = ?4 cm² 
              Therefore, #<?5, cylinder, cube> has larger LSA.
               3.5, 7, 154, 49, 196, cube`
            },

            `A closed cylindrical tank of radius 7 m and height 3 m is made from a sheet of metal. How much sheet of metal is required?
            We need to find TSA
            TSA = 2π𝑟(𝑟+𝒽)
            = 2 x 22/7 x 7 x ( ?0 + ?1)
            = ?2 x ?3 = ?4 m² 
  7, 3, 44, 10, 440`,

            `The lateral surface area of a hollow cylinder is 4224 cm². It is cut along its height and formed a rectangular sheet of width 33 cm. Find the perimeter of rectangular sheet?
  Height (𝒽) of the cylinder is the width of rectangle.
  Circumference (2π𝑟) of the base is the length of rectangle.
  LSA = 2π𝑟𝒽
  𝓁 = A/𝒽 = ?0/?1 = ?2 cm ##<div, 4224, 33>
  Perimeter of rectangle = 2 ( ??2 + ??1 )
  = 2 x ?3 = ?4 cm²
  4224, 33, 128, 161, 322 `,

            `A road roller takes 750 complete revolutions to move once over to level a road. Find the area of the road if the diameter of a road roller is 84 cm and length is 1 m.
  Area covered in 1 revolution
   = 2π𝑟 x 𝓁 = 2 x 22/7 x ?0 x ?1
        = ?2 x ?3 = ?4 cm² ##<mul, 44, 6>
  Area covered in 750 revolution
  = ??4 x 750 = ?5 cm² ##<mul, 264, 75>
  = ?6 m²
  42, 100, 44, 600, 26400, 19800000, 1980`,

            `A company packages its milk powder in cylindrical container whose base has a diameter of 14 cm and height 20 cm. Company places a label around the surface of the container. If the label is placed 2 cm from top and bottom, what is the area of the label.
  Height of label = ?0 cm
  Radius of label = ?1 cm
  LSA = 2π𝑟𝒽 = 2 x 22/7 x ?2 x ?3
   = ?4  cm² ##<mul, 44, 16>
  16, 7, 7, 16, 704`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ex4',
      label: 'Ex 11.4: Volume of cylinder & cube',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `Given a cylindrical tank, in which situation will you find surface area and in which situation volume.
(a) To find how much it can hold.
#<?0, surface area, volume>
(b) Number of cement bags required to plaster it.
#<?1, surface area, volume>
(c) To find the number of smaller tanks that can be filled with water from it.
#<?2, surface area, volume>
volume, surface area, volume`,

            `Diameter of cylinder A is 7 cm, and the height is 14 cm. Diameter of cylinder B is 14 cm and height is 7 cm. Without doing any calculations can you suggest whose volume is greater? Verify it by finding the volume of both the cylinders. Check whether the cylinder with greater volume also has greater surface area?
V = π𝑟²h
Cylinder #<?0, A, B> has greater volume.
Volume of cylinder A = 22/7 x 7/2 x 7/2 x ?1
=  ?2 m³ ##<mul, 77, 7>
Volume of cylinder B = 22/7 x 7 x 7 x 7
=  ?3 m³ ##<mul, 22, 49>
B, 14, 539, 1078
`,

            `Find the height of a cuboid whose base area is 180 cm² and volume is 900 cm³ ?
volume = base area x height
height = {volume}/{base area}
 = ?0/?1 = ?2 cm
 900, 180, 5`,

            `A cuboid is of dimensions 60 cm × 54 cm × 30 cm. How many small cubes with side 6 cm can be placed in the given cuboid?
Volume of cuboid = 60 x 54 x 30
 = ?0 m³ ##<mul, 54, 18>
 Volume of small cube = ?1 m³
 No. of cubes = {vol. of cuboid}/{vol. of cube}
  =  ?2/?3 = ?4 ##<div, 97200, 216>
97200, 216,97200, 216, 450`
          ]
        },
        {
          list: [
            `Find the height of the cylinder whose volume is 1.54 m³ and diameter of the base is 140 cm ?
            V = ?0 cm³
            V = π𝑟²h
            h = V/π𝑟²
             = {??0 x 7}/{22 x ?1 x ??1}
            = ?2/7  ##<div, 15400, 22>
            = ?3 cm
            = ?4 m
           1540000, 70, 700, 100, 1`,

            `A milk tank is in the form of cylinder whose radius is 1.5 m and length is 7 m. Find the quantity of milk in litres that can be stored in the tank?
            V = π𝑟²h 
            = 22/7 x ?0/?1 x ??0/??1 x ?2
            = ?3/?4 = ?5 m³
            = ?6 L
            3, 2, 7, 99, 2, 49.5, 49500`,

            `If each edge of a cube is doubled,
(i) how many times will its surface area increase?
(ii) how many times will its volume increase?
Let a be the original side, and 2a be the increased side.
SA = 6 x (2a)²
 = ?0 x 6a²
SA increases by ??0 times
V = (2a)³
= ?1 x a³
V increases by ??1 times
4, 8`,

            `Water is pouring into a cubiodal reservoir at the rate of 60 litres per minute. If the volume of reservoir is 108 m³, find the number of hours it will take to fill the reservoir.
Vol of reservoir = ?0 L
Time to fill = {Volume}/{flow per minute}
= ??0/?1 = ?2  minutes
= ?3 hours
108000, 60, 1800, 30`
          ]
        }
      ]
    }
  ]
};
