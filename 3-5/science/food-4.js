export default {
  label: 'Food and Hygiene',
  id: 'food-4',
  pdf: 'food-4.pdf',
  lockAfter: 3,
  list: [
    {
      label: 'Cooking - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Raw and Cooked Food',
        text: [
          `Food is one of the basic needs of life. We get energy for all our activities from food. Food obtained from nature provides all the nutrients to our bodies. But seeing the advertisement, we are attracted to junk food.
In our daily life, we depend on plants and animals for our food. Food that we eat directly without cooking is called raw food. We eat fruits, some vegetables, tubers and nuts in the raw form. Some pulses and cereals are also eaten as raw food.
Food that needs to be processed using heat before it can be eaten is called cooked food. Why should we cook food?
1. Cooked food is digested easily.
2. Cooking softens the food materials.
3. Cooking kills germs.
4. Cooking adds taste and flavor to food.
# Cooking methods
Some of the commonly used cooking methods are given below.
# Boiling:
It is a method of cooking food by immersing it in boiling water. So that the food becomes soft. Example: Rice, Egg.
# Steaming: 
It is a method of cooking food in steam by immersing the vessel in a container with boiling water. Example: Idli, Idiyappam.
# Pressure cooking: 
It is a method of cooking food in a pressure cooker. Example: Rice, Dhal.
# Roasting: 
It is a method of cooking food by heating on a tawa or frying pan without covering it. Example: Groundnuts, Cashewnut.
# Frying:
It is a method of cooking food in hot oil. Example: Chips, Poori.
Boiling, steaming and pressure cooking uses moist heat. Roasting, frying and baking uses dry heat. There are other cooking methods like microwave cooking and solar cooking.`
        ]
      }
    },
    {
      label: 'Food from Plants vs Animals',
      type: 'group',
      id: 'classify',
      data: {
        title: 'We get the below food items from plants and animals. Classify.',
        types: [
          {
            name: 'Plants',
            text: 'Carrot, Potato, Brinjal, Onion, Mushroom, Corn'
          },
          {
            name: 'Animals',
            text: 'Egg, Milk, Meat, Curd, Fish, Butter, Ghee'
          }
        ]
      }
    },
    {
      label: 'Raw food',
      type: 'group',
      id: 'classify-2',
      data: {
        title: 'We can eat some food items raw, without cooking. Classify',
        types: [
          {
            name: 'Raw',
            text: 'cashew nut, carrot, lady finger, tomato, cucumber, apple'
          },
          {
            name: 'Only Cooked',
            text: 'fish, meat, brinjal, potato, dhal, tapioca'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Idli, Steaming
Rice, Pressure cooking
Egg, Boiling
Cashewnut, Roasting
Chips, Frying`,
        title: 'Match the following.'
      }
    },
    {
      label: 'Choose the correct answer(s)',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which of the following vegetable is not used while making a salad?',
            options: 'potato, carrot, cucumber, cabbage'
          },
          {
            qText: 'Pick the food items that are made from milk?',
            options: '* curd, * butter, mushroom, * ghee'
          },
          {
            qText: 'Which cooking process needs a lot of oil?',
            options: 'Frying, Roasting, Boiling'
          },
          {
            qText: 'Cakes are usually prepared by the process of ________.',
            options: 'baking, frying, roasting'
          },
          {
            qText: 'What are the benefits of cooking food?',
            options:
              'Easy to digest, kills germs, adds taste and flavor, * all of the above'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `Cooking kills germs.
Honey is the only food that does not spoil.
Idlis are made by the process of steaming.`
          },
          {
            name: 'False',
            text: `We make a salad by cooking vegetables.
Cooked foods are difficult to digest.
Chips are made by the process of boiling.`
          }
        ]
      }
    },
    {
      label: 'Food Hygiene - Reading',
      type: 'passage',
      id: 'reading-hygiene',
      data: {
        title: 'Food Hygiene',
        text: [
          `We need to follow the below basic habits.
1. Wash your hands with soap before cooking.
2. Wash vegetables and fruits before cutting.
3. Wash cooking vessels and knives.
4. Don't cook food for a long time because it destroys the nutrients present in the food.
5. Don't use the same oil for cooking food many times.
6. Using the food items after their expiry date is not good for health.
# Utensils
Utensils are in different shapes and sizes. We use specific utensils for each cooking method. Clay pots were used earlier. Stainless steel and aluminum vessels are now generally used for cooking.
# Meal-time Hygiene
Meal-time hygiene includes ways to make sure that we do not get sick because of the way we eat or make food.
1. Always cover food to protect them from dust and insects.
2. Eat fresh food always.
3. Avoid taking food that is too cold or too hot.
4. Avoid fast food and fried food.
5. Always wash your hands before and after eating.
# Food During Illness
When we are sick, we should avoid food items that are fried in oil. We should take energy-giving, easily digestible food. Some of them are given below:
1. Porridge of rice or cereals.
2. Fruit juice, tender coconut.
3. Steamed foods like idli.
# Food Wastage
We should not waste food. Food that is not eaten is called leftover food. That is discarded as waste. Following are the simple ways to avoid food wastage.
1. Take what you'll eat and eat what you take.
2. Share the excess food.
3. Give the excess food to hungry animals.
One-third of the food produced in the world is wasted. On the other hand, one section of people do not get enough food. 28th May is observed as World Hunger Day.
# Food Preservation
We can preserve the food for a long time by using the following methods.
1. Pickling - Mixing fruits and vegetables with oil and salt.
2. Refrigerating - Keeping food in the fridge to preserve it for a short time.
3. Drying - Removing the water content of the food.
4. Canning - Storing food in air-tight containers.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'We should avoid eating ____ food.',
            options: 'junk, fresh, raw'
          },
          {
            qText: '_______ is an easily digested food.',
            options: 'Idli, Briyani, parotta'
          },
          {
            qText: 'What type of food should we take when sick?',
            options: 'meat, * energy giving, * easily digestible, fried food'
          },
          {
            qText: 'Which day is observed as World Hunger Day?',
            options: '28th May, 18th May, 28th June, 18th June'
          },
          {
            qText:
              'The preservation method of mixing vegetables with oil and salt is known as _______.',
            options: 'pickling, drying, canning'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `You should wash your hands before cooking.
Solar cooker reduces the use of fuel.
You should wash your hands before and after eating.`
          },
          {
            name: 'False',
            text: `Vegetables and fruits should be washed after cutting.
In olden days, people cooked their food in a pressure cooker.
Pressure cooker is not a cooking utensil.
Junk food is good for health.`
          }
        ]
      }
    },
    {
      label: 'Preservatives - Fill up',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `The process of mixing fruits and vegetables with oil and salt is called *pickling*.
Keeping food in the fridge to preserve it for a short time is called *refrigerating*.
Removing the water content of the food is called *drying*.
Storing food in air-tight containers is called *canning*.`
      }
    },
    {
      label: 'Choose the best answer',
      type: 'mcq',
      id: 'mcq-3',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which one can be eaten as raw food?',
            options: 'Carrot, Meat, Fish, Potato'
          },
          {
            qText: 'Uncooked food is called _______',
            options: 'raw food, junk food, hygienic food, cooked food'
          },
          {
            qText: 'Solar cooker reduces___________ .',
            options:
              'Air Pollution, Water Pollution, Land Pollution, Noise Pollution'
          },
          {
            qText: 'Which one cannot be preserved by drying method?',
            options: 'Fruits, Rice, Fish, Cereals'
          },
          {
            qText: 'We can avoid food wastage by',
            options:
              'Giving to the needy, Eating more than we need, Buying extra food, Throwing in a dust bin'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with the given options.',
        text: `*Raw (Junk)* food gives us energy to work and play.
Cooked food is easy *digested(undigested)*.
Pressure cooker is one of the *modern(olden)* utensils.
We need pure air, protected water and *healthy (junk) *food for our healthy life.
We make Idli by *steaming(boiling)* method.`
      }
    },
    {
      label: 'Healthy vs Junk food',
      id: 'classify-3',
      type: 'group',
      data: {
        title: 'Classify the below as healthy or junk food.',
        types: [
          {
            name: 'Healthy',
            text: 'fruits, nuts, salad, milk'
          },
          {
            name: 'Junk',
            text: 'panipoori, samosa, chips'
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match the following',
      id: 'match-4',
      data: {
        fontSize: '1rem',
        title: 'Match the following',
        text: `Grapes, Raw food
Mixture of vegetables, Salad
Electric rice cooker, Modern utensil
Earthen pot, Olden utensil
Less fatty food, Food during illness`
      }
    },
    {
      label: 'Say yes or No',
      type: 'classifySentence',
      id: 'yes-no',
      data: {
        title: 'Say Yes or No',
        types: [
          {
            name: 'Yes',
            text: `Frying is a method of cooking.
Cooking in a solar oven needs sunlight.
Consuming too much oily food is bad for our health.`
          },
          {
            name: 'No ',
            text: `Briyani is a raw food.
We can cook rice on a tawa.`
          }
        ]
      }
    },
    {
      label: 'Value of Food - Reading',
      type: 'passage',
      id: 'value-of-food',
      data: {
        title: 'Value of Food',
        text: `# How do we get grains?
We need rainwater to grow bajra. After some time, the ears of bajra are visible on every stalk. During harvest season, the ears of corn are full. All the bajra's ears must be chopped and gathered. Then the process of threshing and winnowing starts. Through this process, we obtain the grains from the ears of bajra.
# Do you know?
Birds come to eat the tender grains as the grains grow. Scarecrows must be placed and slung shots must be fired to scare the birds away.
We get different types of food from different places. We get fish from water. Fruits like amla, jamun, karvanda, bor grow in forests.
The grains and other foodstuffs are gathered and sold all over the country. They are transported using trucks or goods trains. 
It is the turn of porters and truck drivers to put in their labor. Transport costs a lot, too. All the processes of purchasing, transporting and marketing are expensive.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-3',
      data: {
        text: `Singhadas and makhanas are obtained from *freshwater* plants.
If a machine is not available, *bullocks* do the threshing.
The tiny peaks on our tongue are called *taste buds*.
A region's climate and *soil* determine the crops that are grown in that region.
When the soil becomes *hot* and humid the crop is sown.`
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        text: `The process of gathering of the ripened crop.  *Harvesting*
To blow through the grain in order to remove the outer covering. *Winnowing*
Process of moving foodstuffs from warehouses to consumers through trucks. *Transporting*
The process of loosening the edible part of the grain. *Threshing*`
      }
    },
    {
      id: 'match-5',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Wheat, Rabi crop
Fruits, Horticulture
Rice, Kharif crop
Chilly, Spices
Sesame, Oil`,
        title: 'Match the following'
      }
    },
    {
      label: 'Sour vs Sweet',
      type: 'group',
      id: 'sour-sweet',
      data: {
        title: 'Classify as sour or sweet',
        types: [
          {
            name: 'Sour',
            text: 'Tamarind, Vinegar, Lemon'
          },
          {
            name: 'Sweet',
            text: 'Sugar, Candy, Cupcake, Honey, Fruit juice'
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
        text: `Dog, Cow, Sheep, Hen
Rice, Pizza, Donut, Bread
Fish, Milk, Butter, Yoghurt
Tamarind, Honey, Sugar, Jaggery`
      }
    }
  ]
};
