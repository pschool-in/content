export default {
  id: 'humanbody-3',
  label: 'Humanbody-3',
  pdf: '',
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
    },
    {
      label: 'Human Body - Reading',
      type: 'passage',
      id: 'passage-6',
      data: {
        title: 'Our Body',
        text: `# Parts of our Body
1. Head: The head is covered with hair. Below the forehead are two eyes, with eyebrows and eyelashes. On the sides are the ears. In front is the nose. Below the nose, is the mouth and chin. The part that joins the head to the torso is the neck.
2. Torso: The chest, abdomen and back together make up the torso. The part where the arm is joined to the torso is called the shoulder. The leg is joined to the torso at the hip-joint.      
3. Arm: The arm has three parts – upper arm, forearm and hand. The fingers are part of the hand. The upper arm and forearm are joined at the elbow. The forearm and hand are joined at the wrist.       
4. Leg: The leg, has three parts – thigh, shank and foot. Toes are part of the foot. The thigh and shank are joined at the knee. The shank and foot are joined at the ankle.        
# Organ         
A part of the body that is used for a particular purpose is called organ. Organs are further classified as internal and external organs.       
# Body Movement        
1. Neck: The neck bends forward as well as backward. It turns left or right. It also bends left or right.         
2. Arm: We can bend our arm at the shoulder, elbow and wrist. The fingers of our hands can bend too.       
3. Waist: We can bend our torso only at the waist. We can bend forward at the waist.        
4. Leg: Our legs can bend at the hip-joint, the knees and the ankles. Our toes too can bend, but not as much as our fingers.`
      }
    },
    {
      label: 'Head',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The head is covered with *hair*.
Below the forehead are two *eyes*, with *eyebrows* and eyelashes. 
On the sides are the *ears*. 
In front is the *nose*. 
Below the nose, is the *mouth* and chin. 
The part that joins the head to the torso is the *neck*.`
      }
    },
    {
      label: 'Torso',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The chest, *abdomen* and back together make up the torso.
The part where the *arm* is joined to the torso is called the *shoulder*. 
The leg is joined to the torso at the *hip-joint*.`
      }
    },
    {
      label: 'Arm',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The arm has three parts – upper arm, forearm and *hand*. 
The *fingers* are part of the hand. 
The upper arm and forearm are joined at the *elbow*. 
The forearm and hand are joined at the *wrist*.`
      }
    },
    {
      label: 'Leg',
      type: 'matchByDragDrop',
      id: 'drag-drop-5',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The leg has three parts – thigh, *shank* and foot.
*Toes* are part of the foot. 
The thigh and shank are joined at the *knee*. 
The shank and foot are joined at the *ankle*.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-4',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `We use our legs too for several purposes.
We can bend our torso only at the waist.
We can bend our arm at the shoulder, elbow and wrist.`
          },
          {
            name: 'False',
            text: `We can move our toes more than our fingers.
Neck cannot bend backward.
Ankle is a part of our hand.`
          }
        ]
      }
    },
    // Repeated twice in the same playlist
    /*
{
label: 'Internal Vs External',
id: 'group',
type: 'group',
data: {
title: 'Classify the organs as external or internal organs.',
types: [
{
name: 'Internal',
text: 'lungs, kidney, heart, liver, stomach, brain'
},
{
name: 'External',
text: 'nostril, skin, nose, mouth, eyes'
}
]
}
},
*/
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A part of the body that is used for a particular purpose is called *organ (body part)*. 
The neck bends forward as well as *backward (rightside)*. 
We can bend our arm at the shoulder, *elbow (knee)* and wrist.
The *fingers (toes)* of our hands can bend.
We can bend our torso only at the *waist (hips)*. 
We can bend *forward (backward)* at the waist.
Our legs can bend at the hip-joint, the *knees (elbow)* and the ankles.
Our toes *can (cannot)* bend, but not as much as our fingers.`
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' The leg is joined to the torso at the ______________.',
            options: 'hip-joint, waist, shoulder'
          },
          {
            qText:
              'The part that joins the foot and the ___________ is the ankle.',
            options: 'shank, thigh, knee'
          },
          {
            qText:
              'Some of our body parts can bend. That is why we are able to make ________________ .',
            options: 'movements, run, sit'
          },
          {
            qText: 'No two persons are exactly __________ .',
            options: 'alike, same, different'
          }
        ]
      }
    },
    {
      label: 'Disabilities - Reading',
      type: 'passage',
      id: 'reading-5',
      data: {
        title: 'Sense organs and disability',
        text: `# Sensory Organs
Our sensory organs tell us about the situation all around us. The eyes, ears, nose, tongue and skin are our five sensory organs.
1. We can see with our eyes.
2. We can hear with our ears.
3. We can smell with our nose. 
4. We taste things with our tongue. 
5. We feel things with our skin.
# Co-ordination
When we work, we need to have co-ordination in all the tasks. Difficulties may arise due to lack of co-ordination.
# Disability
If any organ does not function well, we may face difficulties in doing our work. We must not give up in the face of difficulties. They can be overcome.
# Overcoming Disability
Some disabilities can be corrected by medical treatment. In some matter, we can take the help of other people. Often, some special devices can be used to overcome the disability.
1. If we cannot see well, we can use spectacles.
2. If we cannot see at all, we can make use of sounds, or feel with our hands to get things done.
3. A person who cannot hear well, can use a hearing aid.
4. Those who cannot hear at all, can use sign language.
5. If there is a defect in the leg, a special wheelchair can be used.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `If we cannot see well, we can use *spectacles (walking stick)*.
If we cannot see at all, we can make use of *sounds (hearing aid), or feel with the hands to get things done.
A person who cannot hear well, can use a *hearing aid (translator)*.
Those who cannot hear at all, can use *sign (braille)* language.
If there is a defect in the leg, a special *wheelchair (prosthetic leg)* can be used.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-5',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Some disabilities can be corrected by medical treatment.
Difficulties may arise due to lack of co-ordination.
Our sensory organs tell us about the situation all around us.`
          },
          {
            name: 'False',
            text: `Disabilities cannot be overcome.
Eyes help to smell.
Sign language is used by blind.`
          }
        ]
      }
    },
    {
      label: 'Eyes or Ears',
      id: 'eyes-ears',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentence based on the sensory organ that gives you the information',
        types: [
          {
            name: 'Eyes',
            text: `See the sunrise.
There is a bump in the road.
There is a rock in your path.`
          },
          {
            name: 'Ears',
            text: `Cuckoo is singing
Someone is calling out your name
Music is loud`
          }
        ]
      }
    },
    {
      label: 'Nose or Tongue',
      id: 'nose-tongue',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentence based on the sensory organ that gives you the information',
        types: [
          {
            name: 'Nose',
            text: `Rose has a sweet smell.
Incense stick has a nice fragrance.
My socks are stinking.`
          },
          {
            name: 'Tongue',
            text: `Apple is sweet.
The medicine is bitter.
The curry is too salty.`
          }
        ]
      }
    },
    {
      label: 'Sensory Organs',
      type: 'matchByDragDrop',
      id: 'drag-drop-22',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `We can see with our *eyes*.
We can hear with our *ears*.
We can smell with our *nose*. 
We taste things with our *tongue*. 
We feel things with our *skin*.`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: 'mcq-4',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Our eyes tell us how __________ something is.',
            options: 'far, tasty, smelly',
            feedback:
              'Our eyes help us to estimate how far or near an object is from us'
          },
          {
            qText:
              'Our ears tell us which direction a _________ is coming from.',
            options: 'sound, smell, breeze',
            feedback:
              'The tiny hairs and receptors in our ear help us to recognize the direction from which the sound is approaching.'
          },
          {
            qText: 'The smell tells us that the air is _________.',
            options: 'foul, colourless, harsh ',
            feedback:
              'Our nose helps us to sense the various scents around us and help to differentiate them as a sweet fragrance or foul odor.'
          },
          {
            qText: 'Our ________ tells us that something is hot.',
            options: 'skin, tongue, touch',
            feedback:
              'Our sense of touch helps us feel if something is hot or cold'
          },
          {
            qText:
              'Our tongue feels as if it is burning when we eat a __________ .',
            options: 'chilli, ice cream, mango'
          }
        ]
      }
    },
    {
      label: 'Teeth- Reading',
      type: 'passage',
      id: 'reading-6',
      data: {
        title: 'Our Teeth',
        text: `# Teeth
The teeth that grow when we are infants are called milk teeth. They start falling at seven or eight years of age. Then we get new teeth once again. These are called permanent teeth. If permanent teeth fall, we do not get new teeth in their place. So, we must take care of our teeth.
If our teeth are dirty, foul substances go into our stomach. We can fall ill. We must wash our hands before we eat. We must keep our hair, our nails, our sense organs and the entire body clean`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-10',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Infected wound ooze pus.
We must rinse our mouth repeatedly with water after eating something.
First set of teeth is milk teeth.`
          },
          {
            name: 'False',
            text: `Last set of teeth is milk teeth.
We start losing milk teeth at 12 years of age.
Clean gums may make us ill. `
          }
        ]
      }
    },
    {
      label: 'Teeth',
      type: 'matchByDragDrop',
      id: 'teeth',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The teeth we get when we are small are called *milk* teeth. 
If *permanent* teeth fall, we do not get new teeth in their place. 
We must take care of our *teeth*.
If our teeth are *dirty*, foul substances go into our *stomach*. 
We must wash our *hands* before we eat.
We must keep our hair, our nails, our sense organs and the entire body *clean*.`
      }
    },
    {
      id: 'match-10',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `First teeth, milk teeth
Last teeth, permanent teeth
Toothbrush, toothpaste
Rotting, loose teeth
Infection, pus`,
        title: 'Match the following'
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Because of the rotting particles in the mouth, our teeth *decay (cracks)*.
We must brush our teeth in the *morning (evening)* and before going to bed at night.
We must clean our *gums (mouth)* and tongue.
*Neem (Tulsi)* or babul sticks are sometimes used for cleaning teeth.
Infected cut or wound may start oozing *pus (blood)*.`
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-5',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '____________ start falling at the age of seven or eight.',
            options: 'milk teeth, permanent teeth, teeth'
          },
          {
            qText:
              'If rotting _________ remain in the mouth, they cause teeth to fall.',
            options: 'particles, teeth, food'
          },
          {
            qText:
              'If we use a brush and ____________ we can clean the gaps between our teeth properly.',
            options: 'toothpaste, neem stick, powder'
          },
          {
            qText: 'We must clean our ________ and gums while brushing.',
            options: 'teeth, tongue, mouth'
          },
          {
            qText: 'We must keep our five _______ clean.',
            options: 'sense organs, teeth, nails'
          }
        ]
      }
    }
  ]
};
