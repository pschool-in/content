export default {
  label: 'Geometry',
  id: 'geometry-2',
  lockAfter: 5,
  list: [
    {
      label: 'Quick Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Quick Notes',
        text: `A triangle has three sides and three angles. If we add the three angles in a triangle we will get 180 degree. This is true for all triangles. If we know two angles, then we can find the third angle by subtracting from 180.
A quadrilateral has four sides and four angles. If we add the four angles we get 360 degree. In a rectangle all angles are 90 degree.
A parallelogram is a special type of quadrilateral, where the opposite sides are of equal length and opposite angles are equal.
If we break a straight line at a point, then the angle formed by the point is 180 degree. If we join two lines at an angle of 180 degree, then it will look like one single line.
A complete rotatation of a line about a point gives 360 degree.`
      }
    },
    {
      type: 'geometry',
      label: 'Draw Triangle',
      id: 'draw-triangle',
      data: {
        text: `Draw a triangle whose sides are 4, 3, 3 cm. | triangle | 3, 3
Draw a triangle whose sides are 4, 3.6, 3.2 cm. | triangle | 3.6, 3.2     
Draw a triangle whose all sides are equal. | triangle | 4, 4
Draw a triangle whose sides are 4, 3, 2 cm. | triangle | 2, 3
Draw a triangle whose sides are 4, 2.8, 3.2 cm. | triangle | 2.8, 3.2 `
      }
    },
    {
      type: 'geometry',
      label: 'Make angles in Triangle',
      id: 'triangle-angle',
      data: {
        text: `Draw a triangle whose angles are 45, 45, 90 degrees. | triangleAngle | 45, 45, 90
Draw a triangle whose all angles are equal. | triangleAngle | 60, 60, 60
Draw a triangle whose angles are 30, 60, 90 degrees. | triangleAngle | 30, 60, 90
Draw a triangle whose two angles are 110, 40 degrees. | triangleAngle | 30, 40, 110
Draw a triangle whose two angles are 50 degrees. | triangleAngle | 50, 50, 80`
      }
    },
    {
      type: 'geometry',
      label: 'Parallelogram',
      id: 'parallelogram',
      data: {
        text: `Draw a parallelogram of sides 3 and 4 cm, with one of its angle being 60 degree. | parallelogram | 3, 4, 60
Draw a parallelogram of sides 3 and 3 cm, with one of its angle being 90 degree. | parallelogram | 3, 3, 90
Draw a parallelogram of sides 3 and 2 cm, with one of its angle being 110 degree. | parallelogram | 3, 2, 110
Draw a parallelogram of sides 3 and 4 cm, with one of its angle being 75 degree. | parallelogram | 3, 4, 75
Draw a parallelogram of sides 2 and 3.6 cm, with one of its angle being 60 degree. | parallelogram | 2, 3.6, 60`
      }
    },
    {
      type: 'geometryType',
      label: 'Four Sides',
      id: 'four-sides',
      data: {
        qText: 'Classify the below shape using the most accurate name.',
        type: 'custom',
        types: ['rectangle', 'parallelogram', 'quadrilateral'],
        text: `M 5 5 H 80 V 60 H 5 Z | 0
M 20 20 H 90 L 80 90 H 10 Z | 1
M 20 5 H 80 L 90 80 H 10 Z | 2
M 20 5 H 80 V 90 H 20 Z | 0
M 20 20 H 90 L 80 50 H 10 Z | 1
M 5 30 L 90 5 L 70 90 H 5 Z | 2
M 20 20 H 80 V 80 H 20 Z | 0
M 30 5 H 95 L 70 70 H 5 Z | 1
M 5 25 L 95 5 V 95 L 5 75 Z | 2
M 5 50 L 95 5 L 50 50 L 95 95 Z | 2`
      }
    },
    {
      type: 'geometryType',
      label: 'Missing angle - Triangle',
      id: 'triangle-missing-angle',
      locked: true,
      data: {
        qText: 'Find the missing angle in the triangle.',
        units: 'degree',
        probType: 'triAngle',
        list: [
          {
            pts: [40, 260, 280, 260, 39, 93],
            angles: [90, 35, 0]
          },
          {
            pts: [40, 260, 280, 260, 166, 57],
            angles: [0, 60, 60]
          },
          {
            pts: [40, 260, 280, 260, 111, 195],
            angles: [45, 20, 0]
          },
          {
            pts: [40, 260, 280, 260, 237, 41],
            angles: [45, 80, 0]
          },
          {
            pts: [40, 260, 280, 260, 39, 93],
            angles: [0, 35, 55]
          },
          {
            pts: [40, 260, 280, 260, 111, 195],
            angles: [45, 0, 115]
          },
          {
            pts: [40, 260, 280, 260, 237, 41],
            angles: [0, 80, 55]
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Missing angle',
      id: 'missing-angle',
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
      label: 'Missing angle - 2',
      id: 'missing-angle-2',
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
    },
    {
      type: 'geometry',
      label: 'Draw Cone',
      id: 'cone',
      data: {
        text: `Draw a cone of radius 2 cm and height 5 cm. | cone | 2, 5
Draw a cone of radius 1.6 cm and height 3 cm. | cone | 1.6, 3
Draw a cone of radius 1 cm and height 4 cm. | cone | 1, 4
Draw a cone of diameter 3.6 cm and height 4 cm. | cone | 1.8, 4
Draw a cone of diameter 2.8 cm and height 3.8 cm. | cone | 1.4, 3.8`
      }
    },
    {
      type: 'geometry',
      label: 'Draw Cylinder',
      id: 'cylinder',
      data: {
        text: `Draw a cylinder of radius 2 cm and height 5 cm. | cylinder | 2, 5
Draw a cylinder of radius 1.6 cm and height 3 cm. | cylinder | 1.6, 3
Draw a cylinder of radius 1 cm and height 4 cm. | cylinder | 1, 4
Draw a cylinder of diameter 3.6 cm and height 4 cm. | cylinder | 1.8, 4
Draw a cylinder of diameter 2.8 cm and height 3.8 cm. | cylinder | 1.4, 3.8`
      }
    },
    {
      type: 'geometryType',
      label: 'Missing angle - Parallelogram',
      id: 'parallelogram-missing-angle',
      locked: true,
      data: {
        qText: 'Find the missing angle in the parallellogram.',
        units: 'degree',
        probType: 'parallelogramAngle',
        list: [
          {
            pts: [50, 193, 173, 193, 257, 50, 134, 50],
            angles: [60, 120, 0, 120]
          },
          {
            pts: [50, 193, 173, 193, 145, 50, 22, 50],
            angles: [0, 80, 100, 80]
          },
          {
            pts: [50, 119, 254, 119, 211, 50, 8, 50],
            angles: [120, 60, 0, 60]
          },
          {
            pts: [50, 268, 155, 268, 239, 50, 133, 50],
            angles: [0, 110, 70, 110]
          },
          {
            pts: [50, 193, 173, 193, 257, 50, 134, 50],
            angles: [60, 0, 60, 120]
          },
          {
            pts: [50, 193, 173, 193, 145, 50, 22, 50],
            angles: [100, 80, 100, 0]
          },
          {
            pts: [50, 119, 254, 119, 211, 50, 8, 50],
            angles: [120, 0, 120, 60]
          },
          {
            pts: [50, 268, 155, 268, 239, 50, 133, 50],
            angles: [70, 110, 70, 0]
          }
        ]
      }
    },
    {
      type: 'dragAndDrop',
      label: 'Parts of Circle',
      data: {
        width: 400,
        height: 500,
        wordWidth: 90,
        title: 'Parts of Circle',
        svg: {
          props: {
            stroke: 'purple',
            fill: 'none',
            strokeLinejoin: 'round'
          },
          paths: [
            'M 310 250 A 150 150 0 1 1 310 249',
            'M 160 250 L 250 370 M 30 176 L 290 324 M 58 140 262 140',
            {
              d: 'M 216 389 A 150 150 0 0 1 94 385',
              stroke: 'blue',
              strokeWidth: 4
            },
            {
              d: 'M 160 250 L 271 150 A 150 150 0 0 1 310 260 L 160 250',
              stroke: 'gray',
              strokeWidth: 3,
              fill: 'orange'
            },
            {
              d: 'M 81 377 A 150 150 0 0 1 23 189 L 81 377 ',
              stroke: 'gray',
              strokeWidth: 3,
              fill: 'pink'
            },
            {
              d: 'M 20 160 L 150 80',
              stroke: 'gray',
              strokeWidth: 3
            },
            {
              d: `M 160 400 L 160 450 M 40 300 L 40 400 M 270 310 L 300 360 M 227 340 L 227 420 M 160 250 L 160 290 M 270 200 320 150 M 230 140 270 80 M 30 155 L 40 80 M 160 100 L 200 50`,
              stroke: 'black'
            }
          ]
        },
        words: [
          { word: 'arc', x: 100, y: 450 },
          { word: 'circumference', x: 157, y: 28 },
          { word: 'diameter', x: 270, y: 360 },
          { word: 'center', x: 95, y: 290 },
          { word: 'segment', x: 4, y: 400 },
          { word: 'radius', x: 193, y: 420 },
          { word: 'chord', x: 228, y: 60 },
          { word: 'tangent', x: 10, y: 60 },
          { word: 'sector', x: 278, y: 127 }
        ]
      },
      id: '1100'
    }
  ]
};
