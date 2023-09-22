export default {
  label: 'Simple Interest',
  id: 'simple-interest',
  list: [
    /*
{
id: 'story',
type: 'slides2',
label: `விடுகதைகள் `,
data: {
title: `விடுகதைகள்`,
displayType: 'canvas',
autoPlay: false,
canvas: true,
steps: [
[
{
type: 'path',
d: 'M 19 162 L 309 162',
// temp: true
text: 'Draw a stright line AB.'
},
{
type: 'text',
text: 'A',
x: 19,
y: 180
},
{
type: 'text',
text: 'B',
x: 309,
y: 180
}
],
{
type: 'path',
d: 'M 143 4 Q 175 12 181 45 ',
// temp: true
text: 'Using compass, draw an arc with A as center.'
},
{
type: 'path',
d: 'M 186 5 Q 154 13 148 46',
// temp: true
text: 'With B as center, draw an arc, so that it meets the earlier arc.'
},
{
type: 'path',
d: 'M 140 307 Q 172 299 178 266',
// temp: true
text: 'Again with A as center, draw an arc below the line AB.'
},
{
type: 'path',
d: 'M 183 304 Q 151 296 145 263',
// temp: true
text: 'With B as center, draw an arc, so that it meets the previous arc.'
},
{
type: 'path',
d: 'M 165 14 L 163 296',
// temp: true
text: 'Connect the two overlapping points by drawing a line. This line is the perpendicular bisector.'
}
]
}
},
*/
    {
      id: 'notes',
      type: 'slides2',
      label: `Principal and Amount`,
      data: {
        title: `Principal and Amount`,
        displayType: 'custom',
        autoPlay: false,
        fontSize: '2rem',
        textAlign: 'center',
        steps: [
          `We can take a loan from the bank for buying house or car.
The money borrowed from the bank as loan is called the Principal(P).
After some time, we have to repay the Principal with Interest(I).
The total money repaided is called Amount (A).`,
          [
            `Amount = Principal + Interest
A = P + I `
          ]
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Fill the Missing Number',
      commonData: {
        title: 'Fill the Missing Number',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ 1000 | ₹ 100 | ₹ ?0
₹ 2500 | ₹ 500 | ₹ ?1
₹ 2000 | ₹ 150 | ₹ ?2
₹ 5000 | ₹ 900 | ₹ ?3
₹ 9000 | ₹ 1200 | ₹ ?4
1100, 3000, 2150, 5900, 10200`
            }
          ]
        },
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ 1000 | ₹ ?0 | ₹ 1150
₹ 2500 | ₹ ?1 | ₹ 3100
₹ 2000 | ₹ ?2 | ₹ 2550
₹ 5000 | ₹ ?3 | ₹ 6010
₹ 9000 | ₹ ?4 | ₹ 10100
150, 600, 550, 1010, 1100`
            }
          ]
        },
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ ?0 | ₹ 200 | ₹ 1000
₹ ?1 | ₹ 500 | ₹ 3000
₹ ?2 | ₹ 150 | ₹ 3650
₹ ?3 | ₹ 900 | ₹ 6400
₹ ?4 | ₹ 1200 | ₹ 11200 
800, 2500, 3500, 5500, 10000`
            }
          ]
        }
      ]
    },
    {
      id: 'notes',
      type: 'slides2',
      label: `Simple Interest`,
      data: {
        title: `Simple Interest`,
        displayType: 'custom',
        autoPlay: false,
        steps: [
          [
            `The interest to be repaid is given in per cent form.
If the interest rate is 10% for 1 year and you borrow ₹ 100, then interest is ₹ 10. 
Amount to be paid is  ₹ 110`
          ],
          [
            {
              type: 'eqn',
              text: 'Simple Interest = PRT/100'
            },

            `P = Principal
R = Rate of Interest
T = Time for which interest is calculated.`
          ],
          [
            [
              `In some problems, Interest will be given, and we will be asked to find the Rate (R).`,

              {
                type: 'eqn',
                text: 'We know, I = PRT/100'
              },
              {
                type: 'eqn',
                text: 'Let us multiply both sides by 100/PT'
              },
              {
                type: 'eqn',
                text: 'I × 100/PT = PRT/100 × 100/PT'
              },
              {
                type: 'eqn',
                text: 'We get R = I×100/PT'
              }
            ]
          ],
          [
            [
              `Similarly, Interest will be given, and we will be asked to find the Term (T).`,

              {
                type: 'eqn',
                text: 'We know, I = PRT/100'
              },
              {
                type: 'eqn',
                text: 'Let us multiply both sides by 100/PR'
              },
              {
                type: 'eqn',
                text: 'I × 100/PR = PRT/100 × 100/PR'
              },
              {
                type: 'eqn',
                text: 'We get T = I×100/PR'
              }
            ]
          ]
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'fraction-add',
      label: 'Word Problems',
      commonData: {
        title: 'Word Problems',
        type: 'word-problem',
        fontSize: '1rem',
        isSentence: true,
        fracFontSize: '1rem'
      },
      data: [
        {
          list: [
            `Ravi borrowed ₹ 15,000 from a bank for 3 years at the rate of 12% per annum. Find the interest he has to pay during this time.
Given that P = ₹ 15,000
R = 12 % 
T = ?0 years
I = ?1×?2×?3/?4
= ?5
3, 15000, 12, 3, 100, 5400`,

            `Mr Sajan deposited ₹ 25,000 in the bank which pays 11.5% interest per annum. Find the amount he will get after 5 years.
Given that P = ₹ 25,000
R = 11.5%
T = 5 years
I = PRT/100
= ?0×?1×?2/?3
= ?4
Amount = P + I
= ?5 + ?6
= ?7
25000, 11.5, 5, 100, 14375, 25000, 14375, 39375`,

            `Interest for ₹ 4,000 for 2 years is ₹ 1,120. Find the rate of interest.
Here P = ₹ 4000, T = 2, 
I = 1120, R = ?
We know that I = PRT/100
R = 100×I/PT
= 100×?0/?1×?2
= ?3 % per annum
1120, 4000,2, 14`,

            `In how many years will ₹ 25,000 invested at 8% per annum amount to  ₹ 33,000?
Here, P = ₹ 25,000
R = 8%
T = ?
I = A - P
= ?0 - ?1
= ?2
We know that I = PRT/100
T = I×100/PR
= ?3×100/?4×?5
= ?6 years
33000, 25000, 8000, 8000, 25000, 8, 4`
          ]
        },
        {
          list: [
            `Find the amount Anitha borrowed from a finance company if she paid ₹3600 as interest for 3 years at 3% interest per annum.
Here I = 3600, T = 3, R = 3
We know I = PRT/100
P = I×100/RT
= ?0×100/?1×?2
= ?3
3600, 3, 3, 40000`,

            `₹10,000 deposited in a bank at the rate of 18% per annum amounted to ₹22,600 in a few years. Find the time taken.
Here P = 10000, R = 18% 
A = 22600, T = ?
I = A - P
= ?0 - ?1
= ?2
We know, I = PRT/100
T = I×100/PR
= ?3×100/?4×?5
= ?6 years
22600, 10000, 12600, 12600, 10000, 18, 7`,

            `Vivan borrowed a sum of money from a bank at 9% per annum. If he paid ₹5940 as interest after three years, find the sum he borrowed and the total money he repaid.
Here I = 5940, R = 9, T = 3
We know I = PRT/100
P = 100×I/RT
= 100×?0/?1×?2
= ?3
A = P + I
= ?4 + ?5
= ?6
5940, 9, 3, 22000, 22000, 5900, 27900`,

            `A sum of money amounted to ₹31,200 at 4% per annum in 5 years. Find the origial sum.
Here A = ?0 , R = ?1
T = ?2
Let us assume P = 100.
I = ?3×?4×?5/?6
= ?7
Using the properties of ratios we can find the original P. 
If ₹100 amounts to ₹120. And x amounts to  ₹31,200
x : 31200 = 100 : 120
x/31200 = 100/120
x = 100/120 x 31200
= ?8
31200, 4, 5, 100, 4, 5, 100, 20, 26000`,

            `Who gets more money after 5 years?
a. Vimala who deposited ₹20,000 in a bank at 11.5% interest per annum, or
b. Kamal who deposited ₹25,000 in a bank at 10.5% interest per annum.
We know I = PRT/100
Interest gained by Vimala = ?0×?1×?2/100
= ?3
Amount = P + I = 20000 + ?4 
= ?5
Interest gained by Kamla = 25000×10.5×?6/100 
= ?7
Amount = P + I = 25000 + ?8
= ?9
Kamal gets more money than Vimala.
20000, 11.5, 5, 11500, 11500, 31500, 5, 13125, 13125, 38125`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Fill the Missing Number',
      commonData: {
        title: 'Fill the Missing Number',
        type: 'word-problem'
      },
      data: [
        {
          title: 'Calculate the Interest for 1 year',
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Rate(R) | Interest(I)
₹ 1000 | 12 % | ₹ ?0
₹ 2500 | 20 % | ₹ ?1
₹ 2000 | 5 % | ₹ ?2
₹ 5000 | 20 % | ₹ ?3
₹ 9000 | 10 % | ₹ ?4
120, 500, 100, 1000, 900`
            }
          ]
        },
        {
          title: 'For the Principal of ₹ 10000, find the Interest.',
          list: [
            {
              widths: '120, 120, 120',
              text: `Rate (R) | Years (T) | Interest (I)
10 % | 2 | ₹ ?0
20 % | 2 | ₹ ?1
5 % | 4 | ₹ ?2
12 % | 1| ₹ ?3
8 % | 2 | ₹ ?4
2000, 4000, 2000, 1200, 1600`
            }
          ]
        }
      ]
    }
  ]
};
