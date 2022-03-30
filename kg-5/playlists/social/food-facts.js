export default {
  label: 'Food Facts',
  id: 'food-facts',
  list: [
    {
      label: 'Food and its Life-time - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Food and its Life-time',
        text: `My mother asked me to buy a pack of bread from nearby store. I went to the store, bought the bread and gave the money. Before leaving the store I got alert and thought that, I need to check something. I checked the expiry date printed on the packet. And the date was two days before today. I informed the store owner and he asked sorry, and gave me a new packet of bread. 
I know that all packed food items come printed with manufactured and expiry date. Food items will get spoiled after some time. Even the food prepared by mother also get spoiled after some time. 
If any bad smell come from food items, then we should not eat it. If the color of food item changes or any fungal growth, then we should not eat it. 
We follow different methods to keep food items safe for some time. Mother keeps all green vegetables and tomato in fridge, so that they are good for some time. But she keeps onion and potato in open space as open air helps them to be good for some time. 
Mother makes pickle from mango and lemon which we can have with food for a couple of months. She adds lot of salt and oil which prevents spoiling. If I put my hands into it, or if I add some water to it, then it will spoil fast. 
Industries uses preservatives to keep food items edible for a long time. Mango is a seasonal fruit. But we can get bottled mango juice around the year. Eating preserved food is generally not considered healthy.`
      }
    },
    {
      label: 'Food - MCQ',
      type: 'mcq',
      id: 'mcq',
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
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `We have to check the *expiry* date while buying things.
Every prepared food get *spoiled* after some time. 
To increase the life of fruits and vegetables, we keep them in a *fridge*.
Mango is a *seasonal* fruit.
Eating *preserved* food is generally not considered *healthy*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify statements as true or false',
        types: [
          {
            name: 'True',
            text: `Onion and potato are usually not kept in fridge.
            Salt is a natural preservative.`
          },
          {
            name: 'False',
            text: `Preserved foods are always very healthy.
            Manufactured date is usually not printed in food materials.
            Home made food usually don't get spoiled.`
          }
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Complete the Word',
      data: {
        text: `A spicy food item that lasts for a few months. | PICKLE | P____E
        Colour of spoiled food changes due to _____ growth. | FUNGAL 
        Industries use this to prevent food from spoiling. | PRESERVATIVE | P_____V_____
        We can detect spoiled food through its ____. | SMELL
        Mango is a ______ fruit. | SEASONAL |S__S____`
      }
    }
  ]
};
