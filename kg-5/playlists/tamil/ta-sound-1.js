export default {
  label: 'ஓசை',
  id: 'ta-sound-1',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'விலங்குகள்',
      commonData: {
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3',
        title: 'விலங்குகள்: படமும் ஒலியும்'
      },
      data: [
        {
          text: `cat| பூனை 
dog| நாய் 
goat| ஆடு
horse| குதிரை
pig| பன்றி
elephant| யானை
lion| சிங்கம் 
monkey| குரங்கு
tiger| புலி`
        },
        {
          audioOffset: 18,
          text: `fox| நரி
bear| கரடி
camel| ஒட்டகம்
fish| மீன்
frog| தவளை
snake| பாம்பு
squirrel| அணில்
tortoise|  ஆமை` 
        },
        {
          audioOffset: 34,
          text: `rat| எலி
buffalo|  எருமை
butterfly|  வண்ணத்துப்பூச்சி
cow|  பசு 
donkey| கழுதை
giraffe| ஒட்டகச்சிவிங்கி
mosquito| கொசு
fly| ஈ`
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'பறவைகள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3'
      },
      data: [
        {
          audioOffset: 50,
          text: `crow| காகம் 
          dove| புறா   
          duck| வாத்து
          hen| கோழி 
          parrot| கிளி
          peacock| மயில்`
        },
        {
          audioOffset: 62,
          text: `crane| கொக்கு
          rooster| சேவல்
          koel| குயில்
          eagle| கழுகு
          myna| மைனா
          owl| ஆந்தை`
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'பூக்கள்',
      data: {
        title: 'பூக்கள் : படமும் ஒலியும்',
        audioOffset: 74,
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3',
        text: `rose| ரோஜா
        lotus| தாமரை
        sunflower| சூரியகாந்தி
        hibiscus| செம்பருத்தி
        mogra| குண்டு மல்லி
        jasmine| முல்லை`
      }
    },
    {
      type: 'slides',
      id: 'body-parts',
      label: 'உடல் உறுப்புகள்',
      data: {
        title: 'உடல் உறுப்புகள் : படமும் ஒலியும்',
        audioOffset: 86,
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3',
        text: `ear| காது 
        eye| கண் 
        foot| பாதம் 
        hair| முடி
        hand| கை
mouth| வாய் 
nose| மூக்கு 
tooth| பல்`
      }
    },

    {
      type: 'slides',
      id: 'fruits',
      label: 'பழங்கள்',
      commonData: {
        title: 'பழங்கள் : படமும் ஒலியும்',
        audio: 'ta/ta-fruits-veg-1.mp3'
      },
      data: [
        {
          text: `apple| ஆப்பிள்
          grapes| திராட்சை
          banana| வாழைப்பழம்
          guava| கொய்யாப்பழம்
          jackfruit| பலாப்பழம் 
          mango| மாம்பழம்`
        },
        {
          audioOffset: 12,
          text: `orange| ஆரஞ்சு
          papaya| பப்பாளி
          pineapple| அன்னாசி
          pomegranate| மாதுளை 
          watermelon| தர்பூசணி
          sugarcane| கரும்பு`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'காய்கறிகள்',
      commonData: {
        title: 'காய்கறிகள் : படமும் ஒலியும்',
        audio: 'ta/ta-fruits-veg-1.mp3'
      },
      data: [
        {
          audioOffset: 24,
          text: `carrot| காரட்
          beetroot| பீட்ரூட்
          onion| வெங்காயம்
          tomato| தக்காளி
          potato| உருளைக்கிழங்கு
          cabbage| முட்டைகோசு
          raw-banana| வாழைக்காய்
garlic| பூண்டு`
        },
        {
          audioOffset: 40,
          text: `ginger| இஞ்சி
          radish| முள்ளங்கி
          bitter-gourd| பாகற்காய்
          brinjal| கத்திரி
          chilli| பச்சைமிளகாய்
coconut| தேங்காய்
ladies-finger| வெண்டைக்காய்
drumstick | முருங்கைக்காய்`
        },
        {
          audioOffset: 56,
          text: `tamarind| புளி
          mushroom| காளான்
          curryleaf| கருவேப்பிலை
corianderleaf|கொத்தமல்லி
mintleaf | புதினா
spinach| கீரை
tulsi| துளசி
turmeric| மஞ்சள்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'வாகனங்கள்',
      data: {
        title: 'வாகனங்கள் : படமும் ஒலியும்',
        audio: 'ta/ta-vehicles-jobs-house-1.mp3',
        text: `bus| பேருந்து
        car| மகிழுந்து
        cycle| மிதிவண்டி
        aeroplane| விமானம்
        boat| படகு
        bullock-cart| மாட்டு வண்டி
horse-carriage| குதிரை வண்டி
ship| கப்பல்
train| தொடர்வண்டி`
      }
    },
    {
      type: 'slides',
      id: 'job',
      label: 'தொழில்',
      data: {
        title: 'தொழில் : படமும் ஒலியும்',
        audioOffset: 18,
        audio: 'ta/ta-vehicles-jobs-house-1.mp3',
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
      }
    },
    {
      type: 'slides',
      id: 'house',
      label: 'வீடு',
      commonData: {
        title: 'வீடு : படமும் ஒலியும்',
        audio: 'ta/ta-vehicles-jobs-house-1.mp3'
      },
      data: [
        {
          audioOffset: 38,
          text: `house| வீடு
          table| மேசை
          bed| மெத்தை
          candle| மெழுகுவர்த்தி
          baby | குழந்தை
          boy| சிறுவன்
          girl| சிறுமி
man| ஆண்
woman| பெண்
grandfather| தாத்தா`
        },
        {
          audioOffset: 58,
          text: `bucket| வாளி
          toilet| கழிப்பறை
          ball| பந்து
balloon| பலூன்
glasses| மூக்குகண்ணாடி
clock| கடிகாரம் 
watch| கைக்கடிகாரம்
flower-pot| பூந்தொட்டி
umbrella| குடை
door| கதவு`
        },
        {
          audioOffset: 78,
          text: `window| ஜன்னல்
          chair| நாற்காலி
          shelf| அலமாரி
          broom| துடைப்பம்
          air-conditioner| குளிரூட்டி
soap| சவர்க்காரம்
pillow| தலையணை
basket| கூடை
dustbin| குப்பை தொட்டி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'food',
      label: 'உணவுப்பொருட்கள்',
      data: {
        title: 'உணவுப்பொருட்கள் : படமும் ஒலியும்',
        audio: 'ta/ta-food-nature-others-1.mp3',
        text: `chocolate| மிட்டாய்
milk| பால்
ladoo| லட்டு
sugar|சர்க்கரை
ice-cream| பனிக்கூழ்
sweets|இனிப்பு
bread| ரொட்டி
juice| பழச்சாறு`
      }
    },
    {
      type: 'slides',
      id: 'others',
      label: 'கூடுதல் பயிற்சி',
      commonData: {
        title: 'கூடுதல் பயிற்சி : படமும் ஒலியும்',
        audio: 'ta/ta-food-nature-others-1.mp3'
      },
      data: [
        {
          audioOffset: 16,
          text: `sun| சூரியன்
          moon | நிலா
          rain| மழை
          star| நட்சத்திரம்
          ring| மோதிரம்
          bird| பறவை
five| ஐந்து
fruits| பழங்கள்
king| அரசன்
kite| பட்டம்`
        },
        {
          audioOffset: 36,
          text: `ladder| ஏணி
          leaf|  இலை
          wheel| சக்கரம்
          world| உலகம்
          auvai| ஔவை
          bow| வில்
arrow| அம்பு
top| பம்பரம்
stick| குச்சி
whistle| ஊதல்`
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'விலங்குகள் - தேர்வு செய்க',
      id: 'pick-animal',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3'
      },
      data: [
        {
          words: 'cat, dog, goat, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audioOffset: 18,
          words: 'fox, bear, camel, fish, frog, snake, squirrel, tortoise'
        },
        {
          audioOffset: 34,
          words: 'rat, buffalo, butterfly, cow, donkey, giraffe, mosquito, fly'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பறவைகள் - தேர்வு செய்க',
      id: 'pick-bird',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3'
      },
      data: [
        {
          audioOffset: 50,
          words: 'crow, dove, duck, hen, parrot, peacock'
        },
        {
          audioOffset: 62,
          words: 'crane, rooster, koel, eagle, myna, owl'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பூக்கள் - தேர்வு செய்க',
      id: 'pick-flower',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3',
        audioOffset: 74,
        words: 'rose, lotus, sunflower, hibiscus, mogra, jasmine'
      }
    },
    {
      type: 'rightOne',
      label: 'உடல் உறுப்புகள் - தேர்வு செய்க',
      id: 'pick-body-parts',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-animals-birds-bodyparts-1.mp3',
        audioOffset: 86,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'பழங்கள் - தேர்வு செய்க',
      id: 'pick-fruits',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-veg-1.mp3'
      },
      data: [
        {
          words: 'apple, grapes, banana, guava, jackfruit, mango'
        },
        {
          audioOffset: 12,
          words: 'orange, papaya, pineapple, pomegranate, watermelon, sugarcane'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'காய்கறிகள் - தேர்வு செய்க',
      id: 'pick-vegetables',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-fruits-veg-1.mp3'
      },
      data: [
        {
          audioOffset: 24,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, raw-banana, garlic'
        },
        {
          audioOffset: 40,
          words:
            'ginger, radish, bitter-gourd, brinjal, chilli, coconut, ladies-finger, drumstick'
        },
        {
          audioOffset: 56,
          words:
            'tamarind, mushroom, curryleaf, corianderleaf, mintleaf, spinach, tulsi, turmeric'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'வாகனங்கள் - தேர்வு செய்க',
      id: 'pick-vehicles',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-vehicles-jobs-house-1.mp3',
        words:
          'bus, car, cycle, aeroplane, boat, bullock-cart, horse-carriage, ship, train'
      }
    },
    {
      type: 'rightOne',
      label: 'தொழில் - தேர்வு செய்க',
      id: 'pick-job',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-vehicles-jobs-house-1.mp3',
        audioOffset: 18,
        words:
          'postman, teacher, nurse, chef, doctor, police, fisherman, sailor, carpenter, weaver'
      }
    },
    {
      type: 'rightOne',
      label: 'வீடு - தேர்வு செய்க',
      id: 'pick-house',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-vehicles-jobs-house-1.mp3'
      },
      data: [
        {
          audioOffset: 38,
          words:
            'house, table, bed, candle, baby, boy, girl, man, woman, grandfather'
        },
        {
          audioOffset: 58,
          words:
            'bucket, toilet, ball, balloon, glasses, clock, watch, flower-pot, umbrella, door'
        },
        {
          audioOffset: 78,
          words:
            'window, chair, shelf, broom, air-conditioner, soap, pillow, basket, dustbin'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'உணவுப்பொருட்கள் - தேர்வு செய்க',
      id: 'pick-food',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-food-nature-others-1.mp3',
        words: 'chocolate, milk, ladoo, sugar, ice-cream, sweets, bread, juice'
      }
    },
    {
      type: 'rightOne',
      label: 'கூடுதல் பயிற்சி - தேர்வு செய்க',
      id: 'pick-others',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta/ta-food-nature-others-1.mp3'
      },
      data: [
        {
          audioOffset: 16,
          words: 'sun, moon, rain, star, ring, bird, five, fruits, king, kite'
        },
        {
          audioOffset: 36,
          words:
            'ladder, leaf, wheel, world, auvai, bow, arrow, top, stick, whistle'
        }
      ]
    }
  ]
};
