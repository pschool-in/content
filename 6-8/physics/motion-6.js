export default {
  id: 'motion-6',
  label: 'Transportation and Motion',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Story of Transport',
      data: {
        title: 'Story of Transport',
        text: `Long ago, people did not have any means of transport. They used to move only on foot and carry goods on their back. Later on, they began to use animals for transportation.
For transport through water routes, boats were used from ancient times. To begin with, boats were simple logs of wood in which a hollow cavity could be made. Later, people learnt to put together different pieces of wood and give shapes to the boats. 
Invention of the wheel made a great change in modes of transport. The design of the wheel was improved over thousands of years. Animals were used to pull carts that moved on wheels.
Until the beginning of the 19th century, people still depended on animals, boats and ships to transport them from place to place. The invention of steam engine led to the development of new means of transport. Railroads were made for steam engine driven carriages and wagons. 
Later came automobiles such as motor cars, trucks and buses. Motorised boats and ships were used as means of transport on water. The early years of 1900 saw the development of aeroplanes. These were later improved to carry passengers and goods. Electric trains, monorail, supersonic aeroplanes and spacecraft are some of the contributions of the 20th century.`
      }
    },
    {
      label: 'Drag & Drop',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      data: {
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        },
        text: `Logs of wood were joint together to make a *boat*.
Invention of the *wheel* made a great change in modes of transport.
Initially man used *animals* for transportation.
Railroads were made for *steam* engine driven carriages and *wagons*.
Only after 1900, *airplane* was invented.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `The first train ran on *steam (diesel)*.
Aeroplane was invented in *1903 (1803)*.
Motor cars were invented in the *19th (20th)* century.
Supersonic aeroplanes travel at the speed larger than the speed of *sound (light)*.
Spacecrafts are send through *rockets (satellites) *.`
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `The first train ran on _____. | STEAM | S____
The latest trains don't need fuel like diesel or petrol. They run on ______. | ELECTRICITY | E__________
These aeroplanes travel faster than sound. | SUPERSONIC | S____S____
The most important invention in transportation | WHEEL | _____
Boats and ships are known as _____. | WATERWAYS | W____W___`
      }
    },
    {
      label: 'Arrange by Speed',
      type: 'sorting',
      id: 'sort',
      data: {
        title:
          'Rearrange the mode of transport from the earliest to the latest.',
        text: 'Walking, Horse Riding, Boat, Steam Engine, Motor Boat, Rocket'
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'Which of the following is the most important invention in transport?',
            options: 'Wheel, Motor, Fuel, Cycle'
          },
          {
            qText: 'Which was invented first in the below list?',
            options: 'Steam Engine, Bus, Car, Electric Train'
          },
          {
            qText: 'Which mode of transport came first?',
            options: 'waterways, airways, roadways, railways'
          },
          {
            qText: 'Which mode of transport is the fastest?',
            options: 'airways, roadways, railways, waterways'
          },
          {
            qText: 'How fast a vehicle moves is defined by its ______.',
            options: 'speed, wheel size, distance travelled, time taken'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        title: 'Match the mode of transport with its usual speed.',
        allowFrac: false,
        text: `Walking , 6 km/hr
Cycling , 20 km/hr
Tractor , 30 km/hr
Car , 80 km/hr
Bullet Train , 200 km/hr
Airplane , 800 km/hr`
      }
    },
    {
      label: 'Measuring Length - Notes',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Measuring Length',
        text: `The tailor needs to measure the length of the cloth to know if it is enough to stitch a shirt. A carpenter needs to measure the height and width of a cupboard to know how much wood he would need to make its door. The farmer needs to know the length and breadth or the area of his land to know how much seed he can sow and how much water would be needed for his crops.
Suppose, you are asked how tall you are? You want to tell the length of a straight line from the top of your head to the heel of your feet.
Measuring length is about the distance between two points or places. The two places maybe close enough, like the two ends of a table or they may be far apart, like Jammu and Kanyakumari.
In ancient times, the length of a foot, the width of a finger, and the distance of a step were commonly used as different units of measurements. Even today, we can see flower sellers using their forearm as a unit of length for garlands in many towns of India. Unfortunately, all these measurement varies from people to people.
For the sake of uniformity, scientists all over the world have accepted a set of standard units of measurement. The system of units now used is known as the International System of Units (SI units). The SI unit of length is a metre.
Each metre (m) is divided into 100 equal divisions, called centimetre (cm). Each centimetre has ten equal divisions, called millimetre (mm). For measuring large distances, we use killometer(km), which is 1000 times the metre. Measuring the length of a curved line cannot be done using a scale.
We can use a thread to measure the length of a curved line. Place the thread along the curve and then measure the length of the thread.`
      }
    },
    {
      label: 'Types of Motion - Notes',
      type: 'passage',
      id: 'notes-3',
      data: {
        title: 'Types of Motion',
        text: `Vehicles move along a straight road. Soldiers march along a straight line. If you drop a stone from a height it reaches the ground by moving in a straight line. All these motions are called rectilinear motion.
If we tie a thread to a stone and whirl it with our hand, the stone moves along a circular path. The distance between the stone and hand remains the same as the length of the thread. This type of motion is called rotational motion. The rotation of blades in a fan, or hands in a clock are other examples.
In some cases, an object repeats its motion after some time. This type of motion is called periodic motion. The motion of a pendulum, swing in the park, strings of a guitar, membrane of drums are all examples of periodic motion.
If you observe a sewing machine, its wheel moves in a circular motion but the needle that moves up and down continuously is periodic motion.
A ball moving along the ground has both rectilinear and rotational motion.
Motion is a change in the position of an object with time. The change in this position can be determined through distance measurements. We can see how fast or slow a motion is. We can measure the speed of a moving snail, flying butterfly, flowing river, flying aeroplane, moon around the Earth etc.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      commonData: {
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        }
      },
      data: [
        `Measuring length is about the *distance* between two *points*. Flower sellers use *forearm* to measure garlands. In older days, measurements *vary* with people. 
Curved lines can be measured with the help of a *thread*. Tailors use *tapes* for measuring clothes. Students can measure the length of a pencil using a *scale*.`,

        `Motion is a change in the *position* of an object with *time*. Change in position can be determined by measuring *distance*. How fast an object moves is measured by *speed*. 
In a sewing machine, the wheel moves in *rotational* motion and the needle moves in a *periodic* motion.`
      ]
    },
    {
      id: 'mcq-2',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'SI units are invented because _______.',
            options: `of the need for uniformity
they are the real units of measurement
they are easy measurement`
          },
          {
            qText: 'Which of the following is used measure length?',
            options: 'scale, pencil, compass, protractor'
          },
          {
            qText:
              'The length of a curved line can be measured using a ______.',
            options: `thread, scale, rubberband, compass`
          },
          {
            qText: 'Which of the following has a rotational motion?',
            options: `ball rolling on the floor
ball falling from a height
ball hit from a bat`
          },
          {
            qText:
              'The distance between two cities is usually measured in _____.',
            options: `kilometre, metre, centimetre`
          },
          {
            qText: 'Which of the following is not a periodic motion?',
            options: `wheels of a car, strings of a guitar, needle of a sewing machine`
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `A carpenter will measure the wood before cutting it.
In olden days, people used to measure length using hand, finger and foot.
Some objects can have more than one type of motion at the same time.`
          },
          {
            name: 'False',
            text: `The length of a curved line cannot be measured.
SI units are followed only in India.`
          }
        ]
      }
    },
    {
      label: 'Type of Motion',
      id: 'types-motion',
      type: 'classifySentence',
      data: {
        title: 'Classify the type of motion',
        types: [
          {
            name: 'Rectilinear',
            text: `Train moving along the rails.`
          },
          {
            name: 'Rotational',
            text: `Giant wheel in a theme park.
Hands of a clock. `
          },
          {
            name: 'Periodic',
            text: `Swing in the garden.
Seasaw in the garden.`
          }
        ]
      }
    }
  ]
};
