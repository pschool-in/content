export default {
  id: 'balance-numbers',
  label: 'Balance Numbers',
  list: [
    {
      type: 'balance',
      label: 'Balance the number',
      id: 'balance',
      lockAfter: 4,
      data: [
        {
          left: 'x,x',
          right: 'v',
          count: 10
        },
        {
          left: 'x0,x',
          right: 'v',
          count: 10
        },
        {
          left: 'x',
          right: 'x, v',
          count: 10
        },
        {
          left: 'xx, x',
          right: 'v',
          count: 10
        },
        {
          left: 'x,x,x',
          right: 'v',
          count: 10
        },
        {
          left: 'x',
          right: 'x,x,v',
          count: 10
        },
        {
          left: 'xx, x',
          right: 'x, v',
          count: 10
        },
        {
          left: 'x0, x0',
          right: 'x0, v',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, v',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, x, v',
          count: 10
        }
      ]
    }
  ]
};
