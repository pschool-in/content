export default {
  label: 'ধ্বনি',
  id: 'bn-sound-2',
  img: 'sound',
  lockAfter: 7,
  list: [
    {
      type: 'rightOne',
      label: 'ধ্বনি শুনে শব্দ শনাক্ত করুন - ফল, ফুল, শাকসবজি',
      id: 'pick-word-fruitveg',
      lockAfter: 4,
      commonData: {
        title: 'ধ্বনি শুনে শব্দ ক্লিক করুন',
        type: 'words'
      },
      data: [
        {
          audio: 'bn-fruits.mp3',
          audioOffset: 0,
          words:
            'apple, grapes, banana, guava, jackfruit, mango, orange, papaya'
        },
        {
          audio: 'bn-fruits.mp3',
          audioOffset: 16,
          words:
            'pineapple, pomegranate, watermelon, fig, custard-apple, dates, muskmelon'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 20,
          words:
            'ginger, pumpkin, almond, bitter-gourd, brinjal, cashewnut, chilli, coconut, corianderleaf, curryleaf'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 40,
          words:
            'drumstick, greenpeas, ladies-finger, mintleaf, peanut, raddish, spinach'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'ধ্বনি শুনে শব্দ শনাক্ত করুন - পশু, পাখি',
      id: 'pick-word-animalbird',
      lockAfter: 4,
      commonData: {
        title: 'ধ্বনি শুনে শব্দ ক্লিক করুন',
        type: 'words'
      },
      data: [
        {
          audio: 'bn-animals.mp3',
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, bear, camel, shark, whale, dolphin, dragonfly'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 40,
          words:
            'fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant, fly'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 60,
          words: 'bat, buffalo, butterfly, cheetah, cow, donkey'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 72,
          words: 'mongoose, mosquito, wolf, cockroach, lizard, rabbit'
        },
        {
          audio: 'bn-birds.mp3',
          words: 'crow, dove, duck, hen, parrot, peacock, sparrow, chick, crane'
        },
        {
          audio: 'bn-birds.mp3',
          audioOffset: 18,
          words: 'kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'ধ্বনি শুনে শব্দ শনাক্ত করুন - যানবাহন, অন্যান্য',
      id: 'pick-word-others',
      commonData: {
        title: 'ধ্বনি শুনে শব্দ ক্লিক করুন',
        type: 'words'
      },
      data: [
        {
          audio: 'bn-vehicles.mp3',
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, ship, train, auto, cart, excavator, fire-engine'
        },

        {
          audio: 'bn-others.mp3',
          audioOffset: 0,
          words: 'house, table, bed, candle, chair, shelf, baby, boy, girl'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 18,
          words:
            'man, woman, glasses, clock, watch, pen, scissors, waterbottle, book, color-pencils'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 38,
          words: 'sun, moon, rain, star, milk, ring, bone, bell, bird, conch'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 58,
          words: 'drums, five, food, fruits, king, kite, ladder'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 72,
          words: 'ladoo, leaf, rishi, wheel, whistle, world'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 0,
          words: 'গোলাপ, পদ্ম, সূর্যমুখী, গাঁদা, জবা, জুঁই'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 12,
          words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 28,
          words: 'stove, fork, knife, pan, spoon, pot, butter'
        },
    }
  ]
};
