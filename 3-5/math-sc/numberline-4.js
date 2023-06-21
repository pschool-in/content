export default {
  label: 'Number Line',
  id: 'numberline-4',
  list: [
    {
      label: 'Find the Numbers',
      type: 'numberLine',
      id: 'find-number',
      commonData: {
        title: 'Mark the below number in the numberline.',
        type: 'find'
      },
      data: [
        {
          range: 1100,
          minorLines: 10,
          labelGap: 100,
          unit: 100,
          text: '550, 240, 720, 430, 640, 910, 130, 590, 220, 490'
        },
        {
          range: 550,
          minorLines: 10,
          labelGap: 50,
          unit: 100,
          text: '155, 245, 125, 495, 340, 90, 130, 390, 225, 415'
        },
        {
          range: 1100,
          minorLines: 5,
          labelGap: 100,
          unit: 80,
          text: '280, 160, 720, 480, 940, 320, 560, 940, 80, 220'
        },
        {
          range: 1100,
          minorLines: 4,
          labelGap: 100,
          unit: 80,
          text: '275, 150, 725, 475, 925, 325, 550, 950, 75, 225'
        }
      ]
    },
    {
      label: 'Find the Problem',
      type: 'numberLine',
      id: 'number-line-2',
      lockAfter: 1,
      commonData: {
        title: 'What does the below numberline represents? Fill in the blanks',
        type: 'read'
      },
      data: [
        {
          pattern: 'misc~xx0+x0',
          range: 1100,
          minorLines: 10,
          labelGap: 100,
          unit: 100
        },
        {
          pattern: 'misc~xx0-x0',
          range: 1100,
          minorLines: 10,
          labelGap: 100,
          unit: 100
        },
        {
          range: 1000,
          minorLines: 4,
          labelGap: 100,
          unit: 100,
          text: `100+25
175+25
300-100
650-75
300+125
500-50
600+75
25+100
475+125
775-125`
        },
        {
          range: 1000,
          minorLines: 4,
          labelGap: 100,
          unit: 100,
          text: `175+75
650+150
250-75
500-125
725-100
300-75
700-25
925-100
550+150
450-75`
        },
        {
          range: 200,
          minorLines: 5,
          labelGap: 25,
          unit: 80,
          text: `100+25
175+10
50-15
95-20
110+15
30+30
10+35
70-15
145-20
145+20`
        },
        {
          range: 200,
          minorLines: 5,
          labelGap: 25,
          unit: 80,
          text: `150-25
100-30
150+25
100+30
45+30
200-35
120-35
110+35
40+25
140-25`
        },
        {
          range: 1000,
          minorLines: 5,
          labelGap: 100,
          unit: 100,
          text: `280+80
440+40
500-80
620+20
560+100
260+60
700+80
440-60
520-100
720+80`
        },
        {
          range: 10,
          minorLines: 5,
          labelGap: 1,
          unit: 100,
          text: `2.8+0.8
4.4+0.4
5-0.8
6.2+0.2
5.6+1
2.6+0.6
7+0.8
4.4-0.6
5.2-1
7.2+0.8`
        },
        {
          range: 10,
          minorLines: 10,
          labelGap: 1,
          unit: 100,
          text: `2.7+0.8
4.1+0.4
5-0.5
6.2+0.5
5.3+1
2.7+0.6
7+0.7
4.5-0.6
5.7-1
7.1+0.7`
        },
        {
          pattern: 'misc~b-a'
        },
        {
          pattern: 'misc~a+a+a'
        },
        {
          pattern: 'misc~a+a-a'
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
            { str: '5', x: 30, y: 35 },
            { str: '15', x: 230, y: 35 },
            { str: '4', x: 30, y: 90 },
            { str: '12', x: 230, y: 90 },
            { str: '6', x: 30, y: 145 },
            { str: '18', x: 230, y: 145 },
            { str: '21', x: 30, y: 200 },
            { str: '35', x: 230, y: 200 },
            { str: '45', x: 30, y: 255 },
            { str: '63', x: 230, y: 255 },
            { str: '48', x: 30, y: 310 },
            { str: '60', x: 230, y: 310 }
          ],
          words: [
            { word: '10', x: 130, y: 35 },
            { word: '8', x: 130, y: 90 },
            { word: '12', x: 130, y: 145 },
            { word: '28', x: 130, y: 200 },
            { word: '54', x: 130, y: 255 },
            { word: '54', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '10', x: 30, y: 35 },
            { str: '50', x: 230, y: 35 },
            { str: '40', x: 30, y: 90 },
            { str: '80', x: 230, y: 90 },
            { str: '25', x: 30, y: 145 },
            { str: '75', x: 230, y: 145 },
            { str: '5', x: 30, y: 200 },
            { str: '25', x: 230, y: 200 },
            { str: '50', x: 30, y: 255 },
            { str: '100', x: 230, y: 255 },
            { str: '10', x: 30, y: 310 },
            { str: '60', x: 230, y: 310 }
          ],
          words: [
            { word: '30', x: 130, y: 35 },
            { word: '60', x: 130, y: 90 },
            { word: '50', x: 130, y: 145 },
            { word: '15', x: 130, y: 200 },
            { word: '75', x: 130, y: 255 },
            { word: '35', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '4', x: 30, y: 35 },
            { str: '24', x: 230, y: 35 },
            { str: '36', x: 30, y: 90 },
            { str: '48', x: 230, y: 90 },
            { str: '44', x: 30, y: 145 },
            { str: '88', x: 230, y: 145 },
            { str: '10', x: 30, y: 200 },
            { str: '70', x: 230, y: 200 },
            { str: '45', x: 30, y: 255 },
            { str: '95', x: 230, y: 255 },
            { str: '13', x: 30, y: 310 },
            { str: '39', x: 230, y: 310 }
          ],
          words: [
            { word: '14', x: 130, y: 35 },
            { word: '42', x: 130, y: 90 },
            { word: '66', x: 130, y: 145 },
            { word: '40', x: 130, y: 200 },
            { word: '70', x: 130, y: 255 },
            { word: '26', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '48', x: 30, y: 35 },
            { str: '58', x: 230, y: 35 },
            { str: '84', x: 30, y: 90 },
            { str: '94', x: 230, y: 90 },
            { str: '72', x: 30, y: 145 },
            { str: '82', x: 230, y: 145 },
            { str: '50', x: 30, y: 200 },
            { str: '62', x: 230, y: 200 },
            { str: '48', x: 30, y: 255 },
            { str: '60', x: 230, y: 255 },
            { str: '35', x: 30, y: 310 },
            { str: '51', x: 230, y: 310 }
          ],
          words: [
            { word: '53', x: 130, y: 35 },
            { word: '89', x: 130, y: 90 },
            { word: '77', x: 130, y: 145 },
            { word: '56', x: 130, y: 200 },
            { word: '54', x: 130, y: 255 },
            { word: '43', x: 130, y: 310 }
          ]
        },

        {
          texts: [
            { str: '50', x: 30, y: 35 },
            { str: '72', x: 230, y: 35 },
            { str: '200', x: 30, y: 90 },
            { str: '350', x: 230, y: 90 },
            { str: '400', x: 30, y: 145 },
            { str: '550', x: 230, y: 145 },
            { str: '630', x: 30, y: 200 },
            { str: '690', x: 230, y: 200 },
            { str: '900', x: 30, y: 255 },
            { str: '950', x: 230, y: 255 },
            { str: '750', x: 30, y: 310 },
            { str: '850', x: 230, y: 310 }
          ],
          words: [
            { word: '61', x: 130, y: 35 },
            { word: '275', x: 130, y: 90 },
            { word: '475', x: 130, y: 145 },
            { word: '660', x: 130, y: 200 },
            { word: '925', x: 130, y: 255 },
            { word: '800', x: 130, y: 310 }
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
            { str: '7', x: 5, y: 175 },
            { str: '10', x: 90, y: 175 },
            { str: '5', x: 5, y: 245 },
            { str: '10', x: 90, y: 245 },
            { str: '33', x: 5, y: 315 },
            { str: '44', x: 90, y: 315 },
            { str: '53', x: 5, y: 35 },
            { str: '58', x: 90, y: 35 },
            { str: '23', x: 5, y: 105 },
            { str: '25', x: 90, y: 105 }
          ],
          words: [
            { word: '13', x: 175, y: 175 },
            { word: '16', x: 260, y: 175 },
            { word: '15', x: 175, y: 245 },
            { word: '20', x: 260, y: 245 },
            { word: '55', x: 175, y: 315 },
            { word: '66', x: 260, y: 315 },
            { word: '63', x: 175, y: 35 },
            { word: '68', x: 260, y: 35 },
            { word: '27', x: 175, y: 105 },
            { word: '29', x: 260, y: 105 }
          ]
        },
        {
          texts: [
            { str: '100', x: 5, y: 35 },
            { str: '150', x: 90, y: 35 },
            { str: '75', x: 5, y: 105 },
            { str: '100', x: 90, y: 105 },
            { str: '80', x: 5, y: 175 },
            { str: '120', x: 90, y: 175 },
            { str: '45', x: 5, y: 245 },
            { str: '90', x: 90, y: 245 },
            { str: '225', x: 5, y: 315 },
            { str: '270', x: 90, y: 315 }
          ],
          words: [
            { word: '200', x: 175, y: 35 },
            { word: '250', x: 260, y: 35 },
            { word: '125', x: 175, y: 105 },
            { word: '150', x: 260, y: 105 },
            { word: '160', x: 175, y: 175 },
            { word: '200', x: 260, y: 175 },
            { word: '135', x: 175, y: 245 },
            { word: '180', x: 260, y: 245 },
            { word: '315', x: 175, y: 315 },
            { word: '360', x: 260, y: 315 }
          ]
        },
        {
          texts: [
            { str: '35', x: 5, y: 35 },
            { str: '45', x: 90, y: 35 },
            { str: '22', x: 5, y: 105 },
            { str: '27', x: 90, y: 105 },
            { str: '45', x: 5, y: 175 },
            { str: '54', x: 90, y: 175 },
            { str: '66', x: 5, y: 245 },
            { str: '72', x: 90, y: 245 },
            { str: '28', x: 5, y: 315 },
            { str: '34', x: 90, y: 315 }
          ],
          words: [
            { word: '55', x: 175, y: 35 },
            { word: '65', x: 260, y: 35 },
            { word: '32', x: 175, y: 105 },
            { word: '37', x: 260, y: 105 },
            { word: '63', x: 175, y: 175 },
            { word: '72', x: 260, y: 175 },
            { word: '78', x: 175, y: 245 },
            { word: '84', x: 260, y: 245 },
            { word: '40', x: 175, y: 315 },
            { word: '46', x: 260, y: 315 }
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
            { str: '1', x: 5, y: 35 },
            { str: '7', x: 260, y: 35 },
            { str: '5', x: 5, y: 105 },
            { str: '20', x: 260, y: 105 },
            { str: '10', x: 5, y: 175 },
            { str: '40', x: 260, y: 175 },
            { str: '50', x: 5, y: 245 },
            { str: '65', x: 260, y: 245 },
            { str: '12', x: 5, y: 315 },
            { str: '24', x: 260, y: 315 }
          ],
          words: [
            { word: '3', x: 90, y: 35 },
            { word: '5', x: 175, y: 35 },
            { word: '10', x: 90, y: 105 },
            { word: '15', x: 175, y: 105 },
            { word: '20', x: 90, y: 175 },
            { word: '30', x: 175, y: 175 },
            { word: '55', x: 90, y: 245 },
            { word: '60', x: 175, y: 245 },
            { word: '16', x: 90, y: 315 },
            { word: '20', x: 175, y: 315 }
          ]
        },

        {
          texts: [
            { str: '30', x: 5, y: 35 },
            { str: '45', x: 260, y: 35 },
            { str: '65', x: 5, y: 105 },
            { str: '80', x: 260, y: 105 },
            { str: '44', x: 5, y: 175 },
            { str: '56', x: 260, y: 175 },
            { str: '25', x: 5, y: 245 },
            { str: '37', x: 260, y: 245 },
            { str: '20', x: 5, y: 315 },
            { str: '29', x: 260, y: 315 }
          ],
          words: [
            { word: '35', x: 90, y: 35 },
            { word: '40', x: 175, y: 35 },
            { word: '70', x: 90, y: 105 },
            { word: '75', x: 175, y: 105 },
            { word: '48', x: 90, y: 175 },
            { word: '52', x: 175, y: 175 },
            { word: '29', x: 90, y: 245 },
            { word: '33', x: 175, y: 245 },
            { word: '23', x: 90, y: 315 },
            { word: '26', x: 175, y: 315 }
          ]
        },

        {
          texts: [
            { str: '3', x: 5, y: 35 },
            { str: '18', x: 260, y: 35 },
            { str: '7', x: 5, y: 105 },
            { str: '16', x: 260, y: 105 },
            { str: '5', x: 5, y: 175 },
            { str: '35', x: 260, y: 175 },
            { str: '20', x: 5, y: 245 },
            { str: '50', x: 260, y: 245 },
            { str: '3', x: 5, y: 315 },
            { str: '33', x: 260, y: 315 }
          ],
          words: [
            { word: '8', x: 90, y: 35 },
            { word: '13', x: 175, y: 35 },
            { word: '10', x: 90, y: 105 },
            { word: '13', x: 175, y: 105 },
            { word: '15', x: 90, y: 175 },
            { word: '25', x: 175, y: 175 },
            { word: '30', x: 90, y: 245 },
            { word: '40', x: 175, y: 245 },
            { word: '13', x: 90, y: 315 },
            { word: '23', x: 175, y: 315 }
          ]
        },

        {
          texts: [
            { str: '70', x: 5, y: 35 },
            { str: '100', x: 260, y: 35 },
            { str: '54', x: 5, y: 105 },
            { str: '69', x: 260, y: 105 },
            { str: '80', x: 5, y: 175 },
            { str: '95', x: 260, y: 175 },
            { str: '105', x: 5, y: 245 },
            { str: '135', x: 260, y: 245 },
            { str: '200', x: 5, y: 315 },
            { str: '500', x: 260, y: 315 }
          ],
          words: [
            { word: '80', x: 90, y: 35 },
            { word: '90', x: 175, y: 35 },
            { word: '59', x: 90, y: 105 },
            { word: '64', x: 175, y: 105 },
            { word: '85', x: 90, y: 175 },
            { word: '90', x: 175, y: 175 },
            { word: '115', x: 90, y: 245 },
            { word: '125', x: 175, y: 245 },
            { word: '300', x: 90, y: 315 },
            { word: '400', x: 175, y: 315 }
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
            { str: '20', x: 80, y: 35 },
            { str: '26', x: 230, y: 35 },
            { str: '6', x: 80, y: 105 },
            { str: '12', x: 230, y: 105 },
            { str: '33', x: 80, y: 175 },
            { str: '39', x: 230, y: 175 },
            { str: '44', x: 80, y: 245 },
            { str: '52', x: 230, y: 245 },
            { str: '30', x: 80, y: 315 },
            { str: '38', x: 230, y: 315 }
          ],
          words: [
            { word: '17', x: 5, y: 35 },
            { word: '23', x: 155, y: 35 },
            { word: '29', x: 305, y: 35 },
            { word: '3', x: 5, y: 105 },
            { word: '9', x: 155, y: 105 },
            { word: '15', x: 305, y: 105 },
            { word: '30', x: 5, y: 175 },
            { word: '36', x: 155, y: 175 },
            { word: '42', x: 305, y: 175 },
            { word: '40', x: 5, y: 245 },
            { word: '48', x: 155, y: 245 },
            { word: '56', x: 305, y: 245 },
            { word: '26', x: 5, y: 315 },
            { word: '34', x: 155, y: 315 },
            { word: '42', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '18', x: 80, y: 35 },
            { str: '28', x: 230, y: 35 },
            { str: '54', x: 80, y: 105 },
            { str: '64', x: 230, y: 105 },
            { str: '47', x: 80, y: 175 },
            { str: '57', x: 230, y: 175 },
            { str: '63', x: 80, y: 245 },
            { str: '73', x: 230, y: 245 },
            { str: '21', x: 80, y: 315 },
            { str: '31', x: 230, y: 315 }
          ],
          words: [
            { word: '13', x: 5, y: 35 },
            { word: '23', x: 155, y: 35 },
            { word: '33', x: 305, y: 35 },
            { word: '49', x: 5, y: 105 },
            { word: '59', x: 155, y: 105 },
            { word: '69', x: 305, y: 105 },
            { word: '42', x: 5, y: 175 },
            { word: '52', x: 155, y: 175 },
            { word: '62', x: 305, y: 175 },
            { word: '58', x: 5, y: 245 },
            { word: '68', x: 155, y: 245 },
            { word: '78', x: 305, y: 245 },
            { word: '16', x: 5, y: 315 },
            { word: '26', x: 155, y: 315 },
            { word: '36', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '41', x: 80, y: 35 },
            { str: '61', x: 230, y: 35 },
            { str: '25', x: 80, y: 105 },
            { str: '45', x: 230, y: 105 },
            { str: '27', x: 80, y: 175 },
            { str: '47', x: 230, y: 175 },
            { str: '36', x: 80, y: 245 },
            { str: '56', x: 230, y: 245 },
            { str: '19', x: 80, y: 315 },
            { str: '39', x: 230, y: 315 }
          ],
          words: [
            { word: '31', x: 5, y: 35 },
            { word: '51', x: 155, y: 35 },
            { word: '71', x: 305, y: 35 },
            { word: '15', x: 5, y: 105 },
            { word: '35', x: 155, y: 105 },
            { word: '55', x: 305, y: 105 },
            { word: '17', x: 5, y: 175 },
            { word: '37', x: 155, y: 175 },
            { word: '57', x: 305, y: 175 },
            { word: '26', x: 5, y: 245 },
            { word: '46', x: 155, y: 245 },
            { word: '66', x: 305, y: 245 },
            { word: '9', x: 5, y: 315 },
            { word: '29', x: 155, y: 315 },
            { word: '49', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '30', x: 80, y: 35 },
            { str: '42', x: 230, y: 35 },
            { str: '35', x: 80, y: 105 },
            { str: '49', x: 230, y: 105 },
            { str: '6', x: 80, y: 175 },
            { str: '18', x: 230, y: 175 },
            { str: '7', x: 80, y: 245 },
            { str: '21', x: 230, y: 245 },
            { str: '56', x: 80, y: 315 },
            { str: '70', x: 230, y: 315 }
          ],
          words: [
            { word: '24', x: 5, y: 35 },
            { word: '36', x: 155, y: 35 },
            { word: '48', x: 305, y: 35 },
            { word: '28', x: 5, y: 105 },
            { word: '42', x: 155, y: 105 },
            { word: '56', x: 305, y: 105 },
            { word: '0', x: 5, y: 175 },
            { word: '12', x: 155, y: 175 },
            { word: '24', x: 305, y: 175 },
            { word: '0', x: 5, y: 245 },
            { word: '14', x: 155, y: 245 },
            { word: '28', x: 305, y: 245 },
            { word: '49', x: 5, y: 315 },
            { word: '63', x: 155, y: 315 },
            { word: '77', x: 305, y: 315 }
          ]
        },
        {
          texts: [
            { str: '120', x: 80, y: 35 },
            { str: '150', x: 230, y: 35 },
            { str: '220', x: 80, y: 105 },
            { str: '260', x: 230, y: 105 },
            { str: '500', x: 80, y: 175 },
            { str: '600', x: 230, y: 175 },
            { str: '125', x: 80, y: 245 },
            { str: '175', x: 230, y: 245 },
            { str: '200', x: 80, y: 315 },
            { str: '250', x: 230, y: 315 }
          ],
          words: [
            { word: '105', x: 5, y: 35 },
            { word: '135', x: 155, y: 35 },
            { word: '165', x: 305, y: 35 },
            { word: '200', x: 5, y: 105 },
            { word: '240', x: 155, y: 105 },
            { word: '280', x: 305, y: 105 },
            { word: '450', x: 5, y: 175 },
            { word: '550', x: 155, y: 175 },
            { word: '650', x: 305, y: 175 },
            { word: '100', x: 5, y: 245 },
            { word: '150', x: 155, y: 245 },
            { word: '200', x: 305, y: 245 },
            { word: '175', x: 5, y: 315 },
            { word: '225', x: 155, y: 315 },
            { word: '275', x: 305, y: 315 }
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
        `150 & 200| 175
210 & 250 | 230
50 & 90 | 70
0 & 98 | 49
0 & 48 | 24`,

        `0 & 600 | 300
0 & 1000 | 500
0 & 300 | 150
0 & 150 | 75
0 & 800| 400`,

        `111 & 333| 222
200 & 400 | 300
700 & 1000 | 850
666 & 888 | 777
444 & 888 | 666`
      ]
    }
  ]
};
