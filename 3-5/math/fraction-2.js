export default {
  label: 'Fraction',
  id: 'fraction-2',
  list: [
    {
      type: 'numberInput',
      id: 'improper-mixed',
      label: 'Improper to Mixed',
      commonData: {
        title: 'Convert the below improper fraction to mixed fraction.',
        type: 'improperToMixed'
      },
      data: [
        `3/2, 5/4, 9/2, 7/3, 4/3, 7/2, 11/5, 7/5, 8/3, 10/3`,
        `17/10, 9/5, 21/5, 15/7, 6/5, 22/7, 33/5, 43/5, 17/3, 22/3`,
        `143/100, 101/100, 173/100, 167/100, 137/100, 347/100, 457/100, 661/100, 907/100, 941/100`
      ]
    },
    {
      type: 'numberInput',
      id: 'mixed-improper',
      label: 'Mixed to Improper',
      commonData: {
        title: 'Convert the below mixed fraction into improper fraction.',
        type: 'mixedToImproper'
      },
      data: [
        `3 1/2, 2 1/5, 1 2/5, 2 2/3, 3 1/3, 1 1/2, 1 1/4, 4 1/2, 2 1/3, 1 1/3`,
        `4 4/5, 6 1/5, 3 3/7, 2 2/7, 6 6/7, 5 3/10, 4 8/10, 6 9/10, 8 3/5, 3 4/5`,
        `6 1/100, 5 34/100, 1 43/100, 1 73/100, 1 67/100, 3 47/100, 4 57/100, 6 61/100, 9 7/100, 9 41/100`
      ]
    },
    {
      type: 'numberInput',
      id: 'simple-fraction',
      label: 'Simple Fraction',
      commonData: {
        title: 'Write the fraction in the lowest term.',
        type: 'simpleFraction'
      },
      data: [
        `2/6, 3/9, 2/4, 20/30, 4/8, 5/15, 11/44, 5/10, 15/20, 6/12`,
        `2/8, 5/25, 8/88, 7/35, 14/35, 28/35, 63/70, 42/70, 16/40, 32/40`,
        `10/20, 90/100, 100/300, 40/50, 30/1000, 70/100, 10/1000, 400/500, 110/1000, 10/700`
      ]
    },
    {
      type: 'numberInput',
      id: 'equal-fraction',
      label: 'Equal Fractions',
      commonData: {
        title: 'Fill in the empty boxes to form equal fractions.'
      },
      data: [
        {
          type: 'equalFraction',
          text: `1/2 3, 1/2 4, 1/2 2, 2/3 2, 3/4 2, 1/3 3, 1/3 2, 1/5 10, 2/5 5, 3/4 2`
        },
        {
          type: 'equalFraction2',
          text: `1/2 2, 1/2 3, 1/2 4, 2/3 2, 1/5 10, 2/5 5, 3/4 2, 3/4 2, 1/3 3, 1/3 2`
        },
        {
          type: 'equalFraction3',
          text: `1/2, 2/3, 5/6, 1/3, 1/8, 1/4, 3/5, 3/4, 1/3, 1/3`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'frac-decimal',
      label: 'Fraction to Decimal',
      commonData: {
        title: 'Write the decimal equivalent of the faction.',
        type: 'fracToDeci'
      },
      data: [
        `1/2, 1/4, 1/5, 3/5, 7/10, 2/5, 3/4, 1/10, 3/10, 9/10`,
        `7/100, 3/1000, 99/100, 43/100, 432/1000, 43/1000, 2/100, 91/1000,43/100, 500/1000`,
        `20/25, 10/25, 40/50, 10/40, 100/1000, 25/100, 75/100, 30/100, 5/20, 36/60`,
        `3/2, 5/4, 16/10, 5/2, 7/5, 10/4, 9/3, 7/4, 10/4, 9/2`
      ]
    },
    {
      type: 'numberInput',
      id: 'decimal-frac',
      label: 'Decimal to Fraction',
      commonData: {
        title: 'Write the fraction equivalent of the decimal number.',
        type: 'deciToFrac'
      },
      data: [
        `0.5, 0.25, 0.2, 0.7, 0.75, 0.8, 0.4, 0.9, 0.1, 0.3`,
        `1.5, 1.25, 2.5, 1.2, 3.5, 1.7, 1.3, 4.5, 1.75, 2.25`,
        `0.01, 0.34, 0.001, 0.11, 0.034, 0.105, 0.789, 0.99, 0.43, 0.555`
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Multiple Choice Questions',
        hasFraction: true
      },
      data: [
        {
          questions: [
            {
              qText:
                'Gopal ate 2/5 of a cake and Ganesh ate 3/5 of the cake. Who ate more cake?',
              options: 'Ganesh, Gopal, Both ate same'
            },
            {
              qText:
                'Swetha owns 7/10 of an acre of land. Ashok owns 13/20 of an acre. Who owns more land?',
              options: 'Swetha, Ashok, Both have equal land'
            },
            {
              qText:
                'My house is 3/4 ^km from school. And my friends house is 0.75 ^km from school. Whose house is closer to school?',
              options: 'Equal distance, Mine, Friend`s house'
            },
            {
              qText:
                'The father gave his son 1/5 of a packet of biscuits. He gave his daughter 2/10 of the packet. Did he give equal portions to both?',
              options: 'Yes, No'
            },
            {
              qText:
                'Priya read 3/7 of a story book on Saturday and 4/7 of the book on Sunday. On which day did she read more?',
              options: 'Sunday, Saturday'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Gopal walks for 1/12 of an hour to reach the bus stand, and the bus takes 5/12 of an hour to reach the school. What fraction of an hour does he take to reach the school?',
              options: '1/2, 5/12, 7/12'
            },
            {
              qText:
                'Geeta filled 4/7 of the glass with water. How much of the glass is empty?',
              options: '3/7, 1/2, 5/7'
            },
            {
              qText:
                'Siva got 2/4 piece of a cake. Geeta got 1/2 of a cake. Who got more?',
              options: 'Both got equal, Siva, Geeta'
            },
            {
              qText:
                'John had 20 candies. He shared 1/5 of it to Simon and 1/4 of it to Ruby. Now who has more candies?',
              options: 'John, Simon, Ruby, All got equal'
            },
            {
              qText:
                'Selvi got an apple. She gave 1/2 of it to Selvam and 1/4 of it to John. She kept the remaining for herself. Who got more?',
              options: 'Selvam, Selvi, John, All got equal'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'My father spend 1/3  of his day in office, 1/4 of his day in sleeping. He spend the rest of the time with the family. So where does he spend most of his time?',
              options: 'Family, Office, Sleep'
            },
            {
              qText:
                '1/6 litre of water is needed to prepare food for 1 person. How much litre of water is needed to prepare food for 4 people?',
              options: ' 2/3, 1/3, 5/6'
            },
            {
              qText:
                'It takes 1/12 of an hour to write one page. How much of an hour it will take to write 4 pages?',
              options: '1/3, 1/2, 4/10'
            },
            {
              qText: 'I have eaten 3/5 of a dosa. How much is left?',
              options: '2/5, 2/10, 1/5'
            },
            {
              qText:
                'I can run 1 km in 1/6 of an hour. How much of an hour will it take to run 3 km?',
              options: '1/2, 3/5, 1/3'
            }
          ]
        }
      ]
    },

    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Answer the word problem.',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `I ate 2/7 part of the pizza. How much is left? | ?0/?1 | 5, 7
Gopal walks for 1/12 of an hour to reach the bus stand, and the bus takes 5/12 of an hour to reach the school. What fraction of an hour does he take to reach the school? | ?0/?1 hr | 1, 2
Ramu has to travel a distance of 20 km. If he has travelled 4/5 of the distance by car, how many kilometres did he travel by car? | ?0 km | 16
A dog is fed with 1/2 cup of the food and a puppy is fed with 1/4 cup of the food. In total, how much of a cup was served? | ?0/?1 | 3, 4
Ravi shared 1/5 of his biscuit pack with his dog and 2/5 with his brother. How much part is left for him? | ?0/?1 | 2, 5`,

        `Siva ate 2/5 part of the pizza. How much is left? | ?0/?1 | 3, 5
If I run 1 time around my classroom, I cover 1/5 km. How many times do I have to run to cover 1 km? | ?0 times | 5
Mom has spent 7/10 part of her salary? How much is left? | ?0/?1 | 3, 10
Every hour, I will drink 1/5 litre of water. How many litre of water will I drink in 10 hr? | ?0 ^l | 2
I can run 1 km in 1/6 of an hour. How much of an hour will it take to run 3 km? | ?0/?1 ^hr | 1, 2`,

        `My mom prepared 5 dosas. I ate 1 1/2 . How much is left? | ?0 ?1/?2 | 3, 1, 2
It takes 1/12 of an hour to write one page. How much of an hour it will take to write 5 pages? | ?0/?1 | 5, 12
My dad has spent 4/7 part of his salary? How much is left? | ?0/?1 | 3, 7
I ran for 1/4 km and then I walked for 1/4 km. How much distance have I covered? | ?0/?1 km | 1, 2
Selvam filled 4/7 of the glass with water. How much of the glass is empty? | ?0/?1 | 3, 7`
      ]
    }
  ]
};
