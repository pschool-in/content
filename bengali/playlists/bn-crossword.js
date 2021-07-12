export default {
  label: 'Crossword',
  id: 'bn-crossword',
  img: 'crossword',
  list: [
    {
      id: 'fruits',
      type: 'crossword',
      label: 'Fruits',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'আপেল',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'apple',
            direction: 'across'
          },
          {
            word: 'আঙুর',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'grapes',
            direction: 'down'
          },
          {
            word: 'আম',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'mango',
            direction: 'across'
          },
          {
            word: 'আতা',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'custard apple',
            direction: 'down'
          }
        ],
        table: [
          ['আ', 'পে', 'ল', '', ''],
          ['ঙু', '', '', '', ''],
          ['র', '', 'আ', 'ম', ''],
          ['', '', 'তা', '', ''],
          ['', '', '', '', '']
        ],
        lang: 'bn'
      }
    }
  ]
};
