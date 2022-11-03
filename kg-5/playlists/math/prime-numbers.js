export default {
  label: 'Prime Numbers',
  id: 'prime-numbers',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Prime Numbers',
        text: [
          `Primes Numbers are numbers that are not divisible by any other numbers except by itself and one.
          For example 7 is a prime number. It is divisible only by 7 and 1. It is not divisible by any other numbers.
          Note: 1 is usually not considered as prime number.
          In the below image, all prime numbers are highlighted.`,
          { type: 'img', src: 'math/prime_numbers.jpg' },
          `Any number can be written as product of prime numbers.
          eg: 18 = 2 x 3 x 3
          eg: 64 = 2 x 2 x 2 x 2 x 2 x 2
          eg: 100 = 2 x 2 x 5 x 5`
        ]
      }
    },
    {
      label: 'Prime Number or Not',
      type: 'group',
      id: 'group',
      commonData: {
        fontSize: '1.5rem',
        title: 'Classify the below numbers as Prime Number or not.',
        types: ['Prime Number', 'Not']
      },
      data: [
        ['2, 3, 5, 7, 11', '6, 15, 8, 9, 12'],
        ['13, 17, 19, 23, 29', '14, 16, 21, 25, 27'],
        ['31, 37, 41, 43, 47', '33, 39, 45, 38, 46'],
        ['53, 59, 61, 67, 71', '51, 63, 57, 65, 69'],
        ['73, 79, 83, 89, 97', '75, 77, 81, 85, 93']
      ]
    },
    {
      label: 'Select All Prime Numbers',
      type: 'numberTable',
      id: 'select-primes',
      data: {
        start: 1,
        step: 1,
        title: 'Select all Prime Numbers in the below table.',
        answer: [
          2,
          3,
          5,
          7,
          11,
          13,
          17,
          19,
          23,
          29,
          31,
          37,
          41,
          43,
          47,
          53,
          59,
          61,
          67,
          71,
          73,
          79,
          83,
          89,
          97
        ]
      }
    },
    {
      label: 'Prime Factors',
      type: 'primeFactors',
      id: 'prime-factors',
      data: [
        [12, 16, 18, 48, 60],
        [24, 50, 75, 100, 200],
        [20, 90, 60, 52, 64],
        [25, 70, 80, 45, 28],
        [96, 110, 125, 150, 180]
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples-small',
      commonData: {
        start: 1,
        step: 1,
        rows: 6,
        columns: 6,
        cellSize: 45
      },
      data: [
        {
          title: 'Select all multiples of 2 in the below table.',
          answer: 2
        },
        {
          title: 'Select all multiples of 3 in the below table.',
          answer: 3
        },
        {
          title: 'Select all multiples of 4 in the below table.',
          answer: 4
        },
        {
          title: 'Select all multiples of 5 in the below table.',
          answer: 5
        },
        {
          title: 'Select all multiples of 6 in the below table.',
          answer: 6
        },
        {
          title: 'Select all multiples of 7 in the below table.',
          answer: 7
        }
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples-small-2',
      commonData: {
        start: 51,
        step: 1,
        rows: 6,
        columns: 6,
        cellSize: 45
      },
      data: [
        {
          title: 'Select all multiples of 2 in the below table.',
          answer: 2
        },
        {
          title: 'Select all multiples of 3 in the below table.',
          answer: 3
        },
        {
          title: 'Select all multiples of 4 in the below table.',
          answer: 4
        },
        {
          title: 'Select all multiples of 5 in the below table.',
          answer: 5
        },
        {
          title: 'Select all multiples of 6 in the below table.',
          answer: 6
        },
        {
          title: 'Select all multiples of 7 in the below table.',
          answer: 7
        }
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples',
      commonData: {
        start: 1,
        step: 1
      },
      data: [
        {
          title: 'Select all multiples of 6 in the below table.',
          answer: 6
        },
        {
          title: 'Select all multiples of 7 in the below table.',
          answer: 7
        },
        {
          title: 'Select all multiples of 8 in the below table.',
          answer: 8
        },
        {
          title: 'Select all multiples of 9 in the below table.',
          answer: 9
        },
        {
          title: 'Select all multiples of 10 in the below table.',
          answer: 10
        },
        {
          title: 'Select all multiples of 11 in the below table.',
          answer: 11
        },
        {
          title: 'Select all multiples of 12 in the below table.',
          answer: 12
        },
        {
          title: 'Select all multiples of 13 in the below table.',
          answer: 13
        },
        {
          title: 'Select all multiples of 14 in the below table.',
          answer: 14
        },
        {
          title: 'Select all multiples of 15 in the below table.',
          answer: 15
        }
      ]
    },
    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'select-multiples-101',
      commonData: {
        start: 101,
        step: 1
      },
      data: [
        {
          title: 'Select all multiples of 6 in the below table.',
          answer: 6
        },
        {
          title: 'Select all multiples of 7 in the below table.',
          answer: 7
        },
        {
          title: 'Select all multiples of 8 in the below table.',
          answer: 8
        },
        {
          title: 'Select all multiples of 9 in the below table.',
          answer: 9
        },
        {
          title: 'Select all multiples of 10 in the below table.',
          answer: 10
        },
        {
          title: 'Select all multiples of 11 in the below table.',
          answer: 11
        },
        {
          title: 'Select all multiples of 12 in the below table.',
          answer: 12
        },
        {
          title: 'Select all multiples of 13 in the below table.',
          answer: 13
        },
        {
          title: 'Select all multiples of 14 in the below table.',
          answer: 14
        },
        {
          title: 'Select all multiples of 15 in the below table.',
          answer: 15
        }
      ]
    }
  ]
};
