export default {
  label: 'ಸಮಾಜ ವಿಜ್ಞಾನ',
  lang: 'kn',
  id: 'kn-social',
  list: [
    {
      type: 'dragAndDrop',
      id: 'karnataka-cities',
      label: 'Karnataka: Label the Places',
      commonData: {
        title: 'Label the Places',
        img: 'karnataka.jpg',
        width: 301,
        height: 450,
        wordWidth: 70
      },
      data: [
        {
          words: [
            { word: 'Bangalore', x: 218, y: 340 },
            { word: 'Mysore', x: 137, y: 390 },
            { word: 'Bellary', x: 142, y: 214 },
            { word: 'Belgaum', x: 38, y: 146 },
            { word: 'Shimoga', x: 66, y: 280 }
          ]
        },
        {
          words: [
            { word: 'Kolar', x: 258, y: 340 },
            { word: 'Kodagu', x: 100, y: 390 },
            { word: 'Udupi', x: 47, y: 316 },
            { word: 'Tumkur', x: 167, y: 315 },
            { word: 'Gulbarga', x: 166, y: 80 }
          ]
        },
        {
          words: [
            { word: 'Bidar', x: 198, y: 24 },
            { word: 'Bijapur', x: 110, y: 90 },
            { word: 'Raichur', x: 165, y: 152 },
            { word: 'Ramanagara', x: 201, y: 365 },
            { word: 'Chitradurga', x: 148, y: 280 },
            { word: 'Chikmagalur', x: 97, y: 320 },
            { word: 'Hassan', x: 117, y: 355 }
          ]
        }
      ]
    },
    {
      id: 'direction',
      label: 'ನಿರ್ದೇಶನ',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        title: 'ನಿರ್ದೇಶನ',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeWidth: 3,
            strokeLinejoin: 'round'
          },
          paths: [
            'M 150 50 L 150 250 L 160 240 M 150 250 L 140 240 M 160 60 L 150 50 140 60',
            'M 100 150 L 200 150 L 190 160 M 200 150 L 190 140 M 110 160 L 100 150 L 110 140'
          ]
        },
        words: [
          {
            word: 'ಪೂರ್ವ',
            x: 210,
            y: 140
          },
          {
            word: 'ಪಶ್ಚಿಮ',
            x: 20,
            y: 140
          },
          {
            word: 'ಉತ್ತರ',
            x: 120,
            y: 20
          },
          {
            word: 'ದಕ್ಷಿಣ',
            x: 120,
            y: 260
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Land Forms',
      id: 'land-forms',
      data: {
        title: 'Drag the names and drop on the images.',
        text: `desert | ಮರುಭೂಮಿ
forest | ಅರಣ್ಯ
grassland | ಹುಲ್ಲುಗಾವಲು
ocean | ಸಾಗರ
polar | ಧ್ರುವೀಯ
valley | ಕಣಿವೆ`
      }
    },
    {
      data: {
        text: 'ಭಾನುವಾರ, ಸೋಮವಾರ, ಮಂಗಳವಾರ, ಬುಧವಾರ, ಗುರುವಾರ, ಶುಕ್ರವಾರ, ಶನಿವಾರ ',
        title: 'Sort the days of the week in order'
      },
      id: 'sort-days',
      label: 'Days of the week',
      type: 'sorting'
    }
  ]
};
