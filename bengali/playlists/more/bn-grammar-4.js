export default {
  label: 'ব্যাকরণ',
  id: 'bn-grammar-4',
  img: 'langGrammar',
  list: [
    {
      // class-4 content ref-bhasapath-iv
      type: 'group',
      label: 'ব্যঞ্জনধ্বনি - অল্পপ্রাণ/মহাপ্রাণ ধ্বনি',
      id: 'classify-sound-type-1',
      commonData: {
        title: 'অল্পপ্রাণ ধ্বনি ও মহাপ্রাণ ধ্বনি গুলি সঠিক বক্সে রাখুন ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['অল্পপ্রাণ ধ্বনি', 'মহাপ্রাণ ধ্বনি']
      },
      data: [
        [`ক ,চ , ট , ত ,প`, `খ , ছ , ঠ , থ , ফ`],
        [`গ , জ , ড , দ , ব`, `ঘ , ঝ , ঢ, ধ, ভ`],
        [`ক ,চ , ট , ত ,প`, `ঘ , ঝ , ঢ, ধ, ভ`],
        [`গ , জ , ড , দ , ব`, `খ , ছ , ঠ , থ , ফ`],
        [`ক ,চ , ট , দ , ব`, `ঝ , ঢ, ধ , থ , ফ`],
        [`গ , জ , ড , ত ,প`, `খ , ছ , ঝ , ঢ, ধ`]
      ]
    },
    {
      // class-4 content ref-bhasapath-iv
      type: 'group',
      label: 'ব্যঞ্জনধ্বনি - অঘোষ/ঘোষ ধ্বনি',
      id: 'classify-sound-type-2',
      commonData: {
        title: 'অঘোষ ধ্বনি ও ঘোষ ধ্বনি গুলি সঠিক বক্সে রাখুন ',
        fontSize: '2rem',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['অঘোষ ধ্বনি', 'ঘোষ ধ্বনি']
      },
      data: [
        [`ক ,চ , ট , ত ,প`, `গ , জ , ড , দ , ব`],
        [`খ , ছ , ঠ , থ , ফ`, `ঘ , ঝ , ঢ, ধ, ভ`],
        [`ক ,চ , ট , ত ,প`, `ঘ , ঝ , ঢ, ধ, ভ`],
        [`খ , ছ , ঠ , থ , ফ`, `গ , জ , ড , দ , ব`],
        [`ক ,চ , ট , খ , ছ `, `ঘ , ঝ , ড , দ , ব`],
        [`ত ,প , ঠ , থ , ফ`, `গ , জ , ঢ, ধ, ভ`]
      ]
    },

    {
      // class-4 content ref-bhasapath-iv
      type: 'rightOne',
      label: 'সঠিক বাঞ্জনধ্বনি চয়ন',
      id: 'sound-type-1',
      commonData: {
        title: 'কোন ধরণের ধ্বনি নির্বাচন করুন ',
        noCaps: true,
        hasHint: true
      },
      data: [
        `ক / চ = , অঘোষ , ঘোষ 
          ঙ / ঞ = , নাসিক্য , অঘোষ
          ত / প = , অঘোষ , ঘোষ
          গ / জ = , ঘোষ , নাসিক্য 
          ধ, ভ = , ঘোষ , অঘোষ`,

        `ক / চ = , অল্পপ্রাণ , মহাপ্রাণ 
          ত / প = , অল্পপ্রাণ , মহাপ্রাণ 
          থ / ফ = , মহাপ্রাণ , অল্পপ্রাণ
          ন / ণ  = , নাসিক্য , অল্পপ্রাণ 
          ঞ / ম = , নাসিক্য , অঘোষ`,

        `ম / ন = , নাসিক্য , মহাপ্রাণ 
          জ / ঢ = , ঘোষ , নাসিক্য 
          ড / দ = , ঘোষ , অঘোষ
          গ / জ  = , অল্পপ্রাণ , মহাপ্রাণ
          দ / ব = , অল্পপ্রাণ , মহাপ্রাণ`,

        `ঝ / ঢ= , মহাপ্রাণ, নাসিক্য  
          ঘ / ঝ = , মহাপ্রাণ, নাসিক্য 
          ড / দ = , ঘোষ , অঘোষ
          ট / দ = , অল্পপ্রাণ , মহাপ্রাণ
          প / ঠ = , অল্পপ্রাণ , মহাপ্রাণ`,

        `ন / ণ = , নাসিক্য , মহাপ্রাণ 
          ঢ / ধ = , অঘোষ , নাসিক্য 
          চ / ট = , ঘোষ , অঘোষ
          খ / ছ  = , মহাপ্রাণ , অল্পপ্রাণ
          ঝ / ঢ = , মহাপ্রাণ , অল্পপ্রাণ`
      ]
    },
    {
      // class iv and above. ref - bhasapath iv
      type: 'rightOne',
      label: 'স্বরসন্ধি',
      id: 'bn-compoundword-vowel',
      commonData: {
        title: 'সঠিক বানান চয়ন করুন',
        noCaps: true,
        hasHint: true
      },
      data: [
        `সূর্য + উদয় = , সূর্যোদয়, সূর্যদয়  
  স্ব + অধীনতা =, স্বাধীনতা, স্বধীনতা
  পদ + অর্পণ =, পদার্পন, পদর্পন 
  অশ্ব + আরোহী =, অশ্বারোহী, অশ্বারহী 
  মেঘ + আচ্ছন্ন =, মেঘাচ্ছন্ন,  মেঘচ্ছন্ন`,

        `বিদ্যা + অভ্যাস = , বিদ্যাভ্যাস, বিদ্যভ্যাস
  যথা + অর্থ = , যথার্থ, যথর্থ
  বিদ্যা + আলয় =, বিদ্যালয়, বিদ্যলয়
  মহা + আকাশ =, মহাকাশ, মহোকাশ
  রবি + ইন্দ্র =, রবীন্দ্র , রবিন্দ্র `,

        `অতি + ইত = , অতীত , অতিত
  মরু + উদ্যান = ,মরূদ্যান , মরুদ্যান
  লঘু + ঊর্মি = , লঘূর্মি , লঘর্মি
  শুভ + ইচ্ছা = , শুভেচ্চা , শুভইচ্ছা
  নর + ইন্দ্র = , নরেন্দ্র , নরন্দ্র`,

        `মহা + ইন্দ্র = , মহেন্দ্র , মহীন্দ্রা
  রমা + ঈশ = , রমেশ , রমিশ  
  যথা + উচিত = , যথোচিত, যথচিত
  মহা + ঊর্মি = , মহোর্মী , মহর্মী
  দেব + ঋষি = , দেবর্ষি , দেবঋর্ষি`,

        `মহা + ঋষি = , মহর্ষি , মহার্ষি
  পিপাসা + ঋত = , পিপাসার্ত , পিপসার্ত
  জন + এক = , জনৈক , জনেক
  মত + ঐক্য = , মতৈক্য , মতৈক `
      ]
    },

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
        // class-4 content ref-bhasapath-iv
        label: 'বাক্যে কর্তা ও ক্রিয়া',
        type: 'classifySentence',
        id: 'bn-sentence-subject',
        // lockAfter: 10,
        commonData: {
          title:
            'আন্ডারলাইন করা শব্দটিকে কর্তা অথবা ক্রিয়া হিসেবে শ্রেণীবদ্ধ করুন.',
          types: ['কর্তা', 'ক্রিয়া']
        },
        data: [
          [
            `*আমি* খাচ্ছি। 
            *বাবা* হাসছে। 
            *খোকা* খেলছে।
            *সে* যাচ্ছে।`,
            `আমি *খাচ্ছি*। 
            বাবা *হাসছে*। 
            খোকা *খেলছে*।
            সে *যাচ্ছে*। `,
          ],
          [
            `*আমি* খাবার খাচ্ছি। 
            *বাবা* খুব হাসছে। 
            *খোকা* ফুটবল খেলছে।
            *সে* বাড়ি যাচ্ছে।`,
            `আমি খাবার *খাচ্ছি*। 
            বাবা খুব *হাসছে*। 
            খোকা ফুটবল *খেলছে*।
            সে বাড়ি *যাচ্ছে*। `,
          ],
          [
            `*আমি* অনেক খাবার খাচ্ছি। 
            *বাবা* সারাদিন খুব হাসছে। 
            *খোকা* বিকেলে ফুটবল খেলছে।
            *সে* এখন বাড়ি যাচ্ছে।`,
            `আমি অনেক খাবার *খাচ্ছি*। 
            বাবা সারাদিন খুব *হাসছে*। 
            খোকা বিকেলে ফুটবল *খেলছে*।
            সে এখন বাড়ি *যাচ্ছে*। `,
          ],
          [
            `*সৌরভ* বাজারে যাবে। 
            *ওর* জ্বর হয়েছিল। 
            *মা* রান্না করছেন। 
            *তুমি* স্কুলে যাবে?`,
            `সৌরভ বাজারে *যাবে*। 
            ওর জ্বর *হয়েছিল*। 
            মা রান্না *করছেন*। 
            তুমি স্কুলে *যাবে*?`,
          ],
          [
            `*উনি* ভালো পড়ান। 
            *মাস্টারমশাই* স্কুল যাচ্ছেন। 
            *ও* ভালো গান গায়। 
            *পাখাটা* খুব জোরে ঘুরছে। `,
            `*উনি* ভালো পড়ান। 
            *মাস্টারমশাই* স্কুল যাচ্ছেন। 
            *ও* ভালো গান গায়। 
            *পাখাটা* খুব জোরে ঘুরছে। `,
          ],
        ]
        },
    {
      // Synonyms - class-4 content ref-bhasapath-iv
      type: 'rightOne',
      label: 'ব্যাকরণ - প্রতিশব্দ বা সমার্থক শব্দ চয়ন',
      id: 'bn_synonyms-2',
      commonData: {
        title: 'সঠিক অর্থ চয়ন করুন',
        noCaps: true,
        hasHint: true
      },
      data: [
        `পথ  = , মার্গ, সরিৎ 
                গৃহ  = , আবাস, নিশা 
                হাতি  = , গজ, গিরি 
                বাগান  = , উদ্যান, গগন 
                পৃথিবী  = , জগৎ, বিধান `,

        `সমীর  = , বাতাস,  সরিৎ
                নদী  = , সরিৎ, নিশা
                রাত্রি  = , নিশা, বিধান 
                আকাশ  = , গগন, ধরণী  
                মাটি  = , মৃত্তিকা, মার্গ`,

        `অচল  = , গতিহীন, অলস
                নয়ন  = , চোখ, গগন
                অনেক  = , বেশি, আহ্বান
                চমৎকার = , সুন্দর, খাঁটি
                অভাব = , অনটন, উচ্ছেদ`,

        `অরণ্য = , বন, বর্তমান
                অলস = , কুড়ে, গিরি, 
                অল্প = , কম, প্রথম
                আইন = , বিধান, আসল
                আকাশ = , গগন, উপকথা`,

        `আদি = , প্রথম, ন্যায্য
                আধুনিক = , বর্তমান, একতা
                আমন্ত্রণ = , আহ্বান, কলহ
                চমক = , অবাক, চন্দ্র
                আসল = , খাঁটি, রবি`,

        `ইতি = , শেষ, উৎখাত
                ঈশ্বর = , প্রভু, ঋষি
                উচিত = , ন্যায্য, কঠিন
                উচ্ছেদ = , উৎখাত, কলহ
                উপকথা = , গল্প, রবি`,

        `উপকার = , মঙ্গল, উপকথা
                ঋষি = , মুনি, গিরি
                একতা = , ঐক্ক, প্রভু
                কঠিন = , কঠোর, কলহ
                কলহ = , ঝগড়া, ধরণী`,

        `ফুল = , পুস্প, খাঁটি 
                পৃথিবী = , ধরণী, গগন
                পর্বত = , গিরি, মুনি 
                চাঁদ = , চন্দ্র, রবি
                সূর্য = , রবি, সরিৎ`
      ]
    },

    
  ]
};