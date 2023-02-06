export default {
  label: 'Match Picture 2',
  id: 'match-picture-2',
  lockAfter: 2,
  list: [
    {
      type: 'match',
      id: 'flowers',
      label: 'Flowers',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `R, rose
L, lotus
S, sunflower
M, marigold`,

        `H, hibiscus
J, jasmine
T, tulip
Z, zinnia`
      ]
    },
    {
      type: 'match',
      id: 'parts-body',
      label: 'Body Parts',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `E, ear
F, foot
H, hair
M, mouth`,

        `E, eye
H, hand
N, nose
T, tooth`
      ]
    },
    {
      type: 'match',
      id: 'vehicles',
      label: 'Vehicles',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `A, aeroplane
B, boat
C, cycle
H, helicoptor
M, motorbike
T, tractor`,

        `B, bus
C, car
A, auto
S, ship
T, train
L, lorry`,

        `A, ambulance
C, cart
E, excavator
F, fire-engine
V, van`
      ]
    },
    {
      type: 'match',
      id: 'kitchen',
      label: 'Kitchen',
      data: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true,
        text: `S, stove
F, fork
K, knife
P, pot
B, butter`
      }
    },
    {
      type: 'match',
      id: 'nature',
      label: 'Nature',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `S, sun
M, moon
R, rain
B, bird
F, fruits`,

        `S, star
M, milk
L, leaf
W, world`
      ]
    },
    {
      type: 'match',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `M, man
W, woman
B, boy
C, clock
G, girl`,

        `T, table
B, bed
W, waterbottle
P, pencil
C, chair`,

        `S, shelf
B, ball
C, coat
G, glasses
H, house`,

        `W, watch
S, schoolbag
B, baby
C, candle
R, ruler`,

        `P, pen
E, eraser
S, scissors
C, calculator
B, book`,

        `C, color-pencils
B, bell
W, whistle  
F, food
K, king`,

        `S, sharpener
K, kite
L, ladder
B, brush
C, conch`,

        `R, ring
C, crayons
D, drums
B, bone
W, wheel`
      ]
    },
    {
      type: 'match',
      id: 'gadgets',
      label: 'Gadgets',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, camera
H, headphone
P, pendrive
T, tablet
S, smartphone`,

        `S, speaker
R, remote
T, torch
W, web-camera `
      ]
    }
  ]
};
