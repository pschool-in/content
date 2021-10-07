export default {
  label: 'शब्द',
  id: 'hi-word-4',
  img: 'word',
  list: [
    {
      type: 'match',
      label: 'विलोम शब्द',
      id: 'antonyms',
      commonData: {
        title: 'विलोम शब्द का मिलान करें'
      },
      data: [
        `सरल, कठिन 
          जन्म, मृत्यु 
          ठंडा, गरम 
          जीत, हार 
          मानव, दानव 
          आना, जाना `,

        `छोटा, बड़ा 
          धूप, छाँव 
          निडर, डरपोक 
          एक, अनेक 
          अंदर, बाहर 
          अच्छाई, बुराई `,

        `सुख, दुख 
          बच्चा, बूढ़ा 
          गंदा, साफ़ 
          न्याय, अन्याय 
          ज्ञान, अज्ञान 
          सर्दी, गर्मी `
      ]
    },
    {
      type: 'match',
      label: 'समानार्थी शब्द',
      id: 'synonyms',
      commonData: {
        title: 'समानार्थी शब्द का मिलान करें'
      },
      data: [
        `प्रातः, सुबह 
          माँ, माता
          आकाश, नभ
          ईश्वर, भगवान
          हिमालय, हिमाचल`,

        `कमल, पंकज
          अग्नि, आग
          नदी, सरिता
          तालाब, सरोवर
          दिन, दिवस`,

        `रात, रात्रि
          चंद्रमा, चन्द्र
          किसान, भूमिपुत्र
          मनुष्य, आदमी
          साँप, सर्प`,

        `सिंह, शेर
          असुर, दैत्य
          सोना, स्वर्ण
          दूध, दुग्ध
          झंडा, ध्वज
          इच्छा, अभिलाषा
          अच्छा, उचित`
      ]
    },
    {
      type: 'fillupOptions',
      id: 'fillup',
      label: 'श्रुतिसमभिन्नार्थक शब्द ',
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।।'
      },
      data: [
        `वंश - *कुल (कूल)*
          किनारा - *कूल (कुल)*
          दुम - *पूँछ (पूछ)*
          पूछना - *पूछ (पूँछ)*
          मावा - *खोआ (खोया)*
          खो जाना - *खोया (खोआ)*
          चीज़ें - *समान (सामान)*
          बराबर - *सामान (समान)*
          धोखा - *कपट (कपाट)*
          दरवाज़ा - *कपाट (कपट)*
          दिवस - *दिन (दीन)*
          गरीब - *दीन (दिन)* `,

        `सबूत - *प्रमाण (प्रणाम)* 
          नमस्कार - *प्रणाम (प्रमाण)* 
          काला - *श्याम (शाम)* 
          संध्या - *शाम (श्याम)* 
          मकान - *आवास (आभास)* 
          झलक - *आभास (आवास)* 
          गरीब - *कंगाल (कंकाल)* 
          ठठरी - *कंकाल (कंगाल)* 
          बचा हुआ भोजन - *जूठा (झूठा)* 
          जो सच्चा न हो - *झूठा (जूठा)* 
          तरफ - *ओर (और)* 
          तथा - *और (ओर)* `
      ]
    },
    {
      label: 'अनेक शब्दों के लिए एक शब्द',
      type: 'matchByDragDrop',
      id: 'one-word-sub',
      commonData: {
        title: 'सही उत्तर का चयन करें।',
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `बोलने वाला व्यक्ति - *वक्ता*
              नीचे लिखे हुए - *निम्नलिखित*
              किसी से भी न डरने वाला - *निडर*
              जिसके मन मे दया हो - *दयालु*`,

        `जिसके अंदर साहस हो - *साहसी*
              जिसमें ईमानदारी हो - *ईमानदार*
              साथ पढ़ने वाला - *सहपाठी*
              देश–देशान्तर भ्रमण करने वाला यात्री - *पर्यटक*
              दूसरे देश से संबंध रखने वाला - *विदेशी*`
      ]
    },
    {
      type: 'match',
      label: 'अनेकार्थक शब्द',
      id: 'onewordmanymeanings',
      commonData: {
        title: 'अनेकार्थक शब्द का मिलान करें'
      },
      data: [
        `आम, साधारण और एक फल 
              अंग, शरीर और शाखा
              अंत, मृत्यु और भेद
              उत्तर, जबाव और एक दिशा 
              उपचार, सेवा और इलाज`,

        `कल, यंत्र और आज के पहले का दिन
              गोल, आकृति और खेल में गोल 
              गति, चाल और हालत
              गुरु, शिक्षक और भारी
              चढ़ाई, हमला और पर्वत की चढ़ाई `
      ]
    },
    {
      type: 'rightOne',
      id: 'onewordmanymeanings-2',
      label: 'असंगत का चयन करें',
      // locked: 'true',
      lockAfter: 1,
      commonData: {
        title: 'असंगत का चयन करें',
        fontSize: '1.3rem',
        noCaps: true,
      },
        data: [
          `सेवा, फल, परिणाम,आम 
              ऊपर, तीर, किनारा, बाण
              दिशा, जग, संसार, बर्तन 
              आसमान, पर, पंख, ऊपर 
              नदी,पात्र, बरतन, व्यक्ति`,

          `जगह, पूर्व, पहले, एक दिशा 
               रंग, दल, पत्ता, समूह 
               पीछे, दक्षिण, दाहिना, एक दिशा
               उपाय,मत, वोट, नहीं 
               पक्षी, मगर, परंतु, मगरमच्छ 
               पर, वर्ण, अक्षर, जाति`
        ]
      
    },
    {
      type: 'fillupOptions',
      id: 'fillup-2',
      label: 'समूहवाची शब्द ',
      lockAfter: 4,
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।।'
      },
      data: [
        `अंगूरों / लीची / केले का - *गुच्छा (दल)* 
              घुड़सवारों / टिड्डियों का- *दल  (जोड़)*
              यात्रियों / सत्याग्रहियों का - *जत्था (रेवड़)*
              गायकों / कलाकारोी - *मंडली (दल)* 
              मधुमक्खियों / ततैयों का - *छत्ता (झुंड)* `,

        `सेना/ घोड़ोि का - *काफ़िला (झुंड)* 
              कागज़ / नोटों की - *गड्डी (गट्ठर)*  
              लताओं का - *कुंज (रेवड़)* 
              लकड़ियों / कपड़ों का - *गट्ठर (जोड़)* 
              कूड़े / अनाज का - *ढेर (दल)* `,

        `आंदोलनकारियों / सैनिकों का - *जत्था (रेवड़)*
              सेना / पुलिस की - *टुकड़ी (गट्ठर)*
              पुलिस का - *दस्ता (गुलदस्ता)* 
              पर्वतों / घटनाओं की - *श्रृंखला (गट्ठर)*  
              नक्षत्रों / तारों का - *मंडल (दल)* `,

        `भेड़ / बकरियों का - *रेवड़ (जोड़)* 
              जूतों / जुराबों का - *जोड़ा (गट्ठर)* 
              मनुष्यों / भक्तों की - *भीड़ (दल)*   
              राज्यों का - *संघ (झुंड)* 
              जानवरों / वृक्षों का - *झुंड (गट्ठर)* `,

        `विद्यार्थियों / रेलगाड़ी की - *कक्षा (झुंड)*
              तारों / किरणों का - *पुंज (झुंड)*
              फूलों का - *गुलदस्ता (गट्ठर)*
              मोतियों / फूलों की - *माला (गट्ठर)*
              बालों / चाबियों का - *गुच्छा (झुंड)*`
      ]
    },
    {
      label: 'सही उत्तर का चयन करें।',
      lockAfter: 1,
      id: 'hi-collectivewords',
      type: 'mcq',
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।'
      },
      data: [
        {
          questions: [
            {
              qText: 'नोटों की',
              options: 'गड्डी, गुलदस्ता, गठरी '
            },
            {
              qText: 'घुड़सवारों का',
              options: 'दल, कारवाँ, ढेर'
            },
            {
              qText: 'डाकुओं का',
              options: 'गिरोह, दस्ता, कारवाँ '
            },
            {
              qText: 'लकड़ियों का  ',
              options: 'गट्ठर, टुकड़ी, कक्षा '
            },
            {
              qText: 'वृक्ष, लताओं का',
              options: 'कुंज, रेवड़, मंडल'
            }
          ],
        },
        {

          questions: [
            {
              qText: 'मक्खियों का',
              options: 'झुंड, जाल, जत्था'
            },
            {
              qText: 'अनाज का',
              options: 'ढेर, गड्डी, दस्ता'
            },
            {
              qText: 'सत्याग्रहियों का',
              options: 'जत्था, झुंड, मंडल'
            },
            {
              qText: 'यात्रियों का  ',
              options: 'समूह, संघ, जाल'
            },
            {
              qText: 'गायकों की',
              options: 'मंडली, टीम, गिरोह'
            }
          ]
        },
      ]
    },
        {
          label: 'रिक्त स्थान भरें। ',
          locked: 'true',
          type: 'matchByDragDrop',
          id: 'hi-collectivewords-3',
          data: {
            isPractice: false,
            title: 'सही उत्तर चुनें और रिक्त स्थानों की पूर्ति करें।',
            styles: {
              fontSize: '1.3rem',
              dashWidth: 80
            },
            text: `परीक्षकों की *मडली*
                  पैदल सैनिको का *दल*
                  शिष्यों का *समूह*
                  तीर्थयात्रियों का *काफिला*
                  लोगो की नई *बस्ती*
                  मंत्रियों का *परिषद्*`
          }
        },
        {
          label: 'रिक्त स्थान भरें। ',
          locked: 'true',
          type: 'matchByDragDrop',
          id: 'hi-collectivewords-4',
          data: {
            isPractice: false,
            title: 'सही उत्तर चुनें और रिक्त स्थानों की पूर्ति करें।',
            styles: {
              fontSize: '1.3rem',
              dashWidth: 80
            },
            text: `चोरों का *गिरोह*
            बंदरो का *झुण्ड*
                  कविताओं का *संग्रह*
                  लकड़ी का *गठ्ठर*
                  फलों की *टोकरी*`
          }
        }
      
    
  ]
}
