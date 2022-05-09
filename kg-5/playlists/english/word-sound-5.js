export default {
  label: 'More Animals and Birds 2',
  id: 'word-sound-5',
  lockAfter: 2,
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
              'mongoose, mosquito, octopus, wolf, lizard, cockroach, garden lizard, rabbit, leopard, dragonfly, housefly, squirrel, dinosaur, alligator, boar, cricket, hyena, polarbear, antelope, bug, jackal, prawn, baboon, python, bison, chameleon, porcupine, tigerfish, ladybug, seahorse, hamster, mole, caterpillar, earthworm, hedgehog, stingray, jellyfish, starfish',
            width: 80
          },
          `# Birds`,
          {
            type: 'sitewords',
            text:
              'hornbill, cuckoo, pheasant, falcon, swan, bulbul, spotted dove, pelican, hummingbird, robin, swallow, blue jay, seagull, canary, goose, turkey, hawk, cardinal, parakeet, macaw',
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
        audio: 'kg-5/animals-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'mongoose, mosquito, octopus, wolf, lizard, cockroach, garden lizard, rabbit, leopard'
        },
        {
          audioOffset: 18,
          words:
            'dragonfly, housefly, squirrel, dinosaur, alligator, boar, cricket, hyena, polarbear, antelope'
        },
        {
          audioOffset: 38,
          words:
            'bug, jackal, prawn, baboon, python, bison, chameleon, porcupine, tigerfish, ladybug'
        },
        {
          audioOffset: 58,
          words:
            'seahorse, hamster, mole, caterpillar, earthworm, hedgehog, stingray, jellyfish, starfish'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Birds',
      id: 'sound-bird',
      commonData: {
        title: 'Listen to the sound and click on the bird.',
        type: 'words',
        audio: 'kg-5/birds-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'hornbill, cuckoo, pheasant, falcon, swan, bulbul, spotted dove, pelican, hummingbird, robin'
        },
        {
          audioOffset: 20,
          words:
            'swallow, blue jay, seagull, canary, goose, turkey, hawk, cardinal, parakeet, macaw'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Animals',
      id: 'dictation-animal',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/animals-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'mongoose, mosquito, octopus, wolf, lizard, cockroach, garden lizard, rabbit, leopard'
        },
        {
          audioOffset: 18,
          words:
            'dragonfly, housefly, squirrel, dinosaur, alligator, boar, cricket, hyena, polarbear, antelope'
        },
        {
          audioOffset: 38,
          words:
            'bug, jackal, prawn, baboon, python, bison, chameleon, porcupine, tigerfish, ladybug'
        },
        {
          audioOffset: 58,
          words:
            'seahorse, hamster, mole, caterpillar, earthworm, hedgehog, stingray, jellyfish, starfish'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Birds',
      id: 'dictation-bird',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/birds-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'hornbill, cuckoo, pheasant, falcon, swan, bulbul, spotted dove, pelican, hummingbird, robin'
        },
        {
          audioOffset: 20,
          words:
            'swallow, blue jay, seagull, canary, goose, turkey, hawk, cardinal, parakeet, macaw'
        }
      ]
    }
  ]
};
