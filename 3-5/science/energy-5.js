export default {
  id: 'energy-5',
  label: 'Energy',
  lockAfter: 3,
  list: [
    {
      id: 'notes',
      label: 'Energy – Introduction',
      type: 'passage',
      data: {
        text: `We do many activities in our daily life. We do physical work to do many of these activities. For example, you do physical work to brush your teeth, take a bath, or walk to school carrying your school bag. You are able to do these activities because you have energy. You get energy from the food you eat. Sometimes we use machines or devices to do our work. Instead of washing clothes by hand, we may use a washing machine. But how do these machines get energy to do their work? We have never seen them eating! They use different forms of energy to do their work. Some of them are:
1. Mechanical energy
2. Wind energy
3. Heat energy
4. Light energy
5. Electrical energy
6. Chemical energy
#Mechanical energy
This is the energy of an object due to its motion and position. Mechanical energy is of two types. When an object moves, it has kinetic energy. For example, the tennis ball hit by a player has kinetic energy when it is moving. An object can also have mechanical energy when it is at rest! This form of energy is called potential energy. A stone in a stretched catapult has potential energy.
#Wind energy
Have you played with a fan made of paper or palm leaves? The blades of the fan rotate due to the energy given by the wind. This wind energy can also rotate the blades of large fans called windmills to produce electricity.
#Heat energy
This is the energy of an object when its atoms and molecules begin to vibrate very fast and collide with each other. The sun is the primary source of heat energy. We can also give heat energy to an object by friction or chemical reactions. For example, when you rub your hands together for some time, you feel the energy produced as heat due to friction between the hands. The chemical reaction of petrol or diesel produces heat energy which can be used to run vehicles.
#Light energy
Did you know that light is a form of energy? Light consists of tiny particles called photons. Each photon is a very small packet of energy! Light can travel really fast at 3,00,000 kilometers in a second. We see things around us when light energy from those things reaches our eyes. Plants need light energy to make their food. We can also use light energy from the sun to produce electricity by using solar panels.
#Electrical energy
We know that all things are made up of atoms. Each atom has even smaller particles called protons, neutrons and electrons. When electrons in an object move in a certain direction, they produce electrical energy. This form of energy can be produced by different sources such as the sun, wind, water, and fossil fuels. We use electrical energy for the working of fans, lamps, televisions, washing machines, computers and refrigerators. Modern cars and trains also run on electrical energy.
#Chemical energy
When two or more chemical substances react with each other, they release chemical energy. An example is the battery in your phone or laptop. The battery contains a number of chemical substances that react with each other to produce chemical energy. This energy is stored as electrical energy in the battery.`,
        title: 'Energy – Introduction'
      }
    },
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title:
          'Match the machines with the type of energy it has on the right side.',
        fontSize: '1rem',
        text: `Windmill, Wind
Solar panel, Light
Water in dam, Potential
Battery, Chemical
Rocket, Kinetic
Diesel engine, Heat`
      }
    },
    {
      id: 'classify',
      label: 'Potential vs Kinetic energy',
      type: 'classifySentence',
      data: {
        title: 'Classify the below example as kinetic or potential energy.',
        types: [
          {
            name: 'Kinetic energy',
            text: `The rotating blades of a windmill
Driving a nail on the wall
Running a 100 meter race
A moving vehicle on the road
A rocket moving upward`
          },
          {
            name: 'Potential energy',
            text: `Water stored in a dam
Child at the top of a slide
Stone in a stretched catapult
A yoyo ready to be released
Stretched rubber band`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `To do work, we need *energy(machine,battery)*.
Heat energy can be produced by *friction(wind, photons)*.
Potential energy of an object is due to its *position(movement,chemical reaction)*.
A solar panel uses *light(heat,electrical)* energy to produce electricity.
A battery gives energy in the form of *electrical (light, heat)* energy. `,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'classify-2',
      label: 'Energy or Not',
      type: 'group',
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
            qText: 'We need energy to do our work. We get energy from',
            options: `the food we eat
the music we hear
the games we play`
          },
          {
            qText: 'Moving object has _______.',
            options: 'kinetic energy, potential energy, electrical energy'
          },
          {
            qText: 'Which of the following is not a mechanical energy?',
            options: 'chemical energy, potential energy, kinetic energy'
          },
          {
            qText:
              'Windmills are usually build in the places where there is _______.',
            options: `lot of wind blowing,
lot of rain,
no wind, as windmill may fall down due to the wind.`
          },
          {
            qText: 'A stone in a stretched catapult has _______.',
            options: 'potential energy, kinetic energy, wind energy'
          },
          {
            qText: 'Which of the following are true statements?',
            options: `* Energy can neither be created not be destroyed.
* We can convert one form of energy into another.
* Petrol has chemical energy which is used to run vehicles.`
          }
        ]
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Water stored in dams possesses potential energy.
Energy can neither be created nor be destroyed.
Ceiling fan converts electrical energy into mechanical energy.`
          },
          {
            name: 'False',
            text: `We can produce energy without the help of any objects.
Electric lamp converts electrical energy into heat energy.`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        fontSize: '1rem',
        dashWidth: 80,
        text: `Mobiles and laptops run on *electrical* energy. 
Wind mills convert *kinetic* energy of winds into electrical energy. 
Moving body can be brought to rest using *mechanical* energy. 
Photosynthesis changes solar energy into *chemical* energy. 
Iron box converts electrical energy into *heat* energy.`
      }
    }
  ]
};
