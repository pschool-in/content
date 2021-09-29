export default {
  label: 'ছবি',
  id: 'bn-picture-1',
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

  ]
};
