export default {
  label: 'Fruits and Vegetables',
  id: 'sound-2',
  lockAfter: 1,
  list: [
    {
      type: 'slides',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        audio: 'kg-5/fruits-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'apple, grapes, banana, cherry, avocado, strawberry, guava, jackfruit, mango, orange'
        },
        {
          audioOffset: 20,
          text:
            'papaya, pineapple, watermelon, pomegranate, fig, custard-apple| custard apple, plum, dates, muskmelon'
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'Vegetables',
      lockAfter: 0,
      commonData: {
        audio: 'kg-5/vegetables-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'carrot, beetroot, onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger'
        },
        {
          audioOffset: 20,
          text:
            'cauliflower, pumpkin, almond, beans, bitter-gourd| bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          text:
            'corianderleaf, curryleaf, drumstick, greenpeas, ladies-finger| ladies finger, mintleaf, peanut, radish, spinach, vegetables'
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
      id: 'pick-vegetables',
      commonData: {
        title: 'Listen to the sound and click on the vegetable.',
        type: 'image',
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
            'cauliflower, pumpkin, almond, beans, bitter-gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          words:
            'corianderleaf, curryleaf, drumstick, greenpeas, ladies-finger, mintleaf, peanut, radish, spinach, vegetables'
        }
      ]
    }
  ]
};
