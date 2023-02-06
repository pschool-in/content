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
