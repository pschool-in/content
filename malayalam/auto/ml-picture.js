export default {
  label: 'മൃഗങ്ങളും പക്ഷികളും',
  id: 'ml-picture',
  lang: 'ml',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-animals',
      label: 'Drag & Drop: മൃഗങ്ങൾ',
      commonData: { title: 'പേരുകൾ വലിച്ചെടുത്തു ചിത്രങ്ങളിൽ ഇടുക.' },
      data: [
        'cat|പൂച്ച\ndog|നായ\ngoat|ആട്\ncow|പശു\ndonkey|കഴുത\nhorse|കുതിര',
        'pig|പന്നി\nelephant|ആന\nlion|സിംഹം\nmonkey|കുരങ്ങൻ\nrhino|കാണ്ടാമൃഗം\nfox|കുറുക്കൻ',
        'crocodile|മുതല\nzebra|സീബ്ര\nbear|കരടി\ncamel|ഒട്ടകം\nshark|സ്രാവ്\nwhale|തിമിംഗലം',
        'dolphin|ഡോൾഫിൻ\ntiger|കടുവ\nsheep|ചെമ്മരിയാട്\nfish|മത്സ്യം\nfrog|തവള\ncrab|ഞണ്ട്',
        'snake|പാമ്പ്\nbull|കാള\ntortoise|ആമ\nrat|എലി\nant|ഉറുമ്പ്\nbat|വവ്വാൽ',
        'buffalo|പോത്ത്\nbutterfly|ചിത്രശലഭം\ncheetah|ചീറ്റ\nbee|തേനീച്ച\ngoldfish|സ്വർണ്ണമത്സ്യം',
        'spider|ചിലന്തി\ngiraffe|ജിറാഫ്\nkangaroo|കംഗാരു'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-birds',
      label: 'Drag & Drop: പക്ഷികൾ',
      commonData: { title: 'പേരുകൾ വലിച്ചെടുത്തു ചിത്രങ്ങളിൽ ഇടുക.' },
      data: [
        'crow|കാക്ക\ndove|പ്രാവ്\nduck|താറാവ്\nhen|കോഴി\nchick|കോഴിക്കുഞ്ഞ്\nparrot|തത്ത',
        'peacock|മയിൽ\nsparrow|കുരുവി\ncrane|കൊക്ക്\neagle|പരുന്ത്\nflamingo|രാജഹംസം\nkingfisher|നീലപൊൻമാൻ',
        'myna|മൈന\nostrich|ഒട്ടകപ്പക്ഷി\nowl|മൂങ്ങ\nrooster|പൂവന്കോഴി',
        'vulture|കഴുകൻ\nwoodpecker|മരംകൊത്തി\nkoel|കുയിൽ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: മൃഗങ്ങൾ',
      id: 'fill-animals',
      commonData: {
        images: 'stockImgs',
        lang: 'ml',
        title: 'വിട്ടുപോയ അക്ഷരങ്ങൾ കണ്ടെത്തി വാക്ക് പൂർത്തിയാക്കുക.'
      },
      data: [
        'cat|പൂച്ച|_ച്ച|പൂ,ഷ,ഋ,ല\ndog|നായ|_യ|നാ,ഋ,ഌ,ജ\ngoat|ആട്|_ട്|ആ,ഫ,ഥ,ജ\ncow|പശു|_ശു|പ,ഞ,ജ,ഋ\ndonkey|കഴുത|_ഴുത|ക,ജ,ഋ,ഥ\nhorse|കുതിര|_തിര|കു,ഞ,ഥ,ഷ\npig|പന്നി|_ന്നി|പ,ഷ,ഥ,ല\nelephant|ആന|_ന|ആ,ഌ,ന,ഋ\nlion|സിംഹം|_ഹം|സിം,ഞ,ന,ഷ\nmonkey|കുരങ്ങൻ|_രങ്ങൻ|കു,ഞ,ണ,ന',
        'rhino|കാണ്ടാമൃഗം|_ണ്ടാമൃഗം|കാ,ഥ,ജ,ഷ\nfox|കുറുക്കൻ|_റുക്കൻ|കു,ഞ,ഋ,ഌ\ncrocodile|മുതല|_തല|മു,ഋ,ഌ,ഥ\nzebra|സീബ്ര|_ബ്ര|സീ,ല,ഫ,ഷ\nbear|കരടി|_രടി|ക,ഋ,ന,ഌ\ncamel|ഒട്ടകം|_ട്ടകം|ഒ,ഥ,ഞ,ജ\nshark|സ്രാവ്|_വ്|സ്രാ,ല,ഥ,ഫ\nwhale|തിമിംഗലം|_മിംഗലം|തി,ഋ,ഞ,ഌ\ndolphin|ഡോൾഫിൻ|_ൾഫിൻ|ഡോ,ഫ,ന,ല\ntiger|കടുവ|_ടുവ|ക,ഋ,ഌ,ഷ',
        'sheep|ചെമ്മരിയാട്|_മ്മരിയാട്|ചെ,ന,ഫ,ഞ\nfish|മത്സ്യം|_ത്സ്യം|മ,ഋ,ഷ,ഌ\nfrog|തവള|_വള|ത,ഥ,ജ,ണ\ncrab|ഞണ്ട്|_ണ്ട്|ഞ,ഫ,ണ,ഋ\nsnake|പാമ്പ്|_മ്പ്|പാ,ഷ,ഥ,ഋ\nbull|കാള|_ള|കാ,ഥ,ഞ,ഋ\ntortoise|ആമ|_മ|ആ,ഌ,ഷ,ഞ\nrat|എലി|_ലി|എ,ഥ,ഞ,ജ\nant|ഉറുമ്പ്|_റുമ്പ്|ഉ,ഋ,ഌ,ന\nbat|വവ്വാൽ|_വ്വാൽ|വ,ഞ,ഫ,ന',
        'buffalo|പോത്ത്|_ത്ത്|പോ,ഫ,ഥ,ണ\nbutterfly|ചിത്രശലഭം|_ത്രശലഭം|ചി,ഋ,ഫ,ണ\ncheetah|ചീറ്റ|_റ്റ|ചീ,ഞ,ഋ,ഌ\nbee|തേനീച്ച|_നീച്ച|തേ,ഋ,ഌ,ഞ\ngoldfish|സ്വർണ്ണമത്സ്യം|_വർണ്ണമത്സ്യം|സ്,ഌ,ഥ,ന\nspider|ചിലന്തി|_ലന്തി|ചി,ഥ,ഞ,ഌ\ngiraffe|ജിറാഫ്|_റാഫ്|ജി,ഥ,ഞ,ഋ\nkangaroo|കംഗാരു|_ഗാരു|കം,ഋ,ഫ,ല'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: പക്ഷികൾ',
      id: 'fill-birds',
      commonData: {
        images: 'stockImgs',
        lang: 'ml',
        title: 'വിട്ടുപോയ അക്ഷരങ്ങൾ കണ്ടെത്തി വാക്ക് പൂർത്തിയാക്കുക.'
      },
      data: [
        'crow|കാക്ക|_ക്ക|കാ,ജ,ഥ,ഞ\ndove|പ്രാവ്|_വ്|പ്രാ,ഌ,ഞ,ഋ\nduck|താറാവ്|_റാവ്|താ,ഥ,ഫ,ഋ\nhen|കോഴി|_ഴി|കോ,ന,ഌ,ഷ\nchick|കോഴിക്കുഞ്ഞ്|_ഴിക്കുഞ്ഞ്|കോ,ഋ,ല,ണ\nparrot|തത്ത|_ത്ത|ത,ഞ,ഥ,ഫ\npeacock|മയിൽ|_യിൽ|മ,ഫ,ല,ഞ\nsparrow|കുരുവി|_രുവി|കു,ഌ,ഥ,ജ\ncrane|കൊക്ക്|_ക്ക്|കൊ,ല,ന,ഞ\neagle|പരുന്ത്|_രുന്ത്|പ,ഥ,ന,ഫ',
        'flamingo|രാജഹംസം|_ജഹംസം|രാ,ഥ,ല,ജ\nkingfisher|നീലപൊൻമാൻ|_ലപൊൻമാൻ|നീ,ഷ,ഫ,ഋ\nmyna|മൈന|_ന|മൈ,ഫ,ണ,ഞ\nostrich|ഒട്ടകപ്പക്ഷി|_ട്ടകപ്പക്ഷി|ഒ,ല,ഫ,ഋ\nowl|മൂങ്ങ|_ങ്ങ|മൂ,ഋ,ജ,ഌ\nrooster|പൂവന്കോഴി|_വന്കോഴി|പൂ,ഋ,ഞ,ഌ\nvulture|കഴുകൻ|_ഴുകൻ|ക,ഋ,ഌ,ഷ\nwoodpecker|മരംകൊത്തി|_രംകൊത്തി|മ,ഋ,ഫ,ഷ\nkoel|കുയിൽ|_യിൽ|കു,ഋ,ണ,ഌ'
      ]
    },
    {
      type: 'match',
      label: 'Match: മൃഗങ്ങൾ',
      id: 'match-animals',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'ചിത്രത്തെ അതിന്റ്റെ ആദ്യ അക്ഷരവുമായി ബന്ധിപ്പിക്കുക.'
      },
      data: [
        'കു,horse\nആ,tortoise\nസ്,goldfish\nപാ,snake\nചെ,sheep',
        'കു,monkey\nപ,cow\nസീ,zebra\nനാ,dog\nചീ,cheetah',
        'കു,fox\nപ,pig\nസിം,lion\nതേ,bee\nകം,kangaroo',
        'ക,donkey\nചി,butterfly\nവ,bat\nതി,whale\nഒ,camel',
        'ക,bear\nചി,spider\nമു,crocodile\nത,frog\nഎ,rat',
        'ക,tiger\nകാ,rhino\nമ,fish\nഡോ,dolphin\nഉ,ant',
        'ആ,goat\nകാ,bull\nപോ,buffalo\nഞ,crab',
        'ആ,elephant\nസ്രാ,shark\nപൂ,cat\nജി,giraffe'
      ]
    },
    {
      type: 'match',
      label: 'Match: പക്ഷികൾ',
      id: 'match-birds',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'ചിത്രത്തെ അതിന്റ്റെ ആദ്യ അക്ഷരവുമായി ബന്ധിപ്പിക്കുക.'
      },
      data: [
        'മ,peacock\nകു,sparrow\nമൂ,owl\nനീ,kingfisher\nകാ,crow',
        'മ,woodpecker\nകു,koel\nപ്രാ,dove\nതാ,duck\nക,vulture',
        'കോ,hen\nരാ,flamingo\nപൂ,rooster\nത,parrot\nഒ,ostrich',
        'കോ,chick\nമൈ,myna\nപ,eagle\nകൊ,crane'
      ]
    }
  ]
};
