export default {
  label: '',
  id: 'mr-picture-basic',
  lang: 'mr',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-vowels',
      label: 'Drag & Drop: साधे शब्द - स्वर',
      commonData: { title: 'नावे ड्रॅग करा आणि योग्य चित्रांपाशी टाका.' },
      data: [
        'bear|अस्वल\ngooseberry|आवळा\napartment|इमारत\nlemon|ईडलिंबू\npillow|उशी\nsugarcane|ऊस',
        'rishi|ऋषी\none|एक\nanvil|ऐरण\nmouth|ओठ\nmedicine|औषध\nfig|अंजीर',
        'morning|प्रातः\nbat2|बॅट\noctopus|ऑक्टोपस'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-consonants',
      label: 'Drag & Drop: साधे शब्द - व्यंजन',
      commonData: { title: 'नावे ड्रॅग करा आणि योग्य चित्रांपाशी टाका.' },
      data: [
        'lotus|कमळ\nchalk|खडू\ncluster-beans|गवार\nhouse|घर\nliterature|वाङमय\nglasses|चष्मा',
        'umbrella|छत्री\nship|जहाज\ndress|झगा\ncymbals|झान्झ\nwatermelon|टरबूज\nstamp|ठसा',
        'damaru|डमरू\ncloud|ढग\narrow|बाण\ntabla|तबला\nflock-birds|थवा\nstone|दगड',
        'bow|धनुष्य\nnails|नखे\nkite|पतंग\nblackboard|फळा\nalmond|बदाम\npandit|भटजी',
        'crocodile|मगर\nliver|यकृत\nchariot|रथ\ngarlic|लसूण\nforest|वन\nostrich|शहामृग',
        'hexagon|षट्कोन\nshirt|सदरा\nchin|हनुवटी\nbaby|बाळ\nwarrior|क्षत्रिय\nsaint|ज्ञानेश्वर'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: साधे शब्द - स्वर',
      id: 'fill-vowels',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'गाळलेली अक्षरे शोधा आणि शब्द पूर्ण करा.'
      },
      data: [
        'bear|अस्वल|_स्वल|अ,झी,का,जि\ngooseberry|आवळा|_वळा|आ,का,ख,गा\napartment|इमारत|_मारत|इ,गा,त्रु,ख\nlemon|ईडलिंबू|_डलिंबू|ई,गा,ख,जि\npillow|उशी|_शी|उ,छा,गा,झी\nsugarcane|ऊस|_स|ऊ,च,का,त्रु\nrishi|ऋषी|_षी|ऋ,गा,का,च\none|एक|_क|ए,का,ख,जि\nanvil|ऐरण|_रण|ऐ,त्रु,गा,का\nmouth|ओठ|_ठ|ओ,छा,का,गा',
        'medicine|औषध|_षध|औ,गा,झ,त्रु\nfig|अंजीर|_जीर|अं,का,झी,ख\nmorning|प्रातः|_तः|प्रा,झी,छा,त्रु\nbat2|बॅट|_ट|बॅ,जि,झ,त्रु\noctopus|ऑक्टोपस|_क्टोपस|ऑ,छा,घी,च'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: साधे शब्द - व्यंजन',
      id: 'fill-consonants',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'गाळलेली अक्षरे शोधा आणि शब्द पूर्ण करा.'
      },
      data: [
        'lotus|कमळ|_मळ|क,गा,का,च\nchalk|खडू|_डू|ख,जि,छा,च\ncluster-beans|गवार|_वार|ग,झी,का,त्रु\nhouse|घर|_र|घ,च,का,झी\nliterature|वाङमय|_ङमय|वा,गा,झ,घी\nglasses|चष्मा|_ष्मा|च,त्रु,जि,छा\numbrella|छत्री|_त्री|छ,जि,च,झी\nship|जहाज|_हाज|ज,गा,घी,जि\ndress|झगा|_गा|झ,ख,का,गा\ncymbals|झान्झ|_न्झ|झा,ख,झी,च',
        'watermelon|टरबूज|_रबूज|ट,झी,का,घी\nstamp|ठसा|_सा|ठ,च,झी,छा\ndamaru|डमरू|_मरू|ड,झी,घी,का\ncloud|ढग|_ग|ढ,च,का,गा\narrow|बाण|_ण|बा,च,का,घी\ntabla|तबला|_बला|त,च,ख,छा\nflock-birds|थवा|_वा|थ,जि,झ,छा\nstone|दगड|_गड|द,घी,छा,झी\nbow|धनुष्य|_नुष्य|ध,गा,घी,च\nnails|नखे|_खे|न,च,घी,त्रु',
        'kite|पतंग|_तंग|प,झी,च,झ\nblackboard|फळा|_ळा|फ,झी,का,च\nalmond|बदाम|_दाम|ब,ख,गा,घी\npandit|भटजी|_टजी|भ,झी,का,ख\ncrocodile|मगर|_गर|म,गा,त्रु,छा\nliver|यकृत|_कृत|य,गा,च,का\nchariot|रथ|_थ|र,घी,जि,च\ngarlic|लसूण|_सूण|ल,झी,घी,गा\nforest|वन|_न|व,गा,जि,झ\nostrich|शहामृग|_हामृग|श,छा,त्रु,गा',
        'hexagon|षट्कोन|_ट्कोन|ष,घी,च,झी\nshirt|सदरा|_दरा|स,झ,च,घी\nchin|हनुवटी|_नुवटी|ह,झी,च,गा\nbaby|बाळ|_ळ|बा,गा,च,जि\nwarrior|क्षत्रिय|_त्रिय|क्ष,त्रु,झी,झ\nsaint|ज्ञानेश्वर|_नेश्वर|ज्ञा,घी,जि,गा'
      ]
    },
    {
      type: 'match',
      label: 'Match: साधे शब्द - स्वर',
      id: 'match-vowels',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र त्याच्या पहिल्या अक्षराशी जोडा.'
      },
      data: [
        'बॅ,bat2\nओ,mouth\nए,one\nउ,pillow\nआ,gooseberry',
        'प्रा,morning\nऑ,octopus\nऋ,rishi\nई,lemon\nअं,fig',
        'औ,medicine\nऐ,anvil\nऊ,sugarcane\nइ,apartment\nअ,bear'
      ]
    },
    {
      type: 'match',
      label: 'Match: साधे शब्द - व्यंजन',
      id: 'match-consonants',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र त्याच्या पहिल्या अक्षराशी जोडा.'
      },
      data: [
        'बा,arrow\nल,garlic\nन,nails\nट,watermelon\nग,cluster-beans',
        'बा,baby\nर,chariot\nध,bow\nझा,cymbals\nख,chalk',
        'ह,chin\nय,liver\nद,stone\nझ,dress\nक्ष,warrior',
        'स,shirt\nम,crocodile\nथ,flock-birds\nज्ञा,saint\nक,lotus',
        'ष,hexagon\nभ,pandit\nत,tabla\nज,ship',
        'श,ostrich\nब,almond\nढ,cloud\nछ,umbrella',
        'वा,literature\nफ,blackboard\nड,damaru\nच,glasses',
        'व,forest\nप,kite\nठ,stamp\nघ,house'
      ]
    }
  ]
};
