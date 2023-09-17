export default {
  label: 'व्याकरण 6',
  id: 'hi-grammar-6',
  img: 'langGrammar',
  lang: 'hi',
  list: [
    {
      id: 'gender-singular-plural-hi',
      type: 'passage',
      label: 'लिंग, वचन और कारक ',
      style: 'big',
      data: {
        title: 'लिंग, वचन और कारक',
        text: `शब्द के जिस रूप से किसी संज्ञा के स्त्री या पुरूष जाति के होने का पता चलता है, उसे लिंग कहते हैं। शब्द के दो भेद होते हैं: विकारी और अविकारी। वह शब्द जिसमें किन्हीं कारणों से परिवर्तन आ जाता है यानी कि उसका रूप बदल जाता है विकारी शब्द कहलाता है। वे शब्द जिनका रूप सदा एक-सा रहता है, अविकारी शब्द कहलाते हैं। संज्ञा, सर्वनाम, विशेषण और क्रिया विकारी शब्द हैं। इनमें लिंग, वचन, कारक के कारण विकार (बदलाव) आ जाता है।`
      }
    },
    {
      id: 'gender-hi',
      type: 'passage',
      label: 'लिंग',
      style: 'big',
      data: {
        title: 'लिंग',
        text: `लिंग के दो भेद होते हैं:
१.पुल्लिंग : संज्ञा शब्द के जिस रूप से पुरूष जाति का बोध होता है, उसे पुल्लिंग कहते हैं। जैस : पिता, राजा, बच्चा, छात्र आदि।
२.स्त्रीलिंग : संज्ञा शब्द के जिस रूप से स्त्री जाति लड़का लड़की का बोध होता है, उसे स्त्रीलिंग कहते हैं। जैसे: माता, रानी, बच्ची, छात्रा आदि।
निर्जीव वस्तुओं को भी उनके आकार, वजन और गुण के अनुसार पुल्लिंग और स्त्रीलिंग में बाँटा गया है।
(क) पुल्लिंग शब्द : फूल, बादल, रस्सा, मकान, मैदान, रास्ता, शहर, सागर, जूता, डिब्बा, गाँव, घड़ा, पत्थर, पहाड़, आदि।
(ख) स्त्रीलिंग शब्द : धरती, नदी, पहाड़ी, जूती, साड़ी, घड़ी, डाली, दवात, डिबिया, मटकी, सड़क, सुई, पतीली, रस्सी आदि।
जिन शब्दों के अंत में ‘आ’, आव, पा, क, त्व आते हैं वे पुल्लिंग होते हैं।`
      }
    },
    {
      id: 'match-gender1',
      label: 'निम्नलिखित को जोड़िए। ',
      type: 'match',
      data: {
        text: `कछुआ, मादा कछुआ
चीता, मादा चीता
तोता, मादा तोता
खरगोश, मादा खरगोश`,
        title: 'नित्य पुल्लिंग शब्द के साथ स्त्रीलिंग रूप को जोड़िए।'
      }
    },
    {
      id: 'match-gender2',
      label: 'निम्नलिखित को जोड़िए। ',
      type: 'match',
      data: {
        text: `कोयल, नर कोयल
तितली, नर तितली
मक्खी, नर मक्खी
मछली, नर मछली`,
        title: 'नित्य स्त्रीलिंग शब्द के साथ पुल्लिंग रूप को जोड़िए।'
      }
    },
    {
      id: 'singular-plural-hi',
      type: 'passage',
      label: 'वचन',
      style: 'big',
      data: {
        title: 'वचन',
        text: `वचन के दो भेद होते हैं:
१. एकवचन : संज्ञा शब्द के जिस रूप से उसका एक होने का बोध होता हैं उसे एकवचन कहते हैं। जैसे: चूहा, आँख, माता, पंखा आदि।
२. बहुवचन : संज्ञा शब्द के जिस रूप से उसके एक से अधिक होने का बोध होता है, उसे बहुवचन कहते हैं। जैसे: चूहे, आँखें, माताएँ, पंखे आदि।
वस्तुओं, पदार्थों, प्राणियों की संख्या में परिवर्तन हो जाने से वचन बदल जाता है, जिसे वचन-परिवर्तन कहते हैं।`
      }
    },
    {
      id: 'singular-plural-classify-hi',
      type: 'passage',
      label: 'वचन परिवर्तन',
      data: {
        title: 'वचन परिवर्तन',
        text: `१. बहुवचन शब्द का प्रयोग होने पर क्रिया शब्द भी बहुवचन हो जाता है। जैसे: बच्चे खेल रहे हैं।
२. आदर देने के लिए एकवचन होने पर भी बहुवचन का प्रयोग किया जाता है। जैसे: माताजी खाना पका रही हैं।
३. कुछ शब्द सदा बहुवचन के रूप में प्रयोग किए जाते हैं। जैसे: आँसू, दर्शन, हस्ताक्षर आदि।
४. कुछ शब्द सदा एकवचन के रूप में प्रयोग किए जाते हैं। जैसे: बारिश, पानी, दूध आदि।`
      }
    },
    {
      label: 'सही विकल्प चुनें।',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title: 'विकल्पों में से सही बहुवचन प्रयोग चुनें।',
        printTitle: 'सही विकल्प भरें.'
      },
      data: [
        `बहन, बहनें, बहन 
रात, रातें, रात 
बाल, बाल, बालों 
आँख, आँखें, आँख
मामा, मामा, मामो `,

        `पुस्तक, पुस्तकें, पुस्तक 
मेज, मेजें, मेज़ 
भैंस, भैंस, भैसों 
कपड़ा, कपड़े, कपड़ा
भालू, भालू, भालु`,

        `फूल, फूल, फूले  
घोड़ा, घोड़े, घोडों 
झगड़ा, झगड़े, झगडों 
छाता, छाते, छतो 
माला, मालाएँ, माले`,

        `नाना, नाना, ननों
सभा, सभाएँ, सभों 
आँसू, आँसू, आँसुओं 
माता, माताएँ, मतों 
महिला, महिलाएँ, महिलोम`,

        `कक्षा, कक्षाएँ, कक्षा 
बहू, बहुएँ, बहुओं 
नीति, नीतियाँ, नीतीयं 
नारी, नारियाँ, नारीयाँ 
नदी, नदियाँ, नदीयाँ`,

        `लडकी, लडकियाँ, लड़कीयां 
टोपी, टोपियाँ, टोपीयां 
सखी, सखियाँ, सखीयां 
वस्तु, वस्तुएँ, वस्तुओं`
      ]
    },
    {
      id: 'prepositions-hi',
      type: 'passage',
      label: 'कारक',
      style: 'big',
      data: {
        title: 'कारक',
        text: `संज्ञा या सर्वनाम के जिस रूप से वाक्य के अन्य शब्दों से उसका संबधं जाना जाता है, वह कारक कहलाता है। जो चिह्न इस संबंध को बताते हैं, उन्हें परसर्ग या विभक्ति कहते हैं।
उद्धाहरण:
सोहन साप डंडे मारा। - सोहन ने साँप को डंडे से मारा।
नानी पुजा गुलाब फूल तोड़े। - नानी ने पूजा के लिए गुलाब के फूल तोड़े।
अजय छत है। - अजय छत पर है।
इन वाक्यों में ने, को, से, के लिए, के, पर शब्दों का प्रयोग होने पर इनका अर्थ स्पष्ट हुआ है। ने, को, से, के लिए, के, पर ये सभी शब्द वाक्य में आई संज्ञाओं का दूसरी संज्ञाओं या क्रियापदों से संबंध बता रहे हैं। ये सभी शब्द कारकों के चिहन् हैं।
हिंदी में कारक आठ प्रकार के होते हैं:
१. कर्ता: (ने) काम करने वाले को कर्ता कारक कहते हैं।
२. कर्म: (को) जिस पर क्रिया का फल पड़े, उसे कर्म कहते हैं और क्रिया से उसके संबंध को कर्म कारक कहते हैं।
३. करण: (से, के, द्वारा) कर्ता जो भी काम करता है, वह किसी वस्तु की सहायता से, उसका प्रयोग करके करता है।
४. संप्रदान: (को, के लिए) कर्ता जिसके लिए काम करता है, उसे संप्रदान कारक कहते हैं। 
५. अपादान: (से) संज्ञा के जिस रूप से एक वस्तु का दूसरे से अलग होना पाया जाता है, वह अपादान कारक कहलाता है। 
६. संबंध: (का, के, की, स, रे, री) संज्ञा या सर्वनाम के जिस रूप से किसी एक वस्तु या व्यक्ति का संबंध दूसरी वस्तु के साथ ज्ञात होता है, उसे संबंध कारक कहते हैं। 
७. अधिकरण: (में, पर) क्रिया के आधार को बताने वाला संज्ञा का रूप अधिकरण कारक कहलाता है।
८. संबोधन: (हे! अरे!) संज्ञा के जिस रूप से किसी को पुकारा या सावधान करने का बोध हो, उसे संबोधन कारक कहते हैं। `
      }
    },
    {
      label: 'निम्नलिखित वाक्यों में रेखांकित शब्दों के कारक को पहचानिये',
      id: 'hi-preposition1',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'विद्यार्थी कलम से लिखते हैं। ',
            options: 'करण कारक, अधिकरण कारक, संबंध कारक '
          },
          {
            qText: 'पहाड़ से झरना बहता है। ',
            options: 'अपादान कारक, अधिकरण कारक, संबोधन कारक'
          },
          {
            qText: 'मेरी बहन डॉक्टर है। ',
            options: 'संबंध कारक, करण कारक, अपादान कारक'
          },
          {
            qText: 'सीमा ने पत्र लिखा। ',
            options: 'कर्ता कारक, संबोधन कारक, अपादान कारक'
          },
          {
            qText: 'मेहमान को चाय दो। ',
            options: 'संप्रदान कारक, कर्म कारक, अधिकरण कारक'
          }
        ]
      }
    },
    {
      label: 'निम्नलिखित वाक्यों में रेखांकित शब्दों के कारक को पहचानिये',
      id: 'hi-prepositions2',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'पाँव से पायल गिर पड़ी।',
            options: 'अपादान कारक, कर्ता कारक, अधिकरण कारक'
          },
          {
            qText: 'अरे ! तुम पास हो गए। ',
            options: 'संबोधन कारक, अपादान कारक, करण कारक'
          },
          {
            qText: 'चिड़ियाँ घोंसले में हैं।',
            options: 'अधिकरण कारक, कर्म कारक, संप्रदान कारक '
          },
          {
            qText: 'सुरेश, सीता के लिए गिफ्ट लाया।',
            options: 'संप्रदान कारक, संबंध कारक, कर्म कारक '
          },
          {
            qText: 'पुजारी जी चन्दन घिस रहे हैं।',
            options: 'कर्म कारक, संबोधन कारक, करण कारक'
          }
        ]
      }
    },
    {
      id: 'words-hi',
      type: 'passage',
      label: 'अविकारी शब्द ',
      style: 'big',
      data: {
        title: 'अविकारी शब्द ',
        text: `जो शब्द लिंग, वचन, कारक, पुरूष और काल के कारण नहीं बदलते, वे अव्यय कहलाते हैं |
# अव्यय के प्रकार
१. क्रिया विशेषण : वे शब्द जो क्रिया की विशेषता प्रकट करें, उन्हें क्रिया-विशेषण कहते हैं | 
जैसे: परसों मंगलवार हैं, आपको अभी जाना चाहिए, आजकल, कभी, प्रतिदिन, रोज, सुबह, अक्सर, रात को, चार बजे, हर साल आदि।
२. सम्बन्ध बोधक : जिस अव्यय शब्द से संज्ञा अथवा सर्वनाम का सम्बन्ध वाक्य के दूसरे शब्दों के साथ प्रकट होता है, उसे सम्बन्ध बोधक अव्यय कहते है।
जैसे: से पहले, के भीतर, की ओर, की तरफ, के बिना, के अलावा, के बगैर, के बदले, की जगह, के साथ, के संग, के विपरीत आदि।
३. समुच्चय बोधक : जो अव्यय दो शब्दों अथवा दो वाक्यों को जोड़ने का कार्य करते हैं उन्हें समुच्चय बोधक अव्यय कहते है। 
जैसे: और, तथा, एवं, मगर, लेकिन, किन्तु, परन्तु, इसलिए, इस कारण, अतः, क्योंकि, ताकि, या, अथवा, चाहे आदि।
४. विस्मयादि बोधक : जिन अविकारी शब्दों से हर्ष, शोक, आश्चर्य घृणा, दुख, पीड़ा आदि का भाव प्रकट हो उन्हे विस्मयादि बोधक अव्यय कहते हैं | 
जैसे: ओह!, हे!, वाह!, अरे!, अति सुंदर!, उफ!, हाय!, धिक्कार!, सावधान!, बहत अच्छा!, तौबा-तौबा!, अति सुन्दर आदि ।`
      }
    },
    {
      id: 'classify-avikari-1',
      label: 'सम्बन्ध बोधक, समुच्चय बोधक और विस्मयादि बोधक',
      type: 'classifySentence',
      data: {
        title: 'अविकारी शब्दों के प्रकार को पहचानें।',
        types: [
          {
            name: 'सम्बन्ध बोधक',
            text: `छत के ऊपर टंकी है।
आपके यहां पर मेहमान आएंगे। 
रोहित के बजाय रैना को खिलाओ। 
रोहन के पीछे पुलिस पड़ी है। 
आप सबके अतिरिक्त और किसने खाना खाया?`
          },
          {
            name: 'समुच्चय बोधक',
            text: `मोहित और कल्पना अच्छे मित्र हैं। 
श्वेता, अरुणा, तथा रोमेश घूमने गए। 
अच्छा भोजन एवं प्रातः भ्रमण सेहत के लिए अच्छे हैं। 
सीता अर्थात जनक की पुत्री जगत में आदर की पात्र बनीं। 
अर्जुन यानी कुंती-पुत्र को मोह ने घेर लिया। 
उसे अहंकारग्रस्त देख कर लग रहा था मानो रावण हमारे सामने उपस्थित हो गया हो। 
आप या हम में से कोई एक वहां जायेगा। 
मोहक शुशील ही नहीं, वरन आज्ञाकारी भी है। `
          },
          {
            name: 'विस्मयादि बोधक',
            text: `वाह! क्या खेला है !
छिः छिः कोई ऐसा भी करता है।
अरे! यह तुमने तो अनर्थ कर दिया। 
खैर! अब पछताने से क्या फायदा।
लो! अब यही दिन देखने को बचा था। 
धत तेरे की! सब गड़बड़ हो गया। 
हाय! उफ़! यह सब भी अभी होना था।`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'निम्नलिखित को जोड़िए।',
      id: 'match-idioms',
      commonData: {
        title: 'मुहावरे को उनके अर्थ से मिलाएं।'
      },
      data: [
        `अंग-अंग ढीला होना,	थक जाना
आँख दिखाना, गुस्से से देखना
आँखों में धूल झोंकना, धोखा देना
कान भरना, चुगली करना
मुँह में पानी भर आना, ललचाना`,

        `नमक-मिर्च लगाना,	बढ़ा-चढ़ाकर कहना
भीगी बिल्ली बनना,	डर जाना
घी के दिये जलाना,	खुशी मनाना
चार चाँद लगाना, शोभा बढ़ाना
कान खाना, परेशान करना`,

        `कान खड़े होना, चौकना होना
अक्ल का दुश्मन, मूर्ख
आँख चुराना, छिपना
कान कतरना, चतुर होना
नाक में दम करना, तंग करना`,

        `दाँत खट्टे करना, बुरी तरह हराना
गले का हार, बहुत प्यारा
पानी-पानी होना, लज्जित होना
हवा लगना, असर पड़ना
हाथ सांफ करना, ठगना`
      ]
    },
    {
      id: 'punctuation-hi',
      type: 'passage',
      label: 'विराम-चिह्न',
      style: 'big',
      data: {
        title: 'विराम-चिह्न',
        text: `विराम का अर्थ “रुकना” है। लिखित भाषा में में प्रयोग किए जाने वाले लिखित चिन्हो को विराम-चिह्न कहते है ।
# विराम-चिह्न के प्रकार
१. पूर्ण विराम-Full Stop (।)
२. अर्द्ध विराम-Semi Colon (;)
३. अल्प विराम-Comma (,)
४. उप विराम-Colon (:)
५. प्रश्नवाचक चिन्ह-Question Mark (?)
६. योजक चिन्ह-Hyphen (–)
७. कोष्ठक चिन्ह-Bracket ()
८. अवतरण या उदहारणचिन्ह-Inverted Comma ( “…” )
९. विस्मयादिबोदक चिह्न (Sign of Exclamation). [ ! ]
१०. लाघव चिन्ह/ संक्षेपसूचक -Abbreviation Sign (०)
११. निर्देशक चिह्न ( Sign of Dash) [ — ]
१२. विवरण चिन्ह-Sign of Following ( :- )
१३. विस्मरण चिन्ह या त्रुटिपूरक चिन्ह/हंसपद -Oblivion Sign (^)`
      }
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-punctuation1',
      type: 'mcq',
      data: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।',
        questions: [
          {
            qText: 'विराम चिन्ह का अर्थ क्या है ? ',
            options: 'ठहरना या रुकना, वाक्यों का दोहराव, इनमे से कोई नहीं '
          },
          {
            qText: 'इनमे से हंसपद कौनसा है ? ',
            options: '(^), (“”), (?)'
          },
          {
            qText:
              'जब  एक  ही वाक्य के में जब एक से अधिक उपवाक्य , शब्द या वाक्यांश समान रूप से होते है तो किस विराम चिन्ह का उपयोग किया जाता है ? ',
            options: 'अल्प विराम, पूर्ण विराम, अर्द्ध विराम '
          },
          {
            qText:
              'प्रश्नवाचक तथा विस्मयादिबोधक को छोड़कर सभी वाक्यों के अन्त में प्रयुक्त होता है– ',
            options: 'पूर्ण विराम, अर्द्ध विराम, हंसपद विराम'
          },
          {
            qText: 'आपने अपने खेत बेच दिये इसमें कौनसा विराम चिन्ह आएगा ?',
            options: 'प्रश्न विराम, अर्द्ध विराम, अल्प विराम '
          },
          {
            qText: 'निम्नलिखित विराम चिन्ह (:) का सही नाम बताइए-',
            options: 'उपविराम, अल्पविराम, विवरण चिन्ह '
          },
          {
            qText:
              'निम्नलिखित वाक्य में से सही विराम चिन्ह युक्त वाक्य को चुनिए|',
            options:
              'अरे! तुम इतनी जल्दी उठ गए, अरे; तुम इतनी जल्दी उठ गए, अरे, तुम इतनी जल्दी उठ गए'
          }
        ]
      }
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-spelling',
      type: 'mcq',
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से शुद्ध वर्तनी का चयन कीजिए।'
      },
      data: [
        {
          questions: [
            {
              qText:
                'शारीरिक आरोज्ञ के लिए प्रात : एवं संध्याकालीन भ्रमण अन्यन्त लाभप्रद माना गया है',
              options: 'आरोग्य, अरोग्य, आरोग'
            },
            {
              qText: 'मदर टेरेसा का जीवन रोगियों के सेवा-सूश्रूषा',
              options: 'शुश्रूषा, सुश्रूषा, शूश्रुषा'
            },
            {
              qText: 'ग्यान का भण्डार अथाह होता है',
              options: 'ज्ञान, गिआन, ज्यान'
            },
            {
              qText: 'विज्ञान की देन है विशलेषण, निव्यर्क्तिकता तथा तटसता',
              options: 'निर्वैयक्तिकता, निव्यर्क्तिकता, निर्वेयक्तिकता'
            },
            {
              qText: `रोगी में उत्कट जिजीविशा थी`,
              options: 'जिजीविषा, जिजिविषा, जिजीविशा'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'मैं तुम्हारे उज्वल भविष्य की कामना करता है',
              options: 'उज्ज्वल, ऊज्ज्वल, उजवल'
            },
            {
              qText: 'प्रकारान्त्र से मेरे कथन का अभिप्राय आपसे मिलता है',
              options: 'प्रकारान्तर, प्राकारनतर, प्रकारान्त्र'
            },
            {
              qText:
                'मनुष्य जिसको सामान्य समझता है उसकी सेवा में उसे आनंद प्राप्त करता है',
              options: 'सम्मान्य, समान्य, साम्मान्य'
            },
            {
              qText:
                'जहाँ आत्मीयता हो वहां विचार विनियन में उपचारिकता नहीं होती',
              options: 'औपचारिकता, उपचारीकता, उपचारिकता'
            },
            {
              qText: `दिन रात अध्ययन करके भी वह प्रथम श्रेणी प्राप्त न कर सका`,
              options: 'अध्ययन, अध्धय्यन, आध्यन'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'दिनकर राष्ट्रीय भावधारा के ओजस्वी कवियों में अगरगन्य है',
              options: 'अग्रगण्य, अगर्गन्य, अर्गग्न्य'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'अतिरंजित, अतिआवश्यक, क्रियांवायन'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'ताम्र, उचारण, इतयादि'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'स्रोत, संसारिक, कीर्ती'
            },
            {
              qText: `दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है`,
              options: 'ऊंचाई, उन्नति, उभय'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'परीक्षा, पिरीक्षा, प्रिरिक्षा'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'संपूर्ण, सपूर्ण, स्म्र्पूर्ण'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'ज्योत्स्ना, जोत्सना, जयोतसना '
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'क्षेत्र, छेत्र, क्षत्र'
            },
            {
              qText: `शुद्ध वर्तनी का चयन कीजिए`,
              options: 'ऋषि, रिसी, रिशी'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'शारीरिक, शारीरीक, शरिरिक'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'अधिशासी, अधिसाशी, अधीशाषी'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'ज्योत्स्ना, ज्योतिसना, जोत्सना'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'संन्यासी, सन्यासी, सनियासी'
            },
            {
              qText: `शुद्ध वर्तनी का चयन कीजिए`,
              options: 'व्यावहारिक, व्यावाहारिक, वैव्हारिक'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'चातक सुवाति की बूंद का प्यासा होता है',
              options: 'स्वाति, सुवाति, स्वाती'
            },
            {
              qText: 'परमात्मा ही समग्र ब्रम्हाण्ड का रचयीता है',
              options: 'रचयिता, रचियता, राचियता'
            },
            {
              qText: 'उप्रयुक्त पंक्तियाँ दिनकर की कविता से ली गई है',
              options: 'उपर्युक्त, उपरोक्त, ऊपर्युक्त'
            },
            {
              qText: 'दिए गये शब्दों में शुद्ध वर्तनी वाला शब्द है',
              options: 'सुषुप्ति, सुस्प्ती, सुश्प्ती'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'दीर्घायु, दीरघायु, दीघायु'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'श्रृंगार, सिंगार, शिगार'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'अध्येता, अधियेता, अध्यात'
            },
            {
              qText: 'शुद्ध वर्तनी का चयन कीजिए',
              options: 'कवयित्री, कवियत्री, कवियित्री'
            },
            {
              qText: `शुद्ध वर्तनी का चयन कीजिए`,
              options: 'नक्षत्र, नच्छत्र, नक्षत्तर'
            }
          ]
        }
      ]
    },
    {
      id: 'creating words-hi',
      type: 'passage',
      label: 'शब्द निर्माण',
      style: 'big',
      data: {
        title: 'शब्द निर्माण',
        text: `शब्दों के आरंभ अथवा अंत में कुछ जोड़कर अथवा उनकी मात्राओं या स्वर में कुछ परिवर्तन करके नवीन-से-नवीन अर्थ-बोध कराना चाहते हैं। इस तरह एक शब्द से कई अर्थों की अभिव्यक्ति हेतु जो नए-नए शब्द बनाए जाते हैं उसे शब्द-रचना कहते हैं।
जो शब्दाशों से पहले जुड़कर उनके अर्थ बदल देते हैं, वे उपसर्ग कहलाते हैं।
जो शब्दांश शब्दों के अंत में जुड़कर उनके अर्थ को बदल देते हैं, वे प्रत्यय कहलाते हैं।`
      }
    },
    {
      label: 'सही उत्तर का चयन करें।',
      id: 'hi-creating words',
      type: 'mcq',
      commonData: {
        title: 'नीचे दिए गए विकल्पों में से सही उत्तर चुनिए।'
      },
      data: [
        {
          questions: [
            {
              qText: 'कौन-सा शब्द ‘अ’ उपसर्ग से नहीं बना है?',
              options: 'अनंत, अगोचर, अमर'
            },
            {
              qText: 'कौन-सा शब्द ‘अनु’ उपसर्ग से नहीं बना है?',
              options: 'अगम्य, अनुपम, अनासक्त'
            },
            {
              qText: 'कौन-सा शब्द ‘अव’ उपसर्ग से युक्त नहीं है?',
              options: 'अवहेलना, अवगुण, अवरुद्ध'
            },
            {
              qText: 'कौन-सा शब्द ‘उत’ उपसर्ग युक्त नहीं है?',
              options: 'उपज, उद्योग, उनमाद'
            },
            {
              qText: `‘क’ उपसर्ग युक्त शब्द छाँटिए।`,
              options: 'कुपुत्र, कुबेर, कुमार'
            }
          ]
        },

        {
          questions: [
            {
              qText: '‘नि’ उपसर्ग युक्त शब्द छाँटिए',
              options: 'निकृष्ट, निष्ठ, निष्कासन'
            },
            {
              qText: 'निः उपसर्ग युक्त शब्द छाँटिए',
              options: 'निर्मल, नियम, निपात'
            },
            {
              qText: 'दुः उपसर्ग युक्त शब्द छाँटिए',
              options: 'दुर्दशा, दुधारू, दुपहरिया'
            },
            {
              qText: 'निम्नलिखित में से किसमें एरा प्रत्यय लगा हुआ है?',
              options: 'लुटेरा, डेरा, फेरा'
            },
            {
              qText: `निरभिमान में मूल शब्द क्या है?`,
              options: 'अभिमान, निर, मान'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'उपसर्ग का प्रयोग होता है ?',
              options:
                'शब्द के आदि (आरंभ) में, शब्द के मध्य में, शब्द के अंत में'
            },
            {
              qText:
                'जो धातु या शब्द के अंत में जोड़ा जाता है, उसे क्या कहते हैं?',
              options: 'प्रत्यय,  अव्यय,  उपसर्ग'
            },
            {
              qText: '‘प्रख्यात’ में प्रयुक्त उपसर्ग है-',
              options: 'प्र,  त,  प्रख '
            },
            {
              qText: '‘प्रत्युत्पन्नमति’ शब्द में कौन-सा उपसर्ग है? ',
              options: 'प्रति,  प्रत्यु, इनमें से कोई नहीं'
            },
            {
              qText: `‘गमन’ शब्द को विपरीतार्थक बनाने के लिए आप किस उपसर्ग का प्रयोग करेंगे ?`,
              options: 'आ,  प्रति,  अनु'
            }
          ]
        },

        {
          questions: [
            {
              qText: '‘निर्वासित’ में प्रत्यय है – ',
              options: 'इत, नि, सित'
            },
            {
              qText: '‘लेखक’ शब्द के अंत में कौन-सा प्रत्यय लगा हुआ है? ',
              options: 'अक, इक, आक '
            },
            {
              qText:
                '‘अनुज’ शब्द को स्त्रीवाचक बनाने के लिए आप किस प्रत्यय का प्रयोग करेंगे? ',
              options: 'आ,  ईय,  ई '
            },
            {
              qText:
                'सुत शब्द को स्त्रीवाचक बनाने के लिए किस प्रत्यय का प्रयोग किया जाएगा? ',
              options: 'आ,  ईय, इक'
            },
            {
              qText: `‘स्पृश्य’ शब्द को विलोमार्थक बनाने के लिए किस उपसर्ग का प्रयोग करेंगे?`,
              options: 'अ, अनु, कु'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'प्रतिकूल’ शब्द में कौन-सा उपसर्ग प्रयुक्त है ? ',
              options: 'प्रति,  परा,  परि '
            },
            {
              qText:
                'कौन-सा उपसर्ग ‘आचार’ शब्द से पूर्व लगने पर उसका अर्थ ‘जुल्म’ हो जाता है ? ',
              options: 'अति, निर्, अन्'
            },
            {
              qText: 'निम्नांकित में कौन-सा शब्द कृदन्त प्रत्यय से बना है ?',
              options: 'बिकाऊ,  दुधारू, कृपालु'
            },
            {
              qText: 'किस शब्द में ‘आवा’ प्रत्यय नहीं है ? ',
              options: 'लावा,  चढ़ावा,  भुलावा'
            },
            {
              qText: `इनमें कौन-सा शब्द समूहवाचक प्रत्यय नहीं है ? `,
              options: 'प्रेस, गण,  वर्ग '
            }
          ]
        },

        {
          questions: [
            {
              qText:
                '‘व्यवस्था’ से पूर्व कौन-सा उपसर्ग लगायें कि उसका अर्थ विपरीत हो जाए ? ',
              options: 'अ, आ,  अप'
            },
            {
              qText: 'निम्न में से किस शब्द में प्रत्यय का प्रयोग हुआ है ? ',
              options: 'धनिक, अलक, पुलक '
            },
            {
              qText: 'निम्नलिखित में से किस शब्द में प्रत्यय लगा हुआ है ? ',
              options: 'जादूगर , नगर, अगर-मगर '
            },
            {
              qText: 'किस शब्द में उपसर्ग का प्रयोग हुआ है ? ',
              options: 'उपकार,  लाभदायक, पढ़ाई'
            }
          ]
        },

        {
          questions: [
            {
              qText: '‘अनुवाद’ में प्रयुक्त उपसर्ग है ?',
              options: 'अनु,  अन, अव'
            },
            {
              qText: 'बेधुली - इस शब्द में उपसर्ग बताओ -',
              options: 'बे, ब, बा'
            },
            {
              qText: 'निम्नलिखित में से किसमें आई प्रत्यय है?',
              options: 'पढ़ाई, कढ़ाई, सगाई'
            },
            {
              qText: 'निम्नलिखित शब्दों में से किस में प्रत्यय लगा हुआ है?',
              options: 'लघुता, महान, शिक्षा'
            }
          ]
        }
      ]
    }
  ]
};
