export default {
  label: 'Our Food',
  id: 'our-food',
  lockAfter: 1,
  list: [
    {
      label: 'Healthy vs Unhealthy Foods',
      type: 'group',
      id: 'healthy-unhealthy',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the foods in the right boxes.',
        imageType: 'custom',
        types: ['Healthy', 'Unhealthy']
      },
      data: [
        [
          'almond, carrot, apple, mushroom, cucumber, spinach',
          'ice cream, lollipop, cake, chocolate'
        ],
        [
          'salad, juice, cashew nut, corn, beetroot, banana',
          'pizza, burger, soft drink, french-fry'
        ]
      ]
    },
    {
      id: 'slides-healthy-food',
      type: 'slides2',
      label: `Healthy Food Habits`,
      data: {
        title: `Healthy Food Habits`,
        displayType: 'steps',
        images: 'img/science/healthy-eating-habits',
        steps: [
          `Wash hands before and after eating.
Sit together to eat.
Do not talk while eating.
Chew your food well.
Do not spill food while eating.
Avoid watching TV and using mobile phones while eating.
Do not overeat. It can make you ill.
Rinse your mouth after every meal.
Do not waste food.
Always wash fruits and vegetables before eating or cooking.
Stale food makes you sick. Avoid it.
Avoid uncovered food as it may contain dust and germs.`
        ]
      }
    },
    {
      label: 'Drag and Drop',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      lockAfter: 1,
      data: [
        `Wash *hands* before and after eating.
Sit *together* to eat.
Do not *talk* while eating.
Chew your *food* well.
Do not *spill* food while eating.
Avoid *watching* TV and using mobile phones while eating.`,

        `Do not *overeat*. It can make you ill.
Rinse your mouth *after* every meal.
Do not *waste* food.
Always *wash* fruits and vegetables before eating or cooking.
Stale food makes you *sick*. Avoid it.
Avoid uncovered food as it may contain dust and *germs*.`
      ]
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Wash hands before and after eating.
Rinse your mouth after every meal.
Do not waste food.`
          },
          {
            name: 'False',
            text: `Swallow the food without chewing.
No need to wash fruits before eating.
Stale food is healthy.`
          }
        ]
      }
    },
    {
      id: 'notes',
      type: 'passage',
      label: 'Our Food - Notes',
      data: {
        title: 'Our Food',
        text: `All of us need food to live. Food gives us energy to work and play.
Milk is a healthy drink. It keeps our teeth and bones strong.
Pulses, meat, fish and eggs help us grow.
Nuts, fruits and vegetables keep us healthy and protect us from diseases.
# A Variety of Dishes
Every dish we eat is unique in taste. The dishes are made up of one or more ingredients.
We can prepare many dishes using the same ingredients.
# Food for a Day
We have breakfast in the morning, lunch in the afternoon and dinner at night. We should not skip any meal. Some people prefer vegetarian food and some non-vegetarian food. 
We have snacks in between. We should choose healthy food items as snacks.`
      }
    },
    {
      id: 'match-meal-time',
      type: 'match',
      label: 'Meal and Time',
      data: {
        title: 'Match Meal and Time',
        text: `8 am, breakfast
1 pm, lunch
4 pm, snacks
8 pm, dinner`
      }
    },
    {
      id: 'classify-below',
      label: 'Vegetarian vs Non-vegetarian',
      type: 'group',
      data: {
        types: [
          {
            name: 'Vegetarian',
            text: 'Corn Soup, Idli, Rice, Fruits, Gulab Jamun'
          },
          {
            name: 'Non-vegetarian',
            text: 'Biriyani, Egg fry, Fish gravy, Mutton soup'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      id: 'drag-drop-2',
      type: 'matchByDragDrop',
      data: [
        `All of us need *food* to live. Food gives us *energy* to work and play.
Milk is a *healthy* drink. It keeps our *teeth* and bones strong.
Pulses, meat, fish and eggs help us *grow*.
Nuts, fruits and vegetables keep us healthy and protect us from *diseases*.`,

        `Every dish we eat is unique in *taste*. The dishes are made up of one or more *ingredients*.
We have *breakfast* in the morning, *lunch* in the afternoon and *dinner* at night.
We should choose *healthy* food items as snacks.`
      ]
    }
  ]
};
