export default {
  label: 'Nature and Others',
  id: 'sound-3',
  lockAfter: 0,
  list: [
    {
      type: 'slides',
      id: 'nature',
      label: 'Nature',
      commonData: {
        audio: 'kg-5/nature-body-flowers-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: 'sun, moon, rain, star, milk, bird, fruits'
        },
        {
          audioOffset: 14,
          text: 'leaf, world, nest, dew , waterfall, rainbow'
        }
      ]
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'Body Parts',
      data: {
        audio: 'kg-5/nature-body-flowers-1.mp3',
        title: 'Listening Activity',
        audioOffset: 26,
        text: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'kg-5/nature-body-flowers-1.mp3',
        title: 'Listening Activity',
        audioOffset: 42,
        text:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'slides',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        audio: 'kg-5/other-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: 'bell, brush, bone, radio, box, coin, top, balloon, stick'
        },
        {
          audioOffset: 18,
          text:
            'ring, drums|drum, food, king, kite, ladder, wheel, park, garden'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Nature',
      id: 'pick-nature',
      commonData: {
        title: 'Listen to the sound and click on the element of nature.',
        type: 'image',
        audio: 'kg-5/nature-body-flowers-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'sun, moon, rain, star, milk, bird, fruits'
        },
        {
          audioOffset: 14,
          words: 'leaf, world, nest, dew, waterfall, rainbow'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Body Parts',
      id: 'pick-bodyparts',
      data: {
        title: 'Listen to the sound and click on the part.',
        type: 'image',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 26,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Flowers',
      id: 'pick-flowers',
      data: {
        title: 'Listen to the sound and click on the flower.',
        type: 'image',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 42,
        words:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Pictures',
      id: 'pick-other',
      commonData: {
        title: 'Listen to the sound and click on the picture.',
        type: 'image',
        audio: 'kg-5/other-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'bell, brush, bone, radio, box, coin, top, balloon, stick'
        },
        {
          audioOffset: 18,
          words: 'ring, drums, food, king, kite, ladder, wheel, park, garden'
        }
      ]
    }
  ]
};
