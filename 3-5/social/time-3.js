export default {
  id: 'time-3',
  label: 'Understanding Time',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'What is Time?',
      type: 'passage',
      id: 'whatistime',
      data: {
        title: 'What is Time?',
        text: `Time is an infinite continuous progress of events from the past, through the present, to the future. It is majorly divided into three parts.
1. Past - event that has happened         
2. Present - event that is happening        
3. Future- event that is going to happen         
To calculate and understand time, we use certain units like clocks, calendars, etc. A clock contains seconds, minutes, and hours. Calendars are there to make a log of time. The calendar contains days, months, and years. These are all units of time, that help us to measure and calculate the time. In ancient days, some people used a water clock or an hourglass to measure time.
Sometimes, old statues, coins, shards of pottery, old objects, etc. are found while digging the ground. They are things used by the people who lived many years ago. They help us to understand the life style of people who lived during such times.`
      }
    },
    {
      label: 'Past tense Vs Future tense',
      id: 'timepastfuture',
      type: 'group',
      data: {
        title: 'Classify the below as past or future tense.',
        types: [
          {
            name: 'Past tense',
            text: 'Gone, Came late, Reached'
          },
          {
            name: 'Future tense',
            text: 'Later, yet to come, Going to reach'
          }
        ]
      }
    },
    {
      id: 'timematch',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `9.00 A.M, 9:00 hours
3.00 P.M, 15:00 hours
8.00 P.M, 20:00 hours 
6.00 A.M, 6:00 hours
11.00 P.M, 23:00 hours`,
        title: 'Match the equal time.'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'timemcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Choose the right sequence in ascending order',
            options:
              'Seconds; Minutes; Hours, Minutes; Seconds; Hours, Hours; Seconds; Minutes , Minutes; Hours; Seconds'
          },
          {
            qText: '___________ is used to measure time.',
            options: 'Water clock, An hourglass, A calendar, *All of the above'
          },
          {
            qText: 'Statues and coins help us to know about the __________.',
            options: 'past, present, future'
          },
          {
            qText: 'How many days are there in a leap year?',
            options: '366, 365, 367, 368'
          },
          {
            qText: 'How many months do we have in a year?',
            options: '12, 13, 14, 15'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'timedrag-1',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Old newspapers help us to know about the *past*.
1 hour is *60 minutes*.
1 minute is *60 seconds*.
A.M stands for *ante meridiem*.
P.M stands for *post meridiem*.
*June* month has 30 days.
*December* month has 31 days.`
      }
    },
    /*
{
id: 'timefill-1',
label: 'Fill in the blanks -2',
type: 'fillup',
data: {
title: 'Click the blanks and fill it with the right word.',
text: `The time difference between India and Washington D.C is *9 (8)*hours behind.
The time difference between India and Japan is *3(2)* hours ahead.
The time difference between India and Sweden is *3 (4)* hours behind. 
The time difference between India and Australia is *4(5)* hours ahead.
The time difference between India and London is *4(6)* hours behind.`
}
},
*/
    {
      label: 'True or False',
      id: 'timeTF',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Time is majorly divided into past, present and future.
Historical buildings help us to understand the history.
“The train may come late” is future tense.`
          },
          {
            name: 'False',
            text: `Time is not measured by any instruments.
“Right now” is past tense.`
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch - Measurement of Time',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['C', 'A', 'L', 'E', 'N', 'D', 'E', 'R', 'S'],
            marker: [0, 0, 8, 8]
          },
          {
            word: ['H', 'O', 'U', 'R', 'G', 'L', 'A', 'S', 'S'],
            marker: [8, 0, 8, 8]
          },
          {
            word: ['C', 'L', 'O', 'C', 'K'],
            marker: [2, 1, 2, 5]
          },
          {
            word: ['C', 'O', 'I', 'N', 'S'],
            marker: [4, 8, 8, 8]
          },
          {
            word: ['P', 'O', 'T', 'T', 'E', 'R', 'Y'],
            marker: [0, 9, 6, 9]
          },
          {
            word: ['S', 'T', 'A', 'T', 'U', 'E', 'S'],
            marker: [1, 6, 7, 6]
          }
        ],
        table: [
          ['C', 'M', 'F', 'Y', 'C', 'M', 'U', 'I', 'H', 'B'],
          ['S', 'A', 'C', 'U', 'Q', 'U', 'S', 'Z', 'O', 'O'],
          ['N', 'X', 'L', 'I', 'L', 'T', 'R', 'M', 'U', 'I'],
          ['M', 'H', 'O', 'E', 'K', 'V', 'P', 'T', 'R', 'O'],
          ['N', 'N', 'C', 'S', 'N', 'D', 'L', 'Y', 'G', 'F'],
          ['E', 'R', 'K', 'N', 'Z', 'D', 'J', 'S', 'L', 'J'],
          ['I', 'S', 'T', 'A', 'T', 'U', 'E', 'S', 'A', 'H'],
          ['Q', 'F', 'Y', 'L', 'I', 'Y', 'L', 'R', 'S', 'E'],
          ['G', 'R', 'R', 'Q', 'C', 'O', 'I', 'N', 'S', 'Z'],
          ['P', 'O', 'T', 'T', 'E', 'R', 'Y', 'U', 'F', 'E']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
