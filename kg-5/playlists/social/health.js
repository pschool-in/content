export default {
  label: 'Health',
  id: 'health',
  list: [
    {
      label: 'Cleanliness',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Cleanliness',
        text: [
          `Maintaining cleanliness is a must have discipline for every human being. We should not forget brushing teeth, taking bath, wearing clean clothes etc.`,
          `# Germs`,
          `Germs are micro-organisms that affects our body. They are found in all the places. If we do not maintain cleanliness, the germs will infect us and cause many diseases to us.`,
          `# Hand Washing`,
          `It is important to wash our hands, before and after having the food.`,
          `# Bathing`,
          `Bathing cleanses our body. It removes dirt and odour. It protects us from infection. It improves blood circulation.`,
          `Note: World Health Day is observed on April 7th every year..`
        ]
      }
    },
    {
      label: 'Hand Washing',
      type: 'sorting',
      id: 'hand-washing',
      data: {
        title: 'Order the steps while hand washing.',
        text: `Wet your hands.
Apply enough soap.
Rub palms and its backside.
Rub the tip of fingers.
Rinse both bands with enough water.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq',
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
            options: `It removes tiredness.
It removes dirt.
It removes odour.
It removes germs.`
          },
          {
            qText: 'We should take bath _______.',
            options: 'daily, three times a day, once in three days'
          }
        ]
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
1. We should read under proper light. Reading in too dim or too bright light will make our eyes uncomforatable.
2. We should watch TV from a minimum distance of 6 feet. We should not play video games or watch TV for long hours.
3. If you feel your eyes are itchy, wash them with clean and cold water. Don't rub your eyes with your fist.
If you find it difficult to read the classroom board from your place, tell your parents and see an eye doctor.
Note: An eye doctor is known as ophthalmologist.
A condition known as digital eye strain is common among people working at computers all day.  This condition leads to dry eyes, eye strain, blurred vision and headache.
# Ears
1. Avoid loud noise.
2. Do not listen to music at higher volume when using earphones or headphones.
3. Do not clean ears with ear buds.
4. Dry your ears after taking bath.
5. Cover your ears while swimming and bathing.
6. Use earplugs or ear muffs (when you are exposed to loud sound).
Consult a doctor if you have pain in ear.
Hearing loss due to exposure to loud noises can be avoided.
Noise levels are measured in decibels (dB). Any sound over 85dB can be harmful to us.
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
      id: 'true-false',
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
            options: `* dry eyes
* eye strain
* blurred vision
* headache`
          }
        ]
      }
    }
  ]
};
