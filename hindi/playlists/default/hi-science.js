export default {
    label: 'विज्ञान',
    id: 'hi-science',
    img: 'science',
    list: [
      {
        id: 'parts-of-face',
        label: 'चेहरे के हिस्से',
        type: 'dragAndDrop',
        data: {
          img: 'face',
          title: 'Parts of Face',
          width: 250,
          height: 296,
          wordWidth: 50,
          words: [
            {
              word: 'मुंह',
              x: 13,
              y: 242
            },
            {
              word: 'कान',
              x: 190,
              y: 18
            },
            {
              word: 'केश',
              x: 29,
              y: 18
            },
            {
              word: 'नाक',
              x: 190,
              y: 231
            },
            {
              word: 'आंख',
              x: 16,
              y: 188
            }
          ]
        }
      },

      {
        type: 'group',
        label: 'जंगली जानवर बनाम घरेलू जानवर ',
        id: 'classify-animal-type',
        commonData: {
          title: 'जानवरों को जंगली या घरेलू के रूप में वर्गीकृत करें',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['जंगली जानवर', 'घरेलू जानवर']
        },
        data: [
          [`बाघ,बारहसिंगा, शेर, लोमड़ी, कंगारू`, `गाय, भैंस, बकरी, भेड़, घोड़ा`],
          [`हाथी, जिराफ़, सांप, हिरन, भेड़िया`, `गधा, ऊंट, खच्चर, सांड, कुत्ता`],
          [`भालू, नीलगाय, गेंडा, जेबरा, चीता`, `बिल्ली, बैल, सूअर, बत्तख, मुर्गी`]
        
        ]
      },
      {
        label: 'जंगली जानवर - घरेलू जानवर',
        type: 'group',
        id: 'hi-domestic-wild',
        data: {
          title: 'जानवरों को जंगली या घरेलू के रूप में वर्गीकृत करें',
          imageType: 'animals',
          types: [
            {
              name: 'जंगली जानवर',
              text: 'cat, dog, goat, horse, pig, sheep'
            },
            {
              name: 'घरेलू जानवर',
              text: 'elephant, lion, monkey, rhino, tiger, zebra'
            }
          ]
        }
      },
       {
        label: 'जमीन के ऊपर - जमीन के नीचे सब्जियां',
        type: 'group',
        id: 'vegi',
        data: {
          title: 'सब्जियों को जमीन के नीचे या जमीन के ऊपर उगने वाले के रूप में वर्गीकृत करें। ',
          imageType: 'vegetables',
          types: [
            {
              name: 'जमीन के ऊपर',
              text: 'tomato, cabbage, cauliflower, corn, cucumber, pumpkin'
            },
            {
              name: 'जमीन के नीचे',
              text: 'carrot, beetroot, onion, potato, garlic, ginger'
            }
          ]
        }
      },
      {
        label: 'भूमिवाहन - जलवाहन - वायुवाहन',
        type: 'group',
        id: 'hi-vehicle',
        data: {
          title: 'सड़क पर, पानी में या हवा में इस्तेमाल होने वाले वाहनों को वर्गीकृत करें। ',
          imageType: 'vegetables',
          types: [
            {
              name: 'भूमिवाहन',
              text: 'bus, auto'
            },
            {
              name: 'जलवाहन',
              text: 'boat, ship'
            },
            {
              name: 'वायुवाहन',
              text: 'aeroplane, helicoptor'
            },
          ]
        }
      },
     {
    type: 'dragAndDrop',
    id: 'hi-parts-plant',
    label: 'पौधे का भाग',
    data: {
      img: 'plant',
      width: 249,
      height: 235,
      wordWidth: 50,
      words: [
        { word: 'जड़ों', x: 4, y: 139 },
        { word: 'तना', x: 190, y: 10 },
        { word: 'पत्तियां', x: 197, y: 78 },
        { word: 'पुष्प', x: 18, y: 16 },
        { word: 'कली', x: 4, y: 88 }
      ]
    }
  },
  {
    type: 'dragAndDrop',
    id: 'hi-parts-dog',
    label: 'कुत्ते का भाग',
    data: {
      img: 'dog',
      width: 250,
      height: 271,
      wordWidth: 50,
      words: [
        { word: 'पूंछ', x: 190, y: 70 },
        { word: 'कान', x: 5, y: 6 },
        { word: 'आंख', x: 60, y: 8 },
        { word: 'नाक', x: 10, y: 140 },
        { word: 'पैर', x: 140, y: 238 },
        { word: 'पीठ', x: 146, y: 106 },
        { word: 'पंजे', x: 50, y: 236 }
      ]
    }
  },
  {
    type: 'dragAndDrop',
    id: 'hi-parts-body',
    label: 'शरीर के अंग',
    data: {
      img: 'human',
      width: 250,
      height: 354,
      wordWidth: 70,
      words: [
        { word: 'हाथ', x: 12, y: 173 },
        { word: 'पैर', x: 24, y: 220 },
        { word: 'सिर', x: 177, y: 70 },
        { word: 'कंधों', x: 39, y: 78 },
        { word: 'घुटना', x: 25, y: 261 },
        { word: 'हाथ', x: 24, y: 124 },
        { word: 'छाती', x: 193, y: 111 },
        { word: 'पैर', x: 28, y: 295 }
      ]
    }
    },
    {
        label: 'क्या तुम जानते हो? ',
        type: 'matchByDragDrop',
        id: 'didyouknow',
        commonData: {
          title: 'सही उत्तर का चयन करें।',
          styles: {
            fontSize: '1.2rem',
            dashWidth: 80
          }
        },
        data: [
          `मनुष्य का दायाँ पैर, बाऍं पैर की अपेक्षा *लंबा* होता है।
          दोनों *हाथों* को फैलाने पर मिलने वाली लंबाई लगभग अपने शरीर की लंबाई के बराबर होती है।
          छींकते समय अपनी *आँखें* खुली रखना लगभग असंभव होता है।
          प्रत्येक मनुष्य की उंगलियों के *निशान* अलग होते हैं।`,
  
          `स्वस्थ व्यक्ति २4 घंटे में लगभग २३ हजार बार *सांस* लेता है।
          *चूहा* लगभग 5० फीट ऊंचाई से कूद सकता है।
          एक स्वस्थ मनुष्य की *नाड़ी* एक मिनट में 72 बार चलती है।
          *गिलहरी* बीज मिट्टी में दबाकर भूल जाती है।`
        ]
      }
    ]
  };      
