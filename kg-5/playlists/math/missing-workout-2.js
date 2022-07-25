export default {
  label: 'Missing Workout',
  id: 'missing-workout-2',
  list: [
    {
      type: 'missingWorkout',
      id: 'addition',
      label: 'Addition',
      lockAfter: 1,
      data: [
        { pattern: 'aaa + aaa', missingRow: [2] },
        { pattern: 'xxx + xxx', missingRow: [2] },
        { pattern: 'bbb + bbb', missingRow: [2] },
        { pattern: 'aaaa + aaaa', missingRow: [2] },
        { pattern: 'xxxx + xxxx', missingRow: [2] },

        { pattern: 'aa + aa', missingRow: [0, 1] },
        { pattern: 'xx + xx', missingRow: [0, 1] },
        { pattern: 'bb + bb', missingRow: [0, 1] },
        {
          pattern: 'aa + aa',
          missing: [
            [0, 3],
            [1, 2]
          ]
        },
        {
          pattern: 'xx + xx',
          missing: [
            [0, 3],
            [1, 2]
          ]
        },
        {
          pattern: 'bb + bb',
          missing: [
            [0, 3],
            [1, 2]
          ]
        },
        { pattern: 'aa + aa + aa', missingRow: [3] },
        { pattern: 'xx + xx + xx', missingRow: [3] },
        { pattern: 'bb + bb + bb', missingRow: [3] },
        { pattern: 'aa + aa + aa', missingRow: [0, 1, 2] },
        { pattern: 'xx + xx + xx', missingRow: [0, 1, 2] },
        { pattern: 'bb + bb + bb', missingRow: [0, 1, 2] },
        { pattern: 'xxx + xxx', missing: [0, 1, 2, 3, 4, 5] },
        { pattern: 'xxx + xxx + xxx', missing: [6, 7, 8] },
        {
          pattern: 'aa + aa',
          missingRow: [0, 1]
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction',
      lockAfter: 1,
      data: [
        { pattern: 'bbb - aa', missingRow: [2] },
        { pattern: 'bbb - bb', missingRow: [2] },
        { pattern: 'aaa - bb', missingRow: [2] },
        { pattern: 'bb - aa', missingRow: [0] },
        { pattern: 'bb - aa', missingRow: [1] },
        { pattern: 'xaa - bb', missing: [1, 2, 3] },
        { pattern: 'xxx - xxx', missing: [0, 1, 2, 3, 4, 5] },
        { pattern: 'xxx - xxx', missing: [0, 1, 2, 3] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'multiplication',
      label: 'Multiplication',
      lockAfter: 1,
      data: [
        { pattern: 'xx * x', missingRow: [2] },
        { pattern: 'xxx * x', missingRow: [2] },
        { pattern: 'xxx * x', missing: [1, 2] },
        { pattern: 'aaa * aa', missingRow: [4] },
        { pattern: 'xxx * xx', missingRow: [4] },
        { pattern: 'xxx * bb', missingRow: [4] }
      ]
    }
  ]
};
