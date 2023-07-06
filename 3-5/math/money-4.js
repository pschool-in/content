export default {
  label: 'Money Based Problems',
  id: 'money-4',
  list: [
    {
      type: 'numberInput',
      id: 'table',
      label: 'Convert Money',
      commonData: {
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Convert the Rupees into Paise
  Rupees | Paise
  ₹ 18  | ₹ 20 | ₹  ?0
  ₹ 15  | ₹ 20 | ₹ ?1
  ₹ 12  | ₹ 20 | ₹  ?2
  ₹ 10 | ₹ 20 | ₹ ?3
  ₹ 5 | ₹ 20 |  ₹ ?4
  ₹ 17 | ₹ 20 |  ₹ ?5
  ₹ 8 | ₹ 20 |  ₹ ?6
  2, 5, 8, 10, 15, 3, 12`
            }
          ]
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'addition-missingworkout',
      label: 'Complete the Problem',
      commonData: {
        title: 'Add the Money',
        decimalPointCount: 2,
        money: '₹'
      },
      data: [
        { pattern: '1a.00 + 1a.00', missingRow: [2] },
        { pattern: 'aa.a0 + aa.a0', missingRow: [2] },
        { pattern: 'aa.b0 + aa.b0', missingRow: [2] },
        { pattern: 'aa.a5 + aa.a5', missingRow: [2] },
        { pattern: 'aa.b0 + a.b', missingRow: [2] },
        { pattern: 'xx.xx + xx.xx', missingRow: [2] },
        { pattern: 'xxx.xx + xxx.xx', missingRow: [2] },
        { pattern: 'aa.aa + aa.aa + aa.aa', missingRow: [3] },
        { pattern: 'xx.xx + xx.xx + xx.xx', missingRow: [3] },
        {
          text: ` 43.94 + 56.38
  64.93 + 46.28
  93.37 + 56.68
  92.14 + 32.88
  81.74 + 16.98
  27.47 + 70.18
  63.24 + 36.78
  82.35 + 24.57`,
          missingRow: [-1]
        },
        {
          text: ` 71.34 + 18.58
  215.67 + 148.97
  275.50 + 398.40 + 236.30
  564.00 + 110.48 + 277.68
  890.54 + 354.87 + 52.49
  483.18 + 299.36 + 47.50`,
          missingRow: [-1]
        }
      ]
    }
  ]
};
