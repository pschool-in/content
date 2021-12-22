export default {
  label: 'Picture Words 2',
  id: 'word-from-picture-2',
  lockAfter: 4,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Words from Picture',
        text: [
          '# Flowers',
          {
            type: 'sitewords',
            text: 'rose, lotus, sunflower, marigold, hibiscus, jasmine',
            width: 120
          },
          '# Body Parts',
          {
            type: 'sitewords',
            text: 'ear, eye, foot, hair, hand, mouth, nose, tooth',
            width: 120
          },
          '# Vehicles',
          {
            type: 'sitewords',
            text:
              'aeroplane, boat, bus, car, cycle, helicoptor, motorbike, ship, tractor, train',
            width: 120
          },
          '# Kitchen',
          {
            type: 'sitewords',
            text: 'stove, fork, knife, pan, spoon, pot, butter',
            width: 120
          },
          '# Nature',
          {
            type: 'sitewords',
            text: 'sun, moon, rain, star, milk, bird, fruits, leaf, world',
            width: 120
          },
          '# Gadgets',
          {
            type: 'sitewords',
            text:
              'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch',
            width: 120
          },
          '# Others',
          {
            type: 'sitewords',
            text:
              'man, woman, boy, girl, baby, house, table, bed, candle, chair, shelf, ball, coat, glasses, clock, watch, school bag, water bottle, pen, pencil, ruler, eraser, scissors, sharpener, calculator, book, color-pencils, crayons, bell, whistle, brush, bone, conch, ring, drums, food, king, kite, ladder, wheel',
            width: 120
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'flowers',
      label: 'Flowers',
      data: {
        images: 'flowers',
        title: 'Choose the first letter of the given flower.',
        text: `rose | ROSE
    lotus | LOTUS 
    sunflower | SUNFLOWER
    marigold | MARIGOLD
    hibiscus | HIBISCUS 
    jasmine | JASMINE
    tulip | TULIP 
    zinnia | ZINNIA`
      }
    },
    {
      type: 'completeWord',
      id: 'parts-body',
      label: 'Body Parts',
      data: {
        images: 'bodyParts',
        text: `ear |EAR 
    eye |EYE
    foot |FOOT
    hair|HAIR
    hand|HAND
    mouth|MOUTH
    nose|NOSE
    tooth|TOOTH`
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
        `aeroplane | AEROPLANE
    boat | BOAT
    bus | BUS | ___
    car | CAR | ___
    cycle | CYCLE
    helicoptor | HELICOPTOR
    motorbike | MOTORBIKE
    ship | SHIP
    tractor | TRACTOR`,

        `train | TRAIN 
    ambulance| AMBULANCE
    auto| AUTO
    cart| CART 
    excavator| EXCAVATOR
    fire-engine| FIRE ENGINE | F___ ______
    lorry| LORRY 
    van| VAN `
      ]
    },
    {
      type: 'completeWord',
      id: 'kitchen',
      label: 'Kitchen',
      data: {
        images: 'kitchen',
        text: `stove |STOVE
      fork|FORK
      knife|KNIFE
      pan|PAN
      spoon|SPOON
      pot|POT
      butter|BUTTER`
      }
    },
    {
      type: 'completeWord',
      id: 'nature',
      label: 'Nature',
      data: {
        images: 'others',
        text: `sun |SUN
            moon|MOON
      rain|RAIN
      star|STAR
      milk|MILK
      bird|BIRD
      fruits|FRUITS
      leaf|LEAF
      world|WORLD`
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
        `man| MAN
  woman | WOMAN
  boy|BOY
  girl | GIRL
  baby | BABY
  house| HOUSE
  table|TABLE
  bed|BED
  candle|CANDLE
  chair|CHAIR`,

        `shelf|SHELF
  ball|BALL
  coat|COAT
  glasses|GLASSES
  clock | CLOCK
  watch | WATCH
  schoolbag| SCHOOL BAG | S_____ ___
  waterbottle| WATER BOTTLE | W____ ______`,

        `pen |PEN |___
  pencil|PENCIL
  ruler|RULER
  eraser|ERASER
  scissors|SCISSORS
  sharpener|SHARPENER
  calculator| CALCULATOR 
  book| BOOK`,

        `color-pencils| COLOR PENCILS |C____ _______
  crayons | CRAYONS
  bell | BELL
  whistle |WHISTLE
  brush| BRUSH
  bone| BONE
  conch| CONCH`,

        `ring| RING
  drums| DRUMS
  food| FOOD
  king| KING
  kite| KITE
  ladder| LADDER
  wheel| WHEEL`
      ]
    },
    {
      type: 'completeWord',
      id: 'gadgets',
      label: 'Gadgets',
      data: {
        images: 'gadgets',
        text: `camera |CAMERA
  headphone|HEADPHONE
  pendrive|PENDRIVE
  remote|REMOTE
  smartphone|SMARTPHONE
  speaker|SPEAKER
  tablet|TABLET
  torch|TORCH 
  web-camera | WEB CAMERA | W__ ______`
      }
    }
  ]
};
