export default {
  label: 'गिनती',
  id: 'hi-numbers',
  list: [
    {
      id: 'match',
      type: 'match',
      label: 'संख्या का मिलान करें',
      commonData: {
        title: 'संख्या का मिलान करें',
        fontSize: '1.5rem'
      },
      data: [
        `एक, 1
  दो, 2
  तीन, 3
  चार, 4
  पाँच, 5  `,

        `छह, 6
  सात, 7
  आठ, 8
  नौ, 9
  दस, 10`,

        `ग्यारह, 11
  बारह, 12
  तेरह, 13
  चौदह, 14
  पंद्रह, 15`,

        `सोलह, 16
  सत्रह, 17
  अठराह, 18
  उन्नीस, 19
  बीस, 20`,

        `दस , 10
  बीस, 20
  तीस, 30
  चालीस, 40
  पचास, 50   `,

        `साठ, 60
  सत्तर, 70
  अस्सी, 80
  नब्बे, 90
  सौ, 100`
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'अक्षर कनेक्ट करें',
      lockAfter: 2,
      commonData: {
        title: 'अक्षरों को जोड़ें और संख्या ज्ञात करें।',
        lang: 'hi'
      },
      data: [
        'एक, दो, तीन, चार, पांच',

        'छह, सात, आठ, नौ, दस',

        'ग्यारह, बारह, तेरह, चौदह, पंद्रह',

        'सोलह, सत्रह, अठारह, उनतीस, बीस',

        'दस, बीस, तीस, चालीस, पचास',

        'साठ, सत्तर, अस्सी, नब्बे, सौ'
      ]
    },
    {
      label: 'संख्याएँ व्यवस्थित करें',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title: 'संख्याओं को छोटी से बड़ी तक व्यवस्थित करें'
      },
      data: [
        'एक, दो, तीन, चार, पांच',

        'छह, सात, आठ, नौ, दस',

        'ग्यारह, बारह, तेरह, चौदह, पंद्रह',

        'सोलह, सत्रह, अठारह, उनतीस, बीस',

        'दस, बीस, तीस, चालीस, पचास',

        'साठ, सत्तर, अस्सी, नब्बे, सौ'
      ]
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'संख्या का मिलान करें',
      commonData: {
        title: 'संख्या का मिलान करें',
        fontSize: '1.5rem'
      },
      data: [
        `इक्कीस, 21
  बाईस, 22
  तेईस, 23
  चौबीस, 24
  पच्चीस, 25`,

        `पैंतीस, 35
  छत्तीस, 36
  सैंतीस, 37
  अड़तीस, 38
  उनतालीस, 39`,

        `इकतालीस, 41
  बयालीस, 42
  तैंतालीस, 43
  चवालीस, 44
  पैंतालीस, 45`,

        `पचपन, 55
  छप्पन, 56
  सत्तावन, 57
  अट्ठावन, 58
  उनसठ, 59	`,

        `इकसठ, 61
  बासठ, 62
  तिरसठ, 63
  चौसठ, 64
  पैंसठ, 65`,

        `पचहत्तर, 75
  शाहत्तर, 76
  सत्यहत्तर, 77
  अठहत्तर, 78
  उनहत्तर, 79`,

        `इक्यासी, 81
  बयासी, 82
  तिरासी, 83
  चौरासी, 84
  पचासी, 85`,

        `पचपन, 95
  शहन्नव , 96
  सत्यन्नवा , 97
  अट्ठासी, 98		
  नव्यन्नवा, 99`,

        `सैंतीस, 37
  सैंतालीस, 47
  सत्तावन, 57
  साठ, 60
  सत्यहत्तर, 77`,

        `इकतालीस, 41
  इक्यावन, 51
  इकसठ, 61
  इकहत्तर, 71
  इक्यासी, 81`,

        `उनसठ, 59
  उनहत्तर, 69
  उन्यासी, 79
  नवासी, 89
  निन्यानवे, 99`,

        `चवालीस, 44
  चौवन, 54
  चौसठ, 64
  सैंतालीस, 74
  चौरासी, 84`
      ]
    },

    {
      label: 'संख्याएँ व्यवस्थित करें',
      type: 'sorting',
      id: 'sort-2',
      commonData: {
        title: 'संख्याओं को छोटी से बड़ी तक व्यवस्थित करें'
      },
      data: [
        'इक्कीस, बाईस, तेईस, चौबीस, पच्चीस',

        'पैंतीस, छत्तीस, सैंतीस, अड़तीस, उनतालीस',

        'इकतालीस, बयालीस, तैंतालीस, चवालीस, पैंतालीस',

        'पचास, छप्पन, सत्तावन, अट्ठाईस, उनहत्तर',

        'इकसठ, बासठ, तिरसठ, चौंसठ, पैंसठ',

        'पचहत्तर, छिहत्तर, सतहत्तर, अठहत्तर, उनहत्तर',

        'इक्यासी, बयासी, अस्सी-तीन, चौरासी, अस्सी-पांच',

        'पंचानबे, छियानवे, निन्यानवे, निन्यानवे, निन्यानबे',

        'सैंतीस, सैंतालीस, सत्तावन, छियासठ, सतहत्तर',

        'इकतालीस, इक्यावन, इकसठ, इकहत्तर, इक्यासी',

        'उनहत्तर, उनहत्तर, उनहत्तर, निन्यानवे, निन्यानबे',

        'चवालीस, चौवन, चौसठ, चौहत्तर, चौरासी'
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'नंबर लिखे',
      commonData: {
        title: 'नंबर लिखे',
        fontSize: '1.6rem',
        type: 'word-problem'
      },
      data: [
        `सोलह | 16
  चालीस | 40
  उन्तीस | 19
  एक सौ | 100
  तेरह | 13`,

        `चौवन | 54
  पैंतालीस | 45
  बासठ| 62
  अठहत्तर | 78
  छियानबे|96`,

        `निन्यानवे | 99
  चौरासी | 84
  सत्यहत्तर | 77
  सैंतीस | 37
  पचपन | 55`,

        `अट्ठासी | 98
  तिरासी | 83
  छिहत्तर | 76
  इकसठ | 61
  उनहत्तर | 59`,

        `सत्तानबे | 97
  बयासी | 82
  पचहत्तर | 75
  पैंसठ | 65
  अट्ठावन | 58`,

        `पचासी | 85
  बहत्तर | 72
  छियासठ | 67
  पंचानवे | 95
  इक्यावन | 51`
      ]
    }
  ]
};
