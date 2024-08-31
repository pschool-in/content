export default {
  label: 'Ratio and Proportion - 6',
  id: 'ratio-6',
  list: [
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Exercise 12.1',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `There are 20 girls and 15 boys in a class.
(a) What is the ratio of number of girls to the number of boys?
(b) What is the ratio of number of girls to the total number of students in the class?

(a) Ans = ?0 : ?1
It can be simplified into
?2 : ?3
(b) Ans = ?4 : ?5
It can be simplified into
?6 : ?7
20, 15, 4, 3, 20, 35, 4, 7`,

            `Out of 30 students in a class, 6 like football, 12 like cricket and remaining like tennis. Find the ratio of
(a) Number of students liking football to number of students liking tennis.
(b) Number of students liking cricket to total number of students.
(a) Ans = ?0 : ?1
It can be simplified into
?2 : ?3
(b) Ans = ?4 : ?5
It can be simplified into
?6 : ?7
6, 12, 1, 2, 12, 30, 2, 5`,

            {
              svg: {
                width: 300,
                height: 200,
                paths: [
                  {
                    d: 'M 5 5 L 293 5 L 293 195 L 5 195 L 5 5 M 258 144 C 269 144 278 153 279 165 C 279 176 270 185 258 185 C 247 185 238 176 237 165 C 237 154 246 145 258 144 M 76 119 C 94 119 109 135 110 154 C 110 174 95 189 76 190 C 58 190 43 174 42 154 C 41 135 56 120 76 119 M 278 50 L 213 39 L 262 16 Z M 178 176 L 153 115 L 198 144 Z M 41 48 L 80 88 L 24 102 Z M 76 42 L 130 23 L 152 75 L 100 95 L 76 42 M 201 70 L 238 70 L 238 105 L 201 105 L 201 70 ',
                    strokeWidth: 2,
                    stroke: '#666',
                    strokeLinecap: 'round'
                  }
                ]
              },
              text: `See the figure and find the ratio of
(a) Number of triangles to the number of circles inside the rectangle.
(b) Number of squares to all the figures inside the rectangle.
(c) Number of circles to all the figures inside the rectangle.
(a) Ans = ?0 : ?1
(b) Ans = ?2 : ?3
(c) Ans = ?4 : ?5
3, 2, 2, 7, 2, 7`
            },

            `Distances travelled by Hamid and Akhtar in an hour are 9 ^km and 12 ^km. Find the
ratio of speed of Hamid to the speed of Akhtar.
Ans = ?0 : ?1
It can be simplified into
?2 : ?3
9, 12, 3, 4`,

            `Fill in the following blanks:
15/18 = ?0/6
= 10/?1 = ?2/30
5, 12, 25`
          ]
        },
        {
          title: `Find the ratio of the following:`,
          list: [
            `(a) 81 to 108
HCF of 81 and 108 =
?0 ##<hcf, 81, 108>
Dividing both numbers by their HCF, we get the required ratio
Ans = ?1 : ?2
27, 3, 4`,

            `(b) 98 to 63
HCF of 98 and 63 =
?0 
Ans = ?1 : ?2
7, 14, 9`,

            `(c) 33 ^km to 121 ^km
HCF of 33 and 121 =
?0 
Ans = ?1 : ?2
11, 3, 11`,

            `(d) 30 minutes to 45 minutes
HCF of 30 and 45 =
?0 
Ans = ?1 : ?2
15, 2, 3`
          ]
        },
        {
          title: `Find the ratio of the following:`,
          list: [
            `30 minutes to 1.5 hours
We need to keep the units same for both numbers.
1.5 hrs = ?0 minutes
HCF = ?1
Ans = ?2 : ?3
90, 30, 1, 3`,

            `40 ^cm to 1.5 ^m
1.5  ^m = ?0 ^cm
HCF = ?1
Ans = ?2 : ?3
150, 10, 4, 15`,

            `55 paise to ₹ 1 
₹ 1 = ?0 paise
HCF = ?1
Ans = ?2 : ?3
100, 5, 11, 20`,

            `500 mL to 2 litres
2 litres = ?0 mL
HCF = ?1
Ans = ?2 : ?3
2000, 500, 1, 4`
          ]
        },
        {
          list: [
            `In a year, Seema earns ₹ 1,50,000 and saves ₹ 50,000. Find the ratio of
(a) Money that Seema earns to the money she saves.
(b) Money that she saves to the money she spends.
(a) HCF of money earned and saved
= ?0 ##<hcf, 150000, 50000>
Ans = ?1 : ?2
(b) Money spend = ₹ ?3
Ans = ?4 : ?5
50000, 3, 1, 100000, 1, 2`,

            `There are 102 teachers in a school of 3300 students. Find the ratio of the number
of teachers to the number of students.
HCF  = ?0 ##<hcf, 102, 3300>
Ans = ?1 : ?2
6, 17, 550`,
            `In a college, out of 4320 students, 2300 are girls. Find the ratio of
(a) Number of girls to the total number of students.
(b) Number of boys to the number of girls
(a) HCF of 2300 and 4320
= ?0 ##<hcf, 2300, 4320>
Ans = ?1 : ?2
(b) No. of boys = 4320 - 2300
= ?3
= ?4 : ?5
20, 115, 216, 2020, 101, 115`,

            `Out of 1800 students in a school, 750 opted basketball, 800 opted cricket and remaining opted table tennis. If a student can opt only one game, find the ratio of
(a) Number of students who opted basketball to the number of students who opted table tennis.
(b) Number of students who opted cricket to the number of students opting basketball.
(c) Number of students who opted basketball to the total number of students.
(a) No. of students opted table tennis = ?0
HCF of 750 and ??0 
= ?1
Ans = ?2 : ?3
(b) HCF of 800 and 750 = ?4
Ans = ?5 : ?6
(c) HCF of 750 and 1800 
= ?7  ##<hcf, 750, 1800>
Ans = ?8 : ?9
250, 250, 3, 1, 50, 16, 15, 150, 5, 12`
          ]
        },
        {
          list: [
            `Cost of a dozen pens is ₹ 180 and cost of 8 ball pens is ₹ 56. Find the ratio of the cost
of a pen to the cost of a ball pen.
Cost of 1 pen = ?0
Cost of 1 ball pen = ?1
Ans = ?2 : ?3
15, 7, 15, 7`,
            {
              widths: '170, 160',
              text: ` Consider the statement: Ratio of breadth and length of a hall is 2 : 5. Complete the following table that shows some possible breadths and lengths of the hall.
Breadth of hall (in ^m ) | Length of hall (in ^m )
10 | 25
?0 | 50
40 | ?1
20, 100`
            },
            `Mother wants to divide ₹ 36 between her daughters Shreya and Bhoomika in the ratio of their ages. If age of Shreya is 15 years and age of Bhoomika is 12 years, find how much Shreya and Bhoomika will get.
Ratio of ages = 15 : 12
= ?0 : ?1
Total parts = ?2
Value of 1 part = 36/??2 = ?3
Shreya gets = ??0 x ??3
= ₹ ?4
Bhoomika gets = ??1 x ??3
= ₹ ?5
5, 4, 9, 4, 20, 16`,

            `Present age of father is 42 years and that of his son is 14 years. Find the ratio of
(a) Present age of father to the present age of son.
(b) Age of the father to the age of son, when son was 12 years old.
(c) Age of father after 10 years to the age of son after 10 years.
(d) Age of father to the age of son when father was 30 years old.
(a) HCF of 42 and 14 = ?0
Ans = ?1 : ?2
(b) HCF of 40 and 12 = ?3
Ans = ?4 : ?5
(c) HCF of 52 and 24 = ?6
Ans = ?7 : ?8
(c) HCF of 30 and 2 = ?9
Ans = ?10 : ?11
14, 3, 1, 4, 10, 3, 4, 13, 6, 2, 15, 1`
          ]
        }
      ]
    },
    {
      id: 'true-false',
      label: 'True or False (Ex 12.2)',
      type: 'classifySentence',
      commonData: {
        title: 'True or False',
        fontSize: '1.3rem'
      },
      data: [
        {
          title: 'Determine if the following are in proportion.',
          types: [
            {
              name: 'Yes',
              text: `15, 45, 40, 120
4, 6, 8, 12
33, 44, 75, 100`
            },
            {
              name: 'No',
              text: `33, 121, 9,96
24, 28, 36, 48
32, 48, 70, 210`
            }
          ]
        },
        {
          title:
            'Write True (T) or False (F) against each of the following statements :',
          types: [
            {
              name: 'True (T)',
              text: `16 : 24 :: 20 : 30
21: 6 :: 35 : 10
8 : 9 :: 24 : 27
0.9 : 0.36 :: 10 : 4`
            },
            {
              name: 'False (F)',
              text: `12 : 18 :: 28 : 12
5.2 : 3.9 :: 3 : 4`
            }
          ]
        },
        {
          title: 'Are the following statements true?',
          fontSize: '1rem',
          types: [
            {
              name: 'True',
              text: `40 persons : 200 persons = ₹ 15 : ₹ 75
7.5 ^litres : 15 ^litres = 5 ^kg : 10 ^kg
99 ^kg : 45 ^kg = ₹ 44 : ₹ 20
32 ^m : 64 ^m = 6 ^sec : 12 ^sec`
            },
            {
              name: 'False',
              text: `45 ^km : 60 ^km = 12 ^hours : 15 ^hours`
            }
          ]
        },
        {
          title: 'Determine if the following ratios form a proportion.',
          fontSize: '1rem',
          types: [
            {
              name: 'True',
              text: `25 ^cm : 1 ^m and ₹ 40 : ₹ 160
39 ^l : 65 ^l and 6 bottles : 10 bottles
200 mL : 2.5 litre and ₹ 4 : ₹ 50`
            },
            {
              name: 'False',
              text: `2 ^kg : 80 ^kg and 25 ^g : 625 ^g`
            }
          ]
        }
      ]
    },
    {
      label: 'Middle and Extreme terms',
      type: 'group',
      id: 'eqn-or-not',
      data: [
        {
          title: '25 𝑐𝑚 : 1 𝑚 and ₹ 40 : ₹ 160',
          types: [
            {
              name: 'Middle Terms',
              text: '1 𝑚, ₹ 40'
            },
            {
              name: 'Extreme Terms',
              text: '25 𝑐𝑚, ₹ 160'
            }
          ]
        },
        {
          title: '39 L : 65 L and 6 bottles : 10 bottles',
          types: [
            {
              name: 'Middle Terms',
              text: '65 L , 6 bottles'
            },
            {
              name: 'Extreme Terms',
              text: '39 L, 10 bottles'
            }
          ]
        },
        {
          title: '200 mL : 2.5 litre and ₹ 4 : ₹ 50',
          types: [
            {
              name: 'Middle Terms',
              text: '2.5 litre, ₹ 4'
            },
            {
              name: 'Extreme Terms',
              text: '200 mL, ₹ 50'
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Exercise 12.3',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `If the cost of 7 ^m of cloth is ₹ 1470, find the cost of 5 ^m of cloth.
Cost of 1 ^m = 1470/7
= ₹ ?0  ##<div, 1470, 7>
Cost of 5 ^m = ??0 x 5
= ₹ ?1  ##<mul, 210, 5>
210, 1050`,

            `Ekta earns ₹ 3000 in 10 days. How much will she earn in 30 days?
Earnings in 1 day = 3000/10
= ₹ ?0
Earnings in 30 days = ??0 x 30
= ₹ ?1
300, 9000`,

            `If it has rained 276 𝑚𝑚 in the last 3 days, how many 𝑐𝑚 of rain will fall in one
full week (7 days)? Assume that the rain continues to fall at the same rate.
Rain in 1 day = ?0/?1 = 
= ?2 𝑚𝑚 ##<div, 276, 3>
Rain in 1 week = ??2 x ?3
= ?4 𝑚𝑚 ##<mul, 92, 7>
= ?5 𝑐𝑚
276, 3, 92, 7, 644, 64.4`,
            `Cost of 5 ^kg of wheat is ₹ 91.50.
(a) What will be the cost of 8 ^kg of wheat?
(b) What quantity of wheat can be purchased in ₹ 183?
(a) Cost of 1 ^kg = ?0/?1
= ₹ ?2 ##<div, 915, 5>
Cost of 8 ^kg = ??2 x 8
= ₹ ?3 ##<mul, 183, 8>
(b) Quantity can be bought
= 183/??2 = ?4 ^kg
91.50, 5, 18.30, 146.40, 10`
          ]
        },
        {
          list: [
            `The temperature dropped 15 degree celsius in the last 30 days. If the rate of temperature drop remains the same, how many degrees will the temperature drop in the next ten days?
Drop in temperature in 1 day
= ?0/?1 = ?2 ^degree
In the next 10 days, temperature will drop by
= ??2 x 10 = ?3 ^degree
15, 30, 0.5, 5`,

            `Shaina pays ₹ 15000 as rent for 3 months. How much does she has to pay for a whole year, if the rent per month remains same?
Rent per month = ?0/?1
= ₹ ?2
Rent per year = ??2 x 12
= ₹ ?3
15000, 3, 5000, 60000`,

            `Cost of 4 dozen bananas is ₹ 180. How many bananas can be purchased for ₹ 90?
Cost of 1 dozen = ?0/?1
= ₹ ?2
Quantity of banana for ₹ 90
= ?3/?4 = ?5 ^dozen
= ?6 ^bananas
180, 4, 45, 90, 45, 2, 24`,

            `The weight of 72 books is 9 ^kg. What is the weight of 40 such books?
Weight of 1 book = ?0/?1 = ?2/?3 ^kg
Weight of 40 books = ??2/??3 x 40
= ?4 ^kg
9, 72, 1, 8, 5`
          ]
        },
        {
          list: [
            `A truck requires 108 litres of diesel for covering a distance of 594 ^km. How
much diesel will be required by the truck to cover a distance of 1650 ^km?
Diesel per ^km
= ?0/?1 =  ?2/?3 ##<hcf, 108, 594>
(Find hcf to simplify fraction)
Diesel for 1650 ^km
= ??2/??3 x 1650
= ??2 x ?4 ##<div, 1650, 11>
= ?5 ^litres 
108, 594, 2, 11 , 150, 300`,

            `Raju purchases 10 pens for ₹ 150 and Manish buys 7 pens for ₹ 84. Can you say who got the pens cheaper?
Raju's per pen cost
= ?0/?1 = ₹ ?2
Manish's per pen cost
= ?3/?4 = ₹ ?5
#< ?6, Raju, Manish> 's pen is cheaper
150, 10, 15, 84, 7, 12, Manish`,

            `Anish made 42 runs in 6 overs and Anup made 63 runs in 7 overs. Who made more runs per over?
Anish's runs per over
= ?0/?1 = ?2 ^runs
Anup's runs per over
= ?3/?4 = ?5 ^runs
#<?6, Anish, Anup> made more runs per over
42, 6, 7, 63, 7, 9 , Anup`
          ]
        }
      ]
    },
    {
      id: 'true-false-2',
      label: 'True or False (Concepts)',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Ratios are used to compare quantities.
A ratio may be treated as a fraction.
Four quantities are said to be in proportion, if the ratio of the first and the second quantities is equal to the ratio of the third and the fourth quantities.`
          },
          {
            name: 'False',
            text: `We have to retain the units while writing ratios.| Not needed. We only have to ensure that both numbers are in same units.
The ratios 3:2 and 2:3 are same.`
          }
        ]
      }
    }
  ]
};
