export default {
  label: 'Number Line',
  id: 'numberline-6',
  list: [
    {
      label: 'Find Negative Numbers',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: -20,
          range: 30,
          minorLines: 2,
          labelGap: 2,
          unit: 50,
          text: '-6, -10, -1, -11, -17, -9, -15, -8, -12, -8'
        },
        {
          start: -40,
          range: 45,
          minorLines: 4,
          labelGap: 4,
          unit: 60,
          text: '-20, -27, -7, -15, -30, -11, -25, -32, -21, -3'
        },
        {
          start: -50,
          range: 60,
          minorLines: 5,
          labelGap: 5,
          unit: 80,
          text: '-45, -25, -47, -23, -37, -42, -8, -3, -27, -13'
        },
        {
          start: -80,
          range: 90,
          minorLines: 4,
          labelGap: 8,
          unit: 80,
          text: '-46, -24, -48, -28, -32, -72, -68, -76, -22, -12'
        },
        {
          start: -100,
          range: 110,
          minorLines: 5,
          labelGap: 10,
          unit: 80,
          text: '-40, -86, -62, -74, -28, -92, -78, -18, -36, -50'
        }
      ]
    },
    {
      label: 'Read Negative Numbers',
      type: 'numberLine',
      id: 'read-negative',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read',
        allowNegative: true
      },
      data: [
        {
          pattern: 'misc~a-b',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~x-b',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~-a-x',
          range: 20,
          start: -15
        },
        {
          pattern: 'misc~-a+x',
          range: 20,
          start: -5
        },
        {
          pattern: 'misc~-x+x',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~-xx-x',
          range: 20,
          dynamicStart: true
        },
        {
          pattern: 'misc~-xx+x',
          range: 20,
          dynamicStart: true
        },
        {
          pattern: 'misc~x-a-a',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~x-x+x',
          range: 30,
          start: -10
        },
        {
          pattern: 'misc~x+x-x',
          range: 30,
          start: -10
        },
        {
          pattern: 'misc~-xx-x+x',
          range: 20,
          dynamicStart: true
        },

        {
          pattern: 'misc~-xx+x-x',
          range: 20,
          dynamicStart: true
        }
      ]
    },
    {
      label: 'Find Decimal Number',
      type: 'numberLine',
      id: 'find-number-deci',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          range: 1,
          labelGap: 0.1,
          text: '0.2, 0.4, 0.9, 0.3, 0.7'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 5,
          unit: 100,
          text: '0.28, 0.46, 0.92, 0.58, 0.78'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 10,
          unit: 100,
          text: '0.23, 0.47, 0.91, 0.38, 0.75'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 4,
          text: '0.25, 0.475, 0.95, 0.35, 0.775'
        },
        {
          start: -10,
          range: 10,
          minorLines: 10,
          labelGap: 1,
          unit: 150,
          text: '-7.5, -5.2, -4.7, -8.2, -2.4, -6.9, -9.6, -0.8'
        },
        {
          start: -1,
          range: 2,
          minorLines: 10,
          labelGap: 0.2,
          unit: 90,
          text: '-0.8, 0.2, 0.8, -0.9, -0.1'
        }
      ]
    },
    {
      label: 'Read Decimal Numbers',
      type: 'numberLine',
      id: 'read-decimal',
      appLockAfter: 10,
      commonData: {
        type: 'read',
        title: 'What does the below numberline represents? Fill in the blanks'
      },
      data: [
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.x+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.x+0.a+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.b-0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          start: -1.0,
          pattern: 'misc~0.a-0.b'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.x+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.x+0.a+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.b-0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.a-0.b'
        },
        {
          range: 120,
          unit: 100,
          labelGap: 1,
          minorLines: 10,
          pattern: 'misc~x.x+1.a'
        },
        {
          range: 120,
          unit: 100,
          labelGap: 1,
          minorLines: 10,
          start: -1,
          pattern: 'misc~x.x-1.a'
        }
      ]
    },
    {
      label: 'Find the Multiplication',
      type: 'numberLine',
      id: 'multiply',
      lockAfter: 1,
      commonData: {
        title: 'Pick the correct answer for the word problem.',
        type: 'read',
        count: 5,
        minorLines: 10,
        labelGap: 1
      },
      data: [
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.2*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.3*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.4*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.5*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.6*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.7*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.8*x'
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
          'X is the mid point between given two numbers in the Number Line. Find x.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `0 & -4 | -2
4 & -4 | 0
-6 & 6 | 0
0 & -10 | -5
0 & -24 | -12`,

        `-4 & -14 | -9
-12 & -4 | -8
-16 & 0 | -8
-30 & -10 | -20
-5 & -15 | -10`,

        `2 & 3 | 2.5
8 & 11 | 9.5
3.5 & 5.5 | 4.5
1 & 4 | 2.5
6 & 11 | 8.5`,

        `6.5 & 7 | 6.75
2.25 & 2.75 | 2.5
5 & 8 | 6.5
50 & 55 | 52.5
8 & 1 | 4.5`,

        `3.5 & 9.5 | 6.5
5.25 & 6.25 | 5.75
22 & 25 | 23.5
0.2 & 0.6 | 0.4
0.7 & 1.7 | 1.2`
      ]
    }
  ]
};
