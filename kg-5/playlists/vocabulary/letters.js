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
      type: 'match',
      label: 'Animals and Birds',
      id: 'animals-birds',
      commonData: {
        title: 'Match Images and their first letters.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, cat
D, dog
G, goat
H, horse
S, sheep`,

        `P, pig
E, elephant  
L, lion
M, monkey
T, tiger`,

        `H, hippo
R, rhino
F,fox
C,crocodile
Z,zebra`,

        `B,bear
C,camel
S,shark
F,frog
D,dolphin`,

        `D,dragonfly
F,fish
W,whale
C,crab
S,snake`,

        `S,squirrel
T,tortoise
R,rat
A,ant
F,fly`,

        `C,crow
D,dove
H,hen
P,penguin
S,sparrow`
      ]
    },
    {
      type: 'match',
      label: 'Fruits and Vegetables',
      id: 'fruits-vegetables',
      commonData: {
        title: 'Match Images and their first letters.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `A, apple
B, banana
C, cherry
P, pineapple
S, strawberry`,

        `A, avocado
G, guava
J, jackfruit
C, cauliflower
P, pumpkin`,

        `G, grapes
O, orange
P, pomegranate
W, watermelon
C, corn`,

        `C, carrot
B, beetroot
O, onion
P, potato
G, garlic`,

        `C, cabbage
T, tomato
P, papaya
G, ginger
M, mango`
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Capital Letters',
      slug: 'correct-spelling',
      id: 'sound',
      data: {
        title: 'Listen to the sound and click on the letter.',
        type: 'letters',
        collectionType: 'capitalLetters'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Small Letters',
      slug: 'correct-spelling',
      id: 'sound-2',
      data: {
        title: 'Listen to the sound and click on the letter.',
        type: 'letters',
        collectionType: 'smallLetters'
      }
    }
  ]
};
