export default {
  label: 'শব্দ খোজ',
  id: 'bn-wordsearch',
  img: 'wordsearch',
  list: [
    {
      id: '100',
      type: 'wordsearch',
      label: 'শব্দ খোজ 1',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['আ', 'পে', 'ল'], marker: [0, 0, 2, 0] },
          { word: ['আ', 'না', 'র', 'স'], marker: [0, 0, 0, 3] },
          { word: ['গো', 'লা', 'প'], marker: [5, 0, 5, 2] },
          { word: ['কো', 'কি', 'ল'], marker: [2, 2, 2, 0] },
          { word: ['ডা', 'লি', 'ম'], marker: [3, 4, 5, 4] },
          { word: ['লি', 'চু'], marker: [4, 4, 4, 5] },
          { word: ['ক', 'লা'], marker: [4, 1, 5, 1] },
          { word: ['স', 'বু', 'জ'], marker: [0, 3, 2, 5] },
          { word: ['ক', 'ল', 'ম'], marker: [3, 2, 5, 4] }
        ],
        table: [
          ['আ', 'পে', 'ল', 'ম', 'ঐ', 'গো'],
          ['না', 'প', 'কি', 'জ', 'ক', 'লা'],
          ['র', 'থ', 'কো', 'ক', 'এ', 'প'],
          ['স', 'স', 'য', 'চ', 'ল', 'ঙ'],
          ['ই', 'বু', 'জ', 'ডা', 'লি', 'ম'],
          ['ঌ', 'স', 'জ', 'অ', 'চু', 'ক']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '200',
      type: 'wordsearch',
      label: 'শব্দ খোজ 2',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['না', 'শ', 'পা', 'তি'], marker: [1, 1, 4, 4] },
          { word: ['না', 'রি', 'কে', 'ল'], marker: [1, 1, 1, 4] },
          { word: ['ডু', 'মু', 'র'], marker: [5, 0, 5, 2] },
          { word: ['র', 'সু', 'ন'], marker: [5, 2, 3, 4] },
          { word: ['বে', 'গু', 'ন'], marker: [1, 0, 3, 0] },
          { word: ['আ', 'ম', 'ড়া'], marker: [1, 5, 3, 5] },
          { word: ['বি', 'ছা', 'না'], marker: [3, 1, 1, 1] },
          { word: ['প', 'ট', 'ল'], marker: [3, 2, 1, 4] }
        ],
        table: [
          ['ত', 'বে', 'গু', 'ন', 'শ', 'ডু'],
          ['ড', 'না', 'ছা', 'বি', 'ষ', 'মু'],
          ['য', 'রি', 'শ', 'প', 'ণ', 'র'],
          ['এ', 'কে', 'ট', 'পা', 'সু', 'ল'],
          ['চ', 'ল', 'ও', 'ন', 'তি', 'ষ'],
          ['ঙ', 'আ', 'ম', 'ড়া', 'খ', 'ছ']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '300',
      type: 'wordsearch',
      label: 'শব্দ খোজ 3',
      data: {
        title: 'টেবিল থেকে  বাংলা মাস সন্ধান করুন',
        words: [
          { word: ['বৈ', 'শা', 'খ'], marker: [0, 1, 2, 1] },
          { word: ['জ্যৈ', 'ষ্ঠ'], marker: [5, 4, 5, 5] },
          { word: ['আ', 'ষা', 'ঢ়'], marker: [0, 3, 2, 5] },
          { word: ['শ্রা', 'ব', 'ণ'], marker: [3, 0, 5, 2] },
          { word: ['পৌ', 'ষ'], marker: [2, 3, 3, 2] },
          { word: ['মা', 'ঘ'], marker: [5, 0, 5, 1] }
        ],
        table: [
          ['ঢ', 'ঐ', 'ল', 'শ্রা', 'ঠ', 'মা'],
          ['বৈ', 'শা', 'খ', 'ব', 'ব', 'ঘ'],
          ['গ', 'প', 'আ', 'ষ', 'ঈ', 'ণ'],
          ['আ', 'ঈ', 'পৌ', 'ভ', 'ঘ', 'ঞ'],
          ['ঘ', 'ষা', 'ঢ়', 'ঠ', 'ঊ', 'জ্যৈ'],
          ['শ', 'জ', 'ঢ়', 'এ', 'ধ', 'ষ্ঠ']
        ],
        lang: 'bn',
        showWords: false
      }
    },
    {
      id: '400',
      type: 'wordsearch',
      label: 'শব্দ খোজ 4',
      data: {
        title: 'টেবিল থেকে বাংলা ঋতু সন্ধান করুন',
        words: [
          { word: ['গ্রী', 'ষ্ম'], marker: [0, 1, 1, 2] },
          { word: ['ব', 'র্ষা'], marker: [4, 5, 5, 4] },
          { word: ['শ', 'র', 'ৎ'], marker: [3, 1, 3, 3] },
          { word: ['হে', 'ম', 'ন্ত'], marker: [3, 0, 5, 2] },
          { word: ['শী', 'ত'], marker: [1, 4, 2, 5] },
          { word: ['ব', 'স', 'ন্ত'], marker: [0, 5, 0, 3] }
        ],
        table: [
          ['র', 'য', 'ঢ', 'হে', 'ড়', 'স'],
          ['গ্রী', 'ঌ', 'ঘ', 'শ', 'ম', 'ঋ'],
          ['ছ', 'ষ্ম', 'ত', 'র', 'দ', 'ন্ত'],
          ['ন্ত', 'ষ', 'ঘ', 'ৎ', 'প', 'থ'],
          ['স', 'শী', 'ঔ', 'য়', 'খ', 'র্ষা'],
          ['ব', 'গ', 'ত', 'উ', 'ব', 'থ']
        ],
        lang: 'bn',
        showWords: false
      }
    },
    {
      id: '500',
      type: 'wordsearch',
      label: 'শব্দ খোজ 5',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['ক', 'র', 'লা'], marker: [6, 0, 4, 2] },
          { word: ['ফু', 'ল', 'ক', 'পি'], marker: [0, 2, 0, 5] },
          { word: ['পি', 'প', 'ড়ে'], marker: [4, 4, 6, 6] },
          { word: ['বা', 'ন', 'র'], marker: [3, 1, 5, 1] },
          { word: ['বা', 'ধা', 'ক', 'পি'], marker: [3, 5, 0, 5] },
          { word: ['খ', 'র', 'বু', 'জ'], marker: [5, 0, 5, 3] },
          { word: ['বে', 'দা', 'না'], marker: [1, 1, 3, 3] },
          { word: ['আ', 'ঙু', 'র'], marker: [2, 6, 4, 6] }
        ],
        table: [
          ['ছ', 'হ', 'চ', 'ঠ', 'হ', 'খ', 'ক'],
          ['ছ', 'বে', 'ঞ', 'বা', 'ন', 'র', 'র'],
          ['ফু', 'ঘ', 'দা', 'ঘ', 'লা', 'বু', 'ক'],
          ['ল', 'য', 'ট', 'না', 'ই', 'জ', 'উ'],
          ['ক', 'ষ', 'দ', 'ন', 'পি', 'অ', 'ফ'],
          ['পি', 'ক', 'ধা', 'বা', 'ড়', 'প', 'অ'],
          ['গ', 'ঞ', 'আ', 'ঙু', 'র', 'ঋ', 'ড়ে']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '600',
      type: 'wordsearch',
      label: 'শব্দ খোজ 6',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['গো', 'লা', 'প'], marker: [0, 6, 2, 4] },
          { word: ['জি', 'নি', 'য়া'], marker: [5, 0, 5, 2] },
          { word: ['টি', 'উ', 'লি', 'প'], marker: [2, 1, 2, 4] },
          { word: ['জ', 'বা'], marker: [4, 6, 5, 6] },
          { word: ['সূ', 'র্য', 'মু', 'খী'], marker: [3, 3, 3, 6] },
          { word: ['বা', 'দা', 'ম'], marker: [0, 2, 0, 4] },
          { word: ['ট', 'মে', 'টো'], marker: [1, 0, 3, 0] },
          { word: ['গা', 'জ', 'র'], marker: [6, 2, 6, 4] }
        ],
        table: [
          ['ই', 'ট', 'মে', 'টো', 'ঊ', 'জি', 'ঌ'],
          ['দ', 'য়', 'টি', 'ড়', 'স', 'নি', 'ঔ'],
          ['বা', 'ঠ', 'উ', 'ফ', 'ছ', 'য়া', 'গা'],
          ['দা', 'য়', 'লি', 'সূ', 'স', 'স', 'জ'],
          ['ম', 'য', 'প', 'র্য', 'ঙ', 'ছ', 'র'],
          ['জ', 'লা', 'ঈ', 'মু', 'অ', 'প', 'ঠ'],
          ['গো', 'ল', 'অ', 'খী', 'জ', 'বা', 'ঝ']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '700',
      type: 'wordsearch',
      label: 'শব্দ খোজ 7',
      data: {
        title: 'টেবিল থেকে  গ্রহের নাম করুন',
        words: [
          { word: ['বু', 'ধ'], marker: [1, 1, 2, 1] },
          { word: ['শু', 'ক্র'], marker: [3, 2, 3, 3] },
          { word: ['পৃ', 'থি', 'বী'], marker: [2, 6, 4, 4] },
          { word: ['ম', 'ঙ্গ', 'ল'], marker: [6, 2, 6, 4] },
          { word: ['বৃ', 'হ', 'স্প', 'তি'], marker: [0, 2, 0, 5] },
          { word: ['শ', 'নি'], marker: [5, 0, 6, 0] },
          { word: ['ই', 'উ', 'রে', 'না', 'স'], marker: [5, 2, 1, 6] },
          { word: ['নে', 'প', 'চু', 'ন'], marker: [3, 6, 6, 6] }
        ],
        table: [
          ['ম', 'গ', 'ন', 'ঝ', 'ফ', 'শ', 'নি'],
          ['ম', 'বু', 'ধ', 'প', 'ড', 'ঙ', 'ঋ'],
          ['বৃ', 'প', 'ল', 'শু', 'ই', 'ই', 'ম'],
          ['হ', 'দ', 'প', 'ক্র', 'উ', 'প', 'ঙ্গ'],
          ['স্প', 'ড়', 'ঝ', 'রে', 'বী', 'ঋ', 'ল'],
          ['তি', 'দ', 'না', 'থি', 'ক', 'ল', 'খ'],
          ['প', 'স', 'পৃ', 'নে', 'প', 'চু', 'ন']
        ],
        lang: 'bn',
        showWords: false
      }
    },
    {
      id: '800',
      type: 'wordsearch',
      label: 'শব্দ খোজ 8',
      data: {
        title: 'টেবিল থেকে  বাংলা দিন সন্ধান করুন',
        words: [
          { word: ['সো', 'ম'], marker: [2, 5, 3, 5] },
          { word: ['ম', 'ঙ্গ', 'ল'], marker: [3, 1, 3, 3] },
          { word: ['বু', 'ধ'], marker: [5, 0, 6, 1] },
          { word: ['বৃ', 'হ', 'স্প', 'তি'], marker: [0, 1, 3, 4] },
          { word: ['শু', 'ক্র'], marker: [5, 5, 6, 6] },
          { word: ['শ', 'নি'], marker: [0, 4, 0, 5] },
          { word: ['র', 'বি'], marker: [5, 3, 5, 2] }
        ],
        table: [
          ['থ', 'ণ', 'য', 'উ', 'ভ', 'বু', 'ত'],
          ['বৃ', 'ঐ', 'অ', 'ম', 'আ', 'ছ', 'ধ'],
          ['এ', 'হ', 'অ', 'ঙ্গ', 'ই', 'বি', 'চ'],
          ['এ', 'জ', 'স্প', 'ল', 'ধ', 'র', 'ঋ'],
          ['শ', 'ঐ', 'র', 'তি', 'এ', 'হ', 'ছ'],
          ['নি', 'ধ', 'সো', 'ম', 'ঋ', 'শু', 'এ'],
          ['থ', 'ঞ', 'ছ', 'ট', 'ণ', 'ঐ', 'ক্র']
        ],
        lang: 'bn',
        showWords: false
      }
    },
    {
      id: '900',
      editable: true,
      type: 'wordsearch',
      label: 'শব্দ খোজ 9',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['বি', 'ড়া', 'ল'], marker: [0, 1, 2, 3] },
          { word: ['কু', 'কু', 'র'], marker: [7, 0, 7, 2] },
          { word: ['ঘো', 'ড়া'], marker: [2, 1, 1, 2] },
          { word: ['বা', 'ন', 'র'], marker: [5, 4, 7, 2] },
          { word: ['কু', 'মি', 'র'], marker: [7, 0, 5, 0] },
          { word: ['গ', 'ণ্ডা', 'র'], marker: [7, 4, 7, 2] },
          { word: ['উ', 'ই', 'পো', 'কা'], marker: [3, 4, 0, 7] },
          { word: ['প্র', 'জা', 'প', 'তি'], marker: [4, 4, 7, 7] },
          { word: ['টি', 'ক', 'টি', 'কি'], marker: [3, 0, 3, 3] },
          { word: ['ভা', 'লু', 'ক'], marker: [5, 1, 3, 1] }
        ],
        table: [
          ['ক', 'জ', 'ঢ', 'টি', 'গ', 'র', 'মি', 'কু'],
          ['বি', 'ষ', 'ঘো', 'ক', 'লু', 'ভা', 'ঠ', 'কু'],
          ['ঐ', 'ড়া', 'র', 'টি', 'য', 'হ', 'ঐ', 'র'],
          ['অ', 'ঠ', 'ল', 'কি', 'ধ', 'ঢ়', 'ন', 'ণ্ডা'],
          ['ঝ', 'ঢ', 'জ', 'উ', 'প্র', 'বা', 'ল', 'গ'],
          ['ণ', 'আ', 'ই', 'খ', 'ষ', 'জা', 'ঢ়', 'ঝ'],
          ['ঞ', 'পো', 'ঔ', 'ঊ', 'ক', 'শ', 'প', 'ঙ'],
          ['কা', 'স', 'ঋ', 'ম', 'প', 'হ', 'ড', 'তি']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '1000',
      type: 'wordsearch',
      label: 'শব্দ খোজ 10',
      data: {
        title: 'টেবিল থেকে  শব্দগুলি সন্ধান করুন',
        words: [
          { word: ['উ', 'ট', 'পা', 'খি'], marker: [4, 7, 7, 7] },
          { word: ['মু', 'র', 'গি'], marker: [1, 1, 3, 3] },
          { word: ['পা', 'য়', 'রা'], marker: [6, 2, 6, 4] },
          { word: ['সা', 'র', 'স'], marker: [1, 3, 3, 1] },
          { word: ['ম', 'য়', 'না'], marker: [7, 3, 5, 3] },
          { word: ['শ', 'কু', 'ন'], marker: [0, 5, 2, 7] },
          { word: ['মো', 'র', 'গ'], marker: [3, 0, 5, 0] },
          { word: ['মা', 'ছ', 'রা', 'ঙ্গা'], marker: [4, 4, 7, 4] },
          { word: ['কা', 'ঠ', 'ঠো', 'ক', 'রা'], marker: [7, 0, 3, 4] },
          { word: ['কা', 'ক'], marker: [3, 6, 4, 6] }
        ],
        table: [
          ['র', 'ই', 'ত', 'মো', 'র', 'গ', 'ন', 'কা'],
          ['ড়', 'মু', 'গ', 'স', 'য', 'জ', 'ঠ', 'ন'],
          ['স', 'ই', 'র', 'ষ', 'থ', 'ঠো', 'পা', 'ছ'],
          ['থ', 'সা', 'প', 'গি', 'ক', 'না', 'য়', 'ম'],
          ['য', 'ঌ', 'ও', 'রা', 'মা', 'ছ', 'রা', 'ঙ্গা'],
          ['শ', 'ঔ', 'খ', 'ষ', 'ধ', 'ঠ', 'হ', 'ঔ'],
          ['স', 'কু', 'ঌ', 'কা', 'ক', 'ও', 'ভ', 'ব'],
          ['উ', 'ফ', 'ন', 'ঘ', 'উ', 'ট', 'পা', 'খি']
        ],
        lang: 'bn',
        showWords: true
      }
    },
    {
      id: '1100',
      type: 'wordsearch',
      label: 'শব্দ খোজ 11',
      data: {
        title: 'টেবিল থেকে  জায়গাগুলি সন্ধান করুন',
        words: [
          { word: ['ক', 'ল', 'কা', 'তা'], marker: [3, 0, 3, 3] },
          { word: ['বী', 'র', 'ভূ', 'ম'], marker: [2, 6, 5, 6] },
          { word: ['মু', 'র্শি', 'দা', 'বা', 'দ'], marker: [5, 1, 5, 5] },
          { word: ['মা', 'ল', 'দা'], marker: [7, 5, 5, 3] },
          { word: ['হু', 'গ', 'লি'], marker: [1, 3, 1, 5] },
          { word: ['ব', 'র্ধ', 'মা', 'ন'], marker: [1, 2, 4, 5] },
          { word: ['না', 'দি', 'য়া'], marker: [0, 5, 2, 7] },
          { word: ['পু', 'রু', 'লি', 'য়া'], marker: [5, 7, 2, 7] }
        ],
        table: [
          ['গ', 'ড়', 'ঘ', 'ক', 'ঠ', 'ও', 'ট', 'ঙ'],
          ['ণ', 'ছ', 'ধ', 'ল', 'ঐ', 'মু', 'ঘ', 'ঠ'],
          ['স', 'ব', 'ঘ', 'কা', 'ও', 'র্শি', 'ঞ', 'ম'],
          ['এ', 'হু', 'র্ধ', 'তা', 'ঘ', 'দা', 'ন', 'ঝ'],
          ['উ', 'গ', 'ল', 'মা', 'ড়', 'বা', 'ল', 'ন'],
          ['না', 'লি', 'ড়', 'ম', 'ন', 'দ', 'আ', 'মা'],
          ['ড়', 'দি', 'বী', 'র', 'ভূ', 'ম', 'ঈ', 'ই'],
          ['গ', 'হ', 'য়া', 'লি', 'রু', 'পু', 'ট', 'শ']
        ],
        lang: 'bn',
        showWords: true
      }
    }
  ]
};
