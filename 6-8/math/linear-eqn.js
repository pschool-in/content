export default {
  label: 'Linear Equation',
  id: 'linear-eqn',
  lockAfter: 100,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Equation vs Expression',
        text: [
          `In the earlier classes, we got familiar with algebraic expressions and equations.`,
          {
            type: 'display',
            text: '~5x , ~2x-3 , ~3x+y are some examples of expression.'
          },
          {
            type: 'display',
            text: '~2x=4 , ~2x-3=0 , ~7x+4y=0 are some examples of equation.'
          },
          `Equations have the equality (=) sign which would be missing in expressions.
The linear equations in one variable is an equation which is expressed in the form of ax+b=0, where a and b are two integers, and x is a variable and has only one solution. For example, 2x+3=8 is a linear equation having a single variable in it.`
        ]
      }
    },
    {
      label: 'Expression or Equation',
      id: 'expn-eqn',
      type: 'classifySentence',
      commonData: {
        title: 'Classify the below.',
        types: ['Expression', 'Equation']
      },
      data: [
        [
          `~2𝑥+5
~4𝑦-20
~7𝑥+4𝑦`,

          `~𝑥-1=0
~𝑥+𝑦=5`
        ],
        [
          `~4𝑥+5𝑦+6𝑧
~7𝑥-𝑦`,

          `~𝑥+𝑦=𝑧
~3𝑥=2𝑦
~4𝑦-5𝑥=20`
        ],
        [
          `~𝑥3+𝑥2+𝑥
~4𝑦2+2𝑦-100
~5𝑦+𝑧`,

          `~𝑥3+3𝑥2=100
~2𝑥3+3𝑦2=75`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x',
      label: 'What is 𝑥?',
      commonData: {
        title: 'Find the value of 𝑥 in the below equation.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `2𝑥 - 10 = 0 | 5
2𝑥 - 100 = 0 | 50
2𝑥 - 5 = 5 | 5
3𝑥 - 6 = 0 | 2
5𝑥 - 20 = 0| 4`,

        `2𝑥 - 12 = 0 | 6
3𝑥 - 12 = 0 | 4
5𝑥 - 10 = 0 | 2
5𝑥 - 35 = 0 | 7
7𝑥 - 21 = 0 | 3`,

        `3𝑥 + 15 = 0 | -5
5𝑥 + 30 = 0 | -6
7𝑥 + 42 = 0 | -6
6𝑥 + 12 = 0 | -2
10𝑥 + 40 = 0 | -4`
      ]
    },
    {
      label: 'Linear Equation of One Variable',
      id: 'true-false',
      type: 'classifySentence',
      commonData: {
        title: 'True or False: Below is a linear equation of single variable.',
        types: ['True', 'False']
      },
      data: [
        [
          `~2𝑥+5=0
~4𝑦-20=0
~𝑥-1=0`,

          `~7𝑥+4𝑦=100
~𝑥+𝑦=5`
        ],
        [
          `~3𝑥=2
~5𝑥-3𝑥=5-3
~5𝑥-3=4𝑥`,

          `~4𝑥+5𝑦+6𝑧=0
~𝑥3+𝑥2+𝑥=0`
        ],
        [
          `~3𝑥-𝑥=10
~7𝑥-5=4𝑥-2`,

          `~𝑥2+𝑥=100
~𝑥2=9
~4𝑦2-100=0`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-frac',
      label: 'Write the fraction',
      commonData: {
        title: 'Find the value of 𝑥 in the below equation.',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center',
        fracFontSize: '1.5rem'
      },
      data: [
        {
          list: [
            `5𝑥 - 4 = 0
𝑥 = ?0/?1
4, 5`,

            `3𝑥 - 1 = 0
𝑥 = ?0/?1
1, 3`,

            `3𝑥 - 5 = 0
𝑥 = ?0/?1
5, 3`,

            `7𝑥 - 11 = 0
𝑥 = ?0/?1
11, 7`,

            `9𝑥 - 7 = 0
𝑥 = ?0/?1
7, 9`
          ]
        },

        {
          list: [
            `6𝑥 + 5 = 0
𝑥 = ?0/?1
-5, 6`,

            `3𝑥 + 2 = 0
𝑥 = ?0/?1
-2, 3`,

            `13𝑥 + 3 = 0
𝑥 = ?0/?1
-3, 13`,

            `11𝑥 + 7 = 0
𝑥 = ?0/?1
-7, 11`,

            `9𝑥 + 1 = 0
𝑥 = ?0/?1
-1, 9`
          ]
        },

        {
          list: [
            `100𝑥 + 21 = 0
𝑥 = ?0/?1
-21, 100`,

            `50𝑥 - 3 = 0
𝑥 = ?0/?1
3, 50`,

            `13𝑥 + 11 = 0
𝑥 = ?0/?1
-11, 13`,

            `20𝑥 - 7 = 0
𝑥 = ?0/?1
7, 20`,

            `11𝑥 + 1 = 0
𝑥 = ?0/?1
-1, 11`
          ]
        }
      ]
    }
    /*
    {
      type: 'numberInput',
      id: 'solve',
      label: 'Solve',
      commonData: {
        title: 'Solve',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        {
          list: [
            `x/3 + 5/2 = -3/2
              x/3 = ?0/?1
              x = ?2
              -8, 2, -4`,

            
          ]
        }
      ]
    }*/
  ]
};
