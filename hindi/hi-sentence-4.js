export default {
  label: 'वाक्य 2',
  id: 'hi-sentence-4',
  img: 'sentence',
  lockAfter: 3,
  list: [
    {
      id: 'form-sentence',
      label: 'सही वाक्य बनाओ',
      type: 'sequence',
      commonData: {
        title: 'अर्थपूर्ण वाक्य बनाने के लिए शब्दों को जोड़िए',
        lang: 'hi'
      },
      data: [
        `उसे पैसों की ज़रूरत है।
मुझे इतिहास पसंद है।
मुझे यह कुत्ता अच्छा लगता है।
मैं वापस आऊँगा।
मैं घर पर ही रहूँगा।
मैं बहुत थक गया हूँ। 
आज मौसम बहुत गरम है।`,

        `बिस्तर पर चादर बिछा दो।
दीवार पर सहारा मत लो।
दिमाग से काम लो।
समझने की कोशिश करो।
वह भागते हुए आया।
वह बीमार नहीं हो सकता।
उसने टोपी पहनी हुई है। `
      ]
    },
    {
      type: 'fillup',
      id: 'fillup10',
      label: 'है,हूँ,हो का प्रयोग',
      data: {
        title: 'शुद्ध शब्द को रिक्त स्थान में भरो (है, हूँ, हो)',
        text: `मैं राजा *हूँ (है)*|
तुम क्या करते *हो (हूँ)*|
तुम्हारा नाम क्या *है (हूँ)*|
तुम घर में *हो (हूँ)*|
क्या में यह खा सकता *हूँ (है)*?
यह मेरा खेत *है (हूँ)*|
क्या तुम कल आ सकते *हो (हूँ)* ?`
      }
    },
    {
      type: 'fillup',
      id: 'fillup',
      label: 'खाली स्थान भरो',
      commonData: {
        title: 'खाली स्थान भरो'
      },
      data: [
        `राम एक *लड़का (लड़क)* है
राधा एक *लड़की (लड़का)*  है |
आम एक *फल (सब्जी, मिठाई)* है |
आलू एक *सब्जी (अनाज, फल)* है |
गेहूं एक *अनाज (फल, सब्जी)* है |
कुत्ता एक *पालतू (जंगली, खतरनाक)* जानवर है |
गाय *दूध (अनाज, पानी)* देती है |
शेर *जंगल (गाँव, घर)* में रहता है |
शेर *मांस (घास, कीड़े मकोड़े)* खाता है |
जलेबी का स्वाद *मीठा (खट्टा, तीखा)* होता है |`,

        `हमारे हाथ में *१० (१२, १३)* अंगुलियां होती है |
घोड़े के *४ (५, २)* पैर होते है |
गुलाब एक *फूल (अनाज, घास)* है |
गुलाब जामुन एक *मिठाई (दवाई, फल)* है |
साबुन *नहाने (खाने, खेलने)* के काम आता है |
दूध *सफेद (लाल, पील)* रंग का होता है |
हाथी एक *बड़ा (छोटा)* जानवर है |
कौआ *काला (सफेद, लाल)* होता है |
तोता एक *पालतू (जंगली, खतरनाक)* पक्षी है |
मंदिर में *पूजा (खेल, काम)* होती है |`,

        `मछली *पानी (जंगल, घर)* में रहती है |
कोयल की आवाज *मीठी (कर्कश, भारी)* होती है |
कछुए की चाल *धीमी (तेज)* होती है |
हमारे मुँह में *३२ (२०, २४)* दाँत होते है |
बरसात के मौसम में *बारिश (ठण्ड, गर्मी)* होती है |
डॉक्टर हमें *दवाई (मिठाई, खिलोने)* देते है |
बिल्ली *म्याऊ म्याऊ (भौ भौ)* बोलती है |
सांप *जहरीला (पालतू)* होता है |
जंगल का राजा *शेर (हाथी, बाघ)* होता है |
भारत का राष्ट्रीय पक्षी *मोर (कौआ, कबूतर)* है |`,

        `भारत के झंडे को *तिरंगा (झंडा, श्वेत पताका)* कहते है |
इंडिया गेट *दिल्ली (मुंबई, कलकत्ता)* में स्थित है |
भारत की राजधानी *दिल्ली (चंडीगढ़, जम्मू)* है |
हवा महल *जयपुर (हैदराबाद, बैंगलोर)* में स्थित है |
जहाज उड़ाने वाले को *पायलट (ड्राइवर, पुजारी)* कहते है |
ट्रेन *लोहे (लकड़ी, सोना)* की पटरी पर दौड़ती है |
हम पढ़ने के लिए *स्कूल (मंदिर, बाजार)* जाते है |
हर एक गांव का एक *मुखिया (चेयरमैन, कलेक्टर)* होता है |
गाय की *एक (दो, तीन)* पूंछ होती है |
रेगिस्तान का जहाज *ऊंट ((बैल, शेर)* को कहते है |`
      ]
    },
    {
      label: 'खाली स्थान में उचित संज्ञा लिखिए।',
      type: 'matchByDragDrop',
      id: 'noun',
      lockAfter: 2,
      data: [
        {
          title:
            'दिए गए शब्दों में से सही व्यक्तिवाचक संज्ञा चुनकर वाक्य पूरी करो।',
          text: `*रमेश* बाहर खेल रहा है।
*महेंद्र सिंह धोनी* क्रिकेट खेलते हैं।
मैं *भारत* में रहता हूँ।
*अमिताभ बच्चन* कलाकार हैं।
*अंग्रेजी* दुनिया में सबसे ज़्यादा बोली जाने वाली भाषा है।`
        },
        {
          title:
            'दिए गए शब्दों में से सही जातिवाचक संज्ञा चुनकर वाक्य पूरी करो।',
          text: `स्कूल में *बच्चे* पढ़ते हैं।
बिल्ली *चूहे* खाती है।
पेड़ों पर *पक्षी* बैठे हैं
हिरन का *शेर* शिकार करते हैं।
सड़क पर *गाड़ियां* चलती हैं।`
        },
        {
          title:
            'दिए गए शब्दों में से सही भाववाचक संज्ञा चुनकर वाक्य पूरी करो।',
          text: `ज्यादा दौड़ने से मुझे *थकान* हो जाती है।
लगातार परिश्रम करने से *सफलता* मिलेगी।
तुम्हारी आवाज़ में बहुत *मिठास* है।
मुझे तुम्हारी आँखों में *क्रोध* नज़र आता है।`
        },
        {
          title:
            'दिए गए शब्दों में से सही व्यक्तिवाचक संज्ञा चुनकर वाक्य पूरी करो।',
          text: `जंगले का राजा *शेर* है। 
फूल पर *तितली* बैठी है। 
मोहन का *घर* है। 
पिताजी बाज़ार से *फल* लाए है। 
बगीचे में *बच्चे* खेल रहे है। `
        },
        {
          title:
            'दिए गए शब्दों में से सही व्यक्तिवाचक संज्ञा चुनकर वाक्य पूरी करो।',
          text: `रमेश *पतंग* उड़ा रहा है। 
*आसमान* नीला है। 
तालाब में *मछली* तैर रही है। 
*कोयल* गाना गा रही है। 
लालकिला *दिल्ली* में है। `
        }
      ]
    },
    {
      label: 'खाली स्थान में उचित सर्वनाम लिखिए।',
      type: 'matchByDragDrop',
      id: 'pronoun',
      data: [
        {
          title:
            'दिए गए शब्दों में से सही पुरुषवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
          text: `*मैं* घर जाना चाहती हूँ।
*आप* कहते हैं तो ठीक ही होगा।
*तुम* जब तक आये तब तक वह चला गया।
*वह* पढने में बहुत तेज है।
*यह* व्यक्ति विश्वसनीय नहीं है।`
        },
        {
          title:
            'दिए गए शब्दों में से सही निजवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
          text: `रवि *मेरा (उसने)* दोस्त है। 
*वह (उसका)* ठीक समय पर स्कूल जाता है। 
अध्यापक *उसे (उसने)* पसंद करते है। 
*उसके (वह)* पिता इंजिनियर हैं। 
*उसकी (मैं)* माँ डॉक्टर हैं। `
        },
        {
          title:
            'दिए गए शब्दों में से सही निजवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
          text: `*उसका (उन्होंने)* घर बहुत बड़ा है। 
*हम (तुम)* कल दिल्ली जाएँगे। 
अभी *मुझे (उसने)* बाज़ार जाना है। 
*मैं (आप)* सिनेमा देख रहा हूँ। 
*तुम (हम)* क्या कर रहे हो ?`
        },
        {
          title:
            'दिए गए शब्दों में से सही निजवाचक सर्वनाम चुनकर वाक्य पूरी करो।',
          text: `मैं अपने कपडे *स्वयं* धो लूँगा।
मैं वहाँ अपने *आप* चला जाऊँगा। 
*मैं* सुबह जल्दी उठता हूँ।
अपने देश की सेवा करना ही *मेरा* लक्षय है।
वहाँ जो गाडी खड़ी है वह *मेरी* है।`
        }
      ]
    },
    {
      label: 'खाली स्थान में उचित विशेषण लिखिए',
      type: 'matchByDragDrop',
      id: 'adjective',
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
      label: 'खाली स्थान में उचित विशेषण लिखिए',
      type: 'matchByDragDrop',
      id: 'adjective-2',
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
      label: 'खाली स्थान में उचित विशेषण लिखिए',
      type: 'matchByDragDrop',
      id: 'adjective-3',
      data: {
        title:
          'दिए गए शब्दों में से सही संकेतवाचक विशेषण चुनकर वाक्य पूरी करो।',
        text: `*यह* मेरी मेज है।
*उस* बाइक को हाथ मत लगाओ।
*वह* घोड़ा मेरा है।`
      }
    },
    {
      label: 'विलोम शब्द से रिक्त स्थान की पूर्ति',
      type: 'matchByDragDrop',
      id: 'antonym-fill',
      data: {
        title: 'सही विलोम शब्द से रिक्त स्थानों की पूर्ति कीजिए।',
        text: `हमारे घर में लोगों का आना *जाना* लगा रेहता है। 
मेरा दोस्त रेस में जीत गया लेकिन मैं *हार* गया। 
राम धूप में खेलना पसंद करता है लेकिन गीता *छाँव* में खेलना पसंद करती है । 
मुझे कमरे के अंदर बंद करके वह *बाहर* चला गया।     
माँ केहती है की सभी में अच्छाई होती है और हमें किसी की *बुराई* नहीं करनी चाहिए। `
      }
    },
    {
      label: 'पर्यायवाची शब्द से रिक्त स्थान की पूर्ति',
      type: 'matchByDragDrop',
      id: 'synonym',
      data: {
        title: 'सही पर्यायवाची शब्द से रिक्त स्थान की पूर्ति कीजिये',
        text: `मेरे माता-पिता पुणे में रहते  है और मैं अपनी *माँ* को बहुत याद करता हूँ ।
गणतंत्र दिवस २६ जनवरी को मनाया जाता है। उस *दिन* राष्ट्र ध्वज को फहराया जाता है।
भारत में भगवान को बहुत मानते है और हर रोज *ईश्वर* की पूजा करते है।  
कमल भारत का राष्ट्रीय फूल है। उसे *पंकज* भी कहा जाता है। 
अमावस की रात को बहुत अँधेरा होता है और उस *रात्रि* कोई बहार नहीं जाता।`
      }
    },
    {
      type: 'makeSentence',
      label: 'अंग्रेजी में अनुवाद करें',
      id: 'make-sentence',
      commonData: {
        title: 'नीचे दिए गए हिंदी वाक्यों का अंग्रेजी में अनुवाद करें',
        extras: ' '
      },
      data: [
        `आप कैसे हैं?|how are you
मैं ठीक हूँ। |I am good
आपका नाम क्या है?|what is your name
मेरा नाम मीरा है।|my name is Meera 
आप कहाँ से हैं?|where are you from
आप से मिलकर ख़ुशी हुई।|I am pleased to meet you
तुम क्या कर रहे हो?|what are you doing 
यह कितने का है?|how much does this cost 
मैं बाज़ार जाना चाहता हूँ।|I want to go to the market
मैं फोन करना चाहता हूं।|I want to make a phone call `,

        `क्या आप अंग्रेज़ी बोलते हैं?|do you speak English 
मुझे समझ नहीं आया।|I did't understand
मुझको मालूम नहीं।|I don't know
मुझे दर्द हो रहा है। |I am in pain
क्या मैं आपकी मदद कर सकता हुँ? |can I help you 
कितने बजे हैं?|what is the time
आज अच्छा दिन है। |today is a good day
कल मैंने उसे देखा था।|I saw him yesterday 
मैं तुम्हारा हित चाहता हूँ।|I wish you well
भगवान तुम्हारा भला करें।|may God bless you`,

        `उसे हल्का बुखार है।|he has a mild fever
मैंने वैसा ही किया जैसा मुझे कहा गया था।|I did as I was told
मैं आज शाम को आपसे मिलूँगा।|I will see you this evening
मुझे बहुत-सी बातें करनी है।|I have a lot to talk about
संभल कर चलो।|please walk carefully
शुरुआत अच्छी हुई है।|it's a good beginning
मुझे उससे शिकायत है।|i have a complaint against him
मैंने उससे बहुत कुछ कहा।|I said many things to him
अपना तो सारा हिसाब बिगड़ गया।|all my calculations went wrong
किसकी बारी है?|whose turn is it`
      ]
    }
  ]
};
