export default {
  label: 'Grammar',
  id: 'mr-grammar',
  img: 'langGrammar',
  list: [
    {
      label: 'नाम',
      type: 'passage',
      id: 'notes',
      style: 'big',
      data: {
        title: 'नाम',
        text: `कोणत्याही व्यक्तीचे, वस्तूचे, ठिकाणाचे, पशू-पक्ष्यांचे गुण यांना दिलेले नाव म्हणजे 'नाम' होय.
नामाचे मुख्य तीन प्रकार आहेत.
# सामान्य नाम
एकाच जातीच्या किंवा एकाच गटातील पदार्थांच्या सामान गुणधर्मामुळे त्यांना जे एकाच नाव दिले जाते त्याला ‘सामान्य नाम’ असे म्हणतात 
उदा. नदी, मुलगी, फळ, प्राणी                                
# विशेष नाम
कोणत्याही एका व्यक्ती, प्राणी, वस्तू किंवा जागेला आपण जे विशिष्ठ नाव देतो त्याला 'विशेष नाम' असे म्हणतात.
उदा. हत्ती, गुलाब, अननस, सोनाली             
# भाववाचक नाम
जी नावे आपण पाहू शकत नाही परंतु त्यांचे गुणधर्म, भावना, स्तिथी, अवस्था किंवा कृती यांना जे नाव दिले जाते त्याला 'भाववाचक नाम' असे म्हणतात.
उदा. श्रीमंती, नम्रता, आंबटपणा, सौंदर्य, सुख `
      }
    },
    {
      id: 'match',
      label: 'जोड्या लावा',
      type: 'match',
      data: {
        title: 'विशेष नाम आणी सामान्य नामाच्या योग्य जोड्या लावा ',
        text: `आंबा, फळ 
गेंडा, प्राणी
सूर्यफूल, फूल
माठ, वस्तू
भारत, राष्ट्र`
      }
    },
    {
      type: 'selectWord',
      label: 'नाम ओळखा',
      id: 'select-word',
      data: {
        title: 'खालील वाक्यांतील नामांना अधोरेखित करा',
        text: `*अजयने* रोपटे लावले.
*श्रुतीने* परीक्षेत पहिला नंबर मिळवला. 
असा *दयाळूपणा* जन्मजातच असतो.
आम्ही *गरीब* आहोत.
*मोर* खूप सुंदर दिसतो.`
      }
    },
    {
      id: 'classify',
      label: 'खालील नामांचे वर्गीकरण करा',
      type: 'group',
      data: {
        title: 'Drag and drop the words in the right boxes.',
        types: [
          {
            name: 'सामान्य नाम',
            text: 'पक्षी, पर्वत, समुद्'
          },
          {
            name: 'विशेष नाम',
            text: 'सिया, भारत, हिमालय'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'रिकाम्या जागा भरा ',
      type: 'fillup',
      data: {
        title: ` रिकाम्या जागी योग्य नामे लिहा `,
        text: `आपण बोलताना *नम्रपणे (रागाने)* बोलावे.
सगळ्यांनी अजयच्या *चातुर्याचे (आळशीपणाचे)* कौतुक केले. 
मीराच्या आवाजात *मधुरता (कडूपणा)* आहे. 
प्रियाने काढलेल्या रांगोळीत *सौंदर्य (कुरूपता)* दडले होते.
सध्या अतिशय *महागाई (स्वस्ताई) आहे.`
      }
    },
    {
      label: 'नामाचे प्रकार ओळखा',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'खालील वाक्यांमधील अधोरेखित शब्दांच्या नामाचे प्रकार ओळखा ',
        questions: [
          {
            qText: ` *अमित* खाली बसला.`,
            options: `विशेष नाम , सामान्य नाम , भाववाचक नाम `
          },
          {
            qText: ` पावसाळ्यात हिरवाईने नटलेले *पर्वत* दिसतात. `,
            options: ` सामान्य नाम , विशेष नाम , भाववाचक नाम `
          },
          {
            qText: ` राजाला आपल्या *श्रीमंतीचा* चांगलाच माज होता. `,
            options: `भाववाचक नाम , सामान्य नाम , विशेष नाम `
          },
          {
            qText: `अबीरची *चिकाटी* वाखाणण्या सारखी होती. `,
            options: ` भाववाचक नाम , सामान्य नाम, विशेष नाम `
          },
          {
            qText: ` बागेत अनेक रंगाचे *गुलाब* बहरले होते. `,
            options: `विशेष नाम , सामान्य नाम, भाववाचक नाम `
          }
        ]
      }
    },
    {
      label: 'कथा पूर्ण करा',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        title: `रिकाम्या जागेत योग्य नामे भरून कथा पूर्ण करा `,
        text: `*पूजा* हुशार मुलगी आहे. ती *मुंबई* च्या शाळेत शिकते. तिच्या बोलण्यात *गोडवा* आहे आणि वागण्यात *माणुसकी*. पूजाला निसर्गाची आवड आहे. तिला *नदी* काठी फिरायला आवडते. `
      }
    },
    {
      label: 'सर्वनाम',
      type: 'passage',
      id: 'notes',
      style: 'big',
      data: {
        title: 'सर्वनाम',
        text: `सर्वनाम म्हणजे नामा एवजी येणारा शब्द.
काहीवेळा बोलतांना अथवा लिहितांना एकच नाम सतत येत असेल, तर त्या ऐवजी सर्वनाम वापरले जाते.
उदा.
राधा सकाळी उठते.
राधा शाळेत जाते.
राधाला पुस्तके आवडतात.
वरील वाक्यांमध्ये राधा या नामाचा उच्चार वारंवार केला आहे. तो टाळण्यासाठी सर्वनामांचा उपयोग होतो.
उदा.
राधा सकाळी उठते.
ती शाळेत जाते.
तिला पुस्तके आवडतात.

सर्वनामे लिंगानुसार, वचनानुसार बदलतात.
उदा.
तो मुलगा, ती मुलगी, ते झाड, ती झाडे
सर्वनामाचे मुख्य प्रकार सहा आहेत.
# पुरुषवाचक सर्वनाम
प्रथम पुरुषवाचक सर्वनाम - बोलणारा स्वत:विषयी बोलतांना किंवा लिहितांना  वाक्यामध्ये ज्या सर्वनामाचा उपयोग करतो त्यास प्रथम पुरुषी सर्वनाम असे म्हणतात.
उदा. मी, आम्ही, आपण, स्वत:
* मी गावाला जाणार.
* आपण खेळायला जावू.
व्दितीय पुरुषवाचक सर्वनाम - ज्याच्याशी बोलायचे त्याचा उल्लेख करताना यांचा वापर होतो.
उदा. तो, तुम्ही, आपण
आपण कोठून आलात?
तुम्ही घरी कधी येणार?
तृतीय पुरुषवाचक सर्वनाम - जेव्हा बोलणारा दुसर्‍या व्यक्तीशी बोलतांना व तिसर्‍या व्यक्तींचा उल्लेख करतांना ज्या, ज्या सर्वनामाचा वाक्यात उपयोग करतो त्या सर्वनामांस तृतीय पुरुषवाचक सर्वनाम म्हणतात.
उदा. तो, ती, ते, त्या, आपण, स्वतः
* त्याने मला खेळायला बोलावले पण स्वतःमात्र आला नाही.
* त्या सर्वजण घरीच होत्या.

# दर्शक सर्वनाम
जवळची किंवा दूरची वस्तू दाखविण्याकरीता ज्याचा उपयोग होतो त्यास दर्शक सर्वनाम म्हणतात.
उदा. हा, ही, हे, तो, ती, ते
* ही माझी बहीण आहे.
* हा माझा भाऊ आहे.
* हे माझे घर आहे.
* ती आमची शाळा आहे.

# संबंधी सर्वनाम
वाक्यात पुढे येणार्‍या दर्शक सर्वनामांशी संबंध दाखविणार्‍या सर्वनामाला संबंधी सर्वनाम असे म्हणतात.
उदा.  जो, जी, जे, ज्या
* जे दिसते तेच खरे असते असे नाही.
* जो निडर असतो तोच खरं बोलतो.

# प्रश्नार्थक सर्वनाम
वाक्यात प्रश्न विचारण्यासाठी यांचा उपयोग होतो.
उदा. कोण, कुणास, काय, कोणी, कोणाला
* तुमच्यापैकी कोण माझ्याबरोबर चलणार?
* तुझ्याकडे किती पैसे आहेत?
* काय सांगू तुला?

# अनिश्चित सर्वनाम
काही सर्वनामे वाक्यात प्रश्न विचारण्यासाठी न येता ती कोणत्या नामाबद्दल आली आहे ते निश्चित सांगता येत नाही तेव्हा त्यांना अनिश्चित सर्वनाम म्हणतात.
उदा. कोण, काय, कोणी, कोणास, कोणाला
* त्या पेटीत काय आहे?
* आज कोण येणार आहे?
* जेवायला काय बनवले आहे?

# आत्मवाचक सर्वनाम
सर्वनामाचा अर्थ जेव्हा स्वतः असा होतो तेव्हा ते आत्मवाचक सर्वनाम असते.
उदा. मी, स्वतः, आपण
* मी घर स्वछ केले.
* तू हे स्वतः बनवलेस का?
* तो आपण होवून माझ्याकडे आला.`
      }
    },
    {
      id: 'match',
      label: 'जोड्या लावा ',
      type: 'match',
      data: {
        title: ' योग्य सर्वनाम योग्य शब्दाशी जोडा ',
        text: ` तो, पोपट
ती, छत्री
हे, फूल
हि, सायकल
ते, झाड
त्या, घरात `
      }
    },
    {
      type: 'selectWord',
      label: 'सर्वनाम ओळखा',
      id: 'select-word-2',
      data: {
        title: 'खालील वाक्यांतील सर्वनामांना अधोरेखित करा ',
        text: ` *मी* अजयला हाक मारली.
*आपण* क्रिकेट खेळूया. 
आईने *तिचा* डबा भरून दिला.
*आम्ही* एकमेकांना खूप दिवसांनी भेटलो.
रश्मीने *स्वतः* चहा केला.
*तो* रोज पळायला जातो. `
      }
    },
    {
      id: 'fillup-2',
      label: 'रिकाम्या जागा भरा ',
      type: 'fillup',
      data: {
        title: ` रिकाम्या जागी योग्य सर्वनामे लिहा `,
        text: ` *तुम्ही (आपण)* गावाला जा.
*तिने (त्याने)* बाळाला मांडीवर घेतले.
आज *आम्ही (त्यांनी)* खूप मजा केली.
*मी (आमचा)* रोज सकाळी लवकर उठतो.
*ते (तो)* माझे घर आहे.
*त्यांनी (आपण)* मुलांशी खूप गप्पा मारल्या.`
      }
    },
    {
      label: ' सर्वनामाचे प्रकार ओळखा',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'खालील वाक्यामधील अधोरेखित सर्वनामाचे प्रकार ओळखा',
        questions: [
          {
            qText: `पावसाने आज *मला* हैराण केले. `,
            options: `आत्मवाचक सर्वनाम , दर्शक सर्वनाम , संबंधी सर्वनाम  `
          },
          {
            qText: `हे *कोणाचे* पुस्तक आहे? `,
            options: `प्रश्नार्थक सर्वनाम , दर्शक सर्वनाम , आत्मवाचक सर्वनाम `
          },
          {
            qText: `*मी* दुपारी घरी गेलो. `,
            options: ` आत्मवाचक सर्वनाम , दर्शक सर्वनाम , प्रश्नार्थक सर्वनाम `
          },
          {
            qText: `*जे* जिथे आहे तिथेच ठेवा. `,
            options: `संबंधी सर्वनाम , दर्शक सर्वनाम , आत्मवाचक सर्वनाम `
          },
          {
            qText: `*हा* माझा मित्र रमेश.`,
            options: ` दर्शक सर्वनाम , संबंधी सर्वनाम , आत्मवाचक सर्वनाम `
          }
        ]
      }
    },
    {
      label: 'कथा पूर्ण करा ',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        title: `रिकाम्या जागेत योग्य सर्वनामे भरून कथा पूर्ण करा `,
        text: `उन्हाळ्याच्या सुट्टीत *आम्ही* मामाकडे जायचे ठरवले. *मी*, आई आणी इतर भावंडं असे मिळून जायचे ठरले.
मामाच्या गावात खूप गमतीशीर गोष्टी होत्या आणी वाचनालय होते. मामाने *आम्हाला* वाचनाचे महत्व सांगितले. *ती* विविध विषयांवरील पुस्तके पाहून मला खूप मजा आली. *आपण* सारे वाचक बनूया. `
      }
    },
    {
      label: 'विशेषण',
      type: 'passage',
      id: 'notes-3',
      style: 'big',
      data: {
        title: 'विशेषण',
        text: `नामाबद्दल विशेष माहिती देणाऱ्या शब्दाला 'विशेषण' असे म्हणतात.
उदा.
उंच मुलगा
हिरवे झाड
प्रेमळ आई
शूरवीर राजू
या सर्व उदाहरणातील उंच, हिरवे, प्रेमळ, शूरवीर हे शब्द मुलगा, झाड, आई, राजू या नामांबद्दल विशेष माहिती देतात म्हणून त्यांना विशेषण म्हणतात. विशेषण नामाच्या अगोदर किंवा नंतर येते.

# विशेषणाचे प्रकार
# गुणविशेषण
नामाच्या रंगाचे, रूपाचे, आकाराचे, चवीचे किंवा इतर कोणत्याही प्रकारचा गुण दाखवणाऱ्या विशेषणास गुणविशेषण म्हणतात.
उदा.
काळा
आंबट
सुंदर
कपटी

# संख्याविशेषण
ज्या विशेषणाद्वारे नामाची संख्या, क्रम सांगितले जातात, त्याला संख्याविशेषण म्हणतात.
उदा.
दोन, तीन, पहिला, अर्धा, सर्व

# सार्वनामिक विशेषण
एखाद्या नामापूर्वी येणारे सर्वनाम त्या नामाबद्दल अधिक माहिती सांगत असेल, तर त्या सर्वनामास सार्वनामिक विशेषण म्हणतात.
उदा. 
माझे गाव
तुझे पुस्तक
आमचा बंगला `
      }
    },
    {
      id: 'match-3',
      label: 'जोड्या लावा',
      type: 'match',
      data: {
        title: 'नाम आणी विशेषणाच्या योग्य जोड्या लावा',
        text: `लाल, टरबूज
आंबट, बोरं
काळा, कावळा
उंच, इमारत
मुसळधार, पाऊस `
      }
    },
    {
      type: 'selectWord',
      label: 'विशेषण ओळखा ',
      id: 'select-word-3',
      data: {
        title: 'खालील वाक्यांतील विशेषणांना अधोरेखित करा ',
        text: `आईसक्रीम *थंडगार* आहे.
हिमालय *विशाल* पर्वत आहे.
हे झबलं *शंभर* रुपयाचे आहे.
*त्या* कुत्र्याचे नाव मोती आहे.
फुले *टवटवीत* आहेत.`
      }
    },
    {
      id: 'classify-3',
      label: ' विशेषण ओळखा ',
      type: 'group',
      data: {
        title: ' खाली दिलेल्या शब्दांमधून विशेषणे ओळखा ',
        types: [
          {
            name: 'विशेषण',
            text: 'खारट, सुंदर, धाडसी, मजबूत, अर्धा '
          },
          {
            name: 'नाम',
            text: 'फळ, नदी, डोळे, खाऊ, स्वागत '
          }
        ]
      }
    },
    {
      id: 'fillup-3',
      label: 'रिकाम्या जागा भरा ',
      type: 'fillup',
      data: {
        title: `रिकाम्या जागी योग्य विशेषणे लिहा `,
        text: `आईने मला *नवा (जुना)* ड्रेस घेतला.
वातावरण *प्रसन्न (सुन्न)* होते.
बाहेर *रणरणते (थंड)* ऊन होते.
एका हाताच्या पंज्याला *पाच (सहा)* बोटे असतात.
*तिचा (जेवढा)* चेहरा उन्हाने लाल झाला. `
      }
    },
    {
      label: 'विशेषणाचे प्रकार ओळखा',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'खालील वाक्यांमधील अधोरेखित विशेषणाचे प्रकार ओळखा ',
        questions: [
          {
            qText: `*तुमचा* मुलगा खूप हुशार आहे `,
            options: `सार्वनामिक विशेषण, गुणविशेषण, संख्याविशेषण `
          },
          {
            qText: `अर्णवला *तीन* भाषा येतात `,
            options: `संख्याविशेषण, गुणविशेषण, सार्वनामिक विशेषण `
          },
          {
            qText: ` *इतका* वेळ कुठे होतास? `,
            options: `सार्वनामिक विशेषण , गुणविशेषण, संख्याविशेषण`
          },
          {
            qText: ` संत्री *गोड* होती `,
            options: `गुणविशेषण, संख्याविशेषण , सार्वनामिक विशेषण `
          },
          {
            qText: `काकांनी *भव्य* वाडा बांधला `,
            options: `गुणविशेषण, संख्याविशेषण , सार्वनामिक विशेषण`
          }
        ]
      }
    },
    {
      label: 'नामासमोर योग्य विशेषण लावा ',
      id: 'fix',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'नामासोबत योग्य विशेषण जोडा',
        text: `कारले, कडू, गोड
कोल्हा, साधा, लबाड
मिरची, गोड, तिखट
आकाश, निळे, हिरवे`
      }
    },
    {
      label: 'कथा पूर्ण करा ',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        title: `रिकाम्या जागेत योग्य विशेषणे भरून कथा पूर्ण करा  `,
        text: ` सचिन *उत्कृष्ट* क्रिकेट खेळाडू आहे. तो *पांढरे* कपडे घालून खेळायला जातो. त्याच्याकडे *लाल* रंगाचा बॉल आहे. त्याच्या संघात तो धरून *अकरा* खेळाडू आहेत. क्रिकेटच्या मैदानाभोवती *दाट* झाडी आहे. `
      }
    },
    {
      label: 'क्रियापद',
      type: 'passage',
      id: 'notes-4',
      style: 'big',
      data: {
        title: 'क्रियापद',
        text: `वाक्याचा अर्थ पूर्ण करण्यासाठी वापरल्या जाणाऱ्या क्रियावाचक शब्दाला क्रियापद असे म्हणतात. क्रियापदा शिवाय वाक्य पूर्ण होत नाही तसेच वाक्याचा अर्थ देखील पूर्ण होत नाही.
उदा.
मी आंबा खातो.
वरील वाक्यात खातो हे क्रियापद आहे.
प्रभा शाळेत जाते. ते गाढ झोपले.
आशा गाणे गाऊ लागली. तो माझ्याकडे बघून हसला.
`
      }
    },
    {
      id: 'match-4',
      label: 'जोड्या लावा ',
      type: 'match',
      data: {
        title: ' क्रिया आणी क्रियापदाच्या जोड्या लावा ',
        text: `धाव, धावला
खा, खातो
वाच, वाचतो
पळ, पळाला
लिही, लिहितो  `
      }
    },
    {
      type: 'selectWord',
      label: 'क्रियापद ओळखा',
      id: 'select-word-4',
      data: {
        title: 'खालील वाक्यांतील क्रियापदांना अधोरेखित करा',
        text: `गाय दुध *देते*.
मी फुटबॉल *खेळतो*.
अजयने झाडाला पाणी *दिले*.
माझा निबंध *लिहून झाला*.
विदुषकाने लोकांना *हसविले*. `
      }
    },
    {
      id: 'classify-4',
      label: ' क्रियापद ओळखा  ',
      type: 'group',
      data: {
        title: ' खाली दिलेल्या शब्दांमधून क्रियापदे ओळखा ',
        types: [
          {
            name: 'क्रियापद',
            text: ' भेटले, सुचली, देतो, करतो, हरविले'
          },
          {
            name: 'शब्द',
            text: 'परीक्षा, बातमी, गाव, शाळा, निर्दयी '
          }
        ]
      }
    },
    {
      id: 'fillup-4',
      label: 'रिकाम्या जागा भरा',
      type: 'fillup',
      data: {
        title: `रिकाम्या जागी योग्य क्रियापदे लिहा `,
        text: `प्रवीणला पाणपोईची कल्पना *सुचली (वाटली)*.
कासव हळूहळू *चालते (पळते)*.
प्रियाचे केस भुरभुर *उडत (वाजत)* होते.
माळी रोपट्यानां पाणी *देत (घेत)* होता.
भारत खुद्कन *हसला (रडला)*. `
      }
    },
    {
      type: 'selectWord',
      label: '  कथा पूर्ण करा ',
      id: 'select-word-5',
      data: {
        title: ' रिकाम्या जागेत योग्य क्रियापदे भरून कथा पूर्ण करा   ',
        text: `मारिया मैदानात खेळत *होती*. खेळता-खेळता तिने आकाशाकडे *पाहिले*. आकाशात काळे ढग दाटून *आले होते*. मारिया पळत-पळत घरी *गेली*. घरी जाताच ती अभ्यासाला *बसली*. `
      }
    }
  ]
};
