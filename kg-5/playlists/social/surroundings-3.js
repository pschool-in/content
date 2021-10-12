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
        text: `A Sanctuary is a place where animals and birds are protected from hunting and other human activities. Sanctuaries are run by the government. Our government also runs  biosphere reserves and national parks. They conserve plants, wild animals, birds, rare and diverse species. 
For example, Jim Corbett National Park, present in Uttarakhand is a well known national park. The majestic Bengal Tigers are protected there.
In Sunderbans National Park, present in West Bengal, also Bengal tigers are protected. Due to the successful conservation efforts of 'Project Tiger', the number of tigers have been increased in India.
The Nilgiri Biosphere Reserve has elephants, Indian leopard, Black panther and Nilgiri tahr.
Vedanthangal Bird Sanctuary is famous for migrating birds that come from different countries. Some birds move from one place to another due to change in seasons.
Kaziranga National Park in Assam, is the home of one-horned rhinoceros. It has around two-thirds of all rhinoceros in the world. Due to the successful conservation efforts, the number of one-horned rhinoceros have been increased.
Gir National Park in Gujarat has Asiatic Lions. This is the only forest in India where we can sea lions.`
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
        text: `*Vendanthangal* Sanctuary is famous for migrating birds.
*Gir* forest is famous for lions.
*Kaziranga* National Park in Assam, is the home of one-horned rhinoceros.
The *Nilgiri* Biosphere Reserve has elephants, Indian leopard, Black panther.
*Jim Corbett* National Park is known for majestic Bengal tigers.`
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
In Vedanthangal Bird Sanctuary, birds migrate from different countries.`
          },
          {
            name: 'False',
            text: `In Nilgiri Biosphere Reserve, you can find only elephants.
Kaziranga National Park is present in West Bengal.`
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
        Nilgiri, Elephants
          Gir Park, Lions
          Bandipur, Tigers
          Botanical Garden, Flora`,
        title: 'Match the following'
      }
    },
    {
      id: 'match-park-place',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Kaziranga, Assam
Sunderbans, West Bengal
Vendanthangal, Tamil Nadu
Jim Corbett, Uttarakhand
Gir Park, Gujarat `,
        title: 'Match the following'
      }
    },
    /*
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
    */
    {
      label: 'Choose the best Answer ',
      id: '1000',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Kaziranga National Park is famous for _____________.',
            options: 'one horned rhinoceros, elephants, tigers, lions'
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
