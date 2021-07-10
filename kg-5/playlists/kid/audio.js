export default {
  label: 'Picture and Audio',
  id: 'audio',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'Animals',
      commonData: {
        audio: 'animals.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audioOffset: 20,
          text:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audioOffset: 40,
          text:
            'dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites | termites, ant'
        },
        {
          audioOffset: 60,
          text:
            'fly, bat, buffalo, butterfly, cheetah, cow, donkey, giraffe, kangaroo, leopard'
        },
        {
          audioOffset: 80,
          text:
            'mongoose, mosquito, octopus, wolf, cockroach, garden-lizard, lizard,  rabbit'
        }
      ]
    },
    {
      type: 'slides',
      id: 'animal-sound',
      label: 'Animal Sounds',
      commonData: {
        audio: 'animal-sounds.mp3'
      },
      data: [
        {
          audioOffset: 0,
          audioWidth: 5,
          text: 'cat, dog, cow, hen, sheep, horse, pig, donkey, rooster , duck'
        },
        {
          audioOffset: 50,
          audioWidth: 5,
          text: 'goat, chick, frog, lion, monkey, tiger, elephant, bear, wolf'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Animal Sound',
      id: 'find-animal-sound',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and select the right animal.',
        type: 'image'
      },
      data: [
        {
          audio: 'animal-sounds.mp3',
          audioWidth: 5,
          words: 'cat, dog, cow, hen, sheep, horse, pig, donkey, rooster , duck'
        },
        {
          audio: 'animal-sounds.mp3',
          audioOffset: 50,
          audioWidth: 5,
          words: 'goat, chick, frog, lion, monkey, tiger, elephant, bear, wolf'
        }
      ]
    },

    {
      type: 'slides',
      id: 'birds',
      label: 'Birds',
      commonData: {
        audio: 'birds.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'crow, dove, duck, hen, chick, parrot, peacock, penguin, sparrow, crane'
        },
        {
          audioOffset: 20,
          text:
            'eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, hornbill'
        }
      ]
    },
    {
      type: 'slides',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        audio: 'fruits.mp3'
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
            'papaya, pineapple, pomegranate, watermelon, fig, custard-apple | custard apple, plum, dates, muskmelon'
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        audio: 'vegetables.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic'
        },
        {
          audioOffset: 20,
          text:
            'ginger, pumpkin, almond, beans, bitter-gourd | bitter gourd, brinjal, capsicum, cashewnut, chilli, coconut'
        },
        {
          audioOffset: 40,
          text:
            'corianderleaf | coriander leaf, curryleaf | curry leaf, drumstick, greenpeas, ladies-finger | ladies finger, mintleaf, peanut, raddish, spinach'
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'flowers-bodyParts.mp3',
        audioOffset: 0,
        text:
          'rose, lotus, sunflower, marigold, hibiscus, jasmine, tulip, zinnia'
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'Body Parts',
      data: {
        audio: 'flowers-bodyParts.mp3',
        audioOffset: 16,
        text: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'Transport',
      commonData: {
        audio: 'vehicles.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'aeroplane, boat, bus, car, cycle, helicoptor, motorbike,ship, tractor'
        },
        {
          audioOffset: 18,
          text:
            'train, ambulance, auto, cart, excavator, fire-engine, lorry, van'
        }
      ]
    },
    {
      type: 'slides',
      id: 'things',
      label: 'Things',
      commonData: {
        audio: 'objects.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: 'house, table, bed, candle, chair, shelf, baby, boy, girl, man'
        },
        {
          audioOffset: 20,
          text:
            'woman, ball, coat, glasses, clock, watch, eraser, pen, pencil, ruler'
        },
        {
          audioOffset: 40,
          text:
            'schoolbag, scissors, sharpener, waterbottle, calculator, book, color-pencils, crayons'
        },
        {
          audioOffset: 56,
          text: 'stove, fork, knife, pan, spoon, pot, butter'
        },
        {
          audioOffset: 70,
          text:
            'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web-camera'
        }
      ]
    },
    {
      type: 'slides',
      id: 'tools',
      label: 'Tools',
      commonData: {
        audio: 'tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'axe, balance, blackboard, hose, microscope, needle, oven, plier'
        },
        {
          audioOffset: 16,
          text:
            'plough, saw, spade, stethoscope, telescope, testtube, thermometer, trowel'
        },
        {
          audioOffset: 32,
          text: 'walkie-talkie, awl, compass, easel, hacksaw, scalpel'
        }
      ]
    },
    {
      type: 'slides',
      id: 'general',
      label: 'General',
      commonData: {
        audio: 'general.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'sun, moon, rain, star, milk, ring, brush, bone, bell, bird, conch'
        },
        {
          audioOffset: 22,
          text:
            'drums, food, fruits, king, kite, ladder, leaf, wheel, whistle, world'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Words by Sound',
      id: 'pick-word',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'image'
      },
      data: [
        {
          audio: 'animals.mp3',
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audio: 'animals.mp3',
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audio: 'animals.mp3',
          audioOffset: 40,
          words:
            'dragonfly, fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant'
        }
      ]
    },
    {
      type: 'slides',
      id: 'tamil-kural',
      label: 'Tamil Kural',
      commonData: {
        audio: 'thirukkural.mp3',
        type: 'text'
      },
      data: [
        {
          audioOffset: 0,
          audioWidth: 5,
          arr: [
            `அகர முதல எழுத்தெல்லாம் ஆதி
பகவன் முதற்றே உலகு.`,

            `விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து
உள்நின்று உடற்றும் பசி.`,

            `கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற்று ஆங்கே
எடுப்பதூஉம் எல்லாம் மழை.`,

            `தம்மின்தம் மக்கள் அறிவுடைமை மாநிலத்து
மன்னுயிர்க்கு எல்லாம் இனிது.`,

            `ஈன்ற பொழுதின் பெரிதுவக்கும் தன்மகனைச்
சான்றோன் எனக்கேட்ட தாய்.`
          ]
        },
        {
          audioOffset: 25,
          audioWidth: 5,
          arr: [
            `செயற்கரிய செய்வார் பெரியர் சிறியர்
செயற்கரிய செய்கலா தார்.`,
            `அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார்
என்பும் உரியர் பிறர்க்கு.`,
            `அன்பின் வழியது உயிர்நிலை அஃதிலார்க்கு
என்புதோல் போர்த்த உடம்பு.`,
            `பணிவுடையன் இன்சொலன் ஆதல் ஒருவற்கு
அணியல்ல மற்றுப் பிற.`,
            `இனிய உளவாக இன்னாத கூறல்
கனிஇருப்பக் காய்கவர்ந் தற்று.`
          ]
        }
      ]
    }
  ]
};
