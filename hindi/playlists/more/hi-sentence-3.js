export default {
    label: 'वाक्य',
    id: 'hi-sentence-3',
    img: 'sentence',
    list: [
      {
        id: 'form-sentence',
        label: 'सही वाक्य बनाओ',
           lockAfter:4,
        type: 'sequence',
        commonData: {
          title: 'अर्थपूर्ण वाक्य बनाने के लिए शब्दों को जोड़िए',
          lang: 'hi'
        },
        data: [
          `
          धीरे बोलो।
          तेज़ बोलो।
          बारिश हो रही है।
          सुबह हो गयी।
          मेरे साथ चलो।
          उसे मत देखो।
          तुम सीख जाओगे।`,
  
          `जूते पहन लो।
          बहाने मत बनाओ।
          उसे समय लेने दो।
          इशारा मत करो।
          ज़िद मत करो।
          अंधेरा हो रहा है।
          मुझे नहाने दो।
          जाकर सो जाओ।`,
  
          `नौकरी कर लो।
          उसे मत देखो।
          मैं अकेला हूँ ।
          खाना लगा दो।
          कपड़े  सुखा दो।
          धूप सेंक लो।
          बिस्तर लगा दो।
          नल खोल दो।`,
  
          `पृथ्वी घूमती है।
          मैं थक गया हूँ।
          ठंड हो रही है।
          पंछी गाते हैं। 
          अंदर आ जाओ।
          हिलो मत।
          आग जलाती है।
          उसका पीछा करो।`,
  
          `मुझे तैरना आता है।
          मैं तुमसे प्यार करता हूँ।
          मैं कोशिश करूँगा।
          मैं आ रहा हूँ।
          मुझे भूख लगी है! 
          जन्मदिन मुबारक हो!
          मुझे गुस्सा मत दिलाओ।
          मुझे ठंड लग रही है।`,
  
          `नंगे पैर मत चलो।
          दोबारा कब मिलेंगे?
          इंडिया जीतेगी।
          तुम अंग्रेज़ी सीखोगे।
          ढक्कन खोल दो।
          अपने बाल बना लो।`
  
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
        type: 'matchByDragDrop',
        id: 'fillup',
        label: 'एकवचन और बहुवचन ',
        lockAfter: 2,
         commonData: {
           title: 'उचित शब्दों से रिक्त स्थानों की पूर्ति कीजिए|'
         },
         data: [
           `
           मेरे *भाइयों* ने मिलकर मुझे तोहफा दिया है।
           मेरा *भाई* कहा चला गया? 
           मंत्री जी के सारे *बेटियाँ*  आए थे।
           मंत्री जी की *बेटी* आयी थी। 
           बहुत सारे *व्यंजन* बने हैं। 
           इन सब *व्यंजनों* में चीनी है।`,
   
           `वह *लड़का* उन *लड़कों* से पिटा है।
           मेरी सारी *चिट्ठियाँ* लौटा दो।
           अमन के लिए *चिट्ठी*आयी है। 
           संगम पर तीन *नदियाँ* मिलती हैं।
           बच्चे *नदी* किनारे खेल रहे थे। `,

           `सभी *पेड़* सेबों से लदे हुए हैं।
           इन दो* पेड़ों* पर कोई फल नहीं है।
           मैंने एक *संतरा* खाया।
           उसने दो *संतरे* खाये।
           *लड़की* खेलती है।
           *लड़कियाँ* खेलती हैं।`,

           `*कुत्ता* भौंक रहा है।
           *कुत्ते* भौंक रहे हैं।
           लंगूरों की एक *टोली* ने बहुत उत्पात मचा रखा है।
           विद्यार्थियों की बहुत सी *टोलियाँ* गई हैं।`  
        ]
     },
     {
        label: 'खाली स्थान में उचित सर्वनाम लिखिए।',
        type: 'fillupOptions',
        id: 'pronoun',
        data: {
        title: 'दिए गए शब्दों में से सही सर्वनाम चुनकर वाक्य पूरी करो।',
        text: `वहाँ *कौन (कहा)* बैठा है? 
        *मुझे (में)* खाना बनाना आता है। 
        ये *मेरा (मुझे)* घर है। 
        *आपका (तुम्हारे)* नाम क्या है? 
        मुझे खाने के लिए *कुछ (तुम)* चाहिए। 
        *वह (किसका)* कौन आ रहा है। `
    },
  },
    {
        label: 'खाली स्थान में उचित क्रिया लिखिए।',
        type: 'matchByDragDrop',
        id: 'verb',
        data: {
        title: 'दिए गए शब्दों में से सही क्रिया चुनकर वाक्य पूरी करो।',
        text: `लोग *नाच* रहे थे। 
        वह बच्चों को *पढ़ा* रही थी। 
        मीना खाना *बना* रही थी। 
        रोहन गाना *गा* रहा था।  
        बच्चे खिलौने से *खेल* रहे थे। `
    },
  },
    {
        label: 'खाली स्थान में उचित संज्ञा लिखिए।',
        locked: 'true',
        type: 'matchByDragDrop',
        id: 'noun',
        data: {
        title: 'दिए गए शब्दों में से सही संज्ञा चुनकर वाक्य पूरी करो।',
        text: `आकाश में तीन *पक्षी* उड़ रहे थे। 
        चित्र मैं एक *आम* का पेड़ था।  
        सूरज *बादल* के पीछे छिप गया। 
        *बकरी* घास खा रही है। 
        मेरे पास दो नीली रंग की *पुस्तक* है। `
    },
  },
    {
        label: 'खाली स्थान में उचित विशेषण लिखिए',
        locked: 'true',
        type: 'matchByDragDrop',
        id: 'adjective',
        data: {
        title: 'दिए गए शब्दों में से सही विशेषण चुनकर वाक्य पूरी करो।',
        text: `यह चाय बहुत *गरम* है।  
        मोर के पंक *रंग-बिरंगे* होते है। 
        मेज़ पर *तीन* कलम रखे है। 
        आसमान का रंग *नीला* होता है। 
        आम एक *मीठा* फल है। `
    },
  },
    {
        label: 'पर्यायवाची शब्द से रिक्त स्थान की पूर्ति',
        locked: 'true',
        type: 'matchByDragDrop',
        id: 'synonym',
        data: {
        title: 'सही पर्यायवाची शब्द से रिक्त स्थान की पूर्ति कीजिये',
        text: `नेहरू पार्क एक सुंदर बगीचा है। उस *वाटिका* में सुन्दर फूल पाए जाते है।  
        आकाश में बादल छा गए और सूर्य *मेघ * के पीछे छुप गया। 
        कल बहुत तेज़ बारिश हुई और इस *वर्षा * से सारी सड़कें ख़राब होगई। 
        हर रोज़ सुबह सूरज  उदय होता है और श्याम को *सूर्य * ढल  जाता है। 
        पक्षी दाना और फल खाते हैं और यह  *चिड़ियाँ* नदियों का जल पीते है। `
    },
   }
  ]
};
