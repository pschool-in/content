export default {
  label: 'Tables 2 to 5',
  id: 'tables',
  list: [
    {
      type: 'match',
      label: 'Tables',
      id: 'match',
      commonData: {
        title: 'Tables - Match the following'
      },
      data: [
        `2 × 1 =, 2
2 × 2 =, 4
2 × 3 =, 6
2 × 4 =, 8
2 × 5 =, 10
2 × 6 =, 12`,

        `2 × 7 =, 14
2 × 8 =, 16
2 × 9 =, 18
2 × 10 =, 20
2 × 11 =, 22
2 × 12 =, 24`,

        `3 × 1 =, 3
3 × 2 =, 6
3 × 3 =, 9
3 × 4 =, 12
3 × 5 =, 15
3 × 6 =, 18`,

        `3 × 7 =, 21
3 × 8 =, 24
3 × 9 =, 27
3 × 10 =, 30
3 × 11 =, 33
3 × 12 =, 36`,

        `4 × 1 =, 4
4 × 2 =, 8
4 × 3 =, 12
4 × 4 =, 16
4 × 5 =, 20
4 × 6 =, 24`,

        `4 × 7 =, 28
4 × 8 =, 32
4 × 9 =, 36
4 × 10 =, 40
4 × 11 =, 44
4 × 12 =, 48`,

        `5 × 1 =, 5
5 × 2 =, 10
5 × 3 =, 15
5 × 4 =, 20
5 × 5 =, 25
5 × 6 =, 30`,

        `5 × 7 =, 35
5 × 8 =, 40
5 × 9 =, 45
5 × 10 =, 50
5 × 11 =, 55
5 × 12 =, 60`
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
          type: 'mul~x~2'
        },
        {
          type: 'mul~x~3'
        },
        {
          type: 'mul~x~4'
        },
        {
          type: 'mul~x~5'
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
          title: 'Multiples of 2 or Not',
          types: [
            {
              name: 'Multiples of 2',
              text: '2,4,6,8,10,12'
            },
            {
              name: 'Not',
              text: '1,3,5,7,9,11'
            }
          ]
        },
        {
          title: 'Multiples of 3 or Not',
          types: [
            {
              name: 'Multiples of 3',
              text: '3, 6, 9, 12, 15, 18'
            },
            {
              name: 'Not',
              text: '2, 7, 11, 5, 10, 13'
            }
          ]
        },
        {
          title: 'Multiples of 4 or Not',
          types: [
            {
              name: 'Multiples of 4',
              text: '4, 8, 12, 16, 20, 24'
            },
            {
              name: 'Not',
              text: '3, 6, 10, 14, 15, 18'
            }
          ]
        },
        {
          title: 'Multiples of 5 or Not',
          types: [
            {
              name: 'Multiples of 5',
              text: '5, 10, 15, 20, 25, 30'
            },
            {
              name: 'Not',
              text: '4, 18, 52, 54, 44, 12'
            }
          ]
        },
        {
          title: 'Multiples of 2 or Not',
          types: [
            {
              name: 'Multiples of 2',
              text: '14, 16, 18, 20, 22, 24'
            },
            {
              name: 'Not',
              text: '15, 17, 11, 19, 21, 25'
            }
          ]
        },
        {
          title: 'Multiples of 3 or Not',
          types: [
            {
              name: 'Multiples of 3',
              text: '21, 24, 27, 30, 33, 36'
            },
            {
              name: 'Not',
              text: '20, 22, 29, 35, 25, 37'
            }
          ]
        },
        {
          title: 'Multiples of 4 or Not',
          types: [
            {
              name: 'Multiples of 4',
              text: '28, 32, 36, 40, 44, 48'
            },
            {
              name: 'Not',
              text: '30, 38, 42, 46, 22, 26'
            }
          ]
        },
        {
          title: 'Multiples of 5 or Not',
          types: [
            {
              name: 'Multiples of 5',
              text: '5, 10, 15, 20, 25, 30'
            },
            {
              name: 'Not',
              text: '54, 59, 64, 68, 47, 49'
            }
          ]
        }
      ]
    }
  ]
};
