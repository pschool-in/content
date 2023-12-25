export default {
  label: 'Percentage - 7',
  id: 'percent-7',
  video: 'https://youtu.be/wgc2jYQGqaA',
  list: [
    {
      type: 'numberInput',
      id: 'frac-per',
      label: 'Fraction to Percentage',
      commonData: {
        title: 'Convert the following fraction into percentage',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.8rem',
        answerBox: false,
        isSentence: false
      },
      data: [
        `1/2 = ?0 %  | 50
3/4 = ?0 % | 75
7/10 = ?0 % | 70
19/25 = ?0 % | 76
13/20 = ?0 % | 65`,
        //   1/6 = ?0 % | 16.67
        // 9/40 = ?0 % | 22.5

        {
          list: [
            `1/6 = 1/6 × 100 %
= 1/3 × ?0
= ?1 ?2/?3 %
50, 16, 2, 3`,

            `9/40 = 9/40 × 100 %
= 9/2 × ?0
= ?1/2 = ?2 ?3/?4 %
5, 45, 22, 1, 2
`,

            `22 1/2 = ?0/?1
Percentage = ??0/??1 × 100 %
= ??0 × ?2
= ?3 %
45, 2, 50, 2250
`,

            `32/25 = 32/25 × 100 %
= 32 × ?0
= ?1 %
4, 128`,

            `57/50 = 57/50 × 100 %
= 57 × ?0
= ?1 %
2, 114`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'deci-per',
      label: 'Decimal to Percentage',
      data: {
        title: 'Convert the following decimal into percentage.',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.8rem',
        answerBox: false,
        isSentence: false,
        text: `0.77 = ?0 %| 77
0.65 = ?0 %| 65
0.07 = ?0 %| 7
7.1 = ?0 %| 710
1.05 = ?0 %| 105 `
      }
    },
    {
      type: 'numberInput',
      id: 'per-frac',
      label: 'Percentage to Fraction',
      data: {
        title:
          'Express the following percentages as fractions in the lowest forms.',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.8rem',
        answerBox: false,
        isSentence: false,
        text: ` 82 % = 82/100 = ?0/?1 | 41, 50
15 % = 15/100 = ?0/?1 | 3, 20
6 % = 6/100 = ?0/?1 | 3, 50
112 % = 112/100 = ?0/?1 | 28, 25
1 1/5 % = 6/?0 = ?1/?2 | 500, 3, 250
7 2/5 % = ?0/500 = ?1/?2 | 37, 37, 500`
      }
    },
    {
      type: 'numberInput',
      id: 'per-deci',
      label: 'Percentage to Decimal',
      data: {
        title: 'Convert the following percentage to decimal.',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.8rem',
        answerBox: false,
        isSentence: false,
        text: ` 19 % = ?0 | 0.19
103 % = ?0 | 1.03
71 % = ?0 | 0.71
7 % = ?0 | 0.07
150 % = ?0 | 1.5`
      }
    },
    {
      type: 'numberInput',
      id: 'missing-val',
      label: 'Missing value',
      data: {
        title: 'Fill the missing numbers in the below table.',
        type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem',
        list: [
          {
            widths: '100, 100, 140',
            text: `Decimal  | Fraction | Percentage
?0  | 9/10 | ?1 %
0.45  | ?2/?3 | ?4 %
?5 | 85/100 | ?6 %
?7  | ?8/?9| 72 %
0.9, 90, 9, 20, 45, 0.85, 85, 0.72, 18, 25`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Answer the following',
      commonData: {
        title: 'Answer the following',
        type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              text: `Arun spent 72 % of his pocket money for buying books and the remaining money for buying a gift for his friend. What percentage of his total money did Arun spend for buying the gift?
% of money spend for gift
= ?0 - ?1 = ?2 %
100, 72, 28`
            },
            {
              text: `81 % of girls in a class like roses and the remaining like jasmine. What percentage of the girls in the class like jasmine?
% of girls like jasmine
= ?0 - ?1 = ?2 %
100, 81, 19`
            },
            {
              text: `Out of 42 students in a class, 30 students stay in the hostel. Find the percentage of the students staying in the hostel.
% of student staying in hostel
= ?0/?1 × ?2 = ?3/?4 × ??2
= ?5 ?6/?7
30, 42, 100, 5, 7, 71, 3, 7
`
            },
            {
              text: `There are 80 books in a rack and 64 of them are novels. Find the percentage of the novels in the rack.
= ?0/?1 × ?2 = ?3/10 × ??2
= ?4 %
64, 80, 100, 8, 80
`
            }
          ]
        },
        {
          title: `The table given below shows the total number of students and the number of girls studying in primary classes of a school. Express the number of girls as percentage.`,
          list: [
            {
              widths: '50, 100, 100, 100',
              text: `Class | No. of Students  | No. of girls | % of girls
1 | 80 | 40 | ?0 %
2 | 75 | 30 | ?1 %
3 | 60 | 30 | ?2 %
4 | 50 | 20 | ?3 %
5 | 40 | 16 | ?4 %
50, 40, 50, 40, 40 `
            }
          ]
        },
        {
          title: `The total number of questions and the number of correct answers given by a team in a quiz competition in 5 rounds are as follows. Find the percentage of correct answers.`,
          list: [
            {
              widths: '50, 100, 100, 100',
              text: `Round | No. of questions  | No. of right ans | Percentage
1 | 4 | 2 | ?0 %
2 | 10 | 7 | ?1 %
3 | 20 | 11 | ?2 %
4 | 8 | 6 | ?3 %
5 | 5 | 1 | ?4 %
50, 70, 55, 75, 20`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'x % of y',
      commonData: {
        title: 'Answer the following',
        type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              text: `Find 30% of 700
30/100 × 700
= 30 × ?0
= ?1
7, 210
`
            },
            {
              text: `Find 82% of 1500
82/100 × 1500
= 82 × ?0
= ?1
15, 1230
`
            },
            {
              text: `Find 103% of 2000
103/100 × 2000
= 103 × ?0
= ?1
20, 2060
`
            },
            {
              text: `Find 95% of 95
95/100 × 95
= ?0/4 × ?1
= ?2/4 = ?3
19, 19, 361, 90.25
`
            }
          ]
        },
        {
          list: [
            {
              text: `Evaluate: 25% of ₹300
25/100 × 300
= 25 × ?0
= ₹ ?1
3, 75
`
            },
            {
              text: `Evaluate 90% of 800 ^m.
90/100 × 800
= 90 × ?0
= ?1 ^m
8, 720`
            },
            {
              text: `Evaluate 11% of 9 ^m.
11/100 × 9
= ?0/100
= ?1 ^m
= ?2 ^cm
99, 0.99, 99`
            },
            {
              text: `Evaluate 12% of 3 ^kg.
12/100 × 3
= ?0/100
= ?1 ^kg
= ?2 ^g
36, 0.36, 360`
            },
            {
              text: `Evaluate 70% of 19 L.
70/100 × 19
= ?0/100
= ?1 ^L
1330, 13.3`
            },
            {
              text: `Evaluate 60% of 3290.
60/100 × 3290
= 6 × ?0
= ?1
329, 1974`
            },
            {
              text: `Evaluate 25% of 79.4
25/100 × 79.4
= 79.4/?0
= ?1
4, 19.85`
            },
            {
              text: `Evaluate 32% of 500 ^g
32/100 × 500
= 32 × ?0
= ?1 ^g
5, 160`
            }
          ]
        },
        {
          // Ex 9.2 Question 9
          list: [
            {
              text: `Find the whole, if 6% of it is 30
𝑥 × 6/100 = 30
𝑥 = 30 × 100/6
= ?0 × 100
= ?1
5, 500
`
            },
            {
              text: `Find the whole, if 25% of it is ₹ 2450
𝑥 × 25/100 = 2450
𝑥 = 2450 × ?0
= ₹ ?1
4, 9800
`
            },
            {
              text: `Find the whole, if 32% of it is 1.6 ^kg
𝑥 × 32/100 = 1.6
𝑥 = 1.6 × 100/32
𝑥 = 100/?0
= ?1 ^kg                              
20, 5
`
            },
            {
              text: `Find the whole, if 45% of it is 3.6 L.
𝑥 × 45/100 = 3.6
𝑥 = 3.6 × 100/45
= 3.6 × ?0/?1
= ?2 × ??0    
= ?3 L                      
20, 9, 0.4, 8
`
            },
            {
              text: `Find the whole, if 12% of it is 6 ^kg.
𝑥 × 12/100 = 6
𝑥 = 6 × 100/12
= 100/?0
= ?1 ^kg                    
2, 50
`
            },
            {
              text: `Find the whole, if 15% of it is 27 ^minutes.
𝑥 × 15/100 = 27
𝑥 = 27 × 100/15
= 27 × ?0/?1
= ?2 × ??0
= ?3 ^minutes      
= ?4 ^hour              
20, 3, 9, 180, 3
`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-3',
      label: 'Answer the following -2',
      //M7 Exercise 9.2
      commonData: {
        title: 'Answer the following',
        type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          list: [
            {
              text: `Anita bought 2 ^kg of pulses and used 30% of it for making sweets. Find the weight of the pulses used for making sweets.
Weight of pulses used for making sweets
= 2 × 30/100
= 2 × ?0/10
= ??0/?1
= ?2 ^kg
= ?3 ^g
3, 5, 0.6, 600`
            },
            {
              text: `Swetha's monthly income is ₹24,000. She pays 20% of this income as hostel fees. Find the amount she pays as hostel fees.
Money paid as hostel fees
= 24000 × 20/100
= 24000/?0
= ₹ ?1 
5, 4800`
            },
            {
              text: `There are 60 fruit baskets in a shop. Each basket has 120 fruits. The percentage of mangoes in the shop is  50%. Find the number of mangoes in the shop.
No. of boxes of Mango
= 60 × 50/100 = ?0
No. of mangoes = ??0 × ?1 
= ?2
30, 120, 3600 `
            },
            {
              text: `In a class of 75 students, 40% students like football and the remaining like cricket. Find the number of students who like football and cricket.
No. of students like football
= 75 × 40/100 = 75 × ?0/5
= ?1 × ??0 = ?2 students
No. of students like cricket 
= Total students - football liking students
= ?3 - ?4
= ?5 students              
2, 15, 30, 75, 30, 45`
            },
            {
              text: `A survey was conducted among 800 people in a village. 35 % of the people were self-employed. 42 % were farmers and the remaining were employed in factories or office. Find the number of people in each category.
No. of self employed = 35/100 × 800
= 35 × ?0 = ?1
No. of farmers = 42/100 × 800
= 42 × ??0 = ?2 
No. of factory and office employees
= 800 - ( ??1 + ??2 )
= 800 - ?3 = ?4
8, 280, 336, 616, 184`
            }
          ]
        },
        {
          list: [
            {
              text: `Anjali saves ₹ 1,200 every month in a recurring deposit in a bank. If this amount is 2% of her monthly salary, find her monthly salary.
Solution: 
Let the total salary be 𝑥
𝑥 × 2/100 = 1200
𝑥 = 1200 × 100/2
𝑥 = 1200 × ?0
= ₹ ?1
50, 60000`
            },
            {
              text: `Priya uses 225 ^g of maida from a packet to bake a cake. If this quantity is 20% of the maida in the packet, then find the total quantity of the maida in the packet.
Let the total quantity of maida be 𝑥.
𝑥 × 20/100 = 225
𝑥 = 225 × 100/20
𝑥 = 225 × ?0
= ₹ ?1 ^g
5, 1125`
            },
            {
              text: `In a flat, 60% of the area is occupied by bedrooms. If the area occupied by the bedrooms is 720 ^sq.feet , find the total area of the feet.
Let the total area be 𝑥.
𝑥 × 60/100 = 720
𝑥 = 720 × 100/60
= 720 × ?0/?1
= ?2 × ??0
= ?3 ^sq.feet
5, 3, 240, 1200
`
            },
            {
              text: `In an election for selecting the school captain, Arun got 58% of the total votes that were cast. If Arun got 725 votes, find the total votes cast.
Let the total votes be 𝑥.
𝑥 × 58/100 = 725
𝑥 = 725 × 100/58
= 725 × ?0/?1
= ?2 × ??0
= ?3 votes
50, 29, 25, 1250
`
            }
          ]
        },
        {
          list: [
            {
              text: `The price of a suitcase increased from ₹ 3,200 to ₹ 3,500. Find the percentage increase in the price of the suitcase.
Solution:
Increase in Price  = ₹ ?0
Percentage of increase = ??0/?1 × 100
= ??0/?2
= ?3 % 
300, 3200, 32, 9.375`
            },
            {
              text: `The monthly instalment of Rakesh's housing loan is reduced from ₹9,600 to ₹8000. Find the percentage decrease in the instalment amount.
Solution:
Decrease in instalment  = ₹ ?0
Percentage of increase = ??0/?1 × 100
= ??0/?2
= ?3 % (upto 2 decimal points)
1600, 9600, 96, 16.67`
            },
            {
              text: `An overhead tank contained 750 L of water. Due to leakage, 120 L of water got wasted. Find the percentage decrease of water in the tank.
Solution:
Percentage of water wasted
= 120/750 × 100
= 120/?0 × 2
= ?1 × 2 = ?2 %
15, 8, 16`
            }
          ]
        },
        {
          title: 'Find the percentage decrease or increase in the below case.',
          list: [
            {
              text: `The number of students enrolled in Class 1 was 200 last year; the number of students enrolled this year is 235.
Solution:
Increase in students = ?0
% of increase = ??0/?1 × 100
= ??0/?2 = ?3 %
35, 200, 2, 17.5`
            },
            {
              text: `The number of candidates failing in an examination has come down from 15 to 9.
Solution:
Decrease in failing students = ?0
% of decrease = ??0/?1 × 100
= ??0/?2 × 20= ?3 %
6, 15, 3, 40`
            },
            {
              text: `The volume of a balloon has reduced from 120 ~cm3 to 95 ~cm3.
Solution:
Decrease in volume = ?0
% of decrease = ??0/?1 × 100
= ??0/?2 × 5= ?3/?4  = ?5 ?6/?7 %
25, 120, 6, 125, 6, 20, 5, 6`
            },
            {
              text: `The length of a rectangle has increased from 135 ^cm to 150 ^cm.
Solution:
Increase in length = ?0
% of increase = ??0/?1 × 100
= ?2/?3 × 100 = ?4 ?5/?6 %

15, 135, 1, 9, 11, 1, 9 `
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ratio-percent',
      label: 'Ratio to Percentage',
      //M7 Exercise 9.2
      commonData: {
        type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          title: 'Convert the following ratio into percentage.',
          list: [
            {
              text: `3 : 7
Total parts = ?0
First part = 3/??0 × 100 = ?1 %
Second part = 7/??0 × 100 = ?2 %
10, 30, 70`
            },
            {
              text: `1 : 9
Total parts = ?0
First part = 1/??0  × 100  = ?1 %
Second part = 9/??0  × 100 = ?2 %
10, 10, 90`
            },
            {
              text: `12 : 13
Total parts = ?0
First part = 12/??0  × 100 = ?1 %
Second part = 13/??0  × 100 = ?2 %
25, 48, 52`
            },
            {
              text: `3 : 5 : 2
Total parts = ?0
First part = 3/??0  × 100 = ?1 %
Second part = 5/??0  × 100 = ?2 %
Third part = 2/??0  × 100 = ?3 %
10, 30, 50, 20`
            }
          ]
        },
        {
          title: 'Answer the following.',
          list: [
            {
              text: `The ratio of boys and girls in a class is 5:3. Find the percentage of boys and girls in the class.
Solution:
Total parts in ratio = ?0
% of boys = ?1/??0 × 100
= ??1/?2 × 25 = ?3/??2 = ?4 %
% of girls = 100 - ??4 = ?5 %
8, 5, 2, 125, 62.5, 37.5`
            },
            {
              text: `The ratio of red stones to white stones in a necklace is 11:4. Find the percentage of red stones and white stones in a necklace.
Solution:
Total parts in ratio = ?0
% of red stones = ?1/??0 × 100
= ??1/?2 × ?3 = ?4/??2 = ?5 ?6/?7 %
% of white stones 
= 100 - ??5 ??6/??7 = ?8 ?9/3
15, 11, 3, 20, 220, 73, 1, 3 , 26, 2`
            }
          ]
        }
      ]
    }
  ]
};
