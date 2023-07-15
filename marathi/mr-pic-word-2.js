export default {
  label: 'Fruits and Vegetables',
  id: 'mr-pic-word-2',
  list: [
    {
      type: 'connectLetters',
      label: 'Connect: Fruits',
      id: 'connect-fruits',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        lang: 'mr',
        fontSize: '1rem'
      },
      data: [
        'apple,सफरचंद\ngrapes,द्राक्षे\nbanana,केळी\nguava,पेरू\njackfruit,फणस\nmango,आंबा\norange,संत्रा\npapaya,पपई\npineapple,अननस\nwatermelon,टरबूज',
        'pomegranate,डाळिंब\nfig,अंजीर\ncustard-apple,सीताफळ\nplum,मनुका\ndates,तारखा\nmuskmelon,कस्तुरी'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: undefined',
      id: 'connect-vegetables',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        lang: 'mr',
        fontSize: '1rem'
      },
      data: [
        'carrot,गाजर\nonion,कांदा\ntomato,टोमॅटो\npotato,बटाटा\ncabbage,कोबी\ncucumber,काकडी\ngarlic,लसूण\nginger,आले\ncauliflower,फुलकोबी\npumpkin,भोपळा',
        'almond,बदाम\nbitter-gourd,कारले\nbrinjal,वांगे\ncapsicum,शिमला मिर्ची\ncashewnut,काजू\nchilli,मिरची\ncoconut,नारळ\ncorianderleaf,कोथिंबीर पान\ncurryleaf,कढीपत्ता\ndrumstick,शेवगा',
        'greenpeas,मटार\nladies-finger,भेंडी\nmintleaf,पुदीना\npeanut,शेंगदाणा\nradish,मुळा\nspinach,पालक\nvegetables,भाज्या'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Fruits',
      id: 'fill-fruits',
      commonData: { images: 'stockImgs', lang: 'hi', title: 'Write the word' },
      data: [
        'apple|सफरचंद\ngrapes|द्राक्षे\nbanana|केळी\nguava|पेरू\njackfruit|फणस\nmango|आंबा\norange|संत्रा\npapaya|पपई\npineapple|अननस\nwatermelon|टरबूज',
        'pomegranate|डाळिंब\nfig|अंजीर\ncustard-apple|सीताफळ\nplum|मनुका\ndates|तारखा\nmuskmelon|कस्तुरी'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: undefined',
      id: 'fill-vegetables',
      commonData: { images: 'stockImgs', lang: 'hi', title: 'Write the word' },
      data: [
        'carrot|गाजर\nonion|कांदा\ntomato|टोमॅटो\npotato|बटाटा\ncabbage|कोबी\ncucumber|काकडी\ngarlic|लसूण\nginger|आले\ncauliflower|फुलकोबी\npumpkin|भोपळा',
        'almond|बदाम\nbitter-gourd|कारले\nbrinjal|वांगे\ncapsicum|शिमला मिर्ची\ncashewnut|काजू\nchilli|मिरची\ncoconut|नारळ\ncorianderleaf|कोथिंबीर पान\ncurryleaf|कढीपत्ता\ndrumstick|शेवगा',
        'greenpeas|मटार\nladies-finger|भेंडी\nmintleaf|पुदीना\npeanut|शेंगदाणा\nradish|मुळा\nspinach|पालक\nvegetables|भाज्या'
      ]
    }
  ]
};