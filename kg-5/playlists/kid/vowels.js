export default {
  label: 'Vowels and Consonants',
  id: 'vowels',
  list: [
    {
      id: 'connect-vowels',
      type: 'maze',
      label: 'Connect the Vowels',
      data: [
        {
          title: 'Connect the vowels and help the monkey to get the banana.',
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
          fills: `B,A,U,I,S,T
  V,U,W,X,Y,Z
  R,A,I,E,S,T
  N,L,M,U,X,R
  B,C,D,O,F,G
  E,I,U,A,Q,T`,
          table: `0,1,1,1,0,0
  0,1,0,0,0,0
  0,1,1,1,0,0
  0,0,0,1,0,0
  0,0,0,1,0,0
  1,1,1,1,0,0`
        },
        {
          title: 'Connect the vowels and help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#c05252',
          startPt: {
            x: 5,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `A,B,C,D,Z,U
  U,S,T,X,B,C
  E,N,O,I,U,Z
  I,M,O,Z,E,P
  U,A,E,R,O,I
  B,C,X,Y,M,A`,
          table: `1,0,0,0,0,0
  1,0,0,0,0,0
  1,0,1,1,1,0
  1,0,1,0,1,0
  1,1,1,0,1,1
  0,0,0,0,0,1`
        },
        {
          title: 'Connect the vowels and help the dog to get the bone.',
          start: 'dog',
          target: 'bone',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `S,T,X,R,O,I
  G,H,J,K,A,B
  W,H,B,T,E,O
  I,O,U,L,X,U
  E,X,E,V,W,E
  A,R,A,I,O,U`,
          table: `0,0,0,0,1,1
  0,0,0,0,1,0
  0,0,0,0,1,1
  1,1,1,0,0,1
  1,0,1,0,0,1
  1,0,1,1,1,1`
        },
        {
          title: 'Connect the vowels and help the monkey to get the banana.',
          start: 'monkey',
          target: 'banana',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 0,
            y: 0
          },
          size: 50,
          fills: `E,O,A,I,B,T
  X,Y,Z,E,U,B
  A,E,U,B,I,Z
  I,C,E,U,A,C
  E,R,S,T,W,V
  U,B,C,D,F,G`,
          table: `1,1,1,1,0,0
  0,0,0,1,1,0
  1,1,1,0,1,0
  1,0,1,1,1,0
  1,0,0,0,0,0
  1,0,0,0,0,0`
        }
      ]
    },
    {
      id: 'connect-consonants',
      type: 'maze',
      label: 'Connect the Consonants',
      data: [
        {
          title: 'Connect the consonants and help the fox to get the grapes.',
          start: 'fox',
          target: 'grapes',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 2,
            y: 0
          },
          size: 50,
          fills: `A,E,B,C,D,F
U,A,I,E,O,Y
O,E,U,I,Z,X
I,A,O,C,K,E
N,L,R,D,O,A
B,U,O,A,E,I`,
          table: `0,0,1,1,1,1
  0,0,0,0,0,1
  0,0,0,0,1,1
  0,0,0,1,1,0
  1,1,1,1,0,0
  1,0,0,0,0,0`
        },
        {
          title: 'Connect the consonants and help the cat to get the milk.',
          start: 'cat',
          target: 'milk',
          color: '#c05252',
          startPt: {
            x: 0,
            y: 5
          },
          endPt: {
            x: 5,
            y: 0
          },
          size: 50,
          fills: `O,U,D,B,S,T
A,E,K,I,O,U
U,O,G,M,N,P
U,O,I,E,A,Q
A,E,I,R,S,T
V,W,X,Y,U,A`,
          table: `0,0,1,1,1,1
  0,0,1,0,0,0
  0,0,1,1,1,1
  0,0,0,0,0,1
  0,0,0,1,1,1
  1,1,1,1,0,0`
        }
      ]
    }
  ]
};
