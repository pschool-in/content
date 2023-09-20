export default {
  label: 'Place Value - 7',
  id: 'place-value-7',
  list: [
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
    }
  ]
};
