export default {
  label: 'Animals and Birds',
  id: 'mr-sound',
  list: [
    {
      type: 'slides',
      label: 'Animals',
      id: 'animals',
      commonData: { audio: 'mr/mr-animals.mp3' },
      data: [
        {
          text: 'cat|मांजर\ndog|कुत्रा\ngoat|शेळी\ncow|गाय\ndonkey|गाढव\nhorse|घोडा\npig|डुक्कर\nelephant|हत्ती\nlion|सिंह\nmonkey|माकड',
          audioOffset: 0
        },
        {
          text: 'rhino|गेंडा\nfox|कोल्हा\ncrocodile|मगर\nbear|अस्वल\ncamel|उंट\nwhale|देवमासा\ntiger|वाघ\nsheep|मेंढ्या\nfish|मासे\nfrog|बेडूक',
          audioOffset: 20
        },
        {
          text: 'crab|खेकडा\nsnake|साप\nbull|बैल\ntortoise|कासव\nrat|उंदीर\nant|मुंगी\nbat|वटवाघूळ',
          audioOffset: 40
        },
        {
          text: 'buffalo|म्हैस\nbutterfly|फुलपाखरू\nbee|मधमाशी\ngoldfish|सोनेरी मासा\nspider|कोळी',
          audioOffset: 54
        }
      ]
    },
    {
      type: 'slides',
      label: 'Birds',
      id: 'birds',
      commonData: { audio: 'mr/mr-birds.mp3' },
      data: [
        {
          text: 'crow|कावळा\ndove|पारवा\nduck|बदक\nhen|कोंबडी\nparrot|पोपट\npeacock|मोर\nsparrow|चिमणी\neagle|गरुड',
          audioOffset: 0
        },
        {
          text: 'ostrich|शहामृग\nowl|घुबड\nrooster|कोंबडा\nvulture|गिधाड\nwoodpecker|लाकूडपेकर',
          audioOffset: 16
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Animals',
      id: 'find-animals',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'mr/mr-animals.mp3'
      },
      data: [
        {
          words: 'cat,dog,goat,cow,donkey,horse,pig,elephant,lion,monkey',
          audioOffset: 0
        },
        {
          words: 'rhino,fox,crocodile,bear,camel,whale,tiger,sheep,fish,frog',
          audioOffset: 20
        },
        {
          words: 'crab,snake,bull,tortoise,rat,ant,bat,buffalo',
          audioOffset: 40
        },
        { words: 'butterfly,bee,goldfish,spider', audioOffset: 56 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Birds',
      id: 'find-birds',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'mr/mr-birds.mp3'
      },
      data: [
        {
          words: 'crow,dove,duck,hen,parrot,peacock,sparrow,eagle,ostrich',
          audioOffset: 0
        },
        { words: 'owl,rooster,vulture,woodpecker', audioOffset: 18 }
      ]
    }
  ]
};
