export default {
  label: 'Information Processing',
  id: 'information',
  list: [
    {
      type: 'informationProcessing',
      id: 'bar',
      lockAfter: 2,
      label: 'Bar Chart',
      data: [
        {
          title:
            'A survey was conducted on the favorite subject of the students. The results are given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'English, Maths, Science, Social',
          values: '20, 40, 10, 30',
          questions: [
            {
              qText: 'What subject was liked by most of the students?',
              options: 'Maths, Social, English, Science'
            },
            {
              qText: 'What subject was least liked by the students?',
              options: 'Science, Social, Maths,English'
            },
            {
              qText: 'How many students liked either Maths or Science',
              type: 'number',
              value: 50
            },
            {
              qText: 'How many students participated in the survey?',
              type: 'number',
              value: 100
            },
            {
              qText: 'How many students liked either Social or Maths?',
              type: 'number',
              value: 70
            }
          ]
        },
        {
          title:
            'In the ice-cream shop, the total quantity sold on a particular day are given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'vanilla, chocolate, pista, strawberry, others',
          values: '20, 60, 40, 40, 30',
          questions: [
            {
              qText: 'What was the favorite ice-cream in the shop?',
              options: ' Chocolate, pista, strawberry'
            },
            {
              qText: 'How many more Pista are sold than Vanilla?',
              type: 'number',
              value: 20
            },
            {
              qText: 'Which of the followed was liked the least?',
              options: 'vanilla, Chocolate, pista, strawberry'
            },
            {
              qText: 'How many total ice-creams are sold?',
              type: 'number',
              value: 190
            },
            {
              qText: 'Which two are equally sold?',
              options:
                'pista and strawberry, vanilla and chocolate, chocolate and pista'
            }
          ]
        },
        {
          title:
            'The number of ice-creams sold on a particular week is given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'sun, mon, tue, wed, thr, fri, sat',
          values: '200, 120, 30, 90, 50, 130, 100',
          questions: [
            {
              qText: 'On which day, maximum ice-cream was sold?',
              options: 'Sunday, Monday, Saturday'
            },
            {
              qText:
                'The shop owner decides to close the shop for one day. Which day do you suggest?',
              options: 'Tuesday, Friday, Sunday'
            },
            {
              qText:
                'How many more ice-creams were sold on Sunday, when compared to Saturday?',
              type: 'number',
              value: 100
            },
            {
              qText:
                'True or False: The number of ice-creams sold on Sunday is greater than the sum of ice-creams sold from Tuesday to Thrusday.',
              options: 'True, False'
            },
            {
              qText: 'How many ice-creams were sold on Friday and Saturday?',
              type: 'number',
              value: 230
            }
          ]
        },
        {
          title:
            'A survey was conducted among students on their favorite fruit. The results are given in the below bar chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Mango, Apple, Banana, Orange, Pear',
          values: '10, 4, 7, 9, 4',
          questions: [
            {
              qText: 'Which is the most popular fruit?',
              options: 'Mango, Orange, Banana'
            },
            {
              qText: 'Which two fruits are equally popular?',
              options: 'Apple and Pear, Orange and Banana, Pear and Orange'
            },
            {
              qText: 'How many children like orange the most?',
              type: 'number',
              value: 9
            },
            {
              qText: 'How many more children like banana than apple?',
              type: 'number',
              value: 3
            },
            {
              qText: 'How many children like apple or orange?',
              type: 'number',
              value: 13
            }
          ]
        }
      ]
    },
    {
      type: 'informationProcessing',
      id: 'pie',
      label: 'Pie Chart',
      lockAfter: 2,
      data: [
        {
          title:
            'An international software company has five offices in different countries. The below pie chart tells how many employees are present in each country. Please answer the questions given at the bottom.',
          type: 'pie',
          labels: 'USA, India, France, Malaysia, UAE',
          values: '20, 80, 40, 40, 30',
          questions: [
            {
              qText: 'Which country has more employees?',
              options: 'India, USA, France, UAE'
            },
            {
              qText: 'How many employees are there in USA and France?',
              type: 'number',
              value: 60
            },
            {
              qText: 'How many employees are there in the company in total?',
              type: 'number',
              value: 210
            },
            {
              qText:
                'True or False: The number of employees in France and UAE are same.',
              options: 'False, True'
            },
            {
              qText: 'Which two countries have the same number of employees?',
              options: 'France and Malaysia, USA and UAE,  India and France'
            }
          ]
        },
        {
          title:
            'The below pie chart tells how students come to school. Please answer the questions given at the bottom.',
          type: 'pie',
          labels: 'walk, cycle, car, bus',
          values: '30, 50, 20, 80',
          questions: [
            {
              qText: 'How many students come by walk or cycle?',
              type: 'number',
              value: 80
            },
            {
              qText:
                'What is the most common mode of transport to reach the school?',
              options: 'bus, walk, cycle, car'
            },
            {
              qText:
                'How many students use some type of vehicle to reach school?',
              type: 'number',
              value: 150
            },
            {
              qText:
                'True or False: The number of students coming by walk or cycle is same as the number of students coming by bus.',
              options: 'True, False'
            },
            {
              qText: 'How many students use car or bus?',
              type: 'number',
              value: 100
            }
          ]
        },
        {
          title:
            'The maths teacher made a pie chart on how she used her salary.  Please answer the questions given at the bottom.',
          type: 'pie',
          labels: 'education, grocery, rent, others, savings',
          values: ' 5000, 8000, 5000, 3000, 4000',
          questions: [
            {
              qText: 'What is the teachers salary?',
              type: 'number',
              value: 25000
            },
            {
              qText: 'For what purpose, the teacher uses large amount?',
              options: 'grocery, education, rent'
            },
            {
              qText: 'How much the teacher spends?',
              type: 'number',
              value: 21000
            },
            {
              qText: 'Which two expenses are same?',
              options:
                'rent and education, grocery and education, rent and grocery'
            },
            {
              qText: 'How much money is spent on grocery and rent?',
              type: 'number',
              value: 13000
            }
          ]
        }
      ]
    },
    {
      type: 'informationProcessing',
      id: 'tally',
      lockAfter: 2,
      label: 'Tally Chart',
      data: [
        {
          title:
            'John was given the task to count the number of trees present in the prime locations. Find below the tally chart. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'school, park, hospital, bank, river-side',
          values: '5, 18, 9, 4, 10',
          questions: [
            {
              qText: 'Where can we find the most number of trees?',
              options: 'park, hospital, school'
            },
            {
              qText: 'Where can we find the least number of trees?',
              options: 'bank, school, hospital'
            },
            {
              qText: 'How many trees John has counted?',
              type: 'number',
              value: 46
            },
            {
              qText: 'How many trees are present in the park and river-side?',
              type: 'number',
              value: 28
            },
            {
              qText:
                'True or False: The number of trees present in river-side is greater than the combined school and bank.',
              options: 'True, False'
            }
          ]
        },
        {
          title:
            'Find below the tally chart for the drinks sold in a small shop. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'tea, coffee, milk, coke, juice',
          values: '14, 5, 3, 5, 11',
          questions: [
            {
              qText: 'How many sales are done in the shop?',
              type: 'number',
              value: 38
            },
            {
              qText: 'What is the favorite for the people visiting the shop?',
              options: 'tea, juice, coffee'
            },
            {
              qText:
                'What is the least favorite for the people visiting the shop?',
              options: 'milk, tea, juice, coke'
            },
            {
              qText: 'How many sales are done for tea, coffee and milk?',
              type: 'number',
              value: 22
            },
            {
              qText:
                'True or False: The total number of sales on coffee, milk and coke is less than that of tea.',
              options: 'True, False'
            }
          ]
        },
        {
          title:
            'A tally chart was made on the favorite sport in a classroom. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'cricket, football, tennis, hockey, badminton, others',
          values: '10, 8, 7, 5, 5, 9',
          questions: [
            {
              qText: 'How many students are there in the class?',
              type: 'number',
              value: 44
            },
            {
              qText: 'Which of the following is wrong?',
              options:
                'more students liked hockey than badminton, more students liked cricket than football, more students like tennis than hockey'
            },
            {
              qText: 'How many students liked tennis or hockey?',
              type: 'number',
              value: 12
            },
            {
              qText: 'Which two sports are equally liked?',
              options:
                'badminton and hockey, football and tennis, hockey and football'
            },
            {
              qText: 'Which of the following is right?',
              options:
                'Less number of students liked tennis than football., Less number of students liked cricket than football., Less number of students liked tennis than hockey.'
            }
          ]
        }
      ]
    },
    {
      // from the class 5 text book
      type: 'informationProcessing',
      id: 'chart-5',
      lockAfter: 2,
      label: 'Data Handling -5',
      data: [
        {
          title:
            'Weather report of 4 cities in a newspaper on June 01. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Delhi, Shimla, Bangalore, Jaisalmer',
          values: '33, 22, 28, 38',
          questions: [
            {
              qText: 'Which city is the hottest on June 01?',
              options: 'Jaisalmer, Delhi, Shimla, Bangalore'
            },
            {
              qText: 'Which city is the coldest on June 01?',
              options: 'Shimla, Jaisalmer, Delhi, Bangalore'
            },
            {
              qText: 'What is the highest temperature on June 01?',
              type: 'number',
              value: 38
            },
            {
              qText: 'What is the difference between highest and lowest temperature on June 01',
              type: 'number',
              value: 16
            },
          ]
        },
        {
          title:
            'Marks scored by Saira in annual examinations are represented in the below chart. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Hindi, English, Science, Maths, Social',
          values: '60, 80, 55, 95, 75',
          questions: [
            {
              qText: 'Which subject did Saira scored the highest?',
              options: 'Maths, English, Science'
            },
            {
              qText: 'Which subject did Saira scored the lowest?',
              options: 'Science, Hindi, Socail'
            },
            {
              qText: 'What is the total marks scored by Saira?',
              type: 'number',
              value: 365
            },
            {
              qText:
                'True or False: Saira scored better in Social than in English',
              options: 'False, True'
            },
            {
              qText: 'What is the difference between highest and lowest score in a subject by Saira?',
              type: 'number',
              value: 40
            },
          ]
        },
        {
          title:
            'The following bar graph shows the sales in a baker’s shop in a day.. Answer the questions given at the bottom.',
          type: 'vbar',
          labels: 'Bread, Bun, Biscuit, Cake, Chocolate',
          values: '100, 80, 200, 250, 210',
          questions: [
            {
              qText: 'Which item has the maximum sale?',
              options: 'Cake, Biscuit, Chocolate'
            },
            {
              qText: 'Which item has the minimum sale?',
              options: 'Bun, Bread, Biscuit'
            },
            {
              qText: 'What is the sale of buns and breads together?',
              type: 'number',
              value: 180
            },
            {
              qText:
                'True or False: The sale of buns and breads together is less than the sale of biscuits',
              options: 'True, False'
            },
            {
              qText:
                'True or False: Sale of biscuits are more than the sale of Chocolates',
              options: 'False, True'
            },
          ]
        },

        {
          title:
            'Rehan buys fruits for his mother on her birthday. He picks up various kinds of fruits from the fruit seller. He prepares a table for the data about the number of fruits bought. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Banana, Orange, Apple, Mango',
          values: '19, 11, 7, 15',
          questions: [
            {
              qText: 'How many types of fruits did Rehan buy?',
              type: 'number',
              value: 4
            },
            {
              qText: 'What is the total number of fruits?',
              type: 'number',
              value: 52
            },
            {
              qText:
                'True or False: The total number Banana and Apple is equal to the total number of Orange and Mango together.',
              options: 'True, False'
            },
            {
              qText: 'Which fruit did Rehan bought the most?',
              options:
                'Banana, Orange, Apple, Mango'
            },
            {
              qText: 'Which fruit did Rehan bought the least?',
              options:
                'Apple, Banana, Orange, Mango'
            },
          ]
        },
        {
          title:
            'Sumita stood on the road for half an hour and counted the number of vehicles passing by. She made a tally mark for each vehicle. This helped her in counting quickly the total number of vehicles in each group. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Cycle, Car, Auto, Bus',
          values: '18, 12, 13, 6',
          questions: [
            {
              qText: 'How many vehicles in all did Sumita see on the road in half an hour?',
              type: 'number',
              value: 49
            },
            {
              qText:
                'True or False: The total number cycles are thrice the number of buses',
              options: 'True, False'
            },
            {
              qText: 'Which is the most seen vehicle?',
              options:
                'Cycle, Car, Auto, Bus'
            },
            {
              qText: 'Which vehicle passed more frequently?  car or auto?',
              options:
                'Auto, Car'
            },
          ]
        },
        {
          title:
            'Yamini did a project Animals and Birds. She asked each child of her class about one favourite pet animal, She used tally marks to record each answer. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Cats, Dogs, Rabbits, Cows, Parrots, Goats, Squirrel',
          values: '14, 20, 10, 12, 3, 10, 5',
          questions: [
            {
              qText: 'How many children in all did Yamini talk to?',
              type: 'number',
              value: 74
            },
            {
              qText: 'Which is the most favourite pet animal in this table?',
              options:
                'Dog, Cat, Cow, Parrot, Squirrel'
            },
            {
              qText: 'How many children wanted to a pet dog?',
              type: 'number',
              value: 22
            },
            {
              qText: 'Which is the least favourite pet animal in this table?',
              options:
                'Parrot, Rabbit, Cat, Cow, Squirrel'
            },
            {
              qText: 'How many children wanted to a pet squirrel?',
              type: 'number',
              value: 5
            },
          ]
        },
        {
          title:
            'The following tally chart shows the number of students present in a class of 35 students during the week. Answer the questions, given at the bottom.',
          type: 'tally',
          labels: 'Mon, Tue, Wed, Thu, Fri, Sat',
          values: '28, 25, 30, 18, 20, 12',
          questions: [
            {
              qText: 'How many students were present on Tuesday?',
              type: 'number',
              value: 25
            },
            {
              qText: 'Which day maximum studetns were present in the class?',
              options:
                'Wed, Mon, Tue, Thu, Fri'
            },
            {
              qText: 'How many students were present in the class on Saturday',
              type: 'number',
              value: 12
            },
            {
              qText: 'Which day the attendance was least in the class?',
              options:
                'Sat, Mon, Tue, Thu, Fri'
            },
          ]
        },
        {
          title:
            'The below pie chart tells how students helping their parents at home. Please answer the questions given at the bottom.',
          type: 'pie',
          labels: 'Washing, Serving food, Cleaning, Cooking',
          values: '25, 15, 20, 15',
          questions: [
            {
              qText: 'How many total students helping their paretns?',
              type: 'number',
              value: 75
            },
            {
              qText:
                'Which type of help is done by 1/3 of the students?',
              options: 'Washing, Serving food, Cleaning, Cooking'
            },
            {
              qText:
                'How many students are helping with washing or cleaning?',
              type: 'number',
              value: 55
            },
            {
              qText:
                'Which type of activity is done by most number of students?',
              options: 'Washing, Cooking, Serving food, Cleaning'
            },
            {
              qText:
                'True or False: The total number students help in serving food and cooking are same',
              options: 'True, False'
            }
          ]
        },

      ]
    },
  ]
};
