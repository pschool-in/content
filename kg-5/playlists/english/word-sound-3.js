export default {
  label: 'Nature and Others 2',
  id: 'word-sound-3',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `# Nature`,
          {
            type: 'sitewords',
            text:
              'sun, moon, rain, star, milk, bird, fruits, leaf, world, nest, dew, waterfall, rainbow',
            width: 80
          },
          `# Body Parts`,
          {
            type: 'sitewords',
            text: 'ear, eye, foot, hair, hand, mouth, nose, tooth',
            width: 80
          },
          `# Flowers`,
          {
            type: 'sitewords',
            text:
              'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia',
            width: 80
          },
          `# Others`,
          {
            type: 'sitewords',
            text:
              'bell, brush, bone, radio, box, coin, top, balloon, stick, ring, drum, food, king, kite, ladder, wheel, park, garden',
            width: 80
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Nature',
      id: 'sound-nature',
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
          words: 'leaf, world, nest, dew, waterfall, rainbow'
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
          words: 'ring, drum, food, king, kite, ladder, wheel, park, garden'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Nature',
      id: 'dictation-nature',
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
          words: 'leaf, world, nest, dew, waterfall, rainbow'
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
      label: 'Dictation Others',
      id: 'dictation-other',
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
          words: 'ring, drum, food, king, kite, ladder, wheel, park, garden'
        }
      ]
    }
  ]
};
