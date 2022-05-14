export default {
  label: 'Vehicles and Jobs',
  id: 'sound-7',
  lockAfter: 1,
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
            'aeroplane, boat, bus, car, cycle, helicoptor|helicopter, motorbike, ship, tractor, lorry'
        },
        {
          audioOffset: 20,
          text:
            'train, ambulance, auto, cart, excavator, fire-engine|fire engine, van, bulldozer, rocket, submarine'
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
      commonData: {
        title: 'Listen to the sound and click on the vehicle.',
        type: 'image',
        audio: 'kg-5/vehicles-jobs-1.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'aeroplane, boat, bus, car, cycle, helicoptor, motorbike, ship, tractor, lorry'
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
    }
  ]
};
