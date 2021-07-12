export default {
  label: 'শব্দ',
  id: 'bn-sound',
  img: 'sound',
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
          text: `cat | বিড়াল
dog | কুকুর
goat | ছাগল
sheep | ভেড়া
horse | ঘোড়া
pig | শূকর
elephant | হাতি
lion | সিংহ
monkey | বানর 
tiger | বাঘ`
        },
        {
          audioOffset: 20,
          text: `hippo | জলহস্তী
rhino | গণ্ডার
fox | শিয়াল
crocodile | কুমির
zebra | জেব্রা
bear | ভালুক
camel | উট
shark | হাঙ্গর
whale | তিমি মাছ
dolphin | ডলফিন`
        },
        {
          audioOffset: 40,
          text: `dragonfly | ফড়িং
fish | মাছ
frog | ব্যাঙ
crab | কাঁকড়া 
snake | সাপ
squirrel | কাঠবিড়ালি
tortoise | কচ্ছপ 
rat | ইঁদুর 
winged-termites | উইপোকা
ant | পিঁপড়ে `
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
    }
  ]
};
