export default {
    id: 'materials-2',
    label: 'Materials',
    lockAfter: 4,
    list: [
      {
        label: 'Materials - Reading',
        type: 'passage',
        id: 'passage',
        data: {
          title: 'Materials',
          text: `# Raw materials
          We use a wide range of materials daily. They may include plastic, metal, wood, fabric, glass, ceramics, etc. Each material is used to create a variety of items. For example, wood can be used to make tables, chairs, spoons, pencils, shoes, doors, floors and many more things. Things such as knives and spoons are made from steel. The clothes we wear are made of fabric. Shoes can be made from leather. Glass is used to make windows. Plates we use to eat can be made from ceramic. Plastic can be used to make many everyday objects, including bottles, bags, toys, and computer equipment. Some materials may be more suitable than others for particular uses or for manufacturing specific objects; for example, metal shoes wouldn’t be very comfortable and a cardboard door wouldn’t be very strong!`
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `metal, spoon
          wood, chair
          leather, shoes
          fabric, dress
          ceramic, plates`,
          title: 'Match the following'
        }
      },
      {
        label: 'Choose the best Answer',
        id: 'mcq',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' Which material is used to make windows?',
              options: 'glass, leather, fabric'
            },
            {
              qText:
                'What can be used to make a table?',
              options: 'wood, fabric, ceramic'
            },
            {
              qText:
                'Which of these are made from steel?',
              options: 'spoon, table cloth, shoes'
            }
          ]
        }
      }
    ]
};