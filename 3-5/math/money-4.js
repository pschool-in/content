export default {
  label: 'Money Based Problems',
  id: 'money-4',
  list: [
    {
      type: 'numberInput',
      id: 'table',
      label: 'Convert Rupee to Paise',
      data: {
        type: 'word-problem',
        title: 'Convert the Rupee to Paise',
        list: [
          {
            widths: '150, 150',
            text: `Rupee | Paise
₹ 18  | ?0
₹ 15  | ?1
₹ 12  | ?2
₹ 10 | ?3
₹ 5 | ?4
₹ 17 | ?5
₹ 8 | ?6
1800, 1500, 1200, 1000, 500, 1700, 800`
          },
          {
            widths: '150, 150',
            text: `Rupee | Paise
₹ 7.50  | ?0
₹ 6.25  | ?1
₹ 4.50  | ?2
₹ 9.75 | ?3
₹ 13.50 | ?4
₹ 15.75 | ?5
₹ 3.25 | ?6
750, 625, 450, 975, 1350, 1575, 325`
          },
          {
            widths: '150, 150',
            text: `Rupee | Paise
₹ 75.76  | ?0
₹ 13.27  | ?1
₹ 64.08  | ?2
₹ 99.99 | ?3
₹ 49.90 | ?4
₹ 28.14 | ?5
₹ 32.32 | ?6
7576, 1327, 6408, 9999, 4990, 2814, 3232`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Convert Paise to Rupee',
      data: {
        type: 'word-problem',
        title: 'Convert the Paise to Rupee',
        list: [
          {
            widths: '150, 150',
            text: `Paise | Rupee
700  | ₹ ?0
500  |₹  ?1
1200  |₹  ?2
1000 |₹ ?3
100 | ₹ ?4
1700 |₹ ?5
800 |₹ ?6
7, 5, 12, 10, 1, 17, 8`
          },
          {
            widths: '150, 150',
            text: `Paise | Rupee
450  | ₹ ?0
525  |₹  ?1
1350  |₹  ?2
1050 |₹ ?3
1750 | ₹ ?4
1125 |₹ ?5
875 |₹ ?6
4.50, 5.25, 13.50, 10.50, 17.50, 11.25, 8.75`
          },
          {
            widths: '150, 150',
            text: `Paise | Rupee
724  | ₹ ?0
499  |₹  ?1
1585  |₹  ?2
3214 |₹ ?3
1990 | ₹ ?4
1621 |₹ ?5
1783 |₹ ?6
7.24, 4.99, 15.85, 32.14, 19.90, 16.21, 17.83`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Round off',
      commonData: {
        type: 'word-problem'
      },
      data: [
        {
          title: 'Round off the money to its nearest rupee',
          list: [
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 7.40  | ₹ ?0
₹ 5.10  |₹  ?1
₹ 15.70  |₹  ?2
₹ 12.90 |₹ ?3
₹ 19.60 | ₹ ?4
₹ 12.40 |₹ ?5
₹ 15.51 |₹ ?6
7, 5, 16, 13, 20, 12, 16`
            },
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 71.45  | ₹ ?0
₹ 45.52  |₹  ?1
₹ 11.74  |₹  ?2
₹ 65.90 |₹ ?3
₹ 99.90 | ₹ ?4
₹ 49.99 |₹ ?5
₹ 20.20 |₹ ?6
71, 46, 12, 66, 100, 50, 20`
            },
            {
              widths: '150, 150',
              text: `Paise | Rupee
455  | ₹ ?0
525  |₹  ?1
1360  |₹  ?2
1010 |₹ ?3
1709 | ₹ ?4
1190 |₹ ?5
8755 |₹ ?6
5, 5, 14, 10, 17, 12, 88`
            }
          ]
        },
        {
          title: 'Round off the money to its nearest ₹ 10s',
          list: [
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 74  | ₹ ?0
₹ 56  |₹  ?1
₹ 83  |₹  ?2
₹ 92 |₹ ?3
₹ 145 | ₹ ?4
₹ 99 |₹ ?5
₹ 189 |₹ ?6
70, 60, 80, 90, 150, 100, 190`
            },
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 91.45  | ₹ ?0
₹ 45.52  |₹  ?1
₹ 11.74  |₹  ?2
₹ 65.90 |₹ ?3
₹ 99.90 | ₹ ?4
₹ 46.99 |₹ ?5
₹ 22.20 |₹ ?6
90, 50, 10, 70, 100, 50, 20`
            },
            {
              widths: '150, 150',
              text: `Paise | Rupee
8550  | ₹ ?0
5250  |₹  ?1
1360  |₹  ?2
10100 |₹ ?3
1970 | ₹ ?4
3190 |₹ ?5
8755 |₹ ?6
90, 50, 10, 100, 20, 30, 90`
            }
          ]
        },
        {
          title: 'Round off the money to its nearest ₹ 100s',
          list: [
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 747  | ₹ ?0
₹ 856  |₹  ?1
₹ 839  |₹  ?2
₹ 929 |₹ ?3
₹ 170 | ₹ ?4
₹ 409 |₹ ?5
₹ 555 |₹ ?6
700, 900, 800, 900, 200, 400, 600`
            },
            {
              widths: '150, 150',
              text: `Cost | Round off
₹ 91.45  | ₹ ?0
₹ 445.52  |₹  ?1
₹ 611.74  |₹  ?2
₹ 365.90 |₹ ?3
₹ 999.90 | ₹ ?4
₹ 646.99 |₹ ?5
₹ 322.20 |₹ ?6
100, 400, 600, 400, 1000, 600, 300`
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
/*
    {
      //activity book
      type: 'numberInput',
      id: 'convert-paise',
      label: 'Convert Money',
      data: {
        type: 'word-problem',
        title: 'Round the given amounts to the nearest rupees',
        fontSize: '1.5rem',
        text: `6.40, 3.80, 4.90, 5.10, 2.60, 7.70, 1.20, 8.30, 35.10, 28.90, 67.40, 94.20, 64.80, 51.30, 49.70, 117.40, 437.20, 629.60, 358.30, 246.90` //activity book - page 5
        `36.30 + 57.21
        59.05 + 94.45
        81.25 + 33.28
        83.69 + 43.29
        21.48 + 42.27` // activity book - page 11
        `52.45 - 38.14
        95.42 - 74.63
        87.37 - 18.29
        69.05 - 34.10
        55.34 - 26.27
        85.04 - 68.52``506.44 + 16.34 + 22.84
        352.96 + 550.00 + 56.76
        41.14 + 36.56 + 95.15
        96.56 + 53.60 + 11.05
        770.00 + 511.05 + 85.67
        632.54 + 264.84 + 139.16`
      }
    },
    */
