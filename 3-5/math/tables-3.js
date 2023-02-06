export default {
  label: 'Tables 11 to 15',
  id: 'tables-3',
  list: [
    {
      type: 'match',
      label: 'Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `11 × 1 =, 11
11 × 2 =, 22
11 × 3 =, 33
11 × 4 =, 44
11 × 5 =, 55
11 × 6 =, 66`,

        `11 × 7 =, 77
11 × 8 =, 88
11 × 9 =, 99
11 × 10 =, 110
11 × 11 =, 121
11 × 12 =, 132`,

        `12 × 1 =, 12
12 × 2 =, 24
12 × 3 =, 36
12 × 4 =, 48
12 × 5 =, 60
12 × 6 =, 72`,

        `12 × 7 =, 84
12 × 8 =, 96
12 × 9 =, 108
12 × 10 =, 120
12 × 11 =, 132
12 × 12 =, 144`,

        `13 × 1 =, 13
13 × 2 =, 26
13 × 3 =, 39
13 × 4 =, 52
13 × 5 =, 65
13 × 6 =, 78`,

        `13 × 7 =, 91
13 × 8 =, 104
13 × 9 =, 117
13 × 10 =, 130
13 × 11 =, 143
13 × 12 =, 156`,

        `14 × 1 =, 14
14 × 2 =, 28
14 × 3 =, 42
14 × 4 =, 56
14 × 5 =, 70
14 × 6 =, 84`,

        `14 × 7 =, 98
14 × 8 =, 112
14 × 9 =, 126
14 × 10 =, 140
14 × 11 =, 154
14 × 12 =, 168`,

        `15 × 1 =, 15
15 × 2 =, 30
15 × 3 =, 45
15 × 4 =, 60
15 × 5 =, 75
15 × 6 =, 90`,

        `15 × 7 =, 105
15 × 8 =, 120
15 × 9 =, 135
15 × 10 =, 150
15 × 11 =, 165
15 × 12 =, 180`
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
          type: 'mul~x~11'
        },
        {
          type: 'mul~x~12'
        },
        {
          type: 'mul~x~13'
        },
        {
          type: 'mul~x~14'
        },
        {
          type: 'mul~x~15'
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
          title: 'Multiples of 11 or Not',
          types: [
            {
              name: 'Multiples of 11',
              text: '11, 22, 33, 44, 55, 66'
            },
            {
              name: 'Not',
              text: '14, 19, 24, 36, 49, 60'
            }
          ]
        },
        {
          title: 'Multiples of 12 or Not',
          types: [
            {
              name: 'Multiples of 12',
              text: '12, 24, 36, 48, 60, 72'
            },
            {
              name: 'Not',
              text: '14, 26, 34, 46, 64, 76'
            }
          ]
        },
        {
          title: 'Multiples of 13 or Not',
          types: [
            {
              name: 'Multiples of 13',
              text: '13, 26, 39, 52, 65, 78'
            },
            {
              name: 'Not',
              text: '16, 23, 36, 55, 63, 74'
            }
          ]
        },
        {
          title: 'Multiples of 14 or Not',
          types: [
            {
              name: 'Multiples of 14',
              text: '14, 28, 42, 56, 70, 84'
            },
            {
              name: 'Not',
              text: '18, 24, 65, 54, 67, 88'
            }
          ]
        },
        {
          title: 'Multiples of 15 or Not',
          types: [
            {
              name: 'Multiples of 15',
              text: '15, 30, 45, 60, 75, 90'
            },
            {
              name: 'Not',
              text: '25, 40, 50, 55, 70, 85'
            }
          ]
        },
        {
          title: 'Multiples of 11 or Not',
          types: [
            {
              name: 'Multiples of 11',
              text: '77, 88, 99, 110, 121, 132'
            },
            {
              name: 'Not',
              text: '78, 89, 98, 120, 131, 122'
            }
          ]
        },
        {
          title: 'Multiples of 12 or Not',
          types: [
            {
              name: 'Multiples of 12',
              text: '84, 96, 108, 120, 132, 144'
            },
            {
              name: 'Not',
              text: '92, 104, 116, 124, 136, 142'
            }
          ]
        },
        {
          title: 'Multiples of 13 or Not',
          types: [
            {
              name: 'Multiples of 13',
              text: '91, 104, 117, 130, 143, 156'
            },
            {
              name: 'Not',
              text: '96, 106, 107, 134, 165, 151'
            }
          ]
        },
        {
          title: 'Multiples of 14 or Not',
          types: [
            {
              name: 'Multiples of 14',
              text: '98, 112, 126, 140, 154, 168'
            },
            {
              name: 'Not',
              text: '96, 118, 124, 152, 158, 166'
            }
          ]
        },
        {
          title: 'Multiples of 15 or Not',
          types: [
            {
              name: 'Multiples of 15',
              text: '105, 120, 135, 150, 165, 180'
            },
            {
              name: 'Not',
              text: '115, 125, 140, 160, 170, 175'
            }
          ]
        }
      ]
    }
  ]
};
