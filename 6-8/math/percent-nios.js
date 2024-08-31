export default {
  label: 'Percentage and its Application',
  id: 'percent-nios',
  list: [
    {
      type: 'numberInput',
      id: 'frac',
      label: 'Intext Questions 8.1',
      commonData: {
        isSentence: true,
        fontSize: '1.3rem',
        fracFontSize: '1.3rem',
        label: 'Answer the following'
      },
      data: [
        {
          title: 'Write the following fractions into percent',

          list: [
            `15/20
= 15/20 × ?0/?1 = ?2/?3
= ?4 %
5, 5, 75, 100, 75`,

            `5/6
= 5/6 × 100/100
= ?0/?1 × 1/100
= ?2 ?3/?4 %
250, 3, 83, 1, 3`,

            `0.68
= 0.68 × 100/100
= ?0 %
68`,

            `1 1/4
= ?0/?1
= ??0/??1 × ?2/??2 = ?3/100
= ?4 %
5, 4, 25, 125, 125`,

            `3/25
= 3/25 × ?0/??0 = ?1/?2
= ?3 %
4, 12, 100, 12`
          ]
        },
        {
          title: 'Write the following percent into lowest form fraction',
          list: [
            `15%
= 15/100 = ?0/?1
3, 20`,

            `66 2/3 %
= ?0/?1 × 1/100
= ?2/?3
200, 3, 2, 3`,

            `13 1/3 %
= ?0/?1 × 1/100
= ?2/?3
40, 3, 2, 15`,

            `35%
= 35/100 = ?0/?1
7, 20`,

            `23 3/4 %
= ?0/?1 × 1/100
= ?2/?3
95, 4, 19, 80`
          ]
        },
        {
          list: [
            `What percent of 180 is 90?
Ans = 90/180 × 100
= ?0 %
50`,
            `What percent of ₹ 75 is ₹ 45?
Ans = 45/75 × 100
= ?0 %
60`,

            `What percent of 50 litre is 15 litre?
Ans = 15/50 × 100
= ?0 %
30`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ex8-1',
      label: 'Intext Questions 8.2',
      commonData: {
        isSentence: true,
        fontSize: '1.3rem',
        fracFontSize: '1.3rem',
        label: 'Answer the following'
      },
      data: [
        {
          title: 'Find the value of the following',
          list: [
            `26% of 25 ^litre
= 25 × 26/100
= ?0 ^litre
6.5 `,

            `75% of 40 ^kg
= 40 × 75/100
= ?0 ^kg
30`,

            ` 20% of ₹ 1900
1900 × 20/100
= ₹ ?0
380`
          ]
        },
        {
          title: 'Find the value of 𝑥 in the following',
          list: [
            `16% of 𝑥 is 260
𝑥 = 260 × 100/16
= ?0 × ?1
= ?2
65, 25, 1625`,

            `1.5% of 𝑥 is ₹ 108
𝑥 = 108 × 100/1.5
= ?0 × 20
= ?1
360, 7200`,

            `90% of 𝑥 is 216 ^km
𝑥 = 216 × 100/90
= ?0 × 10
= ?1 ^km
24, 240`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Intext Questions 8.3',
      data: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        label: 'Answer the following',
        list: [
          `Sunita secured 76% marks, in an examination, out of total of 800. Find the marks obtained by Sunita.
Marks obtained
= 800 × 76/100
= ?0 × 76
= ?1
8, 608`,

          `An employee received ₹ 15000 as bonus from the company. If the bonus is 20% of the total annual income, then find his annual income.
Annual Income = 15000 × 100/20
= 15000 × ?0
= ₹ ?1
5, 75000`,

          `60% of a number is 48. Find that number.
The number = 48 × 100/60
= ?0 × 10
= ?1
8, 80`,

          `Reena secured some marks in an examination. In the same examination Seema secured 20% more marks. If the maximum marks of the examination were 600. Total marks secured by them were 720, find the marks secured by each one of them.
Sum of the %
= 720/600 × 100
= ?0 %
Reena got = ?1 %
= ??1/100 × 600 = ?2 ^marks
Seema got = ?3 %
= ??3/100 × 600 = ?4 ^marks
120, 50, 300, 70, 420`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs-2',
      label: 'Intext Questions 8.4',
      commonData: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Find the percent profit or loss in the following questions.',
          list: [
            `SP = ₹ 550
CP = ₹ 450
Over Head Charges = ₹ 0
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??1/450  × 100
= ?2/?3 = ?4 ?5/?6 %
Profit, 100, 200, 9, 22, 2, 9`,

            `SP = ₹ 1440
CP = ₹ 1500
Over Head Charges = ₹ 0
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??1/1500  × 100
= ?2 %
Loss, 60, 4`,

            `SP = ₹ 300
CP = ₹ 225
Over Head Charges = ₹ 25
Adjusted CP = ₹ ?0
It is a #<?1, Profit, Loss> of ₹ ?2
??1 % = ??2/??0  × 100
= ?3 %
250, Profit, 50, 20`,

            `SP = ₹ 210
CP = ₹ 190
Over Head Charges = ₹ 10
Adjusted CP = ₹ ?0
It is a #<?1, Profit, Loss> of ₹ ?2
??1 % = ??2/??0  × 100
= ?3 %
200, Profit, 10, 5`,

            `SP = ₹ 190
CP = ₹ 180
Over Head Charges = ₹ 20
Adjusted CP = ₹ ?0
It is a #<?1, Profit, Loss> of ₹ ?2
??1 % = ??2/??0  × 100
= ?3 %
200, Loss, 10, 5`
          ]
        },
        {
          list: [
            `Ramesh purchased a table for ₹3000 and sold it for ₹2950. Find his percent loss or profit.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??1/3000 × 100
= ?2/?3 = ?4 ?5/?6 %
Loss, 50, 5, 3, 1, 2, 3`,

            `Kamini purchased a cycle for ₹ 1500 and sold it for ₹ 1800. Find his percent profit or loss.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??1/1500 × 100
= ?2 %
Profit, 300, 20`,
            //Book issue: CP is wrong
            `Ahmed purchased a moter cycle for ₹ 12000. He spent ₹ 1300 on it's repair and sold it for ₹ 19000 Find the % profit or loss of Ahmed.
Adjusted CP = ?0
It is a #<?1, Profit, Loss> of ₹ ?2
??1 % = ??2/??0 × 100  ##<hcf, 5700, 13300>

= ?3 ?4/?5 %
13300, Profit, 5700, 42, 6, 7`,

            `Ahmed purchased oranges at the rate of ₹ 30 per dozen and sold them at the rate of ₹ 40 per dozen. Find the % loss or profit of Ahmed.
It is a #<?0, Profit, Loss> of ₹ ?1
??0 % = ??1/30 × 100
= ?2 ?3/?4 %
Profit, 10, 33, 1, 3`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs-3',
      label: 'Intext Questions 8.5',
      commonData: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: `Find the unknown 𝑥 from the following:`,
          list: [
            `SP = 𝑥 , CP = ₹ 650 , Loss = 5 %
SP = {CP × (100 - loss%)}/{100}
= {?0 × ?1}/{100} 
= ?2/2  ##<mul, 95, 13>
= ₹ ?3 ##<div, 1235, 2>
650, 95, 1235, 617.5`,

            `SP = ₹ 243 , CP = 𝑥 , Profit = 12 1/2 %
CP = {SP × 100}/{100 + profit%}
= {243 × 100 × 2}/{225}
={243 × ?0 × 2}/{?1}
= ?2 × ??0 × 2 ##<div, 243, 9>
= ₹ ?3  ##<mul, 27, 8>
4, 9, 27, 216`,

            `SP = 𝑥 , CP = ₹ 500 , Profit = 5 %
SP = {CP × (100 + profit%)}/{100}
= {?0 × ?1}/{100} 
= ?2  ##<mul, 105, 5>
500, 105, 525`,

            `SP = ₹ 250 , CP = 𝑥 , Loss = 16 2/3 %
Loss = ?0/?1 %
CP = {SP × 100}/{100 - loss%}
= {250 × 100 × ??1}/{?2}
= ₹ ?3
50, 3, 250, 300`,

            `SP = 𝑥 , CP = ₹ 40 , Profit = 15 %
SP = {CP × (100 + profit%)}/{100}
= {?0 × ?1}/{100} 
= ?2 × ?3
= ₹ ?4
40, 115, 2, 23, 46`
          ]
        },
        {
          list: [
            `A table was sold for ₹ 1920 with a loss of 4 %. Find the C.P of the table.
CP = {SP × 100}/{100 - loss%}
CP = {?0 × 100}/{?1} 
= {1920 × 25}/{?2}  
= ?3 × 25 ##<div, 1920, 24>
= ?4 ##<mul, 25, 80>
Loss = ??4 - 1920
= ₹ ?5 
1920, 96, 24, 80, 2000, 80`,

            `A shop keeper earns 40% profit on selling an object for ₹ 910. Find the C.P of that object.
CP = {SP × 100}/{100 + profit%}
CP = {?0 × 100}/{?1} 
= {??0 × 5}/{?2} ##<div, 910, 7>
= ?3 × 5 ##<mul, 130, 5>
= ₹ ?4
910, 140, 7, 130, 650`,

            `Suresh spent ₹ 250 on the repair of a plough whose cost price is ₹ 550. He sold it at a profit of 12 1/2 %. Find the SP of the plough.
Adjusted CP = ₹ ?0 
SP = {CP × (100+profit%)}/{100}
profit = ?1/?2 %
100 + profit% = ?3/?4
SP = {??0 × ??3}/{100 × ??4}
= ₹ ?5
800, 25, 2, 225, 2, 900`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs-4',
      label: 'Intext Questions 8.6',
      data: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following',
        list: [
          `If A's value is 20% less than B's value then what percent B's value is more than A's value?
Let B's value be 100
Then A's value = ?0
If A's value is 100, B' value
= 100/??0 × 100
= ?1
B is ?2 % more than A
80, 125, 25 `,

          // Changed the input as price comes in fraction.
          `After 10% reduction in the price of rice, a person can purchase 10 ^kg more rice in ₹ 1800. Find the original price of rice and the reduced price.
In 10% of money 10 ^kg of rice can be bought.
10 % of money = 10/100 × 1800
= ₹ ?0
Price of 1 kg = ₹ ?1
Before discount price of 1 kg
= ??1 × 100/90
= ₹ ?2
180, 18 , 20`,

          // Wrong numbers for the given answer - changed 212 to 312
          `Rama obtained 204 marks in an examination, her percent marks are 34%. If Sophia obtained 312 marks  in the same examination, find the % of marks obtained by Sophia.
Max marks = 100/34 × 204
= ?0
% obtained by Sophia 
= 312/600 × 100
= ?1 % ##<div, 312, 6>
600, 52`,
          `A man purchased oranges at the rate of ₹ 72 per dozen. At what rate per 100 she should sell them to get 20% profit.
CP of 1 orange = ₹ ?0
SP = {CP × (100 + profit%)}/{100}
= {??0 × ?1}/{100}
= ?2/?3
SP of 100 orangens
= ??2/??3 × 100
= ₹ ?4
6, 120, 36, 5, 720 `,

          `Ali sold a car to Ahmed for ₹ 2,50,000. Ahmed spent ₹ 50000 on it's repair and
then sold it at a profit of 8%. Find the S.P. of the car.
Adjusted CP = ₹ ?0
SP = {CP × (100 + profit%)}/{100}
= {??0 × ?1}/{100}
₹ ?2
300000, 108, 324000`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs-5',
      label: 'Intext Questions 8.7',
      commonData: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Find the discount for the following',
          list: [
            `Marked Price = ₹ 54
Discount % = 10%
Discount = 10/100 × 54
= ₹ ?0
5.40 `,
            `Marked Price = ₹ 480
Discount % = 6%
Discount = 6/100 × 480
= ₹ ?0 ##<mul, 48, 6>
28.80 `,

            `Marked Price = ₹ 350
Discount % = 8%
Discount = 8/100 × 350
= ₹ ?0 ##<mul, 35, 8>
28 `,

            `Marked Price = ₹ 150
Discount % = 10%
Discount = 10/100 × 150
= ₹ ?0 
15 `,

            `Marked Price = ₹ 160
Discount % = 5%
Discount = 5/100 × 160
= ₹ ?0 
8 `
          ]
        },
        {
          list: [
            `A fan with marked price ₹ 2000 is sold at a discount of 15%. Find the selling price of the fan.
Discount = 15/100 × 2000
= ₹ ?0
SP = 2000 - ??0
= ₹ ?1
300, 1700`,

            `Find the percent discount for the following
Marked Price = ₹ 65
Selling Price = ₹ 50
Discount = ₹ ?0
Discount % = ??0/65 × 100
= ?1/13 ##<div, 300, 13>
= ?2 ?3/?4
15, 300, 23, 1, 13`,

            `Find the percent discount for the following
Marked Price = ₹ 80
Selling Price = ₹ 65
Discount = ₹ ?0
Discount % = ??0/80 × 100
= ?1/4 ##<div, 75, 4>
= ?2 ?3/?4
15, 75, 18, 3, 4`,

            `Find the percent discount for the following
Marked Price = ₹ 120
Selling Price = ₹ 105
Discount = ₹ ?0
Discount % = ??0/120 × 100
= ?1/?2 = ?3 ?4/?5 %
15, 25, 2, 12, 1, 2`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'final',
      label: 'Chapter End Exercises',
      commonData: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Write the following in percent form',
          fontSize: '1.3rem',
          list: [
            `7/10
?0/100 = ?1 %
70, 70`,

            `2/25
= {2 × ?0}/{25 × ??0}
= ?1 %
4, 8`,

            `0.75
= ?0/100
= ?1 %
75, 75`,

            `0.28
= ?0/100
= ?1 %
28, 28`,

            `2.8
= ?0/100
= ?1 %
280, 280`
          ]
        },

        {
          title: 'Write the following in the lowest form of a fraction',
          fontSize: '1.3rem',
          list: [
            `12%
= 12/100 = ?0/?1
3, 25`,

            `8.2%
= 8.2/100 = ?0/?1
41, 500`,

            `32%
= 32/100 = ?0/?1
8, 25`,

            `0.9%
= 0.9/100 = ?0/?1
9, 1000`
          ]
        },

        {
          title: 'Find the value of the following',
          fontSize: '1.3rem',
          fracFontSize: '1.3rem',
          list: [
            `5 % of 150
= 5/100 × 150
= ?0/?1 = ?2
15, 2, 7.5`,

            `18% of 5 ^liter
= 18/100 × 5
18/?0 = ?1 ^liter
20, 0.9`,

            //Book answer is wrong
            `40% of 112 ^kg
= 40/100 × 112
= ?0/?1 = ?2 ^kg
224, 5, 44.8`,

            `40% of 8 ^cm
= 40/100 × 8
= ?0/?1 = ?2 ^cm
16, 5, 3.2`,

            `What percent of 150 is 96?
Ans = 96/150 × 100
= ?0 %
64`,

            `What percent of 40 is 14?
Ans = 14/40 × 100
= ?0 %
35`
          ]
        },

        {
          title: 'Find the value of 𝑥 in the following',
          fontSize: '1.3rem',
          fracFontSize: '1.3rem',
          list: [
            `12% of 𝑥 = 135
𝑥 = 135 × 100/12
= ?0 × ?1 ##<mul, 45, 25>
= ?2
45, 25, 1125`,

            `80% of 𝑥 = 26 ^liter
𝑥 = 26 × 100/80
= ?0/?1 = ?2 ^liter
65, 2, 32.5`,

            `4% of 8𝑥 = 36
8𝑥 = 36 × 100/4
= ?0
𝑥 = ??0/?1
900, 8`
          ]
        },

        {
          title: 'Find the value of 𝑥 in the following',
          list: [
            //given answer is wrong
            `CP = ₹ 400
SP = ₹ 500
Profit% = 𝑥
Profit = ?0
Profit% = profit/CP × 100
= ??0/400 × 100
= ?1 %
100, 25`,

            `CP = ₹ 400
SP = 𝑥
Profit% = 40%
Profit = CP × profit%/100
= 400 × 40/100
= ₹ ?0
SP = CP + Profit
= 400 + ??0
= ₹ ?1
160, 560`,

            `CP = ₹ 150
SP = 𝑥
Loss% = 20%
Loss = CP × loss%/100
= 150 × 20/100
= ₹ ?0
SP = CP - Loss
= 150 - ??0
= ₹ ?1
30, 120`,

            // 4th problem skipped due to wrong input and impossible answer
            `CP = ₹ 900
SP = 𝑥
Loss% = 10%
Loss = CP × loss%/100
= 900 × 10/100
= ₹ ?0
SP = CP - Loss
= 900 - ??0
= ₹ ?1
90, 810`
          ]
        },
        {
          list: [
            `Sunita obtained 70% marks is an examination. If the maximum marks are 800, find the marks obtained by Sunita
Marks obtained by Sunita
= 800 × 70/100
= ?0
560`,

            `Areina obtained 60 marks out of 80 in a mathematics question paper. Find her % marks Percentage got by Areina
= 60/80 × 100
= ?0 %
75`,

            `A cycle was sold at a 10% loss after purchase for ₹ 2400. Find the selling price of the cycle.
SP = {CP × (100 - loss%)}/{100}
= {?0 × ?1}/{100}
= ₹ ?2 ##<mul, 24, 9>
2400, 90, 2160`,

            `Three articles are sold at the rate of marked price of 4 such articles. Find the %
profit.
As we need only profit %, the original CP or SP doesn't matter.
Let us assume the CP of 4 articals as the LCM of the two numbers.
CP of 4 articles = ₹ 12
Given, SP of 3 articles = ?0
SP of 1 article = ?1
SP of 4 articles = ?2
Profit % = profit/CP × 100
= ?3/?4 × 100
= ?5 ?6/?7 %
12, 4, 16, 4, 12, 33, 1, 3`,

            `Marked price of an article is ₹ 1600. The shopkeeper gives 20% discount. How much will the customer pay for it?
SP = {100 - discount%}/{100} × MP
= ?0/100 × ?1
= ₹ ?2 ##<mul, 16, 8>
80, 1600, 1280`
          ]
        },
        {
          list: [
            `The price of an article is ₹ 1800 after 10% discount. Find the marked price of
the article.
MP = {100}/{100-discount%} × CP
= 100/?0 × ?1
= ₹ ?2
90, 1800, 2000`,

            `The price of an article after 35% discount is the same as that of another article of ₹ 1300 after 10% discount. Find the marked price of the first article.
SP of second article
= 90/100 × 1300
= ₹ ?0
MP of first article
= {100}/{100 - discount%} × 1170
= 100/?1 × 1170
= ₹ ?2 ##<div, 1170, 65>
1170, 65, 1800`,

            //Text book answer is wrong
            `A man purchased 2 oranges for ₹ 10 and sold them at the rate of ₹ 4 per orange,
find the profit or loss%.
CP per orange = ₹ ?0
The user gets #< ?1, Profit, Loss> of ₹ ?2
??1 % = ??2/??0 × 100
= ?3 %
5, Loss, 1, 20`,

            `A man marks 30%. more price on an article, also he gives 20% discount on the
new marked price. Find his profit or loss percent.
Let the original price be 100.
New marked price = ₹ ?0
After discount SP = 80/100 × ??0
= ₹ ?1
It is a #< ?2, Profit, Loss> of ₹ ?3
??2 % = ?4 %
130, 104, Profit, 4 , 4`
          ]
        }
      ]
    }
  ]
};
