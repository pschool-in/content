export default {
  label: 'Nature and Others',
  id: 'sound-3',
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
          text: 'leaf, world, nest, water-drop, waterfall, rainbow'
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
          text: 'ring, drums, food, king, kite, ladder, wheel, park, garden'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Nature',
      id: 'pick-nature',
      lockAfter: 2,
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
          words: 'leaf, world, nest, water-drop, waterfall, rainbow'
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
      lockAfter: 2,
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
    },
    {
      type: 'rightOne',
      label: 'Identify Nature',
      id: 'sound-nature',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the element of nature.',
        type: 'words',
        audio: 'kg-5/nature-body-flowers-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'sun, moon, rain, star, milk, bird, fruits'
        },
        {
          audioOffset: 14,
          words: 'leaf, world, nest, water-drop, waterfall, rainbow'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Body Parts',
      id: 'sound-bodyparts',
      data: {
        title: 'Listen to the sound and click on the part.',
        type: 'words',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 26,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Flowers',
      id: 'sound-flowers',
      data: {
        title: 'Listen to the sound and click on the flower.',
        type: 'words',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 42,
        words:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Pictures',
      id: 'sound-other',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'words',
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
    },
    {
      type: 'dictation',
      label: 'Dictation Nature',
      id: 'dictation-nature',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/nature-body-flowers-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'sun, moon, rain, star, milk, bird, fruits'
        },
        {
          audioOffset: 14,
          words: 'leaf, world, nest, water-drop, waterfall, rainbow'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Body Parts',
      id: 'dictation-bodyparts',
      data: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 26,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'dictation',
      label: 'Dictation Flowers',
      id: 'dictation-flowers',
      data: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/nature-body-flowers-1.mp3',
        audioOffset: 42,
        words:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'dictation',
      label: 'Dictation Pictures',
      id: 'dictation-other',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
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
