export default {
  label: 'Money - 6',
  id: 'money-6',
  list: [
    {
      type: 'counter',
      id: 'count',
      label: 'Count Money',
      commonData: {
        title: 'Calculate the total Money.'
      },
      data: [
        {
          width: 100,
          type: 'money',
          rs: [2000],
          arr: [2, 5, 3, 6, 4, 8, 10, 7]
        },
        {
          width: 100,
          type: 'money',
          rs: [20, 10],
          arr: [
            [2, 5],
            [4, 2],
            [5, 3],
            [3, 4],
            [2, 3]
          ]
        },
        {
          width: 100,
          type: 'money',
          rs: [2, 1],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        },
        {
          width: 100,
          type: 'money',
          rs: [20, 10],
          arr: [
            [2, 5],
            [4, 2],
            [5, 3],
            [3, 4],
            [2, 3]
          ]
        }
        /*  {
          width: 80,
          type: 'money',
          rs: [10, 5],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        } */
      ]
    },
    {
      type: 'denomination',
      id: 'denomination',
      label: 'Write the Denomination',
      commonData: {
        showImg: true
      },
      data: [
        {
          format: 'xx',
          denos: [5, 2, 1]
        },
        {
          format: 'xx00',
          denos: [2000, 100]
        },
        {
          format: 'ax00',
          denos: [500, 100]
        },
        {
          format: '1xx00',
          denos: [2000, 500, 100]
        },
        {
          format: 'xxxx',
          denos: [2000, 100, 10, 1]
        },
        {
          format: 'xxx',
          denos: [100, 50, 10, 1]
        },
        {
          format: 'xxx',
          denos: [100, 10, 5, 1]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'calulate',
      label: 'Calculate the total Money',
      commonData: {
        showImg: true,
        calculateMoney: true
      },
      data: [
        {
          format: 'x',
          denos: [5, 2, 1]
        },
        {
          format: 'x',
          denos: [2000, 100]
        },
        {
          format: 'x',
          denos: [500, 100]
        },
        {
          format: 'x',
          denos: [2000, 500, 100]
        },
        {
          format: 'x',
          denos: [2000, 100, 10, 1]
        },
        {
          format: 'x',
          denos: [100, 50, 10, 1]
        },
        {
          format: 'x',
          denos: [100, 10, 5, 1]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'denomination-2',
      label: 'Write the Denomination - 2',
      data: [
        {
          format: 'xxxx',
          denos: [500, 100, 50, 20, 10, 5, 1]
        },
        {
          format: '1xxx0',
          denos: [2000, 200, 50, 20, 10]
        },
        {
          format: 'xxxx',
          denos: [2000, 100, 20, 10, 2, 1]
        },
        {
          format: 'aaaab',
          denos: [2000, 100, 20, 10, 5, 1]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'calculate-2',
      label: 'Calculate the total Money - 2',
      commonData: {
        calculateMoney: true
      },
      data: [
        {
          format: 'x',
          denos: [500, 100, 50, 20, 10, 5, 1]
        },
        {
          format: 'x',
          denos: [2000, 200, 50, 20, 10]
        },
        {
          format: 'x',
          denos: [2000, 100, 20, 10, 2, 1]
        },
        {
          format: 'x',
          denos: [2000, 100, 20, 10, 5, 1]
        },
        //repeat
        {
          format: 'b',
          denos: [500, 100, 50, 20, 10, 5, 1]
        },
        {
          format: 'b',
          denos: [2000, 200, 50, 20, 10]
        },
        {
          format: 'b',
          denos: [2000, 100, 20, 10, 2, 1]
        },
        {
          format: 'b',
          denos: [2000, 100, 20, 10, 5, 1]
        }
      ]
    }
  ]
};
