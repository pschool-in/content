export default {
  label: 'व्याकरण',
  id: 'hi-grammar-sc',
  img: 'langGrammar',
  lang: 'hi',
  list: [
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
      type: 'match',
      label: 'निम्नलिखित को जोड़िए।',
      id: 'matchpartsofspeech',
      commonData: {
        title: 'शब्दभेद के हिस्सों के साथ शब्दों को जोड़िए।'
      },
      data: [
        `स्कूल, संज्ञा
पीना, क्रिया
वे, सर्वनाम
अच्छा, विशेषण`,

        `यह, सर्वनाम
बड़ा, विशेषण
शिक्षक, संज्ञा
शयन, क्रिया`,

        `स्वादिष्ट, विशेषण
अस्पताल, संज्ञा
पढ़ना, क्रिया
स्वयं, सर्वनाम`,

        `मौन, विशेषण
बजाना, क्रिया
वह, सर्वनाम
शहर, संज्ञा`,

        `सुंदर, विशेषण
वह, सर्वनाम
चिकित्सक, संज्ञा
तैयारी, क्रिया`
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
      label: 'सही उत्तर का चयन करें।',
      id: 'oneword-manymeanings-1',
      type: 'mcq',
      data: {
        title: 'वाक्य में रेखांकित शब्द का अर्थ ज्ञात कीजिए',
        questions: [
          {
            qText: 'मैं एक *आम* आदमी हूँ।',
            options: 'साधारण, फल'
          },
          {
            qText: 'मुझे मेरे सवाल का *उत्तर* चाहिए।',
            options: 'जवाब, दिशा'
          },
          {
            qText: 'मेरे पिता मेरे *गुरु* हैं।',
            options: 'शिक्षक, भारी'
          },
          {
            qText: 'इन रोगियों का *उपचार* होगा।',
            options: 'इलाज, सेवा'
          },
          {
            qText: 'यह दुनिया *गोल* है।',
            options: 'आकृति, खेल में गोल'
          }
        ]
      }
    },
    {
      type: 'matchByDragDrop',
      id: 'fillup-8',
      label: 'विशेषण ',
      commonData: {
        title: 'नीचे दिए गए वाक्य में विशेषण का चयन कीजिए।'
      },
      data: [
        `मैं *गरम* दूध पीता हूँ।
मैं *ठंडा* पानी पीना चाहता हूँ। 
*चार किलो* आम दिजिए। 
रवि के पास *सात* किताबें हैं।
पेड़ की हरी *पत्तियाँ* मत तोड़ो।`,

        `गिलास में *कुछ* पानी है।
घर में *आठ* आदमी हैं।
वे *मीठे* आम लाए हैं।
मुझे *तीन लीटर* दूध चाहिए।
प्रंधानमंत्री *गंभीर* समस्याओं पर विचार कर रहे हैं।`
      ]
    },
    {
      id: 'tense-types',
      label: 'वर्तमान, भविष्य और भूत काल',
      type: 'classifySentence',
      data: {
        title: 'वर्तमान, भविष्य और भूत काल को वर्गीकृत करें।',
        types: [
          {
            name: 'वर्तमान ',
            text: `मीरा सिलाई मशीन बेचती है। 
मुझे तुम पर भरोसा है। 
हम मांस खाते हैं।
यह अच्छा काम करता है।
हम आवारा बिल्लियों को खाना खिलाते हैं ।
मैं बहुत सपने देखता हूं ।
यह मुझे परेशान करता है ।
मैं हर रात खाना बनाती हूं ।`
          },
          {
            name: 'भविष्य',
            text: `राम गाना गाएगा ।
वह पत्र लिखेगा ।
मै बाजार जाऊँगा ।
मै खाना पकाऊँगा ।
वे बगीचे में खेलेंगे ।
हम कल आगरा जाएंगे ।`
          },
          {
            name: 'भूत',
            text: `हम रोज़ाना स्कूल जाते थे ।
मम्मी पूजा करती थी ।
पापा बाजार जाते थे ।
मै आधी रात को घर पंहुचा ।
पुलिस ने चोर को पकड़ा ।
मैंने उसे नहीं देखा ।`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'निम्नलिखित को जोड़िए।',
      lockAfter: 2,
      id: 'match-tatsamandtatbhav',
      commonData: {
        title: 'तत्सम और तद्भव शब्द को जोड़िए।'
      },
      data: [
        `अग्नि, आग
चंद्र, चाँद
उलूक, उल्लू
काक, कौआ
वानर, बन्दर
सर्प, साँप`,

        `माता, माँ
पितृ, पिता
आम्र, आम
दुग्ध, दूध
कर्ण, कान
रात्रि, रात`,

        `सूर्य, सूरज
कपोत, कबूतर
मयूर, मोर
कोकिल, कोयल
गौ, गाय`,

        `भ्रातृ, भाई
भगिनी,  बहिन
दधि, दही
क्षीर, खीर
चणक, चना`
      ]
    }
  ]
};
