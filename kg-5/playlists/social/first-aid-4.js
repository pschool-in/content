export default {
    id: 'first-aid-4',
    label: 'First Aid 2',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'First Aid',
        type: 'passage',
        data: {
          text: `# First aid 
          First Aid is given in order to 
          1. To save life: First aid given to a patient at the right time can save his life even before taking him to the hospital.
          2. To relieve pain till a doctor arrives: First aid given to a person can relieve some pain till the time doctor arrives.
          3. To prevent the condition of the patient from getting worse: A person who has met with an accident needs medical attention immediately. If there is no doctor nearby, the condition of the injured person can become critical so first aid is given to prevent his condition from getting worse.
          # Snake Bite
          When a snake bites someone, it injects poison into the victim. The poison enters the blood stream and affects the entire body.
          1. Don’t move the victim as it causes the poison to spread faster.
          2. Tie a piece of cloth on the bitten part to slow down the movement of the infected blood towards the heart.
          3. Take the victim to a doctor immediately.
          4. Anti-venom injection to be given to the victim.
          #  Fracture
          Fracture is caused when a bone in the body breaks. A fracture can occur anywhere e.g. while playing or falling from a tree.
          1. Ensure not to move the fractured part.
          2. Use a splint to give support and prevent the movement of the fractured part e.g. a piece of cardboard can be tied around the injured part.
          3. Take the patient to the doctor immediately.`
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
              qText: 'What must be given to people with snake bite to save them?',
              options: 'anti-venom, prayer, tantrik'
            },
            {
              qText: 'What is used to give support to a fracture?',
              options: 'splint, rubber band, paper'
            },
            {
              qText: 'How can we slow down movement of infected blood in case of snake bite?',
              options: 'tie a cloth on the bite, use a splint to support the wound, apply antiseptic'
            }
          ]
        }
      },
      {
        label: 'Fracture',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'do not move the fractured part, use a splint, take the patient to a doctor'
        },
        id: 'sorting-1'
      },
      {
        label: 'Snake Bite',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'do not move the patient, tie a cloth on the bite, take to a doctor, give anti-venom'
        },
        id: 'sorting-2'
      }
    ]
};