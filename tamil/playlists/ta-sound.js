export default {
  label: 'Sound',
  id: 'ta-sound',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'விலங்குகள்',
      commonData: {
        audio: 'ta-animals.mp3',
        title: 'விலங்குகள்: படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 2,
          text:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audioOffset: 22,
          text:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dragonfly'
        },
        {
          audioOffset: 42,
          text:
            'fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant, fly'
        },
        {
          audioOffset: 62,
          text:
            'bat, buffalo, butterfly,cow, donkey, giraffe, kangaroo, leopard'
        },
        {
          audioOffset: 78,
          text:
            'mongoose, mosquito, wolf, cockroach, garden-lizard, lizard,  rabbit  '
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'பறவைகள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta-birds.mp3'
      },
      data: [
        {
          audioOffset: 2,
          text: 'crow, dove, duck, hen, parrot, peacock, sparrow'
        },
        {
          audioOffset: 16,
          text:
            'chick,crane, eagle, kingfisher, myna, ostrich, owl, rooster, woodpecker'
        }
      ]
    },
    {
      type: 'slides',
      id: 'fruits',
      label: 'பழங்கள் ',
      commonData: {
        title: 'பழங்கள்  : படமும் ஒலியும்',
        audio: 'ta-fruits.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: 'grapes, banana, guava, jackfruit, mango, papaya'
        },
        {
          audioOffset: 12,
          text: 'pineapple, pomegranate, watermelon, fig, custard-apple, dates'
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'காய்கறிகள்  ',
      commonData: {
        title: 'காய்கறிகள் : படமும் ஒலியும்',
        audio: 'ta-vegetables.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger, pumpkin, almond'
        },
        {
          audioOffset: 20,
          text:
            'bitter-gourd, brinjal, capsicum, cashewnut, chilli, coconut, corianderleaf , curryleaf'
        },
        {
          audioOffset: 36,
          text:
            'drumstick, greenpeas, ladies-finger, mintleaf, peanut, raddish, spinach'
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'பூக்கள்',
      data: {
        title: 'பூக்கள் : படமும் ஒலியும்',
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 3,
        audioWidth: 3,
        text: 'rose, lotus, sunflower, marigold, hibiscus, jasmine'
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'உடல் உறுப்புகள் ',
      data: {
        title: 'உடல் உறுப்புகள்',
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 23,
        text: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'ஒலியை கேட்டு தேர்வு செய்க',
      id: 'pick-word',
      lockAfter: 2,
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image'
      },
      data: [
        {
          audio: 'ta-animals.mp3',
          audioOffset: 2,
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audio: 'ta-animals.mp3',
          audioOffset: 22,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dragonfly'
        },
        {
          audio: 'ta-animals.mp3',
          audioOffset: 42,
          words:
            'fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant'
        },
        {
          audio: 'ta-birds.mp3',
          audioOffset: 2,
          words: 'crow, dove, duck, hen, parrot, peacock, sparrow'
        },
        {
          audio: 'ta-flowers-bodyParts.mp3',
          audioOffset: 3,
          audioWidth: 3,
          words: 'rose, lotus, sunflower, marigold, hibiscus, jasmine'
        },
        {
          audio: 'ta-flowers-bodyParts.mp3',
          audioOffset: 23,
          words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
        }
      ]
    }
  ]
};
