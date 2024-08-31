export default {
  label: 'Natural and Whole numbers',
  id: 'whole-numbers-nios',
  lockAfter: 100,
  list: [
    {
      type: 'missingWorkout',
      id: 'workout-add',
      label: 'Addition - Intext Questions 1.1',
      lockAfter: 1,
      data: {
        title:
          'Find the sum of each of the following and verify the sum obtained by reversing the order of the numbers:',
        text: `573 + 617
2145 + 1355
243 + 357
12345 + 34521`,
        missingRow: [-1]
      }
    },
    {
      type: 'numberInput',
      id: 'fillup',
      label: 'Fill Up',
      data: {
        title: 'Fill in the blanks to make the following statements true: ',
        type: 'word-problem',
        answerBox: false,
        list: [
          `105 + 513 = ?0 + 105
513`,

          `345 + ( 118 + 202 )
= ( 345 + ?0 ) + 202
118`,

          `( 108 + 413 ) + 517 
= ( 517 + ?0 ) + 413
108`,

          `2344 + ( 1432 + 4224 )
= ( 1432 + 2344 ) + ?0
4224`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'fillup-2',
      label: 'Answer the following',
      data: {
        title: 'Answer the following',
        type: 'word-problem',
        answerBox: false,
        list: [
          `Find the sum of 15, 27 and 58 by grouping all possible ways.
( 15 + 27 ) + 58
= ?0 + ?1 = ?2
15 + ( 27 + 58 )
= ?3 + ?4 = ?5
( 15 + 58 ) + 27
= ?6 + ?7 = ?8
42, 58, 100, 15, 85, 100, 73, 27, 100`,

          `Add the numbers in easier way
(i) 537 , 368 , 463
Observe the last digits. Whichever pair sums to 10 are easier to solve.
( 537 + 463 ) + 368
= ?0 + ?1
= ?2
1000, 368, 1368`,

          `Add the numbers in easier way
(ii) 2493 , 3676 , 1324
Observe the last digits. Whichever pair sums to 10 are easier to solve.
2493 + ( 3676 + 1324 ) 
= ?0 + ?1
= ?2
2493, 5000 , 7493`
        ]
      }
    },
    {
      type: 'missingWorkout',
      id: 'workout-subtract',
      label: 'Subtraction - Intext Questions 1.2',
      lockAfter: 1,
      data: {
        title:
          'Perform subtraction operation on the following and verify your answer by performing corresponding addition:',
        text: `97 - 54
576 - 247
4276 - 1352
59432 - 27654`,
        missingRow: [-1]
      }
    },
    {
      type: 'numberInput',
      id: 'fillup-sub',
      label: 'Answer the following',
      data: {
        title: 'Answer the following',
        type: 'word-problem',
        answerBox: false,
        list: [
          `Find the difference between smallest 6 digit number and the largest 4 digit number.
Smallest 6 digit number
= ?0
Largest 4 digit number is
= ?1
??0 - ??1 = ?2
100000, 9999, 90001`,

          `In a group of buffalos, cows and sheep there are 536 animals. If number of buffalos is 218 and number of cows be 79, then find the number of sheep.
No. of buffalos & cows
= ?0 + ?1 = ?2
No of sheep = ?3 - ?4
= ?5
218, 79, 297, 536, 297, 239`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'fillup-mul',
      label: 'Intext Questions 1.3',
      commonData: {
        title: 'Answer the following',
        type: 'word-problem',
        answerBox: false,
        inputType: 'small',
        fontSize: '1.5rem'
      },
      data: [
        {
          title: `Fill in the box`,
          list: [
            `247 × ?0 = 33 × 247
33`,

            `12 × 45 × 97 = 97 × ?0 × 45
12`,

            `578 × 1 = 1 × ?0
578`,

            `57 × 36 = 57 × 30 + 57 × ?0
6`,

            `213 × 37 = 213 × 40 - 213 × ?0
3`
          ]
        },
        {
          title: `Using the properties find the value`,
          list: [
            `344 × 6 + 344 × 4
= ?0 × ( ?1 + ?2 )
= ??0 × ?3
= ?4
344, 6, 4, 10, 3440`,

            `247 × 17 - 247 × 7
= ?0 × ( ?1 - ?2 )
= ??0 × ?3
= ?4
247, 17, 7, 10, 2470`,

            `1025 × 1275 - 275 × 1025
= ?0 × ( ?1 - ?2 )
= ??0 × ?3
= ?4
1025, 1275, 275, 1000, 1025000`,

            `239 × 6 + 239 × 3 + 239
= ?0 × ( ?1 + ?2 + ?3 )
= ??0 × ?4
= ?5
239, 6, 3, 1, 10, 2390`
          ]
        },
        {
          title: `Answer the following`,
          list: [
            `3 (i) Find the product by grouping:
4 × 1527 × 25
= ( 4 × 25 ) × 1527
= ?0 × 1527
= ?1
100, 152700`,

            `3 (ii) Find the product by grouping:
125 × 278 × 8
= ( ?0 × ?1 ) × ?2
= ?3 × ??2
= ?4
125, 8, 278, 1000, 278000`,

            `3 (iii) Find the product by grouping:
250 × 37 × 4
= ( ?0 × ?1 ) × ?2
= ?3 × ??2
= ?4
250, 4, 37, 1000,37000`,

            `4 (i) Using the properties find the product: 
273 × 51
= ?0 × ( ?1 + ?2 )
= ?3 + ?4
= ?5
273, 50, 1, 13650, 273, 13923`,

            `4 (ii) Using the properties find the product: 
3045 × 99
= ?0 × ( ?1 − ?2 )
= ?3 − ?4
= ?5  ##<sub, 304500, 3045>
3045, 100, 1, 304500, 3045, 301455`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fillup-div',
      label: 'Intext Questions 1.4',
      data: {
        title: 'Find the value of the following',
        type: 'word-problem',
        inputType: 'small',
        fontSize: '1.2rem',
        list: [
          `2 (i) : 241 + ( 790 ÷ 79 )
= 241 + ?0
= ?1
10, 251`,

          `2 (ii) : (73 ÷ 73) + 45
= ?0 + 45
= ?1
1, 46`,

          `2 (iii) : 347 - (249 ÷ 249) 
= 347 - ?0
= ?1
1, 346`,
          `2 (iv) : (3125 ÷ 25) ÷ 25
= ?0 ÷ 25  ##<div, 3125, 25>
= ?1
125, 5 `,

          `Cost price of 13 watches is ₹ 11700. Find the cost price of 1 watch.
Ans = ?0  ##<div, 11700, 13>
900`
        ]
      }
    },
    {
      label: 'Select All Prime Numbers',
      type: 'numberTable',
      id: 'select-primes',
      data: {
        start: 1,
        step: 1,
        title: 'Select all Prime Numbers in the below table.',
        answer: [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97
        ]
      }
    },
    {
      label: 'Intext Questions 1.6',
      type: 'primeFactors',
      id: 'prime-factors',
      data: {
        arr: [50, 64, 144, 243]
      }
    },
    {
      label: 'Intext Questions 1.9',
      type: 'group',
      id: 'divisible-test',
      commonData: {
        title:
          '1. Using divisibility rules examine that following numbers are divisible.',
        fontSize: '1.5rem'
      },
      data: [
        {
          types: [
            {
              name: 'Divisible by 2',
              text: '612, 276, 2650, 79124'
            },
            {
              name: 'Not divisible',
              text: '872645, 524781'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 3',
              text: '612, 276, 524781'
            },
            {
              name: 'Not divisible',
              text: '2650, 79124, 872645'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 5',
              text: '2650, 872645'
            },
            {
              name: 'Not divisible',
              text: '612, 276, 79124, 524781'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 9',
              text: '612, 524781'
            },
            {
              name: 'Not divisible',
              text: '276, 2650, 79124, 872645'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 4',
              text: '63712, 763452, 35056, 234976'
            },
            {
              name: 'Not divisible',
              text: '51342, 2971'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 8',
              text: '63712, 35056, 234976'
            },
            {
              name: 'Not divisible',
              text: '763452, 51342, 2971'
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 6',
              text: '297144, 2070, 35274, 93162'
            },
            {
              name: 'Not divisible',
              text: '46523, 9087248, '
            }
          ]
        },
        {
          types: [
            {
              name: 'Divisible by 11',
              text: '83721, 70169803, 10000001'
            },
            {
              name: 'Not divisible',
              text: '438750, 723405, 3178965'
            }
          ]
        }
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `A number divisible by 9 is always divisible by 3.
A number divisible by 6 is always divisible by 3.
A number divisible by both 3 and 5 is always divisible by 15.
A number divisible by 8 is always divisible by 4.`
          },
          {
            name: 'False',
            text: `Even number is always divisible by 4.
A number divisible by 3 is always divisible by 9.
A number divisible by 2 is always divisible by 6.
A number divisible by 3 and 6 is always divisible by 18.`
          }
        ]
      }
    }
  ]
};
