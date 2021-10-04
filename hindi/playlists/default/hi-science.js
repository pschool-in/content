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
          title: 'जानवरों को सही बॉक्स में रखें ',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['Wild Animal', 'Domestic Animal']
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
        id: 'bn-domestic-wild',
        data: {
          title: 'पालतू जानवरों और जंगली जानवरों को सही डिब्बे में रखें ',
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
          title: 'जमीन के ऊपर और जमीन के नीचे सब्जियां को सही डिब्बे में रखें ',
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
        id: 'bn-vehicle',
        data: {
          title: 'भूमिवाहन, जलवाहन और वायुवाहन को सही डिब्बे में रखें ',
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
    id: 'bn-parts-plant',
    label: 'पौधे का भाग',
    data: {
      img: 'plant',
      width: 249,
      height: 235,
      wordWidth: 50,
      words: [
        { word: 'जड़ों', x: 4, y: 139 },
        { word: 'उपजी', x: 190, y: 10 },
        { word: 'पत्तियां', x: 197, y: 78 },
        { word: 'पुष्प', x: 18, y: 16 },
        { word: 'कली', x: 4, y: 88 }
      ]
    }
  },
  {
    type: 'dragAndDrop',
    id: 'bn-parts-dog',
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
    id: 'bn-parts-body',
    label: 'मानव भाग',
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
  }
    ]
  };
