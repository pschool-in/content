export default {
  label: 'இணையான ஆங்கிலம்',
  id: 'ta-en-3',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `குறிப்புகள்  `,
      data: {
        title: `இயற்கை`,
        text: [
          `sun, சூரியன்
moon, நிலா
rain, மழை
star, நட்சத்திரம்
leaf, இலை
bird, பறவை
nest, கூடு
stone, கல்
tree, மரம்
world, உலகம்`,
          `forest, காடு
desert, பாலைவனம்
river, ஆறு
grassland, புல்வெளி
ocean, கடல்
polar, துருவம்
valley, பள்ளத்தாக்கு
volcano, எரிமலை`,

          `banyan tree, ஆலமரம்
palm tree, பனைமரம்
coconut tree, தென்னைமரம்
banana tree, வாழைமரம்
bamboo tree, மூங்கில்மரம்
rainbow, வானவில்
waterfall, அருவி
dew, பனித்துளி`,

          `banana leaf, வாழையிலை
neem leaf, வேப்பிலை
mango leaf, மாவிலை
coconut leaf, தென்னோலை
touch-me-not, தொட்டாற் சிணுங்கி
bone, எலும்பு
pebbles, கூழாங்கற்கள்`,

          `# பூக்கள்  `,
          `rose, ரோஜா
lotus, தாமரை
sunflower, சூரியகாந்தி
hibiscus, செம்பருத்தி
mogra, குண்டு மல்லி
jasmine, முல்லை
water lily, அல்லி
marigold, சாமந்தி
bougainvillea, காகிதப்பூ
magnolia, செண்பகப்பூ
periwinkle, நித்தியகல்யாணிப்பூ`,
          `# உடல் உறுப்புகள்`,
          `ear, காது
eye, கண்
foot, பாதம்
hair, முடி
hand, கை
mouth, வாய்
nose, மூக்கு
tooth, பல்
forehead, நெற்றி
mustache, மீசை
beard, தாடி`
        ]
      }
    },
    {
      id: 'match-nature',
      type: 'match',
      label: 'இயற்கை - பொருத்துக',
      commonData: {
        title: 'இயற்கை - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `sun, சூரியன்
moon, நிலா
rain, மழை
star, நட்சத்திரம்
leaf, இலை`,

        `bird, பறவை
nest, கூடு
stone, கல்
tree, மரம்
world, உலகம்`,

        `forest, காடு
desert, பாலைவனம்
river, ஆறு
grassland, புல்வெளி
ocean, கடல்
valley, பள்ளத்தாக்கு`,

        `polar, துருவம்
volcano, எரிமலை
rainbow, வானவில்
waterfall, அருவி
dew, பனித்துளி`,

        `banyan tree, ஆலமரம்
palm tree, பனைமரம்
coconut tree, தென்னைமரம்
banana tree, வாழைமரம்
bamboo tree, மூங்கில்மரம்
touch-me-not, தொட்டாற் சிணுங்கி`,

        `banana leaf, வாழையிலை
neem leaf, வேப்பிலை
mango leaf, மாவிலை
coconut leaf, தென்னோலை
bone, எலும்பு
pebbles, கூழாங்கற்கள்`
      ]
    },
    {
      id: 'match-flowers',
      type: 'match',
      label: 'பூக்கள் - பொருத்துக',
      commonData: {
        title: 'பூக்கள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `rose, ரோஜா
lotus, தாமரை
sunflower, சூரியகாந்தி
hibiscus, செம்பருத்தி
mogra, குண்டு மல்லி`,

        `jasmine, முல்லை
water lily, அல்லி
marigold, சாமந்தி
bougainvillea, காகிதப்பூ
magnolia, செண்பகப்பூ
periwinkle, நித்தியகல்யாணிப்பூ`
      ]
    },
    {
      id: 'match-bodyparts',
      type: 'match',
      label: 'உடல் உறுப்புகள் - பொருத்துக',
      commonData: {
        title: 'உடல் உறுப்புகள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `ear, காது
eye, கண்
foot, பாதம்
hair, முடி
hand, கை
mouth, வாய்`,

        `nose, மூக்கு
tooth, பல்
forehead, நெற்றி
mustache, மீசை
beard, தாடி`
      ]
    }
  ]
};
