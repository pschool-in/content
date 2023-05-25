export default {
  label: 'Lines and Angles',
  id: 'angles',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Line',
        text: [
          `A line segment has two end points. If we extend the two end points in either direction endlessly, we get a line. Thus, we can say that a line has no end points.
          An angle is formed when lines or line segments meet.
          # Complementary Angles
          When the sum of the measures of two angles is 90°, the angles are called complementary angles.
`
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Find the right option',
      type: 'mcq',
      data: {
        title: 'Find the right option.',
        questions: [
          {
            qText: 'Can two acute angles be complement to each other?',
            options: `Yes, No, Always`
          },
          {
            qText: 'Can two obtuse angles be complement to each other?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two right angles be complement to each other?',
            options: `No, Yes, Always`
          },
          {
            qText: `If you make one full rotation about the point you are standing, you have covered ______.`,
            options: `360°, 180°, 90°, 270°`
          },
          {
            qText: `If you make an 'about turn', you have covered ______.`,
            options: `180°, 90°, 360°, 270°`
          },
          {
            qText: `You are facing East. If you turn your body so that you face North, you have covered ______.`,
            options: ` 90°, 180°, 360°, 270°`
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Find the Complement Angle',
      id: 'angle-90',
      commonData: {
        qText: 'Find the Complement Angle.',
        units: 'degree',
        probType: 'angle90'
      },
      data: [
        {
          list: [30, 45, 50, 40, 25]
        },
        {
          list: [60, 75, 55, 65, 20]
        },
        {
          list: [46, 32, 58, 28, 62]
        }
      ]
    },
    {
      type: 'geometry',
      label: 'Angle',
      id: 'make-angle',
      data: [
        `Make an angle of 60 degree. | angle | 60
Make an angle of 25 degree. | angle | 25
Make an angle of 45 degree. | angle | 45
Make an angle of 30 degree. | angle | 30
Make an angle of 55 degree. | angle | 55`,

        `Make an angle of 100 degree. | angle | 100
Make an angle of 180 degree. | angle | 180
Make an angle of 135 degree. | angle | 135
Make an angle of 150 degree. | angle | 150
Make an angle of 120 degree. | angle | 120`,

        `Make an angle of 200 degree. | angle | 200
Make an angle of 250 degree. | angle | 250
Make an angle of 225 degree. | angle | 225
Make an angle of 190 degree. | angle | 190
Make an angle of 260 degree. | angle | 260`,

        `Make an angle of 270 degree. | angle | 270
Make an angle of 315 degree. | angle | 315
Make an angle of 300 degree. | angle | 300
Make an angle of 350 degree. | angle | 350
Make an angle of 330 degree. | angle | 330`,

        `Make an angle of 50 degree. | angle | 50
Make an angle of 140 degree. | angle | 140
Make an angle of 185 degree. | angle | 185
Make an angle of 310 degree. | angle | 310
Make an angle of 20 degree. | angle | 20`,

        `Make an angle of 40 degree. | angle | 40
Make an angle of 130 degree. | angle | 130
Make an angle of 210 degree. | angle | 210
Make an angle of 340 degree. | angle | 340
Make an angle of 205 degree. | angle | 205`
      ]
    },
    {
      label: 'Supplementary & Adjacent Angles',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Supplementary Angles',
        text: [
          `When the sum of the measures of two angles is 180°, the angles are called complementary angles.
          #Adjacent Angles
          They have a common vertex, have a common arm, and the non-common arms are on either side of the common arm.
          #Vertically Opposite Angles
          When two lines intersect, the vertically opposite angles so formed are equal.`
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Find the right option.',
      type: 'mcq',
      data: {
        title: 'Find the right answer.',
        questions: [
          {
            qText: 'Can two obtuse angles be supplementary?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two acute angles be supplementary?',
            options: `No, Yes, Always`
          },
          {
            qText: 'Can two right angles be supplementary?',
            options: `Always, No, Yes`
          },
          {
            qText: 'Can an acute angle and obtuse angle be supplementary?',
            options: `Yes, Always, No`
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Missing angle (180 degree)',
      id: 'angle-180',
      commonData: {
        qText: 'Find the missing angle.',
        units: 'degree',
        probType: 'angle180'
      },
      data: [
        {
          list: [30, 150, 45, 135, 90]
        },
        {
          list: [60, 120, 90, 130, 25]
        },
        {
          list: [100, 65, 140, 80, 110]
        }
      ]
    },
    {
      type: 'geometryType',
      label: 'Missing angle (360 degree)',
      id: 'angle-360',
      commonData: {
        qText: 'Find the missing angle.',
        units: 'degree',
        probType: 'angle360'
      },
      data: [
        {
          list: [90, 180, 270, 135, 300]
        },
        {
          list: [150, 45, 225, 120, 200]
        },
        {
          list: [280, 210, 130, 190, 160]
        }
      ]
    }
  ]
};
