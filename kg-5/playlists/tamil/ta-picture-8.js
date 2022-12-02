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

        `நூ, yarn-ball
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
      id: 'match-organs',
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
      type: 'completeWord',
      label: 'நிரப்புக: சொற்கள்',
      id: 'complete-others1',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `ring| மோதிரம்| _திரம்| மோ,கோ,தோ, போ 
bell| மணி| _ணி| ம,ப,வ, ச
kolam| கோலம்| _லம்| கோ,மோ,போ,தோ   
balloon| பலூன்| _லூன்| ப,ம,த,ச
five| ஐந்து| _ந்து| ஐ,அ,ஏ,ஓ
king| அரசன்| _ரசன்| அ,ஐ,ஏ,ஓ `,

        `kite| பட்டம்| பட்டம்| ப,ட,ம,ச
ladder| ஏணி| _ணி| ஏ, ஓ,அ, ஐ 
rooftile| ஓடு| _டு| ஓ,அ,ஐ,ஊ
wheel| சக்கரம்| _க்கரம்| ச,க,ர,ம
park| பூங்கா| _ங்கா| பூ,க,ச,ம
garden| தோட்டம்| _ட்டம்| தோ,கோ,மோ,போ`,

        `auvai| ஔவை| _வை| ஔ,ஏ,ஓ,ஐ
bow| வில்| _ல்| வி,சி,தி,மி
arrow| அம்பு| _ம்பு| அ,எ, ஒ, இ 
top| பம்பரம்| _ம்பரம்| ப,க ,ம ,ந
stick| குச்சி| _ச்சி| கு, து, சு, பூ
whistle| ஊதல்| ஊதல்| ஊ,த,சு, பூ`,

        `box| பெட்டி| _ட்டி| பெ,செ,தூ,தொ
coin| நாணயம்| _ணயம்| நா,தா, பா, மா
brick| செங்கல்| _ங்கல்| செ,ச,சொ,கொ 
sculpture | சிற்பம்| _ற்பம்| சி,கி,மி,நி
clay-lamp| அகல்விளக்கு| _கல்விளக்கு| அ, ஆ,ஈ ,ஏ
salangai| சலங்கை| _லங்கை| ச, க, ப, ம`,

        `fountain| நீரூற்று| _ரூற்று| நீ, தீ, பீ ,கீ
brush| தூரிகை| _ரிகை| தூ,பூ,கூ,ரு 
hexagon| அறுகோணம்| _றுகோணம்| அ, ஆ, ஈ ,ஏ 
twig| கிளை| _ளை| கி,மி,நி,சி 
medicine| மருந்து| _ருந்து| ம,ர,ந,த
yagna| யாகம்| _கம்| யா,தா, பா, மா`,

        `yarn-ball| நூல் கண்டு| _ல் கண்டு| நூ, தூ ,பூ ,கூ
rishi| முனிவர்| _னிவர்| மு,பு ,நு ,சு
pouch| சுருக்குப்பை| _ருக்குப்பை| சு,மு,பு ,நு
trident| திரிசூலம்| _ரிசூலம்| தி,கி,மி,நி`,

        `radio| வானொலி| _னொலி| வா,பா, மா,கா 
toothbrush| பற்குச்சி| _ற்குச்சி| ப,த,ம,பா
toothpaste| பற்பசை| _ற்பசை| ப,ச,த,பா
water-tower| தண்ணீர் தொட்டி| _ண்ணீர் தொட்டி| த,தொ,தே,தி`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: உறுப்புகள்',
      id: 'complete-organs',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `heart| இதயம்| _தயம்| இ,ஆ,ஈ ,ஏ
brain| மூளை| _ளை| மூ,தூ ,பூ ,கூ
lungs| நுரையீரல்| _ரையீரல்| நு,பு,சு,து
stomach| வயிறு| _யிறு| வ,க,ச,ப
liver| கல்லீரல்| _ல்லீரல்| க,வ,ச,ப
kidney| சிறுநீரகம்| _றுநீரகம்| சி,கி,மி,நி`
      ]
    }
  ]
};
