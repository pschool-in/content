export default {
  label: 'ছবি',
  id: 'bn-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'শূন্যস্থান পূরণ - ফল ও শাকসব্জি',
      id: 'complete-word',
      commonData: {
        images: 'custom',
        lang: 'bn'
      },
      data: [
        `apple| আপেল| _পেল| আ, অ, ঔ, এ
  grapes| আঙুর| _ঙুর| আ, অ, ঔ, এ
  banana| কলা| _লা| ক, কু, খ, ছ
  guava| পেয়ারা| _য়ারা| পে, ফে, ক, ব
  jackfruit| কাঁঠাল| _ঠাল| কাঁ, ব, খ, কু
  orange| কমলালেবু| _মলালেবু| ক, কু, খ, ব`,

        `papaya| পেঁপে| _পে| পেঁ, ফে, ক, এ
  pineapple| আনারস| _নারস| আ, অ, ঔ, তা
  pomegranate| বেদানা| _দানা| বে, ব, খ, র
  watermelon| তরমুজ| _রমুজ| ত, ফে, প, ব
  fig| ডুমুর| _মুর| ডু, ব, খ, কু
  mango| আম| _ম| আ, তা, অ, এ`,

        `plum| বরই| _রই| ব, বে, খ, র
  custard-apple| আতা| _তা| আ, অ, ঔ, তা
  dates| খেজুর| _জুর| খে, বে, ব, খ
  muskmelon| খরবুজ| _রবুজ| খ, ত, প, ব
  fruits| ফল| _ল| ফ, তা, ব, প`,

        `carrot| গাজর| _জর| গা, বে, খ, র
  beetroot| বিট| _ট| বি, ব, বে, খ
  onion| পেঁয়াজ| _য়াজ| পেঁ, বে, প, খ
  tomato| টমেটো| _মেটো| ট, ত, প, ব
  potato| আলু|_লু| আ, অ, ঔ, তা
  cabbage| বাঁধাকপি| _ধাকপি| বাঁ, ফ, ব, প`,

        `cauliflower| ফুলকপি| _লকপি| ফু, বে, ত, প
  corn| ভুট্টা| _ট্টা| ভু, ব, বে, খ
  cucumber| শসা| _সা| শ, ফ, প, খ
  garlic| রসুন| _সুন| র, ত, প, ব
  ginger| আদা|_দা| আ, অ, ঔ, তা
  pumpkin| কুমড়| _মড়| কু, বে, প, খ`,

        `bitter-gourd| করলা| _রলা| ক, খ, ত, প
  brinjal| বেগুন| _গুন| বে, ব, ফ, খ
  cashewnut| কাজুবাদাম| _জুবাদাম| কা, ফ, লি, খ
  chilli| লঙ্কা| _ঙ্কা| ল, ব, খ, তা
  coconut| নারকেল|_রকেল| না, খ, ত, প
  corianderleaf| ধনেপাতা| _নেপাতা| ধ, বে, ত, খ`,

        `drumstick| সজনেডাঁটা| _জনেডাঁটা| স, তা, ব, প
  greenpeas| মটরশুটি| _টরশুটি| ম, ট, ত, প
  ladies-finger| ভিন্ডি| _ন্ডি| ভি, ভ, তা, খ
  mintleaf| পুদিনা| _দিনা| পু, ব, খ, প
  peanut| চিনাবাদাম|_নাবাদাম| চি, খ, চ, প
  spinach| পালংশাক|_লংশাক| পা, খ, ম, প
  raddish| মূলো| _লো| মূ, বে, ত, লো`
      ]
    },
    {
      id: 'match-fruit',
      type: 'match',
      label: 'অক্ষর মেলানো - ফল ও শাকসবজি',
      commonData: {
        title: 'চিত্রগুলি তাদের প্রথম অক্ষরের সাথে মেলান',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `ক, banana
  আ, mango
  পেঁ, papaya
  ত, watermelon
  ডা, pomegranate`,

        `আ, grapes
  পে, guava
  কাঁ, jackfruit
  ক, orange
  বে, pomegranate`,

        `আ, pineapple
  ডু, fig
  খে, dates
  খ, muskmelon
  ক, orange`,

        `গা, carrot
  বি, beetroot
  পেঁ, onion
  ট, tomato
  আ, potato`,

        `বাঁ, cabbage 
  ফু, cauliflower
  ভু, corn
  শ, cucumber
  র, garlic`,

        `আ, ginger
  কু, pumpkin
  বা, almond
  ক, bitter-gourd
  বে, brinjal`,

        `কা, cashewnut
  ল, chilli
  না, coconut
  ধ, corianderleaf
  স, drumstick`,

        `ম, greenpeas
  ভি, ladies-finger
  পু, mintleaf
  চি, peanut
  মূ, raddish
  পা, spinach`
      ]
    },

    {
      id: 'match-flower',
      type: 'match',
      label: 'অক্ষর মেলানো - ফুল',
      commonData: {
        title: 'চিত্রগুলি তাদের প্রথম অক্ষরের সাথে মেলান',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `গো, rose
          প, lotus
          সূ, sunflower
          গাঁ, marigold`,

        `জ, hibiscus
          জুঁ, jasmine
          টি, tulip
          জি, zinnia`
      ]
    },

    {
      id: 'match-animals',
      type: 'match',
      label: 'অক্ষর মেলানো - পশু ও পাখি',
      commonData: {
        title: 'চিত্রগুলি তাদের প্রথম অক্ষরের সাথে মেলান',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `বি, cat
          কু, dog
          ছা, goat
          ভে, sheep
          ঘো, horse`,

        `শূ, pig
          হা, elephant
          সি, lion
          বাঁ, monkey
          বা, tiger`,

        `জ, hippo
          গ, rhino
          শি, fox
          কু, crocodile
          জে, zebra`,

        `ভা, bear
          উ, camel
          হা, shark
          তি, whale
          ড, dolphin`,

        `ফ, dragonfly
          মা, fish
          ব্যা, frog
          কাঁ, crab
          সা, snake`,

        `কা, squirrel
          ক, tortoise
          ইঁ, rat
          উ, winged-termites
          পিঁ, ant`,

        `মা, fly
          বা, bat
          মো, buffalo
          প্র, butterfly
          চি, cheetah`,

        `গ, cow
          গা, donkey
          বে, mongoose
          ম, mosquito`,

        `নে,wolf
          আ, cockroach
          টি, lizard
          খ, rabbit`,

        `কা, crow
          পা, dove
          হাঁ, duck
          মু, hen
          টি, parrot`,

        `ম, peacock
          পে, penguin
          চ, sparrow
          মু, chick`,

        `ম, myna
          উ, ostrich
          পেঁ, owl
          মো, rooster`,

        `সা, crane
          মা, kingfisher
          শ, vulture
          কা, woodpecker`
      ]
    },

    {
      id: 'match-house',
      type: 'match',
      label: 'অক্ষর মেলানো - ঘর ও গাড়ি',
      commonData: {
        title: 'চিত্রগুলি তাদের প্রথম অক্ষরের সাথে মেলান',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `বি, aeroplane
          নৌ, boat
          বা, bus
          কা, car
          সা, cycle`,

        `হে, helicoptor
          মো, motorbike
          জা, ship
          সা, cycle`,

        `ট্র্যা, tractor
          রে, train
          অ্যা, ambulance
          অ, auto`,

        `অ, auto
          গো, cart
          খ, excavator
          দ, fire-engine
          ল, lorry`,

        `ঘ, house
          টে, table
          বি, bed
          মো, candle`,

        `কে, chair
          তা, shelf
          বা, baby
          ছে, boy`,

        `মে, girl
          পু, man
          ম, woman
          ব, ball`,

        `কো, coat
          চ, glasses
          ঘ, clock
          হা, watch`,

        `চু, stove
          কাঁ, fork
          ছু, knife
          চা, pan`,

        `চা, spoon
          পা, pot
          মা, butter`
      ]
    },

    {
      id: 'match-others',
      type: 'match',
      label: 'অক্ষর মেলানো - অন্যান্য',
      commonData: {
        title: 'চিত্রগুলি তাদের প্রথম অক্ষরের সাথে মেলান',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `কা, ear
          চো, eye
          পা, foot
          চু, hair`,

        `হা, hand
          মু, mouth
          না, nose
          দাঁ, tooth`,

        `রা, eraser
          ক, pen
          পে, pencil
          স্কে, ruler`,

        `কাঁ, scissors
          জ, waterbottle
          ব, book
          র, color-pencils`,

        `সূ, sun
          চাঁ, moon
          বৃ, rain
          তা, star
          দু, milk`,

        `আ, ring
          ব্রা, brush
          হা, bone
          ঘ, bell
          পা, bird`,

        `শ, conch
          ঢা, drums
          পাঁ, five
          খা, food
          ফ, fruits`,

        `রা, king
          ঘু, kite
          ম, ladder
          লা, ladoo
          পা, leaf`,

        `ঋ, rishi
          চা, wheel
          বাঁ, whistle
          পৃ, world`
      ]
    }
  ]
};
