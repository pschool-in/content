export default {
  label: 'Least Common Multiple',
  id: 'lcm',
  list: [
    {
      label: 'What is LCM?',
      type: 'video',
      id: 'video',
      data: {
        width: 360,
        height: 640,
        src: 'mvid/math/lcm.mp4'
      }
    },
    {
      type: 'numberInput',
      id: 'multiples',
      label: 'Multiples',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        inputType: 'small',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title: 'Write the first five multiples of the below number.'
      },
      data: [
        {
          list: [
            `4
?0 , ?1 , ?2 , ?3 , ?4
4, 8, 12, 16, 20`,

            `7
?0 , ?1 , ?2 , ?3 , ?4
7, 14, 21, 28, 35`,

            `5
?0 , ?1 , ?2 , ?3 , ?4
5, 10, 15, 20, 25`,

            `3
?0 , ?1 , ?2 , ?3 , ?4
3, 6, 9, 12, 15`,

            `9
?0 , ?1 , ?2 , ?3 , ?4
9, 18, 27, 36, 45`
          ]
        },
        {
          list: [
            `50
?0 , ?1 , ?2 , ?3 , ?4
50, 100, 150, 200, 250`,

            `20
?0 , ?1 , ?2 , ?3 , ?4
20, 40, 60, 80, 100`,

            `60
?0 , ?1 , ?2 , ?3 , ?4
60, 120, 180, 240, 300`,

            `150
?0 , ?1 , ?2 , ?3 , ?4
150, 300, 450, 600, 750`,

            `25
?0 , ?1 , ?2 , ?3 , ?4
25, 50, 75, 100, 125`
          ]
        },
        {
          list: [
            `18
?0 , ?1 , ?2 , ?3 , ?4
18, 36, 54, 72, 90`,

            `22
?0 , ?1 , ?2 , ?3 , ?4
22, 44, 66, 88, 110`,

            `75
?0 , ?1 , ?2 , ?3 , ?4
75, 150, 225, 300, 375`,

            `13
?0 , ?1 , ?2 , ?3 , ?4
13, 26, 39, 52, 65`,

            `99
?0 , ?1 , ?2 , ?3 , ?4
99, 198, 297, 396, 495`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'common-multiples',
      label: 'Common Multiples',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        inputType: 'small',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title:
          'Write the first five common multiples of the below pair of numbers.'
      },
      data: [
        {
          list: [
            `1 & 3
?0 , ?1 , ?2 , ?3 , ?4
3, 6, 9, 12, 15`,

            `2 & 3
?0 , ?1 , ?2 , ?3 , ?4
6, 12, 18, 24, 30`,

            `2 & 4
?0 , ?1 , ?2 , ?3 , ?4
4, 8, 12, 16, 20`,

            `2 & 5
?0 , ?1 , ?2 , ?3 , ?4
10, 20, 30, 40, 50`,

            `3 & 6
?0 , ?1 , ?2 , ?3 , ?4
6, 12, 18, 24, 30`
          ]
        },
        {
          list: [
            `5 & 10
?0 , ?1 , ?2 , ?3 , ?4
10, 20, 30, 40, 50`,

            `3 & 4
?0 , ?1 , ?2 , ?3 , ?4
12, 24, 36, 48, 60`,

            `4 & 5
?0 , ?1 , ?2 , ?3 , ?4
20, 40, 60, 80, 100`,

            `4 & 8
?0 , ?1 , ?2 , ?3 , ?4
8, 16, 24, 32, 40`,

            `3 & 12
?0 , ?1 , ?2 , ?3 , ?4
12, 24, 36, 48, 60`
          ]
        },

        {
          list: [
            `7 & 10
?0 , ?1 , ?2 , ?3 , ?4
70, 140, 210, 280, 350`,

            `3 & 9
?0 , ?1 , ?2 , ?3 , ?4
9, 18, 27, 36, 45`,

            `10 & 15
?0 , ?1 , ?2 , ?3 , ?4
30, 60, 90, 120, 150`,

            `25 & 4
?0 , ?1 , ?2 , ?3 , ?4
100, 200, 300, 400, 500`,

            `6 & 8
?0 , ?1 , ?2 , ?3 , ?4
24, 48, 72, 96, 120`
          ]
        }
      ]
    },
    {
      label: 'How to find LCM?',
      type: 'video',
      id: 'video-2',
      data: {
        width: 360,
        height: 640,
        src: 'mvid/math/calculateLCM.mp4'
      }
    },
    {
      type: 'numberInput',
      id: 'find-lcm',
      label: 'Find LCM',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title: 'Find the LCM of the below set of numbers.'
      },
      data: [
        {
          list: [
            `3, 6, 9
LCM = ?0 ##<lcm, 3, 6, 9>
18`,

            `3, 8, 12
LCM = ?0 ##<lcm, 3, 8, 12>
24`,

            `2, 3, 4, 5
LCM = ?0 ##<lcm, 2, 3, 4, 5>
60`,

            `4, 6, 9
LCM = ?0 ##<lcm, 4, 6, 9>
36`,

            `10, 20, 15, 30
LCM = ?0 ##<lcm, 10, 20, 15, 30>
60`
          ]
        },

        {
          list: [
            `4, 8, 12 
LCM = ?0 ##<lcm, 4, 8, 12 >
24`,

            `42, 14, 10
LCM = ?0 ##<lcm, 42, 14, 10>
210`,

            `10, 15, 20
LCM = ?0 ##<lcm, 10, 15, 20>
60`,

            `12, 16, 20
LCM = ?0 ##<lcm, 12, 16, 20>
240`,
            `49, 14, 7
LCM = ?0 ##<lcm, 49, 14, 7>
98`
          ]
        },

        {
          list: [
            `4, 9, 16, 36
LCM = ?0 ##<lcm, 4, 9, 16, 36 >
144`,

            ` 7, 14, 21
LCM = ?0 ##<lcm,  7, 14, 21>
42`,

            `8, 9, 12
LCM = ?0 ##<lcm, 8, 9, 12>
72`,

            `50, 150, 250
LCM = ?0 ##<lcm, 50, 150, 250>
750`,

            `50, 90, 25, 45
LCM = ?0 ##<lcm, 50, 90, 25, 45>
450`
          ]
        }
      ]
    },

    {
      type: 'match',
      id: 'match-multiples',
      label: 'Match Multiples',
      commonData: {
        title: 'Match the number with its multiple',
        fontSize: '1.3rem'
      },
      data: [
        `5 , 15
4 , 16
10, 90
7, 42
11 , 33`,

        `2 , 14
3 , 21
5 , 35
7 , 49
11 , 77`,

        `3 , 33
8 , 32
6 , 30
7, 35
13, 52`,

        `12 , 36
13, 26
14, 42
15, 45
16, 48`,

        `3 , 99
4, 100
6, 102
7, 91
12, 108`
      ]
    }
  ]
};
