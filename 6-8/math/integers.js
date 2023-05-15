export default {
  label: 'Integers',
  id: 'integers',
  list: [
    {
      label: 'Natural and Whole Numbers',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Numbers',
        text: [
          `Natural numbers are the set of positive integers, from 1 to ∞ , but it doesn't include fractional and decimal numbers. They are also known as counting numbers.
Whole numbers are similar to Natural numbers but they start from 0 instead of 1.
Integers are a set of positive numbers, zero and negative numbers. But it doesn't include decimals and fractions.
Natural Numbers = {1, 2, 3, 4, ....}
Whole Numbers = {0, 1, 2, 3, 4, ....}
Integers = {..., -2, -1, 0, 1, 2, 3, ...}
# Closure Property
If we add two natural numbers, the result is also a natural number. 
Eg: 3 + 5 = 8 (3, 5, 8 - natural numbers).
Similarly if we multiply two natural numbers, the result is also a natural number. 
Eg: 4 × 6 = 24 (4, 6, 24 are natural numbers)
Natural numbers are always closed under addition and multiplication. It is called the Closure property.
Closure property does not hold good for subtraction and division of natural numbers.
Eg: 3 - 5= -2 (not a natural number)
Eg: 10 ÷ 4 = 2.5 (not a natural number)
Note: Closure property holds true for subtraction of integer numbers.
# Associative Property
If we have to add three numbers in the mind, there are two ways. We can add the first two numbers and add the result with the third number. Alternatively, we can add the second and third number and add the result with the first number.
Lets say, we have to add 20, 30 & 50
Method 1: (20 + 30) + 50 = 50+50 = 100
Method 2: 20 + (30 + 50) = 20 + 80 = 100
Whichever method we follow, the answer is the same. This property is known as associative property.
The associative property holds true for addition and multiplication of natural numbers.
The associative property does not hold true for subtraction and division of natural numbers.
# Commutative Property
30 + 50 = 50 + 30
10 × 20 = 20 × 10
30 - 50 ≠  50 - 30 
5 ÷  10 ≠  10 ÷  5
Commutative property holds true for addition and multiplication and doesn't hold true for subtraction and division.
# Additive identity
The number 0 is called the additive identity.  Adding any number with the additive identity, gives the number itself.
# Multiplicative identity
The number 1 is called the multiplicative identity. Multiplying any number with 1, gives the number itself.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-adj',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following number is called additive identity?`,
            options: `one, *zero, natural numbers, none of the above`
          },
          {
            qText: `Which of the following is not a natural number?`,
            options: `0, 1, 7, 10`
          },
          {
            qText: `Which of the following is not a whole number?`,
            options: `-1, 0, 1, 5`
          },
          {
            qText: `Commutative property holds true for ______.`,
            options: `multiplication, subtraction, division`
          },
          {
            qText: `Associative Property holds true for ________.`,
            options: `addition, subtraction, division`
          },
          {
            qText: `Which of the following number is called multiplicative identity?`,
            options: `zero, natural numbers, *one, none of the above`
          },
          {
            qText: `What is the last number in natural numbers?`,
            options: `Infinity, Crores, Billions`
          }
        ]
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      data: {
        title: 'Classify the following sentences as True or False',
        types: [
          {
            name: 'True',
            text: `Every natural number is part of whole numbers.
Zero is part of whole numbers.
Natural numbers obey closure property during addition.
Whole numbers obey closure property during multiplication.
Commutative property holds good for addition of natural numbers.`
          },
          {
            name: 'False',
            text: `Every whole number is part of natural numbers.
Zero is part of natural numbers.
Whole numbers obey closure property during subtraction.
Natural numbers obey closure property during division.
Commutative property holds good for subtraction of whole numbers.`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'commutative',
      label: 'Commutative Property',
      commonData: {
        type: 'word-problem',
        title: 'Fill in the blank using the commutative property.',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        `452 + 634 = ?0 + 452 | 634
7943 + ?0 = 8542 + 7943 | 8542
77 + ?0 = 103 + 77 | 103
5423 + 9854 = 9854 + ?0 | 5423
?0 + 48564 = 48564 + 92567 | 92567`,

        `70 × 5 = 5 × ?0 | 70
6 × 9 = ?0 × 6 | 9
42 × ?0 = 100 × 42 | 100
?0 × 61 = 61 × 23 | 23
11 × ?0 = 33 × 11 | 33`,

        `79 + 64 + 32 = 79 + ?0 + 64 | 32
543 + 345 + 984 = 984 + ?0 + 345 | 543
8 × ?0 × 12 = 12 × 8 × 15 | 15
75 × 100 × 25 = 100 × ?0 × 25 | 75
10 + 76 + ?0 = 76 + 20 + 10 | 20`
      ]
    },
    {
      label: 'Distributive Property',
      type: 'passage',
      id: 'distributive-notes',
      data: {
        title: 'Distributive Property',
        text: [
          `a × (b + c) = a × b + a × c
a × (b - c) = a × b - a × c
The distributive property states that when you multiply a number by a sum of two numbers, you can multiply each term inside the parentheses separately and then add the results.
Just like addition, it also works for subtraction, as given above.`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'distributive',
      label: 'Complete the Problem',
      commonData: {
        type: 'word-problem',
        title: 'Fill in the blanks using the commutative property.',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        {
          list: [
            `101 × 5 = (100 + ?0 ) × 5
= ?1 + ?2
= ?3
1, 500, 5, 505`,

            `201 × 8 = ( ?0 + 1) × 8
= ?1 + ?2
= ?3
200, 1600, 8, 1608`,

            `52 × 4 = ( ?0 + 2 ) × 4
= ?1 + ?2
= ?3
50, 200, 8, 208`,

            `3003 × 3 = ( ?0 + 3) × 3
= ?1 + ?2
= ?3
3000, 9000, 9, 9009`,

            `9 × 103 = 9 × ( ?0 + 3)
= ?1 + ?2
= ?3
100, 900, 27, 927`
          ]
        },
        {
          list: [
            `99 × 5 = (100 - ?0 ) × 5
= ?1 - ?2
= ?3
1, 500, 5, 495`,

            `199 × 3 = ( ?0 - 1) × 3
= ?1 - ?2
= ?3
200, 600, 3, 597`,

            `95 × 4 = (100 - ?0 ) × 4
= ?1 - ?2
= ?3
5, 400, 20, 380`,

            `97 × 2 = (100 - ?0 ) × 2
= ?1 - ?2
= ?3
3, 200, 6, 194`,

            `96 × 6 = (100 - ?0 ) × 6
= ?1 - ?2
= ?3
4, 600, 24, 576`
          ]
        },
        {
          list: [
            `299 × 5 = ( ?0 - ?1 ) × ?2
= ?3 - ?4
= ?5
300, 1, 5, 1500, 5, 1495`,

            `205 × 3 = ( ?0 + ?1 ) × ?2
= ?3 + ?4
= ?5
200, 5, 3, 600, 15, 615`,

            `99 × 9 = ( ?0 - ?1 ) × ?2
= ?3 - ?4
= ?5
100, 1, 9, 900, 9, 891`,

            `998 × 4 = ( ?0 - ?1 ) × ?2
= ?3 - ?4
= ?5
1000, 2, 4, 4000, 8, 3992`,

            `1004 × 4 = ( ?0 + ?1 ) × ?2
= ?3 + ?4
= ?5
1000, 4, 4, 4000, 16, 4016`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'add',
      label: 'Addition involving Negative Numbers',
      commonData: {
        type: 'word-problem',
        title: 'Solve:',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        `42 + (-2) = ?0 | 40
74 + (-20) = ?0 | 54
200 + (-50) = ?0 | 150
150 + (-25) = ?0 | 125
140 + (-40) = ?0 | 100`,

        `-70 + 80 = ?0 | 10
-170 + 70 = ?0 | -100
-50 + 59 = ?0 | 9
-90 + 40 = ?0 | -50
-70 + 90 = ?0 | 20`,

        `-75 + 95 = ?0 | 20
450 + (-100) = ?0 | 350
-900 + 60 = ?0 | -840
50 + (-25) = ?0 | 25
470 + (-50) = ?0 | 420`
      ]
    },
    {
      type: 'numberInput',
      id: 'sub',
      label: 'Subtraction involving Negative Numbers',
      commonData: {
        type: 'word-problem',
        title: 'Solve:',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        `20 – 80 = ?0 | -60
45 – 65 = ?0 | -20
70 – 100 = ?0 | -30
12 – 18 = ?0 | -6
700 – 1000 = ?0 | -300`,

        `-20 – 20 = ?0 | -40
-45 – 5 = ?0 | -50
-70 – 30 = ?0 | -100
-12 – 8 = ?0 | -20
-700 – 200 = ?0 | -900`,

        `20 – (-10) = ?0 | 30
35 – (-15) = ?0 | 50
80 – (-30) = ?0 | 110
55 – (-11) = ?0 | 66
145 – (-5) = ?0 | 150`,

        `-10 – (-10) = ?0 | 0
-35 – (-5) = ?0 | -30
-20 – (-10) = ?0 | -10
-60 – (-20) = ?0 | -40
-75 – (-25) = ?0 | -50`,

        `-95 – 10 = ?0 | -105
62 – (-3) = ?0 | 65
55 – (-20) = ?0 | 75
-42 – (-12) = ?0 | -30
-60 – (-30) = ?0 | -30`
      ]
    },

    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiplication involving Negative Numbers',
      commonData: {
        type: 'word-problem',
        title: 'Fill in the blank using the commutative property.',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        `5 × (-5) = ?0 | -25
-20 × 4 = ?0 | -80
-25 × 5 = ?0 | -125
7 × (-4) = ?0 | -28
3 × (-9) = ?0 | -27`,

        `-7 × (-3) = ?0 | 21
-5 × (-9) = ?0 | 45
-10 × (-6) = ?0 | 60
-4 × (-8) = ?0 | 32
-3 × (-11) = ?0 | 33`,

        `8 × (-8) = ?0 | -64
-20 × 6 = ?0 | -120
-5 × (-8) = ?0 | 40
-20 × 7 = ?0 | -140
-8 × (-4) = ?0 | 32`
      ]
    }
  ]
};
