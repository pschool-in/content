export default {
  label: 'वाक्य',
  id: 'hi-sentence-5',
  img: 'sentence',
  lockAfter: 4,
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
        `सब लोग कैसे हैं?
तुम कितने साल के हो? 
मुझे उल्टी आ रही है।
मैं हर साल जाता हूँ।
मुझे कोई आवाज़ सुनाई दी। 
मैं रोज़ दौड़ने जाता हूँ।
मैंने उसे फिरसे देखा। `,

        `मुझे सच्चाई बताओ।
एक बार फिरसे कोशिश करो।
हम उसे नहीं जानते हैं।
हम जंग के खिलाफ हैं।
हम युद्ध का विरोध करते हैं। 
खुशी क्या होती है?
आपका नाम क्या है?`
      ]
    },
    {
      id: 'typesofsentence-hi',
      type: 'passage',
      label: 'वाक्य के भेद',
      style: 'big',
      data: {
        title: 'वाक्य के भेद',
        text: `१. प्रश्नवाचक वाक्य : वह वाक्य जिसके द्वारा किसी प्रकार प्रश्न किया जाता है, वह प्रश्नवाचक वाक्य कहलाता है। 
उदाहरण - भारत क्या है?

२. आज्ञावाचक वाक्य : वह वाक्य जिसके द्वारा किसी प्रकार की आज्ञा दी जाती है या प्रार्थना किया जाता है, वह आज्ञावाचक वाक्य कहलाता हैं। 
उदाहरण - कृपया बैठ जाइये।

३. विस्मयादिबोधक वाक्य : वह वाक्य जिससे किसी प्रकार की गहरी अनुभूति का प्रदर्शन किया जाता है, वह विस्मयादिबोधक वाक्य कहलता हैं। 
उदाहरण - अहा! कितना सुंदर उपवन है।

४. सरल वाक्य : जिस वाक्य में एक ही विधेय होता है, उसे सरल वाक्य या साधारण वाक्य कहते हैं, इन वाक्यों में एक ही क्रिया होती हैं। 
जैसे- मुकेश पढ़ता है।

५. संयुक्त वाक्य : ऐसा वाक्य जिसमे दो या दो से अधिक उपवाक्य हो एवं सभी उपवाक्य प्रधान हों, ऐसे वाक्य को सयुंक्त वाक्य कहते हैं। 
जैसे- वह सुबह गया और शाम को लौट आया।

६. मिश्रित/मिश्र वाक्य : ऐसे वाक्य जिनमें सरल वाक्य के साथ-साथ कोई दूसरा उपवाक्य भी हो, वे वाक्य मिश्र वाक्य कहलाते हैं।  
जैसे - यदि परिश्रम करोगे तो, उत्तीर्ण हो जाओगे।`
      }
    },
    {
      type: 'fillupOptions',
      id: 'fillupsentence',
      label: 'वाक्य के भेद',
      lockAfter: 2,
      commonData: {
        title: 'सही विकल्प चुनकर रिक्त स्थानों की पूर्ति कीजिए।'
      },
      data: [
        `बिजली चमकती है। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
वह सुबह गया और शाम को लौट आया।*संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*
पानी बरसा। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
सफल वही होता है जो परिश्रम करता है। *मिश्रित वाक्य (सरल वाक्य, संयुक्त वाक्य)*
उसने बहुत परिश्रम किया किन्तु सफलता नहीं मिली। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*`,

        `राधा नाचती-गाती है। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
मोहन हँसा और बोला। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*
जो नाचती-गाती है, वह राधा है। *मिश्रित वाक्य (सरल वाक्य, संयुक्त वाक्य)*
तुम पढ़कर सो जाना। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
अंकित की कलम छूटी और गिर गई। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*`,

        `
वह मोहन है जो हँसकर बोला। *मिश्रित वाक्य (सरल वाक्य, संयुक्त वाक्य)*
निधि रात भर पढ़ती है ताकि परीक्षा देने की तैयारी कर सके। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*
जैसे ही सूरज पढ़-लिख गया, वह अधिकारी बन गया। *मिश्रित वाक्य (सरल वाक्य, संयुक्त वाक्य)*
अभिलाषा रोते हुए बेहोश हो गई। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
श्रेयसी बीमार थी अत: स्कूल नहीं आई। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*`,

        `विकास के घर जाने पर मेरा आदर सत्कार हुआ। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
उसके पास घड़ी तो थी, किन्तु ठीक नहीं थी।  *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*
हम बस से उतरे और रिक्शा वाले दौड़ पड़े। *संयुक्त वाक्य (सरल वाक्य, मिश्रित वाक्य)*
सूरज के निकलते ही फूल खिल उठे। *सरल वाक्य (मिश्रित वाक्य, संयुक्त वाक्य)*
जैसे ही बादल घिरे, मोर नाचने लगा।  *मिश्रित वाक्य (सरल वाक्य, संयुक्त वाक्य)*`
      ]
    },
    {
      type: 'fillupOptions',
      id: 'fillupsentence-2',
      label: 'वाक्य के प्रकार की पहचान करें',
      lockAfter: 2,
      commonData: {
        title: 'सही विकल्प चुनकर रिक्त स्थानों की पूर्ति कीजिए।'
      },
      data: [
        `वह कितनी सुन्दर है ! * विस्मयादिबोधक वाक्य (साधारण वाक्य)*
राधा लेख लिखती है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
मुझे अपना घर दिखाओ | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
तुम कितने मुर्ख लड़के हो ! *विस्मयादिबोधक वाक्य (साधारण वाक्य)*
धूप में मत खड़े रहो | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*`,

        `तुम कौन से गांव में रहते हो? *प्रश्नवाचक वाक्य (साधारण वाक्य)*
कितना सुंदर स्थान है ! *विस्मयादिबोधक वाक्य  (साधारण वाक्य)*
राम पुस्तक पढ़ता है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
अहा ! भारत मैच जीत गया। *विस्मयादिबोधक वाक्य  (साधारण वाक्य)*
तुम्हारा कौन सा देश है? *प्रश्नवाचक वाक्य (साधारण वाक्य)*`,

        `हाय ! समय समाप्त हो गया । *विस्मयादिबोधक वाक्य (प्रश्नवाचक वाक्य)*
मेहमान घर आते हैं। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
सदैव सत्य बोलो | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
गरीबों पर दया करो | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
वह कितनी सुन्दर है ! *विस्मयादिबोधक वाक्य (प्रश्नवाचक वाक्य)*`,

        `अहा ! मैंने इनाम जीता | *विस्मयादिबोधक वाक्य (प्रश्नवाचक वाक्य)*
बिजली कड़कती है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
रोहन भागता रहता है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
ओह ! कितनी भयानक रात है |* विस्मयादिबोधक वाक्य (प्रश्नवाचक वाक्य)*
तुम्हारा नाम क्या है? *प्रश्नवाचक वाक्य (साधारण वाक्य)*`,

        `मौसम कितना सुहाना है ! *विस्मयादिबोधक वाक्य (प्रश्नवाचक वाक्य)*
वह लड़का कितना अच्छा है ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*
कभी किसी को गाली मत दो | *आज्ञा-सूचक वाक्य (साधारण वाक्य)*
इतनी जोर से मत रोओ | *आज्ञा-सूचक वाक्य (साधारण वाक्य)*
तुम कितने मूर्ख व्यक्ति हो ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*`,

        `अहा ! मेरा पुराना दोस्त आ गया है | *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*
तुम कौन हो? *प्रश्नवाचक वाक्य (साधारण वाक्य)*
राधा दौड़ती है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
गंगा पढ़ाई करती है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
तुम्हारी आवाज़ कितनी मधुर है ! *विस्मयादिबोधक वाक्य(आज्ञा-सूचक वाक्य)*`,

        `भगवान इस पापी को माफ़ करे ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*
राधा तुम कब डांस करोगी? *प्रश्नवाचक वाक्य (साधारण वाक्य)*
यह फिल्म कब खत्म होगी?* प्रश्नवाचक वाक्य (साधारण वाक्य)*
पारस खाना खाता है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
ईश्वर हमारी रानी को लम्बी आयु प्रदान करे ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*`,

        `भगवान तुम्हें साहस प्रदान करे ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*
तुम्हारी बहन क्या काम करती है? *प्रश्नवाचक वाक्य (साधारण वाक्य)*
राकेश खेलता है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
परीक्षा में नक़ल मत करो | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
कृपया मेरे साथ अस्पताल चलिए | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
उसे सोने दो | *आज्ञा-सूचक वाक्य ( विस्मयादिबोधक वाक्य)*
कृपया मेरे लिए एक गिलास पानी लाओ | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*`,

        `आओ हम बाजार चलें | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
अपने गुरुजनों की आज्ञा का पालन करो | *आज्ञा-सूचक वाक्य (विस्मयादिबोधक वाक्य)*
बबीता चलती रहती है। *साधारण वाक्य (आज्ञा-सूचक वाक्य)*
यह कितनी सुंदर इमारत है ! *विस्मयादिबोधक वाक्य (आज्ञा-सूचक वाक्य)*`
      ]
    },
    {
      label: 'वर्तमान काल',
      type: 'fillupOptions',
      id: 'presenttense',
      commonData: {
        title: 'सही विकल्प चुनकर रिक्त स्थानों की पूर्ति कीजिए।'
      },
      data: [
        `मीरा सिलाई मशीन *बेचती है (बेचता था)*। 
मुझे  तुम  पर भरोसा *है (था)*।
यह अच्छा  काम *करता है (करते थे)*। 
मैं बहुत सपने देखता *हूं (रहता था)*।
यह मुझे परेशान करता *है (रहता था)*।
वह राम को पसंद *है (था)*। `,

        `मैं अकेले  यात्रा करता *हूं (रहूंगा)*।
वह  हर समय छींकता *है (रहता था)*। 
वह एक पत्र नहीं *लिखता है (लिख पाता था )*  ।
वे यहा रोज आते *हैं (थे)*। 
हम आपस में कभी नहीं *लड़े (लड़ते थे)*।`
      ]
    },
    {
      label: 'भूतकाल',
      type: 'fillupOptions',
      id: 'pasttense',
      commonData: {
        title: 'सही विकल्प चुनकर रिक्त स्थानों की पूर्ति कीजिए।'
      },
      data: [
        `हम  रोज़ाना स्कूल क्यों नहीं गए *थे (है)*|
मम्मी पूजा  *करती थी (करते है)*|
वह  आज स्कूल नहीं *गई (आई)*|
राम कहाँ पढ़ने गया *था (है)*?
तुम स्कूल क्यो नहीं *गये थे (जा रहे)*?`,

        `मैं कल बनारस *गया था (जा रहा हूँ)*।
रामजी आज पोस्ट-ऑफिस नहीं *गए थे (जा रहे)*।
माली कहाँ गया *था (है)*?
मोहन क्या खरीदने गया *था (है)*?
मैं कल दिल्ली *गयी थी (जा रही हूँ)*।`
      ]
    },
    {
      label: 'भविष्यकाल',
      type: 'fillupOptions',
      id: 'futuretense',
      commonData: {
        title: 'सही विकल्प चुनकर रिक्त स्थानों की पूर्ति कीजिए।'
      },
      data: [
        `राम गाना * गाएगा (गाया)*|
वह पत्र * लिखेगा (लिख रहा है)*|
मैं बाजार *जाऊँगा (गया था)*|
मैं खाना *पकाऊँगा (पका लिया हैं)*|
वे बगीचे में *खेलेंगे (खेल रहे थे)*|`,

        `वह कल शादी में *आएगा (आ रहा हैं)*|
जतिन बस से *आएगा (आया था)*|
राम गाना *गाएगा (गा रहा हैं)*|
वह पत्र *लिखेगा (लिख रहा हैं)*|
चपरासी कमरा साफ़ *करेगा (कर रहा हैं)*|`
      ]
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-idioms',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'आँख चुराना का अर्थ बताईये ।',
            options: 'छिपना, बुरी तरह पराजित करना, बहुत चतुर होना'
          },
          {
            qText: 'आँख दिखाना का अर्थ बताईये। ',
            options: ' गुस्से से देखना, सुध-बुध खोना, दिल ललचाना'
          },
          {
            qText: 'अक्ल का दुश्मन का अर्थ बताईये ।',
            options: 'मूर्ख, देने से साफ इनकार कर देना, इशारा करना'
          },
          {
            qText: 'होश उड़ना का अर्थ बताईये ।',
            options: 'सुध-बुध खोना, धोखा देना, बहुत चतुर होना'
          }
        ]
      }
    },
    {
      label: 'विलोम शब्द',
      type: 'matchByDragDrop',
      id: 'antonym',
      data: {
        title: 'सही विलोम शब्द से रिक्त स्थानों की पूर्ति कीजिए।',
        text: `राम एक *लड़का* है। रीटा एक लड़की है। राम और रीटा दोस्त है। 
रीटा गरीब है लेकिन राम बहुत *अमीर* है। 
रीटा का घर *कच्चा* है। राम का घर *पक्का* है। 
रिटा और राम जब साथ रहते है तब आस-पास के लोग उन्हें देखकर ऊँच-*नीच* की बातें करते है। 
रीटा और राम अनेकता की राह को छोड़कर *एकता* की राह पर चलते हैं। 
राम और रीटा दोनों को सही - *गलत* की समझ है। `
      }
    },
    {
      label: 'पर्यायवाची शब्द से रिक्त स्थान की पूर्ति',
      type: 'matchByDragDrop',
      id: 'synonym',
      data: {
        title: 'सही पर्यायवाची शब्द से रिक्त स्थान की पूर्ति कीजिये',
        text: `मेरी इच्छा गाड़ी लेने की थी मगर मेरे घरवालों की *अभिलाषा* घर लेने की है। 
मेरे दिमाग़ में एक अच्छा विचार आया था जो मेरे दोस्तों को भी *उचित*  लगा। 
चंद्र धरती से बहुत दूर है फिर भी  हम रोज़ *चंद्रमा* को देख सकते है। 
हमारा राष्ट्रीय झंडा तिरंगा कहलाता है क्यों की यह  *ध्वज* तीन रंगो का होता है।  
सिंह जंगल में पाए जाते है और *शेर* की दहाड़ काफी दूर तक पहुँचती है। `
      }
    }
  ]
};
