export default {
  label: 'व्याकरण 4',
  id: 'hi-grammar-4',
  img: 'langGrammar',
  lang: 'hi',
  list: [
    {
      id: 'typesofpronoun-hi',
      type: 'passage',
      label: 'सर्वनाम के भेद',
      style: 'big',
      data: {
        title: 'सर्वनाम के भेद',
        text: `सर्वनाम के पाँच भेद होते हैं
१. पुरुषवाचक सर्वनाम : जिन सर्वनाम शब्दों का प्रयोग वक्ता द्वारा खुद के लिए या दुसरो के लिए किया जाता है,उसे पुरुषवाचक सर्वनाम कहते हैं। जैसे – मैं, हम (वक्ता द्वारा खुद के लिए), तुम और आप (सुनने वाले के लिए ) और यह, वह, ये, वे (किसी और के बारे में बात करने के लिए) आदि।
२. निजवाचक सर्वनाम: जिन शब्दों का प्रयोग वक्ता किसी चीज़ को अपने साथ दर्शाने या अपनी बताने के लिए करता है, वे निजवाचक सर्वनाम कहलाते हैं। जैसे: आप, स्वयं, खुद, अपना, हमारा इत्यादि।
३. निश्चयवाचक सर्वनाम :जिन सर्वनाम शब्दों से किसी वस्तु, व्यक्ति या स्थान की निश्चितता का बोध हो वे शब्द निश्चयवाचक सर्वनाम कहलाते हैं। जैसे- यह, ये, उस, इस, वे आदि।
४. अनिश्चयवाचक सर्वनाम : जिन सर्वनाम शब्दों से वस्तु, व्यक्ति, स्थान आदि की निश्चितता का बोध नही होता वे अनिश्चयवाचक सर्वनाम कहलाते हैं। जैसे कुछ, किसी, कोई आदि।
५. प्रश्नवाचक सर्वनाम : जिन शब्दों का प्रयोग किसी वस्तु, व्यक्ति आदि के बारे में कोई सवाल पूछने या उसके बारे में जान्ने के लिए किया जाता है उन शब्दों को प्रश्नवाचक सर्वनाम कहते हैं। प्रश्नवाचक सर्वनाम में किसका, किसकी, कौन, क्या, कहाँ आदि शब्द आते हैं।
६. सम्बन्धवाचक सर्वनामा : जिन सर्वनाम शब्दों का प्रयोग किसी वस्तु या व्यक्ति का सम्बन्ध बताने के लिए किया जाए, वे शब्द “सम्बन्धवाचक सर्वनाम” कहलाते हैं। जैसे- जैसे-जिसका, जो कि, जो-सो, जितना -उतना आदि।`
      }
    },
    {
      type: 'group',
      label: 'पुरुषवाचक सर्वनाम vs निजवाचक सर्वनाम',
      id: 'typesofpronoun1-hi',
      commonData: {
        title: 'पुरुषवाचक सर्वनाम और निजवाचक सर्वनाम को वर्गीकृत करें।',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['पुरुषवाचक सर्वनाम', 'निजवाचक सर्वनाम']
      },
      data: [
        [`मैं, मेरे, मुझे, मुझको `, `स्वयं, अपने आप, मेरा, मेरी`],
        [
          ` तेरे, तेरी, तुम, तुम्हे, तुमको, तुम्हारा `,
          `स्वयं, अपने आप, मेरा, मेरी`
        ]
      ]
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofpronoun2',
      data: {
        title:
          'दिए गए शब्दों में से सही पुरुषवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `*मैं* घर जाना चाहती हूँ।
*आप* कहते हैं तो ठीक ही होगा।
*तुम* जब तक आये तब तक वह चला गया।
*वह* पढने में बहुत तेज है।
*यह* व्यक्ति विश्वसनीय नहीं है।`
      }
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofpronoun3',
      data: {
        title: 'दिए गए शब्दों में से सही निजवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `मैं अपने कपडे *स्वयं* धो लूँगा।
मैं वहाँ अपने *आप* चला जाऊँगा।
*मैं* सुबह जल्दी उठता हूँ।
अपने देश की सेवा करना ही *मेरा* लक्षय है।
वहाँ जो गाडी खड़ी है वह *मेरी* है।`
      }
    },
    {
      id: 'typesofadjective-hi',
      type: 'passage',
      label: 'विशेषण के भेद ',
      style: 'big',
      data: {
        title: 'विशेषण के भेद ',
        text: `१. गुणवाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम के गुण, रंग, रूप, अवस्था, आकार आदि का बोध कराते हैं, वे गुणवाचक विशेषण कहलाते हैं | जैसे- अच्छा, बुरा, खराब, उदंड, काला आदि।
२. संख्यावाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम की संख्या का बोध कराते हैं, वे संख्यावाचक विशेषण कहलाते हैं | उदाहरण: चार, पाँच, दौ गुना, पाँच गुना आदि।
३. परिमाणवाचक विशेषण : जो शब्द संज्ञा अथवा सर्वनाम की परिमाण (माप, तौल )का बोध कराते हैं, वे परिमाणवाचक विशेषण कहलाते हैं | उदाहरण: थोड़ा सा पानी, कुछ फल इत्यादि।
४. संकेतवाचक विशेषण : जो सर्वनाम शब्द विशेषण के रूप में प्रयोग किए जाते हैं या किसी की और संकेत करते हैं, संकेतवाचक विशेषण कहलाते हैं | उदाहरण: मेरी गाड़ी, मेरी कार, मेरा घर, वह बाइक, वह आदमी, वह लड़की, वह व्यक्ति, वह जानवर, किसी का घर इत्यादि। `
      }
    },
    {
      label: 'गुणवाचक विशेषण vs संख्यावाचक विशेषण',
      id: 'hi-typesofadjective1',
      type: 'group',
      data: {
        title: 'गुणवाचक विशेषण और संख्यावाचक विशेषण को वर्गीकृत करें ।',
        types: [
          {
            name: 'गुणवाचक विशेषण ',
            text: 'भला, बुरा, लाल, सुंदर, दुबला'
          },
          {
            name: 'संख्यावाचक विशेषण',
            text: 'चार, प्रतिदिन, प्रथम, दोनों, सभी'
          }
        ]
      }
    },
    {
      label: 'परिमाणवाचक विशेषण vs संकेतवाचक विशेषण',
      id: 'hi-typesofadjective2',
      type: 'group',
      data: {
        title: 'परिमाणवाचक विशेषण और संकेतवाचक विशेषण को वर्गीकृत करें ।',
        types: [
          {
            name: 'परिमाणवाचक विशेषण',
            text: 'एक किलो, सात मीटर, दो लीटर, थोड़ा, कुछ'
          },
          {
            name: 'संकेतवाचक विशेषण',
            text: 'आदमी, वे पौधे, वे लोग, वह लड़का'
          }
        ]
      }
    },
    {
      label: 'खाली स्थान में उचित विशेषण लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofadjective3',
      data: {
        title: 'दिए गए शब्दों में से सही गुणवाचक विशेषण चुनकर वाक्य पूरी करो।',
        text: `मोहन एक *ईमानदार* लड़का है।
भोजन में *बदबू* आ रही है।
आज मौसम बहुत *ठंडा* है।
अंगूर बहुत *मीठे* हैं।
राम बहुत *बलवान* है।`
      }
    },
    {
      label: 'खाली स्थान में उचित विशेषण लिखिए। ',
      type: 'matchByDragDrop',
      id: 'hi-typesofadjective4',
      data: {
        title:
          'दिए गए शब्दों में से सही संख्यावाचक विशेषण या परिमाणवाचक विशेषण चुनकर वाक्य पूरी करो।',
        text: `कल मेरे *दो* मित्र घर आए थे।
जयपुर *बहुत सारे* लोग आते हैं।
मुझे *थोड़ा* दूध चाहिए, बच्चे भूखे हैं।
*चुल्लूभर* पानी में डूब मरो।
जाओ जाकर दर्जी से *दो मीटर* कपड़ा लेकर आओ।`
      }
    },
    {
      label: 'खाली स्थान में उचित विशेषण लिखिए। ',
      type: 'matchByDragDrop',
      id: 'typesofadjective-5',
      data: {
        title:
          'दिए गए शब्दों में से सही संकेतवाचक विशेषण चुनकर वाक्य पूरी करो।',
        text: `*यह* मेरी मेज है।
*उस* बाइक को हाथ मत लगाओ।
*वह* घोड़ा मेरा है।
*इस* कुर्सी पर सामान ना रखें।`
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
    }
  ]
};
