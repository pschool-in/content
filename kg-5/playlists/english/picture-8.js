export default {
  label: 'More Images',
  id: 'picture-8',
  lockAfter: 4,
  list: [
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
    },
    {
      type: 'completeWord',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        images: 'custom'
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
    }
  ]
};
