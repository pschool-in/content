export default {
  label: 'Science',
  id: 'mr-science',
  img: 'science',
  list: [
    {
      id: 'parts-of-face',
      label: 'चेहऱ्याचे भाग',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'Parts of Face',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          {
            word: 'चेहरा',
            x: 13,
            y: 242
          },
          {
            word: 'कान',
            x: 190,
            y: 18
          },
          {
            word: 'केस',
            x: 29,
            y: 18
          },
          {
            word: 'नाक',
            x: 190,
            y: 231
          },
          {
            word: 'डोळा',
            x: 16,
            y: 188
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-plant',
      label: 'वनस्पतीचे भाग',
      data: {
        img: 'parts_plant.jpg',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'मुळं', x: 4, y: 139 },
          { word: 'खोड', x: 190, y: 10 },
          { word: 'पाने', x: 197, y: 78 },
          { word: 'फूल', x: 18, y: 16 },
          { word: 'कळी', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-dog',
      label: 'कुत्र्याचे भाग',
      data: {
        img: 'parts_dog.jpg',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'शेपूट', x: 190, y: 70 },
          { word: 'कान', x: 5, y: 6 },
          { word: 'डोळा', x: 60, y: 8 },
          { word: 'नाक', x: 10, y: 140 },
          { word: 'पाय', x: 140, y: 238 },
          { word: 'परत', x: 146, y: 106 },
          { word: 'पंजा', x: 50, y: 236 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'मानवाचे भाग',
      data: {
        img: 'parts_boy.jpg',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'हात', x: 12, y: 173 },
          { word: 'पाय', x: 24, y: 220 },
          { word: 'डोके', x: 177, y: 70 },
          { word: 'खांदा', x: 39, y: 78 },
          { word: 'गुडघा', x: 25, y: 261 },
          { word: 'हात', x: 24, y: 124 },
          { word: 'छाती', x: 193, y: 111 },
          { word: 'पाऊल', x: 28, y: 295 }
        ]
      }
    },
    {
      id: 'tree',
      label: 'झाडाचे भाग',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'Parts of Tree',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'पान',
            x: 20,
            y: 30
          },
          {
            word: 'शाखा',
            x: 190,
            y: 230
          },
          {
            word: 'डहाळी',
            x: 20,
            y: 220
          },
          {
            word: 'फळ',
            x: 210,
            y: 5
          },
          {
            word: 'फूल',
            x: 240,
            y: 35
          },
          {
            word: 'खोड',
            x: 70,
            y: 240
          },
          {
            word: 'मूळ',
            x: 40,
            y: 280
          },
          {
            word: 'मूळ केस',
            x: 260,
            y: 360
          }
        ]
      }
    },
    {
      id: 'water-cyle',
      label: 'जल - चक्र',
      type: 'dragAndDrop',
      data: {
        img: 'water-cycle.jpg',
        title: 'Water Cycle',
        width: 400,
        height: 218,
        wordWidth: 80,
        fontSize: '1.2rem',
        words: [
          {
            word: 'संकलन',
            x: 20,
            y: 190
          },
          {
            word: 'पर्जन्य',
            x: 10,
            y: 80
          },
          {
            word: 'बाष्पीभवन',
            x: 300,
            y: 100
          },
          {
            word: 'संक्षेपण',
            x: 160,
            y: 5
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'अवयव ओळखा ',
      id: 'drag-drop-organs',
      data: {
        title: 'Drag the organ names and drop on the images.',
        text: `brain | मेंदू
heart | हृदय
kidney | मूत्रपिंड
liver | यकृत
lungs | फुफ्फुसे
stomach | पोट`
      }
    },
    {
      id: 'flower',
      label: 'फुलांचे भाग',
      type: 'dragAndDrop',
      data: {
        img: 'flower.jpg',
        title: 'फुलांचे भाग',
        width: 380,
        height: 336,
        wordWidth: 50,
        fontSize: '1.2rem',
        words: [
          {
            word: 'पाकळी',
            x: 30,
            y: 100
          },
          {
            word: 'कलंक',
            x: 50,
            y: 40
          },
          {
            word: 'शैली',
            x: 30,
            y: 170
          },
          {
            word: 'sepal',
            x: 40,
            y: 250
          },
          {
            word: 'अंडाशय',
            x: 100,
            y: 300
          },
          {
            word: 'ग्रहण',
            x: 280,
            y: 290
          },
          {
            word: 'anther',
            x: 280,
            y: 20
          },
          {
            word: 'फिलामेंट',
            x: 320,
            y: 200
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'rainbow',
      label: 'इंद्रधनुष्य',
      data: {
        img: 'rainbow.jpg',
        fontSize: '1.4rem',
        title: 'Match the colors of a rainbow.',
        width: 350,
        height: 350,
        wordWidth: 80,
        words: [
          { word: 'लाल', x: 50, y: 40 },
          { word: 'नारिंग', x: 35, y: 320 },
          { word: 'पिवळा', x: 240, y: 30 },
          { word: 'हिरवा', x: 250, y: 140 },
          { word: 'निळा', x: 250, y: 180 },
          { word: 'नील', x: 250, y: 230 },
          { word: 'जांभळा', x: 250, y: 300 }
        ]
      }
    }
  ]
};
