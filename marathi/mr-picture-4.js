export default {
  label: 'House and Others',
  id: 'mr-picture-4',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-nature',
      label: 'Drag & Drop: Nature',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'man|माणूस\nwoman|स्त्री\nboy|मुलगा\ngirl|मुलगी\nbaby|बाळ\nhouse|घर',
        'bed|पलंग\ncandle|मेणबत्ती\nchair|खुर्ची\nglasses|चष्मा\nclock|घड्याळ\nflower-pot|फुलदाणी',
        'umbrella|छत्री\ndoor|दार\nbroom|झाडू\nwindow|खिडकी\nbucket|बादली\ntoilet|शौचालय',
        'soap|साबण\npillow|उशी\nbasket|टोपली'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-dress',
      label: 'Drag & Drop: Dress',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: ['shoe|बूट\nsock|मोजे\ngloves|हातमोजा\nhat|टोपी\ntrousers|पायघोळ']
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-school',
      label: 'Drag & Drop: School',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'ruler|शासक\neraser|खोडरबर\nscissors|कात्री\nbook|पुस्तक\nink|शाई\nschoolbag|शाळेचे दप्तर'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-kitchen',
      label: 'Drag & Drop: Kitchen',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'fork|काटा\nknife|चाकू\nspoon|चमचा\npot|भांडे\nbutter|लोणी\nlid|झाकण',
        'salad|कोशिंबीर\nsugar|साखर\nbowl|वाटी\nmeat|मांस\nsalt|मीठ\nsweets|मिठाई',
        'juice|रस\nflour|पीठ\nlentils|मसूर\nrice|तांदूळ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Nature',
      id: 'fill-nature',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'man|माणूस|_णूस|मा,ख,झी,च\nwoman|स्त्री|_त्री|स्,घी,गा,जि\nboy|मुलगा|_लगा|मु,घी,झी,च\ngirl|मुलगी|_लगी|मु,त्रु,झ,गा\nbaby|बाळ|_ळ|बा,ख,घी,गा\nhouse|घर|_र|घ,गा,जि,त्रु\nbed|पलंग|_लंग|प,घी,गा,ख\ncandle|मेणबत्ती|_णबत्ती|मे,च,जि,झी\nchair|खुर्ची|_र्ची|खु,च,जि,गा\nglasses|चष्मा|_ष्मा|च,घी,गा,जि',
        'clock|घड्याळ|_ड्याळ|घ,ख,गा,घी\nflower-pot|फुलदाणी|_लदाणी|फु,छा,जि,झी\numbrella|छत्री|_त्री|छ,छा,झी,का\ndoor|दार|_र|दा,गा,ख,छा\nbroom|झाडू|_डू|झा,गा,झी,जि\nwindow|खिडकी|_डकी|खि,का,झी,च\nbucket|बादली|_दली|बा,झ,का,झी',
        'toilet|शौचालय|_चालय|शौ,च,त्रु,ख\nsoap|साबण|_बण|सा,ख,जि,झ\npillow|उशी|_शी|उ,गा,छा,झी\nbasket|टोपली|_पली|टो,च,घी,झ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Dress',
      id: 'fill-dress',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'shoe|बूट|_ट|बू,छा,घी,जि\nsock|मोजे|_जे|मो,छा,झी,च\ngloves|हातमोजा|_तमोजा|हा,च,जि,ख\nhat|टोपी|_पी|टो,च,जि,छा\ntrousers|पायघोळ|_यघोळ|पा,घी,झी,च'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: School',
      id: 'fill-school',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'ruler|शासक|_सक|शा,गा,का,ख\neraser|खोडरबर|_डरबर|खो,च,त्रु,छा\nscissors|कात्री|_त्री|का,गा,ख,च\nbook|पुस्तक|_स्तक|पु,घी,जि,त्रु\nink|शाई|_ई|शा,गा,ख,का\nschoolbag|शाळेचे दप्तर|_ळेचे दप्तर|शा,छा,त्रु,झी'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Kitchen',
      id: 'fill-kitchen',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'fork|काटा|_टा|का,जि,त्रु,च\nknife|चाकू|_कू|चा,घी,का,त्रु\nspoon|चमचा|_मचा|च,गा,झी,त्रु\npot|भांडे|_डे|भां,गा,त्रु,घी\nbutter|लोणी|_णी|लो,छा,ख,गा\nlid|झाकण|_कण|झा,च,झी,जि\nsalad|कोशिंबीर|_शिंबीर|को,छा,झी,च\nsugar|साखर|_खर|सा,गा,जि,ख\nbowl|वाटी|_टी|वा,च,जि,झ\nmeat|मांस|_स|मां,झी,छा,च',
        'salt|मीठ|_ठ|मी,त्रु,झ,झी\nsweets|मिठाई|_ठाई|मि,ख,त्रु,गा\njuice|रस|_स|र,झी,का,ख\nflour|पीठ|_ठ|पी,झ,घी,छा\nlentils|मसूर|_सूर|म,गा,छा,का\nrice|तांदूळ|_दूळ|तां,का,गा,झ'
      ]
    },
    {
      type: 'match',
      label: 'Match: Nature',
      id: 'match-nature',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'मा,man\nस्,woman\nमु,boy\nमु,girl\nबा,baby',
        'घ,house\nप,bed\nमे,candle\nखु,chair\nच,glasses',
        'घ,clock\nफु,flower-pot\nछ,umbrella\nदा,door\nझा,broom',
        'खि,window\nबा,bucket\nशौ,toilet',
        'सा,soap\nउ,pillow\nटो,basket'
      ]
    },
    {
      type: 'match',
      label: 'Match: Dress',
      id: 'match-dress',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: ['बू,shoe\nमो,sock\nहा,gloves\nटो,hat\nपा,trousers']
    },
    {
      type: 'match',
      label: 'Match: School',
      id: 'match-school',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'शा,ruler\nखो,eraser\nका,scissors',
        'पु,book\nशा,ink\nशा,schoolbag'
      ]
    },
    {
      type: 'match',
      label: 'Match: Kitchen',
      id: 'match-kitchen',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'का,fork\nचा,knife\nच,spoon\nभां,pot\nलो,butter',
        'झा,lid\nको,salad\nसा,sugar\nवा,bowl\nमां,meat',
        'मी,salt\nमि,sweets\nर,juice',
        'पी,flour\nम,lentils\nतां,rice'
      ]
    }
  ]
};
