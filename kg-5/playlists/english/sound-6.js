export default {
    label: 'More Fruits and Vegetables',
    id: 'audio-6',
    list: [
      {
        type: 'slides',
        id: 'fruits',
        label: 'Fruits',
        commonData: {
          audio: 'kg-5/fruits-vegetables-2.mp3'
        },
        data: [
          {
            audioOffset: 0,
            text:
              'star-fruit, dragon-fruit, sugarcane, peach, sweet-potato, jamun, pear'
          },
          {
            audioOffset: 14,
            text:
              'water-chesnut, jujube, sapotta, tapioca, blueberry, passion-fruit'
          }
        ]
      },
      {
        type: 'slides',
        id: 'vegetables',
        label: 'Vegetables',
        commonData: {
          audio: 'kg-5/fruits-vegetables-2.mp3'
        },
        data: [
          {
            audioOffset: 26,
            text:
              'chickpea, mustard-greens, turmeric, turnip, fenugreek, tamarind, elephant-yam, ashgourd, broad-beans, snake-gourd'
          },
          {
            audioOffset: 46,
            text:
              'banana-flower, cluster-beans, kohlrabi, sping-onion, banana-stem, drumstick-leaves, raw-banana, tulsi, bottlegourd, ivygourd, ridgegourd'
          }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify Fruits',
        id: 'pick-fruits',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the fruit.',
          type: 'image',
          audio: 'kg-5/fruits-vegetables-2.mp3'
        },
        data: [
            {
                audioOffset: 0,
                words:
                  'star-fruit, dragon-fruit, sugarcane, peach, sweet-potato, jamun, pear'
              },
              {
                audioOffset: 14,
                words:
                  'water-chesnut, jujube, sapotta, tapioca, blueberry, passion-fruit'
              }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify Vegetables',
        id: 'pick-vegetables',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the vegetable.',
          type: 'image',
          audio: 'kg-5/fruits-vegetables-2.mp3'
        },
        data: [
            {
                audioOffset: 26,
                words:
                  'chickpea, mustard-greens, turmeric, turnip, fenugreek, tamarind, elephant-yam, ashgourd, broad-beans, snake-gourd'
              },
              {
                audioOffset: 46,
                words:
                  'banana-flower, cluster-beans, kohlrabi, sping-onion, banana-stem, drumstick-leaves, raw-banana, tulsi, bottlegourd, ivygourd, ridgegourd'
              }
        ]
      }
    ]
  };
  
