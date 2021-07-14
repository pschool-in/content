export default {
    label: 'বাক্য',
    id: 'bn-sentence',
    img: 'sentence',
    list: [
        {
        id: 'fillup-1',
        label: 'সমোচ্চারিত ভিন্নার্থক শব্দ',
        type: 'fillupOptions',
        commonData: {
          title: 'শূন্যস্থান পূরণ করুন.'
        },
        data: [
          `নানা রঙের কাপড় *পরা(পড়া)* খুব মজার।
        গল্পের বই *পড়া(পরা)* খুব ভালো অভ্যেস।
        ছেলেটা *নিত্য(নৃত্য)* নতুন বাইনা করে।
        ছোট মেয়েটির *নৃত্য(নিত্য)* সবাইকে মুগ্ধ করেছে।`,

        `*মূর্খ(মুখ্য)* মানুষকে বোকা বানানো উচিত না।
        *মুখ্য(মূর্খ)* বিচারক শাস্তি ঘোষণা করলেন।
        রোজ রোজ অসুস্থ হওয়া ভালো *লক্ষণ(লক্ষ্মণ)* না।
       *লক্ষ্মণ(লক্ষণ)* আর রাম ঘনিষ্ট ভাই ছিলেন।`,
  
       `কুরে সাঁতার কাটতে *হাঁস(হাস)* খুব পটু।
        *হাস(হাঁস)*লে মন ভালো থাকে।
        কুকুরের *সাড়া(সারা)* পেয়ে বিড়ালটা পালিয়ে গেল।
        কাজ *সারা(সাড়া)* হলে ঘরে ফেরা যাবে।
        ফুটবল ম্যাচ হেরে ছেলেটা *নিরাশ(নিরাস)* হয়ে গেছে।
        দুর্নীতিকে মানুষ *নিরাস(নিরাশ)* করেছে।`,
          
        ]
      },
      {
        type: 'sequence',
        label: 'শব্দ থেকে বাক্য গঠন',
        id: 'find-sentence',
        commonData: {
          printTitle: 'শব্দগুলি যুক্ত করে সঠিক বাক্য বানান'
        },
        data: [
          `আমি ফুটবল খেলব।
          তুমি খাবার খাচ্ছো।
          বাবু বই পারছে।
          আজ বৃষ্টি পড়ছে।
          টুকাই আমাদের প্রতিবেশী।`,

          `তোমার নাম কি ?
          তুমি কোথায় যাচ্ছ ?
          আপনার ঘর কোথায় ?
          আজ আমাদের ছুটি।
          আমার ঘুম পাচ্ছে।`,

          `আজ আমরা দুর্গাপুর যাচ্ছি।
          মামন ভালো খো-খো খেলে।
          আজ সন্ধ্যায় মায়ের পূজা।
          কাল খুব গরম ছিল।
          আমরা কাল দার্জিলিং যাবো।`,

          `কাল আমাদের স্কুল বন্ধ।
          আমাদের মাস্টারমশাই খুব ভালো।
          আমার ইতিহাস পড়তে ভালোলাগেনা।
          আমার খুব শরীর খারাপ।
          বাবা ভালো রান্না করেন।`,

          `আমার মা ভালো গান গায়।
          আমি রোজ হেঁটে বিদ্যালয়ে যাই।
          নন্টে স্যার খুব ভালো মানুষ।
          ফন্টে গল্প পড়তে খুব ভালোবাসে।
          হাঁদা আর ভোঁদা দুই ভাই।`,

          `নন্টে আর ফন্টে খুব দুস্টু।
          নেতাজী দেশের জন্যে প্রাণ দিয়েছেন।
          ভগৎ সিং খুব সাহসী ছিলেন।
          আমাদের রাজ্যের নাম পশ্চিম বাংলা।
          গাছ লাগানো খুব ভালো অভ্যেস।`,
        ]
    },
    {
        //subjectverb
        id: 'subjectverb',
        type: 'match',
        label: 'ক্রিয়া',
        commonData: {
          title: 'ব্যক্তি-ক্রিয়া',
          fontSize: '1.2rem'
        },
        data: [

        `আমি, যাই   
        তুমি, যাও   
        আপনি, যান   
        তুই, যাস   
        ওরা, যায়`,

        `আমি, যাবো
        তুমি, যাবে
        আপনি, যাবেন
        তুই, যাবি
        ওরা, যাবে`,

        `আমি, খাই    
        তুমি, খাও    
        আপনি, খান    
        তুই, খাস    
        ওরা, খায়`,

        `আমি, গিয়েছিলাম 
        তুমি, গিয়েছিলে 
        আপনি, গিয়েছিলেন 
        তুই, গিয়েছিলিস 
        ওরা, গিয়েছিলো`,

        `আমি, খাবো
        তুমি, খাবে
        আপনি, খাবেন
        তুই, খাবি
        ওরা, খাবে`,

        `আমি, খেয়েছিলাম  
        তুমি, খেয়েছিলে  
        আপনি, খেয়েছিলেন  
        তুই, খেয়েছিলিস  
        ওরা, খেয়েছিলো`,
       
        ]
    },
    {
        //subjectverb
        id: 'Tense',
        type: 'match',
        label: 'ক্রিয়ার কাল',
        commonData: {
          title: 'ক্রিয়ার কাল নির্বাচন',
          fontSize: '1.2rem'
        },
        data: [

            `আমি বাজার যাই।, বর্তমান কাল
            আমি বাজার যাব।, ভবিষৎ কাল
            আমি বাজার গিয়েছিলাম।, অতীত কাল`,
            
            `তুমি ফুটবল খেলছ।, বর্তমান কাল
            তুমি ফুটবল খেলবে।, ভবিষৎ কাল
            তুমি ফুটবল খেলেছিল।, অতীত কাল`,
            
            `আপনি গল্প লেখেন।, বর্তমান কাল
            আপনি গল্প লিখবেন।, ভবিষৎ কাল
            আপনি গল্প লিখেছেন।, অতীত কাল`,
            
            `বাবু বই পড়ছে।, বর্তমান কাল
            বাবু বই পড়বে।, ভবিষৎ কাল
            বাবু বই পড়েছিল।, অতীত কাল`,
        ]
    }

    ]
  };
