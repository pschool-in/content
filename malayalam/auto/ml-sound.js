export default {
  label: 'മൃഗങ്ങളും പക്ഷികളും',
  id: 'ml-sound',
  lang: 'ml',
  list: [
    {
      type: 'slides',
      label: 'മൃഗങ്ങൾ',
      id: 'animals',
      commonData: {
        title: 'ശബ്ദം ശ്രദ്ധിക്കുക, ചിത്രവും പേരും കാണുക.',
        audio: 'ml/ml-animals.mp3'
      },
      data: [
        {
          text: 'cat|പൂച്ച\ndog|നായ\ngoat|ആട്\ncow|പശു\ndonkey|കഴുത\nhorse|കുതിര\npig|പന്നി\nelephant|ആന\nlion|സിംഹം\nmonkey|കുരങ്ങൻ',
          audioOffset: 0
        },
        {
          text: 'rhino|കാണ്ടാമൃഗം\nfox|കുറുക്കൻ\ncrocodile|മുതല\nzebra|സീബ്ര\nbear|കരടി\ncamel|ഒട്ടകം\nshark|സ്രാവ്\nwhale|തിമിംഗലം\ndolphin|ഡോൾഫിൻ\ntiger|കടുവ',
          audioOffset: 20
        },
        {
          text: 'sheep|ചെമ്മരിയാട്\nfish|മത്സ്യം\nfrog|തവള\ncrab|ഞണ്ട്\nsnake|പാമ്പ്\nbull|കാള\ntortoise|ആമ\nrat|എലി\nant|ഉറുമ്പ്\nbat|വവ്വാൽ',
          audioOffset: 40
        },
        {
          text: 'buffalo|പോത്ത്\nbutterfly|ചിത്രശലഭം\ncheetah|ചീറ്റ\nbee|തേനീച്ച\ngoldfish|സ്വർണ്ണമത്സ്യം\nspider|ചിലന്തി\ngiraffe|ജിറാഫ്\nkangaroo|കംഗാരു',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'slides',
      label: 'പക്ഷികൾ',
      id: 'birds',
      commonData: {
        title: 'ശബ്ദം ശ്രദ്ധിക്കുക, ചിത്രവും പേരും കാണുക.',
        audio: 'ml/ml-birds.mp3'
      },
      data: [
        {
          text: 'crow|കാക്ക\ndove|പ്രാവ്\nduck|താറാവ്\nhen|കോഴി\nchick|കോഴിക്കുഞ്ഞ്\nparrot|തത്ത\npeacock|മയിൽ\nsparrow|കുരുവി\ncrane|കൊക്ക്\neagle|പരുന്ത്',
          audioOffset: 0
        },
        {
          text: 'flamingo|രാജഹംസം\nkingfisher|നീലപൊൻമാൻ\nmyna|മൈന\nostrich|ഒട്ടകപ്പക്ഷി\nowl|മൂങ്ങ\nrooster|പൂവന്കോഴി\nvulture|കഴുകൻ\nwoodpecker|മരംകൊത്തി\nkoel|കുയിൽ',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: മൃഗങ്ങൾ',
      id: 'find-animals',
      commonData: {
        type: 'image',
        title: 'ശബ്ദം കേട്ട് ചിത്രത്തിൽ ക്ലിക്ക് ചെയ്യുക.',
        audio: 'ml/ml-animals.mp3'
      },
      data: [
        {
          words: 'cat,dog,goat,cow,donkey,horse,pig,elephant,lion,monkey',
          audioOffset: 0
        },
        {
          words:
            'rhino,fox,crocodile,zebra,bear,camel,shark,whale,dolphin,tiger',
          audioOffset: 20
        },
        {
          words: 'sheep,fish,frog,crab,snake,bull,tortoise,rat,ant,bat',
          audioOffset: 40
        },
        {
          words:
            'buffalo,butterfly,cheetah,bee,goldfish,spider,giraffe,kangaroo',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: പക്ഷികൾ',
      id: 'find-birds',
      commonData: {
        type: 'image',
        title: 'ശബ്ദം കേട്ട് ചിത്രത്തിൽ ക്ലിക്ക് ചെയ്യുക.',
        audio: 'ml/ml-birds.mp3'
      },
      data: [
        {
          words: 'crow,dove,duck,hen,chick,parrot,peacock,sparrow,crane,eagle',
          audioOffset: 0
        },
        {
          words:
            'flamingo,kingfisher,myna,ostrich,owl,rooster,vulture,woodpecker,koel',
          audioOffset: 20
        }
      ]
    }
  ]
};
