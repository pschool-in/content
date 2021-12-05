export default {
  label: 'Numbers',
  id: 'numbers',
  list: [
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross-50',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        // the first two are samples
        {
          text: `?+22=?
        −b−b−
        ?+?=50
        =b=b=
        10+16=?`,
          answer: [54, 76, 44, 6, 26]
        },
        {
          text: `54+?=76
          −b−b−
          44+?=?
          =b=b=
          ?+?=26`,
          answer: [22, 6, 50, 10, 16]
        }
      ]
    }
  ]
};
