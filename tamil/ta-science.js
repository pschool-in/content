export default {
  label: 'அறிவியல்',
  id: 'ta-science',
  img: 'science',
  lockAfter: 100,
  lang: 'ta',
  list: [
    {
      type: 'dragAndDrop',
      id: 'plant',
      label: 'செடி',
      data: {
        img: 'parts_plant.jpg',
        title: 'செடி',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'வேர்', x: 4, y: 139 },
          { word: 'தண்டு', x: 190, y: 10 },
          { word: 'இலை', x: 197, y: 78 },
          { word: 'மலர்', x: 18, y: 16 },
          { word: 'மொட்டு', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'dog',
      label: 'நாய்',
      data: {
        title: 'நாய்',
        img: 'parts_dog.jpg',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'வால்', x: 190, y: 70 },
          { word: 'காது', x: 5, y: 6 },
          { word: 'கண்', x: 60, y: 8 },
          { word: 'மூக்கு', x: 10, y: 140 },
          { word: 'கால்', x: 140, y: 238 },
          { word: 'முதுகு', x: 146, y: 106 },
          { word: 'நகம்', x: 50, y: 236 }
        ]
      }
    },
    {
      id: 'face',
      label: 'முகம்',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'முகம்',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          {
            word: 'வாய்',
            x: 13,
            y: 242
          },
          {
            word: 'காது',
            x: 190,
            y: 18
          },
          {
            word: 'முடி',
            x: 29,
            y: 18
          },
          {
            word: 'மூக்கு',
            x: 190,
            y: 231
          },
          {
            word: 'கண்',
            x: 16,
            y: 188
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'மனிதன்',
      data: {
        title: 'மனிதன்',
        img: 'parts_boy.jpg',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'விரல்கள்', x: 12, y: 173 },
          { word: 'கால்', x: 24, y: 220 },
          { word: 'தலை', x: 177, y: 70 },
          { word: 'தோள்பட்டை', x: 39, y: 78 },
          { word: 'முட்டி', x: 25, y: 261 },
          { word: 'கை', x: 24, y: 124 },
          { word: 'மார்பு', x: 193, y: 111 },
          { word: 'பாதம் ', x: 28, y: 295 }
        ]
      }
    },
    {
      id: 'tree',
      label: 'மரம்',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'மரம்',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'இலை',
            x: 20,
            y: 30
          },
          {
            word: 'கிளை',
            x: 190,
            y: 230
          },
          {
            word: 'கொப்பு',
            x: 20,
            y: 220
          },
          {
            word: 'பழம்',
            x: 210,
            y: 5
          },
          {
            word: 'மலர்',
            x: 240,
            y: 35
          },
          {
            word: 'தண்டு',
            x: 70,
            y: 240
          },
          {
            word: 'வேர்',
            x: 40,
            y: 280
          },
          {
            word: 'ஆணிவேர்',
            x: 260,
            y: 360
          }
        ]
      }
    },
    {
      id: 'organs',
      label: 'உடல்  உறுப்புகள்',
      type: 'dragAndDrop',
      data: {
        img: 'organs.jpg',
        title: 'உடல்  உறுப்புகளை பொருத்துக',
        width: 304,
        height: 354,
        wordWidth: 60,
        words: [
          {
            word: 'இதயம்',
            x: 230,
            y: 140
          },
          {
            word: 'கல்லீரல்',
            x: 10,
            y: 160
          },
          {
            word: 'மூளை',
            x: 50,
            y: 10
          },
          {
            word: 'நுரையீரல்',
            x: 230,
            y: 70
          },
          {
            word: 'சிறுநீரகம்',
            x: 0,
            y: 210
          },
          {
            word: 'வயிறு',
            x: 220,
            y: 220
          },
          {
            word: 'சிறுகுடல்',
            x: 0,
            y: 250
          },
          {
            word: 'பெருங்குடல்',
            x: 210,
            y: 270
          }
        ]
      }
    },
    {
      id: 'body-parts',
      label: 'உடலின் பாகங்களும் செயல்களும்',
      type: 'matchByDragDrop',
      data: {
        title: 'உடலின் பாகங்களும் செயல்களும்',
        fontSize: '1rem',
        dashWidth: 60,
        text: `பார்க்க உதவும் உறுப்பு = *கண்*
சுவாசிக்க பயன்படும் உறுப்பு = *மூக்கு* 
கேட்க உதவும் உறுப்பு = *காது* 
பேச உதவும் உறுப்பு = *வாய்* 
ஓடுவதற்கு  உதவும் உறுப்பு = *கால்* 
எழுதுவதற்கு பயன்படும் உறுப்பு = *கை* 
சுவை அறிய உதவும் உறுப்பு = *நாக்கு*`
      }
    },
    {
      id: 'match-young',
      type: 'match',
      label: 'பறவைகள், விலங்குகளின் இளமைப்பருவ பெயர்கள்',
      commonData: {
        title: 'பறவைகள், விலங்குகளின் இளமைப்பருவ பெயர்கள்',
        fontSize: '1rem'
      },
      data: [
        `கோழி, குஞ்சு     
நாய், குட்டி
புலி, பறழ்        
அணில், பிள்ளை     
யானை, கன்று `,

        `கிளி, குஞ்சு 
சிங்கம், குருளை     
கீரிப்பிள்ளை , பிள்ளை     
பசு,கன்று`
      ]
    },
    {
      id: 'match-place',
      type: 'match',
      label: 'பொருத்துக-வாழிடம் ',
      commonData: {
        title: 'பொருத்துக-வாழிடம் ',
        fontSize: '1rem'
      },
      data: [
        `கரையான், புற்று 
மாடு, தொழுவம்  
ஆடு, பட்டி 
கோழி, பண்ணை 
சிலந்தி, வலை`,

        `குதிரை,  லாயம்  
குருவி, கூடு 
யானை, கூடம்
முயல் , பொந்து 
தேனீ , தேன் கூடு`,

        `மீன், நீர் 
சிங்கம், குகை  
குரங்கு, மரம் 
எறும்பு, புற்று
பன்றி, கொட்டில்`
      ]
    },

    {
      id: 'match-general',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `மயில் , பறவை
நாய் , விலங்கு
மல்லிகை , மலர்
தை , மாதம்
திங்கள் , கிழமை
சென்னை , ஊர் `,

        `சரிகை, வேட்டி
கருப்பு , கோட்டு
வெள்ளை, சட்டை
சோளக்கொல்லை, பொம்மை
கனத்த, மழை`
      ]
    },

    {
      id: 'birdsound',
      label: 'பறவைகளின் ஒலிகள்',
      type: 'matchByDragDrop',
      commonData: {
        title: 'பறவைகளின் ஒலிகள் ',
        fontSize: '1rem',
        dashWidth: 60
      },
      data: [
        `ஆந்தை = *அலறும்*
காகம் = *கரையும்*
சேவல் = *கூவும்*
குருவி = *கீச்சிடும்*
வாத்து = *கத்தும்*
கோழி = *கொக்கரிக்கும்*`,

        `புறா = *குனுகும்*
மயில் = *அகவும்*
கிளி = *பேசும்*
குயில் = *கூவும்*
வானம்பாடி = *பாடும்*`
      ]
    }
  ]
};
