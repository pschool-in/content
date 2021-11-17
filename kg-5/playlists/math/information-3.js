export default {
  label: 'Data Handling -3',
  id: 'information-3',
  list: [
    // for class 3 students
    {
      type: 'informationProcessing',
      id: 'bar-chart-3',
      lockAfter: 2,
      label: 'Bar Chart',
      data: [
        {
          title:
            'Deepa went to zoo and counted the animals she had seen. The observation data is given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Tiger, Lion, Deer, Giraffe',
          values: '6, 3, 14, 8',
          questions: [
            {
              qText: 'The animal which was least in numbers?',
              options: 'Lion, Tiger, Deer'
            },
            {
              qText: 'The animal which was highest in numbers?',
              options: 'Deer, Tiger, Giraffe'
            },
            {
              qText: 'How many Deers are more than Giraffes?',
              type: 'number',
              value: 6
            },
            {
              qText: 'How many Tigers are lesser than Giraffes?',
              type: 'number',
              value: 2
            },
            {
              qText: 'Total number of animals?',
              type: 'number',
              value: 31
            }
          ]
        },
        {
          title:
            'Rahul went to a fair where he saw different coloured balloons. Out of curiosity, Rahul counted the colours of the balloons. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Red, Blue, Green, Orange, White',
          values: '10, 8, 5, 12, 11',
          questions: [
            {
              qText: 'How many different colours of balloon were there in the fair?',
              type: 'number',
              value: 5
            },
            {
              qText: 'What is the total number of balloons Rahul counted?',
              type: 'number',
              value: 46
            },
            {
              qText: 'What is the total number of orange and white balloons together?',
              type: 'number',
              value: 23
            },
            {
              qText:
                'True or False: The number of red, blue and green balloons together are equal to the number of orange and white balloons together.',
              options: 'True, False'
            },

          ]
        },
      ]
    },
    {
      type: 'informationProcessing',
      id: 'tally-chart-3',
      lockAfter: 2,
      label: 'Tally Chart',
      data: [
        {
          title:
            'Total number of students in a class in 20. Below tally chart represent the attendance each day of one week. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Monday, Tuesday, Wednesday, Thursday, Friday',
          values: '18, 20, 15, 12, 17',
          questions: [
            {
              qText: 'How many students were present on Wednesday?',
              type: 'number',
              value: 15
            },
            {
              qText: 'Number of students absent on Monday?',
              type: 'number',
              value: 2
            },
            {
              qText: 'Which day all the students were present?',
              options: 'Tuesday, Wednesday, Thursday'
            },
            {
              qText:
                'True or False: Thursday had least attendance among all the day.',
              options: 'True, False'
            },
            {
              qText:
                'True or False: Attendance on Monday was more than Attendance on Friday',
              options: 'True, False'
            },            
          ]
        },
      ]
    },

  ]
};
