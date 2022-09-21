export default {
  label: 'Algebra',
  id: 'algebra',
  list: [
    {
      type: 'numberInput',
      id: 'find-x',
      label: 'What is x?',
      lockAfter: 1,
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `x - 10 = 0 | 10
x - 104 = 0 | 104
x - 5 = 5 | 10
x - 7 = 10 | 17
x - 20 = 0| 20`,

        `2x = 12 | 6
3x = 6 | 2
5x = 10 | 2
5x = 15 | 3
7x = 21 | 3`,

        `3x = 15 | 5
x - 20 = 0 | 20
x - 3 = 3 | 6
x - 10 = 1 | 11
10x = 40 | 4`,

        `2x - 12 = 0 | 6
3x - 6 = 0 | 2
5x - 10 = 0 | 2
5x - 15 = 0 | 3
7x - 21 = 0 | 3`,

        `x/3 = 1 | 3
x/3 = 2 | 6
x/2 = 1 | 2
x/5 = 0 | 0
x/4 = 1 | 4`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-2',
      label: 'Negative Numbers',
      lockAfter: 1,
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `x + 10 = 0 | -10
x + 104 = 0 | -104
x + 5 = 5 | 0
x + 7 = 10 | 3
x + 20 = 0 | -20`,

        `x - 3 = -7 | -4
x - 7 = -17 | -10
x + 10 = -10 | -20
x + 3 = 0 | -3
x - 10 = -20 | -10`,

        `5 - x = 2 | 3
5 + x = 0 | -5
10 - x = 1 | 9
x - 5 = -10 | -5
x + 21 = 0 | -21`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-3',
      label: 'Find the value of X',
      lockAfter: 1,
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `x + x = 10 | 5
x + x = 22 | 11
2x + x = 9 | 3
x + 2x = 36 | 12
2x + 2x = 16 | 4`,

        `3x - 2x = 5 | 5
7x - 3x = 20 | 5
11x - 9x = 2 | 1
5x - x = 12 | 3
6x - 2x = 16 | 4`,

        `2x + 3x - 4x = 12 | 12
5x - x - 2x = 6 | 3
2x - 10 = 0 | 5
3x - 21 = 0 | 7
3x + 4x + 2x = 27 | 3`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Word Problem with Steps',
      data: {
        title: 'Answer the word problem.',
        type: 'word-problem',
        list: [
          `Two  numbers are in the ratio 3:4. If the sum of numbers is 63, find the numbers.
Solution:
Let the numbers be 3x and 4x. 
3x + 4x = 63
?0 x = 63
x = ?1
The first number = ?2
The second number = ?3
7, 9, 27, 36`,

          `Two  numbers are in the ratio 2:3. If the sum of numbers is 50, find the numbers.
Solution:
Let the numbers be 2x and 3x. 
2x + 3x = 50
?0 x = 50
x = ?1
The first number = ?2
The second number = ?3
5, 10, 20, 30`,

          `Two  numbers are in the ratio 1:3. If the sum of numbers is 48, find the numbers.
Solution:
Let the numbers be x and 3x. 
x + 3x = 48
?0 x = 48
x = ?1
The first number = ?2
The second number = ?3
4, 12, 12, 36`,

          `Two  numbers are in the ratio 7:5. If the difference between the numbers is 6, find the numbers.
Solution:
Let the numbers be 7x and 5x. 
7x - 5x = 6
?0 x = 6
x = ?1
The first number = ?2
The second number = ?3
2, 3, 21, 15`,

          `Two  numbers are in the ratio 4:3. If the difference between the numbers is 7, find the numbers.
Solution:
Let the numbers be 3x and 4x. 
4x - 3x = 7
?0 x = 7
x = ?1
The first number = ?2
The second number = ?3
1, 7, 28, 21`
        ]
      }
    }
  ]
};
