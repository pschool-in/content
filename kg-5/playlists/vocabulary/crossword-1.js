export default {
  label: 'Crossword Collection',
  id: 'crossword-1',
  lockAfter: 2,
  list: [
    {
      id: 'kitchen',
      type: 'crossword',
      label: 'Kitchen',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'spoon',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'a small object used to drink soup',
            direction: 'down'
          },
          {
            word: 'knife',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'a tool used to cut vegetables.',
            direction: 'across'
          },
          {
            word: 'plate',
            marker: {
              x: 1,
              y: 1
            },
            hint: 'a flat object on which food is served.',
            direction: 'across'
          },
          {
            word: 'fork',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'a small object used to eat noodles',
            direction: 'across'
          },
          {
            word: 'heat',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'to cook food, we ______ them.',
            direction: 'down'
          },
          {
            word: 'salt',
            marker: {
              x: 0,
              y: 6
            },
            hint:
              'we get it from sea, white in color, added in small quantity while cooking',
            direction: 'down'
          },
          {
            word: 'sugar',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'used to make sweets',
            direction: 'across'
          },
          {
            word: 'gas',
            marker: {
              x: 4,
              y: 5
            },
            hint: 'Fuel used to cook',
            direction: 'across'
          },
          {
            word: 'stove',
            marker: {
              x: 6,
              y: 5
            },
            hint: 'Tool used to heat',
            direction: 'down'
          },
          {
            word: 'love',
            marker: {
              x: 3,
              y: 9
            },
            hint: 'food needs to be prepared with _____ and care.',
            direction: 'across'
          }
        ],
        table: [
          ['', 'S', '', '', '', 'H', ''],
          ['', 'P', 'L', 'A', 'T', 'E', ''],
          ['F', 'O', 'R', 'K', '', 'A', ''],
          ['', 'O', '', '', '', 'T', ''],
          ['K', 'N', 'I', 'F', 'E', '', ''],
          ['', '', '', '', 'G', 'A', 'S'],
          ['S', 'U', 'G', 'A', 'R', '', 'T'],
          ['A', '', '', '', '', '', 'O'],
          ['L', '', '', '', '', '', 'V'],
          ['T', '', '', 'L', 'O', 'V', 'E']
        ],
        lang: 'en'
      }
    },
    {
      id: 'adjective',
      type: 'crossword',
      label: 'Adjective',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'old',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'our grand parents are _____ in age',
            direction: 'across'
          },
          {
            word: 'last',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'opposite of first',
            direction: 'down'
          },
          {
            word: 'sharp',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'to cut properly, a knife should be _____',
            direction: 'across'
          },
          {
            word: 'boring',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'It is not an interesting movie. It is _______.',
            direction: 'down'
          },
          {
            word: 'big',
            marker: {
              x: 2,
              y: 5
            },
            hint: 'An elephant is not small. It is ____.',
            direction: 'across'
          },
          {
            word: 'busy',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'My mom has lot of works to do. She is always _____.',
            direction: 'across'
          },
          {
            word: 'straight',
            marker: {
              x: 6,
              y: 0
            },
            hint:
              'The shortest distance between two points is a ________ line.',
            direction: 'down'
          },
          {
            word: 'twenty',
            marker: {
              x: 2,
              y: 7
            },
            hint:
              'Numbers can be used as adjective. Smallest number divisible by 20 is ________.',
            direction: 'across'
          },
          {
            word: 'rainy',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'carry an umbralla on a ______ day',
            direction: 'down'
          },
          {
            word: 'nice',
            marker: {
              x: 0,
              y: 6
            },
            hint: `Don't hate others. We have to be kind and _____ to others.`,
            direction: 'across'
          }
        ],
        table: [
          ['O', 'L', 'D', '', 'B', 'U', 'S', 'Y'],
          ['', 'A', '', '', 'O', '', 'T', ''],
          ['', 'S', 'H', 'A', 'R', 'P', 'R', ''],
          ['R', 'T', '', '', 'I', '', 'A', ''],
          ['A', '', '', '', 'N', '', 'I', ''],
          ['I', '', 'B', 'I', 'G', '', 'G', ''],
          ['N', 'I', 'C', 'E', '', '', 'H', ''],
          ['Y', '', 'T', 'W', 'E', 'N', 'T', 'Y']
        ],
        lang: 'en'
      }
    },
    {
      id: 'body-parts',
      type: 'crossword',
      label: 'Body Parts',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'eye',
            marker: {
              x: 5,
              y: 5
            },
            hint: 'most important sense organ',
            direction: 'across'
          },
          {
            word: 'ear',
            marker: {
              x: 5,
              y: 5
            },
            hint: 'sense organ used to detect morning alarm',
            direction: 'down'
          },
          {
            word: 'hand',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a body part used to lift weights',
            direction: 'across'
          },
          {
            word: 'heart',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'an internal organ that pumps blood',
            direction: 'down'
          },
          {
            word: 'teeth',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'I am 32 in number for a grown up human being.',
            direction: 'across'
          },
          {
            word: 'mouth',
            marker: {
              x: 4,
              y: 0
            },
            hint: 'lips, tongue and teeth - together known as  ______.',
            direction: 'down'
          },
          {
            word: 'nose',
            marker: {
              x: 3,
              y: 1
            },
            hint: 'I inhale air.',
            direction: 'across'
          },
          {
            word: 'head',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'a helmet protects me while riding',
            direction: 'down'
          },
          {
            word: 'hair',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'I am black for young people and white for old people.',
            direction: 'across'
          },
          {
            word: 'tongue',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'I am used to taste food',
            direction: 'down'
          },
          {
            word: 'nail',
            marker: {
              x: 0,
              y: 6
            },
            hint: 'I protect fingers',
            direction: 'across'
          },
          {
            word: 'skin',
            marker: {
              x: 7,
              y: 6
            },
            hint: 'a sense organ that covers our whole body',
            direction: 'down'
          },
          {
            word: 'brain',
            marker: {
              x: 3,
              y: 9
            },
            hint: 'an internal organ that helps us to think',
            direction: 'across'
          }
        ],
        table: [
          ['H', 'A', 'N', 'D', 'M', '', 'H', ''],
          ['E', '', '', 'N', 'O', 'S', 'E', ''],
          ['A', '', '', '', 'U', '', 'A', ''],
          ['R', '', '', '', 'T', '', 'D', ''],
          ['T', 'E', 'E', 'T', 'H', '', '', ''],
          ['O', '', '', '', '', 'E', 'Y', 'E'],
          ['N', 'A', 'I', 'L', '', 'A', '', 'S'],
          ['G', '', 'H', 'A', 'I', 'R', '', 'K'],
          ['U', '', '', '', '', '', '', 'I'],
          ['E', '', '', 'B', 'R', 'A', 'I', 'N']
        ],
        lang: 'en'
      }
    },
    {
      id: 'birds',
      type: 'crossword',
      label: 'Birds',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'peacock',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a bird with long and colourful feathers',
            direction: 'across'
          },
          {
            word: 'parrot',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'a green color bird',
            direction: 'down'
          },
          {
            word: 'rooster',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'a bird used to wake up people',
            direction: 'across'
          },
          {
            word: 'eagle',
            marker: {
              x: 5,
              y: 2
            },
            hint: 'a bird that flies high in the sky',
            direction: 'down'
          },
          {
            word: 'sparrow',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'a small bird that can build nest inside our house.',
            direction: 'across'
          },
          {
            word: 'owl',
            marker: {
              x: 5,
              y: 7
            },
            hint: 'a bird with big eyes, usually seen in the night.',
            direction: 'across'
          },
          {
            word: 'crow',
            marker: {
              x: 6,
              y: 4
            },
            hint: 'a black bird that caws',
            direction: 'down'
          },
          {
            word: 'dove',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'a bird used to carry message in olden days',
            direction: 'down'
          },
          {
            word: 'duck',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'a bird that lives in water and quacks',
            direction: 'across'
          },
          {
            word: 'hen',
            marker: {
              x: 1,
              y: 4
            },
            hint: 'a farm bird that gives us eggs',
            direction: 'across'
          }
        ],
        table: [
          ['P', 'E', 'A', 'C', 'O', 'C', 'K', ''],
          ['A', '', 'D', 'U', 'C', 'K', '', ''],
          ['R', 'O', 'O', 'S', 'T', 'E', 'R', ''],
          ['R', '', 'V', '', '', 'A', '', ''],
          ['O', 'H', 'E', 'N', '', 'G', 'C', ''],
          ['T', '', '', '', '', 'L', 'R', ''],
          ['', '', '', '', '', 'E', 'O', ''],
          ['S', 'P', 'A', 'R', 'R', 'O', 'W', 'L']
        ],
        lang: 'en'
      }
    },
    {
      id: 'humans-relations',
      type: 'crossword',
      label: 'Humans & Relations',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'uncle',
            marker: {
              x: 0,
              y: 0
            },
            hint: `mother's brother`,
            direction: 'across'
          },
          {
            word: 'cousin',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'children of our uncle',
            direction: 'down'
          },
          {
            word: 'girl',
            marker: {
              x: 1,
              y: 4
            },
            hint: 'young woman',
            direction: 'across'
          },
          {
            word: 'aunt',
            marker: {
              x: 1,
              y: 2
            },
            hint: `uncle's wife`,
            direction: 'across'
          },
          {
            word: 'father',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'a parent, who is not a mother',
            direction: 'across'
          },
          {
            word: 'mother',
            marker: {
              x: 7,
              y: 2
            },
            hint: 'a parent, who is not a father',
            direction: 'down'
          },
          {
            word: 'boy',
            marker: {
              x: 5,
              y: 1
            },
            hint: 'a young man',
            direction: 'across'
          },
          {
            word: 'baby',
            marker: {
              x: 5,
              y: 1
            },
            hint: 'very early stage of a human being',
            direction: 'down'
          }
        ],
        table: [
          ['U', 'N', 'C', 'L', 'E', '', '', ''],
          ['', '', 'O', '', '', 'B', 'O', 'Y'],
          ['', 'A', 'U', 'N', 'T', 'A', '', 'M'],
          ['', '', 'S', '', '', 'B', '', 'O'],
          ['', 'G', 'I', 'R', 'L', 'Y', '', 'T'],
          ['', '', 'N', '', '', '', '', 'H'],
          ['', '', '', '', '', '', '', 'E'],
          ['', '', 'F', 'A', 'T', 'H', 'E', 'R']
        ],
        lang: 'en'
      }
    }
  ]
};
