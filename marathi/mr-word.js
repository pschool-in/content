export default {
  label: 'Word',
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
        `ऊन, थंडी, पृथ्वी, धरा, भूमी, वृक्ष, वेल, नीर, वायू, हवा `,
        `वारा, मेघ, दुःख, मुख, धार, दार, ढाल, दाट, नाव, भाषा `,
        `वाद, वाडा, पुत्र, नेत्र, जल, धन, बळ, लढ, चव, बघ `,
        `चेंडू, बट, ठग, ताट, माय, दही, धीट, धीर, पीक, फणी `,
        `बीळ, माती, माफी, वेणी, वेळ, हेवा, लेणी, रेघ, रेती, गती `,
        `तर्क, गर्व, वर्ण, खर्च, दिशा, निशा, खिसा, बंद, पंथ, अंत`
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
        ` शतक, चमक, कवच, चटक, नमन, नयन, सुमन, नूतन, सुरेख, सुंदर `,
        `बचत, मदत, बालक, चालक, मालक, झाकण, आभाळ, झालर, घागर, पांडव `,
        `ताकत, काळोख, अंधार, उजेड, पणती, बरणी, बदली, भरारी, सारथी, चौफेर `,
        `दौलत, कौरव, तलाव, सागर, धरती, लढाई, सफाई, नाजूक, साजूक, चाबूक`,
        `तलाव, सागर, दानव, मानव, प्रसाद, प्रकाश, पालवी, पालखी, दर्शन, पर्वत`
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
