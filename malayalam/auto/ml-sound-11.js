export default {
  label: 'ഉപകരണങ്ങളും സംഗീത ഉപകരണങ്ങളും',
  id: 'ml-sound-11',
  lang: 'ml',
  list: [
    {
      type: 'slides',
      label: 'ജോലിക്കുള്ള ഉപകരണങ്ങൾ',
      id: 'tools',
      commonData: { audio: 'ml/ml-tools.mp3' },
      data: [
        {
          text: 'divider|വിഭേദനി\nprotractor|കോണമാപി\nscrew|പിരിയാണി\nscrewdriver|സ്ക്രൂഡ്രൈവര്‍\nspanner|സ്പാനര്‍\naxe|കോടാലി\nbalance|തുലാസ്‌\nmicroscope|സൂക്ഷ്‌മദര്‍ശിനി\nneedle|സൂചി\nsyringe|സിറിഞ്ച്‌',
          audioOffset: 0
        },
        {
          text: 'plier|ചവണ\nplough|കലപ്പ\nsaw|അറക്കവാള്‍\nspade|തൂമ്പ\ntelescope|ദൂരദർശിനി\ntest-tube|പരീക്ഷണനാളി',
          audioOffset: 20
        },
        {
          text: 'thermometer|ഉഷ്‌ണമാപിനി\ntrowel|കരണ്ടി\nawl|തോലുളി\ncompass|വടക്കുനോക്കി യന്ത്രം\neasel|ചിത്രപീഠം',
          audioOffset: 32
        }
      ]
    },
    {
      type: 'slides',
      label: 'സംഗീതോപകരണങ്ങൾ',
      id: 'instuments',
      data: {
        audio: 'ml/ml-instuments.mp3',
        text: 'violin|വയലിന്‍\nflute|ഓടക്കുഴൽ\nguitar|ഗിത്താര്‍\npiano|പിയാനോ\nveenai|വീണ\ntabla|തബല',
        audioOffset: 0
      }
    },
    {
      type: 'rightOne',
      label: 'Select: ജോലിക്കുള്ള ഉപകരണങ്ങൾ',
      id: 'find-tools',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'ml/ml-tools.mp3'
      },
      data: [
        {
          words:
            'divider,protractor,screw,screwdriver,spanner,axe,balance,microscope,needle,syringe',
          audioOffset: 0
        },
        {
          words: 'plier,plough,saw,spade,telescope,test-tube,thermometer',
          audioOffset: 20
        },
        { words: 'trowel,awl,compass,easel', audioOffset: 34 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: സംഗീതോപകരണങ്ങൾ',
      id: 'find-instuments',
      data: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'ml/ml-instuments.mp3',
        words: 'violin,flute,guitar,piano,veenai,tabla',
        audioOffset: 0
      }
    }
  ]
};
