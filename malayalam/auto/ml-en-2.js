export default {
  label: 'Fruits and Vegetables',
  id: 'ml-en-2',
  list: [
    {
      type: 'passage',
      label: 'Notes: Fruits',
      id: 'notes-fruits',
      data: {
        text: [
          'Apple — ആപ്പിൾ\nGrapes — മുന്തിരി\nBanana — വാഴപ്പഴം\nCherry — ചെറി\nAvocado — അവോക്കാഡോ\nStrawberry — ഞാവൽപ്പഴം\nGuava — പേരക്ക\nJackfruit — ചക്ക\nMango — മാമ്പഴം\nOrange — ഓറഞ്ച്',
          'Papaya — പപ്പായ\nPineapple — കൈതച്ചക്ക\nWatermelon — തണ്ണിമത്തൻ\nPomegranate — മാതളനാരകം\nFig — അത്തിപ്പഴം\nCustard Apple — സീതപ്പഴം\nPlum — പ്ലം\nDates — ഈന്തപ്പഴം\nMuskmelon — തൈക്കുമ്പലം'
        ]
      }
    },
    {
      type: 'passage',
      label: 'Notes: Vegetables',
      id: 'notes-vegetables',
      data: {
        text: [
          'Carrot — കാരറ്റ്\nBeetroot — ബീറ്റ്റൂട്ട്\nOnion — ഉള്ളി\nTomato — തക്കാളി\nPotato — ഉരുളക്കിഴങ്ങ്\nCabbage — മുട്ടക്കോസ്\nCorn — ചോളം\nCucumber — വെള്ളരിക്ക\nGarlic — വെളുത്തുള്ളി\nGinger — ഇഞ്ചി',
          'Cauliflower — കോളിഫ്ലവർ\nPumpkin — മത്തങ്ങ\nAlmond — ബദാം\nBeans — പയർ\nBitter Gourd — പാവയ്ക്ക\nBrinjal — വഴുതന\nCapsicum — കാപ്സിക്കം\nCashewnut — കശുവണ്ടി\nChilli — മുളക്\nCoconut — നാളികേരം',
          'Coriander Leaf — മല്ലിയില\nCurry Leaf — കറിവേപ്പില\nDrumstick — മുരിങ്ങ\nGreen Peas — ഗ്രീൻ പീസ\nLadies Finger — വെണ്ടക്ക\nMintleaf — പുതിന\nPeanut — കപ്പലണ്ടി\nRadish — മുള്ളങ്കി\nSpinach — ചീര\nVegetables — പച്ചക്കറികൾ'
        ]
      }
    },
    {
      id: 'match-fruits',
      type: 'match',
      label: 'Match:Fruits',
      commonData: { title: 'Match:' },
      data: [
        'Apple,ആപ്പിൾ\nGrapes,മുന്തിരി\nBanana,വാഴപ്പഴം\nCherry,ചെറി\nAvocado,അവോക്കാഡോ',
        'Strawberry,ഞാവൽപ്പഴം\nGuava,പേരക്ക\nJackfruit,ചക്ക\nMango,മാമ്പഴം\nOrange,ഓറഞ്ച്',
        'Papaya,പപ്പായ\nPineapple,കൈതച്ചക്ക\nWatermelon,തണ്ണിമത്തൻ\nPomegranate,മാതളനാരകം\nFig,അത്തിപ്പഴം',
        'Custard Apple,സീതപ്പഴം\nPlum,പ്ലം\nDates,ഈന്തപ്പഴം\nMuskmelon,തൈക്കുമ്പലം'
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'Match:Vegetables',
      commonData: { title: 'Match:' },
      data: [
        'Carrot,കാരറ്റ്\nBeetroot,ബീറ്റ്റൂട്ട്\nOnion,ഉള്ളി\nTomato,തക്കാളി\nPotato,ഉരുളക്കിഴങ്ങ്',
        'Cabbage,മുട്ടക്കോസ്\nCorn,ചോളം\nCucumber,വെള്ളരിക്ക\nGarlic,വെളുത്തുള്ളി\nGinger,ഇഞ്ചി',
        'Cauliflower,കോളിഫ്ലവർ\nPumpkin,മത്തങ്ങ\nAlmond,ബദാം\nBeans,പയർ\nBitter Gourd,പാവയ്ക്ക',
        'Brinjal,വഴുതന\nCapsicum,കാപ്സിക്കം\nCashewnut,കശുവണ്ടി\nChilli,മുളക്\nCoconut,നാളികേരം',
        'Coriander Leaf,മല്ലിയില\nCurry Leaf,കറിവേപ്പില\nDrumstick,മുരിങ്ങ\nGreen Peas,ഗ്രീൻ പീസ\nLadies Finger,വെണ്ടക്ക',
        'Mintleaf,പുതിന\nPeanut,കപ്പലണ്ടി\nRadish,മുള്ളങ്കി\nSpinach,ചീര\nVegetables,പച്ചക്കറികൾ'
      ]
    },
    {
      id: 'jumbled-fruits',
      type: 'sequence',
      label: 'Connect LettersFruits',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml'
      },
      data: [
        'Apple|ആപ്പിൾ\nGrapes|മുന്തിരി\nBanana|വാഴപ്പഴം\nCherry|ചെറി\nAvocado|അവോക്കാഡോ\nStrawberry|ഞാവൽപ്പഴം\nGuava|പേരക്ക\nJackfruit|ചക്ക\nMango|മാമ്പഴം\nOrange|ഓറഞ്ച്',
        'Papaya|പപ്പായ\nPineapple|കൈതച്ചക്ക\nWatermelon|തണ്ണിമത്തൻ\nPomegranate|മാതളനാരകം\nFig|അത്തിപ്പഴം\nCustard Apple|സീതപ്പഴം\nPlum|പ്ലം\nDates|ഈന്തപ്പഴം\nMuskmelon|തൈക്കുമ്പലം'
      ]
    },
    {
      id: 'jumbled-vegetables',
      type: 'sequence',
      label: 'Connect LettersVegetables',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml'
      },
      data: [
        'Carrot|കാരറ്റ്\nBeetroot|ബീറ്റ്റൂട്ട്\nOnion|ഉള്ളി\nTomato|തക്കാളി\nPotato|ഉരുളക്കിഴങ്ങ്\nCabbage|മുട്ടക്കോസ്\nCorn|ചോളം\nCucumber|വെള്ളരിക്ക\nGarlic|വെളുത്തുള്ളി\nGinger|ഇഞ്ചി',
        'Cauliflower|കോളിഫ്ലവർ\nPumpkin|മത്തങ്ങ\nAlmond|ബദാം\nBeans|പയർ\nBitter Gourd|പാവയ്ക്ക\nBrinjal|വഴുതന\nCapsicum|കാപ്സിക്കം\nCashewnut|കശുവണ്ടി\nChilli|മുളക്\nCoconut|നാളികേരം',
        'Coriander Leaf|മല്ലിയില\nCurry Leaf|കറിവേപ്പില\nDrumstick|മുരിങ്ങ\nGreen Peas|ഗ്രീൻ പീസ\nLadies Finger|വെണ്ടക്ക\nMintleaf|പുതിന\nPeanut|കപ്പലണ്ടി\nRadish|മുള്ളങ്കി\nSpinach|ചീര\nVegetables|പച്ചക്കറികൾ'
      ]
    },
    {
      id: 'complete-fruits',
      type: 'completeWord',
      label: 'Complete the WordFruits',
      commonData: {
        fontSize: '2rem',
        label: 'Write the word for the given English word.',
        lang: 'ml'
      },
      data: [
        'Apple|ആപ്പിൾ\nGrapes|മുന്തിരി\nBanana|വാഴപ്പഴം\nCherry|ചെറി\nAvocado|അവോക്കാഡോ\nStrawberry|ഞാവൽപ്പഴം\nGuava|പേരക്ക\nJackfruit|ചക്ക\nMango|മാമ്പഴം\nOrange|ഓറഞ്ച്',
        'Papaya|പപ്പായ\nPineapple|കൈതച്ചക്ക\nWatermelon|തണ്ണിമത്തൻ\nPomegranate|മാതളനാരകം\nFig|അത്തിപ്പഴം\nCustard Apple|സീതപ്പഴം\nPlum|പ്ലം\nDates|ഈന്തപ്പഴം\nMuskmelon|തൈക്കുമ്പലം'
      ]
    },
    {
      id: 'complete-vegetables',
      type: 'completeWord',
      label: 'Complete the WordVegetables',
      commonData: {
        fontSize: '2rem',
        label: 'Write the word for the given English word.',
        lang: 'ml'
      },
      data: [
        'Carrot|കാരറ്റ്\nBeetroot|ബീറ്റ്റൂട്ട്\nOnion|ഉള്ളി\nTomato|തക്കാളി\nPotato|ഉരുളക്കിഴങ്ങ്\nCabbage|മുട്ടക്കോസ്\nCorn|ചോളം\nCucumber|വെള്ളരിക്ക\nGarlic|വെളുത്തുള്ളി\nGinger|ഇഞ്ചി',
        'Cauliflower|കോളിഫ്ലവർ\nPumpkin|മത്തങ്ങ\nAlmond|ബദാം\nBeans|പയർ\nBitter Gourd|പാവയ്ക്ക\nBrinjal|വഴുതന\nCapsicum|കാപ്സിക്കം\nCashewnut|കശുവണ്ടി\nChilli|മുളക്\nCoconut|നാളികേരം',
        'Coriander Leaf|മല്ലിയില\nCurry Leaf|കറിവേപ്പില\nDrumstick|മുരിങ്ങ\nGreen Peas|ഗ്രീൻ പീസ\nLadies Finger|വെണ്ടക്ക\nMintleaf|പുതിന\nPeanut|കപ്പലണ്ടി\nRadish|മുള്ളങ്കി\nSpinach|ചീര\nVegetables|പച്ചക്കറികൾ'
      ]
    }
  ]
};
