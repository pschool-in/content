export default {
  label: 'Social',
  id: 'bn-social',
  img: 'social',
  list: [
    {
      id: 'direction',
      label: 'திசைகள்',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        isPractice: false,
        title: 'Direction',
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
            word: 'পূর্ব',
            x: 210,
            y: 140
          },
          {
            word: 'পশ্চিম',
            x: 20,
            y: 140
          },
          {
            word: 'উত্তর',
            x: 120,
            y: 20
          },
          {
            word: 'দক্ষিণ',
            x: 120,
            y: 260
          }
        ]
      }
    }
  ]
};
