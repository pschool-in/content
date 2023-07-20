export default {
  id: 'arithmetic-6',
  label: 'Arithmetic - 6',
  list: [
    {
      id: 'evaluate',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        title: 'Evaluate',
        allowNegative: true
      },
      data: [
        `-(5)
+(-3)
-(-10)
+(+7)
-(-1)
+(-1)
-(+3)
+(-12)
-(-33)
-(-49)`,

        `3 + (3 + 10)
(7 + 10) + 4
(4 + 3) + 6
(7 - 2) + 3
(2 + 5) - 5
(5 + 5) - 5
(11 + 11) - 10
5 + (6 - 2)
9 + (5 - 1)
10 + (15 - 5)`,

        {
          type: 'misc~aa-bb'
        },
        {
          type: 'misc~a+(b-a)'
        },
        {
          type: 'misc~a+(a-b)'
        },
        {
          type: 'misc~-a-a'
        },
        {
          type: 'misc~-a-(-a)'
        },
        {
          type: 'misc~(b-a)-(b-a)',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~(x-x)-(x-x)',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~(a-b)-(a-b)',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~(a-b)-(b-a)',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~(b-a)-(a-b)',
          fontSize: '1.3rem'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        title: 'Multiply',
        allowNegative: true
      },
      data: [
        {
          type: 'misc~-a*-a',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-a*b',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-a*-a*-1',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-a*b*-1',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~a*-b',
          fontSize: '1.3rem'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Division',
      lockAfter: 2,
      commonData: {
        title: 'Division',
        allowNegative: true
      },
      data: [
        {
          type: 'misc~-aa/-a',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-xx/x',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~xx/-x',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~xx/-a',
          fontSize: '1.3rem',
          decimal: true,
          decimalPointCount: 2
        },
        {
          type: 'misc~xxx/2',
          decimal: true
        },
        {
          type: 'misc~xxx/4',
          decimal: true
        },
        {
          type: 'misc~xxx/5',
          decimal: true
        },
        {
          type: 'misc~xxx/3',
          decimal: true,
          decimalPointCount: 2
        },
        {
          type: 'misc~xx/8',
          decimal: true,
          decimalPointCount: 3
        }
      ]
    },
    {
      id: 'evaluate-2',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        title: 'Evaluate',
        allowNegative: true
      },
      data: [
        {
          type: 'misc~a*-b/-1',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~b*a/-2',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-a*b/-2',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~-a*b/-10',
          fontSize: '1.3rem'
        },
        {
          type: 'misc~a*b/-10',
          fontSize: '1.3rem'
        }
      ]
    }
  ]
};
