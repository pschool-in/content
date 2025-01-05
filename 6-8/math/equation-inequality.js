export default {
  label: 'Equation and Inequality',
  id: 'equation-inequality',
  lockAfter: 100,
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
𝑥 + 5 = 10
𝑎 − 5 = 0

An inequality is similar to an equation, but instead of 'equal to' sign, we will have one of the following.
1. less than (<)
2. greater than (>)
3. less than or equal to (≤)
4. greater than or equal to (≥)
5. not equal to (≠)
eg: 
𝑥 < 20
𝑥 + 3 > 10
𝑎 + 𝑏 ≤ 100
𝑎 ≥ 𝑏
𝑦 ≠ 0
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
              'There is free pass for children below 13 years old. Let 𝑥 represent the age.',
            options: `𝑥 < 13
𝑥 > 13
𝑥 ≥ 13
𝑥 < 12`
          },
          {
            qText: 'If you buy for ₹ 100 or above, you will get 10% discount.',
            options: `𝑥 ≥ 100
𝑥 > 100
100 > 𝑥
100 ≥ 𝑥`
          },
          {
            qText: 'The denominator of a fraction should not be zero.',
            options: `𝑥 ≠ 0
𝑥 > 0
𝑥 < 0
𝑥 ≥ 0`
          },
          {
            qText: 'To watch this movie, you have to be above 18 years old. ',
            options: `𝑥 > 18
18 > 𝑥
𝑥 ≥ 18
18 ≥ 𝑥`
          },
          {
            qText:
              'You are not allowed to carry more than 20 kg luggage. Let 𝑥 represent your luggage.',
            options: `𝑥 ≤ 20
𝑥 < 20
𝑥 ≠ 20
𝑥 - 20 = 0`
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
              text: '𝑥 = 100, 𝑥 - 20 = 0'
            },
            {
              name: 'Inequality',
              text: '𝑥 ≤ 5, 𝑥 > 0, 𝑥 ≠ 10'
            }
          ]
        },
        {
          title: 'Classify the below as equation or expression.',
          types: [
            {
              name: 'Equation',
              text: '𝑥 + 100 = 120, 𝑥 − 𝑦 = 10, 2𝑥 + 𝑦 = 0'
            },
            {
              name: 'Expression',
              text: '𝑥 + 𝑦, 𝑎 + 2𝑏, 𝑎 − 20, 𝑥 + 50'
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
            text: `The distance between the two cities is 120 𝑘𝑚.
His brother is 4 years older than him.
The total cost of pencil and eraser is ₹ 20`
          },
          {
            name: 'Inequality',
            text: `He travels less than 120 𝑘𝑚 every day.
The minimum mark to pass the exam is 40.
We cannot score more than 100%.`
          }
        ]
      }
    }
  ]
};
