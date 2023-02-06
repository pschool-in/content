export default {
  label: 'More Animals and Birds',
  id: 'sound-5',
  lockAfter: 1,
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'Animals',
      commonData: {
        audio: 'kg-5/animals-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'mongoose, mosquito, octopus, wolf, lizard, cockroach, garden-lizard, rabbit, leopard'
        },
        {
          audioOffset: 18,
          text:
            'dragonfly, fly|housefly, squirrel, dinosaur, alligator, boar, cricket, hyena, polarbear, antelope'
        },
        {
          audioOffset: 38,
          text:
            'bug, jackal, prawn, baboon, python, bison, chameleon, porcupine, tigerfish, ladybug'
        },
        {
          audioOffset: 58,
          text:
            'seahorse, hamster, mole, caterpillar, earthworm, hedgehog, stingray, jellyfish, starfish'
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'Birds',
      commonData: {
        audio: 'kg-5/birds-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'hornbill, cuckoo, pheasant, falcon, swan, bulbul, spotted-dove|spotted dove, pelican, hummingbird, robin'
        },
        {
          audioOffset: 20,
          text:
            'swallow, blue-jay|blue jay, seagull, canary, goose, turkey, hawk, cardinal, parakeet, macaw'
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
        audio: 'kg-5/animals-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'mongoose, mosquito, octopus, wolf, lizard, cockroach, garden-lizard, rabbit, leopard'
        },
        {
          audioOffset: 18,
          words:
            'dragonfly, fly, squirrel, dinosaur, alligator, boar, cricket, hyena, polarbear, antelope'
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
      id: 'pick-bird',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the bird.',
        type: 'image',
        audio: 'kg-5/birds-2.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'hornbill, cuckoo, pheasant, falcon, swan, bulbul, spotted-dove, pelican, hummingbird, robin'
        },
        {
          audioOffset: 20,
          words:
            'swallow, blue-jay, seagull, canary, goose, turkey, hawk, cardinal, parakeet, macaw'
        }
      ]
    }
  ]
};
