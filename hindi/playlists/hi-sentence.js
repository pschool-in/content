export default {
  label: 'वाक्य',
  id: 'hi-sentence',
  img: 'sentence',
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
        `धीरे बोलो
तेज़ बोलो
खाना लगा दो
बहाने मत बनाओ
कपड़े  सुखा दो
धूप सेंक लो
बिस्तर लगा दो
ढक्कन खोल दो
अपने बाल बना लो
नल खोल दो`,

        `जूते पहन लो
मुझे गुस्सा मत दिलाओ
उसे समय लेने दो
इशारा मत करो
बकवास मत करो
ज़िद मत करो
मुझसे पंगे मत लो
अंधेरा हो रहा है
मुझे नहाने दो
जाकर सो जाओ`,

        `मुझे ठंड लग रही है
बारिश हो रही है
फोन आ रहा है
मशीन चालू करो
एसी बन्द करो
सुबह हो गयी
मेरे साथ चलो
उसे मत देखो
ड्राइविंग सीख लो
तुम सीख जाओगे`,

        `नंगे पैर मत चलो
दोबारा कब मिलेंगे ?
इंडिया जीतेगी
तुम अंग्रेज़ी सीखोगे
तुम में कला है
नौकरी कर लो
उसे मत देखो
उसे विदा कर दो
मैं हँसा
मैं अकेला हूँ `,

        `मैं बोर हो रहा हूँ
मेरा दीवालिया हो चुका है
मैं थक गया हूँ
ठंड हो रही है
किसको पता है ?
पंछी गाते हैं
अंदर आ जाओ
हिलो मत
आग जलाती है
उसका पीछा करो`,

        `मुझे तैरना आता है
मैं तुमसे प्यार करता हूँ
मैं कोशिश करूँगा
मैं आ रहा हूँ
मुझे भूख लगी है ! 
उसे अंगर आने दो
बिस्तर से बाहर निकलो !
नव वर्ष की शुभकामनाएं !
जन्मदिन मुबारक हो !
आपकी छुट्टियाँ मंगलमय हों`,

        `उसे पैसों की ज़रूरत है
मुझे इतिहास पसंद है
मुझे यह कुत्ता अच्छा लगता है
मुझे एक तो खरीदना ही होगा
मैं वापस आऊँगा
मैं तुम्हें फ़ोन करूँगा
मैं घर पर ही रहूँगा
मैं भगवान में यकीन नहीं करता
मैं बहुत थक गया हूँ
आज मौसम बहुत गरम है`,

        `बिस्तर पर चादर बिछा दो
दीवार पर सहारा मत लो
दिमाग से काम लो
समझने की कोशिश करो
सभी ने इंतज़ार किया
वह भागते हुए आया
वह बीमार नहीं हो सकता
उसने टोपी पहनी हुई है
वह अरबी पढ़ सकता है
यह मेरा पति है`,

        `सब लोग कैसे हैं ?
तुम कितने साल के हो ? 
मैंने रात का खाना पकाया
मुझे उल्टी आ रही है
मैं हर साल जाता हूँ
मुझे कोई आवाज़ सुनाई दी
मुझे यह वाला पसंद है
मैं रोज़ दौड़ने जाता हूँ
मैंने उसे फिरसे देखा
मुझे गिटार चाहिए`,

        `मुझपर हमला किया गया
मैं अच्छा बावर्ची हूँ
वह शादीशुदा नहीं है
मुझे सच्चाई बताओ
पृथ्वी घूमती है
एक बार फिरसे कोशिश करो
रेडियो को चालू करो
हम उसे नहीं जानते हैं
हमारे पास खुशखबर है
हम जंग के ख़िलाफ़ हैं
हम युद्ध का विरोध करते हैं
खुशी क्या होती है ?
आपका नाम क्या है ?
मुश्किल क्या है ?`
      ]
    },
    {
      type: 'fillupOptions',
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
गेहू एक *अनाज (फल, सब्जी)* है |
कुत्ता एक *पालतू (जंगली, खतरनाक)* जानवर है |
गाय *दूध (अनाज, पानी)* देती है |
शेर *जंगल (गाँव, घर)* में रहता है |
शेर *मांस (घास, कीड़े मकोड़े)* खाता है |
जलेबी का स्वाद *मीठा (खट्टा, तीखा)* होता है |`,

        `हमारे हाथ में *१० (१२, १३)* अंगुलियां होती है |
घोड़े के *४ (५, २) पैर होते है |
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
कछुए की चाल *धीरे (तेज)* होती है |
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
    }
  ]
};
