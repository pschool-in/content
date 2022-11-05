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
      id: 'drag-drop-music',
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
      `postman| தபால்காரர்| _பால்காரர்| த,
      teacher| ஆசிரியர்| _சிரியர்| ஆ,
      nurse| செவிலியர்| _விலியர்| செ,
      chef| சமையல்காரர்| _மையல்காரர்| ச,
      doctor| மருத்துவர்| _ருத்துவர்| ம,
      police| காவலர்| _வலர்| கா,`,

      `fisherman| மீனவர்| _னவர்| மீ,
      sailor| மாலுமி| _லுமி| மா,
      carpenter| தச்சர்| _ச்சர்| த,
      weaver| நெசவாளர்| _சவாளர்| நெ,
      soldier| சிப்பாய்| _ப்பாய்| சி,
      astronaut| விண்வெளி வீரர்| _ண்வெளி வீரர்| வி,`,
      
      `clown| கோமாளி| _மாளி| கோ,
      barber| முடிதிருத்துபவர்| _டிதிருத்துபவர்| மு,
      washerman| சலவைதொழிலாளர்| _லவைதொழிலாளர்| ச,
      blacksmith| கொல்லன்| _ல்லன்| கொ,
      cobbler| செருப்புதைப்பவர்| _ருப்புதைப்பவர்| செ,
      potter| குயவன்| _யவன்| கு,`,

      `diver| நீர்மூழ்கிவீரர்| _ர்மூழ்கிவீரர்| நீ,
      milkman| பால்காரர்| _ல்காரர்| பா,
      shopkeeper| கடைக்காரர்| _டைக்காரர்| க,
      warrior| போர்வீரர்| _ர்வீரர்| போ,
      goldsmith| பொற்கொல்லர்| _ற்கொல்லர்| பொ,`
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
      `bus| பேருந்து| _ருந்து| பே,
      car| மகிழுந்து| _கிழுந்து| ம,
      cycle| மிதிவண்டி| _திவண்டி| மி,
      aeroplane| விமானம்| _மானம்| வி,
      boat| படகு| _டகு| ப,
      ship| கப்பல்| _ப்பல்| க,`,

      `train| தொடர்வண்டி| _டர்வண்டி| தொ,
      palanquin| பல்லக்கு| _ல்லக்கு| ப,
      chariot| தேர்| _ர்| தே,
      ambulance| அவசர ஊர்தி| _வசர ஊர்தி| அ,
      tractor| இழுவை இயந்திரம்| _ழுவை இயந்திரம்| இ,
      cart| கட்டை வண்டி| _ட்டை வண்டி| க,`,

      `fire-engine| தீயணைப்பு வாகனம்| _யணைப்பு வாகனம்| தீ,
      lorry| சரக்குந்து| _ரக்குந்து| ச,
      rocket| ஏவுகனை| _வுகனை| ஏ,
      submarine| நீர்மூழ்கிக்கப்பல்| _ர்மூழ்கிக்கப்பல்| நீ,
      bullock-cart| மாட்டுவண்டி| _ட்டுவண்டி| மா,
      horse-carriage| குதிரைவண்டி| _திரைவண்டி| கு,`

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
        ` veenai| வீணை| _ணை| வீ,
        conch| சங்கு| _ங்கு| ச,
        drums| முரசு| _ரசு| மு,
        dhol| மத்தளம்| _த்தளம்| ம,
        flute| புல்லாங்குழல்| _ல்லாங்குழல்| பு,`,

        `tabla| தபேலா| _பேலா| த,
        violin| வயலின்| _யலின்| வ,
        yazl| யாழ்| _ழ்| யா,
        damaru| உடுக்கை| _டுக்கை| உ,
        nadaswaram| நாதசுவரம்| _தசுவரம்| நா,`

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
        `camera| புகைப்பட கருவி| _கைப்பட கருவி| பு,
        smartphone| கைபேசி| _பேசி| கை,
        speaker| ஒலிபெருக்கி| _லிபெருக்கி| ஒ,
        tv| தொலைக்காட்சி| _லைக்காட்சி| தொ,
        computer| கணினி| _ணினி| க,
        laptop| மடிக்கணினி| _டிக்கணினி| ம,`,
        
                  `balance| தராசு| _ராசு| த,
                  blackboard| கரும்பலகை| _ரும்பலகை| க,
                  hose| குழாய்| _ழாய்| கு,
                  needle| ஊசி| _சி| ஊ,
                  axe| கோடரி| _டரி| கோ,
                  thermometer| வெப்பமானி| _ப்பமானி| வெ,`,

                  `saw| ரம்பம்| _ம்பம்| ர,
                  microscope| நுண்ணோக்கி| _ண்ணோக்கி| நு,
                  plier| இடுக்கி| _டுக்கி| இ,
                  Plough| கலப்பை| _லப்பை| க,
                  spade| மண்வெட்டி| _ண்வெட்டி| ம,
                  trowel| கரணை| _ரணை| க,`,

        `awl| குத்தூசி| _த்தூசி| கு,
        compass| திசைகாட்டி| _சைகாட்டி| தி,
        screw| திருகு| _ருகு| தி,
        screwdriver| திருப்புளி| _ருப்புளி| தி,
        telescope| தொலைநோக்கி| _லைநோக்கி| தொ,
        test-tube| சோதனை குழாய்| _தனை குழாய்| சோ,`
      ]
    }
]
};
