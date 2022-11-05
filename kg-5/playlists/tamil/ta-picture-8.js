export default {
  label: 'இன்னும் சில சொற்கள்',
  id: 'ta-picture-8',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'இன்னும் சில சொற்கள்',
      id: 'drag-drop-words',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [

    `ring| மோதிரம்
    bell| மணி
    kolam| கோலம்
    balloon| பலூன்
    five| ஐந்து
    king| அரசன்`,

      `kite| பட்டம்
    ladder| ஏணி
    rooftile| ஓடு
    wheel| சக்கரம்
    park| பூங்கா
    garden| தோட்டம்`,
    
      `auvai| ஔவை
    bow| வில்
    arrow| அம்பு
    top| பம்பரம்
    stick| குச்சி
    whistle| ஊதல்`,

    `box| பெட்டி
    coin| நாணயம்
    brick| செங்கல்
    sculpture | சிற்பம்
    clay-lamp| அகல்விளக்கு
    salangai| சலங்கை`,

    `fountain| நீரூற்று
    brush| தூரிகை
    hexagon| அறுகோணம்
    twig| கிளை
    medicine| மருந்து
    yagna| யாகம்`,

    `yarn-ball| நூல் கண்டு
    rishi| முனிவர்
    pouch| சுருக்குப்பை
    trident| திரிசூலம்`,

    `radio| வானொலி
    toothbrush| பற்குச்சி
    toothpaste| பற்பசை
    water-tower| தண்ணீர் தொட்டி`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உடல் உறுப்புகள்',
      id: 'drag-drop-organs',
      commonData: {
        title: 'உறுப்புகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
    `heart| இதயம்
brain| மூளை
lungs| நுரையீரல்
stomach| வயிறு
liver| கல்லீரல்
kidney| சிறுநீரகம்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உடல் உறுப்புகள்',
      id: 'drag-drop-cereals',
      commonData: {
        title: 'உறுப்புகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
    `almond| பாதாம்
cashewnut| முந்திரி
rice|அரிசி
salt| உப்பு
flour| மாவு`,

        `paddy| நெல்
wheat| கோதுமை
paddy| நெல்
pepper| மிளகு`
  ]
},
    {
      id: 'match-words',
      type: 'match',
      label: 'பொருத்துக : இன்னும் சில சொற்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `மோ, ring
        ம,bell
        கோ, kolam
        ப, balloon
        ஐ, five
        அ, king`,

        `ப, kite
        ஏ, ladder
        ஓ, rooftile
        ச, wheel
        பூ, park
        தோ, garden`,

`ஔ, auvai
வி, bow
அ, arrow
ப, top
கு, stick
ஊ, whistle`,

`பெ, box
நா, coin
செ, brick
சி, sculpture
அ, clay-lamp
ச, salangai`,

`நீ, fountain
தூ, brush, 
அ, hexagon
கி, twig
ம, medicine
யா, yagna`,
          `
          நூ, yarn-ball
          மு, rishi
          ப, toothbrush
          தி, trident`,

`வா,radio
சு, pouch
ப, toothpaste
த, water-tower`
    
      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக : உடல் உறுப்புகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
    `இ, heart
        மூ, brain
        நு, lungs
        வ, stomach
        க, liver
        சி, kidney`

      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக : உடல் உறுப்புகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
    `பா, almond
    மு, cashewnut
    அ, rice
    உ, salt
    மா, flour`,

        `நெ, paddy
        கோ, wheat
நெ, paddy
மி, pepper`
  ]
};
