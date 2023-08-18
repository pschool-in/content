export default {
  label: 'Colors',
  id: 'ml-colors',
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
          text: `ചുവപ്പ്, red
            മഞ്ഞ, yellow
            പച്ച,  green
            നീല, blue 
            പർപ്പിൾ, purple`
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
          text: `തവിട്ട്, brown
            കറുപ്പ്, black
            വെള്ള, white 
            പിങ്ക്, pink 
            ചാരനിറം, grey`
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
          text: `ഓറഞ്ച്, orange
            കുങ്കുമം, saffron
            ആകാശ നീലിമ, skyBlue 
            സ്വർണ്ണ നിറം, gold
            വെള്ളി, silver`
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
        lang: 'ml'
      },
      data: [
        'ചുവപ്പ്, ഓറഞ്ച്, സ്വർണ്ണം, കറുപ്പ്, വെളുപ്പ്',
        'തവിട്ട്, പിങ്ക്, മഞ്ഞ, നീല, പച്ച',
        'വയലറ്റ്, കുങ്കുമം, വെള്ളി, ചാരനിറം, നീല'
      ]
    },
    {
      id: 'match-colors',
      type: 'match',
      label: 'ഇനിപ്പറയുന്നവയുമായി പൊരുത്തപ്പെടുക',
      commonData: {
        title: 'ഇനിപ്പറയുന്നവയുമായി പൊരുത്തപ്പെടുക',
        fontSize: '1rem'
      },
      data: [
        `പാൽ, വെള്ള
            രാത്രി, കറുപ്പ്
            ആകാശം, നീല
            തക്കാളി, ചുവപ്പ്
            കറിവേപ്പില, പച്ച`,

        `കടൽ, നീല
            കാക്ക, കറുപ്പ്
            പച്ച ഇലകൾ, പച്ച
            മേഘം, വെള്ള
            നാരങ്ങ, മഞ്ഞ`,

        `വഴുതന, പർപ്പിൾ
            മഷി, നീല
            പയർ, പച്ച
            കാരറ്റ്, ഓറഞ്ച്
            മുള്ളങ്കി, വെള്ള`
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
          { word: 'ചുവപ്പ്', x: 50, y: 40 },
          { word: 'ഓറഞ്ച്', x: 35, y: 320 },
          { word: 'മഞ്ഞ', x: 240, y: 30 },
          { word: 'പച്ച', x: 250, y: 140 },
          { word: 'നീല', x: 250, y: 180 },
          { word: 'ഇൻഡിഗോ', x: 250, y: 230 },
          { word: 'പർപ്പിൾ', x: 250, y: 300 }
        ]
      }
    }
  ]
};
