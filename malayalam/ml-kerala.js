export default {
  label: 'കേരളം',
  id: 'ml-kerala',
  lockAfter: 100,
  list: [
    {
      id: 'rivers',
      label: 'Big Rivers',
      type: 'dragAndDrop',
      data: {
        img: 'kerala-river.jpg',
        title: 'Mark the big rivers in Kerala.',
        width: 297,
        height: 400,
        wordWidth: 80,
        words: [
          {
            word: 'Periyar',
            x: 190,
            y: 231
          },
          {
            word: 'Neyyar',
            x: 190,
            y: 355
          },
          {
            word: 'Chaliyar',
            x: 112,
            y: 124
          },
          {
            word: 'Chalakkudy',
            x: 144,
            y: 202
          },
          {
            word: 'Pamba',
            x: 161,
            y: 283
          }
        ]
      }
    },
    {
      id: 'districts-map',
      label: 'Districts Map',
      type: 'dragAndDrop',
      commonData: {
        img: 'kerala.jpg',
        title: 'Mark the Districts.',
        width: 326,
        height: 400,
        wordWidth: 80
      },
      data: [
        {
          words: [
            {
              word: 'Kannur',
              x: 34,
              y: 67
            },
            {
              word: 'Kozhikode',
              x: 58,
              y: 110
            },
            {
              word: 'Malappuram',
              x: 97,
              y: 142
            },
            {
              word: 'Ernakulam',
              x: 115,
              y: 227
            },
            {
              word: 'Thiruvananthapuram',
              x: 161,
              y: 356
            }
          ]
        },
        {
          words: [
            {
              word: 'Kasaragod',
              x: 12,
              y: 31
            },
            {
              word: 'Wayanad',
              x: 83,
              y: 84
            },
            {
              word: 'Palakkad',
              x: 112,
              y: 160
            },
            {
              word: 'Idukki',
              x: 167,
              y: 237
            },
            {
              word: 'Alappuzha',
              x: 127,
              y: 288
            }
          ]
        }
      ]
    }
  ]
};
