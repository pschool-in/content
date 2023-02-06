export default {
  label: 'GK Culture',
  id: 'gk-culture',
  lockAfter: 3,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes: Temples and Religious Places',
      data: {
        title: 'Temples and Religious Places',
        text: [
          {
            type: 'hilight',
            text: `Badrinath Temple -  Uttarakhand
Kedarnath Temple -  Uttarakhand
Kashi Vishwanath Temple -  Varanasi, Uttar Pradesh
Golden Temple  -  Amritsar, Punjab       
Jagannath Temple -  Puri, Odisha
Nataraja Temple -  Chidambaram, Tamil Nadu
Meenakshi Temple -  Madurai, Tamil Nadu
Khajuraho Temple -  Chhatarpur, Madhya Pradesh`
          },
          {
            type: 'hilight',
            text: `Sree Padmanabhaswamy Temple - Thiruvananthapuram, Kerala
Amarnath Temple  -  Pahalgam, Jammu & Kashmir
Ranganathaswamy Temple -  Srirangam, Tamil Nadu
Jama Masjid  -  New Delhi
Somnath Temple  -  Gujarat
Ramanathaswamy Temple  - Rameswaram, Tamil Nadu
Mecca Masjid  -   Hyderabad, Telangana`
          }
        ]
      }
    },
    {
      id: 'match-1',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Badrinath Temple, Uttarakhand
Jama Masjid, New Delhi
Kashi Vishwanath Temple, Varanasi 
Golden Temple, Amritsar
Jagannath Temple, Puri`,
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
            qText: 'Ranganathaswamy Temple is dedicated to which deity?',
            options: 'Lord Vishnu, Lord Shiva, Lord Brahma'
          },
          {
            qText: 'Nataraja Temple is located at___________.',
            options: 'Tamil Nadu, Gujarat, Kerala'
          },
          {
            qText: '____________ is famous temple in Madurai.',
            options: 'Meenakshi Temple, Jagannath Temple, Vaishno Devi Temple'
          },
          {
            qText: 'Khajuraho Temple is located at___________.',
            options: 'Chhatarpur, Pahalgam, Thiruvananthapuram'
          },
          {
            qText: 'Sree Padmanabhaswamy Temple is situated in ___________.',
            options: 'Thiruvananthapuram, Chennai, Calicut'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        text: `Jama masjid is sitauted at *New Delhi*.
Somnath Temple is situated in *Gujarat*.
*Amarnath Temple* is located in Jammu & Kashmir.
Ramanathaswamy Temple is situated in *Rameswaram*.
*Mecca Masjid* is located in Telangana.`
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
            text: `Ranganathaswamy Temple is located in Srirangam.
Mecca Masjid is located in Hyderabad.
Kashi Vishwanath Temple is dedicated to the deity Lord Shiva.`
          },
          {
            name: 'False',
            text: `Golden temple is located in the Andaman Islands.
Somnath Temple is situated in Kerala.`
          }
        ]
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Notes: States and Festivals',
      data: {
        title: 'States and Festivals',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Ugadi
Gujarat  - Makar Sankranti
Karnataka - Dussehra
Kerala  -  Onam
Punjab  -  Lohri
Tamil Nadu  - Pongal
West Bengal - Durga Puja`
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Andhra Pradesh, Ugadi
Gujarat, Makar Sankranti
Karnataka, Dussehra
Kerala, Onam
Punjab, Lohri`,
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
            qText:
              '________ is the famous festival celebrated at Andhra Pradesh.',
            options: 'Ugadi, Onam, Ambubachi'
          },
          {
            qText: '___________ is the famous festival celebrated at Gujarat.',
            options: 'Makar Sankranti, Dussehra, Hornbill festival'
          },
          {
            qText:
              'Durga Puja is the famous festival celebrated at __________.',
            options: 'West Bengal, Tamil Nadu, Kerala'
          },
          {
            qText: 'Pongal is the famous festival celebrated at __________.',
            options: 'Tamil Nadu, Arunachal Pradesh, Sikkim'
          },
          {
            qText: '_______ is the famous festival celebrated at Karnataka.',
            options: 'Dussehra, Onam, Wangla'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-2',
      data: {
        text: `The  famous festival of Kerala is *Onam*.
The  famous festival of  Punjab  is *Lohri*.
The  famous festival of Andhra Pradesh is *Ugadi*.
The  famous festival of Karnataka is *Dussehra*.
The  famous festival of Gujarat is *Makar Sankranti*.`
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
            text: `Pongal is the famous festival celebrated at Tamil Nadu.
Lohri is the famous festival celebrated at Punjab.
Makar Sankranti is the famous festival celebrated at Gujarat.`
          },
          {
            name: 'False',
            text: `Saga Dawa is famous festival celebrated at Kerala.
Durga Puja is the famous festival celebrated at Tripura.`
          }
        ]
      }
    },
    {
      id: 'reading-3',
      type: 'passage',
      label: 'Notes: States and Dances',
      data: {
        title: 'States and Dances',
        text: [
          {
            type: 'hilight',
            text: `Andhra Pradesh - Kuchipudi
Gujarat - Dandiya Raas
Kerala -  kathakali 
Manipur - Manipuri
Odisha - Odissi
Punjab - Bhangra
Tamil Nadu - Bharatanatyam`
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Andhra Pradesh, Kuchipudi
Gujarat, Dandiya Raas
Kerala,  kathakali 
Manipur, Manipuri
Odisha, Odissi`,
        title: 'Match the following with its correct one'
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_________ is the famous state dance of Tamil Nadu.',
            options: 'Bharatanatyam, kaligopal, Gaur Maria'
          },
          {
            qText: '__________ is the famous state dance of Punjab.',
            options: 'Bhangra, Panwariya, Popir'
          },
          {
            qText: '__________ is the famous state dance of Odisha.',
            options: 'Odissi, Chalo, Wancho'
          },
          {
            qText: '________ is the famous state dance of Manipur.',
            options: 'Manipuri, Dandiya Raas, Jata-Jatin'
          },
          {
            qText: '________ is the famous state dance of Kerala. ',
            options: 'kathakali, Kavadi, Hojagiri'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-3',
      data: {
        text: `The famous state dance of *Manipur*is Manipuri.
The famous state dance of *Kerala* is Mohiniyattam.
The famous state dance of *Punjab* is Bhangra.
The famous state dance of *Andhra Pradesh* is Kuchipudi.
The famous state dance of *Odisha* is Odissi.`
      }
    },
    {
      label: 'True or False',
      id: 'TF-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Dandiya Raas is the famous state dance of Gujarat.
Manipuri is the famous state dance of Manipur.
Bharatanatyam is the famous dance of Tamil Nadu.`
          },
          {
            name: 'False',
            text: `Kummi is the famous dance of Punjab.
Kuchipudi is the famous dance of Goa.`
          }
        ]
      }
    },
    {
      id: 'crossword-festivals',
      label: 'Crossword - Festivals of India',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'Ugadi',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a famous festival celebrated in Andhra Pradesh',
            direction: 'across'
          },
          {
            word: 'Sankranti',
            marker: {
              x: 9,
              y: 0
            },
            hint: 'festival of worshipping the Sun god in Telangana',
            direction: 'down'
          },
          {
            word: 'Dussehra',
            marker: {
              x: 3,
              y: 0
            },
            hint: '10 days festival celebrated in Mysore',
            direction: 'down'
          },
          {
            word: 'Pongal',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'harvest festival celebrated in Tamil Nadu',
            direction: 'down'
          },
          {
            word: 'Lohri',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'harvest festival celebrated in Punjab',
            direction: 'across'
          },
          {
            word: 'Onam',
            marker: {
              x: 1,
              y: 7
            },
            hint: 'festival to celebreate the homecoming of the King Mahabali.',
            direction: 'across'
          },
          {
            word: 'Durga Puja',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'a famous festival in West Bengal ',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['U', 'G', 'A', 'D', 'I', '', '', 'D', '', 'S'],
          ['', '', '', 'U', '', '', '', 'U', '', 'A'],
          ['', '', '', 'S', '', '', '', 'R', '', 'N'],
          ['', '', '', 'S', '', '', '', 'G', '', 'K'],
          ['P', '', '', 'E', '', '', '', 'A', '', 'R'],
          ['O', '', '', 'H', '', '', '', 'P', '', 'A'],
          ['N', '', '', 'R', '', '', '', 'U', '', 'N'],
          ['G', 'O', 'N', 'A', 'M', '', '', 'J', '', 'T'],
          ['A', '', '', '', '', '', '', 'A', '', 'I'],
          ['L', 'O', 'H', 'R', 'I', '', '', '', '', '']
        ]
      }
    },
    {
      id: 'wordsearch-festival',
      label: 'WordSearch - Festivals of India',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['P', 'O', 'N', 'G', 'A', 'L'],
            marker: [0, 0, 5, 0]
          },
          {
            word: ['L', 'O', 'H', 'R', 'I'],
            marker: [5, 0, 5, 4]
          },
          {
            word: ['D', 'U', 'S', 'S', 'E', 'H', 'R', 'A'],
            marker: [1, 2, 8, 9]
          },
          {
            word: ['D', 'U', 'R', 'G', 'A', 'P', 'U', 'J', 'A'],
            marker: [9, 0, 9, 8]
          },
          {
            word: ['O', 'N', 'A', 'M'],
            marker: [5, 1, 8, 1]
          },
          {
            word: ['S', 'A', 'N', 'K', 'R', 'A', 'N', 'T', 'I'],
            marker: [0, 1, 0, 9]
          },
          {
            word: ['V', 'I', 'S', 'H', 'U'],
            marker: [3, 2, 3, 6]
          },
          {
            word: ['D', 'I', 'W', 'A', 'L', 'I'],
            marker: [1, 2, 1, 7]
          }
        ],
        title: 'Find the given words from the table.',
        lang: 'en',
        table: [
          ['P', 'O', 'N', 'G', 'A', 'L', 'Q', 'I', 'O', 'D'],
          ['S', 'G', 'S', 'K', 'Z', 'O', 'N', 'A', 'M', 'U'],
          ['A', 'D', 'O', 'V', 'Q', 'H', 'T', 'E', 'Y', 'R'],
          ['N', 'I', 'U', 'I', 'P', 'R', 'R', 'B', 'A', 'G'],
          ['K', 'W', 'K', 'S', 'V', 'I', 'X', 'M', 'L', 'A'],
          ['R', 'A', 'C', 'H', 'S', 'B', 'Z', 'Y', 'B', 'P'],
          ['A', 'L', 'I', 'U', 'T', 'E', 'E', 'M', 'R', 'U'],
          ['N', 'I', 'V', 'P', 'W', 'N', 'H', 'T', 'I', 'J'],
          ['T', 'Z', 'S', 'Q', 'G', 'I', 'D', 'R', 'P', 'A'],
          ['I', 'X', 'I', 'Z', 'I', 'Z', 'U', 'X', 'A', 'G']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword-dance',
      type: 'crossword',
      label: 'Crossword - Indian Traditional Dances',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Kuchipudi',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Dance of Andhra Pradesh',
            direction: 'across'
          },
          {
            word: 'Dandiya',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'Famous dance of Gujarat',
            direction: 'down'
          },
          {
            word: 'Kathakali',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Famous dance in Kerala',
            direction: 'down'
          },
          {
            word: 'Odissi',
            marker: {
              x: 2,
              y: 4
            },
            hint: 'State dance in Odisha',
            direction: 'across'
          },
          {
            word: 'Bhangra',
            marker: {
              x: 1,
              y: 6
            },
            hint: 'Famous dance in Punjab ',
            direction: 'across'
          },
          {
            word: 'Manipuri',
            marker: {
              x: 9,
              y: 2
            },
            hint: 'Famous dance of Manipur',
            direction: 'down'
          },
          {
            word: 'Kathak',
            marker: {
              x: 0,
              y: 5
            },
            hint: 'Classical dance in Uttar Pradesh',
            direction: 'across'
          },
          {
            word: 'Ghumar',
            marker: {
              x: 1,
              y: 9
            },
            hint: 'Famous dance in Rajasthan',
            direction: 'across'
          }
        ],
        table: [
          ['K', 'U', 'C', 'H', 'I', 'P', 'U', 'D', 'I', ''],
          ['A', '', '', '', '', '', '', 'A', '', ''],
          ['T', '', '', '', '', '', '', 'N', '', 'M'],
          ['H', '', '', '', '', '', '', 'D', '', 'A'],
          ['A', '', 'O', 'D', 'I', 'S', 'S', 'I', '', 'N'],
          ['K', 'A', 'T', 'H', 'A', 'K', '', 'Y', '', 'I'],
          ['A', 'B', 'H', 'A', 'N', 'G', 'R', 'A', '', 'P'],
          ['L', '', '', '', '', '', '', '', '', 'U'],
          ['I', '', '', '', '', '', '', '', '', 'R'],
          ['', 'G', 'H', 'U', 'M', 'A', 'R', '', '', 'I']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-dance',
      type: 'wordsearch',
      label: 'WordSearch - Indian Traditional Dances',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['K', 'U', 'C', 'H', 'I', 'P', 'U', 'D', 'I'],
            marker: [0, 0, 8, 0]
          },
          {
            word: ['K', 'A', 'T', 'H', 'A', 'K', 'A', 'L', 'I'],
            marker: [0, 0, 0, 8]
          },
          {
            word: ['D', 'A', 'N', 'D', 'I', 'Y', 'A'],
            marker: [7, 0, 7, 6]
          },
          {
            word: ['K', 'A', 'T', 'H', 'A', 'K'],
            marker: [0, 0, 5, 5]
          },
          {
            word: ['M', 'A', 'N', 'I', 'P', 'U', 'R', 'I'],
            marker: [9, 0, 9, 7]
          },
          {
            word: ['B', 'H', 'A', 'N', 'G', 'R', 'A'],
            marker: [1, 6, 7, 6]
          },
          {
            word: ['O', 'D', 'I', 'S', 'S', 'I'],
            marker: [4, 7, 9, 7]
          }
        ],
        table: [
          ['K', 'U', 'C', 'H', 'I', 'P', 'U', 'D', 'I', 'M'],
          ['A', 'A', 'P', 'Y', 'W', 'G', 'C', 'A', 'L', 'A'],
          ['T', 'B', 'T', 'S', 'Q', 'L', 'D', 'N', 'W', 'N'],
          ['H', 'Z', 'G', 'H', 'Y', 'E', 'X', 'D', 'F', 'I'],
          ['A', 'Z', 'E', 'E', 'A', 'F', 'D', 'I', 'V', 'P'],
          ['K', 'J', 'A', 'C', 'Z', 'K', 'C', 'Y', 'U', 'U'],
          ['A', 'B', 'H', 'A', 'N', 'G', 'R', 'A', 'A', 'R'],
          ['L', 'S', 'U', 'Y', 'O', 'D', 'I', 'S', 'S', 'I'],
          ['I', 'L', 'O', 'U', 'A', 'G', 'C', 'N', 'L', 'B'],
          ['E', 'X', 'X', 'T', 'M', 'Y', 'Z', 'L', 'A', 'P']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
