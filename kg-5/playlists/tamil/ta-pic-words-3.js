export default {
  label: 'எழுதுக: இயற்கை',
  id: 'ta-pic-words-3',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# இயற்கை`,
          {
            type: 'sitewords',
            text:
              'சூரியன்,  நிலா,  மழை,  நட்சத்திரம்,  இலை,  பறவை,  கூடு,  கல்,  மரம்,  உலகம், காடு,  பாலைவனம்,  ஆறு,  புல்வெளி,  கடல்,  துருவம்,  பள்ளத்தாக்கு,  எரிமலை, ஆலமரம்,  பனைமரம்,  தென்னைமரம்,  வாழைமரம்,  மூங்கில்மரம்,  வானவில்,  அருவி,  பனித்துளி, வாழையிலை,  வேப்பிலை,  மாவிலை,  தென்னோலை,  தொட்டாற் சிணுங்கி,  எலும்பு துண்டு,  கூழாங்கற்கள்',
            width: 115
          },
          `# பூக்கள்`,
          {
            type: 'sitewords',
            text:
              'ரோஜா,  தாமரை,  சூரியகாந்தி,  செம்பருத்தி,  குண்டு மல்லி,  முல்லை,  அல்லி,  சாமந்தி,  டிசம்பர்,  சங்குப்பூ,  ஆவாரம்பூ,  எருக்கம்பூ,  இட்லிப்பூ,  கனகாம்பரம்,  குறிஞ்சிப்பூ,  நந்தியாவட்டம்,  பிச்சிப்பூ,  பூசணிப்பூ, பூவரசம்பூ,  தும்பைப்பூ,  வாடாமல்லி,  வேப்பம்பூ,  காகிதப்பூ,  செண்பகப்பூ,  நித்தியகல்யாணி',
            width: 115
          },
          `# உடல் உறுப்புகள்`,
          {
            type: 'sitewords',
            text:
              'காது,  கண்,  பாதம்,  முடி,  கை,  வாய்,  மூக்கு,  பல்,  நெற்றி,  மீசை,  தாடி',
            width: 115
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'ஓசை - வார்த்தை',
      id: 'sound',
      lockAfter: 2,
      commonData: {
        title: 'ஓசை கேட்டு வார்த்தைகளை அடையாளம் காண்க.',
        type: 'words',
        fontSize: '1.5rem'
      },
      data: [
        {
          audioOffset: 0,
          audio: 'ta/ta-nature.mp3',
          words:
            'சூரியன்,  நிலா,  மழை,  நட்சத்திரம்,  இலை,  பறவை,  கூடு,  கல்,  மரம்,  உலகம்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-nature.mp3',
          words:
            'காடு,  பாலைவனம்,  ஆறு,  புல்வெளி,  கடல்,  துருவம்,  பள்ளத்தாக்கு,  எரிமலை'
        },
        {
          audioOffset: 36,
          audio: 'ta/ta-nature.mp3',
          words:
            'ஆலமரம்,  பனைமரம்,  தென்னைமரம்,  வாழைமரம்,  மூங்கில்மரம்,  வானவில்,  அருவி,  பனித்துளி'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-nature.mp3',
          words:
            'வாழையிலை,  வேப்பிலை,  மாவிலை,  தென்னோலை,  தொட்டாற் சிணுங்கி,  எலும்பு துண்டு,  கூழாங்கற்கள்'
        },
        {
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'ரோஜா,  தாமரை,  சூரியகாந்தி,  செம்பருத்தி,  குண்டு மல்லி,  முல்லை,  அல்லி,  சாமந்தி,  டிசம்பர்,  சங்குப்பூ'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'ஆவாரம்பூ,  எருக்கம்பூ,  இட்லிப்பூ,  கனகாம்பரம்,  குறிஞ்சிப்பூ,  நந்தியாவட்டம்,  பிச்சிப்பூ,  பூசணிப்பூ'
        },
        {
          audioOffset: 36,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'பூவரசம்பூ,  தும்பைப்பூ,  வாடாமல்லி,  வேப்பம்பூ,  காகிதப்பூ,  செண்பகப்பூ,  நித்தியகல்யாணி'
        },
        {
          audioOffset: 50,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words: 'காது,  கண்,  பாதம்,  முடி,  கை,  வாய்'
        },
        {
          audioOffset: 62,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words: 'மூக்கு,  பல்,  நெற்றி,  மீசை,  தாடி'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'ஓசை கேட்டு எழுதுக',
      id: 'dictation',
      commonData: {
        title: 'ஓசை கேட்டு எழுதுக',
        lang: 'ta'
      },
      data: [
        {
          audioOffset: 0,
          audio: 'ta/ta-nature.mp3',
          words:
            'சூரியன்,  நிலா,  மழை,  நட்சத்திரம்,  இலை,  பறவை,  கூடு,  கல்,  மரம்,  உலகம்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-nature.mp3',
          words:
            'காடு,  பாலைவனம்,  ஆறு,  புல்வெளி,  கடல்,  துருவம்,  பள்ளத்தாக்கு,  எரிமலை'
        },
        {
          audioOffset: 36,
          audio: 'ta/ta-nature.mp3',
          words:
            'ஆலமரம்,  பனைமரம்,  தென்னைமரம்,  வாழைமரம்,  மூங்கில்மரம்,  வானவில்,  அருவி,  பனித்துளி'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-nature.mp3',
          words:
            'வாழையிலை,  வேப்பிலை,  மாவிலை,  தென்னோலை,  தொட்டாற்சிணுங்கி,  எலும்புத்துண்டு,  கூழாங்கற்கள்'
        },
        {
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'ரோஜா,  தாமரை,  சூரியகாந்தி,  செம்பருத்தி,  குண்டு மல்லி,  முல்லை,  அல்லி,  சாமந்தி,  டிசம்பர்,  சங்குப்பூ'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'ஆவாரம்பூ,  எருக்கம்பூ,  இட்லிப்பூ,  கனகாம்பரம்,  குறிஞ்சிப்பூ,  நந்தியாவட்டம்,  பிச்சிப்பூ,  பூசணிப்பூ'
        },
        {
          audioOffset: 36,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words:
            'பூவரசம்பூ,  தும்பைப்பூ,  வாடாமல்லி,  வேப்பம்பூ,  காகிதப்பூ,  செண்பகப்பூ,  நித்தியகல்யாணி'
        },
        {
          audioOffset: 50,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words: 'காது,  கண்,  பாதம்,  முடி,  கை,  வாய்'
        },
        {
          audioOffset: 62,
          audio: 'ta/ta-flowers-bodyParts.mp3',
          words: 'மூக்கு,  பல்,  நெற்றி,  மீசை,  தாடி'
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக',
      id: 'complete-words',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `sun| சூரியன்|____
              moon| நிலா|__
              rain| மழை|__
              star| நட்சத்திரம்|_______
              leaf| இலை|__
              bird| பறவை|___`,

        `nest| கூடு|__
              stone| கல்|__
              tree| மரம்|___
              world| உலகம்|____
              forest| காடு|__
              desert| பாலைவனம்|_____`,

        `river| ஆறு|__
        grassland| புல்வெளி|____
        ocean| கடல்|___
        polar| துருவம்|____
        valley| பள்ளத்தாக்கு|_______
        volcano| எரிமலை|____`,

        `banyan|    ஆலமரம்|_____
        palm-tree| பனைமரம்|_____
        coconut-tree| தென்னைமரம்|______
        banana-tree| வாழைமரம்|_____
        bamboo-tree| மூங்கில்மரம்|_______
        rainbow| வானவில்|____`,

        `waterfall| அருவி|___
        dew| பனித்துளி|_____
        bananaleaf| வாழையிலை|____
        neemleaf| வேப்பிலை|____
        mangoleaf| மாவிலை|___
        coconutleaf| தென்னோலை|____`,

        `touch-me-not| தொட்டாற்சிணுங்கி|________
        bone| எலும்புத்துண்டு|________
        pebbles| கூழாங்கற்கள்|________`,
        
        `rose| ரோஜா|__
        lotus| தாமரை|___
        sunflower| சூரியகாந்தி|______
        hibiscus| செம்பருத்தி|______
        mogra| குண்டுமல்லி|_______
        jasmine| முல்லை|___`,

        `water-lily| அல்லி|___
        marigold| சாமந்தி|____
        december| டிசம்பர்|_____
        sangupoo| சங்குப்பூ|_____
        aavarampoo| ஆவாரம்பூ|_____
        erukkampoo| எருக்கம்பூ|______`,

        `idlipoo| இட்லிப்பூ|_____
        kanagamaram| கனகாம்பரம்|_______
        kurinchipoo| குறிஞ்சிப்பூ|______
        nandiyaavattampoo| நந்தியாவட்டம்|________
        pichipoo| பிச்சிப்பூ|_____
        poosanipoo| பூசணிப்பூ|_____`,

        `poovarasampoo| பூவரசம்பூ|______
        thumbaipoo| தும்பைப்பூ|_____
        vaadamalli| வாடாமல்லி|_____
        veepampoo| வேப்பம்பூ|_____`,

        `bougainvillea| காகிதப்பூ|_____
        magnolia| செண்பகப்பூ|______
        periwinkle| நித்தியகல்யாணி|________`,

        `ear| காது|__
        eye| கண்|__
        foot| பாதம்|___
        hair| முடி|__
        hand| கை|_
        mouth| வாய்|__`,
        
                `nose| மூக்கு|___
        tooth| பல்|__
        forehead| நெற்றி|___
        mustache| மீசை|__
        beard| தாடி|__`
      ]
    },
    {
      type: 'connectLetters',
      label: 'எழுத்துக்களை இணைக்கவும்',
      id: 'connect-words',
      commonData: {
        title: 'எழுத்துக்களை இணைத்து சொல் உருவாக்குக ',
        printTitle: 'Form the word using the letters.',
        type: 'image',
        lang: 'ta',
        fontSize: '1rem'
      },
      data: [
        `sun, சூரியன்
        moon, நிலா
        rain, மழை
        star, நட்சத்திரம்
        leaf, இலை
        bird, பறவை`,

  `nest, கூடு
        stone, கல்
        tree, மரம்
        world, உலகம்
        forest, காடு
        desert, பாலைவனம்`,

  `river, ஆறு
  grassland, புல்வெளி
  ocean, கடல்
  polar, துருவம்
  valley, பள்ளத்தாக்கு
  volcano, எரிமலை`,

  `banyan,    ஆலமரம்
  palm-tree, பனைமரம்
  coconut-tree, தென்னைமரம்
  banana-tree, வாழைமரம்
  bamboo-tree, மூங்கில்மரம்
  rainbow, வானவில்`,

  `waterfall, அருவி
  dew, பனித்துளி
  bananaleaf, வாழையிலை
  neemleaf, வேப்பிலை
  mangoleaf, மாவிலை
  coconutleaf, தென்னோலை`,

  `touch-me-not, தொட்டாற்சிணுங்கி
  bone, எலும்புத்துண்டு
  pebbles, கூழாங்கற்கள்`,

  `rose, ரோஜா
  lotus, தாமரை
  sunflower, சூரியகாந்தி
  hibiscus, செம்பருத்தி
  mogra, குண்டுமல்லி
  jasmine, முல்லை`,

  `water-lily, அல்லி
  marigold, சாமந்தி
  december, டிசம்பர்
  sangupoo, சங்குப்பூ
  aavarampoo, ஆவாரம்பூ
  erukkampoo, எருக்கம்பூ`,

  `idlipoo, இட்லிப்பூ
  kanagamaram, கனகாம்பரம்
  kurinchipoo, குறிஞ்சிப்பூ
  nandiyaavattampoo, நந்தியாவட்டம்
  pichipoo, பிச்சிப்பூ
  poosanipoo, பூசணிப்பூ`,

  `poovarasampoo, பூவரசம்பூ
  thumbaipoo, தும்பைப்பூ
  vaadamalli, வாடாமல்லி
  veepampoo, வேப்பம்பூ`,

  `bougainvillea, காகிதப்பூ
  magnolia, செண்பகப்பூ
  periwinkle, நித்தியகல்யாணி`,

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
