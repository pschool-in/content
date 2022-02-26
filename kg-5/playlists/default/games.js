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
      type: 'memoryFindPair',
      id: 'find-pair-2',
      label: 'Find Pairs - 2',
      data: { isBig: true }
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
      label: 'Find the order',
      data: { level: 1 }
    },
    {
      type: 'memoryFindOrder',
      id: 'find-order-2',
      label: 'Find the order - 2',
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
    }
  ]
};
