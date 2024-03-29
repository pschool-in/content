export default {
  label: 'வாகனங்கள் மற்றும் தொழில்',
  id: 'ta-sound-8',
  lang: 'ta',
  list: [
    {
      type: 'slides',
      label: 'வாகனங்கள்',
      id: 'vehicles',
      commonData: {
        title: 'ஒலியைக் கேட்டு படத்தையும் பெயரையும் கவனிக்கவும்.',
        audio: 'ta/ta-vehicles.mp3'
      },
      data: [
        {
          text: 'aeroplane|விமானம்\nboat|படகு\nbus|பேருந்து\ncar|மகிழுந்து\ncycle|மிதிவண்டி\nship|கப்பல்\nlorry|சரக்குந்து\ntrain|தொடர்வண்டி\nambulance|அவசர ஊர்தி\nauto|ஆட்டோ',
          audioOffset: 0
        },
        {
          text: 'metro|மெட்ரோ\nfire-engine|தீயணைப்பு வாகனம்\nrocket|ஏவூர்தி\nsubmarine|நீர்மூழ்கிக்கப்பல்\nspaceship|விண்கலம்\nmotorbike|மோட்டார்சைக்கிள்',
          audioOffset: 20
        },
        {
          text: 'tractor|இழுவை இயந்திரம்\nbullock-cart|மாட்டுவண்டி\nhorse-carriage|குதிரைவண்டி\npalanquin|பல்லக்கு\nchariot|தேர்',
          audioOffset: 32
        }
      ]
    },
    {
      type: 'slides',
      label: 'தொழில்',
      id: 'jobs',
      commonData: {
        title: 'ஒலியைக் கேட்டு படத்தையும் பெயரையும் கவனிக்கவும்.',
        audio: 'ta/ta-jobs.mp3'
      },
      data: [
        {
          text: 'astronaut|விண்வெளிவீரர்\nclown|கோமாளி\nfisherman|மீனவர்\npostman|தபால்காரர்\nteacher|ஆசிரியர்\nblacksmith|கொல்லர்\ncobbler|செருப்புத்தைப்பவர்\ngoldsmith|பொற்கொல்லர்\npotter|குயவர்\nweaver|நெசவாளர்',
          audioOffset: 0
        },
        {
          text: 'carpenter|தச்சர்\ndiver|நீர்மூழ்கிவீரர்\nnurse|செவிலியர்\nsailor|மாலுமி\nchef|சமையல்காரர்\ndoctor|மருத்துவர்\npolice|காவலர்\nsoldier|சிப்பாய்\nbarber|முடி திருத்துபவர்\nwasherman|சலவை தொழிலாளி',
          audioOffset: 20
        },
        {
          text: 'milkman|பால்காரர்\nshopkeeper|கடைக்காரர்\nbusinessman|தொழிலதிபர்\ncashier|காசாளர்\nfarmer|விவசாயி\nmechanic|இயந்திர வல்லுநர்\npilot|விமானி\nscientist|விஞ்ஞானி\nseller|விற்பனையாளர்',
          audioOffset: 40
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: வாகனங்கள்',
      id: 'find-vehicles',
      commonData: {
        type: 'image',
        title: 'ஒலியைக் கேட்டு, படத்தை தேர்வு செய்யவும்.',
        audio: 'ta/ta-vehicles.mp3'
      },
      data: [
        {
          words: 'aeroplane,boat,bus,car,cycle,ship,lorry,train,ambulance,auto',
          audioOffset: 0
        },
        {
          words:
            'metro,fire-engine,rocket,submarine,spaceship,motorbike,tractor',
          audioOffset: 20
        },
        {
          words: 'bullock-cart,horse-carriage,palanquin,chariot',
          audioOffset: 34
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: தொழில்',
      id: 'find-jobs',
      commonData: {
        type: 'image',
        title: 'ஒலியைக் கேட்டு, படத்தை தேர்வு செய்யவும்.',
        audio: 'ta/ta-jobs.mp3'
      },
      data: [
        {
          words:
            'astronaut,clown,fisherman,postman,teacher,blacksmith,cobbler,goldsmith,potter,weaver',
          audioOffset: 0
        },
        {
          words:
            'carpenter,diver,nurse,sailor,chef,doctor,police,soldier,barber,washerman',
          audioOffset: 20
        },
        {
          words:
            'milkman,shopkeeper,businessman,cashier,farmer,mechanic,pilot,scientist,seller',
          audioOffset: 40
        }
      ]
    }
  ]
};
