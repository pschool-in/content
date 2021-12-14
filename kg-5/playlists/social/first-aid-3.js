export default {
    id: 'first-aid-3',
    label: 'First Aid',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'First Aid',
        type: 'passage',
        data: {
          text: `# First Aid
The immediate help that can be given to an injured person before further treatment is called first aid. After giving first aid an injured person must be immediately taken to the hospital. First aid plays an important role in everyday life. The type of first aid given varies for different injuries.
# For cuts and wounds
1. You must wash your hands thoroughly before giving first aid to an injured person.
2. In case of a deep wound, first remove all the dirt from areas around the wound.
3. Then clean the skin around the wound with a cotton swab dipped in antiseptic lotion.
4. Now tie a bandage around the wound to stop bleeding.
5. In case of a small wound use a band-aid to cover the wound.
# For minor burns
1. Hold the burned area under cool running water.
2. Apply an ice pack on the burnt area for a few minutes.
3. Apply an antiseptic cream on the burned area.
# For insect bites
1. Use a paste of baking soda and cold cream to treat the bite.
2. Then place ice cubes over the affected area.
3. In case of itching use calamine lotion.
# If someone faints
1. When someone faints quickly lie them on the ground with their head at a lower level that the body.
2. Do not crowd around the person and allow fresh air to enter.
3. Sprinkle cold water on the person's face.
# For a nose bleed
1. Pinch the nose for 7-8 minutes and lean forward.
2. When the bleeding stops put a clean wet towel on the face 
3. Breathe through the mouth.
# First-aid Box
First-aid boxes are found in all public places. We should also have one at home. We can buy a first aid kit from the store or make one at home. The basic constituents in a first aid kit is an antiseptic lotion, sterilized gauze, cotton pads, a pair of scissors, band-aids, crepe bandage, burn cream, calamine lotion and basic fever medicine.`
        }
      },
      {
        label: 'Cuts and Wounds',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'wash hands, remove dirt and clean wound, use antiseptic, tie a bandage'
        },
        id: 'sorting-1'
      },
      {
        label: 'Minor burns',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'hold under cool running water, place ice pack, apply antiseptic cream'
        },
        id: 'sorting-2'
      },
      {
        label: 'Insect bite',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'apply paste off baking soda and cold cream, place ice pack, use calamine lotion for itching'
        },
        id: 'sorting-3'
      },
      {
        label: 'Fainting',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'lie down, lower head, allow fresh air to enter, sprinkle cold water'
        },
        id: 'sorting-4'
      },
      {
        label: 'Nose bleed',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'pinch nose, lean forward, use clean wet towel'
        },
        id: 'sorting-5'
      },
      {
        id: 'notes-2',
        label: 'First Aid',
        type: 'passage',
        data: {
          text: `# First aid 
First Aid is given in order to 
1. To save life: First aid given to a patient at the right time can save his life even before taking him to the hospital.
2. To relieve pain till a doctor arrives: First aid given to a person can relieve some pain till the time doctor arrives.
3. To prevent the condition of the patient from getting worse: A person who has met with an accident needs medical attention immediately. If there is no doctor nearby, the condition of the injured person can become critical so first aid is given to prevent his condition from getting worse.
# Snake Bite
When a snake bites someone, it injects poison into the victim. The poison enters the bloodstream and affects the entire body.
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
        id: 'mcq2',
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
        id: 'sorting-5'
      },
      {
        label: 'Snake Bite',
        type: 'sorting',
        data: {
          title:
            'Arrange the steps in first-aid in the correct order.',
          text: 'do not move the patient, tie a cloth on the bite, take to a doctor, give anti-venom'
        },
        id: 'sorting-6'
      },
      {
        id: 'do-dont',
        label: `Do and Don't`,
        type: 'classifySentence',
        data: {
          title: `Do and Don't`,
          types: [
            {
              name: 'Do',
              text: `After first aid, immediately take the patient to a hospital.
Clean the area around the wound to reduce infections.
Always use antiseptic to clean wounds.`
            },
            {
              name: `Don't`,
              text: `Gather around someone when they faint.
Manhandle a fracture.
Directly apply ice on burns.`
            }
          ]
        }
      }
    ]
};