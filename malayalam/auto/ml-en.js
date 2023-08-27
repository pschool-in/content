export default {
  label: 'മൃഗങ്ങളും പക്ഷികളും',
  id: 'ml-en',
  lang: 'ml',
  list: [
    {
      type: 'passage',
      label: 'Notes: മൃഗങ്ങൾ',
      id: 'notes-animals',
      data: {
        title: 'Notes',
        text: [
          'Cat — പൂച്ച\nDog — നായ\nGoat — ആട്\nCow — പശു\nDonkey — കഴുത\nHorse — കുതിര\nPig — പന്നി\nElephant — ആന\nLion — സിംഹം\nMonkey — കുരങ്ങൻ',
          'Rhino — കാണ്ടാമൃഗം\nFox — കുറുക്കൻ\nCrocodile — മുതല\nZebra — സീബ്ര\nBear — കരടി\nCamel — ഒട്ടകം\nShark — സ്രാവ്\nWhale — തിമിംഗലം\nDolphin — ഡോൾഫിൻ\nTiger — കടുവ',
          'Sheep — ചെമ്മരിയാട്\nFish — മത്സ്യം\nFrog — തവള\nCrab — ഞണ്ട്\nSnake — പാമ്പ്\nBull — കാള\nTortoise — ആമ\nRat — എലി\nAnt — ഉറുമ്പ്\nBat — വവ്വാൽ',
          'Buffalo — പോത്ത്\nButterfly — ചിത്രശലഭം\nCheetah — ചീറ്റ\nBee — തേനീച്ച\nGoldfish — സ്വർണ്ണമത്സ്യം\nSpider — ചിലന്തി\nGiraffe — ജിറാഫ്\nKangaroo — കംഗാരു'
        ]
      }
    },
    {
      type: 'passage',
      label: 'Notes: പക്ഷികൾ',
      id: 'notes-birds',
      data: {
        title: 'Notes',
        text: [
          'Crow — കാക്ക\nDove — പ്രാവ്\nDuck — താറാവ്\nHen — കോഴി\nChick — കോഴിക്കുഞ്ഞ്\nParrot — തത്ത\nPeacock — മയിൽ\nSparrow — കുരുവി\nCrane — കൊക്ക്\nEagle — പരുന്ത്',
          'Flamingo — രാജഹംസം\nKingfisher — നീലപൊൻമാൻ\nMyna — മൈന\nOstrich — ഒട്ടകപ്പക്ഷി\nOwl — മൂങ്ങ\nRooster — പൂവന്കോഴി\nVulture — കഴുകൻ\nWoodpecker — മരംകൊത്തി\nKoel — കുയിൽ'
        ]
      }
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'Match: മൃഗങ്ങൾ',
      commonData: {
        title: 'ഇംഗ്ലീഷും തുല്യമായ മലയാളം പദവും പൊരുത്തപ്പെടുത്തുക'
      },
      data: [
        'Cat,പൂച്ച\nDog,നായ\nGoat,ആട്\nCow,പശു\nDonkey,കഴുത',
        'Horse,കുതിര\nPig,പന്നി\nElephant,ആന\nLion,സിംഹം\nMonkey,കുരങ്ങൻ',
        'Rhino,കാണ്ടാമൃഗം\nFox,കുറുക്കൻ\nCrocodile,മുതല\nZebra,സീബ്ര\nBear,കരടി',
        'Camel,ഒട്ടകം\nShark,സ്രാവ്\nWhale,തിമിംഗലം\nDolphin,ഡോൾഫിൻ\nTiger,കടുവ',
        'Sheep,ചെമ്മരിയാട്\nFish,മത്സ്യം\nFrog,തവള\nCrab,ഞണ്ട്\nSnake,പാമ്പ്',
        'Bull,കാള\nTortoise,ആമ\nRat,എലി\nAnt,ഉറുമ്പ്\nBat,വവ്വാൽ',
        'Buffalo,പോത്ത്\nButterfly,ചിത്രശലഭം\nCheetah,ചീറ്റ\nBee,തേനീച്ച\nGoldfish,സ്വർണ്ണമത്സ്യം',
        'Spider,ചിലന്തി\nGiraffe,ജിറാഫ്\nKangaroo,കംഗാരു'
      ]
    },
    {
      id: 'match-birds',
      type: 'match',
      label: 'Match: പക്ഷികൾ',
      commonData: {
        title: 'ഇംഗ്ലീഷും തുല്യമായ മലയാളം പദവും പൊരുത്തപ്പെടുത്തുക'
      },
      data: [
        'Crow,കാക്ക\nDove,പ്രാവ്\nDuck,താറാവ്\nHen,കോഴി\nChick,കോഴിക്കുഞ്ഞ്',
        'Parrot,തത്ത\nPeacock,മയിൽ\nSparrow,കുരുവി\nCrane,കൊക്ക്\nEagle,പരുന്ത്',
        'Flamingo,രാജഹംസം\nKingfisher,നീലപൊൻമാൻ\nMyna,മൈന\nOstrich,ഒട്ടകപ്പക്ഷി\nOwl,മൂങ്ങ',
        'Rooster,പൂവന്കോഴി\nVulture,കഴുകൻ\nWoodpecker,മരംകൊത്തി\nKoel,കുയിൽ'
      ]
    },
    {
      id: 'jumbled-animals',
      type: 'sequence',
      label: 'Connect Letters: മൃഗങ്ങൾ',
      commonData: {
        type: 'clue',
        fontSize: '2rem',
        title:
          'അക്ഷരങ്ങൾ ബന്ധിപ്പിച്ച് തന്നിരിക്കുന്ന ഇംഗ്ലീഷ് പദത്തിനുള്ള വാക്ക് രൂപപ്പെടുത്തുക.',
        lang: 'ml'
      },
      data: [
        'Cat|പൂച്ച\nDog|നായ\nGoat|ആട്\nCow|പശു\nDonkey|കഴുത\nHorse|കുതിര\nPig|പന്നി\nElephant|ആന\nLion|സിംഹം\nMonkey|കുരങ്ങൻ',
        'Rhino|കാണ്ടാമൃഗം\nFox|കുറുക്കൻ\nCrocodile|മുതല\nZebra|സീബ്ര\nBear|കരടി\nCamel|ഒട്ടകം\nShark|സ്രാവ്\nWhale|തിമിംഗലം\nDolphin|ഡോൾഫിൻ\nTiger|കടുവ',
        'Sheep|ചെമ്മരിയാട്\nFish|മത്സ്യം\nFrog|തവള\nCrab|ഞണ്ട്\nSnake|പാമ്പ്\nBull|കാള\nTortoise|ആമ\nRat|എലി\nAnt|ഉറുമ്പ്\nBat|വവ്വാൽ',
        'Buffalo|പോത്ത്\nButterfly|ചിത്രശലഭം\nCheetah|ചീറ്റ\nBee|തേനീച്ച\nGoldfish|സ്വർണ്ണമത്സ്യം\nSpider|ചിലന്തി\nGiraffe|ജിറാഫ്\nKangaroo|കംഗാരു'
      ]
    },
    {
      id: 'jumbled-birds',
      type: 'sequence',
      label: 'Connect Letters: പക്ഷികൾ',
      commonData: {
        type: 'clue',
        fontSize: '2rem',
        title:
          'അക്ഷരങ്ങൾ ബന്ധിപ്പിച്ച് തന്നിരിക്കുന്ന ഇംഗ്ലീഷ് പദത്തിനുള്ള വാക്ക് രൂപപ്പെടുത്തുക.',
        lang: 'ml'
      },
      data: [
        'Crow|കാക്ക\nDove|പ്രാവ്\nDuck|താറാവ്\nHen|കോഴി\nChick|കോഴിക്കുഞ്ഞ്\nParrot|തത്ത\nPeacock|മയിൽ\nSparrow|കുരുവി\nCrane|കൊക്ക്\nEagle|പരുന്ത്',
        'Flamingo|രാജഹംസം\nKingfisher|നീലപൊൻമാൻ\nMyna|മൈന\nOstrich|ഒട്ടകപ്പക്ഷി\nOwl|മൂങ്ങ\nRooster|പൂവന്കോഴി\nVulture|കഴുകൻ\nWoodpecker|മരംകൊത്തി\nKoel|കുയിൽ'
      ]
    },
    {
      id: 'complete-animals',
      type: 'completeWord',
      label: 'Complete the Word: മൃഗങ്ങൾ',
      commonData: {
        fontSize: '2rem',
        title: 'തന്നിരിക്കുന്ന ഇംഗ്ലീഷ് പദത്തിന് മലയാളം വാക്ക് എഴുതുക.',
        lang: 'ml'
      },
      data: [
        'Cat|പൂച്ച\nDog|നായ\nGoat|ആട്\nCow|പശു\nDonkey|കഴുത\nHorse|കുതിര\nPig|പന്നി\nElephant|ആന\nLion|സിംഹം\nMonkey|കുരങ്ങൻ',
        'Rhino|കാണ്ടാമൃഗം\nFox|കുറുക്കൻ\nCrocodile|മുതല\nZebra|സീബ്ര\nBear|കരടി\nCamel|ഒട്ടകം\nShark|സ്രാവ്\nWhale|തിമിംഗലം\nDolphin|ഡോൾഫിൻ\nTiger|കടുവ',
        'Sheep|ചെമ്മരിയാട്\nFish|മത്സ്യം\nFrog|തവള\nCrab|ഞണ്ട്\nSnake|പാമ്പ്\nBull|കാള\nTortoise|ആമ\nRat|എലി\nAnt|ഉറുമ്പ്\nBat|വവ്വാൽ',
        'Buffalo|പോത്ത്\nButterfly|ചിത്രശലഭം\nCheetah|ചീറ്റ\nBee|തേനീച്ച\nGoldfish|സ്വർണ്ണമത്സ്യം\nSpider|ചിലന്തി\nGiraffe|ജിറാഫ്\nKangaroo|കംഗാരു'
      ]
    },
    {
      id: 'complete-birds',
      type: 'completeWord',
      label: 'Complete the Word: പക്ഷികൾ',
      commonData: {
        fontSize: '2rem',
        title: 'തന്നിരിക്കുന്ന ഇംഗ്ലീഷ് പദത്തിന് മലയാളം വാക്ക് എഴുതുക.',
        lang: 'ml'
      },
      data: [
        'Crow|കാക്ക\nDove|പ്രാവ്\nDuck|താറാവ്\nHen|കോഴി\nChick|കോഴിക്കുഞ്ഞ്\nParrot|തത്ത\nPeacock|മയിൽ\nSparrow|കുരുവി\nCrane|കൊക്ക്\nEagle|പരുന്ത്',
        'Flamingo|രാജഹംസം\nKingfisher|നീലപൊൻമാൻ\nMyna|മൈന\nOstrich|ഒട്ടകപ്പക്ഷി\nOwl|മൂങ്ങ\nRooster|പൂവന്കോഴി\nVulture|കഴുകൻ\nWoodpecker|മരംകൊത്തി\nKoel|കുയിൽ'
      ]
    }
  ]
};
