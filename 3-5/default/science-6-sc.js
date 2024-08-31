export default {
  label: 'Science',
  id: 'science-6-sc',
  img: 'science',
  grade: '6-8',
  lockAfter: 100,
  list: [
    {
      id: 'plant-cell',
      label: 'Parts of a Plant Cell',
      type: 'dragAndDrop',
      data: {
        img: 'plant-cell.avif',
        title: 'Parts of a Plant Cell',
        width: 360,
        height: 500,
        wordWidth: 60,
        fontSize: '1rem',
        words: [
          {
            word: 'cell wall',
            x: 250,
            y: 50
          },
          {
            word: 'nucleus',
            x: 290,
            y: 170
          },
          {
            word: 'central vacuole',
            x: 140,
            y: 445
          },
          {
            word: 'cytoplasm',
            x: 290,
            y: 350
          },
          {
            word: 'chloroplast',
            x: 130,
            y: 40
          },
          {
            word: 'mitochondrion',
            x: 20,
            y: 40
          }
        ]
      }
    },
    {
      id: 'ruminant',
      label: 'Ruminant Digestive System',
      type: 'dragAndDrop',
      data: {
        img: 'ruminant-digestion.jpg',
        title: 'Ruminant Digestive System',
        width: 350,
        height: 350,
        wordWidth: 60,
        fontSize: '1rem',
        words: [
          {
            word: 'Esophagus',
            x: 240,
            y: 246
          },
          {
            word: 'Reticulum',
            x: 262,
            y: 87
          },
          {
            word: 'Omasum',
            x: 190,
            y: 60
          },
          {
            word: 'Abomasum',
            x: 83,
            y: 259
          },
          {
            word: 'Rumen',
            x: 100,
            y: 69
          },
          {
            word: 'Intestine',
            x: 9,
            y: 58
          }
        ]
      }
    },
    {
      id: 'electric-bell',
      label: 'Electric Bell Circuit',
      type: 'dragAndDrop',
      data: {
        img: 'electric-bell.jpg',
        title: 'Electric Bell Circuit',
        width: 350,
        height: 400,
        wordWidth: 60,
        fontSize: '1rem',
        words: [
          {
            word: 'switch',
            x: 35,
            y: 13
          },
          {
            word: 'clamp',
            x: 221,
            y: 16
          },
          {
            word: 'spring',
            x: 262,
            y: 102
          },
          {
            word: 'armature',
            x: 277,
            y: 196
          },
          {
            word: 'contact screw',
            x: 257,
            y: 277
          },
          {
            word: 'hammer',
            x: 264,
            y: 346
          },
          {
            word: 'gong',
            x: 29,
            y: 361
          },
          {
            word: 'electromagnet',
            x: 16,
            y: 319
          }
        ]
      }
    },
    {
      id: 'parts-of-eye',
      label: 'Parts of Human Eye',
      type: 'dragAndDrop',
      data: {
        img: 'parts-of-eye.jpg',
        title: 'Parts of Human Eye',
        width: 350,
        height: 350,
        wordWidth: 60,
        fontSize: '1rem',
        words: [
          {
            word: 'Retina',
            x: 158,
            y: 121
          },
          {
            word: 'Nerve',
            x: 287,
            y: 260
          },
          {
            word: 'Lens',
            x: 178,
            y: 164
          },
          {
            word: 'Cornea',
            x: 13,
            y: 79
          },
          {
            word: 'Pupil',
            x: 0,
            y: 172
          },
          {
            word: 'Iris',
            x: 2,
            y: 241
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Heat: Match the following',
      id: 'match-simple-2',
      data: {
        title: 'Match the following',
        fontSize: '1rem',
        text: `Celsius scale, 100 equal divisions
Fahrenheit scale, 180 equal divisions
kink, clinical thermometer
copper, good conductor of heat
air, poor conductor of heat`
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the Word',
      id: 'complete',
      lockAfter: 1,
      data: {
        title: 'Complete the Word',
        text: `The metal present in a clinical thermometer. | MERCURY | M_____Y
The poorest conductors of heat. | GASES | G___S
The mode of heat transfer in liquids | CONVECTION | CO_____ION
The process by which Sun's rays reach our Earth | RADIATION | ______ION
Liquids kept in this remain hot or cold | THERMOS FLASK | T______ F____`
      }
    },
    {
      label: 'Heat - MCQ',
      type: 'mcq',
      id: 'heat-mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What are the invisible heat rays that are transferred by radiation?`,
            options: `infrared rays, ultrared rays, white light, blue light`
          },
          {
            qText: `A room heater heats up a room because of _______ currents in the air.`,
            options: `convection, conduction, induction, radiation`
          },
          {
            qText: `The normal temperature of a human body is _____.`,
            options: `98.6 °F, 98.6 °C, 25.6 °C, 37 °F`
          },
          {
            qText: `Boiling point of water is _____.`,
            options: `100 °C, 0 °C, 37 °C, 90 °C`
          },
          {
            qText: `The transfer of heat by conduction takes place only in _____.`,
            options: `solids, liquids, gases, solids and liquids`
          }
        ]
      }
    },
    {
      label: 'Thermos Flask',
      type: 'matchByDragDrop',
      id: 'thermos',
      data: {
        dashWidth: 60,
        text: `The outer covering of the thermos flask is made of *insulating* material which minimises heat loss by *conduction*. The inner jar is made of *double* glass of *stainless* steel. There is *vacuum* in the space between the outer and inner jars. This prevents heat loss due to *convection*.`
      }
    },
    {
      type: 'classifySentence',
      label: 'Heat vs Temperature',
      id: 'heat-temp',
      data: {
        title: 'Classify It',
        types: [
          {
            name: 'Heat',
            text: `It is measured in joule (J) or Calorie(cal).
It is a form of energy.`
          },
          {
            name: 'Temperature',
            text: `It can be measured by Thermometer.
It is measured in Celsius (°C) or Fahrenheit (°F).
It determines the direction of heat flow.  `
          }
        ]
      }
    },
    {
      label: 'Good vs Bad Conductor',
      type: 'group',
      id: 'group',
      data: {
        title: 'Classify the below as good and bad conductor or heat.',
        types: [
          {
            name: 'Good Conductor',
            text: `Iron, Aluminium, Steel`
          },
          {
            name: 'Bad Conductor',
            text: `Wood, Cloth, Plastic, Glass, Paper, Gas`
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'True or False',
      id: 'true-false',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Clinical thermometer can be used to measure human body temperature.
Earth gets heat from the Sun through radiation.`
          },
          {
            name: 'False',
            text: `Heat cannot transfer from one body to another.
Good conductors of Heat are also known as insulators.
Heat flows from a body at a lower temperature to a body at a higher temperature.`
          }
        ]
      }
    }
  ]
};
