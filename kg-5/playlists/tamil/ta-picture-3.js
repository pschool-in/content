export default {
  label: 'இயற்கை',
  id: 'ta-picture-3',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'இயற்கை',
      id: 'drag-drop-nature',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `sun| சூரியன்
moon| நிலா
rain| மழை
star| நட்சத்திரம்
leaf| இலை
bird| பறவை`,

        `nest| கூடு
stone| கல்
tree| மரம்
world| உலகம்
forest| காடு
desert| பாலைவனம்`,

        `river| ஆறு
grassland| புல்வெளி
ocean| கடல்
polar| துருவம்
valley| பள்ளத்தாக்கு
volcano| எரிமலை`,

        `banyan|    ஆலமரம்
palm-tree| பனைமரம்
coconut-tree| தென்னைமரம்
banana-tree| வாழைமரம்
bamboo-tree| மூங்கில்மரம்
rainbow| வானவில்`,

        `waterfall| அருவி
dew| பனித்துளி
bananaleaf| வாழையிலை
neemleaf| வேப்பிலை
mangoleaf| மாவிலை
coconutleaf| தென்னோலை`,

        `touch-me-not| தொட்டாற் சிணுங்கி
bone| எலும்பு துண்டு
pebbles| கூழாங்கற்கள்`
      ]
    },

    {
      type: 'dragDropImgLabel',
      label: 'பூக்கள்',
      id: 'drag-drop-flowers',
      commonData: {
        title: 'பூக்களின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `rose| ரோஜா
lotus| தாமரை
sunflower| சூரியகாந்தி
hibiscus| செம்பருத்தி
mogra| குண்டு மல்லி
jasmine| முல்லை`,

        `water-lily| அல்லி
marigold| சாமந்தி
december| டிசம்பர்
sangupoo| சங்குப்பூ
aavarampoo| ஆவாரம்பூ
erukkampoo| எருக்கம்பூ`,

        `idlipoo| இட்லிப்பூ
kanagamaram| கனகாம்பரம்
kurinchipoo| குறிஞ்சிப்பூ
nandiyaavattampoo| நந்தியாவட்டம்
pichipoo| பிச்சிப்பூ
poosanipoo| பூசணிப்பூ`,

        `poovarasampoo| பூவரசம்பூ
thumbaipoo| தும்பைப்பூ
vaadamalli| வாடாமல்லி
veepampoo| வேப்பம்பூ`,

        `bougainvillea| காகிதப்பூ
magnolia| செண்பகப்பூ
periwinkle| நித்தியகல்யாணிப்பூ`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'உடல் உறுப்புகள்',
      id: 'drag-drop-bodyparts',
      commonData: {
        title: 'உறுப்புகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `ear| காது
eye| கண்
foot| பாதம்
hair| முடி
hand| கை
mouth| வாய்`,

        `nose| மூக்கு
tooth| பல்
forehead| நெற்றி
mustache| மீசை
beard| தாடி`
      ]
    },

    {
      id: 'match-animals',
      type: 'match',
      label: 'இயற்கை - பொருத்துக',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `சூ, sun
நி, moon
ம, rain
ந, star
இ, leaf`,

        `ப, bird
கூ, nest
க, stone
ம, tree
உ, world`,

        `கா, forest
பா, desert
ஆ, river
பு, grassland
க, ocean
ப, valley`,

        `து, polar
ப, dew
எ, volcano 
வா, rainbow
அ, waterfall`,

        `ஆ, banyan
ப, palm-tree
தெ, coconut-tree
வா,banana-tree
மூ, bamboo-tree
தொ,touch-me-not`,

        `வா, bananaleaf
வே,neemleaf
மா, mangoleaf
தெ, coconutleaf
எ, bone
கூ,pebbles`
      ]
    },
    {
      id: 'match-flowers',
      type: 'match',
      label: 'பூக்கள் - பொருத்துக',
      commonData: {
        title: 'பூக்கள் - பொருத்துக',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `ரோ,rose
தா, lotus
சூ, sunflower
செ, hibiscus
கு, mogra`,

        `மு, jasmine
அ, water-lily
சா, marigold
டி, december
ச, sangupoo`,

        `ஆ, aavarampoo
எ, erukkampoo
இ, idlipoo
க, kanagamaram
கு, kurinchipoo`,

        `ந, nandiyaavattampoo
பி, pichipoo
வா, vaadamalli
பூ, poovarasampoo
து, thumbaipoo`,

        `பூ, poosanipoo
வே, veepampoo
கா, bougainvillea
செ, magnolia
நி,periwinkle`
      ]
    },

    {
      id: 'match-bodyparts',
      type: 'match',
      label: 'உடல் உறுப்புகள் - பொருத்துக',
      commonData: {
        title: 'உடல் உறுப்புகள் - பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `கா, ear
க, eye
பா, foot
மு, hair
கை, hand
வா, mouth`,

        `மூ, nose
ப, tooth
நெ, forehead
மீ, mustache
தா, beard`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: இயற்கை',
      id: 'complete-nature',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `sun| சூரியன்| _ரியன்|சூ,ச, சா, சி         
moon| நிலா| _லா| நி,த,தா,தி         
rain| மழை| _ழை|ம,த,ந,ப         
star| நட்சத்திரம்| _ட்சத்திரம்| ந,ம,த,ப 
leaf| இலை| _லை| இ,அ, ஆ,  ஈ 
bird| பறவை| _றவை| ப, ம,த,ந
nest| கூடு| _டு| கூ,நூ,பூ,மூ        
stone| கல்| _ல்| க, ச, த, ந
tree| மரம்| _ரம்| ம, த, ந, கூ `,

        `world| உலகம்| _லகம்| உ, அ, ஆ, இ 
forest| காடு| _டு| கா, தா, பா, லா
desert| பாலைவனம்| _லைவனம்| பா, கா, தா,சா
river| ஆறு| _று| ஆ, அ, இ, ஈ 
grassland| புல்வெளி| _ல்வெளி| பு,  சூ, து, தெ 
ocean| கடல்| _டல்| க, த, ப, ல
polar| துருவம்| _ருவம்| து, த,ந,ப  
valley| பள்ளத்தாக்கு| _ள்ளத்தாக்கு| ப, வ,த, ந`,

        `volcano| எரிமலை| _ரிமலை| எ, அ, இ,ஐ
banyan|    ஆலமரம்| _லமரம்| ஆ, எ, இ, அ
palm-tree| பனைமரம்| _னைமரம்| ப, வ,த, ந
coconut-tree| தென்னைமரம்| _ன்னைமரம்| தெ,செ,தொ,மெ
banana-tree| வாழைமரம்| _ழைமரம்| வா, தா, நா,பா
bamboo-tree| மூங்கில்மரம்| _ங்கில்மரம்| மூ, கூ,சூ,தூ
rainbow| வானவில்| _னவில்| வா,தா, நா,பா
waterfall| அருவி| _ருவி| அ,எ, ஆ,இ`,

        `dew| பனித்துளி| _னித்துளி| ப,ம, மா, மி        
bananaleaf| வாழையிலை| _ழையிலை| வா,நா,பா, மா  
neemleaf| வேப்பிலை| _ப்பிலை| வே, செ, மா, வா
mangoleaf| மாவிலை| _விலை| மா,தா, நா,பா
coconutleaf| தென்னோலை| _ன்னோலை| தெ,செ,த, மெ
touch-me-not| தொட்டாற் சிணுங்கி| _ட்டாற் சிணுங்கி| தொ,ஞூ,டூ,ணூ
bone| எலும்பு துண்டு| _லும்பு துண்டு| எ,கெ,கே,கை  
pebbles| கூழாங்கற்கள்| _ழாங்கற்கள்| கூ,சூ,தூ,நூ`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: பூக்கள்',
      id: 'complete-flowers',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `rose| ரோஜா| _ஜா| ரோ,ரை, ர, ரு
lotus| தாமரை| _மரை| தா,த, பு, தி        
sunflower| சூரியகாந்தி| _ரியகாந்தி| சூ, கு, மு, ந
hibiscus| செம்பருத்தி| _ம்பருத்தி| செ, சா,தா, கா
mogra| குண்டு மல்லி| _ண்டு மல்லி| கு,சூ,மு,பு
jasmine| முல்லை| _ல்லை| மு,ரு,பு,வ
water-lily| அல்லி| _ல்லி| அ,ம,ந,தி
marigold| சாமந்தி| _மந்தி| சா,தா,யா,கா
december| டிசம்பர்| _சம்பர்| டி,வ,ச,ந`,

        `sangupoo| சங்குப்பூ| _ங்குப்பூ| ச,ம,ப,வ
aavarampoo| ஆவாரம்பூ| _வாரம்பூ| ஆ, ப, ர, வ
erukkampoo| எருக்கம்பூ| _ருக்கம்பூ| எ, ந,இ,ப
idlipoo| இட்லிப்பூ| _ட்லிப்பூ| இ,பூ, க, ந 
kanagamaram| கனகாம்பரம்| _னகாம்பரம்| க,ம,ரு,ப
kurinchipoo| குறிஞ்சிப்பூ| _றிஞ்சிப்பூ| கு, சி, பி, வ
nandiyaavattampoo| நந்தியாவட்டம்| _ந்தியாவட்டம்| ந,வ, ர,ச
pichipoo| பிச்சிப்பூ| _ச்சிப்பூ| பி,லி,ப, ச`,

        `poosanipoo| பூசணிப்பூ| _சணிப்பூ| பூ,ப, பா,பி
poovarasampoo| பூவரசம்பூ| _வரசம்பூ| பூ,பீ, பு,பெ
thumbaipoo| தும்பைப்பூ| _ம்பைப்பூ| து,நு,பு, மு        
vaadamalli| வாடாமல்லி| _டாமல்லி| வா,நா,பா, மா        
veepampoo| வேப்பம்பூ| _ப்பம்பூ| வே,நே,பே, மே        
bougainvillea| காகிதப்பூ| _கிதப்பூ| கா,பா,வா,நா
magnolia| செண்பகப்பூ| _ண்பகப்பூ| செ,சா, ஞா, டா        
periwinkle| நித்தியகல்யாணிப்பூ| _த்தியகல்யாணிப்பூ| நி, சி, பி,மி`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: உடல் உறுப்புகள்',
      id: 'complete-bodyparts',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `ear| காது| _து| கா,வா,பா,சா 
eye| கண்| _ண்| க,த,ந, ப    
foot| பாதம்| _தம்| பா,வா, நா, சா
hair| முடி| _டி| மு,மூ,ம,மா        
hand| கை| _| கை,தை, பை, மை    
mouth| வாய்| _ய்| வா,பா,நா,சா `,

        `nose| மூக்கு| _க்கு| மூ,மு,ம,மா        
tooth| பல்| _ல்| ப, க, பா,வா
forehead| நெற்றி| _ற்றி| நெ,ப,வெ,வே    
mustache| மீசை| _சை| மீ,மூ,ப,மு
beard| தாடி| _டி| தா,கா,வா,பா`
      ]
    }
  ]
};
