export default {
  label: 'Solve the Maze',
  id: 'maze',
  list: [
    {
      type: 'maze',
      id: 'maze2',
      label: 'Solve the Maze - 2',
      lockAfter: 5,
      data: [
        {
          table: `0,1,0,0,1,0,1,1,0,1
      1,0,0,0,0,0,0,1,1,1
      0,0,1,1,1,0,1,0,0,1
      0,0,1,1,1,0,1,0,0,0
      1,0,0,0,1,1,1,1,0,1
      1,1,0,1,0,0,0,1,0,1
      1,0,1,0,0,0,0,1,0,0
      1,0,0,0,1,1,1,0,1,0
      0,1,1,0,0,1,0,1,0,1
      0,0,1,0,0,0,0,0,0,0`,

          table2: `1,1,1,0,1,0,1,0,1,0
      1,0,1,1,0,1,0,0,0,0
      0,1,0,1,0,0,1,1,0,0
      0,1,0,0,1,0,1,1,1,0
      1,1,1,0,0,0,1,1,1,0
      0,1,1,1,1,0,0,0,1,0
      0,0,0,1,1,1,1,0,1,0
      1,1,1,1,0,0,0,1,1,0
      1,0,1,1,0,1,1,0,0,0
      1,0,0,0,0,0,1,1,1,0`,

          startPt: { x: 2, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the monkey to get the bananas.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252'
        },
        {
          table: `1,0,0,0,1,1,0,1,0,1
      1,0,0,0,0,0,1,1,0,1
      1,0,0,0,1,0,0,0,1,0
      0,0,1,0,0,0,1,1,0,1
      0,1,1,1,1,0,1,1,1,1
      0,0,1,1,1,0,1,1,1,1
      1,0,1,1,0,0,0,1,0,1
      0,0,0,0,0,1,1,0,0,1
      1,0,0,0,0,1,1,0,1,0
      1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,1,0,0,1,0,0,1,0
      0,1,1,1,0,1,0,1,0,0
      1,1,1,1,0,1,0,0,1,0
      1,0,1,1,0,1,0,0,0,0
      1,1,0,1,1,1,1,0,1,0
      1,0,0,0,0,1,0,0,0,0
      1,1,0,0,1,0,0,1,0,0
      1,0,1,0,0,1,0,1,0,0
      1,1,1,1,1,0,1,1,1,0
      0,1,1,1,1,0,1,0,1,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 0, y: 0 },
          title: 'Help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#a20da7'
        },
        {
          table: `1,0,1,1,0,1,1,0,1,0
      0,1,0,1,0,1,0,1,1,1
      1,0,1,1,0,0,0,1,1,1
      0,1,1,0,1,1,1,1,0,1
      0,0,0,0,0,0,1,0,0,0
      1,0,1,0,0,1,1,1,0,1
      1,1,1,1,1,1,0,0,0,1
      0,0,0,1,0,0,1,1,0,0
      1,0,1,0,1,0,0,1,1,1
      1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,0,0,1,0,1,0,1,0
      1,1,0,1,0,0,1,0,1,0
      1,0,1,1,1,1,1,0,0,0
      0,1,0,0,0,1,0,0,0,0
      1,0,1,1,1,0,0,1,1,0
      1,0,1,1,1,0,0,1,1,0
      0,1,1,0,0,1,0,1,0,0
      0,0,0,0,1,0,1,1,1,0
      1,1,1,0,1,1,0,0,1,0
      0,1,1,1,0,1,1,1,0,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the cat to get the milk.',
          start: 'cat',
          target: 'milk',
          color: '#b4b2b4'
        },
        {
          table: `0,0,1,0,0,1,0,0,1,1
      1,1,0,1,1,1,1,1,1,1
      0,0,0,0,1,0,1,1,0,1
      1,1,1,0,1,0,1,0,0,1
      0,0,1,1,0,0,0,0,1,1
      1,1,1,0,1,0,0,1,1,1
      0,1,0,1,0,1,1,1,1,0
      1,0,0,0,1,1,1,0,0,1
      1,1,1,0,0,1,1,0,1,1
      1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,0,1,1,0,1,0,0,0
      0,1,0,1,0,0,1,0,0,0
      0,1,1,0,0,1,0,0,0,0
      1,0,1,1,1,0,0,1,1,0
      0,0,0,1,0,1,1,1,0,0
      0,0,0,0,1,1,1,0,0,0
      0,0,1,0,1,0,0,0,0,0
      1,1,1,1,0,0,0,1,1,0
      0,0,1,1,0,0,0,1,0,0
      0,1,1,1,1,0,1,1,0,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252'
        },
        {
          table: `1,0,0,1,0,1,1,1,1,0
      1,1,1,1,1,0,0,0,0,1
      1,1,0,1,0,1,0,0,0,1
      1,0,0,0,0,1,1,0,0,1
      0,0,1,1,0,1,0,0,1,1
      1,0,1,1,1,0,1,1,0,1
      0,1,1,1,0,0,1,0,0,0
      1,0,1,1,1,1,0,1,0,1
      1,1,0,1,0,0,1,0,1,1
      0,0,0,0,0,0,0,0,0,1`,

          table2: `1,1,0,1,1,0,1,0,1,0
      1,1,0,0,0,1,0,1,0,0
      0,0,0,0,1,1,1,1,1,0
      0,1,1,0,1,0,1,1,1,0
      1,1,0,1,1,0,1,1,0,0
      0,1,0,0,0,0,1,0,0,0
      1,0,0,1,1,0,0,1,1,0
      1,1,1,0,0,0,1,1,1,0
      0,1,0,0,1,1,0,1,0,0
      0,0,1,0,1,1,0,1,0,0`,

          startPt: { x: 9, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#b4b2b4'
        },
        {
          title: 'Help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          startPt: {
            x: 6,
            y: 9
          },
          endPt: {
            x: 0,
            y: 0
          },
          table2: `0,1,1,1,1,1,1,1,0,0
      0,0,1,0,0,0,0,0,1,0
      0,1,0,0,0,0,0,0,1,0
      0,0,1,1,1,0,0,1,0,0
      0,1,0,1,0,1,1,0,0,0
      0,0,0,0,0,0,1,1,0,0
      0,0,0,0,0,1,1,0,1,0
      1,0,0,0,0,0,1,0,0,0
      1,1,0,0,1,0,0,0,1,0
      1,1,1,0,1,0,0,1,1,0`,
          table: `1,1,0,0,1,0,0,0,1,1
      1,0,1,1,1,1,1,1,1,0
      1,1,0,1,0,0,1,0,1,1
      1,0,0,0,0,1,1,0,1,1
      1,1,1,1,1,1,0,0,1,1
      1,1,1,1,1,0,0,1,0,1
      1,1,1,1,1,1,0,0,1,1
      0,0,1,1,1,1,1,1,1,0
      1,0,0,1,0,1,1,1,0,1
      0,0,0,0,0,0,1,0,0,0`
        },
        {
          title: 'Help the cat to get the milk.',
          start: 'cat',
          target: 'milk',
          color: '#c05252',
          startPt: {
            x: 9,
            y: 9
          },
          endPt: {
            x: 9,
            y: 0
          },
          table2: `1,1,1,0,1,0,0,0,1,0
      1,0,0,0,0,1,1,1,0,0
      0,0,1,0,0,1,0,1,1,0
      0,1,1,1,1,1,0,1,1,0
      1,0,1,0,1,0,1,0,1,0
      1,0,1,1,0,0,0,1,1,0
      0,0,0,1,1,0,0,1,1,0
      1,1,0,1,1,1,1,1,0,0
      1,0,0,1,1,0,1,0,0,0
      0,1,1,1,0,1,1,1,0,0`,
          table: `0,0,0,1,1,0,1,1,1,1
      1,1,1,1,1,1,0,0,0,1
      1,1,0,0,0,0,1,0,1,0
      1,0,1,0,0,0,0,0,1,0
      0,1,0,0,1,1,1,1,0,0
      1,1,1,0,0,1,1,0,0,0
      1,0,1,1,0,0,0,0,1,1
      0,0,1,0,0,0,1,0,1,1
      1,1,0,0,1,1,0,0,1,1
      0,0,0,0,0,0,0,0,0,1`
        },
        {
          title: 'Help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 9
          },
          endPt: {
            x: 5,
            y: 0
          },
          table2: `1,1,0,1,1,0,0,1,1,0
      0,1,0,1,1,0,0,0,0,0
      0,1,1,1,1,0,1,0,0,0
      0,1,0,1,1,1,1,1,1,0
      1,0,0,0,1,1,1,1,1,0
      1,0,0,0,0,1,0,1,1,0
      0,1,0,1,0,0,0,0,1,0
      0,0,1,1,0,0,1,0,0,0
      0,0,1,1,0,0,0,1,0,0
      1,1,1,1,0,0,1,1,1,0`,
          table: `1,0,1,1,0,0,1,1,1,1
      1,0,0,0,0,1,1,1,1,1
      1,1,0,0,0,0,0,0,1,0
      1,0,1,1,0,0,0,0,0,1
      0,1,1,1,1,0,0,0,0,1
      1,0,1,0,1,1,1,1,0,0
      1,1,0,1,0,1,1,1,1,1
      1,1,1,0,0,1,1,0,1,1
      1,1,0,0,1,1,1,0,0,1
      0,0,0,0,0,1,0,0,0,0`
        },
        {
          table: `1,1,0,0,1,1,0,0,0,0
      0,1,1,0,0,1,1,1,0,0
      0,0,1,1,0,1,1,1,1,1
      1,0,0,1,0,0,0,0,0,0
      0,0,0,1,1,0,0,1,1,1
      1,1,0,0,0,1,1,1,1,0
      1,1,0,1,0,1,1,1,0,1
      1,1,0,1,0,1,1,0,1,1
      1,1,0,0,0,0,1,1,0,1
      1,0,0,0,0,0,0,0,0,0`,

          table2: `1,1,1,0,1,1,1,1,1,0
      0,0,1,0,0,0,1,1,1,0
      1,0,0,0,1,0,0,1,1,0
      1,0,0,1,1,0,0,0,0,0
      0,1,1,1,1,1,1,0,0,0
      1,1,0,0,0,1,0,0,1,0
      0,0,1,0,1,0,0,0,0,0
      0,0,1,0,1,0,1,1,0,0
      0,1,1,1,1,0,0,1,0,0
      0,1,1,1,0,1,0,1,1,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the monkey to get the bananas.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252'
        },
        {
          title: 'Help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252',
          startPt: {
            x: 9,
            y: 9
          },
          endPt: {
            x: 0,
            y: 0
          },
          table2: `1,0,1,1,1,1,1,0,1,0
      0,1,1,1,0,0,1,0,0,0
      1,0,0,1,1,0,1,0,0,0
      1,0,0,1,1,1,1,1,0,0
      1,1,0,1,0,0,0,1,1,0
      1,0,1,1,0,0,0,0,1,0
      0,1,0,1,0,0,1,0,0,0
      1,0,0,1,1,0,0,1,0,0
      0,0,0,1,1,0,1,0,1,0
      1,1,0,1,1,1,1,1,0,0`,
          table: `0,1,0,0,0,1,0,1,1,1
      1,0,1,0,0,1,0,0,1,1
      0,1,1,1,0,0,1,0,1,1
      1,0,1,0,0,1,1,0,0,1
      1,0,0,1,0,1,1,1,0,0
      1,0,1,0,1,1,0,1,1,1
      1,0,1,1,0,0,1,0,1,1
      1,0,1,0,0,1,1,1,0,1
      1,1,1,1,0,0,0,0,1,1
      0,0,0,0,0,0,0,0,0,1`
        }
      ]
    },
    {
      type: 'maze',
      id: 'maze2',
      lockAfter: 2,
      label: 'Solve the Maze - 2',
      data: [
        {
          table: `0,1,0,0,1,0,1,1,0,1
  1,0,0,0,0,0,0,1,1,1
  0,0,1,1,1,0,1,0,0,1
  0,0,1,1,1,0,1,0,0,0
  1,0,0,0,1,1,1,1,0,1
  1,1,0,1,0,0,0,1,0,1
  1,0,1,0,0,0,0,1,0,0
  1,0,0,0,1,1,1,0,1,0
  0,1,1,0,0,1,0,1,0,1
  0,0,1,0,0,0,0,0,0,0`,

          table2: `1,1,1,0,1,0,1,0,1,0
  1,0,1,1,0,1,0,0,0,0
  0,1,0,1,0,0,1,1,0,0
  0,1,0,0,1,0,1,1,1,0
  1,1,1,0,0,0,1,1,1,0
  0,1,1,1,1,0,0,0,1,0
  0,0,0,1,1,1,1,0,1,0
  1,1,1,1,0,0,0,1,1,0
  1,0,1,1,0,1,1,0,0,0
  1,0,0,0,0,0,1,1,1,0`,

          startPt: { x: 2, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the monkey to get the bananas.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252'
        },
        {
          table: `1,0,0,0,1,1,0,1,0,1
  1,0,0,0,0,0,1,1,0,1
  1,0,0,0,1,0,0,0,1,0
  0,0,1,0,0,0,1,1,0,1
  0,1,1,1,1,0,1,1,1,1
  0,0,1,1,1,0,1,1,1,1
  1,0,1,1,0,0,0,1,0,1
  0,0,0,0,0,1,1,0,0,1
  1,0,0,0,0,1,1,0,1,0
  1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,1,0,0,1,0,0,1,0
  0,1,1,1,0,1,0,1,0,0
  1,1,1,1,0,1,0,0,1,0
  1,0,1,1,0,1,0,0,0,0
  1,1,0,1,1,1,1,0,1,0
  1,0,0,0,0,1,0,0,0,0
  1,1,0,0,1,0,0,1,0,0
  1,0,1,0,0,1,0,1,0,0
  1,1,1,1,1,0,1,1,1,0
  0,1,1,1,1,0,1,0,1,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 0, y: 0 },
          title: 'Help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#a20da7'
        },
        {
          table: `1,0,1,1,0,1,1,0,1,0
  0,1,0,1,0,1,0,1,1,1
  1,0,1,1,0,0,0,1,1,1
  0,1,1,0,1,1,1,1,0,1
  0,0,0,0,0,0,1,0,0,0
  1,0,1,0,0,1,1,1,0,1
  1,1,1,1,1,1,0,0,0,1
  0,0,0,1,0,0,1,1,0,0
  1,0,1,0,1,0,0,1,1,1
  1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,0,0,1,0,1,0,1,0
  1,1,0,1,0,0,1,0,1,0
  1,0,1,1,1,1,1,0,0,0
  0,1,0,0,0,1,0,0,0,0
  1,0,1,1,1,0,0,1,1,0
  1,0,1,1,1,0,0,1,1,0
  0,1,1,0,0,1,0,1,0,0
  0,0,0,0,1,0,1,1,1,0
  1,1,1,0,1,1,0,0,1,0
  0,1,1,1,0,1,1,1,0,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the cat to get the milk.',
          start: 'cat',
          target: 'milk',
          color: '#b4b2b4'
        },
        {
          table: `0,0,1,0,0,1,0,0,1,1
  1,1,0,1,1,1,1,1,1,1
  0,0,0,0,1,0,1,1,0,1
  1,1,1,0,1,0,1,0,0,1
  0,0,1,1,0,0,0,0,1,1
  1,1,1,0,1,0,0,1,1,1
  0,1,0,1,0,1,1,1,1,0
  1,0,0,0,1,1,1,0,0,1
  1,1,1,0,0,1,1,0,1,1
  1,0,0,0,0,0,0,0,0,0`,

          table2: `0,1,0,1,1,0,1,0,0,0
  0,1,0,1,0,0,1,0,0,0
  0,1,1,0,0,1,0,0,0,0
  1,0,1,1,1,0,0,1,1,0
  0,0,0,1,0,1,1,1,0,0
  0,0,0,0,1,1,1,0,0,0
  0,0,1,0,1,0,0,0,0,0
  1,1,1,1,0,0,0,1,1,0
  0,0,1,1,0,0,0,1,0,0
  0,1,1,1,1,0,1,1,0,0`,

          startPt: { x: 0, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252'
        },
        {
          table: `1,0,0,1,0,1,1,1,1,0
  1,1,1,1,1,0,0,0,0,1
  1,1,0,1,0,1,0,0,0,1
  1,0,0,0,0,1,1,0,0,1
  0,0,1,1,0,1,0,0,1,1
  1,0,1,1,1,0,1,1,0,1
  0,1,1,1,0,0,1,0,0,0
  1,0,1,1,1,1,0,1,0,1
  1,1,0,1,0,0,1,0,1,1
  0,0,0,0,0,0,0,0,0,1`,

          table2: `1,1,0,1,1,0,1,0,1,0
  1,1,0,0,0,1,0,1,0,0
  0,0,0,0,1,1,1,1,1,0
  0,1,1,0,1,0,1,1,1,0
  1,1,0,1,1,0,1,1,0,0
  0,1,0,0,0,0,1,0,0,0
  1,0,0,1,1,0,0,1,1,0
  1,1,1,0,0,0,1,1,1,0
  0,1,0,0,1,1,0,1,0,0
  0,0,1,0,1,1,0,1,0,0`,

          startPt: { x: 9, y: 9 },
          endPt: { x: 9, y: 0 },
          title: 'Help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#b4b2b4'
        }
      ]
    },
    {
      id: '1632590530696',
      editable: true,
      type: 'maze',
      label: 'Solve the Maze',
      data: {
        title: 'Help the monkey to get the banana.',
        start: 'monkey',
        target: 'banana',
        color: '#c05252',
        startPt: {
          x: 4,
          y: 9
        },
        endPt: {
          x: 4,
          y: 0
        },
        table2: `1,0,1,0,0,1,1,1,1,0
1,1,1,1,0,0,0,0,1,0
1,0,0,1,0,1,0,1,0,0
1,1,1,1,0,1,1,0,1,0
0,1,1,0,0,0,0,0,0,0
0,0,1,1,1,1,1,1,0,0
0,1,0,1,1,0,0,1,1,0
1,0,0,0,0,0,1,0,0,0
1,1,0,0,0,0,1,0,1,0
0,1,1,0,0,1,1,1,0,0`,
        table: `1,0,1,0,1,1,1,1,0,0
1,0,1,0,1,0,1,1,1,1
0,0,1,0,0,0,0,1,0,0
1,0,0,1,1,1,1,1,1,1
1,1,0,0,0,1,0,0,1,1
1,0,1,0,0,0,1,0,0,1
1,0,1,1,1,1,1,0,1,0
0,1,1,1,1,1,0,1,1,1
1,0,1,0,1,1,0,0,1,1
0,0,0,0,1,0,0,0,0,0`
      }
    }
  ]
};
