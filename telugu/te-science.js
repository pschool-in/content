export default {
  label: 'శాస్త్రం',
  lang: 'te',
  id: 'te-science',
  list: [
    {
      id: 'parts-of-face',
      label: 'ಮುಖದ ಭಾಗಗಳು',
      type: 'dragAndDrop',
      data: {
        img: 'parts_face.jpg',
        title: 'ಮುಖದ ಭಾಗಗಳು',
        width: 250,
        height: 296,
        wordWidth: 50,
        words: [
          {
            word: 'నోరు',
            x: 13,
            y: 242
          },
          {
            word: 'చెవి',
            x: 190,
            y: 18
          },
          {
            word: 'జుట్టు',
            x: 29,
            y: 18
          },
          {
            word: 'ముక్కు',
            x: 190,
            y: 231
          },
          {
            word: 'కన్ను',
            x: 16,
            y: 188
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'plant',
      label: 'మొక్కల భాగాలు',
      data: {
        img: 'parts_plant.jpg',
        title: 'మొక్కల భాగాలు',
        width: 249,
        height: 235,
        wordWidth: 50,
        words: [
          { word: 'వేరు', x: 4, y: 139 },
          { word: 'కాండం', x: 190, y: 10 },
          { word: 'ఆకు', x: 197, y: 78 },
          { word: 'పువ్వు', x: 18, y: 16 },
          { word: 'మొగ్గ', x: 4, y: 88 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'dog',
      label: 'కుక్క యొక్క భాగాలు',
      data: {
        title: 'కుక్క యొక్క భాగాలు',
        img: 'parts_dog.jpg',
        width: 250,
        height: 271,
        wordWidth: 50,
        words: [
          { word: 'తోక', x: 190, y: 70 },
          { word: 'చెవి', x: 5, y: 6 },
          { word: 'కన్ను', x: 60, y: 8 },
          { word: 'ముక్కు', x: 10, y: 140 },
          { word: 'కాలు', x: 140, y: 238 },
          { word: 'వీపు', x: 146, y: 106 },
          { word: 'గోరు', x: 50, y: 236 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'parts-body',
      label: 'మానవుని భాగాలు',
      data: {
        title: 'మానవుని భాగాలు',
        img: 'parts_boy.jpg',
        width: 250,
        height: 354,
        wordWidth: 70,
        words: [
          { word: 'వేలు', x: 12, y: 173 },
          { word: 'కాలు', x: 24, y: 220 },
          { word: 'తల', x: 177, y: 70 },
          { word: 'భుజం', x: 39, y: 78 },
          { word: 'మోకాలి', x: 25, y: 261 },
          { word: 'చెయ్యి', x: 24, y: 124 },
          { word: 'ఛాతి', x: 193, y: 111 },
          { word: 'అడుగు ', x: 28, y: 295 }
        ]
      }
    },
    {
      id: 'tree',
      label: 'చెట్టు యొక్క భాగాలు',
      type: 'dragAndDrop',
      data: {
        img: 'tree.jpg',
        title: 'చెట్టు యొక్క భాగాలు',
        width: 320,
        height: 396,
        wordWidth: 50,
        words: [
          {
            word: 'ఆకు',
            x: 20,
            y: 30
          },
          {
            word: 'శాఖ',
            x: 190,
            y: 230
          },
          {
            word: 'చిన్న కొమ్మ',
            x: 20,
            y: 220
          },
          {
            word: 'పండు',
            x: 210,
            y: 5
          },
          {
            word: 'పువ్వు',
            x: 240,
            y: 35
          },
          {
            word: 'కాండం',
            x: 70,
            y: 240
          },
          {
            word: 'వేరు',
            x: 40,
            y: 280
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'అవయవాలు',
      id: 'drag-drop-organs',
      data: {
        title: 'Drag the organ names and drop on the images.',
        text: `brain | మెదడు
heart | గుండె
kidney | మూత్రపిండము
liver | కాలేయం
lungs | ఊపిరితిత్తుల
stomach | కడుపు`
      }
    }
  ]
};
