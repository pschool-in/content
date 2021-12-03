export default {
  label: 'Animals and Birds 2',
  id: 'word-sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `# Animals`,
          {
            type: 'sitewords',
            text:
              'cat, dog, goat, cow, donkey, horse, pig, elephant, lion, monkey, hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dolphin, tiger, sheep, fish, frog, crab, snake, bull, tortoise, rat, ant, bat, buffalo, butterfly, cheetah, bee, goldfish, spider, panda, giraffe, kangaroo',
            width: 80
          },
          `# Birds`,
          {
            type: 'sitewords',
            text:
              'crow, dove, duck, hen, chick, parrot, peacock, penguin, sparrow, crane, eagle, flamingo, kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker, koel',
            width: 80
          }
        ]
      }
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
    },
    {
      type: 'rightOne',
      label: 'Identify Birds',
      id: 'sound-bird',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the bird.',
        type: 'words',
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
      type: 'dictation',
      label: 'Dictation Animals',
      id: 'dictation-animal',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
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
      type: 'dictation',
      label: 'Dictation Birds',
      id: 'dictation-bird',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and type the word.',
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
    }
  ]
};
