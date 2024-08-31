export default {
  label: 'எண்கள் - 2',
  id: 'ta-numbers-2',
  lockAfter: 100,
  list: [
    {
      id: 'match',
      type: 'match',
      label: 'பொருத்துக',
      commonData: {
        title: 'பொருத்துக',
        fontSize: '1.5rem'
      },
      data: [
        `நூறு, 100
        இருநூறு, 200
        முந்நூறு, 300
        நானூறு, 400
        ஐநூறு, 500`,

        `அறுநூறு, 600
        எழுநூறு, 700
        எண்ணூறு, 800
        தொள்ளாயிரம், 900
        ஆயிரம், 1000`,

        `ஆயிரம், 1000
        இரண்டாயிரம், 2000
மூவாயிரம், 3000
நான்காயிரம், 4000
ஐந்தாயிரம், 5000 `,

        `ஆறாயிரம், 6000
        ஏழாயிரம், 7000
        எட்டாயிரம், 8000
        ஒன்பதாயிரம், 9000 
        பத்தாயிரம், 10000`
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'எழுத்துக்களை இணைக்கவும்',
      lockAfter: 2,
      commonData: {
        title: 'எழுத்துக்களை சேர்த்து எண்களை  அமைக்கவும்.',
        lang: 'ta'
      },
      data: [
        'நூறு, இருநூறு, முந்நூறு, நானூறு, ஐநூறு',

        'அறுநூறு, எழுநூறு, எண்ணூறு, தொள்ளாயிரம், ஆயிரம்',

        'ஆயிரம், இரண்டாயிரம், மூவாயிரம், நான்காயிரம், ஐந்தாயிரம்',

        'ஆறாயிரம், ஏழாயிரம், எட்டாயிரம், ஒன்பதாயிரம், பத்தாயிரம்'
      ]
    },
    {
      label: 'வரிசை படுத்துக ',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title: 'சிறியது முதல் பெரியது வரை வரிசை படுத்துக '
      },
      data: [
        'நூறு, இருநூறு, முந்நூறு, நானூறு, ஐநூறு',

        'அறுநூறு, எழுநூறு, எண்ணூறு, தொள்ளாயிரம், ஆயிரம்',

        'ஆயிரம், இரண்டாயிரம், மூவாயிரம், நான்காயிரம், ஐந்தாயிரம்',

        'ஆறாயிரம், ஏழாயிரம், எட்டாயிரம், ஒன்பதாயிரம், பத்தாயிரம்'
      ]
    }
  ]
};
