export default {
  label: 'ஓசை: உணவு வகைகள் - 2',
  id: 'ta-sound-6',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'fruits',
      label: 'பழங்கள்',
      data: {
        audio: 'ta/ta-fruits-foods-2.mp3',
        title: 'பழங்கள்: படமும் ஒலியும்',
        text: `sweet-potato|  சர்க்கரைவள்ளி கிழங்கு
        tapioca| மரவள்ளிக்கிழங்கு
        jamun| நாவல் பழம்
        pear| பேரிக்காய்
        wood-apple| விளாம்பழம்
        jujube| இலந்தைப்பழம்
        sapotta| சப்போட்டா
        fig| அத்திப்பழம்
        muskmelon| முலாம்பழம்`
      }
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'காய்கள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta/ta-vegetables-2.mp3'
      },
      data: [
        {
          text: `capsicum| குடைமிளகாய்
          cucumber| வெள்ளரிக்காய்
          corn| மக்காச்சோளம்
          broad-beans| அவரைக்காய்
          ridgegourd| பீர்க்கங்காய்
          ivygourd| கோவைக்காய்
          kohlrabi| நூல்கோல்
          snake-gourd| புடலங்காய்
          spring-onion| வெங்காயத்தாள்
          banana-stem| வாழைத்தண்டு`
        },
        {
          audioOffset: 20,
          text: `cluster-beans| கொத்தவரங்காய்
          beans| பீன்ஸ்
          fenugreek| வெந்தயக்கீரை
          drumstick-leaves| முருங்கைக்கீரை
          greenpeas| பச்சை பட்டாணி
          peanut| வேர்க்கடலை
          tulsi| துளசி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'foods',
      label: 'உணவு',
      commonData: {
        title: 'உணவு : படமும் ஒலியும்',
        audio: 'ta/ta-fruits-foods-2.mp3'
      },
      data: [
        {
          audioOffset: 18,
          text: `pajji| பஜ்ஜி
          fruits| பழங்கள்
          vegetables| காய்கறிகள்
          juice| பழச்சாறு
          sweets|இனிப்பு
          bread| ரொட்டி
          soup| சூப்
          ladoo| லட்டு
          murukku| முறுக்கு
          adirasam| அதிரசம்`
        },
        {
          audioOffset: 38,
          text: `lollipop| மிட்டாய்
            butter| வெண்ணெய்
            meat| இறைச்சி
            chicken| கோழிக்கறி
            cheese| பாலாடைக்கட்டி
            ellumittai| எள்ளுமிட்டாய்
            kadalai-mittai| கடலைமிட்டாய்
            soft-drink| குளிர்பானம்
            ice-cream| பனிக்கூழ்`
        },

        {
          audioOffset: 56,
          text: `malli| மல்லி
          seeragam| சீரகம்
          sombu| சோம்பு
          pattani| பட்டாணி
          mochai| மொச்சை
          urad-dhal| உளுந்து
          moong-dhal| பாசிப்பருப்பு
          toor-dhal| துவரம்பருப்பு
          kadalai-paruppu| கடலைப்பருப்பு
          chickpea| கொண்டைக்கடலை`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பழங்கள் - தேர்வு செய்க',
      id: 'pick-fruits',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-foods-2.mp3',
        words:
          'sweet-potato, tapioca, jamun, pear, wood-apple, jujube, sapotta, fig, muskmelon'
      }
    },
    {
      type: 'rightOne',
      label: 'காய்கள் - தேர்வு செய்க',
      id: 'pick-vegetables',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-vegetables-2.mp3'
      },
      data: [
        {
          words:
            'capsicum, cucumber, corn, broad-beans, ridgegourd, ivygourd, kohlrabi, snake-gourd, spring-onion, banana-stem'
        },
        {
          audioOffset: 20,
          words:
            'cluster-beans, beans, fenugreek, drumstick-leaves, greenpeas, peanut, tulsi'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'உணவு - தேர்வு செய்க',
      id: 'pick-foods',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-foods-2.mp3'
      },
      data: [
        {
          audioOffset: 18,
          words:
            'pajji, fruits, vegetables, juice, sweets, bread, soup, ladoo, murukku, adirasam'
        },
        {
          audioOffset: 38,
          text: `lollipop, butter, meat, chicken, cheese, ellumittai, kadalai-mittai, soft-drink, ice-cream`
        },

        {
          audioOffset: 56,
          words:
            'malli, seeragam, sombu, pattani, mochai, urad-dhal, moong-dhal, toor-dhal, kadalai-paruppu, chickpea'
        }
      ]
    }
  ]
};
