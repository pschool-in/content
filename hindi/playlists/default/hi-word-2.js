export default {
    label: 'शब्द',
    id: 'hi-word-2',
    img: 'word',
    list: [
      {
        id: 'jumbled-hi-1',
        label: 'शब्द गठन-दो अक्षर वाले शब्द',
           lockAfter:4,
        type: 'sequence',
        commonData: {
          title: 'अर्थपूर्ण शब्द बनाने के लिए अक्षरों को जोड़ें',
          lang: 'hi'
        },
        data: [
            `चित्र, ठीक, खोज, घड़ी, कला, ठंडा, ढोल, डाली, तार, थाली`,
            `ठेला, केला, ढेर, ताला, छत, दाम, जीभ, दिल, नोट, जग`, 
            `चना, दादी, बेटी, भाषा, भारी, पैसा, छेद, पानी, डर, तीन`, 
            `जब, कब, चल, नल, जल, कल, पल, छल`,
            `सच, ढक, खत, तब, यश, मर, तीर, डोसा`,
            `रण, थाना, हल, नाली, नस, पीठ, भेद, गम, जप, दम`,	
            `घर, मत, फल, सर्प, गोल, झंडा, धन, चाबी, भाव, ठेस`, 
            `तप, ढंग, सच, उठ, पूजा, बात, पूरी, नीम, दंगा, ढाबा`, 
            `बाल, छाता, घाव, चौकी, खाल, कब, दिन, नानी, तारा, डोरी`, 
            `गाल, गई, घना, लड़, घर, जीव, छवि, पंख, घोड़ा, फूल`   
        ]
      },
      {
        id: 'jumbled-hi-2',
        label: 'शब्द गठन-तीन अक्षर वाले शब्द',
           lockAfter:4,
        type: 'sequence',
        commonData: {
          title: 'अर्थपूर्ण शब्द बनाने के लिए अक्षरों को जोड़ें',
          lang: 'hi'
        },
        data: [
            `भगत, शहद, मगर, चरण, औरत, चरम, परम, नगर, उधर`,
            `कहर, कसम, महल, कमर, भरण, सड़क, नरम, समय, जलद, बतख `,
            `हवन, लहर, गगन, वचन, अगर, कलश, मटर, भजन, गरम `,
            `चमक, डगर, पहल, फसल, पहर, खबर, शहद, शहर, पकड़`,	  
            `कमर, सफर, मटक, वजन, भजन, सफल`,
            `परख, बतख, मटर, बहन, चहक, मखन, महक, बटन, ठहर`,  
            `नमक, नमन, अरब, बहस, सहन, सरल, पलक`,	 
            `कलश, तखत, गरम, नरम, भजन, बरस, गरज, चमक, पहर`, 
            `गलत, झलक, छलक, झपक, जतन, जहर, इधर`, 
            `कदर, जलज, समर, पवन, चरण, पलट, उलट `, 
            `भरत, गगन, चरम, ललक, समय, सरस, महल, पहल, परख `,
            `मटर, समझ, ननद, कमल, लखन, असल, नकल, अमर`, 
            `वचन, मगन, असर, अलग, नजर, कसर, भगत `, 
            `जनक, कसम, कथन, चरण, अभय, शरण, नरक, अक्षर`,
            `अजय, अजब, गजब, अमल, चलन, जगत, जगह, टपक`, 
            `जतन, करम, रहम, सबक, शपत, नयन, बतख`   
        ]
      },
        {
    type: 'match',
    label: 'गिनती',
    id: 'numerals',
    lockAfter:2,
    commonData: {
      title: 'निम्नलिखित को मिलाएं'
    },
    data: [
      `0, शून्य 
      ४, चार 
      ७, सात 
      १०, दस 
      २, दस `,

      `६, छह 
      ९, नौ 
      ३, तीन 
      ५, पाँच 
      १, एक `,

      `१२,  बारह 
      १६, सोलह 
      २०, बीस 
      ११, ग्यारह 
      १५, पंद्रह `,

      `१८, अठारह    
      १३, तेरह 
      १९, उन्नीस 
      १४, चौदह 
      १७, सत्रह `,

      `५०, पचास 
      ८०, अस्सी 
      १००, सौ 
      १००००, दस हज़ार 
      ६०, साठ 
      ३०, तीस 
      १०००००, एक लाख 
      ९०, नब्बे `
    ]
  },
  {
    type: 'match',
    label: 'रंग',
    id: 'colours',
    lockAfter:2,
    commonData: {
      title: 'निम्नलिखित को मिलाएं'
    },
    data: [
      `White, सफेद
      Black, काला
      Blue, नीला
      Yellow, पीला
      Red, लाल`,

      `Green, हरा
      Pink, गुलाबी
      Brown, भूरा
      Purple, बैंगनी
      Orange, नारंगी
      Golden, सुनहरा`

    ]
  },
    {
      id: 'match-days',
      label: 'दिन',
      type: 'match',
      data: {
        text: `Monday, सोमवार 
Tuesday, मंगलवार 
Wednesday, बुधवार 
Thursday, गुरूवार 
Friday, शुक्रवार 
Saturday, शनिवार 
Sunday, रविवार`,
        title: 'निम्नलिखित को मिलाएं'
      }
    },    
      {
        type: 'match',
        label: 'विलोम शब्द',
        id: 'antonyms',
        lockAfter:2,
        commonData: {
          title: 'विलोम शब्द का मिलान करें'
        },
        data: [
          `पाप, पुण्य 
          राजा, रंक 
          लायक, नालायक 
          फायदा, नुकसान 
          पास, दूर 
          पूरा, आधा`,
  
          `सुबह, शाम 
          हँसना, रोना 
          शुभ, अशुभ 
          सस्ता, महंगा 
          माता, पिता 
          आशा, निराशा `,
  
          `अमृत, विष 
          आगे, पीछे 
          ऊपर, नीचे 
          दिन, रात 
          मीठा, कड़वा 
          लाभ, हानि `
        ]
      },
      {
        type: 'match',
        label: 'समानार्थी शब्द',
        id: 'synonyms',
        lockAfter:2,
        commonData: {
          title: 'समानार्थी शब्द का मिलान करें'
        },
        data: [
          `महिला, औरत 
          बगीचा, वाटिका
          संध्या, शाम
          सूर्य, सूरज
          भूमि, धरती`,
  
          `पहाड़, पर्वत
          वायु, हवा
          दोस्त, मित्र
          दिन, दिवस
          पुष्प, फूल`,
  
          `संसार, विश्व
          शिक्षक, अध्यापक
          पक्षी, चिड़िया 
          बादल, मेघ
          बारिश, वर्षा`
        ]
      },
      {
        label: 'अनेक शब्दों के लिए एक शब्द',
           lockAfter:4,
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
          `मास में एक बार आने वाला - *मासिक*
          सप्ताह में एक बार होने वाला - *साप्ताहिक*
          वर्ष में एक बार होने वाला - *वार्षिक*
          फल-फूल खाने वाला - *शाकाहारी* 
          जो चित्र बनाता हो - *चित्रकार*`,
  
          `विद्या की चाह रखने वाला - *विद्यार्थी*
          जो दिखाई न दे - *अदृश्य*
          मांस खाने वाला - *मांसाहारी* 
          प्रतिदिन होने वाला - *दैनिक*
          देखने योग्य - *दर्शनीय*
          गाँव में रहने वाला - *ग्रामीण*`,
  
          `शहर में रहने वाला - *शहरी* 
          जो विज्ञान जानता है - *वैज्ञानिक*
          जहाँ इलाज किया जाता हो - *अस्पताल*
          जहाँ पुस्तके पढ़ने के लिए रखी जाती हो - *पुस्तकालय*
          जो जूते ठीक करता है - *मोची* 
          जो रोग से ग्रस्त है - *रोगी*`,
  
          `जो मिठाई बनाता है - *हलवाई*
          लेख लिखने वाला - *लेखक*
          जो दूसरों के साथ भलाई करे - *परोपकारी*
          भारत में रहने वाला - *भारतीय*
          आलस करने वाला - *आलसी*
          सोने-चांदी की चीज़ें बनाने वाला - *सुनार*`,
  
          `बहुत मेहनत करने वाला - *परिश्रमी*
          जिसके माता–पिता न होँ - *अनाथ*
          जो पढ़ा -लिखा न हो - *अनपढ़*
          जो अक्षर (पढ़ना- लिखना) जानता है - *साक्षर/शिक्षित*
          देखने (दर्शन) वाले लोग - *दर्शक*`,
  
          `पढ़ने वाला व्यक्ति - *पाठक*
          सुनने वाला व्यक्ति - *श्रोता*
          तीन पहिए वाला वाहन - *तिपहिया*
          दो पहिए वाला वाहन - *दुपहिया*`
        ]
      },
      {
    label: 'पहेलियाँ',
       lockAfter:3,
    type: 'matchByDragDrop',
    id: 'riddles',
    commonData: {
      title: 'सही उत्तर का चयन करें।',
      styles: {
        fontSize: '1.2rem',
        dashWidth: 80
      }
    },
    data: [
      `बिन खाए , बिन पिए , सबके घर में रहता हूं | ना खाता हूं , ना रोता हूं , घर की रखवाली करता हूं | *ताला* 
      सिर पर कलगी , पर मुर्गा नहीं हूँ | करता हूँ नाच , पर कलाकार नहीं हूँ , तो बताओ आखिर क्या हूँ ? *मोर*     
      पैर नहीं है , पर चलती रहती हूं | दोनों हाथों से अपना मुँह पोछती रहती हूँ | *घड़ी*      
      बिना पैर के करती यात्रा , मेरे बिना तुम मर जाओगे , दो अक्षर का मेरा नाम , क्या तुम मेरे बिना रह पाओगे| *हवा*`, 
      
      `कान है पर बहरी हूँ , मुँह है पर मौन हूँ, आँखें हैं पर अंधी हूँ, तब आखिर बताओ मैं कौन हूँ ? *गुड़िया*  
      मेरा भाई बड़ा शैतान, बैठे नाक पर, पकड़े कान । *चश्मा*
      सफेद तन हरी पूंछ, न बुझे तो नानी से पूछ । *मूली*       
      ऊंट की बैठक , हिरन की चाल , बोलो वह कौन है पहलवान ? *मेंढक* `,
         
      `काला मुँह लाल शरीर , कागज को वह खाता , रोज शाम को पेट फाड़कर , कोई उन्हें ले जाता ? *लेटरबॉक्स*  
      हरी डंडी लाल कमान , तोबा तोबा करे इंसान ? *मिर्ची*       
      सर है, दुम है, मगर पाँव नहीं उसके। पेट है, आँख है, मगर कान नहीं उसके। *साँप*       
      हाथी घोड़ा , ऊंट नहीं , खाए न दाना , घास। सदा ही धरती पर चले , होए न कभी उदास ? *साइकिल* `,

      `मैं हरी मेरे बच्चे काले , मुझको छोड़ मेरे बच्चे खाले ? *इलायची*
      एक फूल है काले रंग का , सिर पर सदा सुहाए | तेज धूप में खिल खिल जाता , पर छाया में मुरझाए ? *छाता*      
      दो अक्षर का मेरा नाम, सर को ढकना मेरा काम । *टोपी*      
      छोटे से हैं मटकूदास, कपड़े पहने एक सौ पचास । *प्याज*`,

      `अपनों के ही घर यह जाए , तीन अक्षर का नाम बताएं , शुरू के 2 अति हो जाए , अंतिम 2 से तिथि बताएं ? *अतिथि*       
      बीमार नहीं रहती , फिर भी खाती है गोली , बच्चे बूढ़े डर जाते सुन कर मेरी बोली ? *बंदूक*     
      फूल भी हूँ, फल भी हूँ और हूँ मिठाई, तो बताओ  क्या हूँ मैं भाई । *गुलाबजामुन*            
      पानी से निकला दरख्त एक , पात नहीं पर डाल अनेक | एक दरख्त की ठंडी छाया , नीचे एक बैठने न पाया ? *फुहारा*`
    ]
   }  
    ]
  };
