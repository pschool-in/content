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
          The immediate helps that can be given to an injured person before further teatment is called first aid. After giving first aid an injured person must be immediately taken to the hospital. First aid plays and important role in every day life. The type of first aid given varies for different injuries.
          # For cuts and wounds
          1. You must wash your hands thoroughly before giving first aid to an injured person.
          2. In case of deep wound, first remove all the dirt from areas around the wound.
          3. Then clean the skin around the wound with a cotton swab dipped in antiseptic lotion.
          4. Now tie a bandage around the wound to stop bleeding.
          5. In case of small wound use a band-aid to cover the wound.
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
          3. Sprinkle cold water on the persons face.
          # For a nose bleed
          1. Pinch the nose for 7-8 minutes and lean forward.
          2. When the bleeding stops put a clean wet towel on the face 
          3. Breathe trough the mouth.
          # First-aid Box
          First-aid box are found in all public places. We should also have one at home. We can buy a first aid kit from the store or make one at home. The basic constituents in a first aid kit is antiseptic lotion, sterilized gausze, cotton pads, a pair of scissors, band-aids, crepe bandage, burn cream, calamine lotion and basic fever medecine.`
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
      }
    ]
};