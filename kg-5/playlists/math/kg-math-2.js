export default {
  label: 'Shapes',
  id: 'kg-math-2',
  lockAfter: 4,
  list: [
    {
      type: 'completeWord',
      id: 'complete-word-1',
      label: 'Find First Letter - Shapes',
      data: {
        images: 'svg',
        text: `SQUARE | _QUARE
  TRIANGLE | _RIANGLE
  CIRCLE | _IRCLE
  OVAL | _VAL
  RECTANGLE | _ECTANGLE
  PENTAGON | _ENTAGON
  HEXAGON | _EXAGON
  DIAMOND | _IAMOND`,
        svgs: [
          `M 10 10 H 190 V 190 H 10 Z`,
          `M 100 10 L 190 190 H 10 Z`,
          `M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0`,
          `M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0`,
          `M 10 45 H 190 V 155 H 10 Z`,
          `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z`,
          `M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z`,
          `M 100 10 L 150 100 L 100 190 L 50 100 Z`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-2',
      label: 'Find First Letter - More Shapes',
      data: {
        images: 'svg',
        text: `MOON | _OON
  STAR | _TAR
  ARROW | _RROW
  CUBE | _UBE
  CONE | _ONE
  CYLINDER | _YLINDER`,
        svgs: [
          'M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100',
          'M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z',
          `M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z`,
          `M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150`,
          `M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50`,
          `M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-3',
      label: 'Complete Word - Shapes',
      data: {
        images: 'svg',
        text: `SQUARE | S_____
  TRIANGLE | T__A____
  CIRCLE | C_____
  OVAL | O___
  RECTANGLE | R________
  PENTAGON | P_______
  HEXAGON | H______
  DIAMOND | D______`,
        svgs: [
          `M 10 10 H 190 V 190 H 10 Z`,
          `M 100 10 L 190 190 H 10 Z`,
          `M 10, 100 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0`,
          `M 10, 100 a 90,45 0 1,0 180,0 a 90,45 0 1,0 -180,0`,
          `M 10 45 H 190 V 155 H 10 Z`,
          `M 100 10 L 190 80 L 150 190 H 50 L 10 80 Z`,
          `M 100 10 L 190 50 V 150 L 100 190 L 10 150 V 50 Z`,
          `M 100 10 L 150 100 L 100 190 L 50 100 Z`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-4',
      label: 'Complete Word - More Shapes',
      data: {
        images: 'svg',
        text: `MOON | M___
  STAR | S___
  ARROW | A____
  CUBE | C___
  CONE | C___
  CYLINDER | C_______`,
        svgs: [
          'M 190 100 A 90 90 90 1 1 70 16 A 45 45 90 0 0 190 100',
          'M 105.8 5 L 127.4 72.2 L 197 72.2 L 139.4 113 L 163.4 177.8 L 105.8 137 L 48.2 177.8 L 72.2 113 L 14.6 72.2 L 84.2 72.2 L 105.8 5 Z',
          `M 10 75 H 130 V 10 L 190 100 L 130 190 V 125 H 10 Z`,
          `M 10 80 H 120 V 190 H 10 Z L 40 40 H 150 V 150 H 40 L 40 40 M 120 80 L 150 40 M 150 150 L 120 190 M 10 190 L 40 150`,
          `M 10, 50 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 L 100 190 L 190 50`,
          `M 10, 40 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10, 160 a 90,25 0 1,0 180,0 a 90,25 0 1,0 -180,0 M 10 40 V 160 M 190 40 V 160`
        ]
      }
    }
  ]
};
