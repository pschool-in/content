export default {
  label: 'Proportion',
  id: 'proportion',
  list: [
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      commonData: {
        title: 'The following numbers are in proportion.',
        fontSize: '2rem'
      },
      data: [
        {
          types: [
            {
              name: 'True',
              text: `1, 2, 5, 10
                6, 8, 9, 12
                15, 25, 9, 15`
            },
            {
              name: 'False',
              text: `5, 15, 15, 25
                4, 16, 8, 32`
            }
          ]
        },
        // Below from M7
        {
          types: [
            {
              name: 'True',
              text: `48, 20, 432, 180
                  24, 312, 14, 182`
            },
            {
              name: 'False',
              text: `4, 12, 21, 63
                  5, 20, 72, 30`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Find x',
      data: {
        title: 'Find x',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        list: [
          `x: 39 :: 6 : 8
            x = 6/8 x 39
            = ?0/?1 x 39
            = ?2/??1
            = ?3
            3, 4, 117, 29.25
            `
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Word Problems',
      data: {
        title: 'Word Problems',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        list: [
          //M7
          `Given the numbers: 6, 7, 18, 22. What number must be subtracted from each of the following numbers, so that they will be in proportion?
            Let us solve this by trial and error method. 
            If we subtract 1, we get ?0, ?1, ?2, ?3
            They are not in proportion.
            Let us subtract 2, we get ?4, ?5, ?6, ?7
            They are in proportion.
           5, 6, 17, 21, 4, 5, 16, 20 `,
          //M7
          `Rama runs a tailoring unit. In a week, the unit can produce 560 night suits. Rama gets an order for stitching 1200 night suits in 12 days. Will she be able to complete the work in time? If not, how many more days will she require to complete the order?
           No. of suits produced in 1 day
           = ?0/?1 = ?2
           No of days, it will take to stitch 1200 suits
           = 1200/?3 = ?4 days
           So, she will not be able to complete the work in time, and requires ?5 more days.
           560, 7, 80, 80, 15, 3`
        ]
      }
    }
  ]
};
