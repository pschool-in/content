export default {
  label: 'எழுதுக:  உணவு வகைகள்',
  id: 'ta-pic-words-2',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# பழங்கள்`,
          {
            type: 'sitewords',
            text:
              'பலாப்பழம்,  மாம்பழம்,  வாழைப்பழம்,  கொய்யாப்பழம்,  திராட்சை,  ஆரஞ்சு,  பப்பாளி,  அன்னாசிப்பழம், ஆப்பிள்,  மாதுளை,  தர்பூசணி,  கரும்பு,  நெல்லிக்காய்,  எலுமிச்சம்,  சீதாப்பழம்,  பேரிச்சம்பழம்',
            width: 115
          },
          `# காய்கள்`,
          {
            type: 'sitewords',
            text:
              'வெங்காயம்,  தக்காளி,  கத்திரி,  வாழைக்காய்,  பூண்டு,  இஞ்சி,  முள்ளங்கி,  பாகற்காய்,  வாழைப்பூ,  சுரைக்காய், காரட்,  பீட்ரூட்,  முட்டைகோசு,  உருளைக்கிழங்கு,  தேங்காய்,  வெண்டைக்காய்,  முருங்கைக்காய்,  புளி,  காளான்,  சேனைக்கிழங்கு, பச்சைமிளகாய்,  கருவேப்பிலை,  கொத்தமல்லி,  புதினா,  கீரை,  மஞ்சள்,  பரங்கிக்காய்,  பூசணிக்காய்',
            width: 115
          },
          `# உணவு`,
          {
            type: 'sitewords',
            text:
              ' உணவு,  பால்,  இட்லி,  தோசை,  பொங்கல்,  வடை,  புட்டு,  இடியாப்பம்,  புரோட்டா,  முட்டை, பாதாம்,  முந்திரி, அரிசி,  உப்பு,  மாவு,  நெல்,  கோதுமை,  மிளகு',
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
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            'பலாப்பழம்,  மாம்பழம்,  வாழைப்பழம்,  கொய்யாப்பழம்,  திராட்சை,  ஆரஞ்சு,  பப்பாளி,  அன்னாசிப்பழம்'
        },
        {
          audioOffset: 16,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            ' ஆப்பிள்,  மாதுளை,  தர்பூசணி,  கரும்பு,  நெல்லிக்காய்,  எலுமிச்சம்,  சீதாப்பழம்,  பேரிச்சம்பழம்'
        },
        {
          audioOffset: 0,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'வெங்காயம்,  தக்காளி,  கத்திரி,  வாழைக்காய்,  பூண்டு,  இஞ்சி,  முள்ளங்கி,  பாகற்காய்,  வாழைப்பூ,  சுரைக்காய்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'காரட்,  பீட்ரூட்,  முட்டைகோசு,  உருளைக்கிழங்கு,  தேங்காய்,  வெண்டைக்காய்,  முருங்கைக்காய்,  புளி,  காளான்,  சேனைக்கிழங்கு'
        },
        {
          audioOffset: 40,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'பச்சைமிளகாய்,  கருவேப்பிலை,  கொத்தமல்லி,  புதினா,  கீரை,  மஞ்சள்,  பரங்கிக்காய்,  பூசணிக்காய்'
        },
        {
          audioOffset: 32,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            ' உணவு,  பால்,  இட்லி,  தோசை,  பொங்கல்,  வடை,  புட்டு,  இடியாப்பம்,  புரோட்டா,  முட்டை'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            'பாதாம்,  முந்திரி, அரிசி,  உப்பு,  மாவு,  நெல்,  கோதுமை,  மிளகு'
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
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            'பலாப்பழம்,  மாம்பழம்,  வாழைப்பழம்,  கொய்யாப்பழம்,  திராட்சை,  ஆரஞ்சு,  பப்பாளி,  அன்னாசிப்பழம்'
        },
        {
          audioOffset: 16,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            ' ஆப்பிள்,  மாதுளை,  தர்பூசணி,  கரும்பு,  நெல்லிக்காய்,  எலுமிச்சம்,  சீதாப்பழம்,  பேரிச்சம்பழம்'
        },
        {
          audioOffset: 0,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'வெங்காயம்,  தக்காளி,  கத்திரி,  வாழைக்காய்,  பூண்டு,  இஞ்சி,  முள்ளங்கி,  பாகற்காய்,  வாழைப்பூ,  சுரைக்காய்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'காரட்,  பீட்ரூட்,  முட்டைகோசு,  உருளைக்கிழங்கு,  தேங்காய்,  வெண்டைக்காய்,  முருங்கைக்காய்,  புளி,  காளான்,  சேனைக்கிழங்கு'
        },
        {
          audioOffset: 40,
          audio: 'ta/ta-vegetables.mp3',
          words:
            'பச்சைமிளகாய்,  கருவேப்பிலை,  கொத்தமல்லி,  புதினா,  கீரை,  மஞ்சள்,  பரங்கிக்காய்,  பூசணிக்காய்'
        },
        {
          audioOffset: 32,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            ' உணவு,  பால்,  இட்லி,  தோசை,  பொங்கல்,  வடை,  புட்டு,  இடியாப்பம்,  புரோட்டா,  முட்டை'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-fruits-foods.mp3',
          words:
            'பாதாம்,  முந்திரி, அரிசி,  உப்பு,  மாவு,  நெல்,  கோதுமை,  மிளகு'
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
        `jackfruit| பலாப்பழம்|______
        mango| மாம்பழம்|_____
        banana| வாழைப்பழம்|______
        guava| கொய்யாப்பழம்|_______
        grapes| திராட்சை|____
        orange| ஆரஞ்சு|____`,
    
    ` papaya| பப்பாளி|____
    pineapple| அன்னாசிப்பழம்|________ 
    watermelon| தர்பூசணி|_____
    sugarcane| கரும்பு|____
    gooseberry| நெல்லிக்காய்|______`,
    
    `apple| ஆப்பிள்|____
    pomegranate| மாதுளை|___
    lemon| எலுமிச்சம்|______
    custard-apple| சீதாப்பழம்|______
    dates| பேரிச்சம்பழம்|________`,

    `onion| வெங்காயம்|_____
    tomato| தக்காளி|____
    brinjal| கத்திரி|____
    raw-banana| வாழைக்காய்|_____
    garlic| பூண்டு|___
    ginger| இஞ்சி|___`,

    `radish| முள்ளங்கி|_____
    bitter-gourd| பாகற்காய்|_____
    banana-flower| வாழைப்பூ|____
    bottlegourd|சுரைக்காய்|_____
    carrot| காரட்|___
    beetroot| பீட்ரூட்|____`,

    `cabbage| முட்டைகோசு|_____
    potato| உருளைக்கிழங்கு|________
    coconut| தேங்காய்|____
    ladies-finger| வெண்டைக்காய்|______
    drumstick| முருங்கைக்காய்|_______
    tamarind| புளி|__`,

        `mushroom| காளான்|___
        elephant-yam| சேனைக்கிழங்கு|_______
        chilli| பச்சைமிளகாய்|_______
    curryleaf| கருவேப்பிலை|______
    corianderleaf| கொத்தமல்லி|______`,

    `mintleaf| புதினா|___
    spinach| கீரை|__
    turmeric| மஞ்சள்|____
    pumpkin| பரங்கிக்காய்|_______
    ashgourd| பூசணிக்காய்|______`,

    `food| உணவு|___
    milk| பால்|__
    idly| இட்லி|___
    dosai| தோசை|__
    pongal| பொங்கல்|____
    vadai| வடை|__`,

    `puttu-rice| புட்டு|___
    idiyappam| இடியாப்பம்|______
    porotta| புரோட்டா|____
    egg| முட்டை|___
    almond| பாதாம்|___
cashewnut| முந்திரி|____`,    

`rice|அரிசி|___
salt| உப்பு|___
flour| மாவு|__
wheat| கோதுமை|___
paddy| நெல்|__
pepper| மிளகு|___`
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
        `jackfruit, பலாப்பழம்
        mango, மாம்பழம்
        banana, வாழைப்பழம்
        guava, கொய்யாப்பழம்
        grapes, திராட்சை
        orange, ஆரஞ்சு`,
    
    ` papaya, பப்பாளி
    pineapple, அன்னாசிப்பழம் 
    watermelon, தர்பூசணி
    sugarcane, கரும்பு
    gooseberry, நெல்லிக்காய்`,
    
    `apple, ஆப்பிள்
    pomegranate, மாதுளை
    lemon, எலுமிச்சம்
    custard-apple, சீதாப்பழம்
    dates, பேரிச்சம்பழம்`,

        `onion, வெங்காயம்
        tomato, தக்காளி
        brinjal, கத்திரி
        raw-banana, வாழைக்காய்
        garlic, பூண்டு
        ginger, இஞ்சி`,
    
        `radish, முள்ளங்கி
        bitter-gourd, பாகற்காய்
        banana-flower, வாழைப்பூ
        bottlegourd,சுரைக்காய்
        carrot, காரட்
        beetroot, பீட்ரூட்`,
    
        `cabbage, முட்டைகோசு
        potato, உருளைக்கிழங்கு
        coconut, தேங்காய்
        ladies-finger, வெண்டைக்காய்
        drumstick, முருங்கைக்காய்
        tamarind, புளி`,
    
            `mushroom, காளான்
            elephant-yam, சேனைக்கிழங்கு
            chilli, பச்சைமிளகாய்
        curryleaf, கருவேப்பிலை
        corianderleaf, கொத்தமல்லி`,
    
        `mintleaf, புதினா
        spinach, கீரை
        turmeric, மஞ்சள்
        pumpkin, பரங்கிக்காய்
        ashgourd, பூசணிக்காய்`,      
      
        `food, உணவு
        milk, பால்
        idly, இட்லி
        dosai, தோசை
        pongal, பொங்கல்
        vadai, வடை`,

        `puttu-rice, புட்டு
        idiyappam, இடியாப்பம்
        porotta, புரோட்டா
        egg, முட்டை
        almond, பாதாம்
cashewnut, முந்திரி`,    
   
`rice,அரிசி
salt, உப்பு
flour, மாவு
wheat, கோதுமை
paddy, நெல்
pepper, மிளகு`

      ]
    }
  ]
};
