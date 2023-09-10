export default {
  label: 'Rhyming Words',
  id: 'hi-rhyming-words',
  lockAfter: 4,
  lang: 'hi',
  list: [
    {
      label: 'खींचें और छोड़ें',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        fontSize: '1.3rem',
        dashWidth: 100
      },
      data: [
        `पाना, *नाना*
राजा,	*बाजा*
विचार, *विकार*
चंदन,	*नन्दन*
जाल, *माल*`,

        `गोली, *बोली*
नानी,	*रानी*
अटका,	*झटका*
पाना,	*खोना*
जैसा,	*वैसा*`,

        `पैसा, *कैसा*
जोर, *शोर*
माला,	*ताला*
पगड़ी, *रगड़ी*
अंग, *भंग*`,

        `रंग,	*संग*
नीला,	*पीला*
मिलना, *जुलना*
मटका,	*लटका*
रोना,	*सोना*`,

        `कौन,	*मौन*
तगड़ी, *झगड़ी*
काला,	*साला*
बाल,	*खाल*
आया, *गया*`,

        `खाया, *भाया*
ककड़ी, *लकड़ी*
मौका,	*चौका*
कार,	*तार*
छोटा,	*लोटा*`
      ]
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match Rhyming Words',
      lockAfter: 1,
      commonData: {
        title: 'Match the rhyming words.'
      },
      data: [
        `काला, भाला
मिला, किला
नहर, पहर
अर्पण, दर्पण
बात, रात`,

        `किला, जिला
खाना, दाना
काज, बाज
हार, भार
आन, पान`,

        `सपना, अपना
छोटू, मोटू
चरण, मरण
अस्त, व्यस्त
गाना, जाना`,

        `पाना, नाना
राजा,	बाजा
विचार, विकार
चंदन,	नन्दन
जाल, माल`,

        `गोली, बोली
नानी,	रानी
अटका,	झटका
पाना,	खोना
जैसा,	वैसा`
      ]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      lockAfter: 1,
      commonData: {
        title: 'वह शब्द चुनें जिसमें तुकबंदी न हो।'
      },
      data: [
        `काश, घास, दास, आस 
मंद , संबंध, निबंध, प्रबंध
ठण्ड, आनंद, पसंद, बुलंद
चंदन, अटका, झटका, मटका
शोर, जैसा, वैसा, पैसा
बोली, तगड़ी, झगड़ी, पगड़ी`,

        `मंद, अंग, भंग, रंग
कौन, खोना, रोना, सोना
पीला, खाया, आया, भाया
लोटा, माला, ताला, साला
कपड़ा, ककड़ी, लकड़ी, मकड़ी`
      ]
    },
    {
      label: 'तुकबंदी वाला शब्द चुनें',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title:
          'शब्दों को तुकबंदी वाला बनाने के लिए सही ब्लॉक को खींचें और छोड़ें।',
        printTitle: 'सही विकल्प भरें.'
      },
      data: [
        `पाना, नाना, राजा
राजा, बाजा, झरना
विचार, विकार, कतर
चंदन, नन्दन, मुहाना
जाल, माल, भूला`,

        `गोली, बोली, जिला
नानी, रानी, बाली
अटका, झटका, खटा
पाना, खोना, पान
जैसा, वैसा, जीरा`,

        `काला, भाला,माता
मिला, किला, मीरा
नहर, पहर, सरल
अर्पण, दर्पण, भरण
बात, रात, जाम`,

        `किला, जिला, काला
खाना, दाना, पतन
काज, बाज, भार
हार, भार, बान
आन, बान, पवन`,

        `सपना, अपना, विमला
छोटू, मोटू, झूठा
चरण, मरण, दर्पण 
अस्त, व्यस्त, कैसा
गाना, जाना, अपना`
      ]
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'Match Rhyming Words - 2',
      lockAfter: 2,
      commonData: {
        title: 'Match the rhyming words.'
      },
      data: [
        `सुन, गुन
मन, वन
रंग, संग
प्यार, यार
आना, जाना`,

        `खाना, पीना
खेल, मेल
आर, पार
जब, तब
रीत, प्रीत`,

        `चीरा, खीरा
आते, जाते
नट, खट
चाह, वाह
याद, बाद`,

        `सादा, वादा
गीत, संगीत
बहन, पहन
दिल, खिल
मन, धन`,

        `अगर, मगर
जैसा, तैसा
जब, तब
सगा, ठगा
लुटा, पिटा`,

        `जात, पात
हाथ, साथ
जिक्र, फ़िक्र
जहाँ, कहाँ
हाल, चाल`,

        `झूठा, रूठा
मान, जान
रंग, संग
प्यार, बहार
गरम, नरम`,

        `उमंग, तरंग
मानव, दानव
लायक, नालायक
चटक, मटक
जकड़, अकड़`,

        `चमक, दमक
अगर, मगर
चहल, पहल
रहन, सहन
जहर, कहर`,

        `आराम, हराम
तरल, सरल
करना, भरना
सम्मान, अपमान
रुकना, चलना`,

        `अचार, विचार
आकर, जाकर
हंसाया, रुलाया
लिखना, सीखना
कितना, जितना`,

        `अमन, रमन
अजय, विजय
सुरेश, रमेश
सुरेश, राकेश
साहिल, राहिल`,

        `दीपक, संपक
संजय, मंजय
छाया, माया
राम, श्याम
रवि, कवि`,

        `शौर्य, मौर्य
जय, विजय
निरज, धीरज
संदीप, मंदीप
सीता, रीता`,

        `वतन, पतन
परम, करम
केला, झेला
मरण, भरण
जाम, शाम`,

        `रहन, सहन
सरल, तरल
तारा, पारा
गाना, जाना
अस्त, व्यस्त`
      ]
    }
  ]
};
