export default {
  label: 'Nature and Others',
  id: 'picture-3',
  lockAfter: 2,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'Nature',
      id: 'drag-nature',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `sun |Sun
moon|Moon 
rain|Rain 
star|Star 
milk|Milk
bird|Bird 
fruits|Fruits `,

        `leaf|Leaf 
world|World
nest |Nest 
dew | Dew
waterfall |Waterfall 
rainbow |Rainbow `
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Body Parts',
      id: 'drag-bodyparts',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `ear |Ear
eye |Eye
foot |Foot
hair|Hair`,

        `hand|Hand
mouth|Mouth
nose| Nose
tooth|Tooth`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Flowers',
      id: 'drag-flowers',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `rose | Rose
lotus | Lotus
sunflower | Sunflower
marigold | Marigold`,

        `hibiscus | Hibiscus
jasmine | Jasmine
tulip | Tulip
zinnia | Zinnia`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Others',
      id: 'drag-others',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `bell | Bell
brush| Brush
bone| Bone
radio | Radio
box | Box
coin | Coin`,

        `top | Top
balloon | Balloon
stick | Stick
ring| Ring
drums| Drum
food| Food `,

        `king| King
kite| Kite
ladder| Ladder
wheel| Wheel
park | Park
garden | Garden`
      ]
    },
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Nature',
      commonData: {
        images: 'custom',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `sun |SUN |_UN
moon|MOON |_OON
rain|RAIN |_AIN
star|STAR |_TAR
milk|MILK |_ILK
bird|BIRD |_IRD
fruits|FRUITS |_RUITS`,

        `leaf|LEAF |_EAF
world|WORLD |_ORLD
nest | NEST | _EST
dew | DEW | _EW
waterfall | WATERFALL | _ATERFALL
rainbow | RAINBOW | _AINBOW`
      ]
    },
    {
      type: 'completeWord',
      id: 'parts-body',
      label: 'Body Parts',
      title: 'Find the missing letter and complete the word',
      data: {
        images: 'bodyParts',
        text: `ear |EAR |_AR
eye |EYE |_YE
foot |FOOT |_OOT
hair|HAIR |_AIR
hand|HAND |_AND
mouth|MOUTH |_OUTH
nose|NOSE |_OSE
tooth|TOOTH |_OOTH`
      }
    },
    {
      type: 'completeWord',
      id: 'flowers',
      label: 'Flowers',
      data: {
        images: 'flowers',
        title: 'Choose the first letter of the given flower.',
        text: `rose | ROSE | _OSE
lotus | LOTUS | _OTUS 
sunflower | SUNFLOWER | _UN_LOWER
marigold | MARIGOLD | _ARIGOLD
hibiscus | HIBISCUS | _IBISCUS
jasmine | JASMINE | _ASMINE
tulip | TULIP | _ULIP
zinnia | ZINNIA | _INNIA`
      }
    },
    {
      type: 'completeWord',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        images: 'custom',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `bell | BELL | _ELL
brush| BRUSH | _RUSH
bone| BONE | _ONE
radio | RADIO | _ADIO
box | BOX | _OX
coin | COIN | _OIN
top | TOP | _OP
balloon | BALLOON | _ALLOON
stick | STICK | _TICK`,

        `ring| RING | _ING
drums| DRUMS | _RUMS
food| FOOD | _OOD  
king| KING | _ING
kite| KITE | _ITE
ladder| LADDER | _ADDER
wheel| WHEEL | _HEEL
park | PARK | _ARK
garden | GARDEN | _ARDEN`
      ]
    },
    {
      type: 'match',
      id: 'match-nature',
      label: 'Match Nature',
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
F,fruits
D, dew`,

        `S, star
L, leaf
W, world
N, nest`,

        `M, milk
W, waterfall 
R, rainbow`
      ]
    },
    {
      type: 'match',
      id: 'match-bodyparts',
      label: 'Match Body Parts',
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
T, tooth
N, nose`
      ]
    },
    {
      type: 'match',
      id: 'match-flower',
      label: 'Match Flower',
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
      id: 'match-other',
      label: 'Match Other',
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `B, bell
R, radio
C, coin
T, top,
S, stick`,

        `B, brush
R, ring
D, drums
F, food
K, king`,

        `B, bone
K, kite
L, ladder
W, wheel`,

        `B, balloon
P, park
G, garden`
      ]
    }
  ]
};