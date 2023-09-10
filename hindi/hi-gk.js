export default {
  label: 'सामान्य ज्ञान',
  id: 'hi-gk',
  img: 'gk',
  lang: 'hi',
  list: [
    {
      id: 'mcq',
      label: 'सही उत्तर का चयन करें',
      type: 'mcq',
      data: {
        title: 'सही उत्तर का चयन करें',
        questions: [
          {
            qText:
              'किस स्मारक को प्यार का प्रतीक माना जाता है और यह आगरा में स्थित है?',
            options: 'ताज महल, हवा महल, लाल किला, कुतुब मीनार'
          },
          {
            qText: `भारतीय राष्ट्रीय ध्वज में कितनी अलग-अलग रंगों की क्षैतिज धारियाँ होती हैं?`,
            options: `3, 2, 4, 5`
          },
          {
            qText: `भारत के पहले प्रधानमंत्री कौन थे?`,
            options: `जवाहरलाल नेहरू, इंदिरा गांधी, राजीव गांधी, लाल बहादुर शास्त्री`
          },
          {
            qText: 'क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य कौनसा है?',
            options: `राजस्थान, मध्य प्रदेश, उत्तर प्रदेश, महाराष्ट्र`
          },
          {
            qText: 'किस भारतीय त्योहार को "प्रकाश का त्योहार" कहा जाता है?',
            options: `दिवाली, होली, दुर्गा पूजा, नवरात्रि`
          },
          {
            qText:
              'किस शहर को उसके उद्यमिता आईटी उद्योग के कारण "भारत का सिलिकॉन वैली" कहा जाता है?',
            options: 'बेंगलुरु, मुंबई, चेन्नई, कोलकाता'
          },
          {
            qText: `प्रसिद्ध ऐतिहासिक स्थल "अजंता गुफाएँ" किस भारतीय राज्य में स्थित हैं?`,
            options: `महाराष्ट्र, मध्य प्रदेश, राजस्थान, गुजरात`
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'निम्नलिखित को मिलाना',
      data: {
        title: 'शहर को उसके उपनाम के साथ मिलाएं',
        text: `जयपुर, गुलाबी शहर
वाराणसी, प्रकाश का शहर
उदयपुर, झीलों का शहर
कालिकट, मसालों का शहर
नागपुर, संतरे का शहर`
      }
    },
    {
      label: 'सही उत्तर का चयन करें',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'सही उत्तर का चयन करें',
        questions: [
          {
            qText: 'भारत में किस शहर को चंदनवृक्ष शहर कहा जाता है?',
            options: 'मैसूर, दिल्ली, बेंगलुरु'
          },
          {
            qText: 'भारत में किस शहर को झीलों का शहर कहा जाता है?',
            options: 'उदयपुर, जयपुर, मदुरै'
          },
          {
            qText: 'भारत में किस शहर को भारत के उद्यान शहर कहा जाता है?',
            options: 'बेंगलुरु, मुंबई, हैदराबाद'
          },
          {
            qText: 'भारत में किस शहर को भारत के इस्पात शहर कहा जाता है?',
            options: 'जमशेदपुर, जयपुर, आगरा'
          },
          {
            qText: 'भारत में किस शहर को भारत का मैनचेस्टर कहा जाता है?',
            options: 'अहमदाबाद, मदुरै, जयपुर'
          }
        ]
      }
    },
    {
      label: 'रिक्त स्थान भरें',
      type: 'matchByDragDrop',
      id: 'drag-1',
      data: {
        text: `भारत का *अहमदाबाद* शहर मैनचेस्टर कहलाता है।
भारत का *उदयपुर* शहर झीलों का शहर कहलाता है।
भारत का *वाराणसी* शहर प्रकाश का शहर कहलाता है।
भारत का *नागपुर* शहर भारत का संतरे का शहर है।
भारत का *कालिकट* शहर मसालों का शहर कहलाता है।`
      }
    },
    {
      label: 'सही उत्तर का चयन करें',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'सही उत्तर का चयन करें',
        questions: [
          {
            qText: 'कौनसे भारतीय को पहला नोबेल पुरस्कार जीतने में सफलता मिली?',
            options: 'रवींद्रनाथ टैगोर, भारतीयार, सरोजिनी नायडू'
          },
          {
            qText: 'कौनसे भारतीय को पहला नोबेल पुरस्कार भौतिकी में मिला?',
            options: 'सी.वी. रमन, श्रीनिवास रमानुजम, रवींद्रनाथ टैगोर'
          },
          {
            qText: 'भारत के पहले राष्ट्रपति कौन थे?',
            options:
              'डॉ. राजेंद्र प्रसाद, सरदार वल्लभभाई पटेल, सर्वपल्ली राधाकृष्णन'
          },
          {
            qText: 'भारत के पहले उपराष्ट्रपति कौन थे?',
            options:
              'सर्वपल्ली राधाकृष्णन, डॉ. राजेंद्र प्रसाद, सरदार वल्लभभाई पटेल'
          },
          {
            qText: 'भारत के पहले गृहमंत्री कौन थे?',
            options: 'सरदार वल्लभभाई पटेल, डॉ. राजेंद्र प्रसाद, सी.वी. रमन'
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'मोन्युमेंट्स को मिलाना',
      id: 'monuments-match',
      commonData: {
        title: 'लेबल को उचित छवियों में खींचें और छोड़ें।',
        path: 'img/social/india-monuments'
      },
      data: [
        `indiagate | इंडिया गेट
redfort | लाल किला
qutub-minor | कुतुब मीनार
tajmahal | ताज महल
amber-palace | अंबर पैलेस
ajanta-caves | अजंता गुफाएँ`,

        `puri | पुरी मंदिर
tanjore | तंजावर मंदिर
mamallapuram | महाबलीपुरम
charminar | चारमिनार
golden-temple | स्वर्ण मंदिर
gateway-india | गेटवे ऑफ़ इंडिया`
      ]
    },
    {
      label: 'सही उत्तर का चयन करें',
      id: 'mcq-monuments',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: "निम्नलिखित में से कौन सा 'गेटवे ऑफ़ इंडिया' है?",
            optionImages: 'social/india-monuments',
            options: 'gateway-india, charminar, redfort, indiagate'
          },
          {
            qText: 'यह मौनिमेंट क्या है?',
            qImg: 'social/india-monuments/puri',
            options: 'पुरी मंदिर, तंजावर मंदिर, महाबलीपुरम'
          },
          {
            qText: 'यह मौनिमेंट क्या है?',
            qImg: 'social/india-monuments/amber-palace',
            options: 'अंबर पैलेस, चारमिनार, स्वर्ण मंदिर'
          },
          {
            qText: 'यह मौनिमेंट क्या है?',
            qImg: 'social/india-monuments/mamallapuram',
            options: 'महाबलीपुरम, अजंता गुफाएँ, तंजावर मंदिर'
          },
          {
            qText: "निम्नलिखित में से कौन सा 'लाल किला' है?",
            optionImages: 'social/india-monuments',
            options: 'redfort, gateway-india, charminar, amber-palace'
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'खींचें और छवियों पर छोड़ें',
      id: 'drag-drop-leaders',
      commonData: {
        title: 'नामों को खींचें और छवियों पर छोड़ें।',
        path: 'img/social/leaders'
      },
      data: [
        `MahatmaGandhi | महात्मा गांधी
Nehru | जवाहरलाल नेहरू
VallabhbhaiPatel | सरदार वल्लभभाई पटेल
Ambedkar | अंबेडकर
RajendraPrasad | राजेंद्र प्रसाद
SubhasChandraBose | सुभाष चंद्र बोस`,

        `Kalam | अब्दुल कलाम
Tagore | रवींद्रनाथ टैगोर
SwamiVivekananda | स्वामी विवेकानंद
MotherTeresa | मदर टेरेसा
Vajpayee | अटल बिहारी वाजपेयी
IndiraGandhi | इंदिरा गांधी`,

        `VikramSarabhai | विक्रम साराभाई
CVRaman | सी.वी. रमन
BhagatSingh | भगत सिंह
DhyanChand | ध्यान चंद
Bharathi | सुब्रह्मण्य भारती
Ramanujam | श्रीनिवास रमानुजम`
      ]
    },
    {
      label: 'सही उत्तर का चयन करें',
      id: 'mcq-leaders',
      type: 'mcq',
      commonData: {
        optionImages: 'social/leaders'
      },
      data: [
        {
          questions: [
            {
              qText: 'किसको शांति के लिए नोबेल पुरस्कार प्रदान किया गया था?',
              options: 'MotherTeresa, Vajpayee, SwamiVivekananda, Tagore'
            },
            {
              qText:
                'किसके जन्मदिन को राष्ट्रीय युवा दिवस के रूप में मनाया जाता है?',
              options: 'SwamiVivekananda, VallabhbhaiPatel, Ambedkar, Nehru'
            },
            {
              qText: "किसे 'राष्ट्रपिता' कहा जाता है?",
              options:
                'MahatmaGandhi, Nehru, SubhasChandraBose, VallabhbhaiPatel'
            },
            {
              qText: 'भारत के पहले राष्ट्रपति कौन थे?',
              options: 'RajendraPrasad, Kalam, Vajpayee, Nehru'
            },
            {
              qText: 'भारत के पहले प्रधानमंत्री कौन थे?',
              options: 'Nehru, SubhasChandraBose, VallabhbhaiPatel, Vajpayee'
            }
          ]
        },
        {
          questions: [
            {
              qText: "किसे 'भारतीय तोपगाँधी' कहा जाता है?",
              options: 'Kalam, Vajpayee, MotherTeresa, Nehru'
            },
            {
              qText: "किसे 'भारतीय सर्वोंनत' कहा जाता है?",
              options: 'VallabhbhaiPatel, Vajpayee, Ambedkar, RajendraPrasad'
            },
            {
              qText: 'भारत के संविधान को लिखने वाले समिति के अध्यक्ष कौन थे?',
              options: 'Ambedkar, MotherTeresa, IndiraGandhi, Nehru'
            },
            {
              qText: "किसे 'नेताजी' कहा जाता है?",
              options:
                'SubhasChandraBose, IndiraGandhi, Ambedkar, RajendraPrasad'
            },
            {
              qText: "हमारे राष्ट्रीय गान 'वन्दे मातरम्' का लेखक कौन हैं?",
              options: 'Tagore, MotherTeresa, IndiraGandhi, Nehru'
            }
          ]
        }
      ]
    }
  ]
};
