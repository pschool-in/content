export default {
  label: 'व्याकरण 5',
  id: 'hi-grammar-5',
  img: 'langGrammar',
  lang: 'hi',
  list: [
    {
      id: 'onewordmanymeanings-hi',
      type: 'passage',
      label: 'अनेकार्थक शब्द',
      style: 'big',
      data: {
        title: 'अनेकार्थक शब्द',
        text: `हर भाषा में कुछ ऐसी शब्द होते है जिनके एक से अधिक अर्थ निकलते है ।ये अलग - अलग अवसरों में, वाक्यों के साथ मिलकर अलग - अलग अर्थ देते है |`
      }
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-onewordmanymeanings1',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'पत्र के अनेकार्थक शब्द',
            options: 'चिट्ठी, पत्र, अमृत'
          },
          {
            qText: 'पय के अनेकार्थक शब्द',
            options: 'बादल, दूध, दशा'
          },
          {
            qText: 'पतंग के अनेकार्थक शब्द',
            options: 'उड़ाई जाने वाली पतंग, राय, सिक्का'
          },
          {
            qText: 'मुद्रा के अनेकार्थक शब्द',
            options: 'मुख का भाव, सिक्का, गति'
          }
        ]
      }
    },
    {
      id: 'tatsamandtadbhavshabd-hi',
      type: 'passage',
      label: 'तत्सम और तद्भव शब्द',
      style: 'big',
      data: {
        title: 'तत्सम और तद्भव शब्द',
        text: `संस्कृत भाषा के वे शब्द जो बिना किसी परिवर्तन के हिंदी भाषा में बोले जाते है तत्सम शब्द कहलाते है जैसे- सूर्य, अग्नि, मयूर आदि ।
संस्कृत भाषा के जो शब्द हिंदी में विकृत रूप में प्रयोग होते है उन्हें तदभव् शब्द कहते है जैसे- सूरज (सूर्य), चाँद (चंद्र) आदि ।`
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
        `दूर्वा, दूब
मुख, मुँह
नयन, नैन
गृह, घर
हास्य, हँसी`,

        `कदली, केला
अमूल्य, अमोल
घृत, घी
वानर, बन्दर
दीपावली, दीवाली`,

        `भिक्षुक, भिखारी
स्वर्ण, सोना
पत्र, पत्ता
ग्राम, गाँव
पक्षी, पंछी
घोटक, घोड़ा`,

        `कर्म, काम
कुपुत्र, कपूत
मक्षिका, मक्खी
मस्तक, माथा
नृत्य, नाच`,

        `अक्षि, आँख
किरण, किरन
आश्चर्य, अचरज
निद्रा, नींद
लौह, लोहा`
      ]
    },
    {
      id: 'homonyms-hi',
      type: 'passage',
      label: 'श्रुतिसमभिन्नार्थक शब्द ',
      style: 'big',
      data: {
        title: 'श्रुतिसमभिन्नार्थक शब्द ',
        text: `जो शब्द सुनने और उच्चारण करने में समान प्रतीत हों, किन्तु उनके अर्थ भिन्न -भिन्न हों, वे श्रुतिसमभिन्नार्थक / समोच्चरित शब्द कहलाते हैं।`
      }
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-homonyms1',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'अन्न का अर्थ',
            options: 'अनाज, दूसरा, दुख'
          },
          {
            qText: 'अणु का अर्थ  ',
            options: 'कण, पीछे, खज़ाना'
          },
          {
            qText: 'दशा का अर्थ',
            options: 'हालत, तरफ़, नतीजा'
          },
          {
            qText: 'शोक का अर्थ',
            options: 'दुख, चाव, तरफ'
          },
          {
            qText: 'दिशा का अर्थ',
            options: 'तरफ़, हालत, चाव'
          },
          {
            qText: 'अन्य का अर्थ ',
            options: 'दूसरा, मात्रा, अनाज'
          }
        ]
      }
    },
    {
      id: 'typesofnoun-hi',
      type: 'passage',
      label: 'संज्ञा के भेद',
      style: 'big',
      data: {
        title: 'संज्ञा के भेद',
        text: `१ . समूहवाचक संज्ञा : जब किसी संज्ञा शब्द से व्यक्ति या वस्तु के समूह का बोध होता है तब उसे समूहवाचक संज्ञा कहते हैं।
यथा- परिवार, कक्षा, सेना, भीड़, पुलिस आदि।
२. द्रव्यवाचक संज्ञा : जब किसी संज्ञा शब्द से किसी द्रव्य का बोध हो तो उसे द्रव्यवाचक संज्ञा कहते हैं।
यथा- पानी, लोहा, तेल, घी, दाल, इत्यादि।
३. जातिवाचक संज्ञा : जिस शब्द से किसी प्राणी या वस्तु की समस्त जाति का बोध होता है,उन शब्दों को जातिवाचक संज्ञा कहते हैं।
यथा- घोड़ा, फूल, मनुष्य,वृक्ष इत्यादि।
४. व्यक्तिवाचक संज्ञा : जिन शब्दों से किसी विशेष व्यक्ति, स्थान अथवा वस्तु के नाम का बोध हो, उसे व्यक्तिवाचक संज्ञा कहते हैं।
यथा- जयपुर, दिल्ली, भारत, रामायण, अमेरिका, राम इत्यादि।
५. भाववाचक संज्ञा : जिस संज्ञा शब्द से पदार्थों की अवस्था, गुण-दोष, भाव या दशा, धर्म आदि का बोध हो उसे भाववाचक संज्ञा कहते हैं।
यथा- बुढ़ापा, मिठास, बचपन, मोटापा, चढ़ाई, थकावट आदि।`
      }
    },
    {
      label: 'द्रव्यवाचक संज्ञा vs समुदायवाचक संज्ञा',
      id: 'hi-typesofnoun1',
      type: 'group',
      data: {
        title: 'द्रव्यवाचक संज्ञा और समुदायवाचक संज्ञा को वर्गीकृत करें ।',
        types: [
          {
            name: 'द्रव्यवाचक संज्ञा',
            text: 'पानी, लोहा, तेल, घी, दाल'
          },
          {
            name: 'समुदायवाचक संज्ञा',
            text: 'परिवार, कक्षा, सेना, भीड़, पुलिस'
          }
        ]
      }
    },
    {
      label: 'खाली स्थान में उचित संज्ञा लिखिए।',
      type: 'matchByDragDrop',
      id: 'hi-typesofnoun2',
      data: {
        title:
          'दिए गए शब्दों में से सही द्रव्यवाचक संज्ञा चुनकर वाक्य पूरी करो।',
        text: `एक किलो *तेल* लेकर आओ।
मुझे *दाल* पसंद है।
मुझे *चांदी* के आभूषण बहुत पसंद हैं।
*दूध* पीने से ताकत बढ़ती है।
कोहिनूर *हीरा* सबसे महंगा है।
मुझे *फल* बहुत पसंद है।
*सोने* का रंग सुनहरा होता है।
*लोहा* बहुत महंगा हो रहा है।`
      }
    },
    {
      label: 'खाली स्थान में उचित संज्ञा लिखिए।',
      type: 'matchByDragDrop',
      id: 'hi-typesofnoun3',
      data: {
        title:
          'दिए गए शब्दों में से सही समुदायवाचक संज्ञा चुनकर वाक्य पूरी करो।',
        text: `भारतीय *सेना* दुनिया की सबसे बड़ी सेना है।
कल बस स्टैंड पर *भीड़* जमा हो गयी।
मेरे *परिवार* में चार सदस्य हैं।
हाथी हमेशा *झुण्ड* में सफर करते हैं।
मुझे एक *दर्जन* केले खरीदने हैं।
मेरी पूरी *कक्षा* के विद्यार्थी घूमने जा रहे हैं।
मैंने अपने दोस्त को जन्मदिन पर फूलो का *गुलदस्ता* दिया।`
      }
    },
    {
      id: 'typesofverb-hi',
      type: 'passage',
      label: 'क्रिया के भेद',
      style: 'big',
      data: {
        title: 'क्रिया के भेद',
        text: `वाक्यों में प्रयोग के आधार पर क्रिया को मुख्य रूप से दो भागो में बांटा गया है जो है।
१. मुख्य क्रिया : मुख्य क्रिया दो प्रकार के होते है - सकर्मक क्रिया और अकर्मक क्रिया।जो क्रिया कर्म के साथ आती है, उसे सकर्मक क्रिया कहते हैं। जैसे: विकास पानी पीता है। इसमें पीता है (क्रिया) का फल कर्ता पर ना पडके कर्म पानी पर पड़ रहा है। अकर्मक क्रिया के साथ कर्म नहीं होता तथा उसका फल कर्ता पर पड़ता है। जैसे : श्याम पढता है। इस वाक्य में पढने का फल श्याम पर ही पड़ रहा है।
२. सहायक क्रिया : जो क्रिया मुख्य क्रिया की सहायता करती है, वह सहायक क्रिया कहलाती है|`
      }
    },
    {
      label: 'अकर्मक क्रिया और सकर्मक क्रिया',
      id: 'types-verbs-2',
      type: 'classifySentence',
      lockAfter: 1,
      commonData: {
        title: 'अकर्मक क्रिया और सकर्मक क्रिया को वर्गीकृत करें।',
        types: ['अकर्मक क्रिया', 'सकर्मक क्रिया']
      },
      data: [
        [
          `रमेश पढ़ता है। 
राजेश दौड़ता है। 
सांप रेंगता है।  
पूजा हंसती है। 
मेघनाथ चिल्लाता है।`,

          `राम खाना खाता है। 
बच्चे ने खिलौने तोड़ दिए। 
वह सायकिल से स्कूल जाता है। 
वह सड़क पर बहुत तेज दौड़ता है। 
हरीश फुटबॉल खेलता है।`
        ],
        [
          `रावण लजाता है।
राम बचाता है। 
सीता रोती है। 
आशीष खाता है। 
मनीष सुनाता है। `,

          `मनीषा खाना पकाती है। 
आतंकी गाडी चलाता है।
पुष्प कलि को बुलाता है। 
रमा चटनी बनाती है।
रवीश हिंदी बोलता है। `
        ],
        [
          `छिपकली कूदती है। 
पक्षी उड़ता है। 
शक्तिमान उड़ता है। 
वह बहुत तेज दौड़ता है। 
रमेश स्कूल जाता है। 
मनीष सुबह जल्दी उठता है। 
सुहानी रोज स्नान करती है।`,
          `अंकुश शरीर खुजलाता है। 
पिंकू संतरा खाता है। 
महेश शिकार करता है। 
मोहन खाना खायेगा। 
सीता खाना पकाएगी। `
        ],
        [
          `वह दिन भर गाता रहता है। 
आकाश दिन भर खेलता रहता है। 
माया सारा दिन सोती रहती है।
अखिलेश चिल्लाता है। 
अखिलेश चिल्लाता है।`,

          `राधा सब्जी बनाती है। 
रमेश सामान लाता है। 
हनुमान सीता को लाएगा। 
राम रावण को मारता है। `
        ]
      ]
    },
    {
      id: 'verb-types-3',
      label: 'वर्तमान, भविष्य और भूत काल',
      type: 'classifySentence',
      data: {
        title: 'वर्तमान, भविष्य और भूत काल को वर्गीकृत करें।',
        types: [
          {
            name: 'वर्तमान ',
            text: `मैं सुबह से संस्कृत सीख रहा हूँ।
वह हँस रहा है। 
वह कमरा साफ़ कर रहा है।
वह बात नहीं करता है। `
          },
          {
            name: 'भविष्य',
            text: `पिताजी मंदिर नहीं जाएंगे।
मैं कल उसकी मदद करूँगा।`
          },
          {
            name: 'भूत',
            text: `उसने हवाई जहाज़ उड़ाया था। 
रमेश कार नहीं चला रहा था।        
कल पूजा विद्यालय गई थी। 
वह पत्र लिख चुका था।`
          }
        ]
      }
    },
    {
      id: 'typesofpronoun-hi',
      type: 'passage',
      label: 'सर्वनाम के भेद',
      style: 'big',
      data: {
        title: 'सर्वनाम के भेद',
        text: `सर्वनाम के पांच भेद होते हैं
१. पुरुषवाचक सर्वनाम : जिन सर्वनाम शब्दों का प्रयोग वक्ता द्वारा खुद के लिए या दुसरो के लिए किया जाता है,उसे पुरुषवाचक सर्वनाम कहते हैं। जैसे - मैं, हम (वक्ता द्वारा खुद के लिए), तुम और आप (सुनने वाले के लिए ) और यह, वह, ये, वे (किसी और के बारे में बात करने के लिए) आदि।
२. निजवाचक सर्वनाम: जिन शब्दों का प्रयोग वक्ता किसी चीज़ को अपने साथ दर्शाने या अपनी बताने के लिए करता है, वे निजवाचक सर्वनाम कहलाते हैं। जैसे: आप, स्वयं, खुद, अपना, हमारा इत्यादि।
३. निश्चयवाचक सर्वनाम :जिन सर्वनाम शब्दों से किसी वस्तु, व्यक्ति या स्थान की निश्चितता का बोध हो वे शब्द निश्चयवाचक सर्वनाम कहलाते हैं। जैसे- यह, ये, उस, इस, वे आदि।
४. अनिश्चयवाचक सर्वनाम : जिन सर्वनाम शब्दों से वस्तु, व्यक्ति, स्थान आदि की निश्चितता का बोध नही होता वे अनिश्चयवाचक सर्वनाम कहलाते हैं। जैसे कुछ, किसी, कोई आदि।
५. प्रश्नवाचक सर्वनाम : जिन शब्दों का प्रयोग किसी वस्तु, व्यक्ति आदि के बारे में कोई सवाल पूछने या उसके बारे में जान्ने के लिए किया जाता है उन शब्दों को प्रश्नवाचक सर्वनाम कहते हैं। प्रश्नवाचक सर्वनाम में किसका, किसकी, कौन, क्या, कहाँ आदि शब्द आते हैं।
६. सम्बन्धवाचक सर्वनामा : जिन सर्वनाम शब्दों का प्रयोग किसी वस्तु या व्यक्ति का सम्बन्ध बताने के लिए किया जाए, वे शब्द “सम्बन्धवाचक सर्वनाम” कहलाते हैं। जैसे- जैसे-जिसका, जो कि, जो-सो, जितना -उतना आदि।`
      }
    },
    {
      label: ' निश्चयवाचक सर्वनाम vs अनिश्चयवाचक सर्वनाम',
      id: 'hi-typesofpronoun1',
      type: 'group',
      data: {
        title: 'निश्चयवाचक सर्वनाम और अनिश्चयवाचक सर्वनाम को वर्गीकृत करें।',
        types: [
          {
            name: 'निश्चयवाचक सर्वनाम ',
            text: 'यह, वह, ये, वे'
          },
          {
            name: 'अनिश्चयवाचक सर्वनाम',
            text: 'कुछ, कोई, किसी'
          }
        ]
      }
    },
    {
      label: 'प्रश्नवाचक सर्वनाम vs सम्बन्धवाचक सर्वनाम',
      id: 'hi-typesofpronoun2',
      type: 'group',
      data: {
        title: 'प्रश्नवाचक सर्वनाम और सम्बन्धवाचक सर्वनाम को वर्गीकृत करें।',
        types: [
          {
            name: 'प्रश्नवाचक सर्वनाम',
            text: 'कौन, क्या, कब, कहाँ'
          },
          {
            name: 'सम्बन्धवाचक सर्वनाम',
            text: 'जो-सो, जैसा-वैसा'
          }
        ]
      }
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofpronoun3',
      data: {
        title:
          'दिए गए शब्दों में से सही निश्चयवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `*यह* कार मेरी है।
*वह* मोटरबाइक तुम्हारी है।
*ये* पुस्तकें मेरी हैं।
*वे* मिठाइयाँ  हैं।`
      }
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofpronoun4',
      data: {
        title:
          'दिए गए शब्दों में से सही अनिश्चयवाचक सर्वनाम या प्रश्नवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `मेरे खाने में *कुछ* गिर गया।
तुमसे *कोई* बात करना चाहता है।
*किसी* ने तुम्हारे लिए ये भेजा है।
देखो तो *कौन* आया है?
तुम बाज़ार से *क्या* लाये हो ?`
      }
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofpronoun5',
      data: {
        title:
          'दिए गए शब्दों में से सही सम्बन्धवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `जैसी करनी *वैसी* भरनी।
जो सोवेगा *सो* खोवेगा जो जागेगा सो पावेगा।
*जैसा* बोओगे वैसा काटोगे।
यह वही आदमी है, *जिसका* पुत्र परीक्षा में अव्वल आया है।
*जो* कल आएगा, सो इनाम पावेगा।
जो मेहनत करते हैं, *वे* सफल होते हैं।`
      }
    },
    {
      id: 'typesofadjective-hi',
      type: 'passage',
      label: 'विशेषण के भेद ',
      style: 'big',
      data: {
        title: 'विशेषण के भेद ',
        text: `१. गुणवाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम के गुण, रंग, रूप, अवस्था, आकार आदि का बोध कराते हैं, वे गुणवाचक विशेषण कहलाते हैं ।जैसे- अच्छा, बुरा, खराब, उदंड, काला आदि।
२. संख्यावाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम की संख्या का बोध कराते हैं, वे संख्यावाचक विशेषण कहलाते हैं । उदाहरण: चार, पांच, दौ गुना, पांच गुना आदि।
३. निश्चित संख्यावाचक विशेषण : जो शब्द किसी निश्चित संख्या का बोध कराते हैं, वे निश्चित संख्यावाचक विशेषण कहलाते हैं। जैसे : पहला, तीन, दो, सैकड़ो आदि।
४. अनिश्चित संख्यावाचक विशेषण : जो शब्द किसी निश्चित संख्या का बोध नहीं कराते हैं, वे अनिश्चित संख्यावाचक विशेषण कहलाते हैं ।जैसे : कुछ, कम, कई, बहुत-से, थोड़े, अनेक आदि।
५. परिमाणवाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम की परिमाण (माप, तौल )का बोध कराते हैं, वे परिमाणवाचक विशेषण कहलाते हैं ।उदाहरण: थोड़ा सा पानी, कुछ फल इत्यादि।
६. निश्चित परिमाणवाचक विशेषण : जो शब्द किसी निश्चित माप, तौल का बोध कराते हैं, वे निश्चित परिमाणवाचक विशेषण कहलाते हैं ।जैसे : एक किलो , सात मीटर, दो लीटर, दो सौ ग्राम आदि।
७. अनिश्चित परिमाणवाचक विशेषण : जो शब्द किसी निश्चित माप, तौल का बोध नहीं कराते हैं , वे अनिश्चित परिमाणवाचक विशेषण कहलाते हैं ।जैसे : थोड़ा सा दूध , कुछ फल , सब धन , बहुत पानी आदि।
८. संकेतवाचक विशेषण : जो सर्वनाम शब्द विशेषण के रूप में प्रयोग किए जाते हैं या किसी की और संकेत करते हैं, संकेतवाचक विशेषण कहलाते हैं ।उदाहरण: मेरी गाड़ी, मेरी कार, मेरा घर, वह बाइक, वह आदमी, वह लड़की, वह व्यक्ति, वह जानवर, किसी का घर इत्यादि।`
      }
    },
    {
      label: 'निश्चित संख्यावाचक विशेषण vs अनिश्चित संख्यावाचक विशेषण',
      id: 'hi-typesofadjective1',
      type: 'group',
      data: {
        title:
          'निश्चित संख्यावाचक विशेषण और अनिश्चित संख्यावाचक विशेषण को वर्गीकृत करें।',
        types: [
          {
            name: 'निश्चित संख्यावाचक विशेषण ',
            text: 'पहला, तीन, दो, सैकड़ो'
          },
          {
            name: 'अनिश्चित संख्यावाचक विशेषण',
            text: 'कुछ, कम, कई, बहुत-से, थोड़े, अनेक'
          }
        ]
      }
    },
    {
      label: 'निश्चित परिमाणवाचक विशेषण vs अनिश्चित परिमाणवाचक विशेषण',
      id: 'hi-typesofadjective2',
      type: 'group',
      data: {
        title:
          'निश्चित परिमाणवाचक विशेषण और अनिश्चित परिमाणवाचक विशेषण को वर्गीकृत करें ।',
        types: [
          {
            name: 'निश्चित परिमाणवाचक विशेषण',
            text: 'एक किलो, सात मीटर, दो लीटर, दो सौ ग्राम  '
          },
          {
            name: 'अनिश्चित परिमाणवाचक विशेषण',
            text: 'थोड़ा सा, कुछ, सब, बहुत'
          }
        ]
      }
    },
    {
      label: 'खाली स्थान में उचित विशेषण लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofadjective3',
      data: {
        title:
          'दिए गए शब्दों में से सही परिमाणवाचक विशेषण चुनकर वाक्य पूरी करो।',
        text: `मेरी पेंट में *सवा मीटर* कपड़ा लगेगा।
मोबाइल की बैटरी *६ घंटा* चलेगी।
सफल होने के लिए *बहुत सारी* मेहनत करनी पड़ेगी।
वहां पर *बहुत सारे* मोबाइल पड़े हैं।
राधा ने कविता को *बहुत* समझाया।
यह कपड़ा *थोड़ा* छोटा है।
अमित *ज़रा सी* बात पर बिगड़ गया।`
      }
    },
    {
      id: 'tenses-hi',
      type: 'passage',
      label: 'काल  ',
      style: 'big',
      data: {
        title: 'काल',
        text: `काल का अर्थ होता है - समय। क्रिया के जिस रूप से कार्य के होने के समय का पता चले उसे काल कहते हैं।
१. भूतकाल : क्रिया के जिस रूप से बीते हुए समय का बोध हो या वाक्य में प्रयुक्त क्रिया के जिस रूप से बीते समय में (भूत) क्रिया का होना पाया जाता है। उसे हम भूतकाल कहते है। उदाहरण के लिए - रमेश पटना गया था।
२. वर्तमान काल : क्रिया के जिस रूप से यह पता चले की काम अभी हो रहा है, उसे वर्तमान काल कहते हैं। जिन वाक्यों के अंत में ता, ती, ते, है, हैं आते हैं, वो वर्तमान काल कहलाता है।
६. भविष्य काल : क्रिया के जिस रूप से क्रिया के आने वाले समय में पूरा होने का पता चले उसे भविष्य काल कहते हैं। जिन वाक्यों के अंत में गा, गे, गी आदि आते हैं वे भविष्य काल कहलाता है।`
      }
    },
    {
      label: 'वर्तमान, भविष्य और भूत काल',
      id: 'tense-types',
      type: 'classifySentence',
      lockAfter: 1,
      commonData: {
        title: 'वर्तमान, भविष्य और भूत काल को वर्गीकृत करें।',
        types: ['वर्तमान', 'भविष्य', 'भूत']
      },
      data: [
        [
          `मीरा सिलाई मशीन बेचती है। 
मुझे तुम पर भरोसा है। 
हम मांस खाते हैं।
यह अच्छा काम करता है।`,

          `राम गाना गाएगा ।
वह पत्र लिखेगा ।
मै बाजार जाऊँगा ।
मै खाना पकाऊँगा ।`,

          `हम रोज़ाना स्कूल जाते थे ।
मम्मी पूजा करती थी ।
पापा बाजार जाते थे ।
मै आधी रात को घर पंहुचा ।`
        ],
        [
          `हम आवारा बिल्लियों को खाना खिलाते हैं ।
मैं बहुत सपने देखता हूं ।
यह मुझे परेशान करता है ।
मैं हर रात खाना बनाती हूं ।`,

          `वह अगले महीने आएगा ।
तुम सोमवार को विद्यालय जाओगे ।
वह गरीबों की मदद करेगा ।
यह लड़का हमें कल पैसा देगा ।`,

          `पिताजी कहाँ गये ।
मै मंदिर जाता था ।
सीता गाना गाती थी ।
वह आज स्कूल नहीं गई ।`
        ],
        [
          `वह मेरी सुनता है।
मैं अकेले यात्रा करता हूं ।
वह आपको जानती है।
वह हर समय छींकता है । `,

          ` वह कल शादी में आएगा ।
जतिन बस से आएगा ।
मै तुम्हे मार दूंगा ।
हम आपको अवस्य मिलेंगे ।`,

          `अभी तक सूरज नहीं निकला ।
बन्दर पेड से कूदा ।
बिल्ली सडक पर दौडी ।
शीला अभी तक नहीं आयी ।`
        ],
        [
          `इसकी खुशबू अच्छी है ।
मैं अपना पाठ याद नहीं करता हूँ ।
सीता मधुर गाना गाती है ।
हम अपनी किताबे नहीं पड़ते हैं ।`,

          ` वे बगीचे में खेलेंगे ।
हम कल आगरा जाएंगे ।
वह इस समस्या का हल जरूर करेगा ।
राम गाना गाएगा ।`,

          `पुलिस ने चोर को पकड़ा ।
मैंने उसे नहीं देखा ।
राम कहाँ पढ़ने गया था ।
रज़िया स्कूल गयी ।`
        ],
        [
          `वह कभी झूठ नहीं बोलता है ।
राष्ट्रपति ने लाल किले पर झण्डा फहराया । 
राम जाता है ।
नदियाँ समुद्र में बहती हैं ।
तुम नींद में चलते हो ।`,

          `वह पत्र लिखेगा ।
चपरासी कमरा साफ़ करेगा ।
वे बाजार से फल खरीदेंगे ।
रेखा तुम्हे पैसे नहीं देगी ।`,

          `तुम स्कूल क्यो नहीं गये थे ।
मोहन ने क्या खरीदा ।`
        ],
        [
          `तुम सब बुरा खेलते हो ।
मेरी माँ रोज मंदिर जाती हैं ।
सोनू गंगा नदी के पास रहता है ।
वह प्रतिदिन सुबह दौड़ के लिए जाता हैं ।
रमेश फूटबोल खेलता है ।`,

          `सीमा अपनी सहेली से मिलने नहीं जाएगी ।
हम अपना समय नष्ट नहीं करेंगे ।
हम कल मिलेंगे ।`,

          `मै कल बनारस गया था ।
आज सुबह बहुत तेज से बारिश हुई थी ।`
        ]
      ]
    },
    {
      id: 'true-false1',
      label: 'भूतकाल',
      type: 'classifySentence',
      data: {
        title: 'सही गलत',
        types: [
          {
            name: ' सही',
            text: `वह सामाचार देख रहा था। 
क्या तुमने रोटी खाई थी?
वह बाजार गया।
पहले मैं लखनऊ में पढ़ता था। `
          },
          {
            name: 'गलत',
            text: `तुम एक किताब पढ़ोगे। 
हम कल स्कूल जायेंगे। 
मुझे तुम पर भरोसा है।`
          }
        ]
      }
    },
    {
      id: 'true-false2',
      label: 'वर्तमान',
      type: 'classifySentence',
      data: {
        title: 'सही गलत',
        types: [
          {
            name: ' सही',
            text: `मैं रोज़ क्रिकेट खेलती हूँ। 
बारिश हो रही है। 
रानी मुझे परेशान करती है। 
मैं सपने देखता हूँ। `
          },
          {
            name: 'गलत',
            text: `वह जयपुर गया। 
मैं आलू खरीदने जाऊँगी। 
मैंने मुर्गी खरीदी। `
          }
        ]
      }
    },
    {
      id: 'true-false3',
      label: 'भविष्यकाल',
      type: 'classifySentence',
      data: {
        title: 'सही गलत',
        types: [
          {
            name: ' सही',
            text: `मैं पत्र लिखूँगी। 
पूजा कल मुंबई जाएगी। 
खाना कुछ देर में बन जाएगा। `
          },
          {
            name: 'गलत',
            text: `मैं खुश हूँ। 
वह नाश्ता कर रही है। 
मैं विद्यालय जा रही हूँ। 
मैंने नई गाड़ी खरीदी।`
          }
        ]
      }
    }
  ]
};
