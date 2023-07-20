export default {
  label: 'Animals and Birds',
  id: 'ml-picture',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-animals',
      label: 'Drag & Drop: Animals',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'cat|പൂച്ച\ndog|നായ\ngoat|ആട്\ncow|പശു\ndonkey|കഴുത\nhorse|കുതിര',
        'pig|പന്നി\nelephant|ആന\nlion|സിംഹം\nmonkey|കുരങ്ങൻ\nrhino|കാണ്ടാമൃഗം\nfox|കുറുക്കൻ',
        'crocodile|മുതല\nzebra|സീബ്ര\nbear|കരടി\ncamel|ഒട്ടകം\nshark|സ്രാവ്\nwhale|തിമിംഗലം',
        'dolphin|ഡോൾഫിൻ\ntiger|കടുവ\nsheep|ആട്\nfish|മത്സ്യം\nfrog|തവള\ncrab|ഞണ്ട്',
        'snake|പാമ്പ്\nbull|കാള\ntortoise|ആമ\nrat|എലി\nant|ഉറുമ്പ്\nbat|വവ്വാൽ',
        'buffalo|പോത്ത്\nbutterfly|ചിത്രശലഭം\ncheetah|ചീറ്റ\nbee|തേനീച്ച\ngoldfish|സ്വർണ്ണമത്സ്യം',
        'spider|ചിലന്തി\ngiraffe|ജിറാഫ്\nkangaroo|കംഗാരു'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-birds',
      label: 'Drag & Drop: Birds',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'crow|കാക്ക\ndove|പ്രാവ്\nduck|താറാവ്\nhen|കോഴി\nchick|കോഴിക്കുഞ്ഞ്\nparrot|തത്ത',
        'peacock|മയിൽ\npenguin|പെന്ഗിന് പക്ഷി\nsparrow|കുരുവി\ncrane|കൊക്ക്\neagle|പരുന്ത്\nflamingo|രാജഹംസം',
        'kingfisher|നീലപൊൻമാൻ\nmyna|മൈന\nostrich|ഒട്ടകപ്പക്ഷി\nowl|മൂങ്ങ\nrooster|പൂവന്കോഴി',
        'vulture|കഴുകൻ\nwoodpecker|മരംകുത്തി\nkoel|കുയിൽ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Animals',
      id: 'fill-animals',
      commonData: {
        images: 'stockImgs',
        title: 'Find the missing letters and complete the word.',
        lang: 'ml'
      },
      data: [
        `cat|പൂച്ച|_ച്ച|പൂ,ല,ന,ജ\ndog|നായ|_യ|നാ,ഞ,ഫ,ജ\ngoat|ആട്|_ട്|ആ,ഷ,ഋ,ജ\ncow|പശു|_ശു|പ,ന,ഫ,ഌ\ndonkey|കഴുത|_ഴുത|ക,ല,ണ,ജ\nhorse|കുതിര|_തിര|കു,ണ,ഥ,ഫ\npig|പന്നി|_ന്നി|പ,ഋ,ജ,ഌ\nelephant|ആന|_ന|ആ,ഷ,ഞ,ജ\nlion|സിംഹം|_ഹം|സിം,ഥ,ഞ,ണ\nmonkey|കുരങ്ങൻ|_രങ്ങൻ|കു,ന,ഞ,ഫ`,
        'rhino|കാണ്ടാമൃഗം|_ണ്ടാമൃഗം|കാ,ഷ,ഌ,ഞ\nfox|കുറുക്കൻ|_റുക്കൻ|കു,ന,ണ,ല\ncrocodile|മുതല|_തല|മു,ഌ,ന,ഞ\nzebra|സീബ്ര|_ബ്ര|സീ,ഫ,ഥ,ഷ\nbear|കരടി|_രടി|ക,ഷ,ഌ,ഋ\ncamel|ഒട്ടകം|_ട്ടകം|ഒ,ഫ,ല,ജ\nshark|സ്രാവ്|_രാവ്|സ്,ഋ,ഥ,ഌ\nwhale|തിമിംഗലം|_മിംഗലം|തി,ഥ,ഞ,ഷ\ndolphin|ഡോൾഫിൻ|_ൾഫിൻ|ഡോ,ഫ,ന,ണ\ntiger|കടുവ|_ടുവ|ക,ല,ണ,ജ',
        'sheep|ആട്|_ട്|ആ,ഌ,ല,ണ\nfish|മത്സ്യം|_ത്സ്യം|മ,ഋ,ഌ,ഥ\nfrog|തവള|_വള|ത,ജ,ണ,ഞ\ncrab|ഞണ്ട്|_ണ്ട്|ഞ,ഥ,ണ,ഷ\nsnake|പാമ്പ്|_മ്പ്|പാ,ഥ,ഷ,ല\nbull|കാള|_ള|കാ,ന,ഋ,ഫ\ntortoise|ആമ|_മ|ആ,ഫ,ണ,ന\nrat|എലി|_ലി|എ,ജ,ഌ,ല\nant|ഉറുമ്പ്|_റുമ്പ്|ഉ,ഋ,ഷ,ണ\nbat|വവ്വാൽ|_വ്വാൽ|വ,ജ,ഫ,ഞ',
        'buffalo|പോത്ത്|_ത്ത്|പോ,ല,ഥ,ജ\nbutterfly|ചിത്രശലഭം|_ത്രശലഭം|ചി,ഋ,ഫ,ജ\ncheetah|ചീറ്റ|_റ്റ|ചീ,ഷ,ല,ഫ\nbee|തേനീച്ച|_നീച്ച|തേ,ന,ഌ,ല\ngoldfish|സ്വർണ്ണമത്സ്യം|_വർണ്ണമത്സ്യം|സ്,ഫ,ഞ,ന\nspider|ചിലന്തി|_ലന്തി|ചി,ണ,ഋ,ജ\ngiraffe|ജിറാഫ്|_റാഫ്|ജി,ല,ഫ,ന\nkangaroo|കംഗാരു|_ഗാരു|കം,ഞ,ജ,ഥ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Birds',
      id: 'fill-birds',
      commonData: {
        images: 'stockImgs',
        title: 'Find the missing letters and complete the word.',
        lang: 'ml'
      },
      data: [
        'crow|കാക്ക|_ക്ക|കാ,ഋ,ണ,ഥ\ndove|പ്രാവ്|_രാവ്|പ്,ണ,ല,ഷ\nduck|താറാവ്|_റാവ്|താ,ഌ,ന,ല\nhen|കോഴി|_ഴി|കോ,ഋ,ഌ,ന\nchick|കോഴിക്കുഞ്ഞ്|_ഴിക്കുഞ്ഞ്|കോ,ല,ഫ,ഷ\nparrot|തത്ത|_ത്ത|ത,ഋ,ഌ,ഷ\npeacock|മയിൽ|_യിൽ|മ,ന,ജ,ഋ\npenguin|പെന്ഗിന് പക്ഷി|_ന്ഗിന് പക്ഷി|പെ,ഫ,ന,ഞ\nsparrow|കുരുവി|_രുവി|കു,ഥ,ഷ,ണ\ncrane|കൊക്ക്|_ക്ക്|കൊ,ന,ഫ,ഥ',
        'eagle|പരുന്ത്|_രുന്ത്|പ,ഥ,ഷ,ഌ\nflamingo|രാജഹംസം|_ജഹംസം|രാ,ഞ,ഋ,ഌ\nkingfisher|നീലപൊൻമാൻ|_ലപൊൻമാൻ|നീ,ഫ,ന,ഷ\nmyna|മൈന|_ന|മൈ,ഞ,ന,ണ\nostrich|ഒട്ടകപ്പക്ഷി|_ട്ടകപ്പക്ഷി|ഒ,ന,ഌ,ഫ\nowl|മൂങ്ങ|_ങ്ങ|മൂ,ഋ,ഥ,ണ\nrooster|പൂവന്കോഴി|_വന്കോഴി|പൂ,ഌ,ണ,ഫ\nvulture|കഴുകൻ|_ഴുകൻ|ക,ഋ,ഌ,ജ\nwoodpecker|മരംകുത്തി|_രംകുത്തി|മ,ല,ഷ,ഫ\nkoel|കുയിൽ|_യിൽ|കു,ഞ,ണ,ഋ'
      ]
    },
    {
      type: 'match',
      label: 'Match: Animals',
      id: 'match-animals',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'ആ,goat\nക,bear\nസ്,goldfish\nതി,whale\nവ,bat',
        'ആ,elephant\nക,tiger\nചി,spider\nഡോ,dolphin\nപോ,buffalo',
        'ആ,sheep\nപ,cow\nപൂ,cat\nമ,fish\nചീ,cheetah',
        'ആ,tortoise\nപ,pig\nനാ,dog\nത,frog\nതേ,bee',
        'ക,donkey\nകാ,rhino\nസിം,lion\nഞ,crab\nജി,giraffe',
        'കു,horse\nസ്,shark\nമു,crocodile\nപാ,snake\nകം,kangaroo',
        'കു,monkey\nകാ,bull\nസീ,zebra\nഎ,rat',
        'കു,fox\nചി,butterfly\nഒ,camel\nഉ,ant'
      ]
    },
    {
      type: 'match',
      label: 'Match: Birds',
      id: 'match-birds',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'കോ,hen\nമ,woodpecker\nതാ,duck\nപ,eagle\nഒ,ostrich',
        'കോ,chick\nകു,koel\nത,parrot\nരാ,flamingo\nമൂ,owl',
        'മ,peacock\nകാ,crow\nപെ,penguin\nനീ,kingfisher\nപൂ,rooster',
        'കു,sparrow\nപ്,dove\nകൊ,crane\nമൈ,myna\nക,vulture'
      ]
    }
  ]
};
