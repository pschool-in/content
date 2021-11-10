export default {
  label: 'Food - 5',
  id: 'food-5',
  pdf: 'food-5.pdf',
  lockAfter: 4,
  list: [
    {
      id: '100',
      type: 'passage',
      label: 'Spoilage of Food',
      data: {
        title: 'Spoilage of Food',
        text: [
          `Food items like fruits, vegetables, milk and meat will be fresh for very short time. These are called perishable foods and they get spoiled easily. Some food items like rice have long life time but they also decompose. The change in the normal state of the food is called spoilage of food. Spoiled food becomes unsuitable to eat. We can notice such changes from the taste and smell of the spoiled food. Eating spoiled food results in diseases.`,
          `Once the food items are harvested they begin to decompose. Food can be spoiled by factors like air and oxygen, moisture, enzymes, microorganisms, light and temperature.`,
          `1. Air and Oxygen: When oxygen reacts with food contents, it produces changes in the colour and flavour of the food.`,
          `2. Moisture keeps the food fresh. When the moisture is gone, vegetables and fruits shrink. Due to evaporation, moisture loss occurs in foods like meat, fish and cheese.`,
          `3. Enzymes break down the tissues and components of the food in different ways like oxidation, browning and ripening. So the food items decay.`,
          `4. Microorganisms such as fungi, yeast and bacteria can grow well in low temperatures. They multiply in food and spoil them.`,
          `5. Light produces colour changes and also vitamin loss.`,
          `6. Temperature: Sometimes rise in temperature causes food spoilage.`,
          `Spoiled foods are not suitable to eat. They may not be fresh and tasty.`,
          `Sometimes it will be harmful to consume them. Microorganisms present in spoiled foods may cause foodborne diseases like stomach pain, fever, dysentery, vomiting and indigestion.`,
          `While purchasing packed food items, we should check the following details.`,
          `1. Manufactured date`,
          `2. Expiry date`,
          `3. Ingredients`,
          `4. Energy content of the food material.`,
          `# Preservation of Food`,
          `Chemical preservatives are added to stop the growth of micro-organisms in certain food materials. E.g. Sodium benzoate is added with fruits, Sulphur dioxide is added with dry fruits, Vinegar is added with pickles.`,
          `Irradiation is a modern method by which, food is exposed to gamma rays or ultra violet rays to kill the bacteria and the mould. It does not affect the taste of the food or nutritive value of the foods. E.g. Onion, Potatoes.`,
          `# Purpose of Food Preservation`,
          `1. To retain the colour, taste and nutritive value of the food.`,
          `2. To make food available throughout the year.`,
          `3. To prevent the growth of microorganisms like bacteria and fungi in the food items.`,
          `4. To reduce the wastage of food materials.`,
          `5. Preserving food not only protects our health but also makes food available to the people who need it.`
        ]
      }
    },
    {
      label: 'Perishable Food',
      id: '200',
      type: 'group',
      data: {
        title: 'Classify the below as perishable or non-perishable food.',
        types: [
          {
            name: 'Perishable',
            text: 'Fruits, Vegetables, Corn, Meat, Milk'
          },
          {
            name: 'Non-perishable',
            text: 'Salt, Sugar, Wheat, Pulses, Rice, Nuts, Oil'
          }
        ]
      }
    },
    {
      id: '300',
      label: 'Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with the given options.',
        text: `Spoiled foods are *unsuitable (suitable)* to eat.
The change in the normal state of the food is called *spoilage(storage)* of food.
Food products start to decay after *harvesting (cooking)*.
Eating spoiled foods bring *food (air)* borne diseases.
Sometimes we can check spoiled food by *smelling (hearing)*.`
      }
    },
    {
      id: '400',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What are the details that can be found in packed food.',
            options:
              '* Manufactured date, * Expiry date, * Ingredients, * Price'
          },
          {
            qText: 'Which chemical is used to preserve fruits?',
            options:
              'Sodium Benzoate, Sodium Chloride, Copper Benzoate, Sulphur Dioxide'
          },
          {
            qText: 'Which chemical is used to preserve pickles?',
            options:
              'Vinegar, Sodium Benzoate, Sodium Chloride, Copper Benzoate'
          },
          {
            qText: 'Which of the following is not a micro-organism?',
            options: 'enzymes, fungi, yeast, bacteria'
          },
          {
            qText: 'What keeps the food fresh?',
            options: 'moisure, enzyme, light, oxygen'
          },
          {
            qText: 'What rays are used in irradiation process?',
            options: '* gamma rays, x-rays, infra-red rays, * ultra-violet rays'
          }
        ]
      }
    },
    {
      id: '500',
      type: 'passage',
      label: 'Disease',
      data: {
        title: 'Disease',
        text: [
          `A disease is an abnormal condition that affects a living organism. This abnormal condition affects the structure and function of the organism. Diseases may be caused by external factors as well as internal dysfunction. Each disease has symptoms. We come to know about the diseases from their symptoms.`,
          `# Causes of Diseases`,
          `Diseases are caused by microorganisms like bacteria, virus, protozoa and fungi. They are transmitted by insects, and also through contaminated air and water. Some diseases are caused when the function of the organ is affected. In general, causes of diseases can be classified as below.`,
          `1. Metabolic factor. E.g. Diabetes`,
          `2. Genetic factor. E.g. Colour blindness`,
          `3. Microorganisms. E.g. Bacterial diseases`,
          `4. Nutritional factor. E.g. Marasmus`,
          `5. Environmental factor. E.g. Cholera`,
          `# Types of Diseases`,
          `There are four main types of diseases. They are`,
          `1. Infectious diseases are caused by microorganisms which invade our body and multiply inside them. These diseases are spread from one person to another. E.g. Common cold.`,
          `2. Hereditary diseases occur due to abnormalities in the gene. These diseases are passed from parents to children. E.g. Heart disease.`,
          `3. Physiological diseases are caused due to malfunction of the body organs. E.g. Asthma.`,
          `4. Deficiency diseases are caused due to the deficiency in one or more of the nutrients. Eg. Anaemia`,
          `# Protein deficiency diseases`,
          `Marasmus and Kwashiorkor are the protein deficiency diseases. In marasmus, the child loses weight and it will appear as though bones are covered by skin. In Kwashiorkor, the child develops an enlarged belly with swollen face and feet. By eating protein rich foods like egg, milk, fish and green leafy vegetables we can avoid protein deficiency diseases. Kwashiorkor disease is found more among people in developing countries. It is because their diet is high in carbohydrates which is cheaper and low in proteins. As they live below poverty line, they couldn’t afford protein rich food which is costly.`,
          `# Vitamin deficiency diseases`,
          `There are different types of vitamins, and they are named with letters.`,
          `1. Vitamin-A is present in egg, papaya, milk and carrot. Lack of vitamin-A may cause Night-blindness.`,
          `2. Vitamin-B is present cereals and green vegetables. Lack of vitamin-B may cause Beri-beri.`,
          `3. Vitamin-C is abundent in lemon, orange and tomato. Lack of vitamin-C may cause Scurvy.`,
          `4. Sun is the natural source of vitamin-D. It is also present in fish, egg and milk. Lack of vitamin-D may cause Rickets.`,
          `# Mineral deficiency diseases`,
          `Iron and Iodine are common minerals that we need for good health. Cashewnuts, dates, spinach and lentils are rich in iron. Lack of iron may cause Anaemia. Iodine is present in vegetables and iodized salt.`
        ]
      }
    },
    {
      id: '600',
      type: 'match',
      label: 'Nutrients and Sources',
      data: {
        title: 'Match the Nutrients with its Sources.',
        text: `Vitamin-C, Lemon
Vitamin-B, Cereals
Vitamin-A, Milk
Vitamin-D, Sunlight
Iron, Dates
Protein, Fish`
      }
    },
    {
      id: '700',
      type: 'match',
      label: 'Nutrients and Diseases',
      data: {
        title: 'Match the Nutrients with its deficiency Diseases.',
        text: `Vitamin-C, Scurvy
Vitamin-B, Beri-beri
Vitamin-A, Night-blindness
Vitamin-D, Rickets
Iron, Anaemia
Protein, Marasmus`
      }
    },
    {
      id: '800',
      type: 'match',
      label: 'Disease Factors',
      data: {
        title: 'Match the different disease factors with the disease.',
        text: `Metabolic, Diabetes
Genetic, Colour blindness
Microorganisms, Typhoid
Nutritional, Marasmus
Environmental, Cholera`
      }
    },
    {
      id: '900',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The biotic factor which spoils the food item is ________.',
            options: 'bacteria, drying, temperature, humidity'
          },
          {
            qText: 'Grains are preserved by______.',
            options: 'drying, freezing, adding sugar, adding salt'
          },
          {
            qText: 'Anaemia is the disease which occurs due to lack of_______.',
            options: 'Iron, Vitamin-A, Vitamin-D, Vitamin-B'
          },
          {
            qText: 'Storage of Excess fat in the body is known as',
            options: 'Obesity, Headache, Fever, Stomach pain'
          },
          {
            qText: 'Carbohydrates are rich in',
            options: 'Rice, Fruits, Ghee, Oil'
          }
        ]
      }
    },
    {
      id: '1000',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as True and False',
        types: [
          {
            name: 'True',
            text: `Vinegar is added as Preservative for Pickles.
Growing children need more proteins in their food.`
          },
          {
            name: 'False',
            text: `In case of Gas leakage, we can continue to use electric appliances.
Irradiation affects the taste of the food materials.
Deficiency due to iodine is called as beriberi.`
          }
        ]
      }
    },
    {
      id: '1100',
      label: 'Fill in the Blanks',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `Night Blindness is caused by the lack of *vitamin-A*.
Marasmus is a *protein* deficiency disease.
Bad smell from the food item is due to *spoilage*.
Humidity in air is one of the *important* factor, which spoils food.
Using low quality gas tubes in the gas stove may lead to *gas* leakage.`
      }
    },
    {
      label: 'Food for all - Reading',
      type: 'passage',
      id: 'food-for-all',
      data: {
        title: 'Food for all',
        text: `# Agriculture
        Sixty percent of land in our country is used for agriculture. For agriculture, there are two main seasons in our country. The season from June to October is called the kharif season. The season from October to March is rabi season. In the kharif season, the crops are watered by rain. In rabi season, rainwater that has soaked into the soil, the retreating monsoons and dew are the sources of water for the crops.
        
        # Methods of Irrigation
        Water from rivers, lakes and wells is used for irrigation in addition to rainwater. Drip irrigation and sprinkle irrigation are two of these modern methods. The drip irrigation method makes use of pipes with holes and delivers water directly to the roots of plants. Sprinkle irrigation makes use of sprinklers of different sizes that spray water directly on plants.
        
        # Fertilizers and Pesticides
        Fertilizers provide the required nutritive substances to the crop. There are two kinds of fertilizers, natural and chemical. Natural fertilizers are obtained from materials available in nature like green waste and animal dung. Chemical fertilizers are mixtures of different chemical substances in specific proportions, useful for agriculture. Chemical fertilizers came to be used for quicker growth and higher yields. Overuse of chemical fertilizers lowers the fertility of the soil and reduces its productivity.
        
        It is important to avoid excessive use of fertilizers to protect the crops as overuse can damage the crops in fields. It is also important to store the harvested crop safely. Stored grains can get damaged by fungi and insects. To prevent such damage, neem leaves are mixed with the gains.
        
        # Food storage and conservation of environment
        
        1. Green revolution- The  increase in food grain production (such as rice and wheat) due to the introduction of high-yielding varieties, the use of pesticides, and improved management techniques.
        2. In 2013, India enacted a food security law that made it possible to fight against hunger and malnutrition.
        3. Various agriculture assistance programmes are organised for farmers to inform them about the latest technology, irrigation facilities, pesticides, fertilizers etc.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Improved seeds* can resist pest attacks.
        Crops were traditionally watered through *canal*.
        *Sprinkle* irrigation is a process that sprays water directly on plants.
        Natural and *chemical* are two kinds of fertilizers.
        *Overwatering* makes the land saline and fallow.`
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: '601',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The process through which the water and nutrients are directly delivered to the plant's roots. *Drip irrigation*
        The great increase in the production of food grains. *Green revolution*
        Another name for natural fertilizers. *Manures*
        Crops are grown from March to June. *Summer crops*`
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: '602',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `A Beverage crop- *MAIZE*
        A crop that grows in the temperate zone- *WHEAT*
        A crop which is grown extensively in Coimbatore- *COTTON*
        The Oldest method of irrigation- *WELL*
        Rearing of animals- *MIXED FARMING*`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Thanjavur is known as the rice bowl of Tamil Nadu.
            Agriculture led to the development of human civilization.
            Canal irrigation is the most important form of irrigation in India.`
          },
          {
            name: 'False',
            text: `Two third of our nation's income comes from agriculture.
            Japan is the land of farmers.`
          }
        ]
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
            qText: ' Which is called the golden fibre?',
            options: 'Jute, Cotton, Silk'
          },
          {
            qText: 'Which of these is not a rabi crop?',
            options: 'Maize, Wheat, Barley'
          },
          {
            qText: 'Farming that relies on natural material?',
            options: 'Organic, Home, Commercial'
          },
          {
            qText: 'Which state is the chief producer of tea in India?',
            options: 'Assam, Kerala, Karnataka'
          },
          {
            qText: 'The person who is engaged in agriculture.',
            options: 'Farmer, Doctor, Teacher'
          }
        ]
      }
    },
    {
      label: 'Food preservation - Reading',
      type: 'passage',
      id: 'preservation-passage',
      data: {
        title: 'Preserving Food',
        text: `# Food Preservation

        1. In the winter season, to keep food longer foodstuffs are kept in the refrigerator.
        2. Grains should be dried in sun before storing them
        3. We should boil milk, curries and vegetables to prevent them from spoiling.
        4. We should keep the food away from mice, rats and other insects.
        
        Microorganisms are present all around us. If microorganisms grow, they spoil the food. The nutrition value of such food is decreased. 
        Such food can cause diseases.
        
        # Methods of Preservation
        
        Drying- It is the process in which foodstuffs are dried to remove the water content.
        
        Cooling- It is the process in which the foodstuffs are kept in the refrigerator. Through this process, micro-organisms do not get any warmth so they are unable to grow.
        
        Boiling- In this process the foodstuffs are boiled to destroy microorganisms.
        
        Storing in airtight containers- In this process the foodstuffs are placed in airtight containers to ensure that water or air are not entered the foodstuff.
        `
      }
    },
    {
      label: 'True or False',
      id: 'true-false-3',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `We make efforts to preserve food to prevent them from getting spoiled.
            Spices have a strong taste and are obtained from plants.`
          },
          {
            name: 'False',
            text: `Foodstuffs get warmth when they are stored in the refrigerator.
            The process through which water content is lost is cooling.
            Milk products are made and preserved for a whole year.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Microorganisms grow fast in the presence of air and *moisture*.
        A *fungus* is a type of micro-organism.
        Mango pulp and *milk* are foodstuffs that spoil quickly.
        Food spoiled from micro-organisms can cause *diseases*.
        *Airtight cans* ensure that water or air will not enter the foodstuff.`
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop-21 ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Food is dried to prevent water content. *Drying*
        Food is rapidly frozen. *Freezing*
        Food is placed in an airtight container. *Canning*
        Food is stored in an airtight container under a vacuum. *Vacuum packing*
        Soaking food in saltwater, vinegar or oil. *Pickling*`
      }
    },
    {
      label: 'Food Spoilage- Reading',
      type: 'passage',
      id: 'food-spoilage',
      data: {
        title: 'Food Spoilage',
        text: `Perishable foods get spoiled easily. The change in the normal state of food is called spoilage of food.

        # Why food gets spoiled?
        
        1. Air, oxygen and moisture can cause spoilage of food.
        2. When foodstuffs are exposed to warmth it leads to the growth of microorganisms. Microorganisms multiply in food and spoil them.
        3. Light produces colour changes and also vitamin loss. 
        4. Enzymes are chemicals that are present in all foodstuffs. They speed up chemical changes that result in loss of flavour, colour and texture.
        
        # Purpose of food preservation
        
        1. To keep the food's colour, flavour, and nutritional value.
        2. To ensure that food is available all year.
        3. To prevent the growth of germs such as bacteria and fungi in food.
        4. To reduce the wastage of food.
        5. Food preservation not only protects our health but also ensures that food is available to those in need.
        
        # Causes of diseases
        
        Microorganisms such as bacteria, viruses, protozoa, and fungi cause diseases. Insects carry them, and they can also be spread by contaminated air and water. When an organ's function is disturbed, it can lead to disease.
        
        # Obesity
        
        Obesity and overweight are both described as abnormal or excessive fat in the body that can harm one's health. Obesity is caused by an excess of calories consumed, a lack of physical activity, and genetic factors.
        
        To avoid obesity and overweight, you must take the following steps.
        
        1. Limit your intake of fast food, fried foods, and high-fat meat.
        
        2. Include fruits and vegetables, legumes, whole grains, and nuts in your daily diet.
        
        3. Engage in regular physical activity.
        
        4. Make sure you get enough sleep.
        
        # Types of diseases
        
        Infectious disorders are caused by bacteria that enter and multiply within our bodies. Such diseases are passed from one person to the next.
        
        Hereditary disorders are caused by genetic abnormalities. These diseases are passed from one generation to the next.
        
        Physiological diseases are diseases that are caused by the malfunction of body organs.
        
        Maintaining good health requires a diet that provides all important elements in the proper proportions. Deficiencies in one or more nutrients produce a variety of diseases. These are called deficiency diseases.
        
        In marasmus, the child loses weight and the bones appear to be covered by skin. In Kwashiorkor, the child acquires a big belly, swollen face and feet.
        
        Vitamin and mineral deficiencies can cause a variety of diseases. We can avoid these diseases by consuming vitamin and mineral-rich foods.
        
        The food pyramid was created to encourage people to eat healthily. The requirements for certain nutrients vary from person to person depending on our work, age, and sex.
        
        # Kitchen safety
        
        1. The kitchen is a necessary part of our houses. The kitchen's equipment and surroundings maybe a little dangerous. As a result, we must take precautions and care.
        2. Gas easily catches fire. There could be serious consequences if gas is released. As a result, we must exercise care when handling cylinders.
        3. Wet hands should not be used to operate electrical appliances, as this might produce electric shocks.
        4. Keep flammable materials such as kerosene and gasoline away from stoves.
        5. Cover the victim with a heavy blanket or carpet if the person's clothes catch fire.
        6. If kerosene or oil catches fire, put it out with sand.
        7. If solid items, such as wood, catch fire, put it out with water.
        8. If an electrical appliance catches fire, turn off the power and unplug the appliances.
        9. To put out the fire, use the correct fire extinguishers.
        10. In the event of small burns, the affected area should be held under cool running water for a few minutes before receiving medical attention.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '1500',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Obesity is caused by *excessive fat* in the body.
        Grains are preserved by *drying*.
        In *kwashiorkor*, the child develops an enlarged belly.
        *Anaemia* is caused due to lack of iron.
        *Irradiation* is a method by which food is exposed to UV rays to kill bacteria.`
      }
    },
    {
      id: '1600',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Carbohydrates, Rice
        Micro-organisms, Bacterial disease
        Milk, Boiling
        Beri Beri, Cereals
        Goitre, Iodine`,
        title: 'Match the following'
      }
    },
    {
      label: 'Determine the Diseases',
      type: 'matchByDragDrop',
      id: '1900',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Diseases caused due to abnormalities in genes. *Hereditary diseases*
        Diseases which are caused due to a lack of essential nutrients in the body. *Deficiency diseases*
        Diseases which are caused due to micro-organisms. *Infectious diseases*
        Diseases which are caused due to the malfunction of the body organs. *Physiological diseases*`
      }
    },
    {
      label: 'Choose the best Answer',
      id: '1700',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'In case of a minor burn, what will you do?',
            options:
              'Expose the burnt area to cool running water, Apply warmth, Rub on the burnt skin'
          },
          {
            qText: 'Which of the statement is false?',
            options:
              'Use low quality gas stoves, tubes and regulators, Always use I.S.I standard gas, Keep the doors open to ensure ventilation'
          },
          {
            qText: 'In which position we should keep the cylinder?',
            options: 'Vertical position, Inverted position, Horizontal position'
          },
          {
            qText: 'Which of the following statement is true?',
            options:
              'Turn the knob after lighting the lighter, Turn on the electrical appliances in the kitchen, Keep the cylinder in an inverted position'
          }
        ]
      }
    }
  ]
};
