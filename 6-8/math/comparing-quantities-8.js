export default {
  id: 'comparing-quantities-8',
  label: 'Comparing Quantities (NCERT 8)',
  list: [
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Exercise 8.1',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `Find the ratio of the following
Speed of a cycle 15 ^km per hour to the speed of scooter 30 ^km per hour.
Ratio = ?0 : ?1
It can be simplified
Ans = ?2 : ?3
15, 30, 1, 2`,

            `Find the ratio of the following
5 ^m to 10 ^km 
The unit should be same for the two numbers we compare.
10 ^km = ?0 ^m
Ratio = ?1 : ?2
It can be simplified as 
?3 : ?4
10000, 5, 10000, 1, 2000 `,

            `Find the ratio of the following
50 paise to ₹ 5
₹ 5 = ?0 paise
Ratio = ?1 : ?2
It can be simplified as 
?3 : ?4
500, 50, 500, 1, 10`,

            `Convert the following ratio to percentage.
3 : 4
In percentage = 3/4 × 100
= ?0 %
75`,

            `Convert the following ratio to percentage.
2 : 3
In percentage = 2/3 × 100
= ?0 ?1/?2 % ##<div, 200, 3>
66, 2, 3`
          ]
        },
        {
          list: [
            `72% of 25 students are interested in mathematics. How many are not interested in mathematics?
% of students not interested in maths = ?0
No. of students not interested in maths
= ??0/100 × 25
= ?1 ^students
28, 7`,

            `A football team won 10 matches out of the total number of matches they played. If their win percentage was 40, then how many matches did they play in all?
Total matches played
= 100/40 × 10
= ?0 ^ matches
25`,

            `If Chameli had ₹ 600 left after spending 75% of her money, how much did she have in the beginning?
% of money left = ?0 %
Chemeli initailly had = 100/??0 × 600
= ₹ ?1
25 , 2400
`,

            `If 60% people in a city like cricket, 30% like football and the remaining like other games, then what per cent of the people like other games? If the total number of people is 50 lakh, find the exact number who like each type of game.
% of people who like other games
= 100 - ?0 = ?1 %
No. of people who like cricket
= 60/100 × 50 = ?2 ^lakhs
No. of people who like cricket
= 30/100 × 50 = ?3 ^lakhs
No. of people who like cricket
= 10/100 × 50 = ?4 ^lakhs
90, 10, 30, 15, 5`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Exercise 8.2',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          list: [
            `A man got a 10% increase in his salary. If his new salary is ₹ 1,54,000, find his original salary.
Old Salary = {100}/{100 + increase%} × New Salary
= 100/?0 × ?1
= ₹ ?2 ##<div, 154000, 11>
110, 154000, 140000`,

            `On Sunday 845 people went to the Zoo. On Monday only 169 people went. What is the per cent decrease in the people visiting the Zoo on Monday?
Decrease in number of people 
= ?0 - ?1 = ?2
% in decrease = ??2/845 × 100
= ?3/?4 × 100 ##<hcf, 676, 845>
= ?5 %
845, 169, 676, 4, 5, 80`,

            `A shopkeeper buys 80 articles for ₹ 2,400 and sells them for a profit of 16%. Find the selling price of one article.
CP of 1 article
= ?0/?1 = ₹ ?2
SP of 1 article = {CP × (100 + profit%)}/{100}
= {??2 × ?3}/{100}
= ₹ ?4 ##<mul, 116, 3>
2400, 80, 30, 116, 34.80`,

            `The cost of an article was ₹ 15,500. ₹ 450 were spent on its repairs. If it is sold for a profit of 15%, find the selling price of the article.
Adjected CP = ?0 + ?1
= ₹ ?2
SP = {CP × (100 + profit%)}/{100}
= {??2 × ?3}/{100}
= ₹ ?4 ##<mul, 1595, 115>
15500, 450, 15950, 115, 18342.50`
          ]
        },
        {
          list: [
            `A VCR and TV were bought for ₹ 8,000 each. The shopkeeper made a loss of 4% on the VCR and a profit of 8% on the TV. Find the gain or loss percent on the whole transaction.
SP of VCR = {CP × (100 - loss%)}/{100}
= {8000 × ?0}/{100} = ₹ ?1 ##<mul, 96, 8>
SP of TV = {CP × (100 + profit%)}/{100}
= {8000 × ?2}/{100} = ₹ ?3 ##<mul, 108, 8>
SP of both = ??1 + ??3
= ₹ ?4
It is a #<?5, Profit, Loss> of ₹ ?6
??5 % = ??6/?7 × 100 = ?8 %
96, 7680, 108, 8640, 16320, Profit, 320, 16000, 2`,

            `During a sale, a shop offered a discount of 10% on the marked prices of all the items. What would a customer have to pay for a pair of jeans marked at ₹ 1450 and two shirts marked at ₹ 850 each?
MP of 2 shirts = ₹ ?0
Total MP = ₹ ?1
SP after discount 
= {100 - discount%}/{100} × ??1
= ?2/100 × ??1
= ₹ ?3 ##<mul, 315, 9>
1700, 3150, 90, 2835`,

            `A milkman sold two of his buffaloes for ₹ 20,000 each. On one he made a gain of 5% and on the other a loss of 10%. Find his overall gain or loss. (Hint: Find CP of each)
CP of 1st buffalo 
= {SP × 100}/{100 + gain%} = {20000 × 100}/{?0}
= ₹ ?1 ##<divDecimal, 2000000, 105, 3>
CP of 2nd buffalo
= {SP × 100}/{100 - loss%} = {20000 × 100}/{?2}
= ₹ ?3  ##<divDecimal, 200000, 9, 3>
Total CP = ??1 + ??3
=  ₹ ?4
It is a #<?5, Gain, Loss> of ₹ ?6
105, 19047.62, 90, 22222.22, 41269.84, Loss, 1269.84`,

            `The price of a TV is ₹ 13,000. The sales tax charged on it is at the rate of 12%. Find the amount that Vinod will have to pay if he buys it.
Sales Tax = 12/100 × 13000
= ₹ ?0 ##<mul, 12, 13>
Total cost = 13000 + ??0
= ₹ ?1
1560, 14560`
          ]
        },
        {
          list: [
            `Arun bought a pair of skates at a sale where the discount given was 20%. If the amount he pays is ₹ 1,600, find the marked price.
Marked Price = {100}/{100 - discount%} × SP
= 100/?0 × ?1
= ₹ ?2
80, 1600, 2000`,

            `I purchased a hair-dryer for ₹ 5,400 including 8 % VAT. Find the price before VAT was added.
Price before VAT
= {100}/{100 + VAT%} × SP
= 100/?0 × ?1
= ₹ ?2 
108, 5400, 5000`,

            `An article was purchased for ₹ 1239 including GST of 18%. Find the price of the article before GST was added?
Price before GST
= {100}/{100 + GST%} × SP
= 100/?0 × ?1
= 100/?2 × ?3 ##<hcf, 118, 1239>
= ₹ ?4 ##<mul, 21, 5>
118, 1239, 2, 21, 1050`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-3',
      label: 'Compound Interest (Ex 8.3)',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        inputType: 'small'
      },
      data: [
        {
          title: `Calculate the amount and compound interest on`,
          list: [
            `₹ 10,800 for 3 years at 12 1/2 % per annum compounded annually.
A = P ~!( 1 + R/100 ~!)^T
R = ?0/?1 %
= 10800 × ~!( 1 + ??0/?2 ~!)^3
= 10800 ×  ~!( ?3/?4 ~!)^3
= 10800 × ?5/?6
= ?7 × ??5/?8 ##<hcf, 10800, 512>
= ?9/??8 ##<mul, 675, 729>
= ₹ ?10 ##<divDecimal, 492075, 32, 2>
CI = ??10 - 10800 = ₹ ?11
25, 2, 200, 9, 8, 729, 512, 675, 32, 492075, 15377.34, 4577.34`,

            `₹ 18,000 for 2 1/2 years at 10% per annum compounded annually
A = 18000 × ~!( 1 + 10/100 ~!)^2 × ~!( 1 + 5/100 ~!)
= 18000 × ~!( 11/10 ~!)^2 × ~!( 21/20 ~!)
= 18000 × 121/100 × 21/20
= ₹ 22,869
CI = ?0 - ?1 = ₹ ?2
22869, 18000, 4869`,

            `₹ 62,500 for 1 1/2 years at 8% per annum compounded half yearly
T = ?0 , R = ?1
A = 62500 × ~!( 1 + 4/100 ~!)^3
= 62500 × ~!( 26/25 ~!)^3
= ₹ 70304
CI = ?2 - ?3 = ₹ ?4
3, 4, 70304, 62500, 7804`,

            `₹ 8,000 for 1 year at 9% per annum compounded half yearly
T = ?0 , R = ?1/?2
A = P ~!( 1 + R/100 ~!)^T
A = 8000 × ~!( 1 + 9/200 ~!)^2
= 8000 × ~!( 209/200 ~!)^2
= 8000 × 43681/40000
= 8736.20
CI = ?3 - ?4 = ₹ ?5
2, 9, 2, 8736.20, 8000, 736.20`
          ]
        }
      ]
    }
  ]
};
