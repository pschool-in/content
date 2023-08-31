export default {
  label: 'शब्द',
  id: 'mr-word',
  img: 'word',
  list: [
    {
      id: '2-letter',
      type: 'sequence',
      label: '2 Letter word',
      commonData: {
        title: 'Connect Letters to form Word',
        lang: 'mr'
      },
      data: [
        `ऊन, थंडी, पृथ्वी, धरा, भूमी, वृक्ष, वेल, नीर, वायू, हवा`,
        `वारा, मेघ, दुःख, मुख, धार, दार, ढाल, दाट, नाव, भाषा `,
        `वाद, वाडा, पुत्र, नेत्र, जल, धन, बळ, लढ, चव, बघ`,
        `चेंडू, बट, ठग, ताट, माय, दही, धीट, धीर, पीक, फणी `,
        `बीळ, माती, माफी, वेणी, वेळ, हेवा, लेणी, रेघ, रेती, गती`,
        `तर्क, गर्व, वर्ण, खर्च, दिशा, निशा, खिसा, बंद, पंथ, अंत`,
        `त्याच्या, होते, साठी, वर, सह, असू, येथे, एक, आहे, द्वारे`,
        `शब्द, काय, काही, किंवा, आणि, मध्ये, आम्ही, करू, त्यांच्या, तर`,
        `कसे, सांगा, संच, तीन, वाचा, हात, मोठ्या, जोडा, मोठा, उच्च`,
        `अशा, गेला, घर, चित्र, पुन्हा, प्राणी, बिंदू, आई, जग, काम`
      ]
    },
    {
      id: '3-letter',
      type: 'sequence',
      label: '3 Letter word',
      commonData: {
        title: 'Connect Letters to form Word',
        lang: 'mr'
      },
      data: [
        `अटक, अभय, अमर, चरण, शरण, सफल, कडक, भजन, पदर, गरम`,
        `शतक, चमक, कवच, चटक, नमन, नयन, सुमन, नूतन, सुरेख, सुंदर `,
        `बचत, मदत, बालक, चालक, मालक, झाकण, आभाळ, झालर, घागर, पांडव `,
        `ताकत, काळोख, अंधार, उजेड, पणती, बरणी, बदली, भरारी, सारथी, चौफेर `,
        `दौलत, कौरव, तलाव, सागर, धरती, लढाई, सफाई, नाजूक, साजूक, चाबूक`,
        `तलाव, सागर, दानव, मानव, प्रसाद, प्रकाश, पालवी, पालखी, दर्शन, पर्वत`,
        `म्हणून, आहेत, पासून, परंतु, आपण, बाहेर, इतर, खाईन, म्हणाला, प्रत्येक`,
        `इच्छित, तसेच, देखील, लहान, शेवट, ठेवले, अगदी, जमीन, पाहिजे, विचारू`,
        `पुरुष, बदल, गरज, प्रयत्न, आम्हाला, जवळ, तयार, वडील, नवीन, नंतर`,
        `हलवा, मुलगा, वापर, आपल्या, बद्दल, अनेक, लेखन, त्यामुळे, अधिक, दिवस`
      ]
    },
    {
      id: '4-letter',
      type: 'sequence',
      label: '4 Letter word',
      commonData: {
        title: 'Connect Letters to form Word',
        lang: 'mr'
      },
      data: [
        `कोणत्याही, राहतात, अंतर्गत, आढळले, अजूनही, वनस्पती, दरम्यान, कदाचित, करवत, सुरुवात`,
        `सुखसोयी, अनेकदा, नेहमीच्या, दरवाजा, सांगितले, गुणाकार, पृष्ठभाग, शिकवले, आठवडा, विकसित`,
        `उबदार, मजबूत, उत्पादन, सर्वोत्तम, लवकर, क्रियापद, चालणार, दिसतात`
      ]
    },
    {
      id: 'jumbled',
      type: 'sequence',
      label: 'Form word',
      commonData: {
        title: 'Connect Letters to form Word',
        lang: 'mr'
      },
      data: [
        //animals
        `मांजर,कुत्रा,शेळी,गाय,गाढव,घोडा,डुक्कर,हत्ती,सिंह,माकड`,
        `गेंडा,कोल्हा,मगर,अस्वल,उंट,देवमासा,वाघ,मेंढ्या,मासे,बेडूक`,
        `खेकडा,साप,बैल,कासव,उंदीर,मुंगी,वटवाघूळ,म्हैस,मधमाशी, कोळी`,
        //birds
        `कावळा,पारवा,बदक,कोंबडी,पोपट,मोर,चिमणी,गरुड,शहामृग,घुबड`,
        `सफरचंद,द्राक्षे,केळी,पेरू,फणस,आंबा,संत्री,पपई,अननस,टरबूज`,
        //fruits
        `डाळिंब,अंजीर,सीताफळ,मनुका,खारीक,कस्तुरी`
      ]
    },
    {
      type: 'match',
      label: 'जोड्या लावा',
      id: 'synonyms',
      commonData: {
        title: 'समानार्थी शब्दांच्या योग्य जोड्या लावा'
      },
      data: [
        `अगणित, असंख्य
अडचण, समस्या
अनल, अग्नी
अनाथ, पोरका
अरण्य, वन
अपराध, गुन्हा`,

        `आभाळ, आकाश
आराम, विश्रांती
आयुष्य, जीवन
आज्ञा, आदेश
आनंद, हर्ष
आरंभ, सुरुवात`,

        `इच्छा, आकांक्षा
इलाज, उपाय
इशारा, खूण
इतर, इत्यादी
ईर्षा, चुरस
ईश्वर, देव`,

        `उक्ती, वचन
उणीव, कमतरता
उदर, पोट
उशीर, विलंब
उपजत, जन्मापासून
उपासना, भक्ती`,

        `ऐश्वर्य, वैभव
ऐट, रुबाब
ओढा, झरा
ओझे, वजन
ओळख, परिचय
ओसाड, निर्जन`,

        `औदार्य, दानशीलता
औत्सुक्य, कुतूहल
अंतर, फरक
अंगण, आवार
अंतरिक्ष, अवकाश
अंधार, काळोख`,

        `कठीण, अवघड
कटु, कडू
कणव, दया
काम, कार्य
कारागृह, तुरुंग
काठ, किनारा`,

        `खग, पक्षी 
खण, कप्पा
खल, दुष्ट
खंत, खेद
खात्री, विश्वास 
खिडकी, गवाक्ष`,

        `गरज, आवश्यकता
गलका, गडबड
गंमत, मौज
गंध, वास,
गोड, मधुर
गुन्हा, अपराध`,

        `घर, सदन
घोडा, अश्व
घास, कवळ
चव, रुची
चाक, चक्र
चिंता, काळजी`
      ]
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'antonyms',
      commonData: {
        title: 'Match words with opposite meaning.'
      },
      data: [
        `कुशल, अकुशल
चल, अचल
तुलनिय, अतुलनिय
दृश्य, अदृश्य
नियमित, अनियमित`,

        `नित्य, अनित्य
नियंत्रित, अनियंत्रित
निश्चित, अनिश्चित
नीती, अनीती
न्याय, अन्याय`,

        `पराजित, अपराजित
परिचित, अपरिचित
पवित्र, अपवित्र
पारदर्शक, अपारदर्शक
पूर्ण, अपूर्ण`,

        `पूर्णांक, अपूर्णांक
प्रकट, अप्रकट
प्रत्यक्ष, अप्रत्यक्ष
प्रमाण, अप्रमान
प्रसन्न, अप्रसन्न`,

        `प्रशस्त, अप्रशस्त
प्रसिद्ध, अप्रसिद्ध
प्रामाणिक, अप्रामाणिक
प्रिय, अप्रिय`,

        `अनुभवी, अननुभवी
आरोग्य, अनारोग्य
अपेक्षित, अनपेक्षित
अवधान, अनवधान
आवश्यक, अनावश्यक`,

        `कबूल, नाकबूल
खुश, नाखूश, नाराज
पसंत, नापसंत
आवड, नावड
आवडता, नावडता`,

        `रोगी, निरोगी
संदिग्ध, नि:संदिग्ध
स्वार्थी, नि:स्वार्थी
पापी, निष्पाप
अपराधी, निरपराधी`,

        `लागू, गैरलागू
समज, गैरसमज
सोय, गैरसोय
हजर, गैरहजर
शिस्त, गैरशिस्त`,

        `सचेतन, अचेतन
सबला, अबला
सकर्मक, अकर्मक
सलग, अलग
सशक्त, अशक्त`
      ]
    },
    {
      id: 'mcq',
      label: 'समानार्थी शब्द ओळखा',
      type: 'mcq',
      lockAfter: 1,
      commonData: {
        title: 'खालील वाक्यांमधील अधोरेखित शदांचे समानार्थी शब्द ओळखा'
      },
      data: [
        {
          questions: [
            {
              qText: 'पुढे मोठा *समुद्र* आहे.',
              options: 'सागर, नदी, तलाव'
            },
            {
              qText: 'तिथे खूप *अंधार* असेल.',
              options: 'काळोख, उजेड, प्रकाश'
            },
            {
              qText: 'आई आपल्यावर किती *माया* करते.',
              options: 'प्रेम, राग, द्वेष'
            },
            {
              qText: 'जेवण खूपच *चविष्ट* होते.',
              options: 'रुचकर, तिखट, आंबट'
            },
            {
              qText: 'कैद्याला *कारागृहात* टाकण्यात आले.',
              options: 'तुरुंगात, पागलखान्यात, दवाखान्यात'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'आजचा गणिताचा पेपर खूप *अवघड* होता.',
              options: 'कठीण, सोपा, सौम्य'
            },
            {
              qText: 'राजाचे *ऐश्वर्य* पाहण्यासारखे होते.',
              options: 'वैभव, देखणा, गरिबी'
            },
            {
              qText: `माझ्या चुकीची मी लगेच *माफी* मागितली.`,
              options: 'क्षमा, दया, शांती'
            },
            {
              qText: 'खोलीभर फुलांचा *सुगंध* दरवळत होता.',
              options: 'सुवास, श्वास, दुर्गंध'
            },
            {
              qText: 'मला आईची *काळजी* वाटते.',
              options: 'चिंता, दोष, छंद'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'तो माझा *ज्येष्ठ* बंधू आहे.',
              options: 'मोठा, लहान, छोटा'
            },
            {
              qText: 'तुम्ही खूप *हुशार* आहात आहे हे आम्हा सर्वांना माहीत आहे.',
              options: 'बुद्धिमान, बावळट, आचरट'
            },
            {
              qText: `तो खूपच *धिप्पाड* माणूस आहे.`,
              options: 'मजबूत, वेगळा, बारीक'
            },
            {
              qText: 'त्याने चोरी करण्याचा *गुन्हा* केला.',
              options: 'अपराध, कार्य, काम'
            },
            {
              qText: 'हे ठिकाण *धोकादायक* आहे.',
              options: 'असुरक्षित, सुरक्षित, जुने'
            }
          ]
        }
      ]
    },
    {
      id: 'mcq-2',
      label: 'विरुद्धार्थी शब्द ओळखा',
      type: 'mcq',
      lockAfter: 1,
      commonData: {
        title: 'खालील वाक्यांमधील अधोरेखित शदांचे विरुद्धार्थी शब्द ओळखा'
      },
      data: [
        {
          questions: [
            {
              qText: 'त्याची मैदानावरची कामगिरी *तुलनीय* आहे.',
              options: 'अतुलनीय, अकुशल, साधी'
            },
            {
              qText: 'आपण *अनीतीच्या* मार्गाने चालावे.',
              options: 'नीतीच्या, साध्या, वाकड्या'
            },
            {
              qText: 'काच *अपारदर्शक* असते.',
              options: 'पारदर्शक, दर्शक, पांढरी'
            },
            {
              qText: 'सकाळी *अप्रसन्न* वातावरण असते.',
              options: 'प्रसन्न, ढगाळ, धुरकट'
            },
            {
              qText: 'गुरुजींना खोटे बोलणे *प्रिय* आहे.',
              options: 'अप्रिय, अप्रसिद्ध, अप्रकट'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'ते अतिशय *अनुभवी* डॉक्टर आहेत.',
              options: 'अननुभवी, अपरिचित, अनावधान'
            },
            {
              qText: 'मला शांतता *नापसंत* आहे.',
              options: 'पसंत, वसंत, उसंत'
            },
            {
              qText: `गणित माझा *नावडता* विषय आहे.`,
              options: 'आवडता, ओळखीचा, नेहमीचा'
            },
            {
              qText: '*स्वार्थीपणाने* जीवन जगण्यात आनंद आहे.',
              options: 'निस्वार्थीपणाने, निरोगीपणाने, रोगीपणाने'
            },
            {
              qText: 'तो वर्गात रोज *गैरहजर* असतो.',
              options: 'हजर, शिस्त, गैरसोय'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'ससा हा *धीट* प्राणी आहे.',
              options: 'भित्रा, वीर, शूर'
            },
            {
              qText: 'वीणा *भरभर* चालते.',
              options: 'हळूहळू, जलद, लवकर'
            },
            {
              qText: `सूर्य पूर्वेला *मावळतो*.`,
              options: 'उगवतो, विझतो, मावतो'
            },
            {
              qText: 'तपस्या भंग केल्यामुळे ऋषींनी त्याला *आशीर्वाद* दिला.',
              options: 'शाप, शुभेच्छा, नमन'
            },
            {
              qText: 'बर्फवृष्टी झाल्यावर वातावरण चांगलेच *गरम* झाले होते.',
              options: 'गार, उष्ण, नरम'
            }
          ]
        },
        {
          questions: [
            {
              qText: '*ताजे* अन्न खाऊ नये.',
              options: 'शिळे, वाघडे, उघडे'
            },
            {
              qText: '*असभ्य* वागणे सगळ्यांनाच आवडते.',
              options: 'सभ्य, गस्त, स्वस्त'
            },
            {
              qText: `गांधीजी *हिंसेचे* पुजारी होते.`,
              options: 'अहिंसेचे, अनीतीचे, अन्यायाचे'
            },
            {
              qText: 'सध्या जीवनावश्यक वस्तूंची *विपुलता* आहे.',
              options: 'टंचाई, समृद्धी, वैपुल्य'
            },
            {
              qText: 'कोकिळेचा आवाज *कर्कश* आहे.',
              options: 'मंजुळ, बोलका, मोठा'
            }
          ]
        }
      ]
    },
    {
      type: 'completeWord',
      id: 'vocabulary',
      label: 'Find the word',
      commonData: {
        title: 'दिलेल्या संकेताच्या आधारावर शब्द पूर्ण करा',
        lang: 'mr'
      },
      data: [
        `पाण्यात राहणारा आकाराने प्रचंड असा प्राणी | पाणघोडा | पा___
आकाशात दिसणारी सातरंगी कमान | इंद्रधनुष्य | इं____
आपल्या चेहऱ्याचा खालचा भाग | हनुवटी | ___टी
सूर्यासारखा रंग असलेले फूल | सूर्यफूल | सू___
कुलूप उघडायला लागते | चावी | चा_
फुले ठेवण्यासाठी वापरली जाते | फुलदाणी | ___णी
कच्च्या भाज्या, फळ इत्यादी चे मिश्रण | कोशिंबीर | _शिं__
समुद्राखाली गुप्तपणे संचार करणारी युद्धनौका | पाणबुडी | ___डी
सोंगट्यांनी खेळायचा खेळ | बुद्धिबळ | बु___
सगळ्यांची आवडती दुचाकी | सायकल | ___ल`,

        `आठ हात असलेला एक समुद्री जीव | ऑक्टोपस | ऑ___
ह्याच्यापासून साखर बनते | ऊस | _स
विज्ञानाचे ज्ञान असलेले तज्ञ | शास्त्रज्ञ | शा__
रुळांवर चालणारी झुकू-झुकू गाडी | आगगाडी | __गा_
सगळ्यांना आवडणारे गोल सँडविच | बर्गर | ब__
हा फुटल्यास विनाश होतो | ज्वालामुखी | ज्वा___
आपण आजारी पडल्यावर आपल्याला औषध देतात | डॉक्टर | डॉ__
जिथे वस्तू तयार केल्या जातात | कारखाना | ___ना
हा रेस्टॉरंट किंवा हॉटेल मध्ये जेवण बनवतो | आचारी | __री
आपल्या शरीरातले सगळ्यात महत्वपूर्ण अवयव | मेंदू | _दू`,

        ` हे जमीन खोदण्यासाठी वापरले जाते | कुदळ | कु__
एक तंतुवाद्य | व्हॉयोलिन | व्हॉ___
महाराष्ट्रात बोलली जाणारी भाषा | मराठी | __ठी
ऐकण्याचे अवयव | कान | _न
राजाचे निवास्थान | राजवाडा | ___डा
चित्र काढणारा | चित्रकार | चि___
एक दिशा | पश्चिम | __म
आजारी किंवा जखमी लोकं इथे जातात | दवाखाना | __खा_
देशाचे संरक्षण करणारा | सैनिक | __क
फळ्यावर लिहिण्याचे साधन | खडू | _डू`
      ]
    }
  ]
};
