export default {
  label: 'ধ্বনি',
  id: 'bn-sound',
  img: 'sound',
  lockAfter: 7,
  list: [
    {
      type: 'slides',
      id: 'fruits',
      label: 'ফল',
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
      id: 'flowers',
      label: 'ফুল',
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
      id: 'vegetables',
      label: 'শাকসবজি',
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
      type: 'rightOne',
      label: 'শব্দ শুনে শনাক্ত করুন - ফল, ফুল, শাকসবজি',
      id: 'pick-word-fruitveg',
      commonData: {
        title: 'শব্দ শুনুন এবং সঠিক ছবিতে ক্লিক করুন',
        type: 'image'
      },
      data: [
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
        }
      ]
    },
    {
      type: 'slides',
      id: 'animals',
      label: 'পশু',
      commonData: {
        audio: 'bn-animals.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `cat | বিড়াল
  dog | কুকুর
  goat | ছাগল
  sheep | ভেড়া
  horse | ঘোড়া
  pig | শূকর
  elephant | হাতি
  lion | সিংহ
  monkey | বাঁদর
  tiger | বাঘ`
        },
        {
          audioOffset: 20,
          text: `hippo | জলহস্তী
            rhino | গণ্ডার
  fox | শিয়াল
  crocodile | কুমির
  bear | ভালুক
  camel | উট
  shark | হাঙ্গর
  whale | তিমি মাছ
  dolphin | শুশুক 
  dragonfly | ফড়িং`
        },
        {
          audioOffset: 40,
          text: `fish | মাছ
  frog | ব্যাঙ
  crab | কাঁকড়া
  snake | সাপ
  squirrel | কাঠবিড়ালি
  tortoise | কচ্ছপ
  rat | ইঁদুর
  winged-termites | উইপোকা
  ant | পিঁপড়ে
  fly | মাছি`
        },
        {
          audioOffset: 60,
          text: `bat | বাদুড়
  buffalo | মোষ
  butterfly | প্রজাপতি
  cheetah | চিতাবাঘ
  cow | গরু
  donkey | গাধা`
        },
        {
          audioOffset: 72,
          text: `mongoose | বেজি
  mosquito | মশা
  wolf | নেকড়ে বাঘ
  cockroach | আরশোলা
  lizard | টিকটিকি
  rabbit | খরগোশ`
        }
      ]
    },
    {
      type: 'slides',
      id: 'birds',
      label: 'পাখি',
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
      type: 'rightOne',
      label: 'শব্দ শুনে শনাক্ত করুন - পশু, পাখি',
      id: 'pick-word-animalbird',
      lockAfter: 4,
      commonData: {
        title: 'শব্দ শুনুন এবং সঠিক ছবিতে ক্লিক করুন',
        type: 'image'
      },
      data: [
        {
          audio: 'bn-animals.mp3',
          words:
            'cat, dog, goat, sheep, horse, pig, elephant, lion, monkey, tiger'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 20,
          words:
            'hippo, rhino, fox, crocodile, bear, camel, shark, whale, dolphin, dragonfly'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 40,
          words:
            'fish, frog, crab, snake, squirrel, tortoise, rat, winged-termites, ant, fly'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 60,
          words: 'bat, buffalo, butterfly, cheetah, cow, donkey'
        },
        {
          audio: 'bn-animals.mp3',
          audioOffset: 72,
          words: 'mongoose, mosquito, wolf, cockroach, lizard, rabbit'
        },
        {
          audio: 'bn-birds.mp3',
          words: 'crow, dove, duck, hen, parrot, peacock, sparrow, chick, crane'
        },
        {
          audio: 'bn-birds.mp3',
          audioOffset: 18,
          words: 'kingfisher, myna, ostrich, owl, rooster, vulture, woodpecker'
        }
      ]
    },

    {
      type: 'slides',
      id: 'bodyParts',
      label: 'শরীরের অংশ',
      data: {
        audio: 'bn-flowers-bodyParts-kitchen.mp3',
        audioOffset: 12,
        text: `ear | কান
  eye | চোখ
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
      id: 'kitchen',
      label: 'রান্নাঘরের জিনিসপত্র',
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
      id: 'vehicles',
      label: 'যানবাহন',
      data: {
        audio: 'bn-vehicles.mp3',
        audioOffset: 0,
        text: `aeroplane | বিমান
            boat | নৌকা
            bus | বাস
            car | কার
            ship | জাহাজ
            train | রেল গাড়ি
            auto | অটো
  cart | গোরুর গাড়ি
  excavator | খননকারী যন্ত্র
  fire-engine | দমকল`
      }
    },
    {
      type: 'slides',
      id: 'other-images',
      label: 'অন্যান্য চিত্র',
      commonData: {
        audio: 'bn-others.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text: `house | ঘর
  table | টেবিল
  bed | বিছানা
  candle | মোমবাতি
  chair | কেদারা
  shelf | তাক
  baby | বাচ্চা
  boy | ছেলে
  girl | মেয়ে`
        },
        {
          audioOffset: 18,
          text: `man | পুরুষ
  woman| মহিলা
  glasses | চশমা
  clock | ঘড়ি
  watch | হাতঘড়ি
  pen | কলম
  scissors | কাঁচি 
  waterbottle | জলের বোতল
  book | বই
  color-pencils | রঙ পেন্সিল`
        },
        {
          audioOffset: 38,
          text: `sun | সূর্য 
  moon | চাঁদ
  rain | বৃষ্টি 
  star | তারা
  milk | দুধ
  ring | আংটি
  bone | হাড়
  bell | ঘণ্টা
  bird | পাখি
  conch | শঙ্খ`
        },
        {
          audioOffset: 58,
          text: `drums | ঢাক
  five | পাঁচ 
  food | খাবার
  fruits | ফল
  king | রাজা
  kite | ঘুড়ি
  ladder | মই`
        },
        {
          audioOffset: 72,
          text: `ladoo | লাড্ডু
  leaf | পাতা
  rishi | ঋষি
  wheel | চাকা
  whistle | বাঁশি 
  world | পৃথিবী`
        }
      ]
    },


    {
      type: 'rightOne',
      label: 'শব্দ শুনে শনাক্ত করুন - যানবাহন , অন্যান্য',
      id: 'pick-word-others',
      commonData: {
        title: 'শব্দ শুনুন এবং সঠিক ছবিতে ক্লিক করুন',
        type: 'image'
      },
      data: [
        {
          audio: 'bn-vehicles.mp3',
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, ship, train, auto, cart, excavator, fire-engine'
        },

        {
          audio: 'bn-others.mp3',
          audioOffset: 0,
          words: 'house, table, bed, candle, chair, shelf, baby, boy, girl'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 18,
          words:
            'man, woman, glasses, clock, watch, pen, scissors, waterbottle, book, color-pencils'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 38,
          words: 'sun, moon, rain, star, milk, ring, bone, bell, bird, conch'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 58,
          words: 'drums, five, food, fruits, king, kite, ladder'
        },
        {
          audio: 'bn-others.mp3',
          audioOffset: 72,
          words: 'ladoo, leaf, rishi, wheel, whistle, world'
        }
      ]
    }
  ]
};
