export default {
  label: 'Data Handling -2',
  id: 'information-2',
  list: [
    {
      type: 'informationProcessing',
      id: 'bar-chart-2',
      lockAfter: 2,
      label: 'Bar Chart',
      data: [
        {
          title:
            'Students in a class were asked about the flavour of ice-cream they like. The results are given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Vanilla, Chocolate, Strawberry',
          values: '10, 30, 20',
          questions: [
            {
              qText: 'What flavour was liked by the students most?',
              options: 'Chocolate, Vanilla, Strawberry'
            },
            {
              qText: 'What flavour was liked by the students least?',
              options: 'Vanilla, Chocolate, Strawberry'
            },
            {
              qText: 'The totol number of students in the class',
              type: 'number',
              value: 60
            },
            {
              qText: 'How many students liked Vanilla?',
              type: 'number',
              value: 10
            },
            {
              qText: 'How many students liked either Chocolate or Strawberry?',
              type: 'number',
              value: 50
            }
          ]
        },
      ]
    },
    {
      type: 'informationProcessing',
      id: 'tally-chart-2',
      lockAfter: 2,
      label: 'Tally Chart',
      data: [
        {
          title:
            'You have counted the different colour pens you have and put it in the below chart. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Red, Black, Blue',
          values: '3, 7, 10',
          questions: [
            {
              qText: 'How many pens do you have?',
              type: 'number',
              value: 20
            },
            {
              qText: 'How many blue pens do you have?',
              type: 'number',
              value: 10
            },
            {
              qText:
                'True or False: The number of blue pens is equal to the number of red and black pens together',
              options: 'True, False'
            },
            {
              qText: 'Which colour pen you have the least?',
              options: 'Red, Black, Blue'
            },
            
          ]
        },
      ]
    },

  ]
};
