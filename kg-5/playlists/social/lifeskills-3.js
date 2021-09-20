export default {
    id: 'lifeskills-3',
    label: 'Life Skills - 3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'What is Time? - Reading',
        type: 'passage',
        id: 'whatistime',
        data: {
          title: 'What is Time?',
          text: `Time is an infinite continuous progress of events from the past, through the present, to the future. It is majorly divided into three parts.
          1. Past - Event that has happened.          
          2. Present - Event that is happening.          
          3. Future- Event that is going to happen.          
          To calculate and understand time, we are using certain units like a clock, calendars, etc. The clock contains seconds, minutes, and hours. Calendars are there to make a log of time. The calendar contains days, months, and years. These are all units of time, that help us to measure and calculate the time. In ancient days, people used a water clock, an hourglass, etc. Statues, historical places, monuments, coins, shards of pottery, old objects, etc. So this helps us to understand the life style of people who lived during such times.`
        }
      },
      {
        label: 'Past tense Vs Future tense',
        id: 'timepastfuture',
        type: 'group',
        data: {
          title: 'Classify the below options based on the category of past tense and future tense.',
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
          title: 'Match the following with 12-hour format and 24-hour format'
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
              options:
                '366, 365, 367, 368'
            },
            {
              qText: 'How many months do we have in a year?',
              options: '12, 13, 14, 15'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks -1',
        type: 'matchByDragDrop',
        id: 'timedrag-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Old newspapers help us to know about the *past*.
          1 hour is *60 minutes*.
          1 minute is *60 seconds*.
          A.M stands for *ante meridiem*.
          P.M stands for *post meridiem*.
          *June* month has 30 days.
          *December* month has 31 days.`
      }
    },
    {
        id: 'timefill-1',
        label: 'Fill in the blanks -2',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `The time difference between India and Washington D.C is *9 (8)*hours behind.
          The time difference between India and Japan is *3(2)* hours ahead.
          The time difference between India and Sweden is *3 (4)* hours behind. 
          The time difference between India and Australia is *4(5)* hours ahead.
          The time difference between India and London is *4(6)* hours behind.`
        }
      },
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
              Historical buildings help us to understand the history, that has happened in the past.
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

   
    ]
  };
