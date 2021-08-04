export default {
  label: 'Pick Words by Sound',
  id: 'pick-word',
  list: [
    {
      type: 'rightOne',
      id: 'animals',
      label: 'Animals',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audio: 'animals.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audioOffset: 40,
          words:
            'dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat, termites, ant'
        },
        {
          audioOffset: 60,
          words:
            'fly, bat, buffalo, butterfly, cheetah, cow, donkey, giraffe, kangaroo, leopard'
        },
        {
          audioOffset: 80,
          words:
            'mongoose, mosquito, octopus, wolf, cockroach, garden lizard, lizard,  rabbit'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'birds',
      label: 'Birds',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        audio: 'birds.mp3',
        type: 'words'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'crow, dove, duck, hen, chick, parrot, peacock, penguin, sparrow, crane'
        },
        {
          audioOffset: 20,
          words:
            'eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, hornbill'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        audio: 'fruits.mp3',
        type: 'words'
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
            'papaya, pineapple, pomegranate, watermelon, fig, custard-apple | custard apple, plum, dates, muskmelon'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        audio: 'vegetables.mp3',
        type: 'words'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic'
        },
        {
          audioOffset: 20,
          words:
            'ginger, pumpkin, almond, beans, bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          words:
            'coriander leaf, curry leaf, drumstick, greenpeas, ladies finger, mintleaf, peanut, raddish, spinach'
        }
      ]
    },
    {
      type: 'rightOne',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'flowers-bodyParts.mp3',
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audioOffset: 0,
        words:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'rightOne',
      id: 'bodyParts',
      label: 'Body Parts',
      data: {
        audio: 'flowers-bodyParts.mp3',
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audioOffset: 16,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      id: 'vehicles',
      label: 'Transport',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audio: 'vehicles.mp3'
      },
      data: [
        {
          audioOffset: 0,
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
      id: 'picture',
      label: 'Pictures',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audio: 'picture.mp3'
      },
      data: [
        {
          audioOffset: 0,
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
      id: 'picture-2',
      label: 'Pictures 2',
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'words',
        audio: 'picture-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'sun, moon, rain, star, milk, ring, brush, bone, bell, bird, conch'
        },
        {
          audioOffset: 22,
          words:
            'drums, food, fruits, king, kite, ladder, leaf, wheel, whistle, world'
        }
      ]
    }
  ]
};
