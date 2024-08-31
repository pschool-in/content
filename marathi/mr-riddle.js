export default {
  label: 'मराठी कोडी',
  id: 'mr-riddle',
  lockAfter: 100,
  list: [
    {
      id: 'story',
      type: 'slides2',
      label: `मराठी कोडी`,
      commonData: {
        title: `मराठी कोडी`,
        displayType: 'custom',
        autoPlay: false,
        substep: true
      },
      data: [
        {
          steps: [
            [
              'पंख नाहीत मला तरीही मी हवेत उडते, हात नसूनही मी तुमच्याशी भांडते.',
              {
                type: 'title',
                text: 'पतंग'
              }
            ],
            [
              'तीन अक्षरांचे माझे नाव, वाचा उलटे किंवा वाचा सरळ, मी आहे प्रवासाचे साधन.',
              {
                type: 'title',
                text: 'जहाज '
              }
            ],
            [
              'दोन भाऊ शेजारी, भेट नाही संसारी.',
              {
                type: 'title',
                text: 'डोळे '
              }
            ],
            [
              'डोळे आहेत पण पाहू शकत नाही, पाय आहेत पण चालू शकत नाही, तोंड आहे पण बोलू शकत नाही.',
              {
                type: 'title',
                text: 'बाहुली'
              }
            ],
            [
              'एवढासा गडी, त्याला पाहून प्रत्येकजण रडी.',
              {
                type: 'title',
                text: 'कांदा'
              }
            ]
          ]
        },
        {
          steps: [
            [
              'रस्ता आहे पण वाहने नाहीत, जंगल आहे पण झाड नाही, घरे आहेत पण माणसे नाहीत.',
              {
                type: 'title',
                text: 'नकाशा'
              }
            ],
            [
              'सफेद तन हरी पूंछ, न बुझे तो नानी से पूछरात्री जागतो, दिवसा झोपतो, नेहमी झाडाला उलट लटकलेला असतो.',
              {
                type: 'title',
                text: 'वटवाघूळ'
              }
            ],
            [
              ' न जेवतो ना पगार घेतो, जेव्हा तुम्ही बाहेर जाता, तुमच्या घराचे रक्षण करतो.',
              {
                type: 'title',
                text: 'कुलूप'
              }
            ],
            [
              'माझ्याकडे बऱ्याच Keys आहेत तरीही मी कोणतेही कुलूप उघडू शकत नाही. सांगा मी आहे कोण?',
              {
                type: 'title',
                text: 'कीबोर्ड'
              }
            ],
            [
              'तिखट मीठ मसाला, चार शिंगे कशाला?',
              {
                type: 'title',
                text: 'लवंग'
              }
            ]
          ]
        },
        {
          steps: [
            [
              'बाहेरून पांढरे पातेले पण आत पिवळा भात.',
              {
                type: 'title',
                text: 'अंडी'
              }
            ],
            [
              ' हिरवी पेटी काट्यात पडली, उघडून पाहिली तर मोत्याने भरली.',
              {
                type: 'title',
                text: 'भेंडी'
              }
            ],
            [
              'काळी आहे पण कोकिळा नाही. लांब आहे पण दांडी नाही. दोरी नाही पण बांधली जाते.',
              {
                type: 'title',
                text: 'वेणी'
              }
            ],
            [
              'मुकूट याच्या डोक्यावर, घातलाय जांभळा­ झगा अंगावर.',
              {
                type: 'title',
                text: 'वांगे'
              }
            ],
            [
              'मी देतो सर्वांना फळं आणि फुलं, सावलीत माझ्या खेळतात मुलं.',
              {
                type: 'title',
                text: 'झाड'
              }
            ]
          ]
        },
        {
          steps: [
            [
              ' दोन अक्षरी माझे नाव, डोके झाकण्याचे माझे काम.',
              {
                type: 'title',
                text: 'टोपी'
              }
            ],
            [
              'पांढरे माझे शरीर, हिरवे माझे केस बोला, बोला कोण सोडवेल हा पेच?',
              {
                type: 'title',
                text: 'कणीस'
              }
            ],
            [
              'रोज सकाळी येतो मी, घेऊन जगभरातल्या बातम्या बेचैन असतात घरातले, जो पर्यंत वाचून होत नाही सगळ्या.',
              {
                type: 'title',
                text: 'वर्तमानपत्र'
              }
            ],
            [
              'लाल सुरी मातीत पुरी, वरती हिरवा झेंडा गंमत करी.',
              {
                type: 'title',
                text: 'गाजर'
              }
            ]
          ]
        }
      ]
    },
    {
      label: 'मराठी कोडी',
      type: 'matchByDragDrop',
      id: 'riddles',
      commonData: {
        title: 'योग्य उत्तर निवडा.'
      },
      data: [
        `पंख नाहीत मला तरीही मी हवेत उडते, हात नसूनही मी तुमच्याशी भांडते. *पतंग*
तीन अक्षरांचे माझे नाव, वाचा उलटे किंवा वाचा सरळ, मी आहे प्रवासाचे साधन. *जहाज*
दोन भाऊ शेजारी, भेट नाही संसारी. *डोळे*
डोळे आहेत पण पाहू शकत नाही, पाय आहेत पण चालू शकत नाही, तोंड आहे पण बोलू शकत नाही. *बाहुली*
एवढासा गडी, त्याला पाहून प्रत्येकजण रडी. *कांदा*
रस्ता आहे पण वाहने नाहीत, जंगल आहे पण झाड नाही, घरे आहेत पण माणसे नाहीत. *नकाशा*
रात्री जागतो, दिवसा झोपतो, नेहमी झाडाला उलट लटकलेला असतो. *वटवाघूळ*
न जेवतो ना पगार घेतो, जेव्हा तुम्ही बाहेर जाता, तुमच्या घराचे रक्षण करतो. *कुलूप*
माझ्याकडे बऱ्याच Keys आहेत तरीही मी कोणतेही कुलूप उघडू शकत नाही. सांगा मी आहे कोण? *कीबोर्ड*
तिखट मीठ मसाला, चार शिंगे कशाला? *लवंग*`,

        `बाहेरून पांढरे पातेले पण आत पिवळा भात. *अंडी*
हिरवी पेटी काट्यात पडली, उघडून पाहिली तर मोत्याने भरली. *भेंडी*
काळी आहे पण कोकिळा नाही. लांब आहे पण दांडी नाही. दोरी नाही पण बांधली जाते. *वेणी*
मुकूट याच्या डोक्यावर, घातलाय जांभळा­ झगा अंगावर. *वांगे*
मी देतो सर्वांना फळं आणि फुलं, सावलीत माझ्या खेळतात मुलं. *झाड*
दोन अक्षरी माझे नाव, डोके झाकण्याचे माझे काम. *टोपी*
पांढरे माझे शरीर, हिरवे माझे केस बोला, बोला कोण सोडवेल हा पेच? *कणीस*
चाक फिरवतो गरागरा, मडकी घडवितो भराभरा. *कुंभार*
रोज सकाळी येतो मी, घेऊन जगभरातल्या बातम्या बेचैन असतात घरातले, जो पर्यंत वाचून होत नाही सगळ्या. *वर्तमानपत्र*
लाल सुरी मातीत पुरी, वरती हिरवा झेंडा गंमत करी. *गाजर*`
      ]
    },
    {
      type: 'completeWord',
      id: 'riddles-2',
      label: 'पहेलियाँ',
      commonData: {
        title: 'शब्द पूर्ण करा',
        lang: 'mr'
      },
      data: [
        `पंख नाहीत मला तरीही मी हवेत उडते, हात नसूनही मी तुमच्याशी भांडते.| पतंग
तीन अक्षरांचे माझे नाव, वाचा उलटे किंवा वाचा सरळ, मी आहे प्रवासाचे साधन. |जहाज
दोन भाऊ शेजारी, भेट नाही संसारी. |डोळे
डोळे आहेत पण पाहू शकत नाही, पाय आहेत पण चालू शकत नाही, तोंड आहे पण बोलू शकत नाही.| बाहुली
एवढासा गडी, त्याला पाहून प्रत्येकजण रडी. |कांदा
रस्ता आहे पण वाहने नाहीत, जंगल आहे पण झाड नाही, घरे आहेत पण माणसे नाहीत. |नकाशा
रात्री जागतो, दिवसा झोपतो, नेहमी झाडाला उलट लटकलेला असतो. |वटवाघूळ
न जेवतो ना पगार घेतो, जेव्हा तुम्ही बाहेर जाता, तुमच्या घराचे रक्षण करतो. |कुलूप
माझ्याकडे बऱ्याच Keys आहेत तरीही मी कोणतेही कुलूप उघडू शकत नाही. सांगा मी आहे कोण? |कीबोर्ड
तिखट मीठ मसाला, चार शिंगे कशाला?| लवंग`,

        `बाहेरून पांढरे पातेले पण आत पिवळा भात. |अंडी
हिरवी पेटी काट्यात पडली, उघडून पाहिली तर मोत्याने भरली. |भेंडी
काळी आहे पण कोकिळा नाही. लांब आहे पण दांडी नाही. दोरी नाही पण बांधली जाते. |वेणी
मुकूट याच्या डोक्यावर, घातलाय जांभळा­ झगा अंगावर. |वांगे
मी देतो सर्वांना फळं आणि फुलं, सावलीत माझ्या खेळतात मुलं. |झाड
दोन अक्षरी माझे नाव, डोके झाकण्याचे माझे काम.| टोपी
पांढरे माझे शरीर, हिरवे माझे केस बोला, बोला कोण सोडवेल हा पेच? |कणीस
चाक फिरवतो गरागरा, मडकी घडवितो भराभरा. |कुंभार
रोज सकाळी येतो मी, घेऊन जगभरातल्या बातम्या बेचैन असतात घरातले, जो पर्यंत वाचून होत नाही सगळ्या. |वर्तमानपत्र
लाल सुरी मातीत पुरी, वरती हिरवा झेंडा गंमत करी.| गाजर`
      ]
    }
  ]
};
