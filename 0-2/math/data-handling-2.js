export default {
  id: 'data-handling-2',
  label: 'Data Handling',
  list: [
    {
      type: 'informationProcessing',
      id: 'pic',
      label: 'Favourite Colours',
      data: {
        title: 'Students are asked to come in their favorite color.',
        type: 'image',
        image: 'math/dataHandling/infoPic.jpg',
        questions: [
          {
            qText: 'The most liked colour is _______.',
            options: 'Blue, Green, Red, Yellow'
          },
          {
            qText: 'The least liked colour is ______.',
            options: 'Red, Blue, Green, Yellow'
          },
          {
            qText: 'How many students like the green color?',
            type: 'number',
            value: 3
          },
          {
            qText: 'How many students like the blue color?',
            type: 'number',
            value: 4
          },
          {
            qText: 'How many students are there in the class?',
            type: 'number',
            value: 10
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'pic-2',
      label: 'Picnic Day',
      data: {
        title:
          'Children are having a fruit party. They are eating their favourite fruits.',
        type: 'image',
        image: 'math/dataHandling/infoPic-2.jpg',
        questions: [
          {
            qText: 'How many children are there?',
            type: 'number',
            value: 13
          },
          {
            qText: 'Most liked fruit is ______.',
            options: 'Banana, Orange, Apple, Guava'
          },
          {
            qText: 'Least liked fruit is ______.',
            options: 'Kiwi, Guava, Apple, Orange'
          },
          {
            qText:
              'Find the number of students who liked either apple or kiwi.',
            type: 'number',
            value: 4
          },
          {
            qText:
              'Find the number of students who liked either guava or banana.',
            type: 'number',
            value: 8
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'pic-2',
      label: 'Transport',
      data: {
        title: 'Observe the picture and answer the questions.',
        type: 'image',
        image: 'math/dataHandling/infoPic-3.jpg',
        questions: [
          {
            qText: 'How many students are coming by walk?',
            type: 'number',
            value: 8
          },
          {
            qText: 'How many students are coming by the bus?',
            type: 'number',
            value: 12
          },
          {
            qText: 'How many students are coming by auto?',
            type: 'number',
            value: 7
          },
          {
            qText: 'How many students are coming by the cycle?',
            type: 'number',
            value: 5
          }
        ]
      }
    }
  ]
};
