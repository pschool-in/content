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
            hint: 'we get it from sea, white in color, added in small quantity while cooking',
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
            hint: 'The shortest distance between two points is a ________ line.',
            direction: 'down'
          },
          {
            word: 'twenty',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'Numbers can be used as adjective. Smallest number divisible by 20 is ________.',
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
    },
    {
      id: '1697165005777',
      type: 'crossword',
      label: 'Way with Words',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'lake',
            marker: { x: 0, y: 1 },
            hint: 'A large body of water surrounded by land.',
            direction: 'across'
          },
          {
            word: 'metropolis',
            marker: { x: 3, y: 0 },
            hint: 'A synonym for a "large city."',
            direction: 'down'
          },
          {
            word: 'atom',
            marker: { x: 1, y: 4 },
            hint: 'The basic unit of a chemical element.',
            direction: 'across'
          },
          {
            word: 'anxiety',
            marker: { x: 5, y: 2 },
            hint: 'A feeling of worry or unease.',
            direction: 'down'
          },
          {
            word: 'compound',
            marker: { x: 4, y: 2 },
            hint: 'A substance formed when two or more elements chemically combine.',
            direction: 'down'
          },
          {
            word: 'skin',
            marker: { x: 1, y: 8 },
            hint: 'The outer covering of an apple',
            direction: 'across'
          },
          {
            word: 'astronomer',
            marker: { x: 0, y: 3 },
            hint: 'A person who studies the stars and planets.',
            direction: 'across'
          },
          {
            word: 'million',
            marker: { x: 3, y: 0 },
            hint: 'A period of a thousand years.',
            direction: 'across'
          },
          {
            word: 'quake',
            marker: { x: 2, y: 5 },
            hint: 'A sudden, violent shaking of the ground. ',
            direction: 'down'
          },
          {
            word: 'berry',
            marker: { x: 8, y: 2 },
            hint: 'A small, sweet fruit often used in pies and jam',
            direction: 'down'
          }
        ],
        table: [
          ['', '', '', 'M', 'I', 'L', 'L', 'I', 'O', 'N'],
          ['L', 'A', 'K', 'E', '', '', '', '', '', ''],
          ['', '', '', 'T', 'C', 'A', '', '', 'B', ''],
          ['A', 'S', 'T', 'R', 'O', 'N', 'O', 'M', 'E', 'R'],
          ['', 'A', 'T', 'O', 'M', 'X', '', '', 'R', ''],
          ['', '', 'Q', 'P', 'P', 'I', '', '', 'R', ''],
          ['', '', 'U', 'O', 'O', 'E', '', '', 'Y', ''],
          ['', '', 'A', 'L', 'U', 'T', '', '', '', ''],
          ['', 'S', 'K', 'I', 'N', 'Y', '', '', '', ''],
          ['', '', 'E', 'S', 'D', '', '', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: '1697166658939',
      type: 'crossword',
      label: "Word Wizard's Challenge",
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'horse',
            marker: { x: 1, y: 2 },
            hint: 'A four-legged domestic animal',
            direction: 'across'
          },
          {
            word: 'quick',
            marker: { x: 3, y: 0 },
            hint: 'A synonym for "fast" ',
            direction: 'across'
          },
          {
            word: 'library',
            marker: { x: 6, y: 1 },
            hint: 'A place where books are borrowed',
            direction: 'down'
          },
          {
            word: 'ocean',
            marker: { x: 3, y: 5 },
            hint: 'A large body of water',
            direction: 'across'
          },
          {
            word: 'satellite',
            marker: { x: 1, y: 1 },
            hint: 'A celestial body that orbits the Earth',
            direction: 'across'
          },
          {
            word: 'banana',
            marker: { x: 7, y: 3 },
            hint: 'A tropical fruit with green or yellow skin',
            direction: 'down'
          },
          {
            word: 'bee',
            marker: { x: 9, y: 0 },
            hint: 'A small, buzzing insect',
            direction: 'down'
          },
          {
            word: 'icecream',
            marker: { x: 1, y: 8 },
            hint: 'A sweet, frozen dessert',
            direction: 'across'
          },
          {
            word: 'petition',
            marker: { x: 0, y: 1 },
            hint: 'A formal written request ',
            direction: 'down'
          },
          {
            word: 'owl',
            marker: { x: 0, y: 7 },
            hint: 'A nocturnal bird known for its hooting sound',
            direction: 'across'
          }
        ],
        table: [
          ['', '', '', 'Q', 'U', 'I', 'C', 'K', '', 'B'],
          ['P', 'S', 'A', 'T', 'E', 'L', 'L', 'I', 'T', 'E'],
          ['E', 'H', 'O', 'R', 'S', 'E', 'I', '', '', 'E'],
          ['T', '', '', '', '', '', 'B', 'B', '', ''],
          ['I', '', '', '', '', '', 'R', 'A', '', ''],
          ['T', '', '', 'O', 'C', 'E', 'A', 'N', '', ''],
          ['I', '', '', '', '', '', 'R', 'A', '', ''],
          ['O', 'W', 'L', '', '', '', 'Y', 'N', '', ''],
          ['N', 'I', 'C', 'E', 'C', 'R', 'E', 'A', 'M', '']
        ],
        lang: 'en'
      }
    },
    {
      id: '1697168956665',
      type: 'crossword',
      label: 'Wordplay',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'phoenix',
            marker: { x: 0, y: 0 },
            hint: 'A legendary bird that is said to rise from its own ashes.',
            direction: 'across'
          },
          {
            word: 'pineapple',
            marker: { x: 0, y: 0 },
            hint: 'A tropical fruit known for its spiky skin and sweet, white flesh.',
            direction: 'down'
          },
          {
            word: 'orator',
            marker: { x: 2, y: 0 },
            hint: 'A person who is skilled in the art of writing or speaking.',
            direction: 'down'
          },
          {
            word: 'mosquito',
            marker: { x: 1, y: 4 },
            hint: 'A small, flying insect known for its annoying bites.',
            direction: 'across'
          },
          {
            word: 'atom',
            marker: { x: 1, y: 1 },
            hint: 'A fundamental building block of matter.',
            direction: 'down'
          },
          {
            word: 'crust',
            marker: { x: 5, y: 2 },
            hint: 'The outermost layer of the Earth.',
            direction: 'down'
          },
          {
            word: 'oatmeal',
            marker: { x: 3, y: 6 },
            hint: 'A popular breakfast item made from ground oats or wheat.',
            direction: 'across'
          },
          {
            word: 'wagon',
            marker: { x: 4, y: 5 },
            hint: 'A four-wheeled vehicle for transporting goods, typically pulled by horses.',
            direction: 'down'
          },
          {
            word: 'paint',
            marker: { x: 7, y: 0 },
            hint: 'A substance used to color objects, typically in liquid form.',
            direction: 'down'
          },
          {
            word: 'canal',
            marker: { x: 9, y: 2 },
            hint: 'A structure that allows ships to pass from one body of water to another at different levels.',
            direction: 'down'
          }
        ],
        table: [
          ['P', 'H', 'O', 'E', 'N', 'I', 'X', 'P', '', ''],
          ['I', 'A', 'R', '', '', '', '', 'A', '', ''],
          ['N', 'T', 'A', '', '', 'C', '', 'I', '', 'C'],
          ['E', 'O', 'T', '', '', 'R', '', 'N', '', 'A'],
          ['A', 'M', 'O', 'S', 'Q', 'U', 'I', 'T', 'O', 'N'],
          ['P', '', 'R', '', 'W', 'S', '', '', '', 'A'],
          ['P', '', '', 'O', 'A', 'T', 'M', 'E', 'A', 'L'],
          ['L', '', '', '', 'G', '', '', '', '', ''],
          ['E', '', '', '', 'O', '', '', '', '', ''],
          ['', '', '', '', 'N', '', '', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: '1697171149094',
      type: 'crossword',
      label: 'Language Crossword',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'message',
            marker: { x: 5, y: 0 },
            hint: 'A verbal or written communication',
            direction: 'down'
          },
          {
            word: 'grammar',
            marker: { x: 0, y: 4 },
            hint: 'The whole structure of a language',
            direction: 'across'
          },
          {
            word: 'advanced',
            marker: { x: 2, y: 1 },
            hint: 'A high level',
            direction: 'down'
          },
          {
            word: 'answer',
            marker: { x: 3, y: 2 },
            hint: 'A solution to a problem',
            direction: 'across'
          },
          {
            word: 'shout',
            marker: { x: 5, y: 3 },
            hint: 'Speak loudly',
            direction: 'across'
          },
          {
            word: 'sentence',
            marker: { x: 1, y: 7 },
            hint: 'A set of words making sense',
            direction: 'across'
          },
          {
            word: 'talk',
            marker: { x: 1, y: 1 },
            hint: 'Speak in order to give information',
            direction: 'across'
          },
          {
            word: 'joke',
            marker: { x: 8, y: 4 },
            hint: 'A thing that someone say is funny',
            direction: 'down'
          },
          {
            word: 'beginner',
            marker: { x: 0, y: 2 },
            hint: 'A person just starting to learn a skill',
            direction: 'down'
          }
        ],
        table: [
          ['', '', '', '', '', 'M', '', '', '', ''],
          ['', 'T', 'A', 'L', 'K', 'E', '', '', '', ''],
          ['B', '', 'D', 'A', 'N', 'S', 'W', 'E', 'R', ''],
          ['E', '', 'V', '', '', 'S', 'H', 'O', 'U', 'T'],
          ['G', 'R', 'A', 'M', 'M', 'A', 'R', '', 'J', ''],
          ['I', '', 'N', '', '', 'G', '', '', 'O', ''],
          ['N', '', 'C', '', '', 'E', '', '', 'K', ''],
          ['N', 'S', 'E', 'N', 'T', 'E', 'N', 'C', 'E', ''],
          ['E', '', 'D', '', '', '', '', '', '', ''],
          ['R', '', '', '', '', '', '', '', '', '']
        ],
        lang: 'en'
      }
    },
    {
      id: '1697172459481',
      type: 'crossword',
      label: 'Abbrevation',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'tomorrow',
            marker: { x: 0, y: 0 },
            hint: '2MORO',
            direction: 'across'
          },
          { word: 'why', marker: { x: 7, y: 0 }, hint: 'Y', direction: 'down' },
          {
            word: 'TODAY',
            marker: { x: 3, y: 2 },
            hint: '2DAY',
            direction: 'across'
          },
          {
            word: 'THANKS',
            marker: { x: 3, y: 2 },
            hint: 'TNX',
            direction: 'down'
          },
          {
            word: 'PLEASE',
            marker: { x: 0, y: 4 },
            hint: 'PLS',
            direction: 'across'
          },
          {
            word: 'GREAT',
            marker: { x: 2, y: 2 },
            hint: 'GR8',
            direction: 'down'
          },
          {
            word: 'BEFORE',
            marker: { x: 5, y: 3 },
            hint: 'B4',
            direction: 'down'
          },
          { word: 'YOU', marker: { x: 4, y: 1 }, hint: 'U', direction: 'down' },
          {
            word: 'LATER',
            marker: { x: 2, y: 8 },
            hint: 'LTR',
            direction: 'across'
          },
          { word: 'SEE', marker: { x: 4, y: 4 }, hint: 'C', direction: 'down' }
        ],
        table: [
          ['T', 'O', 'M', 'O', 'R', 'R', 'O', 'W'],
          ['', '', '', '', 'Y', '', '', 'H'],
          ['', '', 'G', 'T', 'O', 'D', 'A', 'Y'],
          ['', '', 'R', 'H', 'U', 'B', '', ''],
          ['P', 'L', 'E', 'A', 'S', 'E', '', ''],
          ['', '', 'A', 'N', 'E', 'F', '', ''],
          ['', '', 'T', 'K', 'E', 'O', '', ''],
          ['', '', '', 'S', '', 'R', '', ''],
          ['', '', 'L', 'A', 'T', 'E', 'R', '']
        ],
        lang: 'en'
      }
    }
  ]
};
