export default {
  label: 'Animals & Birds',
  id: 'mr-picture',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-animals',
      label: 'Drag & Drop: Animals',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'cat|मांजर\ndog|कुत्रा\ngoat|शेळी\ncow|गाय\ndonkey|गाढव\nhorse|घोडा',
        'pig|डुक्कर\nelephant|हत्ती\nlion|सिंह\nmonkey|माकड\nrhino|गेंडा\nfox|कोल्हा',
        'crocodile|मगर\nbear|अस्वल\ncamel|उंट\nwhale|देवमासा\ntiger|वाघ\nsheep|मेंढ्या',
        'fish|मासे\nfrog|बेडूक\ncrab|खेकडा\nsnake|साप\nbull|बैल\ntortoise|कासव',
        'rat|उंदीर\nant|मुंगी\nbat|वटवाघूळ\nbuffalo|म्हैस\nbutterfly|फुलपाखरू',
        'bee|मधमाशी\ngoldfish|सोनेरी मासा\nspider|कोळी'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-birds',
      label: 'Drag & Drop: Birds',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'crow|कावळा\ndove|पारवा\nduck|बदक\nhen|कोंबडी\nparrot|पोपट\npeacock|मोर',
        'sparrow|चिमणी\neagle|गरुड\nostrich|शहामृग\nowl|घुबड',
        'rooster|कोंबडा\nvulture|गिधाड\nwoodpecker|लाकूडपेकर'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Animals',
      id: 'fill-animals',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'cat|मांजर|_जर|मां,का,जि,त्रु\ndog|कुत्रा|_त्रा|कु,गा,छा,झ\ngoat|शेळी|_ळी|शे,त्रु,झी,जि\ncow|गाय|_य|गा,घी,झ,झी\ndonkey|गाढव|_ढव|गा,का,जि,झ\nhorse|घोडा|_डा|घो,झी,गा,झ\npig|डुक्कर|_क्कर|डु,झी,का,च\nelephant|हत्ती|_त्ती|ह,च,झी,त्रु\nlion|सिंह|_ह|सिं,जि,च,त्रु\nmonkey|माकड|_कड|मा,झी,गा,त्रु',
        'rhino|गेंडा|_डा|गें,गा,ख,झी\nfox|कोल्हा|_ल्हा|को,झ,झी,छा\ncrocodile|मगर|_गर|म,घी,गा,ख\nbear|अस्वल|_स्वल|अ,च,ख,झ\ncamel|उंट|_ट|उं,घी,गा,ख\nwhale|देवमासा|_वमासा|दे,झी,च,का\ntiger|वाघ|_घ|वा,छा,झी,जि\nsheep|मेंढ्या|_ढ्या|में,गा,का,घी\nfish|मासे|_से|मा,गा,घी,झी\nfrog|बेडूक|_डूक|बे,छा,गा,का',
        'crab|खेकडा|_कडा|खे,छा,गा,ख\nsnake|साप|_प|सा,छा,झी,का\nbull|बैल|_ल|बै,च,ख,गा\ntortoise|कासव|_सव|का,घी,छा,गा\nrat|उंदीर|_दीर|उं,झी,का,ख\nant|मुंगी|_गी|मुं,ख,का,च\nbat|वटवाघूळ|_टवाघूळ|व,घी,त्रु,झी\nbuffalo|म्हैस|_हैस|म्,जि,का,गा',
        'butterfly|फुलपाखरू|_लपाखरू|फु,घी,च,का\nbee|मधमाशी|_धमाशी|म,का,घी,त्रु\ngoldfish|सोनेरी मासा|_नेरी मासा|सो,का,त्रु,झी\nspider|कोळी|_ळी|को,गा,च,झी'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Birds',
      id: 'fill-birds',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'crow|कावळा|_वळा|का,त्रु,झी,छा\ndove|पारवा|_रवा|पा,घी,ख,झ\nduck|बदक|_दक|ब,च,झ,झी\nhen|कोंबडी|_बडी|कों,त्रु,झी,च\nparrot|पोपट|_पट|पो,जि,झ,घी\npeacock|मोर|_र|मो,गा,झ,झी\nsparrow|चिमणी|_मणी|चि,झी,च,गा\neagle|गरुड|_रुड|ग,च,ख,छा\nostrich|शहामृग|_हामृग|श,घी,गा,च',
        'owl|घुबड|_बड|घु,गा,ख,झी\nrooster|कोंबडा|_बडा|कों,घी,त्रु,जि\nvulture|गिधाड|_धाड|गि,च,घी,त्रु\nwoodpecker|लाकूडपेकर|_कूडपेकर|ला,जि,छा,च'
      ]
    },
    {
      type: 'match',
      label: 'Match: Animals',
      id: 'match-animals',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'मां,cat\nकु,dog\nशे,goat\nगा,cow\nगा,donkey',
        'घो,horse\nडु,pig\nह,elephant\nसिं,lion\nमा,monkey',
        'गें,rhino\nको,fox\nम,crocodile\nअ,bear\nउं,camel',
        'दे,whale\nवा,tiger\nमें,sheep\nमा,fish\nबे,frog',
        'खे,crab\nसा,snake\nबै,bull\nका,tortoise\nउं,rat',
        'मुं,ant\nव,bat\nम्,buffalo\nफु,butterfly',
        'म,bee\nसो,goldfish\nको,spider'
      ]
    },
    {
      type: 'match',
      label: 'Match: Birds',
      id: 'match-birds',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'का,crow\nपा,dove\nब,duck\nकों,hen\nपो,parrot',
        'मो,peacock\nचि,sparrow\nग,eagle\nश,ostrich\nघु,owl',
        'कों,rooster\nगि,vulture\nला,woodpecker'
      ]
    }
  ]
};
