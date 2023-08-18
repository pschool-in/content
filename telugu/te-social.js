export default {
  label: 'సాంఘిక శాస్త్రం',
  lang: 'te',
  id: 'te-social',
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
