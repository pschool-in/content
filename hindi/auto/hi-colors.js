export default {
  label: 'Colors',
  id: 'hi-colors',
  list: [
    {
      type: 'match',
      label: 'Match Colors',
      id: 'match-color-names',
      lockAfter: 2,
      commonData: {
        title: 'Match Colors'
      },
      data: [
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            red: [{ fill: '#D01C16' }],
            yellow: [{ fill: '#ffff00' }],
            green: [{ fill: '#01A100' }],
            blue: [{ fill: '#0000ff' }],
            purple: [{ fill: '#C367DD' }]
          },
          rightImgType: 'svg',
          text: `लाल, red
पीला , yellow
हरा ,  green
नीला, blue 
बैंगनी , purple`
        },
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            brown: [{ fill: '#964B00' }],
            black: [{ fill: '#000000' }],
            white: [
              {
                fill: '#ffffff'
              }
            ],
            pink: [{ fill: '#ffc0cb' }],
            grey: [{ fill: '#686868' }]
          },
          rightImgType: 'svg',
          text: `भुरा, brown
काला, black
सफ़ेद, white 
गुलाबी , pink 
धुमैला, grey`
        },
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            orange: [
              {
                fill: '#FFA500'
              }
            ],
            saffron: [
              {
                fill: '#F4C430'
              }
            ],
            skyBlue: [
              {
                fill: '#87CEEB'
              }
            ],
            gold: [
              {
                fill: '#d4af37'
              }
            ],
            silver: [
              {
                fill: '#d8d8d8'
              }
            ]
          },
          rightImgType: 'svg',
          text: `नारंगी , orange
भगवा , saffron
आसमानी नीला , skyBlue 
सुनहरा , gold
चांदी , silver`
        }
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'Connect Letters',
      lockAfter: 2,
      commonData: {
        title: 'Connect Letters and form the color name.',
        lang: 'mr'
      },
      data: [
        'लाल, नारंगी, सुनहरा, काला, सफ़ेद',
        'भुरा, गुलाबी, पीला, नीला, हरा',
        'बैंगनी, भगवा, चांदी, धुमैला, नीला'
      ]
    },
    {
      id: 'match-colors',
      type: 'match',
      label: 'निम्नलिखित को मिलाएं',
      commonData: {
        title: 'निम्नलिखित को मिलाएं',
        fontSize: '1rem'
      },
      data: [
        `दूध, सफ़ेद
रात, काला
आसमान, नीला 
टमाटर, लाल
करी पत्ता, हरा`,

        `समुद्र, नीला 
कौवा, काला
हरी पत्ते, हरा
बादल, सफेद
नींबू, पीला`,

        `बैंगन, बैंगनी
स्याही, नीला
मूंग, हरा
कैरेट, नारंगी
मूली, सफ़ेद`
      ]
    },
    {
      type: 'dragAndDrop',
      id: 'rainbow',
      label: 'Rainbow ',
      data: {
        img: 'rainbow.jpg',
        title: 'Drag and Drop the colors of a rainbow.',
        fontSize: '1rem',
        width: 350,
        height: 350,
        wordWidth: 80,
        words: [
          { word: 'लाल', x: 50, y: 40 },
          { word: 'नारंगी', x: 35, y: 320 },
          { word: 'पीला', x: 240, y: 30 },
          { word: 'हरा', x: 250, y: 140 },
          { word: 'नीला', x: 250, y: 180 },
          { word: 'नील', x: 250, y: 230 },
          { word: 'बैंगनी', x: 250, y: 300 }
        ]
      }
    }
  ]
};
