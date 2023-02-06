export default {
  label: 'Percentage',
  id: 'percentage',
  list: [
    {
      type: 'fraction',
      id: 'read-percent',
      label: 'Write the Percentage',
      commonData: {
        title: 'Write the filled percentage.',
        probType: 'read',
        topic: 'percent'
      },
      data: [
        {
          type: 'circle',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        },
        {
          type: 'hexogon',
          text: '2/10, 3/10, 1/10, 6/10, 8/10, 4/10, 7/10, 9/10'
        },
        {
          type: 'rect',
          text: '1/4, 3/4, 1/2, 7/10, 2/10, 5/10, 6/10, 3/10, 1/5, 4/5'
        },
        {
          type: 'rect',
          text: '1/20, 3/20, 7/20, 9/20, 11/20, 13/20, 3/25, 6/25, 9/25, 11/25'
        },
        {
          type: 'petals',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        }
      ]
    },
    {
      type: 'fraction',
      id: 'mark-percent',
      label: 'Mark the Percentage',
      commonData: {
        title:
          'Create the given percentage by filling the blocks. (Tap on the image to color).',
        topic: 'percent'
      },
      data: [
        {
          type: 'circle',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        },
        {
          type: 'hexogon',
          text: '2/10, 3/10, 1/10, 6/10, 8/10, 4/10, 7/10, 9/10'
        },
        {
          type: 'rect',
          text: '1/4, 3/4, 1/2, 7/10, 2/10, 5/10, 6/10, 3/10, 1/5, 4/5'
        },
        {
          type: 'rect',
          text: '1/20, 3/20, 7/20, 9/20, 11/20, 13/20, 3/25, 6/25, 9/25, 11/25'
        },
        {
          type: 'petals',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'fill-up',
      label: 'Find the Value',
      commonData: {
        title: 'Find the Value',
        type: 'word-problem',
        fontSize: '1.2rem',
        isSentence: false
      },
      data: [
        {
          list: [
            `50% of 80
= 80 × 50/100
= 80 × 1/2
= 80/2
= ?0
40`,
            `25% of 80
= 80 × 25/100
= 80 × 1/4
= 80/4
= ?0
20`,
            `20% of 80
= 80 × 20/100
= 80 × 1/5
= 80/5
= ?0
16`,
            `10% of 80
= 80 × 10/100
= 80 × 1/10
= 80/10
= ?0
8`,
            `40% of 80
= 80 × 40/100
= 80 × 2/5
= ?0/5
= ?1
160, 32`
          ]
        },
        {
          list: [
            `75% of 40
= 40 × 75/100
= 40 × ?0/?1
= ?2/4
= ?3
3, 4, 120, 30`,

            `40% of 40
= 40 × 40/100
= 40 × ?0/5
= ?1/?2
= ?3
2, 80, 5, 16`,

            `75% of 60
= 60 × 75/100
= 60 × ?0/?1
= ?2/4
= ?3
3, 4, 180, 45`,

            `80% of 80
= 80 × 80/100
= 80 × 4/5
= ?0/?1
= ?2
320, 5, 64`,

            `60% of 60
= 60 × 60/100
= 60 × ?0/?1
= ?2/5
= ?3
3,5,180,36`
          ]
        },
        {
          list: [
            `30% of 50
= 50 × 30/100
= 50 × 3/10
= ?0/?1
= ?2
150, 10, 15`,

            `70% of 80
= 80 × 70/100
= 80 × 7/10
= ?0/10
= ?1
560, 56`,

            `15% of 200
= 200 × 15/100
= 200 × 3/?0
= 600/?1
= ?2
20, 20, 30`,

            `25% of 1000
= 1000 × 25/100
= 1000 × 1/4
= ?0
250`,

            `75% of 300
= 300 × 75/100
= 300 × 3/?0
= ?1/4
= ?2
4, 900, 225`
          ]
        }
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Equal Terms',
      commonData: {
        title: 'Match Equal Terms'
      },
      data: [
        `25 % of 100 , 25
70 % of 100 , 70
5 % of 100 , 5
18 % of 100 , 18
77 % of 100 , 77`,

        `20 % of 50 , 10
50 % of 50 , 25
80 % of 50 , 40
60 % of 50 , 30
90 % of 50 , 45`,

        `50 % of 20, 10
75 % of 20, 15
25 % of 20, 5,
0 % of 20, 0
100 % of 20, 20`,

        `50 % of 80, 40
75 % of 80, 60
25 % of 80, 20,
0 % of 80, 0
100 % of 80, 80`,

        `50 % of 72, 36
50 % of 90, 45
50 % of 68, 34
50 % of 46, 23
50 % of 98, 49`,

        `25 % of 36, 9
25 % of 24, 6
25 % of 200, 50
25 % of 104, 26
25 % of 48, 12`,

        `20 % of 20, 4
20 % of 80, 16
20 % of 50, 10
20 % of 200, 40
20 % of 15, 3`
      ]
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Fill the Empty Boxes',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '250, 80',
              text: `Fill in the Boxes.
50 % of 100 | ?0
25 % of 100 | ?1
50 % of 10 | ?2
20 % of 10 | ?3
20 % of 40 | ?4
25 % of 60 | ?5
50, 25, 5, 2, 8, 15`
            }
          ]
        },
        {
          list: [
            {
              widths: '250, 80',
              text: `Fill in the Boxes.
50 % of 200 | ?0
50 % of 48 | ?1
50 % of 24 | ?2
50 % of 70 | ?3
50 % of 90 | ?4
50 % of 36 | ?5
100, 24, 12, 35, 45, 18`
            }
          ]
        },
        {
          list: [
            {
              widths: '250, 80',
              text: `Fill in the Boxes.
25 % of 200 | ?0
25 % of 48 | ?1
25 % of 24 | ?2
25 % of 60 | ?3
25 % of 96 | ?4
25 % of 36 | ?5
50, 12, 6, 15, 24, 9`
            }
          ]
        },
        {
          list: [
            {
              widths: '250, 80',
              text: `Fill in the Boxes.
20 % of 200 | ?0
20 % of 50 | ?1
20 % of 25 | ?2
20 % of 75 | ?3
20 % of 60 | ?4
20 % of 40 | ?5
40, 10, 5, 15, 12, 8`
            }
          ]
        },
        {
          list: [
            {
              widths: '250, 80',
              text: `Fill in the Boxes.
70 % of 100 | ?0
70 % of 200 | ?1
50 % of 30 | ?2
20 % of 30 | ?3
15 % of 100 | ?4
50 % of 50 | ?5
70, 140, 15, 6, 15, 25`
            }
          ]
        }
      ]
    },
    {
      type: 'match',
      id: 'match-2',
      label: 'Match Percentages with Fraction',
      commonData: {
        title: 'Match Equal Terms'
      },
      data: [
        `50 %, 1/2
25 %, 1/4
75 %, 3/4
10 %, 1/10
20 %, 1/5`,

        `0 %, 0
100 %, 1
40 %, 2/5
80 %, 4/5
60 %, 3/5`,

        `150 %, 3/2
200 %, 2
100 %, 1
125 %, 5/4
175 %, 7/4`,

        `90 %, 9/10
95 %, 19/20
70 %, 7/10
65 %, 13/20
35 %, 7/20`,

        `5 %, 1/20
15 %, 3/20
35 %, 7/20
45 %, 9/20
55 %, 11/20`
      ]
    }
  ]
};
