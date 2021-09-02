export default {
  label: 'ছবি',
  id: 'bn-picture',
  img: 'image',
  list: [
    {
      type: 'completeWord',
      label: 'শূন্যস্থান পূরণ - ফল ও শাকসব্জি',
      id: 'bn-complete-word-1',
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
        type: 'completeWord',
        label: 'শূন্যস্থান পূরণ - ফুল',
        id: 'bn-complete-word-2',
        commonData: {
          images: 'custom',
          lang: 'bn'
        },
        data: [
          `rose| গোলাপ| _লাপ| গো, অ, টি, ট
          lotus| পদ্ম| _দ্ম| প, অ, জু, খ
          sunflower| সূর্যমুখী| _র্যমুখী| সূ, কু, খ, ছ
          marigold| গাঁদা| _দা| গাঁ, গ, ক, ব`,

    `hibiscus| জবা| _বা| জ, জুঁ, খ, কু
    jasmine| জুঁই| _ই| জুঁ, কু, জ, ব
    tulip| টিউলিপ| _উলিপ| টি, ট, তি, কু
    zinnia| জিনিয়া| _নিয়া| জি, জ, খ, ব`,

        ]
      },
          {
        type: 'completeWord',
        label: 'শূন্যস্থান পূরণ - পশু ও পাখি',
        id: 'bn-complete-word-3',
        commonData: {
          images: 'custom',
          lang: 'bn'
        },
        data: [
          `cat| বিড়াল| _ড়াল| বি, গো, অ, টি
          dog| কুকুর| _কুর| কু, প, অ, জু
          goat| ছাগল| _গল| ছা, কু, খ, টি
          sheep| ভেড়া| _ড়া| ভে, গ, ক, ব`,

    `horse| ঘোড়া| _ড়া| ঘো, ক, ঘ, কু
    pig| শূকর| _কর| শূ, শ, জ, ব
    elephant| হাতি| _তি| হা, হ, তি, কু
    monkey| বানর| _নর| বা, স, খ, ব`,

    `tiger| বাঘ| _ঘ| বা, ব, ঘ, কু
    hippo| জলহস্তী| _লহস্তী| জ, শ, ঘ, ব
    rhino| গণ্ডার| _ণ্ডার| গ, হ, তি, কু
    fox| শিয়াল| _য়াল| শি, শ, স, খ`,

    `crocodile| কুমির| _মির| কু, ব, ঘ, ক
    zebra| জেব্রা| _ব্রা| জে, জ, শ, ঘ
    bear| ভালুক| _লুক| ভা, ভ, গ, হ
    camel| উট| _ট| উ, শ, অ, ঔ`,

    `dragonfly| ফড়িং| _ড়িং| ফ, ব, ঘ, ক
    fish| মাছ| _ছ| মা, জ, শ, ঘ
    frog| ব্যাঙ| _ঙ| ব্যা, ব্য, ব, হ
    snake| সাপ| _প| সা, শ, অ, ঔ`,

    `squirrel| কাঠবিড়ালি| _ঠবিড়ালি| কা, কো, ঘ, ক
    tortoise| কচ্ছপ| _চ্ছপ| ক, জ, কা, কো
    rat| ইঁদুর| _দুর| ইঁ, ই, ব, হ
    ant| পিঁপড়ে| _পড়ে| পিঁ, প, অ, ঔ`,

    `fly| মাছি| _ছি| মা, কো, ম, ক
    bat| বাদুড়| _দুড়| বা, জ, ব, কো
    buffalo| মোষ| _ষ| মো, ই, ব, ম
    butterfly| প্রজাপতি| _জাপতি| প্র, প, অ, ঔ`,

    `cheetah| চিতাবাঘ| _তাবাঘ| চি, চ, ম, ক
    cow| গরু| _রু| গ, জ, ব, ক
    donkey| গাধা| _ধা| গা, গ, ব, ম
    mongoose| বেজি| _জি| বে, প, অ, ব`,

    `mosquito| মশা| _শা| ম, চ, জ, ক
    cockroach| আরশোলা| _রশোলা| আ, অ, ব, ক
    lizard| টিকটিকি| _কটিকি| টি, ট, ব, ম
    rabbit| খরগোশ| _রগোশ| খ, খো, অ, ব`,

    `crow| কাক| _ক| কা, চ, জ, ক
    dove| পায়রা| _য়রা| পা, প, ব, ম
    duck| হাঁস| _স| হাঁ, হা, হ, ম
    hen| মুরগি| _রগি| মু, ম, হা, ব`,

    `parrot| টিয়া| _য়া| টি, ট, জ, ক
    peacock| ময়ূর| _য়ূর| ম, প, ব, মু
    sparrow| চড়ুই| _ড়ুই| চ, ব, চো, ম
    crane| সারস| _রস| সা, স, হা, ব`,

    `kingfisher| মাছরাঙ্গা| _ছরাঙ্গা| মা, ট, ম, ক
    myna| ময়না| _য়না| ম, প, ব, মু
    ostrich| উটপাখি| _টপাখি| উ, ব, চ, ম
    woodpecker| কাঠঠোকরা| _ঠঠোকরা| কা, ক, চ, ম
    owl| পেঁচা| _চা| পেঁ, পে, হা, ব`,


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
