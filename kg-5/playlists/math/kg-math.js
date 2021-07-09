export default {
  label: 'Kindergarten Math',
  id: 'kg-math',
  lockAfter: 4,
  list: [
    {
      type: 'tracing',
      label: 'Numbers (1 - 5)',
      id: 'write',
      data: {
        type: 'numbers',
        repeatCount: 3,
        chars: '12345'
      }
    },
    {
      type: 'tracing',
      label: 'Numbers (6 - 9)',
      id: 'write-2',
      data: {
        type: 'numbers',
        repeatCount: 3,
        chars: '67890'
      }
    },
    {
      id: 'draw-shapes',
      label: 'Shapes',
      type: 'tracing',
      data: {
        type: 'custom',
        audio: 'shapes.mp3',
        source: [
          {
            id: '0',
            paths: [
              'M 150 20 C 225 20 280 75 280 150',
              'M 280 150 C 280 225 225 280 150 280 ',
              'M 150 280 C 75 280 20 225 20 150',
              'M 20 150 C 20 75 75 20 150 20'
            ],
            width: 300,
            audio: 0
          },
          {
            id: '1',
            paths: [
              'M 150 20 L 20 280',
              'M 20 280 L 280 280',
              'M 280 280 L 150 20'
            ],
            width: 300,
            audio: 2
          },
          {
            id: '2',
            paths: [
              'M 20 20 L 280 20 ',
              'M 280 20 L 280 180',
              'M 280 180 L 20 180',
              'M 20 180 L 20 20'
            ],
            width: 300,
            audio: 4
          },
          {
            id: '3',
            paths: [
              'M 150 20 C 200 20 255 75 255 150',
              'M 255 150 C 255 225 200 280 150 280  ',
              'M 150 280 C 100 280 45 225 45 150',
              'M 45 150 C 45 75 100 20 150 20 '
            ],
            width: 300,
            audio: 6
          },
          {
            id: '4',
            paths: [
              'M 150 20 L 280 150 ',
              'M 280 150 L 150 280 ',
              'M 150 280 L 20 150',
              'M  20 150 L 150 20'
            ],
            width: 300,
            audio: 8
          },
          {
            id: '5',
            paths: [
              'M  150 85 C 300 0 300 150 150 280',
              'M 150 280 C 0 150 0 0 150 85'
            ],
            width: 300,
            audio: 10
          },
          {
            id: '6',
            paths: [
              'M 20 20 L 280 20',
              'M  280 20 L 280 280',
              'M 280 280 L 20 280',
              'M 20 280 L 20 20'
            ],
            width: 300,
            audio: 12
          },
          {
            id: '8',
            paths: [
              'M 75 20 L 225 20 L 280 150',
              'M  280 150 L 225 280 L 75 280 ',
              'M  75 280 L 20 150 L 75 20'
            ],
            width: 300,
            audio: 14
          }
        ]
      }
    },
    {
      type: 'counter',
      id: 'count',
      label: 'Count Objects',
      data: {
        level: 1
      }
    },
    {
      type: 'addition',
      label: 'After Number',
      id: 'after-no',
      data: {
        type: 'after~xx'
      }
    },
    {
      type: 'addition',
      label: 'Before Number',
      id: 'before-no',
      data: {
        type: 'before~xx'
      }
    },
    {
      type: 'compare',
      label: 'Compare Numbers',
      id: 'compare-no',
      data: {
        level: 1
      }
    },
    {
      type: 'rightOne',
      id: 'biggest-number',
      label: 'Biggest Number',
      data: {
        title: 'Click on the Biggest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'biggest',
        pattern: 'x'
      }
    },
    {
      type: 'rightOne',
      id: 'smallest-number',
      label: 'Smallest Number',
      data: {
        title: 'Click on the Smallest Number.',
        fontSize: '2.5',
        noCaps: true,
        type: 'math',
        probType: 'smallest',
        pattern: 'x'
      }
    },
    {
      type: 'match',
      label: 'Number Names',
      id: '1000',
      data: {
        title: 'Match Number names',
        text: `1, One
        2, Two
        3, Three
        4, Four
        5, Five
        6, Six`
      }
    }
  ]
};
