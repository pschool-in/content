export default {
  label: 'Fraction Basics',
  id: 'fraction-sc',
  list: [
    {
      type: 'fraction',
      id: 'fraction',
      label: 'Create Fraction',
      lockAfter: 1,
      data: [
        {
          type: 'circle'
        },
        {
          type: 'rect'
        },
        {
          type: 'hexogon'
        },
        {
          type: 'petals'
        }
      ]
    },
    {
      type: 'fraction',
      id: 'fraction-read',
      label: 'Read Fraction',
      lockAfter: 1,
      commonData: { probType: 'read' },
      data: [
        {
          type: 'circle'
        },
        {
          type: 'rect'
        },
        {
          type: 'hexogon'
        },
        {
          type: 'petals'
        }
      ]
    },
    {
      type: 'compare',
      id: 'compare',
      label: 'Compare Fractions',
      lockAfter: 1,
      commonData: {
        fontSize: '2.5rem',
        type: 'math',
        probType: 'compare'
      },
      data: [
        `1 = 1/2
1 = 2/2
1/2 = 1/4
1/4 = 3/4
1 = 3/3
1 = 2/3
3/4 = 3/3
2/4 = 1/2
4/4 = 1
1/2 = 2/3`,

        `2/5 = 3/5
3/6 = 4/6
7/9 = 5/9
4/6 = 5/6
3/7 = 4/7
2/5 = 4/5
2/9 = 5/9
4/6 = 2/6
6/7 = 4/7
3/5 = 4/5`,

        `3/4 = 1/2
7/9 = 1/2
3/6 = 1/2
2/9 = 1/2
4/6 = 1/2
6/7 = 1/2
3/7 = 1/2
2/10 = 1/2
2/5 = 1/2
3/6 = 1/2`,

        `2/5 = 3/10
3/4 = 4/6
7/9 = 5/10
3/6 = 5/6
3/7 = 4/8
2/10 = 4/5
2/9 = 5/10
4/6 = 2/4
6/7 = 4/8
3/6 = 4/5`
      ]
    },
    {
      type: 'match',
      id: 'match-names',
      label: 'Match Fractions and Names',
      lockAfter: 1,
      commonData: {
        title: 'Match Fractions and Names',
        allowFrac: true
      },
      data: [
        `Half , 1/2
Two-third, 2/3
Two-tenth, 2/10
Five-seventh, 5/7
Three-forth, 3/4`,

        `Quarter, 1/4
Three quarter, 3/4
Two-fifth, 2/5
Four-fifth, 4/5
Three-seventh, 3/7`
      ]
    }
  ]
};
