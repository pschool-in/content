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
          right: '?',
          count: 10
        },
        {
          left: 'x0,x',
          right: '?',
          count: 10
        },
        {
          left: 'x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'xx, x',
          right: '?',
          count: 10
        },
        {
          left: 'x,x,x',
          right: '?',
          count: 10
        },
        {
          left: 'x',
          right: 'x,x,?',
          count: 10
        },
        {
          left: 'xx, x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'x0, x0',
          right: 'x0, ?',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, ?',
          count: 10
        },
        {
          left: 'x, x, x',
          right: 'x, x, ?',
          count: 10
        }
      ]
    }
  ]
};
