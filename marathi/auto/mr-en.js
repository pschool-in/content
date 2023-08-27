export default {
  label: 'प्राणी आणि पक्षी',
  id: 'mr-en',
  lang: 'mr',
  list: [
    {
      type: 'passage',
      label: 'Notes: प्राणी',
      id: 'notes-animals',
      data: {
        title: 'Notes',
        text: [
          'Cat — मांजर\nDog — कुत्रा\nGoat — शेळी\nCow — गाय\nDonkey — गाढव\nHorse — घोडा\nPig — डुक्कर\nElephant — हत्ती\nLion — सिंह\nMonkey — माकड',
          'Hippo — पाणघोडा\nRhino — गेंडा\nFox — कोल्हा\nCrocodile — मगर\nZebra — झेब्रा\nBear — अस्वल\nCamel — उंट\nShark — शार्क\nWhale — देवमासा\nDolphin — डॉल्फिन',
          'Tiger — वाघ\nSheep — मेंढी\nFish — मासे\nFrog — बेडूक\nCrab — खेकडा\nSnake — साप\nBull — बैल\nTortoise — कासव\nRat — उंदीर\nAnt — मुंगी',
          'Bat — वटवाघूळ\nBuffalo — म्हैस\nButterfly — फुलपाखरू\nCheetah — चित्ता\nBee — मधमाशी\nGoldfish — सोनेरी मासा\nSpider — कोळी\nPanda — पांडा\nGiraffe — जिराफ\nKangaroo — कांगारू'
        ]
      }
    },
    {
      type: 'passage',
      label: 'Notes: पक्षी',
      id: 'notes-birds',
      data: {
        title: 'Notes',
        text: [
          'Crow — कावळा\nDove — पारवा\nDuck — बदक\nHen — कोंबडी\nChick — कोंबडीचे पिल्लू\nParrot — पोपट\nPeacock — मोर\nPenguin — पेंग्विन\nSparrow — चिमणी\nCrane — बगळा',
          'Eagle — गरुड\nFlamingo — रोहित पक्षी\nKingfisher — खंड्या\nMyna — साळुंखी\nOstrich — शहामृग\nOwl — घुबड\nRooster — कोंबडा\nVulture — गिधाड\nWoodpecker — सुतारपक्षी\nKoel — कोकिळा'
        ]
      }
    },
    {
      id: 'match-animals',
      type: 'match',
      label: 'Match: प्राणी',
      commonData: { title: 'इंग्रजी शब्द त्याच्या समान मराठी शब्दाशी जुळवा.' },
      data: [
        'Cat,मांजर\nDog,कुत्रा\nGoat,शेळी\nCow,गाय\nDonkey,गाढव',
        'Horse,घोडा\nPig,डुक्कर\nElephant,हत्ती\nLion,सिंह\nMonkey,माकड',
        'Hippo,पाणघोडा\nRhino,गेंडा\nFox,कोल्हा\nCrocodile,मगर\nZebra,झेब्रा',
        'Bear,अस्वल\nCamel,उंट\nShark,शार्क\nWhale,देवमासा\nDolphin,डॉल्फिन',
        'Tiger,वाघ\nSheep,मेंढी\nFish,मासे\nFrog,बेडूक\nCrab,खेकडा',
        'Snake,साप\nBull,बैल\nTortoise,कासव\nRat,उंदीर\nAnt,मुंगी',
        'Bat,वटवाघूळ\nBuffalo,म्हैस\nButterfly,फुलपाखरू\nCheetah,चित्ता\nBee,मधमाशी',
        'Goldfish,सोनेरी मासा\nSpider,कोळी\nPanda,पांडा\nGiraffe,जिराफ\nKangaroo,कांगारू'
      ]
    },
    {
      id: 'match-birds',
      type: 'match',
      label: 'Match: पक्षी',
      commonData: { title: 'इंग्रजी शब्द त्याच्या समान मराठी शब्दाशी जुळवा.' },
      data: [
        'Crow,कावळा\nDove,पारवा\nDuck,बदक\nHen,कोंबडी\nChick,कोंबडीचे पिल्लू',
        'Parrot,पोपट\nPeacock,मोर\nPenguin,पेंग्विन\nSparrow,चिमणी\nCrane,बगळा',
        'Eagle,गरुड\nFlamingo,रोहित पक्षी\nKingfisher,खंड्या\nMyna,साळुंखी\nOstrich,शहामृग',
        'Owl,घुबड\nRooster,कोंबडा\nVulture,गिधाड\nWoodpecker,सुतारपक्षी\nKoel,कोकिळा'
      ]
    },
    {
      id: 'jumbled-animals',
      type: 'sequence',
      label: 'Connect Letters: प्राणी',
      commonData: {
        type: 'clue',
        fontSize: '2rem',
        title: 'अक्षरे जोडून दिलेल्या इंग्रजी शब्दासाठी मराठी शब्द तयार करा.',
        lang: 'mr'
      },
      data: [
        'Cat|मांजर\nDog|कुत्रा\nGoat|शेळी\nCow|गाय\nDonkey|गाढव\nHorse|घोडा\nPig|डुक्कर\nElephant|हत्ती\nLion|सिंह\nMonkey|माकड',
        'Hippo|पाणघोडा\nRhino|गेंडा\nFox|कोल्हा\nCrocodile|मगर\nZebra|झेब्रा\nBear|अस्वल\nCamel|उंट\nShark|शार्क\nWhale|देवमासा\nDolphin|डॉल्फिन',
        'Tiger|वाघ\nSheep|मेंढी\nFish|मासे\nFrog|बेडूक\nCrab|खेकडा\nSnake|साप\nBull|बैल\nTortoise|कासव\nRat|उंदीर\nAnt|मुंगी',
        'Bat|वटवाघूळ\nBuffalo|म्हैस\nButterfly|फुलपाखरू\nCheetah|चित्ता\nBee|मधमाशी\nGoldfish|सोनेरी मासा\nSpider|कोळी\nPanda|पांडा\nGiraffe|जिराफ\nKangaroo|कांगारू'
      ]
    },
    {
      id: 'jumbled-birds',
      type: 'sequence',
      label: 'Connect Letters: पक्षी',
      commonData: {
        type: 'clue',
        fontSize: '2rem',
        title: 'अक्षरे जोडून दिलेल्या इंग्रजी शब्दासाठी मराठी शब्द तयार करा.',
        lang: 'mr'
      },
      data: [
        'Crow|कावळा\nDove|पारवा\nDuck|बदक\nHen|कोंबडी\nChick|कोंबडीचे पिल्लू\nParrot|पोपट\nPeacock|मोर\nPenguin|पेंग्विन\nSparrow|चिमणी\nCrane|बगळा',
        'Eagle|गरुड\nFlamingo|रोहित पक्षी\nKingfisher|खंड्या\nMyna|साळुंखी\nOstrich|शहामृग\nOwl|घुबड\nRooster|कोंबडा\nVulture|गिधाड\nWoodpecker|सुतारपक्षी\nKoel|कोकिळा'
      ]
    },
    {
      id: 'complete-animals',
      type: 'completeWord',
      label: 'Complete the Word: प्राणी',
      commonData: {
        fontSize: '2rem',
        title: 'दिलेल्या इंग्रजी शब्दासाठी मराठी शब्द लिहा.',
        lang: 'mr'
      },
      data: [
        'Cat|मांजर\nDog|कुत्रा\nGoat|शेळी\nCow|गाय\nDonkey|गाढव\nHorse|घोडा\nPig|डुक्कर\nElephant|हत्ती\nLion|सिंह\nMonkey|माकड',
        'Hippo|पाणघोडा\nRhino|गेंडा\nFox|कोल्हा\nCrocodile|मगर\nZebra|झेब्रा\nBear|अस्वल\nCamel|उंट\nShark|शार्क\nWhale|देवमासा\nDolphin|डॉल्फिन',
        'Tiger|वाघ\nSheep|मेंढी\nFish|मासे\nFrog|बेडूक\nCrab|खेकडा\nSnake|साप\nBull|बैल\nTortoise|कासव\nRat|उंदीर\nAnt|मुंगी',
        'Bat|वटवाघूळ\nBuffalo|म्हैस\nButterfly|फुलपाखरू\nCheetah|चित्ता\nBee|मधमाशी\nGoldfish|सोनेरी मासा\nSpider|कोळी\nPanda|पांडा\nGiraffe|जिराफ\nKangaroo|कांगारू'
      ]
    },
    {
      id: 'complete-birds',
      type: 'completeWord',
      label: 'Complete the Word: पक्षी',
      commonData: {
        fontSize: '2rem',
        title: 'दिलेल्या इंग्रजी शब्दासाठी मराठी शब्द लिहा.',
        lang: 'mr'
      },
      data: [
        'Crow|कावळा\nDove|पारवा\nDuck|बदक\nHen|कोंबडी\nChick|कोंबडीचे पिल्लू\nParrot|पोपट\nPeacock|मोर\nPenguin|पेंग्विन\nSparrow|चिमणी\nCrane|बगळा',
        'Eagle|गरुड\nFlamingo|रोहित पक्षी\nKingfisher|खंड्या\nMyna|साळुंखी\nOstrich|शहामृग\nOwl|घुबड\nRooster|कोंबडा\nVulture|गिधाड\nWoodpecker|सुतारपक्षी\nKoel|कोकिळा'
      ]
    }
  ]
};
