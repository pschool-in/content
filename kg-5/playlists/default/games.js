export default {
  label: 'Games',
  id: 'games',
  img: 'brain',
  list: [
    {
      type: 'memoryFindPair',
      id: 'find-pair',
      label: 'Find Pairs',
      data: {}
    },
    {
      type: 'rememberShapeColor',
      id: 'remember-shape-color',
      label: 'Remember Shape & Color',
      data: {}
    },
    {
      type: 'pattern',
      id: 'pattern',
      label: 'Pattern',
      data: {
        list: [
          '0124678',
          '012463',
          '487630',
          '6304258',
          '2104876',
          '6304852',
          '741852',
          '210345876',
          '0723',
          '0367840'
        ]
      }
    },
    {
      type: 'pattern',
      id: 'pattern-2',
      label: 'Pattern Advanced',
      data: {
        list: [
          '852763015',
          '01258403678',
          '458741034',
          '367840125',
          '25487304',
          '4763158',
          '876543210',
          '315742',
          '54213785',
          '2467840345'
        ]
      }
    },
    {
      type: 'memoryFindOrder',
      id: 'find-order-1',
      label: 'Find the order (level - 1)',
      data: { level: 1 }
    },
    {
      type: 'memoryFindOrder',
      id: 'find-order-2',
      label: 'Find the order (level - 2)',
      data: { level: 2 }
    },
    {
      label: 'Tic Tac Toe',
      type: 'ticTacToe',
      data: {},
      id: 'ticTacToe',
      locked: true
    },
    {
      label: 'Connect4',
      type: 'connect4',
      data: {},
      id: 'connect4',
      locked: true
    },
    {
      label: 'Chess',
      type: 'chess',
      data: {},
      id: 'chess',
      locked: true
    },
    {
      label: 'Phonics',
      type: 'phonics',
      id: 'phonics',
      locked: true,
      data: [
        {
          arr: [
            {
              sound: 's',
              examples: 'sun, set, small, seven',
              pos: 0
            },
            {
              sound: 'a',
              examples: 'act, and, am, ask',
              pos: 4
            },
            {
              sound: 't',
              examples: 'ten, ton, tell,top',
              pos: 8
            },
            {
              sound: 'i',
              examples: 'in, it, if, ink',
              pos: 12
            },
            {
              sound: 'p',
              examples: 'pot, pen, pet, pin',
              pos: 16
            },
            {
              sound: 'n',
              examples: 'not, nil, nut, nib',
              pos: 20
            },
            {
              sound: 'c',
              examples: 'cat, cup, cut, cap ',
              pos: 24
            },
            {
              sound: 'e',
              examples: 'end, east, egg, ear',
              pos: 28
            },
            {
              sound: 'h',
              examples: 'hat, hen, hot, her',
              pos: 32
            },
            {
              sound: 'r',
              examples: 'rat, red, rest, rod',
              pos: 36
            },
            {
              sound: 'm',
              examples: 'man, mat, mug, milk',
              pos: 40
            },
            {
              sound: 'd',
              examples: 'dog, dot, den, dam',
              pos: 44
            },
            {
              sound: 'g',
              examples: 'gun, get, gap, log',
              pos: 48
            },
            {
              sound: 'o',
              examples: 'on, old, open, one',
              pos: 52
            },
            {
              sound: 'u',
              examples: 'fun, run, but, up',
              pos: 56
            }
          ]
        },
        {
          arr: [
            {
              sound: 'l',
              examples: 'lot, let, lap, leg',
              pos: 60
            },
            {
              sound: 'f',
              examples: 'fox, fan, if, fat',
              pos: 64
            },
            {
              sound: 'b',
              examples: 'bun, bag, bed, bad',
              pos: 68
            },
            {
              sound: 'ai',
              examples: 'aim, tail, pain, fail',
              pos: 72
            },
            {
              sound: 'j',
              examples: 'jam, jug, jump, jar',
              pos: 76
            },
            {
              sound: 'oa',
              examples: 'boat, coat, goat, oat, goal, roar',
              pos: 80
            },
            {
              sound: 'ie',
              examples: 'tie, lie, die, pie, flies',
              pos: 86
            },
            {
              sound: 'ee',
              examples: 'see, tree, feed, need, jeep',
              pos: 91
            },
            {
              sound: 'or',
              examples: 'for, born, port, corn',
              pos: 96
            },
            {
              sound: 'z',
              examples: 'zip, zen, zebra',
              pos: 100
            },
            {
              sound: 'w',
              examples: 'wet, win, wind, was',
              pos: 103
            },
            {
              sound: 'ng',
              examples: 'long, sing, ring, song',
              pos: 107
            },
            {
              sound: 'v',
              examples: 'van, visa, cave, even',
              pos: 111
            }
          ]
        },
        {
          arr: [
            {
              sound: 'oo',
              examples: 'good, look, foot, wool',
              pos: 115
            },
            {
              sound: 'OO',
              examples: 'soon, spoon, roof, cool',
              pos: 119
            },
            {
              sound: 'y',
              examples: 'toy, boy, yes, my',
              pos: 123
            },
            {
              sound: 'x',
              examples: 'six, fix, ox, fox',
              pos: 127
            },
            {
              sound: 'ch',
              examples: 'chat, chop, chips, catch, watch',
              pos: 131
            },
            {
              sound: 'sh',
              examples: 'push, fish, bush, dish',
              pos: 136
            },
            {
              sound: 'th',
              examples: 'thank, thin, bath, path, math',
              pos: 140
            },
            {
              sound: 'TH',
              examples: 'that, this, these, them',
              pos: 145
            },
            {
              sound: 'qu',
              examples: 'quit, quest, quiz, quick',
              pos: 149
            },
            {
              sound: 'ou',
              examples: 'loud, cloud, mount, found, count',
              pos: 153
            },
            {
              sound: 'oi',
              examples: 'oil, point, soil, coin, boil',
              pos: 158
            },
            {
              sound: 'ue',
              examples: 'blue, glue, true, clue',
              pos: 163
            },
            {
              sound: 'er',
              examples: 'her, after, baker, worker',
              pos: 167
            },
            {
              sound: 'ar',
              examples: 'car, art, cart,card, bark',
              pos: 171
            }
          ]
        }
      ]
    }
  ]
};
