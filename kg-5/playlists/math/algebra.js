export default {
  label: 'Algebra',
  id: 'algebra',
  list: [
    {
      type: 'numberInput',
      id: 'find-x',
      label: 'What is x?',
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `𝑥 - 10 = 0 | 10
𝑥 - 104 = 0 | 104
𝑥 - 5 = 5 | 10
𝑥 - 7 = 10 | 17
𝑥 - 20 = 0| 20`,

        `2𝑥 = 12 | 6
3𝑥 = 6 | 2
5𝑥 = 10 | 2
5𝑥 = 15 | 3
7𝑥 = 21 | 3`,

        `3𝑥 = 15 | 5
𝑥 - 20 = 0 | 20
𝑥 - 3 = 3 | 6
𝑥 - 10 = 1 | 11
10𝑥 = 40 | 4`,

        `2𝑥 - 12 = 0 | 6
3𝑥 - 6 = 0 | 2
5𝑥 - 10 = 0 | 2
5𝑥 - 15 = 0 | 3
7𝑥 - 21 = 0 | 3`,

        `𝑥/3 = 1 | 3
𝑥/3 = 2 | 6
𝑥/2 = 1 | 2
𝑥/5 = 0 | 0
𝑥/4 = 1 | 4`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-2',
      label: 'Negative Numbers',
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `𝑥 + 10 = 0 | -10
𝑥 + 104 = 0 | -104
𝑥 + 5 = 5 | 0
𝑥 + 7 = 10 | 3
𝑥 + 20 = 0 | -20`,

        `𝑥 - 3 = -7 | -4
𝑥 - 7 = -17 | -10
𝑥 + 10 = -10 | -20
𝑥 + 3 = 0 | -3
𝑥 - 10 = -20 | -10`,

        `5 - 𝑥 = 2 | 3
5 + 𝑥 = 0 | -5
10 - 𝑥 = 1 | 9
𝑥 - 5 = -10 | -5
𝑥 + 21 = 0 | -21`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-3',
      label: 'Find the value of X',
      commonData: {
        title: 'Find the value of x in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `𝑥 + 𝑥 = 10 | 5
𝑥 + 𝑥 = 22 | 11
2𝑥 + 𝑥 = 9 | 3
𝑥 + 2𝑥 = 36 | 12
2𝑥 + 2𝑥 = 16 | 4`,

        `3𝑥 - 2𝑥 = 5 | 5
7𝑥 - 3𝑥 = 20 | 5
11𝑥 - 9𝑥 = 2 | 1
5𝑥 - 𝑥 = 12 | 3
6𝑥 - 2𝑥 = 16 | 4`,

        `2𝑥 + 3𝑥 - 4𝑥 = 12 | 12
5𝑥 - 𝑥 - 2𝑥 = 6 | 3
2𝑥 - 10 = 0 | 5
3𝑥 - 21 = 0 | 7
3𝑥 + 4𝑥 + 2𝑥 = 27 | 3`
      ]
    },

    {
      type: 'numberInput',
      id: 'solve-equation',
      label: 'Solve the Equation',
      data: {
        title: 'Solve the below equation',
        type: 'word-problem',
        fontSize: '1.5rem',
        isSentence: false,
        list: [
          /*
          `2𝑥 + 9 = 𝑥 + 4
2𝑥 = 𝑥 + ?0
𝑥 = ?1
-5, -5`,

          `𝑥 + 5 = 2𝑥 - 9
2𝑥 - 9 = 𝑥 + ?0
2𝑥 = 𝑥 + ?1
𝑥 = ?2
5, 14, 14`,

          `9𝑥 - 1 = 𝑥 + 15
9𝑥 = 𝑥 + ?0
8𝑥 = ?1
𝑥 = ?2
16, 16, 2`,

          `3𝑥 + 1 = 2𝑥 - 7
3𝑥 = 2𝑥 + ?0
𝑥 = ?1
-8, -8`,

          `𝑥 + 7 = 2𝑥 + 1
𝑥 = 2𝑥 - ?0
𝑥 = ?1
6, 6`,
*/
          `3𝑥 - 5 = 𝑥 + 1
3𝑥 = 𝑥 + ?0
~?1𝑥 = 6
𝑥 = ?2
6, 2, 3`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'find-x-multi-step',
      label: 'Fill in the Boxes',
      data: {
        title: 'Fill in the boxes and complete the solution',
        type: 'word-problem',
        fracFontSize: '1rem',
        list: [
          `Find the value of m.
4(m + 3) = 18
m + 3 = 18/?0 = 9/?1
m = 9/2 - 3 = ~9-?2/2
m = ?3/?4
4, 2, 6, 3, 2`,

          `Find the value of x.
-2(x + 3) = 8
x + 3 = - 8/?0 = - ?1
x = - ?2 - ?3
x = - ?4
2, 4, 4, 3, 7`
        ]
      }
    },

    {
      type: 'numberInput',
      id: 'word-prob-ratio',
      label: 'Word Problem with Steps',
      data: {
        title: 'Answer the word problem.',
        type: 'word-problem',
        inputType: 'small',
        list: [
          `Two  numbers are in the ratio 3:4. If the sum of numbers is 63, find the numbers.
Solution:
Let the numbers be 3x and 4x. 
3x + 4x = 63
~?0x = 63
x = ?1
The first number = ?2
The second number = ?3
7, 9, 27, 36`,

          `Two  numbers are in the ratio 2:3. If the sum of numbers is 50, find the numbers.
Solution:
Let the numbers be 2x and 3x. 
2x + 3x = 50
~?0x = 50
x = ?1
The first number = ?2
The second number = ?3
5, 10, 20, 30`,

          `Two  numbers are in the ratio 1:3. If the sum of numbers is 48, find the numbers.
Solution:
Let the numbers be x and 3x. 
x + 3x = 48
~?0x = 48
x = ?1
The first number = ?2
The second number = ?3
4, 12, 12, 36`,

          `Two  numbers are in the ratio 7:5. If the difference between the numbers is 6, find the numbers.
Solution:
Let the numbers be 7x and 5x. 
7x - 5x = 6
~?0x = 6
x = ?1
The first number = ?2
The second number = ?3
2, 3, 21, 15`,

          `Two  numbers are in the ratio 4:3. If the difference between the numbers is 7, find the numbers.
Solution:
Let the numbers be 3x and 4x. 
4x - 3x = 7
~?0x = 7
x = ?1
The first number = ?2
The second number = ?3
1, 7, 28, 21`
        ]
      }
    }
  ]
};
