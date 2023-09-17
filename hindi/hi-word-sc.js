export default {
  label: 'शब्द',
  id: 'hi-word-sc',
  img: 'word',
  lockAfter: 2,
  lang: 'hi',
  list: [
    {
      label: 'सही शब्द चुनें',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'सार्थक मिश्रित शब्द बनाने के लिए सही शब्द को खींचें और छोड़ें',
        printTitle: 'Underline the right option.',
        leftWidth: 150,
        rightWidth: 150
      },
      data: [
        `सूरज़, घड़ी, पत्ती  
चाय, पत्ती, दार 
खुशबू, दार, ज़ामीन 
गुलाब, ज़ामीन, गंगा 
पेड़, गंगा, मंच
रंग, मंच, बाड़ी`,

        `खेत, बाड़ी, सवारी  
ज़िन्दगी, सवारी, बच्चा 
बड़, बच्चा, नामा 
सफ़र, नामा, चस्प 
दिल, चस्प, महल
राज, महल, कीरी`,

        `रात, कीरी, धुंध 
अँधा, धुंध, तट 
समुंदर, तट, गड़ी 
बच्चा, गड़ी, दुकान 
बड़ा, बर्ग, चुम्बी 
आसमान, चुम्बी, बिरंगा`,

        `रंग, बिरंगा, दार 
रिश्ते, दार, चस्पी 
दिल, चस्पी, पद  
महाजन, पद, ख़ल  
खुदाई, ख़ल, पुरी
पानी, पुरी, माता`,

        `धरती, माता, घर 
चिड़या, घर, गप्पा 
गोल, गप्पा, सीपना 
साह, सीपना, घर 
चिड़ीया, घर, संख्या 
जन, संख्या, शय`,

        `महा, शय, मजदूर 
खेत, मजदूर, बदली  
जगह, बदली, पुष्प  
गुलाब, पुष्प, कार 
खेत, कार, मित 
निय, मित, घड़ी`
      ]
    },
    {
      label: 'सही उत्तर का चयन करें।',
      locked: 'true',
      id: 'hi-antonyms',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से रेखांकित शब्द का विलोम शब्द चुनिए।',
        questions: [
          {
            qText: 'मेरे पिताजी ने मुझे *क्षमा* किया। ',
            options: 'दंड, अशुभ, सफ़ेद'
          },
          {
            qText: 'गाँधीजी *सच* बोलते थे।  ',
            options: ' झूठ, आज़ाद, प्रदान'
          },
          {
            qText: 'मैं भारत *देश* में रहती हूँ। ',
            options: 'विदेश, कठिन, अगला '
          },
          {
            qText: 'मेरा *मित्र* राजू है।',
            options: 'शत्रु, सज्जन, कठोर'
          },
          {
            qText: 'हम सब *एकता* से रहते हैं।',
            options: 'अनेकता, कैद, शगुन'
          },
          {
            qText: 'मैं *सुबह* मंदिर गई। ',
            options: 'शाम, रात, दिन'
          },
          {
            qText: 'यह सवाल *सरल* है। ',
            options: ' कठिन, मृत्यु, जाना '
          },
          {
            qText: 'पानी बहुत *गरम* है। ',
            options: 'ठंडा, कड़वा, मीठा'
          },
          {
            qText: 'पूजा खेल में *जीत* गई। ',
            options: 'हार, दानव, आना'
          },
          {
            qText: 'राम एक *बच्चा* है।',
            options: 'बूढ़ा, जानवर, ज्ञान'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'शब्दार्थ',
      id: 'meanings',
      lockAfter: 2,
      commonData: {
        title: 'शब्द को उसके अर्थ के साथ मिलाइए'
      },
      data: [
        `खिलाफ, विरोध 
ताकत, शक्ति 
अक्लमंद, होशियार 
गड़बड़, गलत 
रद्दी, बेकार सामान`,

        `शरारत, शैतानी 
तसवीर, चित्र 
सदैव, हमेशा 
वक्त, समय 
आश्चर्य, हैरानी`,

        `निश्चित, पक्का 
रोचक, मज़ेदार 
विचित्र, अजीब 
गपशप, बातचीत 
मामूली, साधारण `
      ]
    },
    {
      label: 'अनेक शब्दों के लिए एक शब्द',
      type: 'matchByDragDrop',
      id: 'one-word-sub',
      commonData: {
        title: 'सही उत्तर का चयन करें।',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `बोलने वाला व्यक्ति - *वक्ता*
  नीचे लिखे हुए - *निम्नलिखित*
  किसी से भी न डरने वाला - *निडर*
  जिसके मन मे दया हो - *दयालु*`,

        `जिसके अंदर साहस हो - *साहसी*
  जिसमें ईमानदारी हो - *ईमानदार*
  साथ पढ़ने वाला - *सहपाठी*
  देश–देशान्तर भ्रमण करने वाला यात्री - *पर्यटक*
  दूसरे देश से संबंध रखने वाला - *विदेशी*`
      ]
    },
    {
      type: 'rightOne',
      id: 'onewordmanymeanings-2',
      label: 'असंगत का चयन करें',
      commonData: {
        title: 'असंगत का चयन करें',
        fontSize: '1.3rem',
        noCaps: true
      },
      data: [
        `सेवा, फल, परिणाम,आम 
  ऊपर, तीर, किनारा, बाण
  दिशा, जग, संसार, बर्तन 
  आसमान, पर, पंख, ऊपर 
  नदी,पात्र, बरतन, व्यक्ति`,

        `जगह, पूर्व, पहले, एक दिशा 
  रंग, दल, पत्ता, समूह 
  पीछे, दक्षिण, दाहिना, एक दिशा
  उपाय,मत, वोट, नहीं 
  पक्षी, मगर, परंतु, मगरमच्छ 
  पर, वर्ण, अक्षर, जाति`
      ]
    },
    {
      id: 'jumbled-0',
      label: 'शब्द गठन',
      type: 'sequence',
      commonData: {
        title: 'अर्थपूर्ण शब्द बनाने के लिए अक्षरों को जोड़ें',
        lang: 'hi'
      },
      data: [
        `सफेद, महीना, ऊपर, ऐनक, लड़की, गुलाब, अनार, इमली, आदर`,
        `अगर, मगर, बतख, औरत, अक्षर, वानर, फसल, महल, टहल, खबर`,
        `नगर, कलश, पलक, भगत, तखत, शहद, पवन, भजन, जलन, नमन`,
        `दमन, चमक, लपक, पटक, भवन, हवन, कनक, चमन, नयन`,
        `जामुन, केला, अनार, संतरा, अंगूर, तरबूज, खरबूजा, पपीता, सीताफल, अंजीर`,
        `अकबर, अजगर, अदरक, अफसर, कटहल, गरदन, दमकल, धड़कन, बचपन, बरगद`,
        `गाय, घोड़ा, जिराफ, तेंदुआ, लोमड़ी, खरगोश, बकरी, नेवला, मकड़ी, बतख`,
        `बरतन, मखमल, लक्ष्मण, शबनम, शरबत, शलजम, सरगम, सहमत, हरपल, अचरज`,
        `पीपल, तुलसी, बरगद, खजूर, बबूल, सागौन, शीशम, देवदार, गुलाब, आंवला`
      ]
    }
  ]
};
