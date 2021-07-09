export default {
  label: 'Kindergarten English',
  id: 'letters-2',
  lockAfter: 4,
  list: [
    {
      type: 'tracing',
      id: 'write-a-e',
      label: 'Small Letters (a - e)',
      data: {
        type: 'smallLetters',
        repeatCount: 3,
        chars: 'abcde'
      }
    },
    {
      type: 'tracing',
      id: 'write-f-j',
      label: 'Small Letters (f - j)',
      data: {
        type: 'smallLetters',
        repeatCount: 3,
        chars: 'fghij'
      }
    },
    {
      type: 'tracing',
      id: 'write-k-o',
      label: 'Small Letters (k - o)',
      data: {
        type: 'smallLetters',
        repeatCount: 3,
        chars: 'klmno'
      }
    },
    {
      type: 'tracing',
      label: 'Small Letters (p - t)',
      id: 'write-p-t',
      data: {
        type: 'smallLetters',
        repeatCount: 3,
        chars: 'pqrst'
      }
    },
    {
      type: 'tracing',
      label: 'Small Letters (u - z)',
      id: 'write-u-z',
      data: {
        type: 'smallLetters',
        repeatCount: 3,
        chars: 'uvwxyz'
      }
    },
    {
      type: 'match',
      label: 'Vehicles',
      id: 'vehicles',
      commonData: {
        title: 'Match Vehicles with their first letter.',
        rightImgType: 'vehicles',
        big: true
      },
      data: [
        `A, aeroplane
S, ship
C, car
T, train
B, bus`,

        `B, boat
C, cycle
H, helicoptor
M, motorbike
T, tractor`
      ]
    },
    {
      type: 'match',
      label: 'Flowers',
      id: 'flowers',
      data: {
        title: 'Match Flowers with their first letter.',
        text: `R, rose
L, lotus
H, hibiscus
M, marigold
S, sunflower`,
        rightImgType: 'flowers',
        big: true
      }
    },
    {
      type: 'match',
      label: 'Parts of the Body',
      id: 'parts-body',
      commonData: {
        title: 'Match the parts of body with their first letter.',
        rightImgType: 'bodyParts',
        big: true
      },
      data: [
        `E, ear
F, foot
H, hand
T, tooth`,
        `E, eye
H, hair
N, nose
M, mouth`
      ]
    },
    {
      type: 'match',
      label: 'Picture',
      id: 'things',
      commonData: {
        title: 'Match the picture with their first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `H, house
T, table
B, bed
S, scissors
C, chair
W, whistle`,

        `S, sharpener
B, boy
G, girl
M, man
W, woman`,

        `C, coat
P, pen
G, glasses
E, eraser
S, shelf`,

        `P, pencil
R, ruler
B, ball
S, schoolbag
W, waterbottle`,

        `C, candle
F, fork
K, knife
P, pan
S, spoon`,

        `P, pot
B, butter
T, torch
S, stove
R, remote`,

        `C, camera
P, pendrive
H, headphone
S, smartphone
B, bell`,

        `S, sun
R, rain
B, brush
W, world
M, milk`,

        `R, ring
S, star
B, bone
K, kite
L, ladder`,

        `B, bird
D, drums
F, fruits
L, leaf
W, wheel`
      ]
    },
    {
      type: 'match',
      label: 'Capital vs Small Letters',
      id: 'capital-small',
      commonData: {
        title: 'Match the Letters.',
        big: true
      },
      data: [
        `A, a
D, d
R, r
E, e
F, f`,

        `G, g
H, h
L, l
Q, q
B, b`,

        `T, t
Y, y
J, j
E, e
R, r`
      ]
    },
    {
      label: 'Vowels',
      type: 'group',
      id: 'vowel',
      data: {
        title: 'Drag and Drop: Classify the below letters as vowel or not. ',
        fontSize: '2rem',
        types: [
          {
            name: 'Vowel',
            text: 'A, E, I , O, U'
          },
          {
            name: 'Consonant',
            text: 'S, G, D, V, M'
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Find a Vowel',
      id: 'find-vowel',
      data: {
        title: `Which of the following is a vowel.`,
        fontSize: '2rem',
        text: `U, B, D, F
A, S, R, M
I, J, K, Y
E, B, Z, Q
O, Q, P, R
A, T, R, F
I, L, P, N
U, V, W, X
E, F, N, D
O, G, H, P`,
        noCaps: true
      }
    }
  ]
};
