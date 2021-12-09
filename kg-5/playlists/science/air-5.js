export default {
  id: 'air-5',
  label: 'Air-5',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Air - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Air',
        text: `# Atmosphere
Atmosphere is the layer of gas that surrounds Earth. Atmosphere is divided into five different layers:
1. Troposphere: It is the lowest and densest layer. It extends up to 10km from sea. 
2. Stratosphere: It is the region above troposphere. It extends up to 50km. There is no water vapour in this layer. The temperature is around -500C.
3. Mesosphere: It is the region above stratosphere. It extends to a height of about 85km. The temperature is around -1100C. Most of the meteors burn in this layer.
4. Thermosphere: It is very rare layer of air above mesosphere.
5. Exosphere: It is the outermost layer with extremely thin air. It extends up to 400 to 1500km.
# Importance of Air
1. All living organisms require air.
2. It regulates the water cycle.
3. Air supplies energy.
4. Sound travels through air.
5. Plants require air to grow.
6. Helps in transport.
7. Produce wind energy.
8. Help in movement of parachutes and hot air balloons.`
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
            text: `Ultraviolet rays can cause damage to our skin and eyes.
Movement of clouds is possible due to air.
Body cells burn the food molecules with the help of oxygen and produce energy.`
          },
          {
            name: 'False',
            text: `Plants absorb nitrogen in the form of ammonia.
Exosphere is nearest to earth.
Spacecrafts are seen in thermosphere.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Troposphere, weather change
Stratosphere, ozone
Exosphere, outermost layer
Thermosphere, satellite
Mesosphere, meteors`,
        title: 'Match the following'
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
            qText:
              'Second highest layer of Earth’s atmosphere is ____________.',
            options: 'thermosphere, mesosphere, stratosphere, exosphere'
          },
          {
            qText:
              'The ____________ layer protects us from the harmful UV rays coming from the sun.',
            options: 'ozone, atmosphere, mesosphere'
          },
          {
            qText: '____________ is used by plants as nitrates.',
            options: 'nitrogen, nitrite, ammonia'
          },
          {
            qText: 'Movement of air is called __________.',
            options: 'wind, breeze, gale'
          },
          {
            qText:
              '___________ is the recreational and competitive adventure sport of flying.',
            options: 'paragliding, surfing, hand gliding '
          },
          {
            qText:
              'Process of nitrogen fixation by ________ is called nitrogen fixation.',
            options: 'microbes, plants, earthworm'
          },
          {
            qText: 'Sound travel through ______.',
            options: 'air, land, water '
          }
        ]
      }
    },
    {
      label: 'Air pollution- Reading',
      type: 'passage',
      id: 'reading-2',
      data: {
        title: 'Air Pollution',
        text: `# Air Pollution
Presence of harmful substances in air have an  adverse effect on living beings and environment. This is called air pollution.
# Causes:
1. Industries
2. Burning of fossil fuels
3. Agricultural activities like use of pesticides
4. Mining 
5. Use of chemical for cleaning
# Effects:
1. Spread of diseases
2. Global warming
3. Acid rain
4. Depletion of ozone layer
5. Adverse effect on marine life
6. Adverse effect on wildlife
# Prevention:
1. Use public transport
2. Reduce usage of fossil fuels
3. Use renewable energy sources
4. Recycle and reuse
5. Switch off appliances after using them
6. Plant more trees`
      }
    },
    {
      id: 'fillup',
      label: 'Air Pollution- Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Combustion of fossil fuels like coal and petroleum release *sulphur dioxide (carbon dioxide)*
Air pollution can be natural or *man-made (artificial)*.
Extraction of *minerals (salts)* from the earth is called mining.
Taj Mahal in Agra is built entirely with *white (yellow)* marbles.
Air pollutants cause pneumonia and *asthma (cold)* in children.
The growth of *green (red)* algae in water bodies is called eutrophication.`
      }
    },
    {
      label: 'Cause or Effect',
      id: 'cause-effect',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentences as cause and effect of air pollution',
        types: [
          {
            name: 'Cause',
            text: `Industries
Burning of fossil fuels
Agricultural activities like use of pesticides
Mining 
Use of chemical for cleaning`
          },
          {
            name: 'Effect',
            text: `Spread of diseases
Global warming
Acid rain
Depletion of ozone layer
Adverse effect on marine life
Adverse effect on wildlife`
          }
        ]
      }
    },
    {
      label: 'Natural Vs Man-made',
      id: 'classify',
      type: 'group',
      data: {
        title:
          'Classify the following based on whether it is natural or man-made pollution',
        types: [
          {
            name: 'Natural',
            text: 'volcanic eruption, lightning, storm'
          },
          {
            name: 'Man-made',
            text: 'mining, industrial waste, burning coal'
          }
        ]
      }
    },
    {
      label: 'Airborne Diseases - Reading',
      type: 'passage',
      id: 'reading-3',
      data: {
        title: 'Airborne Diseases',
        text: `# Airborne Diseases
Diseases which are caused by microorganisms and communicated through air are called airborne diseases. Air borne disease can be further classified into two.
1. Bacterial diseases: Diphtheria, Whooping Cough and Tuberclosis are some of the common airborne diseases caused by bacteria.
2. Viral diseases: Common cold, influenza, measles, mumps and chickenpox are some of the diseases caused by virus.
# Prevention:
1. Avoid close contact with people who have active symptoms of disease.
2. Maintain personal hygiene.
3. Keep the patient in complete isolation. Cover nose and mouth while sneezing or coughing.
4. Avoid touching the face or other people with unwashed hands.
5. Wash your hands thoroughly.
6. Timely vaccination can prevent the diseases.`
      }
    },
    {
      label: 'Find the causative organism',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Common cold - *Rhino virus*
Influenza - *Myxo virus*
Measles - *Rubeola virus*
Chicken pox - *Varicella zoster*
Tuberculosis - *Mycobacterium*
Diptheria - *Coneybacterium*
Whooping cough - *Bordetalla pertusis*`
      }
    },
    {
      label: 'Bacteria Vs Virus',
      id: 'classify-2',
      type: 'group',
      data: {
        title: 'Classify the diseases based on causative organism.',
        types: [
          {
            name: 'Bacteria',
            text: 'diptheria, tuberculosis'
          },
          {
            name: 'Virus',
            text: 'measles, mumps, influenza'
          }
        ]
      }
    },
    {
      label: 'Atmosphere - Reading',
      type: 'passage',
      id: 'reading-4',
      data: {
        title: 'Atmosphere',
        text: `# Important terms
1. Lithosphere: land on Earth.
2. Atmosphere: air on Earth.
3. Hydrosphere: water on Earth.
4. Biosphere: life on Earth.
5. Weather: day to day conditions of atmosphere.
6. Climate: average weather for a given period of time.
7. Solar radiation: heat energy from sun.
8. Meteorology: study of weather.
9. Latitude: an imaginary line drawn horizontally on Earth’s surface.
10. Longitude: semicircle extending from North pole to South pole.
11. Prime meridian: 0 degree  longitude
12. IST: Indian Standard Time.
13. Rain water harvesting: technique of collection and storage of rain water.
# Important Dates
1. World Environment Day - June 5
2. World Ozone Day - September 16
3. World Weather Day - March 23
# Effects of solar radiation
1. Land - conduction
2. Water - convection
3. Atmosphere terrestrial radiation
# Important Latitudes
1. Equator - 0 degree
2. Tropic of Cancer - 23(1/2) degree North
3. Tropic of Capricorn -  23(1/2) degree South
4. Arctic circle - 66(1/2) degree North
5. Antarctic circle - 66(1/2) degree South
# Heat zones of Earth
1. Torrid zone: zone between Tropic of Cancer and Tropic of Capricorn.
2. Temperate zone: receives slanting rays of sun.
3. Frigid zone: do not get sun’s rays.
# Important Mountain peaks
1. Mount Everest
2. K2
3. Kanchenjunga
4. Nanga Parbat
5. Annapurna
# Instrument
1. Barometer: used to measure pressure.
2. Wind vane: used to measure direction of wind.
3. Anemometer: used to measure speed of wind.
# Types of wind
1. Planetray wind
2. Monsoon wind
3. Sea breeze
4. Land breeze
5. Local wind
6. Jet streams
7. Hurricane
# Types of clouds:
1. Cirrus cloud: These may not give rain. They are seen at very high altitudes.
2. Stratus cloud: They are grey in colour and are spreadout. They may give small shower. 
3. Cumulus cloud: It looks like a burst cotton and gives convectional rain fall. These clouds are associated with rainfall lightning and thunder.
4. Nimbus cloud: It appears as dark or grey in color. It gives heavy rainfall. It is called vertical or rain clouds.`
      }
    },
    {
      label: 'Answer in one word -1',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Lithosphere*: land on Earth.
*Atmosphere*: air on Earth.
*Hydrosphere*: water on Earth.
*Biosphere*: life on Earth.
*Weather*: day to day conditions of atmosphere.`
      }
    },
    {
      label: 'Answer in one word -2',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Climate*: average weather for a given period of time.
*Solar radiation*: heat energy from sun.
*Meteorology*: study of weather.
*Latitude*: an imaginary line drawn horizontally on Earth’s surface.
*Longitude*: semicircle extending from North pole to South pole.`
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
            text: `Condensation of the wind causes rain fall.
Rain water must be saved and not be wasted.
The natural materials and living things, including sunlight are called environment.
Air currents in the upper layers of atmosphere is known as Jet streams.`
          },
          {
            name: 'False',
            text: `Land breeze blows from sea to land during the evening.
Sea breeze blows from land to sea in the morning.
Monsoon winds move in the same direction throughout the year with the rotation of the Earth.`
          }
        ]
      }
    },
    {
      label: 'Name the instrument',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Used to measure pressure - *Barometer*
Used to measure direction of wind - *Wind vane*
Used to measure speed of wind - *Anemometer*`
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop-5',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Technique of collection and storage of rain water - *Rain water harvesting*
Zone between Tropic of Cancer and Tropic of Capricorn - *Torrid zone*
Receives slanting rays of sun - *Temperate zone*
This zone do not get sun’s rays - *Frigid zone*`
      }
    },
    {
      id: 'match-clouds',
      label: 'Match the following',
      type: 'match-3',
      data: {
        text: `Cirrus clouds,  do not rain
Stratus clouds,  small shower
Cumulus clouds, burst cotton
Nimbus clouds, vertical cloud`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup-2',
      label: 'Choose the correct option',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Equator - *0 (2)* degree
Tropic of Cancer - 23(1/2) degree *N (S)*
Tropic of Capricorn - 23(1/2) degree *S (N)*
*Arctic (Antarctic)* circle - 66(1/2) degree N
*Antarctic (Artic)* circle - 66(1/2) degree S
0 degree  longitude - Prime *meridian (median)*
*Indian (India)* Standard Time - IST`
      }
    },
    {
      label: 'Choose the best Answer - Atmosphere',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' The atmosphere is divided into ___________ layers.',
            options: '5, 7, 4'
          },
          {
            qText: 'The world weather day is on march ____.',
            options: '23, 24, 25'
          },
          {
            qText:
              'The Indian Standard Meridian passes through the city of ___________.',
            options: 'Allahabad, Ahmedabad, Hyderabad, Secunderbad'
          },
          {
            qText:
              'Zone located in between Tropic of cancer and Tropic of Capricorn is ________ zone.',
            options: 'Torrid, Temperate, Subtropical'
          },
          {
            qText: '_______________ is used to measure pressure in the air.',
            options: 'Barometer, Thermometer, Anemometer, Wind vane'
          },
          {
            qText: 'Monsoon is derived from the ____________ word.',
            options: 'Arabian, English, Latin'
          },
          {
            qText: 'Vertical cloud is called ___________.',
            options:
              'Nimbus clouds, Cirrus cloud,  Stratus clouds, Cumulus clouds '
          }
        ]
      }
    }
  ]
};
