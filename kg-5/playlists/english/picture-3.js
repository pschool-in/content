export default {
  label: 'Nature and Others',
  id: 'picture-3',
  lockAfter: 2,
  list: [
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Nature',
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
water-drop | WATER DROP | _ATER DROP
waterfall | WATERFALL | _ATERFALL
rainbow | RAINBOW | _AINBOW`
      ]
    },
    {
      type: 'completeWord',
      id: 'parts-body',
      label: 'Body Parts',
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
        images: 'custom'
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
    }
  ]
};
