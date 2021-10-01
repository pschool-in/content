export default {
  id: 'work-4',
  label: 'Work',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Work - Notes',
      type: 'passage',
      data: {
        title: 'Work',
        text: `An action in which one exerts a force to move an object is known as work. Force is applied to do some work.
          When can we say that work is done or not? Two main conditions are needed for word to be done.
          1. A force should act on an object.
          2. Object should move from one place to another.
          When the force acting on the object makes it move it is said to be done a work.`
      }
    },
    {
      id: 'classify-work-or-not',
      label: 'Work or Not',
      type: 'classifySentence',
      data: {
        title:
          'Mention whether  work is done or not in the following activity.',
        types: [
          {
            name: 'Work Done',
            text: `Pushing the door
Digging soil
Riding a bicycle
Moving a trolly in a supermarket
Walking to school
Throwing a ball up`
          },
          {
            name: 'No Work Done',
            text: `Holding a doll
Sitting in a bus
Pushing a wall
Sleeping on bed`
          }
        ]
      }
    },
    {
      id: 'notes-2',
      label: 'Energy',
      type: 'passage',
      data: {
        title: 'Energy',
        text: `A man pulls a luggage. To do so he needs some energy. But from where he gets the energy. Food gives energy to humans. A car moves by the energy obtained from the burning of fuel. The fuel used in car is usually petrol. The escalator moves by using electricity as energy. 
Energy is defined as capacity for doing work. Energy must be transferred to an object in order to do work.
# Renewable Energy
Renewable sources of energy are replaced naturally over a period of time. We can keep using these sources for a long period of time. Since the beginning of human life, we have been using these resources. We use these resources for light, transport, cooking, heating. eg: sun, wind and water.
The resources which are not easily replaced once used are called the non-renewable resources. eg: petrol, coal and natural gas
# Law of conservation
The law of conservation of energy states that energy cannot created nor destroyed. It can be converted from
one form to another. The SI unit of energy is joule. It is named after James Joule who explained about energy. `
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which of the following is not a source of renewable energy?',
            options: `natural gas, wind, solar, water`
          },
          {
            qText:
              'If the object does not move on apply of force, then the work done is _______.',
            options: `zero, very small, cannot be measured`
          },
          {
            qText: 'What is required to move an object?',
            options: `Force, Work, Machine, Energy`
          },
          {
            qText: 'What does law of conservation of energy say?',
            options: `Energy can neither be created nor be destroyed.
            We get tired after doing lot of work.
            We need to apply force to do work.`
          },
          {
            qText: 'What is the SI unit of energy?',
            options: `Joule, Newton, Push, Force`
          }
        ]
      }
    },
    {
      id: 'classify-renewable',
      label: 'Renewable Energy - classify',
      type: 'group',
      data: {
        title: 'Classify the below.',
        types: [
          {
            name: 'Renewable Source',
            text: 'solar, wind, water'
          },
          {
            name: 'Non Renewable Source',
            text: 'petrol, coal, natural gas'
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
        text: `Energy is defined as *capacity* for doing work. Energy must be *transferred* to an object in order to do work.
Renewable sources of energy are *replaced* naturally over a period of time.
The escalator moves by using *electricity* as energy.`
      }
    },
    {
      id: 'notes-3',
      label: 'Simple Machine',
      type: 'passage',
      data: {
        title: 'Simple Machine',
        text: `In our daily life our effort is saved with the help of some simple machines.
We draw water from the well with the help of a wheel and a rope.
Simple machines are tools which are used to make our work easier. Some examples for simple machines are pulley, wedge, inclined plane, screw, lever, wheel and axle.
A pulley is a machine made up of a wheel with a cut around it. A rope or chain passes around the pulley. It rotates in the direction with more force. eg: crane, well
An inclined plane is a flat sloping surface with one end higher than another. eg: ramp, slide and slope for wheel chair.
A wedge is a tool with a sharp edge which can be used to split materials. It is used to break wooden logs into two pieces. eg: knife, scissors and axe.
The screw is used to raise weights and to hold objects together. eg: pencil sharpener, screw-jack, bottle cap and windmill.
The screw in the bottle cap holds the cap and the bottle together. The blade and sharpner are held together by screw.
Wheel and axle consist of a wheel attached to a small rod so that these two parts rotate together. eg: bicycle wheel, door knob, grinder, axle wheel.
Simple machines usually exchange a smaller force to move a heavy object. The work required is the same, but the force required is less. 
# Lever
A lever is used to multiply the force we give on an object. eg: see saw, nut cracker and plier.
To understand the lever, we must know the following terms.
1. Load is the object on which the force is applied.
2. Effort is the force we apply on the lever.
3. Fulcrum is the point on which the lever rotates.
Lever is classified into three types according to where the load and effort are located with respect to fulcrum.
# Class I lever
When the fulcrum is between the effort and the load, it is known as Class I lever.eg: scissors, pliers, seesaw.
# Class II lever
When the load is between the effort and the fulcrum, it is known as Class II lever. eg: wheel barrow, lemon squeezer, nut cracker
# Class III lever
In this lever, the effort is between the load and the fulcrum. eg: stapler, tongs, broom stick, hockey stick.`
      }
    },
    {
      id: 'mcq-simple-machine',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'We draw water from the well with the help of ______.',
            options: `pully, wedge, inclined plane`
          },
          {
            qText:
              'Which of the following can be considered as an example for wedge?',
            options: `Axe, Screw, Wheel`
          },
          {
            qText: 'Which of the following is not an inclined plane?',
            options: `Wheel, Ramp, Slide, Slope`
          },
          {
            qText: 'A lever is used to ______ the force we give on an object.',
            options: `multiply, add, subtract, divide`
          },
          {
            qText: 'Which of the following is not a function of a screw?',
            options: `To move up the slope, To raise weight, To hold objects together`
          },
          {
            qText: 'How many types of lever are there?',
            options: `Three, Four, Five, Two`
          },
          {
            qText: 'Which is not a part of lever?',
            options: `Axle, Load, Effort, Fulcrum`
          }
        ]
      }
    },
    {
      id: 'classify-lever',
      label: 'Lever - classify',
      type: 'group',
      data: {
        title: 'Classify the below as Class I or II lever.',
        types: [
          {
            name: 'Class I Lever',
            text: 'scissors, pliers, seesaw'
          },
          {
            name: 'Class II Lever',
            text: 'leman squeezer, nut cracker, bottle opener'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Class 1, Seesaw
Class 2, Nut cracker
Class 3, Stapler
Inclined plane, Ramp
Wedge, Axe`
      }
    },
    {
      id: 'match-3',
      label: 'Match 2',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Class 1, Scissors
  Class 2, Lemon squeezer
  Class 3, Hockey stick
  Inclined plane, Slide
  Wedge, Knife`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-lever',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Lever* is cassified into three types.
*Load* is the object on which the force is applied.
*Effort* is the force we apply on the lever.
*Fulcrum* is the point on which the lever rotates.
*Simple* machines usually exchange a smaller force to move a heavy object.`
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
            text: `Stapler is an example of Class III lever.
Scissors is an example of Class I lever.
Nut Cracker is an example of Class II lever.`
          },
          {
            name: 'False',
            text: `Broom stick is an example of Class II lever.
Seesaw is an example of Class III lever.`
          }
        ]
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
            word: 'effort',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'The force we apply on the lever',
            direction: 'across'
          },
          {
            word: 'fulcrum',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'The point around which the lever rotates',
            direction: 'down'
          },
          {
            word: 'load',
            marker: {
              x: 3,
              y: 2
            },
            hint:
              'In a lever, ____ is the object on which the force is applied.',
            direction: 'across'
          },
          {
            word: 'lever',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'A simple machine that multiplies the force we apply.',
            direction: 'down'
          },
          {
            word: 'screw',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'You can find it in a sharpener and it holds the blade.',
            direction: 'across'
          },
          {
            word: 'wedge',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'A type of simple machine. Axe belongs to this category.',
            direction: 'down'
          },
          {
            word: 'edge',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'A wedge has a sharp ___.',
            direction: 'across'
          },
          {
            word: 'crane',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'A vehicle primarily used to raise weight using pully',
            direction: 'across'
          },
          {
            word: 'work',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'It happens when we apply force to move objects',
            direction: 'across'
          },
          {
            word: 'knife',
            marker: {
              x: 7,
              y: 3
            },
            hint: 'A type of wedge commonly used in kitchen',
            direction: 'down'
          }
        ],
        table: [
          ['E', 'F', 'F', 'O', 'R', 'T', '', ''],
          ['', 'U', '', '', '', '', '', ''],
          ['', 'L', '', 'L', 'O', 'A', 'D', ''],
          ['S', 'C', 'R', 'E', 'W', 'O', 'R', 'K'],
          ['', 'R', '', 'V', 'E', '', '', 'N'],
          ['', 'U', '', 'E', 'D', 'G', 'E', 'I'],
          ['', 'M', '', 'R', 'G', '', '', 'F'],
          ['C', 'R', 'A', 'N', 'E', '', '', 'E']
        ],
        lang: 'en'
      }
    }
  ]
};
