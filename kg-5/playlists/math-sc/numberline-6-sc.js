export default {
  label: 'Number Line',
  id: 'numberline-6-sc',
  list: [
    {
      label: 'Negative Numbers',
      type: 'numberLine',
      id: 'negative-line',
      lockAfter: 1,
      commonData: {
        title: 'Pick the correct answer for the word problem.',
        hasNegative: true
      },
      data: [
        {
          pattern: 'misc~a-b'
        },
        {
          pattern: 'misc~b-b'
        },
        {
          pattern: 'misc~a+a-b'
        },
        {
          pattern: 'misc~a-a-a'
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
        `0 and 600 | 300
        0 and 1000 | 500
        0 and 300 | 150
        0 and 150 | 75
  0 and 800| 400`,

        `111 and 333| 222
  200 and 400 | 300
  700 and 1000 | 850
  666 and 888 | 777
  444 and 888 | 666`,

        `2 and 3 | 2.5
  8 and 11 | 9.5
  3.5 and 5.5 | 4.5
  1 and 4 | 2.5
  6 and 11 | 8.5`,

        `6.5 and 7 | 6.75
  2.25 and 2.75 | 2.5
  5 and 8 | 6.5
  50 and 55 | 52.5
  8 and 1 | 4.5`,

        `3.5 and 9.5 | 6.5
  5.25 and 6.25 | 5.75
  22 and 25 | 23.5
  0.2 and 0.6 | 0.4
  0.7 and 1.7 | 1.2`
      ]
    },
    {
      label: 'Find the Division',
      type: 'numberLine',
      id: 'divide',
      lockAfter: 1,
      commonData: {
        title: 'Pick the correct answer for the word problem.'
      },
      data: [
        {
          pattern: 'div~a~a'
        },
        {
          pattern: 'div~b~a'
        },
        {
          pattern: 'div~b~b'
        }
      ]
    }
  ]
};
