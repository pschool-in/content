export default {
  label: 'Social',
  id: 'mr-social',
  img: 'social',
  list: [
    {
      id: 'rivers',
      label: 'Big Rivers',
      type: 'dragAndDrop',
      data: {
        img: 'maharashtra-river.jpg',
        title: 'Mark the big rivers in Maharashtra.',
        width: 350,
        height: 289,
        wordWidth: 80,
        words: [
          {
            word: 'Tapi',
            x: 90,
            y: 31
          },
          {
            word: 'Gadavari',
            x: 99,
            y: 114
          },
          {
            word: 'Wardha',
            x: 233,
            y: 58
          },
          {
            word: 'Bhima',
            x: 79,
            y: 161
          },
          {
            word: 'Krishna',
            x: 53,
            y: 206
          }
        ]
      }
    },
    {
      id: 'cities',
      label: 'Cities',
      type: 'dragAndDrop',
      data: {
        img: 'maharashtra.jpg',
        title: 'Mark the different cities in Maharashtra.',
        width: 350,
        height: 289,
        wordWidth: 80,
        words: [
          {
            word: 'Nasik',
            x: 41,
            y: 44
          },
          {
            word: 'Nagpur',
            x: 242,
            y: 32
          },
          {
            word: 'Thane',
            x: 12,
            y: 102
          },
          {
            word: 'Pune',
            x: 38,
            y: 149
          },
          {
            word: 'Solapur',
            x: 93,
            y: 196
          }
        ]
      }
    },
    {
      id: 'neighbours',
      label: 'Neighbouring States',
      type: 'dragAndDrop',
      data: {
        img: 'maharashtra.jpg',
        title: 'Mark the neighbouring states of Maharashtra.',
        width: 350,
        height: 289,
        wordWidth: 80,
        words: [
          {
            word: 'Gujarat',
            x: 0,
            y: 6
          },
          {
            word: 'Madhya Pradesh',
            x: 150,
            y: 2
          },
          {
            word: 'Chhatishgarh',
            x: 300,
            y: 72
          },
          {
            word: 'Telangana',
            x: 223,
            y: 160
          },
          {
            word: 'Karnataka',
            x: 93,
            y: 249
          }
        ]
      }
    },
    {
      id: 'direction',
      label: 'दिशानिर्देश',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        isPractice: false,
        title: 'Direction',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeWidth: 3,
            strokeLinejoin: 'round'
          },
          paths: [
            'M 150 50 L 150 250 L 160 240 M 150 250 L 140 240 M 160 60 L 150 50 140 60',
            'M 100 150 L 200 150 L 190 160 M 200 150 L 190 140 M 110 160 L 100 150 L 110 140'
          ]
        },
        words: [
          {
            word: 'पूर्व',
            x: 210,
            y: 140
          },
          {
            word: 'पश्चिम',
            x: 20,
            y: 140
          },
          {
            word: 'उत्तर',
            x: 120,
            y: 20
          },
          {
            word: 'बेहोश',
            x: 120,
            y: 260
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'जमीन फॉर्म',
      id: 'land-forms',
      data: {
        title: 'Drag the names and drop on the images.',
        text: `desert | मिष्टान्न
forest | वन
grassland | गवताळ प्रदेश
ocean | महासागर
polar | ध्रुवीय प्रदेश
valley | दरी`
      }
    },
    {
      label: 'लोक आणि कामाची जागा',
      type: 'matchByDragDrop',
      id: '3-people-workplace',
      data: {
        text: `डॉक्टर → *रुग्णालय*
शिक्षक → *शाळा*
रोखपाल → *बँक* 
आचारी → *उपहारगृह*
वकील → *कोर्ट*
छायाचित्रकार → *स्टुडिओ*`
      }
    },
    {
      label: 'लोक आणि साधने',
      type: 'match',
      id: '3-people-tools',
      data: {
        title: 'Match People and the Tools they use.',
        fontSize: '1rem',
        text: `डॉक्टर, स्टेथोस्कोप
चित्रकार, ब्रश
मच्छीमार, नेट
छायाचित्रकार, कॅमेरा
खाटीक, चाकू
लाकूडतोड करणारा, कुऱ्हाड`
      }
    },
    {
      label: 'दक्षिण भारतातील राज्ये',
      type: 'dragAndDrop',
      id: '4-map-south-states',
      data: {
        img: 'southIndiaStates.jpg',
        width: 342,
        height: 368,
        wordWidth: 100,
        isPractice: false,
        words: [
          { word: 'कर्नाटक', x: 50, y: 180 },
          { word: 'आंध्र प्रदेश', x: 115, y: 130 },
          { word: 'तेलंगणा', x: 140, y: 60 },
          { word: 'तामिळनाडू', x: 110, y: 240 },
          { word: 'केरळा', x: 40, y: 280 },
          { word: 'गोवा', x: 6, y: 120 },
          { word: 'महाराष्ट्र', x: 30, y: 10 }
        ]
      }
    },
    {
      label: 'नद्या',
      type: 'dragAndDrop',
      id: '4-map-south-rivers',
      data: {
        img: 'southIndianRivers.jpg',
        width: 253,
        height: 286,
        wordWidth: 85,
        isPractice: false,
        words: [
          { word: 'कावेरी', x: 70, y: 180 },
          { word: 'कृष्णा', x: 125, y: 76 },
          { word: 'गोदावरी', x: 60, y: 10 },
          { word: 'वैगई', x: 110, y: 240 },
          { word: 'तुंगभद्रा', x: 40, y: 140 },
          { word: 'पेरियार', x: 26, y: 220 },
          { word: 'पेनर', x: 130, y: 126 }
        ]
      }
    },
    {
      label: 'भाषा',
      type: 'match',
      id: '4-south-state-language',
      data: {
        isPractice: false,
        title: 'Match states and language spoken.',
        fontSize: '1rem',
        text: `आंध्र प्रदेश, तेलुगु
कर्नाटक, कन्नड
केरळा, मल्याळम
तामिळनाडू, तमिळ
गोवा, कोकणी
महाराष्ट्र, मराठी`
      }
    },
    {
      label: 'नकाशा - शहरे ',
      type: 'dragAndDrop',
      id: '4-india-cities',
      data: {
        img: 'indiaOutline.jpg',
        title: `Drag and drop the cities at appropriate places.`,
        width: 333,
        height: 433,
        wordWidth: 70,
        words: [
          { word: 'मुंबई', x: 40, y: 240 },
          { word: 'कोलकाता', x: 215, y: 210 },
          { word: 'हैदराबाद', x: 110, y: 280 },
          { word: 'नवी दिल्ली', x: 100, y: 110 },
          { word: 'भोपाळ', x: 100, y: 210 },
          { word: 'श्रीनगर', x: 76, y: 35 },
          { word: 'इटानगर', x: 260, y: 136 },
          { word: 'चेन्नई', x: 130, y: 340 }
        ]
      }
    },
    {
      id: 'story',
      type: 'slides2',
      label: `आंब्याच्या झाडाची गोष्ट`,
      data: {
        title: `आंब्याच्या झाडाची गोष्ट`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'mr/mr-mango-story.mp3',
        images: 'img/science/mango-story',
        audioOffsets: [3, 10, 13.5, 17, 22, 27, 32, 37.5],
        steps: [
          `शेतकरी झाडावरील आंबे तोडतो.
आंबे खाली पडून खराब होऊ नयेत म्हणून शेतकरी आंबे तोडण्यासाठी जाळी वापरतो.
तोडलेले आंबे ट्रकमध्ये भरले जातात.
ट्रक गावातून शहरात आंबे घेऊन जातो.
एक मोठा व्यापारी शहरातील सर्व आंबे खरेदी करतो.
अनेक फळ विक्रेते व्यापाऱ्यांकडून आंबे खरेदी करतात.
फळ विक्रेते आंब्यांचे वजन करून व्यापाऱ्याला पैसे देतात.
अखेरीस, आपण स्थानिक फळ विक्रेत्याकडून आंबे खरेदी करतो.`
        ]
      }
    },
    {
      id: 'slides-healthy-food',
      type: 'slides2',
      label: `निरोगी खाण्याच्या सवयी`,
      data: {
        title: `निरोगी खाण्याच्या सवयी`,
        displayType: 'steps',
        audio: 'mr/mr-healthy-eating-habits.mp3',
        images: 'img/science/healthy-eating-habits',
        audioOffsets: [4, 7, 9, 11.5, 14.5, 19, 22.5, 27.5, 29.5, 35.5, 41, 47],
        steps: [
          `जेवण्यापूर्वी आणि नंतर हात धुवावे.
सर्वांनी एकत्र जेवायला बसावे.
जेवताना बोलू नये.
अन्न चांगले चावून खावे.
जेवताना अन्न सांडू नये.
जेवताना टीव्ही पाहणे आणि मोबाईल फोन वापरणे टाळावे.
अति खाऊ नये. तुम्ही आजारी पडू शकता.
प्रत्येक जेवणानंतर चूळ भरून आपले तोंड स्वच्छ धुवावे.
अन्न वाया घालवू नये.
फळे आणि भाज्या खाण्यापूर्वी किंवा शिजवण्यापूर्वी नेहमी धुवून घ्याव्यात.
शिळे अन्न खाऊन तुम्ही आजारी पडू शकता. शिळे अन्न टाळावे.
न झाकलेले अन्न टाळावे कारण त्यात धूळ आणि जंतू असू शकतात.`
        ]
      }
    },
    {
      id: 'slide-what-we-do',
      type: 'slides2',
      label: `आपण काय करत आहेत?`,
      data: {
        title: `आपण काय करत आहेत?`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'mr/mr-what-we-do.mp3',
        audioOffsets: [9.5, 16.5, 21, 28.5, 34.5, 42, 48],
        images: 'inline',
        steps: [
          {
            text: 'मी एक शिक्षक आहे. मला मुलांची आवड आहे. मला मुलांना शिकवायला आणि चांगले संस्कार द्यायला आवडते.',
            img: 'teacher'
          },
          {
            text: 'मी पोलीस अधिकारी आहे. मी सार्वजनिक ठिकाणांचे रक्षण करतो आणि लोकांना सुरक्षित ठेवतो.',
            img: 'police'
          },
          {
            text: 'मी एक डॉक्टर आहे. मी आजारी लोकांना बरे होण्यास मदत करते.',
            img: 'doctor'
          },
          {
            text: 'मी एक नर्स आहे. मी आजारी लोकांच्या गरजा पूर्ण करते. मी बँडेज बांधते आणि इंजेक्शन देते.',
            img: 'nurse'
          },
          {
            text: 'मी एक दुकानदार आहे. मी मालाचे मोजमाप करतो आणि माझ्या दुकानात विकतो.',
            img: 'shopkeeper'
          },
          {
            text: 'मी पोस्टमन आहे. मी पत्र पेटीतून पत्रे गोळा करतो आणि ती योग्य पत्त्यावर पोहोचवतो.',
            img: 'postman'
          },
          {
            text: 'मी दूधवाला आहे. मी गाई-म्हशींचा सांभाळ करतो. मी लोकांना दूध पुरवतो.',
            img: 'milkman'
          }
        ]
      }
    },
    {
      id: '100',
      type: 'slides2',
      label: `तहानलेला कावळा`,
      data: {
        title: `तहानलेला कावळा`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'mr/mr-thirsty-crow.mp3',
        images: 'img/story/crow',
        audioOffsets: [
          6.5, 10.5, 14.5, 18.5, 23, 26.5, 31.5, 36.2, 46, 48.5, 52.5, 55.5,
          60.5, 67.5, 72, 74, 80
        ],
        imageArr: [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 8, 1],
        steps: [
          `एके उष्ण दिवशी, एक तहानलेला कावळा सगळीकडे पाणी शोधत उडत होता.
त्याला बराच वेळ जवळपास कुठेच पाणी दिसले नाही.
त्याला खूप अशक्त वाटायला लागले, सर्व आशा मावळल्या.
तेवढ्यात त्याला एका झाडाखाली पाण्याचे भांडे दिसले.
आत काही पाणी आहे का हे पाहण्यासाठी तो खाली उतरला.
आणि खरंच, त्याला भांड्यात थोडे पाणी दिसले!
कावळ्याने चोच व डोके भांड्यात टाकून पाणी पिण्याचा प्रयत्न केला.
दुर्दैवाने, त्याला लक्षात आले की भांड्याची मान खूपच अरुंद आहे.
मग भांडे ढकलून पाणी सांडेल व पिता येईल असा विचार करून त्याने भांडे ढकलण्याचा प्रयत्न केला, पण भांडे खूप जड होते.
कावळ्याने थोडा वेळ विचार केला.
मग आजूबाजूला बघितले असता त्याला काही खडे दिसले.
त्याला अचानक एक चांगली कल्पना सुचली.
त्याने खडे उचलले, व पाण्यात एक एक खडा टाकायला सुरवात केली.
जसजसे अधिकाधिक खडे भांड्यात पडू लागले तसतशी पाण्याची पातळी वाढत गेली.
लवकरच पाण्याची पातळी कावळ्याला सहज पिता येईल एवढी झाली.
त्याची योजना कामी आली!
कावळ्याने आनंदाने पाणी प्यायले आणि त्याचे आवडते गाणे गात आकाशात उड्डाण केले.`
        ]
      }
    }
  ]
};
