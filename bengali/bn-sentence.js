export default {
  label: 'বাক্য',
  id: 'bn-sentence',
  img: 'sentence',
  lockAfter: 3,
  list: [
    {
      // class iii and above
      type: 'sequence',
      label: 'শব্দ থেকে বাক্য গঠন',
      id: 'find-sentence',
      lockAfter: 2,
      commonData: {
        printTitle: 'শব্দগুলি যুক্ত করে সঠিক বাক্য বানান'
      },
      data: [
        `আমি ভাত খাই। 
আমার নাম বাবাই। 
আমি রাতে ঘুমাই। 
আমি সকালে খেলি। 
আমি খাবার খাই।`,

        `আমি ফুটবল খেলব।
তুমি খাবার খাচ্ছো।
বাবু বই পড়ছে।
আজ বৃষ্টি পরছে।
টুকাই আমাদের প্রতিবেশী।`,

        `তোমার নাম কি?
তুমি কোথায় যাচ্ছ?
আপনার ঘর কোথায়?
আজ আমাদের ছুটি।
আমার ঘুম পাচ্ছে।`,

        `নন্টে ভালো ছেলে। 
হাঁদা খুব অলস।
ফন্টে দুস্টু ছেলে। 
ভোঁদা ফুটবল খেলে।             
ফেলুদা খুব বুদ্ধিমান।`,

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

        `অরিন্দম খুব ভালো আঁকে। 
অমিত সারাদিন হকি খেলে। 
সত্যজিৎ খুব গুণী মানুষ। 
গুড়ের রসগোল্লা খুব সুস্বাদু। 
ওরা সারাদিন আড্ডা মারে।`,

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

        `আমি আর বাবু ফুটবল খেলি। 
আমার মাছ খেতে ভালো লাগে। 
তুমি কি আমার বাড়ি আসবে?
তুমি কি এখন দোকানে যাবে?
আমি আর দাদা স্কুল যাই। `
      ]
    },
    {
      // this activity if for class 5 and above
      label: 'বাক্য - বচন ',
      type: 'matchByDragDrop',
      id: 'bn-singpru',
      commonData: {
        title: 'শূন্যস্থান পূরণের জন্য উপযুক্ত শব্দটি রাখুন'
      },
      data: [
        `*তোমরা* সবাই মিলে কোথায় যাচ্ছো ?
*আমরা* সবাই খেতে যাচ্ছি। 
*তুমি* এদিকে এসো। 
*তোমার* নাম কি ?
*আপনি* বাড়িতে আসুন। `,

        `সব *বন্ধুরা* মিলে একদিন ঘরে এসো। 
সৌরভ আমার খুব ভালো *বন্ধু*। 
*কুকুরগুলো* সারাদিন ডাকছিলো। 
আমাদের গোয়ালে একটা *গরু* আছে। 
*তুমি* একা কোথায় যাচ্ছো ?`
      ]
    },
    {
      // class iv and above
      id: 'subjectverb',
      type: 'match',
      label: 'বাক্য - ক্রিয়া',
      lockAfter: 2,
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

        `আমি, গিয়েছিলাম 
তুমি, গিয়েছিলে 
আপনি, গিয়েছিলেন 
তুই, গিয়েছিলিস 
ওরা, গিয়েছিলো`,

        `আমি, খাই    
তুমি, খাও    
আপনি, খান    
তুই, খাস    
ওরা, খায়`,

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

        `ওরা, হাসছিলো 
আমি, হাসছিলাম 
তুমি, হাসছিলে 
আপনি, হাসছিলেন 
তুই, হাসছিলিস `,

        `ও, খেলে 
আমি, খেলি 
তুমি, খেলো 
তিনি, খেলেন 
তুই, খেলিস `
      ]
    },
    {
      // class iv and above
      id: 'tense',
      type: 'match',
      label: 'বাক্য - ক্রিয়ার কাল',
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

        `তুই  ভালো ফুটবল খেলিস।, বর্তমান কাল
তুই  ভালো ফুটবল খেলবি।, ভবিষৎ কাল
তুই  ভালো ফুটবল খেলতিস।, অতীত কাল`,

        `ও পড়াশুনায় খুব ভালো।, বর্তমান কাল
ও পড়াশুনায় খুব ভালো হবে।, ভবিষৎ কাল
ও পড়াশুনায় খুব ভালো ছিল।, অতীত কাল`,

        `ওদের বাড়িতে আমি যাই।, বর্তমান কাল
ওদের বাড়িতে আমি যাবো।, ভবিষৎ কাল
ওদের বাড়িতে আমি যেতাম।, অতীত কাল`,

        `ওরা কৃষ্ণনগরে থাকে।, বর্তমান কাল
ওরা কৃষ্ণনগরে থাকবে।, ভবিষৎ কাল
ওরা কৃষ্ণনগরে থাকতো।, অতীত কাল`
      ]
    },

    {
      // class iv and above
      id: 'fillup-2',
      label: 'বাক্য - পুরুষ - ক্রিয়া',
      type: 'fillup',
      commonData: {
        title: 'শূন্যস্থান পূরণ করুন.'
      },
      data: [
        `আমি বাজারে *যাই(যায়)*।    
তুমি রোজ খেলতে *যাও(যান)*।    
আপনি প্রতিদিন কাজে *যান(যায়)*।    
তুই রোজ স্কুলে *যাস(যাও)* না কেন ?   
ওরা মাঠে চাষ করতে *যায়(যাই)*।`,

        `আমি খেলতে *যাবো(যাবে)*। 
তুমি কাল কলকাতা *যাবে(যাবি)*। 
আপনি কাল মনে করে হাসপাতাল *যাবেন(যাবে)*। 
তুই কি আমার সাথে দুর্গাপুর *যাবি(যাবো)*? 
ওরা কাল সার্কাস দেখতে *যাবে(যাবো)*। `,

        `আমি কাল ফুটবল ম্যাচ দেখতে *গিয়েছিলাম(গিয়েছিলো)*। 
তুমি কি কাল ডাক্তার দেখতে *গিয়েছিলে(গিয়েছিলেন)*?
আপনি কি লাইব্রেরি *গিয়েছিলেন(গিয়েছিলো।)*? 
তুই কাল বাবুর বাড়ি  গিয়েছিলিস(গিয়েছিলে)*।  
ওরা শুনলাম কাল নৌকা চড়তে *গিয়েছিলো(গিয়েছিলেন)*। `,

        `আমি খাবার *খাই(খায়)*।     
তুমি রুটি  *খাও(খাস)*।     
আপনি রসগোল্লা *খান(খাস)*।     
তুই রোজ ভাত *খাস(খাও)*।     
ওরা প্রতিদিন সিঙ্গারা *খায়(খাই)*। `,

        `আমি আম *খাবো(খাবে)*। 
তুমি কি জল *খাবে(খাবেন)*?
আপনি কাল আমাদের বাড়িতে *খাবেন(খাবি)*। 
তুই কি সন্দেশ *খাবি(খাবো)*?
ওরা কি *খাবে(খাবি)*?`,

        `আমি কাল মিষ্টি *খেয়েছিলাম(খেয়েছিলো)*।  
তুমি গতকাল মন্দিরে প্রসাদ *খেয়েছিলে(খেয়েছিলেন)*।   
আপনি কি কাল পেটভরে *খেয়েছিলেন(খেয়েছিলো)*?  
তুই কি *খেয়েছিলিস(খেয়েছিলো)*?  
ওরা গতকাল অনেক চকলেট *খেয়েছিলো(খেয়েছিলিস)*`,

        `আমি সারাদিন *খেলি(খেলে)*। 
তুমি খোখো *খেলো(খেলে)*।  
মাস্টারমশাই বাচ্চাদের সাথে *খেলেন(খেলি)*।
তুই কি আমাদের সাথে *খেলবি(খেলবে)*?
ওরা পুরোদিন ক্যারম *খেলে(খেলিস)*।`,

        `আমি বই পড়তে *ভালোবাসি(ভালোবাসিস)*।
তিনি রোজ খবরের কাগজ *পড়েন(পড়ে)*। 
ও সারাদিন ঘুরে *বেড়ায়(বেড়াই )*।
তুমি কি আরও রসগোল্লা *খাবে(খাবি)*?
তুই কেমন *আছিস(আছো)*?
`
      ]
    },
    {
      label: 'বাক্য - বিপরীতার্থক শব্দ',
      type: 'matchByDragDrop',
      id: 'bn-antonym-sentence',
      data: {
        title: 'শূন্যস্থান পূরণের জন্য উপযুক্ত শব্দটি রাখুন',
        fontSize: '1.1rem',
        text: `অমিত একজন *ছেলে *। রিয়া একটি মেয়ে। অমিত এবং রিয়া বন্ধু।
রিয়া গরীব কিন্তু অমিত খুব *ধনী *          
রিয়ার বাড়ি কাঁচা, কিন্তু অমিতের বাড়ি *পাকা *।          
যখন রিয়া এবং অমিত একসাথে থাকে, তখন আশেপাশের মানুষ তাদের দেখে উচু-*নিচু* এর কথা বলে।          
রিয়া এবং অমিত বিভেদের পথ ছেড়ে *একতা*র  পথে চলেছে।          
অমিত এবং রিয়া উভয়েরই *সঠিক* এবং ভুলের বোধ আছে।`
      }
    },
    {
      // for Class v and above.
      id: 'fillup',
      label: 'বাক্য - সমোচ্চারিত ভিন্নার্থক শব্দ',
      type: 'fillup',
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

        `পুকুরে অনেক *কমল(কোমল)* ফুটেছে।
সকালে *কোমল(কমল)* ঘাসে হাঁটা খুব ভালো।  
রামের *বাণ(বান)* লক্ষভেদ করলো।
দামোদরে প্রতিবছর *বান(বাণ)* আসে।`,

        `পুকুরে সাঁতার কাটতে *হাঁস(হাস)* খুব পটু।
*হাস(হাঁস)*লে মন ভালো থাকে।
কুকুরের *সাড়া(সারা)* পেয়ে বিড়ালটা পালিয়ে গেল।
কাজ *সারা(সাড়া)* হলে ঘরে ফেরা যাবে।
ফুটবল ম্যাচ হেরে ছেলেটা *নিরাশ(নিরাস)* হয়ে গেছে।
দুর্নীতিকে মানুষ *নিরাস(নিরাশ)* করেছে।`,

        `আমাদের কোলকাতাতে *আসা(আশা)* যাওয়া লেগে থাকে।
তোমার কাছে খুব *আশা(আসা)* করে এসেছি।  
রাজার *কটি(কোটি)*তে তলোয়ার। 
ভারতবর্ষ একশো *কোটি(কটি)* লোকের দেশ।   
দিনের পর *দিন(দীন)* চলে গেল। 
আমি *দীন(দিন)* দুখী, পথে পথে ঘুড়ি।`,

        `*সুর(শূর)*লোকে বাজে জয়োধ্বনি। 
রাবনের ছেলে মেগনাদ *শূর(সুর)*শ্রেষ্ঠ।
আন্দামানে অনেক *দ্বীপ(দীপ)* আছে। 
বাতি চলে গেছে , *দীপ(দ্বীপ)* জ্বালাতে হবে।  
চাঁদ বদনি *ধনি(ধ্বনি)*, নাচতো দেখি।
দূর থেকে ট্রেনের *ধ্বনি(ধনি)* শোনা যাচ্ছে।`,

        `আমার বয়স এখন *কুড়ি(কুঁড়ি) বছর।
গোলাপ ফুলের *কুঁড়ি(কুড়ি) খুব সুন্দর দেখতে। 
তোমার *কোন(কোণ)* খবর নেয়। 
ত্রিভুজের তিনটে *কোণ(কোন)*। 
*অবিরাম(অভিরাম)* বৃষ্টি পড়ছে। 
পাহাড়ের চারিপাশে *অভিরাম(অবিরাম)* দৃশ্য।`,

        `ধনে ধান্যে ভরা আমাদের এই *ধরা(ধড়া)*।
*ধড়া(ধরা)* পরে তাকে অসহায় মনে হচ্ছে।    
বার *মাস(মাষ)* সে এখানে থাকে
*মাষ(মাস)*কলাই ডাল খেতে ভালো।
*জলের(জ্বলের)* কোন রং নেই। 
রাতে ঝোপে ঝোপে জোনাকির আলো *জ্বলজ্বল(জলজল)* করে।`
      ]
    }
  ]
};
