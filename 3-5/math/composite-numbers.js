export default {
  id: 'composite-numbers',
  label: 'Composite Numbers',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Composite Number',
      id: 'pick-composite',
      commonData: {
        title: `Select the Composite Number.`,
        fontSize: '2rem'
      },
      data: [
        `4, 2, 3, 5
15, 11, 13, 17  
9, 19, 29, 59
39, 31, 37, 41
22, 11, 31, 41`,

        `15, 5, 53, 59
54, 53, 47, 59
51, 61, 71, 17
81, 83, 79, 89
57, 47, 67, 97`,

        `99, 97, 103, 101
198, 197, 199, 191
108, 107, 109, 101
133, 131, 137, 139
189, 139, 149, 199`
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Prime Number',
      id: 'pick-prime',
      commonData: {
        title: `Select the Prime Number.`,
        fontSize: '2rem'
      },
      data: [
        `7, 8, 9, 10
              11, 15, 21, 25
              37, 35, 39, 33
              43, 34, 49, 45
              31, 21, 51, 27`,

        `61, 51, 16, 15
              67, 54, 66, 68
              79, 77, 75, 91
              83, 81, 82, 87
              97, 95, 99, 93`,

        `101, 102, 105, 111
              127, 27, 117, 147
              151, 152, 153, 154
              173, 172, 171, 170
              199, 198, 200, 201`
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Right Answer',
      id: 'pick-right',
      commonData: {
        title: 'Pick the Right Answer',
        hasHint: true,
        fontSize: '2rem',
        hintFontSize: '1.2rem'
      },
      data: [
        `If a number is divisible by 3 and 5, it is also divisible by | 15 | 16 | 14 | 17
        If a number is divisible by 2 and 3, it is also divisible by | 6 | 7 | 8 | 9
        If a number is divisible by 5 and 2, it is also divisible by | 10 | 15 | 4 | 6
        If a number is divisible by 7 and 2, it is also divisible by | 14 | 28 | 4 | 8
        If a number is divisible by 3 and 11, it is also divisible by | 33 | 21 | 22 | 44`,

        `If a number is not divisible by 5, then it is also not divisible by | 10 | 2 | 6 | 3
        If a number is not divisible by 4, then it is also not divisible by | 8 | 2 | 6 | 10
        If a number is not divisible by 9, then it is also not divisible by | 18 | 6 | 2 | 3
        If a number is not divisible by 12, then it is also not divisible by | 36 | 28 | 6 | 4
        If a number is not divisible by 30, then it is also not divisible by | 120 | 50 | 15 | 10`,

        `If a number is divisible by 3, 6 and 5, it is also divisible by | 30 | 40 | 25 | 35
        If a number is divisible by 2, 3 and 4, it is also divisible by | 12 | 10 | 18 | 15
        If a number is divisible by 5, 3 and 2, it is also divisible by | 35 | 50 | 14 | 6
        If a number is divisible by 7, 3 and 2, it is also divisible by | 14 | 35 | 22 | 17
        If a number is divisible by 3, 5 and 11, it is also divisible by | 55 | 34 | 44 | 77`
      ]
    }
  ]
};
