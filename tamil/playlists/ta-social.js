export default {
  label: 'சமூகம்',
  id: 'ta-social',
  img: 'social',

  list: [
    {
      id: 'direction',
      label: 'திசைகள்',
      type: 'dragAndDrop',
      data: {
        img: 'direction',
        width: 300,
        height: 300,
        wordWidth: 70,
        isPractice: false,
        title: 'திசைகளை சரியான இடத்தில் பொருத்துக',
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
        img: 'tamilNadu',
        width: 320,
        height: 412,
        wordWidth: 110,
        isPractice: false,
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
        img: 'tamilNadu',
        src: 'tamilNadu.png',
        title: 'மாநகரங்கள்',
        width: 320,
        height: 412,
        wordWidth: 110,
        isPractice: false,
        words: [
          {
            word: 'சென்னை ',
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
            word: 'கோயம்புத்தூர்  ',
            x: 20,
            y: 180
          },
          {
            word: 'சேலம் ',
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
        img: 'tamilNadu',
        src: 'tamilNadu.png',
        title: 'சுற்றுலா தலங்கள்',
        width: 320,
        height: 412,
        wordWidth: 110,
        isPractice: false,
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
            word: 'ராமேஸ்வரம் ',
            x: 180,
            y: 300
          },
          {
            word: 'கன்னியாகுமரி  ',
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
        editable: true,
        title: 'உணவும் ஊரும்',
        fontSize: '1rem',
        text:
          'திருநெல்வேலி,  அல்வா\nகும்பகோணம், காபி \nஆம்பூர், பிரியாணி \nகாஞ்சிபுரம், இட்லி \nஊட்டி, வறுக்கி \nமணப்பாறை, முறுக்கு \nசென்னை, வடகறி '
      }
    },
    {
      id: '600',
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      data: {
        editable: true,
        title:
          'கீழ் வரும் நகரங்களை வடக்கில் இருந்து தெற்கு வரை வரிசை படுத்தவும்.',
        text:
          'சென்னை, செங்கல்பட்டு, விழுப்புரம், திருச்சி, திண்டுக்கல், மதுரை, திருநெல்வேலி, நாகர்கோவில் , கன்னியாகுமரி '
      }
    },
    {
      id: '700',
      label: 'சரியான பதிலை தேர்வு செய்க ',
      type: 'mcq',
      data: {
        editable: true,
        title: 'பின்வரும் கேள்விகளுக்கு சரியான விடையை தேர்வு செய்க ',
        questions: [
          {
            qText: 'எதை அடிப்படையாக வைத்து மாநிலங்கள் பிரிக்க பட்டது ?',
            options: 'மொழி , மதம் , மக்கள்தொகை '
          },
          {
            qText: 'ராஜராஜ சோழன் கட்டிய பெரிய கோவில் எந்த ஊரில் உள்ளது?',
            options: 'தஞ்சாவூர்,  திருச்சி,  மதுரை '
          },
          {
            qText: 'காவிரி ஆறு எந்த நகரின் நடுவே பாய்கிறது?',
            options: 'திருச்சி , மதுரை , சென்னை , சேலம் '
          },
          {
            qText: 'வைகை ஆறு எந்த நகரின் நடுவே பாய்கிறது?',
            options: 'மதுரை , திருச்சி , சென்னை , சேலம் '
          },
          {
            qText: 'தமிழ் நாட்டின் வடக்கே அமைந்துள்ள மாநிலம் எது?',
            options: 'ஆந்திர பிரதேசம், கர்நாடகா , கேரளா '
          }
        ]
      }
    },
    {
      id: '800',
      label: 'கடலோர நகரங்கள் ',
      type: 'group',
      data: {
        editable: true,
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
        editable: true,
        title: 'எழுத்துக்களை சேர்த்து வார்த்தை அமைக்கவும் ',
        text: `செ ன் னை
தி ரு ச் சி
சே ல ம்
ம து ரை
கோ ய ம் பு த் தூ ர் 
கா வி ரி
தா மி ர ப ர ணி
நொ ய் ய ல்
அ ம ரா வ தி
பா லா று
தெ ன் பெ ண் ணை `
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
            word: 'திருச்சி ',
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
            word: 'நொய்யல் ',
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
    }
  ]
};
