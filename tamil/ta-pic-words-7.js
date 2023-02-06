export default {
  label: 'எழுதுக: வேலை, கருவி',
  id: 'ta-pic-words-7',
  img: 'sound',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'வார்த்தைகள்',
      data: {
        title: 'வார்த்தைகள்',
        text: [
          `# வேலை`,
          {
            type: 'sitewords',
            text:
              'தபால்காரர்,  ஆசிரியர்,  செவிலியர்,  சமையல்காரர்,  மருத்துவர்,  காவலர்,  மீனவர்,  மாலுமி,  தச்சர்,  நெசவாளர், சிப்பாய்,  விண்வெளி வீரர்,  கோமாளி,  முடிதிருத்துபவர்,  சலவைதொழிலாளர்,  கொல்லர்,  செருப்புதைப்பவர், குயவர்,  நீர்மூழ்கிவீரர்,  பால்காரர்,  கடைக்காரர்,  போர்வீரர்,  பொற்கொல்லர்',
            width: 115
          },
          `# வாகனங்கள்`,
          {
            type: 'sitewords',
            text:
              'பேருந்து,  மகிழுந்து,  மிதிவண்டி,  விமானம்,  படகு,  கப்பல்,  தொடர்வண்டி,  பல்லக்கு,  தேர், அவசர ஊர்தி,  இழுவை இயந்திரம்,  கட்டை வண்டி,  தீயணைப்பு வாகனம்,  சரக்குந்து,  ஏவுகணை ,  நீர்மூழ்கிக்கப்பல்,  மாட்டுவண்டி,  குதிரைவண்டி',
            width: 115
          },
          `# இசைக்கருவிகள்`,
          {
            type: 'sitewords',
            text:
              'வீணை,  சங்கு,  முரசு,  மத்தளம்,  புல்லாங்குழல்,  தபேலா,  வயலின்,  யாழ்,  உடுக்கை,  நாதசுவரம்',
            width: 115
          },
          `# கருவிகள்`,
          {
            type: 'sitewords',
            text:
              'புகைப்படக்கருவி,  கைபேசி,  ஒலிப்பெருக்கி,  தொலைக்காட்சி,  கணினி,  மடிக்கணினி, தராசு,  கரும்பலகை,  குழாய்,  ஊசி,  கோடரி,  வெப்பமானி,  ரம்பம்,  நுண்ணோக்கி,  இடுக்கி,  கலப்பை, மண்வெட்டி,  கரணை,  குத்தூசி,  திசைகாட்டி,  திருகு,  திருப்புளி,  தொலைநோக்கி,  சோதனை குழாய்',
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
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'தபால்காரர்,  ஆசிரியர்,  செவிலியர்,  சமையல்காரர்,  மருத்துவர்,  காவலர்,  மீனவர்,  மாலுமி,  தச்சர்,  நெசவாளர்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'சிப்பாய்,  விண்வெளி வீரர்,  கோமாளி,  முடிதிருத்துபவர்,  சலவைதொழிலாளர்,  கொல்லர்,  செருப்புதைப்பவர்'
        },
        {
          audioOffset: 34,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'குயவர்,  நீர்மூழ்கிவீரர்,  பால்காரர்,  கடைக்காரர்,  போர்வீரர்,  பொற்கொல்லர்'
        },
        {
          audioOffset: 46,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'பேருந்து,  மகிழுந்து,  மிதிவண்டி,  விமானம்,  படகு,  கப்பல்,  தொடர்வண்டி,  பல்லக்கு,  தேர்'
        },
        {
          audioOffset: 64,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'அவசர ஊர்தி,  இழுவை இயந்திரம்,  கட்டை வண்டி,  தீயணைப்பு வாகனம்,  சரக்குந்து,  ஏவுகணை ,  நீர்மூழ்கிக்கப்பல்,  மாட்டுவண்டி,  குதிரைவண்டி'
        },
        {
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'வீணை,  சங்கு,  முரசு,  மத்தளம்,  புல்லாங்குழல்,  தபேலா,  வயலின்,  யாழ்,  உடுக்கை,  நாதசுவரம்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'புகைப்படக்கருவி,  கைபேசி,  ஒலிப்பெருக்கி,  தொலைக்காட்சி,  கணினி,  மடிக்கணினி'
        },
        {
          audio: 'ta/ta-instruments-devices.mp3',
          audioOffset: 32,
          words:
            'தராசு,  கரும்பலகை,  குழாய்,  ஊசி,  கோடரி,  வெப்பமானி,  ரம்பம்,  நுண்ணோக்கி,  இடுக்கி,  கலப்பை'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'மண்வெட்டி,  கரணை,  குத்தூசி,  திசைகாட்டி,  திருகு,  திருப்புளி,  தொலைநோக்கி,  சோதனை குழாய்'
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
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'தபால்காரர்,  ஆசிரியர்,  செவிலியர்,  சமையல்காரர்,  மருத்துவர்,  காவலர்,  மீனவர்,  மாலுமி,  தச்சர்,  நெசவாளர்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'சிப்பாய்,  விண்வெளி வீரர்,  கோமாளி,  முடிதிருத்துபவர்,  சலவைதொழிலாளர்,  கொல்லர்,  செருப்புதைப்பவர்'
        },
        {
          audioOffset: 34,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'குயவர்,  நீர்மூழ்கிவீரர்,  பால்காரர்,  கடைக்காரர்,  போர்வீரர்,  பொற்கொல்லர்'
        },
        {
          audioOffset: 46,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'பேருந்து,  மகிழுந்து,  மிதிவண்டி,  விமானம்,  படகு,  கப்பல்,  தொடர்வண்டி,  பல்லக்கு,  தேர்'
        },
        {
          audioOffset: 64,
          audio: 'ta/ta-jobs-vehicles.mp3',
          words:
            'அவசர ஊர்தி,  இழுவை இயந்திரம்,  கட்டை வண்டி,  தீயணைப்பு வாகனம்,  சரக்குந்து,  ஏவுகணை ,  நீர்மூழ்கிக்கப்பல்,  மாட்டுவண்டி,  குதிரைவண்டி'
        },
        {
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'வீணை,  சங்கு,  முரசு,  மத்தளம்,  புல்லாங்குழல்,  தபேலா,  வயலின்,  யாழ்,  உடுக்கை,  நாதசுவரம்'
        },
        {
          audioOffset: 20,
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'புகைப்படக்கருவி,  கைபேசி,  ஒலிப்பெருக்கி,  தொலைக்காட்சி,  கணினி,  மடிக்கணினி'
        },
        {
          audio: 'ta/ta-instruments-devices.mp3',
          audioOffset: 32,
          words:
            'தராசு,  கரும்பலகை,  குழாய்,  ஊசி,  கோடரி,  வெப்பமானி,  ரம்பம்,  நுண்ணோக்கி,  இடுக்கி,  கலப்பை'
        },
        {
          audioOffset: 52,
          audio: 'ta/ta-instruments-devices.mp3',
          words:
            'மண்வெட்டி,  கரணை,  குத்தூசி,  திசைகாட்டி,  திருகு,  திருப்புளி,  தொலைநோக்கி,  சோதனை குழாய்'
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
        `postman| தபால்காரர்|______
teacher| ஆசிரியர்|_____
nurse| செவிலியர்|_____
chef| சமையல்காரர்|_______
doctor| மருத்துவர்|______
police| காவலர்|____`,

        `fisherman| மீனவர்|____
sailor| மாலுமி|___
carpenter| தச்சர்|____
weaver| நெசவாளர்|_____
soldier| சிப்பாய்|____
astronaut| விண்வெளிவீரர்|_______`,

        `clown| கோமாளி|___
barber| முடிதிருத்துபவர்|_________
washerman| சலவைதொழிலாளர்|_________
blacksmith| கொல்லர்|____
cobbler| செருப்புதைப்பவர்|_________
potter| குயவர்|____`,

        `diver| நீர்மூழ்கிவீரர்|________
milkman| பால்காரர்|_____
shopkeeper| கடைக்காரர்|______
warrior| போர்வீரர்|_____
goldsmith| பொற்கொல்லர்|______`,

        `bus| பேருந்து|____
car| மகிழுந்து|_____
cycle| மிதிவண்டி|_____
aeroplane| விமானம்|____
boat| படகு|___
ship| கப்பல்|____`,

        `train| தொடர்வண்டி|______
palanquin| பல்லக்கு|_____
chariot| தேர்|__
ambulance| அவசரஊர்தி|_______
tractor| இழுவைஇயந்திரம்|_________
cart| கட்டைவண்டி|______`,

        `fire-engine| தீயணைப்புவாகனம்|_________
lorry| சரக்குந்து|______
rocket| ஏவுகனை|____
submarine| நீர்மூழ்கிக்கப்பல்|__________
bullock-cart| மாட்டுவண்டி|______
horse-carriage| குதிரைவண்டி|______`,

        ` veenai| வீணை|__
conch| சங்கு|___
drums| முரசு|___
dhol| மத்தளம்|_____
flute| புல்லாங்குழல்|_______`,

        `tabla| தபேலா|___
violin| வயலின்|____
yazl| யாழ்|__
damaru| உடுக்கை|____
nadaswaram| நாதசுவரம்|______`,

        `camera| புகைப்படக்கருவி|_________
smartphone| கைபேசி|___
speaker| ஒலிப்பெருக்கி|_______
tv| தொலைக்காட்சி|______
computer| கணினி|___
laptop| மடிக்கணினி|______`,

        `balance| தராசு|___
blackboard| கரும்பலகை|______
hose| குழாய்|___
needle| ஊசி|__
axe| கோடரி|___
thermometer| வெப்பமானி|_____`,

        `saw| ரம்பம்|____
microscope| நுண்ணோக்கி|_____
plier| இடுக்கி|____
Plough| கலப்பை|____
spade| மண்வெட்டி|_____
trowel| கரணை|___`,

        `awl| குத்தூசி|____
compass| திசைகாட்டி|_____
screw| திருகு|___
screwdriver| திருப்புளி|_____
telescope| தொலைநோக்கி|_____
test-tube| சோதனைக்குழாய்|_______`
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
        `postman, தபால்காரர்
teacher, ஆசிரியர்
nurse, செவிலியர்
chef, சமையல்காரர்
doctor, மருத்துவர்
police, காவலர்`,

        `fisherman, மீனவர்
sailor, மாலுமி
carpenter, தச்சர்
weaver, நெசவாளர்
soldier, சிப்பாய்
astronaut, விண்வெளி வீரர்`,

        `clown, கோமாளி
barber, முடிதிருத்துபவர்
washerman, சலவைதொழிலாளர்
blacksmith, கொல்லர்
cobbler, செருப்புதைப்பவர்
potter, குயவர்`,

        `diver, நீர்மூழ்கிவீரர்
milkman, பால்காரர்
shopkeeper, கடைக்காரர்
warrior, போர்வீரர்
goldsmith, பொற்கொல்லர்`,

        `bus, பேருந்து
car, மகிழுந்து
cycle, மிதிவண்டி
aeroplane, விமானம்
boat, படகு
ship, கப்பல்`,

        `train, தொடர்வண்டி
palanquin, பல்லக்கு
chariot, தேர்
ambulance, அவசர ஊர்தி
tractor, இழுவை இயந்திரம்
cart, கட்டை வண்டி`,

        `fire-engine, தீயணைப்பு வாகனம்
lorry, சரக்குந்து
rocket, ஏவுகனை
submarine, நீர்மூழ்கிக்கப்பல்
bullock-cart, மாட்டுவண்டி
horse-carriage, குதிரைவண்டி`,

        ` veenai, வீணை
conch, சங்கு
drums, முரசு
dhol, மத்தளம்
flute, புல்லாங்குழல்`,

        `tabla, தபேலா
violin, வயலின்
yazl, யாழ்
damaru, உடுக்கை
nadaswaram, நாதசுவரம்`,
        `camera, புகைப்படக்கருவி
smartphone, கைபேசி
speaker, ஒலிப்பெருக்கி
tv, தொலைக்காட்சி
computer, கணினி
laptop, மடிக்கணினி`,

        `balance, தராசு
blackboard, கரும்பலகை
hose, குழாய்
needle, ஊசி
axe, கோடரி
thermometer, வெப்பமானி`,

        `saw, ரம்பம்
microscope, நுண்ணோக்கி
plier, இடுக்கி
Plough, கலப்பை
spade, மண்வெட்டி
trowel, கரணை`,

        `awl, குத்தூசி
compass, திசைகாட்டி
screw, திருகு
screwdriver, திருப்புளி
telescope, தொலைநோக்கி
test-tube, சோதனை குழாய்`
      ]
    }
  ]
};
