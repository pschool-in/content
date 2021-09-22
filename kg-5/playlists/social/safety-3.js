export default {
  id: 'safety-3',
  label: 'Safety-3',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Safety - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Safety',
        text: `# What is Safety?

          Our life is very important and precious. To avoid unnecessary accidents, we should follow some safety measures or precautionary steps in our daily life. Being cautious will always protect us from danger. 
          
          # Accidents
          
          Some of the accidents are caused due to electricity, fire, water, glassware, sharp weapons, poisonous chemicals, pesticides, vehicles, toxic organisms, etc. Moreover, it is very important to learn how to act in accidents. This will help more to prevent further damage. 
          
          # Common reasons for the accident
          1. Violation of rules
          2. Carelessness
          3. Urgency
          4. Ignoring the safety rules
          
          # Fire Safety
          
          Fire is one of the important elements, which can create and destroy things. In our day-to-day life, fire is used in different ways and  we should  always handle fire with care.  Examples of fire accidents:
          1. electrical short circuits
          2. gas cylinder leakages
          3. explosives and crackers, 
          4. mishandling the highly inflammable things.
          So, it is necessary to handle fire with precaution. Moreover, we should be more aware of how to act during fire accidents.
          
          # Water Safety
          
          Water is one of the most important elements in our life. We should take necessary precautions while visiting or bathing in lakes, ponds, rivers, and sea. Strictly, we should not swim in a prohibited area in the water bodies.
          
          # Electrical Safety
          
          Electricity is used everywhere and it is difficult to live a life without electricity. While handling electric-related things, we should be more careful and handle with precaution. This prevents us from getting electrocuted.
          
          # Road Safety
          
          Road accidents are one of the most common things that we see in our daily life. It is important to follow the road safety rules while traveling. Violating the rules leads to more road accidents. Following the traffic rules and pedestrian rules help to prevent road accidents.
          
          #  Stay away from Toxic organisms/substances
          
          We should stay away from toxic substances like poisonous chemicals, pesticides, etc. We should use these things with precaution to avoid accidents. We are living among toxic organisms like the scorpion, snakes, wasps, etc. These kinds of organisms are more dangerous and we should always be aware of our surroundings. 
          
          # Sharp items and glasswares
          
          Handling glassware and sharp items is more important because it causes injuries very easily. So we should handle them with precaution.`
      }
    },
    {
      label: 'Road Safety Vs Fire Safety',
      id: '300',
      type: 'group',
      data: {
        title:
          'Classify the below things based on the category of road safety and fire safety',
        types: [
          {
            name: 'Road Safety',
            text: 'Zebra crossing, traffic signal, wearing a helmet, stop line'
          },
          {
            name: 'Fire Safety',
            text: 'fire extinguisher, water, fire alarm, sand'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      id: '600',
      data: {
        isPractice: false,
        title: 'Click the blanks and fill it with the right word.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Do not touch the electrical appliances like an iron box when they are switched *on (off)*.
          After cooking, we should *close (open)* the valve of the cylinder.
          Always use the sharp items in the *presence (absence)* of an adult.
          The Green signal says *go (ready)*.
          When smoke spreads, it is good to *cover (open)* the nose and mouth.`
      }
    },
    {
      label: 'True or False',
      id: '200',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Peeping into the well is very dangerous. 
              It is very dangerous to pour water during an electrical short circuit. 
              Always, we should walk on the pavement.`
          },
          {
            name: 'False',
            text: `It is right to cross the road in the red signal.
              Mishandling of sharp items will not cause injuries.`
          }
        ]
      }
    },
    {
      id: '500',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Shock, Electricity
          Traffic rules, Road safety
          Life jacket, Survival
          Wasps, Dangerous insect
          Burning, Fire accident`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `An insect’s bite causes *inflammation* in the skin.
          Handling the electric appliances with wet hands leads to * electrocution *.
          If there is any burn in your skin, then you shouldn’t prick with any *object*.
          *Kerosene* is an example of a highly inflammable substance.
          *Television* is an example of an electrical appliance.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: '1000',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' If your clothes catch fire, then you_______.',
            options:
              'shouldn’t run, should run, should stay calm, should touch others'
          },
          {
            qText: 'Red signal indicates________.',
            options: 'stop, ready, go, none of the above'
          },
          {
            qText: 'Pedestrians should cross the road only at _________.',
            options: 'Zebra crossing, Stop line, animal crossing, All the above'
          },
          {
            qText: '________passes the electricity.',
            options: 'Wood, Water, Metal, *All the above'
          },
          {
            qText: ' ____________ is an example of toxic organism.',
            options: 'Snake, Rabbit, Dog, Cat'
          }
        ]
      }
    },
    {
      label: 'Child Safety - Reading',
      type: 'passage',
      id: '1100',
      data: {
        title: 'Child Safety',
        text: `# Child Safety

          Child line service was established across India under the Ministry of Women and Child Development. It is first established as a project in the year 1996. Child-line was organized to help children under age 18 years. In India, many children under 18  are used for child labour. 
          
          # Child Safety Laws
          
          1. Teaching a child about a certain profession isn’t bad, but making the child work for money and outsourcing their labour to someone else for money is called child-labour. 
          2. The National Child Labour Projects (NCLP) was established to rehab child labour.
          3. Integrated Child Development Services (ICDS) is a government program for early childhood care & development. 
          4. The prohibition of the child marriage act is established to prevent child marriage. 
          5. The Indian penal code 1860 is for punishing the people involved in child trafficking.
          
          # Good touch
          
          1. Parents touching their children appropriately.
          2. Doctor examining the child in presence of parents, in the same room.
          3. Hug, high-five with family and friends.
          
          # Bad touch
          
          1. A stranger secretly touching the child’s private parts.
          2. A family member  secretly touching the child’s private part.
          3. A stranger secretly asks a child to touch their private part.
          4. Children shouldn’t accept food, gifts from strangers and should be made aware of the way that, some people bribe kids to perform certain bad touches.
          5. If other children try to touch each other’s body in an uncomfortable way, then the child must be educated on good touch and bad touch.`
      }
    },
    {
      label: 'Good Touch Vs Bad Touch',
      id: '1200',
      type: 'group',
      data: {
        title: 'Classify the below actions as good touch or bad touch',
        types: [
          {
            name: 'Good Touch',
            text: 'Handshake, Hug, High-five'
          },
          {
            name: 'Bad Touch',
            text: 'Touching chest, Touching private parts, Touching lips'
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '1300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The National Child Labour Projects (NCLP) was established to rehab the *child labour*. 
          The Indian penal code 1860 is for punishing the people involved in *child trafficking*.
          If a stranger secretly asks you to touch their body part unnecessarily, then it is *unsafe*.
          ICDS is a government program for early *childhood* care and development.
          If a family member secretly touching the children’s private part, then it is a *bad touch*.`
      }
    },
    {
      label: 'True or False',
      id: '1400',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `If parents are touching their children appropriately, then it is a good touch.
              Childline provides safety and protection for children.
              Childline was established as a project in the year 1996.`
          },
          {
            name: 'False',
            text: `If a stranger touches the private part, then it is a good touch.
              Child labour is legal.`
          }
        ]
      }
    },
    {
      id: '1500',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `NCLP, Child Labour
          1098, Childline number
          1820, Indian penal code
          Child marriage act, under 18 years
          ICDS, early childhood care`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The prohibition of the child marriage act is established to prevent *child (adult)* marriage.
          The Ministry of Women and Child Development was established to protect *children (adults)*. 
          Physical harm is *illegal (legal)*.
          Childline also helps children who are neglected by their *parents (teachers)*.
          If a stranger secretly touching the children’s private parts then it is *bad (good)*touch.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: '1600',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Childline was first established in the year __________.',
            options: '1996, 1995, 1994, 1993'
          },
          {
            qText: 'Childline number is ____________.',
            options: '1098, 1099, 1097, 1096'
          },
          {
            qText:
              'Childline was established to help the children under the age _____.',
            options: 'eighteen, nineteen, twenty, twenty-one'
          },
          {
            qText:
              'If a child is under _________ and working in a shop, then it is child labour.',
            options: 'eighteen, nineteen, twenty, twenty-one'
          },
          {
            qText:
              'If someone is touching the private part, then immediately you should inform_________.',
            options:
              'parents, teachers and nearby police, family members, *all of the above '
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch - Safety',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['F', 'I', 'R', 'E', 'A', 'L', 'A', 'R', 'M'],
            marker: [0, 0, 8, 8]
          },
          {
            word: ['S', 'A', 'N', 'D'],
            marker: [4, 3, 4, 6]
          },
          {
            word: ['S', 'I', 'G', 'N', 'A', 'L'],
            marker: [4, 3, 9, 3]
          },
          {
            word: ['W', 'A', 'T', 'E', 'R'],
            marker: [7, 5, 3, 9]
          },
          {
            word: ['S', 'T', 'O', 'P', 'L', 'I', 'N', 'E'],
            marker: [0, 2, 0, 9]
          },
          {
            word: ['H', 'E', 'L', 'M', 'E', 'T'],
            marker: [9, 1, 9, 6]
          }
        ],
        table: [
          ['F', '', '', '', '', '', '', '', '', ''],
          ['', 'I', '', '', '', '', '', '', '', 'H'],
          ['S', '', 'R', '', '', '', '', '', '', 'E'],
          ['T', '', '', 'E', 'S', 'I', 'G', 'N', 'A', 'L'],
          ['O', '', '', '', 'A', '', '', '', '', 'M'],
          ['P', '', '', '', 'N', 'L', '', 'W', '', 'E'],
          ['L', '', '', '', 'D', '', 'A', '', '', 'T'],
          ['I', '', '', '', '', 'T', '', 'R', '', ''],
          ['N', '', '', '', 'E', '', '', '', 'M', ''],
          ['E', '', '', 'R', '', '', '', '', '', '']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword',
      type: 'crossword',
      label: 'Crossword - Safety',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Wasps',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Dangerous insect',
            direction: 'across'
          },
          {
            word: 'ZebraCross',
            marker: {
              x: 9,
              y: 0
            },
            hint: 'Pedestrians rule',
            direction: 'down'
          },
          {
            word: 'Snake',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'It is a toxic reptile',
            direction: 'down'
          },
          {
            word: 'Kerosene',
            marker: {
              x: 1,
              y: 4
            },
            hint: 'highly inflammable liquid substance',
            direction: 'across'
          },
          {
            word: 'Pesticides',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'Chemical substance that used in agriculture',
            direction: 'across'
          },
          {
            word: 'Helmet',
            marker: {
              x: 6,
              y: 3
            },
            hint: 'While driving, we should wear it',
            direction: 'down'
          },
          {
            word: 'Knife',
            marker: {
              x: 2,
              y: 7
            },
            hint: 'Object that used to chop vegetables',
            direction: 'across'
          }
        ],
        table: [
          ['W', 'A', 'S', 'P', 'S', '', '', '', '', 'Z'],
          ['', '', 'N', '', '', '', '', '', '', 'E'],
          ['', '', 'A', '', '', '', '', '', '', 'B'],
          ['', '', 'K', '', '', '', 'H', '', '', 'R'],
          ['', 'K', 'E', 'R', 'O', 'S', 'E', 'N', 'E', 'A'],
          ['', '', '', '', '', '', 'L', '', '', 'C'],
          ['', '', '', '', '', '', 'M', '', '', 'R'],
          ['', '', 'K', 'N', 'I', 'F', 'E', '', '', 'O'],
          ['', '', '', '', '', '', 'T', '', '', 'S'],
          ['P', 'E', 'S', 'T', 'I', 'C', 'I', 'D', 'E', 'S']
        ],
        lang: 'en'
      }
    },
    {
      id: 'wordsearch-2',
      type: 'wordsearch',
      label: 'WordSearch - Child Safety',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['H', 'U', 'G'],
            marker: [0, 0, 2, 0]
          },
          {
            word: ['H', 'I', 'G', 'H', 'F', 'I', 'V', 'E'],
            marker: [0, 0, 0, 7]
          },
          {
            word: ['H', 'A', 'N', 'D', 'S', 'H', 'A', 'K', 'E'],
            marker: [0, 3, 8, 3]
          },
          {
            word: ['H', 'U', 'M', 'B', 'L', 'E'],
            marker: [5, 3, 5, 8]
          },
          {
            word: ['M', 'O', 'L', 'E', 'S', 'T'],
            marker: [8, 0, 8, 5]
          },
          {
            word: ['C', 'A', 'U', 'T', 'I', 'O', 'N'],
            marker: [6, 2, 6, 8]
          }
        ],
        table: [
          ['H', 'U', 'G', 'S', 'E', 'H', 'C', 'F', 'M'],
          ['I', 'J', 'K', 'K', 'I', 'T', 'L', 'H', 'O'],
          ['G', 'Y', 'F', 'K', 'V', 'M', 'C', 'V', 'L'],
          ['H', 'A', 'N', 'D', 'S', 'H', 'A', 'K', 'E'],
          ['F', 'D', 'P', 'D', 'C', 'U', 'U', 'W', 'S'],
          ['I', 'L', 'W', 'S', 'V', 'M', 'T', 'C', 'T'],
          ['V', 'T', 'C', 'B', 'I', 'B', 'I', 'Y', 'K'],
          ['E', 'B', 'O', 'V', 'W', 'L', 'O', 'Y', 'S'],
          ['A', 'Z', 'G', 'O', 'G', 'E', 'N', 'A', 'I']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword-2',
      type: 'crossword',
      label: 'Crossword - Child Safety',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Childline',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Government organization to help children',
            direction: 'across'
          },
          {
            word: 'ChildAbuse',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Abusing Child',
            direction: 'down'
          },
          {
            word: 'Labour',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'outsourcing child for money',
            direction: 'down'
          },
          {
            word: 'Hug',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'It is a good touch',
            direction: 'across'
          },
          {
            word: 'Molest',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'Bad touch',
            direction: 'across'
          },
          {
            word: 'Patting',
            marker: {
              x: 9,
              y: 1
            },
            hint: 'Good touch in shoulders',
            direction: 'down'
          },
          {
            word: 'Eighteen',
            marker: {
              x: 0,
              y: 9
            },
            hint:
              'Childline was established to help the children under this age',
            direction: 'across'
          }
        ],
        table: [
          ['C', 'H', 'I', 'L', 'D', 'L', 'I', 'N', 'E', ''],
          ['H', 'U', 'G', '', '', 'A', '', '', '', 'P'],
          ['I', '', '', '', '', 'B', '', '', '', 'A'],
          ['L', '', '', '', 'M', 'O', 'L', 'E', 'S', 'T'],
          ['D', '', '', '', '', 'U', '', '', '', 'T'],
          ['A', '', '', '', '', 'R', '', '', '', 'I'],
          ['B', '', '', '', '', '', '', '', '', 'N'],
          ['U', '', '', '', '', '', '', '', '', 'G'],
          ['S', '', '', '', '', '', '', '', '', ''],
          ['E', 'I', 'G', 'H', 'T', 'E', 'E', 'N', '', '']
        ],
        lang: 'en'
      }
    }
  ]
};
