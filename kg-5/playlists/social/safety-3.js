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
          
          Handling glassware and sharp items are more important because very easily it causes injuries very easily. So we should handle them with precaution.`
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
              options: 'shouldn’t run, should run, should stay calm, should touch others'
            },
            {
              qText:'Red signal indicates________.',
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
          
          1. A stranger  secretly touching the child’s private parts .
          2. A family member  secretly touching the child’s private part.
          3. A stranger secretly asks a child to touch their private part.
          4. Children shouldn’t accept food, gifts from strangers and should be made aware of the way that, some people bribe kids to perform certain bad touches.
          5. If other children try to touch one another’s body in an uncomfortable way, then the child must be educated on good touch and bad touch.`
        }
      },
      {
        label: 'Good Touch Vs Bad Touch',
        id: '1200',
        type: 'group',
        data: {
          title:
            'Classify the below actions as good touch or bad touch',
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
          Physical harm is *legal (illegal)*.
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
              qText:'Childline number is ____________.',
              options: '1098, 1099, 1097, 1096'
            },
            {
              qText: 'Childline was established to help the children under the age _____.',
              options: 'eighteen, nineteen, twenty, twenty-one'
            },
            {
              qText: 'If a child is under _________ and working in a shop, then it is child labour.',
              options: 'eighteen, nineteen, twenty, twenty-one'
            },
            {
                qText: 'If someone is touching the private part, then immediately you should inform_________.',
                options: 'parents, teachers and nearby police, family members, *all of the above '
            }
          ]
        }
      }
    ]
  };
