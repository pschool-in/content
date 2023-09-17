export default {
  label: 'Simple Interest',
  id: 'simple-interest',
  list: [
    /*
    {
      id: 'story',
      type: 'slides2',
      label: `விடுகதைகள் `,
      data: {
        title: `விடுகதைகள்`,
        displayType: 'canvas',
        autoPlay: false,
        canvas: true,
        steps: [
          [
            {
              type: 'path',
              d: 'M 19 162 L 309 162',
              // temp: true
              text: 'Draw a stright line AB.'
            },
            {
              type: 'text',
              text: 'A',
              x: 19,
              y: 180
            },
            {
              type: 'text',
              text: 'B',
              x: 309,
              y: 180
            }
          ],
          {
            type: 'path',
            d: 'M 143 4 Q 175 12 181 45 ',
            // temp: true
            text: 'Using compass, draw an arc with A as center.'
          },
          {
            type: 'path',
            d: 'M 186 5 Q 154 13 148 46',
            // temp: true
            text: 'With B as center, draw an arc, so that it meets the earlier arc.'
          },
          {
            type: 'path',
            d: 'M 140 307 Q 172 299 178 266',
            // temp: true
            text: 'Again with A as center, draw an arc below the line AB.'
          },
          {
            type: 'path',
            d: 'M 183 304 Q 151 296 145 263',
            // temp: true
            text: 'With B as center, draw an arc, so that it meets the previous arc.'
          },
          {
            type: 'path',
            d: 'M 165 14 L 163 296',
            // temp: true
            text: 'Connect the two overlapping points by drawing a line. This line is the perpendicular bisector.'
          }
        ]
      }
    },
    */
    {
      id: 'notes',
      type: 'slides2',
      label: `Principal and Amount`,
      data: {
        title: `Principal and Amount`,
        displayType: 'custom',
        autoPlay: false,
        steps: [
          `We can take a loan from the bank for buying house or car.
The money borrowed from the bank as loan is called the Principal(P).
After some time, we have to repay the Principal with Interest(I).
The total money repaired is called Amount (A).`,
          [
            `Amount = Principal + Interest
  A = P + I `
          ]
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Fill the Missing Number',
      commonData: {
        title: 'Fill the Missing Number',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ 1000 | ₹ 100 | ₹ ?0
₹ 2500 | ₹ 500 | ₹ ?1
₹ 2000 | ₹ 150 | ₹ ?2
₹ 5000 | ₹ 900 | ₹ ?3
₹ 9000 | ₹ 1200 | ₹ ?4
1100, 3000, 2150, 5900, 10200`
            }
          ]
        },
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ 1000 | ₹ ?0 | ₹ 150
₹ 2500 | ₹ ?1 | ₹ 3100
₹ 2000 | ₹ ?2 | ₹ 2550
₹ 5000 | ₹ ?3 | ₹ 6010
₹ 9000 | ₹ ?4 | ₹ 10100
150, 600, 550, 1010, 1100`
            }
          ]
        },
        {
          list: [
            {
              widths: '120, 120, 120',
              text: `Principal(P) | Interest(I) | Amount(A)
₹ ?0 | ₹ 200 | ₹ 1000
₹ ?1 | ₹ 500 | ₹ 3000
₹ ?2 | ₹ 150 | ₹ 3650
₹ ?3 | ₹ 900 | ₹ 6400
₹ ?4 | ₹ 1200 | ₹ 11200 
800, 2500, 3500, 5500, 10000`
            }
          ]
        }
      ]
    },
    {
      id: 'notes',
      type: 'slides2',
      label: `Simple Interest`,
      data: {
        title: `Simple Interest`,
        displayType: 'custom',
        autoPlay: false,
        steps: [
          [
            `The interest to be repaid is given in per cent form.
          If the interest rate is 10% for 1 year and you borrow ₹ 100, then interest is ₹ 10. 
          Amount to be paid is  ₹ 110`
          ],
          [
            {
              type: 'eqn',
              text: 'Simple Interest = PRT/100'
            },

            `P = Principal
            R = Rate of Interest
            T = Time for which interest is calculated.`
          ]
        ]
      }
    }
    /*  {
      type: 'numberInput',
      id: 'fraction-add',
      label: 'Add: Like Fraction',
      commonData: {
        title: 'Add the fractions',
        type: 'word-problem',
        fontSize: '1rem',
        isSentence: true
      },
      data: [
        {
          list: [
            `Ravi borrowed ₹ 15,000 from a bank for 3 years at the rate of 12% per annum. Find the interest he has to pay during this time.
            Given that P = ₹ 15,000
            R = 12 % 
            T = ?0 years
            I = 15000x5x5/?4
            = ?5
            3, 15000, 12, 3, 100, 5400`
          ]
        }
      ]
    }*/
  ]
};
