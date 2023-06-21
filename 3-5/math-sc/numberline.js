export default {
  label: 'Number Line',
  id: 'numberline',
  list: [
    {
      label: 'Find the Number',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          start: 0,
          range: 10,
          text: '2, 7, 5, 9, 10, 0, 1, 3, 8, 5'
        },
        {
          start: 0,
          range: 20,
          minorLines: 2,
          labelGap: 2,
          text: '10, 16, 12, 4, 9, 13, 7, 17, 11, 5'
        },
        {
          start: 0,
          range: 40,
          minorLines: 2,
          labelGap: 4,
          text: '20, 32, 12, 36, 14, 18, 38, 22, 8, 16'
        },
        {
          start: 0,
          range: 60,
          minorLines: 2,
          labelGap: 6,
          text: '36, 54, 18, 48, 33, 45, 9, 39, 3, 51'
        },
        {
          start: 0,
          range: 80,
          minorLines: 2,
          labelGap: 8,
          text: '16, 28, 48, 76, 56, 64, 32, 72, 52, 60'
        },
        {
          start: 0,
          range: 100,
          minorLines: 2,
          labelGap: 10,
          text: '50, 25, 75, 40, 10, 85, 15, 60, 45, 65'
        },
        {
          start: 0,
          range: 40,
          minorLines: 4,
          labelGap: 4,
          text: '38, 22, 19, 23, 31, 11, 17, 4, 30, 7'
        }
      ]
    },
    {
      label: 'Addition',
      type: 'numberLine',
      id: 'number-line',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~x+a',
          range: 20
        },
        {
          pattern: 'misc~x+b',
          range: 20
        },
        {
          pattern: 'misc~xx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx+b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx+a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx+b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx+b',
          range: 110,
          start: 0,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~xxx+b',
          range: 100,
          dynamicStart: true,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~1x0+a0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        },
        {
          pattern: 'misc~xx0+x0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        }
      ]
    },
    {
      label: 'Subtraction',
      type: 'numberLine',
      id: 'subtract',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks.',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~x-a',
          range: 20
        },
        {
          pattern: 'misc~1x-b',
          range: 20
        },
        {
          pattern: 'misc~xx-a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx-b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx-a',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xxx-b',
          dynamicStart: true,
          range: 20
        },
        {
          pattern: 'misc~xx-b',
          range: 100,
          start: 0,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~xxx-b',
          range: 100,
          dynamicStart: true,
          minorLines: 10,
          labelGap: 10,
          unit: 80
        },
        {
          pattern: 'misc~1x0-a0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        },
        {
          pattern: 'misc~xx0-x0',
          range: 150,
          dynamicStart: true,
          labelGap: 10,
          unit: 50
        }
      ]
    },
    {
      label: 'Find the Multiplication',
      type: 'numberLine',
      id: 'multiply',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks.',
        type: 'read'
      },
      data: [
        {
          range: 50,
          pattern: 'misc~a*a'
        },
        {
          range: 100,
          pattern: 'misc~b*a'
        },
        {
          range: 100,
          pattern: 'misc~a*b',
          unit: 25
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
        //kg-2
        {
          texts: [
            { str: '4', x: 30, y: 35 },
            { str: '6', x: 230, y: 35 },
            { str: '12', x: 30, y: 90 },
            { str: '14', x: 230, y: 90 },
            { str: '8', x: 30, y: 145 },
            { str: '10', x: 230, y: 145 },
            { str: '29', x: 30, y: 200 },
            { str: '31', x: 230, y: 200 },
            { str: '44', x: 30, y: 255 },
            { str: '46', x: 230, y: 255 },
            { str: '54', x: 30, y: 310 },
            { str: '56', x: 230, y: 310 }
          ],
          words: [
            { word: '5', x: 130, y: 35 },
            { word: '13', x: 130, y: 90 },
            { word: '9', x: 130, y: 145 },
            { word: '30', x: 130, y: 200 },
            { word: '45', x: 130, y: 255 },
            { word: '55', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '4', x: 30, y: 35 },
            { str: '8', x: 230, y: 35 },
            { str: '12', x: 30, y: 90 },
            { str: '16', x: 230, y: 90 },
            { str: '20', x: 30, y: 145 },
            { str: '24', x: 230, y: 145 },
            { str: '32', x: 30, y: 200 },
            { str: '36', x: 230, y: 200 },
            { str: '48', x: 30, y: 255 },
            { str: '52', x: 230, y: 255 },
            { str: '74', x: 30, y: 310 },
            { str: '78', x: 230, y: 310 }
          ],
          words: [
            { word: '6', x: 130, y: 35 },
            { word: '14', x: 130, y: 90 },
            { word: '22', x: 130, y: 145 },
            { word: '34', x: 130, y: 200 },
            { word: '50', x: 130, y: 255 },
            { word: '76', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '11', x: 30, y: 35 },
            { str: '15', x: 230, y: 35 },
            { str: '19', x: 30, y: 90 },
            { str: '23', x: 230, y: 90 },
            { str: '55', x: 30, y: 145 },
            { str: '59', x: 230, y: 145 },
            { str: '17', x: 30, y: 200 },
            { str: '21', x: 230, y: 200 },
            { str: '33', x: 30, y: 255 },
            { str: '37', x: 230, y: 255 },
            { str: '45', x: 30, y: 310 },
            { str: '49', x: 230, y: 310 }
          ],
          words: [
            { word: '13', x: 130, y: 35 },
            { word: '21', x: 130, y: 90 },
            { word: '57', x: 130, y: 145 },
            { word: '19', x: 130, y: 200 },
            { word: '35', x: 130, y: 255 },
            { word: '47', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '52', x: 30, y: 35 },
            { str: '56', x: 230, y: 35 },
            { str: '78', x: 30, y: 90 },
            { str: '82', x: 230, y: 90 },
            { str: '96', x: 30, y: 145 },
            { str: '100', x: 230, y: 145 },
            { str: '60', x: 30, y: 200 },
            { str: '64', x: 230, y: 200 },
            { str: '90', x: 30, y: 255 },
            { str: '94', x: 230, y: 255 },
            { str: '82', x: 30, y: 310 },
            { str: '86', x: 230, y: 310 }
          ],
          words: [
            { word: '54', x: 130, y: 35 },
            { word: '80', x: 130, y: 90 },
            { word: '98', x: 130, y: 145 },
            { word: '62', x: 130, y: 200 },
            { word: '92', x: 130, y: 255 },
            { word: '84', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '51', x: 30, y: 35 },
            { str: '55', x: 230, y: 35 },
            { str: '73', x: 30, y: 90 },
            { str: '77', x: 230, y: 90 },
            { str: '95', x: 30, y: 145 },
            { str: '99', x: 230, y: 145 },
            { str: '61', x: 30, y: 200 },
            { str: '65', x: 230, y: 200 },
            { str: '79', x: 30, y: 255 },
            { str: '83', x: 230, y: 255 },
            { str: '89', x: 30, y: 310 },
            { str: '93', x: 230, y: 310 }
          ],
          words: [
            { word: '53', x: 130, y: 35 },
            { word: '75', x: 130, y: 90 },
            { word: '97', x: 130, y: 145 },
            { word: '63', x: 130, y: 200 },
            { word: '81', x: 130, y: 255 },
            { word: '91', x: 130, y: 310 }
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
            { str: '4', x: 5, y: 35 },
            { str: '5', x: 90, y: 35 },
            { str: '23', x: 5, y: 105 },
            { str: '24', x: 90, y: 105 },
            { str: '3', x: 5, y: 175 },
            { str: '5', x: 90, y: 175 },
            { str: '18', x: 5, y: 245 },
            { str: '20', x: 90, y: 245 },
            { str: '32', x: 5, y: 315 },
            { str: '34', x: 90, y: 315 }
          ],
          words: [
            { word: '6', x: 175, y: 35 },
            { word: '7', x: 260, y: 35 },
            { word: '25', x: 175, y: 105 },
            { word: '26', x: 260, y: 105 },
            { word: '7', x: 175, y: 175 },
            { word: '9', x: 260, y: 175 },
            { word: '22', x: 175, y: 245 },
            { word: '24', x: 260, y: 245 },
            { word: '36', x: 175, y: 315 },
            { word: '38', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '35', x: 5, y: 35 },
            { str: '37', x: 90, y: 35 },
            { str: '54', x: 5, y: 105 },
            { str: '56', x: 90, y: 105 },
            { str: '20', x: 5, y: 175 },
            { str: '22', x: 90, y: 175 },
            { str: '49', x: 5, y: 245 },
            { str: '51', x: 90, y: 245 },
            { str: '70', x: 5, y: 315 },
            { str: '72', x: 90, y: 315 }
          ],
          words: [
            { word: '39', x: 175, y: 35 },
            { word: '41', x: 260, y: 35 },
            { word: '58', x: 175, y: 105 },
            { word: '60', x: 260, y: 105 },
            { word: '24', x: 175, y: 175 },
            { word: '26', x: 260, y: 175 },
            { word: '53', x: 175, y: 245 },
            { word: '55', x: 260, y: 245 },
            { word: '74', x: 175, y: 315 },
            { word: '76', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '0', x: 5, y: 35 },
            { str: '3', x: 90, y: 35 },
            { str: '5', x: 5, y: 105 },
            { str: '8', x: 90, y: 105 },
            { str: '12', x: 5, y: 175 },
            { str: '14', x: 90, y: 175 },
            { str: '30', x: 5, y: 245 },
            { str: '33', x: 90, y: 245 },
            { str: '21', x: 5, y: 315 },
            { str: '23', x: 90, y: 315 }
          ],
          words: [
            { word: '6', x: 175, y: 35 },
            { word: '9', x: 260, y: 35 },
            { word: '11', x: 175, y: 105 },
            { word: '14', x: 260, y: 105 },
            { word: '16', x: 175, y: 175 },
            { word: '18', x: 260, y: 175 },
            { word: '36', x: 175, y: 245 },
            { word: '39', x: 260, y: 245 },
            { word: '25', x: 175, y: 315 },
            { word: '27', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '2', x: 5, y: 35 },
            { str: '5', x: 90, y: 35 },
            { str: '7', x: 5, y: 105 },
            { str: '9', x: 90, y: 105 },
            { str: '21', x: 5, y: 175 },
            { str: '24', x: 90, y: 175 },
            { str: '13', x: 5, y: 245 },
            { str: '15', x: 90, y: 245 },
            { str: '29', x: 5, y: 315 },
            { str: '31', x: 90, y: 315 }
          ],
          words: [
            { word: '8', x: 175, y: 35 },
            { word: '11', x: 260, y: 35 },
            { word: '11', x: 175, y: 105 },
            { word: '13', x: 260, y: 105 },
            { word: '27', x: 175, y: 175 },
            { word: '30', x: 260, y: 175 },
            { word: '17', x: 175, y: 245 },
            { word: '19', x: 260, y: 245 },
            { word: '33', x: 175, y: 315 },
            { word: '35', x: 260, y: 315 }
          ]
        }
      ]
    },
    {
      id: 'complete-numberline-2',
      label: 'Complete the Numberline - 2',
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
            { str: '7', x: 80, y: 35 },
            { str: '9', x: 230, y: 35 },
            { str: '52', x: 80, y: 105 },
            { str: '54', x: 230, y: 105 },
            { str: '28', x: 80, y: 175 },
            { str: '30', x: 230, y: 175 },
            { str: '40', x: 80, y: 245 },
            { str: '42', x: 230, y: 245 },
            { str: '75', x: 80, y: 315 },
            { str: '77', x: 230, y: 315 }
          ],
          words: [
            { word: '6', x: 5, y: 35 },
            { word: '8', x: 155, y: 35 },
            { word: '10', x: 305, y: 35 },
            { word: '51', x: 5, y: 105 },
            { word: '53', x: 155, y: 105 },
            { word: '55', x: 305, y: 105 },
            { word: '27', x: 5, y: 175 },
            { word: '29', x: 155, y: 175 },
            { word: '31', x: 305, y: 175 },
            { word: '39', x: 5, y: 245 },
            { word: '41', x: 155, y: 245 },
            { word: '43', x: 305, y: 245 },
            { word: '74', x: 5, y: 315 },
            { word: '76', x: 155, y: 315 },
            { word: '78', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '8', x: 80, y: 35 },
            { str: '12', x: 230, y: 35 },
            { str: '22', x: 80, y: 105 },
            { str: '26', x: 230, y: 105 },
            { str: '16', x: 80, y: 175 },
            { str: '20', x: 230, y: 175 },
            { str: '40', x: 80, y: 245 },
            { str: '44', x: 230, y: 245 },
            { str: '32', x: 80, y: 315 },
            { str: '36', x: 230, y: 315 }
          ],
          words: [
            { word: '6', x: 5, y: 35 },
            { word: '10', x: 155, y: 35 },
            { word: '14', x: 305, y: 35 },
            { word: '20', x: 5, y: 105 },
            { word: '24', x: 155, y: 105 },
            { word: '28', x: 305, y: 105 },
            { word: '14', x: 5, y: 175 },
            { word: '18', x: 155, y: 175 },
            { word: '22', x: 305, y: 175 },
            { word: '38', x: 5, y: 245 },
            { word: '42', x: 155, y: 245 },
            { word: '46', x: 305, y: 245 },
            { word: '30', x: 5, y: 315 },
            { word: '34', x: 155, y: 315 },
            { word: '38', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '5', x: 80, y: 35 },
            { str: '9', x: 230, y: 35 },
            { str: '25', x: 80, y: 105 },
            { str: '29', x: 230, y: 105 },
            { str: '53', x: 80, y: 175 },
            { str: '57', x: 230, y: 175 },
            { str: '33', x: 80, y: 245 },
            { str: '37', x: 230, y: 245 },
            { str: '85', x: 80, y: 315 },
            { str: '89', x: 230, y: 315 }
          ],
          words: [
            { word: '3', x: 5, y: 35 },
            { word: '7', x: 155, y: 35 },
            { word: '11', x: 305, y: 35 },
            { word: '23', x: 5, y: 105 },
            { word: '27', x: 155, y: 105 },
            { word: '31', x: 305, y: 105 },
            { word: '51', x: 5, y: 175 },
            { word: '55', x: 155, y: 175 },
            { word: '59', x: 305, y: 175 },
            { word: '31', x: 5, y: 245 },
            { word: '35', x: 155, y: 245 },
            { word: '39', x: 305, y: 245 },
            { word: '83', x: 5, y: 315 },
            { word: '87', x: 155, y: 315 },
            { word: '91', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '45', x: 80, y: 35 },
            { str: '49', x: 230, y: 35 },
            { str: '68', x: 80, y: 105 },
            { str: '72', x: 230, y: 105 },
            { str: '23', x: 80, y: 175 },
            { str: '27', x: 230, y: 175 },
            { str: '56', x: 80, y: 245 },
            { str: '60', x: 230, y: 245 },
            { str: '86', x: 80, y: 315 },
            { str: '90', x: 230, y: 315 }
          ],
          words: [
            { word: '43', x: 5, y: 35 },
            { word: '47', x: 155, y: 35 },
            { word: '51', x: 305, y: 35 },
            { word: '66', x: 5, y: 105 },
            { word: '70', x: 155, y: 105 },
            { word: '74', x: 305, y: 105 },
            { word: '21', x: 5, y: 175 },
            { word: '25', x: 155, y: 175 },
            { word: '29', x: 305, y: 175 },
            { word: '54', x: 5, y: 245 },
            { word: '58', x: 155, y: 245 },
            { word: '62', x: 305, y: 245 },
            { word: '84', x: 5, y: 315 },
            { word: '88', x: 155, y: 315 },
            { word: '92', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '10', x: 80, y: 35 },
            { str: '20', x: 230, y: 35 },
            { str: '40', x: 80, y: 105 },
            { str: '50', x: 230, y: 105 },
            { str: '5', x: 80, y: 175 },
            { str: '15', x: 230, y: 175 },
            { str: '70', x: 80, y: 245 },
            { str: '80', x: 230, y: 245 },
            { str: '35', x: 80, y: 315 },
            { str: '45', x: 230, y: 315 }
          ],
          words: [
            { word: '5', x: 5, y: 35 },
            { word: '15', x: 155, y: 35 },
            { word: '25', x: 305, y: 35 },
            { word: '35', x: 5, y: 105 },
            { word: '45', x: 155, y: 105 },
            { word: '55', x: 305, y: 105 },
            { word: '0', x: 5, y: 175 },
            { word: '10', x: 155, y: 175 },
            { word: '20', x: 305, y: 175 },
            { word: '65', x: 5, y: 245 },
            { word: '75', x: 155, y: 245 },
            { word: '85', x: 305, y: 245 },
            { word: '30', x: 5, y: 315 },
            { word: '40', x: 155, y: 315 },
            { word: '50', x: 305, y: 315 }
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
          'Find the mid point between given two numbers in the Number Line.',
        type: 'algebra',
        firstLineFontSize: '1.8rem',
        justifyContent: 'center'
      },
      data: [
        `0  &  6| 3
0 & 8 | 4
0 & 20 | 10
0 & 100 | 50
0 & 14| 7`,

        `2 & 4 | 3
8 & 10 | 9
3 & 5 | 4
1 & 5 | 3
6 & 10 | 8`,

        `100 & 110 | 105
50 & 70 | 60
12 & 32 | 22
50 & 100 | 75
8 & 18 | 13`,

        `3 & 9 | 6
5 & 15 | 10
22 & 30 | 26
28 & 42 | 35
54 & 36 | 45`
      ]
    }
  ]
};
