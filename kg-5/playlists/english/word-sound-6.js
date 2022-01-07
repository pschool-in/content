export default {
  label: 'More Fruits and Vegetables 2',
  id: 'word-sound-6',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `# Fruits`,
          {
            type: 'sitewords',
            text:
              'star fruit, dragon fruit, sugarcane, peach, sweet potato, jamun, pear, water chestnut, jujube, sapotta, tapioca, blueberry, passion fruit',
            width: 80
          },
          `# Vegetables`,
          {
            type: 'sitewords',
            text:
              'chickpea, mustard greens, turmeric, turnip, fenugreek, tamarind, elephant yam, ashgourd, broad beans, snake gourd, banana flower, cluster beans, kohlrabi, spring onion, banana stem, drumstick leaves, raw banana, tulsi, bottlegourd, ivygourd, ridgegourd',
            width: 80
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Fruits',
      id: 'sound-fruits',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the fruit.',
        type: 'words',
        audio: 'kg-5/fruits-vegetables-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'star fruit, dragon fruit, sugarcane, peach, sweet potato, jamun, pear'
        },
        {
          audioOffset: 14,
          words:
            'water chestnut, jujube, sapotta, tapioca, blueberry, passion fruit'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Vegetables',
      id: 'sound-vegetables',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the vegetable.',
        type: 'words',
        audio: 'kg-5/fruits-vegetables-2.mp3'
      },
      data: [
        {
          audioOffset: 26,
          words:
            'chickpea, mustard greens, turmeric, turnip, fenugreek, tamarind, elephant yam, ashgourd, broad beans, snake gourd'
        },
        {
          audioOffset: 46,
          words:
            'banana flower, cluster beans, kohlrabi, spring onion, banana stem, drumstick leaves, raw banana, tulsi, bottlegourd, ivygourd, ridgegourd'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Fruits',
      id: 'dictation-fruits',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/fruits-vegetables-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'star fruit, dragon fruit, sugarcane, peach, sweet potato, jamun, pear'
        },
        {
          audioOffset: 14,
          words:
            'water chestnut, jujube, sapotta, tapioca, blueberry, passion fruit'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Vegetables',
      id: 'dictation-vegetables',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/fruits-vegetables-2.mp3'
      },
      data: [
        {
          audioOffset: 26,
          words:
            'chickpea, mustard greens, turmeric, turnip, fenugreek, tamarind, elephant yam, ashgourd, broad beans, snake gourd'
        },
        {
          audioOffset: 46,
          words:
            'banana flower, cluster beans, kohlrabi, spring onion, banana stem, drumstick leaves, raw banana, tulsi, bottlegourd, ivygourd, ridgegourd'
        }
      ]
    }
  ]
};
