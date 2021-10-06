export default {
  label: 'Picture Words 3',
  id: 'picture-3',
  lockAfter: 4,
  list: [
    {
      type: 'completeWord',
      id: 'complete-word-fruits',
      label: 'Complete Word - Fruits',
      data: {
        images: 'svg',
        text: `SQUARE | S_____
  TRIANGLE | T__A____
  CIRCLE | C_____
  OVAL | O___`,
        svgs: [
          `M 10 10 H 190 V 190 H 10 Z`,
          `M 100 10 L 190 190 H 10 Z`,
          `M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0`,
          `M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-fruits',
      label: 'Complete Word - Fruits',
      data: {
        images: 'svg',
        text: `MOON | M___
          STAR | S___
          `,
        svgs: [
          'M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100',
          'M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z'
        ]
      }
    }
  ]
};
