export default {
  label: 'Numbers - 2',
  id: 'hi-numbers-2',
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
        `एक सौ, 100
दो सौ, 200
तीन सौ, 300
चार सौ, 400
पाँच सौ, 500`,

        `छह सौ, 600
सात सौ, 700
आठ सौ, 800
नौ हजार, 900
एक हजार, 1000`,

        `एक हजार, 1000
दो हजार, 2000
तीन हजार, 3000
चार हजार, 4000
पाँच हजार, 5000 `,

        `छह हजार, 6000
सात हजार, 7000
आठ हजार, 8000
नौ हजार, 9000
दस हजार, 10000`
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'Connect Letters',
      lockAfter: 2,
      commonData: {
        title: 'Connect letters and find the number.',
        lang: 'hi'
      },
      data: [
        'एक सौ, दो सौ, तीन सौ, चार सौ, पाँच सौ',

        'छह सौ, सात सौ, आठ सौ, नौ हजार, एक हजार',

        'एक हजार, दो हजार, तीन हजार, चार हजार, पाँच हजार',

        'छह हजार, सात हजार, आठ हजार, नौ हजार, दस हजार'
      ]
    },
    {
      label: 'Arrange Numbers ',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title: 'Arrange Numbers from the Smallest to the Biggest '
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
