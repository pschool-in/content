export default {
  label: 'पहेलियाँ',
  id: 'hi-riddle',
  lockAfter: 100,
  lang: 'hi',
  list: [
    {
      id: 'story',
      type: 'slides2',
      label: `पहेलियाँ `,
      commonData: {
        title: `पहेलियाँ`,
        displayType: 'custom',
        autoPlay: false,
        substep: true
      },
      data: [
        {
          steps: [
            [
              'बिन खाए, बिन पिए, सबके घर में रहता हूं । ना खाता हूं, ना रोता हूं, घर की रखवाली करता हूं ।',
              {
                type: 'title',
                text: 'ताला'
              }
            ],
            [
              'सिर पर कलगी, पर मुर्गा नहीं हूँ । करता हूँ नाच, पर कलाकार नहीं हूँ, तो बताओ आखिर क्या हूँ ?',
              {
                type: 'title',
                text: 'मोर '
              }
            ],
            [
              'पैर नहीं है, पर चलती रहती हूं । दोनों हाथों से अपना मुँह पोछती रहती हूँ',
              {
                type: 'title',
                text: 'घड़ी '
              }
            ],
            [
              'बिना पैर के करती यात्रा, मेरे बिना तुम मर जाओगे, दो अक्षर का मेरा नाम, क्या तुम मेरे बिना रह पाओगे',
              {
                type: 'title',
                text: 'हवा'
              }
            ],
            [
              'कान है पर बहरी हूँ, मुँह है पर मौन हूँ, आँखें हैं पर अंधी हूँ, तब आखिर बताओ मैं कौन हूँ ?',
              {
                type: 'title',
                text: 'गुड़िया '
              }
            ]
          ]
        },
        {
          steps: [
            [
              'मेरा भाई बड़ा शैतान, बैठे नाक पर, पकड़े कान',
              {
                type: 'title',
                text: 'चश्मा'
              }
            ],
            [
              'सफेद तन हरी पूंछ, न बुझे तो नानी से पूछ',
              {
                type: 'title',
                text: 'मूली '
              }
            ],
            [
              'ऊंट की बैठक, हिरन की चाल, बोलो वह कौन है पहलवान ?',
              {
                type: 'title',
                text: 'मेंढक '
              }
            ],
            [
              'काला मुँह लाल शरीर, कागज को वह खाता, रोज शाम को पेट फाड़कर, कोई उन्हें ले जाता ?',
              {
                type: 'title',
                text: 'लेटरबॉक्स'
              }
            ],
            [
              'हरी डंडी लाल कमान, तोबा तोबा करे इंसान ? ',
              {
                type: 'title',
                text: 'मिर्ची'
              }
            ]
          ]
        },
        {
          steps: [
            [
              'सर है, दुम है, मगर पाँव नहीं उसके। पेट है, आँख है, मगर कान नहीं उसके',
              {
                type: 'title',
                text: 'साँप'
              }
            ],
            [
              ' हाथी घोड़ा, ऊंट नहीं, खाए न दाना, घास। सदा ही धरती पर चले, होए न कभी उदास ?',
              {
                type: 'title',
                text: 'साइकिल '
              }
            ],
            [
              'मैं हरी मेरे बच्चे काले, मुझको छोड़ मेरे बच्चे खाले ?',
              {
                type: 'title',
                text: 'इलायची'
              }
            ],
            [
              'एक फूल है काले रंग का, सिर पर सदा सुहाए । तेज धूप में खिल खिल जाता, पर छाया में मुरझाए ? ।',
              {
                type: 'title',
                text: 'छाता'
              }
            ],
            [
              'दो अक्षर का मेरा नाम, सर को ढकना मेरा काम',
              {
                type: 'title',
                text: 'टोपी '
              }
            ]
          ]
        },
        {
          steps: [
            [
              'छोटे से हैं मटकूदास, कपड़े पहने एक सौ पचास',
              {
                type: 'title',
                text: 'प्याज'
              }
            ],
            [
              ' अपनों के ही घर यह जाए, तीन अक्षर का नाम बताएं, शुरू के 2 अति हो जाए, अंतिम 2 से तिथि बताएं ?',
              {
                type: 'title',
                text: 'अतिथि '
              }
            ],
            [
              'बीमार नहीं रहती, फिर भी खाती है गोली, बच्चे बूढ़े डर जाते सुन कर मेरी बोली ?',
              {
                type: 'title',
                text: 'बंदूक'
              }
            ],
            [
              'फूल भी हूँ, फल भी हूँ और हूँ मिठाई, तो बताओ क्या हूँ मैं भाई.',
              {
                type: 'title',
                text: 'गुलाबजामुन'
              }
            ],
            [
              'पानी से निकला दरख्त एक, पात नहीं पर डाल अनेक । एक दरख्त की ठंडी छाया, नीचे एक बैठने न पाया ?',
              {
                type: 'title',
                text: 'फुहारा'
              }
            ]
          ]
        }
      ]
    },
    {
      label: 'पहेलियाँ',
      type: 'matchByDragDrop',
      id: 'riddles',
      commonData: {
        title: 'सही उत्तर का चयन करें।'
      },
      data: [
        `बिन खाए, बिन पिए, सबके घर में रहता हूं । ना खाता हूं, ना रोता हूं, घर की रखवाली करता हूं । *ताला* 
सिर पर कलगी, पर मुर्गा नहीं हूँ । करता हूँ नाच, पर कलाकार नहीं हूँ, तो बताओ आखिर क्या हूँ ? *मोर*     
पैर नहीं है, पर चलती रहती हूं । दोनों हाथों से अपना मुँह पोछती रहती हूँ । *घड़ी*      
बिना पैर के करती यात्रा, मेरे बिना तुम मर जाओगे, दो अक्षर का मेरा नाम, क्या तुम मेरे बिना रह पाओगे। *हवा*`,

        `कान है पर बहरी हूँ, मुँह है पर मौन हूँ, आँखें हैं पर अंधी हूँ, तब आखिर बताओ मैं कौन हूँ ? *गुड़िया*  
मेरा भाई बड़ा शैतान, बैठे नाक पर, पकड़े कान । *चश्मा*
सफेद तन हरी पूंछ, न बुझे तो नानी से पूछ । *मूली*       
ऊंट की बैठक, हिरन की चाल, बोलो वह कौन है पहलवान ? *मेंढक* `,

        `काला मुँह लाल शरीर, कागज को वह खाता, रोज शाम को पेट फाड़कर, कोई उन्हें ले जाता ? *लेटरबॉक्स*  
हरी डंडी लाल कमान, तोबा तोबा करे इंसान ? *मिर्ची*       
सर है, दुम है, मगर पाँव नहीं उसके। पेट है, आँख है, मगर कान नहीं उसके। *साँप*       
हाथी घोड़ा, ऊंट नहीं, खाए न दाना, घास। सदा ही धरती पर चले, होए न कभी उदास ? *साइकिल* `,

        `मैं हरी मेरे बच्चे काले, मुझको छोड़ मेरे बच्चे खाले ? *इलायची*
एक फूल है काले रंग का, सिर पर सदा सुहाए । तेज धूप में खिल खिल जाता, पर छाया में मुरझाए ? *छाता*      
दो अक्षर का मेरा नाम, सर को ढकना मेरा काम । *टोपी*      
छोटे से हैं मटकूदास, कपड़े पहने एक सौ पचास । *प्याज*`,

        `अपनों के ही घर यह जाए, तीन अक्षर का नाम बताएं, शुरू के 2 अति हो जाए, अंतिम 2 से तिथि बताएं ? *अतिथि*       
बीमार नहीं रहती, फिर भी खाती है गोली, बच्चे बूढ़े डर जाते सुन कर मेरी बोली ? *बंदूक*     
फूल भी हूँ, फल भी हूँ और हूँ मिठाई, तो बताओ क्या हूँ मैं भाई । *गुलाबजामुन*            
पानी से निकला दरख्त एक, पात नहीं पर डाल अनेक । एक दरख्त की ठंडी छाया, नीचे एक बैठने न पाया ? *फुहारा*`
      ]
    },
    {
      type: 'completeWord',
      id: 'riddles-2',
      label: 'पहेलियाँ',
      commonData: {
        title: 'शब्द पूरा करो',
        lang: 'hi'
      },
      data: [
        `बिन खाए, बिन पिए, सबके घर में रहता हूं । ना खाता हूं, ना रोता हूं, घर की रखवाली करता हूं | ताला
सिर पर कलगी, पर मुर्गा नहीं हूँ । करता हूँ नाच, पर कलाकार नहीं हूँ, तो बताओ आखिर क्या हूँ ? |मोर     
पैर नहीं है, पर चलती रहती हूं । दोनों हाथों से अपना मुँह पोछती रहती हूँ |घड़ी      
बिना पैर के करती यात्रा, मेरे बिना तुम मर जाओगे, दो अक्षर का मेरा नाम, क्या तुम मेरे बिना रह पाओगे|हवा
कान है पर बहरी हूँ, मुँह है पर मौन हूँ, आँखें हैं पर अंधी हूँ, तब आखिर बताओ मैं कौन हूँ ? |गुड़िया  
मेरा भाई बड़ा शैतान, बैठे नाक पर, पकड़े कान |चश्मा
सफेद तन हरी पूंछ, न बुझे तो नानी से पूछ |मूली      
ऊंट की बैठक, हिरन की चाल, बोलो वह कौन है पहलवान ? |मेंढक 
काला मुँह लाल शरीर, कागज को वह खाता, रोज शाम को पेट फाड़कर, कोई उन्हें ले जाता ? |लेटरबॉक्स  
हरी डंडी लाल कमान, तोबा तोबा करे इंसान ? |मिर्ची `,

        `सर है, दुम है, मगर पाँव नहीं उसके। पेट है, आँख है, मगर कान नहीं उसके|साँप       
हाथी घोड़ा, ऊंट नहीं, खाए न दाना, घास। सदा ही धरती पर चले, होए न कभी उदास ? |साइकिल 
मैं हरी मेरे बच्चे काले, मुझको छोड़ मेरे बच्चे खाले ? |इलायची
एक फूल है काले रंग का, सिर पर सदा सुहाए | तेज धूप में खिल खिल जाता, पर छाया में मुरझाए ? |छाता      
दो अक्षर का मेरा नाम, सर को ढकना मेरा काम |टोपी     
छोटे से हैं मटकूदास, कपड़े पहने एक सौ पचास |प्याज
अपनों के ही घर यह जाए, तीन अक्षर का नाम बताएं, शुरू के 2 अति हो जाए, अंतिम 2 से तिथि बताएं ? |अतिथि       
बीमार नहीं रहती, फिर भी खाती है गोली, बच्चे बूढ़े डर जाते सुन कर मेरी बोली ? |बंदूक    
फूल भी हूँ, फल भी हूँ और हूँ मिठाई, तो बताओ क्या हूँ मैं भाई |गुलाबजामुन            
पानी से निकला दरख्त एक, पात नहीं पर डाल अनेक । एक दरख्त की ठंडी छाया, नीचे एक बैठने न पाया ? |फुहारा`
      ]
    }
  ]
};
