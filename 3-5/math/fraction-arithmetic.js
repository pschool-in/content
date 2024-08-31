export default {
  label: 'Fraction Arithmetic',
  id: 'fraction-arithmetic',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Fraction Arithmetic',
        text: [
          `Just like how we add or multiply two or more numbers, we can add or multiply two fractions.
Just like how we subtract one number from another, one fraction can be subtracted from another.
Just like how one number can be divided by another, we can divide one fraction with another.
# Like Fraction
Two or more fractions that have same denominator are called like fraction. The numerators can be different.
Adding two like fractions is easy. We need to add the numerators and retain the denominator.
Similarly subtracting two like fractions is easy. We need to substract the numerators and retain the denominator.
`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'fraction-add',
      label: 'Add: Like Fraction',
      commonData: {
        title: 'Add the fractions',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.2rem',
        isSentence: false
      },
      data: [
        {
          list: [
            `2/5 + 1/5 = ?0/?1
3, 5`,
            `3/10 + 5/10 = ?0/?1
8, 10`,
            `2/7 + 3/7 = ?0/?1
5, 7`,
            `4/9 + 1/9 = ?0/?1
5, 9`,
            `3/11 + 5/11 = ?0/?1
8, 11`
          ]
        },
        {
          list: [
            `7/11 + 2/11 = ?0/?1
9, 11`,
            `2/9 + 3/9 = ?0/?1
5, 9`,
            `2/7 + 6/7 = ?0/?1
8, 7`,
            `5/100 + 9/100 = ?0/?1
14, 100`,
            `4/14 + 6/14 = ?0/?1
10, 14`
          ]
        },
        {
          list: [
            `11/13 + 12/13 = ?0/?1
23, 13`,
            `3/5 + 4/5 = ?0/?1
7, 5`,
            `7/11 + 5/11 = ?0/?1
12, 11`,
            `1/3 + 1/3 = ?0/?1
2, 3`,
            `2/16 + 13/16 = ?0/?1
15, 16`
          ]
        },
        {
          list: [
            `1/5 + 1/5 + 1/5 = ?0/?1
3, 5`,
            `2/9 + 7/9 + 1/9 = ?0/?1
10, 9`,
            `1/11 + 5/11 + 4/11 = ?0/?1
10, 11`,
            `11/100 + 22/100 + 33/100 = ?0/?1
66, 100`,
            `5/23 + 8/23 + 6/23 = ?0/?1
19, 23`
          ]
        },
        {
          list: [
            `20/75 + 15/75 + 10/75 = ?0/?1
45, 75`,
            `9/50 + 7/50 + 8/50 = ?0/?1
24, 50`,
            `15/88 + 5/88 + 25/88 = ?0/?1
45, 88`,
            `11/45 + 22/45 + 3/45 = ?0/?1
36, 45`,
            `15/67 + 8/67 + 10/67 = ?0/?1
33, 67`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fraction-sub',
      label: 'Subtract: Like Fraction',
      commonData: {
        title: 'Subtract the fraction',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.2rem',
        isSentence: false
      },
      data: [
        {
          list: [
            `2/5 − 1/5 = ?0/?1
1, 5`,
            `5/10 − 2/10 = ?0/?1
3, 10`,
            `6/7 − 3/7 = ?0/?1
3, 7`,
            `4/9 − 1/9 = ?0/?1
3, 9`,
            `10/11 − 5/11 = ?0/?1
5, 11`
          ]
        },
        {
          list: [
            `7/11 − 2/11 = ?0/?1
5, 11`,
            `8/9 − 3/9 = ?0/?1
5, 9`,
            `6/7 − 2/7 = ?0/?1
4, 7`,
            `25/100 − 9/100 = ?0/?1
16, 100`,
            `11/14 − 6/14 = ?0/?1
5, 14`
          ]
        },
        {
          list: [
            `11/13 − 1/13 = ?0/?1
10, 13`,
            `4/5 − 1/5 = ?0/?1
3, 5`,
            `7/11 − 5/11 = ?0/?1
2, 11`,
            `10/13 − 1/13 = ?0/?1
9, 13`,
            `13/16 − 2/16 = ?0/?1
11, 16`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fraction-mixed',
      label: 'Evaluate',
      commonData: {
        title: 'Fill in the blanks',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.2rem',
        isSentence: false
      },
      data: [
        {
          title:
            'Add the fraction. Convert the answer from improper fraction to mixed fraction.',
          list: [
            `12/20 + 15/20 = ?0/?1 = ?2 ?3/?4
27, 20, 1, 7, 20`,
            `7/8 + 4/8 = ?0/?1 = ?2 ?3/?4
11, 8, 1, 3, 8`,
            `9/5 + 2/5 = ?0/?1 = ?2 ?3/?4
11, 5, 2, 1, 5`,
            `19/9 + 21/9 = ?0/?1 = ?2 ?3/?4
40, 9, 4, 4, 9`,
            `19/20 + 30/20 = ?0/?1 = ?2 ?3/?4
49, 20, 2, 9, 20`
          ]
        },
        {
          title: 'Add the fraction and simplify it.',
          list: [
            `12/20 + 4/20 = ?0/?1 = ?2/?3
16, 20, 4, 5`,
            `2/8 + 2/8 = ?0/?1 = ?2/?3
4, 8, 1, 2`,
            `9/15 + 1/15 = ?0/?1 = ?2/?3
10, 15, 2, 3`,
            `2/9 + 4/9 = ?0/?1 = ?2/?3
6, 9, 2, 3`,
            `7/20 + 8/20 = ?0/?1 = ?2/?3
15, 20, 3, 4`
          ]
        },
        {
          title:
            'Add the fraction. Convert the answer from improper fraction to mixed fraction.',
          list: [
            `9/5 + 2/5 + 12/5 = ?0/?1 
= ?2 ?3/?4
23, 5, 4, 3, 5`,
            `19/9 + 21/9 + 10/9 = ?0/?1 
= ?2 ?3/?4
50, 9, 5, 5, 9`,
            `19/20 + 30/20 + 40/20 = ?0/?1 
= ?2 ?3/?4
89, 20, 4, 9, 20`,
            `12/20 + 15/20 + 18/20 = ?0/?1 
= ?2 ?3/?4
45, 20, 2, 5, 20`,
            `7/8 + 4/8 + 6/8 = ?0/?1 
= ?2 ?3/?4
17, 8, 2, 1, 8`
          ]
        },
        {
          title: 'Add the fraction and simplify it.',
          list: [
            `9/50 + 6/50 + 5/50 = ?0/?1 = ?2/?3
20, 50, 2, 5`,
            `1/18 + 5/18 + 4/18 = ?0/?1 = ?2/?3
10, 18, 5, 9`,
            `7/20 + 4/20 + 4/20 = ?0/?1 = ?2/?3
15, 20, 3, 4`,
            `20/100 + 25/100 + 30/100 = ?0/?1 = ?2/?3
75, 100, 3, 4`,
            `7/25 + 2/25 + 1/25 = ?0/?1 = ?2/?3
10, 25, 2, 5`
          ]
        },
        {
          list: [
            `3/10 + 2/10 - 4/10 = ?0/?1
1, 10`,
            `13/25 + 2/25 - 11/25 = ?0/?1
4, 25`,
            `3/8 + 2/8 - 1/8 = ?0/?1
4, 8`,
            `30/100 + 20/100 - 10/100 = ?0/?1
40, 100`,
            `20/23 + 4/23 - 14/23 = ?0/?1
10, 23`
          ]
        },
        {
          list: [
            `2 2/5 + 1/5 = ?0 ?1/?2
2, 3, 5`,

            `3 2/7 +  2 3/7 = ?0 ?1/?2
5, 5, 7`,

            `11 3/11 + 2 5/11 = ?0 ?1/?2
13, 8, 11`,

            `2/5 + 3 1/5 = ?0 ?1/?2
3, 3, 5`,

            `2 2/9 + 4 2/9 = ?0 ?1/?2
6, 4, 9`
          ]
        },
        {
          list: [
            `5 7/11 − 2 7/11 = ?0
3`,
            `7 8/9 −  5 3/9 = ?0 ?1/?2
2, 5, 9`,
            `14 6/7 − 4 2/7 = ?0 ?1/?2
10, 4, 7`,
            `4 25/100 − 9/100 = ?0 ?1/?2
4, 16, 100`,
            `15 11/14 − 1 6/14 = ?0 ?1/?2
14, 5, 14`
          ]
        },
        {
          list: [
            `12/13 + 1/13 = ?0/?1 = ?2
13, 13, 1`,
            `8/5 + 2/5 = ?0/?1 = ?2
10, 5, 2`,
            `13/11 − 2/11 = ?0/?1 = ?2
11, 11, 1`,
            `15/4 − 3/4 = ?0/?1 = ?2
12, 4, 3`,
            `8/5 + 2/5 + 10/5 = ?0/?1 = ?2
20, 5, 4`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fraction-multiply',
      label: 'Multiply Fractions',
      commonData: {
        title: 'Multiply Fractions',
        type: 'word-problem',
        fontSize: '1.8rem',
        fracFontSize: '1.2rem',
        isSentence: false
      },
      data: [
        {
          list: [
            `2/3 × 2/3 = ?0/?1 
4, 9`,
            `1/5 × 2/5 = ?0/?1 
2, 25`,
            `4/9 × 5/9 = ?0/?1 
20, 81`,
            `3/10 × 7/10 = ?0/?1 
21, 100`,
            `3/8 × 5/8 = ?0/?1 
15, 64`
          ]
        },

        {
          list: [
            `4/5 × 2/3 = ?0/?1 
8, 15`,
            `1/5 × 1/8 = ?0/?1 
1, 40`,
            `5/10 × 5/9 = ?0/?1 
25, 90`,
            `3/5 × 7/10 = ?0/?1 
21, 50`,
            `3/8 × 8/9 = ?0/?1 
24, 72`
          ]
        },
        {
          list: [
            `6/7 × 1/2 = ?0/?1 
6, 14`,
            `3/15 × 2/3 = ?0/?1 
6, 45`,
            `1/6 × 1/7 = ?0/?1 
1, 42`,
            `3/10 × 2/3 = ?0/?1 
6, 30`,
            `3/5 × 4/9 = ?0/?1 
12, 45`
          ]
        }
      ]
    }
  ]
};
