export default {
  id: 'data-handling-8',
  label: 'Data Handling - 8',
  list: [
    {
      type: 'informationProcessing',
      id: 'doublebar',
      label: 'Double Bar Chart',
      data: {
        title:
          'Read the below double bar chart, and answer the given questions.',
        type: 'image',
        image: 'math/dataHandling/doubleBarGraph.jpg',
        questions: [
          {
            qText: 'What is the information given by the double bar graph?',
            options:
              'Marks in subjects, Number of students, Performance of Teachers'
          },
          {
            qText: 'In which subject has the performance improved the most?',
            options: 'Maths, Social Science, Science, English'
          },
          {
            qText: 'In which subject has the performance deteriorated?',
            options: 'English, Maths, Science, Hindi'
          },
          {
            qText: 'In which subject is the performance at par?',
            options: 'Hindi, Maths, Science, English'
          }
        ]
      }
    }
  ]
};
