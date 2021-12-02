export default {
  label: 'Repeating Patterns',
  id: 'temp-shape-pattern',
  list: [
    {
      type: 'whatNext',
      id: 'what-next',
      label: 'What Comes Next',
      data: {
        type: 'shapeBased',
        title: 'Observe the pattern and find the next term.',
        list: [
          {
            shapes: `M 15 0 a 15 15 0 1 0 0.00001 0
      M 15 0 L 30 30 H 0 Z`,
            sequence: `0,0,0,1,0,0,0,1,0,0,0,1`,
            blanks: `0,0,0,1`,
            options: `0,1`,
            width: 30,
            height: 30
          },
          {
            shapes: `M 0 0 H 40 V 50 H 0 Z
                  M 0 20 H 40 V 50 H 0 Z`,
            sequence: `0,1,1,0,1,1,0,1,1`,
            blanks: `0,0,1`,
            options: `0,1`,
            width: 40,
            height: 50
          },
          {
            shapes: `M 0 0 H 50 V 50 H 0 Z
                  M 25 0 L 50 50 H 0 Z M 15 25 H 35 V 45 H 15 Z`,
            sequence: `0,1,0,1,0,1`,
            blanks: `0,1`,
            options: `0,1`,
            width: 50,
            height: 50
          },
          {
            shapes: `M 20 0 L 40 25 H 0 Z M 0 35 H 40 L 20 60 Z
                  M 0 0 H 40 L 20 25 Z M 0 35 H 40 L 20 60 Z`,
            sequence: `0,0, 1, 1, 0, 0, 1, 1`,
            blanks: `0,0,1`,
            options: `0,1`,
            width: 40,
            height: 60
          },
          {
            shapes: `M 20 0 a 10 10 0 1 0 0.00001 0 M 20 20 a 10 10 0 1 0 0.00001 0
                  M 10 10 a 10 10 0 1 0 0.00001 0 M 30 10 a 10 10 0 1 0 0.00001 0`,
            sequence: `0,0, 1, 1, 0, 0, 1, 1`,
            blanks: `0,0,1`,
            options: `0,1`,
            width: 40,
            height: 40
          },
          {
            shapes: ` M 30 0 a 10 10 0 1 0 0.00001 20 a 10 10 0 1 1 0.00001 20 a 10 10 0 1 0 0.00001 20 V 0
                  M 30 0 a 10 10 0 1 1 0.00001 20 a 10 10 0 1 0 0.00001 20 a 10 10 0 1 1 0.00001 20 V 0`,
            sequence: `0,1,0,1,0,1`,
            blanks: `0,1`,
            options: `0,1`,
            width: 40,
            height: 60
          },
          {
            shapes: `M 0 0 L 40 40 H 0 Z
                  M 40 0 L 0 40 H 40 Z`,
            sequence: `0,0,1,1,0,0,1,1`,
            blanks: `0,0,1`,
            options: `0,1`,
            width: 40,
            height: 40
          },
          {
            shapes: `M 20 0 a 20 20 0 1 0 0.00001 0 M 40 0 a 20 20 0 1 0 0.00001 0 M 30 20 a 20 20 0 1 0 0.00001 0 M 30 24 a 3 3 0 1 0 0.00001 0
                  M 20 0 a 20 20 0 1 0 0.00001 0 M 40 0 a 20 20 0 1 0 0.00001 0 M 30 20 a 20 20 0 1 0 0.00001 0 M 20 30 a 3 3 0 1 0 0.00001 0 M 40 30 a 3 3 0 1 0 0.00001 0 M 30 10 a 3 3 0 1 0 0.00001 0`,
            sequence: `1,1,0,1,1,0`,
            blanks: `1,1,0`,
            options: `0,1`,
            width: 60,
            height: 60
          },
          {
            shapes: `M 20 50 a 20 5 0 1 0 0.00001 0 M 0 55 L 20 0 L 40 55 
                  M 20 50 a 20 5 0 1 0 0.00001 0 M 20 0 a 20 5 0 1 0 0.00001 0 M 0 5 V 55 M 40 5 V 55`,
            sequence: `1,1,0,1,1,0, 1, 1, 0`,
            blanks: `1,1,0`,
            options: `0,1`,
            width: 40,
            height: 60
          }
        ]
      }
    }
  ]
};
