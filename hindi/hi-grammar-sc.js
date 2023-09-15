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
    }
  ]
};
