export default {
  label: 'Science',
  id: 'bn-science',
  img: 'science',
  list: [
    {
      id: 'parts-of-face',
      label: 'Parts of Face',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'Parts of Face',
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
      id: 'parts-plant',
      label: 'Parts of Plant',
      data: {
        img: 'parts_plant.jpg',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'roots', x: 4, y: 139 },
          { word: 'stem', x: 190, y: 10 },
          { word: 'leaves', x: 197, y: 78 },
          { word: 'flower', x: 18, y: 16 },
          { word: 'bud', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-dog',
      label: 'Parts of Dog',
      data: {
        img: 'parts_dog.jpg',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'tail', x: 190, y: 70 },
          { word: 'ear', x: 5, y: 6 },
          { word: 'eye', x: 60, y: 8 },
          { word: 'nose', x: 10, y: 140 },
          { word: 'leg', x: 140, y: 238 },
          { word: 'back', x: 146, y: 106 },
          { word: 'paw', x: 50, y: 236 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'Parts of Human',
      data: {
        img: 'parts_boy.jpg',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'hand', x: 12, y: 173 },
          { word: 'leg', x: 24, y: 220 },
          { word: 'head', x: 177, y: 70 },
          { word: 'shoulder', x: 39, y: 78 },
          { word: 'knee', x: 25, y: 261 },
          { word: 'arm', x: 24, y: 124 },
          { word: 'chest', x: 193, y: 111 },
          { word: 'foot', x: 28, y: 295 }
        ]
      }
    },
    {
      id: 'tree',
      label: 'Parts of Tree',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'Parts of Tree',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'leaf',
            x: 20,
            y: 30
          },
          {
            word: 'branch',
            x: 190,
            y: 230
          },
          {
            word: 'twig',
            x: 20,
            y: 220
          },
          {
            word: 'fruit',
            x: 210,
            y: 5
          },
          {
            word: 'flower',
            x: 240,
            y: 35
          },
          {
            word: 'trunk',
            x: 70,
            y: 240
          },
          {
            word: 'root',
            x: 40,
            y: 280
          },
          {
            word: 'roothairs',
            x: 260,
            y: 360
          }
        ]
      }
    }
  ]
};
