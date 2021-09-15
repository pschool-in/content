export default {
  label: 'শব্দ',
  id: 'bn-word',
  img: 'word',
  list: [
    {
      id: 'bn-jumbled-2letter',
      type: 'sequence',
      label: 'দুই অক্ষরের শব্দ',
      commonData: {
        title: 'অক্ষর যুক্ত করে শব্দ গঠন',
        lang: 'bn'
      },
      // refernce - west bengal state board class 1/2 books
      data: [
        `বক , বই , কই , বন , বল , নল `,
        `ফল, জল, খই, দই, টব, টক, জট, বট `,
        `দই , কল , দল , রথ , রং , আম , পথ , কলা`,
        `বরফ , খবর , সবল , সরল , সকল , টগর , আসন `,
        `কাক , বালা , খাম , তাল , জামা , মালা , থালা `,
        `কাদা , লাল , পাট , পাকা , খাল , গান , টাকা , নাক`,
        `ছবি , রবি , ছড়া , পড়া , ঢাকা , পাকা , তাল , ধরা , করা `,
        `লাঠি, কাঠি , ধামা , জামা , আতা , খাতা , খড়ি , ঘড়ি `,
        `ঝুড়ি , মুড়ি , নুন , চুন , ঝাউ , লাউ , দুই , রুই , কুল , দুল `,
        `ফুল , দুল , যাই , খাই , যাব , খাব , পান , এক , পেঁপে `
      ]
    },
    {
      // this is for class 3 and above students
      id: 'bn-jumbled',
      type: 'sequence',
      label: 'অক্ষর যুক্ত করে শব্দ গঠন',
      commonData: {
        title: 'অক্ষর যুক্ত করে শব্দ গঠন',
        lang: 'bn'
      },
      data: [
        `গোলাপ, কাঁঠাল, বেগুন, আনারস, ডালিম`,
        `আপেল, কমলা, পেয়ারা, খেজুর, খেজুর`,
        `গাজর, কাঠাল, পেয়াজ, পটল, পালক`,
        `করলা, রসুন, পুদিনা, কুমড়ো, ডুমুর`,
        `বিছানা, খারাপ, গণিত, পিপড়ে, বানর, কঠোর`,
        `মোরগ, কোকিল, ঈগল, মুরগী, পায়রা`,
        `চড়াই, সারস, শকুনি, জাহাজ, বাদুড়`,
        `কুজন, সুজন, চতুর, গৌরব, নতুন, বাঙালি`,
        `পোশাক, পুরুষ, পৃথিবী, গ্রহণ, মহান, কঠিন, জীবন`,
        `নাশপাতি, বড়ই, নারিকেল, জলপাই, আমড়া, জামরুল`,
        `অভিলাষ, প্রয়োজন, কাছাকাছি, শুধুমাত্র, পদক্ষেপ`,
        `অধিকার, পুরাতন, ব্যবহার, গবেষণা, পরবর্তী`,
        `ফুলকপি, বাধাকপি, পানকৌড়ি, রাজহাঁস, পরিবার`,
        `অনুসরণ , পরিবর্তন, অনুপ্রেরণা, অনুসন্ধান, আতিথিয়তা`
      ]
    },
     {
      // for class iii and above
      type: 'rightOne',
      id: 'bn-sound-word-1s',
      label: 'ধ্বনি শুনে শব্দ শনাক্ত',
      commonData: {
        title: 'ধ্বনি শুনে শব্দ শনাক্ত করুন',
        type: 'words',
        audio: 'bn-animals.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'বিড়াল, কুকুর, ছাগল, ভেড়া, ঘোড়া'
        },
        {
          audioOffset: 10,
          words: 'শূকর, হাতি, সিংহ, বাঁদর, বাঘ'
        },
        {
          audioOffset: 20,
          words: 'জলহস্তী, গণ্ডার, শিয়াল, কুমির, ভালুক'
        },
        {
          audioOffset: 30,
          words: 'উট, হাঙ্গর, তিমি মাছ, শুশুক, ফড়িং'
        },
        {
          audioOffset: 40,
          words: 'মাছ, ব্যাঙ, কাঁকড়া, সাপ, কাঠবিড়ালি'
        },
        {
          audioOffset: 50,
          words: 'কচ্ছপ, ইঁদুর, উইপোকা, পিঁপড়ে, মাছি'
        },
        {
          audioOffset: 60,
          words: 'বাদুড়, মোষ, প্রজাপতি, চিতাবাঘ, গরু, গাধা'
        },
        {
          audioOffset: 72,
          words: 'বেজি, মশা, নেকড়ে বাঘ, আরশোলা, টিকটিকি, খরগোশ'
        }
      ]
    },

   
    {
      // bengali number - Class 1 and above
      id: 'number',
      type: 'match',
      label: 'সংখ্যা ও শব্দ',
      commonData: {
        title: 'শব্দের সাথে সংখ্যা মেলানো',
        fontSize: '1.2rem'
      },
      data: [
        `০, শূন্য 
        ১, এক
        ২, দুই
        ৩, তিন
        ৪, চার
        ৫, পাঁচ`,

        `৬, ছয়
        ৭, সাত
        ৮, আট
        ৯, নয়
        ১০, দশ`,

        `১১, এগারো
        ১২, বারো
        ১৩, তেরো
        ১৪, চোদ্দো
        ১৫, পনেরো`,

        `১৬, ষোলো 
         ১৭, সতেরো 
         ১৮, আঠারো 
         ১৯, উনিশ 
         ২০, কুড়ি`,

        `১০০, একশো 
         ১০০০, এক হাজার 
         ১০০০০, দশ হাজার 
         ১০০০০০, এক লাখ 
         ১০০০০০০০, এক কোটি`
      ]
    },

    {
      // for students class 3 and above
      type: 'rightOne',
      label: 'সঠিক বানান',
      id: 'bn-spelling',
      commonData: {
        title: 'সঠিক বানান নির্বাচন',
        noCaps: true
      },
      data: [
        `ছবি, ছবী
রবি , রবী 
ছড়া , ছরা 
ধরা ,  ধড়া 
লাঠি, লাঠী`,
        `কাঠি , কাঠী 
খড়ি , খরী 
ঘড়ি , ঘরী 
ঝুড়ি , ঝুড়ী 
মুড়ি , মুড়ী `,
        `নুন , নূন 
চুন , চূন 
ঝাউ , ঝাঊ 
লাউ , লাঊ 
দুই , দূই `,
        `রুই , রূই 
দুল , দূল 
ফুল , ফূল 
রথ ,  ড়থ 
সরল, সড়ল `, 
        
        `জবা , যবা 
          আপেল , অপেল 
          আনারস , আনাড়স 
          বেগুন, বেগুণ 
          পিপড়ে, পিপরে `,

        `পোশাক, পোষাক 
          পুরুষ, পুরুস 
          পৃথিবী, পৃথিবি  
          কঠিন, কটিন 
          জীবন, যিবন`,

        `গাজর, গজর 
          কাঠাল, কাঠল 
          পেয়াজ, পিয়ায 
          পটল, পোটল 
          কুমড়ো, কুঁমড়ো`,

        `মোরগ, মোরোগ 
          সারস, শারস 
          কোকিল, কোকীল 
          ঈগল, ইগল 
          মুরগী, মুড়গি `,

        `কুজন, কুজান 
          সুজন, সূজন 
          চতুর, চাতুর 
          গৌরব, গৌরাব 
          নতুন, নুতুন `
      ]
    },

    {
      // for class 2 and above
      id: 'colors',
      type: 'match',
      label: 'রঙ',
      commonData: {
        title: 'বাংলায় রঙ',
        fontSize: '1.2rem'
      },
      data: [
        `সবুজ, Green
        হলুদ, Yellow
        নীল, Blue
        লাল, Red
        কমলা, Orange`,

        `গেরুয়া, Saffron
        বেগুনি, Violet
        কালো, Black
        সাদা, White
        ধূসর, Grey`,

        `বাদামি, Brown
         গোলাপী, Pink
         আকাশী, Sky color
         গাঢ়, dark
         হালকা, light`
      ]
    },

    {
      // for class 3 and above
      id: 'TimePlace',
      type: 'match',
      label: 'বাংলায় আপেক্ষিক সময়-কাল',
      commonData: {
        title: 'বাংলায় আপেক্ষিক সময়-কাল',
        fontSize: '1.2rem'
      },
      data: [
        `আজ, Today
        গতকাল, Yesterday
        আগামীকাল, Tomorrow
        এখানে, Here
        ওখানে, There`,

        `তাড়াতাড়ি, Quikly
        আস্তে, Slowly
        সর্বদা, Always
        মাঝে মাঝে, Sometime
        কখনো, Never
        প্রায়, Often
        কদাপি, Seldom`
      ]
    }
  ]
};
