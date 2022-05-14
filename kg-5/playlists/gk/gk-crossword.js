export default {
  id: 'gk-crossword',
  label: 'Crosswords',
  pdf: '',
  lockAfter: 1,
  list: [
    {
      id: 'crossword-sports',
      label: 'Sports',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'golf',
            marker: { x: 9, y: 0 },
            hint: 'It is a game played with club and ball',
            direction: 'down'
          },
          {
            word: 'basketball',
            marker: { x: 0, y: 2 },
            hint: 'In this game you score by throwing a ball through a hoop',
            direction: 'across'
          },
          {
            word: 'badminton',
            marker: { x: 1, y: 1 },
            hint: 'It is played with a racket and shuttlecock',
            direction: 'down'
          },
          {
            word: 'swimming',
            marker: { x: 2, y: 2 },
            hint: 'You can play it in a swimming pool',
            direction: 'down'
          },
          {
            word: 'tennis',
            marker: { x: 5, y: 2 },
            hint: 'You need racket and ball to play',
            direction: 'down'
          },
          {
            word: 'cricket',
            marker: { x: 3, y: 6 },
            hint:
              'It is played with bat and ball, it is also the name of an insect',
            direction: 'across'
          },
          {
            word: 'boxing',
            marker: { x: 1, y: 1 },
            hint: 'Fighting with opponent, require gloves',
            direction: 'across'
          },
          {
            word: 'chess',
            marker: { x: 8, y: 4 },
            hint: 'It is a board game associated with term checkmate',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', '', '', '', '', '', '', '', 'G'],
          ['', 'B', 'O', 'X', 'I', 'N', 'G', '', '', 'O'],
          ['B', 'A', 'S', 'K', 'E', 'T', 'B', 'A', 'L', 'L'],
          ['', 'D', 'W', '', '', 'E', '', '', '', 'F'],
          ['', 'M', 'I', '', '', 'N', '', '', 'C', ''],
          ['', 'I', 'M', '', '', 'N', '', '', 'H', ''],
          ['', 'N', 'M', 'C', 'R', 'I', 'C', 'K', 'E', 'T'],
          ['', 'T', 'I', '', '', 'S', '', '', 'S', ''],
          ['', 'O', 'N', '', '', '', '', '', 'S', ''],
          ['', 'N', 'G', '', '', '', '', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-nicknames',
      label: 'Nifty Nicknames',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'punjab',
            marker: { x: 0, y: 1 },
            hint: 'It is the land of five rivers',
            direction: 'across'
          },
          {
            word: 'kashmir',
            marker: { x: 2, y: 2 },
            hint: 'It is the paradise on earth',
            direction: 'across'
          },
          {
            word: 'kerala',
            marker: { x: 2, y: 2 },
            hint: "It is god's own earth",
            direction: 'down'
          },
          {
            word: 'mumbai',
            marker: { x: 1, y: 0 },
            hint: 'It is the city of seven islands',
            direction: 'down'
          },
          {
            word: 'jaipur',
            marker: { x: 7, y: 0 },
            hint: 'It is the pink city',
            direction: 'down'
          },
          {
            word: 'goa',
            marker: { x: 0, y: 7 },
            hint: 'It is called the pearl of the orient',
            direction: 'across'
          },
          {
            word: 'lucknow',
            marker: { x: 2, y: 6 },
            hint: 'It is the city of nawabs',
            direction: 'across'
          },
          {
            word: 'pune',
            marker: { x: 6, y: 4 },
            hint: 'It is called the deccan queen of India',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', 'M', '', '', '', '', '', 'J', ''],
          ['P', 'U', 'N', 'J', 'A', 'B', '', 'A', ''],
          ['', 'M', 'K', 'A', 'S', 'H', 'M', 'I', 'R'],
          ['', 'B', 'E', '', '', '', '', 'P', ''],
          ['', 'A', 'R', '', '', '', 'P', 'U', ''],
          ['', 'I', 'A', '', '', '', 'U', 'R', ''],
          ['', '', 'L', 'U', 'C', 'K', 'N', 'O', 'W'],
          ['G', 'O', 'A', '', '', '', 'E', '', '']
        ]
      }
    },
    {
      id: 'crossword-capitals',
      label: 'Capitals',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'hyderbad',
            marker: { x: 0, y: 1 },
            hint: 'It is the capital of Telengana',
            direction: 'across'
          },
          {
            word: 'jaipur',
            marker: { x: 6, y: 0 },
            hint: 'It is the capital of Rajasthan',
            direction: 'down'
          },
          {
            word: 'mumbai',
            marker: { x: 1, y: 2 },
            hint: 'It is the capital of Maharashtra',
            direction: 'across'
          },
          {
            word: 'Bhopal',
            marker: { x: 4, y: 2 },
            hint: 'It is the capital of Madhya Pradesh',
            direction: 'down'
          },
          {
            word: 'kolkata',
            marker: { x: 2, y: 7 },
            hint: 'It is the capital of West Bengal',
            direction: 'across'
          },
          {
            word: 'srinagar',
            marker: { x: 0, y: 6 },
            hint: 'It is the capital of Jammu and Kashmir',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', '', '', '', '', 'J', '', ''],
          ['H', 'Y', 'D', 'E', 'R', 'B', 'A', 'D', ''],
          ['', 'M', 'U', 'M', 'B', 'A', 'I', '', ''],
          ['', '', '', '', 'H', '', 'P', '', ''],
          ['', '', '', '', 'O', '', 'U', '', ''],
          ['', '', '', '', 'P', '', 'R', '', ''],
          ['S', 'R', 'I', 'N', 'A', 'G', 'A', 'R', ''],
          ['', '', 'K', 'O', 'L', 'K', 'A', 'T', 'A']
        ]
      }
    },
    {
      id: 'crossword-comics',
      label: 'Comics Camp',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'spiderman',
            marker: { x: 0, y: 1 },
            hint:
              'He is a schoolboy by day, crime fighter by night, his powers come from an insect bite',
            direction: 'across'
          },
          {
            word: 'batman',
            marker: { x: 7, y: 0 },
            hint: 'You know him as Bruce Wayne, villains know him as',
            direction: 'down'
          },
          {
            word: 'snowy',
            marker: { x: 0, y: 1 },
            hint: 'I am Tintins dog',
            direction: 'down'
          },
          {
            word: 'dora',
            marker: { x: 3, y: 1 },
            hint: 'I like to go on adventure with my friend boots',
            direction: 'down'
          },
          {
            word: 'jafar',
            marker: { x: 2, y: 4 },
            hint: "I am Alladin's enemy",
            direction: 'across'
          },
          {
            word: 'gary',
            marker: { x: 1, y: 3 },
            hint: "I am Spongebob's pet snail",
            direction: 'across'
          },
          {
            word: 'Dory',
            marker: { x: 2, y: 2 },
            hint:
              "I am Nemo's friend and have trouble remembering things. I am a blue fish",
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', '', '', '', '', '', 'B', ''],
          ['S', 'P', 'I', 'D', 'E', 'R', 'M', 'A', 'N'],
          ['N', '', 'D', 'O', 'R', 'Y', '', 'T', ''],
          ['O', 'G', 'A', 'R', 'Y', '', '', 'M', ''],
          ['W', '', 'J', 'A', 'F', 'A', 'R', 'A', ''],
          ['Y', '', '', '', '', '', '', 'N', '']
        ]
      }
    }
  ]
};
