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
    }
  ]
};
