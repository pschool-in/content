export default {
  label: 'Colors',
  id: 'mr-colors',
  lockAfter: 100,
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
            पिवळा , yellow
            हिरवा ,  green
            निळा, blue 
            जांभळा , purple`
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
            काळा, black
            पांढरा, white 
            गुलाबी , pink 
            करडा, grey`
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
          text: `नारींगी , orange
          भगवा , saffron
          आकाशी , skyBlue 
          सोनेरी , gold, 
          चंदेरी , silver`
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
        'लाल, पिवळा, हिरवा, निळा, जांभळा',
        'भुरा, काळा, पांढरा, गुलाबी, करडा',
        'नारींगी, भगवा, आकाशी, सोनेरी, चंदेरी'
      ]
    },
    /*
    {
      id: 'match-colors',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `பால் , வெள்ளை
  இரவு , கருப்பு
  வானம் , நீலம்
  தக்காளி , சிவப்பு
  கீரை , பச்சை`,

        `கடல் , நீலம்
  காகம் , கருப்பு
  இலை , பச்சை
  மேகம் , வெள்ளை
  எலுமிச்சை , மஞ்சள்`,

        `கத்திரிக்காய் , ஊதா
  மை , கருநீலம்
  வெண்டைக்காய் , பச்சை
  காரட் ,  சிவப்பு
  முள்ளங்கி, வெள்ளை `
      ]
    },
    */
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
          { word: 'तांबड़ा', x: 50, y: 40 },
          { word: 'नारिंगी', x: 35, y: 320 },
          { word: 'पिवळा', x: 240, y: 30 },
          { word: 'हिरवा', x: 250, y: 140 },
          { word: 'निळा', x: 250, y: 180 },
          { word: 'पारवा', x: 250, y: 230 },
          { word: 'जांभळा', x: 250, y: 300 }
        ]
      }
    }
  ]
};
