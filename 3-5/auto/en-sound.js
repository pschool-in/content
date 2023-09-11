export default {
  label: 'Animals and Birds',
  id: 'en-sound',
  lang: 'en',
  list: [
    {
      type: 'slides',
      label: 'Animals',
      id: 'animals',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-animals.mp3'
      },
      data: [
        {
          text: 'cat|Cat\ndog|Dog\ngoat|Goat\ncow|Cow\ndonkey|Donkey\nhorse|Horse\npig|Pig\nelephant|Elephant\nlion|Lion\nmonkey|Monkey',
          audioOffset: 0
        },
        {
          text: 'hippo|Hippo\nrhino|Rhino\nfox|Fox\ncrocodile|Crocodile\nzebra|Zebra\nbear|Bear\ncamel|Camel\nshark|Shark\nwhale|Whale\ndolphin|Dolphin',
          audioOffset: 20
        },
        {
          text: 'tiger|Tiger\nsheep|Sheep\nfish|Fish\nfrog|Frog\ncrab|Crab\nsnake|Snake\nbull|Bull\ntortoise|Tortoise\nrat|Rat\nant|Ant',
          audioOffset: 40
        },
        {
          text: 'bat|Bat\nbuffalo|Buffalo\nbutterfly|Butterfly\ncheetah|Cheetah\nbee|Bee\ngoldfish|Goldfish\nspider|Spider\npanda|Panda\ngiraffe|Giraffe\nkangaroo|Kangaroo',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'slides',
      label: 'Birds',
      id: 'birds',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-birds.mp3'
      },
      data: [
        {
          text: 'crow|Crow\ndove|Dove\nduck|Duck\nhen|Hen\nchick|Chick\nparrot|Parrot\npeacock|Peacock\npenguin|Penguin\nsparrow|Sparrow\ncrane|Crane',
          audioOffset: 0
        },
        {
          text: 'eagle|Eagle\nflamingo|Flamingo\nkingfisher|Kingfisher\nmyna|Myna\nostrich|Ostrich\nowl|Owl\nrooster|Rooster\nvulture|Vulture\nwoodpecker|Woodpecker\nkoel|Koel',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Animals',
      id: 'find-animals',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-animals.mp3'
      },
      data: [
        {
          words: 'cat,dog,goat,cow,donkey,horse,pig,elephant,lion,monkey',
          audioOffset: 0
        },
        {
          words:
            'hippo,rhino,fox,crocodile,zebra,bear,camel,shark,whale,dolphin',
          audioOffset: 20
        },
        {
          words: 'tiger,sheep,fish,frog,crab,snake,bull,tortoise,rat,ant',
          audioOffset: 40
        },
        {
          words:
            'bat,buffalo,butterfly,cheetah,bee,goldfish,spider,panda,giraffe,kangaroo',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Birds',
      id: 'find-birds',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-birds.mp3'
      },
      data: [
        {
          words:
            'crow,dove,duck,hen,chick,parrot,peacock,penguin,sparrow,crane',
          audioOffset: 0
        },
        {
          words:
            'eagle,flamingo,kingfisher,myna,ostrich,owl,rooster,vulture,woodpecker,koel',
          audioOffset: 20
        }
      ]
    }
  ]
};
