export default {
  label: 'Animals and Birds',
  id: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animal-sound',
      label: 'Animal Sounds',
      commonData: {
        audio: 'kg-5/animal-sounds.mp3'
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
        type: 'image',
        audio: 'kg-5/animal-sounds.mp3'
      },
      data: [
        {
          audioWidth: 5,
          words: 'cat, dog, cow, hen, sheep, horse, pig, donkey, rooster , duck'
        },
        {
          audioOffset: 50,
          audioWidth: 5,
          words: 'goat, chick, frog, lion, monkey, tiger, elephant, bear, wolf'
        }
      ]
    },
    {
      type: 'slides',
      id: 'animals',
      label: 'Animals',
      commonData: {
        audio: 'kg-5/animals-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'cat, dog, goat, cow, donkey, horse, pig, elephant, lion, monkey'
        },
        {
          audioOffset: 20,
          text:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audioOffset: 40,
          text:
            'tiger, sheep, fish, frog, crab, snake, bull, tortoise, rat, ant'
        },
        {
          audioOffset: 60,
          text:
            'bat, buffalo, butterfly, cheetah, bee, goldfish, spider, panda, giraffe, kangaroo'
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'Birds',
      commonData: {
        audio: 'kg-5/birds-1.mp3'
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
            'eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, koel'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Animals',
      id: 'pick-animal',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the animal.',
        type: 'image',
        audio: 'kg-5/animals-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'cat, dog, goat, cow, donkey, horse, pig, elephant, lion, monkey'
        },
        {
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audioOffset: 40,
          words:
            'tiger, sheep, fish, frog, crab, snake, bull, tortoise, rat, ant'
        },
        {
          audioOffset: 60,
          words:
            'bat, buffalo, butterfly, cheetah, bee, goldfish, spider, panda, giraffe, kangaroo'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Birds',
      id: 'pick-bird',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the bird.',
        type: 'image',
        audio: 'kg-5/birds-1.mp3'
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
            'eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, koel'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Animals',
      id: 'sound-animal',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the animal.',
        type: 'words',
        audio: 'kg-5/animals-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'cat, dog, goat, cow, donkey, horse, pig, elephant, lion, monkey'
        },
        {
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin'
        },
        {
          audioOffset: 40,
          words:
            'tiger, sheep, fish, frog, crab, snake, bull, tortoise, rat, ant'
        },
        {
          audioOffset: 60,
          words:
            'bat, buffalo, butterfly, cheetah, bee, goldfish, spider, panda, giraffe, kangaroo'
        }
      ]
    }
  ]
};
