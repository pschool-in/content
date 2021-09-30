export default {
    label: 'व्याकरण',
    id: 'hi-grammar-3',
    img: 'langGrammar',
    list: [
      {
        id: 'gender-hi',
        type: 'passage',
        label: 'लिंग',
        style: 'big',
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
        type: 'match',
        label: 'निम्नलिखित को जोड़िए।',
        id: 'match-gender',
        commonData: {
          title: 'लिंग के आधार पर निम्नलिखित को जोड़िए।'
        },
        data: [
          `दादा, दादी
          घोड़ा, घोड़ी
          छात्र, छात्रा
          धोबी, धोबिन
          हाथी, हथिनी`,
  
          `युवक, युवती
         मोर, मोरनी
         सिंह, सिंहनी
         अध्यापक, अध्यापिका
         लेखक, लेखिका`,
  
          `शेर, शेरनी
         गायक, गायिका
         कवि, कवयित्री
         हंस, हंसनी
         भेड़, भेड़ा`,
  
          `पड़ोसी, पड़ोसिन
         श्रीमान, श्रीमति
         बालक, बालिका
         शिष्य, शिष्या
         बाल, बाला` ,
         
         `पंडित, पंडिताइन
         ठाकुर, ठाकुराइन
         पुरुष, स्त्री
         युवक, युवती
         सेवक, सेविका` ,

         `पाठक, पाठिका
         दर्जी, दर्जिन
         मालिक, मालकिन
          उँट, उँट्नी
         शिक्षक, शिक्षिका` ,

         `वर, वधू
          नाग, नागिन
          मामा, मामी
         बलवान, बलवती`
        ]
      },
      {
        type: 'group',
        label: 'लिंग स्त्रीलिंक/पुल्लिंग ',
        id: 'classify-geneder-type',
        commonData: {
          title: 'लिंग का वर्गीकरण करें',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['Female', 'Male']
        },
        data: [
          [`दादी, घोड़ी, छात्रा, धोबिन, हथिनी`,
            `दादा, घोड़ा, छात्र, धोबी, हाथी`
          ],
          [
            `युवती, मोरनी, सिंहनी, अध्यापिका, लेखिका`,
            `युवक, मोर, सिंह, अध्यापक, लेखक`
          ],
          [
            `शेरनी, गायिका, कवयित्री, हंसनी, भेड़ा`,
            `शेर, गायक, कवि, हंस, भेड़`
          ],
          [
            `पड़ोसिन, श्रीमति, बालिका, शिष्या, बाला`,
            `पड़ोसी, श्रीमान, बालक, शिष्य, बाल`
          ],
          [
            `पंडिताइन, ठाकुराइन, स्त्री, युवती, सेविका`,
            `पंडित, ठाकुर, पुरुष, युवक, सेवक`
          ],
          [
            `पाठिका, दर्जिन, मालकिन, उँट्नी, शिक्षिका`,
            `पाठक, दर्जी, मालिक, उँट, शिक्षक`
          ],
          [
            `वधू, नागिन, मामी, बलवती`,
            `वर, नाग, मामा, बलवान `
          ]
        ]
      },
      {
        id: 'singular-plural-hi',
        type: 'passage',
        label: 'वचन',
        style: 'big',
        data: {
          title: 'वचन',
          text: `हिन्दी में वचन दो होते हैं:
        # एकवचन : 
        शब्द के जिस रूप से एक ही वस्तु का बोध हो, उसे एकवचन कहते हैं। 
        जैसे-लड़का, गाय, सिपाही, बच्चा, कपड़ा, माता, माला, पुस्तक, स्त्री, टोपी बंदर, मोर आदि।

        #बहुवचन : 
        शब्द के जिस रूप से अनेकता का बोध हो उसे बहुवचन कहते हैं। 
        जैसे-लड़के, गायें, कपड़े, टोपियाँ, मालाएँ, माताएँ, पुस्तकें, वधुएँ, गुरुजन, रोटियाँ, स्त्रियाँ, लताएँ, बेटे आदि।`
        }
      },
      {
        type: 'match',
        label: 'निम्नलिखित को जोड़िए।',
        id: 'match-singular-plural',
        commonData: {
          title: 'बहुवचन शब्द के साथ एकवचन शब्द को जोड़िए।'
        },
        data: [
          `पुस्तक,	पुस्तकें
          बात, बातें
          बहन, बहनें
          आँख, आँखें
          कलम, कलमें`,
  
          `गाय,	गायें
         बांह,	बांहें
         भैंस,	भैंसें
         रात,	रातें`,
  
          `पत्रिका, पत्रिकाएँ
         माला,	मालाएँ
         माता,	माताएँ
         कन्या,	कन्याएँ`,
  
          `महिला, महिलाएँ
         कथा,	कथाएँ
         अध्यापिका, अध्यापिकाएँ
         शाखा,	शाखाएँ` ,
         
         `पत्ता,	पत्ते
         लड़का,	लड़के
         छाता,	छाते
         रूपया,	रूपये
         बेटा,	बेटे` ,

         `कमरा,	कमरे
         जूता,	जूते
         बस्ता,	बस्ते
         घोड़ा,	घोड़े
         पक्का,	पक्के` ,

         `बच्चा,	बच्चे
         कपड़ा,	कपड़े
         रास्ता,	रास्ते
         तारा,	तारे` ,

         `लड़की,	लड़कियाँ
         जाति,	जातियाँ
         चींटी,	चीटियाँ
         पत्ती,	पत्तियाँ` ,
         
         `मिठाई,	मिठाइयाँ
          नदी,	नदियाँ
          चाबी,	चाबियाँ
          थाली,	थालियाँ
         लकड़ी,	लकड़ियाँ` ,

         `रीति,	रीतियाँ
         सखी,	सखियाँ
         टोपी,	टोपियाँ
         तिथि,	तिथियाँ
         नारी,	नारियाँ` ,

         `सीढ़ी,	सीढ़ियाँ
         गुड़िया, गुड़ियाँ
         डिबिया, डिबियाँ
         बुढ़िया, बुढ़ियाँ
         बिंदिया, बिंदियाँ` ,

         `चिड़िया, चिड़ियाँ
         चुहिया, चुहियाँ
         गौ,	गौएँ
         वस्तु,	वस्तुएँ
         बहू,	बहुएँ`
        ]
      },
      {
        type: 'group',
        label: 'वचन एकवचन/बहुवचन ',
        id: 'classify-singular-plural-type',
        commonData: {
          title: 'शब्दों को एकवचन या बहुवचन के रूप में वर्गीकृत करें।',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['Singular', 'Plural']
        },
        data: [
          [`पुस्तक, बात, बहन, आँख, कलम`,
            `पुस्तकें, बातें, बहनें, आँखें, कलमें`
          ],
          [
            `गाय, बांह, भैंस, रात`,
            `गायें, बांहें, भैंसें, रातें`
          ],
          [
            `पत्रिका, माला, माता, कन्या`,
            `पत्रिकाएँ, मालाएँ,	माताएँ, कन्याएँ`
          ],
          [
            `महिला, कथा, अध्यापिका, शाखा`,
            `महिलाएँ, कथाएँ, अध्यापिकाएँ, शाखाएँ`
          ],
          [
            `पत्ता, लड़का, छाता, रूपया, बेटा`,
            `पत्ते,	लड़के,	छाते, रूपये, बेटे`
          ],
          [
            `कमरा, जूता, बस्ता, घोड़ा, पक्का`,
            `कमरे, जूते, बस्ते,	घोड़े, पक्के`
          ],
          [
            `बच्चा, कपड़ा, रास्ता, तारा`,
            `बच्चे, कपड़े, रास्ते, तारे`
          ],
          [ `लड़की, जाति, चींटी, पत्ती`,
            `लड़कियाँ, जातियाँ, चीटियाँ, पत्तियाँ`
          ],
          [
            `मिठाई, चाबी, थाली, लकड़ी`,
            `मिठाइयाँ, नदियाँ, चाबियाँ, थालियाँ, लकड़ियाँ`
          ],
          [
            `रीति, सखी, टोपी, तिथि, नारी`,
            `रीतियाँ, सखियाँ, टोपियाँ, तिथियाँ, नारियाँ`
          ],
          [
            `सीढ़ी, गुड़िया, डिबिया, बुढ़िया, बिंदिया`,
            `सीढ़ियाँ, गुड़ियाँ, डिबियाँ, बुढ़ियाँ, बिंदियाँ`
          ],
          [
            `चिड़िया, चुहिया, गौ, वस्तु, बहू`,
            `चिड़ियाँ, चुहियाँ, गौएँ, वस्तुएँ, बहुएँ`
          ]
        ]
      },
      {
        id: 'partsofspeech-hi',
        type: 'passage',
        label: 'शब्दभेद',
        style: 'big',
        data: {
          title: 'शब्दभेद',
          text: `अंग्रेजी में जितने भी शब्द है उन सभी को वाक्यों में उनके प्रयोग के आधार पर 8 भागो में बांटा गया जिसे शब्दभेद कहाँ जाता है|

         # Noun (संज्ञा): 
         किसी भी व्यक्ति, वस्तु, स्थान, जानवर, विचार एवं भाव को संज्ञा कहते है| 
         जैसे – मनुष्य (जाति), अमेरिका, भारत (स्थान), बचपन, मिठास (भाव), किताब, टेबल(वस्तु) आदि।

         # Pronoun (सर्वनाम): 
         सर्वनाम वह शब्द है जो किसी संज्ञा के बदले प्रयुक्त होता है| 
         उदाहरण : मैं, तू, आप (स्वयं), यह, वह, जो, कोई, कुछ, कौन, क्या ।

         # Adjective (विशेषण):
         विशेषण उस शब्द को कहते है जो संज्ञा या सर्वनाम की विशेषता बताता है| 
         जैसे- बड़ा, काला, लम्बा, दयालु, भारी, सुंदर, कायर, टेढ़ा–मेढ़ा, एक, दो, वीर पुरुष, गोरा, अच्छा, बुरा, मीठा, खट्टा, आदि।

         # Verb (क्रिया): 
         वह शब्द है जिससे किसी कार्य, सम्बन्ध या अवस्था का बोध होता है क्रिया कहलाता है|
         जैसे- पढ़ना, खाना, पीना, जाना इत्यादि।`
        }
      },
      {
        type: 'group',
        label: 'संज्ञा और क्रिया',
        id: 'partsofspeech1-hi',
        commonData: {
          title: 'संज्ञा और क्रिया को वर्गीकृत करें।',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['संज्ञा', 'क्रिया']
        },
        data: [
          [
            `पेड़, घर, जूता, पोशाक, नई दिल्ली `,
            `चलना, हंसना, खेलना, पकाना, सोना`
          ],
          [`नाक, गुलाब, बच्चा, पहाड़ी, राम`, `मुस्कुराओ, नाचो, गाओ, पकड़ो, रुको`],
          [`खिलौना, घंटी, गेंद, पत्ती, पक्षी`, `सोचें, सुनें, सूंघें, कूदें, खाना`] 
        ]
      },
      {
        type: 'group',
        label: 'सर्वनाम vs विशेषण',
        id: 'partsofspeech2-hi',
        commonData: {
          title: 'सर्वनाम और विशेषण को वर्गीकृत करें।',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['सर्वनाम', 'विशेषण']
        },
        data: [
          [
            `मैं, मुझे, मेरा, मुझको, हम`,
            `पुराना, ताजा, भूत, वर्तमान, भविष्य`
          ],
          [`हमें, हमारा, हमको, तू, तुझे`, `पतला, मोटा, भारी, हल्का, गीला`],
          [`तेरा, तुम, तुम्हे, तुम्हारा, वह`, `उचित, अनुचित, सच्चा, झूठा, न्याय`], 
          [` उसने, उसको, उसका, उसे, उसमें`, `खट्टा, मीठा, कड़वा, तीखा, नमकीन`], 
          [` वे, इन्होने, उनको, उनका, उन्हें`, `काला, पीला, सुनहरा, नीला, हरा`], 
          [`कौन, कहाँ, क्या, कैसे, किसने`, `मोटा, लंबा, छोटा, चौकोर, गोल`], 
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
         शहर, संज्ञा` ,
         
         `सुंदर, विशेषण
         वह, सर्वनाम
         चिकित्सक, संज्ञा
         तैयारी, क्रिया` 
        ]
      },
      {
      type: 'fillupOptions',
      id: 'fillup',
      label: 'सही विकल्प चुनें।',
      commonData: {
        title: 'संज्ञा, सर्वनाम, क्रिया या विशेषण के रूप में पहचानें।'
      },
      data: [
        `मैं भारत में रहता हूँ। इस वाक्य में ‘रहता’ एक *क्रिया (विशेषण, संज्ञा)* है।
मैं दीपक हूं। इस वाक्य में ‘मैं’ एक *सवर्नाम (संज्ञा, विशेषण)* है।
बच्चा फल खा रहा है।इस वाक्य में ‘फल’ एक *संज्ञा (क्रिया, विशेषण )* है।
आसमान का रंग नीला है।इस वाक्य में ‘नीला’ एक *विशेषण (सवर्नाम, संज्ञा)* है।
कौआ काला होता है।इस वाक्य में ‘काला’ एक *विशेषण (सवर्नाम, संज्ञा )* है।`,

        `तुम बच्चे हो। इस वाक्य में ‘तुम’ एक *सवर्नाम (संज्ञा, विशेषण)* है।
आप कब खाना खाते हो? इस वाक्य में ‘खाते’ एक *क्रिया (विशेषण, संज्ञा)* है।
लड़की खेल रही है। इस वाक्य में ‘लड़की’ एक *संज्ञा (क्रिया, विशेषण )* है।
आप क्या पीयेंगे? इस वाक्य में ‘पीयेंगे’ एक *क्रिया (विशेषण, संज्ञा)* है।
मोहन एक अच्छा लड़का है।इस वाक्य में ‘अच्छा’ एक *विशेषण (सवर्नाम, संज्ञा)* है।`,

        `मैं हमेशा सच बोलती हूँ।  इस वाक्य में ‘बोलती’ एक *क्रिया (विशेषण, संज्ञा)* है।
मैंने सारा काम कर दिया है।इस वाक्य में ‘कर’ दिया एक *क्रिया (विशेषण, संज्ञा)* है।
वे नौ बच्चे हैं। इस वाक्य में ‘वे’ एक *सवर्नाम (संज्ञा, विशेषण)* है।
वह सुंदर है। इस वाक्य में ‘वह’ एक *सवर्नाम (संज्ञा, विशेषण)* है।
पंखा धीमे चल रहा है। इस वाक्य में ‘पंखा’ एक *संज्ञा (क्रिया, विशेषण)* है।`,

        `आप से मिलकर अच्छा लगा। इस वाक्य में ‘आप’ एक *सवर्नाम (संज्ञा, विशेषण)* है।
हम कल बस मैं चढ़े थे।  इस वाक्य में ‘बस’ एक *संज्ञा (क्रिया, विशेषण)* है।
दिल्ली जाने के लिए रेलगाड़ी परसों मिलेगी। इस वाक्य में ‘दिल्ली’ एक *संज्ञा (क्रिया, विशेषण)* है।
टोकरी में मीठे संतरे हैं। इस वाक्य में ‘मीठे’ एक *विशेषण (सवर्नाम, संज्ञा)* है।
रीता सुंदर है। इस वाक्य में ‘सुंदर’ एक *विशेषण (सवर्नाम, संज्ञा)* है।`
      ]
      },
      {
        id: 'typesofnoun-hi',
        type: 'passage',
        label: 'संज्ञा के भेद',
        style: 'big',
        data: {
          title: 'संज्ञा के भेद',
          text: `१. जातिवाचक संज्ञा : जिस शब्द से किसी प्राणी या वस्तु की समस्त जाति का बोध होता है,उन शब्दों को जातिवाचक संज्ञा कहते हैं।

यथा- घोड़ा, फूल, मनुष्य,वृक्ष इत्यादि।

२. व्यक्तिवाचक संज्ञा : जिन शब्दों से किसी विशेष व्यक्ति, स्थान अथवा वस्तु के नाम का बोध हो, उसे व्यक्तिवाचक संज्ञा कहते हैं।

यथा- जयपुर, दिल्ली, भारत, रामायण, अमेरिका, राम इत्यादि।`
        }
      },
      {
        type: 'group',
        label: 'व्यक्तिवाचक संज्ञा vs जातिवाचक संज्ञा',
        id: 'typesofnoun1-hi',
        commonData: {
          title: 'व्यक्तिवाचक संज्ञा vs जातिवाचक संज्ञा',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['व्यक्तिवाचक संज्ञा`,`जातिवाचक संज्ञा']
        },
        data: [
          [`यमुना, मीणा, मुंबई, आगरा, दिल्ली`, `कुत्ता, बिल्ली, तोता, पशु , पहाड़`],
          [
            `राम, रामायण, गीता, मुंबई, प्रिया`,
            `नदी, झूला, घर, मकान, गांव `
          ]
        ]
      },
      {
        id: 'onewordsubstitution-hi',
        type: 'passage',
        label: 'अनेक शब्दों के लिए एक शब्द',
        style: 'big',
        data: {
          title: 'अनेक शब्दों के लिए एक शब्द',
          text: `भाषा में बहुत से ऐसे वाक्य होते हैं जो किसी एक शब्द को दर्शाते हैं अर्थात हम उस वाक्य के स्थान पर पूरा वाक्य न लिख कर एक शब्द लिख कर अपनी भाषा को और अधिक प्रभावशाली बना सकते हैं।`
        }
      },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-onewordsubstitution1',
      type: 'mcq',
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।'
      },
      data: [
        {
          questions: [
            {
              qText: 'मांस खाने वाला',
              options: 'मांसाहरी, शाकाहारी, रोगी'
            },
            {
              qText: 'भारत में रहने वाला',
              options: 'भारतीय, शहरी, विदेशी'
            },
            {
              qText: 'जो पढ़ा लिखा ना हो',
              options: 'अनपढ़, अनाथ, पाठक '
            },
            {
              qText: 'वर्ष में एक बार होने वाला ',
              options: 'वार्षिक, मासिक, साप्ताहिक'
            },
            {
              qText: 'दर्शन वाले लोग',
              options: 'दर्शक, दर्शनीय, ग्रामीण '
            }
          ]
        }
      ]
    },
  ]
};

    
  