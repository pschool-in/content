export default {
  label: 'సాంఘిక శాస్త్రం',
  lang: 'te',
  id: 'te-social',
  lockAfter: 100,
  list: [
    {
      type: 'dragAndDrop',
      id: 'andhra-cities',
      label: 'Andhra Pradesh: Label the Cities',
      commonData: {
        title: 'Label the Cities',
        img: 'andhra-pradesh.jpg',
        width: 360,
        height: 315,
        wordWidth: 70
      },
      data: [
        {
          words: [
            { word: 'Anantapur', x: 24, y: 195 },
            { word: 'Chittoor', x: 82, y: 264 },
            { word: 'Visakhapatnam', x: 275, y: 65 },
            { word: 'Vijayawada', x: 173, y: 120 },
            { word: 'Ongole', x: 130, y: 160 }
          ]
        },
        {
          words: [
            { word: 'Tirupathi', x: 124, y: 245 },
            { word: 'Cuddapah', x: 76, y: 203 },
            { word: 'Srikakulam', x: 304, y: 30 },
            { word: 'Guntur', x: 161, y: 131 },
            { word: 'Kurnool', x: 21, y: 160 }
          ]
        }
      ]
    },
    {
      type: 'dragAndDrop',
      id: 'telangana-cities',
      label: 'Telangana: Label the Cities',
      data: {
        title: 'Label the Cities',
        img: 'telangana.jpg',
        width: 350,
        height: 369,
        wordWidth: 70,
        words: [
          { word: 'Hyderabad', x: 99, y: 214 },
          { word: 'Nizamabad', x: 68, y: 105 },
          { word: 'Kammam', x: 244, y: 237 },
          { word: 'Warangal', x: 188, y: 164 },
          { word: 'Karimnagar', x: 165, y: 127 }
        ]
      }
    },
    {
      id: 'direction',
      label: 'దిశలు',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        title: 'దిశలు',
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
            word: 'తూర్పు',
            x: 210,
            y: 140
          },
          {
            word: 'పడమర',
            x: 20,
            y: 140
          },
          {
            word: 'ఉత్తరం',
            x: 120,
            y: 20
          },
          {
            word: 'దక్షిణ',
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
        text: `desert | ఎడారి
forest | అడవి
grassland | గడ్డి భూములు
ocean | సముద్ర
polar | ధ్రువ
valley | లోయ`
      }
    },
    {
      data: {
        text: 'ఆదివారము, సోమవారం, మంగళవారం, బుధవారం, గురువారం, శుక్రవారం, శనివారం',
        title: 'Days of the week'
      },
      id: 'sort',
      label: 'Days of the week',
      type: 'sorting'
    }
  ]
};
