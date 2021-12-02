export default {
  label: 'More Images',
  id: 'picture-8',
  lockAfter: 4,
  list: [
    {
      type: 'completeWord',
      id: 'gadgets',
      label: 'Gadgets',
      title: 'Find the missing letter and complete the word',
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
        `knight | KNIGHT | _NIGHT
  chariot | CHARIOT | _HARIOT
  horse-carriage | HORSE CARRIAGE | _ORSE CARRIAGE
  yarn-ball | YARN | _ARN
  bow | BOW | _OW
  arrow | ARROW | _RROW
  fountain | FOUNTAIN | _OUNTAIN
  pouch | POUCH | _OUCH`,

        `trolley | TROLLEY | _ROLLEY
  whistle |WHISTLE |_HISTLE
  twig | TWIG | _WIG
  palanquin | PALANQUIN | _ALANQUIN
  medicine | MEDICINE | _EDICINE
  conch| CONCH | _ONCH
  toothbrush | TOOTHBRUSH | _OOTHBRUSH
  chocolate | CHOCOLATE | _HOCOLATE
  toothpaste | TOOTHPASTE | _OOTHPASTE`
      ]
    },
    {
      type: 'completeWord',
      id: 'flowers',
      label: 'Flowers',
      data: {
        images: 'flowers',
        title: 'Choose the first letter of the given flower.',
        text: `daffodil | DAFFODIL | _AFFODIL
  gulmohar | GULMOHAR | _ULMOHAR
  lily | LILY | _ILY
  pansy | PANSY | _ANSY
  poppy | POPPY | _OPPY
  daisy | DAISY | _AISY
  jasmine | JASMINE | _ASMINE
  magnolia | MAGNOLIA | _AGNOLIA
  periwinkle | PERIWINKLE | _ERIWINKLE
  water-lily | WATER-LILY | _ATER-LILY`
      }
    },
    {
      type: 'match',
      id: 'match-gadgets',
      label: 'Match Gadgets',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
  `C, camera 
  S, speaker
  T, tablet
  H, headphone
  P, pendrive`,

  `R, remote
  S, smartphone
  T, torch
  W, web-camera`
      ]
    },
    {
      type: 'match',
      id: 'match-others',
      label: 'Match Others',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
  `K, knight 
  C, chariot 
  H, horse-carriage 
  Y, yarn-ball 
  B, bow 
  T, trolley `,

  `F, fountain 
  P, pouch 
  A, arrow
  W, whistle 
  C, conch
  T, toothbrush`,

  `M, medicine 
  P, palanquin 
  C, chocolate 
  T, toothpaste`
      ]
    },
    {
      type: 'match',
      id: 'match-flowers',
      label: 'Match Flowers',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `D, daffodil 
        G, gulmohar 
        L, lily 
        P, pansy `,

        `J, jasmine 
        M, magnolia
        D, daisy 
        P, periwinkle 
        W, water-lily `
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Gadgets - Drag & Drop',
      id: 'dragDrop-gadgets',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `camera |Camera
  headphone|Headphone
  pendrive|Pendrive
  remote|Remote
  smartphone|Smartphone`,

  `speaker|Speaker
  tablet|Tablet
  torch|Torch
  web-camera | Web Camera`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Others - Drag & Drop',
      id: 'dragDrop-others',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `knight | Knight
  chariot | Chariot
  horse-carriage | Horse Carriage
  yarn-ball | Yarn Ball
  bow | Bow
  arrow | Arrow`,

  `fountain | Fountain
  pouch | Pouch
  trolley | Trolley
  whistle |Whistle
  twig | Twig
  palanquin | Palanquin`,

  `medicine | Medicine
  conch| Conch
  toothbrush | Toothbrush
  chocolate | Chocolate
  toothpaste | Toothpaste`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Flowers - Drag & Drop',
      id: 'dragDrop-flowers',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `daffodil | Daffodil
        gulmohar | Gulmohar
        lily | Lily
        pansy | Pansy
        poppy | Poppy`,

        `daisy | Daisy
        jasmine | Jasmine
        magnolia | Magnolia
        periwinkle | Periwinkle
        water-lily | Water Lily`
      ]
    }
  ]
};
