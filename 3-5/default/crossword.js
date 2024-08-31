export default {
  label: 'Crossword',
  id: 'crossword',
  img: 'crossword',
  grade: '3-8',
  lockAfter: 10,
  list: [
    {
      id: 'animals',
      type: 'crossword',
      label: 'Animals',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'whale',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'the biggest animal',
            direction: 'down'
          },
          {
            word: 'horse',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'a pet animal that can give you a ride',
            direction: 'across'
          },
          {
            word: 'zebra',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'a black and white animal',
            direction: 'down'
          },
          {
            word: 'elephant',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'the biggest animal on land',
            direction: 'across'
          },
          {
            word: 'lion',
            marker: {
              x: 6,
              y: 3
            },
            hint: 'king of the jungle',
            direction: 'down'
          },
          {
            word: 'monkey',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'an animal that jumps from tree to tree',
            direction: 'down'
          },
          {
            word: 'cat',
            marker: {
              x: 5,
              y: 5
            },
            hint: 'a pet animal that likes milk',
            direction: 'down'
          },
          {
            word: 'dog',
            marker: {
              x: 1,
              y: 3
            },
            hint: "man's best friend",
            direction: 'across'
          },
          {
            word: 'bear',
            marker: {
              x: 4,
              y: 2
            },
            hint: 'a fat animal that can stand on two feet',
            direction: 'across'
          },
          {
            word: 'frog',
            marker: {
              x: 7,
              y: 1
            },
            hint: 'a small hopping animal',
            direction: 'down'
          }
        ],
        table: [
          ['W', '', '', '', 'Z', '', '', ''],
          ['H', 'O', 'R', 'S', 'E', '', '', 'F'],
          ['A', '', 'M', '', 'B', 'E', 'A', 'R'],
          ['L', 'D', 'O', 'G', 'R', '', 'L', 'O'],
          ['E', '', 'N', '', 'A', '', 'I', 'G'],
          ['', '', 'K', '', '', 'C', 'O', ''],
          ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'],
          ['', '', 'Y', '', '', 'T', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: 'Vehicle',
      type: 'crossword',
      label: 'Vehicle',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'train',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a long vehicle',
            direction: 'across'
          },
          {
            word: 'truck',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a vehicle to carry load',
            direction: 'down'
          },
          {
            word: 'crane',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'a vehicle with the name of a bird',
            direction: 'down'
          },
          {
            word: 'car',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'a small closed vehicle for a family',
            direction: 'across'
          },
          {
            word: 'coach',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'a part of  a train',
            direction: 'across'
          },
          {
            word: 'wheel',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'a circular part that helps vehicle move',
            direction: 'across'
          },
          {
            word: 'fuel',
            marker: {
              x: 3,
              y: 4
            },
            hint: 'essential liquid that makes vehicle move',
            direction: 'down'
          },
          {
            word: 'ship',
            marker: {
              x: 6,
              y: 1
            },
            hint: 'the biggest vehicle in earth',
            direction: 'down'
          },
          {
            word: 'bus',
            marker: {
              x: 4,
              y: 1
            },
            hint: 'a public transport on road',
            direction: 'across'
          },
          {
            word: 'boat',
            marker: {
              x: 4,
              y: 5
            },
            hint: 'a common vehicle on a  small lake',
            direction: 'across'
          },
          {
            word: 'tractor',
            marker: {
              x: 7,
              y: 1
            },
            hint: 'a vehicle used in farm',
            direction: 'down'
          }
        ],
        table: [
          ['T', 'R', 'A', 'I', 'N', '', '', ''],
          ['R', '', '', '', 'B', 'U', 'S', 'T'],
          ['U', '', 'C', 'O', 'A', 'C', 'H', 'R'],
          ['C', 'A', 'R', '', '', '', 'I', 'A'],
          ['K', '', 'A', 'F', '', '', 'P', 'C'],
          ['', '', 'N', 'U', 'B', 'O', 'A', 'T'],
          ['W', 'H', 'E', 'E', 'L', '', '', 'O'],
          ['', '', '', 'L', '', '', '', 'R']
        ],
        lang: 'en'
      }
    },
    {
      id: 'ocean',
      type: 'crossword',
      label: 'Ocean',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'pacific',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'the biggest ocean',
            direction: 'across'
          },
          {
            word: 'china',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'the biggest country by population',
            direction: 'down'
          },
          {
            word: 'atlantic',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'the ocean between America and Africa',
            direction: 'across'
          },
          {
            word: 'blue',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'the color of ocean',
            direction: 'down'
          },
          {
            word: 'anchor',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'used to keep a ship in one place',
            direction: 'down'
          },
          {
            word: 'ocean',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'the biggest water body on earth',
            direction: 'across'
          },
          {
            word: 'sea',
            marker: {
              x: 2,
              y: 5
            },
            hint: 'A big water body but smaller than a ocean',
            direction: 'down'
          },
          {
            word: 'salt',
            marker: {
              x: 2,
              y: 5
            },
            hint: 'the taste of ocean water',
            direction: 'across'
          },
          {
            word: 'whale',
            marker: {
              x: 7,
              y: 3
            },
            hint: 'the biggest animal in ocean',
            direction: 'down'
          },
          {
            word: 'shore',
            marker: {
              x: 3,
              y: 7
            },
            hint: 'the place where the ocean meets the land',
            direction: 'across'
          }
        ],
        table: [
          ['P', 'A', 'C', 'I', 'F', 'I', 'C', ''],
          ['', '', 'B', '', '', '', 'H', ''],
          ['A', 'T', 'L', 'A', 'N', 'T', 'I', 'C'],
          ['N', '', 'U', '', '', '', 'N', 'W'],
          ['C', '', 'E', '', '', '', 'A', 'H'],
          ['H', '', 'S', 'A', 'L', 'T', '', 'A'],
          ['O', 'C', 'E', 'A', 'N', '', '', 'L'],
          ['R', '', 'A', 'S', 'H', 'O', 'R', 'E']
        ],
        lang: 'en'
      }
    },
    {
      type: 'crossword',
      id: 'opposites',
      label: 'Opposites',
      data: {
        words: [
          {
            hint: 'opposite of buy',
            word: 'sell',
            direction: 'across',
            marker: { x: 0, y: 0 }
          },
          {
            hint: 'Opposite of right',
            word: 'left',
            direction: 'down',
            marker: { x: 2, y: 0 }
          },
          {
            hint: 'Opposite of early',
            word: 'late',
            direction: 'across',
            marker: { x: 0, y: 3 }
          },
          {
            hint: 'Opposite of last',
            word: 'first',
            direction: 'across',
            marker: { x: 2, y: 2 }
          },
          {
            hint: 'Opposite of cheap',
            word: 'costly',
            direction: 'down',
            marker: { x: 5, y: 0 }
          },
          {
            hint: 'Opposite of wide',
            word: 'narrow',
            direction: 'down',
            marker: { x: 1, y: 2 }
          },
          {
            hint: 'opposite of black',
            word: 'white',
            direction: 'across',
            marker: { x: 1, y: 7 }
          },
          {
            hint: 'Opposite of cooked',
            word: 'raw',
            direction: 'down',
            marker: { x: 4, y: 2 }
          },
          {
            hint: 'Opposite of soft',
            word: 'hard',
            direction: 'across',
            marker: { x: 4, y: 6 }
          },
          {
            hint: 'Opposite of hot',
            word: 'cold',
            direction: 'down',
            marker: { x: 7, y: 3 }
          }
        ],
        table: [
          ['S', 'E', 'L', 'L', '', 'C', '', ''],
          ['', '', 'E', '', '', 'O', '', ''],
          ['', 'N', 'F', 'I', 'R', 'S', 'T', ''],
          ['L', 'A', 'T', 'E', 'A', 'T', '', 'C'],
          ['', 'R', '', '', 'W', 'L', '', 'O'],
          ['', 'R', '', '', '', 'Y', '', 'L'],
          ['', 'O', '', '', 'H', 'A', 'R', 'D'],
          ['', 'W', 'H', 'I', 'T', 'E', '', '']
        ],
        title: 'Opposites'
      }
    },
    {
      type: 'crossword',
      id: 'farm',
      label: 'A Farm',
      data: {
        words: [
          {
            marker: { y: 0, x: 1 },
            direction: 'across',
            word: 'crop',
            hint: 'Yield of a planted field'
          },
          {
            marker: { y: 2, x: 4 },
            direction: 'across',
            word: 'plow',
            hint: 'This machine digs up fields'
          },
          {
            marker: { y: 4, x: 2 },
            direction: 'across',
            word: 'farm',
            hint: 'A place where animals and crops are raised.'
          },
          {
            marker: { y: 5, x: 1 },
            direction: 'across',
            word: 'sit',
            hint: 'Opposite of stand'
          },
          {
            marker: { y: 5, x: 5 },
            direction: 'across',
            word: 'bag',
            hint: 'sack to carry feed in'
          },
          {
            marker: { y: 6, x: 0 },
            direction: 'across',
            word: 'horse',
            hint: 'An animal to ride on'
          },
          {
            marker: { y: 8, x: 0 },
            direction: 'across',
            word: 'goose',
            hint: 'A long necked bird which honks'
          },
          {
            marker: { y: 0, x: 4 },
            direction: 'down',
            word: 'pup',
            hint: 'A baby dog'
          },
          {
            marker: { y: 0, x: 7 },
            direction: 'down',
            word: 'cow',
            hint: 'An animal that gives milk'
          },
          {
            marker: { y: 2, x: 5 },
            direction: 'down',
            word: 'lamb',
            hint: 'A baby sheep'
          },
          {
            marker: { y: 3, x: 3 },
            direction: 'down',
            word: 'cats',
            hint: 'Animals that chase mice.'
          },
          {
            marker: { y: 4, x: 2 },
            direction: 'down',
            word: 'fir',
            hint: 'A kind of evergreen tree'
          },
          {
            marker: { y: 5, x: 1 },
            direction: 'down',
            word: 'so',
            hint: 'Word that rhyme with go'
          },
          {
            marker: { y: 5, x: 7 },
            direction: 'down',
            word: 'goat',
            hint: 'Animal with horns'
          },
          {
            marker: { y: 6, x: 0 },
            direction: 'down',
            word: 'hog',
            hint: 'Another word for pig'
          },
          {
            marker: { y: 6, x: 4 },
            direction: 'down',
            word: 'eye',
            hint: 'What we see with'
          },
          {
            hint: 'vegetables are stored in _____ place.',
            word: 'cold',
            direction: 'down',
            marker: { x: 1, y: 0 }
          },
          {
            hint: 'everything',
            word: 'all',
            direction: 'across',
            marker: { x: 0, y: 2 }
          }
        ],
        table: [
          ['', 'C', 'R', 'O', 'P', '', '', 'C'],
          ['', 'O', '', '', 'U', '', '', 'O'],
          ['A', 'L', 'L', '', 'P', 'L', 'O', 'W'],
          ['', 'D', '', 'C', '', 'A', '', ''],
          ['', '', 'F', 'A', 'R', 'M', '', ''],
          ['', 'S', 'I', 'T', '', 'B', 'A', 'G'],
          ['H', 'O', 'R', 'S', 'E', '', '', 'O'],
          ['O', '', '', '', 'Y', '', '', 'A'],
          ['G', 'O', 'O', 'S', 'E', '', '', 'T']
        ],
        title: 'A Farm'
      }
    },
    {
      type: 'crossword',
      label: 'Simple Crosswords',
      id: 'simple',
      lockAfter: 2,
      data: [
        {
          words: [
            {
              hint: 'The third month',
              word: 'march',
              direction: 'across',
              marker: { x: 0, y: 0 }
            },
            {
              hint: "Poor man's house",
              word: 'hut',
              direction: 'down',
              marker: { x: 4, y: 0 }
            },
            {
              hint: 'smallest 2 digit number',
              word: 'ten',
              direction: 'across',
              marker: { x: 4, y: 2 }
            },
            {
              hint: 'A neighbouring planet',
              word: 'mars',
              direction: 'down',
              marker: { x: 0, y: 0 }
            },
            {
              hint: 'A hopping animal',
              word: 'rabbit',
              direction: 'down',
              marker: { x: 2, y: 0 }
            },
            {
              hint: 'Bigger Town',
              word: 'city',
              direction: 'across',
              marker: { x: 1, y: 4 }
            },
            {
              hint: 'largest single digit number',
              word: 'nine',
              direction: 'down',
              marker: { x: 6, y: 2 }
            },
            {
              hint: 'compel someone to do something',
              word: 'urge',
              direction: 'across',
              marker: { x: 4, y: 1 }
            },
            {
              hint: 'A big bird that fly high',
              word: 'eagle',
              direction: 'down',
              marker: { x: 7, y: 1 }
            }
          ],
          table: [
            ['M', 'A', 'R', 'C', 'H', '', '', ''],
            ['A', '', 'A', '', 'U', 'R', 'G', 'E'],
            ['R', '', 'B', '', 'T', 'E', 'N', 'A'],
            ['S', '', 'B', '', '', '', 'I', 'G'],
            ['', 'C', 'I', 'T', 'Y', '', 'N', 'L'],
            ['', '', 'T', '', '', '', 'E', 'E']
          ],
          title: 'Simple Crossword'
        },
        {
          words: [
            {
              hint: 'an important organ inside the head which you think with.',
              word: 'brain',
              direction: 'across',
              marker: { x: 0, y: 0 }
            },
            {
              hint: 'the covering on top of our house',
              word: 'roof',
              direction: 'down',
              marker: { x: 1, y: 0 }
            },
            {
              hint: 'a body part - we have 20 in number',
              word: 'finger',
              direction: 'across',
              marker: { x: 1, y: 3 }
            },
            {
              hint: 'Saturday and Sunday',
              word: 'holiday',
              direction: 'across',
              marker: { x: 0, y: 2 }
            },
            {
              hint: 'ancient vehicle - also an animal',
              word: 'horse',
              direction: 'down',
              marker: { x: 0, y: 2 }
            },
            {
              hint: 'asking the reason',
              word: 'why',
              direction: 'down',
              marker: { x: 6, y: 0 }
            },
            {
              hint: 'a huge boat',
              word: 'ship',
              direction: 'across',
              marker: { x: 0, y: 5 }
            },
            {
              hint: 'a musical instrument with many white and black keys',
              word: 'piano',
              direction: 'across',
              marker: { x: 3, y: 5 }
            },
            {
              hint: 'what we do when a dog is chasing?',
              word: 'run',
              direction: 'down',
              marker: { x: 6, y: 3 }
            }
          ],
          table: [
            ['B', 'R', 'A', 'I', 'N', '', 'W', ''],
            ['', 'O', '', '', '', '', 'H', ''],
            ['H', 'O', 'L', 'I', 'D', 'A', 'Y', ''],
            ['O', 'F', 'I', 'N', 'G', 'E', 'R', ''],
            ['R', '', '', '', '', '', 'U', ''],
            ['S', 'H', 'I', 'P', 'I', 'A', 'N', 'O'],
            ['E', '', '', '', '', '', '', '']
          ],
          title: 'Crossword - grade 4'
        },
        {
          words: [
            {
              hint: 'a dangerous huge fish with sharp teeth',
              word: 'shark',
              direction: 'across',
              marker: { x: 0, y: 0 }
            },
            {
              hint: 'A large water body but smaller than an ocean',
              word: 'sea',
              direction: 'down',
              marker: { x: 0, y: 0 }
            },
            {
              hint: 'permitted to do',
              word: 'allowed',
              direction: 'across',
              marker: { x: 0, y: 2 }
            },
            {
              hint: 'a house has many _____.',
              word: 'rooms',
              direction: 'down',
              marker: { x: 3, y: 0 }
            },
            {
              hint: 'a large dark animal',
              word: 'elephant',
              direction: 'across',
              marker: { x: 0, y: 6 }
            },
            {
              hint: 'when it is not small',
              word: 'large',
              direction: 'down',
              marker: { x: 2, y: 2 }
            },
            {
              hint: 'additional (in plural)',
              word: 'extras',
              direction: 'down',
              marker: { x: 5, y: 2 }
            },
            {
              hint: 'the place where aeroplanes meet',
              word: 'airport',
              direction: 'down',
              marker: { x: 7, y: 0 }
            },
            {
              hint: 'a balloon will ______ when it kiss a needle.',
              word: 'burst',
              direction: 'across',
              marker: { x: 0, y: 4 }
            }
          ],
          table: [
            ['S', 'H', 'A', 'R', 'K', '', '', 'A'],
            ['E', '', '', 'O', '', '', '', 'I'],
            ['A', 'L', 'L', 'O', 'W', 'E', 'D', 'R'],
            ['', '', 'A', 'M', '', 'X', '', 'P'],
            ['B', 'U', 'R', 'S', 'T', 'T', '', 'O'],
            ['', '', 'G', '', '', 'R', '', 'R'],
            ['E', 'L', 'E', 'P', 'H', 'A', 'N', 'T'],
            ['', '', '', '', '', 'S', '', '']
          ],
          title: 'Crossword - grade 5'
        }
        // new addition
      ]
    }
    /*
    {
      id: '1645739854400',
      editable: true,
      type: 'crossword',
      label: 'human body',
      data: {
        title: '',
        words: [
          {
            word: 'pupil',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Black spot in the eye',
            direction: 'across'
          },
          {
            word: 'skin',
            marker: {
              x: 9,
              y: 4
            },
            hint: 'Organ that covers our body',
            direction: 'across2'
          },
          {
            word: 'brain',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'This holds our memories',
            direction: 'down'
          },
          {
            word: 'nerves',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'These act like "wires" sending signals around our body',
            direction: 'across'
          },
          {
            word: 'eyes',
            marker: {
              x: 1,
              y: 9
            },
            hint: 'We need these to see',
            direction: 'down2'
          },
          {
            word: 'senses',
            marker: {
              x: 4,
              y: 2
            },
            hint: 'Sight, sound, smell, taste, and touch',
            direction: 'down'
          },
          {
            word: 'tendons',
            marker: {
              x: 3,
              y: 6
            },
            hint: 'These connect muscles to bones',
            direction: 'across'
          },
          {
            word: 'tongue',
            marker: {
              x: 3,
              y: 6
            },
            hint: 'What we use to taste with',
            direction: 'down2'
          },
          {
            word: 'ears',
            marker: {
              x: 7,
              y: 2
            },
            hint: 'It has an outer, a middle, and an inner',
            direction: 'across2'
          },
          {
            word: 'eardrum',
            marker: {
              x: 3,
              y: 8
            },
            hint: 'This thin membrane vibrates when sound hits it',
            direction: 'across'
          },
          {
            word: 'bones',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'The skeleton is made up of ______',
            direction: 'down'
          },
          {
            word: 'femur',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'longest bone in the human body',
            direction: 'across'
          },
          {
            word: 'stapes ',
            marker: {
              x: 4,
              y: 7
            },
            hint:
              '_____ is the smallest bone in the human body present in middle ear',
            direction: 'across'
          },
          {
            word: 'spine',
            marker: {
              x: 9,
              y: 4
            },
            hint: 'it made of 33 bones in your back',
            direction: 'down2'
          },
          {
            word: 'nose',
            marker: {
              x: 1,
              y: 4
            },
            hint: 'organ that senses smell',
            direction: 'down'
          }
        ],
        table: [
          ['P', 'U', 'P', 'I', 'L', '', 'B', '', '', 'E'],
          ['B', '', 'F', 'E', 'M', 'U', 'R', '', '', 'N'],
          ['O', '', '', 'U', 'S', 'R', 'A', 'E', '', 'I'],
          ['N', '', '', 'G', 'E', '', 'I', '', '', 'P'],
          ['E', 'N', '', 'N', 'N', '', 'N', 'I', 'K', 'S'],
          ['S', 'O', '', 'O', 'S', '', '', '', '', ''],
          ['', 'S', '', 'T', 'E', 'N', 'D', 'O', 'N', 'S'],
          ['', 'E', '', '', 'S', 'T', 'A', 'P', 'E', 'S'],
          ['', 'Y', '', 'E', 'A', 'R', 'D', 'R', 'U', 'M'],
          ['N', 'E', 'R', 'V', 'E', 'S', '', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: '1647495295287',
      editable: true,
      type: 'crossword',
      label: 'inventions',
      data: {
        title: 'Discoveries & Inventions',
        words: [
          {
            word: 'telephone',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Alexander Graham Bell invented this ___',
            direction: 'across'
          },
          {
            word: 'marconi',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'pioneer of radio transformation',
            direction: 'down'
          },
          {
            word: 'Einstein',
            marker: {
              x: 8,
              y: 0
            },
            hint: '______ came up with the Theory of relativity',
            direction: 'down'
          },
          {
            word: 'Airplane',
            marker: {
              x: 3,
              y: 7
            },
            hint: 'The Wright Brothers invented _________',
            direction: 'down2'
          },
          {
            word: 'newton',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'Who discovered universal gravitation?',
            direction: 'down'
          },
          {
            word: 'fire',
            marker: {
              x: 4,
              y: 6
            },
            hint: 'What was the greatest discovery of early humans?\n',
            direction: 'across'
          },
          {
            word: 'charles',
            marker: {
              x: 1,
              y: 7
            },
            hint: 'father of computer _____ Babbage',
            direction: 'across'
          },
          {
            word: 'Edison',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'Electric light bulb was invented by Thomas Alva ____',
            direction: 'down'
          },
          {
            word: 'bill',
            marker: {
              x: 5,
              y: 1
            },
            hint: '____Gates is the founder of Microsoft.',
            direction: 'down'
          }
        ],
        table: [
          ['T', 'E', 'L', 'E', 'P', 'H', 'O', 'N', 'E'],
          ['M', 'D', '', 'N', '', 'B', '', 'E', 'I'],
          ['A', 'I', '', 'A', '', 'I', '', 'W', 'N'],
          ['R', 'S', '', 'L', '', 'L', '', 'T', 'S'],
          ['C', 'O', '', 'P', '', 'L', '', 'O', 'T'],
          ['O', 'N', '', 'R', '', '', '', 'N', 'E'],
          ['N', '', '', 'I', 'F', 'I', 'R', 'E', 'I'],
          ['I', 'C', 'H', 'A', 'R', 'L', 'E', 'S', 'N']
        ],
        lang: 'en'
      }
    }
    */
  ]
};
