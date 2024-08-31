export default {
  label: 'Highest Common Factor',
  id: 'hcf',
  list: [
    {
      label: 'What is HCF?',
      type: 'video',
      id: 'video',
      data: {
        width: 360,
        height: 640,
        src: 'mvid/math/hcf.mp4'
      }
    },
    {
      type: 'numberInput',
      id: 'factors',
      label: 'Factors',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        inputType: 'small',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title:
          'Write the factors of the below number, starting from the lowest.'
      },
      data: [
        {
          list: [
            `9
?0 , ?1 , ?2 
1, 3, 9`,

            `10
?0 , ?1 , ?2 , ?3
1, 2, 5, 10`,

            `12
?0 , ?1 , ?2 , ?3, ?4, ?5
1, 2, 3, 4, 6, 12`,

            `15
?0 , ?1 , ?2 , ?3
1, 3, 5, 15`,

            `8
?0 , ?1 , ?2 , ?3
1, 2, 4, 8`
          ]
        },
        {
          list: [
            `20
?0 , ?1 , ?2 , ?3 , ?4 , ?5
1, 2, 4, 5, 10, 20`,

            `21
?0 , ?1 , ?2 , ?3
1, 3, 7, 21`,

            `22
?0 , ?1 , ?2 , ?3 
1, 2, 11, 22`,

            `24
?0 , ?1 , ?2 , ?3 , ?4 , ?5 , ?6 , ?7
1, 2, 3, 4, 6, 8, 12, 24`,

            `25
?0 , ?1 , ?2 
1, 5, 25`
          ]
        },
        {
          title:
            'Write the factors of the below number, starting from the lowest. (Exclude 1 and the number itself)',

          list: [
            `30
?0 , ?1 , ?2 , ?3 , ?4 , ?5
2, 3, 5, 6, 10, 15`,

            `40
?0 , ?1 , ?2 , ?3 , ?4 , ?5
2, 4, 5, 8, 10, 20`,

            `32
?0 , ?1 , ?2 , ?3
2, 4, 8, 16`,

            `45
?0 , ?1 , ?2 , ?3 
3, 5, 9, 15`,

            `100
?0 , ?1 , ?2 , ?3 , ?4 , ?5 , ?6
2, 4, 5, 10, 20, 25, 50`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'common-factors',
      label: 'Common Factors',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        inputType: 'small',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title:
          'Write the common factors of the below pair of numbers. (Starting from the smallest number'
      },
      data: [
        {
          list: [
            `6 & 8
?0 , ?1
1, 2`,

            `14 & 21
?0 , ?1 
1 , 7`,

            `4 & 7
?0
1`,

            `5 & 15
?0 , ?1 
1, 5`,

            `18 & 27
?0 , ?1 , ?2 
1 , 3, 9`
          ]
        },
        {
          list: [
            `40 & 32
?0 , ?1 , ?2 , ?3 
1 , 2, 4, 8`,

            `90 & 80
?0 , ?1 , ?2 
1, 5, 10`,

            `18 & 24
?0 , ?1 , ?2 , ?3 
1 , 2, 3, 6`,

            `30 & 90
?0 , ?1 , ?2 , ?3 , ?4 , ?5 , ?6 , ?7
1, 2, 3, 5, 6, 10, 15, 30`
          ]
        },
        {
          list: [
            `100 & 150
?0 , ?1 , ?2 , ?3 , ?4 , ?5
1 , 2, 5, 10, 25, 50`,

            `48 & 64
?0 , ?1 , ?2 , ?3 , ?4
1, 2, 4, 8, 16`,

            `50 & 75
?0 , ?1 , ?2 
1 , 5, 25`,

            `60 & 48
?0 , ?1 , ?2 , ?3 , ?4 , ?5
1 , 2, 3, 4, 6, 12`,

            `40 & 100
?0 , ?1 , ?2 , ?3 , ?4 , ?5
1 , 2, 4, 5, 10, 20`
          ]
        }
      ]
    },
    {
      label: 'How to find HCF?',
      type: 'video',
      id: 'video-2',
      data: {
        width: 360,
        height: 640,
        src: 'mvid/math/calculateHCF.mp4'
      }
    },
    {
      type: 'numberInput',
      id: 'find-hcf',
      label: 'Find HCF',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        title: 'Find the HCF of the below set of numbers.'
      },
      data: [
        {
          list: [
            `42, 14, 56
HCF = ?0 ##<hcf, 42, 14, 56>
14`,

            `24, 8, 12
HCF = ?0 ##<hcf, 24, 8, 12>
4`,

            `18, 24, 30
HCF = ?0 ##<hcf, 18, 24, 30>
6`,

            `60, 80, 100
HCF = ?0 ##<hcf, 60, 80, 100>
20`,

            `150, 100, 200
HCF = ?0 ##<hcf, 150, 100, 200>
50`
          ]
        },

        {
          list: [
            `56, 80, 24
HCF = ?0 ##<hcf, 56, 80, 24>
8`,

            `88, 44, 110
HCF = ?0 ##<hcf, 88, 44, 110>
22`,

            `25, 75, 95
HCF = ?0 ##<hcf, 25, 75, 95>
5`,

            `30, 75, 90
HCF = ?0 ##<hcf, 30, 75, 90>
15`,

            `60, 120, 90
HCF = ?0 ##<hcf, 60, 120, 90>
30`
          ]
        },

        {
          list: [
            `1000, 500, 200
HCF = ?0 ##<hcf, 1000, 500, 200>
100`,

            `560, 210, 490
HCF = ?0 ##<hcf, 560, 210, 490>
70`,

            `90, 360, 135
HCF = ?0 ##<hcf, 90, 360, 135>
45`,

            `80, 200, 120
HCF = ?0 ##<hcf, 80, 200, 120>
40`,

            `225, 375, 525
HCF = ?0 ##<hcf, 225, 375, 525>
75`
          ]
        }
      ]
    },
    {
      label: 'LCM and HCF product rule',
      type: 'video',
      id: 'video-3',
      data: {
        width: 360,
        height: 640,
        src: 'mvid/math/productRule.mp4'
      }
    },
    {
      type: 'match',
      id: 'match-names',
      label: 'Match Factor Pairs',
      commonData: {
        title: 'Match Factor Pairs',
        fontSize: '1.3rem'
      },
      data: [
        {
          title: 'Match the factor pairs of 120',
          text: `2, 60
3, 40
4, 30
5, 24
6, 20
10, 12`
        },
        {
          title: 'Match the factor pairs of 256',
          text: `2, 128
4, 64
8, 32
1, 256`
        },

        {
          title: 'Match the factor pairs of 60',
          text: `2, 30
3, 20
4, 15
5, 12
6, 10
1, 60`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'factor-pairs-write',
      label: 'Write the Factor Pairs',
      commonData: {
        isSentence: false,
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.3rem',
        inputType: 'small',
        title: 'Write the missing numbers in the factor pair'
      },
      data: [
        {
          list: [
            `42
= 2 × ?0
= 3 × ?1
= 7 × ?2
= 6 × ?3
= 1 × ?4
21, 14, 6, 7, 42`,

            `100
= 2 × ?0
= 4 × ?1
= 5 × ?2
= 10 × ?3
= 20 × ?4
50, 25, 20, 10, 5`,

            `60
= 2 × ?0
=  3 × ?1
= 4 × ?2
= 5 × ?3
= 6 × ?4
30, 20, 15, 12, 10`,

            `48
= 2 × ?0
= 3 × ?1
= 4 × ?2
= 6 × ?3
= 12 × ?4
24, 16, 12, 8, 4`,

            `128
= 64 × ?0
= 32 × ?1
= 16 × ?2
= 8 × ?3
= 4 × ?4
2, 4, 8, 16, 32`
          ]
        },
        {
          list: [
            `90
= 2 × ?0
= 3 × ?1
= 5 × ?2
= 6 × ?3
= 9 × ?4
45, 30, 18, 15, 10`,

            `243
= 3 × ?0
= 9 × ?1
= 27 × ?2
= 81 × ?3
81, 27, 9, 3`,

            `80
= 40 × ?0
= 20 × ?1
= 16 × ?2
= 10 × ?3
= 4 × ?4
2, 4, 5, 8, 20`,

            `150 
= 2 × ?0
= 3 × ?1
= 5 × ?2
= 6 × ?3
= 10 × ?4
75, 50, 30, 25, 15`,

            `200
= 2 × ?0
= 4 × ?1
= 5 × ?2
= 8 × ?3
= 10 × ?4
100, 50, 40, 25, 20`
          ]
        }
      ]
    }
  ]
};
