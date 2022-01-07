export default {
  label: 'বিজ্ঞান',
  id: 'bn-science',
  img: 'science',
  lockAfter: 7,
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
          }
        ]
      }
    },
    {
      label: 'ফল - শাকসব্জি',
      type: 'group',
      id: 'fruits',
      data: {
        title: 'ফল আর শাকসব্জি সঠিক বাক্সে রাখুন',
        imageType: 'general',
        types: [
          {
            name: 'ফল',
            text: `apple, banana, mango, guava, orange`
          },
          {
            name: 'শাকসব্জি',
            text: `cabbage, pumpkin, radish, carrot, onion`
          }
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
          { word: 'বুক', x: 193, y: 111 }
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
    },
    {
      id: 'bn-organs',
      label: 'মানুষের অঙ্গ',
      type: 'dragAndDrop',
      data: {
        img: 'organs.jpg',
        title: 'মানুষের অঙ্গ',
        width: 304,
        height: 354,
        wordWidth: 60,
        words: [
          {
            word: 'হৃৎপিন্ড',
            x: 230,
            y: 140
          },
          {
            word: 'যকৃৎ',
            x: 10,
            y: 160
          },
          {
            word: 'মস্তিষ্ক',
            x: 50,
            y: 10
          },
          {
            word: 'ফুসফুস',
            x: 230,
            y: 70
          },
          {
            word: 'বৃক্ক',
            x: 0,
            y: 210
          },
          {
            word: 'পাকস্থলী',
            x: 220,
            y: 220
          },
          {
            word: 'ক্ষুদ্রান্ত্র',
            x: 0,
            y: 250
          },
          {
            word: 'বৃহদন্ত্র',
            x: 210,
            y: 270
          }
        ]
      }
    },
    {
      id: 'bn-skeleton',
      label: 'কঙ্কাল',
      type: 'dragAndDrop',
      data: {
        img: 'skeleton.jpg',
        title: 'কঙ্কাল',
        width: 350,
        height: 448,
        wordWidth: 70,
        words: [
          {
            word: 'কশেরুকা',
            x: 70,
            y: 160
          },
          {
            word: 'শ্রোণী',
            x: 70,
            y: 200
          },
          {
            word: 'খুলি',
            x: 60,
            y: 30
          },
          {
            word: 'পাঁজর',
            x: 60,
            y: 110
          },
          {
            word: 'ঊর্বস্থি',
            x: 70,
            y: 300
          }
        ]
      }
    },
    {
      id: 'bn-dog',
      type: 'passage',
      label: 'কুকুর',
      data: {
        title: 'কুকুর',
        text: `কুকুর মানুষের সেরা বন্ধু। কুকুর গৃহপালিত পশু। চার পায়ের এই পশু মানুষের সাথে খেলতে খুব ভালোবাসে। 
              হাড় কুকুরের খুব প্রিয় খাবার। 
              এদের গন্ধের বোধ মানুষের চেয়ে চল্লিশগুন ভাল। চোর ধরতে পুলিশ অনেক সময় কুকুরের সাহায্য নিয়ে থাকে।`,
        moral: ''
      }
    },

    {
      id: 'bn-cat',
      type: 'passage',
      label: 'বিড়াল',

      data: {
        title: 'বিড়াল',
        text: `বিড়াল নিজের  অলসতার জন্যে পরিচিত। নিজের জীবনের প্রায় সত্তর শতাংশ সময় এরা ঘুমিয়ে কাটিয়ে দেয়।  
              বিড়ালের চার পা এবং একটা লেজ আছে। এর সাথে বিড়ালের কাছে আছে বড় বড় গোঁফ। বেশিরভাগ সময় এরা নিজেদের শরীর চেটে পরিষ্কার করতে ব্যাস্ত থাকে।
              বিড়াল মাছ এবং দুধ খেতে খুব ভালোবাসে। তাই ঘরে যদি দুধ বা মাছ থাকে , ওটা বিড়ালের হাত থেকে নিরাপদে রেখো। 
              বিড়ালকে আমরা ভালোবেসে বাঘের মাসী বলে ডাকি।`,
        moral: ''
      }
    },
    {
      id: 'bn-horse',
      type: 'passage',
      label: 'ঘোড়া',

      data: {
        title: 'ঘোড়া',
        text: `ঘোড়া নিজের দ্রুত গতির জন্যে পরিচিত। ঘোড়া নিজের ঘাড় না ঘুরিয়েই প্রায় সবদিকে দেখতে পায়। 
              ঘোড়া ঘাস, খড়, শস্য এবং কঠিন খাদ্য খায়।
              ঘোড়ার ক্ষুর ঘোড়াকে জোরে দৌড়াতে সাহাজ্য করে। ঘোড়ার দৌড় খুব জনপ্রিয় খেলা।
              মজার কথা যে ঘোড়া দাঁড়িয়ে  দাঁড়িয়ে শুতে পারে।`,
        moral: ''
      }
    }
  ]
};
