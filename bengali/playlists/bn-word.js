export default {
    label: 'শব্দ',
    id: 'bn-word',
    img: 'word',
    list: [
      {
        id: 'jumbled',
        type: 'sequence',
        label: 'অক্ষর যুক্ত করে শব্দ গঠন',
        commonData: {
          title: 'অক্ষর যুক্ত করে শব্দ গঠন',
          lang: 'bn'
        },
        data: [`গোলাপ, কাঁঠাল, আমের, আনারস, ডালিম`,
        `আপেল, কমলা, পেয়ারা, খেজুর, ডুমুর, খেজুর`,
        `নাশপাতি, বড়ই, নারিকেল, জলপাই, আমড়া, জামরুল`, 
        `গাজর, কাঠাল, পেয়াজ, পটল, কুমড়ো, পালক`,
        `করলা, রসুন, পুদিনা, ধনিয়া, ফুলকপি, বাধাকপি`,
        `বিছানা, খারাপ, গণিত, পিপড়ে, বানর, কঠোর`,
        `মোরগ, সারস, কোকিল, ঈগল, মুরগী, পায়রা`,
        `চড়াই, রাজহাঁস, শকুনি, জাহাজ, বাদুড়, পানকৌড়ি`,
        `কুজন, সুজন, চতুর, গৌরব, নতুন, বাঙালি`,
        `পোশাক, পুরুষ, পৃথিবী, গ্রহণ, মহান, কঠিন, জীবন`,
        `অভিলাষ, প্রয়োজন, কাছাকাছি, শুধুমাত্র, পদক্ষেপ`,
        `অধিকার, পুরাতন, ব্যবহার, গবেষণা, পরবর্তী, পরিবার`,
        `অনুসরণ , পরিবর্তন, অনুপ্রেরণা, অনুসন্ধান , আতিথিয়তা`
    ]
      },
  
      {
        //Antonyms
        id: 'opposites',
        type: 'match',
        label: 'বিপরীতার্থক শব্দ',
        commonData: {
          title: 'বিপরীতার্থক শব্দ',
          fontSize: '1.2rem'
        },
        data: [
        `আসা, যাওয়া
        আগে, পেছনে
        উপর, নিচ
        ভালো, খারাপ
        ডান, বাম`,

        `দিন, রাত
        নবীন, প্রবীণ
        স্বাধীন, পরাধীন
        স্থির, চলমান
        কঠিন, কোমল`,

        `উন্নতি, অবনতি
        ছোটো, বড়ো 
        আকাশ, পাতাল 
        স্বর্গ, নরক 
        জোয়ার, ভাটা`,

        `পাপ, পুণ্য 
        আদান, প্রদান 
        একাল, সেকাল 
        কুটিল, সরল 
        আবাহন, বিসর্জন `,

        `বেশি, কম
        দেশ, বিদেশ
        ভয়, সাহস
        দুর্বল, সবল
        সত্য, মিথ্যা`,

        `টাটকা, বাসি 
        যত্ন, অযত্ন 
        খাঁটি, ভেজাল 
        সোজা, বেঁকা 
        প্রশ্ন, উত্তর`,

        `উচু, নিচু
    চালাক, বোকা
    অচল, সচল
    অল্প, অধিক
    কাচা, পাকা`,
  
    `কমতি, বাড়তি
    গরম, ঠান্ডা
    পূর্ব, পশ্চিম
    জন্ম, মৃত্যু
    টক, মিষ্টি`,

    `টাটকা, বাসি
    ঝাপসা, স্পষ্ট
    তারুণ্য, বার্ধক্য
    তীব্র, মৃদু
    দোষ, গুণ`,

    `দুরন্ত, শান্ত
    দেনা, পাওনা
    দক্ষিণ, উত্তর
    ধনী, নির্ধন
    নতুন, পুরনো`
        ]
      },
      {
        // Synonyms
        id: 'same-meaning',
        type: 'match',
        label: 'সমার্থক শব্দ',
        commonData: {
          title: 'সমার্থক শব্দ',
          fontSize: '1.2rem'
        },
        data: [`অচল , গতিহীন
    নয়ন , চোখ
    অেনক , বেশি
    চমৎকার, সুন্দর
    অভাব, অনটন`,
  
    `অরণ্য, বন
    অলস, কুড়ে
    অল্প, কম
    আইন, বিধান
    আকাশ, গগন`,

    `আদি, প্রথম
    আধুনিক, বর্তমান
    আমন্ত্রণ, আহ্বান
    চমক, অবাক
    আসল, খাঁটি`,

    `ইতি, শেষ
    ঈশ্বর, প্রভু
    উচিত, ন্যায্য
    উচ্ছেদ, উৎখাত
    উপকথা, গল্প`,

    `উপকার, মঙ্গল
    ঋষি, মুনি
    একতা, ঐক্ক
    কঠিন, কঠোর
    কলহ, ঝগড়া`,

    `ফুল, পুস্প 
    পৃথিবী, ধরণী 
    পর্বত, গিরি 
    চাঁদ, চন্দ্র 
    সূর্য, রবি`,

    `পা, পদ 
    বুক, বক্ষ 
    চোখ, আঁখি 
    মুখ, আনন
    কান, কর্ণ `,

    `উঠান, অঙ্গান 
    পুকুর, দীঘি 
    সাপ, নাগ 
    ঘর , আবাস 
    ঘোড়া , অশ্ব`,

    `মা, জননী 
    বাবা, পিতা 
    পুত্র, ছেলে 
    কন্যা, মেয়ে 
    ভাই, ভ্রাতা 
    বোন, ভগিনী 
    বন্ধু, মিত্র `,

    
        ]
      },

      {
        //BengaliNumber
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
         ১০০০০০০০, এক কোটি`,

        ]
      },

    ]
  };
