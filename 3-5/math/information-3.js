export default {
  label: 'Data Handling -3',
  id: 'information-3',
  list: [
    {
      type: 'informationProcessing',
      id: 'picto',
      label: 'Pictographs',
      commonData: {
        type: 'pictograph'
      },
      data: [
        {
          title: 'Number of trees in a park were counted. ',
          labels: 'Guava, Neem, Coconut, Pear, Banyan',
          values: '5, 2, 7, 4, 1',
          image: 'tree',
          questions: [
            {
              qText: 'Which tree was less in number?',
              options: 'Banyan, Neem, Pear'
            },
            {
              qText: 'How many coconut trees were there?',
              type: 'number',
              value: 7
            },
            {
              qText: 'What is the total count of Pear and Guava tree?',
              type: 'number',
              value: 9
            },
            {
              qText: 'How many more Coconut trees were there than Neem?',
              type: 'number',
              value: 5
            },
            {
              qText: 'How many trees were there in total?',
              type: 'number',
              value: 19
            },
            {
              qText:
                'True or False: The number of coconut trees is more than Guava and Banyan combined.',
              options: 'True, False'
            }
          ]
        },
        {
          title: 'Everyday few apples were plucked from an apple tree. ',
          labels:
            'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
          values: '5, 4, 2, 7, 1, 9, 0',
          image: 'apple',
          questions: [
            {
              qText: 'On which day, less number of apples were plucked?',
              options: 'Sunday, Friday, Wednesday'
            },
            {
              qText: 'How many apples were plucked on Tuesday?',
              type: 'number',
              value: 4
            },
            {
              qText: 'On which day, more number of apples were plucked?',
              options: 'Saturday, Friday, Monday'
            },
            {
              qText: 'How many apples were plucked on Tuesday and Wednesday?',
              type: 'number',
              value: 6
            },
            {
              qText: 'How many apples were plucked in total?',
              type: 'number',
              value: 28
            },
            {
              qText: 'True or False: Atleast one apple was plucked everyday.',
              options: 'False, True'
            }
          ]
        },
        {
          title: 'Number of balls sold by a shop keeper in a week are given.',
          labels: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday',
          values: '6, 4, 7, 6, 2, 8',
          image: 'ball',
          questions: [
            {
              qText: 'On which day, more number of balls were sold?',
              options: 'Saturday, Friday, Wednesday'
            },
            {
              qText: 'How many balls were sold on Wednesday?',
              type: 'number',
              value: 7
            },
            {
              qText: 'On which day, less number of balls were sold?',
              options: 'Friday, Saturday, Monday'
            },
            {
              qText: 'How many balls were sold on Wednesday and Thursday?',
              type: 'number',
              value: 13
            },
            {
              qText: 'How many balls were sold in total?',
              type: 'number',
              value: 33
            },
            {
              qText: 'On which days, equal number of balls were sold?',
              options:
                'Monday and Thursday, Friday and Saturday, Monday and Saturday'
            }
          ]
        },
        {
          title: 'Ravi went to the zoo and counted the animals he saw.',
          labels: 'Lion, Elephant, Bear, Zebra, Giraffe',
          values: '6, 4, 7, 6, 2',
          image: ['lion', 'elephant', 'bear', 'zebra', 'giraffe'],
          questions: [
            {
              qText: 'Which of the following animals was more in number?',
              options: 'Zebra, Giraffe, Elephant'
            },
            {
              qText: 'How many elephants did he count?',
              type: 'number',
              value: 4
            },
            {
              qText: 'How many plant eating animals did he count ?',
              type: 'number',
              value: 12
            },
            {
              qText: 'How many animals did he count in total?',
              type: 'number',
              value: 25
            },
            {
              qText: 'Which two animals were equal in number?',
              options: 'Lion and Zebra, Lion and Tiger, Zebra and Bear'
            }
          ]
        },
        {
          title:
            'Ramya got bored and counted the different types of vehicles in the parking area.',
          labels: 'Cycle, Motorbike, Car, Auto, Van, Tractor',
          values: '6, 8, 5, 3, 4, 2',
          image: ['cycle', 'motorbike', 'car', 'auto', 'van', 'tractor'],
          questions: [
            {
              qText: 'How many cars were found?',
              type: 'number',
              value: 5
            },
            {
              qText: 'How many two-wheelers were found?',
              type: 'number',
              value: 14
            },
            {
              qText: "How many vehicles that don't need fuel were found?",
              type: 'number',
              value: 6
            },
            {
              qText:
                'True or False: The number of cars is more than the combined count of tractors and vans.',
              options: 'False, True'
            },
            {
              qText: 'How many different types of vehicles were parked?',
              type: 'number',
              value: 6
            },
            {
              qText: 'What is the total count of vehicles?',
              type: 'number',
              value: 28
            }
          ]
        },
        {
          title: 'Riya went to the fruit shop and bought fruits.',
          labels: 'Grapes, Mango, Apple, Strawberry, Custard Apple, ',
          values: '4, 7, 5, 8, 2',
          image: ['grapes', 'mango', 'apple', 'strawberry', 'custard-apple'],
          questions: [
            {
              qText: 'How many strawberries did she buy?',
              type: 'number',
              value: 8
            },
            {
              qText: 'How many bunches of grapes did she buy?',
              type: 'number',
              value: 4
            },
            {
              qText: 'How many different types of fruits did she buy?',
              type: 'number',
              value: 5
            },
            {
              qText:
                'True or False: Number of strawberries is more than the combined count of apple and custard apple.',
              options: 'True, False'
            },
            {
              qText:
                'If the cost of one apple is ₹ 10. How much was paid for apples?',
              type: 'number',
              value: 50
            }
          ]
        }
      ]
    },
    {
      type: 'informationProcessing',
      id: 'bar-chart-2',
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
              qText: 'How many students were present in the class?',
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
              qText:
                'How many types of fruits were bought by Suchi and her mother?',
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
                'True or False: The number of guavas were more than the number of bananas',
              options: 'False, True'
            },
            {
              qText:
                'True or False: The number of apples were more than the number of Oranges',
              options: 'True, False'
            }
          ]
        }
      ]
    },
    {
      type: 'informationProcessing',
      id: 'tally-chart-2',
      label: 'Tally Chart',
      data: [
        {
          title:
            'Arun counted the different colour pens he had and put it in the below chart.',
          type: 'tally',
          labels: 'Red, Black, Blue',
          values: '3, 7, 10',
          questions: [
            {
              qText: 'How many blue pens did he have?',
              type: 'number',
              value: 10
            },
            {
              qText: 'How many pens did he have?',
              type: 'number',
              value: 20
            },
            {
              qText: 'Which colour pen did he have the least?',
              options: 'Red, Black, Blue'
            },
            {
              qText:
                'True or False: The number of blue pens are equal to the number of red and black pens together',
              options: 'True, False'
            }
          ]
        },
        {
          title:
            'Aruna made a chart of various kinds of flowers she has in her garden.',
          type: 'tally',
          labels: 'Rose, Sunflower, Hibiscus, Dahlia',
          values: '11, 4, 13, 6',
          questions: [
            {
              qText: 'Which flower she has a lot?',
              options: 'Hibiscus, Rose, Sunflower'
            },
            {
              qText: 'Which flower she has the least?',
              options: 'Sunflower, Hibiscus, Dahlia'
            },
            {
              qText:
                'Comparing the number of Roses and Dahlias, which flower was more in number?',
              options: 'Rose, Dahlia'
            },
            {
              qText: 'What is the total number of flowers in her garden?',
              type: 'number',
              value: 34
            }
          ]
        }
      ]
    },
    // for class 3 students
    {
      type: 'informationProcessing',
      id: 'bar-chart-3',
      label: 'Bar Chart',
      data: [
        {
          title:
            'Deepa went to zoo and counted the animals she had seen. The observation data is given in the below bar chart.',
          type: 'vbar',
          labels: 'Tiger, Lion, Deer, Giraffe',
          values: '6, 3, 14, 8',
          questions: [
            {
              qText: 'Which animal was least in number?',
              options: 'Lion, Tiger, Deer'
            },
            {
              qText: 'The animal was largest in number?',
              options: 'Deer, Tiger, Giraffe'
            },
            {
              qText: 'How many more deers were present than giraffes?',
              type: 'number',
              value: 6
            },
            {
              qText: 'How many less tigers were present than giraffes?',
              type: 'number',
              value: 2
            },
            {
              qText: 'What is the total number of animals?',
              type: 'number',
              value: 31
            }
          ]
        },
        {
          title:
            'Rahul went to a fair and saw lot of balloons of different colours. Out of curiosity, he counted the number of balloons in each color, and put a bar chart.',
          type: 'vbar',
          labels: 'Red, Blue, Green, Orange, White',
          values: '10, 8, 5, 12, 11',
          questions: [
            {
              qText: 'How many different colours of balloon were there?',
              type: 'number',
              value: 5
            },
            {
              qText: 'What is the total number of balloons Rahul counted?',
              type: 'number',
              value: 46
            },
            {
              qText: 'What is the total count of orange and white balloons?',
              type: 'number',
              value: 23
            },
            {
              qText:
                'True or False: The total number of red, blue and green balloons is equal to the total number of orange and white balloons.',
              options: 'True, False'
            }
          ]
        }
      ]
    },
    {
      type: 'informationProcessing',
      id: 'tally-chart-3',
      label: 'Tally Chart',
      data: [
        {
          title:
            'Total number of students in a class is 20. Below tally chart represent the attendance for a week.',
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
              qText: 'How many students were absent on Monday?',
              type: 'number',
              value: 2
            },
            {
              qText: 'On which day all students were present?',
              options: 'Tuesday, Wednesday, Thursday'
            },
            {
              qText:
                'True or False: Thursday had least attendance among all days.',
              options: 'True, False'
            },
            {
              qText:
                'True or False: The number of students present on Monday was more than that of Friday',
              options: 'True, False'
            }
          ]
        }
      ]
    }
  ]
};
