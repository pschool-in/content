export default {
  id: 'people-jobs-4',
  label: 'Types of Jobs',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Different Types of Jobs',
        text: `Different people work to fulfil our various needs. We need 
1. teachers to guide us 
2. a doctor if we fall ill
3. a driver to take us to school
4. a shopkeeper to sell goods
And we have many more requirements. We need 
1. clothes to wear
2. furniture to sit
3. vessels to cook
Different people has different jobs. Jobs are also known as occupations.
#Types of occupations
There are various types of occupations and can be divided into four main groups
1. Nature based occupations. Eg: agriculture, fishing
2. Manufacture. Eg: making automobiles, pots, cloth
3. Trade. Eg: selling farm produce, shopkeeping
4. Providing Service. Eg: teacher, doctor, bank staff`
      }
    },
    {
      id: 'match',
      label: 'Match - Job Type',
      type: 'match',
      data: [
        `Nature, Fishing
Manufacture, Cooking Vessels
Trade, Super Market
Doctor, Service`,

        `Service, Police
Nature, Agriculture
Trade, Grocery Store
Manufacture, Car`
      ]
    },
    {
      label: 'Agriculture - Notes',
      type: 'passage',
      id: 'agriculture-notes',
      data: {
        title: 'Agriculture',
        text: `Agriculture is the most important occupation in our country. Everyone in the country gets food because farmers work in the fields. 
Apart from the grains, vegetables and fruits, we also get other products from farming. For example, we get sugar from sugarcane. Textiles made from cotton are used to make garments.
Farming of fruits, flowers and medicinal plants is also carried out on a large scale.
# Agro-based occupations
Agricultural products can be used to undertake many other occupations. Fodder is created in fields. It is used to feed cows, buffaloes and sheep. Thus, as we cultivate the land, we can raise these animals also. We obtain milk, meat and leather from animals. Grain is grown in fields. It can be used to feed chickens.
# Do you know ?
In ancient times, man did not know about farming. He would wander around in search of food. He used to hunt. He ate fruits and tubers. When man learnt how to grow crops, he could get food in one place. There was no need to wander about for food any more. He began to have free time. In that free time, many discoveries were made and many industries were developed.`
      }
    },

    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `In ancient times, human beings wandered from place to place in search of food.
Agriculture is the major occupation in India.
Agriculture is a natural occupation.`
          },
          {
            name: 'False',
            text: `Farmers produce only grains, vegetables and fruits.
Human beings were farming from the beginning.`
          }
        ]
      }
    },
    {
      label: 'Industry - Notes',
      type: 'passage',
      id: 'industry-notes',
      data: {
        title: 'Industry',
        text: `In industries, raw materials are obtained and then they are processed to make new finished products. A potter making pots is a type of industry.
In the pottery industry, clay is the raw material, pots are the finished product. The process includes whatever is done to make the finished product (pots) from the raw material (clay). Such a process is called 'industry'.
Some factories are big. Many people work there with the help of machines. Your school bus, bicycle and paper for your textbooks and notebooks are all products made in factories.
Man has developed many occupations. However, the materials he needs for these occupations are obtained from Nature. Nature takes care of the needs of all living beings. We must respect Nature.`
      }
    },
    {
      id: 'match-raw-material',
      label: 'Raw Material and Finished Product',
      type: 'match',
      data: {
        text: `clay, pot
sugarcane, sugar
cotton, dress
wood, table
metal, bike`
      }
    },
    {
      label: 'Raw materials Vs Finished products',
      id: 'classify-2',
      type: 'group',
      data: {
        types: [
          {
            name: 'Raw materials',
            text: 'Sugarcane, Cotton, Wood, Metal, Clay'
          },
          {
            name: 'Finished products',
            text: 'Sugar, Dress, Pot, Table, Motor Bike'
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'habitat-mcq',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Occupations are primarily divided into _______ types.',
            options: 'four, three, two, five'
          },
          {
            qText: 'Who among the following is a service provider?',
            options: 'Driver, Potter, Fisherman, Carpenter'
          },
          {
            qText: 'Who among the following is not a service provider?',
            options: 'Farmer, Nurse, Doctor, Teacher'
          },
          {
            qText: 'Which of the following is not true?',
            options: `An industry is always a huge place with hundreds of people working.
We get all raw materials from the nature.
Bicycle, car, bus are all produced from industry.
Industry gives us a product using the raw materials.`
          },
          {
            qText: 'We get the products we need from a ______.',
            options: 'trader, service provider, manufacturer'
          }
        ]
      }
    }
  ]
};
