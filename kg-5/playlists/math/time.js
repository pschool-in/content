export default {
  label: 'Time Based Problems',
  id: 'word-problems-1',
  //word problems for class 1 students
  list: [
    {
      type: 'clock',
      id: 'write-time-5mins',
      label: 'AM or PM',
      commonData: {
        type: 'AMorPM'
      },
      data: [
        `A teacher says good morning. | 9:00 | AM
  Ramya is going for a run in the morning. | 7:00 | AM
  Sid is watching a TV show after dinner. | 9:15 | PM
  My dad is making some evening snacks. | 4:30 | PM
  The sun is shining. Ashok puts on a cap before he goes outside to play. | 10:30 | AM`,

        `The sun is bright, so Mary puts on her sunglasses. | 2:45| AM
  Helen is eating pizza for dinner.| 7:50 | PM
  Our neighbour's dog is barking loudly in the middle of the night.| 12:30 | AM
  I am reading a book in the library. | 1:45 | PM
  Gopal is watering the plants in the morning. | 6:45 |AM`,

        `After lunch, Amir takes a nap. | 2:30 | PM
  Harsha is eating peanuts as an afternoon snack. | 4:00 | PM
  Tina's family is going out after dinner.| 8:15 | PM
  He got up early to see the sun come up.| 6:55 | AM
  Jacob is swimming on a hot afternoon. | 2:30 | PM`
      ]
    },
    {
      type: 'clock',
      id: 'write-time-5mins',
      label: 'Word Problems - Set the clock',
      commonData: {
        type: 'wordProblem',
        title: 'Find the answer for the below question and set the clock.'
      },
      data: [
        `Now the time is 5:00. What will be the time after an hour? | 5:00 | 6:00
  Now the time is 6:30. What will be the time after 45 minutes? | 6:30 | 7:15
  Now the time is 4:20. What was the time 30 minutes ago? | 4:20 | 3:50
  Now the time is 8:00. What will be the time after 3 hours? | 8:00 | 11:00
  Now the time is 12:30. What will be the time after two and half hours? | 12:30 | 3:00`,

        `It will take 25 minutes to reach school. If I start at 6:15, when will I reach? | 6:15 | 6:40
  The 2 and quarter hour show starts at 4:00. When will the show end? | 4:00 | 6:15
  Now the time is 6:40. What was the time 90 minutes ago? | 6:40 | 5:10
  Now the time is 7:50. What will be the time after 100 minutes? | 7:50 | 9:30
  Now the time is 4:40. What will be the time after 55 minutes? | 4:40 | 5:35`,

        `Mom is going to prepare dinner now and the clock shows 7:50. It will take 50 minutes to prepare. When will the dinner get ready? | 7:50 | 8:40
  Now the time is 7:00. I need to write 3 pages as homework. It will take 20 minutes to write a page. By what time, will I complete the homework? | 7:00 | 8:00
  Now the time is 6:30. I am going to water the plants and clean the vessels. Watering the plants needs 15 minutes. Cleaning the vessels need 20 minutes. By what time will I complete the tasks? | 6:30 | 7:05
  I need to run 5 rounds around the ground. Each round will take 4 minutes. If I start at 6:40, when will I complete it? | 6:40 | 7:00`,

        `The train was scheduled to arrive at 5:10 p.m. However, it was delayed for 25 minutes. What time was it when the train arrived? | 5:10 | 5:35
  The bus departs the bus terminal every 2 hours. If the first bus is scheduled to depart at 10:35 a.m., when  should the second bus depart? | 10:35 | 12:35
  A bus is scheduled to leave the terminal at 9:45 p.m. and travels for 5 hours and 45 minutes to another city. By what time, does the bus reach the destination. | 9:45 | 3:30
  Mary starts her 7-hour shift at 6:15 a.m. What time does Mary get off from work? | 6:15 | 1:15`,

        `The movie starts at 6:00 PM. But we went 40 minutes earlier. At what time did we reach the theatre? | 6:00 | 5:20
  The office closes at 5:00 p.m. Today, the manager left 15 minutes after the office closed and his secretary left the office 25 minutes after the manager left. When did the secretary leave work? | 5:00 | 5:40
  Ravi's cricket coaching starts at 4:00. He practice fielding for 20 minutes, bowling for 20 minutes, and batting for 10 minutes. By what time the practice end? | 4:00 | 4:50
  The receptionist usually starts her 50-minute lunch break at 11:45 am, but today she started her break 20 minutes late because of a meeting. When did she finish her lunch break today? | 11:45 | 12:55`
      ]
    },
    {
      type: 'numberInput',
      id: 'conversion',
      label: 'Convert Units',
      lockAfter: 2,
      commonData: {
        title: 'Convert units as requested',
        type: 'conversion',
        fontSize: '1.5rem',
        allowFrac: true
      },
      data: [
        `1^hour = ?^minutes, 60
  3^hours = ?^minutes, 180
  1^hour = ?^seconds, 3600
  1^minute = ?^seconds, 60
  3^minutes = ?^seconds, 180`,

        `30^days = ?^weeks ?^days, 4, 2
  4^years 1^month = ?^months, 49
  5^days 17^hours = ?^hours, 137
  ?^hours = 2 half hours, 1 
  349^seconds = ?^minutes ?^seconds, 5, 49`,

        `2^hours 47^minutes = ?^minutes, 167
  4^hours 30^minutes = ?^minutes, 270
  300^minutes = ?^hours, 5
  300^seconds = ?^minutes, 5
  ?0^hours 20^minutes = 200^minutes`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-1-3',
      label: 'Answer the Word Problem -3',
      lockAfter: 2,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `The train left the terminal at 11:20 a.m. and arrived at its destination at 2:40 p.m. How long did the train travel? | ?0 hours ?1 minutes | 3, 20
          Jack’s meeting started at 2:45 p.m. and ended at 5:25 p.m. How long did the meeting last?  | ?0 hours ?1 minutes | 2, 40
          Class will start at 9:15 am, but I reached school at 8:55 am. How much time do I have to wait? | ?0 minutes | 20
          Ravi works for 8 hours in a day. A particular job takes 40 hours to complete. How many days should Ravi work to complete the job? | ?0 days | 5
          I left home at 9:30 am and reached theatre at 9:45 am and after 20 minutes the movie started. How long was the time between I left home and movie began? | ?0 minutes | 35`
      ]
    },
    {
      label: 'Force - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `It takes John 25 minutes to go to school and it takes Ashok 50 minutes to go to school. Today, John left home at 8:30 a.m. and Ashok left home at 8:15 a.m. Who arrived at school earlier?`,
            options: `John, Ashok, Both will reach at the same time`
          },
          {
            qText: `Sheela has a homework to write 5 pages. She takes 5 minutes to complete one page. Her little brother Ravi has a homework to write 2 pages. He takes 10 minutes to complete one page. Who will take more time to complete the homework.`,
            options: `Sheela, Ravi, Both will take same time`
          },
          {
            qText: `2 hour movie started at 10:30 am. By what time the movie gets over?`,
            options: `12:30 pm, 12:30 am, 12:00 am, 12:00 pm`
          },
          {
            qText: `The doctor takes 5 minutes for each patient. I am the sixth patient in the queue. If the doctor arrives after 15 minutes, how much time do I have to wait to see the doctor?`,
            options: `40 minutes, 25 minutes, 30 minutes`
          }
        ]
      }
    }
  ]
};
