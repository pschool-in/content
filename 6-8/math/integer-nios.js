export default {
  label: 'Integers',
  id: 'integer-nios',
  lockAfter: 100,
  list: [
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Numbers',
      commonData: {
        fontSize: '2.5rem',
        type: 'math',
        probType: 'compare',
        title: `Intext Questions 2.1 : Compare numbers`
      },
      data: [
        {
          //page no: 4
          text: `5 = -5
-12 = -8
0 = -3
405 = -517`
        },
        {
          //page no: 4
          text: `-3 = -7
0 = 4
-3 = 2
-8 = 8`
        }
      ]
    },
    {
      label: 'Intext Questions 1.9',
      type: 'group',
      id: 'divisible-test',
      commonData: {
        title: '',
        fontSize: '1.5rem'
      },
      data: [
        {
          title: 'Find the integers between -3 and 3',
          types: [
            {
              name: 'Between',
              text: '-2, -1, 0, 1, 2'
            },
            {
              name: 'Not Between',
              text: '-3, 3, 4,-4'
            }
          ]
        },
        {
          title: 'Find the integers between 0 and 5',
          types: [
            {
              name: 'Between',
              text: '1, 2, 3, 4'
            },
            {
              name: 'Not Between',
              text: '-1, 0, 5, -5'
            }
          ]
        },
        {
          title: 'Find the integers between -4 and 0',
          types: [
            {
              name: 'Between',
              text: '-3, -2, -1'
            },
            {
              name: 'Not Between',
              text: '-4, 0, 1, 2'
            }
          ]
        },
        {
          title: 'Find the integers between -7 and -1',
          types: [
            {
              name: 'Between',
              text: '-6, -5, -4, -3, -2'
            },
            {
              name: 'Not Between',
              text: '-7, -1, 0, -8'
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fillup-div',
      label: 'Find the Value',
      data: {
        title: '4. Find the Value',
        type: 'word-problem',
        isSentence: false,
        fontSize: '1rem',
        firstLineFontSize: '2rem',
        text: `−4 + 7 | 3
6 + ( −8 ) | -2
−2 + ( −7 ) | -9
7 - ( −2 ) | 9
−8 - ( −3 ) | -5
0 - ( −5 ) | 5`
      }
    },
    {
      type: 'numberInput',
      id: 'intext-2-2',
      label: 'Intext Questions 2.2',
      commonData: {
        title: '4. Find the Value',
        type: 'word-problem',
        isSentence: false,
        fontSize: '1rem',
        firstLineFontSize: '1.5rem'
      },
      data: [
        {
          title: `1. Add the integers:`,
          text: `-312  and  217 | -95
-425 and -308 | -733
-231 and 231 | 0
125 and -45 | 80 `
        },
        {
          title: `2. Find the sum:`,
          firstLineFontSize: '1.2rem',
          text: `200 + (-135) + (-65) | 0
15 + 135 + (-250) | -100`
        },
        {
          title: `3. Subtract`,
          firstLineFontSize: '1.5rem',
          text: `17 from −13 | -30
−25 from 18 | 43
−115 from −25 | 90
−315 from 0 | 315
0 from −412 | -412`
        },
        {
          title: `4. Evaluate`,
          firstLineFontSize: '1.5rem',
          text: `35 + (−28) | 7
−17 − 18 − ( −45) |  10`
        },
        {
          title: `5. Find the following Products`,
          firstLineFontSize: '1.5rem',
          text: `3 × (−13) | -39
(−115) × 4 | -460
(−27) × (−30) | 810
5 × (−8) × 4 | -160
( −317 ) × 225 × 0 | 0`
        },
        {
          title: `7. Divide`,
          firstLineFontSize: '1.5rem',
          text: `−85 by 17 | -5
72 by −12 | -6`
        },
        {
          title: `8. Fill in the blanks`,
          firstLineFontSize: '1.5rem',
          answerBox: false,
          text: `88 ÷ ?0 = −8 | -11
−108 ÷ ?0 = 9 | -12
−144 ÷ ?0 = -16 | 9
?0 ÷ 12 = −8 | -96`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'intext-2-3',
      label: 'Intext Questions 2.3',
      data: {
        title: 'Answer the following:',
        type: 'word-problem',
        fontSize: '1.2rem',
        list: [
          `Find the value of :
42 + 45 ÷ 9
= 42 + ?0
= ?1
5, 47`,

          `Find the value of :
320 − 120 ÷ 8
= 320 − ?0
= ?1
15, 305`,

          `Find the value of :
13 − ( 15 − 18 ÷ 3 )
= 13 − ( 15 − ?0 )
= 13 − ?1
= ?2
6, 9, 4`,

          `Find the value of :
(-10) + (-6) ÷ (-2) × 3
= ?0 + ?1 × ?2
= ??0 + ?3
= ?4
-10, 3, 3, 9, -1`,

          `Simplify: 
30 + { 20 – 15 – ( 8 – 3 ) }
= 30 + { 20 – 15 – ?0 }
= 30 + ?1
= ?2
5, 0, 30`,

          `Simplify: 
29 – [14 + {16 – (12 – 4)}]
= 29 – [14 + {16 – ?0 }]
= 29 – [14 + ?1 ]
= 29 – ?2
= ?3
8, 8, 22, 7`
        ]
      }
    }
  ]
};
