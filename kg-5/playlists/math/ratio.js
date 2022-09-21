export default {
  label: 'Ratios',
  id: 'ratio',
  list: [
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
      type: 'match',
      id: 'match',
      label: 'Match Equivalent Ratios',
      lockAfter: 1,
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
              4 : 1, 20 : 5`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Word Problems',
      lockAfter: 10,
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
