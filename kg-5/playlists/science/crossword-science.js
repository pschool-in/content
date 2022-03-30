export default {
  id: 'crossword-science',
  label: 'Science Crosswords',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      id: 'crossword-humanbody',
      label: 'Humanbody',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'intestine',
            marker: { x: 0, y: 5 },
            hint: 'All the digested food is absorbed here',
            direction: 'across'
          },
          {
            word: 'teeth',
            marker: { x: 5, y: 5 },
            hint: 'We use it to bite and chew',
            direction: 'down'
          },
          {
            word: 'blood',
            marker: { x: 0, y: 1 },
            hint: 'It is red and flows through the body',
            direction: 'across'
          },
          {
            word: 'bones',
            marker: { x: 2, y: 0 },
            hint:
              'They are very hard substances and more than 200 of them are present in our body',
            direction: 'down'
          },
          {
            word: 'muscle',
            marker: { x: 0, y: 4 },
            hint: 'It helps us move our bones',
            direction: 'across'
          },
          {
            word: 'windpipe',
            marker: { x: 6, y: 0 },
            hint: 'Air moves down through it into the lungs',
            direction: 'down'
          },
          {
            word: 'lungs',
            marker: { x: 7, y: 3 },
            hint: 'They are two bags inside the chest that help us to breathe',
            direction: 'down'
          },
          {
            word: 'skin',
            marker: { x: 3, y: 2 },
            hint:
              'It covers the entire body and is one of the five sense organs',
            direction: 'across'
          },
          {
            word: 'nose',
            marker: { x: 1, y: 5 },
            hint: 'It helps us to smell',
            direction: 'down'
          },
          {
            word: 'nerve',
            marker: { x: 0, y: 8 },
            hint: 'They carry messages from the brain to the rest of the body',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', 'B', '', '', '', 'W', '', ''],
          ['B', 'L', 'O', 'O', 'D', '', 'I', '', ''],
          ['', '', 'N', 'S', 'K', 'I', 'N', '', ''],
          ['', '', 'E', '', '', '', 'D', 'L', ''],
          ['M', 'U', 'S', 'C', 'L', 'E', 'P', 'U', ''],
          ['I', 'N', 'T', 'E', 'S', 'T', 'I', 'N', 'E'],
          ['', 'O', '', '', '', 'E', 'P', 'G', ''],
          ['', 'S', '', '', '', 'E', 'E', 'S', ''],
          ['N', 'E', 'R', 'V', 'E', 'T', '', '', ''],
          ['', '', '', '', '', 'H', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-diseases',
      label: 'Diseases',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'tetanus',
            marker: { x: 0, y: 1 },
            hint:
              'It is caused when germs enter the body through cut in the skin',
            direction: 'across'
          },
          {
            word: 'malaria',
            marker: { x: 3, y: 0 },
            hint: 'It is spread through the bite of female anopheles mosquito',
            direction: 'down'
          },
          {
            word: 'typhoid',
            marker: { x: 0, y: 1 },
            hint: 'It is caused by eating infected food',
            direction: 'down'
          },
          {
            word: 'plague',
            marker: { x: 1, y: 3 },
            hint: 'It is caused by rats',
            direction: 'across'
          },
          {
            word: 'flu',
            marker: { x: 2, y: 2 },
            hint: 'It is caused by contact with infected person',
            direction: 'across'
          },
          {
            word: 'polio',
            marker: { x: 1, y: 3 },
            hint: 'It can be prevented with oral vaccine',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', '', 'M', '', '', ''],
          ['T', 'E', 'T', 'A', 'N', 'U', 'S'],
          ['Y', '', 'F', 'L', 'U', '', ''],
          ['P', 'P', 'L', 'A', 'G', 'U', 'E'],
          ['H', 'O', '', 'R', '', '', ''],
          ['O', 'L', '', 'I', '', '', ''],
          ['I', 'I', '', 'A', '', '', ''],
          ['D', 'O', '', '', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-food-health',
      label: 'Food and Health',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'salt',
            marker: { x: 0, y: 3 },
            hint:
              'It is added to food for taste and to prevent it from going bad',
            direction: 'across'
          },
          {
            word: 'goitre',
            marker: { x: 3, y: 0 },
            hint: 'It is caused due to deficiency of iodine',
            direction: 'down'
          },
          {
            word: 'scurvy',
            marker: { x: 0, y: 3 },
            hint: 'It is caused due to deficiency of vitamin c',
            direction: 'down'
          },
          {
            word: 'pickle',
            marker: { x: 6, y: 1 },
            hint: 'It is made by mixing vegetables with salt, oil and spices',
            direction: 'down'
          },
          {
            word: 'fridge',
            marker: { x: 1, y: 6 },
            hint: 'It keeps food cool',
            direction: 'across'
          },
          {
            word: 'milk',
            marker: { x: 2, y: 1 },
            hint: 'It turns to curd on fermentation',
            direction: 'down'
          },
          {
            word: 'orange',
            marker: { x: 5, y: 2 },
            hint: 'It is a fruit rich in vitamin C',
            direction: 'down'
          },
          {
            word: 'idli',
            marker: { x: 4, y: 5 },
            hint: 'It is made from fermented rice and urad dal',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', '', 'G', '', '', ''],
          ['', '', 'M', 'O', '', '', 'P'],
          ['', '', 'I', 'I', '', 'O', 'I'],
          ['S', 'A', 'L', 'T', '', 'R', 'C'],
          ['C', '', 'K', 'R', '', 'A', 'K'],
          ['U', '', '', 'E', 'I', 'N', 'L'],
          ['R', 'F', 'R', 'I', 'D', 'G', 'E'],
          ['V', '', '', '', 'L', 'E', ''],
          ['Y', '', '', '', 'I', '', '']
        ]
      }
    },
    {
      id: 'crossword-solar-system',
      label: 'Solar System',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'milkyway',
            marker: { x: 0, y: 0 },
            hint: 'Our solar system is a part of this galaxy',
            direction: 'across'
          },
          {
            word: 'uranus',
            marker: { x: 0, y: 1 },
            hint: 'It is the third largest planet',
            direction: 'across'
          },
          {
            word: 'neptune',
            marker: { x: 3, y: 1 },
            hint: 'It is the planet furthest from sun',
            direction: 'down'
          },
          {
            word: 'mercury',
            marker: { x: 2, y: 7 },
            hint: 'It is the planet closest to sun',
            direction: 'across'
          },
          {
            word: 'gravity',
            marker: { x: 8, y: 1 },
            hint: 'It is the force that keeps a planet moving in orbit',
            direction: 'down'
          },
          {
            word: 'jupiter',
            marker: { x: 1, y: 3 },
            hint: 'It is the largest planet',
            direction: 'across'
          },
          {
            word: 'pluto',
            marker: { x: 1, y: 5 },
            hint: 'It is now called a dwarf planet',
            direction: 'across'
          },
          {
            word: 'mars',
            marker: { x: 7, y: 1 },
            hint: 'It is the red planet',
            direction: 'down'
          },
          {
            word: 'sun',
            marker: { x: 1, y: 6 },
            hint: 'The planets orbit around this star',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['M', 'I', 'L', 'K', 'Y', 'W', 'A', 'Y', ''],
          ['U', 'R', 'A', 'N', 'U', 'S', '', 'M', 'G'],
          ['', '', '', 'E', '', '', '', 'A', 'R'],
          ['', 'J', 'U', 'P', 'I', 'T', 'E', 'R', 'A'],
          ['', '', '', 'T', '', '', '', 'S', 'V'],
          ['', 'P', 'L', 'U', 'T', 'O', '', '', 'I'],
          ['', 'S', 'U', 'N', '', '', '', '', 'T'],
          ['', '', 'M', 'E', 'R', 'C', 'U', 'R', 'Y']
        ]
      }
    },
    {
      id: 'crossword-young-ones',
      label: 'Young ones',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'kid',
            marker: { x: 0, y: 0 },
            hint: 'It is a baby goat',
            direction: 'down'
          },
          {
            word: 'duckling',
            marker: { x: 0, y: 2 },
            hint: 'It is a baby duck',
            direction: 'across'
          },
          {
            word: 'kitten',
            marker: { x: 3, y: 2 },
            hint: 'It is a baby  cat',
            direction: 'down'
          },
          {
            word: 'fawn',
            marker: { x: 0, y: 7 },
            hint: 'It is a baby deer',
            direction: 'across'
          },
          {
            word: 'piglet',
            marker: { x: 7, y: 0 },
            hint: 'It is a baby pig',
            direction: 'down'
          },
          {
            word: 'chick',
            marker: { x: 1, y: 1 },
            hint: 'It is a baby chicken',
            direction: 'across'
          },
          {
            word: 'calf',
            marker: { x: 0, y: 4 },
            hint: 'It is a baby cow',
            direction: 'down'
          },
          {
            word: 'lamb',
            marker: { x: 4, y: 2 },
            hint: 'It is a baby sheep',
            direction: 'down'
          },
          {
            word: 'bunny',
            marker: { x: 6, y: 0 },
            hint: 'It is a baby rabbit',
            direction: 'down'
          },
          {
            word: 'cub',
            marker: { x: 1, y: 1 },
            hint: 'It is a baby bear',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['K', '', '', '', '', '', 'B', 'P'],
          ['I', 'C', 'H', 'I', 'C', 'K', 'U', 'I'],
          ['D', 'U', 'C', 'K', 'L', 'I', 'N', 'G'],
          ['', 'B', '', 'I', 'A', '', 'N', 'L'],
          ['C', '', '', 'T', 'M', '', 'Y', 'E'],
          ['A', '', '', 'T', 'B', '', '', 'T'],
          ['L', '', '', 'E', '', '', '', ''],
          ['F', 'A', 'W', 'N', '', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-dental-health',
      label: 'Dental health',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'plaque',
            marker: { x: 1, y: 0 },
            hint: 'It is the sticky coating on teeth where bacteria multiply',
            direction: 'down'
          },
          {
            word: 'bacteria',
            marker: { x: 0, y: 2 },
            hint: 'They are small organisms that can rot your teeth',
            direction: 'across'
          },
          {
            word: 'braces',
            marker: { x: 0, y: 2 },
            hint: 'It is a teeth straightening wire',
            direction: 'down'
          },
          {
            word: 'dentist',
            marker: { x: 4, y: 1 },
            hint: 'They are experts in dental care, tooth doctor',
            direction: 'down'
          },
          {
            word: 'root',
            marker: { x: 5, y: 2 },
            hint: 'It is the part of teeth embedded in gum',
            direction: 'down'
          },
          {
            word: 'gargle',
            marker: { x: 7, y: 1 },
            hint: 'It is the rinsing your throat',
            direction: 'down'
          },
          {
            word: 'candy',
            marker: { x: 2, y: 2 },
            hint: 'It can rot your teeth',
            direction: 'down'
          },
          {
            word: 'gums',
            marker: { x: 3, y: 0 },
            hint: 'It is the tissue surrounding teeth',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', 'P', '', 'G', 'U', 'M', 'S', ''],
          ['', 'L', '', '', 'D', '', '', 'G'],
          ['B', 'A', 'C', 'T', 'E', 'R', 'I', 'A'],
          ['R', 'Q', 'A', '', 'N', 'O', '', 'R'],
          ['A', 'U', 'N', '', 'T', 'O', '', 'G'],
          ['C', 'E', 'D', '', 'I', 'T', '', 'L'],
          ['E', '', 'Y', '', 'S', '', '', 'E'],
          ['S', '', '', '', 'T', '', '', '']
        ]
      }
    },
    {
      id: 'crossword-insects',
      label: 'Insects',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'butterfly',
            marker: { x: 2, y: 0 },
            hint: 'It is an insect with colorful wings',
            direction: 'down'
          },
          {
            word: 'bee',
            marker: { x: 2, y: 0 },
            hint: 'It is an insect that makes honey',
            direction: 'across'
          },
          {
            word: 'ant',
            marker: { x: 0, y: 2 },
            hint: 'It is a red soldier in a colony',
            direction: 'across'
          },
          {
            word: 'thorax',
            marker: { x: 2, y: 3 },
            hint: 'It is a middle segment of an insect',
            direction: 'across'
          },
          {
            word: 'six',
            marker: { x: 7, y: 1 },
            hint: 'It is the number of legs an insect has',
            direction: 'down'
          },
          {
            word: 'spider',
            marker: { x: 4, y: 4 },
            hint: 'It is an insect with eight legs',
            direction: 'across'
          },
          {
            word: 'molting',
            marker: { x: 3, y: 9 },
            hint: 'It is the shedding of exoskeleton',
            direction: 'across'
          },
          {
            word: 'housefly',
            marker: { x: 8, y: 0 },
            hint: 'It is an insect that can fly, it is attracted to fruits',
            direction: 'down'
          },
          {
            word: 'fleas',
            marker: { x: 3, y: 1 },
            hint: 'These insects live on dogs fur',
            direction: 'across'
          },
          {
            word: 'firefly',
            marker: { x: 9, y: 2 },
            hint: 'They are insects with their own light',
            direction: 'down'
          },
          {
            word: 'mosquito',
            marker: { x: 4, y: 2 },
            hint:
              'It is a tiny bite from me can make you itch, make you sneeze and make you twitch',
            direction: 'down'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['', '', 'B', 'E', 'E', '', '', '', 'H', ''],
          ['', '', 'U', 'F', 'L', 'E', 'A', 'S', 'O', ''],
          ['A', 'N', 'T', '', 'M', '', '', 'I', 'U', 'F'],
          ['', '', 'T', 'H', 'O', 'R', 'A', 'X', 'S', 'I'],
          ['', '', 'E', '', 'S', 'P', 'I', 'D', 'E', 'R'],
          ['', '', 'R', '', 'Q', '', '', '', 'F', 'E'],
          ['', '', 'F', '', 'U', '', '', '', 'L', 'F'],
          ['', '', 'L', '', 'I', '', '', '', 'Y', 'L'],
          ['', '', 'Y', '', 'T', '', '', '', '', 'Y'],
          ['', '', '', 'M', 'O', 'L', 'T', 'I', 'N', 'G']
        ]
      }
    },
    {
      id: 'crossword-fruits',
      label: 'Fruits',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'watermelon',
            marker: { x: 0, y: 0 },
            hint:
              'It is a very big fruit with green shell red flesh and black seeds',
            direction: 'across'
          },
          {
            word: 'apple',
            marker: { x: 1, y: 0 },
            hint: 'It is a red fruit which keeps the doctor away',
            direction: 'down'
          },
          {
            word: 'mango',
            marker: { x: 5, y: 0 },
            hint: 'It is the king of fruits',
            direction: 'down'
          },
          {
            word: 'orange',
            marker: { x: 8, y: 0 },
            hint: 'The colour and name of the fruit is same',
            direction: 'down'
          },
          {
            word: 'banana',
            marker: { x: 2, y: 1 },
            hint: 'Monkeys love this fruit',
            direction: 'across'
          },
          {
            word: 'lemon',
            marker: { x: 2, y: 4 },
            hint: 'They are yellow and very sour',
            direction: 'across'
          },
          {
            word: 'grapes',
            marker: { x: 4, y: 5 },
            hint: 'I am round and in a bunch',
            direction: 'across'
          },
          {
            word: 'pear',
            marker: { x: 1, y: 2 },
            hint: 'My name sounds like there might be two of me',
            direction: 'across'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['W', 'A', 'T', 'E', 'R', 'M', 'E', 'L', 'O', 'N'],
          ['', 'P', 'B', 'A', 'N', 'A', 'N', 'A', 'R', ''],
          ['', 'P', 'E', 'A', 'R', 'N', '', '', 'A', ''],
          ['', 'L', '', '', '', 'G', '', '', 'N', ''],
          ['', 'E', 'L', 'E', 'M', 'O', 'N', '', 'G', ''],
          ['', '', '', '', 'G', 'R', 'A', 'P', 'E', 'S']
        ]
      }
    }
  ]
};
