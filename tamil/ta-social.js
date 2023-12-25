export default {
  label: 'சமூகம்',
  id: 'ta-social',
  img: 'social',
  lang: 'ta',
  list: [
    {
      id: 'direction',
      label: 'திசைகள்',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        title: 'திசைகளை சரியான இடத்தில் பொருத்துக',
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
            word: 'கிழக்கு',
            x: 210,
            y: 140
          },
          {
            word: 'மேற்கு',
            x: 20,
            y: 140
          },
          {
            word: 'வடக்கு',
            x: 120,
            y: 20
          },
          {
            word: 'தெற்கு',
            x: 120,
            y: 260
          }
        ]
      }
    },
    {
      id: 'map-rivers',
      label: 'நதிகள்',
      type: 'dragAndDrop',
      data: {
        img: 'tamilnadu.jpg',
        width: 320,
        height: 412,
        wordWidth: 110,
        title: 'நதிகளை சரியான இடத்தில் பொருத்துக ',
        words: [
          {
            word: 'காவிரி',
            x: 160,
            y: 180
          },
          {
            word: 'வைகை',
            x: 115,
            y: 260
          },
          {
            word: 'தாமிரபரணி',
            x: 80,
            y: 330
          },
          {
            word: 'நொய்யல்',
            x: 20,
            y: 150
          },
          {
            word: 'அமராவதி',
            x: 40,
            y: 210
          },
          {
            word: 'பாலாறு',
            x: 150,
            y: 40
          },
          {
            word: 'தென்பெண்ணை',
            x: 150,
            y: 90
          }
        ]
      }
    },
    {
      id: '200',
      label: 'மாநகரங்கள்',
      type: 'dragAndDrop',
      data: {
        img: 'tamilnadu.jpg',
        title: 'மாநகரங்கள்',
        width: 320,
        height: 412,
        wordWidth: 110,
        words: [
          {
            word: 'சென்னை',
            x: 210,
            y: 10
          },
          {
            word: 'மதுரை',
            x: 95,
            y: 260
          },
          {
            word: 'திருச்சி',
            x: 120,
            y: 200
          },
          {
            word: 'கோயம்புத்தூர்',
            x: 20,
            y: 180
          },
          {
            word: 'சேலம்',
            x: 100,
            y: 130
          }
        ]
      }
    },
    {
      id: '400',
      label: 'சுற்றுலா தலங்கள்',
      type: 'dragAndDrop',
      data: {
        img: 'tamilnadu.jpg',
        title: 'சுற்றுலா தலங்கள்',
        width: 320,
        height: 412,
        wordWidth: 110,
        words: [
          {
            word: 'மாமல்லபுரம்',
            x: 210,
            y: 30
          },
          {
            word: 'கொடைக்கானல்',
            x: 70,
            y: 230
          },
          {
            word: 'ராமேஸ்வரம்',
            x: 180,
            y: 300
          },
          {
            word: 'கன்னியாகுமரி',
            x: 80,
            y: 380
          },
          {
            word: 'ஊட்டி',
            x: 20,
            y: 170
          },
          {
            word: 'ஏற்காடு',
            x: 100,
            y: 120
          }
        ]
      }
    },
    {
      id: '500',
      type: 'match',
      label: 'உணவும் ஊரும் ',
      data: {
        title: 'உணவும் ஊரும்',
        fontSize: '1rem',
        text: `திருநெல்வேலி,  அல்வா
கும்பகோணம், காபி 
ஆம்பூர், பிரியாணி 
காஞ்சிபுரம், இட்லி 
ஊட்டி, வறுக்கி 
மணப்பாறை, முறுக்கு 
சென்னை, வடகறி`
      }
    },
    {
      id: '600',
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        title:
          'கீழ் வரும் நகரங்களை வடக்கில் இருந்து தெற்கு வரை வரிசை படுத்தவும்.',
        text: 'சென்னை, செங்கல்பட்டு, விழுப்புரம், திருச்சி, திண்டுக்கல், மதுரை, திருநெல்வேலி, நாகர்கோவில் , கன்னியாகுமரி '
      }
    },

    {
      id: '800',
      label: 'கடலோர நகரங்கள் ',
      type: 'group',
      data: {
        fontSize: '0.8rem',
        title: 'கடலோர நகரங்கள் ',
        types: [
          {
            name: 'கடலோர நகரம் ',
            text: 'சென்னை , கன்னியாகுமரி , கடலூர் , நாகப்பட்டினம்'
          },
          {
            name: 'கடலில்லா நகரம் ',
            text: 'திருச்சி , மதுரை , சேலம், கோயம்புத்தூர் '
          }
        ]
      }
    },
    {
      id: '900',
      type: 'sequence',
      label: 'வார்த்தை அமைக்கவும் ',
      data: {
        lang: 'ta',
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும் ',
        text: `சென்னை, திருச்சி, சேலம், மதுரை, கோயம்புத்தூர், காவிரி, தாமிரபரணி, நொய்யல், அமராவதி, பாலாறு, தென்பெண்ணை `
      }
    },
    {
      id: '1000',
      type: 'wordsearch',
      label: 'நகரங்கள், நதிகள்',
      data: {
        words: [
          {
            word: 'சென்னை',
            marker: [0, 5, 2, 7]
          },
          {
            word: 'கோயம்புத்தூர்',
            marker: [1, 3, 7, 3]
          },
          {
            word: 'அமராவதி',
            marker: [0, 0, 0, 4]
          },
          {
            word: 'திருச்சி',
            marker: [0, 4, 3, 4]
          },
          {
            word: ' மதுரை',
            marker: [0, 1, 2, 1]
          },
          {
            word: 'வைகை',
            marker: [7, 6, 7, 7]
          },
          {
            word: 'காவிரி',
            marker: [4, 0, 6, 2]
          },
          {
            word: 'நொய்யல்',
            marker: [7, 4, 4, 7]
          },
          {
            word: 'பாலாறு',
            marker: [3, 5, 3, 7]
          }
        ],
        showWords: true,
        lang: 'ta',
        desc: 'கீழ் காணும் வார்த்தைகளை கண்டுபிடிக்கவும் ',
        table: [
          ['அ', 'தா', 'ப்', 'வ', 'கா', 'சு', 'ர', 'ச்'],
          ['ம', 'து', 'ரை', 'ழ', 'டீ', 'வி', 'ய', 'த்'],
          ['ரா', 'வ்', 'ங்', 'தெ', 'ச', 'ம்', 'ரி', 'டு'],
          ['வ', 'கோ', 'ய', 'ம்', 'பு', 'த்', 'தூ', 'ர்'],
          ['தி', 'ரு', 'ச்', 'சி', 'த்', 'கு', 'ன', 'நொ'],
          ['செ', 'ல', 'த்', 'பா', 'ழ', 'ர்', 'ய்', 'ச'],
          ['டீ', 'ன்', 'ப', 'லா', 'த', 'ய', 'ச்', 'வை'],
          ['டே', 'க்', 'னை', 'று', 'ல்', 'நு', 'ட்', 'கை']
        ]
      }
    },
    {
      id: 'story',
      type: 'slides2',
      label: `ஒரு மாம்பழத்தின் கதை`,
      data: {
        title: `ஒரு மாம்பழத்தின் கதை `,
        displayType: 'steps',
        autoPlay: false,
        audio: 'ta/ta-mango-story.mp3',
        images: 'img/science/mango-story',
        audioOffsets: [6, 14, 20, 28, 36, 44, 50, 60],
        steps: [
          `விவசாயி மரத்தில் இருந்து மாம்பழங்களைப் பறிப்பார்.
          கீழே விழுந்து சேதமடையாமல் இருக்க, விவசாயி வலையைப் பயன்படுத்துவார்.
         பறித்த மாம்பழங்கள் லாரியில் ஏற்றப்படுகின்றன.
         மாம்பழங்கள்  கிராமத்தில் இருந்து நகரத்திற்கு கொண்டு செல்ல படுகிறது.
         ஒரு பெரிய வியாபாரி அனைத்து மாம்பழங்களையும் வாங்குகிறார்.
         பல சிறிய வியாபாரிகள் அவரிடம் இருந்து மாம்பழங்களை வாங்குகின்றனர்.
         மாம்பழங்களை எடைபோட்டு  பணம் கொடுக்கிறார்கள்.
         இறுதியாக, உள்ளூர் வியாபாரியிடம்  இருந்து மாம்பழத்தை நாம் வாங்குகிறோம்.`
        ]
      }
    },
    {
      id: 'slides-healthy-food',
      type: 'slides2',
      label: `உணவு பழக்கங்கள்`,
      data: {
        title: `உணவு பழக்கங்கள்`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'ta/ta-eating-habits.mp3',
        images: 'img/science/healthy-eating-habits',
        audioOffsets: [5.5, 10, 14, 18, 22, 30, 37, 43, 46, 52, 56, 64],
        steps: [
          `சாப்பிடுவதற்கு முன்னும் பின்னும் கைகளை கழுவவும்.
          ஒன்றாக அமர்ந்து சாப்பிடுங்கள்.
          சாப்பிடும் போது பேசக்கூடாது.
          உணவை நன்றாக மென்று சாப்பிடுங்கள்.
          சாப்பிடும் போது உணவை சிந்தாதீர்கள்.
          சாப்பிடும் போது டிவி பார்ப்பதையும், மொபைல் போன் பயன்படுத்துவதையும் தவிர்க்கவும்.
          அதிகமாக சாப்பிடக் கூடாது. அது உடல் பருமனை ஏற்படுத்தும்.
          ஒவ்வொரு முறை  உணவருந்திய பிறகும், வாய் கொப்பளிக்கவும்.
          உணவை வீணாக்காதீர்கள்.
          பழங்கள் மற்றும் காய்கறிகளை பயன் படுத்துமுன் நன்றாக கழுவவும்.
          கெட்டுப்போன உணவை உண்ணக் கூடாது.
          மூடி வைக்கப்படாத உணவுகளில் தூசி மற்றும் கிருமிகள் இருக்கலாம். அதைத் தவிர்க்கவும்.`
        ]
      }
    },
    {
      id: 'slide-what-we-do',
      type: 'slides2',
      label: `நான் யார் ?`,
      data: {
        title: `நான் யார் ?`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'ta/ta-jobs-about.mp3',
        images: 'inline',
        audioOffsets: [10, 19, 25, 32, 39.5, 50, 59.5],
        steps: [
          {
            text: 'நான் ஒரு ஆசிரியர். எனக்கு மாணவர்கள் மீது பிரியம். நான் பாடங்களையும் நல்ல பழக்க வழக்கங்களையும் சொல்லி தருவேன்.',
            img: 'teacher'
          },
          {
            text: 'நான் ஒரு காவலர் . நான் பொது இடங்களைப் பாதுகாத்து மக்களைப் பாதுகாப்பாக வைத்திருக்கிறேன்.',
            img: 'police'
          },
          {
            text: 'நான் ஒரு மருத்துவர். நோயுடன் வருபவர்கள் குணமடைய உதவுகிறேன்.',
            img: 'doctor'
          },
          {
            text: 'நான் ஒரு செவிலியர். நோய்வாய்ப்பட்டவர்களின் தேவைகளை நான் கவனித்துக்கொள்கிறேன்.',
            img: 'nurse'
          },
          {
            text: 'நான் ஒரு கடைக்காரர். நான் பொருட்களை அளந்து மக்களுக்கு  விற்கிறேன்.',
            img: 'shopkeeper'
          },
          {
            text: 'நான் ஒரு தபால்காரர். நான் தபால் பெட்டியில் இருந்து கடிதங்களை சேகரித்து சரியான முகவரிக்கு கொண்டு சேர்ப்பேன்.',
            img: 'postman'
          },
          {
            text: 'நான் ஒரு பால்காரர். நான் பசுக்கள் மற்றும் எருமைகளை கவனித்து வருகிறேன். நான் மக்களுக்கு பால் வழங்குகிறேன்.',
            img: 'milkman'
          }
        ]
      }
    }
  ]
};
