export default {
  label: 'Number Line',
  id: 'numberline',
  list: [
    {
      label: 'Find the Number',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: 0,
          range: 10,
          text: '2, 7, 5, 9, 10, 0, 1, 3, 8, 5'
        },
        {
          start: 0,
          range: 20,
          minorLines: 2,
          labelGap: 2,
          text: '10, 16, 12, 4, 9, 13, 7, 17, 11, 5'
        },
        {
          start: 0,
          range: 40,
          minorLines: 2,
          labelGap: 4,
          text: '20, 32, 12, 36, 14, 18, 38, 22, 8, 16'
        },
        {
          start: 0,
          range: 60,
          minorLines: 2,
          labelGap: 6,
          text: '36, 54, 18, 48, 33, 45, 9, 39, 3, 51'
        },
        {
          start: 0,
          range: 80,
          minorLines: 2,
          labelGap: 8,
          text: '16, 28, 48, 76, 56, 64, 32, 72, 52, 60'
        },
        {
          start: 0,
          range: 100,
          minorLines: 2,
          labelGap: 10,
          text: '50, 25, 75, 40, 10, 85, 15, 60, 45, 65'
        },
        {
          start: 0,
          range: 40,
          minorLines: 4,
          labelGap: 4,
          text: '38, 22, 19, 23, 31, 11, 17, 4, 30, 7'
        }
      ]
    },
    {
      label: 'Addition',
      type: 'numberLine',
      id: 'number-line',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~x+a',
          range: 20
        },
        {
          pattern: 'misc~x+b',
          range: 20
        },
        {
          pattern: 'misc~xx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx+b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx+b',
          dynamicStart: true,
          unit: 20
        },
        {
          pattern: 'misc~xx+b',
          range: 100,
          start: 0,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~xxx+b',
          range: 100,
          dynamicStart: true,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~1x0+a0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        },
        {
          pattern: 'misc~xx0+x0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        }
      ]
    },
    {
      label: 'Subtraction',
      type: 'numberLine',
      id: 'subtract',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks.',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~x-a',
          range: 20
        },
        {
          pattern: 'misc~1x-b',
          range: 20
        },
        {
          pattern: 'misc~xx-a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx-b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx-a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx-b',
          dynamicStart: true,
          unit: 20
        },
        {
          pattern: 'misc~xx-b',
          range: 100,
          start: 0,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~xxx-b',
          range: 100,
          dynamicStart: true,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~1x0-a0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        },
        {
          pattern: 'misc~xx0-x0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        }
      ]
    },
    {
      label: 'Find the Multiplication',
      type: 'numberLine',
      id: 'multiply',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks.',
        type: 'read'
      },
      data: [
        {
          range: 50,
          pattern: 'misc~a*a'
        },
        {
          range: 100,
          pattern: 'misc~b*a'
        },
        {
          range: 100,
          pattern: 'misc~a*b',
          unit: 25
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
        `0  &  6| 3
0 & 8 | 4
0 & 20 | 10
0 & 100 | 50
0 & 14| 7`,

        `2 & 4 | 3
8 & 10 | 9
3 & 5 | 4
1 & 5 | 3
6 & 10 | 8`,

        `100 & 110 | 105
50 & 70 | 60
12 & 32 | 22
50 & 100 | 75
8 & 18 | 13`,

        `3 & 9 | 6
5 & 15 | 10
22 & 30 | 26
28 & 42 | 35
54 & 36 | 45`
      ]
    }
  ]
};
