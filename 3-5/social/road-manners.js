export default {
  label: 'Road Manners',
  id: 'road-manners',
  lockAfter: 3,
  list: [
    {
      label: 'Road Manners - Reading',
      type: 'passage',
      data: {
        title: 'Road Manners',
        text: [
          `Zebra Crossing is the black and white lines on the road. It is the safest place to cross the road. They are also known as pedestrian crossing. Pedestrians are people who walks on the road. 
At zebra crossing, we have to wait for green signal to cross the road. At some places, traffic police will help you to cross the road. 
Apart from zebra crossings, subways and footbridges are provided on big roads, where there is heavy traffic. These are present only in big cities and towns. At small towns and villages, it is our responsibility to cross the road with care. 
We should not rush to cross the road. We have to wait till the road is clear. We have to be patient for our own safety. Never cross the road at a corner or curve, because we cannot see the approaching vehicle. 
We have to cross road by walking and should not run. If we run, we may fall. 
We have to follow some good habits when travelling in bus. Always follow the queue while entering or leaving the bus. Don't rush or push other people while getting into the bus. While waiting for bus, stand on the pavement and don't block the road. Do not play at the bus stop. Never board or alight from the bus when it is moving. Shouting and making noise is definitely bad manners, and it will distract the driver. If you are sitting in window seat, do not put any part of your body outside. If you are travelling by standing always hold the handrail. 
It is always cool to have good manners. We can feel proud about ourself, and others also will have high opinion on us.`
        ]
      },
      id: 'reading'
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Zebra Crossing is the black and *white(yellow)* lines on the road. It is the *safest (hardest)* place to cross the road. They are also known as pedestrian *crossing (walking)*. 
At zebra crossing, we have to wait for *green (red, orange)* signal to cross the road.
We should *not (always)* rush to cross the road.
Always *follow (break)* the queue while entering or leaving the bus.
It is always *cool (boring)* to have good manners.`
      }
    },
    {
      label: 'Road Manners - MCQ',
      type: 'mcq',
      id: 'mcq-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Who are pedestrians?',
            options:
              'people who walk on the road, people who cross the road, people riding bicycle, people who are waiting for bus.'
          },
          {
            qText: 'We can go forward when the signal turns ______',
            options: 'green, orange, red'
          },
          {
            qText:
              'True or False: It is safe to run while crossing the road, because we can cross the road fast.',
            options: 'False, True'
          },
          {
            qText:
              'True or False: It is alright to cross the road at the curve',
            options: 'False, True'
          },
          {
            qText: 'We should not make noise inside bus because _________',
            options:
              'it will disturb the driver, friends will not like it, we will get throat pain'
          },
          {
            qText:
              'True or False: It is alright to put our hand outside the window and experience the wind.',
            options: 'False, True'
          }
        ]
      }
    },
    {
      id: 'slide-road-signs',
      type: 'slides2',
      label: `Road Signs`,
      commonData: {
        title: `Road Signs`,
        displayType: 'steps',
        images: 'img/social/road-sign',
        autoPlay: false
      },
      data: [
        {
          audio: 'social/road-sign.mp3',
          audioOffsets: [8, 17.5, 22.5, 30, 38, 44, 51, 57, 72],
          steps: [
            {
              text: 'If the road is too narrow for the traffic, then it will be made an one-way road.',
              img: 'one-way'
            },
            {
              text: 'To avoid confusion whether it is one-way or not, this sign says it is two-way traffic.',
              img: '2-way-traffic'
            },
            {
              text: 'In some roads, taking U-turn is not allowed.',
              img: 'no-u-turn'
            },
            {
              text: 'In most of the roads, U-turn is allowed. To avoid confusion, this sign is kept.',
              img: 'u-turn'
            },
            {
              text: `Parking on roadsides will cause unnecessary traffic. This sign says 'No Parking' `,
              img: 'no-parking'
            },
            {
              text: 'We should park our vehicle only at places where parking is allowed.',
              img: 'parking'
            },
            {
              text: 'In some roads, left turn is not allowed as it may be a one-way road.',
              img: 'no-left-turn'
            },
            {
              text: 'In some roads, right turn is not allowed as it may be a one-way road.',
              img: 'no-right-turn'
            },
            {
              text: 'Different roads have different speed limit. Overspeeding is the cause of many accidents. This sign says, the maximum speed limit is 40 km/hr.',
              img: 'max-speed'
            }
          ]
        },
        {
          audio: 'social/road-sign-2.mp3',
          audioOffsets: [9.5, 23, 32, 38.5, 53.5, 63, 76, 85, 94],
          steps: [
            {
              text: 'This is the place where pedestrians cross the road. People driving should slow down at zebra crossing.',
              img: 'zebra-crossing'
            },
            {
              text: 'Roads need maintenance. We can  see people working on the roads or near the roads. We have to slow down and be careful not to hurt anyone.',
              img: 'men-at-work'
            },
            {
              text: 'We can see this near Railway crossing. When a train comes, the road will be blocked for traffic.',
              img: 'railroad'
            },
            {
              text: 'Another road joins our road, so we have to be careful.',
              img: 't-junction'
            },
            {
              text: 'In some cities, bicycles have separate lanes and crossing area. It is to encourage people to use bicycle, as it is healthy and pollution free.',
              img: 'bicycle-crossing'
            },
            {
              text: 'In some places, overtaking is not allowed. It may be curved road or accident prone region.',
              img: 'no-overtaking'
            },
            {
              text: 'While driving in hill stations, driving uphill is difficult than downhill. So we have give way for vehicles moving uphill.',
              img: 'give-way'
            },
            {
              text: 'Bridges are usually narrower than roads. So we have to slow down when crossing a bridge.',
              img: 'narrow-bridge'
            },
            {
              text: 'To avoid noise pollution near hospitals, schools etc, horning is prohibited. ',
              img: 'horn-prohibited'
            }
          ]
        }
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        optionImages: 'img/social/road-sign',
        title: 'Choose the right sign for the below situation?',
        questions: [
          {
            qText: 'A narrow bridge is present ahead.',
            options: 'narrow-bridge, t-junction, men-at-work, give-way'
          },
          {
            qText: 'Another road merges with the road we are travelling.',
            options: 't-junction, zebra-crossing, horn-prohibited, max-speed'
          },
          {
            qText: 'Road maintenance work is going on.',
            options: 'men-at-work, zebra-crossing, no-u-turn, 2-way-traffic'
          },
          {
            qText: 'We are allowed to park our vehicles.',
            options: 'parking, no-parking, t-junction, horn-prohibited'
          },
          {
            qText: 'Which of the following sign we can find near a hospital?',
            options:
              'horn-prohibited, give-way, narrow-bridge, bicycle-crossing'
          },
          {
            qText: 'Which of the following sign we can find in a hill station?',
            options: 'give-way, max-speed, narrow-bridge, one-way'
          }
        ]
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Road Signs',
      id: 'road-signs',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.',
        path: 'img/social/road-sign'
      },
      data: [
        `2-way-traffic | 2 Way Traffic
one-way | One Way
give-way | Give Way
no-left-turn | No Left Turn
no-overtaking | No Overtaking
no-u-turn | No U-Turn`,

        `narrow-bridge | Narrow Bridge
no-parking | No Parking
no-right-turn | No Right Turn
t-junction | T-Junction
u-turn| U-Turn
zebra-crossing| Zebra Crossing`,

        `bicycle-crossing | Bicycle Crossing
horn-prohibited | Horn Prohibited
max-speed | Maximum Speed
men-at-work | Men at Work
parking | Parking
railroad | Rail Road`
      ]
    }
  ]
};
