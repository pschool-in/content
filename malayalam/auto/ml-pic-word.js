export default {
  label: 'മൃഗങ്ങളും പക്ഷികളും',
  id: 'ml-pic-word',
  lang: 'ml',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Word: മൃഗങ്ങൾ',
      id: 'pick-animals',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'ശബ്ദം കേട്ട് ശരിയായ വാക്ക് തിരഞ്ഞെടുക്കുക.',
        audio: 'ml/ml-animals.mp3'
      },
      data: [
        {
          words: 'പൂച്ച,നായ,ആട്,പശു,കഴുത,കുതിര,പന്നി,ആന,സിംഹം,കുരങ്ങൻ',
          audioOffset: 0
        },
        {
          words:
            'കാണ്ടാമൃഗം,കുറുക്കൻ,മുതല,സീബ്ര,കരടി,ഒട്ടകം,സ്രാവ്,തിമിംഗലം,ഡോൾഫിൻ,കടുവ',
          audioOffset: 20
        },
        {
          words:
            'ചെമ്മരിയാട്,മത്സ്യം,തവള,ഞണ്ട്,പാമ്പ്,കാള,ആമ,എലി,ഉറുമ്പ്,വവ്വാൽ',
          audioOffset: 40
        },
        {
          words:
            'പോത്ത്,ചിത്രശലഭം,ചീറ്റ,തേനീച്ച,സ്വർണ്ണമത്സ്യം,ചിലന്തി,ജിറാഫ്,കംഗാരു',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Word: പക്ഷികൾ',
      id: 'pick-birds',
      commonData: {
        type: 'words',
        fontSize: '1.5rem',
        title: 'ശബ്ദം കേട്ട് ശരിയായ വാക്ക് തിരഞ്ഞെടുക്കുക.',
        audio: 'ml/ml-birds.mp3'
      },
      data: [
        {
          words:
            'കാക്ക,പ്രാവ്,താറാവ്,കോഴി,കോഴിക്കുഞ്ഞ്,തത്ത,മയിൽ,കുരുവി,കൊക്ക്,പരുന്ത്',
          audioOffset: 0
        },
        {
          words:
            'രാജഹംസം,നീലപൊൻമാൻ,മൈന,ഒട്ടകപ്പക്ഷി,മൂങ്ങ,പൂവന്കോഴി,കഴുകൻ,മരംകൊത്തി,കുയിൽ',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: മൃഗങ്ങൾ',
      id: 'write-animals',
      commonDate: {},
      commonData: {
        title: 'ശബ്ദം ശദ്ധിച്ച് , ശരിയായ വാക്ക് എഴുതുക.',
        lang: 'ml',
        audio: 'ml/ml-animals.mp3'
      },
      data: [
        {
          words: 'പൂച്ച,നായ,ആട്,പശു,കഴുത,കുതിര,പന്നി,ആന,സിംഹം,കുരങ്ങൻ',
          audioOffset: 0
        },
        {
          words:
            'കാണ്ടാമൃഗം,കുറുക്കൻ,മുതല,സീബ്ര,കരടി,ഒട്ടകം,സ്രാവ്,തിമിംഗലം,ഡോൾഫിൻ,കടുവ',
          audioOffset: 20
        },
        {
          words:
            'ചെമ്മരിയാട്,മത്സ്യം,തവള,ഞണ്ട്,പാമ്പ്,കാള,ആമ,എലി,ഉറുമ്പ്,വവ്വാൽ',
          audioOffset: 40
        },
        {
          words:
            'പോത്ത്,ചിത്രശലഭം,ചീറ്റ,തേനീച്ച,സ്വർണ്ണമത്സ്യം,ചിലന്തി,ജിറാഫ്,കംഗാരു',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: പക്ഷികൾ',
      id: 'write-birds',
      commonDate: {},
      commonData: {
        title: 'ശബ്ദം ശദ്ധിച്ച് , ശരിയായ വാക്ക് എഴുതുക.',
        lang: 'ml',
        audio: 'ml/ml-birds.mp3'
      },
      data: [
        {
          words:
            'കാക്ക,പ്രാവ്,താറാവ്,കോഴി,കോഴിക്കുഞ്ഞ്,തത്ത,മയിൽ,കുരുവി,കൊക്ക്,പരുന്ത്',
          audioOffset: 0
        },
        {
          words:
            'രാജഹംസം,നീലപൊൻമാൻ,മൈന,ഒട്ടകപ്പക്ഷി,മൂങ്ങ,പൂവന്കോഴി,കഴുകൻ,മരംകൊത്തി,കുയിൽ',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: മൃഗങ്ങൾ',
      id: 'fill-animals',
      commonData: { images: 'stockImgs', title: 'വാക്ക് എഴുതുക', lang: 'ml' },
      data: [
        'cat|പൂച്ച\ndog|നായ\ngoat|ആട്\ncow|പശു\ndonkey|കഴുത\nhorse|കുതിര\npig|പന്നി\nelephant|ആന\nlion|സിംഹം\nmonkey|കുരങ്ങൻ',
        'rhino|കാണ്ടാമൃഗം\nfox|കുറുക്കൻ\ncrocodile|മുതല\nzebra|സീബ്ര\nbear|കരടി\ncamel|ഒട്ടകം\nshark|സ്രാവ്\nwhale|തിമിംഗലം\ndolphin|ഡോൾഫിൻ\ntiger|കടുവ',
        'sheep|ചെമ്മരിയാട്\nfish|മത്സ്യം\nfrog|തവള\ncrab|ഞണ്ട്\nsnake|പാമ്പ്\nbull|കാള\ntortoise|ആമ\nrat|എലി\nant|ഉറുമ്പ്\nbat|വവ്വാൽ',
        'buffalo|പോത്ത്\nbutterfly|ചിത്രശലഭം\ncheetah|ചീറ്റ\nbee|തേനീച്ച\ngoldfish|സ്വർണ്ണമത്സ്യം\nspider|ചിലന്തി\ngiraffe|ജിറാഫ്\nkangaroo|കംഗാരു'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: പക്ഷികൾ',
      id: 'fill-birds',
      commonData: { images: 'stockImgs', title: 'വാക്ക് എഴുതുക', lang: 'ml' },
      data: [
        'crow|കാക്ക\ndove|പ്രാവ്\nduck|താറാവ്\nhen|കോഴി\nchick|കോഴിക്കുഞ്ഞ്\nparrot|തത്ത\npeacock|മയിൽ\nsparrow|കുരുവി\ncrane|കൊക്ക്\neagle|പരുന്ത്',
        'flamingo|രാജഹംസം\nkingfisher|നീലപൊൻമാൻ\nmyna|മൈന\nostrich|ഒട്ടകപ്പക്ഷി\nowl|മൂങ്ങ\nrooster|പൂവന്കോഴി\nvulture|കഴുകൻ\nwoodpecker|മരംകൊത്തി\nkoel|കുയിൽ'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: മൃഗങ്ങൾ',
      id: 'connect-animals',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'അക്ഷരങ്ങൾ ബന്ധിപ്പിച്ച് വാക്ക് രൂപപ്പെടുത്തുക.',
        lang: 'ml'
      },
      data: [
        'cat,പൂച്ച\ndog,നായ\ngoat,ആട്\ncow,പശു\ndonkey,കഴുത\nhorse,കുതിര\npig,പന്നി\nelephant,ആന\nlion,സിംഹം\nmonkey,കുരങ്ങൻ',
        'rhino,കാണ്ടാമൃഗം\nfox,കുറുക്കൻ\ncrocodile,മുതല\nzebra,സീബ്ര\nbear,കരടി\ncamel,ഒട്ടകം\nshark,സ്രാവ്\nwhale,തിമിംഗലം\ndolphin,ഡോൾഫിൻ\ntiger,കടുവ',
        'sheep,ചെമ്മരിയാട്\nfish,മത്സ്യം\nfrog,തവള\ncrab,ഞണ്ട്\nsnake,പാമ്പ്\nbull,കാള\ntortoise,ആമ\nrat,എലി\nant,ഉറുമ്പ്\nbat,വവ്വാൽ',
        'buffalo,പോത്ത്\nbutterfly,ചിത്രശലഭം\ncheetah,ചീറ്റ\nbee,തേനീച്ച\ngoldfish,സ്വർണ്ണമത്സ്യം\nspider,ചിലന്തി\ngiraffe,ജിറാഫ്\nkangaroo,കംഗാരു'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: പക്ഷികൾ',
      id: 'connect-birds',
      commonData: {
        type: 'image',
        fontSize: '1rem',
        title: 'അക്ഷരങ്ങൾ ബന്ധിപ്പിച്ച് വാക്ക് രൂപപ്പെടുത്തുക.',
        lang: 'ml'
      },
      data: [
        'crow,കാക്ക\ndove,പ്രാവ്\nduck,താറാവ്\nhen,കോഴി\nchick,കോഴിക്കുഞ്ഞ്\nparrot,തത്ത\npeacock,മയിൽ\nsparrow,കുരുവി\ncrane,കൊക്ക്\neagle,പരുന്ത്',
        'flamingo,രാജഹംസം\nkingfisher,നീലപൊൻമാൻ\nmyna,മൈന\nostrich,ഒട്ടകപ്പക്ഷി\nowl,മൂങ്ങ\nrooster,പൂവന്കോഴി\nvulture,കഴുകൻ\nwoodpecker,മരംകൊത്തി\nkoel,കുയിൽ'
      ]
    }
  ]
};
