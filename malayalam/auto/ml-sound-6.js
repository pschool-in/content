export default {
  label: 'കൂടുതൽ മൃഗങ്ങളും പക്ഷികളും',
  id: 'ml-sound-6',
  list: [
    {
      type: 'slides',
      label: 'കൂടുതൽ മൃഗങ്ങൾ',
      id: 'animals-2',
      commonData: { audio: 'ml/ml-animals-2.mp3' },
      data: [
        {
          text: 'mongoose|കീരി\nmosquito|കൊതുക്\noctopus|നീരാളി\nwolf|ചെന്നായ\nlizard|പല്ലി\ntermite|ചിതൽ\ncockroach|പാറ്റ\nrabbit|മുയൽ\nleopard|പുള്ളിപ്പുലി\ndragonfly|തുമ്പി',
          audioOffset: 0
        },
        {
          text: 'fly|ഈച്ച\nsquirrel|അണ്ണാൻ\ndinosaur|ദിനോസർ\nalligator|ചീങ്കണ്ണി\nboar|കാട്ടുപന്നി\ncricket|ചീവീട്‌\nhyena|കഴുതപ്പുലി\npolarbear|ധ്രുവക്കരടി\nantelope|മാൻ\nbug|മൂട്ട',
          audioOffset: 20
        },
        {
          text: 'jackal|കുറുനരി\nprawn|കൊഞ്ച്\nbaboon|വാലില്ലാക്കുരങ്ങ്‌\npython|പെരുമ്പാമ്പ്\nbison|കാട്ടുപോത്ത്\nchameleon|ഓന്ത്\nporcupine|മുള്ളൻപന്നി',
          audioOffset: 40
        },
        {
          text: 'seahorse|കടൽക്കുതിര\nmole|പെരുച്ചാഴി\ncaterpillar|ചിതശലഭപ്പുഴു\nearthworm|മണ്ണിര\nstarfish|നക്ഷത്രമത്സ്യം',
          audioOffset: 54
        }
      ]
    },
    {
      type: 'slides',
      label: 'കൂടുതൽ പക്ഷികൾ',
      id: 'birds-2',
      data: {
        0: {
          text: 'hornbill|വേഴാമ്പൽ\npheasant|കൊറ്റി\nswan|ഹംസം\nspotted-dove|പുള്ളിപ്രാവ്\npelican|ഞാറപ്പക്ഷി\nrobin|വണ്ണാത്തിക്കിളി\nswallow|നാരാണപ്പക്ഷി\nseagull|കടൽകാക്ക\ngoose|വാത്ത്\nturkey|തുര്‍ക്കിക്കോഴി',
          audioOffset: 0
        },
        text: 'hornbill|വേഴാമ്പൽ\npheasant|കൊറ്റി\nswan|ഹംസം\nspotted-dove|പുള്ളിപ്രാവ്\npelican|ഞാറപ്പക്ഷി\nrobin|വണ്ണാത്തിക്കിളി\nswallow|നാരാണപ്പക്ഷി\nseagull|കടൽകാക്ക\ngoose|വാത്ത്\nturkey|തുര്‍ക്കിക്കോഴി',
        audioOffset: 0
      }
    },
    {
      type: 'rightOne',
      label: 'Select: കൂടുതൽ മൃഗങ്ങൾ',
      id: 'find-animals-2',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'ml/ml-animals-2.mp3'
      },
      data: [
        {
          words:
            'mongoose,mosquito,octopus,wolf,lizard,termite,cockroach,rabbit,leopard,dragonfly',
          audioOffset: 0
        },
        {
          words:
            'fly,squirrel,dinosaur,alligator,boar,cricket,hyena,polarbear,antelope,bug',
          audioOffset: 20
        },
        {
          words:
            'jackal,prawn,baboon,python,bison,chameleon,porcupine,seahorse',
          audioOffset: 40
        },
        { words: 'mole,caterpillar,earthworm,starfish', audioOffset: 56 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: കൂടുതൽ പക്ഷികൾ',
      id: 'find-birds-2',
      data: {
        0: {
          words:
            'hornbill,pheasant,swan,spotted-dove,pelican,robin,swallow,seagull,goose,turkey',
          audioOffset: 0
        },
        words:
          'hornbill,pheasant,swan,spotted-dove,pelican,robin,swallow,seagull,goose,turkey',
        audioOffset: 0
      }
    }
  ]
};
