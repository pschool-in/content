export default {
  label: 'व्याकरण 7',
  id: 'hi-grammar-7',
  img: 'langGrammar',
  lang: 'hi',
  list: [
    {
      id: 'gender-hi',
      type: 'passage',
      label: 'लिंग',
      data: {
        title: 'लिंग',
        text: `लिंग के दो भेद होते हैं:
# पुल्लिंग 
जिन शब्दों से पुरुष जाति का बोध होता है उन्हें पुल्लिंग शब्द कहते हैं ।
जैसे: पिता, भाई, लड़का।
# स्त्रीलिंग 
जिन शब्दों से स्त्री जाति का बोध होता है उन्हें स्त्रीलिंग शब्द कहते हैं ।
जैसे: माता, बहन, नारी।`
      }
    },
    {
      label: 'शब्दों का लिंग-परिवर्तन',
      id: 'complete-gender',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title: 'शब्दों का लिंग परिवर्तन करें',
        printTitle: 'शब्दों का लिंग परिवर्तन करें'
      },
      data: [
        `पिता, माता, मात
गायक, गायिका, गायिक
धोबी, धोबिन, धोबि
माली, मालिन, मालि
मोर, मोरनी, मोरन
लड़का, लड़की, लड़क
गुड्डा, गुड़िया, गुड़िय
नर, नारी, नार
चूहा, चुहिया, चुहिय
मास्टर, मास्टरनी, मास्टरन
बेटा, बेटी, बेट`,

        `नौकर, नौकरानी, नौकरानी
पुरुष, स्त्री, स्त्र
अध्यापक, अध्यापिका, अध्यापिक
बूढ़ा, बुढ़िया, बुढ़िय
हाथी, हथिनी, हथिन
राजा, रानी, रान
शिष्य, शिष्या, शिष्य
शेर, शेरनी, शेरन
प्रधानाचार्य, प्रधानाचार्या, प्रधानाचार
नर्तक, नर्तकी, नर्त
डिब्बा, डिबिया, डिबिय`
      ]
    },
    {
      type: 'group',
      label: 'लिंग पुरुष/महिला ',
      id: 'classify-geneder-type',
      lockAfter: 2,
      commonData: {
        title: 'लिंग का वर्गीकरण करें',
        fontSize: '2rem',
        printTitle: 'लिंग का वर्गीकरण करें',
        types: ['पुरुष', 'महिला']
      },
      data: [
        [`पिता, गायक, धोबी, माली, मोर`, `माता, गायिका, धोबिन, मालिन, मोरनी`],
        [
          `लड़का, गुड्डा, नर, चूहा, मास्टर, बेटा`,
          `लड़की, गुड़िया, नारी, चुहिया, मास्टरनी, बेटी`
        ],
        [
          `नौकर, पुरुष, अध्यापक, बूढ़ा, हाथी`,
          `नौकरानी, स्त्री, अध्यापिका, बुढ़िया, हथिनी`
        ],
        [
          `राजा, शिष्य, शेर, प्रधानाचार्य, नर्तक, डिब्बा`,
          `रानी, शिष्या, शेरनी, प्रधानाचार्या, नर्तकी, डिबिया`
        ]
      ]
    },

    {
      type: 'match',
      label: 'संधि विच्छेद',
      lockAfter: 4,
      id: 'sandhi-hi',
      commonData: {
        title: 'संधि विच्छेद कीजिये '
      },
      data: [
        `शब्दार्थ, शब्द + अर्थ
परमार्थ, परम + अर्थ
सेवार्थ, सेवा + अर्थ
शरणार्थी, शरण + अर्थी
शिक्षार्थी ,  शिक्षा + अर्थी`,

        `सत्यार्थी, सत्य + अर्थी
विद्यार्थी, विद्या + अर्थी
पुस्तकार्थी, पुस्तक + अर्थी
परीक्षार्थी, परीक्षा + अर्थी
धनार्थी, धन + अर्थी
कल्पान्त, कल्प + अंत`,

        `उत्तमांग, उत्तम + अंग
दैत्यारि, दैत्य + अरि
देहान्त, देह + अन्त
वेदान्त, वेद + अन्त
सूर्यास्त, सूर्य + अस्त
रामावतार, राम + अवतार`,

        `रामायण, राम + अयन
शिवायन, शिव + अयन
अन्नाभाव, अन्न + अभाव
पुष्पावली, पुष्प + अवली
चरणामृत, चरण + अमृत`,

        `स्वर्गावसर, स्वर्ग + अवसर
हिमालय, हिम + आलय
शिवालय, शिव + आलय
परमात्मा, परम + आत्मा
रत्नाकर, रत्न + आकर`,

        `कुशासन, कुश + आसन
पुस्तकालय, पुस्तक + आलय
देवालय, देव + आलय
रामाधार, राम + आधार
रामाश्रय, राम + आश्रय`,

        `धर्मात्मा, धर्म + आत्मा
परमानन्द, परम + आनन्द
नित्यानन्द, नित्य + आनन्द
परमावश्यक, परम + आवश्यक
भोजनालय, भोजन + आलय`,

        `विद्याभ्यास, विद्या + अभ्यास
मायाधीन, माया + अधीन
करुणावतार, करुणा + अवतार
तथापि, तथा + अपि
युवावस्था, युवा + अवस्था`,

        `
आज्ञानुसार, आज्ञा + अनुसार
कवीन्द्र, कवि + इन्द्र
रवीन्द्र, रवि + इन्द्र
महीन्द्र, मही + इन्द्र
गिरीन्द्र, गिरि + इन्द्र`,

        `अभीष्ट, अभि + इष्ट
हरीश, हरि + ईश
कवीश, कवि + ईश
गिरीश, गिरि + ईश
कपीश, कपि + ईश`,

        `बुद्धीश, बुद्धि + ईश
रतीश, रति + ईश
नदीश, नदी + ईश
जानकीश, जानकी + ईश
महीश, मही + ईश`,

        `पृथ्वीश, पृथ्वी + ईश
रजनीश, रजनी + ईश
कवीच्छा, कवि + इच्छा
लक्ष्मीच्छा, लक्ष्मी + इच्छा
मुनीश्वर, मुनि + ईश्वर
भारतीश्वर, भारती + ईश्वर`,

        `
भानूदय, भानु + उदय
लघूक्ति, लघु + उक्ति
कटूक्ति, कटु + उक्ति
सूक्ति, सु + उक्ति
रघूत्तम, रघु + उत्तम
मृत्यूपरांत, मृत्यु + उपरांत`,

        `लघूर्मि, लघु + ऊर्मि
मंजूषा, मंजु + ऊषा
सिन्धूर्मि, सिन्धु + ऊर्मि
वधूत्सव, वधू + उत्सव
भूपरि, भू + उपरि`,

        `देवेन्द्र, देव + इन्द्र
सुरेन्द्र, सुर + इन्द्र
उपेंद्र, उप + इन्द्र	
नरेंद्र, नर + इन्द्र
प्रेत, प्र + इत`,

        `सुरेश, सुर + ईश
नरेश, नर + ईश
खगेश, खग + ईश
देवेश, देव + ईश
गणेश, गण + ईश`,

        `सूर्योदय, सूर्य + उदय
जलोदय, जल + उदय
चन्द्रोदय, चन्द्र + उदय
परोपकार, पर + उपकार
परमोत्सव, परम + उत्सव`,

        `लोकोपयोग, लोक + उपयोग
जलोर्मि, जल + ऊर्मि
समुद्रोर्मि, समुद्र + ऊर्मि
दीर्घोपल, दीर्घ + ऊपल	
देवर्षि, देव + ऋषि`,

        `तत्रैव, तत्र + एव
एकैव, एक + एव
एकैक, एक + एक
दिनैक, दिन + एक
मतैक्य, मत + ऐक्य`,

        `धर्मैक्य, धर्म + ऐक्य
विश्वैक्य, विश्व + ऐक्य
नवैश्वर्य, नव + ऐश्वर्य
परमौज, परम + ओज
जलौस, जल + ओस`,

        `परमौषध, परम + औषध
परमौदार्य, परम + औदार्य
सर्वदैव, सर्वदा + एव
सदैव, सदा + एव
एकदैव, एकदा + एव`,

        `तथैव, तथा + एव
महैश्वर्य, महा +ऐश्वर्य
महौज, महा + ओज
महौदर्य, महा + औदार्य
महौषध, महा + औषध`,

        `नयन, ने + अन
शयन, शे + अन
चयन, चे + अन
गायक, गै + अक
गायन, गै + अन`,

        `गवीश, गो + ईश
रवीश, रो + ईश
पवित्र, पो + इत्र
पवन, पो + अन
पावन, पौ + अन`
      ]
    },
    {
      type: 'completeWord',
      id: 'sandhi-2',
      label: 'संधि विच्छेद',
      commonData: {
        title: 'शब्द पूरा करो',
        lang: 'hi'
      },
      data: [
        `शब्द + अर्थ |शब्दार्थ
परम + अर्थ |परमार्थ
सेवा + अर्थ |सेवार्थ
शरण + अर्थी |शरणार्थी
शिक्षा + अर्थी | शिक्षार्थी  
सत्य + अर्थी |सत्यार्थी 
विद्या + अर्थी |विद्यार्थी 
पुस्तक + अर्थी |पुस्तकार्थी
परीक्षा + अर्थी |परीक्षार्थी 
धन + अर्थी |धनार्थी
कल्प + अंत | कल्पान्त `,

        `उत्तम + अंग |उत्तमांग
दैत्य + अरि |दैत्यारि 
देह + अन्त |देहान्त 
वेद + अन्त |वेदान्त 
सूर्य + अस्त |सूर्यास्त 
राम + अवतार |रामावतार 
राम + अयन |रामायण 
शिव + अयन |शिवायन 
अन्न + अभाव | अन्नाभाव 
पुष्प + अवली |पुष्पावली 
चरण + अमृत |चरणामृत `,

        `स्वर्ग + अवसर |स्वर्गावसर
हिम + आलय |हिमालय 
शिव + आलय |शिवालय 
परम + आत्मा |परमात्मा 
रत्न + आकर |रत्नाकर 
कुश + आसन |कुशासन 
पुस्तक + आलय |पुस्तकालय 
देव + आलय |देवालय 
राम + आधार |रामाधार 
राम + आश्रय |रामाश्रय `,

        `धर्म + आत्मा |धर्मात्मा 
परम + आनन्द |परमानन्द 
नित्य + आनन्द |नित्यानन्द 
परम + आवश्यक |परमावश्यक 
भोजन + आलय |भोजनालय 
विद्या + अभ्यास |विद्याभ्यास
माया + अधीन |मायाधीन 
करुणा + अवतार |करुणावतार
तथा + अपि |तथापि 
युवा + अवस्था | युवावस्था `,

        `आज्ञा + अनुसार |आज्ञानुसार
कवि + इन्द्र |कवीन्द्र
रवि + इन्द्र |रवीन्द्र 
मही + इन्द्र |महीन्द्र 
गिरि + इन्द्र |गिरीन्द्र 
अभि + इष्ट |अभीष्ट 
हरि + ईश |हरीश 
कवि + ईश |कवीश 
गिरि + ईश |गिरीश 
कपि + ईश |कपीश `,

        `बुद्धि + ईश |बुद्धीश
रति + ईश |रतीश 
नदी + ईश |नदीश 
जानकी + ईश |जानकीश 
मही + ईश |महीश 
पृथ्वी + ईश |पृथ्वीश 
रजनी + ईश |रजनीश 
कवि + इच्छा |कवीच्छा 
लक्ष्मी + इच्छा |लक्ष्मीच्छा 
मुनि + ईश्वर |मुनीश्वर 
भारती + ईश्वर |भारतीश्वर `,

        `भानु + उदय |भानूदय
लघु + उक्ति |लघूक्ति
कटु + उक्ति |कटूक्ति
सु + उक्ति |सूक्ति 
रघु + उत्तम |रघूत्तम 
मृत्यु + उपरांत |मृत्यूपरांत 
लघु + ऊर्मि |लघूर्मि 
मंजु + ऊषा |मंजूषा 
सिन्धु + ऊर्मि |सिन्धूर्मि 
वधू + उत्सव |वधूत्सव 
भू + उपरि |भूपरि `,

        `देव + इन्द्र |देवेन्द्र 
सुर + इन्द्र |सुरेन्द्र
उप + इन्द्र |	उपेंद्र 
नर + इन्द्र |नरेंद्र 
प्र + इत |प्रेत 
सुर + ईश |सुरेश 
नर + ईश |नरेश 
खग + ईश |खगेश 
देव + ईश |देवेश 
गण + ईश |गणेश `,

        `सूर्य + उदय |सूर्योदय 
जल + उदय |जलोदय 
चन्द्र + उदय |चन्द्रोदय
पर + उपकार |परोपकार
परम + उत्सव |परमोत्सव 
लोक + उपयोग |लोकोपयोग 
जल + ऊर्मि |जलोर्मि 
समुद्र + ऊर्मि |समुद्रोर्मि 
दीर्घ + ऊपल |दीर्घोपल 
देव + ऋषि |देवर्षि `,

        `तत्र + एव |तत्रैव 
एक + एव |एकैव 
एक + एक |एकैक 
दिन + एक |दिनैक 
मत + ऐक्य |मतैक्य 
धर्म + ऐक्य |धर्मैक्य 
विश्व + ऐक्य |विश्वैक्य 
नव + ऐश्वर्य |नवैश्वर्य 
परम + ओज |परमौज 
जल + ओस |जलौस `,

        `परम + औषध |परमौषध 
परम + औदार्य |परमौदार्य 
सर्वदा + एव |सर्वदैव 
सदा + एव |सदैव 
एकदा + एव |एकदैव 
तथा + एव |तथैव 
महा + ऐश्वर्य |महैश्वर्य 
महा + ओज |महौज 
महा + औदार्य |महौदर्य 
महा + औषध |महौषध `,

        `ने + अन |नयन 
शे + अन |शयन 
चे + अन |चयन 
गै + अक |गायक 
गै + अन |गायन 
गो + ईश |गवीश 
रो + ईश |रवीश 
पो + इत्र |पवित्र 
पो + अन |पवन 
पौ + अन |पावन `
      ]
    },
    {
      type: 'group',
      label: 'संज्ञा और सर्वनाम',
      id: 'partsofspeech-hi',
      commonData: {
        title: 'संज्ञा और सर्वनाम सही बॉक्स में डालें ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['संज्ञा', 'सर्वनाम']
      },
      data: [
        [
          `राम, केला, कृष्णा, अमेरिका, हजरत मोहम्मद`,
          `तुम, तुम्हारा, आप, आपका, इस`
        ],
        [`आम, अमरूद, ईसा मसीह, हिन्द महासागर, कृष्ण`, `उस, यह, वह, हम, हमारा`],
        [
          `महात्मा बुद्ध, सेब, प्रशांत महासागर, सन्तरा, रामचरित मानस`,
          `उनसे, मैं, जो, कौन, कोई`
        ],
        [
          `पद्मावतगंगा, भारत, कुरान, जापान, पाकिस्तान`,
          `मेरी, मुझे, किसी, कुछ, कब`
        ]
      ]
    },

    {
      type: 'group',
      label: 'क्रिया और क्रिया विशेषण',
      id: 'partsofspeech2-hi',
      commonData: {
        title: 'क्रिया और क्रिया विशेषण सही बॉक्स में डालें ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['क्रिया', 'क्रिया विशेषण']
      },
      data: [
        [`आना, जाना, पाना, खोना, खेलना`, `धीरे-धीरे, तेज, फटाफट, झूठ, बाहर`],
        [
          `कूदना, शर्माना, लुभाना, बतियाना, झुठलाना`,
          `ध्यान पूर्वक, पास, अल्प, बहुत कम, कल`
        ],
        [
          `लतियाना, दुखाना, थपथपाना, बड़बड़ाना, रुको`,
          `यहाँ, हमेशा, सचमुच, अवश्य, यहाँ वहाँ`
        ],
        [`जाओ, बोलना, पढ़ना, घूमना, लिखना`, `आजकल, ध्यान, अंदर, बाहर, दूर`]
      ]
    },
    {
      label: 'हिंदी मुहावरे',
      id: 'hi-idioms',
      type: 'mcq',
      commonData: {
        title: 'नीचे दिए गए मुहावरे का सही अर्थ खोजें'
      },
      data: [
        {
          questions: [
            {
              qText: 'नाक में दम करना',
              options:
                'बहुत तंग करना, बुरी तरह हराना, एकमात्र सहारा, बहुत शोर करना'
            },
            {
              qText: 'दाँत खट्टे करना',
              options:
                'बुरी तरह हराना, बहुत शोर करना, स्वयं अपनी प्रशंसा करना, बहुत तंग करना'
            },
            {
              qText: 'अपने मुँह मियाँ मिट्ठू बनना',
              options:
                'स्वयं अपनी प्रशंसा करना, बहाने बनना, खुशियाँ मनाना, बहुत तेज दौड़ना'
            },
            {
              qText: 'अंधे की लकड़ी या लाठी',
              options: 'एकमात्र सहारा, अति सरल कार्य, आरम्भ करना, बहाने बनना'
            },
            {
              qText: `अगर-मगर करना`,
              options: 'बहाने बनना, खुशियाँ मनाना, बहुत तंग करना, भाग जाना'
            },
            {
              qText: `आसमान सिर पर उठा लेना`,
              options:
                'बहुत शोर करना, बहुत तंग करना, स्वयं अपनी प्रशंसा करना, आरम्भ करना'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'घी के दिए जलाना',
              options: 'खुशियाँ मनाना, आरम्भ करना, मान रखना, चुगली करना'
            },
            {
              qText: 'दांतों तले उंगली दबाना',
              options:
                'आश्चर्य चकित होना, बहुत शोर करना, स्वयं अपनी प्रशंसा करना, बहुत तंग करना'
            },
            {
              qText: 'दिन-रात एक करना',
              options:
                'खूब परिश्रम करना, बहाने बनना, खुशियाँ मनाना, बहुत तेज दौड़ना'
            },
            {
              qText: 'बाएँ हाथ का खेल',
              options:
                'अति सरल कार्य, आरम्भ करना, बहाने बनना, अच्छी तरह याद रखना'
            },
            {
              qText: `हवा से बातें करना`,
              options: 'बहुत तेज दौड़ना, मान रखना, बहुत तंग करना, भाग जाना'
            },
            {
              qText: `श्री गणेश करना`,
              options:
                'आरम्भ करना, बहुत तंग करना, स्वयं अपनी प्रशंसा करना, मान रखना'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'नौ-दो ग्यारहा होना',
              options: 'भाग जाना, कायर बनना, मान रखना, संतोष करना'
            },
            {
              qText: 'हाथ मलना',
              options:
                'पछताना, कायर बनना, स्वयं अपनी प्रशंसा करना, बहुत तंग करना'
            },
            {
              qText: 'कान भरना',
              options:
                'चुगली करना, अच्छी तरह याद रखना, खुशियाँ मनाना, खुशामद करना'
            },
            {
              qText: 'डींग मारना',
              options:
                'अपने मुँह अपनी बड़ाई करना, आरम्भ करना, बहाने बनना, भाग जाना'
            },
            {
              qText: `नाक रखना`,
              options: 'मान रखना, जी ललचाना, बहुत तंग करना, पछताना'
            },
            {
              qText: `चूड़ियाँ पहनना`,
              options:
                'कायर बनना, व्यर्थ में हँसना, अपने मुँह अपनी बड़ाई करना, मान रखना'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'आँख लगना',
              options: 'नींद आना, कायर बनना, व्यर्थ में हँसना, संतोष करना'
            },
            {
              qText: 'गाँठ बाँधना',
              options:
                'अच्छी तरह याद रखना, कायर बनना, स्वयं अपनी प्रशंसा करना, हिम्मत हारना'
            },
            {
              qText: 'आना कानी करना',
              options:
                'न करने के लिए बहाना करना, अच्छी तरह याद रखना, संतोष करना, खुशामद करना'
            },
            {
              qText: 'दाँत दिखाना',
              options: 'व्यर्थ में हँसना, अति सरल कार्य, बहाने बनना, भाग जाना'
            },
            {
              qText: `पीठ दिखाना`,
              options: 'भाग जाना, जी ललचाना, बहाने बनना, पछताना'
            },
            {
              qText: `खोपड़ी भिनभिनाना`,
              options: 'तंग आना, व्यर्थ में हँसना, हिम्मत हारना, मान रखना'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'मुँह में पानी भर आना',
              options: 'जी ललचाना, पछताना, बहाने बनना, संतोष करना'
            },
            {
              qText: 'पैर चूमना',
              options:
                'खुशामद करना, कायर बनना, स्वयं अपनी प्रशंसा करना, हिम्मत हारना'
            },
            {
              qText: 'मन मारना',
              options: 'इच्छा को रोकना, अति सरल कार्य, खुशामद करना'
            },
            {
              qText: 'मन हारना',
              options: 'हिम्मत हारना, अति सरल कार्य, बहाने बनना, भाग जाना'
            }
          ]
        }
      ]
    },
    {
      label: 'काल की पहचान करें',
      id: 'hi-tense-2',
      type: 'mcq',
      commonData: {
        title: 'काल की पहचान करें'
      },
      data: [
        {
          questions: [
            {
              qText: 'मीरा सिलाई मशीन बेचती है।',
              options: 'वर्तमान काल, भूतकाल, भविष्य काल'
            },
            {
              qText: 'हम रोज़ाना स्कूल जाते थे',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'राम गाना गाएगा',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मुझे तुम पर भरोसा है',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `मम्मी पूजा करती थी|`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `वह पत्र लिखेगा`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `हम मांस खाते हैं|`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `पापा बाजार जाते थे|`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `मैं बाजार जाऊँगा|`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `यह अच्छा काम करता है|`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'हम आवारा बिल्लियों को खाना खिलाते हैं।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'मैं आधी रात को घर पंहुचा ।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'मैं खाना पकाऊँगा ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मैं बहुत सपने देखता हूँ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `पुलिस ने चोर को पकड़ा।`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `वह कार चलाएगा।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `यह मुझे परेशान करता है।`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `आज पिताजी ऑफिस नहीं गए।`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `वे बगीचे में खेलेंगे।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `वह बॉब को पसंद है।`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'मैं हर रात खाना बनाती हूँ। ',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'मैंने उसे नहीं देखा।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'हम कल आगरा जाएंगे।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'वह मेरी सुनता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `पिताजी कहाँ गये।`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `वह अगले महीने आएगा।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `मैं अकेले यात्रा करता हूँ।`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `मैं मंदिर जाता था। `,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `तुम सोमवार को विद्यालय जाओगे।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `वह आपको जानती है।`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'तुम इसके हक़दार हो  ',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'सीता गाना गाती थी ',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'वह गरीबों की मदद करेगा',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'उन्हें कैंडी पसंद हैं',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `वह आज स्कूल नहीं गई`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `यह लड़का हमें कल पैसा देगा`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `मित को कॉटन कैंडी चाहिए`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `अभी तक सूरज नहीं निकला `,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `मैं अगले महीने नया फ़ोन खरीदूंगा`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `मुझे तुम्हें पैसे उधार देने हैं`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'वह हर समय छींकता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'हम दोनों जाते थे।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'वह कल शादी में आएगा। ',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'आप कॉफी पीते हैं।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `बन्दर पेड से कूदा ।`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `जतिन बस से आएगा।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: `इसकी खुशबू अच्छी है।`,
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: `बिल्ली सडक पर दौडी।`,
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: `मै तुम्हे मार दूंगा।`,
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मैं अपना पाठ याद नहीं करता हूँ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'वे हॉकी नहीं खेलते हैं ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'उसने नदी में स्नान किया।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'हम आपको अवस्य मिलेंगे।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'वह एक पत्र नहीं लिखता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'मैने ऐसा दृश्य नहीं देखा।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'वह इस समस्या का हल जरूर करेगा ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'सीता मधुर गाना गाती है. ',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'शीला अभी तक नहीं आयी।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'राम गाना गाएगा।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'तुम स्कूल नहीं जाते हो ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'हम अपनी किताबे नहीं पड़ते हैं। ',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'राधा स्टेज पर नहीं नाची ।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'वह पत्र लिखेगा ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'वह कभी झूठ नहीं बोलता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'राष्ट्रपति ने लाल किले पर झण्डा फहराया।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'चपरासी कमरा साफ़ करेगा ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'राम जाता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'ज़िया स्कूल गयी।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'वे बाजार से फल खरीदेंगे।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मैं प्रतिदिन खाना खाता हूँ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'नदियाँ समुद्र में बहती हैं ।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'राम कहाँ पढ़ने गया था?',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'रेखा तुम्हे पैसे नहीं देगी।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'तुम सब बुरा खेलते हो।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'तुम स्कूल क्यो नहीं गये थे?',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'सीमा अपनी सहेली से मिलने नहीं जाएगी ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'सोनू गंगा नदी के पास रहता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'मोहन ने क्या खरीदा?',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'हम अपना समय नष्ट नहीं करेंगे ।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मेरी माँ रोज मंदिर जाती हैं।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'वह प्रतिदिन सुबह दौड़ के लिए जाता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'मैं कल बनारस गया था।',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'मैं इस केस की जांच करूँगा।',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'रमेश फूटबोल खेलता है।',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'रामजी आज पोस्ट-ऑफिस नहीं गये थे ',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'हम कल मिलेंगे',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'तुम नींद में चलते हो',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            },
            {
              qText: 'आज सुबह बहुत तेज से बारिश हुई थी',
              options: 'भूतकाल, भविष्य काल, वर्तमान काल'
            },
            {
              qText: 'जनता वोट डालेगी',
              options: 'भविष्य काल, भूतकाल, वर्तमान काल'
            },
            {
              qText: 'मैं क्रिकेट खेलता हूँ',
              options: 'वर्तमान काल, भूतकाल , भविष्य काल'
            }
          ]
        }
      ]
    }
  ]
};
