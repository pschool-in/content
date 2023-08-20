export default {
  label: '',
  id: 'kn-pic-word',
  lang: 'kn',
  list: [
    {
      type: 'rightOne',
      label: 'Pick Word: ಪ್ರಾಣಿಗಳು ',
      id: 'pick-animals',
      commonData: {
        title: 'Listen to the sound and pick the right word.',
        type: 'words',
        fontSize: '1.5rem',
        audio: 'kn/kn-animals.mp3'
      },
      data: [
        {
          words: 'ಬೆಕ್ಕು,ನಾಯಿ,ಮೇಕೆ,ಹಸು,ಕತ್ತೆ,ಕುದುರೆ,ಹಂದಿ,ಆನೆ,ಸಿಂಹ,ಕೋತಿ',
          audioOffset: 0
        },
        {
          words:
            'ನೀರಾನೆ,ಗೇಂಡಾಮೃಗ,ನರಿ,ಮೊಸಳೆ,ಹೇಸರಗತ್ತೆ,ಕರಡಿ,ಒಂಟೆ,ತಿಮಿಂಗಿಲ,ಹುಲಿ,ಕುರಿ',
          audioOffset: 20
        },
        {
          words: 'ಮೀನು,ಕಪ್ಪೆ,ಏಡಿ,ಹಾವು,ಗೊಳಿ,ಆಮೆ,ಹೆಗ್ಗಣ,ಇರುವೆ,ಬಾವಲಿ,ಎಮ್ಮೆ',
          audioOffset: 40
        },
        { words: 'ಚಿಟ್ಟೆ,ಚಿರತೆ,ಜೇನುನೊಣ,ಜಿರಾಫೆ,ಕಾಂಗರೂ', audioOffset: 60 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Word: ಪಕ್ಷಿಗಳು ',
      id: 'pick-birds',
      commonData: {
        title: 'Listen to the sound and pick the right word.',
        type: 'words',
        fontSize: '1.5rem',
        audio: 'kn/kn-birds.mp3'
      },
      data: [
        {
          words:
            'ಕಾಗೆ,ಪಾರಿವಾಳ,ಬಾತುಕೋಳಿ,ಕೋಳಿ,ಮರಿಯನ್ನು,ಗಿಣಿ,ನವಿಲು,ಗುಬ್ಬಚ್ಚಿ,ಕೊಕ್ಕರೆ,ಹದ್ದು',
          audioOffset: 0
        },
        {
          words:
            'ರಾಜಹಂಸ,ಮಿಂಚುಳ್ಳಿ,ಗೊರವಂಕ,ಉಷ್ಟ್ರಪಕ್ಷಿ,ಗೂಬೆ,ಹುಂಜ,ರಣಹದ್ದು,ಮರಕುಟಿಗ,ಕೋಯಲ್',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: ಪ್ರಾಣಿಗಳು ',
      id: 'write-animals',
      commonDate: { title: 'Listen to the sound and write the word.' },
      commonData: { lang: 'kn', audio: 'kn/kn-animals.mp3' },
      data: [
        {
          words: 'ಬೆಕ್ಕು,ನಾಯಿ,ಮೇಕೆ,ಹಸು,ಕತ್ತೆ,ಕುದುರೆ,ಹಂದಿ,ಆನೆ,ಸಿಂಹ,ಕೋತಿ',
          audioOffset: 0
        },
        {
          words:
            'ನೀರಾನೆ,ಗೇಂಡಾಮೃಗ,ನರಿ,ಮೊಸಳೆ,ಹೇಸರಗತ್ತೆ,ಕರಡಿ,ಒಂಟೆ,ತಿಮಿಂಗಿಲ,ಹುಲಿ,ಕುರಿ',
          audioOffset: 20
        },
        {
          words: 'ಮೀನು,ಕಪ್ಪೆ,ಏಡಿ,ಹಾವು,ಗೊಳಿ,ಆಮೆ,ಹೆಗ್ಗಣ,ಇರುವೆ,ಬಾವಲಿ,ಎಮ್ಮೆ',
          audioOffset: 40
        },
        { words: 'ಚಿಟ್ಟೆ,ಚಿರತೆ,ಜೇನುನೊಣ,ಜಿರಾಫೆ,ಕಾಂಗರೂ', audioOffset: 60 }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation: ಪಕ್ಷಿಗಳು ',
      id: 'write-birds',
      commonDate: { title: 'Listen to the sound and write the word.' },
      commonData: { lang: 'kn', audio: 'kn/kn-birds.mp3' },
      data: [
        {
          words:
            'ಕಾಗೆ,ಪಾರಿವಾಳ,ಬಾತುಕೋಳಿ,ಕೋಳಿ,ಮರಿಯನ್ನು,ಗಿಣಿ,ನವಿಲು,ಗುಬ್ಬಚ್ಚಿ,ಕೊಕ್ಕರೆ,ಹದ್ದು',
          audioOffset: 0
        },
        {
          words:
            'ರಾಜಹಂಸ,ಮಿಂಚುಳ್ಳಿ,ಗೊರವಂಕ,ಉಷ್ಟ್ರಪಕ್ಷಿ,ಗೂಬೆ,ಹುಂಜ,ರಣಹದ್ದು,ಮರಕುಟಿಗ,ಕೋಯಲ್',
          audioOffset: 20
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: ಪ್ರಾಣಿಗಳು ',
      id: 'fill-animals',
      commonData: { images: 'stockImgs', title: 'Write the word', lang: 'kn' },
      data: [
        'cat|ಬೆಕ್ಕು\ndog|ನಾಯಿ\ngoat|ಮೇಕೆ\ncow|ಹಸು\ndonkey|ಕತ್ತೆ\nhorse|ಕುದುರೆ\npig|ಹಂದಿ\nelephant|ಆನೆ\nlion|ಸಿಂಹ\nmonkey|ಕೋತಿ',
        'hippo|ನೀರಾನೆ\nrhino|ಗೇಂಡಾಮೃಗ\nfox|ನರಿ\ncrocodile|ಮೊಸಳೆ\nzebra|ಹೇಸರಗತ್ತೆ\nbear|ಕರಡಿ\ncamel|ಒಂಟೆ\nwhale|ತಿಮಿಂಗಿಲ\ntiger|ಹುಲಿ\nsheep|ಕುರಿ',
        'fish|ಮೀನು\nfrog|ಕಪ್ಪೆ\ncrab|ಏಡಿ\nsnake|ಹಾವು\nbull|ಗೊಳಿ\ntortoise|ಆಮೆ\nrat|ಹೆಗ್ಗಣ\nant|ಇರುವೆ\nbat|ಬಾವಲಿ\nbuffalo|ಎಮ್ಮೆ',
        'butterfly|ಚಿಟ್ಟೆ\ncheetah|ಚಿರತೆ\nbee|ಜೇನುನೊಣ\ngiraffe|ಜಿರಾಫೆ\nkangaroo|ಕಾಂಗರೂ'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: ಪಕ್ಷಿಗಳು ',
      id: 'fill-birds',
      commonData: { images: 'stockImgs', title: 'Write the word', lang: 'kn' },
      data: [
        'crow|ಕಾಗೆ\ndove|ಪಾರಿವಾಳ\nduck|ಬಾತುಕೋಳಿ\nhen|ಕೋಳಿ\nchick|ಮರಿಯನ್ನು\nparrot|ಗಿಣಿ\npeacock|ನವಿಲು\nsparrow|ಗುಬ್ಬಚ್ಚಿ\ncrane|ಕೊಕ್ಕರೆ\neagle|ಹದ್ದು',
        'flamingo|ರಾಜಹಂಸ\nkingfisher|ಮಿಂಚುಳ್ಳಿ\nmyna|ಗೊರವಂಕ\nostrich|ಉಷ್ಟ್ರಪಕ್ಷಿ\nowl|ಗೂಬೆ\nrooster|ಹುಂಜ\nvulture|ರಣಹದ್ದು\nwoodpecker|ಮರಕುಟಿಗ\nkoel|ಕೋಯಲ್'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: ಪ್ರಾಣಿಗಳು ',
      id: 'connect-animals',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        fontSize: '1rem',
        lang: 'kn'
      },
      data: [
        'cat,ಬೆಕ್ಕು\ndog,ನಾಯಿ\ngoat,ಮೇಕೆ\ncow,ಹಸು\ndonkey,ಕತ್ತೆ\nhorse,ಕುದುರೆ\npig,ಹಂದಿ\nelephant,ಆನೆ\nlion,ಸಿಂಹ\nmonkey,ಕೋತಿ',
        'hippo,ನೀರಾನೆ\nrhino,ಗೇಂಡಾಮೃಗ\nfox,ನರಿ\ncrocodile,ಮೊಸಳೆ\nzebra,ಹೇಸರಗತ್ತೆ\nbear,ಕರಡಿ\ncamel,ಒಂಟೆ\nwhale,ತಿಮಿಂಗಿಲ\ntiger,ಹುಲಿ\nsheep,ಕುರಿ',
        'fish,ಮೀನು\nfrog,ಕಪ್ಪೆ\ncrab,ಏಡಿ\nsnake,ಹಾವು\nbull,ಗೊಳಿ\ntortoise,ಆಮೆ\nrat,ಹೆಗ್ಗಣ\nant,ಇರುವೆ\nbat,ಬಾವಲಿ\nbuffalo,ಎಮ್ಮೆ',
        'butterfly,ಚಿಟ್ಟೆ\ncheetah,ಚಿರತೆ\nbee,ಜೇನುನೊಣ\ngiraffe,ಜಿರಾಫೆ\nkangaroo,ಕಾಂಗರೂ'
      ]
    },
    {
      type: 'connectLetters',
      label: 'Connect: ಪಕ್ಷಿಗಳು ',
      id: 'connect-birds',
      commonData: {
        title: 'Connect letters and form the word',
        type: 'image',
        fontSize: '1rem',
        lang: 'kn'
      },
      data: [
        'crow,ಕಾಗೆ\ndove,ಪಾರಿವಾಳ\nduck,ಬಾತುಕೋಳಿ\nhen,ಕೋಳಿ\nchick,ಮರಿಯನ್ನು\nparrot,ಗಿಣಿ\npeacock,ನವಿಲು\nsparrow,ಗುಬ್ಬಚ್ಚಿ\ncrane,ಕೊಕ್ಕರೆ\neagle,ಹದ್ದು',
        'flamingo,ರಾಜಹಂಸ\nkingfisher,ಮಿಂಚುಳ್ಳಿ\nmyna,ಗೊರವಂಕ\nostrich,ಉಷ್ಟ್ರಪಕ್ಷಿ\nowl,ಗೂಬೆ\nrooster,ಹುಂಜ\nvulture,ರಣಹದ್ದು\nwoodpecker,ಮರಕುಟಿಗ\nkoel,ಕೋಯಲ್'
      ]
    }
  ]
};
