export default {
  id: 'energy',
  label: 'Energy',
  pdf: 'g5-energy.pdf',
  list: [
    {
      data: {
        text:
          'We do many activities in our daily life. We do physical work to do many of these activities. For example, you do physical work to brush your teeth, take a bath, or walk to school carrying your school bag. You are able to do these activities because you have energy. You get energy from the food you eat. Sometimes we use machines or devices to do our work. Instead of washing clothes by hand, we may use a washing machine. But how do these machines get energy to do their work? We have never seen them eating! They use different forms of energy to do their work. Some of them are:\n1. Mechanical energy\n2. Wind energy\n3. Heat energy\n4. Light energy\n5. Electrical energy\n6. Chemical energy\n#Mechanical energy\nThis is the energy of an object due to its motion and position. Mechanical energy is of two types. When an object moves, it has kinetic energy. For example, the tennis ball hit by a player has kinetic energy when it is moving. An object can also have mechanical energy when it is at rest! This form of energy is called potential energy. A stone in a stretched catapult has potential energy.\n#Wind energy\nHave you played with a fan made of paper or palm leaves? The blades of the fan rotate due to the energy given by the wind. This wind energy can also rotate the blades of large fans called wind mills to produce electricity.\n#Heat energy\nThis is the energy of an object when its atoms and molecules begin to vibrate very fast and collide with each other. Sun is the primary source of heat energy. We can also give heat energy to an object by friction or chemical reactions. For example, when you rub your hands together for some time, you feel the energy produced as heat due to friction between the hands. The chemical reaction of petrol or diesel produces heat energy which can be used to run vehicles.\n#Light energy\nDid you know that light is a form of energy? Light consists of tiny particles called photons. Each photon is a very small packet of energy! Light can travel really fast at 3,00,000 kilometres in a second. We see things around us when light energy from those things reach our eyes. Plants need light energy to make their food. We can also use light energy from the sun to produce electricity by using solar panels.\n#Electrical energy\nWe know that all things are made up of atoms. Each atom has even smaller particles called protons, neutrons and electrons. When electrons in an object move in a certain direction, they produce electrical energy. This form of energy can be produced by different sources such as the sun, wind, water, and fossil fuels. We use electrical energy for the working of fan, lamps, television, washing machine, computer and refrigerator. Modern cars and trains also run on electrical energy.\n#Chemical energy\nWhen two or more chemical substances react with each other, they release chemical energy. An example is the battery in your phone or laptop. The battery contains a number of chemical substances that react with each other to produce chemical energy. This energy is stored as electrical energy in the battery.',
        title: 'Energy – Introduction'
      },
      id: '100',
      label: 'Energy – Introduction',
      type: 'passage'
    },
    {
      data: {
        text:
          'Windmill, Wind\nSolar panel, Light\nWater in dam, Potential\nBattery, Chemical\nRocket, Kinetic\nDiesel engine, Heat',
        title:
          'Match the machines with the type of energy it has on the right side.'
      },
      id: '200',
      label: 'Match',
      type: 'match'
    },
    {
      data: {
        title: 'Classify the below example as kinetic or potential energy.',
        types: [
          {
            name: 'Kinetic energy',
            text:
              'The rotating blades of a windmill\nDriving a nail on the wall\nRunning a 100 meter race\nA moving vehicle on the road\nA rocket moving upward'
          },
          {
            name: 'Potential energy',
            text:
              'Water stored in a dam\nChild at the top of a slide\nStone in a stretched catapult\nA yoyo ready to be released\nStretched rubber band'
          }
        ]
      },
      id: '300',
      label: 'Potential vs Kinetic energy',
      type: 'classifySentence'
    },
    {
      data: {
        options: '',
        text:
          'To do work, we need *energy(machine,battery)*.\nHeat energy can be produced by *friction(wind, photons)*.\nPotential energy of an object is due to its *position(movement,chemical reaction)*.\nA solar panel uses *light(heat,electrical)* energy to produce electricity.\nA battery gives energy in the form of *electrical (light, heat)* energy. ',
        title: 'Fill in the blanks.'
      },
      id: '400',
      label: 'Fill in the blanks',
      type: 'fillupOptions'
    },
    {
      data: {
        title: 'Classify the below items as a type of energy or not.',
        types: [
          {
            name: 'Energy',
            text: 'wind, light, chemical, heat, potential'
          },
          {
            name: 'Not an Energy',
            text: 'time, weight, tree, bridge, pollution'
          }
        ]
      },
      id: '500',
      label: 'Energy or Not',
      type: 'group'
    },
    {
      data: {
        questions: [
          {
            options: 'the food we eat\nthe music we hear\nthe games we play',
            qText: 'We need energy to do our work. We get energy from'
          },
          {
            options: 'kinetic energy, potential energy, electrical energy',
            qText: 'Moving object has'
          },
          {
            options: 'chemical energy, potential energy, kinetic energy',
            qText: 'Which of the following is not a mechanical energy?'
          },
          {
            options:
              'lot of wind blowing,\nlot of rain,\nno wind, as windmill may fall down due to the wind.',
            qText:
              'Windmills are usually build in the places where there is _______.'
          },
          {
            options: 'potential energy, kinetic energy, wind energy',
            qText: 'A stone in a stretched catapult has _______'
          }
        ],
        title: 'Multiple Choice Questions'
      },
      id: '600',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq'
    }
  ]
};
