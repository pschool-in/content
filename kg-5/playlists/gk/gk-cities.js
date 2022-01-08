export default {
  label: 'GK Cities',
  id: 'gk-cities',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Cities and Special Names',
      data: {
        title: 'Cities and Special Names',
        text: [
          {
            type: 'hilight',
            text: `Jaipur - Pink city
Varanasi - City of light
Ahmedabad - Manchester Of India
Calicut - City of spices
Nagpur - Orange city`
          },
          {
            type: 'hilight',
            text: `Mysore - Sandalwood city
Udaipur - City of Lakes
Bengaluru - Garden City of India 
Jamshedpur - Steel City of India`
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match the following',
      data: {
        title: 'match city with its sorbiquet',
        text: `Jaipur, Pink city
Varanasi, City of light
Udaipur, City of Lakes
Calicut, City of spices
Nagpur, Orange city`
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which city is called the Sandalwood city of India?',
            options: 'Mysore, Delhi, Bengaluru'
          },
          {
            qText: 'Which city is called the City of Lakes in India?',
            options: 'Udaipur, Jaipur, Madurai'
          },
          {
            qText: 'Which city is called the Garden City of India?',
            options: 'Bengaluru, Mumbai, Hyderabad'
          },
          {
            qText: 'Which city is called the Steel City of India?',
            options: 'Jamshedpur, Jaipur, Agra'
          },
          {
            qText: 'Which city is called the Manchester Of India?',
            options: 'Ahmedabad, Madurai, Jaipur'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Ahmedabad* city is Manchester of India.
*Udaipur* city is the City of Lakes in India.
*Varanasi* city is the City of light in India.
*Nagpur* city is Orange city of India.
*Calicut* city is the City of spices in India.`
      }
    },
    {
      label: 'True or False',
      id: 'TF',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Ahmedabad is known as Manchester of India.
Calicut is known as the City of spices in India.
Udaipur is known as City of Lakes.`
          },
          {
            name: 'False',
            text: `Nagpur is known as Apple city.
Mysore is known as Diamond city.`
          }
        ]
      }
    },
    {
      id: 'crossword-city',
      type: 'crossword',
      label: 'Crossword - City and their special names',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Jaipur',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Pink city',
            direction: 'across'
          },
          {
            word: 'Mysore',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'Sandalwood city',
            direction: 'down'
          },
          {
            word: 'Agra',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'City of Taj',
            direction: 'down'
          },
          {
            word: 'Bengaluru',
            marker: {
              x: 9,
              y: 0
            },
            hint: 'Garden City',
            direction: 'down'
          },
          {
            word: 'Hyderabad',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'City of pearls',
            direction: 'across'
          },
          {
            word: 'Nagpur',
            marker: {
              x: 4,
              y: 4
            },
            hint: 'Orange city',
            direction: 'down'
          },
          {
            word: 'Madurai',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'city of festivals, present in south Tamil Nadu.',
            direction: 'down'
          }
        ],
        table: [
          ['J', 'A', 'I', 'P', 'U', 'R', '', 'M', '', 'B'],
          ['', 'G', '', '', '', '', '', 'A', '', 'E'],
          ['M', 'R', '', '', '', '', '', 'D', '', 'N'],
          ['Y', 'A', '', '', '', '', '', 'U', '', 'G'],
          ['S', '', '', '', 'N', '', '', 'R', '', 'A'],
          ['O', '', '', '', 'A', '', '', 'A', '', 'L'],
          ['R', '', '', '', 'G', '', '', 'I', '', 'U'],
          ['E', '', '', '', 'P', '', '', '', '', 'R'],
          ['', '', '', '', 'U', '', '', '', '', 'U'],
          ['H', 'Y', 'D', 'E', 'R', 'A', 'B', 'A', 'D', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-city',
      type: 'wordsearch',
      label: 'WordSearch - Indian Cities',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['A', 'G', 'R', 'A'],
            marker: [0, 0, 3, 0]
          },
          {
            word: ['C', 'H', 'E', 'N', 'N', 'A', 'I'],
            marker: [9, 0, 9, 6]
          },
          {
            word: ['N', 'E', 'W', 'D', 'E', 'L', 'H', 'I'],
            marker: [0, 9, 7, 9]
          },
          {
            word: ['H', 'Y', 'D', 'E', 'R', 'A', 'B', 'A', 'D'],
            marker: [8, 1, 8, 9]
          },
          {
            word: ['K', 'O', 'L', 'K', 'A', 'T', 'A'],
            marker: [2, 6, 8, 6]
          },
          {
            word: ['N', 'A', 'G', 'P', 'U', 'R'],
            marker: [3, 5, 8, 5]
          },
          {
            word: ['M', 'U', 'M', 'B', 'A', 'I'],
            marker: [0, 1, 0, 6]
          }
        ],
        table: [
          ['A', 'G', 'R', 'A', 'I', 'E', 'F', 'Z', 'A', 'C'],
          ['M', 'N', 'T', 'X', 'Z', 'J', 'H', 'B', 'H', 'H'],
          ['U', 'U', 'U', 'F', 'O', 'C', 'G', 'L', 'Y', 'E'],
          ['M', 'W', 'N', 'O', 'K', 'X', 'W', 'X', 'D', 'N'],
          ['B', 'D', 'D', 'W', 'S', 'E', 'T', 'L', 'E', 'N'],
          ['A', 'R', 'R', 'N', 'A', 'G', 'P', 'U', 'R', 'A'],
          ['I', 'T', 'K', 'O', 'L', 'K', 'A', 'T', 'A', 'I'],
          ['A', 'E', 'K', 'L', 'X', 'H', 'O', 'C', 'B', 'C'],
          ['M', 'R', 'Q', 'G', 'K', 'Z', 'V', 'E', 'A', 'X'],
          ['N', 'E', 'W', 'D', 'E', 'L', 'H', 'I', 'D', 'V']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
