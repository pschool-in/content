export default {
  label: 'সমাজবিজ্ঞান',
  id: 'bn-social',
  img: 'social',
  lockAfter: 3,
  list: [
    {
      type: 'dragAndDrop',
      id: 'cities',
      label: 'Label the Cities',
      commonData: {
        title: 'Label the Cities',
        img: 'west-bengal.jpg',
        width: 296,
        height: 450,
        wordWidth: 70
      },
      data: [
        {
          words: [
            { word: 'Kolkata', x: 191, y: 357 },
            { word: 'Durgapur', x: 75, y: 301 },
            { word: 'Darjeeling', x: 159, y: 13 },
            { word: 'Raiganj', x: 165, y: 120 },
            { word: 'Hooghly', x: 172, y: 333 }
          ]
        },
        {
          words: [
            { word: 'Howrah', x: 174, y: 353 },
            { word: 'Bankura', x: 70, y: 310 },
            { word: 'Siliguri', x: 172, y: 30 },
            { word: 'Balurghat', x: 194, y: 140 },
            { word: 'Krishnanagar', x: 191, y: 287 }
          ]
        }
      ]
    },
    {
      type: 'dragAndDrop',
      id: 'neighbours',
      label: 'Neighbours',
      data: {
        title: 'Label the Neighbouring states and countries.',
        img: 'west-bengal.jpg',
        width: 296,
        height: 450,
        wordWidth: 70,
        words: [
          { word: 'Orissa', x: 10, y: 377 },
          { word: 'Jharkhand', x: 60, y: 198 },
          { word: 'Nepal', x: 83, y: 20 },
          { word: 'Bhutan', x: 234, y: 13 },
          { word: 'Bihar', x: 51, y: 85 },
          { word: 'Bangladesh', x: 206, y: 194 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'andhra-cities',
      label: 'Andhra Pradesh: Label the Cities',
      commonData: {
        title: 'Label the Cities',
        img: 'andhra-pradesh.jpg',
        width: 360,
        height: 315,
        wordWidth: 70
      },
      data: [
        {
          words: [
            { word: 'Anantapur', x: 24, y: 195 },
            { word: 'Chittoor', x: 82, y: 264 },
            { word: 'Visakhapatnam', x: 275, y: 65 },
            { word: 'Vijayawada', x: 173, y: 120 },
            { word: 'Ongole', x: 130, y: 160 }
          ]
        },
        {
          words: [
            { word: 'Tirupathi', x: 124, y: 245 },
            { word: 'Cuddapah', x: 76, y: 203 },
            { word: 'Srikakulam', x: 304, y: 30 },
            { word: 'Guntur', x: 161, y: 131 },
            { word: 'Kurnool', x: 21, y: 160 }
          ]
        }
      ]
    },
    {
      type: 'dragAndDrop',
      id: 'telangana-cities',
      label: 'Telangana: Label the Cities',
      data: {
        title: 'Label the Cities',
        img: 'telangana.jpg',
        width: 350,
        height: 369,
        wordWidth: 70,
        words: [
          { word: 'Hyderabad', x: 99, y: 214 },
          { word: 'Nizamabad', x: 68, y: 105 },
          { word: 'Kammam', x: 244, y: 237 },
          { word: 'Warangal', x: 188, y: 164 },
          { word: 'Karimnagar', x: 165, y: 127 }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      id: 'karnataka-cities',
      label: 'Karnataka: Label the Places',
      commonData: {
        title: 'Label the Places',
        img: 'karnataka.jpg',
        width: 301,
        height: 450,
        wordWidth: 70
      },
      data: [
        {
          words: [
            { word: 'Bangalore', x: 218, y: 340 },
            { word: 'Mysore', x: 137, y: 390 },
            { word: 'Bellary', x: 142, y: 214 },
            { word: 'Belgaum', x: 38, y: 146 },
            { word: 'Shimoga', x: 66, y: 280 }
          ]
        },
        {
          words: [
            { word: 'Kolar', x: 258, y: 340 },
            { word: 'Kodagu', x: 100, y: 390 },
            { word: 'Udupi', x: 47, y: 316 },
            { word: 'Tumkur', x: 167, y: 315 },
            { word: 'Gulbarga', x: 166, y: 80 }
          ]
        },
        {
          words: [
            { word: 'Bidar', x: 198, y: 24 },
            { word: 'Bijapur', x: 110, y: 90 },
            { word: 'Raichur', x: 165, y: 152 },
            { word: 'Ramanagara', x: 201, y: 365 },
            { word: 'Chitradurga', x: 148, y: 280 },
            { word: 'Chikmagalur', x: 97, y: 320 },
            { word: 'Hassan', x: 117, y: 355 }
          ]
        }
      ]
    },
    {
      id: 'direction',
      label: 'দিক',
      type: 'dragAndDrop',
      data: {
        width: 300,
        height: 300,
        wordWidth: 70,
        isPractice: false,
        title: 'দিক',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeWidth: 3,
            strokeLinejoin: 'round'
          },
          paths: [
            'M 150 50 L 150 250 L 160 240 M 150 250 L 140 240 M 160 60 L 150 50 140 60',
            'M 100 150 L 200 150 L 190 160 M 200 150 L 190 140 M 110 160 L 100 150 L 110 140'
          ]
        },
        words: [
          {
            word: 'পূর্ব',
            x: 210,
            y: 140
          },
          {
            word: 'পশ্চিম',
            x: 20,
            y: 140
          },
          {
            word: 'উত্তর',
            x: 120,
            y: 20
          },
          {
            word: 'দক্ষিণ',
            x: 120,
            y: 260
          }
        ]
      }
    },

    {
      label: 'পশ্চিমবাংলা',
      id: 'WB',
      type: 'mcq',
      lockAfter: 3,
      commonData: {
        title: 'সঠিক উত্তর নির্ধারণ করুন'
      },
      data: [
        {
          questions: [
            {
              qText: 'পশ্চিমবঙ্গে জেলার মোট সংখ্যা? ',
              options: '23 ,55, 78, এর মধ্যে কোনটিই নয়'
            },
            {
              qText: 'পশ্চিমবঙ্গ রাজ্যের সরকারী ভাষা কী?',
              options: 'বাংলা, পাঞ্জাবি, হিন্দি, এর মধ্যে কোনটিই নয়'
            },
            {
              qText: 'পশ্চিমবঙ্গ রাজ্য ফুল কোনটি?',
              options: 'রাত্রে জেসমিন, পদ্ম, আফ্রিকান মেরিগোল্ড, পলাশ'
            },
            {
              qText: 'পশ্চিমবঙ্গ রাজ্য পাখি কোনটি?',
              options:
                'সাদা ব্রেস্টেড কিংফিশার, দুর্দান্ত হর্ণবিল, বাড়ির চড়ুই, সরুস ক্রেন'
            },
            {
              qText: `সুন্দরবন জাতীয় উদ্যানটি কোথায় অবস্থিত?`,
              options: 'পশ্চিমবঙ্গ, উত্তরখণ্ড, কেরালা, এর মধ্যে কোনটিই নয়'
            },
            {
              qText: `পশ্চিমবঙ্গ কবে একটি রাজ্যে পরিণত হয়?`,
              options:
                '26 জানুয়ারী 1950, ২৮ শে মে 1992 , 4 মার্চ 1955, 1 ডিসেম্বর 1967'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'পশ্চিমবঙ্গের প্রথম মুখ্যমন্ত্রী কে ছিলেন? ',
              options:
                'বিধান চন্দ্র রায়, অজয় ​​কুমার মুখোপাধ্যায়, প্রফুল্ল চন্দ্র সেন, এর মধ্যে কোনটিই নয়'
            },
            {
              qText: 'পশ্চিমবঙ্গের রাজধানী কী?',
              options: 'কলকাতা, কালিম্পং, বহরমপুর, কৃষ্ণনগর'
            },
            {
              qText: 'পশ্চিমবঙ্গের উত্তরে কোন রাজ্য?',
              options: 'সিকিম, গোয়া, আসাম, উত্তর পরদেশ'
            },
            {
              qText: 'পশ্চিমবঙ্গের দক্ষিণে কোন জলাশয়?',
              options: 'বঙ্গোপসাগর, কাঁচের উপসাগর, ক্যাম্বের উপসাগর, লোহিত সাগর'
            },
            {
              qText: `ভিক্টোরিয়া মেমোরিয়াল বিল্ডিংটি কোথায় অবস্থিত?`,
              options: 'কলকাতা, হায়দরাবাদ, নয়াদিল্লি , পুনে'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'পশ্চিম বাংলাই কোথাকার চা বিখ্যাত? ',
              options: 'দার্জিলিং, দুর্গাপুর, কলকাতা, বর্ধমান'
            },
            {
              qText: 'রসগোল্লা কি রকম দেখতে হয়?',
              options: 'গোল, ত্রিকোনা , চারকোনা , লম্বা'
            },
            {
              qText: 'ভিক্টোরিয়া মেমোরিয়াল কোথায়?',
              options: 'কলকাতা, দিল্লী , মুম্বাই , আসানসোল '
            },
            {
              qText: 'গঙ্গা ভাগ হয়ে কি কি নদী হয়?',
              options:
                'পদ্মা-ভাগিরথী, পদ্মা-নর্মদা , নর্মদা-ভাগিরথী, গোদাবরী-পদ্মা'
            },
            {
              qText: `পশ্চিম বাংলাই কোন জায়গায় সবচেয়ে বেশি কারখানা আছে?`,
              options: 'দুর্গাপুর, কলকাতা, আসানসোল, বর্ধমান'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'ভারতের সবচেয়ে লম্বা রেলস্টেশন কোথায়? ? ',
              options: 'খড়্গপুর, হাওড়া, শিয়ালদহ, বর্ধমান'
            },
            {
              qText: 'হাওড়া স্টেশনে কতগুলো প্লাটফর্ম আছে?',
              options: '২৩, ২০, ১৪, ২৬'
            },
            {
              qText: 'বিখ্যাত নকুরের সন্দেশ খেতে তোমায় কোন শহর যেতে হবে?',
              options: 'কলকাতা, দিল্লী, কৃষ্ণনগর, বহরমপুর'
            },
            {
              qText: 'বিখ্যাত দাদা - বৌদি বিরিয়ানি খেতে কোথায় যেতে হবে ?',
              options: 'ব্যারাকপুর, কলকাতা, কৃষ্ণনগর, বহরমপুর'
            },
            {
              qText: `সীতাভোগ আর মিহিদানা কোথাকার বিখ্যাত?`,
              options: 'বর্ধমান, দুর্গাপুর, কলকাতা, কৃষ্ণনগর'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'কে ইন্ডিয়ান স্ট্যাটিসটিকাল ইনস্টিটিউট এর প্রতিষ্ঠান করেন? ',
              options:
                'প্রশান্ত চন্দ্র মহলানবীশ, বিধান চন্দ্র রায়, রবীন্দ্রনাথ ঠাকুর, মেঘনাদ সাহা'
            },
            {
              qText: 'রবীন্দ্রনাথ ঠাকুর কোন বছর নোবেল প্রাইজ পান?',
              options: '১৯১৩, ১৯১৫, ১৯৪৭, ১৯৩০'
            },
            {
              qText: 'সত্যজিৎ রায় প্রথম পরিচালিত সিনেমা কি?',
              options:
                'পথের পাঁচালি, গুপী গায়েন বাঘা বায়েন , সোনার কেল্লা , অপরাজিতা'
            },
            {
              qText: 'পশ্চিম বাংলা থেকে কে প্রথম ভারত রত্ন পুরস্কার পান?',
              options:
                'বিধান চন্দ্র রায়, জ্যোতি বসু, অমর্ত্য সেন, সুকুমার রায়'
            },
            {
              qText: `কোন ফুটবল ক্লাব কে সবুজ মেরুন নামে ডাকা হয়?`,
              options:
                'মোহন বাগান ফুটবল ক্লাব, ইস্ট বেঙ্গল ফুটবল ক্লাব, মহামেডান স্পোর্টিং, বেঙ্গালুরু FC'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'পশ্চিম বাংলার কোন জাতীয় উদ্যান উনেস্কো এর ওয়ার্ল্ড হেরিটেজ অধীন মানা হয় ?',
              options:
                'সুন্দরবন, জলদাপাড়া বন্যজীবন অভয়ারণ্য, গোরুমারা জাতীয় উদ্যান, নিউওরা ভ্যালি জাতীয় উদ্যান'
            },
            {
              qText: 'পুরী কোন রাজ্যের স্থান?',
              options: 'উড়িষ্যা, পশ্চিম বাংলা, আসাম, বিহার '
            },
            {
              qText: 'আন্দামান নিকোবর এ সবচেয়ে বেশি কোন ভাষার লোক পাওয়া যাই?',
              options: 'বাংলা, তামিল, মালায়ালম, মারাঠি'
            },
            {
              qText: ' সিঙ্গারা তে কতগুলো কোন আছে?',
              options: 'চার, তিন , পাঁচ , দুই'
            },
            {
              qText: `ছানা কি থেকে তৈরি হয়?`,
              options: 'দুধ , জল , দই , আটা'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'আবোল তাবোল কে লিখেছেন?',
              options:
                'সুকুমার রায়, নারায়ণ দেবনাথ, রবীন্দ্রনাথ ঠাকুর, সত্যজিৎ রায়'
            },
            {
              qText: 'হীরক রাজার দেশে সিনেমা কার পরিচালিত ?',
              options: 'সত্যজিৎ রায়, মৃনাল সেন, রাজ্ চক্রবর্তী, ঋতুপর্ণ'
            },
            {
              qText: 'কোন ফুটবল ক্লাবকে লাল - হলুদ বলা হয় ?',
              options:
                'ইস্ট বেঙ্গল ফুটবল ক্লাব, মোহন বাগান ফুটবল ক্লাব, মহামেডান স্পোর্টিং, বেঙ্গালুরু FC'
            },
            {
              qText: ' সহজপাঠ কে লিখেছেন ?',
              options:
                'রবীন্দ্রনাথ ঠাকুর , নারায়ণ দেবনাথ, সত্যজিৎ রায়, সুকুমার রায়'
            },
            {
              qText: `নন্টে - ফন্টে , হাঁদা -ভোঁদা , বাঁটুল দি গ্রেট কোন লেখকের সৃষ্টি ? `,
              options:
                'নারায়ণ দেবনাথ, রবীন্দ্রনাথ ঠাকুর, সত্যজিৎ রায়, সুকুমার রায় '
            }
          ]
        }
      ]
    },

    {
      type: 'group',
      label: 'ঋতু এবং মাস',
      id: 'classify-letter-type',
      lockAfter: 3,
      commonData: {
        title: 'ঋতু এবং মাসগুলি সঠিক বক্সে রাখুন ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['মাস', 'ঋতু']
      },
      data: [
        [`বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ`, `গ্রীষ্ম, বর্ষা`],
        [`ভাদ্র, আশ্বিন, কার্তিক, অগ্রহায়ণ`, `শরৎ, হেমন্ত`],
        [`পৌষ, মাঘ, ফাল্গুন, চৈত্র`, `শীত, বসন্ত`],
        [`বৈশাখ, জ্যৈষ্ঠ, ভাদ্র, আশ্বিন, পৌষ, মাঘ`, `গ্রীষ্ম, শরৎ, শীত`],
        [
          `আষাঢ়, শ্রাবণ, কার্তিক, অগ্রহায়ণ, ফাল্গুন, চৈত্র`,
          `বর্ষা, হেমন্ত, বসন্ত`
        ],
        [`বৈশাখ, আশ্বিন, ফাল্গুন, ভাদ্র`, `বর্ষা, শরৎ, বসন্ত, শীত`],
        [`আষাঢ়, কার্তিক, মাঘ,  চৈত্র`, `গ্রীষ্ম, হেমন্ত, বর্ষা, বসন্ত`],
        [
          `বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ভাদ্র, আশ্বিন, কার্তিক, অগ্রহায়ণ, পৌষ, মাঘ, ফাল্গুন, চৈত্র `,
          `গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত`
        ]
      ]
    },

    {
      //Coumpound letters
      id: 'number',
      type: 'match',
      label: 'কোন ঋতু কোন মাস',
      commonData: {
        title: 'সঠিক মাস এবং ঋতু মেলান',
        fontSize: '2rem'
      },
      data: [
        `বৈশাখ, গ্রীষ্ম
আষাঢ়, বর্ষা
ভাদ্র, শরৎ
কার্তিক, হেমন্ত
পৌষ, শীত
ফাল্গুন, বসন্ত`,

        `জ্যৈষ্ঠ, গ্রীষ্ম
শ্রাবণ, বর্ষা
আশ্বিন, শরৎ
অগ্রহায়ণ, হেমন্ত
মাঘ, শীত
চৈত্র, বসন্ত`
      ]
    },

    {
      label: 'মাস ও ঋতুর ক্রম',
      type: 'sorting',
      id: 'month-season-order',
      commonData: {
        title: 'মাস ও ঋতু ক্রমে সাজান',
        multiple: true,
        fontSize: '2rem'
      },
      data: [
        `বৈশাখ, জ্যৈষ্ঠ, আষাঢ়, শ্রাবণ, ভাদ্র, আশ্বিন
কার্তিক, অগ্রহায়ণ, পৌষ, মাঘ, ফাল্গুন, চৈত্র`,
        `বৈশাখ, আষাঢ়, ভাদ্র, কার্তিক, পৌষ, ফাল্গুন
জ্যৈষ্ঠ, শ্রাবণ, আশ্বিন, অগ্রহায়ণ, মাঘ, চৈত্র`,
        `গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত
গ্রীষ্ম, বর্ষা, শরৎ, হেমন্ত, শীত, বসন্ত`
      ]
    }
  ]
};
