export default {
  label: 'Letter',
  id: 'alphabets',
  img: 'writing',
  list: [
    {
      type: 'tracing',
      label: 'Capital Letters',
      id: 'capital-letters',
      data: { type: 'capitalLetters' }
    },
    /*{ type: "motorSkills", label: "Motor Skills" },*/
    {
      type: 'tracing',
      label: 'Small Letters',
      id: 'small-letters',
      data: { type: 'smallLetters' }
    },
    {
      type: 'tracing',
      id: 'numbers',
      label: 'Numbers',
      data: { type: 'numbers' }
    },
    {
      type: 'tracing',
      id: 'cursive-small',
      label: 'Cursive Letters',
      data: { type: 'cursive', repeatCount: 12 }
    },
    {
      type: 'tracing',
      id: 'cursive-capital',
      label: 'Capital Cursive Letters',
      data: { type: 'cursiveCapital', repeatCount: 12 }
    },
    {
      type: 'rightOne',
      label: 'Listen to Sound and Identify Letters',
      id: 'sound-mixed-letters',
      commonData: {
        title: 'Listen to Sound and Identify Letters.',
        type: 'letters',
        audio: 'kg-5/english.mp3'
      },
      data: [
        {
          words: `A, B, C, D, E, F, G, H, I, J`
        },
        {
          words: `K, L, M, N, O, P, Q, R`,
          audioOffset: 20
        },
        {
          words: `S, T, U, V, W, X, Y, Z`,
          audioOffset: 36
        }
      ]
    },
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
    }
  ]
};
