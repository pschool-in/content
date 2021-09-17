export default {
    id: 'humanbody-4',
    label: 'Humanbody-4',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'A look inside Our Body- Reading',
        type: 'passage',
        id: '100',
        data: {
          title: 'Our Body',
          text: `# Points to remember.

          1. The numerous important functions that go on inside our body are carried out by different organs. These organs are inside our body and cannot be seen from the outside. They are called internal organs.
          2. The body is structured in such a way that the internal organs remain safe within the cavities inside the head and the torso.
          3. The oesophagus carries the swallowed food from the throat to the stomach.It is situated in the thoracic cavity.
          4. The heart keeps the blood flowing through the blood vessels spread throughout the body.
          5. The heart is continuously contracting and relaxing.
          6. The contractions of the heart push the blood from the heart into the blood vessels.
          7. The lungs are the organs through which the air we breathe in is supplied to the whole body. 
          8. The right lung is a little bigger than the left lung.
          9. The heart and the lungs are held safely in the ribcage in the thoracic cavity.
          10. Our brain is a very important internal organ. It has a safe place inside the skull. 
          11. Controlling movements, becoming aware of emotions and interpreting the information collected by the sensory organs are the functions of the brain.`
        }
      },
      {
        label: 'Organs-1',
        type: 'matchByDragDrop',
        id: 'organs-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The *heart* keeps the blood flowing through the blood vessels spread
          throughout the body.
          The heart is continuously *contracting* and relaxing.
          The contractions of the heart *push* the blood from the heart into the blood vessels. `
        }
      },
      {
        label: 'Organs-2',
        type: 'matchByDragDrop',
        id: 'organs-2',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The *lungs* are the organs through which the air we breathe in is supplied to the whole body. 
          The *right* lung is a little bigger than the left lung.
          The heart and the lungs are held safely in the *ribcage* in the *thoracic* cavity.
          Our *brain* is a very important internal organ. It has a safe place inside the *skull*. `
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: '601',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The cavity inside the head - *cranial* cavity
          The cavity in the chest - *thoracic* cavity
          The cavity in  the upper abdomen - *abdominal* cavity
          The cavity in the lower abdomen - *pelvic* cavity`
        }
      },
      {
        label: 'Journey of food',
        type: 'matchByDragDrop',
        id: '602',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The journey of food in our body begins in the *mouth*. 
          The internal organs in the *abdomen* help to digest it. 
          The undigested, unwanted part is passed out through the *anus* in the form of *faeces*. That is where the journey *ends*.
          *Food* travels through a pipe-like pathway from the mouth to the anus. 
          It is called the *alimentary* canal. It is about *9* metres long. 
          The *oesophagus* is a part of the alimentary canal.`
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
              text: `The brain controls the entire body.
              The heart pumps blood.
              Food pipe is in the thoracic cavity.`
            },
            {
              name: 'False',
              text: `Oxygenated blood flows through veins.
              Beating of heart is a voluntary action.
              Lungs pump blood.`
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
          text: `The body is structured in such a way that the internal organs remain safe within the *cavities (spaces)* inside the head and the torso.
          The *oesophagus (windpipe)* carries the swallowed food from the throat to the stomach.
          The heart keeps the blood flowing through the *blood vessels (veins)* spread throughout the body.
          Controlling movements, becoming aware of *emotions (movements)* and interpreting the information collected by the *sensory organs (internal organs)* are the functions of the *brain (heart)*.`
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
              qText: ' The internal organ that help digest food is __________.',
              options: 'stomach, lungs, heart'
            },
            {
              qText:
                'We have ___________ lungs.',
              options: '2, 4, 3'
            },
            {
              qText: 'Every __________ of the heart is called a heartbeat',
              options: 'contraction, relaxation, pulse'
            },
            {
              qText: 'We become _________ of all our emotions in the brain.',
              options: 'aware, unaware, lost'
            },
            {
                qText: 'The structure of the human body is very ___________ .',
                options: 'complex, simple, compound'
            }
          ]
        }
      },
      {
        id: '1600',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Supply blood, heart
          Breathing, lungs
          Carry food, alimentary canal
          Control center, brain`,
          title: 'Match the following'
        }
      }
    ]
  };
