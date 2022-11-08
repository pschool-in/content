export default {
  label: 'ஓசை: இன்னும் சில சொற்கள்',
  id: 'ta-sound-8',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'things',
      label: 'பொருட்கள்',
      commonData: {
        audio: 'ta/ta-others-organs.mp3',
        title: 'பொருட்கள் : படமும் ஒலியும்'
      },
      data: [
        {
          text: `ring| மோதிரம்
          bell| மணி
          kolam| கோலம்
          balloon| பலூன்
          five| ஐந்து
          king| அரசன்
          kite| பட்டம்
          ladder| ஏணி
          rooftile| ஓடு
          wheel| சக்கரம்`
        },
        {
          audioOffset: 20,
          text: `park| பூங்கா
          garden| தோட்டம்
          auvai| ஔவை
          bow| வில்
          arrow| அம்பு
          top| பம்பரம்
          stick| குச்சி
          whistle| ஊதல்
          box| பெட்டி
          coin| நாணயம்`
        },
        {
          audioOffset: 40,
          text: `brick| செங்கல்
          sculpture | சிற்பம்
          clay-lamp| அகல்விளக்கு
          salangai| சலங்கை
          fountain| நீரூற்று
          brush| தூரிகை
          hexagon| அறுகோணம்
          twig| கிளை
          medicine| மருந்து`
        },
        {
          audioOffset: 58,
          text: `yagna| யாகம்
            yarn-ball| நூல் கண்டு
            rishi| முனிவர்
            pouch| சுருக்குப்பை
            trident| திரிசூலம்
            radio| வானொலி
            toothbrush| பற்குச்சி
            toothpaste| பற்பசை
            water-tower| தண்ணீர் தொட்டி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'organs',
      label: 'உடல் உறுப்புகள்',
      data: {
        title: 'உடல் உறுப்புகள் : படமும் ஒலியும்',
        audio: 'ta/ta-others-organs.mp3',
        audioOffset: 76,
        text: `heart| இதயம்
        brain| மூளை
        lungs| நுரையீரல்
        stomach| வயிறு
        liver| கல்லீரல்
        kidney| சிறுநீரகம்`
      }
    },
    {
      type: 'rightOne',
      label: 'பொருட்கள் - தேர்வு செய்க',
      id: 'pick-things',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-others-organs.mp3'
      },
      data: [
        {
          words:
            'ring, bell, kolam, balloon, five, king, kite, ladder, rooftile, wheel'
        },
        {
          audioOffset: 20,
          words: `park, garden, auvai, bow, arrow, top, stick, whistle, box, coin`
        },
        {
          audioOffset: 40,
          words:
            'brick, sculpture , clay-lamp, salangai, fountain, brush, hexagon, twig, medicine'
        },
        {
          audioOffset: 58,
          words:
            'yagna, yarn-ball, rishi, pouch, trident, radio, toothbrush, toothpaste, water-tower'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'உடல் உறுப்புகள் - தேர்வு செய்க',
      id: 'pick-organs',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-others-organs.mp3',
        audioOffset: 76,
        words: 'heart, brain, lungs, stomach, liver, kidney'
      }
    }
  ]
};
