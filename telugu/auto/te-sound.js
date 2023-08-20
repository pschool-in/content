export default {
  label: '',
  id: 'te-sound',
  lang: 'te',
  list: [
    {
      type: 'slides',
      label: 'జంతువులు',
      id: 'animals',
      commonData: { audio: 'te/te-animals.mp3' },
      data: [
        {
          text: 'cat|పిల్లి\ndog|కుక్క\ngoat|మేక\ncow|ఆవు\ndonkey|గాడిద\nhorse|గుర్రం\npig|పంది\nelephant|ఏనుగు\nlion|సింహం\nmonkey|కోతి',
          audioOffset: 0
        },
        {
          text: 'hippo|నీటి ఏనుగు\nrhino|ఖడ్గమృగం\nfox|నక్క\ncrocodile|మొసలి\nzebra|చారల గుర్రము\nbear|ఎలుగుబంటి\ncamel|ఒంటె\nshark|సొరచేప\nwhale|తిమింగలం\ntiger|పులి',
          audioOffset: 20
        },
        {
          text: 'sheep|గొర్రె\nfish|చేప\nfrog|కప్ప\ncrab|పీత\nsnake|పాము\nbull|ఎద్దు\ntortoise|తాబేలు\nrat|ఎలుక\nant|చీమ\nbat|గబ్బిలం',
          audioOffset: 40
        },
        {
          text: 'buffalo|గేదె\nbutterfly|సీతాకోకచిలుక\ncheetah|చిరుత\nbee|తేనెటీగ\ngoldfish|గోల్డ్ ఫిష్\nspider|సాలీడు\npanda|పాండా\ngiraffe|జిరాఫీ\nkangaroo|కంగారు',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'slides',
      label: 'పక్షులు',
      id: 'birds',
      commonData: { audio: 'te/te-birds.mp3' },
      data: [
        {
          text: 'crow|కాకి\ndove|పావురం\nduck|బాతు\nhen|కోడి\nchick|కోడిపిల్ల\nparrot|చిలుక\npeacock|నెమలి\nsparrow|పిచ్చుక\ncrane|కొంగ\neagle|డేగ',
          audioOffset: 0
        },
        {
          text: 'flamingo|రాజహంస\nkingfisher|చల్లముద్దపక్షి\nmyna|మైనా\nostrich|ఉష్ట్రపక్షి\nowl|గుడ్లగూబ\nvulture|రాబందు\nwoodpecker|వడ్రంగిపిట్ట\nkoel|కోయెల్',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: జంతువులు',
      id: 'find-animals',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'te/te-animals.mp3'
      },
      data: [
        {
          words: 'cat,dog,goat,cow,donkey,horse,pig,elephant,lion,monkey',
          audioOffset: 0
        },
        {
          words: 'hippo,rhino,fox,crocodile,zebra,bear,camel,shark,whale,tiger',
          audioOffset: 20
        },
        {
          words: 'sheep,fish,frog,crab,snake,bull,tortoise,rat,ant,bat',
          audioOffset: 40
        },
        {
          words:
            'buffalo,butterfly,cheetah,bee,goldfish,spider,panda,giraffe,kangaroo',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: పక్షులు',
      id: 'find-birds',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'te/te-birds.mp3'
      },
      data: [
        {
          words: 'crow,dove,duck,hen,chick,parrot,peacock,sparrow,crane,eagle',
          audioOffset: 0
        },
        {
          words: 'flamingo,kingfisher,myna,ostrich,owl,vulture,woodpecker,koel',
          audioOffset: 20
        }
      ]
    }
  ]
};
