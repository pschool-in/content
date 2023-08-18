export default {
  label: 'Numbers',
  id: 'ml-numbers',
  list: [
    {
      id: 'match',
      type: 'match',
      label: 'Match the Numbers',
      commonData: {
        title: 'Match the Numbers',
        fontSize: '1.5rem'
      },
      data: [
        `നൂറ്, 100
ഇരുനൂറ്, 200
മുന്നൂറ്, 300
നാനൂറ്, 400
അഞ്ഞൂറ്, 500`,

        `അറുനൂറ്, 600
എഴുനൂറ്, 700
എണ്ണൂറ്, 800
തൊള്ളായിരം, 900
ആയിരം, 1000`,

        `ആയിരം, 1000
രണ്ടായിരം, 2000
മൂവായിരം, 3000
നാലായിരം, 4000
അയ്യായിരം, 5000 `,

        `ആറായിരം, 6000
ഏഴായിരം, 7000
എണ്ണായിരം, 8000
ഒമ്പതിനായിരം, 9000
പതിനായിരം, 10000`
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'Connect Letters',
      lockAfter: 2,
      commonData: {
        title: 'Connect letters and find the number.',
        lang: 'ml'
      },
      data: [
        'നൂറ്, ഇരുനൂറ്, മുന്നൂറ്, നാനൂറ്, അഞ്ഞൂറ്',

        'അറുനൂറ്, എഴുനൂറ്, എണ്ണൂറ്, തൊള്ളായിരം, ആയിരം',

        'ആയിരം, രണ്ടായിരം, മൂവായിരം, നാലായിരം, അയ്യായിരം',

        'ആറായിരം, ഏഴായിരം, എണ്ണായിരം, ഒമ്പതിനായിരം, പതിനായിരം'
      ]
    },
    {
      label: 'Arrange Numbers ',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title: 'Arrange Numbers from the Smallest to the Biggest'
      },
      data: [
        'एक सौ, दो सौ, तीन सौ, चार सौ, पाँच सौ',

        'छह सौ, सात सौ, आठ सौ, नौ हजार, एक हजार',

        'एक हजार, दो हजार, तीन हजार, चार हजार, पाँच हजार',

        'छह हजार, सात हजार, आठ हजार, नौ हजार, दस हजार'
      ]
    }
  ]
};
