export default {
  label: 'Square Numbers',
  id: 'square-numbers',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Square Numbers',
        text: `If we multiply two equal numbers, we get its square number.
          eg: 2 x 2 = 4, 3 x 3 = 9, 4 x 4 = 16
          The numbers 1, 4, 9, 16, 25, 36, 49, etc are called square numbers.
        
          Understanding and remembering the square numbers help in finding the prime factors of a given number. 
          For example, if we want to find the prime factors of 100, it is enough to check till 10.
          If we want to find the prime factors of 200, it is enough to check till 15, whose square is 225. 
          We know, 225 is the nearest prime number to 200 and it is greater than 200.
  `
      }
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `1 × 1 =, 1
  2 × 2 =, 4
  3 × 3 =, 9
  4 × 4 =, 16
  5 × 5 =, 25`,

        `6 × 6 =, 36
  7 × 7 =, 49
  8 × 8 =, 64
  9 × 9 =, 81
  10 × 10 =, 100`,

        `11 × 11 =, 121
  12 × 12 =, 144
  13 × 13 =, 169
  14 × 14 =, 196
  15 × 15 =, 225`,

        `16 × 16 =, 256
  17 × 17 =, 289
  18 × 18 =, 324
  19 × 19 =, 361
  20 × 20 =, 400`,

        `21 × 21 =, 441
  22 × 22 =, 484
  23 × 23 =, 529
  24 × 24 =, 576
  25 × 25 =, 625`
      ]
    },
    {
      label: 'Square Number or Not',
      type: 'group',
      id: 'group',
      commonData: {
        fontSize: '1.5rem',
        title: 'Classify the below numbers as Square Number or not.',
        types: ['Square Number', 'Not']
      },
      data: [
        ['1, 4, 9, 16, 25', '3, 8, 12, 20, 35'],
        ['36, 49, 64, 81, 100', '39, 46, 74, 91, 84'],
        ['121, 144, 169, 196, 225', '124, 131, 149, 164, 215'],
        ['256, 289, 324, 361, 400', '258, 279, 325, 300, 461'],
        ['441, 484, 529, 576, 625', '551, 464, 259, 425, 546']
      ]
    },
    {
      type: 'numberInput',
      id: 'nearest-number',
      label: 'Nearest Square Number',
      commonData: {
        title:
          'Write the smallest square number that is greater than the below number.',
        type: 'word-problem',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `90 | 100
  101 | 121
  48 | 49
  20 | 25
 80 | 81`,

        `150 | 169
  250 | 256
  110 | 121
  200 | 225
 280 | 289`,

        `500 | 529
  550 | 576
  600 | 625
  160 | 169
 320 | 324`,

        `440 | 441
 570 | 576
 525 | 529
 480 | 484
 330 | 361`
      ]
    }
  ]
};
