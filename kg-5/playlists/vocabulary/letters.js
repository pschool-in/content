export default {
  label: 'Kindergarten English',
  id: 'letters',
  lockAfter: 4,
  list: [
    {
      type: 'tracing',
      label: 'Capital Letters (A - E)',
      id: 'write-A-E',
      data: {
        type: 'capitalLetters',
        repeatCount: 3,
        chars: 'ABCDE'
      }
    },
    {
      type: 'tracing',
      label: 'Capital Letters (F - J)',
      id: 'write-F-J',
      data: {
        type: 'capitalLetters',
        repeatCount: 3,
        chars: 'FGHIJ'
      }
    },
    {
      type: 'tracing',
      label: 'Capital Letters (K - O)',
      id: 'write-K-O',
      data: {
        type: 'capitalLetters',
        repeatCount: 3,
        chars: 'KLMNO'
      }
    },
    {
      type: 'tracing',
      label: 'Capital Letters (P - T)',
      id: 'write-P-T',
      data: {
        type: 'capitalLetters',
        repeatCount: 3,
        chars: 'PQRST'
      }
    },
    {
      type: 'tracing',
      label: 'Capital Letters (U - Z)',
      id: 'write-U-Z',
      data: {
        type: 'capitalLetters',
        repeatCount: 3,
        chars: 'UVWXYZ'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Capital Letters',
      slug: 'correct-spelling',
      id: 'sound',
      commonData: {
        title: 'Listen to the sound and click on the letter.',
        type: 'letters',
        audio: 'kg-5/english.mp3'
      },
      data: [
        {
          words: 'A, B, C, D, E, F, G, H, I, J'
        },
        {
          words: 'K, L, M, N, O, P, Q, R',
          audioOffset: 20
        },
        {
          words: 'S, T, U, V, W, X, Y, Z',
          audioOffset: 36
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Small Letters',
      slug: 'correct-spelling',
      id: 'sound-2',
      commonData: {
        title: 'Listen to the sound and click on the letter.',
        type: 'letters',
        audio: 'kg-5/english.mp3'
      },
      data: [
        {
          words: 'a, b, c, d, e, f, g, h, i, j'
        },
        {
          words: 'k, l, m, n, o, p, q, r',
          audioOffset: 20
        },
        {
          words: 's, t, u, v, w, x, y, z',
          audioOffset: 36
        }
      ]
    }
  ]
};
