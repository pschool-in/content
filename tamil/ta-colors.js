export default {
  label: 'வண்ணங்கள்',
  id: 'ta-colors',
  list: [
    {
      type: 'match',
      label: 'நிறங்களை பொருத்துக ',
      id: 'match-color-names',
      lockAfter: 2,
      commonData: {
        title: 'நிறங்களை பொருத்துக '
      },
      data: [
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            white: [{ fill: '#ffffff' }],
            black: [{ fill: '#000000' }],
            blue: [{ fill: '#00bfff' }],
            red: [{ fill: '#D01C16' }],
            yellow: [{ fill: '#ffff00' }]
          },
          rightImgType: 'svg',
          text: `வெள்ளை, white
கருப்பு, black
நீலம்,  blue
மஞ்சள், yellow 
சிவப்பு, red`
        },
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            gray: [{ fill: '#686868' }],
            purple: [{ fill: '#C367DD' }],
            green: [
              {
                fill: '#01A100'
              }
            ],
            gold: [{ fill: '#d4af37' }],
            silver: [{ fill: '#d8d8d8' }]
          },
          rightImgType: 'svg',
          text: `பச்சை, green
ஊதா, purple
சாம்பல், gray 
தங்கம் , gold 
வெள்ளி, silver`
        },
        {
          commonPath: 'M 0 0 H 100 V 40 H 0 V 0',
          imgs: {
            brown: [
              {
                fill: '#804000'
              }
            ],
            lightGreen: [
              {
                fill: '#32cd32'
              }
            ],
            lightRed: [
              {
                fill: '#ffb6c1'
              }
            ],
            darkBlue: [
              {
                fill: '#483d8b'
              }
            ],
            kakki: [
              {
                fill: '#c3b091'
              }
            ],

            purple: [{ fill: '#C367DD' }],
            pink: [{ fill: '#ED569B' }],
            orange: [{ fill: '#F56200' }],
            black: [{ fill: '#000000' }]
          },
          rightImgType: 'svg',
          text: `பழுப்பு , brown
இளம்பச்சை , lightGreen
இளஞ்சிவப்பு , lightRed 
கருநீலம் , darkBlue, 
காக்கி , kakki`
        }
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'எழுத்துக்களை இணைக்கவும்',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து நிறங்களை அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        `வெள்ளை, கருப்பு, நீலம்,  மஞ்சள், சிவப்பு`,
        `பச்சை, ஊதா, சாம்பல், தங்கம், வெள்ளி`,
        `பழுப்பு, இளம்பச்சை, இளஞ்சிவப்பு, கருநீலம், காக்கி`
      ]
    },
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
    {
      type: 'dragAndDrop',
      id: 'rainbow',
      label: 'வானவில் ',
      data: {
        img: 'rainbow.jpg',
        title: 'வானவில்லின் நிறங்களை பொருத்துக ',
        fontSize: '1rem',
        width: 350,
        height: 350,
        wordWidth: 80,
        words: [
          { word: 'சிவப்பு', x: 50, y: 40 },
          { word: 'செம்மஞ்சள்', x: 35, y: 320 },
          { word: 'மஞ்சள்', x: 240, y: 30 },
          { word: 'பச்சை', x: 250, y: 140 },
          { word: 'நீலம்', x: 250, y: 180 },
          { word: 'கருநீலம்', x: 250, y: 230 },
          { word: 'ஊதா', x: 250, y: 300 }
        ]
      }
    }
  ]
};
