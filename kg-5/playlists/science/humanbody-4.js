export default {
  id: 'humanbody-4',
  label: 'Humanbody-4',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Digestive System - Reading',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Digestive System',
        text: `We need energy to do our daily activities. We get energy from the food we eat. If we don't take food for some time, we will feel hungry. 
A group of our body parts work together and convert the food we eat into fuel that body needs to function. While eating we first chew the food in our mouth. Saliva present in our mouth helps in breaking the food into small pieces. Your tongue does the work of pushing the food around, and your teeth will do the work of chewing. The food will be made into a soft moist ball which is easy to swallow.
The esophagus is like a flexible pipe and it takes the food from mouth to stomach. Stomach is the place where digestion happens. Acidic fluids present in stomach helps in breaking down the food further. Energy present in our food, is absorbed from the walls of stomach and passed through blood stream. 
Then the food is passed to small intestine. Bile is a digestive juice helps in breaking down the fats when the food passes through small intestine. Bile is created in liver, which is the largest human organ. 
After extracting fats and other nutrients, the waste is passed to large intestine, and finally reaches rectum. 
All the body parts we discussed above, together form the digestive system. It is an important function of our body. Always eat healthy food even if they are less tasty, so that your digestive system will be happy.`
      }
    },
    {
      label: 'Digestive System - Parts',
      type: 'dragAndDrop',
      id: 'dnd',
      data: {
        img: 'digestive.jpg',
        title:
          'Drag and drop the parts of digestive sytem at appropriate places.',
        width: 310,
        height: 380,
        wordWidth: 100,
        words: [
          {
            word: 'esophagus',
            x: 190,
            y: 90
          },
          {
            word: 'stomach',
            x: 215,
            y: 186
          },
          {
            word: 'liver',
            x: 100,
            y: 210
          },
          {
            word: 'small intestine',
            x: 0,
            y: 310
          },
          {
            word: 'large intestine',
            x: 220,
            y: 280
          },
          {
            word: 'rectum',
            x: 190,
            y: 350
          }
        ]
      }
    },
    {
      label: 'Digestive System - MCQ',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText:
              "If we don't take food for a long time, we will feel ________",
            options: 'hungry, sleepy, angry, boring'
          },
          {
            qText: 'Which is the biggest organ in our body?',
            options: 'Liver, Lungs, Heart, Kidney'
          },
          {
            qText: 'Bile helps in breaking ______.',
            options: 'Fat, Glucose, Protein'
          },
          {
            qText: 'What is the final destination of the food we eat?',
            options: 'rectum, large intestine, small intestine, stomach'
          },
          {
            qText: 'What is the digestive juice generated by Liver.',
            options: 'Bile, Enzyme, Acidic acid'
          }
        ]
      }
    },
    {
      label: 'Brain - Reading',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'The Brain',
        text: `Brain is the decision maker of our body. It controls all the movements of the body. It is responsible for human intelligence, memory and imagination. 
Brain is the most important organ for us. That is why, we should wear a helmet when you ride a two wheeler. 
# Structure of the Human brain. 
The brain is kept in a bony case called Skull. Skull is made up of eight immovable bones. The brain is protected by three membranes called meninges. The brain is made up of tiny nerve cells called neurons. The brain is the centre of the nervous system. 
The brain is made up of three parts. 
1. Cerebrum 
2. Cerebellum 
3. Medulla oblongata 
# Cerebrum 
1. It is the largest part of the brain. 
2. It is responsible for our memory. 
3. We are able to learn languages, understand signs and symbols with the help of cerebrum. 
4. The right side of the Cerebrum controls the left side of our body and vice versa. 
5. Cerebrum is responsible for intelligence, imagination and reasoning. 
# Cerebellum 
1. It co-ordinates the movements of the muscles of our body. 
2. It helps to maintain the balance of the body. 
# Medulla oblongata 
1. It is also called the brain stem. 
2. It controls the breathing, heart beat and other involuntary muscles. 
3. It connects the brain to the spinal cord.`
      }
    },
    {
      label: 'Parts of Brain - Practice',
      type: 'dragAndDrop',
      id: 'dnd-2',
      data: {
        img: 'brain.jpg',
        title: 'Drag and drop the parts of the brain at appropriate places.',
        width: 271,
        height: 368,
        wordWidth: 120,
        words: [
          {
            word: 'Cerebrum',
            x: 20,
            y: 10
          },
          {
            word: 'Medulla oblongata',
            x: 125,
            y: 270
          },
          {
            word: 'Cerebellum',
            x: 10,
            y: 310
          }
        ]
      }
    },
    {
      label: 'Brain - MCQ',
      type: 'mcq',
      id: 'mcq-brain',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'What is the largest part of the brain?',
            options: 'Cerebrum, Cerebellum, Medulla oblongata'
          },
          {
            qText: 'Brain is protected by ________.',
            options: 'skull, hair, neurons, spinal cord'
          },
          {
            qText: 'Which part of the brain controls the movement of muscles?',
            options: 'Cerebellum, Medulla oblongata, Cerebrum'
          },
          {
            qText: 'Which part of the brain controls heart beat?',
            options: 'Medulla oblongata, Cerebrum, Cerebellum'
          },
          {
            qText:
              'Which part of the brain connects the brain to the spinal cord?',
            options: 'Medulla oblongata, Cerebrum, Cerebellum'
          },
          {
            qText: 'Medulla oblongata is also known as _________.',
            options: 'brain stem, neck, root of brain'
          },
          {
            qText: 'The brain is made up of tiny nerve cells called _______.',
            options: 'neurons, meninges, nerves'
          },
          {
            qText: 'Which part of the brain helps in learning a language?',
            options: 'Cerebrum, Cerebellum, Medulla oblongata'
          }
        ]
      }
    },
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
4. The heart keeps the blood flowing through the blood vessels which are spread throughout the body.
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
        text: `The *heart* keeps the blood flowing through the blood vessels spread throughout the body.
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
      id: 'name-drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The cavity inside the head is called *cranial* cavity
The cavity in the chest is called *thoracic* cavity
The cavity in  the upper abdomen is called *abdominal* cavity
The cavity in the lower abdomen is called *pelvic* cavity`
      }
    },
    {
      label: 'Journey of food',
      type: 'matchByDragDrop',
      id: 'journey-food',
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
      id: 'true-false-2',
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
      type: 'fillup',
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
            qText: 'We have ___________ lungs.',
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
      id: 'match-body',
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
