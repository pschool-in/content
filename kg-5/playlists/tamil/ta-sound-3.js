export default {
  label: 'ஓசை: இயற்கை',
  id: 'ta-sound-3',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'nature',
      label: 'இயற்கை',
      commonData: {
        audio: 'ta/ta-nature.mp3',
        title: 'இயற்கை : படமும் ஒலியும்'
      },
      data: [
        {
          text: `sun| சூரியன்
          moon| நிலா
          rain| மழை
          star| நட்சத்திரம்
          leaf| இலை
          bird| பறவை
          nest| கூடு
          stone| கல்
          tree| மரம்
          world| உலகம்`
        },
        {
          audioOffset: 20,
          text: `forest| காடு
          desert| பாலைவனம்
          river| ஆறு
          grassland| புல்வெளி
          ocean| கடல்
          polar| துருவம்
          valley| பள்ளத்தாக்கு
          volcano| எரிமலை`
        },
        {
          audioOffset: 36,
          text: `banyan| ஆலமரம்
          palm-tree| பனைமரம்
          coconut-tree| தென்னைமரம்
          banana-tree| வாழைமரம்
          bamboo-tree| மூங்கில்மரம்
          rainbow| வானவில்
          waterfall| அருவி
          dew| பனித்துளி`
        },
        {
          audioOffset: 52,
          text: `bananaleaf| வாழையிலை
            neemleaf| வேப்பிலை
            mangoleaf| மாவிலை
            coconutleaf| தென்னோலை
            touch-me-not| தொட்டாற் சிணுங்கி
            bone| எலும்பு துண்டு
            pebbles| கூழாங்கற்கள்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'பூக்கள்',
      commonData: {
        audio: 'ta/ta-flowers-bodyParts.mp3',
        title: 'பூக்கள் : படமும் ஒலியும்'
      },
      data: [
        {
          text: `rose| ரோஜா
          lotus| தாமரை
          sunflower| சூரியகாந்தி
          hibiscus| செம்பருத்தி
          mogra| குண்டு மல்லி
          jasmine| முல்லை
          water-lily| அல்லி
          marigold| சாமந்தி
          december| டிசம்பர்
          sangupoo| சங்குப்பூ`
        },
        {
          audioOffset: 20,
          text: `aavarampoo| ஆவாரம்பூ
          erukkampoo| எருக்கம்பூ
          idlipoo| இட்லிப்பூ
          kanagamaram| கனகாம்பரம்
          kurinchipoo| குறிஞ்சிப்பூ
          nandiyaavattampoo| நந்தியாவட்டம்
          pichipoo| பிச்சிப்பூ
          poosanipoo| பூசணிப்பூ`
        },
        {
          audioOffset: 36,
          text: `poovarasampoo| பூவரசம்பூ
            thumbaipoo| தும்பைப்பூ
            vaadamalli| வாடாமல்லி
            veepampoo| வேப்பம்பூ
            bougainvillea| காகிதப்பூ
            magnolia| செண்பகப்பூ
            periwinkle| நித்தியகல்யாணிப்பூ`
        }
      ]
    },
    {
      type: 'slides',
      id: 'bodyparts',
      label: 'உடல் உறுப்புகள்',
      commonData: {
        audio: 'ta/ta-flowers-bodyParts.mp3',
        title: 'உடல் உறுப்புகள் : படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 50,
          text: `ear| காது
          eye| கண்
          foot| பாதம்
          hair| முடி
          hand| கை
          mouth| வாய்`
        },
        {
          audioOffset: 62,
          text: `nose| மூக்கு
          tooth| பல்
          forehead| நெற்றி
          mustache| மீசை
          beard| தாடி`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'இயற்கை - தேர்வு செய்க',
      id: 'pick-nature',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-nature.mp3'
      },
      data: [
        {
          words: 'sun, moon, rain, star, leaf, bird, nest, stone, tree, world'
        },
        {
          audioOffset: 20,
          words: `forest, desert, river, grassland, ocean, polar, valley, volcano`
        },
        {
          audioOffset: 36,
          words:
            'banyan, palm-tree, coconut-tree, banana-tree, bamboo-tree, rainbow, waterfall, dew'
        },
        {
          audioOffset: 52,
          words:
            'bananaleaf, neemleaf, mangoleaf, coconutleaf, touch-me-not, bone, pebbles'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பூக்கள் - தேர்வு செய்க',
      id: 'pick-flowers',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-flowers-bodyParts.mp3'
      },
      data: [
        {
          words:
            'rose, lotus, sunflower, hibiscus, mogra, jasmine, water-lily, marigold, december, sangupoo'
        },
        {
          audioOffset: 20,
          words: `aavarampoo, erukkampoo, idlipoo, kanagamaram, kurinchipoo, nandiyaavattampoo, pichipoo, poosanipoo`
        },
        {
          audioOffset: 36,
          words: `poovarasampoo, thumbaipoo, vaadamalli, veepampoo, bougainvillea, magnolia, periwinkle`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'உடல் உறுப்புகள் - தேர்வு செய்க',
      id: 'pick-bodyparts',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-flowers-bodyParts.mp3'
      },
      data: [
        {
          audioOffset: 50,
          words: 'ear, eye, foot, hair, hand, mouth'
        },
        {
          audioOffset: 62,
          words: `nose, tooth, forehead, mustache, beard`
        }
      ]
    }
  ]
};
