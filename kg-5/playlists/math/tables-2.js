export default {
  label: 'Tables 6 to 10',
  id: 'tables-2',
  list: [
    {
      type: 'match',
      label: 'Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `6 × 1 =, 6
6 × 2 =, 12
6 × 3 =, 18
6 × 4 =, 24
6 × 5 =, 30
6 × 6 =, 36`,

        `6 × 7 =, 42
6 × 8 =, 48
6 × 9 =, 54
6 × 10 =, 60
6 × 11 =, 66
6 × 12 =, 72`,

        `7 × 1 =, 7
7 × 2 =, 14
7 × 3 =, 21
7 × 4 =, 28
7 × 5 =, 35
7 × 6 =, 42`,

        `7 × 7 =, 49
7 × 8 =, 56
7 × 9 =, 63
7 × 10 =, 70
7 × 11 =, 77
7 × 12 =, 84`,

        `8 × 1 =, 8
8 × 2 =, 16
8 × 3 =, 24
8 × 4 =, 32
8 × 5 =, 40
8 × 6 =, 48`,

        `8 × 7 =, 56
8 × 8 =, 64
8 × 9 =, 72
8 × 10 =, 80
8 × 11 =, 88
8 × 12 =, 96`,

        `9 × 1 =, 9
9 × 2 =, 18
9 × 3 =, 27
9 × 4 =, 36
9 × 5 =, 45
9 × 6 =, 54`,

        `9 × 7 =, 63
9 × 8 =, 72
9 × 9 =, 81
9 × 10 =, 90
9 × 11 =, 99
9 × 12 =, 108`,

        `10 × 1 =, 10
10 × 2 =, 20
10 × 3 =, 30
10 × 4 =, 40
10 × 5 =, 50
10 × 6 =, 60`,

        `10 × 7 =, 70
10 × 8 =, 80
10 × 9 =, 90
10 × 10 =, 100
10 × 11 =, 110
10 × 12 =, 120`
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x~6'
        },
        {
          type: 'mul~x~7'
        },
        {
          type: 'mul~x~8'
        },
        {
          type: 'mul~x~9'
        },
        {
          type: 'mul~x~10'
        }
      ]
    },
    {
      label: 'Group the Multiples',
      type: 'group',
      id: 'group',
      commonData: {
        fontSize: '1.5rem'
      },
      data: [
        {
          title: 'Multiples of 6 or Not',
          types: [
            {
              name: 'Multiples of 6',
              text: '6, 12, 18, 24, 30, 36'
            },
            {
              name: 'Not',
              text: '5, 9, 15, 21, 38, 44'
            }
          ]
        },
        {
          title: 'Multiples of 7 or Not',
          types: [
            {
              name: 'Multiples of 7',
              text: '7, 14, 21, 28, 35, 42'
            },
            {
              name: 'Not',
              text: '6, 17, 16, 27, 19, 26'
            }
          ]
        },
        {
          title: 'Multiples of 8 or Not',
          types: [
            {
              name: 'Multiples of 8',
              text: '8, 16, 24, 32, 40, 48'
            },
            {
              name: 'Not',
              text: '12, 20, 22, 36, 46, 30'
            }
          ]
        },
        {
          title: 'Multiples of 9 or Not',
          types: [
            {
              name: 'Multiples of 9',
              text: '9, 18, 27, 36, 45, 54'
            },
            {
              name: 'Not',
              text: '6, 19, 29, 26, 46, 35'
            }
          ]
        },
        {
          title: 'Multiples of 10 or Not',
          types: [
            {
              name: 'Multiples of 10',
              text: '10, 20, 30, 40, 50, 60'
            },
            {
              name: 'Not',
              text: '15, 24, 32, 25, 44,45'
            }
          ]
        },
        {
          title: 'Multiples of 6 or Not',
          types: [
            {
              name: 'Multiples of 6',
              text: '42, 48, 54, 60, 66, 72'
            },
            {
              name: 'Not',
              text: '44, 50, 56, 76, 64, 68'
            }
          ]
        },
        {
          title: 'Multiples of 7 or Not',
          types: [
            {
              name: 'Multiples of 7',
              text: '49, 56, 63, 70, 77, 84'
            },
            {
              name: 'Not',
              text: '47, 74, 59, 66, 54, 39'
            }
          ]
        },
        {
          title: 'Multiples of 8 or Not',
          types: [
            {
              name: 'Multiples of 8',
              text: '56, 64, 72, 80, 88, 96'
            },
            {
              name: 'Not',
              text: '94, 60, 68, 78, 84, 86'
            }
          ]
        },
        {
          title: 'Multiples of 9 or Not',
          types: [
            {
              name: 'Multiples of 9',
              text: '63, 72, 81, 90, 99, 108'
            },
            {
              name: 'Not',
              text: '56, 65, 79, 95, 92, 88'
            }
          ]
        },
        {
          title: 'Multiples of 10 or Not',
          types: [
            {
              name: 'Multiples of 10',
              text: '70, 80, 90, 100, 110, 120'
            },
            {
              name: 'Not',
              text: '75, 105, 108, 85, 95, 64'
            }
          ]
        }
      ]
    }
  ]
};
