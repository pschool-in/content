export default {
  label: '',
  id: 'hi-picture-basic',
  lang: 'hi',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-vowels',
      label: 'Drag & Drop: सरल शब्द - स्वर',
      commonData: {
        title: 'नामों को ड्रैग करें और उन्हें उपयुक्त चित्रों पर छोड़ें।'
      },
      data: [
        'pomegranate|अनार\nmango|आम\ntamarind|इमली\nsugarcane|ईख\nowl|उल्लू\nyarn-ball|ऊन',
        'rishi|ऋषि\nankle|एड़ी\nglasses|ऐनक\nstone-grinder|ओखली\nwoman|औरत\ngrapes|अंगूर'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-consonants',
      label: 'Drag & Drop: सरल शब्द - व्यंजन',
      commonData: {
        title: 'नामों को ड्रैग करें और उन्हें उपयुक्त चित्रों पर छोड़ें।'
      },
      data: [
        'lotus|कमल\nrabbit|खरगोश\nflower-pot|गमला\nwatch|घड़ी\nboy|लड़का\nwheel|चक्का',
        'umbrela|छतरी\nship|जहाज\nflag|झंडा\ntomato|टमाटर\ntrolley|ठेला\ndamaru|डमरू',
        'nurse|दाई\narrow|बाण\nlock|ताला\nflask|थरमस\nmedicine|दवा\nbow|धनुष',
        'tap|नल\nkite|पतंग\nfruits|फल\nduck|बतख\nbear|भालू\nfish|मछली',
        'yagna|यज्ञ\nchariot|रथ\ntop|लट्टू\nforest|वन\nturnip|शलगम\nhexagon|षटकोण',
        'apple|सेब\nplough|हल\nknight|क्षत्रिय\ntrident|त्रिशूल\nscholar|ज्ञानी'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: सरल शब्द - स्वर',
      id: 'fill-vowels',
      commonData: {
        images: 'stockImgs',
        lang: 'hi',
        title: 'खोया हुआ अक्षर ढूँढ़ें और शब्द पूरा करें।'
      },
      data: [
        'pomegranate|अनार|_नार|अ,त्रु,च,गा\nmango|आम|_म|आ,का,झी,झ\ntamarind|इमली|_मली|इ,ख,जि,झी\nsugarcane|ईख|_ख|ई,ख,छा,घी\nowl|उल्लू|_ल्लू|उ,ख,का,त्रु\nyarn-ball|ऊन|_न|ऊ,छा,च,घी\nrishi|ऋषि|_षि|ऋ,झी,का,जि\nankle|एड़ी|_ड़ी|ए,त्रु,छा,ख',
        'glasses|ऐनक|_नक|ऐ,घी,झी,च\nstone-grinder|ओखली|_खली|ओ,त्रु,जि,ख\nwoman|औरत|_रत|औ,जि,छा,च\ngrapes|अंगूर|_गूर|अं,झी,का,जि'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: सरल शब्द - व्यंजन',
      id: 'fill-consonants',
      commonData: {
        images: 'stockImgs',
        lang: 'hi',
        title: 'खोया हुआ अक्षर ढूँढ़ें और शब्द पूरा करें।'
      },
      data: [
        'lotus|कमल|_मल|क,का,झी,घी\nrabbit|खरगोश|_रगोश|ख,झी,का,छा\nflower-pot|गमला|_मला|ग,जि,त्रु,झी\nwatch|घड़ी|_ड़ी|घ,घी,जि,झ\nboy|लड़का|_ड़का|ल,च,का,ख\nwheel|चक्का|_क्का|च,ख,गा,झ\numbrela|छतरी|_तरी|छ,ख,जि,झी\nship|जहाज|_हाज|ज,गा,त्रु,ख\nflag|झंडा|_डा|झं,झी,छा,घी\ntomato|टमाटर|_माटर|ट,त्रु,गा,घी',
        'trolley|ठेला|_ला|ठे,झी,का,छा\ndamaru|डमरू|_मरू|ड,ख,गा,त्रु\nnurse|दाई|_ई|दा,गा,घी,ख\narrow|बाण|_ण|बा,ख,का,च\nlock|ताला|_ला|ता,गा,त्रु,ख\nflask|थरमस|_रमस|थ,जि,झ,घी\nmedicine|दवा|_वा|द,गा,झी,जि\nbow|धनुष|_नुष|ध,घी,जि,त्रु\ntap|नल|_ल|न,का,जि,झ\nkite|पतंग|_तंग|प,गा,छा,झ',
        'fruits|फल|_ल|फ,झी,का,झ\nduck|बतख|_तख|ब,घी,झी,का\nbear|भालू|_लू|भा,गा,झी,ख\nfish|मछली|_छली|म,झी,छा,घी\nyagna|यज्ञ|_ज्ञ|य,जि,गा,त्रु\nchariot|रथ|_थ|र,झ,जि,झी\ntop|लट्टू|_ट्टू|ल,झ,जि,ख\nforest|वन|_न|व,जि,गा,झ\nturnip|शलगम|_लगम|श,जि,छा,झी\nhexagon|षटकोण|_टकोण|ष,जि,झी,त्रु',
        'apple|सेब|_ब|से,छा,झी,का\nplough|हल|_ल|ह,झी,का,घी\nknight|क्षत्रिय|_त्रिय|क्ष,जि,घी,झ\ntrident|त्रिशूल|_शूल|त्रि,घी,का,गा\nscholar|ज्ञानी|_नी|ज्ञा,झी,च,छा'
      ]
    },
    {
      type: 'match',
      label: 'Match: सरल शब्द - स्वर',
      id: 'match-vowels',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र को उसके पहले अक्षर से जोड़ें।'
      },
      data: [
        'औ,woman\nए,ankle\nउ,owl\nआ,mango',
        'ओ,stone-grinder\nऋ,rishi\nई,sugarcane\nअं,grapes',
        'ऐ,glasses\nऊ,yarn-ball\nइ,tamarind\nअ,pomegranate'
      ]
    },
    {
      type: 'match',
      label: 'Match: सरल शब्द - व्यंजन',
      id: 'match-consonants',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'चित्र को उसके पहले अक्षर से जोड़ें।'
      },
      data: [
        'ल,boy\nर,chariot\nप,kite\nता,lock\nछ,umbrela',
        'ल,top\nय,yagna\nन,tap\nड,damaru\nच,wheel',
        'ह,plough\nम,fish\nध,bow\nठे,trolley\nघ,watch',
        'से,apple\nभा,bear\nदा,nurse\nट,tomato\nग,flower-pot',
        'ष,hexagon\nबा,arrow\nद,medicine\nझं,flag\nख,rabbit',
        'श,turnip\nब,duck\nथ,flask\nज्ञा,scholar\nक्ष,knight',
        'व,forest\nफ,fruits\nत्रि,trident\nज,ship\nक,lotus'
      ]
    }
  ]
};
