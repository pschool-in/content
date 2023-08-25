export default {
  label: 'കൂടുതൽ ചിത്രങ്ങൾ',
  id: 'ml-en-9',
  lang: 'ml',
  list: [
    {
      type: 'passage',
      label: 'Notes: മറ്റുള്ളവ|others',
      id: 'notes-others-2',
      data: {
        text: [
          'Angel — മാലാഖ\nAlien — അന്യഗ്രഹജീവി\nKnight — യോദ്ധാവ്‌\nChariot — രഥം\nHorse Carriage — കുതിരവണ്ടി\nBow — വില്ല്\nArrow — അമ്പ്\nFountain — ജലധാര\nPouch — സഞ്ചി\nTrolley — തള്ളുവണ്ടി',
          'Whistle — വിസിൽ\nTwig — ചില്ല\nMedicine — മരുന്ന്\nConch — ശംഖ്\nChocolate — ചോക്കലേറ്റ്‌\nTrident — ത്രിശൂലം'
        ]
      }
    },
    {
      type: 'passage',
      label: 'Notes: കൂടുതൽ പൂക്കൾ|More flowers',
      id: 'notes-flowers-2',
      data: {
        text: [
          'Lily — ലില്ലി\nPoppy — കസ്കസ് പൂവ്\nDaisy — ഡെയ്സി\nJasmine — മുല്ലപ്പൂ\nPeriwinkle — നിത്യഹരിത\nWater Lily — ആമ്പൽ\nBougainvillea — കടലാസ്സു പൂവ്\nDecember — ഡിസംബര്‍'
        ]
      }
    },
    {
      id: 'match-others-2',
      type: 'match',
      label: 'Match: മറ്റുള്ളവ',
      commonData: { title: 'Match:' },
      data: [
        'Angel,മാലാഖ\nAlien,അന്യഗ്രഹജീവി\nKnight,യോദ്ധാവ്‌\nChariot,രഥം\nHorse Carriage,കുതിരവണ്ടി',
        'Bow,വില്ല്\nArrow,അമ്പ്\nFountain,ജലധാര\nPouch,സഞ്ചി\nTrolley,തള്ളുവണ്ടി',
        'Whistle,വിസിൽ\nTwig,ചില്ല\nMedicine,മരുന്ന്',
        'Conch,ശംഖ്\nChocolate,ചോക്കലേറ്റ്‌\nTrident,ത്രിശൂലം'
      ]
    },
    {
      id: 'match-flowers-2',
      type: 'match',
      label: 'Match: കൂടുതൽ പൂക്കൾ',
      commonData: { title: 'Match:' },
      data: [
        'Lily,ലില്ലി\nPoppy,കസ്കസ് പൂവ്\nDaisy,ഡെയ്സി\nJasmine,മുല്ലപ്പൂ\nPeriwinkle,നിത്യഹരിത',
        'Water Lily,ആമ്പൽ\nBougainvillea,കടലാസ്സു പൂവ്\nDecember,ഡിസംബര്‍'
      ]
    },
    {
      id: 'jumbled-others-2',
      type: 'sequence',
      label: 'Connect Letters: മറ്റുള്ളവ',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml'
      },
      data: [
        'Angel|മാലാഖ\nAlien|അന്യഗ്രഹജീവി\nKnight|യോദ്ധാവ്‌\nChariot|രഥം\nHorse Carriage|കുതിരവണ്ടി\nBow|വില്ല്\nArrow|അമ്പ്\nFountain|ജലധാര\nPouch|സഞ്ചി\nTrolley|തള്ളുവണ്ടി',
        'Whistle|വിസിൽ\nTwig|ചില്ല\nMedicine|മരുന്ന്\nConch|ശംഖ്\nChocolate|ചോക്കലേറ്റ്‌\nTrident|ത്രിശൂലം'
      ]
    },
    {
      id: 'jumbled-flowers-2',
      type: 'sequence',
      label: 'Connect Letters: കൂടുതൽ പൂക്കൾ',
      data: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml',
        text: 'Lily|ലില്ലി\nPoppy|കസ്കസ് പൂവ്\nDaisy|ഡെയ്സി\nJasmine|മുല്ലപ്പൂ\nPeriwinkle|നിത്യഹരിത\nWater Lily|ആമ്പൽ\nBougainvillea|കടലാസ്സു പൂവ്\nDecember|ഡിസംബര്‍'
      }
    },
    {
      id: 'complete-others-2',
      type: 'completeWord',
      label: 'Complete the Word: മറ്റുള്ളവ',
      commonData: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml'
      },
      data: [
        'Angel|മാലാഖ\nAlien|അന്യഗ്രഹജീവി\nKnight|യോദ്ധാവ്‌\nChariot|രഥം\nHorse Carriage|കുതിരവണ്ടി\nBow|വില്ല്\nArrow|അമ്പ്\nFountain|ജലധാര\nPouch|സഞ്ചി\nTrolley|തള്ളുവണ്ടി',
        'Whistle|വിസിൽ\nTwig|ചില്ല\nMedicine|മരുന്ന്\nConch|ശംഖ്\nChocolate|ചോക്കലേറ്റ്‌\nTrident|ത്രിശൂലം'
      ]
    },
    {
      id: 'complete-flowers-2',
      type: 'completeWord',
      label: 'Complete the Word: കൂടുതൽ പൂക്കൾ',
      data: {
        title: 'Connect Letters',
        type: 'clue',
        fontSize: '2rem',
        lang: 'ml',
        text: 'Lily|ലില്ലി\nPoppy|കസ്കസ് പൂവ്\nDaisy|ഡെയ്സി\nJasmine|മുല്ലപ്പൂ\nPeriwinkle|നിത്യഹരിത\nWater Lily|ആമ്പൽ\nBougainvillea|കടലാസ്സു പൂവ്\nDecember|ഡിസംബര്‍'
      }
    }
  ]
};
