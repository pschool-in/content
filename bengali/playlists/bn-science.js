export default {
    label: 'বিজ্ঞান',
    id: 'bn-science',
    img: 'science',
    list: [
                  {
            label: 'গৃহপালিত পশু - বন্য পশু',
            type: 'group',
            id: 'bn-domestic-wild',
            data: {
              title: 'গৃহপালিত পশু আর বন্য পশু ঠিক বাক্সে রাখুন ',
              imageType: 'animals',
              types: [
                {
                  name: 'গৃহপালিত পশু',
                  text: 'cat, dog, goat, horse, pig, sheep'
                },
                {
                  name: 'বন্য পশু',
                  text: 'elephant, lion, monkey, rhino, tiger, zebra'
                }
              ]
            }
          },
                  {
            label: 'মাটির উপরে - মাটির নিচে সবজি ',
            type: 'group',
            id: 'vegi',
            data: {
              title: 'মাটির উপরে আর মাটির নিচে সবজি সঠিক বাক্সে রাখুন ',
              imageType: 'vegetables',
              types: [
                {
                  name: 'মাটির উপরে',
                  text: 'tomato, cabbage, cauliflower, corn, cucumber, pumpkin'
                },
                {
                  name: 'মাটির নিচে',
                  text: 'carrot, beetroot, onion, potato, garlic, ginger'
                }
              ]
            }
          },
                  {
            label: 'স্থলযান - জলযান - বায়ুযান',
            type: 'group',
            id: 'bn-vehicle',
            data: {
              title: 'স্থলযান, জলযান আর বায়ুযান সঠিক বাক্সে রাখুন ',
              imageType: 'vegetables',
              types: [
                {
                  name: 'স্থলযান',
                  text: 'bus, auto'
                },
                {
                  name: 'জলযান',
                  text: 'boat, ship'
                },
                {
                  name: 'বায়ুযান',
                  text: 'aeroplane, helicoptor'
                },
              ]
            }
          },
      {
        id: 'bn-parts-of-face',
        label: 'মুখের অংশ',
        type: 'dragAndDrop',
        data: {
          img: 'face',
          title: 'মুখের অংশ মেলান',
          width: 250,
          height: 296,
          wordWidth: 50,
          words: [
            {
              word: 'মুখ',
              x: 13,
              y: 242
            },
            {
              word: 'কান',
              x: 190,
              y: 18
            },
            {
              word: 'চুল',
              x: 29,
              y: 18
            },
            {
              word: 'নাক',
              x: 190,
              y: 231
            },
            {
              word: 'চক্ষু',
              x: 16,
              y: 188
            }
          ]
        }
      },
      {
        type: 'dragAndDrop',
        id: 'bn-parts-plant',
        label: 'উদ্ভিদের অংশ',
        data: {
          img: 'plant',
          width: 249,
          height: 235,
          wordWidth: 50,
          words: [
            { word: 'শিকড়', x: 4, y: 139 },
            { word: 'কান্ড', x: 190, y: 10 },
            { word: 'পাতা', x: 197, y: 78 },
            { word: 'ফুল', x: 18, y: 16 },
            { word: 'কুঁড়ি', x: 4, y: 88 }
          ]
        }
      },
      {
        type: 'dragAndDrop',
        id: 'bn-parts-dog',
        label: 'কুকুরের অংশ',
        data: {
          img: 'dog',
          width: 250,
          height: 271,
          wordWidth: 50,
          words: [
            { word: 'লেজl', x: 190, y: 70 },
            { word: 'কান', x: 5, y: 6 },
            { word: 'চোখ', x: 60, y: 8 },
            { word: 'নাক', x: 10, y: 140 },
            { word: 'পা', x: 140, y: 238 },
            { word: 'পিঠ', x: 146, y: 106 },
            { word: 'থাবা', x: 50, y: 236 }
          ]
        }
      },
      {
        type: 'dragAndDrop',
        id: 'bn-parts-body',
        label: 'মানুষের অংশ',
        data: {
          img: 'human',
          width: 250,
          height: 354,
          wordWidth: 70,
          words: [
            { word: 'হাত', x: 12, y: 173 },
            { word: 'পা', x: 24, y: 220 },
            { word: 'মাথা', x: 177, y: 70 },
            { word: 'কাঁধ', x: 39, y: 78 },
            { word: 'হাঁটু', x: 25, y: 261 },
            { word: 'হাত', x: 24, y: 124 },
            { word: 'বুক', x: 193, y: 111 },
            { word: 'পা', x: 28, y: 295 }
          ]
        }
      },
                  {
            id: 'bn-fish',
            label: 'মাছের অংশ',
            type: 'dragAndDrop',
            data: {
              img: 'fish.jpg',
              title: 'মাছের অংশ',
              width: 380,
              height: 280,
              wordWidth: 50,
              words: [
                {
                  word: 'মুখ',
                  x: 10,
                  y: 190
                },
                {
                  word: 'চোখ',
                  x: 10,
                  y: 70
                },
                {
                  word: 'কানকো',
                  x: 30,
                  y: 20
                },
                {
                  word: 'আঁশ',
                  x: 150,
                  y: 30
                },
                {
                  word: 'পাখনা',
                  x: 210,
                  y: 250
                },
                {
                  word: 'লেজ',
                  x: 280,
                  y: 40
                }
              ]
            }
          },
      {
        id: 'bn-tree',
        label: 'গাছের অংশ',
        type: 'dragAndDrop',
        data: {
          img: 'tree.jpg',
          title: 'গাছের অংশ',
          width: 320,
          height: 396,
          wordWidth: 50,
          words: [
            {
              word: 'পাতা',
              x: 20,
              y: 30
            },
            {
              word: 'ডাল',
              x: 190,
              y: 230
            },
            {
              word: 'পল্লব',
              x: 20,
              y: 220
            },
            {
              word: 'ফল',
              x: 210,
              y: 5
            },
            {
              word: 'ফুল',
              x: 240,
              y: 35
            },
            {
              word: 'কাণ্ড',
              x: 70,
              y: 240
            },
            {
              word: 'মূল',
              x: 40,
              y: 280
            },
            {
              word: 'শিকড়',
              x: 260,
              y: 360
            }
          ]
        }
      }
    ]
  };
  
