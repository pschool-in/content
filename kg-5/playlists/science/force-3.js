export default {
  label: 'Force',
  id: 'force-3',
  lockAfter: 4,
  list: [
    {
      label: 'Force - Reading',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Force: Push and Pull',
        text: `In everyday life, we push or pull things to move them. A push or pull is called force. This force helps us to do many things. It can make an object move. It can  stop a moving object. It can change the shape of an object, change the speed of the moving object and change the size of the object. There are different types of forces that act on a body. 
  When you throw a ball up, no matter how high it goes, it is sure to come down. This is because of gravitational force. This force attracts objects to the center of the earth. 
 When two objects touch each other, a special type of force develops between them. This special force is called friction. Friction slows down movements. When friction is very less, things move easily. When friction is more, it becomes difficult to move things. A wet floor is slippery because there is very little friction. Friction makes it possible for you to write. You cannot hold a pencil in your hand without friction. It would slip out from your hands. The pencil cannot make a mark on the paper without friction.`
      }
    },
    {
      label: 'Fill Up',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `We push or *pull* things to *move* them. A push or pull is called *force*.
Force can change the *shape* of an object.
Friction slows down *movements*. A wet floor is slippery because there is very little *friction*.`
      }
    },
    {
      label: 'Force - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_________ helps to pull big and heavy things?',
            options: 'engine, computer, television'
          },
          {
            qText: 'Kicking a ball is an example of a _________',
            options: 'push, pull, speed'
          },
          {
            qText:
              'A ball is pushed to the top of a hill. When it rolls down, it will _____________',
            options: 'go faster, go slower, stop'
          },
          {
            qText: 'Picking up a ball is an example of _______',
            options: 'pull, push, stretch'
          },
          {
            qText: 'When I ____________________, I move it away from me.',
            options: 'kick a ball, pull a chair'
          },
          {
            qText: "A push or pull cannot change an object's _________ .",
            options: 'weight, direction, shape '
          }
        ]
      }
    },
    {
      label: 'Push and Pull',
      type: 'group',
      id: 'classify-push-pull',
      data: {
        title: 'Drag and drop: Classify push and pull.',
        types: [
          {
            name: 'Push',
            text: 'kicking a ball, switching on light, pedaling cycle '
          },
          {
            name: 'Pull',
            text: 'putting on gloves, lifting weights'
          }
        ]
      }
    },
    {
      label: 'Types of Force',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Types of Force',
        text: `At a broad level, force can be classified into contact and non-contact forces.
 # Contact Force
 When a force is applied by touching the object, it is called contact force.
 eg: lighting a match stick, throwing a ball.
 # Non-Contact Force
 When a force is applied without touching the object, it is called non-contact force.
 Eg: Vaccum cleaner, magnet, gravitation
 # Muscular Force
 The force applied by using parts of our body is called muscular force.
 We use our legs to pedal our bicycle. We use our hands to make some model from clay.
 # Mechanical Force
 The force applied by a machine is called mechanical force.
 Eg: Using bulldozer to dig ground. Grinding using a mixer grinder.
 # Gravitational Force
 The Earth pulls all the objects towards itself. The force applied by the Earth to pull objects towards itself is called gravitational force.
 # Magnetic Force
 A magnet is a material that attracts things made of iron. The force that attracts things is called magnetic force.
 # Frictional Force
 When we roll down a ball on grass ground, it slows down and finally stops. We know that an object cannot stop without force. The force that stopped the ball is frictional force. Force exerted by the surface when an object moves over it is called Frictional force.
 When we use eraser on a paper, the shape of the eraser changes. It is because of the friction between the erasor and the paper.
 Friction is a force between two surfaces in contact or when they slide over one another.
 Early man accidentally discovered fire by rubbing two flint stones together. The frictional force between two stones created a spark.
 If you put your palm together and rub them against each other. You can feel the heat on your palm.`
      }
    },
    {
      label: ' MCQ - 2',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Lighting a match is an example of ',
            options: 'frictional force, magnetic force, gravitational force'
          },
          {
            qText: 'Dried leaves from the tree fall to the ground because of ',
            options: 'gravitational force, frictional force, mechanical force'
          },
          {
            qText: 'The electric fan rotates because of ',
            options: 'mechanical force, muscular force, gravitational force'
          },
          {
            qText: 'We travel on a bicycle using ',
            options: 'muscular force, mechanical force, a force'
          },
          {
            qText: 'The shape of the eraser changes because of ',
            options: 'frictional force, gravitational force, mechanical force'
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
            text: `Gravitation is a pull force.
Magnetic force is a non-contact force.
To ride a bicycle, we use muscular force.`
          },
          {
            name: 'False',
            text: `Magnetic force is always a push force.
We don't need force to stop a moving body.
Gravitation is a contact force.
Magnet attracts things that are made up of iron and plastic.`
          }
        ]
      }
    },
    {
      label: 'Contact Force',
      type: 'group',
      id: 'classify-contact',
      data: {
        title: 'Drag and drop in the right boxes.',
        types: [
          {
            name: 'Contact Force',
            text: 'mechanical, muscular, frictional, kicking a ball'
          },
          {
            name: 'Non-Contact Force',
            text: 'gravitation, magnet, vaccum cleaner'
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'spell',
      label: 'Right Spelling',
      data: {
        title: 'Select the word with the correct spelling.',
        fontSize: '1.3rem',
        noCaps: true,
        text: `accident, accidant, acidant
surface, sarface, surfase, sarfase
different, differant, diferant, diferent
movement, movment
slippery, slipery, slipary, slippary
classified, clasified, classifeid
gravitation, gravetation, gravitetion
muscular, mascular, musculer, masculer
mechanical, machanical, mechanicel, machanicel 
eraser, erasor, erasar `
      }
    },
    {
      label: 'Fillup - 2',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `A *force* is needed to make a stationary object move. 
The force applied with the help of muscle is called *muscular* force.
The reason for the fruits to fall from the tree is *gravitation*.
Force changes the speed and *direction*.
Magnets attracts things made of *iron*.
Early humans discovered fire by rubbing *flint* stones.`
      }
    }
  ]
};
