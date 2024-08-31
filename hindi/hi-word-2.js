export default {
  label: 'शब्द 2',
  id: 'hi-word-2',
  img: 'word',
  lockAfter: 100,
  lang: 'hi',
  list: [
    {
      id: 'jumbled-hi-1',
      label: 'शब्द गठन-दो अक्षर वाले शब्द',
      lockAfter: 4,
      type: 'sequence',
      commonData: {
        title: 'अर्थपूर्ण शब्द बनाने के लिए अक्षरों को जोड़ें',
        lang: 'hi'
      },
      data: [
        `चित्र, ठीक, खोज, घड़ी, कला, ठंडा, ढोल, डाली, तार, थाली`,
        `ठेला, केला, ढेर, ताला, छत, दाम, जीभ, दिल, नोट, जग`,
        `चना, दादी, बेटी, भाषा, भारी, पैसा, छेद, पानी, डर, तीन`,
        `जब, कब, चल, नल, जल, कल, पल, छल`,
        `सच, ढक, खत, तब, यश, मर, तीर, डोसा`,
        `रण, थाना, हल, नाली, नस, पीठ, भेद, गम, जप, दम`,
        `घर, मत, फल, सर्प, गोल, झंडा, धन, चाबी, भाव, ठेस`,
        `तप, ढंग, सच, उठ, पूजा, बात, पूरी, नीम, दंगा, ढाबा`,
        `बाल, छाता, घाव, चौकी, खाल, कब, दिन, नानी, तारा, डोरी`,
        `गाल, गई, घना, लड़, घर, जीव, छवि, पंख, घोड़ा, फूल`
      ]
    },

    {
      id: 'jumbled-hi-2',
      label: 'शब्द गठन-तीन अक्षर वाले शब्द',
      lockAfter: 4,
      type: 'sequence',
      commonData: {
        title: 'अर्थपूर्ण शब्द बनाने के लिए अक्षरों को जोड़ें',
        lang: 'hi'
      },
      data: [
        `भगत, शहद, चरण, औरत, चरम, परम, नगर, उधर`,
        `कहर, कसम, महल, कमर, भरण, सड़क, नरम, समय, जलद, बतख `,
        `हवन, लहर, गगन, वचन, अगर, कलश, मटर, भजन`,
        `चमक, डगर, पहल, फसल, पहर, खबर, शहद, शहर, पकड़`,
        `कमर, सफर, मटक, वजन, भजन, सफल`,
        `परख, बतख, मटर, बहन, चहक, मखन, महक, बटन, ठहर`,
        `नमक, नमन, अरब, बहस, सहन, सरल, पलक`,
        `कलश, तखत, नरम, भजन, बरस, गरज, चमक, पहर`,
        `गलत, झलक, छलक, झपक, जतन, जहर, इधर`,
        `कदर, जलज, समर, पवन, चरण, पलट, उलट `,
        `भरत, गगन, चरम, ललक, समय, सरस, महल, पहल, परख `,
        `मटर, समझ, ननद, कमल, लखन, असल, नकल, अमर`,
        `वचन, मगन, असर, अलग, नजर, कसर, भगत `,
        `जनक, कसम, कथन, चरण, अभय, शरण, नरक, अक्षर`,
        `अजय, अजब, गजब, अमल, चलन, जगत, जगह, टपक`,
        `जतन, करम, रहम, सबक, शपत, नयन, बतख`
      ]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'नासिका ध्वनि शब्द',
      lockAfter: 1,
      commonData: {
        title: 'नासिका ध्वनि वाले शब्द चुनें'
      },
      data: [
        `संबंध, काश, घास, दास
मंद, ठण्ड, आस, पैसा 
अंगूर ,खाया, आया, भाया
चंदन, अटका, झटका, मटका
निबंध, शोर, जैसा, वैसा
मंदिर, तगड़ी, झगड़ी, पगड़ी`,

        `जंगल, खाया, आया, भाया
उंगली, खोना, रोना, सोना
बंदूक, खाया, आया, भाया
पंख, माला, ताला, साला
अंधेरा, ककड़ी, लकड़ी, मकड़ी`
      ]
    },
    {
      type: 'match',
      label: 'गिनती',
      id: 'numerals',
      lockAfter: 2,
      commonData: {
        title: 'निम्नलिखित को मिलाएं'
      },
      data: [
        `0, शून्य 
४, चार 
७, सात 
१०, दस 
२, दो`,

        `६, छह 
९, नौ 
३, तीन 
५, पाँच 
१, एक `,

        `१२,  बारह 
१६, सोलह 
२०, बीस 
११, ग्यारह 
१५, पंद्रह `,

        `१८, अठारह    
१३, तेरह 
१९, उन्नीस 
१४, चौदह 
१७, सत्रह `,

        `५०, पचास 
८०, अस्सी 
१००, सौ 
१००००, दस हज़ार 
६०, साठ 
३०, तीस 
१०००००, एक लाख 
९०, नब्बे `
      ]
    },
    {
      type: 'match',
      label: 'रंग',
      id: 'colours',
      commonData: {
        title: 'निम्नलिखित को मिलाएं'
      },
      data: [
        `White, सफेद
Black, काला
Blue, नीला
Yellow, पीला
Red, लाल`,

        `Green, हरा
Pink, गुलाबी
Brown, भूरा
Purple, बैंगनी
Orange, नारंगी
Golden, सुनहरा`
      ]
    },
    {
      id: 'match-days',
      label: 'दिन',
      type: 'match',
      data: {
        text: `Monday, सोमवार 
Tuesday, मंगलवार 
Wednesday, बुधवार 
Thursday, गुरूवार 
Friday, शुक्रवार 
Saturday, शनिवार 
Sunday, रविवार`,
        title: 'निम्नलिखित को मिलाएं'
      }
    }
  ]
};
