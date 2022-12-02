export default {
  label: 'உணவு வகைகள் - 2',
  id: 'ta-picture-6',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'பழங்கள்',
      id: 'drag-drop-fruits2',
      commonData: {
        title: 'பழங்களின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `sweet-potato|  சர்க்கரைவள்ளி கிழங்கு
jamun| நாவல் பழம்
pear| பேரிக்காய்
wood-apple| விளாம்பழம்
jujube| இலந்தைப்பழம்`,

        `sapotta| சப்போட்டா
tapioca| மரவள்ளிக்கிழங்கு
fig| அத்திப்பழம்
pears| பேரிக்காய்
muskmelon| முலாம்பழம்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'காய்கறிகள்',
      id: 'drag-drop-vegetables',
      commonData: {
        title: 'காய்களின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `capsicum| குடைமிளகாய்
cucumber| வெள்ளரிக்காய்
corn| மக்காச்சோளம்
broad-beans| அவரைக்காய்
ridgegourd| பீர்க்கங்காய்
ivygourd| கோவைக்காய்`,

        `kohlrabi| நூல்கோல்
snake-gourd| புடலங்காய்
spring-onion| வெங்காயத்தாள்
banana-stem| வாழைத்தண்டு
cluster-beans| கொத்தவரங்காய்
beans| பீன்ஸ்`,

        `fenugreek| வெந்தயக்கீரை
drumstick-leaves| முருங்கைக்கீரை
greenpeas| பச்சை பட்டாணி
peanut| வேர்க்கடலை
tulsi| துளசி`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உணவு',
      id: 'drag-drop-foods',
      commonData: {
        title: 'உணவு படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `pajji| பஜ்ஜி
fruits| பழங்கள்
vegetables| காய்கறிகள்
juice| பழச்சாறு
sweets|இனிப்பு
bread| ரொட்டி`,

        `soup| சூப்
laddu| லட்டு
murukku| முறுக்கு
adirasam| அதிரசம்
malli| மல்லி`,

        `sombu| சோம்பு
pattani| பட்டாணி
mochai| மொச்சை
urad-dhal| உளுந்து
seeragam| சீரகம்`,

        `moong-dhal| பாசிப்பருப்பு
toor-dhal| துவரம்பருப்பு
kadalai-paruppu| கடலைப்பருப்பு
chickpea| கொண்டைக்கடலை`
      ]
    },
    {
      id: 'match-fruits',
      type: 'match',
      label: 'பொருத்துக : பழங்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        ` நா, jamun
பே, pear
வி, wood-apple
இ, jujube
ச, sapotta`,

        `அ, fig
பே, pears
மு, muskmelon
ம,tapioca
ச, sweet-potato`
      ]
    },
    {
      id: 'match-vegetables',
      type: 'match',
      label: 'பொருத்துக : காய்கறிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `கு, capsicum
வெ, cucumber
ம, corn
அ, broad-beans
பீ, ridgegourd
கோ, ivygourd`,

        ` நூ, kohlrabi
பு, snake-gourd
வெ, spring-onion
வா, banana-stem 
கொ, cluster-beans
பீ, beans`,

        ` வெ, fenugreek
மு, drumstick-leaves
ப, greenpeas
வே, peanut 
து, tulsi`
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
        `ப, pajji
ப, fruits
கா, vegetables
சூ, soup
இ, sweets`,

        `ரொ, bread
ப, juice
ல,laddu
மு, murukku
அ, adirasam`,

        `ம, malli
சீ, seeragam
சோ, sombu
ப, pattani
மொ, mochai`,

        `உ, urad-dhal
பா, moong-dhal
து, toor-dhal
க, kadalai-paruppu
கொ, chickpea`
      ]
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
        `sweet-potato|சர்க்கரைவள்ளி கிழங்கு|_ர்க்கரைவள்ளி கிழங்கு|ச, க ,ப ,ம,
jamun| நாவல் பழம்|_வல் பழம்| நா,தா,மா,கா 
pear| பேரிக்காய்|_ரிக்காய்|பே,தே,சே, கே
wood-apple| விளாம்பழம்| _ளாம்பழம்| வி,கி,மி,நி  
jujube| இலந்தைப்பழம்| _லந்தைப்பழம்| இ,ஆ,ஈ,ஏ `,

        `sapotta| சப்போட்டா| _ப்போட்டா| ச,ம,ர,வ
tapioca| மரவள்ளிக்கிழங்கு| _ரவள்ளிக்கிழங்கு| ம,ர,வ,ச
fig| அத்திப்பழம்| _த்திப்பழம்| அ,எ,ஆ, இ
pears| பேரிக்காய்| _ரிக்காய்| பே,பெ,சே,கே
muskmelon| முலாம்பழம்| _லாம்பழம்| மு,கு பு,நு`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: காய்கறிகள்',
      id: 'complete-vegetables',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `capsicum| குடைமிளகாய்| _டைமிளகாய்| கு,மு,பு,சு
cucumber| வெள்ளரிக்காய்| _ள்ளரிக்காய்| வெ,கெ, பெ, மெ
corn| மக்காச்சோளம்| _மக்காச்சோளம்| ம,வ,த,க 
broad-beans| அவரைக்காய்| _வரைக்காய்| அ,எ,அ, இ 
ridgegourd| பீர்க்கங்காய்| _ர்க்கங்காய்| பீ,தீ,சீ,கீ 
ivygourd| கோவைக்காய்| _வைக்காய்| கோ, தோ ,நோ,போ `,

        `kohlrabi| நூல்கோல்| _ல்கோல்| நூ,தூ ,பூ ,கூ 
snake-gourd| புடலங்காய்| _டலங்காய்| பு,கு,சு,து  
spring-onion| வெங்காயத்தாள்| _ங்காயத்தாள்| வெ,கெ, பெ, மெ
banana-stem| வாழைத்தண்டு| _ழைத்தண்டு| வா,தா,மா,கா 
cluster-beans| கொத்தவரங்காய்| _த்தவரங்காய்| கொ,சொ,தொ ,பொ      
beans| பீன்ஸ்| _ன்ஸ்| பீ,தீ,சீ,கீ`,

        `fenugreek| வெந்தயக்கீரை| _ந்தயக்கீரை| வெ,பெ,மெ,ரெ
drumstick-leaves| முருங்கைக்கீரை| _ருங்கைக்கீரை| மு,கு பு,சு
greenpeas| பச்சை பட்டாணி| _ச்சை பட்டாணி| ப,ச,க,ம
peanut| வேர்க்கடலை| _ர்க்கடலை| வே, மே, தே, பே
tulsi| துளசி| _ளசி| து,கு,பு,சு`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: உணவு',
      id: 'complete-foods',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `pajji| பஜ்ஜி| _ஜ்ஜி| ப,பா,மா, வ 
fruits| பழங்கள்| _ழங்கள்| ப,பா, க, கா
vegetables| காய்கறிகள்| _ய்கறிகள்| கா,
juice| பழச்சாறு| _ழச்சாறு| ப,வ, ர ,மா
sweets|இனிப்பு|_னிப்பு|இ,அ,ச,ஈ
bread| ரொட்டி| _ட்டி| ரொ,சொ, கொ,தொ`,

        `soup| சூப்| _ப்| சூ,தூ ,பூ ,கூ
laddu| லட்டு| _ட்டு| ல, வ,மா,லா   
murukku| முறுக்கு| _றுக்கு| மு,று,கு,
adirasam| அதிரசம்| _திரசம்| அ,த,ம,ச
malli| மல்லி |_ல்லி| ம,ல,ச, க`,

        `sombu| சோம்பு| _ம்பு| சோ, தோ, நோ, கோ
pattani| பட்டாணி| _ட்டாணி| ப,ச, க, ம
mochai| மொச்சை| _ச்சை| மொ,சொ, கொ,தொ
urad-dhal| உளுந்து| _ளுந்து| உ,எ, அ, இ 
seeragam| சீரகம்| _ரகம்| சீ,கீ,தீ,பீ  `,

        `moong-dhal| பாசிப்பருப்பு| _சிப்பருப்பு| பா,தா, மா,கா 
toor-dhal| துவரம்பருப்பு| _வரம்பருப்பு| து,கு பு,சு
kadalai-paruppu| கடலைப்பருப்பு| _டலைப்பருப்பு| க,ப,ர,ம
chickpea| கொண்டைக்கடலை| _ண்டைக்கடலை| கொ,சொ,தொ ,பொ`
      ]
    }
  ]
};
