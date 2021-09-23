export default {
    id: 'humanbody-3',
    label: 'Humanbody-3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Human Body - Reading',
        type: 'passage',
        id: '100',
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
        id: '600',
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
        id: '601',
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
        id: '602',
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
        id: '603',
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
        id: '200',
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
      {
        id: 'fillup-1',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `A part of the body that is used for a particular purpose is called *organ (body part)*. 
          The neck bends forward as well as *backward (sidewards)*. 
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
        id: 'mcq',
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
              qText: 'Some of our body parts can bend. That is why we are able to make ________________ .',
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
        label: 'Sensory Organs - Reading',
        type: 'passage',
        id: '400',
        data: {
          title: 'Sense Organs',
          text: `# Sensory Organs

          Our sensory organs tell us about the situation all around us. The eyes, ears, nose, tongue and skin are our five sensory organs.
          
          1. We can see with our eyes.
          2. We can hear with our ears.
          3. We can smell with our nose. 
          4. We taste things with our tongue. 
          5. We feel things with our skin.
          
          # Co-ordination
          
          When we work, we need to have co-ordination in all the tasks.
          Difficulties may arise due to lack of co-ordination.
          
          # Disability
          
          If any organ does not function well, we may face difficulties in doing our work. We must not give up in the face of difficulties. They can be overcome.
          
          # Overcoming Disability
          
          Some disabilities can be corrected by medical treatment. In some matters, we can take the help of other people. Often, some special devices can be used to overcome the disability.
          
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
        type: 'fillupOptions',
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
        id: '700',
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
        id: '701',
        type: 'classifySentence',
        data: {
          title: 'Classify the sentence based on the sensory organ that gives you the information',
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
        id: '702',
        type: 'classifySentence',
        data: {
          title: 'Classify the sentence based on the sensory organ that gives you the information',
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
        id: 'drag-drop ',
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
        id: '1000',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' Our eyes tell us how __________ something is.',
              options: 'far, tasty, smelly'
            },
            {
              qText:
                'Our ears tell us which direction a _________ is coming from.',
              options: 'sound, smell, breeze'
            },
            {
              qText: 'The smell tells us that the air is _________.',
              options: 'foul, colourless, harsh '
            },
            {
              qText: 'Our ________ tells us that something is hot.',
              options: 'skin, tongue, touch'
            },
            {
                qText: 'Our tongue feels as if it is burning when we eat a __________ .',
                options: 'chilli, ice cream, mango'
            }
          ]
        }
      },
      {
        label: 'Teeth- Reading',
        type: 'passage',
        id: '1100',
        data: {
          title: 'Our Teeth',
          text: `# Teeth

          The teeth that grow when we are infants are called milk teeth. They start falling at seven or eight years of age. Then we get new teeth once again. These are called permanent teeth. If permanent teeth fall, we do not get new teeth in their place. So, we must take care of our teeth.
          
          If our teeth are dirty, foul substances go into our stomach. We can fall ill.
          
          We must wash our hands before we eat.
          We must keep our hair, our nails, our sense organs and the entire body clean`
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
        id: '1500',
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
          We must keep our hair, our nails, our sense organs and the entire
          body *clean*.`
        }
      },
      {
        id: '1600',
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
        type: 'fillupOptions',
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
        id: '1700',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText:
                '____________ start falling at the age of seven or eight.',
              options: 'milk teeth, permanent teeth, teeth'
            },
            {
              qText: 'If rotting _________ remain in the mouth, they cause teeth to fall.',
              options: 'particles, teeth, food'
            },
            {
              qText: 'If we use a brush and ____________ we can clean the gaps between our teeth properly.',
              options: 'toothpaste, neem stick, powder'
            },
            {
              qText:
                'We must clean our ________ and gums while brushing.',
              options: 'teeth, tongue, mouth'
            },
            {
              qText: 'We must keep our five _______ clean.',
              options: 'sense organs, teeth, nails'
            },
          ]
        }
      }
    ]
  };
