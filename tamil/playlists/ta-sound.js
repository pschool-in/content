export default {
  label: 'ஓசை',
  id: 'ta-sound',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'animals',
      label: 'விலங்குகள்',
      commonData: {
        audio: 'ta-animals.mp3',
        title: 'விலங்குகள்: படமும் ஒலியும்'
      },
      data: [
        {
          audioOffset: 2,
          text: `cat | பூனை
dog | நாய்
goat | ஆடு
sheep | செம்மறி ஆடு
horse | குதிரை
pig | பன்றி
elephant | யானை  
lion | சிங்கம் 
monkey | குரங்கு 
tiger | புலி `
        },
        {
          audioOffset: 22,
          text: `hippo | நீர்யானை
rhino | காண்டாமிருகம்
fox | நரி
crocodile | முதலை
zebra | வரிக்குதிரை 
bear | கரடி 
camel | ஒட்டகம்
shark | சுறாமீன்
whale | திமிங்கிலம்
dragonfly | தட்டான்`
        },
        {
          audioOffset: 42,
          text: `fish | மீன்
frog | தவளை
crab | நண்டு
snake | பாம்பு 
squirrel | அணில் 
tortoise | ஆமை
rat | எலி
winged-termites | ஈசல்
ant | எறும்பு
fly | ஈ`
        },
        {
          audioOffset: 62,
          text: `bat | வௌவால்  
buffalo | எருமை
butterfly | வண்ணத்துப்பூச்சி  
cow | மாடு
donkey | கழுதை  
giraffe | ஒட்டகச்சிவிங்கி
kangaroo | கங்காரு 
leopard | சிறுத்தை`
        },
        {
          audioOffset: 78,
          text: `mongoose | கீரிப்பிள்ளை
mosquito | கொசு 
wolf | ஓநாய்  
cockroach | கரப்பான் பூச்சி
garden-lizard | ஓணான்
lizard | பல்லி
rabbit| முயல் `
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'பறவைகள்',
      commonData: {
        title: 'பறவைகள் : படமும் ஒலியும்',
        audio: 'ta-birds.mp3'
      },
      data: [
        {
          audioOffset: 2,
          text: `crow | காகம்
dove | புறா
duck | வாத்து
hen | கோழி
parrot | கிளி
peacock | மயில்
sparrow | சிட்டுக்குருவி`
        },
        {
          audioOffset: 16,
          text: `chick | கோழிக்குஞ்சு
crane | கொக்கு
eagle | கழுகு
kingfisher | மீன் கொத்தி
myna | மைனா
ostrich | நெருப்புக்கோழி
owl | ஆந்தை
rooster | சேவல்
woodpecker | மரங்கொத்தி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'fruits',
      label: 'பழங்கள் ',
      commonData: {
        title: 'பழங்கள்  : படமும் ஒலியும்',
        audio: 'ta-fruits.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `grapes | திராட்சை
banana | வாழைப்பழம்
guava | கொய்யாப்பழம்
jackfruit | பலாப்பழம்
mango | மாம்பழம்
papaya | பப்பாளி`
        },
        {
          audioOffset: 12,
          text: `pineapple | அன்னாசி
pomegranate | மாதுளை
watermelon | தர்பூசணி
fig | அத்திப்பழம்
custard-apple | சீத்தாப்பழம்
dates | பேரிச்சை`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'காய்கறிகள்  ',
      commonData: {
        title: 'காய்கறிகள் : படமும் ஒலியும்',
        audio: 'ta-vegetables.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `onion | வெங்காயம்
tomato | தக்காளி 
potato | உருளைக்கிழங்கு 
cabbage | முட்டைகோசு
corn | சோளம் 
cucumber | வெள்ளரிக்காய்
garlic | பூண்டு 
ginger | இஞ்சி 
pumpkin | பரங்கிக்காய்
almond | பாதாம் `
        },
        {
          audioOffset: 20,
          text: `bitter-gourd | பாகற்காய்  
brinjal | கத்திரிக்காய் 
capsicum | குடை மிளகாய் 
cashewnut | முந்திரி  
chilli | பச்சைமிளகாய்
coconut | தேங்காய் 
corianderleaf  | கொத்தமல்லி
curryleaf | கருவேப்பிலை`
        },
        {
          audioOffset: 36,
          text: `drumstick | முருங்கைக்காய்
greenpeas | பச்சை பட்டாணி
ladies-finger | வெண்டைக்காய் 
mintleaf | புதினா
peanut | வேர்க்கடலை
raddish | முள்ளங்கி
spinach | கீரை`
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'பூக்கள்',
      data: {
        title: 'பூக்கள் : படமும் ஒலியும்',
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 3,
        audioWidth: 3,
        text: `rose | ரோஜா 
lotus | தாமரை
sunflower | சூரியகாந்தி
marigold | சாமந்தி
hibiscus | செம்பருத்தி
jasmine | மல்லி `
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'உடல் உறுப்புகள்',
      data: {
        title: 'உடல் உறுப்புகள்',
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 23,
        text: `ear | காது 
eye | கண் 
foot | பாதம் 
hair | முடி 
hand | கை 
mouth | வாய் 
nose | மூக்கு 
tooth | பல் `
      }
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'வாகனங்கள்',
      commonData: {
        audio: 'ta-vehicles.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `aeroplane | விமானம்
boat | படகு
bus | பேருந்து
car | மகிழுந்து
cycle | மிதிவண்டி
ship | கப்பல்`
        },
        {
          audioOffset: 12,
          text: `train | தொடர்வண்டி 
ambulance | அவசர ஊர்தி
fire-engine | தீயணைப்பு வாகனம்
lorry | சரக்குந்து 
tractor | இழுவை இயந்திரம்`
        }
      ]
    },
    {
      type: 'slides',
      id: 'tools',
      label: 'கருவிகள்',
      commonData: {
        audio: 'ta-tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `axe | கோடரி
balance | தராசு
blackboard | கரும்பலகை
microscope | நுண்ணோக்கி
needle | ஊசி
plough | கலப்பை
saw | இரம்பம்
spade | மண்வெட்டி`
        },
        {
          audioOffset: 16,
          text: `telescope | தொலைநோக்கி
testtube | சோதனை குழாய்
thermometer | வெப்பமானி
trowel | கரணை
compass | திசைகாட்டி`
        }
      ]
    },
    {
      type: 'slides',
      id: 'others',
      label: 'படமும் பெயரும் ',
      commonData: {
        audio: 'ta-others.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `sun | சூரியன்
moon | நிலா
rain | மழை
star | நட்சத்திரம்
milk | பால்
ring | மோதிரம்
brush | தூரிகை
bone | எலும்பு துண்டு
auvai | ஔவை
bell | மணி`
        },
        {
          audioOffset: 20,
          text: `bird | பறவை
conch | சங்கு
five | ஐந்து
food | உணவு
fruits | பழங்கள்
king | அரசன்
kite | பட்டம்
ladder | ஏணி`
        },
        {
          audioOffset: 36,
          text: `ladoo | லட்டு
leaf | இலை
rishi | முனிவர்
wheel | சக்கரம்
whistle | ஊதல்
world | உலகம்
yazl | யாழ்`
        },
        {
          audioOffset: 50,
          text: `house | வீடு
table | மேசை
bed | மெத்தை
candle | மெழுகுவர்த்தி
chair | நாற்காலி
shelf | அலமாரி
baby | குழந்தை
boy | சிறுவன்
girl | சிறுமி`
        },
        {
          audioOffset: 68,
          text: `man | ஆண்
woman | பெண்
ball | பந்து
glasses | மூக்கு கண்ணாடி
clock | கடிகாரம்
watch | கைக்கடிகாரம்`
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
        audio: 'ta-animals.mp3'
      },
      data: [
        {
          audioOffset: 2,
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audioOffset: 22,
          words:
            'hippo, rhino, fox, crocodile, zebra, bear, camel, shark, whale, dragonfly'
        },
        {
          audioOffset: 42,
          words:
            'fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant, fly'
        },
        {
          audioOffset: 62,
          words:
            'bat, buffalo, butterfly,cow, donkey, giraffe, kangaroo, leopard'
        },
        {
          audioOffset: 78,
          words:
            'mongoose, mosquito, wolf, cockroach, garden-lizard, lizard,  rabbit  '
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
        audio: 'ta-birds.mp3'
      },
      data: [
        {
          audioOffset: 2,
          words: 'crow, dove, duck, hen, parrot, peacock, sparrow'
        },
        {
          audioOffset: 16,
          words:
            'chick,crane, eagle, kingfisher, myna, ostrich, owl, rooster, woodpecker'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'பழங்கள் - தேர்வு செய்க',
      id: 'pick-fruit',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-fruits.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'grapes, banana, guava, jackfruit, mango, papaya'
        },
        {
          audioOffset: 12,
          words: 'pineapple, pomegranate, watermelon, fig, custard-apple, dates'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'காய்கறிகள் - தேர்வு செய்க',
      id: 'pick-vegetable',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-vegetables.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'onion, tomato, potato, cabbage, corn, cucumber, garlic, ginger, pumpkin, almond'
        },
        {
          audioOffset: 20,
          words:
            'bitter-gourd, brinjal, capsicum, cashewnut, chilli, coconut, corianderleaf , curryleaf'
        },
        {
          audioOffset: 36,
          words:
            'drumstick, greenpeas, ladies-finger, mintleaf, peanut, raddish, spinach'
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
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 3,
        audioWidth: 3,
        words: 'rose, lotus, sunflower, marigold, hibiscus, jasmine'
      }
    },
    {
      type: 'rightOne',
      label: 'உடல் உறுப்புகள் - தேர்வு செய்க',
      id: 'pick-bodyParts',
      data: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-flowers-bodyParts.mp3',
        audioOffset: 23,
        words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
      }
    },
    {
      type: 'rightOne',
      label: 'வாகனங்கள் - தேர்வு செய்க',
      id: 'pick-vehicle',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-vehicles.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'aeroplane, boat, bus, car, cycle, ship'
        },
        {
          audioOffset: 12,
          words: 'train, ambulance, fire-engine, lorry, tractor'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'கருவிகள் - தேர்வு செய்க',
      id: 'pick-tool',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'axe, balance, blackboard, microscope, needle,  plough, saw, spade'
        },
        {
          audioOffset: 16,
          words: 'telescope, testtube, thermometer, trowel, compass'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'தேர்வு செய்க',
      id: 'pick-others',
      commonData: {
        title: 'ஒலியை கேட்டு தேர்வு செய்க.',
        type: 'image',
        audio: 'ta-others.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'sun, moon, rain, star, milk, ring, brush, bone, auvai, bell'
        },
        {
          audioOffset: 20,
          words: 'bird, conch, five, food, fruits, king, kite, ladder'
        },
        {
          audioOffset: 36,
          words: 'ladoo, leaf, rishi, wheel, whistle, world, yazl'
        },
        {
          audioOffset: 50,
          words: 'house, table, bed, candle, chair, shelf, baby, boy, girl'
        },
        {
          audioOffset: 68,
          words: 'man, woman, ball, glasses, clock, watch'
        }
      ]
    }
  ]
};
