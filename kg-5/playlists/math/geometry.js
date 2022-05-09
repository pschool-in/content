export default {
  label: 'Geometry',
  id: 'geometry',
  lockAfter: 3,
  list: [
    {
      label: 'Quick Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Quick Notes',
        text: `A straight line can be drawn between two points. A horizontal line goes from left to right. A vertical line goes from top to bottom. The length of a line drawn on a paper, can be measured by using a scale. The unit of measurement is cm.
1. 1 m = 100 cm
2. 1 km = 1000 m
The distance between two places are usually measured in km or miles.
If two lines meet each other, then the lines are said to be 'intersecting'.
If two lines meet, then an angle will be formed between the lines. Two lines are said to be perpendicular, if they meet each other at 90 degree.
If the angle between two lines is less than 90 degree, then it is called acute angle.If the angle between two lines is more than 90 degree, then it is called obtuse angle.
If two lines are similar and they don't meet, then they are called parallel lines. A rail road is made up of two parallel lines.
# Triangle
A triangle has three sides. 'Tri' means three. If two sides of a triangle are perpendicular (90 degree), then it is called 'right triangle'.
# Four Sides
A quadrilateral has 4 sides. 'Quad' means four. A rectangle is a special type of quadrilateral, where the sides are perpendicular (90 degree). A square is a special type of rectangle where the sides are of equal length.
# Area of Rectangle
The area of a rectangle is calculated by multiplying its width and height. A real time example is, calculating the number of tiles in a room.
# Area of Right Triangle
If we split a rectangle diagonally, we get two right triangles. So the area of right triangle is half the area of rectangle.
# Polygon
A pentagon has 5 sides. 'penta' means five. 
A hexagon has 6 sides. 'Hexa' means six. Any closed shape with a fixed number of sides is called a polygon. 'Poly' means 'many'. Triangle, quadrilateral, pentagon, hexagen etc comes under polygon.
# Closed and Open Figure
The ends of a figure can be closed or open. For example, straight lines and curves are open figures. Circle, triangle, square etc are closed figures.
# Symmetric Figure
If one half of the figure is the mirror image of the other half, then we can say that the figure is symmetric.
`
      }
    },
    {
      type: 'geometry',
      label: 'Draw Lines',
      id: 'lines',
      lockAfter: 1,
      data: [
        `Draw a line of length 4 cm. | line | 4
Draw a line of length 2.6 cm. | line | 2.6
Draw a line of length 3 cm. | line | 3
Draw a line of length 3.6 cm. | line | 3.6
Draw a line of length 2.4 cm. | line | 2.4`,

        `Draw a horizontal line of length 2 cm. | hLine | 2
Draw a horizontal line of length 2.6 cm. | hLine | 2.6
Draw a horizontal line of length 3 cm. | hLine | 3
Draw a horizontal line of length 1.8 cm. | hLine | 1.8
Draw a horizontal line of length 2.4 cm. | hLine | 2.4`,

        `Draw a vertical line of length 4 cm. | vLine | 4
Draw a vertical line of length 2.6 cm. | vLine | 2.6
Draw a vertical line of length 3 cm. | vLine | 3
Draw a vertical line of length 2.8 cm. | vLine | 2.8
Draw a vertical line of length 3.4 cm. | vLine | 3.4`,

        `Draw a line of length 3.6 cm. | line | 3.6
Draw a vertical line of length 4.2 cm. | vLine | 4.2
Draw a horizontal line of length 3 cm. | hLine | 3
Draw a horizontal line of length 2.4 cm. | hLine | 2.4
Draw a vertical line of length 3.4 cm. | vLine | 3.4`
      ]
    },
    {
      type: 'geometry',
      label: 'Draw Circle',
      id: 'circle',
      data: {
        text: `Draw a circle of radius 2 cm. | circle | 2
Draw a circle of radius 2.4 cm. | circle | 2.4
Draw a circle of radius 1.8 cm. | circle | 1.8
Draw a circle of radius 1.2 cm. | circle | 1.2
Draw a circle of radius 2.2 cm. | circle | 2.2`
      }
    },
    {
      type: 'geometry',
      label: 'Draw Square',
      id: 'square',
      data: {
        text: `Draw a square of side 4 cm. | rect | 4, 4
Draw a square of side 3.2 cm. | rect | 3.2, 3.2
Draw a square of side 1.8 cm. | rect | 1.8, 1.8
Draw a square of side 3.4 cm. | rect | 3.4, 3.4
Draw a square of side 2.8 cm. | rect | 2.8, 2.8`
      }
    },
    {
      type: 'geometry',
      label: 'Draw Rectangle',
      id: 'rectangle',
      data: {
        text: `Draw a rectangle of sides 4 and 3 cm. | rect | 3, 4
Draw a rectangle of sides 3 and 2 cm. | rect | 3, 2
Draw a rectangle of sides 2.8 and 2.4 cm. | rect | 2.8, 2.4
Draw a rectangle of sides 2.2 and 3.2 cm. | rect | 2.2, 3.2
Draw a rectangle of sides 4 and 1 cm. | rect | 4,1`
      }
    },
    {
      type: 'geometryType',
      label: 'Parallel, Perpendicular, Intersecting lines',
      id: 'line-pairs',
      data: {
        type: 'lines'
      }
    },
    {
      type: 'geometryType',
      label: 'Right, Acute, Obtuse angles',
      id: 'angle-type',
      data: {
        type: 'angle'
      }
    },
    {
      type: 'geometry',
      label: 'Angle',
      id: '700',
      lockAfter: 1,
      data: [
        `Make an angle of 60 degree. | angle | 60
Make an angle of 180 degree. | angle | 180
Make an angle of 45 degree. | angle | 45
Make an angle of 135 degree. | angle | 135
Make an angle of 75 degree. | angle | 75`,

        `Make an angle of 50 degree. | angle | 50
Make an angle of 170 degree. | angle | 170
Make an angle of 270 degree. | angle | 270
Make an angle of 65 degree. | angle | 65
Make an angle of 300 degree. | angle | 300`,

        `Make an angle of 200 degree. | angle | 200
Make an angle of 100 degree. | angle | 100
Make an angle of 225 degree. | angle | 225
Make an angle of 320 degree. | angle | 320
Make an angle of 250 degree. | angle | 250`
      ]
    },
    {
      type: 'geometryType',
      label: 'Closed vs Open Figure',
      id: 'four-sides',
      data: {
        qText: 'Classify the below figures.',
        type: 'custom',
        types: ['closed', 'open'],
        text: `M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 36 16 | 0
M 20 5 H 80 L 90 80 H 10 Z | 1
M 30 30 L 30 0 A 30 30 270 1 1 0 30 | 1
M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z | 0
M 5 5 L 95 95 | 1
M 1 57 L 53 57 L 22 5 L 1 57 | 0
M 73.2 55.5 L 47.4 76 L 15.3 68.7 L 1 39 L 15.3 9.3 L 47.4 1.9 | 1
M 95 50 A 45 45 0 1 0 50 95 | 1
M 95 50 A 45 45 0 1 1 50 5 Z | 0
M 73.2 55.5 L 47.4 76 L 15.3 68.7 L 1 39 L 15.3 9.3 L 47.4 1.9 L 73.2 22.5 L 73 55 | 0`
      }
    },
    {
      type: 'geometryType',
      label: 'Symmetric',
      id: 'symmetric',
      data: {
        qText: 'Classify the below figures as symmetric or not.',
        type: 'custom',
        types: ['symmetric', 'not symmetric'],
        text: `M 73.2 55.5 L 47.4 76 L 15.3 68.7 L 1 39 L 15.3 9.3 L 47.4 1.9 L 73.2 22.5 L 73 55 Z | 1
M 50 5 L 95 95 H 5 Z | 0
M 100 25 A 50 25 0 1 1 100 24 | 0
M 30 30 L 30 0 A 30 30 270 1 1 0 30 Z | 1
M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z | 1
M 5 5 V 50 H 95 V 95 M 95 5 H 50 V 95 H 5 | 1
M 45 95 V 70 H 10 L 45 40 H 20 L 50 5 L 80 40 H 55 L 90 70 H 55 V 95 | 0
M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z | 0
M 0 0 H 100 V 40 H 0 V 0 | 0
M 5 5 V 95 H 95 V 75 H 25 V 5 Z | 1`
      }
    },
    {
      type: 'geometryType',
      label: 'Area of Rectangle',
      id: 'rectangle-area',
      locked: true,
      data: {
        qText: 'Find the area of the below rectangles.',
        units: 'sq cm',
        probType: 'rectArea',
        list: [
          {
            width: 4,
            height: 5,
            unit: 50
          },
          {
            width: 8,
            height: 7,
            unit: 30
          },
          {
            width: 2,
            height: 3,
            unit: 75
          },
          {
            width: 4,
            height: 4,
            unit: 60
          },
          {
            width: 2,
            height: 5,
            unit: 50
          }
        ]
      }
    },
    {
      type: 'geometryType',
      label: 'Area of Right Triangle',
      id: 'right-triangle-area',
      locked: true,
      data: {
        qText: 'Find the area of the below right triangle.',
        units: 'sq cm',
        probType: 'rightTriangleArea',
        list: [
          {
            width: 4,
            height: 5,
            unit: 50
          },
          {
            width: 8,
            height: 7,
            unit: 30
          },
          {
            width: 2,
            height: 3,
            unit: 75
          },
          {
            width: 4,
            height: 4,
            unit: 60
          },
          {
            width: 2,
            height: 5,
            unit: 50
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      locked: true,
      type: 'match',
      data: {
        text: 'Tri, Three\nQuad, Four\nPenta, Five\nHexa, Six\nPoly, Many',
        title: 'Match the prefix with their meaning.'
      }
    },
    {
      label: 'Choose the best answer',
      type: 'mcq',
      id: 'mcq',
      locked: true,
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is not a polygon?',
            options: 'Line, Triangle, Square, Hexagon'
          },
          {
            qText: 'Which of the following is not a quadrilateral?',
            options: 'circle, rectangle, square'
          },
          {
            qText:
              'If the angle between two lines is 90 degree than it is called _________.',
            options: 'right angle, Acute angle, Obtuse angle '
          },
          {
            qText: 'Which of the following is not true?',
            options:
              'triangle is a quadrilateral, triangle is a polygon, square is a quadrilateral, square is a polygon'
          },
          {
            qText: '1 m = ______',
            options: '100 cm, 10 cm, 1000 cm, 1 cm'
          }
        ]
      }
    },
    {
      type: 'geometry',
      label: 'Mixed Activity',
      lockAfter: 1,
      id: 'misc',
      data: [
        `Draw a line of length 4 cm. | line | 4
Draw a circle of radius 2.4 cm. | circle | 2.4
Draw a rectangle of sides 2.8 and 2.4 cm. | rect | 2.8, 2.4
Draw a line of length 2.6 cm. | line | 2.6
Make an angle of 75 degree. | angle | 75`,

        `Make an angle of 170 degree. | angle | 170
Draw a line of length 3 cm. | line | 3
Draw a rectangle of sides 2.2 and 3.2 cm. | rect | 2.2, 3.2
Draw a circle of radius 2.2 cm. | circle | 2.2
Draw a horizontal line of length 2.6 cm. | hLine | 2.6`,

        `Draw a circle of radius 2 cm. | circle | 2
Draw a line of length 3.6 cm. | line | 3.6
Make an angle of 320 degree. | angle | 320
Draw a square of side 4 cm. | rect | 4, 4
Draw a vertical line of length 3.4 cm. | vLine | 3.4`,

        `Make an angle of 270 degree. | angle | 270
Draw a vertical line of length 2.6 cm. | vLine | 2.6
Draw a square of side 3.4 cm. | rect | 3.4, 3.4
Make an angle of 300 degree. | angle | 300
Draw a rectangle of sides 4 and 3 cm. | rect | 3, 4`
      ]
    }
  ]
};
