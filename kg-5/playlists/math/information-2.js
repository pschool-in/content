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
        {
          title:
            'Suchi and her mother went to a fruit shop. They bought different types of fruits. Out of curiosity, Suchi counted each type of fruit and listed them. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Apple, Banana, Guava, Orange',
          values: '8, 4, 2, 7',
          questions: [
            {
              qText: 'How many types of fruits were bought by Suchi and her mother?',
              type: 'number',
              value: 4
            },
            {
              qText: 'How many fruits were bought by Suchi and her mother?',
              type: 'number',
              value: 21
            },
            {
              qText:
                'True or False: The number of Guavas were more than the number of Bananas',
              options: 'False, True'
            },
            {
              qText:
                'True or False: The number of apples were more than the number of Oranges',
              options: 'True, False'
            },
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
        {
          title:
            'Aruna made a chart of various kinds of flowers she has in her garden. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Rose, Sunflower, Hibiscus, Dahlia',
          values: '11, 4, 13, 6',
          questions: [
            {
              qText: 'Which flower is maximum in number?',
              options: 'Hibiscus, Rose, Sunflower'
            },
            {
              qText: 'Which flower is minimum in number?',
              options: 'Sunflower, Hibiscus, Dahlia'
            },
            {
              qText: 'Comparing the number of Roses with Dahlias, which flower is more in number?',
              options: 'Rose, Dahlia'
            },
            {
              qText: 'What is the total number of flowers in her garden?',
              type: 'number',
              value: 34
            },            
          ]
        },
      ]
    },

  ]
};
