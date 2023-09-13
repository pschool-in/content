export default {
  label: '',
  id: 'mr-pic-word-basic',
  lang: 'mr',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Word: साधे शब्द - स्वर',
      id: 'pick-vowels',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'आवाज ऐका आणि योग्य शब्द निवडा.',
        audio: 'mr/mr-vowels.mp3'
      },
      data: [
        {
          words: 'अस्वल,आवळा,इमारत,ईडलिंबू,उशी,ऊस,ऋषी,एक,ऐरण,ओठ',
          audioOffset: 0
        },
        { words: 'औषध,अंजीर,प्रातः,बॅट,ऑक्टोपस', audioOffset: 20 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Word: साधे शब्द - व्यंजन',
      id: 'pick-consonants',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'आवाज ऐका आणि योग्य शब्द निवडा.',
        audio: 'mr/mr-consonants.mp3'
      },
      data: [
        {
          words: 'कमळ,खडू,गवार,घर,वाङमय,चष्मा,छत्री,जहाज,झगा,झान्झ',
          audioOffset: 0
        },
        {
          words: 'टरबूज,ठसा,डमरू,ढग,बाण,तबला,थवा,दगड,धनुष्य,नखे',
          audioOffset: 20
        },
        {
          words: 'पतंग,फळा,बदाम,भटजी,मगर,यकृत,रथ,लसूण,वन,शहामृग',
          audioOffset: 40
        },
        { words: 'षट्कोन,सदरा,हनुवटी,बाळ,क्षत्रिय,ज्ञानेश्वर', audioOffset: 60 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: साधे शब्द - स्वर',
      id: 'write-vowels',
      commonDate: {},
      commonData: {
        title: 'आवाज ऐका आणि शब्द लिहा.',
        lang: 'mr',
        audio: 'mr/mr-vowels.mp3'
      },
      data: [
        {
          words: 'अस्वल,आवळा,इमारत,ईडलिंबू,उशी,ऊस,ऋषी,एक,ऐरण,ओठ',
          audioOffset: 0
        },
        { words: 'औषध,अंजीर,प्रातः,बॅट,ऑक्टोपस', audioOffset: 20 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: साधे शब्द - व्यंजन',
      id: 'write-consonants',
      commonDate: {},
      commonData: {
        title: 'आवाज ऐका आणि शब्द लिहा.',
        lang: 'mr',
        audio: 'mr/mr-consonants.mp3'
      },
      data: [
        {
          words: 'कमळ,खडू,गवार,घर,वाङमय,चष्मा,छत्री,जहाज,झगा,झान्झ',
          audioOffset: 0
        },
        {
          words: 'टरबूज,ठसा,डमरू,ढग,बाण,तबला,थवा,दगड,धनुष्य,नखे',
          audioOffset: 20
        },
        {
          words: 'पतंग,फळा,बदाम,भटजी,मगर,यकृत,रथ,लसूण,वन,शहामृग',
          audioOffset: 40
        },
        { words: 'षट्कोन,सदरा,हनुवटी,बाळ,क्षत्रिय,ज्ञानेश्वर', audioOffset: 60 }
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: साधे शब्द - स्वर',
      id: 'fill-vowels',
      commonData: {
        images: 'stockImgs',
        title: 'चित्र ओळखा आणि त्यासाठी योग्य शब्द लिहा.',
        lang: 'mr'
      },
      data: [
        'bear|अस्वल\ngooseberry|आवळा\napartment|इमारत\nlemon|ईडलिंबू\npillow|उशी\nsugarcane|ऊस\nrishi|ऋषी\none|एक\nanvil|ऐरण\nmouth|ओठ',
        'medicine|औषध\nfig|अंजीर\nmorning|प्रातः\nbat2|बॅट\noctopus|ऑक्टोपस'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: साधे शब्द - व्यंजन',
      id: 'fill-consonants',
      commonData: {
        images: 'stockImgs',
        title: 'चित्र ओळखा आणि त्यासाठी योग्य शब्द लिहा.',
        lang: 'mr'
      },
      data: [
        'lotus|कमळ\nchalk|खडू\ncluster-beans|गवार\nhouse|घर\nliterature|वाङमय\nglasses|चष्मा\numbrella|छत्री\nship|जहाज\ndress|झगा\ncymbals|झान्झ',
        'watermelon|टरबूज\nstamp|ठसा\ndamaru|डमरू\ncloud|ढग\narrow|बाण\ntabla|तबला\nflock-birds|थवा\nstone|दगड\nbow|धनुष्य\nnails|नखे',
        'kite|पतंग\nblackboard|फळा\nalmond|बदाम\npandit|भटजी\ncrocodile|मगर\nliver|यकृत\nchariot|रथ\ngarlic|लसूण\nforest|वन\nostrich|शहामृग',
        'hexagon|षट्कोन\nshirt|सदरा\nchin|हनुवटी\nbaby|बाळ\nwarrior|क्षत्रिय\nsaint|ज्ञानेश्वर'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: साधे शब्द - स्वर',
      id: 'connect-vowels',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'अक्षरे जोडून शब्द तयार करा.',
        lang: 'mr'
      },
      data: [
        'bear,अस्वल\ngooseberry,आवळा\napartment,इमारत\nlemon,ईडलिंबू\npillow,उशी\nsugarcane,ऊस\nrishi,ऋषी\none,एक\nanvil,ऐरण\nmouth,ओठ',
        'medicine,औषध\nfig,अंजीर\nmorning,प्रातः\nbat2,बॅट\noctopus,ऑक्टोपस'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: साधे शब्द - व्यंजन',
      id: 'connect-consonants',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'अक्षरे जोडून शब्द तयार करा.',
        lang: 'mr'
      },
      data: [
        'lotus,कमळ\nchalk,खडू\ncluster-beans,गवार\nhouse,घर\nliterature,वाङमय\nglasses,चष्मा\numbrella,छत्री\nship,जहाज\ndress,झगा\ncymbals,झान्झ',
        'watermelon,टरबूज\nstamp,ठसा\ndamaru,डमरू\ncloud,ढग\narrow,बाण\ntabla,तबला\nflock-birds,थवा\nstone,दगड\nbow,धनुष्य\nnails,नखे',
        'kite,पतंग\nblackboard,फळा\nalmond,बदाम\npandit,भटजी\ncrocodile,मगर\nliver,यकृत\nchariot,रथ\ngarlic,लसूण\nforest,वन\nostrich,शहामृग',
        'hexagon,षट्कोन\nshirt,सदरा\nchin,हनुवटी\nbaby,बाळ\nwarrior,क्षत्रिय\nsaint,ज्ञानेश्वर'
      ]
    }
  ]
};