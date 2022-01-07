export default {
  label: 'Match Picture',
  id: 'match-picture',
  lockAfter: 1,
  list: [
    {
      type: 'match',
      id: 'animals',
      label: 'Animals',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, cat
D, dog
G, goat
S, sheep
H, horse
P, pig`,

        `L, lion
M, monkey
T, tiger
C, camel
H, hippo
R, rhino`,

        `F, fox
C, crocodile
Z, zebra
B, bear
E, elephant
S, shark`,

        `W, whale
D, dolphin
F, frog
C, crab
S, snake
B, buffalo`,

        `D, dragonfly
F, fish
B, butterfly
S, squirrel
T, tortoise
R, rat`,

        `H, fly
B, bat
A, ant
R, rabbit
C, cheetah
L, leopard`,

        ` C, cow
D, donkey
G, giraffe
K, kangaroo
M, mongoose`,

        `M, mosquito
O, octopus
W, wolf
L, lizard
C, cockroach
G, garden-lizard`
      ]
    },
    {
      type: 'match',
      id: 'birds',
      label: 'Birds',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, crow
D, dove
S, sparrow
H, hen
P, parrot`,

        `P, peacock
D, duck
E, eagle
F, flamingo
C, crane`,

        `K, kingfisher
M, myna
P, penguin
C, chick
O, ostrich`,

        `O, owl
R, rooster
V, vulture
W, woodpecker
H, hornbill`
      ]
    },
    {
      type: 'match',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `A, apple
        G, grapes
        B, banana
        C, cherry
        P, papaya`,

        `S, strawberry
        G, guava
        P, pineapple
        M, mango
        O, orange`,

        `A, avocado
        J, jackfruit
        W, watermelon
        P, pomegranate
        F, fig`,

        `C, custard-apple
        P, plum
        D, dates
        M, muskmelon`
      ]
    },
    {
      type: 'match',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, carrot
B, beetroot
O, onion
T, tomato
P, potato`,

        `C, cucumber
G, garlic
B, beans
R, radish`,

        `C, cauliflower
P, pumpkin
A, almond
G, ginger
B, bitter-gourd`,

        `D, drumstick
C, capsicum
G, greenpeas
L, ladies-finger`,

        `M, mintleaf
B, brinjal
P, peanut
C, corn
S, spinach`
      ]
    }
  ]
};
