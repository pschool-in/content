export default {
  label: 'Animals and Birds',
  id: 'mr-pic-word',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Word: Animals',
      id: 'pick-animals',
      commonData: {
        title: 'Listen to the sound and pick the right word.',
        type: 'words',
        fontSize: '1.5rem',
        audio: 'mr/mr-animals.mp3'
      },
      data: [
        {
          words: 'मांजर,कुत्रा,शेळी,गाय,गाढव,घोडा,डुक्कर,हत्ती,सिंह,माकड',
          audioOffset: 0
        },
        {
          words: 'गेंडा,कोल्हा,मगर,अस्वल,उंट,देवमासा,वाघ,मेंढ्या,मासे,बेडूक',
          audioOffset: 20
        },
        {
          words: 'खेकडा,साप,बैल,कासव,उंदीर,मुंगी,वटवाघूळ,म्हैस',
          audioOffset: 40
        },
        { words: 'फुलपाखरू,मधमाशी,सोनेरी मासा,कोळी', audioOffset: 56 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Word: Birds',
      id: 'pick-birds',
      commonData: {
        title: 'Listen to the sound and pick the right word.',
        type: 'words',
        fontSize: '1.5rem',
        audio: 'mr/mr-birds.mp3'
      },
      data: [
        {
          words: 'कावळा,पारवा,बदक,कोंबडी,पोपट,मोर,चिमणी,गरुड,शहामृग',
          audioOffset: 0
        },
        { words: 'घुबड,कोंबडा,गिधाड,लाकूडपेकर', audioOffset: 18 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Animals',
      id: 'write-animals',
      commonDate: { title: 'Listen to the sound and write the word.' },
      commonData: { audio: 'mr/mr-animals.mp3' },
      data: [
        {
          words: 'मांजर,कुत्रा,शेळी,गाय,गाढव,घोडा,डुक्कर,हत्ती,सिंह,माकड',
          audioOffset: 0
        },
        {
          words: 'गेंडा,कोल्हा,मगर,अस्वल,उंट,देवमासा,वाघ,मेंढ्या,मासे,बेडूक',
          audioOffset: 20
        },
        {
          words: 'खेकडा,साप,बैल,कासव,उंदीर,मुंगी,वटवाघूळ,म्हैस',
          audioOffset: 40
        },
        { words: 'फुलपाखरू,मधमाशी,सोनेरी मासा,कोळी', audioOffset: 56 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: Birds',
      id: 'write-birds',
      commonDate: { title: 'Listen to the sound and write the word.' },
      commonData: { audio: 'mr/mr-birds.mp3' },
      data: [
        {
          words: 'कावळा,पारवा,बदक,कोंबडी,पोपट,मोर,चिमणी,गरुड,शहामृग',
          audioOffset: 0
        },
        { words: 'घुबड,कोंबडा,गिधाड,लाकूडपेकर', audioOffset: 18 }
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Animals',
      id: 'fill-animals',
      commonData: { images: 'stockImgs', title: 'Write the word', lang: 'mr' },
      data: [
        'cat|मांजर\ndog|कुत्रा\ngoat|शेळी\ncow|गाय\ndonkey|गाढव\nhorse|घोडा\npig|डुक्कर\nelephant|हत्ती\nlion|सिंह\nmonkey|माकड',
        'rhino|गेंडा\nfox|कोल्हा\ncrocodile|मगर\nbear|अस्वल\ncamel|उंट\nwhale|देवमासा\ntiger|वाघ\nsheep|मेंढ्या\nfish|मासे\nfrog|बेडूक',
        'crab|खेकडा\nsnake|साप\nbull|बैल\ntortoise|कासव\nrat|उंदीर\nant|मुंगी\nbat|वटवाघूळ\nbuffalo|म्हैस',
        'butterfly|फुलपाखरू\nbee|मधमाशी\ngoldfish|सोनेरी मासा\nspider|कोळी'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Birds',
      id: 'fill-birds',
      commonData: { images: 'stockImgs', title: 'Write the word', lang: 'mr' },
      data: [
        'crow|कावळा\ndove|पारवा\nduck|बदक\nhen|कोंबडी\nparrot|पोपट\npeacock|मोर\nsparrow|चिमणी\neagle|गरुड\nostrich|शहामृग',
        'owl|घुबड\nrooster|कोंबडा\nvulture|गिधाड\nwoodpecker|लाकूडपेकर'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: Animals',
      id: 'connect-animals',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        fontSize: '1rem',
        lang: 'mr'
      },
      data: [
        'cat,मांजर\ndog,कुत्रा\ngoat,शेळी\ncow,गाय\ndonkey,गाढव\nhorse,घोडा\npig,डुक्कर\nelephant,हत्ती\nlion,सिंह\nmonkey,माकड',
        'rhino,गेंडा\nfox,कोल्हा\ncrocodile,मगर\nbear,अस्वल\ncamel,उंट\nwhale,देवमासा\ntiger,वाघ\nsheep,मेंढ्या\nfish,मासे\nfrog,बेडूक',
        'crab,खेकडा\nsnake,साप\nbull,बैल\ntortoise,कासव\nrat,उंदीर\nant,मुंगी\nbat,वटवाघूळ\nbuffalo,म्हैस',
        'butterfly,फुलपाखरू\nbee,मधमाशी\ngoldfish,सोनेरी मासा\nspider,कोळी'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: Birds',
      id: 'connect-birds',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        fontSize: '1rem',
        lang: 'mr'
      },
      data: [
        'crow,कावळा\ndove,पारवा\nduck,बदक\nhen,कोंबडी\nparrot,पोपट\npeacock,मोर\nsparrow,चिमणी\neagle,गरुड\nostrich,शहामृग',
        'owl,घुबड\nrooster,कोंबडा\nvulture,गिधाड\nwoodpecker,लाकूडपेकर'
      ]
    }
  ]
};
