export default {
  label: 'Math Arithmetic',
  id: 'arithmetic-6-sc',
  list: [
    {
      id: 'addition',
      type: 'quickArithmetic',
      label: 'Addition',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Decimal Addition',
        decimal: true
      },
      data: [
        {
          type: 'misc~x+0.x'
        },
        {
          type: 'misc~xx+0.x'
        },
        {
          type: 'misc~x.5+x.5'
        },
        {
          type: 'misc~0.x+0.x'
        },
        {
          type: 'misc~x.x+0.x'
        },
        {
          type: 'misc~x+0.x+0.0x'
        }
      ]
    },
    {
      id: 'subtract',
      type: 'quickArithmetic',
      label: 'Subtraction',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Decimal Subtraction',
        decimal: true
      },
      data: [
        {
          type: 'misc~1-0.x'
        },
        {
          type: 'misc~x-0.x'
        },
        {
          type: 'misc~10-0.x'
        },
        {
          type: 'misc~xx-0.x'
        },
        {
          type: 'misc~x-x.5'
        },
        {
          type: 'misc~0.x-0.x'
        },
        {
          type: 'misc~x.x-0.x'
        }
      ]
    },
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Multiply',
        decimal: true
      },
      data: [
        {
          type: 'mul~xx~0.1'
        },
        {
          type: 'mul~xx~0.01'
        },
        {
          type: 'mul~xxx~0.001'
        },
        {
          type: 'mul~xx~0.001'
        },
        {
          type: 'mul~x~0.x'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Divide',
      lockAfter: 1,
      commonData: {
        count: 10,
        title: 'Divide',
        decimal: true
      },
      data: [
        {
          type: 'div~xx~10'
        },
        {
          type: 'div~xxx~10'
        },
        {
          type: 'div~xxx~100'
        },
        {
          type: 'div~xxxx~1000'
        },
        {
          type: 'div~xx~100'
        }
      ]
    },
    {
      id: 'fillup',
      type: 'quickArithmetic',
      label: 'Addition - Fill in the Blank',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~x+x'
        },
        {
          type: 'misc~x0+x'
        },
        {
          type: 'misc~xx+10'
        },
        {
          type: 'misc~xx+3'
        },
        {
          type: 'misc~xx+5'
        },
        {
          type: 'misc~xx+9'
        },
        {
          type: 'misc~xx+x'
        },
        {
          type: 'misc~xx+20'
        },
        {
          type: 'misc~xx+30'
        },
        {
          type: 'misc~xx+x0'
        }
      ]
    },
    {
      id: 'fillup-2',
      type: 'quickArithmetic',
      label: 'Subtration - Fill in the Blank',
      lockAfter: 2,
      commonData: {
        count: 10,
        isReverse: true,
        title: 'Fill in the blanks.'
      },
      data: [
        {
          type: 'misc~x-x'
        },
        {
          type: 'misc~x9-x'
        },
        {
          type: 'misc~xx-2'
        },
        {
          type: 'misc~xx-3'
        },
        {
          type: 'misc~xx-10'
        },
        {
          type: 'misc~xx-4'
        },
        {
          type: 'misc~xx-5'
        },
        {
          type: 'misc~xx-9'
        },
        {
          type: 'misc~xx-x'
        },
        {
          type: 'misc~xx-20'
        }
      ]
    },
    {
      type: 'missingWorkout',
      id: 'missing-addition',
      label: 'New Addition',
      lockAfter: 1,
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
      lockAfter: 1,
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
      lockAfter: 1,
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
