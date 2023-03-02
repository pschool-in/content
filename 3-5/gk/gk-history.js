export default {
  label: 'GK History',
  id: 'gk-history',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: First in India',
      data: {
        title: 'First in India',
        text: [
          {
            type: 'hilight',
            text: `Aryabhatta - First Satellite
Apsara - First Nuclear Reactor
Rabindranath Tagore - First Indian to win Nobel Prize
C.V Raman  - First Indian to get Nobel prize award in Physics
Dr. Rajendra Prasad - First President of India
Sarvepalli Radhakrishnan - First Vice-President of India
Sardar Vallabhbhai Patel - First Home Minister of India`
          },
          {
            type: 'hilight',
            text: `Jawaharlal Nehru - First Prime Minister of India
Rakesh Sharma - India’s first man to go in Space
Mrs. Kiran Bedi -  First woman IPS officer of India
Mrs. Indira Gandhi - First woman Prime Minister of India
Kalpana Chawla - First Indian woman to go in space
Pratibha Devisingh Patil - First woman president of India`
          }
        ]
      }
    },
    {
      id: 'match-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Aryabhatta, First Satellite
Apsara, First Nuclear Reactor
Dr.Rajendra Prasad, First President of India
Jawaharlal Nehru, First Prime Minister of India
Mrs.Kiran Bedi, First woman IPS officer of India`,
        title: 'Match the following with its correct one'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-1',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Who is the first Indian to win Nobel Prize?',
            options: 'Rabindranath Tagore, Bharathiyar, Sarojini Naidu'
          },
          {
            qText:
              'Who is the first Indian to get the Nobel prize award in Physics?',
            options: 'C.V Raman, Srinivasa Ramanujam, Rabindranath Tagore'
          },
          {
            qText: 'Who is the first President of India?',
            options:
              'Dr. Rajendra Prasad, Sardar Vallabhbhai Patel, Sarvepalli Radhakrishnan '
          },
          {
            qText: 'Who is the first Vice-President of India?',
            options:
              'Sarvepalli Radhakrishnan, Dr.Rajendra Prasad, Sardar Vallabhbhai Patel'
          },
          {
            qText: 'Who is the first Home Minister of India?',
            options: 'Sardar Vallabhbhai Patel, Dr. Rajendra Prasad, C.V Raman'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        text: `*Jawaharlal Nehru*  is the first Prime Minister of India.
*Mrs.Kiran Bedi* is the first woman IPS officer of India.
*Rakesh Sharma* is India’s first man to go in Space.
*Pratibha Devisingh Patil* is the first woman president of India.
*Kalpana Chawla* is the first Indian woman to go in space.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Sardar Vallabhai Patel is the first Home Minister of India
Apsara is the first Nuclear Reactor in India.
Rabindranath Tagore is the first Indian to win Nobel Prize.`
          },
          {
            name: 'False',
            text: `GSAT- 30 is the first satellite launched by India.
Mrs.Indira Gandhi is the second woman Prime Minister of India.`
          }
        ]
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Notes: Important Days',
      data: {
        title: 'Important Days',
        text: [
          {
            type: 'hilight',
            text: `12 January   - National Youth Day 
26 January  - Republic Day 
28 February  - National Science Day 
15 August - Independence Day
5 September  - Teachers Day `
          },
          {
            type: 'hilight',
            text: `14 November  - Children’s Day
7 December  - Indian Armed Force Flag Day
2 October  - Gandhi Jayanthi
29 August - National Sports Day `
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `12 January, National Youth Day
26 January, Republic Day
28 February, National Science Day
15 August, Independence Day
5 September, Teachers Day`,
        title: 'Match the following with its correct one'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'When is the Children’s Day?',
            options: '14 November, 15 August, 12 June'
          },
          {
            qText: 'When is the Indian Armed Force Flag Day?',
            options: '7 December, 28 February, 29 August'
          },
          {
            qText: 'When is the Gandhi Jayanthi? ',
            options: '2 October, 30 January, 15 August'
          },
          {
            qText: 'When is the National Sports Day?',
            options: '29 August, 30 August, 31 August'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-2',
      data: {
        text: `5 September is * Teachers Day*.
*12 January* is the National Youth Day.
28 February is the *National Science Day*.
*26 January* is the Republic Day.
7 December is the *Indian Armed Force Flag Day*.`
      }
    },
    {
      label: 'True or False',
      id: 'TF-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `15 August is the Independence Day.
26 January is the Republic Day.
29 August is the National Sports Day.`
          },
          {
            name: 'False',
            text: `2 October is Mahaveer Jayanthi.
12 January is World Dinosaurs Day.`
          }
        ]
      }
    }
  ]
};
