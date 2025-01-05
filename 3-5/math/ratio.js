export default {
  label: 'Ratios',
  id: 'ratio',
  list: [
    {
      type: 'fraction',
      id: 'read-ratio',
      label: 'Write the Ratio',
      commonData: {
        title:
          'Write the ratio between the filled and unfilled part of the below image.',
        probType: 'read',
        topic: 'ratio'
      },
      data: [
        {
          type: 'circle',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        },
        {
          type: 'hexogon',
          text: '2/10, 3/10, 1/10, 6/10, 8/10, 4/10, 7/10, 9/10'
        },
        {
          type: 'rect',
          text: '1/4, 3/4, 1/2, 7/10, 2/10, 5/10, 6/10, 3/10, 1/5, 4/5'
        },
        {
          type: 'rect',
          text: '1/20, 3/20, 7/20, 9/20, 11/20, 13/20, 3/25, 6/25, 9/25, 11/25'
        },
        {
          type: 'petals',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        }
      ]
    },
    {
      type: 'fraction',
      id: 'mark-ratio',
      label: 'Mark the Ratio',
      commonData: {
        title:
          'Create the given ratio between the filled and unfilled blocks. (Tap on the image to color).',
        topic: 'ratio'
      },
      data: [
        {
          type: 'circle',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        },
        {
          type: 'hexogon',
          text: '2/10, 3/10, 1/10, 6/10, 8/10, 4/10, 7/10, 9/10'
        },
        {
          type: 'rect',
          text: '1/4, 3/4, 1/2, 7/10, 2/10, 5/10, 6/10, 3/10, 1/5, 4/5'
        },
        {
          type: 'rect',
          text: '1/20, 3/20, 7/20, 9/20, 11/20, 13/20, 3/25, 6/25, 9/25, 11/25'
        },
        {
          type: 'petals',
          text: '1/4, 3/4, 2/5, 4/5, 3/10, 1/5, 7/10, 1/2, 3/5, 9/10'
        }
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Equivalent Ratios',
      commonData: {
        title: 'Match Equivalent Ratios'
      },
      data: [
        `1 : 2,  5 : 10
2 : 3, 4 : 6
5 : 4, 10 : 8
1 : 5, 20 : 100
9 : 10, 18 : 20`,

        `1 : 3 , 3 : 9
2 : 1, 10 : 5
2 : 3, 6 : 9
3 : 4, 15 : 20
1 : 2, 2 : 4`,

        `3 : 7, 9 : 21
1 : 3, 2 : 6
3 : 1, 9 : 3
3 : 4, 30 : 40
4 : 1, 20 : 5`,

        `1 : 2, 50 : 100
1 : 4, 25 : 100
1 : 5, 20 : 100
1 : 10, 10 : 100
1 : 20, 5 : 100`,

        `2 : 5, 40 : 100
3 : 5, 60 : 100
4 : 5, 80 : 100
3 : 4, 75 : 100
2 : 4, 50 : 100`,

        `2 : 5, 20 : 50
1 : 5, 10  : 50
3 : 10, 15 : 50
8 : 10, 40 : 50
7 : 10, 35 : 50`,

        `7 : 10 , 28 : 40
7 : 8, 35 : 40
7 : 4, 70 : 40
7 : 5, 56 : 40
7 : 20, 14 : 40`,

        `6 : 2, 3 : 1
15 : 10, 3 : 2
20 : 15, 4 : 3
15 : 5, 3 : 1
5 : 15, 1 : 3`,

        `8 : 2 , 4 : 1
8 : 4, 2 : 1
8 : 16, 1 : 2
8 : 32, 1 : 4
8 : 12, 2 : 3`,

        `12 : 4, 3 : 1
12 : 3, 4 : 1
12 : 2, 6 : 1
12 : 6, 2 : 1
12 : 24, 1 : 2`,

        `1000 : 4, 250 : 1
1000 : 2, 500 : 1
1000 : 5, 200 : 1
1000 : 10, 100 : 1
1000 : 100, 10 : 1`,

        `1000 : 500, 2 : 1
1000 : 200, 5 : 1
1000 : 250, 4 : 1
1000 : 750, 4 : 3
1000 : 400, 5 : 2`
      ]
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Find 𝑥 in equal ratios',
      commonData: {
        title: 'Find 𝑥 in equal ratios',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        isSentence: false,
        inputType: 'small'
      },
      data: [
        {
          list: [
            `𝑥 : 3 =  9 : 27 
𝑥/3 = ?0/27
𝑥 = 9/27 × ?1
Simply the fraction.
𝑥 = ?2/?3 × 3
𝑥 = ?4
9, 3, 1, 3, 1`,

            `𝑥 : 5 =  20 : 25 
𝑥/5 = ?0/?1
Simply the fraction.
𝑥/5 = ?2/?3
𝑥 = ?4/?5 × ?6
𝑥 = ?7
20, 25, 4, 5, 4, 5, 5, 4`,

            `2 : 7 = 𝑥 : 28
𝑥/28 = ?0/?1
𝑥 = 2/7 × ?2
𝑥 = 2 × ?3
𝑥 = ?4
2, 7, 28, 4, 8`,

            `4 : 9 = 𝑥 : 18
𝑥/18 = ?0/?1
𝑥 = 4/9 × ?2
𝑥 = 4 × ?3
𝑥 = ?4
4, 9, 18, 2, 8`,

            `1 : 4 = 𝑥 : 20
𝑥/20 = ?0/?1
𝑥 = 1/4 × ?2
𝑥 = 1 × ?3
𝑥 = ?4
1, 4, 20, 5, 5`
          ]
        },
        {
          list: [
            `11 : 7 = 𝑥 : 21
𝑥/21 = ?0/?1
𝑥 = 11/7 × ?2
𝑥 = 11 × ?3
𝑥 = ?4
11, 7, 21, 3, 33`,

            `3 : 7 = 𝑥 : 21
𝑥/21 = ?0/?1
𝑥 = 3/7 × ?2
𝑥 = 3 × ?3
𝑥 = ?4
3, 7, 21, 3, 9`,

            `4 : 5 = 𝑥 : 20
𝑥/20 = ?0/?1
𝑥 = 4/5 × ?2
𝑥 = 4 × ?3
𝑥 = ?4
4, 5, 20, 4, 16`,

            `6 : 7 = 𝑥 : 14
𝑥/14 = ?0/?1
𝑥 = 6/7 × ?2
𝑥 = 6 × ?3
𝑥 = ?4
6, 7, 14, 2, 12`,

            `4 : 3 = 𝑥 : 18
𝑥/18 = ?0/?1
𝑥 = 4/3 × ?2
𝑥 = 4 × ?3
𝑥 = ?4
4, 3, 18, 6, 24`
          ]
        },
        {
          list: [
            `5 : 𝑥 =  20 : 8 
5/𝑥 = 20/8
𝑥/5 = ?0/?1
𝑥 = 8/20 × ?2
𝑥 = ?3/?4
𝑥 = ?5
8, 20, 5, 40, 20, 2`,

            `75 : 𝑥 =  25 : 1 
75/𝑥 = 25
𝑥/75 = ?0/?1
𝑥 = 1/25 × ?2
𝑥 = ?3/?4
𝑥 = ?5
1, 25, 75, 75, 25, 3`,

            `5 : 3 = 15 : 𝑥
15/𝑥 = ?0/?1
𝑥/15 = ?2/?3
𝑥 = 3/5 × ?4
𝑥 = 3 × ?5
𝑥 = ?6
5, 3, 3, 5, 15, 3, 9`,

            `3 : 10 = 30 : 𝑥
30/𝑥 = ?0/?1
𝑥/30 = ?2/?3
𝑥 = 10/3 × ?4
𝑥 = 10 × ?5
𝑥 = ?6
3, 10, 10, 3, 30, 10, 100`,

            `5 : 2 = 25 : 𝑥
25/𝑥 = ?0/?1
𝑥/25 = ?2/?3
𝑥 = 2/5 × ?4
𝑥 = 2 × ?5
𝑥 = ?6
5, 2, 2, 5, 25, 5, 10`
          ]
        }
      ]
    },

    {
      type: 'numberInput',
      id: 'table-2',
      label: 'Find the Missing Value',
      commonData: {
        title: 'Fill in the blank. This represents 2 equivalent ratios.',
        type: 'word-problem',
        answerBox: false,
        fontSize: '2rem',
        isSentence: false,
        inputType: 'small'
      },
      data: [
        `1 : 2 =  5 : ?0 | 10
2 : 3 = 4 : ?0 | 6
5 : 4 = ?0 : 8 | 10
1 : 5 = 20 : ?0 | 100
9 : 10 = 18 : ?0 | 20`,

        `1 : 3 =  3 : ?0 | 9
2 : 1 =  10 : ?0 | 5
2 : 3 =  6 : ?0 | 9
3 : 4 =  15 : ?0 | 20
1 : 2 =  2 : ?0 | 4`,

        `3 : 7 =  9 : ?0 | 21
1 : 3 =  2 : ?0 | 6
3 : 1 =  9 : ?0 | 3
3 : 4 =  30 : ?0 | 40
4 : 1 =  20 : ?0 | 5`,

        `1 : 2 =  ?0 : 100 | 50
1 : 4 =  ?0 : 100 | 25
1 : 5 =  ?0 : 100 | 20
1 : 10 =  ?0 : 100 | 10
1 : 20 =  ?0 : 100 | 5`,

        `2 : 5 =  ?0 : 100 | 40
3 : 5 = ?0 : 100 | 60
4 : 5 =  ?0 : 100 | 80
3 : 4 =  ?0 : 100 | 75
2 : 4 =  ?0 : 100 | 50`,

        `2 : 5 =  ?0 : 50 | 20
1 : 5 =  ?0 : 50 | 10
3 : 10 =  ?0 : 50 | 15
8 : 10 =  ?0 : 50 | 40
7 : 10 =  ?0 : 50 | 35`,

        `7 : 10  = ?0 : 40 | 28
7 : 8 = ?0 : 40 | 35
7 : 4 = ?0 : 40 | 70
7 : 5 = ?0 : 40 | 56
7 : 20 = ?0 : 40 |14 `,

        `6 : 2 = 3 : ?0 | 1 
15 : 10 = 3 : ?0 | 2 
20 : 15 = 4 : ?0 | 3 
15 : 5 = 3 : ?0 | 1 
5 : 15 = 1 : ?0 | 3 `,

        `8 : 2  = 4 : ?0 | 1
8 : 4 = 2 : ?0 | 1
8 : 16 = 1 : ?0 | 2
8 : 32 = 1 : ?0 | 4
8 : 12 = 2 : ?0 | 3`,

        `12 : 4 = ?0 : 1 | 3
12 : 3 = ?0 : 1 | 4
12 : 2 = ?0 : 1 | 6
12 : 6 = ?0 : 1 | 2
12 : 24 = ?0 : 2 | 1`,

        `1000 : 4 = ?0 : 1 | 250
1000 : 2 = ?0 : 1 | 500
1000 : 5 = ?0 : 1 | 200
1000 : 10 = ?0 : 1 | 100
1000 : 100 = ?0 : 1 | 10`,

        `1000 : 500 = ?0 : 1 | 2
1000 : 200 = ?0 : 1 | 5
1000 : 250 = ?0 : 1 | 4
1000 : 750 = ?0 : 3 | 4
1000 : 400 = ?0 : 2 | 5`
      ]
    },
    {
      type: 'numberInput',
      id: 'ratio-between3',
      label: 'Ratio Between 3',
      commonData: {
        title: 'Fill the missing numbers in the equivalent ratios',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.6rem',
        isSentence: false,
        inputType: 'small'
      },
      data: [
        `1 : 2 : 3 = ?0 : ?1 : 15 | 5, 10
        3 : 5 : 7 = ?0 : 15 : ?1 | 9, 21
        6 : 3 : 1 = 30 : ?0 : ?1 | 15, 5
        ?0 : ?1 : 3 = 20 : 16 : 12 | 5, 4
        2 : ?0 : ?1 = 6 : 15 : 21 | 5, 7`,

        `?0 : 2 : 3 = 20 : ?1 : 15 | 4, 10
        ?0 : 5 : 7 = 18 : 15 : ?1 | 6, 21
        6 : 3 : ?0 = 30 : ?1 : 25 | 5, 15
        ?0 : 1 : 3 = 20 : ?1 : 12 | 5, 4
        2 : 10 : ?0 = 6 : ?1 : 21 | 7 , 30 `,

        `?0 : 1 : 2 = 100 : 50 : ?1 | 2 , 100
        7 : 2 : ?0 = ?1 : 4 : 6 | 3, 14
        2 : 3 : ?0 = ?1 : 15 : 15 | 3, 10
        1 : 3 : ?0 = ?1 : 15 : 25 | 5, 5
        ?0 : 1 : 3 = 8 : ?1 : 12 | 2, 4`
      ]
    },
    {
      label: 'Drag and Drop Ratios',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        fontSize: '1rem',
        title: 'Drag and drop the ratios at right places.'
      },
      data: [
        `There are 15 apples, 20 oranges and 5 pineapples in a basket. The ratio of the number of apples to the number of oranges is *15: 20*, which can be simplified as *3:4*
The ratio of oranges to pineapples is *20:5*, which can be simplified as *4:1*
The ratio of oranges to the total number of fruits is *20:40*, which can be simplified as *1:2*`,

        `In a classroom there are equal number of boys and girls. The ratio of boys to girls is *1 : 1*
In a school, there is one teacher for every 20 students. The ratio of teachers to students is *1 : 20*. The ratio of students to teachers is *20 : 1*`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Word Problems',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `Yash's age is 2 times the age of his sister. His sister's age is  12.
Yash's age is ?0
The ratio of Yash's age to his sister's age is
?1 : ?2
24, 2, 1`,

            `The time taken by a car A to cover 120 km is 3 hours. Another car B takes 4 hours to cover the same distance. 
The ratio of the time taken by the car A and B is 
?0 : ?1
The ratio of the speed of the car A and B is 
?2 : ?3
3,4,4,3`,
            `The length of a sari is 6 m and the length of a ribbon is 30 cm. 
The length of the sari in cm is ?0 cm.
The ratio of the length of the sari to the length of a ribbon is ?1 : 30
This ratio can be simplified as ?2 : 1
600, 600, 20`,

            `Gopal spent 1 hour in the morning for jogging and 45 minutes to read a book. What is the ratio of the time spent on jogging to the time spent on reading the book?
Time spent for jogging = ?0 mins
Time spent for reading = ?1 mins
The ratio of the time spent on jogging to the time spent on reading = 60 : ?2
This ratio can be simplified to ?3 : ?4
60, 45, 45, 4, 3`,

            `The monthly salary of Priya and Gopal are Rs 25,000 and Rs 30,000 respectively. The ratio of the salary of Priya to Gopal in simplified form is ?0 : ?1
5, 6`
          ]
        }
      ]
    }
  ]
};
