export default {
  label: '(NCERT 6) Integers ',
  id: 'integer-6',
  list: [
    {
      label: 'MCQ (Ex 6.1)',
      type: 'mcq',
      id: 'mcq−adj',
      data: {
        title: 'Write opposites of the following :',
        questions: [
          {
            qText: `Increase in weight`,
            options: `Decrease in weight, Less in weight, Less in 𝑘𝑔`
          },
          {
            qText: `30 𝑘𝑚 north`,
            options: `30 𝑘𝑚 south, 30 𝑘𝑚 east, 30 𝑘𝑚 west`
          },
          {
            qText: `80 𝑚 east`,
            options: `80 𝑚 west, 80 𝑚 south, 80 𝑚 north`
          },
          {
            qText: `Loss of Rs 700`,
            options: `Gain of Rs 700, Loss of $ 700, Gain of $ 700`
          },
          {
            qText: `100 𝑚 above sea level`,
            options: `100 𝑚 below sea level, 100 𝑚 above mountain level, 100 𝑚 below mountain level`
          }
        ]
      }
    },
    {
      label: 'Right Sign',
      id: 'sign',
      type: 'classifySentence',
      data: {
        title:
          'Represent the following numbers as integers with appropriate signs.',
        variableOptions: true,
        text: `An aeroplane is flying at a height two thousand metre above the ground. | + 2000 , − 2000
A submarine is moving at a depth, eight hundred metre below the sea level.|  − 800 , + 800
A deposit of rupees two hundred. | + 200 , − 200
Withdrawal of rupees seven hundred. | − 700 ,  + 700
A profit of twenty rupees. | + 20 , − 20
A loss of four rupees. | − 4, + 4`
      }
    },
    {
      label: 'Find Number in the numberline',
      type: 'numberLine',
      id: 'find-number',
      data: {
        title: 'Represent the following numbers on a number line :',
        type: 'find',
        start: -12,
        range: 24,
        minorLines: 1,
        labelGap: 1,
        text: '5, -10, 8, -1, -6'
      }
    },
    {
      type: 'informationProcessing',
      id: 'numberline-info',
      label: 'Information Processing',
      data: {
        title:
          'Adjacent figure is a vertical number line, representing integers. Observe it and locate the following points :',
        type: 'svg',
        svg: {
          width: 200,
          height: 430,
          paths: [
            'M 95 30 H 105 M 95 50 H 105  M 95 70 H 105  M 95 90 H 105  M 95 110 H 105  M 95 130 H 105  M 95 150 H 105  M 95 170 H 105  M 95 190 H 105  M 95 210 H 105  M 95 230 H 105  M 95 250 H 105  M 95 270 H 105  M 95 290 H 105  M 95 310 H 105  M 95 330 H 105  M 95 350 H 105  M 95 370 H 105 ',

            'M 100 10 V 390 M 95 15 L 100 10 L 105 15 M 95 385 L 100 390 L 105 385'
          ],
          texts: [
            { str: 'D', x: 80, y: 20 },
            { str: 'C', x: 80, y: 80 },
            { str: 'B', x: 80, y: 100 },
            { str: 'A', x: 80, y: 140 },
            { str: '+8', x: 110, y: 20 },
            { str: '0', x: 110, y: 180 },
            { str: 'H', x: 80, y: 220 },
            { str: 'G', x: 80, y: 300 },
            { str: 'F', x: 80, y: 340 },
            { str: 'E', x: 80, y: 360 }
          ]
        },
        questions: [
          {
            qText: 'If point D is + 8, then which point is – 8?',
            options: 'F, E, G, H'
          },
          {
            qText: 'Is point G a negative integer or a positive integer?',
            options: 'Negative, Positive, Cannot find'
          },
          {
            qText: 'Write the integer for point B.',
            type: 'number',
            value: 4
          },
          {
            qText: 'Write the integer for point E.',
            type: 'number',
            value: -10
          },
          {
            qText:
              'Which point marked on this number line has the least value?',
            options: 'E , A, D, H'
          },
          {
            qText: 'Arrange all the points in decreasing order of value.',
            options: 'DCBAHGFE, ABCDEFGH, EFGHABCD'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'fillup',
      label: 'Answer the following',
      commonData: {
        isSentence: true,
        title: 'Answer the following'
      },
      data: [
        {
          title: `Following is the list of temperatures of five places in India on a particular day of the year. `,
          list: [
            {
              widths: '110, 200, 100',
              text: `Place | Temperature | Integer
Siachin | 10°C below 0°C | ?0
Shimla | 2°C below 0°C | ?1
Ahmedabad | 30°C above 0°C | ?2
Delhi | 20°C above 0°C | ?3
Srinagar | 5°C below 0°C | ?4
-10 , -2, 30, 20, -5`
            }
          ]
        },
        {
          title: `In each of the following pairs, which number is to the right of the other on the number line?`,
          firstLineFontSize: '2rem',
          list: [
            `2, 9
2 is present to the #<?0, left, right> of 9
left`,

            `–3, –8
–3 is present to the #<?0, left, right> of –8
right`,

            `0, –1
0 is present to the #<?0, left, right> of –1
right`,

            `–11, 10
–11 is present to the #<?0, left, right> of 10
left`,

            `–6, 6
–6 is present to the #<?0, left, right> of 6
left`,

            `1, –100
1 is present to the #<?0, left, right> of –100
right`
          ]
        },
        {
          title: `How many integers are present between the given pair of numbers?`,
          firstLineFontSize: '2rem',
          list: [
            `0 and –7
Ans = ?0
6`,

            `–4 and 4
Ans = ?0
7`,

            `–8 and –15
Ans = ?0
6`,

            `–30 and –23
Ans = ?0
6`
          ]
        },
        {
          list: [
            `Which number will we reach if we move 4 numbers to the right of –2?
Ans = ?0
2`,

            `Which number will we reach if we move 5 numbers to the left of 1?
Ans = ?0
-4`,

            `If we are at –8 on the number line, in which direction should we move to reach –13?
We have to move in the #< ?0, left, right>
left`,

            `If we are at –6 on the number line, in which direction should we move to reach –1?
We have to move in the #< ?0, left, right>
right`
          ]
        }
      ]
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        fracFontSize: '1rem',
        types: [
          {
            name: 'True',
            text: `–8 is to the right of –10 on a number line.`
          },
          {
            name: 'False',

            text: `–100 is to the right of –50 on a number line.
Smallest negative integer is –1.
–26 is greater than –25.`
          }
        ]
      }
    },
    {
      label: 'Find the Problem',
      type: 'numberLine',
      id: 'number-line-2',
      lockAfter: 1,
      commonData: {
        type: 'read',
        start: -15,
        range: 30,
        labelGap: 1,
        unit: 50
      },
      data: [
        {
          title: 'Using the number line write the integer which is :',
          text: `5+3 | 3 more than 5
-5+5 | 5 more than –5
2-6 | 6 less than 2
-2-3 | 3 less than –2`
        },
        {
          unit: 30,
          range: 40,
          title: 'Use number line and add the following integers :',

          text: `9-6 | 9 + (– 6)
5-11|  5 + (– 11)
-1-7 |  (– 1) + (– 7)
-5+10 | (– 5) + 10
-1-2-3 | (– 1) + (– 2) + (– 3)
-2+8-4 |(– 2) + 8 + (– 4)`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fillup-3',
      label: 'Find the Sum (Ex 6.2)',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Add without using number line :',
          text: `11 + (– 7) | 4
(– 13) + (+ 18) | 5
(– 10) + (+ 19) | 9
(– 250) + (+ 150) | -100
(– 380) + (– 270) | -650
(– 217) + (– 100) |  -317
(– 7) + (– 9) + 4 + 16 | 4
(37) + (– 2) + (– 65) + (– 8) | -38`
        },
        {
          title: 'Find the sum of :',
          text: `137 and – 354 | -217
– 52 and 52 | 0
– 312, 39 and 192 | -81
– 50, – 200 and 300 | 50`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fillup-4',
      label: 'Subtraction (Ex 6.3)',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Find',
          text: `35 – (20) | 15
          72 – (90) | -18
          (– 15) – (– 18) | 3
          (–20) – (13) | -33
          23 – (– 12) | 35
          (–32) – (– 40) | 8`
        },
        {
          title: 'Fill in the blanks',
          answerBox: false,
          text: `(– 8) + ?0 = 0 | 8
          13 + ?0 = 0 | -13
          12 + (– 12) = ?0 | 0
          (– 4) + ?0 = – 12 | -8
          ?0 – 15 = – 10 | 5`
        },
        {
          title: 'Find',
          text: ` (– 7) – 8 – (– 25) | -10
           (– 13) + 32 – 8 – 1 | 10
         (– 7) + (– 8) + (– 90) | -105
          50 – (– 40) – (– 2) | 92`
        }
      ]
    },
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      data: {
        fontSize: '1.5rem',
        title: `Compare the numbers`,
        text: `(-3) + (-6) = (-3) - (-6)
         (-21) - (-10) = (-31) + (-11)
         45 - (-11) = 57 + (-4)
         (-25) - (-42) = (-42) - (-25)`
      }
    }
  ]
};
