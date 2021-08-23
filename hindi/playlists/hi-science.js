export default {
    label: 'science',
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
    ]
  };
