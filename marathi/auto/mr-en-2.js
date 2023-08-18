export default {
  label: 'फळे आणि भाज्या',
  id: 'mr-en-2',
  lang: 'mr',
  list: [
    {
      type: 'passage',
      label: 'Notes: फळे|Fruits',
      id: 'notes-fruits',
      data: {
        text: [
          'Apple — सफरचंद\nGrapes — द्राक्षे\nBanana — केळी\nCherry — चेरी\nStrawberry — स्ट्रॉबेरी\nGuava — पेरू\nJackfruit — फणस\nMango — आंबा\nOrange — संत्री\nPapaya — पपई',
          'Pineapple — अननस\nWatermelon — टरबूज\nPomegranate — डाळिंब\nFig — अंजीर\nCustard Apple — सीताफळ\nPlum — मनुका\nDates — खजूर\nMuskmelon — खरबूज'
        ]
      }
    },
    {
      type: 'passage',
      label: 'Notes: भाज्या|Vegetables',
      id: 'notes-vegetables',
      data: {
        text: [
          'Carrot — गाजर\nBeetroot — बीट\nOnion — कांदा\nTomato — टोमॅटो\nPotato — बटाटा\nCabbage — कोबी\nCorn — मका\nCucumber — काकडी\nGarlic — लसूण\nGinger — आले',
          'Cauliflower — फुलकोबी\nPumpkin — भोपळा\nAlmond — बदाम\nBeans — शेंगा\nBitter Gourd — कारले\nBrinjal — वांगे\nCapsicum — शिमला मिर्ची\nCashewnut — काजू\nChilli — मिरची\nCoconut — नारळ',
          'Lemon — लिंबू\nCoriander Leaf — कोथिंबीर पान\nCurry Leaf — कढीपत्ता\nDrumstick — शेवगा\nGreen Peas — हिरवा वाटाणा\nLadies Finger — भेंडी\nMintleaf — पुदीना\nPeanut — शेंगदाणा',
          'Radish — मुळा\nSpinach — पालक\nVegetables — भाज्या'
        ]
      }
    },
    {
      id: 'match-fruits',
      type: 'match',
      label: 'Match: फळे',
      commonData: { title: 'Match:' },
      data: [
        'Apple,सफरचंद\nGrapes,द्राक्षे\nBanana,केळी\nCherry,चेरी\nStrawberry,स्ट्रॉबेरी',
        'Guava,पेरू\nJackfruit,फणस\nMango,आंबा\nOrange,संत्री\nPapaya,पपई',
        'Pineapple,अननस\nWatermelon,टरबूज\nPomegranate,डाळिंब\nFig,अंजीर\nCustard Apple,सीताफळ',
        'Plum,मनुका\nDates,खजूर\nMuskmelon,खरबूज'
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'Match: भाज्या',
      commonData: { title: 'Match:' },
      data: [
        'Carrot,गाजर\nBeetroot,बीट\nOnion,कांदा\nTomato,टोमॅटो\nPotato,बटाटा',
        'Cabbage,कोबी\nCorn,मका\nCucumber,काकडी\nGarlic,लसूण\nGinger,आले',
        'Cauliflower,फुलकोबी\nPumpkin,भोपळा\nAlmond,बदाम\nBeans,शेंगा\nBitter Gourd,कारले',
        'Brinjal,वांगे\nCapsicum,शिमला मिर्ची\nCashewnut,काजू\nChilli,मिरची\nCoconut,नारळ',
        'Lemon,लिंबू\nCoriander Leaf,कोथिंबीर पान\nCurry Leaf,कढीपत्ता\nDrumstick,शेवगा\nGreen Peas,हिरवा वाटाणा',
        'Ladies Finger,भेंडी\nMintleaf,पुदीना\nPeanut,शेंगदाणा',
        'Radish,मुळा\nSpinach,पालक\nVegetables,भाज्या'
      ]
    },
    {
      id: 'jumbled-fruits',
      type: 'sequence',
      label: 'Connect Letters: फळे',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'mr'
      },
      data: [
        'Apple|सफरचंद\nGrapes|द्राक्षे\nBanana|केळी\nCherry|चेरी\nStrawberry|स्ट्रॉबेरी\nGuava|पेरू\nJackfruit|फणस\nMango|आंबा\nOrange|संत्री\nPapaya|पपई',
        'Pineapple|अननस\nWatermelon|टरबूज\nPomegranate|डाळिंब\nFig|अंजीर\nCustard Apple|सीताफळ\nPlum|मनुका\nDates|खजूर\nMuskmelon|खरबूज'
      ]
    },
    {
      id: 'jumbled-vegetables',
      type: 'sequence',
      label: 'Connect Letters: भाज्या',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'mr'
      },
      data: [
        'Carrot|गाजर\nBeetroot|बीट\nOnion|कांदा\nTomato|टोमॅटो\nPotato|बटाटा\nCabbage|कोबी\nCorn|मका\nCucumber|काकडी\nGarlic|लसूण\nGinger|आले',
        'Cauliflower|फुलकोबी\nPumpkin|भोपळा\nAlmond|बदाम\nBeans|शेंगा\nBitter Gourd|कारले\nBrinjal|वांगे\nCapsicum|शिमला मिर्ची\nCashewnut|काजू\nChilli|मिरची\nCoconut|नारळ',
        'Lemon|लिंबू\nCoriander Leaf|कोथिंबीर पान\nCurry Leaf|कढीपत्ता\nDrumstick|शेवगा\nGreen Peas|हिरवा वाटाणा\nLadies Finger|भेंडी\nMintleaf|पुदीना\nPeanut|शेंगदाणा',
        'Radish|मुळा\nSpinach|पालक\nVegetables|भाज्या'
      ]
    },
    {
      id: 'complete-fruits',
      type: 'completeWord',
      label: 'Complete the Word: फळे',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'mr'
      },
      data: [
        'Apple|सफरचंद\nGrapes|द्राक्षे\nBanana|केळी\nCherry|चेरी\nStrawberry|स्ट्रॉबेरी\nGuava|पेरू\nJackfruit|फणस\nMango|आंबा\nOrange|संत्री\nPapaya|पपई',
        'Pineapple|अननस\nWatermelon|टरबूज\nPomegranate|डाळिंब\nFig|अंजीर\nCustard Apple|सीताफळ\nPlum|मनुका\nDates|खजूर\nMuskmelon|खरबूज'
      ]
    },
    {
      id: 'complete-vegetables',
      type: 'completeWord',
      label: 'Complete the Word: भाज्या',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'mr'
      },
      data: [
        'Carrot|गाजर\nBeetroot|बीट\nOnion|कांदा\nTomato|टोमॅटो\nPotato|बटाटा\nCabbage|कोबी\nCorn|मका\nCucumber|काकडी\nGarlic|लसूण\nGinger|आले',
        'Cauliflower|फुलकोबी\nPumpkin|भोपळा\nAlmond|बदाम\nBeans|शेंगा\nBitter Gourd|कारले\nBrinjal|वांगे\nCapsicum|शिमला मिर्ची\nCashewnut|काजू\nChilli|मिरची\nCoconut|नारळ',
        'Lemon|लिंबू\nCoriander Leaf|कोथिंबीर पान\nCurry Leaf|कढीपत्ता\nDrumstick|शेवगा\nGreen Peas|हिरवा वाटाणा\nLadies Finger|भेंडी\nMintleaf|पुदीना\nPeanut|शेंगदाणा',
        'Radish|मुळा\nSpinach|पालक\nVegetables|भाज्या'
      ]
    }
  ]
};
