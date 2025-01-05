export default {
  label: 'Number Line',
  id: 'numberline-6',
  list: [
    {
      label: 'Find Negative Numbers',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: -20,
          range: 30,
          minorLines: 2,
          labelGap: 2,
          unit: 50,
          text: '-6, -10, -1, -11, -17, -9, -15, -8, -12, -8'
        },
        {
          start: -40,
          range: 45,
          minorLines: 4,
          labelGap: 4,
          unit: 60,
          text: '-20, -27, -7, -15, -30, -11, -25, -32, -21, -3'
        },
        {
          start: -50,
          range: 60,
          minorLines: 5,
          labelGap: 5,
          unit: 80,
          text: '-45, -25, -47, -23, -37, -42, -8, -3, -27, -13'
        },
        {
          start: -80,
          range: 90,
          minorLines: 4,
          labelGap: 8,
          unit: 80,
          text: '-46, -24, -48, -28, -32, -72, -68, -76, -22, -12'
        },
        {
          start: -100,
          range: 110,
          minorLines: 5,
          labelGap: 10,
          unit: 80,
          text: '-40, -86, -62, -74, -28, -92, -78, -18, -36, -50'
        }
      ]
    },
    {
      label: 'Read Negative Numbers',
      type: 'numberLine',
      id: 'read-negative',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read',
        allowNegative: true
      },
      data: [
        {
          pattern: 'misc~a-b',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~x-b',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~-a-x',
          range: 20,
          start: -15
        },
        {
          pattern: 'misc~-a+x',
          range: 20,
          start: -5
        },
        {
          pattern: 'misc~-x+x',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~-xx-x',
          range: 20,
          dynamicStart: true
        },
        {
          pattern: 'misc~-xx+x',
          range: 20,
          dynamicStart: true
        },
        {
          pattern: 'misc~x-a-a',
          range: 20,
          start: -10
        },
        {
          pattern: 'misc~x-x+x',
          range: 30,
          start: -10
        },
        {
          pattern: 'misc~x+x-x',
          range: 30,
          start: -10
        },
        {
          pattern: 'misc~-xx-x+x',
          range: 20,
          dynamicStart: true
        },

        {
          pattern: 'misc~-xx+x-x',
          range: 20,
          dynamicStart: true
        }
      ]
    },
    {
      label: 'Find Decimal Number',
      type: 'numberLine',
      id: 'find-number-deci',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          range: 1,
          labelGap: 0.1,
          text: '0.2, 0.4, 0.9, 0.3, 0.7'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 5,
          unit: 100,
          text: '0.28, 0.46, 0.92, 0.58, 0.78'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 10,
          unit: 100,
          text: '0.23, 0.47, 0.91, 0.38, 0.75'
        },
        {
          range: 1,
          labelGap: 0.1,
          minorLines: 4,
          text: '0.25, 0.475, 0.95, 0.35, 0.775'
        },
        {
          start: -10,
          range: 10,
          minorLines: 10,
          labelGap: 1,
          unit: 150,
          text: '-7.5, -5.2, -4.7, -8.2, -2.4, -6.9, -9.6, -0.8'
        },
        {
          start: -1,
          range: 2,
          minorLines: 10,
          labelGap: 0.2,
          unit: 90,
          text: '-0.8, 0.2, 0.8, -0.9, -0.1'
        }
      ]
    },
    {
      label: 'Read Decimal Numbers',
      type: 'numberLine',
      id: 'read-decimal',
      appLockAfter: 10,
      commonData: {
        type: 'read',
        title: 'What does the below numberline represents? Fill in the blanks',
        allowNegative: true
      },
      data: [
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.x+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.x+0.a+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          pattern: 'misc~0.b-0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          start: -1.0,
          pattern: 'misc~0.a-0.b'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.x+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.x+0.a+0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.b-0.a'
        },
        {
          range: 2,
          unit: 60,
          labelGap: 0.1,
          dynamicStart: true,
          pattern: 'misc~x.a-0.b'
        },
        {
          range: 120,
          unit: 100,
          labelGap: 1,
          minorLines: 10,
          pattern: 'misc~x.x+1.a'
        },
        {
          range: 120,
          unit: 100,
          labelGap: 1,
          minorLines: 10,
          start: -1,
          pattern: 'misc~x.x-1.a'
        }
      ]
    },
    {
      label: 'Find the Multiplication',
      type: 'numberLine',
      id: 'multiply',
      lockAfter: 1,
      commonData: {
        title: 'Write the multiplication problem.',
        type: 'read',
        count: 5,
        minorLines: 10,
        labelGap: 1
      },
      data: [
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.2*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.3*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.4*x'
        },
        {
          range: 5,
          unit: 150,
          pattern: 'misc~0.5*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.6*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.7*x'
        },
        {
          range: 8,
          unit: 150,
          pattern: 'misc~0.8*x'
        }
      ]
    },
    {
      id: 'midpoint',
      label: 'Find the Mid Point',
      type: 'dragAndDrop',
      commonData: {
        height: 350,
        title: 'Write the mid points in the number lines.',
        noOptions: true,
        mathKeypad: true,
        width: 320,
        textStyle: {
          width: 40
        },
        wordWidth: 40,
        wordHeight: 25,
        svg: {
          paths: [
            'M 0 30 L 450 30 M 50 35 V 25 M 150 35 V 25 M 250 35 V 25',
            'M 0 85 L 450 85 M 50 90 V 80 M 150 90 V 80 M 250 90 V 80',
            'M 0 140 L 450 140 M 50 145 V 135 M 150 145 V 135 M 250 145 V 135',
            'M 0 195 L 450 195 M 50 200 V 190 M 150 200 V 190 M 250 200 V 190',
            'M 0 250 L 450 250 M 50 255 V 245 M 150 255 V 245 M 250 255 V 245',
            'M 0 305 L 450 305 M 50 310 V 300 M 150 310 V 300 M 250 310 V 300'
          ],
          props: {
            fill: 'none',
            stroke: '#0d3756',
            strokeWidth: 1
          }
        }
      },
      data: [
        {
          texts: [
            { str: '1', x: 30, y: 35 },
            { str: '2', x: 230, y: 35 },
            { str: '15', x: 30, y: 90 },
            { str: '16', x: 230, y: 90 },
            { str: '5', x: 30, y: 145 },
            { str: '10', x: 230, y: 145 },
            { str: '10', x: 30, y: 200 },
            { str: '15', x: 230, y: 200 },
            { str: '7', x: 30, y: 255 },
            { str: '10', x: 230, y: 255 },
            { str: '15', x: 30, y: 310 },
            { str: '18', x: 230, y: 310 }
          ],
          words: [
            { word: '1.5', x: 130, y: 35 },
            { word: '15.5', x: 130, y: 90 },
            { word: '7.5', x: 130, y: 145 },
            { word: '12.5', x: 130, y: 200 },
            { word: '8.5', x: 130, y: 255 },
            { word: '16.5', x: 130, y: 310 }
          ]
        },
        {
          texts: [
            { str: '9', x: 30, y: 35 },
            { str: '12', x: 230, y: 35 },
            { str: '20', x: 30, y: 90 },
            { str: '23', x: 230, y: 90 },
            { str: '55', x: 30, y: 145 },
            { str: '61', x: 230, y: 145 },
            { str: '21.5', x: 30, y: 200 },
            { str: '25.5', x: 230, y: 200 },
            { str: '51.5', x: 30, y: 255 },
            { str: '61.5', x: 230, y: 255 },
            { str: '3.5', x: 30, y: 310 },
            { str: '7.5', x: 230, y: 310 }
          ],
          words: [
            { word: '10.5', x: 130, y: 35 },
            { word: '21.5', x: 130, y: 90 },
            { word: '58', x: 130, y: 145 },
            { word: '23.5', x: 130, y: 200 },
            { word: '56.5', x: 130, y: 255 },
            { word: '5.5', x: 130, y: 310 }
          ]
        },
        {
          texts: [
            { str: '1', x: 30, y: 35 },
            { str: '1.5', x: 230, y: 35 },
            { str: '3.5', x: 30, y: 90 },
            { str: '4', x: 230, y: 90 },
            { str: '15.5', x: 30, y: 145 },
            { str: '16', x: 230, y: 145 },
            { str: '11', x: 30, y: 200 },
            { str: '14', x: 230, y: 200 },
            { str: '9', x: 30, y: 255 },
            { str: '10.5', x: 230, y: 255 },
            { str: '13.5', x: 30, y: 310 },
            { str: '15', x: 230, y: 310 }
          ],
          words: [
            { word: '1.25', x: 130, y: 35 },
            { word: '3.75', x: 130, y: 90 },
            { word: '15.75', x: 130, y: 145 },
            { word: '12.5', x: 130, y: 200 },
            { word: '9.75', x: 130, y: 255 },
            { word: '14.25', x: 130, y: 310 }
          ]
        },
        {
          texts: [
            { str: '-4', x: 30, y: 35 },
            { str: '-2', x: 230, y: 35 },
            { str: '-10', x: 30, y: 90 },
            { str: '-6', x: 230, y: 90 },
            { str: '-8', x: 30, y: 145 },
            { str: '0', x: 230, y: 145 },
            { str: '-2', x: 30, y: 200 },
            { str: '2', x: 230, y: 200 },
            { str: '-3', x: 30, y: 255 },
            { str: '1', x: 230, y: 255 },
            { str: '-1', x: 30, y: 310 },
            { str: '5', x: 230, y: 310 }
          ],
          words: [
            { word: '-3', x: 130, y: 35 },
            { word: '-8', x: 130, y: 90 },
            { word: '-4', x: 130, y: 145 },
            { word: '0', x: 130, y: 200 },
            { word: '-1', x: 130, y: 255 },
            { word: '2', x: 130, y: 310 }
          ]
        },
        {
          texts: [
            { str: '-0.3', x: 30, y: 35 },
            { str: '0.3', x: 230, y: 35 },
            { str: '-1', x: 30, y: 90 },
            { str: '-0.2', x: 230, y: 90 },
            { str: '-2', x: 30, y: 145 },
            { str: '1', x: 230, y: 145 },
            { str: '-4', x: 30, y: 200 },
            { str: '-1', x: 230, y: 200 },
            { str: '-1', x: 30, y: 255 },
            { str: '2', x: 230, y: 255 },
            { str: '-0.4', x: 30, y: 310 },
            { str: '0.2', x: 230, y: 310 }
          ],
          words: [
            { word: '0', x: 130, y: 35 },
            { word: '-0.6', x: 130, y: 90 },
            { word: '-0.5', x: 130, y: 145 },
            { word: '-2.5', x: 130, y: 200 },
            { word: '0.5', x: 130, y: 255 },
            { word: '-0.1', x: 130, y: 310 }
          ]
        }
      ]
    },
    {
      id: 'complete-numberline',
      label: 'Complete the Numberline',
      type: 'dragAndDrop',
      commonData: {
        height: 350,
        title: 'Complete the Numberline.',
        noOptions: true,
        mathKeypad: true,
        width: 320,
        textStyle: {
          width: 40
        },
        wordWidth: 40,
        wordHeight: 25,
        boxColor: '#ab6666',
        svg: {
          paths: [
            'M 0 30 L 450 30 M 25 35 V 25 M 110 35 V 25 M 195 35 V 25 M 280 35 V 25',
            'M 0 100 L 450 100 M 25 105 V 95 M 110 105 V 95 M 195 105 V 95 M 280 105 V 95',
            'M 0 170 L 450 170 M 25 175 V 165 M 110 175 V 165 M 195 175 V 165 M 280 175 V 165',
            'M 0 240 L 450 240 M 25 245 V 235 M 110 245 V 235 M 195 245 V 235 M 280 245 V 235',
            'M 0 310 L 450 310 M 25 315 V 305 M 110 315 V 305 M 195 315 V 305 M 280 315 V 305'
          ],
          props: {
            fill: 'none',
            stroke: '#0d3756',
            strokeWidth: 1
          }
        }
      },
      data: [
        {
          texts: [
            { str: '0.2', x: 5, y: 35 },
            { str: '0.5', x: 90, y: 35 },
            { str: '2.5', x: 5, y: 105 },
            { str: '3', x: 90, y: 105 },
            { str: '5', x: 5, y: 175 },
            { str: '6.5', x: 90, y: 175 },
            { str: '10', x: 5, y: 245 },
            { str: '10.6', x: 90, y: 245 },
            { str: '4', x: 5, y: 315 },
            { str: '4.4', x: 90, y: 315 }
          ],
          words: [
            { word: '0.8', x: 175, y: 35 },
            { word: '1.1', x: 260, y: 35 },
            { word: '3.5', x: 175, y: 105 },
            { word: '4', x: 260, y: 105 },
            { word: '8', x: 175, y: 175 },
            { word: '9.5', x: 260, y: 175 },
            { word: '11.2', x: 175, y: 245 },
            { word: '11.8', x: 260, y: 245 },
            { word: '4.8', x: 175, y: 315 },
            { word: '5.2', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '1.25', x: 5, y: 35 },
            { str: '1.5', x: 90, y: 35 },
            { str: '2.75', x: 5, y: 105 },
            { str: '3.25', x: 90, y: 105 },
            { str: '8.75', x: 5, y: 175 },
            { str: '9.75', x: 90, y: 175 },
            { str: '7', x: 5, y: 245 },
            { str: '7.75', x: 90, y: 245 },
            { str: '6.75', x: 5, y: 315 },
            { str: '8', x: 90, y: 315 }
          ],
          words: [
            { word: '1.75', x: 175, y: 35 },
            { word: '2', x: 260, y: 35 },
            { word: '3.75', x: 175, y: 105 },
            { word: '4.25', x: 260, y: 105 },
            { word: '10.75', x: 175, y: 175 },
            { word: '11.75', x: 260, y: 175 },
            { word: '8.5', x: 175, y: 245 },
            { word: '9.25', x: 260, y: 245 },
            { word: '9.25', x: 175, y: 315 },
            { word: '10.5', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-0.1', x: 5, y: 35 },
            { str: '0.1', x: 90, y: 35 },
            { str: '-0.8', x: 5, y: 105 },
            { str: '-0.5', x: 90, y: 105 },
            { str: '-7.5', x: 5, y: 175 },
            { str: '-7', x: 90, y: 175 },
            { str: '-4', x: 5, y: 245 },
            { str: '-2.5', x: 90, y: 245 },
            { str: '-7.5', x: 5, y: 315 },
            { str: '-5', x: 90, y: 315 }
          ],
          words: [
            { word: '0.3', x: 175, y: 35 },
            { word: '0.5', x: 260, y: 35 },
            { word: '-0.2', x: 175, y: 105 },
            { word: '0.1', x: 260, y: 105 },
            { word: '-6.5', x: 175, y: 175 },
            { word: '-6', x: 260, y: 175 },
            { word: '-1', x: 175, y: 245 },
            { word: '0.5', x: 260, y: 245 },
            { word: '-2.5', x: 175, y: 315 },
            { word: '0', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-30', x: 5, y: 35 },
            { str: '-10', x: 90, y: 35 },
            { str: '-20', x: 5, y: 105 },
            { str: '-10', x: 90, y: 105 },
            { str: '-3', x: 5, y: 175 },
            { str: '3', x: 90, y: 175 },
            { str: '-6', x: 5, y: 245 },
            { str: '-1', x: 90, y: 245 },
            { str: '-5', x: 5, y: 315 },
            { str: '5', x: 90, y: 315 }
          ],
          words: [
            { word: '10', x: 175, y: 35 },
            { word: '30', x: 260, y: 35 },
            { word: '0', x: 175, y: 105 },
            { word: '10', x: 260, y: 105 },
            { word: '9', x: 175, y: 175 },
            { word: '15', x: 260, y: 175 },
            { word: '4', x: 175, y: 245 },
            { word: '9', x: 260, y: 245 },
            { word: '15', x: 175, y: 315 },
            { word: '25', x: 260, y: 315 }
          ]
        }
      ]
    },
    {
      id: 'complete-numberline-2',
      label: 'Complete the Numberline -2',
      type: 'dragAndDrop',
      commonData: {
        height: 350,
        title: 'Complete the Numberline.',
        noOptions: true,
        mathKeypad: true,
        width: 320,
        textStyle: {
          width: 40
        },
        wordWidth: 40,
        wordHeight: 25,
        boxColor: '#cf24ff',
        svg: {
          paths: [
            'M 0 30 L 450 30 M 25 35 V 25 M 110 35 V 25 M 195 35 V 25 M 280 35 V 25',
            'M 0 100 L 450 100 M 25 105 V 95 M 110 105 V 95 M 195 105 V 95 M 280 105 V 95',
            'M 0 170 L 450 170 M 25 175 V 165 M 110 175 V 165 M 195 175 V 165 M 280 175 V 165',
            'M 0 240 L 450 240 M 25 245 V 235 M 110 245 V 235 M 195 245 V 235 M 280 245 V 235',
            'M 0 310 L 450 310 M 25 315 V 305 M 110 315 V 305 M 195 315 V 305 M 280 315 V 305'
          ],
          props: {
            fill: 'none',
            stroke: '#0d3756',
            strokeWidth: 1
          }
        }
      },
      data: [
        {
          texts: [
            { str: '-10', x: 5, y: 35 },
            { str: '-4', x: 260, y: 35 },
            { str: '-20', x: 5, y: 105 },
            { str: '10', x: 260, y: 105 },
            { str: '-50', x: 5, y: 175 },
            { str: '100', x: 260, y: 175 },
            { str: '-80', x: 5, y: 245 },
            { str: '40', x: 260, y: 245 },
            { str: '-30', x: 5, y: 315 },
            { str: '30', x: 260, y: 315 }
          ],
          words: [
            { word: '-8', x: 90, y: 35 },
            { word: '-6', x: 175, y: 35 },
            { word: '-10', x: 90, y: 105 },
            { word: '0', x: 175, y: 105 },
            { word: '0', x: 90, y: 175 },
            { word: '50', x: 175, y: 175 },
            { word: '-40', x: 90, y: 245 },
            { word: '0', x: 175, y: 245 },
            { word: '-10', x: 90, y: 315 },
            { word: '10', x: 175, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-5', x: 5, y: 35 },
            { str: '10', x: 260, y: 35 },
            { str: '-80', x: 5, y: 105 },
            { str: '-20', x: 260, y: 105 },
            { str: '-90', x: 5, y: 175 },
            { str: '45', x: 260, y: 175 },
            { str: '-100', x: 5, y: 245 },
            { str: '200', x: 260, y: 245 },
            { str: '-75', x: 5, y: 315 },
            { str: '0', x: 260, y: 315 }
          ],
          words: [
            { word: '0', x: 90, y: 35 },
            { word: '5', x: 175, y: 35 },
            { word: '-60', x: 90, y: 105 },
            { word: '-40', x: 175, y: 105 },
            { word: '-45', x: 90, y: 175 },
            { word: '0', x: 175, y: 175 },
            { word: '0', x: 90, y: 245 },
            { word: '100', x: 175, y: 245 },
            { word: '-50', x: 90, y: 315 },
            { word: '-25', x: 175, y: 315 }
          ]
        },
        {
          texts: [
            { str: '1', x: 5, y: 35 },
            { str: '1.6', x: 260, y: 35 },
            { str: '2.8', x: 5, y: 105 },
            { str: '3.4', x: 260, y: 105 },
            { str: '10', x: 5, y: 175 },
            { str: '11.2', x: 260, y: 175 },
            { str: '7.4', x: 5, y: 245 },
            { str: '8.3', x: 260, y: 245 },
            { str: '1.9', x: 5, y: 315 },
            { str: '3.4', x: 260, y: 315 }
          ],
          words: [
            { word: '1.2', x: 90, y: 35 },
            { word: '1.4', x: 175, y: 35 },
            { word: '3', x: 90, y: 105 },
            { word: '3.2', x: 175, y: 105 },
            { word: '10.4', x: 90, y: 175 },
            { word: '10.8', x: 175, y: 175 },
            { word: '7.7', x: 90, y: 245 },
            { word: '8', x: 175, y: 245 },
            { word: '2.4', x: 90, y: 315 },
            { word: '2.9', x: 175, y: 315 }
          ]
        },
        {
          texts: [
            { str: '11.1', x: 5, y: 35 },
            { str: '12.6', x: 260, y: 35 },
            { str: '6.25', x: 5, y: 105 },
            { str: '7', x: 260, y: 105 },
            { str: '9.5', x: 5, y: 175 },
            { str: '10.25', x: 260, y: 175 },
            { str: '6', x: 5, y: 245 },
            { str: '7.5', x: 260, y: 245 },
            { str: '3.5', x: 5, y: 315 },
            { str: '5', x: 260, y: 315 }
          ],
          words: [
            { word: '11.6', x: 90, y: 35 },
            { word: '12.1', x: 175, y: 35 },
            { word: '6.5', x: 90, y: 105 },
            { word: '6.75', x: 175, y: 105 },
            { word: '9.75', x: 90, y: 175 },
            { word: '10', x: 175, y: 175 },
            { word: '6.5', x: 90, y: 245 },
            { word: '7', x: 175, y: 245 },
            { word: '4', x: 90, y: 315 },
            { word: '4.5', x: 175, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-1', x: 5, y: 35 },
            { str: '0.5', x: 260, y: 35 },
            { str: '-5', x: 5, y: 105 },
            { str: '2.5', x: 260, y: 105 },
            { str: '-4', x: 5, y: 175 },
            { str: '-2.5', x: 260, y: 175 },
            { str: '-3', x: 5, y: 245 },
            { str: '1.5', x: 260, y: 245 },
            { str: '-6', x: 5, y: 315 },
            { str: '9', x: 260, y: 315 }
          ],
          words: [
            { word: '-0.5', x: 90, y: 35 },
            { word: '0', x: 175, y: 35 },
            { word: '-2.5', x: 90, y: 105 },
            { word: '0', x: 175, y: 105 },
            { word: '-3.5', x: 90, y: 175 },
            { word: '-3', x: 175, y: 175 },
            { word: '-1.5', x: 90, y: 245 },
            { word: '0', x: 175, y: 245 },
            { word: '-1', x: 90, y: 315 },
            { word: '4', x: 175, y: 315 }
          ]
        }
      ]
    },
    {
      id: 'complete-numberline-3',
      label: 'Complete the Numberline - 3',
      type: 'dragAndDrop',
      commonData: {
        height: 350,
        title: 'Complete the Numberline.',
        noOptions: true,
        mathKeypad: true,
        width: 350,
        textStyle: {
          width: 40
        },
        wordWidth: 40,
        wordHeight: 25,
        maxCharLength: 5,
        boxColor: '#24a4ff',
        svg: {
          paths: [
            'M 0 30 L 450 30 M 25 35 V 25 M 100 35 V 25 M 175 35 V 25 M 250 35 V 25 M 325 35 V 25',
            'M 0 100 L 450 100 M 25 105 V 95 M 100 105 V 95 M 175 105 V 95 M 250 105 V 95 M 325 105 V 95',
            'M 0 170 L 450 170 M 25 175 V 165 M 100 175 V 165 M 175 175 V 165 M 250 175 V 165 M 325 175 V 165',
            'M 0 240 L 450 240 M 25 245 V 235 M 100 245 V 235 M 175 245 V 235 M 250 245 V 235 M 325 245 V 235',
            'M 0 310 L 450 310 M 25 315 V 305 M 100 315 V 305 M 175 315 V 305 M 250 315 V 305 M 325 315 V 305'
          ],
          props: {
            fill: 'none',
            stroke: '#0d3756',
            strokeWidth: 1
          }
        }
      },
      data: [
        {
          texts: [
            { str: '0.4', x: 80, y: 35 },
            { str: '0.8', x: 230, y: 35 },
            { str: '1.3', x: 80, y: 105 },
            { str: '1.9', x: 230, y: 105 },
            { str: '5.5', x: 80, y: 175 },
            { str: '5.9', x: 230, y: 175 },
            { str: '3', x: 80, y: 245 },
            { str: '3.6', x: 230, y: 245 },
            { str: '4.1', x: 80, y: 315 },
            { str: '4.5', x: 230, y: 315 }
          ],
          words: [
            { word: '0.2', x: 5, y: 35 },
            { word: '0.6', x: 155, y: 35 },
            { word: '1', x: 305, y: 35 },
            { word: '1', x: 5, y: 105 },
            { word: '1.6', x: 155, y: 105 },
            { word: '2.2', x: 305, y: 105 },
            { word: '5.3', x: 5, y: 175 },
            { word: '5.7', x: 155, y: 175 },
            { word: '6.1', x: 305, y: 175 },
            { word: '2.7', x: 5, y: 245 },
            { word: '3.3', x: 155, y: 245 },
            { word: '3.9', x: 305, y: 245 },
            { word: '3.9', x: 5, y: 315 },
            { word: '4.3', x: 155, y: 315 },
            { word: '4.7', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '1', x: 80, y: 35 },
            { str: '2', x: 230, y: 35 },
            { str: '4', x: 80, y: 105 },
            { str: '4.5', x: 230, y: 105 },
            { str: '4', x: 80, y: 175 },
            { str: '7', x: 230, y: 175 },
            { str: '10', x: 80, y: 245 },
            { str: '15', x: 230, y: 245 },
            { str: '6', x: 80, y: 315 },
            { str: '9', x: 230, y: 315 }
          ],
          words: [
            { word: '0.5', x: 5, y: 35 },
            { word: '1.5', x: 155, y: 35 },
            { word: '2.5', x: 305, y: 35 },
            { word: '3.75', x: 5, y: 105 },
            { word: '4.25', x: 155, y: 105 },
            { word: '4.75', x: 305, y: 105 },
            { word: '2.5', x: 5, y: 175 },
            { word: '5.5', x: 155, y: 175 },
            { word: '8.5', x: 305, y: 175 },
            { word: '7.5', x: 5, y: 245 },
            { word: '12.5', x: 155, y: 245 },
            { word: '17.5', x: 305, y: 245 },
            { word: '4.5', x: 5, y: 315 },
            { word: '7.5', x: 155, y: 315 },
            { word: '10.5', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-6', x: 80, y: 35 },
            { str: '-2', x: 230, y: 35 },
            { str: '-17', x: 80, y: 105 },
            { str: '-13', x: 230, y: 105 },
            { str: '-15', x: 80, y: 175 },
            { str: '-5', x: 230, y: 175 },
            { str: '-20', x: 80, y: 245 },
            { str: '-12', x: 230, y: 245 },
            { str: '-28', x: 80, y: 315 },
            { str: '-14', x: 230, y: 315 }
          ],
          words: [
            { word: '-8', x: 5, y: 35 },
            { word: '-4', x: 155, y: 35 },
            { word: '0', x: 305, y: 35 },
            { word: '-19', x: 5, y: 105 },
            { word: '-15', x: 155, y: 105 },
            { word: '-11', x: 305, y: 105 },
            { word: '-20', x: 5, y: 175 },
            { word: '-10', x: 155, y: 175 },
            { word: '0', x: 305, y: 175 },
            { word: '-24', x: 5, y: 245 },
            { word: '-16', x: 155, y: 245 },
            { word: '-8', x: 305, y: 245 },
            { word: '-35', x: 5, y: 315 },
            { word: '-21', x: 155, y: 315 },
            { word: '-7', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-4', x: 80, y: 35 },
            { str: '4', x: 230, y: 35 },
            { str: '-5', x: 80, y: 105 },
            { str: '1', x: 230, y: 105 },
            { str: '0', x: 80, y: 175 },
            { str: '6', x: 230, y: 175 },
            { str: '-15', x: 80, y: 245 },
            { str: '5', x: 230, y: 245 },
            { str: '-10', x: 80, y: 315 },
            { str: '20', x: 230, y: 315 }
          ],
          words: [
            { word: '-8', x: 5, y: 35 },
            { word: '0', x: 155, y: 35 },
            { word: '8', x: 305, y: 35 },
            { word: '-8', x: 5, y: 105 },
            { word: '-2', x: 155, y: 105 },
            { word: '4', x: 305, y: 105 },
            { word: '-3', x: 5, y: 175 },
            { word: '3', x: 155, y: 175 },
            { word: '9', x: 305, y: 175 },
            { word: '-25', x: 5, y: 245 },
            { word: '-5', x: 155, y: 245 },
            { word: '15', x: 305, y: 245 },
            { word: '-25', x: 5, y: 315 },
            { word: '5', x: 155, y: 315 },
            { word: '35', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '-0.4', x: 80, y: 35 },
            { str: '0.4', x: 230, y: 35 },
            { str: '-0.6', x: 80, y: 105 },
            { str: '0', x: 230, y: 105 },
            { str: '-4', x: 80, y: 175 },
            { str: '-1', x: 230, y: 175 },
            { str: '-6', x: 80, y: 245 },
            { str: '-1', x: 230, y: 245 },
            { str: '-2', x: 80, y: 315 },
            { str: '3', x: 230, y: 315 }
          ],
          words: [
            { word: '-0.8', x: 5, y: 35 },
            { word: '0', x: 155, y: 35 },
            { word: '0.8', x: 305, y: 35 },
            { word: '-0.9', x: 5, y: 105 },
            { word: '-0.3', x: 155, y: 105 },
            { word: '0.3', x: 305, y: 105 },
            { word: '-5.5', x: 5, y: 175 },
            { word: '-2.5', x: 155, y: 175 },
            { word: '0.5', x: 305, y: 175 },
            { word: '-8.5', x: 5, y: 245 },
            { word: '-3.5', x: 155, y: 245 },
            { word: '1.5', x: 305, y: 245 },
            { word: '-4.5', x: 5, y: 315 },
            { word: '0.5', x: 155, y: 315 },
            { word: '5.5', x: 305, y: 315 }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'mid-point',
      label: 'Mid Point in Number Line',
      lockAfter: 1,
      commonData: {
        title:
          'X is the mid point between given two numbers in the Number Line. Find x.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `0 & -4 | -2
4 & -4 | 0
-6 & 6 | 0
0 & -10 | -5
0 & -24 | -12`,

        `-4 & -14 | -9
-12 & -4 | -8
-16 & 0 | -8
-30 & -10 | -20
-5 & -15 | -10`,

        `2 & 3 | 2.5
8 & 11 | 9.5
3.5 & 5.5 | 4.5
1 & 4 | 2.5
6 & 11 | 8.5`,

        `6.5 & 7 | 6.75
2.25 & 2.75 | 2.5
5 & 8 | 6.5
50 & 55 | 52.5
8 & 1 | 4.5`,

        `3.5 & 9.5 | 6.5
5.25 & 6.25 | 5.75
22 & 25 | 23.5
0.2 & 0.6 | 0.4
0.7 & 1.7 | 1.2`
      ]
    }
  ]
};
