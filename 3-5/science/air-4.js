export default {
  id: 'air-4',
  label: 'Air We Breathe',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      label: 'Air Atmosphere - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Atmosphere',
        text: `The earth we live on is round in shape. There exists a blanket of air surrounding the earth. This blanket of air is known as the atmosphere. The atmosphere is as high as 50km.
As we go farther from the Earth, the layer of air becomes thin. The air at greater heights is rarer and the layers of air are also not held close together.
Air plays a role in burning. The component of air that helps in burning is a gas called oxygen. Oxygen is also used for respiration by us. Another component of air is carbon dioxide which is used by plants to make food. However, the largest component in air is nitrogen. Air has several gases mixed in it therefore, air is called a mixture of gases.
Some fuels like coal, petrol and diesel give out smoke while burning. This mixes with air and pollutes it.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Nitrogen, 78%
Oxygen, 21%
Argon, 0.07%
Carbon dioxide, 0.03%
Other gases, small quantities`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup',
      label: 'Gas in Air - Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `About *78% (97%)* of air is made up of nitrogen.
About *21% (50%)* of air is made up of oxygen.
As we go higher from the surface of the earth, the air in the atmosphere becomes *rarer (denser)*.
*Oxygen (carbon dioxide)* is required for burning.
Plants use *carbon dioxide (oxygen)* to make food. 
The fizzy bubbles in soft drinks are due to the presence of *carbon dioxide (nitrogen)*.`
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
            text: `Plants need carbon dioxide to prepare food.
Burning fossil fuels pollutes the air.
Oxygen is required to produce energy to do work.`
          },
          {
            name: 'False',
            text: `We exhale oxygen.
We inhale carbon dioxide.
At heights, air is denser.`
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one-2',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        text: `biosphere, atmosphere, stratosphere
xenon, oxygen, nitrogen, carbon dioxide`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'drag-drop-3',
      data: {
        text: `Burning of fossil fuels releases smoke, which may lead to ___________.| AIR POLLUTION| A__ P___U__O_
The layer of atmosphere that protects us from UV rays is called __________.| OZONE| _Z_N_
The largest component of air is ___________.|NITROGEN|N___O__N
_____ is a mixture of several gases.|AIR| _I_`
      }
    },
    {
      label: 'Atmosphere - Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The layers of air in the atmosphere close to the earth are pressed *closer* to each other while the upper layers are rarer.
There is *air* even in an empty container.
The air at a greater height from the earth is *rarer* than the air nearer to the earth.
If all the air were divided into five parts, the oxygen in the air would equal *one* part.
There is air till a height of about *50*km from the earth.`
      }
    },
    {
      label: 'Choose the best Answer - Air',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Air is _________ than water',
            options: 'lighter, heavier, denser, rarer'
          },
          {
            qText:
              'As we go farther from the earth, the layers of air become ________.',
            options: 'thinner, thicker, lighter'
          },
          {
            qText: 'The gas that fizzes out of soda water is _________.',
            options: 'carbon dioxide, oxygen, nitrogen'
          },
          {
            qText: 'Water is present in the air in the form of a ______.',
            options: 'gas, vapor, liquid'
          }
        ]
      }
    },
    {
      label: 'Air Composition - Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'The Composition of Air',
        text: `# Importance of air.
1. Oxygen present in the air is needed for respiration.
2. We can speak and hear the sound only when there is air around.
3. Air helps in the dispersal of seeds for plant reproduction.
4. Monsoon and rain occur due to the wind action.
5. Air regulates the atmospheric temperature.
The properties of all the gases present in Air.
# Nitrogen
1. It is used to fill up food packages to extend their shelf life.
2. Liquid nitrogen is used to store living cells.
3. Plants need nitrogen for their growth.
4. We can see root nodules containing nitrogen in some plants.
5. Nowadays people use nitrogen gas to fill the tires of their vehicles.
6. Some compounds of nitrogen are used as explosives also.
# Oxygen
1. The presence of oxygen can be tested with a piece of glowing splint, which relights in oxygen.
2. All living things use oxygen for breathing.
3. Oxygen is essential for burning.
4. Oxygen cylinders are used in hospitals to enable patients to breathe when they cannot breathe normally.
5. Oxygen is used in gas welding.
6. Mountaineers carry oxygen cylinders at high altitudes.
7. Deep sea divers also carry oxygen cylinders along with them while diving deep into the sea.
# Carbon dioxide
1. The presence of carbon dioxide can be tested with the help of lime water. The lime water changes from colorless to milky in the presence of carbon dioxide.
2. Carbon dioxide helps plants in photosynthesis.
3. It is used in fire extinguishers.
4. It is used in refrigerators as dry ice for cooling purposes.
5. It is used to make plastics and polymers.`
      }
    },
    {
      label: 'Air Pollution - Reading',
      type: 'passage',
      id: 'reading-3',
      data: {
        title: 'Air pollution',
        text: `# Air pollution
The atmospheric balance is disturbed by human activities The air carries soot, smoke, and other particles from car exhaust and power plants. These are the major contributors to air pollution.
# Adverse effects of air pollution
1. Global warming
2. Formation of smog
3. Acid rain
4. Aerosol formation
5. Depletion of ozone
# Effects of air pollution on human beings
1. Irritation in the eyes, nose and throat
2. Wheezing, coughing and breathing problems
3. Respiratory diseases
4. Cardiovascular damage.
5. Fatigue, headaches and anxiety.
6. Nervous system damage.
# Steps to check air pollution
1. Alternative sources of energy (E.g. Solar energy) should be used.
2. Air filters should be used to prevent harmful gases from mixing with air.
3. Smoke emission tests and certification of motor vehicles must be enforced.
4. More trees should be planted to absorb carbon dioxide.
Alternative sources of energy are Solar Power, Nuclear Power, Hydroelectric Energy, Wave Energy, Biofuels, Natural Gas, Geothermal Power, Wind Energy, Biomass Energy, Tidal Energy and Hydrogen Gas.`
      }
    },
    {
      id: 'fillup-3',
      label: 'Air & its composition - Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Clay pot has thousands of tiny pores through which water seeps out. This causes *cooling (heating)* effect.
The *flute (piano)* is an example of a wind instrument.
In 1772, the Scottish chemist, Daniel Rutherford, reported noxious air, which now we call *nitrogen (oxygen)*.
A grown-up tree intakes *1/3 (2/3)* of carbon dioxide exhaled by one person and it gives out the same amount of *oxygen (carbon dioxide)* required by a person.
*Three (Five)* trees are needed to fulfill the required oxygen for a man to survive.`
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
            text: `The Scottish chemist Joseph Black discovered that carbon dioxide is present in the air.
Covering our mouth and nose while sneezing or coughing prevents the spreading of germs through the air to people around us.
Carbonated drinks are bad for health.
Plants need nitrogen for their growth.`
          },
          {
            name: 'False',
            text: `Air pollution has a good impact on human health.
Air is made up of oxygen only.
The gas used for burning things is Argon.`
          }
        ]
      }
    },
    {
      label: 'Complete Word - Air Composition',
      type: 'completeWord',
      id: 'drag-drop-6',
      data: {
        text: `It gives you oxygen.| TREE| T__E
Melting of snow caps and increase in sea levels due to ____________________. |GLOBAL WARMING| G___A_ W__M___
Dust particles and smoke combine with fog in the presence of sunlight to form _______.|SMOG| S__G
Liquid or solid particles are dispersed in air are called __________.|AEROSOL| A_R_S_L
Hydrocarbons such as the Chloro Fluoro Carbons (CFCs) destroy the _______ layer.|OZONE| O_O__`
      }
    },
    {
      id: 'match-4',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Smog, Air pollution
Lung cancer, Smoke and fog
Balloon, Air
Solar, Alternative source`,
        title: 'Match the following'
      }
    },
    {
      label: 'Choose the best Answer - Air Composition & Air Pollution',
      id: 'mcq-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The Scottish chemist Joseph Black discovered that ___________ is present in the air.',
            options: 'carbon dioxide, oxygen, nitrogen'
          },
          {
            qText:
              ' _________ radiation harms wildlife, damages plants and causes skin cancer in humans.',
            options: 'UV, IR, X-ray'
          },
          {
            qText: '________ present in the air is needed for respiration',
            options: 'oxygen, nitrogen, carbon dioxide'
          },
          {
            qText: 'Monsoon and rain occurs due to the ______ action.',
            options: 'wind, breeze, gale, storm'
          },
          {
            qText: '_________ can be tested with lime water.',
            options: 'Carbon dioxide, Oxygen, Nitrogen'
          },
          {
            qText:
              'We can speak and hear the sound only when there are ____ around.',
            options: 'air, water, light'
          },
          {
            qText: '__________ is used to make plastics and polymers.',
            options: 'Carbon dioxide, Oxygen, Nitrogen'
          },
          {
            qText: 'Air regulates the atmospheric ______________.',
            options: 'temperature, balance, pressure'
          },
          {
            qText:
              '__________ cylinders are used in hospitals to enable the patients to breathe when they cannot breathe normally.',
            options: 'Oxygen, Nitrogen, Carbon dioxide'
          },
          {
            qText:
              'We can speak and hear the sound only when there are ____ around.',
            options: 'air, water, light'
          },
          {
            qText:
              'While ________ with firewood, fanning air helps in burning of firewood.',
            options: 'cooking, heating, burning'
          },
          {
            qText:
              '_________ is used to fill up food packages to extend their shelf life.',
            options: 'Nitrogen, Oxygen, Carbon dioxide'
          },
          {
            qText: '___________ is used in fire extinguishers.',
            options: 'carbon dioxide, oxygen, nitrogen'
          }
        ]
      }
    }
  ]
};
