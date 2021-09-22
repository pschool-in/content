export default {
  id: 'surroundings-3',
  label: 'Surroundings-3',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Sanctuaries - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Sanctuaries',
        text: `# What are Sanctuaries?

          Sanctuary is a place, where animals and birds are kept together. They are protected from hunting and other harmful human activities. They can lead a peaceful life with a good ecosystem. Sanctuaries are run by the government. Our government also runs the biosphere reserves, national parks, sanctuaries. They conserve plants, wild animals, birds, rare and diverse species. 
          For example, Jim Corbett National Park is known for Bengal tigers. The conservation efforts created a huge impact in saving wild animals. Many wild animal populations which had once decreased have once again started to increase in India.`
      }
    },
    {
      label: 'Wildlife Sanctuaries Vs National Parks',
      id: '300',
      type: 'group',
      data: {
        title:
          'Classify the below things based on the category of Wildlife Sanctuaries and National Parks in India.',
        types: [
          {
            name: 'Wildlife Sanctuaries',
            text: 'Govind, Mudumalai, Periyar, Bharatpur'
          },
          {
            name: 'National Parks',
            text: ' Anamudi Shola, Anshi, Balphakram, Betla'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Vendanthangal Sanctuary is famous for *birds*.
          Bannerghatta Biological Park is situated in *Karnataka*.
          The Acharya Jagadish Chandra Bose Indian Botanic Garden is situated in *West Bengal*.
          *Manas National park* is a biosphere reserve situated in Assam.
          *Wildlife Sanctuary* is established to protect wild animals and birds.`
      }
    },
    {
      label: 'True or False',
      id: '200',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Mudumalai Sanctuary is located in Tamil Nadu.
              Birds and animals move from one place to another place because of seasonal changes.
              In Vedanthangal Bird Sanctuary, birds migrate from different countries of the world.`
          },
          {
            name: 'False',
            text: `Nilgiri Biosphere Reserve is only for elephants.
              Gulf of Mannar Biosphere Reserve is located in Madhya Pradesh.`
          }
        ]
      }
    },
    {
      id: '500',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Vendanthangal, Birds
          Anamudi, Elephants
          Gir Park, Lions
          Bandipur, Tigers
          Botanical Garden, Flora`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Kurinchi flower blossoms only once in *12 (10)* years.
          Vedanthangal Bird Sanctuary is the very oldest water *birds (animals)* sanctuary in India.
          There are *three (four)* biosphere reserves in Tamil Nadu.
          Padmaja Naidu Himalayan Zoological Park is situated in *West Bengal (Maharashtra)*.
          Botanical gardens are there to maintain the extinct *plants (animals)* species.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: '1000',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Kaziranga National Park is famous for _____________.',
            options: 'One horned rhinoceros, Elephants, Tigers, Lions'
          },
          {
            qText: 'Vedanthangal Bird Sanctuary is located in _____________',
            options: 'Tamil Nadu, Madhya Pradesh, Goa, West Bengal'
          },
          {
            qText: 'Gir National Park is famous for ________',
            options:
              'Asiatic Lions, Asiatic Tigers, Asiatic Giraffes, Asiatic Elephants'
          },
          {
            qText: 'Sundarbans National Park is famous for ___________',
            options: 'Tigers, Bears, Deers, Cheetahs'
          },
          {
            qText: 'Jim Corbett National Park is situated at ___________',
            options: 'Uttarakhand, Goa, Karnataka, Kerala'
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch - Sanctuaries',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['A', 'N', 'A', 'M', 'U', 'D', 'I'],
            marker: [0, 0, 6, 6]
          },
          {
            word: ['B', 'A', 'N', 'D', 'I', 'P', 'U', 'R'],
            marker: [2, 1, 2, 8]
          },
          {
            word: ['G', 'I', 'R', 'P', 'A', 'R', 'K'],
            marker: [9, 0, 9, 6]
          },
          {
            word: ['S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N'],
            marker: [1, 7, 9, 7]
          },
          {
            word: ['M', 'U', 'D', 'U', 'M', 'A', 'L', 'A', 'I'],
            marker: [8, 0, 8, 8]
          },
          {
            word: ['K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A'],
            marker: [0, 9, 8, 9]
          }
        ],
        table: [
          ['A', 'U', 'M', 'G', 'L', 'R', 'W', 'D', 'M', 'G'],
          ['P', 'N', 'B', 'Z', 'W', 'F', 'T', 'F', 'U', 'I'],
          ['B', 'G', 'A', 'M', 'Q', 'M', 'F', 'W', 'D', 'R'],
          ['F', 'R', 'N', 'M', 'T', 'A', 'D', 'Q', 'U', 'P'],
          ['V', 'S', 'D', 'B', 'U', 'Q', 'Q', 'L', 'M', 'A'],
          ['E', 'P', 'I', 'Q', 'K', 'D', 'S', 'J', 'A', 'R'],
          ['T', 'U', 'P', 'B', 'M', 'D', 'I', 'M', 'L', 'K'],
          ['O', 'S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N'],
          ['I', 'E', 'R', 'N', 'I', 'Z', 'E', 'K', 'I', 'H'],
          ['K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A', 'T']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword',
      type: 'crossword',
      label: 'Crossword - Sanctuaries',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Girpark',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'National park  for Asiatic Lions',
            direction: 'down'
          },
          {
            word: 'Sundarbans ',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'National park for Tigers',
            direction: 'across'
          },
          {
            word: 'Kaziranga',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'National park for one horned rhinoceros',
            direction: 'across'
          },
          {
            word: 'ANAMUDI',
            marker: {
              x: 9,
              y: 0
            },
            hint: 'Sanctuaries for elephants',
            direction: 'down'
          },
          {
            word: 'KURINJI',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'flower blossoms only once in 12 years',
            direction: 'down'
          },
          {
            word: 'JimCorbett',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'National park in Uttarakhand',
            direction: 'across'
          }
        ],
        table: [
          ['G', '', '', '', '', 'K', '', '', '', 'A'],
          ['I', '', '', '', '', 'U', '', '', '', 'N'],
          ['R', 'K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A'],
          ['P', '', '', '', '', 'I', '', '', '', 'M'],
          ['A', '', '', '', '', 'N', '', '', '', 'U'],
          ['R', '', '', '', '', 'J', '', '', '', 'D'],
          ['K', '', '', '', '', 'I', '', '', '', 'I'],
          ['J', 'I', 'M', 'C', 'O', 'R', 'B', 'E', 'T', 'T'],
          ['', '', '', '', '', '', '', '', '', ''],
          ['S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N', 'S']
        ],
        lang: 'en'
      }
    }
  ]
};
