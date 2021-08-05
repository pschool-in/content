export default {
  label: 'word',
  id: 'hi-word',
  img: 'word',
  list: [
    {
      data: {
        text:
          'क म ल\nस फे द\nम ही ना\nऊ प र\nऐ न क\nल ड़ की\nगु ला ब\nअ ना र\nइ म ली\nआ द र',
        title: 'Connect the blocks to form meaningful word.',
        isWord: true
      },
      editable: true,
      id: 'jumbled',
      label: 'शब्द गठन',
      slug: 'find-word-template',
      type: 'sequence'
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'antonyms',
      commonData: {
        title: 'Match Antonyms'
      },
      data: [
        `ज्ञान, अज्ञान
क्षमा, दण्ड
शत्रु, मित्र 
शुभ, अशुभ
शोषक, पोषक
स्वीकृत, अस्वीकृत`,

        `हित	- अहित
हिंसा, अहिंसा
सन्तोष, असन्तोष
क्षमा, क्रोध
सक्षम, अक्षम
सुलभ, दुर्लभ`,

        `विजय, पराजय
विश्वास, अविश्वास
स्वार्थ, निस्वार्थ
सुमति, कुमति
सुपुत्र, कुपुत्र
वरदान, अभिशाप`,

        `वियोग, संयोग
मानव, दानव
मृत, जीवित
वीर, कायर
रात्रि, दिवस
राजा, रंक`,

        `लाभ, हानि
रात, दिन
रिक्त, पूर्ण
मान, अपमान
अमृत, विष
अन्धकार, प्रकाश`,

        `अनुराग, विराग
अपमान, सम्मान
अनुकूल, प्रतिकूल
अल्प, अधिक
आशा, निराशा
अस्त, उदय`,

        `अभिमान, नम्रता
उदघाटन, समापन
उत्तर, दक्षिण
उच्च, निम्र
उधार, नकद
एकाग्र, चंचल
ऐसा, वैसा`,

        `औपचारिक, अनौपचारिक
कठिन, सरल
क्रूर, अक्रूर
कपूत, सपूत
एक, अनेक
आहार, निराहार`,

        `आमिष, निरामिष
आजादी, गुलामी
आर्द्र, शुष्क
अनिवार्य, वैकल्पिक
अगम, सुगम
आकाश, पाताल`,

        `अनुग्रह, विग्रह
आश्रित	, निराश्रित
अरुचि, रुचि
आदान, प्रदान
आय, व्यय
कसूरवार, बेकसूर`
      ]
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'synonyms',
      commonData: {
        title: 'Match Synonyms'
      },
      data: [
        `आग, अग्नि
        असुर, दानव
        अनोखा, अनुपम
        अमृत, पीयूष
        घोड़ा, अश्व
        आँख, नेत्र`,

        `आसमान, आकाश
        आम, आम्र
        सुख, प्रसन्नता
        आश्रम, मठ
        इच्छा, आकांक्षा
        इन्द्र, देवराज`,

        `कपड़ा, वस्त्र
        कमल, जलज
        किरण, प्रभा
        कुबेर, धनद
        गणेश, गणपति
        गंगा, देवनदी`,

        `घर, भवन, सदन
        गदहा, गर्दभ
        चन्द्र, चन्द्रमा
        चोर, तस्कर
        पानी, जल
        यमुना, कालिन्दी`,

        `तालाब, जलाशय
        नौकर, दास
        दुःख, पीड़ा
        देवता, देव
        द्रव्य, दौलत
        नदी, तटिनी`,

        `नाव, नौका
        पत्नी, अर्धागिनी
        पति, स्वामी
        वायु, हवा
        पक्षी, चिड़िया
        पर्वत, पहाड़`,

        `पण्डित, विद्वान् 
        बेटा, पुत्र 
        बेटी, पुत्री
        पृथ्वी, धरती
        पुष्प, फूल
        बाण, तीर`,

        `बिजली, विधुत
        ब्रह्मा, पितामह
        वृक्ष, पेड़
        मछली, जलजीवन
        शिव, शंकर
        मेघ, बांदल`,

        `संसार, विश्व
        सन्त, मुनि
        रात, रात्रि
        राजा, सम्राट
        विष्णु, माधव
        समुद्र, सागर`,

        `समूह, समूदाय
        सरस्वती, भारती
        सर्प, साँप
        सोना, स्वर्ण
        सूर्य, दिनकर`
      ]
    }
  ]
};
