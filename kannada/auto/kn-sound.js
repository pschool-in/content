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
          text: 'hippo|ನೀರಾನೆ\nrhino|ಗೇಂಡಾಮೃಗ\nfox|ನರಿ\ncrocodile|ಮೊಸಳೆ\nzebra|ಹೇಸರಗತ್ತೆ\nbear|ಕರಡಿ\ncamel|ಒಂಟೆ\nwhale|ತಿಮಿಂಗಿಲ\ntiger|ಹುಲಿ\nsheep|ಕುರಿ',
          audioOffset: 20
        },
        {
          text: 'fish|ಮೀನು\nfrog|ಕಪ್ಪೆ\ncrab|ಏಡಿ\nsnake|ಹಾವು\nbull|ಗೊಳಿ\ntortoise|ಆಮೆ\nrat|ಹೆಗ್ಗಣ\nant|ಇರುವೆ\nbat|ಬಾವಲಿ\nbuffalo|ಎಮ್ಮೆ',
          audioOffset: 40
        },
        {
          text: 'butterfly|ಚಿಟ್ಟೆ\ncheetah|ಚಿರತೆ\nbee|ಜೇನುನೊಣ\ngiraffe|ಜಿರಾಫೆ\nkangaroo|ಕಾಂಗರೂ',
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
          text: 'crow|ಕಾಗೆ\ndove|ಪಾರಿವಾಳ\nduck|ಬಾತುಕೋಳಿ\nhen|ಕೋಳಿ\nchick|ಮರಿಯನ್ನು\nparrot|ಗಿಣಿ\npeacock|ನವಿಲು\nsparrow|ಗುಬ್ಬಚ್ಚಿ\ncrane|ಕೊಕ್ಕರೆ\neagle|ಹದ್ದು',
          audioOffset: 0
        },
        {
          text: 'flamingo|ರಾಜಹಂಸ\nkingfisher|ಮಿಂಚುಳ್ಳಿ\nmyna|ಗೊರವಂಕ\nostrich|ಉಷ್ಟ್ರಪಕ್ಷಿ\nowl|ಗೂಬೆ\nrooster|ಹುಂಜ\nvulture|ರಣಹದ್ದು\nwoodpecker|ಮರಕುಟಿಗ\nkoel|ಕೋಯಲ್',
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
          words: 'hippo,rhino,fox,crocodile,zebra,bear,camel,whale,tiger,sheep',
          audioOffset: 20
        },
        {
          words: 'fish,frog,crab,snake,bull,tortoise,rat,ant,bat,buffalo',
          audioOffset: 40
        },
        { words: 'butterfly,cheetah,bee,giraffe,kangaroo', audioOffset: 60 }
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
