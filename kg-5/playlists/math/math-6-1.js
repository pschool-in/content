export default {
  label: 'Class 6: Practice',
  id: 'math-6-1',
  list: [
    {
      label: 'Sign of Products',
      id: 'classify',
      type: 'classifySentence',
      data: {
        title: 'Choose the right option.',
        types: [
          {
            name: 'Positive',
            text: `The sign of the product of two negative integers and three positive integers is _____. 
The sign of the product of four negative integers is _____. `
          },
          {
            name: 'Negative',
            text: `The sign of the product of five negative integers is _____.
The sign of the product of a positive integer and three negative integers is _____.
The sign of the product of a negative integer and three positive integers is _____.`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'commutative',
      label: 'Commutative Property',
      data: {
        type: 'word-problem',
        title: 'Fill in the blanks using the commutative property.',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small',
        text: `452 + 634 = ?0 + 452 | 634
7943 + ?0 = 8542 + 7943 | 8542
79 + 64 + 32 = 79 + ?0 + 64 | 32
543 + 345 + 984 = 984 + ?0 + 345 | 543
5423 + 9854 = 9854 + ?0 | 5423`
      }
    },
    {
      type: 'numberInput',
      id: 'missing-fraction',
      label: 'Missing Fraction',
      data: {
        type: 'word-problem',
        title: 'Find the missing fraction.',
        answerBox: false,
        fontSize: '2rem',
        isSentence: false,
        text: `3/10 + ?0/?1 = 8/10 |  5, 10
4/11 + ?0/?1 = 7/11 | 3, 11
12/17 − ?0/?1 = 7/17 | 5, 17
17/19 − ?0/?1 = 7/19 | 10, 19
4/23 + ?0/?1 = 17/23 | 13, 23`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Pick the right option.',
        questions: [
          {
            qText: 'Which of the following is true?',
            options: `We cannot divide a whole number by zero.
The order in which two numbers are subtracted does not change their difference.
Commutative property is satisfied for division of whole numbers.
Whole numbers are not closed under multiplication.`
          },
          {
            qText: 'Which of the following numbers is the greatest?',
            options: `(2 + 0) x (0 + 3)
2 + 0 + 0 + 3
2 x 0 x 0 x 2
(2 x 0) + (0 x 3)`
          },
          {
            qText: 'The HCF of two prime numbers is ____.',
            options: `1
Greatest among them
Smallest among them
0`
          },
          {
            qText: 'Which of the following is less than 1/2 ?',
            options: `0.4998, 0.98, 0.7, 0.678`
          },
          {
            qText: 'Solve: 2/10 = _____.',
            options: `0.2, 0, 0.02, 0.002`
          },
          {
            qText:
              'An algebraic expression using the constants 2, 7 and x in such a way that only two arithmetic operations are used is ______.',
            options: `7x + 2
2 + 7x
7 + x + 2
* All of the above`
          },
          {
            qText: 'Sunita is x years old. Three years ago her age was _____.',
            options: `x - 3, x + 3, 3x, x/3`
          },
          {
            qText:
              'True or False: Fractions having different denominators are called unlike fractions.',
            options: `True, False`
          },
          {
            qText:
              'If the side of an equilateral triangle is x, find its perimeter.',
            options: `3x, 2x, 4x, x`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'write-answer',
      label: 'Write the answer',
      data: {
        title: 'Find the Power',
        type: 'word-problem',
        text: `The LCM of 9, 12 is ____. | 36
Evaluate: p + q, when p = 6 and q = -8. | -2
Add 7/12, 5/16 and 9/24. | ?0/?1 | 61, 48
By subtracting 8 from a number, we get 2. Find the number. | 10
If x = 2, y = 3 and z = 5. Find the value of 2x + y + z | 12
If x = 2, y = 3 and z = 5. Find the value of 4x - y + z | 10
Find the product of the greatest 3-digit number and the smallest 2-digit number. | 9990 
Dividing a number by 3, we get 5. What is the number? | 15
Evaluate P + QT , when P = 40, Q = 1/2 and T = 6. | 43
Evaluate P + QT , when P = 60, Q = 4 and T = -5. | 40`
      }
    },
    {
      type: 'numberInput',
      id: 'distributive-property',
      label: 'Distributive Property',
      data: {
        title: 'Find the product of the following using distributive property.',
        type: 'word-problem',
        inputType: 'small',
        list: [
          `104 x 15 = ( ?0 + ?1 ) x 15
= ?2 + ?3
= ?4
100, 4, 1500, 60, 1560`,

          `736 x 102 = 736 x ( ?0 + ?1 )
= ?2 + ?3
= ?4
100, 2, 73600, 1472, 75072`
        ]
      }
    },
    {
      label: 'Prime Factors',
      type: 'primeFactors',
      id: 'prime-factors',
      data: {
        arr: [516, 675]
      }
    },
    {
      type: 'numberInput',
      id: 'time-fraction',
      label: 'Time Fraction',
      data: {
        title: 'Time Fraction',
        type: 'word-problem',
        text: `What fraction of a minute is 23 seconds? | ?0/?1 | 23, 60
What fraction of an hour is 49 minutes? | ?0/?1 | 49, 60`
      }
    },
    {
      label: 'Ascending Order',
      type: 'sorting',
      id: 'ascending',
      data: {
        title: 'Rearrange the numbers in ascending order.',
        allowFrac: true,
        multiple: true,
        fontSize: '1.3rem',
        text: `0.465, 0.9, 4.83, 6.07,  7.4
-8 , -6, -4, -3, 0, 3, 5,  6`
      }
    },
    {
      type: 'numberInput',
      id: 'expanded-form',
      label: 'Expanded Form',
      data: {
        title: 'Write the following numbers in expanded form.',
        type: 'word-problem',
        inputType: 'small',
        text: `27.65 | ?0 + ?1 + ?2 + ?3 | 20, 7, 0.6, 0.05
102.05 | ?0 + ?1 + ?2 | 100, 2, 0.05`
      }
    }
  ]
};
