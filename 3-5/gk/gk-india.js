export default {
  label: 'GK India',
  id: 'gk-india',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: States and Languages',
      data: {
        title: 'States and Languages',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Telugu
Assam - Assamese
Goa - Konkani
Gujarat - Gujarati
Jammu & Kashmir - Kashmiri
Karnataka - Kannada`
          },
          {
            type: 'hilight',
            text: `Kerala - Malayalam
Madhya Pradesh - Hindi
Maharashtra - Marathi
Manipur - Manipuri
Mizoram - Mizo
Tamil Nadu - Tamil`
          },
          {
            type: 'hilight',
            text: `Odisha - Odia
Punjab - Punjabi
Telangana - Telugu 
Uttar Pradesh - Hindi
West Bengal - Bengali`
          }
        ]
      }
    },
    {
      id: 'match-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Andhra Pradesh, Telugu
Assam, Assamese
Goa, Konkani
Gujarat, Gujarati
Jammu & Kashmir, Kashmiri`,
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
            qText: '__________ is the official language of Madhya Pradesh.',
            options: 'Hindi, Tamil, Malayalam'
          },
          {
            qText: '_________ is the official language of Maharashtra.',
            options: 'Marathi, Odia, Kannada'
          },
          {
            qText: '_________ is the official language of Manipur.',
            options: 'Manipuri, Urdu, Malayalam'
          },
          {
            qText: '_________ is the official language of Karnataka.',
            options: 'Kannada, Tamil, English'
          },
          {
            qText: '___________ is the official language of Kerala.',
            options: 'Malayalam, Odia, Kannada'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        text: `People in Mizoram speak *Mizo*.
People in Tamil Nadu speak *Tamil*.
People in Odisha speak *Odia*.
People in Punjab speak *Punjabi*.
People in Telangana speak *Telugu*.`
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
            text: `Hindi is the official language of Uttar Pradesh.
Bengali is the official language of West Bengal.`
          },
          {
            name: 'False',
            text: `Hindi is the official language of Karnataka.
Tamil is the official language of Kerala.`
          }
        ]
      }
    },
    {
      id: 'crossword-languages',
      label: 'Crossword - Indian Languages',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'Tamil',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'official language of Tamil Nadu',
            direction: 'across'
          },
          {
            word: 'Telugu',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'official language of Telangana',
            direction: 'down'
          },
          {
            word: 'Urdu',
            marker: {
              x: 0,
              y: 5
            },
            hint: 'people in Kashmir speak this language',
            direction: 'down'
          },
          {
            word: 'Malayalam',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'people in Kerala speak this language',
            direction: 'down'
          },
          {
            word: 'Marathi',
            marker: {
              x: 1,
              y: 1
            },
            hint: 'official language of Maharashtra',
            direction: 'across'
          },
          {
            word: 'Hindi',
            marker: {
              x: 6,
              y: 1
            },
            hint: 'people in New Delhi speaks this language',
            direction: 'down'
          },
          {
            word: 'Kannada',
            marker: {
              x: 1,
              y: 7
            },
            hint: 'official language in Karnataka',
            direction: 'across'
          },
          {
            word: 'Bengali',
            marker: {
              x: 9,
              y: 1
            },
            hint: 'people in West Bengal speaks in this language',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['T', 'A', 'M', 'I', 'L', '', '', '', '', ''],
          ['E', 'M', 'A', 'R', 'A', 'T', 'H', 'I', '', 'B'],
          ['L', '', 'L', '', '', '', 'I', '', '', 'E'],
          ['U', '', 'A', '', '', '', 'N', '', '', 'N'],
          ['G', '', 'Y', '', '', '', 'D', '', '', 'G'],
          ['U', '', 'A', '', '', '', 'I', '', '', 'A'],
          ['R', '', 'L', '', '', '', '', '', '', 'L'],
          ['D', 'K', 'A', 'N', 'N', 'A', 'D', 'A', '', 'I'],
          ['U', '', 'M', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', '', '']
        ]
      }
    },
    {
      id: '1633429775498',
      label: 'WordSearch - Indian Languages',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['M', 'A', 'R', 'A', 'T', 'H', 'I'],
            marker: [0, 0, 6, 0]
          },
          {
            word: ['M', 'A', 'L', 'A', 'Y', 'A', 'L', 'A', 'M'],
            marker: [0, 0, 0, 8]
          },
          {
            word: ['T', 'A', 'M', 'I', 'L'],
            marker: [4, 0, 4, 4]
          },
          {
            word: ['H', 'I', 'N', 'D', 'I'],
            marker: [5, 0, 5, 4]
          },
          {
            word: ['O', 'D', 'I', 'A'],
            marker: [3, 2, 0, 5]
          },
          {
            word: ['U', 'R', 'D', 'U'],
            marker: [2, 1, 2, 4]
          },
          {
            word: ['K', 'A', 'N', 'N', 'A', 'D', 'A'],
            marker: [9, 3, 3, 9]
          },
          {
            word: ['T', 'E', 'L', 'U', 'G', 'U'],
            marker: [9, 4, 9, 9]
          },
          {
            word: ['B', 'E', 'N', 'G', 'A', 'L', 'I'],
            marker: [2, 8, 8, 2]
          }
        ],
        title: 'Find the given words from the table.',
        lang: 'en',
        table: [
          ['M', 'A', 'R', 'A', 'T', 'H', 'I', 'L', 'C', 'Z'],
          ['A', 'M', 'U', 'F', 'A', 'I', 'T', 'O', 'W', 'B'],
          ['L', 'P', 'R', 'O', 'M', 'N', 'A', 'D', 'I', 'E'],
          ['A', 'H', 'D', 'N', 'I', 'D', 'K', 'L', 'F', 'K'],
          ['Y', 'I', 'U', 'W', 'L', 'I', 'A', 'U', 'A', 'T'],
          ['A', 'V', 'B', 'K', 'B', 'G', 'R', 'N', 'E', 'E'],
          ['L', 'B', 'E', 'R', 'N', 'Y', 'N', 'S', 'S', 'L'],
          ['A', 'T', 'X', 'E', 'I', 'A', 'F', 'R', 'N', 'U'],
          ['M', 'Y', 'B', 'B', 'D', 'V', 'W', 'P', 'X', 'G'],
          ['K', 'W', 'H', 'A', 'L', 'M', 'L', 'L', 'D', 'U']
        ],
        showWords: true
      }
    }
  ]
};
