export default {
  id: 'health-3',
  label: 'Health',
  pdf: '',
  lockAfter: 3,
  list: [
    {
      label: 'Cleanliness',
      type: 'passage',
      id: 'cleanliness',
      data: {
        title: 'Cleanliness',
        text: `Maintaining cleanliness is a must have discipline for every human being. We should not forget brushing teeth, taking bath, wearing clean clothes etc.
# Germs
Germs are micro-organisms that affect our body. They are found in all the places. If we do not maintain cleanliness, the germs will infect us and cause many diseases to us.
# Hand Washing
It is important to wash our hands, before and after having the food.
# Steps of hand washing
1. Wet your hands
2. Apply enough soap
3. Rub the palms
4. Rub the back of each hand together
5. Rub both hands holding all fingers
6. Rub the back of the fingers
7. Rub the tip of the fingers
8. Rub the thumbs and the ends of the wrists
9. Rinse both hands properly with enough water
# Benefits of hand washing
1. Kills or removes germs
2. Lowers the risk of diseases like Diarrhoea
3. Prevents eye infections
4. Reduces the risk of respiratory infections`
      }
    },
    {
      label: 'Used vs Not used',
      type: 'group',
      id: 'used-not-used',
      data: {
        title:
          'Classify the given materials based on, if they are used to clean your body',
        types: [
          {
            name: 'Used',
            text: 'toothbrush, toothpaste, soap, shampoo, cotton buds, towel, nail cutter'
          },
          {
            name: 'Not Used',
            text: 'pencil, kite, television, spoon'
          }
        ]
      }
    },
    {
      label: 'Good or Bad',
      id: 'good-bad',
      type: 'classifySentence',
      data: {
        title: 'Classify the activities as good or bad habits.',
        types: [
          {
            name: 'Good',
            text: `Always wash your hands before and after eating food.
Make sure to use soap while washing your hands.
Always maintain cleanliness.`
          },
          {
            name: 'Bad',
            text: `Do not wash hands for a quick snack.
Just wash your hands quickly in water before a meal.`
          }
        ]
      }
    },
    {
      label: 'Hand Washing',
      type: 'sorting',
      id: 'hand-washing',
      data: {
        title: 'Arrange the steps of handwashing in order.',
        text: `Wet your hands.
Apply enough soap.
Rub palms and its backside.
Rub the tip of fingers.
Rinse both hands with enough water.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop2',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `*Germs* are micro organisms that affect our bodies.
It is important to wash our hands to keep ourselves *healthy*. 
Washing hand, *kills* or removes germs.
Washing hands *prevents* eye infections.
Apply enough *soap* while washing hands.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-hygeine',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'World Health Day is observed on ______.',
            options: 'April 7, April 27, May 7, May 27'
          },
          {
            qText: 'Before food, we need to wash our hands with ______.',
            options: 'soap, shampoo, hot water'
          },
          {
            qText: 'Germs cause ______.',
            options: 'sickness, tiredness, happiness'
          },
          {
            qText: 'Which of the following is not a benefit of bathing?',
            options: `It removes tiredness, It removes dirt, It removes odour, It removes germs.`
          },
          {
            qText: 'We should take bath _______.',
            options: 'daily, three times a day, once in three days'
          }
        ]
      }
    },
    {
      label: 'Personal Hygeine',
      type: 'passage',
      id: 'personal-hygenine',
      data: {
        title: 'Personal Hygeine',
        text: `# Using toilets
In the world, nearly one billion people have no access to a toilet at all and they are forced to do open defecation. Open defecation spreads diseases such as cholera and diarrhea. Groundwater is polluted by toilets and it also causes diseases. Children also get affected by intestinal worms which causes anemia. So, it is necessary to use toilets.
# Benefits of using a toilet
1. It prevents diseases like cholera.
2. It offers privacy.
3. It is convenient.
4. It is safe.
# Effects of open defecation.
1. It causes waterborne diseases.
2. Leads to spread of diseases caused by insect carrier.
3. Leads to pollution.
# Importance of Bathing
1. Cleanses the body
2. Removes dirt and odor
3. Protects oneself from infection
4. Improves blood circulation
# Safety measures in Bathroom
1. Do not play with water or run around in the bathroom. You may get hurt.
2. Do not touch sharp objects such as blades, razors and scissors kept in the bathroom.
3. Use hot water under the supervision of an adult only.
4. Do not leave a soap bar on the floor. Someone may slip on it.
5. Do not leave the bathroom floor wet. Dry the floor using a wiper before you leave.
6. Do not touch electric switches with wet hands. You may get hurt with an electric shock.`
      }
    },
    {
      label: 'Right or Wrong',
      id: 'right-wrong',
      type: 'classifySentence',
      data: {
        title: 'Classify the activities as right or wrong.',
        types: [
          {
            name: 'Right',
            text: `Use hot water under the supervision of an adult only.
Do not touch electric switches with wet hands.
Do not leave a soap bar on the floor.`
          },
          {
            name: 'Wrong',
            text: `Touch electric switches with wet hands.
Running around in the bathroom.`
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `Open defecation causes waterborne diseases.
Bathing cleanses the body.
Using toilet prevents spreading of diseases like cholera.`
          },
          {
            name: 'False',
            text: `Bathing slows circulation.
Using toilets causes cholera.`
          }
        ]
      }
    },
    {
      label: 'Safety measures',
      type: 'matchByDragDrop',
      id: 'drag-drop3',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Do not play with water or *run* around in the bathroom. 
Do not touch *sharp* objects such as blades, razors and scissors kept in the bathroom.
Do not leave the bathroom floor *wet*. 
*Dry* the floor using a wiper before you leave.
Do not touch *electric* switches with wet hands. `
      }
    },
    {
      label: 'Protecting Sense Organs',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Protecting Sense Organs',
        text: `By nature, all the sense organs have some ways to protect themselves. For example, the eyelids and lashes protect the eyes from dust and other foreign particles. Our finger tips are protected by nails.
# Eyes
1. We should read under proper light. Reading in too dim or too bright light will make our eyes uncomfortable.
2. We should watch TV from a minimum distance of 6 feet. We should not play video games or watch TV for long hours.
3. If you feel your eyes are itchy, wash them with clean and cold water. Don't rub your eyes with your fist.
If you find it difficult to read the classroom board from your place, tell your parents and see an eye doctor.
# Ears
1. Avoid loud noise.
2. Do not listen to music at higher volume when using earphones or headphones.
3. Do not clean ears with ear buds.
4. Dry your ears after taking bath.
5. Cover your ears while swimming and bathing.
6. Use earplugs or ear muffs (when you are exposed to loud sound).
Consult a doctor if you have pain in ear.
# Nose
1. Do not clean your nose by inserting any object into it.
2. If the nose is blocked due to cold, it is better to use steam to clear it.
3. Do not pick your nose.
# Tongue
1. We should clean our tongue daily with the tongue cleaner while brushing our teeth.
2. A dirty tongue may cause disease and bad breath.
# Skin
1. We should take bath daily.
2. Always use a mild soap.
3. Keep your skin dry and clean.
4. Dry your skin by rubbing gently with a clean cloth.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `If you get itchy eyes, wash your eyes with *cold (hot)* water.
If the nose is blocked due to cold it is better to use *steam (ice)* to clear it.
A dirty *tongue (nose)* may cause bad breath.
Watch television from a minimum distance of *6 (2, 4)* feet.
Do not listen to music at *higher (lower)* volume when using earphones or headphones.
Our finger tips are protected by *nails (skin, nail polish)*.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop4',
      data: {
        text: `Do not clean your *nose* by inserting any object into it.
Do not rub your *eyes* with your fist.
Dry your *ears* after taking bath.
Keep your *skin* dry and clean.
A dirty *tongue* may cause disease and bad breath.`
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq-sense-organs',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What should we do if we have difficulty in reading?',
            options: 'consult an ophthalmologist, consult a dentist, ignore it'
          },
          {
            qText: 'How can we clear our nose if it is blocked due to cold?',
            options: 'using steam, using hot water, using cold water'
          },
          {
            qText: 'Which of the following activities can harm our eyes?',
            options:
              'playing video games for long hours, reading with proper light,  washing with clean and cold water'
          },
          {
            qText: 'What leads to bad breath?',
            options: 'dirty tongue, dirty nose, dirty clothes'
          },
          {
            qText: 'Which of the following activities harm our ears?',
            options:
              '*listening to music at high volumes, *using sharp objects to clean ears, avoiding loud noises'
          }
        ]
      }
    },
    {
      id: 'true-false5',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `We can wash our eyes with cold water.
An eye doctor is known as ophthalmologist.
A dirty tongue may cause disease and bad breath.`
          },
          {
            name: 'False',
            text: `We should always study under very bright light.
We should dry our skin with wet clothes.
Loud noises do not cause hearing loss.`
          }
        ]
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
            qText: 'Our eyes are protected by _____.',
            options: 'eyelids, eyebrows, glasses'
          },
          {
            qText: 'What is the minimum distance to keep while watching TV?',
            options: '6 feet, 6 inch, 60 feet, 60 inch'
          },
          {
            qText: 'We should cover our ears while ______.',
            options: 'swimming, taking bath, watching TV'
          },
          {
            qText: 'Noise levels are measured in _____.',
            options: 'decibels, decimeter, soundmeter'
          },
          {
            qText: 'What are the problems digital eye strain can cause?',
            options: `*dry eyes, *eye strain, *blurred vision, *headache`
          }
        ]
      }
    },
    {
      label: 'Disability',
      type: 'passage',
      id: 'disability',
      data: {
        title: 'Disability',
        text: `# Good touch, Bad Touch
There are body parts that you and others can see and touch like our arms and hands. But, there are also some body parts that no one should see or touch like our chest, between our legs and our bottom. These parts are called private parts. 
It is never right for anyone to look at, touch or talk about your private parts and it is never right for someone older to you to ask you to look, touch or talk about their private parts.
When we are small our mom or dad might touch us to help us to be clean. It is never a secret and it is okay to tell someone about it.
Some touches are good or safe, like when we shake hands. But, some touches are bad or unsafe, like when we hit someone. Bad touches might make you feel sad, angry, scared, or confused. If you do not like any touch or if it makes you sad, angry or scared, tell them to STOP! Scream “STOP!” and run away.
Tell an adult you trust, about the bad touch. Keep telling until you get the help you need.
# Differently-abled
Not everybody can use all five senses. Some cannot use any one or more of the five senses, such people are called Differently-abled.
Helping people is very honorable, and there are plenty of ways by which we can help differently-abled people.
1. Ask first if they need any help from you and follow their lead.
2. Speak clearly and listen to their words well.
3. Use direct words.
4. Never tease them by calling with specific names.
5. Be aware of their aids, do not cause any damage to the aids.
6. Open doors for the disabled.
7. Making way for them.
8. Help them to cross the road.
9. Treat them as normal people.
Braille is a reading and writing method for the visually challenged person. It has a raised pattern that can be read with the fingers.
We do not use the word handicapped or disabled. We use differently-abled.`
      }
    },
    {
      label: 'Good or Bad',
      id: 'good-bad2',
      type: 'classifySentence',
      data: {
        title: 'Classify the following as good or bad touches.',
        types: [
          {
            name: 'Good',
            text: `Shaking hands.
Mother bathing you.`
          },
          {
            name: 'Bad',
            text: `Stranger touching you without your permission.
Someone touching your private parts.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop7',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Some cannot use any one or more of the five senses, such people are called *differently-abled*.
Some touches are *good* and safe, like when we shake hands. 
Some touches are *bad* and unsafe, like when we hit someone.
If you do not like any touch or if it makes you sad, angry or scared, tell them to *STOP*!`
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which of the following is not the right way to treat a differently-abled person?',
            options:
              'call them names, speak slowly and clearly to them, ask them if they need help, treat them as normal people'
          },
          {
            qText:
              'If you see a blind person trying to cross the road what can you do to help them?',
            options:
              'help them cross the road, ignore and walk past them, tease them'
          },
          {
            qText:
              'You see a differently-abled person trying to get into the bus. What can you do?',
            options:
              '*ask them if they need help, *make way for them, *help them get into the bus, walk past them'
          }
        ]
      }
    },
    {
      label: 'Fitness',
      type: 'passage',
      id: 'fitness',
      data: {
        title: 'Physical Fitness',
        text: `# How to stay fit
1. Avoid junk food.
2. Eat fresh and healthy food.
3. Exercise daily.
4. Play outdoor games.
5. Have a balanced diet.
# Importance of Exercise
1. Protects us from diseases
2. Balances our body weight
3. Strengthens our muscles and bones
4. Improves digestion
5. Improves sleep quality
6. Increases our energy level
7. Improves skin health
8. Boosts brain functions and memory
# Did you know? 
Global Hand Washing Day is observed on October 15.
World Toilet Day is observed on November 19.
National Deworming Day is observed on February 10.
Sulabh International Museum of Toilets is in Delhi, India. It exhibits different toilet models from 50 countries across the world - spanning from 3000 BC till the 20th century.
World Health Day is observed on April 7.
The fruits of the Soapberry tree are Saponin-rich and used as a soap substitute.
A condition known as digital eye strain is common among people working at computers all day. This condition leads to dry eyes, eye strain, blurred vision and headache.
Noise levels are measured in decibels .
Any sound over 85 decibel can be harmful to us.
If someone abuses you or hurts you, you can call 1098 and get help.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A condition known as digital eye strain is common among people working at *computers (books)* all day. 
Noise levels are measured in *decibels (joules)*.
Any sound over *85 (15)* dB can be harmful to us.
If someone abuses you or hurts you, you can call *1098 (1908)* and get help.
Braille is a reading and writing method for the *visually (physically)* challenged person.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false3',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Exercise protects us from diseases.
Exercise balances our body weight.
Exercise strengthens our muscles and bones.
Exercise improves digestion.`
          },
          {
            name: 'False',
            text: `Exercise deprives sleep quality.
Exercise reduces our energy level.
Exercise declines skin health.
Exercise slows down brain functions and memory.`
          }
        ]
      }
    },
    {
      label: 'Answer the Following',
      type: 'matchByDragDrop',
      id: 'drag-drop-8',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `Global Hand Washing Day is observed on *October 15*.
World Toilet Day is observed on *November 19*.
National Deworming Day is observed on *February 10*.
World Health Day is observed on *April 7*.`
      }
    }
  ]
};
