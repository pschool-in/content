export default {
  label: 'Vehicles and Jobs 2',
  id: 'word-sound-7',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Words List',
        text: [
          `# Vehicles`,
          {
            type: 'sitewords',
            text:
              'aeroplane, boat, bus, car, cycle, helicopter, motorbike, ship, tractor, lorry, train, ambulance, auto, cart, excavator, fire engine, van, bulldozer, rocket, submarine',
            width: 80
          },
          `# Jobs`,
          {
            type: 'sitewords',
            text:
              'astronaut, clown, fisherman, postman, teacher, blacksmith, cobbler, goldsmith, potter, weaver, carpenter, diver, nurse, sailor, chef, doctor, police, soldier, barber, washerman',
            width: 80
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Vehicles',
      id: 'sound-vehicles',
      commonData: {
        title: 'Listen to the sound and click on the vehicle.',
        type: 'words',
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, cycle, helicopter, motorbike, ship, tractor, lorry'
        },
        {
          audioOffset: 20,
          words:
            'train, ambulance, auto, cart, excavator, fire engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Jobs',
      id: 'sound-job',
      commonData: {
        title: 'Listen to the sound and click on the picture.',
        type: 'words',
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 40,
          words:
            'astronaut, clown, fisherman, postman, teacher, blacksmith, cobbler, goldsmith, potter, weaver'
        },
        {
          audioOffset: 60,
          words:
            'carpenter, diver, nurse, sailor, chef, doctor, police, soldier, barber, washerman'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Vehicles',
      id: 'dictation-vehicles',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, cycle, helicopter, motorbike, ship, tractor, lorry'
        },
        {
          audioOffset: 20,
          words:
            'train, ambulance, auto, cart, excavator, fire engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Jobs',
      id: 'dictation-job',
      commonData: {
        title: 'Listen to the sound and type the word.',
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 40,
          words:
            'astronaut, clown, fisherman, postman, teacher, blacksmith, cobbler, goldsmith, potter, weaver'
        },
        {
          audioOffset: 60,
          words:
            'carpenter, diver, nurse, sailor, chef, doctor, police, soldier, barber, washerman'
        }
      ]
    }
  ]
};
