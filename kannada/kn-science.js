export default {
  label: 'ವಿಜ್ಞಾನ',
  id: 'kn-science',
  lang: 'kn',
  list: [
    {
      id: 'parts-face',
      label: 'ಮುಖ ',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'ಮುಖ',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          {
            word: 'ಬಾಯಿ',
            x: 13,
            y: 242
          },
          {
            word: 'ಕಿವಿ',
            x: 190,
            y: 18
          },
          {
            word: 'ಕೂದಲು',
            x: 29,
            y: 18
          },
          {
            word: 'ಮೂಗು',
            x: 190,
            y: 231
          },
          {
            word: 'ಕಣ್ಣು',
            x: 16,
            y: 188
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'plant',
      label: 'ಸಸ್ಯದ ಭಾಗಗಳು',
      data: {
        img: 'parts_plant.jpg',
        title: 'ಸಸ್ಯದ ಭಾಗಗಳು',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'ಬೇರು', x: 4, y: 139 },
          { word: 'ಕಾಂಡ', x: 190, y: 10 },
          { word: 'ಎಲೆ', x: 197, y: 78 },
          { word: 'ಹೂವು', x: 18, y: 16 },
          { word: 'ಮೊಗ್ಗು', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'dog',
      label: 'ನಾಯಿಯ ಭಾಗಗಳು',
      data: {
        title: 'ನಾಯಿಯ ಭಾಗಗಳು',
        img: 'parts_dog.jpg',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'ಬಾಲ', x: 190, y: 70 },
          { word: 'ಕಿವಿ', x: 5, y: 6 },
          { word: 'ಕಣ್ಣು', x: 60, y: 8 },
          { word: 'ಮೂಗು', x: 10, y: 140 },
          { word: 'ಕಾಲು', x: 140, y: 238 },
          { word: 'ಹಿಂಭಾಗ', x: 146, y: 106 },
          { word: 'ಉಗುರು', x: 50, y: 236 }
        ]
      }
    },

    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'ದೇಹದ ಭಾಗಗಳು',
      data: {
        title: 'ದೇಹದ ಭಾಗಗಳು',
        img: 'parts_boy.jpg',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'ಬೆರಳು', x: 12, y: 173 },
          { word: 'ಕಾಲು', x: 24, y: 220 },
          { word: 'ತಲೆ', x: 177, y: 70 },
          { word: 'ಭುಜ', x: 39, y: 78 },
          { word: 'ಮೊಣಕಾಲು', x: 25, y: 261 },
          { word: 'ಕೈ', x: 24, y: 124 },
          { word: 'ಎದೆ', x: 193, y: 111 },
          { word: 'ಪಾದ ', x: 28, y: 295 }
        ]
      }
    },
    {
      id: 'tree',
      label: 'ಮರದ ಭಾಗಗಳು',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'ಮರದ ಭಾಗಗಳು',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'ಎಲೆ',
            x: 20,
            y: 30
          },
          {
            word: 'ಶಾಖೆ',
            x: 190,
            y: 230
          },
          {
            word: 'ರೆಂಬೆ',
            x: 20,
            y: 220
          },
          {
            word: 'ಹಣ್ಣು',
            x: 210,
            y: 5
          },
          {
            word: 'ಹೂವು',
            x: 240,
            y: 35
          },
          {
            word: 'ಕಾಂಡ',
            x: 70,
            y: 240
          },
          {
            word: 'ಬೇರು',
            x: 40,
            y: 280
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Identify Organs ',
      id: 'drag-drop-organs',
      data: {
        title: 'Drag the organ names and drop on the images.',
        text: `brain | ಮೆದುಳು
heart | ಹೃದಯ
kidney | ಮೂತ್ರಪಿಂಡ
liver | ಯಕೃತ್ತು
lungs | ಶ್ವಾಸಕೋಶ
stomach | ಹೊಟ್ಟೆ`
      }
    }
  ]
};
