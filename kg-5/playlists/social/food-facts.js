export default {
  label: 'Food Facts',
  id: 'food-facts',
  list: [
    {
      label: 'Food and its Life-time - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Food and its Life-time',
        text:
          'My mother asked me to buy a pack of bread from nearby store. I went to the store, bought the bread and gave the money. Before leaving the store I got alert and thought that, I need to check something. I checked the expiry date printed on the packet. And the date was two days before today. I informed the store owner and he asked sorry, and gave me a new packet of bread. \n I know that all packed food items come printed with manufactured and expiry date. Food items will get spoiled after some time. Even the food prepared by mother also get spoiled after some time. \n If any bad smell come from food items, then we should not eat it. If the color of food item changes or any fungal growth, then we should not eat it. \n  We follow different methods to keep food items safe for some time. Mother keeps all green vegetables and tomato in fridge, so that they are good for some time. But she keeps onion and potato in open space as open air helps them to be good for some time. \n Mother makes pickle from mango and lemon which we can have with food for a couple of months. She adds lot of salt and oil which prevents spoiling. If I put my hands into it, or if I add some water to it, then it will spoil fast. \n Industries uses preservatives to keep food items edible for a long time. Mango is a seasonal fruit. But we can get bottled mango juice around the year. Eating preserved food is generally not considered healthy.'
      }
    },
    {
      label: 'Food - MCQ',
      type: 'mcq',
      id: '200',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText:
              'Food prepared in industries does not get spoiled because of _____________.',
            options: 'preservatives, fridge, clean environment'
          },
          {
            qText:
              'True or False: Usually mother keeps onion and potato in fridge.',
            options: 'False, True'
          },
          {
            qText:
              'True or False: Adding salt keeps food item safe for long time.',
            options: 'True, False'
          },
          {
            qText:
              'True or False: Manufactured date always come after expiry date.',
            options: 'False, True'
          },
          {
            qText: 'True or False: Industry made foods are always healthy.',
            options: 'False, True'
          }
        ]
      }
    }
  ]
};
