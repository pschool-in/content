export default {
  label: 'Fraction Arithmetic - 3',
  id: 'fraction-arithmetic-3',
  list: [
    {
      type: 'numberInput',
      id: 'frac-of-nos',
      label: 'Fraction of a Number',
      commonData: {
        title: 'Fraction of a Number',
        fracFontSize: '1.6rem',
        fontSize: '2rem',
        answerBox: false
      },
      data: [
        `1/2 of 14 = ?0 | 7
            1/4 of 16 = ?0 | 4
            1/2 of 26 = ?0 | 13
            1/3 of 27 = ?0 | 9
            1/4 of 36 = ?0 | 9
            1/3 of 42 = ?0 | 14
            1/5 of 45 = ?0 | 9
            1/6 of 66 = ?0 | 11
            1/5 of 100 = ?0 | 20
            1/4 of 100 =  ?0 | 25`,

        `1/7 of 91 =  ?0 | 13
      1/6 of 90 =  ?0 | 15
      1/8 of 64 =  ?0 | 8
      1/7 of 56 =  ?0 | 8
      1/5 of 75 =  ?0 | 15
      1/7 of 105 =  ?0 | 15
      1/11 of 99 =  ?0 | 9
      1/10 of 140 =  ?0 | 14
      1/9 of 63 =  ?0 | 7
      1/4 of 96 =  ?0 |  24`,

        `1/8 of 120 = ?0 | 15
      1/10 of 200 = ?0 | 20
      1/5 of 200 = ?0 | 40
      1/4 of 200 = ?0 | 50
      1/20 of 200 = ?0 | 10
      1/20 of 40 = ?0 | 2
      1/25 of 125 = ?0 | 5
      1/11 of 121 = ?0 | 11
      1/13 of 65 = ?0 | 5`,
        {
          title: 'Fractions of Numbers (upto 2 decimal points)',
          text: `1/2 of 3 = ?0 | 1.5
        1/4 of 5 = ?0 | 1.25
        1/6 of 3 = ?0 | 0.5
        1/10 of 7 = ?0 | 0.7
        1/10 of 15 = ?0 | 1.5
        1/8 of 28 = ?0 | 3.5
        1/9 of 99 = ?0 | 11
        1/2 of 21 = ?0 | 10.5
        1/2 of 39 = ?0 | 19.5
        1/4 of 25 = ?0 |  6.25`
        },
        {
          title: 'Fractions of Numbers (upto 2 decimal points)',
          text: ` 1/4 of 42 = ?0 | 10.5
        1/3 of 31 = ?0 | 10.33
        1/3 of 20 = ?0 | 6.67
        1/5 of 17 = ?0 | 3.4
        1/6 of 21 = ?0 | 3.5
        1/8 of 100 = ?0 | 12.5
        1/8 of 50 = ?0 | 6.25
        1/8 of 25 = ?0 | 3.125
        1/8 of 84 = ?0 | 10.5
        1/10 of 88 = ?0 | 8.8`
        },
        {
          title: 'Fractions of Numbers (upto 2 decimal points)',
          text: `1/10 of 68 = ?0 | 6.8
      1/20 of 30 = ?0 | 1.5
      1/20 of 3 = ?0 | 0.15
      1/30 of 36 = ?0 | 1.2
      1/20 of 50 = ?0 | 2.5
      1/10 of 92 = ?0 | 9.2
      1/15 of 50 = ?0 | 3.33
      1/15 of 20 = ?0 | 1.33
      1/15 of 35 = ?0 | 2.33`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Simplify Expression',
      commonData: {
        title: 'Simplify Expression',
        fracFontSize: '1.6rem',
        fontSize: '2rem',
        answerBox: false
      },
      data: [
        `1/5 × 5/10 × 10/15 = ?0/?1 | 1, 15
      1/2 × 2/3 × 3/4 = ?0/?1 | 1, 4
      22/7 × 7/22 × 5/7 = ?0/?1 | 5, 7
      4/7 × 14/4 × 2/3 = ?0/?1 | 4,3
      9/90 × 8/80 × 7/70 = ?0/?1 | 1, 1000
      7/5 × 5/4 × 1/7 = ?0/?1 | 1, 4
      25/100 × 20/80 × 1/4 = ?0/?1 | 1, 64
      9/11 × 33/3 × 5/6 = ?0/?1 | 15, 2
      2/5 × 2/5 × 25/80 = ?0/?1 | 1, 20
      3/12 × 4/3 × 3/4 = ?0/?1 |  1,4`,

        ` 6/10 × 11/12 × 10/3 = ?0/?1 |  11, 6
      25/2 × 5/25 × 7/5 = ?0/?1 |  7,2
      4/11 × 1/3 × 44/8 = ?0/?1 |  2, 3
      10/15 × 12/100 × 15/6 = ?0/?1 |  1, 5
      22/7 × 1/3 × 7/11 = ?0/?1 |  2, 3
      9/11 × 22/7 × 7/13 = ?0/?1 |  18, 13
      6/20 × 3/5 × 100/39 = ?0/?1 |  6, 13
      3/15 × 2/7 × 45/9 = ?0/?1 |  2, 7
      18/25 × 75/27 × 20/30 = ?0/?1 | 4, 3 `
      ]
    },
    {
      type: 'numberInput',
      id: 'percent-to-frac',
      label: 'Percentage to Fraction',
      commonData: {
        title: 'Convert percentage to fraction',
        fracFontSize: '1.6rem',
        fontSize: '2rem',
        answerBox: false
      },
      data: [
        `50 % = ?0/?1 | 1, 2
  25 % = ?0/?1 | 1, 4
  20 % = ?0/?1 | 1 , 5
  80 % = ?0/?1 | 4 , 5
  60 % = ?0/?1 | 3, 5
  75 % =  ?0/?1 | 3 , 4
  40 % =  ?0/?1 | 2 , 5
  76 % =  ?0/?1 | 19, 25
  36 % =  ?0/?1 | 9 , 25
  10 % =  ?0/?1| 1 , 10`,

        `30 % = ?0/?1 | 3, 10
  70 % = ?0/?1 | 7 , 10
  55 % = ?0/?1 | 11 , 20
  90 % = ?0/?1 | 9 , 10
  15 % = ?0/?1 | 3 , 20
  5 % = ?0/?1 | 1 , 20
  95 % = ?0/?1 | 19 , 20
  85 % = ?0/?1 | 17 , 20
  16 % = ?0/?1 | 4, 25
  24 % = ?0/?1 | 6, 25`,

        `44 % = ?0/?1 | 11, 25
  65 % = ?0/?1 | 13, 20
  35 % = ?0/?1 | 7, 20
  39 % = ?0/?1 | 39, 100
  42 % = ?0/?1 | 21, 50
  45 % = ?0/?1 | 9, 20
  56 % = ?0/?1 | 14, 25
  92 % = ?0/?1 | 23, 25
  81 % = ?0/?1 | 81, 100`
      ]
    },

    {
      type: 'numberInput',
      id: 'frac-to-percent',
      label: 'Fraction to Percentage',
      commonData: {
        title: 'Convert fraction to percentage',
        fracFontSize: '1.6rem',
        fontSize: '2rem',
        answerBox: false
      },
      data: [
        `1/4 = ?0 % | 25
  3/4 = ?0 % | 75
  1/2 = ?0 % | 50
  1/5 = ?0 % | 20
  2/5 =  ?0 % | 40
  3/5 = ?0 % | 60 
  3/10 = ?0 % | 30
  7/10 = ?0 % | 70
  4/5 = ?0 % | 80
  6/25 = ?0 % | 24`,

        `  9/25 = ?0 % | 36
  13/25 = ?0 % | 52
  1/10 = ?0 % | 10
  9/10 = ?0 % | 90
  1/25 = ?0 % | 4
  11/50 = ?0 % | 22
  17/50 = ?0 % | 34
  3/25 = ?0 % | 12
  23/25 = ?0 % | 92
  33/50 = ?0 % | 66`,

        `41/50 = ?0 % | 82
  21/25 =  ?0 % | 84
  17/25 = ?0 % | 68
  37/50 = ?0 % | 74
  49/50 = ?0 % | 98
  21/50 = ?0 % | 42        
  11/25 =  ?0 % | 44    
  43/50 = ?0 % | 86
  27/50 = ?0 % | 54`
      ]
    },

    {
      type: 'numberInput',
      id: 'add-mixed-frac',
      label: 'Add Mixed Fractions',
      commonData: {
        title: 'Add Mixed Fractions',
        fracFontSize: '1.4rem',
        fontSize: '1.6rem',
        answerBox: false
      },
      data: [
        `12 1/2 + 12 1/2 = ?0 | 25
  37 1/2 + 22 1/2 = ?0 | 60
  64 1/4 + 34 3/4 = ?0 | 99
  31 2/5 + 11 2/5 = ?0 ?1/?2 | 42, 4, 5
  11 3/11 + 88 2/11 = ?0 ?1/?2 | 99, 5, 11`,

        `4 1/2 + 14 3/4 = ?0 ?1/?2 | 19, 1, 4
  6 1/6 + 12 2/3 = ?0 ?1/?2 | 18, 5, 6
  7 1/4 + 14 1/8 = ?0 ?1/?2 | 21, 3, 8
  5 5/6 + 3 1/6 = ?0 | 9
  49 3/4 + 25 3/4 = ?0 ?1/?2 | 75, 1, 2`,

        `54 5/7 + 42 3/4 = ?0 ?1/?2 | 97, 13, 28
  13 7/9 + 43 7/18 = ?0 ?1/?2 |57, 1,6
  100 3/26 + 50 3/13 = ?0 ?1/?2 |150, 9,26
  91 3/11 + 53 31/33 = ?0 ?1/?2 | 145, 7, 33
  43 5/9 + 49 9/10 = ?0 ?1/?2 | 93, 41, 90`,

        `18 5/6 + 24 5/18 = ?0 ?1/?2 | 43, 1, 9
  33 1/3 + 33 1/3 = ?0 ?1/?2 | 66, 2, 3
  24 2/13 + 75 1/39 = ?0 ?1/?2 | 99, 7, 39
  14 5/13 + 11 8/13 = ?0 | 26 `
      ]
    },

    {
      type: 'numberInput',
      id: 'sub-mixed-frac',
      label: 'Subtract Mixed Fractions',
      commonData: {
        title: 'Subtract Mixed Fractions',
        fracFontSize: '1.4rem',
        fontSize: '1.6rem',
        answerBox: false
      },
      data: [
        `57 1/2 − 12 1/2 = ?0 | 45
  72 1/2 − 29 1/2 = ?0 | 43
  64 3/4 − 34 1/2 = ?0 ?1/?2| 30, 1, 4
  31 4/5 − 11 2/5 = ?0 ?1/?2| 20, 2, 5
  92 8/11 − 68 2/11 = ?0 ?1/?2 | 24, 6, 11`,

        `  54 3/4 − 14 1/2 = ?0 ?1/?2 | 40, 1, 2
  26 2/3 − 12 1/6 = ?0 ?1/?2 | 14, 1, 2
  70 1/4 − 14 1/8 = ?0 ?1/?2 | 56, 1, 8
  5 1/6 − 3 5/6 = ?0 ?1/?2 | 1, 1, 3
  49 1/4 − 25 3/4 = ?0 ?1/?2 | 23, 1, 2`,

        `  54 5/7 − 42 3/4 = ?0 ?1/?2 | 11, 27, 28
  53 7/9 − 43 7/18 = ?0 ?1/?2 | 10, 7, 18
  100 3/26 − 50 3/13 = ?0 ?1/?2 | 49, 23, 26
  91 3/11 − 53 31/33 = ?0 ?1/?2 | 37, 1, 3
  43 5/9 − 39 9/10 = ?0 ?1/?2 | 3, 59, 90`,

        `38 5/6 − 24 5/18 = ?0 ?1/?2 | 14, 5, 9
  66 1/3 − 33 2/3 = ?0 ?1/?2 | 32, 2, 3
  24 2/13 − 7 1/39 = ?0 ?1/?2 | 17, 5, 39
  14 5/13 − 11 8/13 = ?0 ?1/?2 | 2, 10, 13 `
      ]
    }
  ]
};
