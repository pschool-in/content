export default {
  label: 'म्हणी',
  id: 'mr-proverb',
  img: 'reading',
  lockAfter: 100,
  list: [
    {
      label: 'म्हणी',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'म्हणी',
        text: `म्हणी म्हणजे परंपरेने लोकांच्या बोलण्यात आलेले नीतिपर, अनुभवी बोल आणि वाक्य. ह्याच बोलांच्या म्हणी तयार झालेल्या आहेत. वाक्यांऐवजी छोट्या, चटकदार पण अर्थपूर्ण आणि बोधपर म्हणींचा उपयोग भाषेचे सौंदर्य वाढवतो. वाक्प्रचार व म्हणींनी सजलेली भाषा सगळयांनाच आवडते.
एखादा मुद्दा साध्या शब्दात मांडण्यापेक्षा म्हणींच्या आधारे मांडल्यास तो अधिक प्रभावीपणे समजतो व लक्षात राहतो. थोडक्यात, ‘म्हण’ म्हणजे लक्षात राहील असे 'ज्ञानपूर्ण’ वचन असते.        
मराठीतील काही प्रचलित म्हणी व त्यांचे अर्थ:
1. अति तेथे माती - कोणत्याही गोष्टीचा अतिरेक वाईटच असतो.
2. अति शहाणा त्याचा बैल रिकामा - जो माणुस आवश्यकते पेक्षा जास्त हुषारी दाखवितो त्याचे काम मुळीच होत नाही.
3. अळी मिळी गुप चिळी - आपले रहस्य गुपित ठेवण्यासाठी दुसऱ्याला चूप करणे.
4. अंथरून पाहून पाय पसरणे – आपली जेवढी ऐपत तेवढाच खर्च करावा.
5. आगीतून फुफाट्यात – लहान संकटातून अधिक मोठ्या संकटात सापडणे.
6. घरोघरी मातीच्या चुली - प्रत्येक घरात सारखीच परिस्थिती असते.
7. अडला हरी गाढवाचे पाय धरी - अडचणीच्या वेळी मूर्खाचीही मनधरणी करावी लागते.
8. थेंबे थेंबे तळे साचे - थोडे थोडे करूनच मोठा संग्रह होतो
9. गरज सरो वैद्य मरो - आपले काम झाले की उपकारकर्त्याची पर्वा न करणे.
10. गाढवास गुळाची चव काय - ज्याला एखाद्या गोष्टीचा गंध नाही/चव नाही त्याला त्याचे काहीच महत्व नसते.
11. दैव देते कर्म नेते – दैवाने लाभलेली गोष्ट वाईट वागणुकीमुळे टिकत नाही.
12. कामापुरता मामा – गरजेपुरते गोड बोलणे.
13. नाव मोठे लक्षण खोटे – नुसताच दिखावा, प्रत्यक्षात शून्य.
14. लहान तोंडी मोठा घास - स्वतःच्या योग्यतेस न शोभेल असे वर्तन करणे.
15. उचलली जीभ लावली टाळ्याला - विचार न करता बोलणे.
16. मनी नाही भाव देवा मला पाव - कर्म न करता फळ मागणे.
17. इकडे आड तिकडे विहीर – दोन्ही बाजूंनी अडचणीत सापडणे.
18. करावे तसे भरावे – दुष्कृत्य करणाऱ्याला त्याचे परिणाम भोगावे लागतातच.
19. गर्वाचे घर खाली – गर्विष्ठ माणसाला शेवटी पराभव स्वीकारावा लागतो.
20. बुडत्याला काडीचा आधार - संकटात दुसऱ्याची थोडी मदत सुद्धा महत्वाची वाटते. `
      }
    },
    {
      id: 'match',
      label: 'जोड्या लावा',
      type: 'match',
      data: {
        title: 'जोड्या लावून म्हणी पूर्ण करा ',
        fontSize: '1rem',
        text: `अति तेथे, माती
करावे तसे, भरावे
गर्वाचे घर, खाली
गरज सरो, वैद्य मरो
नाव मोठे, लक्षण खोटे `
      }
    },
    {
      id: 'fillup',
      label: 'रिकाम्या जागा भरा',
      type: 'fillup',
      data: {
        title: `रिकाम्या जागी योग्य म्हणींतील योग्य शब्द लिहा`,
        text: `लहान तोंडी *मोठा(छोटा)* घास.
थेंबे थेंबे *तळे (नदी)* साचे.
अंथरून पाहून *पाय (हात)* पसरणे.
अति शहाणा त्याचा *बैल (रेडा)* रिकामा.
गाढवास *गुळाची (साखरेची)* चव काय.`
      }
    },
    {
      label: 'म्हणींचे अर्थ ओळखा',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'खालील म्हणींचे अर्थ ओळखा ',
        questions: [
          {
            qText: ` बुडत्याला काडीचा आधार `,
            options: `संकटात दुसऱ्याची थोडी मदत सुद्धा महत्वाची वाटते
संकटात कोणाचीच मदत महत्वाची नसते
काडीला संकटाचा आधार महत्वाचा असतो`
          },
          {
            qText: `दैव देते कर्म नेते `,
            options: `दैवाने लाभलेली गोष्ट वाईट वागणुकीमुळे टिकत नाही
कर्म चांगले असते त्यामुळे दैव वाईट असते
दैव वाईट असते आणि कर्मही वाईट असते`
          },
          {
            qText: `आगीतून फुफाट्यात `,
            options: `लहान संकटातून अधिक मोठ्या संकटात सापडणे
आगीत उडी मारणे आणि संकटात पडणे
फुफाट्याने खेळणे आणि आगीतून निघणे `
          },
          {
            qText: ` अडला हरी गाढवाचे पाय धरी `,
            options: `अडचणीच्या वेळी मूर्खाचीही मनधरणी करावी लागते
अडचणीच्या वेळी गाढव हरीचे पाय धरतो
अडचणीच्या वेळी गाढव आणि हरी एकमेकांचे पाय धरतात `
          },
          {
            qText: `घरोघरी मातीच्या चुली `,
            options: `प्रत्येक घरात सारखीच परिस्थिती असते
मातीच्या चुली सगळ्यांच्या घरी असतात
सगळ्यांच्या घरी चुलीवर स्वयंपाक करतात`
          }
        ]
      }
    }
  ]
};
