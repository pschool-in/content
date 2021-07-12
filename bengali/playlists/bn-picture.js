export default {
    label: 'ছবি',
    id: 'bn-picture',
    img: 'image',
    list: [
      {
        type: 'completeWord',
        label: 'শুন্যস্তান পূরণ - ফল ও শাকসব্জি',
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
  dates| খেজুর| _জুর| খে, বে, ব, খ,
  muskmelon| খরবুজ| _রবুজ| খ, ত, প, ব
  litchi| লিচু| _চু| লি, ব, খ, ল
  fruits| ফল| _ল| ফ, তা, ব, প`,
        ]
      },
      {
        id: 'match-animals',
        type: 'match',
        label: 'অক্ষর মেলানো - ফল ও শাকসব্জি',
        commonData: {
          title: 'Match images with their first letter',
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
  ক, orange
  লি, litchi`,
        ]
      },
    ]
  };
