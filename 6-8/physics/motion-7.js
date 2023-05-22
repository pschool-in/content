export default {
  id: 'motion-7',
  label: 'Motion, Time and Speed',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Speed',
      data: {
        title: 'Speed',
        text: `We are familiar with the term 'speed'. It is used to tell whether an object is moving fast or slow. Higher speed means more distance is covered in short duration. If you have a running race with your friend, the distance between the starting and ending point will be fixed. Whoever covers the distance in the short duration is the winner. If you both start at the same time then whoever crosses the finishing line first is the winner.
A car moves faster than a cycle. And a cycle can move faster than a walking man. A dog can move faster than a tortoise.
When we say that a car is moving with a speed of 50 kilometres per hour, it implies that it will cover a distance of 50 kilometres in one hour. A car cannot move at a constant speed. While starting, it will move slowly and gradually pick up speed. If you apply break gently it won't come to a halt immediately. Instead its speed will reduce gradually. So we shall use the term average speed.
If an object moves at a fixed speed then it is said to be having uniform motion. Most of the real world motion are non-uniform.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Cars don't move at constant speed.
If the speed increases then the duration of travel decreases.
Speed of a car is usually measured as km per hour.`
          },
          {
            name: 'False',
            text: `Most of the motions in real world are uniform.
It is not possible to calculate the speed of a moving train.`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'find-speed',
      label: 'Find the Speed',
      data: {
        title: 'Fill in the boxes.',
        type: 'word-problem',
        allowFrac: false,
        list: [
          {
            widths: '120, 120, 120',
            text: `distance | travel time | speed
100 km| 2 hrs| ?0 km/hr
120 km| 6 hrs| ?1 km/hr
300 km| 4 hrs| ?2 km/hr
120 km| 4 hrs| ?3 km/hr
1600 km| 2 hrs| ?4 km/hr
1800 km| 3 hrs| ?5 km/hr
50, 20, 75, 30, 800, 600`
          }
        ]
      }
    },
    {
      label: 'Measuring Time - Notes',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Measuring Time',
        text: [
          `Time can be measured in seconds, minute, hour, day, week, month, year, decade, century.
Time can be denoted as an absolute point of reference or interval. Clock and calendar show absolute time. A stop watch, count-down timer, sandclock shows time interval.
# Working of a clock
The working of clocks is rather complex. But all of them make use of some periodic motion. One of the most well-known periodic motion is that of a simple pendulum.
A simple pendulum consists of a small metallic ball or a piece of stone suspended from a rigid stand by a thread. The metallic ball is called the bob of the pendulum.
When the bob of the pendulum is released after taking it slightly to one side, it begins to move to and fro.
The to and fro motion of a simple pendulum is an example of a periodic or an oscillatory motion.
The pendulum completes one oscillation when its bob moves from one extreme position A to the other extreme position B and comes back to A. The time taken by the pendulum to complete one oscillation is called its time period.
Through experiment we can find out that the time period of a pendulum is constant. Inspite of the displacement reducing with each oscillation.
In earlier days, most of the clock worked based on the time period of the pendulum. Nowadays most clocks or watches have an electric circuit with one or more cells. These clocks are called quartz clocks. The time measured by quartz clocks is much more accurate than older clocks.
Vehicles have a device to measure the distance moved by the vehicle. It is called odometer. There is another device to measure the speed of the vehicle. It is called speedometer.
# Distance-Time Graph
To study more about the speed, we can plot a graph between time and distance. Time is marked along the x-axis and distance is marked along the y-axis.`,

          { type: 'img', src: 'physics/time-distance-graph.jpg' },

          `For example, the distance-time graph of two cars are given above.`
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      commonData: {
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        }
      },
      data: [
        `The distance moved by an object in a unit time is called its *speed*.
To calculate the speed we need to divide the *kilometre* covered  by the *hours* travelled.
For *uniform* motion, the object should travel at a constant speed.
In olden times, we had *pendulum* clocks and nowadays we have *quartz* clocks.`,

        `The *time-period* of a pendulum is *constant*. The metallic ball of a pendulum is called *bob*.
The distance travelled by a vehicle is measured by *odometer* and the speed is measured by *speedometer*.
While drawing the distance-time graph, distance is marked along the *y-axis*, and time is marked along the *x-axis*.`
      ]
    },
    {
      label: 'Real Time Vs Time Interval',
      id: 'classify',
      type: 'group',
      data: {
        title:
          'Classify whether the below devices tell real time or time interval.',
        types: [
          {
            name: 'Real Time',
            text: 'sundial, clock, watch, calendar'
          },
          {
            name: 'Time Interval',
            text: 'stopwatch, countdown timer, sandclock'
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
            text: `A graph drawn between distance and time, gives more information about the speed.
The time period of a pendulum will remain the same even if the pendulum slows down.
A decade means 10 years.
Quartz clocks are more accurate than the pendulum clocks.`
          },
          {
            name: 'False',
            text: `Speed is always measured as km per hr.
It is possible to make a clock at home.
All cars move at the same speed.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `The device to measure the distance travelled. | ODOMETER | ___M____
In olden days most of the clocks work with the help of a _____. | PENDULUM | _______M
The metallic ball of a pendulum is called ___. | BOB | ___
The motion of a pendulum is an example for ______ motion. | PERIODIC | _______C
The device to measure speed. | SPEEDOMETER | ______M____
The latest clocks are called ______ clocks. |QUARTZ | _____Z`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `If a car moves at the speed of 80 kms/hr, it will take *15 (20, 30)* minutes to cover 20 km.
Most of the real world motions are *non-uniform (uniform)*.
In a distance-time graph, time is usually marked along the *x-axis (y-axis)*.
The working of a clock is *complex (simple)*.
The latest clocks work based on *quartz (pendulum)*.`
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
              'The time-distance graph is given for two cars A and B. Which one is moving fast?',
            qImg: 'physics/time-distance-graph.jpg',
            options: 'B, A, Same speed, Cannot say from graph'
          },
          {
            qText: 'While travelling by car, if we increase the speed,',
            options: `the travel time decreases.
the travel time increases.
the travel time remains the same.`
          },
          {
            qText: 'Which of the following shows real time?',
            options: 'sundial, stopwatch, sandclock'
          },
          {
            qText: 'The working of a clock make use of some _______ motion.',
            options: `periodic, rectilinear, rotational`
          },
          {
            qText: `Which of the following doesn't remain the same in a pendulum?`,
            options: `Displacement of the bob
Length of the pendulum
Time Period of a pendulum`
          },
          {
            qText: `Which of the following vehicle usually doesn't have an odometer?`,
            options: 'bicycle, motor cycle, car, lorry'
          }
        ]
      }
    }
  ]
};
