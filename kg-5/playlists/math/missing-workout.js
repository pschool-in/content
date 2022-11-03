export default {
  label: 'Missing Workout',
  id: 'missing-workout',
  list: [
    {
      type: 'missingWorkout',
      id: 'addition',
      label: 'Addition',
      data: [
        { pattern: 'aa + aa', missing: [4, 5] },
        { pattern: 'xx + xx', missing: [4, 5] },
        { pattern: 'aa + aa', missingRow: [2] },
        { pattern: 'bb + bb', missing: [4, 5, 6] },
        { pattern: 'xx + xx', missing: [2] },
        { pattern: 'bb + bb', missing: [2] },
        { pattern: 'aa + aa', missing: [0, 1, 2, 3] },
        { pattern: 'xx + xx', missing: [0, 1, 2, 3] },
        { pattern: 'bb + bb', missing: [0, 1, 2, 3] }
      ]
    },

    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction',
      data: [
        { pattern: 'bb - aa', missing: [4] },
        { pattern: 'bb - aa', missingRow: [2] },
        { pattern: '99 - xx', missingRow: [2] },
        { pattern: '100 - xx', missingRow: [2] },
        { pattern: 'bb - aa', missing: [0, 1, 2, 3] },
        { pattern: 'xbb - aa', missing: [1, 2, 3] },
        { pattern: 'xaa - bb', missing: [1, 2, 3] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'multiplication',
      label: 'Multiplication',
      data: [
        { pattern: 'x0 * x', missingRow: [2] },
        { pattern: 'aa * a', missingRow: [2] },
        { pattern: 'xx * x', missingRow: [2] },
        { pattern: 'bb * b', missingRow: [2] },
        { pattern: 'aa * a', missingRow: [1] }
      ]
    }
  ]
};
