export default {
  label: 'Transport',
  id: 'transport',
  lockAfter: 2,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Transport ',
        text: `In early times man walked, used palanquins or animals like elephants and horses to travel from one place to another. 
Elephants were used to travel across thick forests and were trained to carry loads and people.
Then man invented the wheel. No vehicle on the road can move without the wheel. Man used the wheel to make carts. He used animals like horses, bullocks and donkeys to pull carts with loads and to travel.
He made chariots and bicycles using the wheel. Then came all the vehicles that we see today - cars, buses, trains and auto rickshaws.
There are four modes of transport.
1. Roadways (Eg: car, bus, van) 
2. Railways
3. Waterways (Eg: ship, boat)
4. Airways (Eg: aeroplane, helicopter)`
      }
    },
    {
      label: 'Few or Many People',
      type: 'group',
      id: 'few-many',
      data: {
        title:
          'Classify the below images based on the number of people can travel. (Many means 10 or above).',
        imageType: 'custom',
        types: [
          {
            name: 'Few',
            text: 'auto, cycle, motorbike, boat, helicoptor'
          },
          {
            name: 'Many',
            text: 'aeroplane, bus, ship, train'
          }
        ]
      }
    },
    {
      label: 'One City to Another',
      type: 'group',
      id: 'one-city-to-another',
      data: {
        title: 'Can we travel on this, to move from one city to another?',
        imageType: 'custom',
        types: [
          {
            name: 'Yes',
            text: 'aeroplane, bus, ship, train'
          },
          {
            name: 'No',
            text: 'excavator, bulldozer, rocket, tractor'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `The most important invention in transport is *wheel (fuel, car)*.
There are *four (three, five)* modes of transport.
In olden days, *elephants (bullocks) * were used to travel in thick forests.
Also, *horses (zebras)* were used to draw carts.
*Cycle (Car)* does not use any fuels.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'railways-notes',
      type: 'passage',
      label: 'Railways - Notes',
      data: {
        title: 'Railways',
        text: [
          `Indian railway is the biggest employer in India. 14 Lakh people work for it.  There are different types of train.
1. Superfast express are fast and stop only at few stations. 
2. Passenger trains are slow and stop at all stations.
3. Metro rail is used to travel within a city.
4. Goods trains are used to transport goods like rice, wheat, and different types of materials.`,
          { type: 'img', src: 'social/steam-engine.jpg' },
          `In olden days, steam engines where used to pull the train. It ran on coal and it emitted lot of smokes.
Later we got diesel engines which also emitted smoke.
Now, most of the trains are running on electricity. We can see the power lines running along the railway lines.`
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        text: `*Metro* rail is used to travel within a city.
*Passenger* trains are slow and stop at all stations.
*Superfast* express connects different cities.
*Goods* trains are used to transport heavy loads.
In olden days, *steam* engine was used. Now, mostly *electrical* engines are used. `
      }
    },
    {
      id: 'rail-match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Transporting material, Goods train
Within a City, Metro train
Slow Train, Passenger train
Fewer stops, Superfast express
No Smoke, Electric Train
Olden days, Steam Engine`
      }
    },
    {
      id: 'waterways-notes',
      type: 'passage',
      label: 'Water Transport - Notes',
      data: {
        title: 'Water Transport',
        text: [
          `Water transport was there much before train, bus and car. The smaller ones are called boats and the bigger ones are called ships. 
Catamaran is a small boat and people use oars to move. They are used for fishing. 
Motor boats are used for both fishing and pleasure rides. They use fuel to move.
Sailing boats use sails to move. The sails can be adjusted based on the wind direction. They are used for travel and sport.    
Ships use fuel to move. It carries goods and people over long distances. It can carry more people than a train. In olden days, ships used to cross oceans using sails.`,
          { type: 'img', src: 'social/coracle.jpg' },
          `The coracle is used to travel on lakes and rivers for short distances. Oars are used to move it.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Catamaran, Fishing
Coracle, Rivers and Lakes
Motor Boats, Pleasure rides
Ships, Cross the Ocean
Sails, Wind direction`
      }
    },
    {
      id: 'airways-notes',
      type: 'passage',
      label: 'Airways - Notes',
      data: {
        title: 'Airways',
        text: [
          `Airways is the fastest mode of transport. They need fuel to fly. It is not the regular petrol or diesel. The fuel used in aircraft is called aviation fuel.
Aeroplanes are used to fly people long distance. It is also used to carry goods.
Helicopter is used to carry a few people for a short distance. It is used by the army to save lives and bring supplies during floods and other difficulties.`
        ]
      }
    },
    {
      label: 'Transport- MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following does not need fuel?',
            options: 'Cycle, Van, Ship, Rocket'
          },
          {
            qText: 'What fuel is used in aeroplane?',
            options: 'Aviation fuel, Aeroplane fuel, Coal, Diesel'
          },
          {
            qText: 'What fuel was used in steam engine?',
            options: 'Coal, Diesel, Water, Petrol'
          },
          {
            qText: 'What is the fastest mode of transport?',
            options: 'Airways, Waterways, Railways, Roadways'
          },
          {
            qText: 'Which of the following was invented first?',
            options: 'Ship, Train, Car, Bus'
          },
          {
            qText: 'What is used in rescuing people from hill regions?',
            options: 'Helicopter, Aeroplane, Ship'
          },
          {
            qText: 'Which of the following can carry more people?',
            options: 'Ship, Aeroplane, Train, Bus'
          },
          {
            qText: 'Which of the following does not need fuel?',
            options: 'Catamaran, Sailing boats, Coracle, *All of the above'
          },
          {
            qText: 'Which of the following does not need oars?',
            options: 'Sailing boats, Catamaran, Coracle'
          }
        ]
      }
    },
    {
      type: 'rightOne',
      label: 'Odd one out',
      id: 'odd-one',
      data: {
        title: 'Pick the odd one',
        text: `ship, airplane, helicopter
train, car, bus
car, boat, ship
bicycle, bus, lorry
ship, van, bus`
      }
    },
    {
      id: 'parts-of-cycle',
      label: 'Parts of a Cycle',
      type: 'dragAndDrop',
      data: {
        img: 'cycle_small.jpg',
        title: 'Parts of a Cycle',
        width: 340,
        height: 340,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'seat',
            x: 100,
            y: 70
          },
          {
            word: 'handle bar',
            x: 190,
            y: 20
          },
          {
            word: 'wheel',
            x: 260,
            y: 310
          },
          {
            word: 'pedal',
            x: 160,
            y: 310
          },
          {
            word: 'chain',
            x: 20,
            y: 320
          }
        ]
      }
    },
    {
      label: 'Transport- MCQ',
      type: 'mcq',
      id: 'mcq-2',
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
    },
    {
      id: 'manners',
      type: 'slides2',
      label: `Good Manners`,
      data: {
        title: `Good Manners`,
        displayType: 'steps',
        images: 'img/social/transport-manners',
        steps: [
          {
            text: 'While riding a motor cycle, wear a helmet.',
            img: 'helmet'
          },
          {
            text: 'While driving a car, use the seat belt.',
            img: 'seat-belt'
          },
          {
            text: 'Do not run across the road.',
            img: 'dont-run'
          },
          {
            text: 'Never go alone on the road. Always go with an elder.',
            img: 'dont-alone'
          },
          {
            text: 'Use the foot over bridge or subway to cross the road.',
            img: 'overbridge'
          },
          {
            text:
              'Never try to cross the rail road, when the gates are closed.',
            img: 'railway-gate'
          }
        ]
      }
    }
  ]
};
