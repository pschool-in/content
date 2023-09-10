export default {
  label: '',
  id: 'mr-sound-basic',
  lang: 'mr',
  list: [
    {
      type: 'slides',
      label: 'साधे शब्द - स्वर',
      id: 'vowels',
      commonData: {
        title: 'आवाज ऐका आणि चित्र आणि नाव पहा.',
        audio: 'mr/mr-vowels.mp3'
      },
      data: [
        {
          text: 'bear|अस्वल\ngooseberry|आवळा\napartment|इमारत\nlemon|ईडलिंबू\npillow|उशी\nsugarcane|ऊस\nrishi|ऋषी\none|एक\nanvil|ऐरण\nmouth|ओठ',
          audioOffset: 0
        },
        {
          text: 'medicine|औषध\nfig|अंजीर\nmorning|प्रातः\nbat2|बॅट\noctopus|ऑक्टोपस',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'slides',
      label: 'साधे शब्द - व्यंजन',
      id: 'consonants',
      commonData: {
        title: 'आवाज ऐका आणि चित्र आणि नाव पहा.',
        audio: 'mr/mr-consonants.mp3'
      },
      data: [
        {
          text: 'lotus|कमळ\nchalk|खडू\ncluster-beans|गवार\nhouse|घर\nliterature|वाङमय\nglasses|चष्मा\numbrella|छत्री\nship|जहाज\ndress|झगा\ncymbals|झान्झ',
          audioOffset: 0
        },
        {
          text: 'watermelon|टरबूज\nstamp|ठसा\ndamaru|डमरू\ncloud|ढग\narrow|बाण\ntabla|तबला\nflock-birds|थवा\nstone|दगड\nbow|धनुष्य\nnails|नखे',
          audioOffset: 20
        },
        {
          text: 'kite|पतंग\nblackboard|फळा\nalmond|बदाम\npandit|भटजी\ncrocodile|मगर\nliver|यकृत\nchariot|रथ\ngarlic|लसूण\nforest|वन\nostrich|शहामृग',
          audioOffset: 40
        },
        {
          text: 'hexagon|षट्कोन\nshirt|सदरा\nchin|हनुवटी\nbaby|बाळ\nwarrior|क्षत्रिय\nsaint|ज्ञानेश्वर',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: साधे शब्द - स्वर',
      id: 'find-vowels',
      commonData: {
        type: 'image',
        title: 'आवाज ऐका आणि योग्य चित्रावर क्लिक करा.',
        audio: 'mr/mr-vowels.mp3'
      },
      data: [
        {
          words:
            'bear,gooseberry,apartment,lemon,pillow,sugarcane,rishi,one,anvil,mouth',
          audioOffset: 0
        },
        { words: 'medicine,fig,morning,bat2,octopus', audioOffset: 20 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: साधे शब्द - व्यंजन',
      id: 'find-consonants',
      commonData: {
        type: 'image',
        title: 'आवाज ऐका आणि योग्य चित्रावर क्लिक करा.',
        audio: 'mr/mr-consonants.mp3'
      },
      data: [
        {
          words:
            'lotus,chalk,cluster-beans,house,literature,glasses,umbrella,ship,dress,cymbals',
          audioOffset: 0
        },
        {
          words:
            'watermelon,stamp,damaru,cloud,arrow,tabla,flock-birds,stone,bow,nails',
          audioOffset: 20
        },
        {
          words:
            'kite,blackboard,almond,pandit,crocodile,liver,chariot,garlic,forest,ostrich',
          audioOffset: 40
        },
        { words: 'hexagon,shirt,chin,baby,warrior,saint', audioOffset: 60 }
      ]
    }
  ]
};
