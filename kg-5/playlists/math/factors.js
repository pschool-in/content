export default {
  label: 'Factors',
  id: 'factors',
  list: [
    {
      type: 'factorTree',
      id: 'factor-tree',
      label: 'Factor Tree',
      data: [
        {
          type: 0,
          arr: [18, 20, 50, 45, 75]
        },
        {
          type: 0,
          arr: [30, 42, 8, 27, 12]
        },
        {
          type: 1,
          arr: [24, 36, 16, 54, 90]
        },
        {
          type: 1,
          arr: [84, 40, 60, 150, 100]
        },
        {
          type: 2,
          arr: [24, 36, 16, 54, 90]
        },
        {
          type: 2,
          arr: [84, 40, 60, 150, 100]
        }
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      lockAfter: 1,
      commonData: {
        title: 'Multiple Choice Questions',
        hasFraction: true
      },
      data: [
        {
          questions: [
            {
              qText:
                "A rectangle has an area of 8 square centimeters. Which of the following could be the rectangle's length and width?",
              options: `4^cm and 4^cm
2^cm and 6^cm
* 1^cm and 8^cm
* 2^cm and 4^cm`
            },
            {
              qText:
                "A rectangle has an area of 15 square centimeters. Which of the following could be the rectangle's length and width?",
              options: ` * 1^cm and 15^cm
2^cm and 7^cm
* 3^cm and 5^cm
4^cm and 4^cm`
            },
            {
              qText: 'Which of the following are factor pairs for 12?',
              options: ` * 3 and 4
* 1 and 12
2 and 4
3 and 5
*2 and 6`
            },
            {
              qText: 'Which of the following numbers is a factor of 78?',
              options: `6, 7, 9, 4`
            },
            {
              qText: 'Which equation shows that 8 is a factor of 32?',
              options: `32 = 8 x 4, 32 = 8 +  24, 32 = 40 − 8, 32 = 256 ÷ 8`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'List all the factors of 36',
              options: `1, 2, 3, 4, 6, 9, 12, 18, 36
1, 2, 3, 4, 12, 16, 24, 36
2, 3, 4, 6, 9, 12, 24`
            },
            {
              qText: 'Which of the following numbers is a factor of 49?',
              options: `7, 2, 9, 4`
            },
            {
              qText: 'Which equation shows that 6 is a factor of 18?',
              options: `3 = 18 ÷ 6, 18 = 6 x 12, 18 = 24 - 6, 18 = 6 x 12`
            },
            {
              qText: 'List all the factors of 48',
              options: `1, 2, 3, 4, 6, 8, 12, 16, 24, 48
2, 4, 8, 16, 32, 48
1, 2, 4, 5, 6, 8, 10, 16, 24, 48`
            },
            {
              qText: 'Which of the following numbers is a factor of 63?',
              options: `3, 6, 2, 8`
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
            text: `2 is the only even number, that is also a prime number.
            Non-prime numbers are called composite numbers.
            47 is a prime number.`
          },
          {
            name: 'False',
            text: `Prime numbers are always divisible by 2.
            49 is a prime number.`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Factor Pairs',
      lockAfter: 1,
      data: {
        title: 'Answer the word problem.',
        type: 'word-problem',
        list: [
          {
            widths: '120, 50, 120',
            text: `Complete the table to find all the factor pairs of 42.
First factor | | Second factor
1 | and | ?0
2 | and | ?1
?2 | and |  14
6 | and | ?3
42, 21, 3, 7`
          },
          {
            widths: '150, 150',
            text: `Arun is cleaning up his 36 toy cars. He wants to put every car in a toy bin, and he wants each bin to have the same number of cars.
Using factor pairs, complete the table.
Bins | No. of Cars
1 | ?0
2 | ?1
?2 | 12
4 | ?3
6 | ?4
36, 18, 3, 9, 6`
          },
          {
            widths: '150, 150',
            text: `The area of a rectangle is 100 sq m. Complete the table that lists the possible values for length and breath.
Length | Breath
2 | ?0
4 | ?1
?2 | 10
5 | ?3
25 | ?4
50, 25, 10, 20, 4`
          },
          {
            widths: '120, 50, 120',
            text: `Complete the table to find all the factor pairs of 30.
First factor | | Second factor
?0 | and | 30
2 | and | ?1
3 | and |  ?2
?3 | and | 6
1, 15, 10, 5`
          },
          {
            widths: '150, 150',
            text: `The area of a rectangle is 64 sq m. Complete the table that lists the possible values for length and breath.
Length | Breath
8 | ?0
?1 | 4
?2 | 2
16 | ?3
?4 | 32
8, 16, 32, 4, 2`
          }
        ]
      }
    },
    {
      id: 'group',
      label: 'Factor or Not',
      type: 'group',
      commonData: {
        fontSize: '2rem',
        types: ['Factor', 'Not a Factor']
      },
      data: [
        {
          title: 'Group the numbers based on whether they are a factor of 100?',
          arr: ['2, 4, 5, 10, 25, 50', '3, 6, 30, 75, 15']
        },
        {
          title: 'Group the numbers based on whether they are a factor of 64?',
          arr: ['2, 4, 8, 16, 32', '24, 12, 3, 18, 7']
        },
        {
          title: 'Group the numbers based on whether they are a factor of 84?',
          arr: ['2, 4, 7, 12, 21, 3', '5, 10, 11, 9']
        }
      ]
    }
  ]
};
