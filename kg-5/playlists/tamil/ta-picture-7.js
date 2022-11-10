export default {
  label: 'மனிதன்-வேலை-கருவி',
  id: 'ta-picture-7',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'வேலை',
      id: 'drag-drop-jobs',
      commonData: {
        title: 'விலங்குகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `postman| தபால்காரர்
        teacher| ஆசிரியர்
        nurse| செவிலியர்
        chef| சமையல்காரர்
        doctor| மருத்துவர்
        police| காவலர்`,

        `fisherman| மீனவர்
        sailor| மாலுமி
        carpenter| தச்சர்
        weaver| நெசவாளர்
        soldier| சிப்பாய்
        astronaut| விண்வெளி வீரர்`,

        `clown| கோமாளி
        barber| முடிதிருத்துபவர்
        washerman| சலவைதொழிலாளர்
        blacksmith| கொல்லன்
        cobbler| செருப்புதைப்பவர்
        potter| குயவன்`,

        `diver| நீர்மூழ்கிவீரர்
        milkman| பால்காரர்
        shopkeeper| கடைக்காரர்
        warrior| போர்வீரர்
        goldsmith| பொற்கொல்லர்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: ' வாகனங்கள்',
      id: 'drag-drop-vehicles',
      commonData: {
        title: ' வாகனங்களின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `bus| பேருந்து
        car| மகிழுந்து
        cycle| மிதிவண்டி
        aeroplane| விமானம்
        boat| படகு
        ship| கப்பல்`,

        `train| தொடர்வண்டி
        palanquin| பல்லக்கு
        chariot| தேர்
        ambulance| அவசர ஊர்தி
        tractor| இழுவை இயந்திரம்
        cart| கட்டை வண்டி`,

        `fire-engine| தீயணைப்பு வாகனம்
        lorry| சரக்குந்து
        rocket| ஏவுகனை
        submarine| நீர்மூழ்கிக்கப்பல்
        bullock-cart| மாட்டுவண்டி
        horse-carriage| குதிரைவண்டி`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: ' இசைக்கருவிகள்',
      id: 'drag-drop-music',
      commonData: {
        title: ' இசைக்கருவிகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        ` veenai| வீணை
                  conch| சங்கு
                  drums| முரசு
                  dhol| மத்தளம்
                  flute| புல்லாங்குழல்`,

        `tabla| தபேலா
                  violin| வயலின்
                  yazl| யாழ்
                  damaru| உடுக்கை
                  nadaswaram| நாதசுவரம்`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: ' கருவிகள்',
      id: 'drag-drop-instruments',
      commonData: {
        title: 'கருவிகளின் படங்களுடன் பெயரைப் பொருத்துக'
      },
      data: [
        `camera| புகைப்பட கருவி
        smartphone| கைபேசி
        speaker| ஒலிபெருக்கி
        tv| தொலைக்காட்சி
        computer| கணினி
        laptop| மடிக்கணினி`,

        `balance| தராசு
                  blackboard| கரும்பலகை
                  hose| குழாய்
                  needle| ஊசி
                  axe| கோடரி
                  thermometer| வெப்பமானி`,

        `saw| ரம்பம்
                  microscope| நுண்ணோக்கி
                  plier| இடுக்கி
                  Plough| கலப்பை
                  spade| மண்வெட்டி
                  trowel| கரணை`,

        `awl| குத்தூசி
        compass| திசைகாட்டி
        screw| திருகு
        screwdriver| திருப்புளி
        telescope| தொலைநோக்கி
        test-tube| சோதனை குழாய்`
      ]
    },
    {
      id: 'match-jobs',
      type: 'match',
      label: 'பொருத்துக :வேலை',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `த,postman
      ஆ, teacher
      செ, nurse
      ச, chef
      ம, doctor`,

        `கா, police
      மீ, fisherman
      மா, sailor
      த, carpenter
      நெ, weaver`,

        `சி, soldier
      வி, astronaut
      கோ, clown
      மு, barber
      ச, washerman`,

        `கொ, blacksmith
      செ, cobbler
      கு, potter
      நீ, diver`,

        `பா, milkman
      க, shopkeeper
      போ, warrior
      பொ, goldsmith`
      ]
    },
    {
      id: 'match-vehicles',
      type: 'match',
      label: 'பொருத்துக : வாகனங்கள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `பே, bus
      ம, car
      மி, cycle
      வி, aeroplane
      ப, boat
      க, ship`,

        `தொ, train
      ப, palanquin
      தே, chariot
      அ, ambulance
      இ, tractor
      க, cart`,

        `தீ, fire-engine
      ச, lorry
      ஏ, rocket
      நீ, submarine
      மா, bullock-cart
      கு, horse-carriage`
      ]
    },
    {
      id: 'match-music',
      type: 'match',
      label: 'பொருத்துக : இசைக்கருவிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        ` வீ, veenai
      ச, conch
      மு, drums
      ம, dhol
      பு, flute`,

        `த, tabla
      வ, violin
      யா, yazl
      உ, damaru
      நா, nadaswaram`
      ]
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'பொருத்துக :கருவிகள்',
      commonData: {
        title: 'படத்தையும் அதன் முதல் எழுத்தையும் பொருத்துக ',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `பு, camera
      கை, smartphone
      ஒ, speaker
      தொ,tv
      க, computer
      ம, laptop`,

        `த, balance
      க, blackboard
      கு, hose
      தி, screwdriver
      கோ, axe
      வெ, thermometer`,

        `ர, saw
      நு, microscope
      இ, plier
      க, Plough
      ம, spade
      தி, screw`,

        `கு, awl
      தி, compass
      க, trowel
      ஊ, needle
      தொ, telescope
      சோ, test-tube`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: வேலை',
      id: 'complete-jobs',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `postman| தபால்காரர்| _பால்காரர்| த,க,ச,ம
      teacher| ஆசிரியர்| _சிரியர்| ஆ,அ, இ,ஈ 
      nurse| செவிலியர்| _விலியர்| செ,கெ, தெ, பெ
      chef| சமையல்காரர்| _மையல்காரர்| ச,ந,ம,க 
      doctor| மருத்துவர்| _ருத்துவர்| ம,த,க,ச
      police| காவலர்| _வலர்| கா,சா, பா, மா`,

        `fisherman| மீனவர்| _னவர்| மீ,வீ, தீ, நீ
      sailor| மாலுமி| _லுமி| மா,பா, வா, கா
      carpenter| தச்சர்| _ச்சர்| த,ப,வ, ர
      weaver| நெசவாளர்| _சவாளர்| நெ,செ,வெ, கெ
      soldier| சிப்பாய்| _ப்பாய்| சி,வி,மி, ரி
      astronaut| விண்வெளி வீரர்| _ண்வெளி வீரர்| வி,சி,மி,தி`,

        `clown| கோமாளி| _மாளி| கோ,போ,தோ,நோ      
      barber| முடிதிருத்துபவர்| _டிதிருத்துபவர்| மு,சு, கு,து
      washerman| சலவைதொழிலாளர்| _லவைதொழிலாளர்| ச,த,ப,வ
      blacksmith| கொல்லன்| _ல்லன்| கொ,தொ,பொ,மொ      
      cobbler| செருப்புதைப்பவர்| _ருப்புதைப்பவர்| செ,கெ, தெ, மெ
      potter| குயவன்| _யவன்| கு,மு,சு,து `,

        `diver| நீர்மூழ்கிவீரர்| _ர்மூழ்கிவீரர்| நீ,வீ,தீ,பீ      
      milkman| பால்காரர்| _ல்காரர்| பா,லா,வா, கா
      shopkeeper| கடைக்காரர்| _டைக்காரர்| க,த,ப,வ
      warrior| போர்வீரர்| _ர்வீரர்| போ,கோ,தோ,நோ
      goldsmith| பொற்கொல்லர்| _ற்கொல்லர்| பொ,கொ,தொ,மொ`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: வாகனங்கள்',
      id: 'complete-vehicles',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `bus| பேருந்து| _ருந்து| பே,தே, சே, கே
      car| மகிழுந்து| _கிழுந்து| ம,ப,க,ல
      cycle| மிதிவண்டி| _திவண்டி| மி,தி,இ,வி
      aeroplane| விமானம்| _மானம்| வி,மி,தி,டி
      boat| படகு| _டகு| ப,ம,க,ல
      ship| கப்பல்| _ப்பல்| க,ப,வ,ல`,

        `train| தொடர்வண்டி| _டர்வண்டி| தொ,கொ,சொ,பொ
      palanquin| பல்லக்கு| _ல்லக்கு| ப,ம,க,ல
      chariot| தேர்| _ர்| தே,நே,பே,மே      
      ambulance| அவசர ஊர்தி| _வசர ஊர்தி| அ,எ,ஊ, ஒ
      tractor| இழுவை இயந்திரம்| _ழுவை இயந்திரம்| இ,ய,அ,ஆ
      cart| கட்டை வண்டி| _ட்டை வண்டி| க,ச,வ,கு`,

        `fire-engine| தீயணைப்பு வாகனம்| _யணைப்பு வாகனம்| தீ,கி,மீ,நீ
      lorry| சரக்குந்து| _ரக்குந்து| ச,வ,ய,க
      rocket| ஏவுகனை| _வுகனை| ஏ,அ,வ,க
      submarine| நீர்மூழ்கிக்கப்பல்| _ர்மூழ்கிக்கப்பல்| நீ,பீ,மீ,தீ      
      bullock-cart| மாட்டுவண்டி| _ட்டுவண்டி| மா,தா,நா,பா      
      horse-carriage| குதிரைவண்டி| _திரைவண்டி| கு,வ,மீ,கி`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: இசைக்கருவிகள்',
      id: 'complete-music',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        ` veenai| வீணை| _ணை| வீ,தீ,நீ,பீ        
        conch| சங்கு| _ங்கு| ச,ந,ம,த
        drums| முரசு| _ரசு| மு,கு,து,நு      
        dhol| மத்தளம்| _த்தளம்| ம,த,ச,ந
        flute| புல்லாங்குழல்| _ல்லாங்குழல்| பு,மு,கு,து`,

        `tabla| தபேலா| _பேலா| த,உ,வ,ய
        violin| வயலின்| _யலின்| வ,ச,ய,ட
        yazl| யாழ்| _ழ்| யா,நா,மா,லா
        damaru| உடுக்கை| _டுக்கை| உ,வ,த,ய
        nadaswaram| நாதசுவரம்| _தசுவரம்| நா,மா,யா,லா`
      ]
    },
    {
      type: 'completeWord',
      label: 'நிரப்புக: கருவிகள்',
      id: 'complete-instruments',
      commonData: {
        images: 'custom',
        lang: 'ta',
        title: 'விடுபட்ட எழுத்தை தேர்வு செய்க '
      },
      data: [
        `camera| புகைப்பட கருவி| _கைப்பட கருவி| பு,சு,மு, கு        
        smartphone| கைபேசி| _பேசி| கை,சை, தை, பை
        speaker| ஒலிபெருக்கி| _லிபெருக்கி| ஒ,உ,எ, ஓ
        tv| தொலைக்காட்சி| _லைக்காட்சி| தொ,நொ,பொ, மொ        
        computer| கணினி| _ணினி| க,த,ந,ப
        laptop| மடிக்கணினி| _டிக்கணினி| ம,மெ, ப, த`,

        `balance| தராசு| _ராசு| த,க, ச, ட
                  blackboard| கரும்பலகை| _ரும்பலகை| க,த,ந,ப
                  hose| குழாய்| _ழாய்| கு,நு, பு,து
                  needle| ஊசி| _சி| ஊ,உ,கு,சு
                  axe| கோடரி| _டரி| கோ,சோ,தோ,நோ
                  thermometer| வெப்பமானி| _ப்பமானி| வெ,தெ,நெ,பெ`,

        `saw| ரம்பம்| _ம்பம்| ர,க,ச,த
                  microscope| நுண்ணோக்கி| _ண்ணோக்கி| நு,கு,சு,பு
                  plier| இடுக்கி| _டுக்கி| இ,அ, ட, ஈ
                  Plough| கலப்பை| _லப்பை| க, ச, த, ர
                  spade| மண்வெட்டி| _ண்வெட்டி| ம,த,ந,ப                  
                  trowel| கரணை| _ரணை| க, ச, ட, த`,

        `awl| குத்தூசி| _த்தூசி| கு,சு, நு, பு        
        compass| திசைகாட்டி| _சைகாட்டி| தி,ரி,வி,கி 
        screw| திருகு| _ருகு| தி,கி,சி,மி
        screwdriver| திருப்புளி| _ருப்புளி| தி,சி,நி,கி
        telescope| தொலைநோக்கி| _லைநோக்கி| தொ,கொ,பொ,மொ        
        test-tube| சோதனை குழாய்| _தனை குழாய்| சோ,கோ,தோ,நோ`
      ]
    }
  ]
};
