export default {
  label: 'ব্যাকরণ-2',
  id: 'bn-grammar-2',
  img: 'langGrammar',
  list: [
    {
      // class iv and above. ref - bhasapath v
      type: 'rightOne',
      label: 'ব্যাঞ্জনসন্ধি',
      id: 'bn-compoundword-consonant',
      commonData: {
        title: 'সঠিক বানান চয়ন করুন',
        noCaps: true,
        hasHint: true
      },
      data: [
        `আ + ছন্ন = , আচ্ছন্ন , আছন্ন
  বি + ছেদ = , বিচ্ছেদ , বিছেদ
  দিক্ + অন্ত = , দিগন্ত , দিকন্ত
  প্রাক্ + ঐতিহাসিক = , প্রাগৈতিহাসিক , প্রাকতিহাসিক `,

        `নিচ্ + অন্ত = , নিজন্ত , নিচন্ত
  সৎ + আশয় =, সদাশয় , সদশয়
  সৎ + ইচ্ছা = , সদিচ্ছা , সৎচ্ছা
  উৎ + চারণ = , উচ্চারণ , উচরণ`,

        `চলৎ + চিত্র = ,চলচ্চিত্র, চলচিত্র 
  উৎ + ছল = , উচ্ছল , উচ্ছাল 
  উৎ + ছেদ = , উচ্ছেদ , উচ্চদ  
  সৎ + জন = , সজ্জন , সৎজন 
  উৎ + জ্বল = , উজ্জ্বল , উৎজ্বল`,

        `চিৎ + ময় = , চিন্ময় , চিনয়
  মৃৎ + ময় = , মৃন্ময় , মৃনয়
  উৎ + লাস = , উল্লাস , উৎলাস 
  উৎ + লেখ = , উল্লেখ , উলেখ
  উৎ + নতি = , উন্নতি , উন্নাতি `,

        `বিপদ্ + জাল = , বিপজ্জাল , বিপজ্জল 
  বিপদ্ + জনক = , বিপজ্জনক , বিপজ্জানক 
  কুৎ + ঝটিকা = , কুজ্ঝটিকা , কুজঝটিকা 
  তৎ + টিকা =  , তট্টীকা, তট্টিকা
  উৎ + ডীন = , উড্ডীন, উদ্দীন `
      ]
    },
          {
        id: 'singular-reading',
        type: 'passage',
        label: 'বচন',
        data: {
          title: 'বচন',
          text: `যার দ্বারা বস্তুর সংখ্যা সম্পর্কে আমাদের ধারণা তৈরি হয়, তাকে বচন বলে। 
          বাংলা ভাষায় বচন দুটি - একবচন ও বহুবচন।
          #একবচন
          যে বচনের দ্বারা একটিমাত্র বস্তুকে বোঝায়, তাকে একবচন বলে। 
          #বহুবচন
          যে বচনের দ্বারা একাধিক বস্তুকে বোঝায়, তাকে বহুবচন বলে।`,
        }
      },

    
    {
      //Singular-Prural class-5 content ref-bhasapath-v
      id: 'number-2',
      type: 'match',
      label: 'ব্যাকরণ - বচন',
      commonData: {
        title: 'একবচন বহুবচন - মেলান',
        fontSize: '1.2rem'
      },
      data: [
        `আমি, আমরা
  তুমি, তোমরা
  আপনি, আপনারা
  তুই, তোরা
  পুরুষ, পুরুষেরা
  মহিলা, মহিলারা`,

        `বন্ধু, বন্ধুরা
  কন্যা, কন্যারা
  পুত্র, পুত্ররা
  ছেলে, ছেলেরা
  মেয়ে, মেয়েরা`,

        `আমার, আমাদের 
  তোমার, তোমাদের 
  আপনার, আপনাদের 
  তোর, তোদের 
  তিনি, তাঁরা 
  সে, তারা `,

        `কুকুর, কুকুরগুলো
  বিড়াল, বিড়ালগুলো
  গরু, গরুগুলো
  ছাগল, ছাগলগুলো
  গাড়ি, গাড়িগুলো
  বিছানা, বিছানাগুলো`
      ]
    },
                {
        id: 'gender-reading',
        type: 'passage',
        label: 'লিঙ্গ',
        data: {
          title: 'লিঙ্গ',
          text: `যে সকল শব্দ দ্বারা পুরুষ জাতি, স্ত্রী জাতি, স্ত্রী-পুরুষ উভয় জাতি অথবা কোনো অচেতন পদার্থকে বোঝায়, তাদেরকে লিঙ্গ বলে।
          #পুংলিঙ্গ
           যে সকল শব্দ দ্বারা পুরুষ জাতি বোঝায়, তাদেরকে পুংলিঙ্গ বলে। যেমন- বাবা, কাকা, দাদা ইত্যাদি।
          #স্ত্রীলিঙ্গ
           যে সকল শব্দ দ্বারা স্ত্রী জাতি বোঝায়, তাদেরকে স্ত্রীলিঙ্গ বলে। যেমন- মা, বোন, চাচী, খালা ইত্যাদি। 
          #উভলিঙ্গ
           যে সকল শব্দ দ্বারা স্ত্রী-পুরুষ উভয় জাতি বোঝায়, তাদেরকে উভলিঙ্গ বলে। যেমন- শিশু, শিশু, সন্তান, জনগণ, লোকজন ইত্যাদি।
          #ক্লীবলিঙ্গ
           যে সকল শব্দ দ্বারা স্ত্রী বা পুরুষ জাতি না বুঝিয়ে কোনো অচেতন পদার্থ বোঝায়s, তাদেরকে ক্লীব লিঙ্গ বলে। যেমন- বই, চেয়ার, টেবিল ইত্যাদি।`,
        }
      },

    {
      //Gender - class-5 content ref-bhasapath-v
      id: 'number-3',
      type: 'match',
      label: 'ব্যাকরণ - লিঙ্গ',
      commonData: {
        title: 'পুলিঙ্গ স্ত্রীলিঙ্গ - মেলান',
        fontSize: '1.2rem'
      },
      data: [
        `বাবা, মা
  ছেলে, মেয়ে
  পুত্র, কন্যা
  স্বামী, স্ত্রী 
  কাকা, কাকিমা`,

        `দাদু, দিদিমা
  জেঠু, জেঠিমা
  বন্ধু, বান্ধবী
  বালক, বালিকা
  ভাই, বোন`,

        `ছাত্র, ছাত্রী 
  তরুণ, তরুণী 
  মামা, মামি 
  কাকা, কাকিমা 
  সুন্দর, সুন্দরী`,

        `কর্তা, গিন্নি 
  বর, কনে 
  ভূত, পেত্নি 
  বোনপো, বোনঝি 
  ভাইপো, ভাইঝি`,

        `ভদ্রলোক, ভদ্রমহিলা 
  বেটাছেলে, মেয়েছেলে 
  বাঘ, বাঘিনী 
  অধ্যাপক, অধ্যাপিকা 
  নায়ক, নায়িকা 
  বালক, বালিকা`,

        `আধুনিক, আধুনিকা 
  কোকিল, কোকিলা 
  চতুর, চতুরা 
  চঞ্চল, চঞ্চলা 
  নবীন, নবীনা 
  প্রিয়, প্রিয়া 
  বৃদ্ধ, বৃদ্ধা `
      ]
    },
          {
          // class v and above - reference bhashapath - v
          type: 'group',
          label: 'উভয়লিঙ্গ ও ক্লীবলিঙ্গ ',
          id: 'classify-letter-type',
          commonData: {
            title: 'উভয়লিঙ্গ ও ক্লীবলিঙ্গ গুলি সঠিক বক্সে রাখুন ',
            fontSize: '2rem',
            printTitle:
              'Rewrite the words given at the bottom at approprate boxes.',
            types: ['উভয়লিঙ্গ', 'ক্লীবলিঙ্গ']
          },
          data: [
            [`মানুষ, শিশু, সন্তান`, `ঘর , বাড়ি , টেবিল , চেয়ার`],
            [`লোকজন , জনগণ`, `কালি , কলম , জামা, মাটি , বই , ফুল`],
          ]
        },
          {
        id: 'purush-reading',
        type: 'passage',
        label: 'পুরুষ',
        data: {
          title: 'পুরুষ',
          text: `যাকে অবলম্বন করে ক্রিয়া সম্পাদিত হয়, তাকে  পুরুষ  বলে। বাংলায় পুরুষ তিন ধরণের - উত্তম পুরুষ, মধ্যম পুরুষ, প্রথম পুরুষ 
          #উত্তম পুরুষ
          বাক্যের বক্তা যে পদের দ্বারা নিজেকে বা নিজেদেরকে বোঝায়, তা বক্তাপক্ষ, একেই বলা হয় উত্তম পুরুষের পদ। যেমন: আমি, আমরা, মুই, মোরা। উত্তম পুরুষ সবসময় সর্বনাম পদ হয়।
          #মধ্যম পুরুষ
          বাক্যের বক্তা যে পদের দ্বারা শ্রোতাকে বোঝায়, তাকে বলে শ্রোতাপক্ষ বা মধ্যম পুরুষ। যেমন: আপনি, আপনারা, তুমি, তোমরা, তুই, তোরা। মধ্যম পুরুষ‌ও সবসময় সর্বনাম পদ হয়। 
          #প্রথম পুরুষ
          বাক্যের বক্তা যে বিশেষ্য বা সর্বনামের দ্বারা বক্তা ও শ্রোতার বাইরে অন্য কাউকে নির্দেশ করে, তাকে বলে অন্যপক্ষ বা প্রথম পুরুষ। সমস্ত বিশেষ্য পদ‌ই প্রথম পুরুষের অন্তর্গত। এছাড়া বেশ কিছু সর্বনাম পদ‌ও প্রথম পুরুষের মধ্যে পড়ে। যেমন: সে, তিনি, ও, ওরা, এ, এরা, ওই প্রভৃতি‌।`,
        }
      },

    {
      //subjectverb - class-5 content ref-bhasapath-v
      id: 'Person',
      type: 'match',
      label: 'পুরুষ',
      commonData: {
        title: 'পুরুষ নির্বাচন',
        fontSize: '1.2rem'
      },
      data: [
        `আমি, উত্তম পুরুষ
          তুমি, মধ্যম পুরুষ 
          সে, প্রথম পুরুষ`,

        `আমরা, উত্তম পুরুষ
          তোমরা, মধ্যম পুরুষ 
          তারা, প্রথম পুরুষ`,

        `আমাদের, উত্তম পুরুষ
          তোমাদের, মধ্যম পুরুষ 
          তাদের, প্রথম পুরুষ`,

        `আমাকে, উত্তম পুরুষ
          তোমাকে, মধ্যম পুরুষ 
          তাকে, প্রথম পুরুষ`,

        `মোদের, উত্তম পুরুষ
          তোদের, মধ্যম পুরুষ 
          তাদের, প্রথম পুরুষ`,

        `আমরা, উত্তম পুরুষ
          আপনারা, মধ্যম পুরুষ 
          ওরা, প্রথম পুরুষ`,

        `আমি, উত্তম পুরুষ
          আপনি, মধ্যম পুরুষ 
          তিনি, প্রথম পুরুষ`,

        `আমরা, উত্তম পুরুষ
          তোরা, মধ্যম পুরুষ 
          তাঁরা, প্রথম পুরুষ`
      ]
    },

    {
      //person-verb - class-5 content ref-bhasapath-v
      id: 'person-verb',
      label: 'পুরুষ - ক্রিয়া',
      type: 'fillupOptions',
      commonData: {
        title: 'শূন্যস্থান পূরণ করুন.'
      },
      data: [
        `*আমি(ওরা)* বাজারে যাই।    
       *তুমি(তুই)* রোজ খেলতে যাও।    
       *আপনি(সে)* প্রতিদিন কাজে যান।    
       *তুই(তোমরা)* রোজ স্কুলে যাস না কেন ?   
       *ওরা(তাঁরা)* মাঠে চাষ করতে যায়।`,

        `*আমি(তোরা)* খেলতে যাবো। 
       *তুমি(আপনারা)* কাল কলকাতা যাবে। 
       *আপনি(তুমি)* কাল মনে করে হাসপাতাল যাবেন। 
       *তুই(তুমি)* কি আমার সাথে দুর্গাপুর যাবি? 
       *ওরা(তিনি)* কাল সার্কাস দেখতে যাবে। `,

        `*আমি(তিনি,সে)* কাল ফুটবল ম্যাচ দেখতে গিয়েছিলাম। 
       *তুমি(তোরা,আপনারা)* কি কাল ডাক্তার দেখতে গিয়েছিলে?
       *আপনি(তোরা,আমরা)* কি লাইব্রেরি গিয়েছিলেন? 
       *তুই(তিনি,সে)* কাল বাবুর বাড়ি  গিয়েছিলিস।  
       *ওরা(আপনারা,তোরা)* শুনলাম কাল নৌকা চড়তে গিয়েছিলো(গিয়েছিলেন)। `,

        `*আমি(তুই,সে)* খাবার খাই।     
       *তুমি(তোরা,আমরা)* রুটি খাও।     
       *আপনি(তুই,সে)* রসগোল্লা খান।     
       *তুই(তিনি,সে)* রোজ ভাত খাস।     
       *ওরা(তোরা,আমরা)* প্রতিদিন সিঙ্গারা খায়। `,

        `*আমি(তিনি,তাঁরা)* আম খাবো। 
       *তুমি(তিনি,তুই)* কি জল খাবে?
       *তাঁরা(তোরা,আমরা)* কাল আমাদের বাড়িতে খাবেন। 
       *তুই(তাঁরা,সে)* কি সন্দেশ খাবি?
       *ওরা(আপনারা,তুই)* কি খাবে?`,

        `*আমি(তিনি,তুই)* কাল মিষ্টি খেয়েছিলাম।  
       *তুমি(আপনারা,তুই)* গতকাল মন্দিরে প্রসাদ খেয়েছিলে।   
       *আপনি(তুই,সে)* কি কাল পেটভরে খেয়েছিলেন?  
       *তুই(সে,ও)* কি খেয়েছিলিস?  
       *ওরা(আপনারা,তুই)* গতকাল অনেক চকলেট খেয়েছিলো`,

        `*আমি(তুমি,ওরা)* সারাদিন খেলি। 
       *তুমি(তুই,সে)* খোখো খেলো।  
       *তিনি(তুমি,ওরা)* বাচ্চাদের সাথে খেলেন।
       *তুই(তুমি,আমরা)* কি আমাদের সাথে খেলবি?
       *ওরা(তাঁরা,তুমি)* পুরোদিন ক্যারম খেলে।`,

        `*আমি(তিনি,তুই)* বই পড়তে ভালোবাসি।
       *তিনি(তুই,সে)* রোজ খবরের কাগজ পড়েন। 
       *ও(তাঁরা,তুমি)* সারাদিন ঘুরে বেড়ায়।
       *তুমি(তিনি,তুই)* কি আরও রসগোল্লা খাবে?
       *তুই(তুমি,তিনি)* কেমন আছিস?`
      ]
    },

                    {
                  // for class v and above - ref class v bhasapath
            id: 'bn-verbtype',
            label: 'সমাপিকা ও অসমাপিকা ক্রিয়া',
            type: 'fillupOptions',
            commonData: {
              title: 'সমাপিকা ও অসমাপিকা ক্রিয়া নির্ধারণ করুন',               
            },
            data: [

              `আমরা প্রতিদিন সকালে পড়তে বসি। 
              পড়তে - *অসমাপিকা (সমাপিকা)*            
              শীতের ছুটিতে দুর্গাপুর বেড়াতে যাব। 
              বেড়াতে - *অসমাপিকা (সমাপিকা)*              
              আমরা প্রতিদিন সকালে পড়তে বসি। 
              বসি - *সমাপিকা (অসমাপিকা)*
              শীতের ছুটিতে দুর্গাপুর বেড়াতে যাব। 
              যাব - *সমাপিকা (অসমাপিকা)*`,
            
                `বিড়ালটা মাছ নিয়ে পালালো। 
                নিয়ে - *অসমাপিকা (সমাপিকা)*
                কলকাতাতে সবসময় গাড়ি ছুটে চলেছে। 
                চলেছে - *সমাপিকা (অসমাপিকা)*
                উনি বিছানার উপর ঘুমিয়ে আছেন। 
                আছেন - *সমাপিকা (অসমাপিকা)*
                বিড়ালটাকে ধরতে কুকুরটা ছুটে গেলো। 
                ছুটে - *অসমাপিকা (সমাপিকা)*`,

                `আমি আমগুলো কুড়িয়ে আনি। 
                কুড়িয়ে - *অসমাপিকা (সমাপিকা)*
                পড়াশুনা করলে ভালো ফল পাবে। 
                করলে - *অসমাপিকা (সমাপিকা)*
                আমি এখন খেলতে যাবো। 
                যাবো - *সমাপিকা (অসমাপিকা)*              
                বাবু গাছে উঠতে জানে। 
                জানে - *সমাপিকা (অসমাপিকা)*`
              ],              

          },

   
          {
        // class v and above
        type: 'group',
        label: 'বিশেষ্য vs সর্বনাম ',
        id: 'bn-nounpronoun',
        commonData: {
          title: 'বিশেষ্য ও সর্বনাম গুলি সঠিক বক্সে রাখুন ',
          fontSize: '2rem',
          printTitle:
            'Rewrite the words given at the bottom at approprate boxes.',
          types: ['বিশেষ্য', 'সর্বনাম']
        },
        data: [
          [`নন্টে , কলকাতা , গঙ্গা , পাতা`, `আমি, আমরা, আমাকে,আমাদের`],
          [`রাস্তা , নদী , জল , বন্ধু `, `তুমি, তোমরা, তোমাকে, তাঁকে`],
          [`রামকে , মধু , মাস্টারমশাই , জেঠুকে`, `তুই, তোকে, আপনি, আপনাকে`],
          [`কাকাবাবু , ফল , ফুল , আকাশ`, `সে, তারা, তিনি, তার`],
          [`কলম , বই , টেবিল , বিছানা`, `এ , ও, এই , ওই`],
          [`বন্ধুরা , ছেলেরা , ফুলগুলো , মজুর`, `এরা, ইনি, এটা, উনি, ওটা, ওগুলি`],
          [`দিল্লী , বাতাস , পর্বত , দাদু`, `কেউ , কিছু, কোনো, কে , কী, কোন`],
          [`বিছানাটা , মাছটা , জামাগুলো , কুকুর`, `কোনটা, কারা, কোনগুলি ,কোথায়`],
          [`চামচ , বালি , অর্জুন , জানালা`, `সব, সকল, সবাই, উভয়`],
        ]
      },
    {
      // class-5 content ref-bhasapath-v
      label: 'বাক্যে পদ',
      type: 'classifySentence',
      id: 'bn-partsofspeach',
      // lockAfter: 10,
      commonData: {
        title:
          'আন্ডারলাইন করা শব্দটিকে বিশেষ্য বা ক্রিয়াপদ হিসেবে শ্রেণীবদ্ধ করুন.',
        types: ['বিশেষ্য','ক্রিয়া']
      },
      data: [
        [
          `*আকাশ* ভালো ফুটবল খেলে। 
            পাতার রং *সবুজ*। 
            আমার বন্ধুর নাম *শীর্ষেন্দু*।`,
          `আকাশ ভালো ফুটবল *খেলে*। 
            আমি রোজ হেঁটে স্কুলে *যাই*। 
            আমার সবুজ কলাপাতায় *খেতে* খুব ভালোলাগে।`
        ],
        [
          `*নন্টে* খুব দুষ্টু ছেলে। 
            নন্টের প্রিয় বন্ধুর নাম *ফন্টে*। 
            *মাস্টামশাই* খুব রাগী। 
            *কেল্টুদা* সারাদিন মিষ্টি খায়। 
            নন্টে ফন্টে *নারায়ণ দেবনাথের* লেখা গল্প। `,
          `কেল্টুদা সারাদিন মিষ্টি *খায়*। 
            নন্টে ফন্টে নারায়ণ দেবনাথের *লেখা* গল্প। `
        ],
        [
          `আমার *মা* ভালো রান্না করেন। 
            আমার *বাবা* রোজ কাজে যান। 
            আমার *দাদা* সারাদিন পড়াশুনা করে। 
            আমি এখন *স্কুল* যাচ্ছি। `,
          `আমার মা ভালো রান্না *করেন*। 
            আমার বাবা রোজ কাজে *যান*। 
            আমার দাদা সারাদিন পড়াশুনা *করে*। 
            আমি এখন স্কুল *যাচ্ছি*। 
            আমি আর আমার বন্ধুরা সারাদিন *খেলি*। `
        ],
        [
          `*রবীন্দ্রনাথ ঠাকুর* সহজপাঠ লিখেছেন। 
            তিনি আমাকে তার গল্পের *বইগুলো* দিলেন। 
            আমি চিঠি লিখে *বাড়ি* যাব। `,
          `রবীন্দ্রনাথ ঠাকুর সহজপাঠ *লিখেছেন*। 
            তিনি আমাকে তার গল্পের বইগুলো *দিলেন*। 
            আমি চিঠি লিখে বাড়ি *যাব*। 
            তোমার ঘুম *ভেঙেছে*?
            তুমি আর আমি কাল স্কুলে *যাব*।  `
        ],
        [
          `পাকা *আম* খেতে মিষ্টি। 
            *কাকাবাবু* সবসময় খুশি থাকেন। 
            *অম্বর* অত্যন্ত ভালো মানুষ। 
            ছেলেটা সবকটা *পুতুল* ভেঙে ফেলেছে।  `,
          `পাকা আম *খেতে* মিষ্টি। 
            কাকাবাবু সবসময় খুশি *থাকেন*। 
            তুমি একটু আস্তে *চল*। 
            ছেলেটা সবকটা পুতুল *ভেঙে ফেলেছে*। `
        ]
      ]
    },
    
          {
        // Synonyms - class-5 content ref-bhasapath-iv
        type: 'rightOne',
        label: 'ব্যাকরণ - বিপরীতার্থক শব্দ চয়ন',
        id: 'bn-antonym-2',
        commonData: {
          title: 'সঠিক বিপরীতার্থক শব্দ চয়ন করুন',
          noCaps: true,
          hasHint: true
        },
        data: [
          `দিন = , রাত, দারিদ্র  
 বৃদ্ধি = , হ্রাস, বাড়া  
নবীন = , প্রবীণ, যুবক  
স্বাধীন = , পরাধীন, পরাজিত  
স্থির = , অস্থির, শান্ত `,
          
          `অজ্ঞ = , বিজ্ঞ, বুদ্ধিহীন  
          কঠিন =  , কোমল, সরল  
          ধ্বংস = , সৃষ্টি, নতুন  
          আকাশ = , পাতাল, অম্বর  
          অগ্রজ = , অনুজ, পেছনে `,
          
          `উন্নতি = , অবনতি, উন্নাসিক  
            ছোট = , বড়, বৃদ্ধা 
            জ্ঞানী = , মূর্খ, গুণী  
            উচিত = , অনুচিত, খারাপ  
            পাপ = , পুণ্য, অনাচার  `,
          
            `আসা = , যাওয়া, ভরসা 
            আগে = , পেছনে, সামনে 
            উপর = , নিচ, উঁচু 
            ভালো = , খারাপ, চোর 
            ডান = , বাম, দক্ষিণ `,

            `বেশি = , কম, অনেক 
            দেশ = , বিদেশ, রাজ্য 
            ভয় = , সাহস, ভীতু 
            দুর্বল = , সবল, সরল 
            সত্য = , মিথ্যা, সঠিক `,
    
            `টাটকা = , বাসি, গরম  
            যত্ন = , অযত্ন, খারাপ  
            খাঁটি = , ভেজাল, বাজে  
            সোজা = , বেঁকা, আঁকা  
            প্রশ্ন = , উত্তর, পরীক্ষা `,
    
            `উচু = , নিচু, উপর 
        চালাক = , বোকা, বুদ্ধিহীন 
        অচল = , সচল, চলিত 
        অল্প = , অধিক, অতিরিক্ত 
        কাচা = , পাকা, পুরানো `,
  
        ]
      },
          {
      // for class 5 and above
      id: 'bn_samesoundingword',
      type: 'match',
      label: 'ব্যাকরণ - সমোচ্চারিত ভিন্নার্থক শব্দ অর্থ মেলান',
      commonData: {
        title: 'সমোচ্চারিত ভিন্নার্থক শব্দ - অর্থ মেলান',
        fontSize: '1.2rem'
      },
      data: [
        `পরা, পরিধান
  পড়া, পড়াশুনা
  নিত্য, প্রতিদিন 
  নৃত্য, নাচ 
  মূর্খ, জ্ঞানহীন
  মুখ্য, প্রধান`,

        `আসা, আগমন
    আশা, আকাঙ্ক্ষা 
    কটি, কোমর 
    কোটি, শত লক্ষ 
    কুল, বংশ
    কূল, তট`,

        `দিন, দিবস 
    দীন, দারিদ্র 
    দার, পত্নী 
    দ্বার, দরজা 
    সুর, দেবতা 
    শূর, বীর `,

        `নিতি , নিত্য 
    নীতি , আদর্শ 
    ধনি , সুন্দরী 
    ধনী, পায়সা বহুল 
    ধ্বনি , শব্দ `,

        `লক্ষণ, চিহ্ন
    লক্ষ্মণ, রামের ভাই
    হাঁস, পাখি
    হাস, হাসি
    গিরিশ, মহাদেব 
    গিরীশ, হিমালয়`,

        `সাড়া, সংকেত 
    সারা, সমাপ্ত
    নিরাশ, আশাহীন
    নিরাস, প্রত্যাখান
    বাণ, তির 
    বান , বন্যা`
      ]
    },
    {
      // for class -5 students
      type: 'rightOne',
      label: 'ব্যাকরণ - সমোচ্চারিত ভিন্নার্থক শব্দ সঠিক অর্থ চয়ন',
      id: 'bn-samesoundingword-2',
      commonData: {
        title: 'সঠিক অর্থ চয়ন করুন',
        noCaps: true,
        hasHint: true
      },
      data: [
        `পরা = , পরিধান, পড়াশুনা  
              পড়া =, পড়াশুনা, পরিধান
              নিত্য =, প্রতিদিন,  নাচ 
              নৃত্য =, নাচ,  প্রতিদিন
              মূর্খ =, জ্ঞানহীন, প্রধান 
              মুখ্য =, প্রধান,  জ্ঞানহীন`,

        `আসা = , আগমন, আকাঙ্ক্ষা
              আশা = , আকাঙ্ক্ষা, আগমন 
              কটি = , কোমর, শত লক্ষ 
              কোটি = , শত লক্ষ, কোমর 
              কুল = , বংশ, তট
              কূল = , তট, বংশ`,

        `দিন = , দিবস, দারিদ্র 
                দীন = , দারিদ্র, দিবস 
                দার = , পত্নী, দরজা 
                দ্বার = , দরজা, পত্নী 
                সুর = , দেবতা, বীর 
                শূর = , বীর, দেবতা `,

        `নিতি = , নিত্য, আদর্শ 
                নীতি = , আদর্শ, নিত্য 
                ধনি = , সুন্দরী, পায়সা বহুল 
                ধনী= , পায়সা বহুল, শব্দ 
                ধ্বনি = , শব্দ, সুন্দরী`,

        `লক্ষণ = , চিহ্ন, রামের ভাই
                লক্ষ্মণ = , রামের ভাই, চিহ্ন
                হাঁস = , পাখি, হাসি
                হাস = , হাসি, পাখি
                গিরিশ = , মহাদেব, হিমালয় 
                গিরীশ = , হিমালয়, মহাদেব`,

        `সাড়া = , সংকেত, সমাপ্ত 
                সারা = , সমাপ্ত, সংকেত
                নিরাশ = , আশাহীন, প্রত্যাখান
                নিরাস = , প্রত্যাখান, আশাহীন
                বাণ = , তির, বন্যা 
                বান  = , বন্যা, তির`
      ]
    },
     {
      // class v and above
      label: 'বাগধারা ও প্রবাদ-প্রবচন',
      id: 'bn-idioms',
      type: 'mcq',
      commonData: {
        title: 'বাগধারাগুলির সঠিক অর্থ খুঁজুন'
      },
      data: [
        {
          questions: [
            {
              qText: 'অক্কা পাওয়া',
              options: 'মারা যাওয়া, একমাত্র অবলম্বন, খুব বিপদে পড়া, ভীষণ বিপদ'
            },
            {
              qText: 'অগাধ জলের মাছ',
              options:
                'সুচতুর ব্যক্তি, চির দিনের জন্য প্রস্থান, দিশেহারা হয়ে পড়া, সামান্য বিদ্যার অহংকার'
            },
            {
              qText: 'অগ্নিপরীক্ষা',
              options: 'কঠিন পরীক্ষা, খুব বিপদে পড়া, ভীষণ বিপদ, মারা যাওয়া'
            },
            {
              qText: 'অতি চালাকের গলায় দড়ি',
              options:
                'বেশি চাতুর্যের পরিণাম, খুব বিপদে পড়া, দিশেহারা হয়ে পড়া, লোভে ক্ষতি'
            },
            {
              qText: 'অল্পবিদ্যা ভয়ংকরী',
              options:
                'সামান্য বিদ্যার অহংকার, সীমার বাইরে পদক্ষেপ, দিশেহারা হয়ে পড়া, লোভে ক্ষতি'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'অতি লোভে তাঁতি নষ্ট',
              options: 'লোভে ক্ষতি, ফাঁকি, খুব বিপদে পড়া, ভীষণ বিপদ'
            },
            {
              qText: 'অদৃষ্টের পরিহাস',
              options:
                'ভাগ্যের নিষ্ঠুরতা, চির দিনের জন্য প্রস্থান, দিশেহারা হয়ে পড়া, খুব বিপদে পড়া'
            },
            {
              qText: 'অন্ধকারে ঢিল মারা',
              options:
                'আন্দাজে কাজ করা, সীমার বাইরে পদক্ষেপ, ভীষণ বিপদ, বেশি চাতুর্যের পরিণাম'
            },
            {
              qText: 'অরণ্যে রোদন',
              options:
                'নিষ্ফল আবেদন, খুব চালাক, দিশেহারা হয়ে পড়া, নিরতিশয় ক্রুদ্ধ'
            },
            {
              qText: 'অমাবস্যার চাঁদ',
              options:
                'দুর্লভ বস্তু, চির দিনের জন্য প্রস্থান, দিশেহারা হয়ে পড়া, ভীষণ শত্রুতা'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'আকাশ কুসুম',
              options:
                'অলীক কল্পনা, অপ্রত্যাশিত ধনলাভ, আকাঙ্ক্ষিত বস্তু, ভীষণ বিপদ'
            },
            {
              qText: 'আকাশ পাতাল',
              options:
                'প্রচুর ব্যবধান, খুব খুশি, দিশেহারা হয়ে পড়া, সীমার বাইরে পদক্ষেপ'
            },
            {
              qText: 'আকাশ থেকে পড়া',
              options:
                'অপ্রত্যাশিত, সীমার বাইরে পদক্ষেপ, দিশেহারা হয়ে পড়া, বেশি চাতুর্যের পরিণাম'
            },
            {
              qText: 'আদায় কাঁচকলায়',
              options:
                'তিক্ত সম্পর্ক, খুব খুশি, দিশেহারা হয়ে পড়া, হঠাৎ বড়লোক'
            },
            {
              qText: 'আহ্লাদে আটখানা',
              options:
                'খুব খুশি, প্রাণপণ চেষ্টা করা, দিশেহারা হয়ে পড়া, হতভাগ্য'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'আগুনে ঘি ঢালা',
              options: 'রাগ বাড়ানো, শত্রুতা, আকাঙ্ক্ষিত বস্তু, দীর্ঘসূত্রিতা'
            },
            {
              qText: 'আগুন নিয়ে খেলা',
              options:
                'ভয়ঙ্কর বিপদ, খুব খুশি, দিশেহারা হয়ে পড়া, সীমার বাইরে পদক্ষেপ'
            },
            {
              qText: 'আদা জল খেয়ে লাগা',
              options:
                'প্রাণপণ চেষ্টা করা, আজগুবি কেচ্ছা, দীর্ঘসূত্রিতা, বেশি চাতুর্যের পরিণাম'
            },
            {
              qText: 'আকাশে তোলা',
              options:
                'অতিরিক্ত প্রশংসা করা, খুব খুশি, দিশেহারা হয়ে পড়া, হঠাৎ বড়লোক'
            },
            {
              qText: 'আমতা আমতা করা',
              options:
                'দ্বিধা করা, প্রাণপণ চেষ্টা করা, দিশেহারা হয়ে পড়া, হতভাগ্য'
            }
          ]
        },

        {
          questions: [
            {
              qText: 'উত্তম মধ্যম',
              options: 'প্রহার, অমিতব্যয়ী, সহজলভ্য, পাগলামি'
            },
            {
              qText: 'উড়ে এসে জুড়ে বসা',
              options:
                'অনধিকারীর অধিকার, পাগলামি, দিশেহারা হয়ে পড়া, সীমার বাইরে পদক্ষেপ'
            },
            {
              qText: 'এক চোখা',
              options:
                'পক্ষপাতিত্ব, বিশৃঙ্খলা, দীর্ঘসূত্রিতা, প্রবল প্রতিদ্বন্দ্বী'
            },
            {
              qText: 'এলাহি কাণ্ড',
              options:
                'বিরাট আয়োজন, অতিরিক্ত প্রশংসা করা, দিশেহারা হয়ে পড়া, হঠাৎ বড়লোক'
            },
            {
              qText: 'কচ্ছপের কামড়',
              options: 'যা সহজে ছাড়ে না, সৌভাগ্য লাভ, নির্লজ্জ'
            }
          ]
        }
      ]
    },
  ]
};
