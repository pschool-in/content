export default {
  label: 'Fruits and Vegetables 2',
  id: 'word-sound-2',
  // lockAfter: 2,
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
            text: 'apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange, papaya, pineapple, watermelon, pomegranate, fig, custard-apple, plum, dates, muskmelon',
            width: 80
          },
          `# Vegetables`,
          {
            type: 'sitewords',
            text: 'carrot, beetroot, onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger, cauliflower, pumpkin, almond, beans, bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut, coriander leaf, curry leaf, drumstick, green peas, ladies finger, mint leaf, peanut, radish, spinach, vegetables',
            width: 80
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Fruits',
      id: 'sound-fruits',
      commonData: {
        title: 'Listen to the sound and click on the fruit.',
        type: 'words',
        audio: 'kg-5/fruits-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange'
        },
        {
          audioOffset: 20,
          words:
            'papaya, pineapple, watermelon, pomegranate, fig, custard-apple, plum, dates, muskmelon'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Vegetables',
      id: 'sound-vegetables',
      lockAfter: 1,
      commonData: {
        title: 'Listen to the sound and click on the vegetable.',
        type: 'words',
        audio: 'kg-5/vegetables-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger'
        },
        {
          audioOffset: 20,
          words:
            'cauliflower, pumpkin, almond, beans, bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          words:
            'coriander leaf, curry leaf, drumstick, green peas, ladies finger, mint leaf, peanut, radish, spinach, vegetables'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Fruits',
      id: 'dictation-fruits',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/fruits-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange'
        },
        {
          audioOffset: 20,
          words:
            'papaya, pineapple, watermelon, pomegranate, fig, custard apple, plum, dates, muskmelon'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Vegetables',
      id: 'dictation-vegetables',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/vegetables-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger'
        },
        {
          audioOffset: 20,
          words:
            'cauliflower, pumpkin, almond, beans, bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          words:
            'coriander leaf, curry leaf, drumstick, green peas, ladies finger, mintleaf, peanut, radish, spinach, vegetables'
        }
      ]
    }
  ]
};
