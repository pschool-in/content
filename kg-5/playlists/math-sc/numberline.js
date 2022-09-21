export default {
  label: 'Number Line',
  id: 'numberline',
  list: [
    {
      label: 'Find the Problem',
      type: 'numberLine',
      id: 'number-line',
      lockAfter: 1,
      commonData: {
        title: 'Pick the correct answer for the word problem.'
      },
      data: [
        {
          pattern: 'misc~a+a'
        },
        {
          pattern: 'misc~b+a'
        },
        {
          pattern: 'misc~b-a'
        },
        {
          pattern: 'misc~a+a+a'
        },
        {
          pattern: 'misc~a+a-a'
        }
      ]
    },
    {
      label: 'Find the Multiplication',
      type: 'numberLine',
      id: 'multiply',
      lockAfter: 1,
      commonData: {
        title: 'Pick the correct answer for the word problem.'
      },
      data: [
        {
          pattern: 'mul~a~a'
        },
        {
          pattern: 'mul~b~a'
        },
        {
          pattern: 'mul~b~b'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'mid-point',
      label: 'Mid Point in Number Line',
      lockAfter: 1,
      commonData: {
        title:
          'Find the mid point between given two numbers in the Number Line.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `0 and 6| 3
  0 and 8 | 4
  0 and 20 | 10
  0 and 100 | 50
  0 and 14| 7`,

        `2 and 4 | 3
  8 and 10 | 9
  3 and 5 | 4
  1 and 5 | 3
  6 and 10 | 8`,

        `100 and 110 | 105
  50 and 70 | 60
  12 and 32 | 22
  50 and 100 | 75
  8 and 18 | 13`,

        `3 and 9 | 6
  5 and 15 | 10
  22 and 30 | 26
  28 and 42 | 35
  54 and 36 | 45`
      ]
    }
  ]
};
