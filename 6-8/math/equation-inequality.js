export default {
  label: 'Equation and Inequality',
  id: 'equation-inequality',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Notes',
        text: [
          `An equation has a LHS, RHS and an 'equal to' sign.
eg: 
x + 5 = 10
a - 5 = 0

An inequality is similar to an equation, but instead of 'equal to' sign, we will have one of the following.
1. less than (<)
2. greater than (>)
3. less than or equal to (≤)
4. greater than or equal to (≥)
5. not equal to (≠)
eg: 
x < 20
x + 3 > 10
a + b ≤ 100
a ≥ b
y ≠ 0
`
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Statements',
      type: 'mcq',
      data: {
        title: 'Choose the right statement for the given question.',
        questions: [
          {
            qText:
              'There is free pass for children below 13 years old. Let x represent the age.',
            options: `x < 13
x > 13
x ≥ 13
x < 12`
          },
          {
            qText: 'If you buy for ₹ 100 or above, you will get 10% discount.',
            options: `x ≥ 100
x > 100
100 > x
100 ≥ x`
          },
          {
            qText: 'The denominator of a fraction should not be zero.',
            options: `x ≠ 0
x > 0
x < 0
x ≥ 0`
          },
          {
            qText: 'To watch this movie, you have to be above 18 years old. ',
            options: `x > 18
18 > x
x ≥ 18
18 ≥ x`
          },
          {
            qText:
              'You are not allowed to carry more than 20 kg luggage. Let x represent your luggage.',
            options: `x ≤ 20
x < 20
x ≠ 20
x - 20 = 0`
          }
        ]
      }
    },
    {
      label: 'Equation or not',
      type: 'group',
      id: 'eqn-or-not',
      data: [
        {
          title: 'Classify the below as equation or inequality.',
          types: [
            {
              name: 'Equation',
              text: 'x = 100, x - 20 = 0'
            },
            {
              name: 'Inequality',
              text: 'x ≤ 5, x > 0, x ≠ 10'
            }
          ]
        },
        {
          title: 'Classify the below as equation or expression.',
          types: [
            {
              name: 'Equation',
              text: 'x + 100 = 120, x - y = 10, 2x + y = 0'
            },
            {
              name: 'Expression',
              text: 'x + y, a + 2b, a - 20, x + 50'
            }
          ]
        }
      ]
    },
    {
      label: 'Classify',
      id: 'classify',
      type: 'classifySentence',
      data: {
        title: 'Classify the below statements as equation or inequality.',
        types: [
          {
            name: 'Equation',
            text: `The distance between the two cities is 120 km.
His brother is 4 years older than him.
The total cost of pencil and eraser is ₹ 20`
          },
          {
            name: 'Inequality',
            text: `He travels less than 120 km every day.
The minimum mark to pass the exam is 40.
We cannot score more than 100%.`
          }
        ]
      }
    }
  ]
};
