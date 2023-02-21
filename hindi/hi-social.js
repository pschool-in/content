export default {
  label: 'सामाजिक विज्ञान',
  id: 'hi-social',
  img: 'social',
  lockAfter: 4,
  list: [
    {
      label: 'शहर',
      lockAfter: 2,
      type: 'matchByDragDrop',
      id: 'right-word',
      commonData: {
        title: 'सही उत्तर का चयन करें।',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `लाल किला - *दिल्ली*
ताज महल - *आगरा*
मैसूर राजमहल - *मैसूर*
स्वर्ण मंदिर - *अमृतसर*
बृहदीस्वर मंदिर - *तंजावुर*`,

        `हवा महल - *जयपुर*
छत्रपति शिवाजी टर्मिनस - *मुंबई*
लोटस टेंपल - *दिल्ली*
विक्टोरिया मेमोरियल - *कोलकाता*
सांची स्तूप - *सांची*`,

        `कुतुब मीनार - *दिल्ली*
फतेहपुर सीकरी - *आगरा*
कोणार्क सूर्य मंदिर - *कोणार्क*
चंपानेर पावागढ़  स्मारक - *गुजरात*
महाबलीपुरम के स्मारक - *महाबलीपुरम*`,

        `जैसलमेर किला - *जैसलमेर*
अजंता एलोरा की गुफाएं - *औरंगाबाद*
हम्पी में स्मारकों का समूह - *कर्नाटक*
मीनाक्षी मंदिर - *मदुरै*
इंडिया गेट - *दिल्ली*`,

        `चारमीनार - *हैदराबाद*
हुमायूं का मकबरा - *दिल्ली*
गेटवे ऑफ़ इन्डिया - *मुंबई*
खजुराहो के स्मारक - *मध्य प्रदेश*
विक्टोरिया मेमोरियल - *कोलकाता*`
      ]
    },
    {
      id: 'match1',
      type: 'match',
      label: 'लोग और कार्यस्थल',
      data: {
        title: 'लोग और कार्यस्थल को आपस में जोड़िए। ',
        text: `चिकित्सक, चिकित्सालय
अध्यापक, विद्यालय
रसोइया, भोजनालय
वकील, अदालत
दुकानदार, दुकान
किसान, खेती 
माली, बगीचा
पुजारी, मंदिर
अभिनेता, चलचित्र`
      }
    },
    {
      id: 'match2',
      type: 'match',
      label: 'लोग और उपकरण',
      data: {
        title: 'लोग और उपकरण को आपस में जोड़िए। ',
        text: `चिकित्सक, परिश्रावक
मछुआरा, जाल
लकड़हारा, कुल्हाड़ी
सिपाही, बन्दूक
पुजारी, घंटी 
नाई, कैंची `
      }
    },
    {
      type: 'match',
      label: 'राज्य और राजधानियों',
      lockAfter: 2,
      id: 'match3',
      commonData: {
        title: 'राज्य और राजधानियों को आपस में जोड़िए।'
      },
      data: [
        `असम, दिसपुर
बिहार, पटना
छत्तीसगढ़, रायपुर
गुजरात, गांधीनगर`,

        `हरियाणा, चंडीगढ़
हिमाचल प्रदेश, शिमला
कर्नाटक, बेंगलुरु 
केरल, तिरुवनंतपुरम
महाराष्ट्र, मुंबई`,

        `मेघालय, शिलांग
ओडिशा, भुवनेश्वर
पंजाब, चंडीगढ़
राजस्थान, जयपुर`,

        `तेलंगाना, हैदराबाद
उत्तर प्रदेश, लखनऊ
उत्तराखंड, देहरादून
पश्चिम बंगाल, कोलकाता`
      ]
    },
    {
      type: 'match',
      label: 'राज्य और उसकी भाषा।',
      id: 'match4',
      commonData: {
        title: 'राज्य और उसकी भाषा को आपस में जोड़िए।'
      },
      data: [
        `असम, असमिया
पश्चिम बंगाल, बंगला
बिहार, भोजपुरी
उत्तर प्रदेश, हिंदी
पंजाब, पंजाबी
गोआ, कोंकणी`,

        `आन्ध्र प्रदेश, तेलगू
तमिलनाडु, तमिल
केरल, मलयालम
महाराष्ट्र, मराठी
गुजरात, गुजराती
उत्तराखंड, हिंदी`
      ]
    },
    {
      id: 'match5',
      type: 'match',
      label: ' विश्व के अजूबे',
      data: {
        title: ' विश्व के अजूबे को स्थान के साथ जोड़िए। ',
        text: `ताज महल, आगरा
चीन की महान दीवार, चीन
माचू पिचू, पेरू
कोलोज़ियम, रोम`
      }
    },
    {
      label: 'सौर मंडल के ग्रह',
      type: 'sorting',
      data: {
        title:
          'सूर्य से दूरी के आधार पर ग्रहों को क्रमबद्ध करें। (निकटतम ग्रह सबसे ऊपर)',
        text: 'बुध, शुक्र, पृथ्वी, मंगल, बृहस्पति, शनि, अरुण, वरुण'
      },
      id: 'sorting'
    },
    {
      label: 'सूर्य और ग्रह ',
      type: 'matchByDragDrop',
      id: 'sun-planets',
      data: {
        isPractice: false,
        title: 'दिए गए शब्दों को सही रिक्त स्थान पर खींचें और छोड़ें।',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*सूर्य*- हमें धूप देता है।
*चन्द्रमा*- हमें रात को प्रकाश देता है।
*बुध*- सूर्य के सबसे निकट है।
*बृहस्पति*- सबसे बड़ा ग्रह है।
*अरुण*- सबसे ठंडा ग्रह है।
*शुक्* - पृथ्वी के सबसे निकट है।`
      }
    },
    {
      label: 'भारत के राष्ट्रीय',
      //locked: 'true',
      type: 'matchByDragDrop',
      id: 'nationalofindia',
      commonData: {
        title: 'सही उत्तर का चयन करें।',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `भारत का राष्ट्रीय पक्षी - *मोर*
भारत का राष्ट्रीय चिन्ह - *अशोका स्तम्भ*
भारत का राष्ट्रीय फूल - *कमल* 
भारत का राष्ट्रीय गान - *जन गण मन*
भारत का राष्ट्रीय पशु - *बाघ*
भारत का राष्ट्रीय फल - *आम*`,

        `भारत का राष्ट्रीय गीत - *वंदे मातरम*
भारत का राष्ट्रीय ध्वज - *तिरंगा*
भारत का राष्ट्रीय खेल - *हॉकी*
भारत का राष्ट्रीय वृक्ष - *बरगद*
भारत की राष्ट्रीय नदी - *गंगा* 
भारत की राष्ट्रीय मुद्रा - *भारतीय रुपया*`
      ]
    },
    {
      label: 'भारत के प्रथम',
      //locked: 'true',
      type: 'matchByDragDrop',
      id: 'indias-first',
      commonData: {
        title: 'सही उत्तर का चयन करें।',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `भारत के प्रथम राष्ट्रपति - *डॉ राजेंद्र प्रसाद*
भारत के प्रथम उप राष्ट्रपति- *सर्वपल्ली राधा कृष्णन*
भारत के प्रथम प्रधानमंत्री - *पंडित जवाहरलाल नेहरू*
भारत के प्रथम गृह मंत्री - *सरदार वल्लभ भाई पटेल*
भारत के प्रथम कानून मंत्री - *डॉ भीमराव अंबेडकर*`,

        `भारत के प्रथम रेल मंत्री - *जॉन मथाई*
भारत के प्रथम शिक्षा मंत्री- *मौलाना अबुल कलाम आज़ाद*
भारत के प्रथम रक्षा मंत्री - *वलदेव सिंह*
भारत के प्रथम स्वास्थ्य मंत्री - *राजकुमारी अमृता कौर*
भारत के प्रथम संचार मंत्री - *रफी अहमद किदवई*
भारत के प्रथम श्रम मंत्री - *जगजीवन राम*`
      ]
    }
  ]
};