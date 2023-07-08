export default {
  label: 'Fruits and Vegetables',
  id: 'mr-picture-2',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-fruits',
      label: 'Drag & Drop: Fruits',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'apple|सफरचंद\ngrapes|द्राक्षे\nbanana|केळी\nguava|पेरू\njackfruit|फणस\nmango|आंबा',
        'orange|संत्रा\npapaya|पपई\npineapple|अननस\nwatermelon|टरबूज\npomegranate|डाळिंब\nfig|अंजीर',
        'custard-apple|सीताफळ\nplum|मनुका\ndates|तारखा\nmuskmelon|कस्तुरी'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-vegetables',
      label: 'Drag & Drop: undefined',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'carrot|गाजर\nonion|कांदा\ntomato|टोमॅटो\npotato|बटाटा\ncabbage|कोबी\ncucumber|काकडी',
        'garlic|लसूण\nginger|आले\ncauliflower|फुलकोबी\npumpkin|भोपळा\nalmond|बदाम\nbitter-gourd|कारले',
        'brinjal|वांगे\ncapsicum|शिमला मिर्ची\ncashewnut|काजू\nchilli|मिरची\ncoconut|नारळ\ncorianderleaf|कोथिंबीर पान',
        'curryleaf|कढीपत्ता\ndrumstick|शेवगा\ngreenpeas|मटार\nladies-finger|भेंडी\nmintleaf|पुदीना\npeanut|शेंगदाणा',
        'radish|मुळा\nspinach|पालक\nvegetables|भाज्या'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Fruits',
      id: 'fill-fruits',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'apple|सफरचंद|_फरचंद|स,गा,का,झ\ngrapes|द्राक्षे|_राक्षे|द्,झी,त्रु,का\nbanana|केळी|_ळी|के,छा,का,घी\nguava|पेरू|_रू|पे,घी,गा,त्रु\njackfruit|फणस|_णस|फ,घी,झी,च\nmango|आंबा|_बा|आं,झी,छा,गा\norange|संत्रा|_त्रा|सं,जि,च,त्रु\npapaya|पपई|_पई|प,ख,त्रु,च\npineapple|अननस|_ननस|अ,जि,गा,घी\nwatermelon|टरबूज|_रबूज|ट,छा,गा,झी',
        'pomegranate|डाळिंब|_ळिंब|डा,घी,त्रु,च\nfig|अंजीर|_जीर|अं,झ,का,झी\ncustard-apple|सीताफळ|_ताफळ|सी,घी,गा,च\nplum|मनुका|_नुका|म,छा,झी,झ\ndates|तारखा|_रखा|ता,गा,झी,का\nmuskmelon|कस्तुरी|_स्तुरी|क,च,का,झ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: undefined',
      id: 'fill-vegetables',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'carrot|गाजर|_जर|गा,ख,च,का\nonion|कांदा|_दा|कां,च,त्रु,झी\ntomato|टोमॅटो|_मॅटो|टो,ख,जि,च\npotato|बटाटा|_टाटा|ब,त्रु,घी,गा\ncabbage|कोबी|_बी|को,झ,घी,त्रु\ncucumber|काकडी|_कडी|का,गा,जि,ख\ngarlic|लसूण|_सूण|ल,च,ख,का\nginger|आले|_ले|आ,झी,का,झ\ncauliflower|फुलकोबी|_लकोबी|फु,झी,का,त्रु\npumpkin|भोपळा|_पळा|भो,झी,घी,गा',
        'almond|बदाम|_दाम|ब,झी,गा,छा\nbitter-gourd|कारले|_रले|का,झी,ख,गा\nbrinjal|वांगे|_गे|वां,छा,झी,का\ncapsicum|शिमला मिर्ची|_मला मिर्ची|शि,झी,गा,च\ncashewnut|काजू|_जू|का,ख,झी,जि\nchilli|मिरची|_रची|मि,ख,जि,का\ncoconut|नारळ|_रळ|ना,गा,का,झ\ncorianderleaf|कोथिंबीर पान|_थिंबीर पान|को,च,झी,गा\ncurryleaf|कढीपत्ता|_ढीपत्ता|क,जि,झी,का\ndrumstick|शेवगा|_वगा|शे,गा,जि,घी',
        'greenpeas|मटार|_टार|म,च,गा,झ\nladies-finger|भेंडी|_डी|भें,झ,गा,झी\nmintleaf|पुदीना|_दीना|पु,घी,झी,त्रु\npeanut|शेंगदाणा|_गदाणा|शें,जि,च,झ\nradish|मुळा|_ळा|मु,झी,च,त्रु\nspinach|पालक|_लक|पा,ख,गा,जि\nvegetables|भाज्या|_ज्या|भा,ख,झ,झी'
      ]
    },
    {
      type: 'match',
      label: 'Match: Fruits',
      id: 'match-fruits',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'स,apple\nद्,grapes\nके,banana\nपे,guava\nफ,jackfruit',
        'आं,mango\nसं,orange\nप,papaya\nअ,pineapple\nट,watermelon',
        'डा,pomegranate\nअं,fig\nसी,custard-apple',
        'म,plum\nता,dates\nक,muskmelon'
      ]
    },
    {
      type: 'match',
      label: 'Match: undefined',
      id: 'match-vegetables',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'गा,carrot\nकां,onion\nटो,tomato\nब,potato\nको,cabbage',
        'का,cucumber\nल,garlic\nआ,ginger\nफु,cauliflower\nभो,pumpkin',
        'ब,almond\nका,bitter-gourd\nवां,brinjal\nशि,capsicum\nका,cashewnut',
        'मि,chilli\nना,coconut\nको,corianderleaf\nक,curryleaf\nशे,drumstick',
        'म,greenpeas\nभें,ladies-finger\nपु,mintleaf\nशें,peanut',
        'मु,radish\nपा,spinach\nभा,vegetables'
      ]
    }
  ]
};
