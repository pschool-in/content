export default {
  label: 'Transport',
  id: 'transport',
  list: [
    {
      type: 'rightOne',
      label: 'Odd one out',
      id: '100',
      data: {
        title: 'Pick the odd one',
        text:
          'ship, airplane, helicopter\ntrain, car, bus\ncar, boat, ship\nbicycle, bus, lorry\nship, van, bus'
      }
    },
    {
      label: 'Transport- MCQ',
      type: 'mcq',
      id: '200',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' _________ helps to take sick people to hospital.',
            options: 'An ambulance, An engine, A car '
          },
          {
            qText: 'A _________ helps us to put out ﬁre.',
            options: 'fire engine, police car, bulldozer'
          },
          {
            qText: ' A _________ moves on a track and have an engine',
            options: 'train, car, boat'
          },
          {
            qText: ' A _________  has two wheels and a handle.',
            options: 'bicycle, car, auto-rickshaw'
          },
          {
            qText: ' Row, row, row your _________ , gently down the stream.',
            options: 'boat, bus, rocket'
          },
          {
            qText:
              ' _________  is the fastest means of transport to reach far-off places.',
            options: 'Aeroplane, Car, Boat'
          }
        ]
      }
    }
  ]
};
