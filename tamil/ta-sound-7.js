export default {
  label: 'ஓசை: வேலை, கருவி',
  id: 'ta-sound-7',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'work',
      label: 'வேலை',
      commonData: {
        audio: 'ta/ta-jobs-vehicles.mp3',
        title: 'வேலை : படமும் ஒலியும்'
      },
      data: [
        {
          text: `postman| தபால்காரர்
teacher| ஆசிரியர்
nurse| செவிலியர்
chef| சமையல்காரர்
doctor| மருத்துவர்
police| காவலர்
fisherman| மீனவர்
sailor| மாலுமி
carpenter| தச்சர்
weaver| நெசவாளர்`
        },
        {
          audioOffset: 20,
          text: `soldier| சிப்பாய்
astronaut| விண்வெளி வீரர்
clown| கோமாளி
barber| முடிதிருத்துபவர்
washerman| சலவைதொழிலாளர்
blacksmith| கொல்லர் 
cobbler| செருப்புதைப்பவர்`
        },
        {
          audioOffset: 34,
          text: `potter| குயவர்
diver| நீர்மூழ்கிவீரர்
milkman| பால்காரர்
shopkeeper| கடைக்காரர்
warrior| போர்வீரர்
goldsmith| பொற்கொல்லர்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'வாகனங்கள்',
      commonData: {
        audio: 'ta/ta-jobs-vehicles.mp3',
        title: 'வாகனங்கள் : படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 46,
          text: `bus| பேருந்து
car| மகிழுந்து
cycle| மிதிவண்டி
aeroplane| விமானம்
boat| படகு
ship| கப்பல்
train| தொடர்வண்டி
palanquin| பல்லக்கு
chariot| தேர்`
        },
        {
          audioOffset: 64,
          text: `ambulance| அவசர ஊர்தி
tractor| இழுவை இயந்திரம்
cart| கட்டை வண்டி
fire-engine| தீயணைப்பு வாகனம்
lorry| சரக்குந்து
rocket| ஏவுகணை 
submarine| நீர்மூழ்கிக்கப்பல்
bullock-cart| மாட்டுவண்டி
horse-carriage| குதிரைவண்டி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'music-instruments',
      label: 'இசைக்கருவிகள்',
      data: {
        title: 'இசைக்கருவிகள் : படமும் ஒலியும்',
        audio: 'ta/ta-instruments-devices.mp3',
        text: ` veenai| வீணை
conch| சங்கு
drums| முரசு
dhol| மத்தளம்
flute| புல்லாங்குழல்
tabla| தபேலா
violin| வயலின்
yazl| யாழ்
damaru| உடுக்கை
nadaswaram| நாதசுவரம்`
      }
    },
    {
      type: 'slides',
      id: 'devices',
      label: 'கருவிகள்',
      commonData: {
        audio: 'ta/ta-instruments-devices.mp3',
        title: 'கருவிகள் : படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 20,
          text: `camera| புகைப்படக்கருவி
smartphone| கைபேசி
speaker| ஒலிப்பெருக்கி
tv| தொலைக்காட்சி
computer| கணினி
laptop| மடிக்கணினி`
        },
        {
          audioOffset: 32,
          text: `balance| தராசு
blackboard| கரும்பலகை
hose| குழாய்
needle| ஊசி
axe| கோடரி
thermometer| வெப்பமானி
saw| ரம்பம்
microscope| நுண்ணோக்கி
plier| இடுக்கி
plough| கலப்பை`
        },

        {
          audioOffset: 52,
          text: `spade| மண்வெட்டி
trowel| கரணை
awl| குத்தூசி
compass| திசைகாட்டி
screw| திருகு
screwdriver| திருப்புளி
telescope| தொலைநோக்கி
test-tube| சோதனை குழாய்`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'வேலை - தேர்வு செய்க',
      id: 'pick-jobs',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-jobs-vehicles.mp3'
      },
      data: [
        {
          words:
            'postman, teacher, nurse, chef, doctor, police, fisherman, sailor, carpenter, weaver'
        },
        {
          audioOffset: 20,
          words: `soldier, astronaut, clown, barber, washerman, blacksmith, cobbler`
        },
        {
          audioOffset: 34,
          words: 'potter, diver, milkman, shopkeeper, warrior, goldsmith'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'வாகனங்கள் - தேர்வு செய்க',
      id: 'pick-vehicles',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-jobs-vehicles.mp3'
      },
      data: [
        {
          audioOffset: 46,
          words:
            'bus, car, cycle, aeroplane, boat, ship, train, palanquin, chariot'
        },
        {
          audioOffset: 64,
          words: `ambulance, tractor, cart, fire-engine, lorry, rocket, submarine, bullock-cart, horse-carriage`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'இசைக்கருவிகள் - தேர்வு செய்க',
      id: 'pick-music',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-instruments-devices.mp3',
        words:
          'veenai, conch, drums, dhol, flute, tabla, violin, yazl, damaru, nadaswaram'
      }
    },
    {
      type: 'rightOne',
      label: 'கருவிகள் - தேர்வு செய்க',
      id: 'pick-devices',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-instruments-devices.mp3'
      },
      data: [
        {
          audioOffset: 20,
          words: 'camera, smartphone, speaker, tv, computer, laptop'
        },
        {
          audioOffset: 32,
          words: `balance, blackboard, hose, needle, axe, thermometer, saw, microscope, plier, plough`
        },
        {
          audioOffset: 52,
          words: `spade, trowel, awl, compass, screw, screwdriver, telescope, test-tube`
        }
      ]
    }
  ]
};
