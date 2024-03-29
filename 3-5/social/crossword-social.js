export default {
  id: 'crossword-social',
  label: 'Social Crosswords',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      id: 'crossword-farm',
      label: 'On the Farm',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'bucket',
            marker: { x: 2, y: 0 },
            hint: 'It could be used to carry water',
            direction: 'across'
          },
          {
            word: 'water',
            marker: { x: 3, y: 1 },
            hint: 'It is used for irrigation',
            direction: 'across'
          },
          {
            word: 'tractor',
            marker: { x: 7, y: 0 },
            hint: 'It is a slow moving vehicle used in farms',
            direction: 'down'
          },
          {
            word: 'milk',
            marker: { x: 2, y: 2 },
            hint: 'It is used to make cheese and butter',
            direction: 'across'
          },
          {
            word: 'windmill',
            marker: { x: 3, y: 1 },
            hint: 'It makes energy from wind',
            direction: 'down'
          },
          {
            word: 'gander',
            marker: { x: 0, y: 4 },
            hint: 'It is a male goose',
            direction: 'across'
          },
          {
            word: 'barn',
            marker: { x: 1, y: 3 },
            hint: 'It gives shelter to farm animals',
            direction: 'down'
          },
          {
            word: 'lamb',
            marker: { x: 3, y: 7 },
            hint: 'It is a baby sheep',
            direction: 'across'
          },
          {
            word: 'calf',
            marker: { x: 4, y: 0 },
            hint: 'It is a baby cow',
            direction: 'down'
          },
          {
            word: 'eggs',
            marker: { x: 0, y: 2 },
            hint: 'It is collected from chicken',
            direction: 'down'
          },
          {
            word: 'mule',
            marker: { x: 1, y: 8 },
            hint: 'It is the offspring of horse and donkey',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', 'B', 'U', 'C', 'K', 'E', 'T'],
          ['', '', '', 'W', 'A', 'T', 'E', 'R'],
          ['E', '', 'M', 'I', 'L', 'K', '', 'A'],
          ['G', 'B', '', 'N', 'F', '', '', 'C'],
          ['G', 'A', 'N', 'D', 'E', 'R', '', 'T'],
          ['S', 'R', '', 'M', '', '', '', 'O'],
          ['', 'N', '', 'I', '', '', '', 'R'],
          ['', '', '', 'L', 'A', 'M', 'B', ''],
          ['', 'M', 'U', 'L', 'E', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-beach',
      label: 'At the Beach',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'jellyfish',
            marker: { x: 2, y: 0 },
            hint: 'It is a sea animal that stings',
            direction: 'down'
          },
          {
            word: 'ocean',
            marker: { x: 0, y: 1 },
            hint: 'It is the waterbody near to beach',
            direction: 'across'
          },
          {
            word: 'swimsuit',
            marker: { x: 0, y: 6 },
            hint: 'Most people wear it at the beach',
            direction: 'across'
          },
          {
            word: 'towel',
            marker: { x: 0, y: 0 },
            hint: 'It is used to dry off ourselves',
            direction: 'down'
          },
          {
            word: 'shovel',
            marker: { x: 2, y: 7 },
            hint: 'It is used to dig ',
            direction: 'across'
          },
          {
            word: 'waves',
            marker: { x: 3, y: 0 },
            hint: 'They wash in at seaside',
            direction: 'down'
          },
          {
            word: 'shore',
            marker: { x: 3, y: 4 },
            hint: 'It is the edge of water',
            direction: 'across'
          },
          {
            word: 'crab',
            marker: { x: 1, y: 1 },
            hint: 'It is a sea animal that stings',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['T', '', 'J', 'W', '', '', '', ''],
          ['O', 'C', 'E', 'A', 'N', '', '', ''],
          ['W', 'R', 'L', 'V', '', '', '', ''],
          ['E', 'A', 'L', 'E', '', '', '', ''],
          ['L', 'B', 'Y', 'S', 'H', 'O', 'R', 'E'],
          ['', '', 'F', '', '', '', '', ''],
          ['S', 'W', 'I', 'M', 'S', 'U', 'I', 'T'],
          ['', '', 'S', 'H', 'O', 'V', 'E', 'L'],
          ['', '', 'H', '', '', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-fast-food',
      label: 'Fast Food',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'donut',
            marker: { x: 0, y: 1 },
            hint: 'It is a cake with a hole',
            direction: 'across'
          },
          {
            word: 'sandwich',
            marker: { x: 1, y: 0 },
            hint: 'It has two pieces of bread and filling',
            direction: 'across'
          },
          {
            word: 'nuggets',
            marker: { x: 3, y: 0 },
            hint: 'They are small chicken pieces',
            direction: 'down'
          },
          {
            word: 'straw',
            marker: { x: 3, y: 6 },
            hint: 'They are tubes used to drink with',
            direction: 'across'
          },
          {
            word: 'tomato ',
            marker: { x: 3, y: 5 },
            hint: 'It is the red slice in a burger',
            direction: 'across'
          },
          {
            word: 'hotdog',
            marker: { x: 8, y: 1 },
            hint: 'It is a sausage in a roll',
            direction: 'down'
          },
          {
            word: 'burger',
            marker: { x: 0, y: 3 },
            hint: 'It is a beef patty on a bun',
            direction: 'across'
          },
          {
            word: 'soda',
            marker: { x: 6, y: 2 },
            hint: 'It is a fizzy drink',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', 'S', 'A', 'N', 'D', 'W', 'I', 'C', 'H'],
          ['D', 'O', 'N', 'U', 'T', '', '', '', 'H'],
          ['', '', '', 'G', '', '', 'S', '', 'O'],
          ['B', 'U', 'R', 'G', 'E', 'R', 'O', '', 'T'],
          ['', '', '', 'E', '', '', 'D', '', 'D'],
          ['', '', '', 'T', 'O', 'M', 'A', 'T', 'O'],
          ['', '', '', 'S', 'T', 'R', 'A', 'W', 'G']
        ]
      }
    }
  ]
};
