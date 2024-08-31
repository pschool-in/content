export default {
  id: 'comparing-quantities-7',
  label: 'Comparing Quantities',
  list: [
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Exercise 8.1',
      data: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        list: [
          `Find the ratio of:
₹ 5 to 50 paise
₹ 5 = ?0 paise
Ratio can be written as 
?1 : ?2
We can simplify by dividing both numbers by their HCF
Ans = ?3 : ?4
500, 500, 50, 10, 1`,

          `15 ^kg to 210 ^g
15 ^kg = ?0 ^g
Ratio can be written as 
?1 : ?2
It can be simplified.
Ans = ?3 : ?4 ##<hcf, 15000, 210>
15000, 15000, 210, 500, 7`,

          `9 ^m to 27 ^cm
9 ^m = ?0 ^cm
Ratio can be written as 
?1 : ?2
It can be simplified.
Ans = ?3 : ?4 ##<hcf, 900, 27>
900, 900, 27, 100, 3`,

          `30 days to 36 hours
30 days = ?0 hours
Ratio can be written as 
?1 : ?2
It can be simplified.
Ans = ?3 : ?4 ##<hcf, 720, 36>
720, 720, 36, 20, 1`,

          `In a computer lab, there are 3 computers for every 6 students. How many computers will be needed for 24 students?
The ratio between computers and students 
= ?0 : ?1 = ?2 : ?3
Let 𝑥 be number of computers required.
1 : 2 = 𝑥 : 24
In fraction form, we can write
1/2 = 𝑥/24
𝑥 = 1/2 × 24 = ?4 computers
3, 6, 1, 2, 12`,

          `Population of Rajasthan = 570 lakhs and population of UP = 1660 lakhs. Area of Rajasthan = 3 lakh ~km^2 and area of UP = 2 lakh ~km^2.
(i) How many people are there per ~km^2 in both these States?
(ii) Which State is less populated?
People per  ~km^2
in Rajasthan = ?0/?1 = ?2
in UP = ?3/?4 = ?5
#<?6, Rajasthan, UP> is less populated.
570|57000000, 3 | 300000, 190, 1660 | 166000000, 2 | 200000, 830, Rajasthan`
        ]
      }
    },

    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Exercise 8.2',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        list: []
      },
      data: [
        {
          title: `Convert the given fractional numbers to per cents.`,
          list: [
            `1/8 
Ans = 1/8 × 100 
= ?0 %
12.5`,

            `5/4
Ans = 5/4 × 100
= 5 × ?0
= ?1 %
25, 125`,

            `3/40
Ans = 3/40 × 100
= 3/?0 × ?1
= ?2/??0
= ?3 %
2, 5, 15, 7.5`,

            `2/7
Ans = 2/7 × 100
= ?0/?1 
= ?2 ?3/?4 % ##<div, 200, 7>
200, 7, 28, 4, 7`
          ]
        },
        {
          title: `Convert the given decimal fractions to per cents.`,
          firstLineFontSize: '1.5rem',
          list: [
            `0.65
Ans = 0.65 × 100
= ?0 %
65`,

            `2.1
Ans = 2.1 × 100
= ?0 %
210`,

            `0.02
Ans = 0.02 × 100
= ?0 %
2`,

            `12.35
Ans = 12.35 × 100
= ?0 %
1235`
          ]
        },

        {
          title: `Find`,
          firstLineFontSize: '1.5rem',
          list: [
            `15 % of 250
Ans = 250 × 15/100
= ?0/?1
= ?2 ##<divDecimal, 75, 2>
75, 2, 37.5`,

            `1% of 1 hour
1 hr = ?0 ^seconds
Ans = ??0 × 1/100
= ?1 ^seconds
3600, 36`,

            `20% of ₹ 2500 
Ans = 2500 × 20/100
= 2500 × ?0/?1
= ₹ ?2
1, 5, 500`,

            `75% of 1 ^kg
1 ^kg = ?0 ^g
Ans = ??0 × 75/100
= ?1 ^g
1000, 750`
          ]
        },
        {
          title: `Find the whole quantity if`,
          list: [
            `5 % of it is 600
Ans = 600 × 100/5
= 600 × ?0
= ?1
20, 12000`,

            `12 % of it is ₹ 1080
Ans = 1080 × 100/12
= ?0 × 100
= ₹ ?1
90, 9000`,

            `40% of it is 500 ^km
Ans = 500 × 100/40
= ?0 × 10
= ?1 ^km
125, 1250`,

            `70% of it is 14 ^minutes
Ans = 14 × 100/70
= ?0 ^minutes
20 `,

            `8% of it is 40 ^litres
Ans = 40 × 100/8
= ?0 ^litres
500`
          ]
        },
        {
          list: [
            {
              widths: '100, 100, 100',
              text: `Convert given per cents to decimal fractions and also to fractions in simplest forms:
Percent | Decimal | Fraction
25 % | ?0 | ?1/?2
150% | ?3 | ?4/?5
20% | ?6 | ?7/?8
5% | ?9 | ?10/?11
0.25, 1, 4, 1.5, 3, 2, 0.2, 1, 5, 0.05, 1, 20`
            },

            `In a city, 30% are females, 40% are males and remaining are children. What per cent are children?
% of males + % of females
= ?0 %
% of children = ?1 %
70, 30`,

            `Out of 15,000 voters in a constituency, 60% voted. Find the percentage of voters who did not vote. Can you now find how many actually did not vote?
% of voters who didn't vote = ?0 %
No. of voters who didn't vote
= 15000 × ??0/100
= ?1 ^voters
40, 6000`,

            `Meeta saves ₹ 4000 from her salary. If this is 10% of her salary. What is her salary?
Salary = 4000 × 100/10
= ₹ ?0
40000`,

            `A local cricket team played 20 matches in one season. It won 25% of them. How many matches did they win?
Matches won = 20 × 25/100
= ?0 ^matches
5`
          ]
        }
      ]
    },
    {
      type: 'fraction',
      id: 'read-fraction',
      label: 'Find the fraction from Picture',
      data: {
        // prob 3 in Ex 8.2
        probType: 'read',
        title:
          'Estimate what part of the figures is coloured and hence find the per cent which is coloured.',
        topic: 'percent',
        type: 'circle',
        text: '1/4, 3/5, 3/10'
      }
    },

    {
      type: 'numberInput',
      id: 'word-prob-3',
      label: 'Exercise 8.3',
      commonData: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem'
      },
      data: [
        {
          title: `Tell what is the profit or loss in the following transactions. Also find profit per cent or
loss per cent in each case.`,
          list: [
            `Gardening shears bought for ₹ 250 and sold for ₹ 325.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??0/CP × 100
= ??1/?2 × 100
= ?3 %
Profit, 75, 250, 30`,

            `A refrigerater bought for ₹ 12,000 and sold at ₹ 13,500.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??0/CP × 100
= ??1/?2 × 100
= ?3/4
= ?4 %
Profit, 1500, 12000, 50, 12.5`,

            `A cupboard bought for ₹ 2,500 and sold at ₹ 3,000.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??0/CP × 100
= ??1/?2 × 100
= ?3 %
Profit, 500, 2500, 20`,

            `A skirt bought for ₹ 250 and sold at ₹ 150.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??0/CP × 100
= ??1/?2 × 100
= ?3 %
Loss, 100, 250, 40`
          ]
        },
        {
          title: `Convert each part of the ratio to percentage`,
          firstLineFontSize: '1.7rem',
          list: [
            `3 : 1
Total parts = ?0
1st part % = 3/??0 × 100
= ?1 %
2nd part % = 1/??0 × 100
= ?2 %
4, 75, 25`,

            `2 : 3 : 5
Total parts = ?0
1st part % = 2/??0 × 100
= ?1 %
2nd part % = 3/??0 × 100
= ?2 %
3rd part % = 5/??0 × 100
= ?3 %
10, 20, 30, 50`,

            `1 : 4
Total parts = ?0
1st part % = 1/??0 × 100
= ?1 %
2nd part % = 4/??0 × 100
= ?2 %
5, 20, 80`,

            `1 : 2 : 5
Total parts = ?0
1st part % = 1/??0 × 100
= ?1 %
2nd part % = 2/??0 × 100
= ?2 %
3rd part % = 5/??0 × 100
= ?3 %
8, 12.5, 25, 62.5`
          ]
        },
        {
          list: [
            `The population of a city decreased from 25,000 to 24,500. Find the percentage decrease
Decrease in population
= ?0 - ?1 = ?2
Decrease % = ??2/??0 × 100
= ?3 %
25000, 24500, 500, 2`,

            `Arun bought a car for ₹ 3,50,000. The next year, the price went upto ₹ 3,70,000. What was the Percentage of price increase?
Increase in price
= ₹ ?0
Increase % = ??0/?1 × 100
= ?2/?3
= ?4 ?5/?6 % 
20000, 350000, 40, 7, 5, 5, 7`,

            `I buy a T.V. for ₹ 10,000 and sell it at a profit of 20%. How much money do I get for it?
Profit = CP × Profit%/100
= ?0 × ?1/100
= ₹ ?2
SP =  ₹ ?3
10000, 20, 2000, 12000`,

            `Juhi sells a washing machine for ₹ 13,500. She loses 20% in the bargain. What was the price at which she bought it?
CP = {SP × 100}/{100 - loss%}
= {?0 × 100}/{?1}
= ?2 × 5 ##<div, 13500, 4>
= ?3 ##<mul, 3375, 5>
13500, 80, 3375, 16875`,

            `(i) Chalk contains calcium, carbon and oxygen in the ratio 10:3:12. Find the percentage of carbon in chalk.
(ii) If in a stick of chalk, carbon is 3 ^g, what is the weight of the chalk stick?
Total parts in the ratio = ?0,
% of carbon = 3/??0 × 100 = ?1 %
(ii) Weight of chalk = 3 × 100/??1
= ?2 ^g
25, 12, 25`
          ]
        },
        {
          list: [
            `Amina buys a book for ₹ 275 and sells it at a loss of 15%. How much does she sell it for?
SP = {CP x (100 - loss%)}/{100}
= {?0 x ?1}/{100}
= {?2 x ??1}/{4} 
= ?3/4 ##<mul, 85, 11>
= ₹ ?4 ##<divDecimal, 935, 4>
275, 85, 11, 935, 233.75`,

            `Find the amount to be paid at the end of 3 years in each case:
(a) Principal = ₹ 1,200 at 12% p.a. 
(b) Principal = ₹ 7,500 at 5% p.a
(a) I = PRT/100 = {?0 x ?1 x ?2}/{100}
= ₹ ?3 ##<mul, 144, 3>
A = P + I = ₹ ?4

(b) I =  {?5 x ?6 x ?7}/{100}
= ₹ ?8 ##<mul, 75, 15>
A = P + I = ₹ ?9
1200, 12, 3, 432, 1632, 7500, 5, 3, 1125, 8625`,

            `What rate gives ₹ 280 as interest on a sum of ₹ 56,000 in 2 years?
R = {100 x I}/{PT}
= {100 x ?0}/{?1 x ?2}
= 1/?3
= ?4 %
280, 56000, 2, 4, 0.25`,

            `If Meena gives an interest of ₹ 45 for one year at 9% rate p.a, what is the sum she has borrowed?
P = {100 x I}/{RT}
= {100 x ?0}/{?1 x ?2}
= ₹ ?3
45, 9, 1, 500`
          ]
        }
      ]
    }
  ]
};
