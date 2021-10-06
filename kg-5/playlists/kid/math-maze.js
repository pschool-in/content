export default {
  label: 'Math Maze',
  id: 'math-maze',
  list: [
    {
      id: 'connect-vowels',
      type: 'maze',
      label: 'Connect the Vowels',
      data: [
        {
          title:
            'Connect the letters from 1 to 15 and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 3,
            y: 0
          },
          size: 50,
          fills: `0,1,1,1,0,0
                0,1,0,0,0,0
                0,1,1,1,0,0
                0,0,0,1,0,0
                0,0,0,1,0,0
                1,1,1,1,0,0`,
          table: `0,1,1,1,0,0
        0,1,0,0,0,0
        0,1,1,1,0,0
        0,0,0,1,0,0
        0,0,0,1,0,0
        1,1,1,1,0,0`
        }
      ]
    }
  ]
};
