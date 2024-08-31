export default {
  label: 'Simple & Compound Interest',
  id: 'simple-interest-nios',
  list: [
    {
      type: 'numberInput',
      id: 'find-missing',
      label: 'Intext Questions 9.1',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        fracFontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          list: [
            `P = ₹ 1200
t = 5 years
r = 6%
Find I
I = Prt/100
= {?0 × ?1 × ?2}/{100}
= ₹ ?3
1200, 6, 5, 360`,

            `P = ₹ 1600
t = 3 years
r = 10%
Find I
I = Prt/100
= {?0 × ?1 × ?2}/{100}
= ?3
A = P + I
= ₹ ?4
1600, 10, 3, 480, 2080`,

            `t = 4 years
r = 3 1/2 %
I =  ₹ 112
Find P
r = ?0/?1 
P = {I × 100}/{rt}
= {112 × 100 × 2}/{7 × 4}
= ₹ ?2
7, 2, 800`,

            `P = ₹ 2800
r = 10%
I =  ₹ 560
Find t
t = {I × 100}/{Pr}
= {?0 × 100}/{?1 × ?2}
= ?3 ^years
560, 2800, 10, 2`,

            `P = ₹ 5000
t = 4 years
I =  ₹ 1600
Find r
r = {I × 100}/{Pt}
= {?0 × 100}/{?1 × ?2}
= ?3 %
1600, 5000, 4, 8`
          ]
        },
        {
          list: [
            `At the rate of Interest 5%, Find the interest on ₹ 3500 for 146 days (1 year = 365 days)
t = 146/365 ##<hcf, 146, 365>
= ?0/?1
I = {3500 × 5 × 2}/{100 × 5}
= ₹ ?2
2, 5, 70`,

            `Find the principal which at 5% annual rate of interest becomes ₹ 720 in 4 years.
Given, P + Prt/100 = 720
rt/100 = ?0/?1
P(1 + ??0/??1 ) = 720
P = 720 × ?2/?3
= ₹ ?4 
1, 5, 5, 6, 600`,

            `Find the principal for which interest is ₹ 1920 in 4 years at the rate of annual interest 10%
P = {I × 100}/{rt}
= {?0 × 100}/{?1 × ?2}
= ?3 × 10 ##<div, 1920, 4>
= ₹ ?4 
1920, 10, 4, 480, 4800`,

            //Text book issue mismatch in numbers and answers
            `At 8 % annual simple interest in how much period will the interest be ₹ 1920 on a sum of ₹ 4000?
t = {I × 100}/{Pr}
= {?0 × 100}/{?1 × ?2}
= ?3 ^years
1920, 4000, 8, 6`
          ]
        },
        {
          list: [
            `At what annual rate of interest on a sum of money ₹ 900, will the interest be ₹ 324 in 9 years?
r = {I × 100}/{Pt}
= {?0 × 100}/{?1 × ?2}
= ?3 %
324, 900, 9, 4`,

            `At what rate percent annually, on a sum of money ₹ 1000, will the interest be ₹ 450 in 4 1/2 years?
t = ?0/?1
r = {I × 100}/{Pt}
= {450 × 100 × 2}/{1000 × 9}
= ?2 %
9, 2, 10`,
            `In how much time, the interest on sum of money ₹ 800 at 8 % annual rate of will the interest be ₹ 1056?
I = A - P
= 1056 - 800 = ₹ ?0
t = {I × 100}/{Pr}
= {??0 × 100}/{?1 × ?2}
= ?3 years
256, 800, 8, 4`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'find-missing-2',
      label: 'Intext Questions 9.2',
      data: {
        isSentence: true,
        //  inputType: 'small',
        fontSize: '1rem',
        fracFontSize: '1rem',
        title:
          'Find the compound interest and amount in the following problems.',
        list: [
          `P = ₹ 5000
Rate % annual = 10%
Time (t) = 2 years
Conversion period = annually
A = P ~!( 1+ r/100 ~!)^n
= ?0 × ~!( 1 + ?1/100 ~!) ?2~
= ??0 × ~!( ?3/?4 ~!) ??2~
= ??0 × ?5/?6
A = ₹ ?7 ##<mul, 121, 5>
C = A - P
= ??7 - ??0 = ₹ ?8
5000, 10, 2, 11, 10, 121, 100, 6050, 1050`,

          `P = ₹ 7000
Rate % annual = 10%
Time (t) = 1 year
Conversion period =  half yearly
n = ?0 , r = ?1 %
A = P ~!( 1+ r/100 ~!)^n
= ?2 × ~!( 1 + ??1/100 ~!) ??0~
= ??2 × ~!( ?3/?4 ~!) ??0~
= ??2 × ?5/?6
A = ?7/4 ##<mul, 441, 7>
=  ₹ ?8 ##<div, 30870, 4>
C = A - P
= ??8 - ??2 = ₹ ?9
2, 5, 7000, 21, 20, 441, 400, 30870, 7717.50, 717.50`,

          `P = ₹ 2000
Rate % annual = 5%
Time (t) = 1 year
Conversion period =  half yearly
n = ?0 , r = ?1/?2 %
A = P ~!( 1+ r/100 ~!)^n
= 2000 × ~!( 1 + ?3/200 ~!) ??0~
= 2000 × ~!( ?4/?5 ~!) ??0~
= 2000 × ?6/?7
A = ?8/4 ##<mul, 1681, 5>
=  ₹ ?9 ##<div, 8405, 4>
C = A - P
= ??9 - 2000 = ₹ ?10
2, 5, 2, 5, 41, 40, 1681, 1600, 8405, 2101.25, 101.25`,

          `P = ₹ 500
Rate % annual = 20%
Time (t) = 9 months
Conversion period =  Quarterly
n = ?0 , r = ?1 %
A = P ~!( 1+ r/100 ~!)^n
= ?2 × ~!( 1 + ??1/100 ~!) ??0~
= ??2 × ~!( ?3/?4 ~!) ??0~
= ??2 × ?5/?6  ##<mul, 441, 21>
A = ??5/?7 
=  ₹ ?8 ##<divDecimal, 9261, 16, 2>
C = A - P
= ??8 - ??2 = ₹ ?9
3, 5, 500, 21, 20, 9261, 8000, 16, 578.81, 78.81`,

          `P = ₹ 2500
Rate % annual = 20%
Time (t) = 6 months
Conversion period =  Quarterly
n = ?0 , r = ?1 %
A = P ~!( 1+ r/100 ~!)^n
= ?2 × ~!( 1 + ??1/100 ~!) ??0~
= ??2 × ~!( ?3/?4 ~!) ??0~
= ??2 × ?5/?6  
A  = ₹ ?7 ##<mul, 25, 121>
C = A - P
= ??7 - ??2 = ₹ ?8
2, 10, 2500, 11, 10, 121, 100, 3025, 525`
        ]
      }
    }
  ]
};
