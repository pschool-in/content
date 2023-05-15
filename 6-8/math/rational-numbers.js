export default {
  label: 'Rational Numbers',
  id: 'rational-numbers',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Rational Numbers',
        text: [
          `A rational number is a type of real number, which is in the form of p/q where q is not equal to zero.
Rational numbers can be positive or negative. Positive numbers are greater than zero. Negative numbers are less than zero.
For positive rational numbers, both numerator and denominator have same sign. For negative rational numbers, numerator and denominator are of opposite sign.
# Negative of a number`,
          {
            type: 'html',
            text: `In general, for an integer a, we have,<br><br>
a + (– a) = (– a) + a = 0<br><br>
so, a is the negative of –a and –a is the negative of a.
-a is called the negative or additive inverse of a.`
          },
          `# Reciprocal
Reciprocal of a rational number is a number which we multiply with the rational number to get the product of 1.
What would you multiply 8/21 , to get the product 1? Obviously by 21/8`,
          {
            type: 'display',
            text: 'since, 8/21 × 21/8 = 1'
          },
          {
            type: 'display',
            text: `We say that a rational number c/d is called the reciprocal or multiplicative inverse of another non-zero rational number a/b, if a/b × c/d = 1`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'commutative',
      label: 'Additive Inverse',
      data: {
        type: 'word-problem',
        title: 'Write the additive inverse of the below number.',
        isSentence: false,
        firstLineFontSize: '2rem',
        text: `-50  | 50
100 | -100
0 | 0
45.5 | -45.5
-34.9 | 34.9`
      }
    },
    {
      type: 'numberInput',
      id: 'mul-inverse',
      label: 'Multiplicative Inverse',
      data: {
        type: 'word-problem',
        title: 'Write the multiplicative inverse of the below number.',
        isSentence: false,
        firstLineFontSize: '2rem',
        list: [
          `2/3 
Ans = ?0/?1
3, 2`,

          `7/11
Ans = ?0/?1
11, 7`,

          `7
Ans = ?0/?1
1, 7`,

          `1/11
Ans = ?0
11`,

          `-9/13
Ans = ?0/?1
13, -9`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'findvalue',
      label: 'Find the Value',
      commonData: {
        type: 'word-problem',
        title: 'Fill in the blanks.',
        isSentence: false,
        answerBox: false,
        firstLineFontSize: '2rem'
      },
      data: [
        `1 - 4/5 = ?0/?1  | 1, 5
1 - 7/11 = ?0/?1  | 4, 11
1 - 9/20 = ?0/?1  | 11, 20
1 - 7/15 = ?0/?1  | 8, 15
1 - 5/13 = ?0/?1  | 8, 13`,

        `-2/5 + -1/5 = ?0/?1  | -3, 5
-7/25 + -7/25 = ?0/?1  | -14, 25
-3/10 + -2/5 = ?0/?1  | -7, 10
-2/7 + -1/7 = ?0/?1  | -3, 7
-13/50 + -11/50 = ?0/?1  | -24, 50`,

        `2/7 - ( -3/7 ) = ?0/?1 | 5, 7
4/9 - ( -1/9 ) = ?0/?1 | 5, 9
11/25 - ( -2/25 ) = ?0/?1 | 13, 25
7/20 - ( -4/20 ) = ?0/?1 | 11, 20
3/13 - ( -7/13 ) = ?0/?1 | 10, 13`,

        `-1/9 - ( -2/9 ) = ?0/?1 | 1, 9
-4/7 - ( -1/7 ) = ?0/?1 | -3, 7
-11/25 - ( -2/25 ) = ?0/?1 | -9, 25
-5/20 - ( -4/20 ) = ?0/?1 | -1, 20
-3/13 - ( -7/13 ) = ?0/?1 | 4, 13`
      ]
    }
  ]
};
