export default {
  label: 'GK World',
  id: 'gk-world',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Important Days',
      data: {
        title: 'Important Days',
        text: [
          {
            type: 'hilight',
            text: `24 January - International Day of Education
21 February - International Mother Language Day 
03 March - World Wildlife Day
08 March - International Women’s Day 
1 May - International Labour Day
07 April -  World Health Day 
05 June  -  World Environment Day`
          },
          {
            type: 'hilight',
            text: `21 June - International Day of Yoga 
08 September - International Literacy Day 
21 September - International Day of Peace 
27 September - World Tourism Day
05 October - World Teachers' Day 
24 October - United Nations Day`
          }
        ]
      }
    },
    {
      id: 'match-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `27 September, World Tourism Day
      05 October, World Teachers' Day
      24 October, United Nations Day
      07 April, World Health Day
      03 March, World Wildlife Day`,
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
            qText: 'When is the World Environment Day?',
            options: '05 June, 06 June, 07 June'
          },
          {
            qText: 'When is the International Day of Peace?',
            options: '21 September, 08 September , 06 June'
          },
          {
            qText: 'When is the International Day of Yoga?',
            options: '21 June, 31 June, 11 June'
          },
          {
            qText: 'When is the International Literacy Day?',
            options: '08 September, 09 September, 08 June'
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
        text: `08 March is the International *Women’s Day*.
    1 May is the International *Labour Day*.
    *24 January* is the International Day of Education.
    *21 February* is the International Mother Language Day.
    *05 June* is the World Environment Day.`
      }
    },
    {
      label: 'True or False',
      id: 'TF -1',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `27 September is the World Tourism Day.
       05 October is the World Teacher's Day.
       05 June is the World Environment Day.`
          },
          {
            name: 'False',
            text: `24 October is world students day.
    1 May is the International Dance Day.`
          }
        ]
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Notes: Important Places',
      data: {
        title: 'Important Places',
        text: [
          {
            type: 'hilight',
            text: `Taj Mahal - Agra
Statue of Liberty -  New York
The Colosseum - Rome
Eiffel Tower - Paris
Leaning Tower of Pisa - Italy
Great Wall of China - China`
          },
          {
            type: 'hilight',
            text: `Burj Khalifa - Dubai
The Acropolis - Athens
Pyramid - Egypt
Stonehenge - England
Angkor Wat - Cambodia`
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Taj Mahal, Agra
       Statue of Liberty, New York
       The Colosseum, Rome
       Eiffel Tower, Paris
       Leaning Tower of Pisa, Italy`,
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
            qText: 'Great Wall of China is located at ____________.',
            options: 'China, India, Jordan '
          },
          {
            qText: 'Burj Khalifa is located at __________.',
            options: 'Dubai, Canada, Australia'
          },
          {
            qText: 'The Acropolis is located at __________.',
            options: 'Athens, India, Japan '
          },
          {
            qText: 'Pyramid is located at ____________.',
            options: 'Egypt, Tokoyo, Berlin'
          },
          {
            qText: 'Stonehenge is located at _________________.',
            options: 'England, Mexico, SriLanka'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Eiffel Tower* is situated in Paris.
   *Taj Mahal* is situated in Agra.
  *Statue of Liberty* is situated in New York.
   *Angkor Wat* is situated in Cambodia. 
  *The Colosseum* is situated in Rome.`
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
            text: `Burj Khalifa is located in Dubai. 
       Statue of Liberty is situated in New York.
       The Acropolis is situated in Athens.`
          },
          {
            name: 'False',
            text: `Taj Mahal is located in Nepal. 
       Angkor Wat is situated in Austria.`
          }
        ]
      }
    },
    {
      id: 'crossword-currency',
      type: 'crossword',
      label: 'Crossword - Countries and their Currencies',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Euro',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Germany Currency',
            direction: 'across'
          },
          {
            word: 'Riyal',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'Saudi Arabia currency',
            direction: 'down'
          },
          {
            word: 'Dollar',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'USA Currency',
            direction: 'across'
          },
          {
            word: 'Ruble',
            marker: {
              x: 5,
              y: 4
            },
            hint: 'Russia Currency',
            direction: 'down'
          },
          {
            word: 'Rupee',
            marker: {
              x: 5,
              y: 4
            },
            hint: 'Indian currency',
            direction: 'across'
          },
          {
            word: 'Dinar',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'Algeria currency',
            direction: 'down'
          },
          {
            word: 'Yen',
            marker: {
              x: 8,
              y: 3
            },
            hint: 'Japan currency',
            direction: 'down'
          }
        ],
        table: [
          ['E', 'U', 'R', 'O', '', '', '', '', '', ''],
          ['', '', 'I', '', '', '', '', '', '', ''],
          ['', '', 'Y', '', '', '', '', '', '', ''],
          ['', '', 'A', '', '', '', '', '', 'Y', ''],
          ['D', 'O', 'L', 'L', 'A', 'R', 'U', 'P', 'E', 'E'],
          ['I', '', '', '', '', 'U', '', '', 'N', ''],
          ['N', '', '', '', '', 'B', '', '', '', ''],
          ['A', '', '', '', '', 'L', '', '', '', ''],
          ['R', '', '', '', '', 'E', '', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-currency',
      type: 'wordsearch',
      label: 'WordSearch - Countries and their Currencies',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['R', 'U', 'P', 'E', 'E'],
            marker: [0, 0, 0, 4]
          },
          {
            word: ['R', 'U', 'B', 'L', 'E'],
            marker: [0, 0, 4, 0]
          },
          {
            word: ['E', 'U', 'R', 'O'],
            marker: [0, 4, 3, 4]
          },
          {
            word: ['R', 'I', 'Y', 'A', 'L'],
            marker: [2, 4, 6, 8]
          },
          {
            word: ['D', 'O', 'L', 'L', 'A', 'R'],
            marker: [5, 3, 5, 8]
          },
          {
            word: ['D', 'I', 'N', 'A', 'R'],
            marker: [5, 3, 9, 3]
          },
          {
            word: ['Y', 'E', 'N'],
            marker: [4, 6, 2, 8]
          }
        ],
        table: [
          ['R', 'U', 'B', 'L', 'E', 'A', 'V', 'T', 'S', 'Y'],
          ['U', 'R', 'B', 'V', 'T', 'B', 'Z', 'V', 'C', 'U'],
          ['P', 'C', 'M', 'D', 'B', 'X', 'R', 'P', 'Q', 'D'],
          ['E', 'V', 'E', 'M', 'X', 'D', 'I', 'N', 'A', 'R'],
          ['E', 'U', 'R', 'O', 'A', 'O', 'Z', 'B', 'B', 'B'],
          ['O', 'R', 'T', 'I', 'F', 'L', 'W', 'T', 'H', 'V'],
          ['F', 'W', 'U', 'J', 'Y', 'L', 'B', 'T', 'W', 'G'],
          ['R', 'Y', 'L', 'E', 'J', 'A', 'C', 'S', 'K', 'G'],
          ['U', 'Z', 'N', 'D', 'X', 'R', 'L', 'N', 'X', 'G'],
          ['Q', 'F', 'L', 'T', 'M', 'N', 'I', 'M', 'Q', 'C']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
