export default {
  label: 'Picture and Audio 2',
  id: 'audio-2',
  lockAfter: 3,
  list: [
    {
      type: 'slides',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'kg-5/flowers-bodyParts.mp3',
        title: 'Listening Activity',
        audioOffset: 0,
        text:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'Body Parts',
      data: {
        audio: 'kg-5/flowers-bodyParts.mp3',
        title: 'Listening Activity',
        audioOffset: 16,
        text: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'Transport',
      commonData: {
        audio: 'kg-5/vehicles.mp3',
        title: 'Listening Activity'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'aeroplane, boat, bus, car, cycle, helicoptor, motorbike,ship, tractor'
        },
        {
          audioOffset: 18,
          text:
            'train, ambulance, auto, cart, excavator, fire-engine, lorry, van'
        }
      ]
    },
    {
      type: 'slides',
      id: 'picture',
      label: 'Pictures',
      commonData: {
        audio: 'kg-5/picture.mp3',
        title: 'Listening Activity'
      },
      data: [
        {
          audioOffset: 0,
          text: 'house, table, bed, candle, chair, shelf, baby, boy, girl, man'
        },
        {
          audioOffset: 20,
          text:
            'woman, ball, coat, glasses, clock, watch, eraser, pen, pencil, ruler'
        },
        {
          audioOffset: 40,
          text:
            'schoolbag, scissors, sharpener, waterbottle, calculator, book, color-pencils, crayons'
        },
        {
          audioOffset: 56,
          text: 'stove, fork, knife, pan, spoon, pot, butter'
        },
        {
          audioOffset: 70,
          text:
            'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web-camera'
        }
      ]
    },
    {
      type: 'slides',
      id: 'picture-2',
      label: 'Pictures 2',
      commonData: {
        audio: 'kg-5/picture-2.mp3',
        title: 'Listening Activity'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'sun, moon, rain, star, milk, ring, brush, bone, bell, bird, conch'
        },
        {
          audioOffset: 22,
          text:
            'drums, food, fruits, king, kite, ladder, leaf, wheel, whistle, world'
        }
      ]
    },

    {
      type: 'rightOne',
      label: 'Identify Flowers',
      id: 'pick-flowers',
      data: {
        title: 'Listen to the sound and click on the flower.',
        type: 'image',
        audio: 'kg-5/flowers-bodyParts.mp3',
        words:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Body Parts',
      id: 'pick-bodyparts',
      data: {
        title: 'Listen to the sound and click on the part.',
        type: 'image',
        audio: 'kg-5/flowers-bodyParts.mp3',
        audioOffset: 16,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Transport',
      id: 'pick-transport',
      commonData: {
        title: 'Listen to the sound and click on the transport.',
        type: 'image',
        audio: 'kg-5/vehicles.mp3'
      },
      data: [
        {
          words:
            'aeroplane, boat, bus, car, cycle, helicoptor, motorbike,ship, tractor'
        },
        {
          audioOffset: 18,
          words:
            'train, ambulance, auto, cart, excavator, fire-engine, lorry, van'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Picture',
      id: 'pick-picture',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'kg-5/picture.mp3'
      },
      data: [
        {
          words: 'house, table, bed, candle, chair, shelf, baby, boy, girl, man'
        },
        {
          audioOffset: 20,
          words:
            'woman, ball, coat, glasses, clock, watch, eraser, pen, pencil, ruler'
        },
        {
          audioOffset: 40,
          words:
            'schoolbag, scissors, sharpener, waterbottle, calculator, book, color-pencils, crayons'
        },
        {
          audioOffset: 56,
          words: 'stove, fork, knife, pan, spoon, pot, butter'
        },
        {
          audioOffset: 70,
          words:
            'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web-camera'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Picture 2',
      id: 'pick-picture-2',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'kg-5/picture-2.mp3'
      },
      data: [
        {
          words:
            'sun, moon, rain, star, milk, ring, brush, bone, bell, bird, conch'
        },
        {
          audioOffset: 20,
          words:
            'drums, food, fruits, king, kite, ladder, leaf, wheel, whistle, world'
        }
      ]
    }
  ]
};
