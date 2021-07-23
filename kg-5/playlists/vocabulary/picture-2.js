export default {
  label: 'Picture Words 2',
  id: 'picture-2',
  lockAfter: 4,
  list: [
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
      id: 'vehicles',
      label: 'Vehicles',
      commonData: {
        images: 'vehicles'
      },
      data: [
        `aeroplane | AEROPLANE | _ERO_LANE
  boat | BOAT | _OAT
  bus | BUS | _US
  car | CAR | _AR
  cycle | CYCLE | _YCLE
  helicoptor | HELICOPTOR | _ELI_OPTOR
  motorbike | MOTORBIKE | _OTOR_IKE
  ship | SHIP | _HIP
  tractor | TRACTOR | _RACTOR`,

        `train | TRAIN | _RAIN
  ambulance| AMBULANCE | _MBULANCE
  auto| AUTO | _UTO
  cart| CART | _ART
  excavator| EXCAVATOR | _XCAVATOR
  fire-engine| FIRE ENGINE | _IRE ENGINE
  lorry| LORRY | _ORRY
  van| VAN | _AN`
      ]
    },
    {
      type: 'completeWord',
      id: 'kitchen',
      label: 'Kitchen',
      data: {
        images: 'kitchen',
        text: `stove |STOVE |_TOVE
    fork|FORK |_ORK
    knife|KNIFE |_NIFE
    pan|PAN |_AN
    spoon|SPOON |_POON
    pot|POT |_OT
    butter|BUTTER |_UTTER`
      }
    },
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Nature',
      data: {
        images: 'others',
        text: `sun |SUN |_UN
          moon|MOON |_OON
    rain|RAIN |_AIN
    star|STAR |_TAR
    milk|MILK |_ILK
    bird|BIRD |_IRD
    fruits|FRUITS |_RUITS
    leaf|LEAF |_EAF
    world|WORLD |_ORLD`
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
        `man| MAN |_AN
woman | WOMAN |_OMAN
boy|BOY |_OY
girl | GIRL |_IRL
baby | BABY | _ABY
house| HOUSE|_OUSE
table|TABLE |_ABLE
bed|BED |_ED
candle|CANDLE |_ANDLE
chair|CHAIR |_HAIR`,

        `shelf|SHELF |_HELF
ball|BALL |_ALL
coat|COAT |_OAT
glasses|GLASSES |_LASSES
clock | CLOCK | _LOCK
watch | WATCH | _ATCH
schoolbag| SCHOOL BAG | _CHOOL BAG
waterbottle| WATER BOTTLE | _ATER BOTTLE`,

        `pen |PEN |_EN
pencil|PENCIL |_ENCIL
ruler|RULER |_ULER
eraser|ERASER |_RASER
scissors|SCISSORS |_CISSORS
sharpener|SHARPENER |_HARPENER
calculator| CALCULATOR | _ALCULATOR
book| BOOK | _OOK`,

        `color-pencils| COLOR PENCILS | _OLOR PENCILS
crayons | CRAYONS | _RAYONS
bell | BELL | _ELL
whistle |WHISTLE |_HISTLE
brush| BRUSH | _RUSH
bone| BONE | _ONE
conch| CONCH | _ONCH`,

        `ring| RING | _ING
drums| DRUMS | _RUMS
food| FOOD | _OOD  
king| KING | _ING
kite| KITE | _ITE
ladder| LADDER | _ADDER
wheel| WHEEL | _HEEL
whistle| WHISTLE | _HISTLE`
      ]
    },
    {
      type: 'completeWord',
      id: 'gadgets',
      label: 'Gadgets',
      data: {
        images: 'gadgets',
        text: `camera |CAMERA |_AMERA
headphone|HEADPHONE |_EADPHONE
pendrive|PENDRIVE |_ENDRIVE
remote|REMOTE |_EMOTE
smartphone|SMARTPHONE |_MARTPHONE
speaker|SPEAKER |_PEAKER
tablet|TABLET |_ABLET
torch|TORCH |_ORCH
web-camera | WEB CAMERA | _EB CAMERA`
      }
    }
  ]
};
