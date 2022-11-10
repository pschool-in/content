export default {
  label: 'உணவு வகைகள்',
  id: 'ta-picture-2',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'பழங்கள்',
      id: 'drag-drop-fruits1',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
    `jackfruit| பலாப்பழம்
    mango| மாம்பழம்
    banana| வாழைப்பழம்
    guava| கொய்யாப்பழம்
    grapes| திராட்சை
    orange| ஆரஞ்சு`,

` papaya| பப்பாளி
pineapple| அன்னாசிப்பழம் 
watermelon| தர்பூசணி
sugarcane| கரும்பு
gooseberry| நெல்லிக்காய்`,

`apple| ஆப்பிள்
pomegranate| மாதுளை
lemon| எலுமிச்சம்
custard-apple| சீதாப்பழம்
dates| பேரிச்சம்பழம்`,
    ]
  },
      {
        type: 'dragDropImgLabel',
        label: 'காய்கள்',
        id: 'drag-drop-vegetables',
        commonData: {
          title: 'படங்களுடன் பெயரைப் பொருத்துக'
        },
        data: [  
    `onion| வெங்காயம்
    tomato| தக்காளி
    brinjal| கத்திரி
    raw-banana| வாழைக்காய்
    garlic| பூண்டு
    ginger| இஞ்சி`,

    `radish| முள்ளங்கி
    bitter-gourd| பாகற்காய்
    banana-flower| வாழைப்பூ
    bottlegourd|சுரைக்காய்
    carrot| காரட்
    beetroot| பீட்ரூட்`,

    `cabbage| முட்டைகோசு
    potato| உருளைக்கிழங்கு
    coconut| தேங்காய்
    ladies-finger| வெண்டைக்காய்
    drumstick| முருங்கைக்காய்
    tamarind| புளி`,

        `mushroom| காளான்
        elephant-yam| சேனைக்கிழங்கு
        chilli| பச்சைமிளகாய்
    curryleaf| கருவேப்பிலை
    corianderleaf| கொத்தமல்லி`,

    `mintleaf| புதினா
    spinach| கீரை
    turmeric| மஞ்சள்
    pumpkin| பரங்கிக்காய்
    ashgourd| பூசணிக்காய்`,
        ]
      },
    {
      type: 'dragDropImgLabel',
      label: 'உணவு',
      id: 'drag-drop-food',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `food| உணவு
        milk| பால்
        idly| இட்லி
        dosai| தோசை
        pongal| பொங்கல்
        vadai| வடை`,

        `puttu-rice| புட்டு
        idiyappam| இடியாப்பம்
        porotta| புரோட்டா
        egg| முட்டை
        almond| பாதாம்
cashewnut| முந்திரி`,    
   
`rice|அரிசி
salt| உப்பு
flour| மாவு
wheat| கோதுமை
paddy| நெல்
pepper| மிளகு`
  ]
},
{
  id: 'match-fruit',
  type: 'match',
  label: 'பொருத்துக : பழங்கள்',
  commonData: {
    title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
    rightImgType: 'custom',
    big: true
  },
  data: [
     `ப, jackfruit
     மா, mango
     வா, banana
     கொ, guava`,
     
     `தி, grapes
     ஆ, orange
     ப, papaya
  அ, pineapple`,

  `ஆ, apple
  மா, pomegranate
  த, watermelon
  க, sugarcane`,

  `நெ, gooseberry
  எ, lemon 
  சீ, custard-apple
  பே, dates`,
  ]
},
{
  id: 'match-vegetables',
  type: 'match',
  label: 'பொருத்துக : காய்கள்',
  commonData: {
    title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
    rightImgType: 'custom',
    big: true
  },
  data: [          
  `வெ, onion
  த, tomato
  க, brinjal
  வா, raw-banana
  பூ, garlic
  இ, ginger`,

  `மு, radish
  பா, bitter-gourd
  வா, banana-flower
  சு, bottlegourd
  கா, carrot
  பீ, beetroot`,

  `மு, cabbage
  உ, potato
  தே, coconut
  வெ, ladies-finger
  மு,drumstick
  பு, tamarind`,

`கா, mushroom
சே, elephant-yam
ப, chilli
க, curryleaf
கொ, corianderleaf`,

`பு, mintleaf
கீ, spinach
ம, turmeric
ப, pumpkin
பூ, ashgourd`,
  ]
},
{
  id: 'match-food',
  type: 'match',
  label: 'பொருத்துக : உணவு',
  commonData: {
    title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
    rightImgType: 'custom',
    big: true
  },
  data: [
    `உ, food
    பா, milk
    இ, idly
    தோ, dosai
    மு, egg
    வ, vadai`,

    `பு, puttu-rice
    இ, idiyappam
    மா, flour 
    பொ, pongal
    பா, almond
மு, cashewnut`,

`அ, rice
உ, salt
பு, porotta
கோ, wheat
நெ, paddy
மி, pepper`]
  },
  {
    type: 'completeWord',
    label: 'நிரப்புக: பழங்கள்',
    id: 'complete-fruits',
    commonData: {
      images: 'custom',
      lang: 'ta',
      title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
    },
    data: [
      `jackfruit| பலாப்பழம்| _லாப்பழம்| ப,க, த,வ 
      mango| மாம்பழம்| _ம்பழம்| மா,வா,கொ,லா
      banana| வாழைப்பழம்| _ழைப்பழம்| வா,தா,பா,கா 
      guava| கொய்யாப்பழம்| _ய்யாப்பழம்| கொ,மா, ரா, தா 
      grapes| திராட்சை| _ராட்சை| தி,கி,மி,சி  
      orange| ஆரஞ்சு| _ரஞ்சு| ஆ,அ,ஈ,ஏ `,
  
  ` papaya| பப்பாளி| _ப்பாளி| ப,ந,ர,வ 
  pineapple| அன்னாசிப்பழம் |_ன்னாசிப்பழம்| அ,ஆ,ஈ,ஏ
  watermelon| தர்பூசணி| _ர்பூசணி| த,ப,ந,வ
  sugarcane| கரும்பு|_ரும்பு| க,ப,த,வ 
  gooseberry| நெல்லிக்காய்|_ல்லிக்காய்| நெ,வெ,கெ,பெ`,
  
  `apple| ஆப்பிள்| _ப்பிள்| ஆ,அ,எ,ஏ
  pomegranate| மாதுளை| _துளை| மா,தா,பா,கா 
  lemon| எலுமிச்சம்| _லுமிச்சம்| எ,எ,அ,இ 
  custard-apple| சீதாப்பழம்| _தாப்பழம்| சீ,தீ,பீ,கீ 
  dates| பேரிச்சம்பழம்| _ரிச்சம்பழம்| பே,வே, கே,மே`
  ]
  },
  {
    type: 'completeWord',
    label: 'நிரப்புக: காய்கள்',
    id: 'complete-vegetables',
    commonData: {
      images: 'custom',
      lang: 'ta',
      title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
    },
    data: [
      `onion| வெங்காயம்| _ங்காயம்| வெ,கெ, பெ, மெ
      tomato| தக்காளி| _க்காளி| த,ந,ர, வ 
      brinjal| கத்திரி| _த்திரி| க,கா, ச, சா 
      raw-banana| வாழைக்காய்| _ழைக்காய்| வா,பா,கா,தா
      garlic| பூண்டு| _ண்டு| பூ,மூ,கூ,தூ
      ginger| இஞ்சி| _ஞ்சி| இ,ஆ,ஈ,ஏ `,
  
      `radish| முள்ளங்கி| _ள்ளங்கி| மு,சு,பு,நு
      bitter-gourd| பாகற்காய்| _கற்காய்| பா,கா,தா,வா
      banana-flower| வாழைப்பூ| _ழைப்பூ| வா,கோ,கா,தா
      bottlegourd|சுரைக்காய்|_ரைக்காய்|சு,மு,பு, நு
      carrot| காரட்| _ரட்| கா,பா,தா,வா
      beetroot| பீட்ரூட்| _ட்ரூட்| பீ,தீ,சீ, கீ`,
  
      `cabbage| முட்டைகோசு| _ட்டைகோசு| மு,பு,கு,து
      potato| உருளைக்கிழங்கு| _ருளைக்கிழங்கு| உ,ஊ,ஓ,ஒள  
      coconut| தேங்காய்| _ங்காய்| தே,சே,வெ,வே
      ladies-finger| வெண்டைக்காய்| _ண்டைக்காய்|வெ,கெ,பெ,மெ
      drumstick| முருங்கைக்காய்| _ருங்கைக்காய்| மு,கு,பூ,மூ
      tamarind| புளி| _ளி| பு,ப,மு,கு`,
  
          `mushroom| காளான்| _ளான்| கா,தா, பா, மா
          elephant-yam| சேனைக்கிழங்கு|_னைக்கிழங்கு| சே,தே,தெ,கே 
          chilli| பச்சைமிளகாய்| _ச்சைமிளகாய்| ப,ச,க,ம
      curryleaf| கருவேப்பிலை| _ருவேப்பிலை| க,ச,ப,ம
      corianderleaf| கொத்தமல்லி| _த்தமல்லி| கொ,சொ,தொ,பொ      `,
  
      `mintleaf| புதினா| _தினா| பு,கு,சு,து  
      spinach| கீரை| _ரை| கீ,தீ,பீ,சீ  
      turmeric| மஞ்சள்| _ஞ்சள்| ம,ர, மா, பா
      pumpkin| பரங்கிக்காய்| _ரங்கிக்காய்| ப,ச, க,ம
      ashgourd| பூசணிக்காய்| _சணிக்காய்| பூ,தூ,கூ, மூ`
    ]
  },
  {
    type: 'completeWord',
    label: 'நிரப்புக: உணவு',
    id: 'complete-cereals',
    commonData: {
      images: 'custom',
      lang: 'ta',
      title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
    },
    data: [
      `food| உணவு| _ணவு| உ,ஊ, ஓ, ஒள  
      milk| பால்| _ல்| பா,மா, ரா, தா 
      idly| இட்லி| _ட்லி| இ,ஈ,ய், யி  
      dosai| தோசை| _சை| தோ,நோ ,கோ போ
      pongal| பொங்கல்| _ங்கல்| பொ,சொ, கொ,தொ
      vadai| வடை| _டை| வ,ர,ம,ப `,

      `puttu-rice| புட்டு|_ட்டு| பு,மு,கு,சு
      idiyappam| இடியாப்பம்| _டியாப்பம்| இ,ஆ,ஈ,ஏ 
      porotta| புரோட்டா| _ரோட்டா| பு,மு,சு,து
      egg| முட்டை| _ட்டை| மு,பு,நு,கு
      almond| பாதாம்| _தாம்| பா,மா,தா,கா
    cashewnut| முந்திரி| _ந்திரி| மு,பு,நு,சு`,
    
    `rice|அரிசி|_ரிசி|அ,ம,ப,த
    salt| உப்பு| _ப்பு| உ,ம,ப,அ
    flour| மாவு| _வு| மா,பா,தா,கா
  paddy| நெல்| _ல்| நெ,தே, தெ, சே
  wheat| கோதுமை| _துமை| கோ, தோ ,நோ ,போ
  pepper| மிளகு| _ளகு| மி,நி,சி,தி`
    ]
  }
  ]
};
