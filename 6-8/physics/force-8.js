export default {
  id: 'force-8',
  label: 'Force & Pressure',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Force',
      data: {
        title: 'Force',
        text: `Force causes motion to objects. Force can be either a pull or push.
We can push a car, or we can lift a weight or we can throw a ball. Atleast two objects must interact for a force to come into play. An interaction of one object with another object results in a force between the two objects.
In the game of tug-of-war, two teams pull at a rope in opposite directions. Sometimes the rope simply does not move. It means the forces from both directions are the same. The team that pulls harder, applies a larger force and wins the game.
Forces applied to an object in the same direction add to one another. If two forces act in the opposite direction, the net force is the difference between the two.
The strength of a force is usually expressed by its magnitude. Also, we have to identify the direction in which the force acts. If the magnitude or direction of the applied force changes, its effect also changes.
If more than one force acts on an object, the effect on the object is based on the net force acting on it.
A body at rest can be brought to motion by applying force. A body in motion can be brought to rest by applying force in the opposite direction.
A change in either the speed of an object, or its direction of motion, or both, is described as a change in its state of motion. Thus, a force may bring a change in the state of motion of an object.
Not every force results in a change in the state of motion. For example, if we apply force and push a wall, nothing with happen.
Applying force to chapati dough, will change its shape.`
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'If a body undergoes a change in its state of motion, which of the following should change?',
            options: `either speed or direction of motion
speed
direction of motion
both speed and direction of motion`
          },
          {
            qText: 'To stop a moving ball, we need to apply force',
            options: `in the opposite direction.
in the same direction.
in the perpendicular direction.`
          },
          {
            qText: 'In a tug-of-war, if the rope is stationary, it means',
            options: `both teams apply same force.
both teams have equal members.
the rope is heavy to move.`
          },
          {
            qText: 'The strength of a force is usually measured by _____.',
            options: `its magnitude
its direction
the sum of its magnitude and direction`
          },
          {
            qText: `Who will win in a tug-of-war?`,
            options: `The team that applies larger force.
The team that pulls for a longer time.
The team with more members.`
          }
        ]
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
            text: `Change in state of motion or change in shape happens only through an application of force.
We apply force while walking.
If two forces act on an object in opposite directions, the net force is the difference between the two.`
          },
          {
            name: 'False',
            text: `Application of force on an object always result in change in state of motion or change in shape.
A body will be at rest only if no force acts on it.
Every force applied result in some change of motion or shape.`
          }
        ]
      }
    },

    {
      label: 'Types of Forces - Notes',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Types of Forces',
        text: [
          `Forces are broadly classified into contact and non-contact forces. Muscular force and friction are examples of contact forces. Magnetic, electro-static and gravitational forces are examples of non-contact forces.
# Muscular Force
When we push an object like a school bag or lift a bucket of water, where does the force come from? This force is caused by the action of muscles in our body. The force resulting due to the action of muscles is known as the muscular force.
Animals like bullocks, horses, donkeys and camels are used to perform various tasks for us using their muscular force.
# Friction
A ball rolling along the ground gradually slows down and finally comes to rest. When we stop pedaling a bicycle, it gradually slows down and finally comes to a stop. A car or a scooter also comes to rest once its engine is switched off. Similarly, a boat comes to rest if we stop rowing it. All these happen because of friction.
The force of friction always acts on all the moving objects and its direction is always opposite to the direction of motion. Since the force of friction arises due to contact between surfaces, it is also an example of a contact force.
# Magnetic Force`,
          { type: 'img', src: 'physics/magnet.jpg' },
          `Take a pair of bar magnets. Place the longer side of one of the magnets over three round-shaped pencils. Now bring one end of the other magnet near the end of the magnet placed on the roller. The magnet on the roller will either move towards or away.
Magnets exert forces on one another even if they don't touch each other. Magnetic force is an example of a non-contact force.
# Electrostatic Force`,
          { type: 'img', src: 'physics/straw.jpg' },
          `Take a plastic straw and cut it into nearly two equal pieces. Suspend one of the pieces from the edge of a table with the help of a piece of thread.
Now hold the other piece of straw in your hand and rub its free end with a sheet of paper. Bring the rubbed end of the straw near the suspended straw. Make sure that the two pieces do not touch each other. 
A straw is said to have acquired an electrostatic charge after it has been rubbed with a sheet of paper. Such a straw is an example of a charged body. The force exerted by a charged body on another charged or uncharged body is known as electrostatic force. This force comes into play even when the bodies are not in contact. The electrostatic force, therefore, is another example of a non-contact force.
# Gravity
You know that a coin or a pen falls to the ground when it slips off your hand. Leaves and fruits also fall to the ground when they get detached from the plant. Objects or things fall towards the earth because it pulls them. This force is called the force of gravity, or just gravity. This is an attractive force. Water in rivers flows downward due to the force of gravity.
Gravity is not a property of the earth alone. Every object in the universe, whether small or large, exerts a force on every other object. This force is known as the gravitational force. Earth moves around the Sun and the moon moves around the Earth due to gravitational force.`
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        },
        text: `The strength of a force is usually expressed by its *magnitude*. The effect of more than one force acting on an object depends on its *net force*. A rolling ball comes to rest due to *friction*. Leaves fall from the tree due to *gravity*. Muscular force is an example for *contact* force and magnetic force is an example for *non-contact* force.`
      }
    },
    {
      label: 'Contact vs Non-contact Force',
      id: 'classify',
      type: 'group',
      data: {
        title: 'Classify the below forces as contact or non-contact forces.',
        types: [
          {
            name: 'Contact',
            text: 'Friction, Muscular'
          },
          {
            name: 'Non-contact',
            text: 'Magnetic, Electrostatic, Gravity'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Atleast *two (three)* objects must interact for a force to come into play.
The *strength (direction)* of the force is expressed by its magnitude.
Applying force can change the *shape (state, weight)* of an object.
The force applied by us is called *muscular (human)* force.
*Frictional (Magnetic)* force is always opposite to the direction of motion.`
      }
    },
    {
      id: 'mcq-2',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'River water flows due to ______.',
            options: 'gravitation, rain, friction'
          },
          {
            qText: 'A moving body always has _______.',
            options: `friction, force, pressure`
          },
          {
            qText: 'Which of the following can have electrostatic force?',
            options: 'straw, magnet, iron rod'
          },
          {
            qText: 'The Earth moves around the Sun due to _______.',
            options: `Gravitation, Friction, Magnetism`
          },
          {
            qText: `Which of the following is true about friction?`,
            options: `It tries to bring a moving object to rest.
It is present in both moving objects and objects at rest.
Its direction is along the motion of the object.`
          }
        ]
      }
    },
    {
      label: 'Pressure - Notes',
      type: 'passage',
      id: 'notes-3',
      data: {
        title: 'Pressure',
        text: [
          `Strong winds during a storm or a cyclone can blow away even the rooftops. You also learned that winds and cyclones are caused by differences in air pressure.
Try cutting vegetables with a blunt knife and then with a sharp knife. Which is easier? Try to push a nail into a wooden plank by its head and by the pointed end. Which one will work?
The area over which the force is applied plays a role in making these tasks easier. The force acting on a unit area of a surface is called pressure.
pressure = force / area on which it acts
At this stage, we consider only those forces which act perpendicular to the surface on which the pressure is to be computed.`,
          { type: 'img', src: 'physics/porter.jpg' },
          `Porters place a round piece of cloth on their heads, when they have to carry heavy loads. By doing this they increase the area of contact of the load with their head. So, the pressure on their head is reduced and they find it easier to carry the load.
Smaller the area, larger the pressure on a surface for the same force. The area of the pointed end of the nail is much smaller than that of its head. The same force, therefore, produces a pressure sufficient to push the pointed end of the nail into the wooden plank.
Shoulder bags are provided with broad straps so that the weight is spread over the area. Tools meant for cutting and piercing always have sharp edges.
# Liquids and Gases
Liquid and gases exert pressure on the walls of the container. When we blow a balloon, the air inside the balloon will be denser than the atmospheric air. As the air inside the balloon pushes the wall, the balloon will stretch. If we put a hole in a balloon, the air forces out.
# Atmospheric Pressure
The atmospheric air extends up to many kilometres above the surface of the earth. The pressure exerted by this air is known as atmospheric pressure. The force due to air in a column of the height of the atmosphere and area 15 cm × 15 cm (top area of our head) is nearly equal to the force of gravity on an object of mass 225 kg (2250N). The reason we are not crushed under this force of gravity is that the pressure inside our body is equal to the atmospheric pressure and balances the pressure from outside.`
        ]
      }
    },
    {
      id: 'mcq-3',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which type of knife is good for cutting vegetables?',
            options: 'sharp, heavy, long, iron'
          },
          {
            qText: 'How do we calculate pressure?',
            options: `Dividing force by the area
Multiplying force and area
Adding force and area`
          },
          {
            qText: 'What type of strap is good for a shoulder bag?',
            options: 'broad strap, long strap, narrow strap, cotton strap'
          },
          {
            qText:
              'An ink filler is able to suck ink from the bottle due to _____.',
            options: `atmospheric pressure
the nature of ink
muscular force
gravitational force`
          },
          {
            qText: `What is the reason for strong winds?`,
            options: `Difference in air pressure
Heavy rain
Difference in climate`
          },
          {
            qText: `It is possible to run a nail into a wood because `,
            options: `large force acts on small area
small force acts on large area
the wood is weak and the nail is strong`
          }
        ]
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Atmospheric pressure *decreases (increases)* as we move up in space.
The pressure inside the balloon is *greater (lesser)* than the pressure outside the balloon.
Tools meant for cutting purpose should have *sharp (strong)* edges.
Cyclones are caused due to differences in *air pressure (temperature)*.
Pressure increases if the area on which the force acts *decreases (increases)*.`
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
            text: `Magnetic force is a non-contact force.
Gravitational Forces are always attractive.
Atmospheric pressure is balanced by our body pressure.`
          },
          {
            name: 'False',
            text: `Weak people cannot apply muscular force.
Magnetic forces are always attractive.
Gravitation is present only on the Earth.
Liquid doesn't exert pressure.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `Leaves fall from trees because of this. | GRAVITY | _______
Force that tries to stop all moving objects | FRICTION | _______N
Force acting on per unit area | PRESSURE | _______E
Force exerted by our hands | MUSCULAR | M_______
The strength of a force is measured by its ______. | MAGNITUDE | M________`
      }
    }
  ]
};
