export default {
  label: 'Nutrients',
  id: 'food-3',
  pdf: 'food-3.pdf',
  lockAfter: 4,
  list: [
    {
      label: 'Food - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Why food is important?',
        text: `Every day we feel hungry and then eat something. Our body is telling us that it needs food. Why do we need food?
          1. Food gives us energy to work and play.
          2. Food builds our body.
          3. Food keeps us healthy.
          We eat different food items, some are raw and some are cooked. Each of these food items contains different nutrients. There are five main nutrients that our body requires. They are carbohydrates, proteins, fats, vitamins and minerals.
          # Carbohydrates
          Our body needs energy to do work, play and do other activities. Carbohydrates are energy-giving food. Food that contains carbohydrate are rice, wheat, potato, sugar cubes and bread.
          # Proteins
          Proteins build, maintain and replace the tissues in our body. They are also known as body - building foods. E.g., Fish, Milk, Egg, Nuts and Sprouted seeds.
          # Fats
          Fats provide energy to us. They act as the body's energy reservoir. Fats also help to keep the body warm during very cold weather. Too much fat in the body may lead to obesity or overweight. Some food items that contain fat are cheese, butter, ghee, meat, oil and nuts.
          # Vitamins
          Our body needs vitamins to work properly. They protect our body from deficiency diseases. E.g., Carrot, Orange, Gooseberry, Papaya and Greens.
          # Minerals
          Minerals help in formation of blood, bone, teeth, etc. They regulate the body functions. E.g., Fig, Pear, Garlic, Banana and Apple.
          Most children love to eat food items like burgers, pizzas and chocolates, which are not good for health. They make children to gain extra weight. Avoid eating unhealthy foods and eat nutritious food to stay healthy. A healthy snack may include sprouts, fruits and salads.`
      }
    },
    {
      label: 'Carbohydrates vs Proteins',
      type: 'group',
      id: '200',
      data: {
        title: 'Classify the below food items based on its major nutrients.',
        types: [
          {
            name: 'Carbohydrates',
            text: 'Rice, Wheat, Potato, Sugar, Bread'
          },
          {
            name: 'Proteins',
            text: 'Fish, Milk, Egg, Nuts, Sprouted seeds'
          }
        ]
      }
    },
    {
      label: 'Fats vs Vitamins',
      type: 'group',
      id: '300',
      data: {
        title: 'Classify the below food items based on its major nutrients.',
        types: [
          {
            name: 'Fats',
            text: 'Cheese, Butter, Ghee, Meat, Oil'
          },
          {
            name: 'Vitamins',
            text: 'Carrot, Orange, Gooseberry, Papaya, Spinach '
          }
        ]
      }
    },
    {
      id: '400',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Rice, Carbohydrates
Fish, Proteins
Meat, Fats
Papaya, Vitamins
Garlic, Minerals`,
        title: 'Match the foods with their major nutrients.'
      }
    },
    {
      label: 'Choose the best answer.',
      type: 'mcq',
      id: '500',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Bread,wheat and potato are rich in _______________ .',
            options: 'carbohydrate, protein, roughage, fats'
          },
          {
            qText: 'A balanced diet contains _______________ .',
            options: `Carbohydrates and vitamins
Proteins and fats and minerals
Fibre and water
* All`
          },
          {
            qText: 'The Vitamin present in carrot is _______________ .',
            options: 'Vitamin-A , Vitamin-D, Vitamin-E, Vitamin-K '
          },
          {
            qText: 'Which of these things are BAD for you?',
            options:
              'Eating lot of fat food items,Washing vegetables before cutting them,  Eating green vegetables, Eating lot of pulses '
          },
          {
            qText: 'What is the food that we eat in the morning called?',
            options: 'Breakfast, Lunch, Dinner'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `Food rich in proteins are called *body-building* food.
Food helps in proper *functioning* of our body.
A *balanced diet* is necessary for the proper growth and development of our body.
Sprouted seeds contain more *proteins*.
*lunch* is the second meal of a day.`
      }
    },
    {
      type: 'match',
      label: 'Match the Following',
      id: '700',
      data: {
        title: 'Match the words with same meaning.',
        fontSize: '1rem',
        text: `Carbohydrates and fats, Energy-giving food
Vitamins,Fights diseases 
Protein,Supports body growth
Minerals,Regulates body functions`
      }
    },
    {
      label: 'Balanced Diet - Reading',
      type: 'passage',
      id: '800',
      data: {
        title: 'Balanced Diet',
        text: `Diet refers to the food we eat. A balanced diet contains all nutrients in the right amounts. It also includes fibre and water. It helps in the growth and development of our body. Fibre is an indigestible food that your body cannot absorb.
A meal is what we eat during a particular time of the day. Breakfast, lunch and dinner are the three main meals we eat every day.
Food habit of people at a place depends on the climate, culture and availability of food. For example, in coastal areas, people eat a lot of sea food. India is a big country with different climate and culture.
South Indians depend on rice, dhal, coconut, jaggery for their food. Hence, they make food like Idly, Sambar and Payasa.
North Indians depend on wheat, onions, milk and curd. Hence, they make foods like Chappathi, Paratha and Lassi.
The amount of food a person needs depends on his age. These needs change with age groups and level of physical activity. Athletes may need more amount of energy during training. Young children should eat a wide variety of food.
Our ancestors ate food that were easily available from nature, which lead to healthy lives.
# Home Garden
Cultivation of crops in a small available place in house-holds is known as Home garden or Kitchen garden or Nutrition garden.
# Advantage of Home Garden
1. Waste water can be reused.
2. It saves our money.
3. We get vegetables which are fresh and high in nutritive value.
4. It can be a good hobby.`
      }
    },
    {
      type: 'match',
      label: 'Match - Time and Meals',
      id: '900',
      data: {
        title: 'Match the time and the meal.',
        text: `6 AM, Tea
8 AM, Breakfast 
1 PM, Lunch
5 PM, Snacks
8 PM, Dinner`
      }
    },
    {
      label: 'Multiple Choice Questions.',
      type: 'mcq',
      id: '1000',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What is indigestible for our body?',
            options: 'fibre, protein, vitamin'
          },
          {
            qText: 'Food habits of the people depends on ___________',
            options: `climate
culture
availability of food
* all of the above`
          },
          {
            qText: 'Which of the following is not an advantage of home garden?',
            options:
              'We can sell our vegetables, We get fresh vegetables, We can reuse waste water, It is a good hobby'
          },
          {
            qText:
              'A _______ diet contains all nutrients in the right amounts.',
            options: 'balanced, light, heavy, lunch'
          },
          {
            qText: 'How many main meals do we eat every day?',
            options: 'three, four, two'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: '1100',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `The amount of food a person needs depends on his age.
Our ancestors ate food that were easily available from nature.
Our ancestors led a healthy life.`
          },
          {
            name: 'False',
            text: `People living in coastal areas, usually don't eat sea food.
Athletes need less amount of energy.`
          }
        ]
      }
    },
    {
      id: 'notes-3',
      label: 'Our Need for Food',
      type: 'passage',
      data: {
        title: 'Our Need for Food',
        text: `# Why do we feel hungry?
Our bodies must work properly. It also provides us with the energy we require to work. When we work a lot and eat less our bodies become exhausted. It makes us very hungry.
# Oilcake
After extracting oil from seeds such as groundnut, sesame, or cottonseed, the fibrous component is pressed into slabs. This is known as oilcake. Ambon is an animal feed made from a fermented mixture of oilcake, jaggery, and coarse grain particles combined with water.
# Animals & Foods
1. Cows eat grass, hay, oilcake, and ambon.
2. Horses consume soaked Bengal gram (harbhara), grass, and hay.
3. In addition to grass, goats and sheep eat the leaves of numerous bushes.
4. Milk is consumed by cats. Birds such as sparrows, doves, and pigeons are also hunted and eaten by them.
5. Dogs will eat chapatis or bhakaris, but meat is their preferred food.
6. Deer, bison, and nilgai eat a wide variety of green grasses, crops, and leaves.
7. Wild animals such as the tiger and lion hunt and eat other animals. When they are starving, they are sometimes driven to enter neighbouring villages. The livestock is then killed and taken away.
8. Foxes have been known to venture into human settlements. They are unable to kill cattle. The majority of their time is spent stealing poultry.
9. Some birds eat grains. Worms are eaten by hens. Crows eat the meat of dead animals. Some birds eat the fruits of trees.
# Plants Need Food Too
1. However, they are unable to travel from one location to another in search of food.
2. Plant roots take up water from the earth. In this water, several soil substances are dissolved. This water reaches the plant's leaves.
3. On the surface of leaves, there are numerous tiny holes. We can't see them with our eyes since they're so small. These pores allow air to penetrate the leaves.
4. As a result, air and water collide in the leaf. Plants use the water and air in their leaves to create their own food with the help of sunlight.`
      }
    },
    {
      id: 'classify-3',
      label: 'Herbivorous Vs Carnivorous',
      type: 'group',
      data: {
        title: 'classify: Herbivorous & Carnivorous',
        types: [
          {
            name: 'Herbivorous',
            text: 'Cow, Horse, Sheep, Deer'
          },
          {
            name: 'Carnivorous',
            text: 'Tiger, Lion, Hyena, Wolf'
          }
        ]
      }
    },
    {
      id: 'match-3',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Cat, Milk
        Lion, Flesh
        Fox, Rabbits
        Horse, Bengal gram
        Cow, Oilcake`
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Food for different living things, is different.
            The entire living world depends on food prepared by plants.
            With the help of sunlight, plants prepare their own food.`
          },
          {
            name: 'False',
            text: `The dog is a herbivore.
            There is no difference in the food habit of a tiger and a vulture.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The main sources of our *food* are plants and animals.
        The *roots* absorb water and minerals from the soil.
        A plant needs *sunlight* to prepare food.
        *Foxes* are unable to kill cattle.
        The process of making food using sunlight, carbon dioxide and water is called *Photosynthesis*.`
      }
    },
    {
      id: 'notes-4',
      label: 'Our diet',
      type: 'passage',
      data: {
        title: 'Our diet',
        text: `1. Every day, we eat some food. We eat between meals. We also have milk, tea, coffee. Our daily diet includes everything we eat and drink.
2. We make a lot of muscular movements when working. This labour is difficult. It's called physical labour. Work makes us hungry.
3. Some tasks can be done while seated. It requires no physical exertion. Such work is called sedentary work.
# Variety in food
1. Rice becomes a key element of the diet of those who live in areas where rice grows abundantly.
2. People in areas where jowar or bajra is a major crop include more ‘bhakari' in their diets.
3. In certain regions, wheat is the major crop. People in those regions eat more chapatis.
4. In the sea, fish are abundant. As a result, the Konkan people consume a lot of fish in their diet.
5. We receive different vegetables and fruits at different times of the year depending on their seasons. As a result, the foods in our diet change as well.
# Watch What We Eat
1. We should eat food made at home.
2. Sprouted pulses, leafy vegetables, buttermilk and yogurt should be included often in our diet.
3. We should avoid products shown in newspapers and TVs. The advertisements are tempting, but it does not mean that they are healthy for our body.`
      }
    },
    {
      id: 'classify-4',
      label: 'Healthy vs Unhealthy',
      type: 'group',
      data: {
        title: 'Classify the following.',
        types: [
          {
            name: 'Healthy',
            text: 'Wheat, Pulses, Sprouts, Vegetables'
          },
          {
            name: 'Unhealthy',
            text: 'White bread, Cookies, Pizza, Potato chips'
          }
        ]
      }
    },
    {
      id: 'classify-5',
      label: 'Physical labour Vs Sedentary work',
      type: 'group',
      data: {
        title: 'Classify the following.',
        types: [
          {
            name: 'Physical labour',
            text: 'Playing kho-kho, Climbing a mountain, Cycling, Sweeping'
          },
          {
            name: 'Sedentary work',
            text: 'Reading book, Drawing, Operating a laptop, Playing carrom'
          }
        ]
      }
    },
    {
      id: 'fillup-4',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      data: {
        text: `Healthy food makes our body *fit*.
        A balanced diet contain all the *nutrients*.
        Work done when sitting is *sedentary* work.
        Oils and fat give us *calories*.
        If our diet is not balanced we may suffer from *diseases*.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-4',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water is the most important part of our diet.
            Deficiency diseases can be prevented by eating a balanced diet.`
          },
          {
            name: 'False',
            text: `Meat alone is sufficient to provide all nutrients for the body.
            People who don't work, won't feel hungry.
            We eat the same kind of food throughout the year.`
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Rice, Odisha
        Wheat, Punjab
        Bhakri, Maharashtra
        Turmeric, Andhra Pradesh
        Pulses, Madhya Pradesh`
      }
    },
    {
      id: 'notes-5',
      label: 'Our Kitchen',
      type: 'passage',
      data: {
        title: 'Our Diet',
        text: `# Inside the Kitchen!
        1. Heating is used to prepare our food.
2. To cook rice, we add water to the rice and bring it to a boil.
3. Puris and pakodas are deep-fried. They are fried in oil or ghee.
4. Idlis and modaks are steamed.
5. Chapatis and bhakaris are roasted.
6. When foods are heated, they become tastier and easier to digest.
# Combustible material
A combustible substance is something that can burn.  Fuel is a combustible substance that can be utilized to generate heat in a convenient manner. Fuels include cooking gas, kerosene, and coal.
# Methods of supplying heat for cooking
1. Some people use kerosene stoves for cooking.
2. Nowadays, hotplates are also used for cooking on electricity. They are very convenient to use.
3. Some people use biogas.
4. Some people use the heat from the sun for cooking. They use the solar cooker.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-5',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `We boil water to kill *bacteria*.
        *cooking* makes food soft, tasty and easy to digest.
        The material that is burnt to produce heat is known as *fuel*.
        Wood and *coal* produces more smoke, while using as a fuel for cooking.
        *utensils* are used for cooking food.`
      }
    },
    {
      id: 'match-5',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Blender, Mixing
        Oven, Heating
        Refrigerator, Cooling
        Electric juicers, Juicing
        Crock pot, Baking`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-6',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The process by which foodstuffs become tastier and easier to digest is *heating*.
        Foods which we eat mostly without cooking are *fruits*.
        A device that uses the energy of direct sunlight to cook, is *Solar cooker*.
        Grilled sandwiches can also be made with the help of *toaster*.`
      }
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
            text: `Most tables have salt and pepper shakers for spicing up food.
            You can use a spatula to flip over your eggs easily.
            Plastic containers are used to store food.`
          },
          {
            name: 'False',
            text: `A pan is used to chop things on so you don't scratch up your kitchen counter.
            Plastic containers are used to cook food.`
          }
        ]
      }
    }
  ]
};
