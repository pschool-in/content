export default {
  label: 'நம் வீடு',
  id: 'ta-picture-4',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'நம் வீடு',
      id: 'drag-drop-house',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `house| வீடு
        table| மேசை
        bed| கட்டில்
        chair| நாற்காலி
        umbrella| குடை
        door| கதவு`,

        `window| ஜன்னல்
        toilet| கழிப்பறை
        baby| குழந்தை
boy| சிறுவன்
girl| சிறுமி
man| ஆண்`,

        `woman| பெண்
grandfather| தாத்தா
grandma| பாட்டி
bucket| வாளி
ball|  பந்து
candle| மெழுகுவர்த்தி`,

        `glasses| மூக்கு கண்ணாடி
clock| கடிகாரம்
watch| கைக்கடிகாரம்
flower-pot| பூத்தொட்டி
broom| துடைப்பம்
shelf| அலமாரி`,

        `air-conditioner| குளிரூட்டி
pillow| தலையணை
basket| கூடை
dustbin| குப்பை தொட்டி
handbag| கைப்பை`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'ஆடைகள்',
      id: 'drag-drop-dress',
      commonData: {
        title: 'ஆடைகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        ` vetti| வேட்டி
        saree| சேலை
        shirt| சட்டை
        hat| தொப்பி`,

        `trousers| கால்சட்டை
        shoe| காலணி
        sock|காலுறை
coat| மேலங்கி`,
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'பள்ளிக்கூடம்',
      id: 'drag-drop-school',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `pen| பேனா
          pencil| எழுதுகோல்
          ruler| அளவுகோல்
          eraser| அழிப்பான்
          book| புத்தகம்
          ink| மை`,

        `schoolbag| புத்தகப்பை
          scissors| கத்தரிக்கோல்
          waterbottle| தண்ணீர் குடுவை
          calculator| கணிப்பான்
          globe| பூகோளம்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'சமையலறை',
      id: 'drag-drop-kitchen',
      commonData: {
        title: 'படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `சமையலறைclay-stove| அடுப்பு
          pot| பானை
          ladle| கரண்டி
          sembu| செம்பு
          knife|கத்தி
          plate| தட்டு`,

        `lid| மூடி
          kudam| குடம்
          cup| கோப்பை
          bowl| கிண்ணம்
          ammi | அம்மி
          stone-grinder| ஆட்டுக்கல்`,

        `arivaal| அரிவாள்
          arivaal-manai| அரிவாள்மனை
          anjarai-petti| அஞ்சறைப்பெட்டி
          dosaikal| தோசைக்கல்
          tap| குழாய்`,

        `stove| எரிவாயு அடுப்பு
          fork| முள் கரண்டி
          pan| வாணலி
          fridge| குளிர்சாதன பெட்டி`
      ]
    },
    {
      id: 'match-house',
      type: 'match',
      label: 'பொருத்துக : நம் வீடு',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `வீ, house
        மே, table
        க, bed
        நா, chair`,

        `கு, umbrella
        க,door
      ஜ, window
      சி, girl`,

        `கு, baby
        சி,boy
        க, toilet
        ஆ,man`,

        `பெ,woman
தா, grandfather
பா, grandma
வா, bucket`,

        `ப, ball
மெ, candle
மூ, glasses
க, clock`,

        `கை, watch
பூ, flower-pot
து,broom
கு, dustbin
அ, shelf`,

        `கு, air-conditioner
த, pillow
கூ, basket
கை, handbag`
      ]
    },
    {
      id: 'match-dress',
      type: 'match',
      label: 'பொருத்துக : ஆடைகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        ` வே, vetti
        கா, shoe
        ச, shirt
        தொ, hat
        சே, saree
        மே, coat`
      ]
    },
    {
      id: 'match-school',
      type: 'match',
      label: 'பொருத்துக : பள்ளிக்கூடம்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `பே,pen
          எ, pencil
          அ, ruler
          க, calculator
          பு, book
          மை, ink`,

        `பு,schoolbag
        அ, eraser
         க, scissors
         த, waterbottle
         பூ, globe`
      ]
    },
    {
      id: 'match-kitchen',
      type: 'match',
      label: 'பொருத்துக : சமையலறை',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `அ, clay-stove
       பா, pot
       க, ladle
       செ, sembu
       மூ, lid`,

        `த, plate
       க, knife
       கு, kudam
      கி, bowl
    அ, ammi`,

        `கோ, cup
    ஆ, stone-grinder
    அ, anjarai-petti
    கு, tap
    எ, stove`,

        `அ, arivaal-manai
    தோ, dosaikal
    மு, fork
    வா, pan
    கு, fridge`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: நம் வீடு',
      id: 'complete-house',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க'
      },
      data: [
        `house| வீடு| _டு| வீ,கீ,தீ,நீ
        table| மேசை| _சை| மே,நா,க, ஆ
        bed| கட்டில்| _ட்டில்| க,பெ,சி,தை 
        chair| நாற்காலி| _ற்காலி| நா,க, பெ,கா
        umbrella| குடை| _டை| கு,க, த,து
        door| கதவு| _தவு| க, ஜ, நா, ப 
        window| ஜன்னல்| _ன்னல்| ஜ, பெ, ப, த
        toilet| கழிப்பறை| _ழிப்பறை| க, வ, ப, கா 
        baby| குழந்தை| _ழந்தை| கு, வ, பெ, சி`,

        `boy| சிறுவன்| _றுவன்| சி, வ, தா, பா
girl| சிறுமி| _றுமி| சி, தா, ஆ, வா
man| ஆண்| _ண்| ஆ, பா, த, தா
woman| பெண்| _ண்| பெ, ப, தா, பா
grandfather| தாத்தா| _த்தா| தா, பா, வா, மெ
grandma| பாட்டி| _ட்டி| பா, க, தா,மா
bucket| வாளி| _ளி| வா,மா, மெ, மூ
ball|  பந்து|  _ந்து|  ப, ம, வ, க 
candle| மெழுகுவர்த்தி| _ழுகுவர்த்தி| மெ,க, மூ,சி
glasses| மூக்கு கண்ணாடி| _க்கு கண்ணாடி| மூ, க, பூ, வ`,

        `clock| கடிகாரம்| _டிகாரம்| க, பூ, வ, த
watch| கைக்கடிகாரம்| _க்கடிகாரம்| கை, து, வ, தா
flower-pot| பூத்தொட்டி| _த்தொட்டி| பூ, தொ, அ, த 
broom| துடைப்பம்| _டைப்பம்| து, அ, கு, ர
shelf| அலமாரி| _லமாரி| அ, ரூ, ட, ய
air-conditioner| குளிரூட்டி| _ளிரூட்டி| கு, தெ,க , ப
pillow| தலையணை| _லையணை| த,ய, தொ, ப
basket| கூடை| _டை| கூ, ட, க, ப
dustbin| குப்பை தொட்டி| _ப்பை தொட்டி| கு,க, கை, பை
handbag| கைப்பை| _ப்பை| கை, கு, கூ, கே`

      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: ஆடைகள்',
      id: 'complete-dress',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `vetti| வேட்டி| _ட்டி| வே,கா, சே, மே
        saree| சேலை| _லை| சே,தொ,ச, கா
        shirt| சட்டை| _ட்டை| ச, ட, ப, கா
        hat| தொப்பி| _ப்பி| தொ,ச,டை,ப  
        trousers| கால்சட்டை| _ல்சட்டை| கா,மே,தொ,ச  
        shoe| காலணி| _லணி| கா, ல, மே, க 
        sock|காலுறை|_லுறை|கா,கூ, ட, ம
        coat| மேலங்கி| _லங்கி| மே,க,கூ, ம`,]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: பள்ளிக்கூடம்',
      id: 'complete-school',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `pen| பேனா| _னா| பே, ப, எ, ழ
        pencil| எழுதுகோல்| _ழுதுகோல்| எ, த, க, கோ  
        ruler| அளவுகோல்| _ளவுகோல்| அ, கோ, பா, த
        eraser| அழிப்பான்| _ழிப்பான்| அ, க, பா, பு
        book| புத்தகம்| _த்தகம்| பு, த, க, பா
        ink| மை| _| மை, க, பு, பா`,

        `schoolbag| புத்தகப்பை| _த்தகப்பை| பு, பை, கோ, கு
        scissors| கத்தரிக்கோல்| _த்தரிக்கோல்| க, கு, த, வை
        waterbottle| தண்ணீர் குடுவை| _ண்ணீர் குடுவை| த,தா,தி, தீ        
        calculator| கணிப்பான்| _ணிப்பான்| க, ப, பா, கோ  
        globe| பூகோளம்| _கோளம்| பூ, க, ப, ச`,
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: சமையலறை',
      id: 'complete-kitchen',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `clay-stove| அடுப்பு| _டுப்பு| அ, ப, க, த
        pot| பானை| _னை| பா, க, செ, த 
        ladle| கரண்டி| _ரண்டி| க, ம, கோ, த 
        sembu| செம்பு| _ம்பு| செ, ப, க, த
        knife|கத்தி|_த்தி| க, த, ப, கு
        plate| தட்டு| _ட்டு| த,தா,தி, தீ        
        lid| மூடி| _டி| மூ,ம,மா, மி
        kudam| குடம்| _டம்| கு,கா,கி, கீ     
        cup| கோப்பை| _ப்பை| கோ,தே, செ, கு
        bowl| கிண்ணம்| _ண்ணம்| கி, க,கோ, கு`,

        `ammi | அம்மி| _ம்மி| அ, ஆ, கி, க 
        stone-grinder| ஆட்டுக்கல்| _ட்டுக்கல்| ஆ,அ,ப, பெ 
        arivaal| அரிவாள்| _ரிவாள்| அ, ஆ,த,க
        arivaal-manai| அரிவாள்மனை| _ரிவாள்மனை| அ, ப, பா, பி        
        anjarai-petti| அஞ்சறைப்பெட்டி| _ஞ்சறைப்பெட்டி| அ, த, தோ, மா 
        dosaikal| தோசைக்கல்| _சைக்கல்| தோ,த, தா, தி`,

        `tap| குழாய்| _ழாய்| கு, க, கா, கி
        stove| எரிவாயு அடுப்பு| _ரிவாயு அடுப்பு| எ,அ,ட,மா
        fork| முள் கரண்டி| _ள் கரண்டி| மு,ம,மா,மி
        pan| வாணலி| _ணலி| வா,வ, வி, வீ        
        fridge| குளிர்சாதன பெட்டி| _ளிர்சாதன பெட்டி| கு,கா, கி, கீ         `
      ]
    }






  ]
};
