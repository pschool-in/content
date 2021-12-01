export default {
  label: 'Vehicles and Jobs',
  id: 'sound-7',
  list: [
    {
      type: 'slides',
      id: 'vehicles',
      label: 'Vehicles',
      commonData: {
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'aeroplane, boat, bus, car, cycle, helicopter, motorbike, ship, tractor, lorry'
        },
        {
          audioOffset: 20,
          text:
            'train, ambulance, auto, cart, excavator, fire-engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'slides',
      id: 'job',
      label: 'Jobs',
      commonData: {
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 40,
          text:
            'astronaut, clown, fisherman, postman, teacher, blacksmith, cobbler, goldsmith, potter, weaver'
        },
        {
          audioOffset: 60,
          text:
            'carpenter, diver, nurse, sailor, chef, doctor, police, soldier, barber, washerman'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Vehicles',
      id: 'pick-vehicles',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the vehicle.',
        type: 'image',
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
            'train, ambulance, auto, cart, excavator, fire-engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Jobs',
      id: 'pick-job',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the picture.',
        type: 'image',
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
      type: 'rightOne',
      label: 'Identify Vehicles',
      id: 'sound-vehicles',
      lockAfter: 2,
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
            'train, ambulance, auto, cart, excavator, fire-engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Jobs',
      id: 'sound-job',
      lockAfter: 2,
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
      lockAfter: 2,
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
            'train, ambulance, auto, cart, excavator, fire-engine, van, bulldozer, rocket, submarine'
        }
      ]
    },
    {
      type: 'dictation',
      label: 'Dictation Jobs',
      id: 'dictation-job',
      lockAfter: 2,
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
