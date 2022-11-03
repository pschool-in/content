export default {
  label: 'Missing Workout',
  id: 'missing-workout-3',
  list: [
    {
      type: 'missingWorkout',
      id: 'addition',
      label: 'New Addition',
      data: [
        {
          pattern: 'xxx + xxx + xxx',
          missing: [
            [9, 10],
            [10, 11],
            [9, 11]
          ]
        },
        {
          pattern: 'xxx + xxx + xxx',
          missingRow: [3]
        },
        {
          pattern: 'xxx + xxx + xxx',
          missing: [
            [0, 4, 8],
            [1, 3, 8],
            [2, 4, 6]
          ]
        },
        {
          pattern: 'xxx + xxx + xxx',
          missingRow: [0, 1, 2]
        },
        {
          pattern: 'xxxx + xxxx + xxxx',
          missingRow: [3]
        },
        {
          pattern: 'xxxx + xxxx + xxxx',
          missingRow: [1]
        },
        {
          pattern: 'xxxx + xxxx + xxxx',
          missingRow: [2]
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'subtraction',
      label: 'Subtraction',
      data: [
        { pattern: 'bbb - aaa', missingRow: [2] },
        { pattern: 'bbbb - aaaa', missingRow: [2] },
        { pattern: 'bbb - aaa', missingRow: [0] },
        { pattern: 'bbbb - aaaa', missingRow: [0] },
        { pattern: 'bbb - aaa', missingRow: [1] },
        { pattern: 'bbbb - aaaa', missingRow: [1] },
        { pattern: 'aaa - bb', missingRow: [2] },
        { pattern: 'aaa - bb', missingRow: [1] },
        { pattern: 'aaa - bb', missingRow: [0] },
        { pattern: 'xxx - xxx', missingRow: [2] },
        { pattern: 'xxx - xxx', missingRow: [1] },
        { pattern: 'xxx - xxx', missingRow: [0] },
        { pattern: 'xxxx - xxxx', missingRow: [2] },
        { pattern: 'xxxx - xxxx', missingRow: [1] },
        { pattern: 'xxxx - xxxx', missingRow: [0] }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'multiplication',
      label: 'Multiplication',
      data: [
        { pattern: 'aaa * aaa', missingRow: [5] },
        { pattern: 'aaa * aaa', missingRow: [4, 5] },
        { pattern: 'xxx * xxx', missingRow: [5] },
        { pattern: 'xxx * xxx', missingRow: [4, 5] },
        { pattern: 'aaa * aaa', missing: [0, 1, 2, 3, 4, 5] },
        { pattern: 'xxx * xxx', missing: [0, 1, 2, 3, 4, 5] },
        { pattern: 'bbb * bbb', missing: [0, 1, 2, 3, 4, 5] }
      ]
    }
  ]
};
