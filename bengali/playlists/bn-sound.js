export default {
  label: 'শব্দ',
  id: 'bn-sound',
  img: 'sound',
  list: [
    {
      type: 'slides',
      id: 'birds',
      label: 'Birds',
      commonData: {
        audio: 'bn-birds.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `crow | কাক 
            dove |  পায়রা
 duck| হাঁস 
 hen| মুরগি
 parrot| টিয়া পাখি
 peacock| ময়ূর
 sparrow| চড়ুই, চড়াই
 chick| মুরগিছানা
crane| সারস পাখি`
        },
        {
          audioOffset: 18,
          text: `kingfisher|মাছরাঙ্গা
 myna|মায়না
 ostrich| উটপাখি
 owl| পেঁচা
 rooster| মোরগ
 vulture| শকুন
 woodpecker | কাঠঠোকরা `
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'bn-flowers-bodyParts-kitchen.mp3',
        audioOffset: 0,
        text: `rose | গোলাপ
lotus | পদ্ম 
sunflower | সূর্যমুখী 
marigold | গাঁদা 
hibiscus | জবা
jasmine | জুঁই `
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'Parts of Body',
      data: {
        audio: 'bn-flowers-bodyParts-kitchen.mp3',
        audioOffset: 12,
        text: `ear | কান
eye | চোখ
foot | পা
hair | চুল
hand | হাত
mouth | মুখ
nose | নাক
tooth | দাঁত `
      }
    },
    {
      type: 'slides',
      id: 'bodyParts',
      label: 'Kitchen',
      data: {
        audio: 'bn-flowers-bodyParts-kitchen.mp3',
        audioOffset: 28,
        text: `stove | চুলা
fork | কাঁটাচামচ 
knife | ছুরি
pan | চাটু
spoon | চামচ
pot | পাত্র
butter | মাখন`
      }
    },
    {
      type: 'slides',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        audio: 'bn-fruits.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `apple | আপেল
grapes | আঙুর
banana | কলা
guava | পেয়ারা
jackfruit | কাঁঠাল 
mango | আম
orange | কমলা লেবু
papaya | পেঁপে `
        },
        {
          audioOffset: 16,
          text: `pineapple | আনারস
pomegranate | ডালিম
watermelon | তরমুজ
fig | ডুমুর
custard-apple | আতা
dates | খেজুর
muskmelon | খরবুজ`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        audio: 'bn-vegetables.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `carrot | গাজর
beetroot | বিট
onion | পেঁয়াজ 
tomato | টমেটো
potato | আলু
cabbage | বাঁধাকপি
cauliflower | ফুলকপি
corn | ভুট্টা
cucumber | শসা
garlic | রসুন`
        },
        {
          audioOffset: 20,
          text: `ginger | আদা
pumpkin | কুমড়
almond | বাদাম
bitter-gourd | করলা
brinjal | বেগুন
cashewnut | কাজুবাদাম
chilli | লঙ্কা
coconut | নারকেল
corianderleaf | ধনেপাতা
curryleaf | কারিপাতা`
        },
        {
          audioOffset: 40,
          text: `drumstick | সজনেডাঁটা
greenpeas | মটরশুটি
ladies-finger | ভিন্ডি
mintleaf | পুদিনা
peanut | চিনাবাদাম
raddish | মূলো
spinach | পালং শাক`
        }
      ]
    },
    {
      type: 'slides',
      id: 'vehicles',
      label: 'Vehicles',
      data: {
        audio: 'bn-vehicles.mp3',
        audioOffset: 0,
        text: `aeroplane | বিমান
          boat | নৌকা
          bus | বাস
          car | কার
          ship | জাহাজ
          train | রেল গাড়ি
          auto | অটো
cart | গোরুর গাড়ি
excavator | খননকারী যন্ত্র
fire-engine | দমকল`
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Words by Sound',
      id: 'pick-word',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the word.',
        type: 'image'
      },
      data: [
        {
          audio: 'bn-birds.mp3',
          words: 'crow, dove, duck, hen, parrot, peacock, sparrow, chick, crane'
        },
        {
          audio: 'bn-birds.mp3',
          audioOffset: 18,
          words: 'kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 0,
          words: 'rose, lotus, sunflower, marigold, hibiscus, jasmine'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 12,
          words: 'ear, eye, foot, hair, hand, mouth, nose, tooth'
        },
        {
          audio: 'bn-flowers-bodyParts-kitchen.mp3',
          audioOffset: 28,
          words: 'stove, fork, knife, pan, spoon, pot, butter'
        },
        {
          audio: 'bn-fruits.mp3',
          audioOffset: 0,
          words:
            'apple, grapes, banana, guava, jackfruit, mango, orange, papaya'
        },
        {
          audio: 'bn-fruits.mp3',
          audioOffset: 16,
          words:
            'pineapple, pomegranate, watermelon, fig, custard-apple, dates, muskmelon'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 0,
          words:
            'carrot, beetroot, onion, tomato, potato, cabbage, cauliflower, corn, cucumber, garlic'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 20,
          words:
            'ginger, pumpkin, almond, bitter-gourd, brinjal, cashewnut, chilli, coconut, corianderleaf, curryleaf'
        },
        {
          audio: 'bn-vegetables.mp3',
          audioOffset: 40,
          words:
            'drumstick, greenpeas, ladies-finger, mintleaf, peanut, raddish, spinach'
        },
        {
          audio: 'bn-vehicles.mp3',
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, ship, train, auto, cart, excavator, fire-engine'
        }
      ]
    }
  ]
};
