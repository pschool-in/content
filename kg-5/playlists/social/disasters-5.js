export default {
  id: 'disasters-5',
  label: 'Disaster Management',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Disasater Management',
      type: 'passage',
      data: {
        text: `# Calamities 
          Some even that occur cause great damage to human life and property. Such events and situations are called emergencies or calamities. When they are caused by natural factors we call them natural calamities.
          # Fire
          In case of fire:
          1. There will be long bell. Listen to it.
          2. Keep calm and do not shout.  
          3. Shut down all the windows.
          4. Walk out of the building and do not run.
          5. Move to an open ground away from the fire.
          # Earthquake
          In case of earthquake:
          1. Keep calm and walk out of the building.
          2. Use the stairs to go down.
          3. Go to an open ground where nothing can fall on you.
          4. If you cannot go out, then you must sit under furniture as a table.
          5. If you are outdoors, do not enter a building immediately after the earthquake stops.
          6. Beware of aftershocks.
          # Tsunami
          Before a tsunami strikes, the water in the sea usually retreats by almost a mile. If you are on a beach or coastal area when the water retreats, immediately rush towards land. Run as far as possible from the sea.
          # Cyclone and Floods
          Cyclone prone India states are Andhra Pradesh, West Bengal, Odisha, Assam, Gujrat and Maharashtra. Floods can also be caused by a cyclone.
          # Drought
          Drought prone areas in India are Uttar Pradesh, Telangana, Chhatisgarh, Haryana, Maharashtra, Odisha, Rajasthan and Tamil Nadu.
          # Disaster Management 
          Advances in technology have made it possible to warn people about some disasters beforehand and to help minimise the damage caused. Floods, cyclones, droughts and sometimes tsunamis canbe predicted. This knowleedge helps us save many lives. After the disaster the government sets up, relief camps for the affected people and provides food, drinking water and bedding. The army is also called in to airlift stranded people and airdrop food. Emergency services are alerted immediately. Medecines are provided to the people as there is a high risk ofan outbreak of diseases. Organizations suchas Red Cross Society and World Health Organization provide voluntary services. People from all over the country donate to relief funds.`,
        title: 'Times of Emergencies'
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
            text: `Red Cross help people during disasters.
              Cyclones are formed over the sea.`
          },
          {
            name: 'False',
            text: `Earthquakes can be predicted.
              During an earthquake we should stay indoors.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `flood, water ovwerflow
        earthquake, aftershock
        tsunami, giant waves
        drought, dry lands
        fire, fire alarm`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `In case of a fire, we should *walk* out of the building.
          *Floods* are caused when rivers break their banks.
          Drought are periods with *no* rainfall.
          Warnings about natural disasters are given through *radio* and television.
          The state of Himachal Pradesh are prone to *cyclones*.`
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
            qText: 'In case of fire what should we do?',
            options: 'walk out of the building, run out of the building'
          },
          {
            qText: 'Which of the following should you do in case of an earthquake?',
            options: 'sit under furniture, stay under a stair, run into any building'
          },
          {
            qText: 'Which of the following is an organization that provides voluntary services?',
            options: 'Red Cross Society, World Health Organization, *all'
          }
        ]
      }
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
            text: `Keep calm and do not run in case of a fire
            In case of an earthquake move to open ground or stay beneath furniture.
            Watch out for warning on radio and television`
          },
          {
            name: `Don't`,
            text: `Ignore warning signs.
            Panic in case of emergency and cause commotion.
            Stay under door or stairs in time of an earthquake.`
          }
        ]
      }
    }
  ]
};
