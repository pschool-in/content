export default {
  id: 'everyday-science-3',
  label: 'Everyday Science',
  pdf: 'everyday-science-3.pdf',
  lockAfter: 2,
  list: [
    {
      label: 'Science in Kitchen - Passage',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Science in Kitchen',
        text: `Science is the study of the natural world around us. We learn science by observing, experimenting and describing. Science is all around us.
Examples of science can be observed from the time we wake up till we go to sleep and even while one is sleeping.
Science influences most aspects of everyday life, including food, energy, medicine, transportation and leisure activities.
Even in our sleep, our body is working continuously. We dream while we sleep.
When we eat food, our digestive system is at work.
Medicine, vessels and furniture we use are the products of science.
# Kitchen Science
If one wants to explore science in everyday life, then the kitchen is the right place to start. To understand how water boils or how idlis are cooked, we must know science.
# What is boiling?
Heating a liquid until it becomes gas is called boiling. Boiling the water means to heat the water until it becomes gas and mixes with the air.
# Boiling Point
The boiling point of a substance is the temperature at which the liquid boils. At this temperature, the liquid changes into gas.
# Benefits of boiling water
1. Destroys germs
2. Improves digestion
3. Prevents us from the infection of waterborne diseases
# Steaming
Idli is cooked by a method called Steaming. Idli batter produced from rice and lentils is fermented for 8 hours before use.
# Advantages of Steaming
1. Easy cooking method.
2. Steamed food is easily digested.
3. Steamed food retains vitamins C and E.
# Pressure cooking 
Cooking food using water in a sealed vessel (cooker) is called pressure cooking. It can cook foods four times faster than ordinary cooking. The advantages of pressure cooking are:
1. It saves time
2. It minimizes the usage of fuel and saves energy
3. It retains nutrients in food
# Home appliances
Things like electric bulbs and fans are called home appliances. It is not easy to run our life these days without home appliances. Home appliances are machines that make life easier and more convenient.
# Kitchen appliances
1. Gas stove is used to cook food. We can control heat by a knob.
2. Grinder is used to grind food grains and prepare batter.
3. Mixer is used to grind spices, make chutney and prepare juices.
4. Vegetable cutter is used to chop vegetables.
5. Kettle is used to boil water and heat tea or coffee.
6. Induction Stove is used as a substitute for a stove and works on electricity.
A Refrigerator (Fridge) is a popular home appliance for preserving food. It works on the principle of cooling. The fridge has a pump that transfers heat from the inside of the fridge to its outside. This helps to keep things cold. The cold temperature inside the fridge slows down the bacterial growth in food and thus preserves the food for a longer time.
# Safety Measures
1. Never play with kitchen utensils such as knives, matchboxes and glasswares.
2. Use a cloth to hold hot pans.
3. Inform an adult in case you smell cooking gas leakage.
4. Turn off the gas stove, microwave oven and any other electrical gadget immediately after use.
# Medicine in the kitchen
In the past times, kitchen medicine was practiced in every house. People knew how to treat some of the ailments of the family members and manage emergencies with what was available in the kitchen.
Garlic is called the poor man's antibiotic. It helps to balance blood pressure and reduces symptoms of a common cold.
Asafoetida improves digestion. It is used as a remedy for diarrhea and dysentery.
Ginger helps to improve digestion. It also reduces nausea.
Turmeric is a common anti-infectant and it helps to heal wounds.
Black Pepper is a great remedy for colds, and coughs.
Cloves help to relieve toothache.
# Preparation of coriander tea
This is made from coriander seed powder. One tablespoon of powder is mixed with two or three cups of water. Jaggery is added and they are boiled for 5 minutes. It improves digestion.`
      }
    },
    {
      label: 'Choose the best Answer.',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Which of the following are the benefits of boiling water?',
            options:
              '*Destroys germs, * Improves digestion, * Prevents us from the infection of waterborne diseases'
          },
          {
            qText: 'Idly is prepared by the process of ______.',
            options: 'steaming, boiling, pressure cooking'
          },
          {
            qText: 'Which of the following is not a home appliance?',
            options: 'Shoes, Fan, Grinder, Stove'
          },
          {
            qText: 'Which of the following is safe to play with?',
            options: 'Plate, Matchbox, Gas stove, Kettle'
          },
          {
            qText: 'Medicine for common illness can be found in ______.',
            options: 'kitchen, dining room, living room, bedroom'
          },
          {
            qText: "______ is called the poor man's antibiotic.",
            options: 'Garlic, Ginger, Turmeric '
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        text: `Gas Stove, Kettle, Mixer, Fridge
Idli, Juice, Tea, Coffee
Sleep, Cough, Cold, Fever
Vegetable cutter, Induction Stove, Kettle
Pan, Fork, Spoon, Ladle`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Grinder, Batter
Mixer, Juice
Kettle, Boil water
Induction Stove, Electricity
Fridge, Store Vegetables`,
        title: 'Match the following'
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Kitchen has medicine for some of the common illnesses.
The cold temperature inside the fridge slows down the bacterial growth in food and thus preserves the food for a longer time.
Cooking involves a lot of science.`
          },
          {
            name: 'False',
            text: `Kids can play with matchboxes.
We keep vegetables in the fridge to protect them from insects like cockroaches.
In modern days, it is possible to live without appliances.
We can use the induction stove, even without electricity.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Science is the study of the *natural* world around us.
A refrigerator is also known as a *fridge*. It works on the principle of *cooling*
Kids should never play with *knives*.
Heating a liquid unit becomes gas is called *boiling*.`
      }
    },
    {
      id: 'match-2',
      label: 'Kitchen Medicine',
      type: 'match',
      data: {
        text: `Asafoetida, Digestion
Garlic, Blood Pressure
Turmeric, Wounds
Black Pepper, Cough
Cloves, Toothache`,
        title: 'Match the following'
      }
    }
  ]
};
