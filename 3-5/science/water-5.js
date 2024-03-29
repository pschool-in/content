export default {
  label: 'Water Management',
  id: 'water-5',
  pdf: 'water-5.pdf',
  lockAfter: 3,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Water Management',
      data: {
        title: 'Water',
        text: [
          `About 97% of total water available on the earth is too salty to be used for drinking and irrigation. The rest 3% of water is fresh water.
Agriculture is the source of our living. It uses most of the world's freshwater resources. It consumes around 70% of the available fresh water.
Water management is the activity of planning, developing and managing the optimum use of water resources. Nowadays we don't get enough rainfall and except few, most of the rivers are drained. Due to recent changes in the climate, we don't have water in lakes and ponds. People in many countries suffer without water even for their basic needs. So, we need to manage the available water.
# Rain Water Harvesting
The process of collecting rainwater from the rooftop of the buildings is called rainwater harvesting. In this system, rainwater is stored in a storage tank for later use. Rainwater available in the open spaces around the buildings may also be recharged into the ground. It is another method of rainwater harvesting.
# Advantages
1. Rainwater harvesting can reduce flooding in the cities.
2. Rainwater harvesting can reduce topsoil loss.
3. Ground water level can be increased.
4. Ground water can be conserved.
5. It can improve plant growth.
# Farm Ponds
A farm pond is a structure dug out on the Earth. It is usually square or rectangular. Rainwater is stored in it for irrigation purposes. It is surrounded by a small bund, which prevents erosion on the banks of the pond. The size and depth of the pond depend on the type of soil, the water requirements of the farmer, its uses and the cost of excavation. Water is conveyed to the fields manually, by pumping, or by both.
# Waste Water Management
Used water from any combination of activities such as domestic (houses), industrial, commercial, and agricultural is called wastewater. This water has been used for laundry, bathing, dishwashing, toilets and industrial purposes. Wastewater also includes rainwater that has accumulated pollutants as it runs into the oceans, lakes and rivers. Pollutants are unwanted chemicals or materials that contaminate water. The goal of wastewater management is to clean and protect water so that it can be reused. It also must be clean before it flows into oceans, lakes and rivers.
# Waste Water Treatment
Generally, wastewater is treated by physical, chemical and biological processes using filtration, sedimentation, and adding cow dung powder and bacteria. This method is followed in industries.
# Advantages
1. Wastewater treatment ensures that the environment is clean.
2. There is no water pollution.
3. It prevents waterborne diseases.
4. It ensures that there is adequate water for irrigation.
# Desalination of Sea Water
Desalination is an artificial process of converting saline water (sea water) into fresh water. The common desalination processes are:
1. Distillation
2. Reverse Osmosis
The process in which both evaporation and condensation go side by side is called distillation. Reverse osmosis is a process of forcing water under pressure through a semi-permeable membrane. Tiny pores in the membrane allow water to pass but exclude most salts and minerals. The reverse osmosis process helps to solve the water scarcity problem.
# Water Pollution
Contamination of water bodies by human activities is called water pollution. Our water resources (pond, lake, river, canal and well) are polluted by sanitary water, industrial wastes, insecticides, fertilizers, sewages, synthetic detergents, chemical fertilizers, oil, heavy metals and radioactive wastes. These unwanted and harmful substances that pollute water are called water pollutants.
The major sources of water pollution are industrial waste, sewage, domestic waste, chemical fertilizers and insecticides, synthetic detergents and oil spills.
# Industrial Waste
The discharge of untreated industrial wastes from the industries into rivers and lakes is one of the main causes of water pollution. Industrial wastes contain harmful substances such as acids, alkalis etc. Chemicals like Arsenic, Lead, Mercury and Cadmium are released by the industries and it leads to toxicity in plants and animals.
# Sewage
The dumping of sewage into rivers and lakes is the second major cause of water pollution in big cities.
# Domestic Waste
Food waste, soaps and detergents, garbage, wrappers, plastics and other materials carried by the flowing water pollute the water bodies.
# Chemical Fertilizers and Insecticides
The excess use of fertilizers and pesticides causes water pollution. Because these chemicals are washed into the rivers and lakes with rainwater, they pollute the soil and underground water. Pesticides like DDT (Dichloro Diphenyl Trichloroethane) enter the bodies of aquatic animals and reach the human body by way of the food chain.
# Synthetic Detergents
Excess use of synthetic detergents for washing purposes produces foam and they pollute the water.
#Oil Spill
Oil leakages on the surface of the sea affect the marine organisms.
# Prevention of Water Pollution
1. Plastic waste, food materials and vegetables should not be thrown into open drains.
2. Proper sewage treatment and management should be implemented.
3. Excess use of fertilizers and pesticides should be avoided on agricultural land.
# Waterborne Diseases
Illness caused by the micro-organisms present in untreated or contaminated water is called waterborne diseases. They are responsible for morbidity and mortality in all age groups, particularly among children under 5 years of age. It is believed that 80% of all diseases in the world are caused by inadequate sanitation and polluted water. Poverty, illiteracy, overcrowding and low health services are also directly or indirectly responsible for the prevalence of these diseases.
Diarrhea, dysentery, typhoid and cholera are some of the common waterborne diseases. They are caused by micro-organisms like bacteria and viruses. Some of them are spread by mosquitoes.
Aedes mosquito breeds in stagnant water and it causes Dengue fever. Similarly, pigs feed in the stagnant sewage water. The pigs infected by the virus spread Swine flu.
# Prevention of Waterborne Diseases
1. Good personal hygiene should be practiced and basic sanitation should be improved.
2. Chlorinated and boiled water should be used for drinking.
3. Drink boiled or pasteurized milk.
4. Dispose of infectious wastes properly.`
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which of the following microorganisms causes water borne diseases?',
            options: 'Bacteria, Virus, protozoa,*All'
          },
          {
            qText: '________ water is free from suspended impurities.',
            options: 'River, Underground, Sea, Well'
          },
          {
            qText: '________ of water is in oceans and seas',
            options: '97%, 87%, 47%, 77%'
          },
          {
            qText:
              '__________ is an artificial process of converting seawater into freshwater',
            options: 'Desalination, Decantation, Distillation, Reverse Osmosis'
          },
          {
            qText:
              'Which of the following are advantages of rainwater harvesting?',
            options: `* Rainwater harvesting can reduce flooding in the cities.
* Rainwater harvesting can reduce topsoil loss.
* Groundwater level can be increased.`
          },
          {
            qText: 'Which of the following are sources of wastewater?',
            options: '* houses, * industries, * agriculture'
          },
          {
            qText: 'Which of the following is not a desalination process?',
            options: 'Filtration, Distillation, Reverse Osmosis'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks - Water',
      type: 'matchByDragDrop',
      data: {
        fontSize: '1rem',
        text: `The accumulated underground water comes out in the form of *springs*.
The process of changing water into water vapor by the heat of the Sun is called *evaporation*.
Rainwater forms *streams* which join together to form rivers.
The process of collecting and storing rainwater is called *rainwater harvesting*.
Cholera is caused by *bacteria*.`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match the Following',
      data: {
        title: 'Match the following.',
        text: `Leakage of oil, Pollution
Reservoir, Man-made lake
Condensation, Cloud
Rainwater harvesting, Save water
Swine Flu, Influenza virus`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Due to recent changes in the *climate (weather)* we don't have water in lakes and ponds.
Rainwater *harvesting (ploughing)* can reduce flooding in the cities.
Wastewater treatment ensures that the *environment (atmosphere) * is clean.
Desalination is *an artificial(a natural)* process of converting saline water (sea water) into fresh water.
The discharge of *untreated(treated)* industrial wastes from the industries into rivers is the main cause of water pollution.
Toxic means *poison (unhealthy)*.
Waterborne diseases are caused by *micro (macro)* organisms.`
      }
    },
    {
      label: 'Good Vs Bad',
      type: 'classifySentence',
      id: 'good-bad',
      data: {
        title: 'Classify the below sentence as Good or Bad.',
        types: [
          {
            name: 'Good',
            text: `Proper rainwater harvesting is done in buildings.
Drink boiled water.`
          },
          {
            name: 'Bad',
            text: `Discharge untreated water from the industry.
Increase the use of plastics.
Allow mosquitoes to live in our surroundings.`
          }
        ]
      }
    },
    {
      label: 'Water- Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Water ',
        text: `# Pollution of water
Water is polluted when other substances get mixed in it. Some float on its surface while some dissolve in it. This makes the water unfit and unhealthy for drinking.
# Disposal of wastewater
Wastewater is impure water and thus is polluted. Sewage water carries microbes that spread diseases. Wastewater from industries can also be poisonous. If we mix this wastewater into our water sources like oceans, rivers, and seas, then it will be a big problem for us.
This is why all industries must treat the wastewater before releasing it. Similarly, sewage is also purified before releasing the water into a water body. Likewise, water is purified before being supplied across the town.
# Mineral water
It is conveniently available in general stores and stations. The bottles are packed and sealed. We should always check the date of sealing and the date of expiry printed on the neck of the bottle before buying it.
Checking for dates is important for not just mineral water bottles but for other packed edibles like food and medicines as well.
# Famine
Places with little or no rainfall face scarcity of water, which further leads to drought. 
When there is no water to drink, bathe, cook and for agriculture, this condition is called famine.
The government moves people from the affected areas to a safer place, temporarily.
# Do you know?
1. Air and water are mixed with the help of pumps. This leads to the dissolution of oxygen in the water. The process is called oxygenation.
2. In chlorination, chlorine is mixed in water to kill the germs present in it.`
      }
    },
    {
      label: 'Fill by drag',
      type: 'matchByDragDrop',
      id: 'fillup-3',
      data: {
        text: `*Mineral* water is available in sealed bottles.
*Sewage* water is polluted water.
*Wastewater* should be treated before merging with rivers.
*Oxygenation* means mixing oxygen and water through pumps.
*Famine* is when there's no water left.
*Flood* is the excess flow of water.`
      }
    },
    {
      id: 'match-3',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Mineral water, General store
Sewage, Wastewater
Famine, Scarcity
Flood, Excess water
Pollution, Impure water`,
        title: 'Match the babies'
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
            text: `We must not waste water at any cost.
Droughts lead to scarcity of water.
Famine is a natural disaster.
We cannot consume polluted water.`
          },
          {
            name: 'False',
            text: `Wastewater is directly disposed into rivers and seas.
Water pollution refers to the purification of water.
We should ignore the manufacture and expiry date in mineral water bottles.`
          }
        ]
      }
    }
    /*
{
id: 'wordsearch',
type: 'wordsearch',
label: 'WordSearch',
data: {
title: 'Find the given words from the table.',
pageBreakAfter: true,
words: [
{
word: ['P', 'O', 'L', 'L', 'U', 'T', 'I', 'O', 'N'],
marker: [9, 0, 1, 8]
},
{
word: ['F', 'A', 'M', 'I', 'N', 'E'],
marker: [0, 6, 5, 6]
},
{
word: ['S', 'E', 'W', 'A', 'G', 'E'],
marker: [0, 0, 5, 5]
},
{
word: ['D', 'R', 'O', 'U', 'G', 'H', 'T'],
marker: [9, 3, 9, 9]
},
{
word: ['R', 'A', 'I', 'N'],
marker: [7, 6, 7, 9]
},
{
word: ['B', 'O', 'T', 'T', 'L', 'E'],
marker: [2, 0, 7, 0]
}
],
table: [
['S', 'Y', 'B', 'O', 'T', 'T', 'L', 'E', 'Y', 'P'],
['X', 'E', 'J', 'U', 'S', 'V', 'N', 'T', 'O', 'F'],
['A', 'D', 'W', 'Y', 'C', 'K', 'A', 'L', 'G', 'I'],
['C', 'S', 'A', 'A', 'Y', 'H', 'L', 'E', 'J', 'D'],
['F', 'V', 'E', 'P', 'G', 'U', 'K', 'F', 'S', 'R'],
['S', 'Y', 'R', 'F', 'T', 'E', 'L', 'H', 'D', 'O'],
['F', 'A', 'M', 'I', 'N', 'E', 'Z', 'R', 'K', 'U'],
['T', 'Y', 'O', 'W', 'R', 'Y', 'V', 'A', 'P', 'G'],
['I', 'N', 'W', 'A', 'M', 'Z', 'Z', 'I', 'X', 'H'],
['M', 'Z', 'G', 'P', 'M', 'A', 'O', 'N', 'D', 'T']
],
lang: 'en',
showWords: true
}
},
{
id: 'crossword',
type: 'crossword',
label: 'Crossword',
data: {
title: 'Solve the crossword. Please click on a cell to view the hint.',
words: [
{
word: 'pollution',
marker: {
x: 0,
y: 7
},
hint: 'when water is contaminated by other substances.',
direction: 'across'
},
{
word: 'drought',
marker: {
x: 0,
y: 2
},
hint: "when there's a scarcity of water.",
direction: 'across'
},
{
word: 'flood',
marker: {
x: 2,
y: 0
},
hint: "when excess water from rivers comes to people's property.",
direction: 'down'
},
{
word: 'famine',
marker: {
x: 2,
y: 0
},
hint: "when there's no water available for anything.",
direction: 'across'
},
{
word: 'sewage',
marker: {
x: 8,
y: 1
},
hint: 'carries waste water.',
direction: 'down'
}
],
table: [
['', '', 'F', 'A', 'M', 'I', 'N', 'E', ''],
['', '', 'L', '', '', '', '', '', 'S'],
['D', 'R', 'O', 'U', 'G', 'H', 'T', '', 'E'],
['', '', 'O', '', '', '', '', '', 'W'],
['', '', 'D', '', '', '', '', '', 'A'],
['', '', '', '', '', '', '', '', 'G'],
['', '', '', '', '', '', '', '', 'E'],
['P', 'O', 'L', 'L', 'U', 'T', 'I', 'O', 'N']
],
lang: 'en'
}
}*/
  ]
};
