export default {
  label: 'Integers',
  id: 'integers',
  list: [
    {
      label: 'Natural and Whole Numbers',
      type: 'passage',
      id: 'conditional-notes',
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
Eg: 4 x 6 = 24 (4, 6, 24 are natural numbers)
Natural numbers are always closed under addition and multiplication. It is called the Closure property.
Closure property does not hold good for subtraction and division.
Eg: 3-5= -2 (not a natural number)
10/4 = 2.5 (not a natural number)
# Associative Property
If we have to add three numbers in the mind, there are two ways. We can add the first two numbers and add the result with the third number. Alternatively, we can add the second and third number and add the result with the first number.
Lets say, we have to add 20, 30 & 50
Method 1: (20 + 30) + 50 = 50+50 = 100
Method 2: 20 + (30 + 50) = 20 + 80 = 100
Whichever method we follow, the answer is the same. This property is known as associative property.
The associative property holds true for addition and multiplication of natural numbers.
The associative property does not hold true for addition and multiplication of natural numbers.
# Commutative Property
30 + 50 = 50 + 30
10 x 20 = 20 x 10
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
            Zero is part of whole number.
            Natural numbers obey closure property during addition.
            Whole numbers obey closure property during multiplication.
            Commutative property holds good for addition of natural numbers.`
          },
          {
            name: 'False',
            text: `Every whole number is part of natural numbers.
            Zero is part of natural number.
            Whole numbers obey closure property during subtraction.
            Natural numbers obey closure property during division.
            Commutative property holds good for subtraction of whole numbers. numbers.`
          }
        ]
      }
    }
  ]
};
