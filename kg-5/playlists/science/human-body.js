export default {
  label: 'Human Body',
  id: 'human-body',
  lockAfter: 4,
  list: [
    {
      label: 'Sense Organs',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Sense Organs',
        text: `It is very interesting to learn about our human body. We learn about our body and the external world through our sense organs. Sense organs help us to observe and understand the world around us. We have five sense organs.
# Eyes
They help us to see the things around us. Eye is the most important sense organ as we learn lot of things through seeing. We can see and tell different colors with the help of eyes. We cannot do most of our works with closed eyes.
# Ears
We are able to hear the sounds around us with the help of ears. If we close our ears, we can realize that volume of music or noise will be reduced.
# Nose
Nose helps us to breathe. Apart from that, they also help us to smell our surroundings. Nice food smell increases our appetite. We detect rotten food by its smell. Animals like dog have better smelling ability than us.
# Tongue
Tongue helps our to enjoy our food. It helps us in detecting different tastes like sweet, salty, bitter or sour. 
# Skin
Skin is the largest organ as it is located throughout our body. Through skin we experience pain, temperature, pressure etc. And these help us to protect ourself from danger.`
      }
    },
    {
      label: 'Sense Organs - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'We get to know about the external world through our _____.',
            options: 'sense organs, eyes, brain, ears'
          },
          {
            qText: 'Which is considered as the most important sense organ?',
            options: 'eyes, skin, tongue, nose, ears'
          },
          {
            qText: 'What is the largest organ?',
            options: 'skin, brain, tongue, stomach'
          },
          {
            qText: 'Which organ helps in detecting whether the food is good?',
            options: 'nose, eyes, ears, skin'
          },
          {
            qText: 'Which organ helps in detecting temperature?',
            options: 'skin, nose, eyes, ears'
          }
        ]
      }
    },
    {
      label: 'Internal and External Organs',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Internal and External Organs',
        text: `A part of the body that is used to perform a certain function is called an organ. We use our legs to walk. Hence, our legs are our organs for walking. We use our ears for hearing. Hence, our ears are the organs for hearing.
# External Organs
Organs on the outside of our body are external organs. They can be easily seen. eg: ears, nose, legs
# Internal Organs
Organs that are situated inside the body are called internal organs. It cannot be seen by our eyes.
Many functions go on inside our body. A network of blood vessels is spread throughout the body. Blood flows through them continuously. The air we breathe in is carried to all parts of the body through the blood. The food that we eat is digested. These functions are carried out by different organs called internal organs.`
      }
    },
    {
      label: 'External and Internal Organs',
      type: 'group',
      id: 'external-internal',
      data: {
        title: 'Classify External and Internal Organs.',
        types: [
          {
            name: 'External',
            text: 'eye, nose, skin, ears, fingers'
          },
          {
            name: 'Internal',
            text: 'heart, lungs, brain, kidney, liver'
          }
        ]
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `We cannot see our *internal* organs. 
We breathe *oxygen* through our *nose*.
Blood *vessels* carry oxygen to *every* part of our body.
We experience pain through our *skin*.`
      }
    },
    {
      label: 'Internal Cavities',
      type: 'passage',
      id: 'passage-3',
      data: {
        title: 'Internal Cavities',
        text: `The important internal organs should be protected. The structure of our body is such that our internal organs can remain in their places no matter how much we move. They will remain in their place even while moving fast or standing upside down. There are hollow spaces for these organs inside the head and the torso. They are called cavities.
The cavity inside the head is called the cranial cavity.
The cavity in the torso has three parts. The cavity in the chest is called the thoracic cavity. The cavity inside the abdomen has two parts. They are the abdominal cavity and the pelvic cavity. All the internal organs of the body are situated in these cavities. They are situated in such a way that they will not leave their places and move here and there.`
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
            text: `Internal cavities help in keeping the organs in its place.
            The cavity inside the head is called the cranial cavity.
            The important organs does not move from its original place.`
          },
          {
            name: 'False',
            text: `All important organs are hard in nature.
            The lungs are present in pelvic cavity.`
          }
        ]
      }
    },
    {
      label: 'Heart',
      type: 'passage',
      id: 'passage-4',
      data: {
        title: 'Heart',
        text: `We take in air when we breathe. Our blood carries the air to all parts of the body. The food that we eat gets digested. It is again blood that carries the digested part to every particle of the body. For these purposes, it is necessary to keep blood flowing through the blood vessels that spread throughout the body. It is the function of the heart to keep the blood flowing.
The heart is an important internal organ. It is in the centre of the thoracic cavity, a little to its left. It is slightly bigger than one’s fist. The walls of the heart too are flexible.
1. The heart contracts : The heart becomes smaller.
2. The heart relaxes : The heart returns to its original size.
Place your palm a little to the left of the centre of your chest. You can feel your own heartbeat.
When it contracts the blood in the heart is pushed into the blood vessels. At every contraction, it is pushed further and further. A contraction of the heart is called a ‘heartbeat’. If you place your hand on the middle of the chest a little to the left, you can feel the throbbing of your heart due to the heartbeats.
At the wrist, there is a blood vessel that flows very close to the skin. If you place your fingers there, you can feel the heartbeats. This is called feeling the pulse.
# Do you know ?
When we are sleeping quietly, the pulse becomes slower. When we are running, the pulse becomes faster.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '_______ carries oxygen to all parts of the body.',
            options: 'blood, heart, lungs'
          },
          {
            qText: 'Heart beat can be felt at _______.',
            options: 'wrist, hand, fingers, nails'
          },
          {
            qText: 'Heart is present in the centre of the _________.',
            options: 'thoracic cavity, cranial cavity, pelvic cavity'
          },
          {
            qText: 'While sleeping, our pulse ________.',
            options: 'decreases, increases, remains the same'
          },
          {
            qText:
              'The size of our heart is similar to the size of our ______.',
            options: 'fist, wrist, elbow, palm'
          }
        ]
      }
    },
    {
      label: 'Lungs',
      type: 'passage',
      id: 'passage-5',
      data: {
        title: 'Lungs',
        text: `When we breathe in, we take air in through the nose. The internal organs through which this air is supplied to the body are called lungs.
        The right lung is slightly bigger than the left lung. A pipe-like internal organ carries the air we breathe in into the lungs. It is called the windpipe. The windpipe separates into two branches. Each branch is called a bronchus. When we breathe in, the lungs expand a little. That is why our chest swells up when we breathe in. The functions of the heart and the lungs depend on each other. Both these internal organs are very important. They are situated in the thoracic cavity, inside a cage made of bones called the ribcage. That is why, they are safe and secure.`
      }
    },
    {
      label: 'Fillup',
      id: 'fillup-drag-2',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Our chest *expands* when we *breathe* in.
        Our heart *contracts* while pumping *blood*.
        The doctor puts her fingers on our *wrist* to feel your *pulse*.`
      }
    }
  ]
};
