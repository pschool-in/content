export default {
  label: 'எழுதுக: இன்னும் சில சொற்கள்',
  id: 'ta-pic-words-8',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# பொருட்கள்`,
          {
            type: 'sitewords',
            text:
              'மோதிரம்,  மணி,  கோலம்,  பலூன்,  ஐந்து,  அரசன்,  பட்டம்,  ஏணி,  ஓடு,  சக்கரம், பூங்கா,  தோட்டம்,  ஔவை,  வில்,  அம்பு,  பம்பரம்,  குச்சி,  ஊதல்,  பெட்டி,  நாணயம், செங்கல்,  சிற்பம்,  அகல்விளக்கு,  சலங்கை,  நீரூற்று,  தூரிகை,  அறுகோணம்,  கிளை,  மருந்து, யாகம்,  நூல் கண்டு,  முனிவர்,  சுருக்குப்பை,  திரிசூலம்,  வானொலி,  பற்குச்சி,  பற்பசை,  தண்ணீர் தொட்டி',
            width: 115
          },
          `# உடல் உறுப்புகள்`,
          {
            type: 'sitewords',
            text: 'இதயம்,  மூளை,  நுரையீரல்,  வயிறு,  கல்லீரல்,  சிறுநீரகம்',
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
        fontSize: '1.5rem',
        audio: 'ta/ta-others-organs.mp3'
      },
      data: [
        {
          words:
            'மோதிரம்,  மணி,  கோலம்,  பலூன்,  ஐந்து,  அரசன்,  பட்டம்,  ஏணி,  ஓடு,  சக்கரம்'
        },
        {
          audioOffset: 20,
          words:
            'பூங்கா,  தோட்டம்,  ஔவை,  வில்,  அம்பு,  பம்பரம்,  குச்சி,  ஊதல்,  பெட்டி,  நாணயம்'
        },
        {
          audioOffset: 40,
          words:
            'செங்கல்,  சிற்பம்,  அகல்விளக்கு,  சலங்கை,  நீரூற்று,  தூரிகை,  அறுகோணம்,  கிளை,  மருந்து'
        },
        {
          audioOffset: 58,
          words:
            'யாகம்,  நூல் கண்டு,  முனிவர்,  சுருக்குப்பை,  திரிசூலம்,  வானொலி,  பற்குச்சி,  பற்பசை,  தண்ணீர் தொட்டி'
        },
        {
          audioOffset: 76,
          words: 'இதயம்,  மூளை,  நுரையீரல்,  வயிறு,  கல்லீரல்,  சிறுநீரகம்'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'ஓசை கேட்டு எழுதுக',
      id: 'dictation',
      commonData: {
        title: 'ஓசை கேட்டு எழுதுக',
        lang: 'ta',
        audio: 'ta/ta-others-organs.mp3'
      },
      data: [
        {
          words:
            'மோதிரம்,  மணி,  கோலம்,  பலூன்,  ஐந்து,  அரசன்,  பட்டம்,  ஏணி,  ஓடு,  சக்கரம்'
        },
        {
          audioOffset: 20,
          words:            'பூங்கா,  தோட்டம்,  ஔவை,  வில்,  அம்பு,  பம்பரம்,  குச்சி,  ஊதல்,  பெட்டி,  நாணயம்'
        },
        {
          audioOffset: 40,
          words:
            'செங்கல்,  சிற்பம்,  அகல்விளக்கு,  சலங்கை,  நீரூற்று,  தூரிகை,  அறுகோணம்,  கிளை,  மருந்து'
        },
        {
          audioOffset: 58,
          words:
            'யாகம்,  நூல்கண்டு,  முனிவர்,  சுருக்குப்பை,  திரிசூலம்,  வானொலி,  பற்குச்சி,  பற்பசை,  தண்ணீர் தொட்டி'
        },
        {
          audioOffset: 76,
          words: 'இதயம்,  மூளை,  நுரையீரல்,  வயிறு,  கல்லீரல்,  சிறுநீரகம்'
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
        `ring| மோதிரம்|____
        bell| மணி|__
        kolam| கோலம்|___
        balloon| பலூன்|___
        five| ஐந்து|___
        king| அரசன்|____`,
    
            `kite| பட்டம்|____
        ladder| ஏணி|__
        rooftile| ஓடு|__
        wheel| சக்கரம்|_____
        park| பூங்கா|___
        garden| தோட்டம்|____`,
    
            `auvai| ஔவை|__
        bow| வில்|__
        arrow| அம்பு|___
        top| பம்பரம்|_____
        stick| குச்சி|___
        whistle| ஊதல்|___`,
    
            `box| பெட்டி|___
        coin| நாணயம்|____
        brick| செங்கல்|____
        sculpture | சிற்பம்|____
        clay-lamp| அகல்விளக்கு|_______
        salangai| சலங்கை|____`,
    
            `fountain| நீரூற்று|____
        brush| தூரிகை|___
        hexagon| அறுகோணம்|_____
        twig| கிளை|__
        medicine| மருந்து|____
        yagna| யாகம்|___`,
    
            `yarn-ball| நூல்கண்டு|_____
        rishi| முனிவர்|____
        pouch| சுருக்குப்பை|______
        trident| திரிசூலம்|_____`,
    
            `radio| வானொலி|___
        toothbrush| பற்குச்சி|_____
        toothpaste| பற்பசை|____
        water-tower| தண்ணீர்தொட்டி|_______`
        `heart| இதயம்|____
        brain| மூளை|__
        lungs| நுரையீரல்|_____
        stomach| வயிறு|___
        liver| கல்லீரல்|_____
        kidney| சிறுநீரகம்|______`
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
        `ring, மோதிரம்
    bell, மணி
    kolam, கோலம்
    balloon, பலூன்
    five, ஐந்து
    king, அரசன்`,

        `kite, பட்டம்
    ladder, ஏணி
    rooftile, ஓடு
    wheel, சக்கரம்
    park, பூங்கா
    garden, தோட்டம்`,

        `auvai, ஔவை
    bow, வில்
    arrow, அம்பு
    top, பம்பரம்
    stick, குச்சி
    whistle, ஊதல்`,

        `box, பெட்டி
    coin, நாணயம்
    brick, செங்கல்
    sculpture , சிற்பம்
    clay-lamp, அகல்விளக்கு
    salangai, சலங்கை`,

        `fountain, நீரூற்று
    brush, தூரிகை
    hexagon, அறுகோணம்
    twig, கிளை
    medicine, மருந்து
    yagna, யாகம்`,

        `yarn-ball, நூல்கண்டு
    rishi, முனிவர்
    pouch, சுருக்குப்பை
    trident, திரிசூலம்`,

        `radio, வானொலி
    toothbrush, பற்குச்சி
    toothpaste, பற்பசை
    water-tower, தண்ணீர்தொட்டி`
    `heart, இதயம்
    brain, மூளை
    lungs, நுரையீரல்
    stomach, வயிறு
    liver, கல்லீரல்
    kidney, சிறுநீரகம்`         
      ]
    }
  ]
};
