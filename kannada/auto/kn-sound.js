export default {
  label: '',
  id: 'kn-sound',
  lang: 'kn',
  list: [
    {
      type: 'slides',
      label: 'ಪ್ರಾಣಿಗಳು ',
      id: 'animals',
      commonData: { audio: 'kn/kn-animals.mp3' },
      data: [
        {
          text: 'cat|ಬೆಕ್ಕು\ndog|ನಾಯಿ\ngoat|ಮೇಕೆ\ncow|ಹಸು\ndonkey|ಕತ್ತೆ\nhorse|ಕುದುರೆ\npig|ಹಂದಿ\nelephant|ಆನೆ\nlion|ಸಿಂಹ\nmonkey|ಕೋತಿ',
          audioOffset: 0
        },
        {
          text: 'hippo|ನೀರಾನೆ\nrhino|ಗೇಂಡಾಮೃಗ\nfox|ನರಿ\ncrocodile|ಮೊಸಳೆ\nzebra|ಹೇಸರಗತ್ತೆ\nbear|ಕರಡಿ\ncamel|ಒಂಟೆ\nshark|ಶಾರ್ಕ್\nwhale|ತಿಮಿಂಗಿಲ\ndolphin|ಡಾಲ್ಫಿನ್',
          audioOffset: 20
        },
        {
          text: 'tiger|ಹುಲಿ\nsheep|ಕುರಿ\nfish|ಮೀನು\nfrog|ಕಪ್ಪೆ\ncrab|ಏಡಿ\nsnake|ಹಾವು\nbull|ಗೊಳಿ\ntortoise|ಆಮೆ\nrat|ಹೆಗ್ಗಣ\nant|ಇರುವೆ',
          audioOffset: 40
        },
        {
          text: 'bat|ಬಾವಲಿ\nbuffalo|ಎಮ್ಮೆ\nbutterfly|ಚಿಟ್ಟೆ\ncheetah|ಚಿರತೆ\nbee|ಜೇನು ನೊಣ\ngoldfish|ಗೋಲ್ಡಫಿಷ್\nspider|ಜೇಡ\npanda|ಪಾಂಡಾ\ngiraffe|ಜಿರಾಫೆ\nkangaroo|ಕಾಂಗರೂ',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'slides',
      label: 'ಪಕ್ಷಿಗಳು ',
      id: 'birds',
      commonData: { audio: 'kn/kn-birds.mp3' },
      data: [
        {
          text: 'crow|ಕಾಗೆ\ndove|ಪಾರಿವಾಳ\nduck|ಬಾತುಕೋಳಿ\nhen|ಕೋಳಿ\nchick|ಮರಿಯನ್ನು\nparrot|ಗಿಣಿ\npeacock|ನವಿಲು\npenguin|ಪೆಂಗ್ವಿನ್\nsparrow|ಗುಬ್ಬಚ್ಚಿ\ncrane|ಕೊಕ್ಕರೆ',
          audioOffset: 0
        },
        {
          text: 'eagle|ಹದ್ದು\nflamingo|ರಾಜಹಂಸ\nkingfisher|ಮಿಂಚುಳ್ಳಿ\nmyna|ಗೊರವಂಕ\nostrich|ಉಷ್ಟ್ರಪಕ್ಷಿ\nowl|ಗೂಬೆ\nrooster|ರೂಸ್ಟರ್\nvulture|ರಣಹದ್ದು\nwoodpecker|ಮರಕುಟಿಗ\nkoel|ಕೋಯಲ್',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: ಪ್ರಾಣಿಗಳು ',
      id: 'find-animals',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'kn/kn-animals.mp3'
      },
      data: [
        {
          words: 'cat,dog,goat,cow,donkey,horse,pig,elephant,lion,monkey',
          audioOffset: 0
        },
        {
          words:
            'hippo,rhino,fox,crocodile,zebra,bear,camel,shark,whale,dolphin',
          audioOffset: 20
        },
        {
          words: 'tiger,sheep,fish,frog,crab,snake,bull,tortoise,rat,ant',
          audioOffset: 40
        },
        {
          words:
            'bat,buffalo,butterfly,cheetah,bee,goldfish,spider,panda,giraffe,kangaroo',
          audioOffset: 60
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: ಪಕ್ಷಿಗಳು ',
      id: 'find-birds',
      commonData: {
        title: 'Listen to the sound and click on the image.',
        type: 'image',
        audio: 'kn/kn-birds.mp3'
      },
      data: [
        {
          words:
            'crow,dove,duck,hen,chick,parrot,peacock,penguin,sparrow,crane',
          audioOffset: 0
        },
        {
          words:
            'eagle,flamingo,kingfisher,myna,ostrich,owl,rooster,vulture,woodpecker,koel',
          audioOffset: 20
        }
      ]
    }
  ]
};
