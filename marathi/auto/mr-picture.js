export default {
  label: 'प्राणी आणि पक्षी',
  id: 'mr-picture',
  lang: 'mr',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-animals',
      label: 'Drag & Drop: प्राणी',
      commonData: { title: 'नावे ड्रॅग करा आणि योग्य चित्रांपाशी टाका.' },
      data: [
        'cat|मांजर\ndog|कुत्रा\ngoat|शेळी\ncow|गाय\ndonkey|गाढव\nhorse|घोडा',
        'pig|डुक्कर\nelephant|हत्ती\nlion|सिंह\nmonkey|माकड\nhippo|पाणघोडा\nrhino|गेंडा',
        'fox|कोल्हा\ncrocodile|मगर\nzebra|झेब्रा\nbear|अस्वल\ncamel|उंट\nshark|शार्क',
        'whale|देवमासा\ndolphin|डॉल्फिन\ntiger|वाघ\nsheep|मेंढी\nfish|मासे\nfrog|बेडूक',
        'crab|खेकडा\nsnake|साप\nbull|बैल\ntortoise|कासव\nrat|उंदीर\nant|मुंगी',
        'bat|वटवाघूळ\nbuffalo|म्हैस\nbutterfly|फुलपाखरू\ncheetah|चित्ता\nbee|मधमाशी\ngoldfish|सोनेरी मासा',
        'spider|कोळी\npanda|पांडा\ngiraffe|जिराफ\nkangaroo|कांगारू'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-birds',
      label: 'Drag & Drop: पक्षी',
      commonData: { title: 'नावे ड्रॅग करा आणि योग्य चित्रांपाशी टाका.' },
      data: [
        'crow|कावळा\ndove|पारवा\nduck|बदक\nhen|कोंबडी\nchick|कोंबडीचे पिल्लू\nparrot|पोपट',
        'peacock|मोर\npenguin|पेंग्विन\nsparrow|चिमणी\ncrane|बगळा\neagle|गरुड\nflamingo|रोहित पक्षी',
        'kingfisher|खंड्या\nmyna|साळुंखी\nostrich|शहामृग\nowl|घुबड\nrooster|कोंबडा',
        'vulture|गिधाड\nwoodpecker|सुतारपक्षी\nkoel|कोकिळा'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: प्राणी',
      id: 'fill-animals',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'गाळलेली अक्षरे शोधा आणि शब्द पूर्ण करा.'
      },
      data: [
        'cat|मांजर|_जर|मां,गा,जि,झ\ndog|कुत्रा|_त्रा|कु,का,छा,जि\ngoat|शेळी|_ळी|शे,छा,त्रु,गा\ncow|गाय|_य|गा,ख,जि,का\ndonkey|गाढव|_ढव|गा,त्रु,जि,झी\nhorse|घोडा|_डा|घो,ख,झ,च\npig|डुक्कर|_क्कर|डु,च,झ,गा\nelephant|हत्ती|_त्ती|ह,ख,गा,जि\nlion|सिंह|_ह|सिं,झी,गा,त्रु\nmonkey|माकड|_कड|मा,च,झी,का',
        'hippo|पाणघोडा|_णघोडा|पा,त्रु,च,गा\nrhino|गेंडा|_डा|गें,झी,का,ख\nfox|कोल्हा|_ल्हा|को,च,गा,ख\ncrocodile|मगर|_गर|म,छा,गा,झी\nzebra|झेब्रा|_ब्रा|झे,घी,जि,च\nbear|अस्वल|_स्वल|अ,झी,का,च\ncamel|उंट|_ट|उं,जि,छा,च\nshark|शार्क|_र्क|शा,च,जि,छा\nwhale|देवमासा|_वमासा|दे,ख,का,छा\ndolphin|डॉल्फिन|_ल्फिन|डॉ,गा,घी,झी',
        'tiger|वाघ|_घ|वा,झी,गा,छा\nsheep|मेंढी|_ढी|में,छा,गा,च\nfish|मासे|_से|मा,छा,जि,गा\nfrog|बेडूक|_डूक|बे,जि,झी,का\ncrab|खेकडा|_कडा|खे,जि,ख,च\nsnake|साप|_प|सा,झी,जि,घी\nbull|बैल|_ल|बै,झी,का,घी\ntortoise|कासव|_सव|का,गा,झी,ख\nrat|उंदीर|_दीर|उं,गा,ख,च\nant|मुंगी|_गी|मुं,का,झ,ख',
        'bat|वटवाघूळ|_टवाघूळ|व,झी,जि,झ\nbuffalo|म्हैस|_स|म्है,ख,का,झी\nbutterfly|फुलपाखरू|_लपाखरू|फु,का,गा,त्रु\ncheetah|चित्ता|_त्ता|चि,त्रु,छा,झी\nbee|मधमाशी|_धमाशी|म,झी,का,छा\ngoldfish|सोनेरी मासा|_नेरी मासा|सो,जि,छा,च\nspider|कोळी|_ळी|को,झी,त्रु,गा\npanda|पांडा|_डा|पां,जि,का,गा\ngiraffe|जिराफ|_राफ|जि,का,छा,झी\nkangaroo|कांगारू|_गारू|कां,का,छा,च'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: पक्षी',
      id: 'fill-birds',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'गाळलेली अक्षरे शोधा आणि शब्द पूर्ण करा.'
      },
      data: [
        'crow|कावळा|_वळा|का,गा,च,छा\ndove|पारवा|_रवा|पा,का,गा,झी\nduck|बदक|_दक|ब,गा,झ,त्रु\nhen|कोंबडी|_बडी|कों,त्रु,च,छा\nchick|कोंबडीचे पिल्लू|_बडीचे पिल्लू|कों,झ,झी,जि\nparrot|पोपट|_पट|पो,गा,त्रु,च\npeacock|मोर|_र|मो,जि,च,झी\npenguin|पेंग्विन|_ग्विन|पें,गा,ख,का\nsparrow|चिमणी|_मणी|चि,का,च,झी\ncrane|बगळा|_गळा|ब,गा,जि,घी',
        'eagle|गरुड|_रुड|ग,गा,झ,ख\nflamingo|रोहित पक्षी|_हित पक्षी|रो,जि,झी,त्रु\nkingfisher|खंड्या|_ड्या|खं,च,घी,झ\nmyna|साळुंखी|_ळुंखी|सा,झी,का,त्रु\nostrich|शहामृग|_हामृग|श,त्रु,च,झी\nowl|घुबड|_बड|घु,जि,झी,का\nrooster|कोंबडा|_बडा|कों,गा,ख,जि\nvulture|गिधाड|_धाड|गि,त्रु,च,का\nwoodpecker|सुतारपक्षी|_तारपक्षी|सु,जि,च,घी\nkoel|कोकिळा|_किळा|को,का,च,छा'
      ]
    },
    {
      type: 'match',
      label: 'Match: प्राणी',
      id: 'match-animals',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र त्याच्या पहिल्या अक्षराशी जोडा.'
      },
      data: [
        'मा,monkey\nउं,camel\nवा,tiger\nफु,butterfly\nचि,cheetah',
        'मा,fish\nउं,rat\nव,bat\nपां,panda\nघो,horse',
        'म,crocodile\nह,elephant\nम्है,buffalo\nपा,hippo\nगें,rhino',
        'म,bee\nसो,goldfish\nमें,sheep\nदे,whale\nखे,crab',
        'गा,cow\nसिं,lion\nमुं,ant\nडॉ,dolphin\nकु,dog',
        'गा,donkey\nसा,snake\nमां,cat\nडु,pig\nकां,kangaroo',
        'को,fox\nशे,goat\nबै,bull\nझे,zebra\nका,tortoise',
        'को,spider\nशा,shark\nबे,frog\nजि,giraffe\nअ,bear'
      ]
    },
    {
      type: 'match',
      label: 'Match: पक्षी',
      id: 'match-birds',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र त्याच्या पहिल्या अक्षराशी जोडा.'
      },
      data: [
        'कों,hen\nब,crane\nरो,flamingo\nपा,dove\nग,eagle',
        'कों,chick\nसु,woodpecker\nमो,peacock\nचि,sparrow\nखं,kingfisher',
        'कों,rooster\nसा,myna\nपो,parrot\nघु,owl\nको,koel',
        'ब,duck\nश,ostrich\nपें,penguin\nगि,vulture\nका,crow'
      ]
    }
  ]
};
