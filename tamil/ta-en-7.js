export default {
  label: 'மனிதன் - வேலை - கருவி',
  id: 'ta-en-7',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: `குறிப்புகள்  `,
      data: {
        title: `வேலை`,
        text: [
          `postman, தபால்காரர்
teacher, ஆசிரியர்
nurse, செவிலியர்
chef, சமையல்காரர்
doctor, மருத்துவர்
police, காவலர்
fisherman, மீனவர்
sailor, மாலுமி
carpenter, தச்சர்
weaver, நெசவாளர்`,

          `soldier, சிப்பாய்
astronaut, விண்வெளி வீரர்
clown, கோமாளி
barber, முடிதிருத்துபவர்
washerman, சலவைதொழிலாளர்
blacksmith, கொல்லர்
cobbler, செருப்புதைப்பவர்`,

          `potter, குயவர்
diver, நீர்மூழ்கிவீரர்
milkman, பால்காரர்
shopkeeper, கடைக்காரர்
warrior, போர்வீரர்
goldsmith, பொற்கொல்லர்`,

          `# வாகனங்கள் `,
          `bus, பேருந்து
car, மகிழுந்து
cycle, மிதிவண்டி
aeroplane, விமானம்
boat, படகு
ship, கப்பல்
train, தொடர்வண்டி
palanquin, பல்லக்கு
chariot, தேர்`,

          `ambulance, அவசர ஊர்தி
tractor, இழுவை இயந்திரம்
cart, கட்டை வண்டி
fire engine, தீயணைப்பு வாகனம்
lorry, சரக்குந்து
rocket, ஏவுகணை 
submarine, நீர்மூழ்கிக்கப்பல்
bullock cart, மாட்டுவண்டி
horse carriage, குதிரைவண்டி`,

          `# இசைக்கருவிகள்`,
          `drums, முரசு
flute, புல்லாங்குழல்
conch, சங்கு
violin, வயலின்`,

          '# கருவிகள்',
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
thermometer, வெப்பமானி
saw, ரம்பம்
microscope, நுண்ணோக்கி
plier, இடுக்கி
plough, கலப்பை`,

          `spade, மண்வெட்டி
trowel, கரணை
awl, குத்தூசி
compass, திசைகாட்டி
screw, திருகு
screwdriver, திருப்புளி
telescope, தொலைநோக்கி
test tube, சோதனை குழாய்`
        ]
      }
    },
    {
      id: 'match-jobs',
      type: 'match',
      label: 'வேலை - பொருத்துக',
      commonData: {
        title: 'வேலை - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
        `postman, தபால்காரர்
teacher, ஆசிரியர்
nurse, செவிலியர்
chef, சமையல்காரர்
doctor, மருத்துவர்`,

        `police, காவலர்
fisherman, மீனவர்
sailor, மாலுமி
carpenter, தச்சர்
weaver, நெசவாளர்`,

        `soldier, சிப்பாய்
astronaut, விண்வெளி வீரர்
clown, கோமாளி
barber, முடிதிருத்துபவர்
washerman, சலவைதொழிலாளர்`,

        `blacksmith, கொல்லர்
cobbler, செருப்புதைப்பவர்
potter, குயவர்
diver, நீர்மூழ்கிவீரர்`,

        `milkman, பால்காரர்
shopkeeper, கடைக்காரர்
warrior, போர்வீரர்
goldsmith, பொற்கொல்லர்`
      ]
    },
    {
      id: 'match-vehicles',
      type: 'match',
      label: 'வாகனங்கள் - பொருத்துக',
      commonData: {
        title: 'வாகனங்கள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
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
rocket, ஏவுகணை 
submarine, நீர்மூழ்கிக்கப்பல்
bullock cart, மாட்டுவண்டி
horse carriage, குதிரைவண்டி`
      ]
    },
    {
      id: 'match-music',
      type: 'match',
      label: 'இசைக்கருவிகள் - பொருத்துக',
      data: {
        title: 'இசைக்கருவிகள் - பொருத்துக',
        fontSize: '1rem',
        text: `drums, முரசு
        flute, புல்லாங்குழல்
        conch, சங்கு
        violin, வயலின்`
      }
    },
    {
      id: 'match-devices',
      type: 'match',
      label: 'கருவிகள் - பொருத்துக',
      commonData: {
        title: 'கருவிகள் - பொருத்துக',
        fontSize: '1rem'
      },
      data: [
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
