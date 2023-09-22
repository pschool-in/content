export default {
  label: 'Place Value - 7',
  id: 'place-value-7',
  list: [
    {
      id: 'notes',
      type: 'slides2',
      label: `Notes`,
      data: {
        title: `Expanded Form - Notes`,
        displayType: 'custom',
        autoPlay: false,
        steps: [
          [
            `We have learned in the lower classes, that any number can be written in expanded form.
            For eg:
            437 = 400 + 30 + 7`
          ],
          [
            `Similarly, decimal numbers can also be written in the expanded form.
            For eg:
            4.37 = 4 + 0.3 + 0.07
            It can also be written as `,
            {
              type: 'eqn',
              text: '4.37 = 4 + 3/10 + 7/100'
            }
          ],
          [
            `The digit immediately after then decimal point is called Tenth.
            Subsequent digits are called Hundredth, Thousandth etc.
            For eg:`,
            {
              type: 'eqn',
              text: `0.3 = 3/10 = three tenth`
            },
            {
              type: 'eqn',
              text: `0.05 = 5/100 = five hundredth`
            },
            {
              type: 'eqn',
              text: `0.007 = 7/1000 = seven thousandth`
            }
          ]
        ]
      }
    },
    {
      id: 'placeval-dnd',
      label: 'Drag & Drop',
      type: 'dragAndDrop',
      data: {
        img: 'placeValue.jpg',
        title: 'Drag and Drop the place values in the respective digits.',
        width: 350,
        height: 350,
        wordWidth: 80,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Thousands',
            x: 7,
            y: 257
          },
          {
            word: 'Hundreds',
            x: 6,
            y: 70
          },
          {
            word: 'Tens',
            x: 104,
            y: 315
          },
          {
            word: 'Ones',
            x: 97,
            y: 30
          },
          {
            word: 'Tenths',
            x: 149,
            y: 261
          },
          {
            word: 'Hundredths',
            x: 203,
            y: 59
          },
          {
            word: 'Thousandths',
            x: 238,
            y: 293
          }
        ]
      }
    },
    {
      label: 'Find the Number',
      type: 'placeValueAbacus',
      id: 'abacus-placevalue',
      lockAfter: 1,
      commonData: {},
      data: [
        { pattern: 'xx.x' },
        { pattern: 'xxx.xx' },
        { pattern: 'xx.xxx' },
        { pattern: 'xxxx.xx' },
        { pattern: 'xxxx.xxx' }
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match the Equals',
      commonData: {
        title: 'Match the equal terms',
        fontSize: '1.2rem'
      },
      data: [
        `1/10, tenth
        1/100, hundredth
        1/1000, thousandth
        2/10, two tenth
        7/10, seven tenth`,

        `3/10, 0.3
        4/100, 0.04
        3/100, 0.03
        4/10, 0.4
        3/1, 3`
      ]
    },
    {
      type: 'numberInput',
      id: 'distributive',
      label: 'Write the decimal number.',
      commonData: {
        type: 'word-problem',
        title: 'Write the decimal number from the given expanded form.',
        isSentence: false,
        fontSize: '2rem'
      },
      data: [
        `4 + 3/10 | 4.3
30 + 5 + 2/10 | 35.2
10 + 1 + 1/10 | 11.1
40 + 9/10 | 40.9
9 + 3/10 | 9.3`,

        `4 + 3/10 + 2/100 | 4.32
7 + 9/10 + 8/100 | 7.98
5 + 5/10 + 5/100 | 5.55
8 + 1/10 + 2/100 | 8.12
9 + 8/10 + 7/100 | 9.87`,

        `4 + 3/100 + 3/1000 | 4.033
70 + 3 + 4/100 | 73.04
600 + 20 + 9/1000 | 620.009
3 + 1/10 + 7/1000 | 3.107
2 + 6/100 + 8/1000 | 2.068`
      ]
    }
  ]
};
