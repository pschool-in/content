export default {
  id: 'air-6',
  label: 'Air',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Air around us - Reading',
      type: 'passage',
      data: {
        text: `# Is air present everywhere around us?
Air is found everywhere. We cannot see air, but we can feel it. Air in motion is called wind. Air occupies space. Air is present in water and soil. The envelope of air that surrounds the Earth is known as the atmosphere. The atmosphere is essential for life on Earth.

# Composition of Air
Air is a mixture of nitrogen, oxygen, carbon dioxide, water vapor and a few other gases. Some dust particles may also be present in it. Oxygen and nitrogen make up to 99% of air. The other 1% is constituted by carbon dioxide and a few other gases, water vapor, smoke and dust.

# Water vapor
The presence of water vapor in the air is important for the water cycle in nature. The presence of water vapor in the air is mainly due to evaporation and condensation.

# Oxygen
Oxygen is the component of air that supports burning. Oxygen is essential for life to exist.

# Nitrogen
The major component of air is nitrogen. It is also the component of air that does not support burning.

# Carbon Dioxide
Carbon dioxide makes up a small component of the air around us. Plant and animal matter also consumes oxygen on burning and produces mainly carbon dioxide and a few other gases. It is advisable not to burn dry leaves and discarded remains of the crop, which pollute our surroundings.

# Dust and Smoke
The burning of fuel also produces smoke. Smoke contains a few gases and fine dust particles and is often harmful. Dust particles are always present in the air. We inhale air when we breathe through our nostrils. Fine hair and mucus are present inside the nose to prevent dust particles from getting into the respiratory system.`,
        title: 'Air'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-1',
      data: {
        fontSize: '1rem',
        text: `Air is found *everywhere*.
We cannot see *air*, but we can *feel* it.
Air in motion is called *wind*.
Air occupies *space*.
Air is present in *water* and soil.
Air is a mixture of *nitrogen*, oxygen, carbon dioxide, water vapor and a few other gases. Some *dust* particles may also be present in it.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `*Oxygen (Nitrogen)* supports burning and is necessary for living organisms.
The envelope of air that surrounds the Earth is known as the *atmosphere (biosphere)*.
Atmosphere is *essential (not essential)* for life on Earth.
Aquatic animals use dissolved air in *water (soil)* for respiration.
Plants and animals *depend (do not depend)* on each other for exchange of oxygen and carbon dioxide from air.`
      }
    },
    {
      id: 'smoke-dust',
      label: 'Smoke or Dust',
      type: 'classifySentence',
      data: {
        title: 'Classify the following as smoke or dust.',
        types: [
          {
            name: 'Smoke',
            text: `Burning of garbage
Burning of cigarette
Burning of fossil fuel`
          },
          {
            name: 'Dust',
            text: `Viable particles
Mineral particles
Metallic particles`
          }
        ]
      }
    },
    {
      id: 'oxygen-carbon-dioxide',
      label: 'Oxygen or Carbon dioxide',
      type: 'classifySentence',
      data: {
        title: 'Classify which component of air is used in the given process.',
        types: [
          {
            name: 'Oxygen',
            text: `Burning of candles
Respiration in animals`
          },
          {
            name: 'Carbon dioxide',
            text: `Refrigerant
Preparation of fizzy drinks
Fire extinguisher`
          }
        ]
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
            text: `  Oxygen and Nitrogen make up to 99% of air.
Plants and animals depend on each other for air.`
          },
          {
            name: 'False',
            text: `Air has no impact on the water cycle.
Nitrogen aids in burning.
Carbon dioxide makes 70% of the atmosphere.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Nitrogen, 78%
Oxygen, 21%
Argon, 0.9%
Other gases,0.1%`,
        title: 'Match the gases with their respective percentages in air.'
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word',
      label: 'Answer the following',

      data: {
        title: 'Find the word',
        questions: [
          {
            word: 'ATMOSPHERE',
            display: 'A_________',
            hint: 'Layer of air around Earth.'
          },
          {
            word: 'CARBON DIOXIDE',
            display: 'C_____ D______',
            hint: 'Component of air used by plants to make their food.'
          },
          {
            word: 'OXYGEN',
            display: '_X____',
            hint: 'Component of air that supports burning.'
          },
          {
            word: 'NITROGEN',
            display: '_I______',
            hint: 'Component of air that does not support burning.'
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What are the properties of air?',
            options: `It occupies space, It is present everywhere around us, It has no color and is transparent, *All of the above`
          },
          {
            qText: 'Moving air is called',
            options: `wind, dust, smoke, nitrogen`
          },
          {
            qText: 'Which of the following is a property of oxygen?',
            options: `colorless, tasteless, odorless, *all of these`
          },
          {
            qText: 'The composition of nitrogen gas in the atmosphere is',
            options: `78%, 21%, 1%, 0.01%`
          },
          {
            qText: 'Oxygen is a supporter of',
            options: `combustion, nitrogen, smoke, dust`
          },
          {
            qText: 'Smoke is produced mainly by burning',
            options: `wood, coal, kerosene, *all of these`
          },
          {
            qText:
              'The two gases which together make up about 99 percent of the air are',
            options: `nitrogen and oxygen, nitrogen and carbon dioxide, nitrogen and ozone, carbon dioxide and oxygen`
          },
          {
            qText: 'Mountaineers carry oxygen cylinder with them because',
            options: `oxygen is deficient in mountains at high altitude, oxygen is used for cooking, oxygen keeps them warm at low temperatures, there is no oxygen in high mountains`
          },
          {
            qText: 'Which components of air are harmful to living organisms?',
            options: `Dust and smoke, Oxygen and carbon dioxide, Smoke and water vapor, Nitrogen and oxygen`
          },
          {
            qText:
              'The gas released by the green plants during photosynthesis is',
            options: `oxygen, carbon dioxide, helium, nitrogen`
          }
        ]
      }
    },
    {
      id: 'notes-2',
      label: 'Oxygen - Reading',
      type: 'passage',
      data: {
        text: `# How does oxygen become available to animals and plants?
The plants and animals that live in water use oxygen that is dissolved in water. Plants and animals living in the soil use air trapped in small air pockets in the soil. When it rains heavily these air pockets get filled with water. Then the organisms come out for oxygen.

# How is oxygen in the atmosphere replaced?
Plants produce oxygen during photosynthesis. Plants also consume oxygen for respiration, but they produce more of it than they consume. The balance of oxygen and carbon dioxide in the atmosphere is maintained through respiration in plants and animals and by photosynthesis in plants. This shows the interdependence of plants and animals. `,
        title: 'Oxygen'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `The *wind* makes the windmill rotate.  
Windmills are used to generate *electricity*. 
Air helps in the *movements* of sailing yachts, gliders, parachutes and airplanes. 
Birds, bats and insects can fly due to the presence of *air*. 
Air helps in the *dispersal* of seeds and pollen of flowers of several plants. 
Air plays an important role in the *water* cycle.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The plants and animals that live in water use oxygen that is *dissolved (dispersed)* in water. 
Plants and animals living in the *soil (water)* use air trapped in small air pockets in the soil. 
When it rains heavily the air pockets in the soil get filled with *water (air)*.
When you heat water, the air dissolved in it *escapes (expands)*.`
      }
    }
  ]
};
