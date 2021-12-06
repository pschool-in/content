export default {
  id: 'arithmetic-5',
  label: 'Arithmetic - 5',
  list: [
    {
      id: 'multiply',
      type: 'quickArithmetic',
      label: 'Multiply',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Multiply'
      },
      data: [
        {
          type: 'mul~x00~2'
        },
        {
          type: 'mul~x0~20'
        },
        {
          type: 'mul~x00~5'
        },
        {
          type: 'mul~x0~50'
        },
        {
          type: 'mul~x00~x'
        },
        {
          type: 'mul~x0~x0'
        },
        {
          type: 'mul~x00~7'
        },
        {
          type: 'mul~x0~80'
        }
      ]
    },
    {
      id: 'divide',
      type: 'quickArithmetic',
      label: 'Division',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Division'
      },
      data: [
        {
          type: 'div~x0~2'
        },
        {
          type: 'div~x0~3'
        },
        {
          type: 'div~x0~4'
        },
        {
          type: 'div~x0~5'
        },
        {
          type: 'div~x0~10'
        },
        {
          type: 'div~x0~6'
        },
        {
          type: 'div~x0~7'
        },
        {
          type: 'div~x0~8'
        },
        {
          type: 'div~x0~9'
        },
        {
          type: 'div~x0~x'
        }
      ]
    },
    {
      id: 'evaluate',
      type: 'quickArithmetic',
      label: 'Evaluate',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Evaluate'
      },
      data: [
        {
          type: 'misc~xxx+x0-x0'
        },
        {
          type: 'misc~xxx-x0+x0'
        },
        {
          type: 'misc~xxx-x0-x0'
        },
        {
          type: 'misc~xxx-x0-x'
        },
        {
          type: 'misc~xxx-x-x0'
        },
        {
          type: 'misc~xxx-50+x'
        },
        {
          type: 'misc~xxx+50-x'
        },
        {
          type: 'misc~1000-x0+x'
        },
        {
          type: 'misc~1000-x00+x'
        },
        {
          type: 'misc~x0x-x0-x'
        }
      ]
    },
    {
      id: 'fillup',
      type: 'quickArithmetic',
      label: 'Fill Up',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~x+x+x'
        },
        {
          type: 'misc~x0+x0+10'
        },
        {
          type: 'misc~x0+x+x'
        },
        {
          type: 'misc~x0+x0+x'
        },
        {
          type: 'misc~x0+x0+x0'
        },
        {
          type: 'misc~xx+x+x'
        },
        {
          type: 'misc~x0x+x+x'
        },
        {
          type: 'misc~xx+x+100'
        },
        {
          type: 'misc~x0+x+100'
        },
        {
          type: 'misc~x5+x5'
        }
      ]
    },
    {
      id: 'fillup-2',
      type: 'quickArithmetic',
      label: 'Fill Up - 2',
      lockAfter: 2,
      commonData: {
        count: 10,
        title: 'Fill in the blanks.',
        isReverse: true
      },
      data: [
        {
          type: 'misc~x99-x0'
        },
        {
          type: 'misc~x00-x'
        },

        {
          type: 'misc~x00-x0'
        },
        {
          type: 'misc~x00-9'
        },
        {
          type: 'misc~xxx-3'
        },
        {
          type: 'misc~xxx-10'
        },
        {
          type: 'misc~xxx-x'
        },
        {
          type: 'misc~xxx-x0'
        },
        {
          type: 'misc~xxx-100'
        },
        {
          type: 'misc~xxx-200'
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross-100',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?+22=?
    −b−b−
    ?+?=50
    =b=b=
    10+16=?`,
          answer: [54, 76, 44, 6, 26]
        },

        {
          text: `26−?=2
    +b+b+
    41−?=?
    =b=b=
    ?−?=21`,
          answer: [24, 22, 19, 67, 46]
        },
        {
          text: `?−37=?
    +b−b+
    ?+?=63
    =b=b=
    92−13=?`,
          answer: [53, 16, 39, 24, 79]
        },

        {
          text: `84−?=52
              −b−b−  
              10−?=?
    =b=b=
    ?−?=47`,
          answer: [32, 5, 5, 74, 27]
        },
        {
          text: `?−13=?
              −b+b−
    ?+?=11
    =b=b=
    88−21=?`,
          answer: [91, 78, 3, 8, 67]
        },

        {
          text: `68-?=35
              −b+b−
    5+?=?
    =b=b=
    ?−?=8`,
          answer: [33, 22, 27, 63, 55]
        },
        {
          text: `?−9=?
    +b−b+
    ?+?=7
    =b=b=
    63−4=?`,
          answer: [61, 52, 2, 5, 59]
        },

        {
          text: `49+?=62
    +b+b+
    8+?=?
    =b=b=
    ?+?=78`,
          answer: [13, 8, 16, 57, 21]
        },
        {
          text: `?−43=?
    +b−b+
    ?+?=56
    =b=b=
    99−16=?`,
          answer: [70, 27, 29, 27, 83]
        },

        {
          text: `8+?=20
    +b−b+
    75−?=?
    =b=b=
    ?+?=86`,
          answer: [12, 9, 66, 83, 3]
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword 2',
      id: 'mathcross-100-2',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `54+?=76
          −b−b−
          44+?=?
          =b=b=
          ?+?=26`,
          answer: [22, 6, 50, 10, 16]
        },
        {
          text: `?−24=?
          +b+b+
          ?−?=19
          =b=b=
          67−46=?`,
          answer: [26, 2, 41, 22, 21]
        },
        {
          text: `53−?=16
          +b−b+
          39+?=?
          =b=b=
          ?−?=79`,
          answer: [37, 24, 63, 92, 13]
        },
        {
          text: `?−32=?
                    −b−b−  
          ?−?=5
          =b=b=
          74−27=?`,
          answer: [84, 52, 10, 5, 47]
        },
        {
          text: `91−?=78
                    −b+b−
          ?+?=?
          =b=b=
          ?−?=67`,
          answer: [13, 8, 11, 88, 21]
        },
        {
          text: `?-33=?
                    −b+b−
          ?+?=27
          =b=b=
          63−55=?`,
          answer: [68, 35, 5, 22, 8]
        },
        {
          text: `61−?=52
          +b−b+
          2+?=?
          =b=b=
          ?−?=59`,
          answer: [9, 5, 7, 63, 4]
        },
        {
          text: `?+13=?
          +b+b+
          ?+?=16
          =b=b=
          57+21=?`,
          answer: [49, 62, 8, 8, 78]
        },
        {
          text: `70−?=27
          +b−b+
          29+?=?
          =b=b=
          ?−?=83`,
          answer: [43, 27, 56, 99, 16]
        },
        {
          text: `?+12=?
          +b−b+
          ?−?=66
          =b=b=
          83+3=?`,
          answer: [8, 20, 75, 9, 86]
        }
      ]
    },
    {
      type: 'mathCrossword',
      label: 'Math Crossword',
      id: 'mathcross-big-100',
      commonData: {
        title: 'Click on the empty cells and fill it with the correct value.'
      },
      data: [
        {
          text: `?+1=?−22=?
  −b+b−b+b−
  ?−3=1+?=5
  =b=b=b=b=
  49+?=?−26=?
  +b+b−b−b+
  4+?=13−?=0
  =b=b=b=b=
  ?−13=?−?=?`,
          answer: [53, 54, 32, 4, 4, 4, 53, 27, 9, 13, 53, 40, 13, 27]
        },
        {
          text: `?−14=?−58=?
  +b−b+b−b+
  ?+5=19+?=45
  =b=b=b=b=
  89−?=?−32=?
  −b−b−b−b−
  72−?=65−?=42
  =b=b=b=b=
  ?−2=?−?=?`,
          answer: [75, 61, 3, 14, 26, 9, 80, 48, 7, 23, 17, 15, 9, 6]
        },
        {
          text: `?+7=?−22=?
  −b+b−b−b−
  ?−31=25−?=6
  =b=b=b=b=
  19+?=?−3=?
  +b−b+b+b+
  73−?=37-?=22
  =b=b=b=b=
  ?+2=?−?=?`,
          answer: [75, 82, 60, 56, 19, 38, 57, 54, 36, 15, 92, 94, 18, 76]
        },
        {
          text: `?−66=?+2=?
  +b+b+b+b+
  ?−11=5+?=57
  =b=b=b=b=
  96−?=?+54=?
  −b−b−b−b−
  42−?=13+?=29
  =b=b=b=b=
  ?−48=?+?=?`,
          answer: [80, 14, 16, 16, 52, 77, 19, 73, 29, 16, 54, 6, 38, 44]
        },
        {
          text: `?−16=?−1=?
  −b+b−b+b−
  ?+29=62+?=M
  =b=b=b=b=
  63−?=?−7=?
  +b+b+b−b+
  23−?=2+?=6
  =b=b=b=b=
  ?−66=?−?=?`,
          answer: [96, 80, 79, 33, 6, 45, 18, 11, 21, 4, 86, 20, 3, 17]
        },
        {
          text: `?−29=?+83=?
  +b−b+b−b+
  ?+28=45−?=1
  =b=b=b=b=
  55−?=?+39=?
  −b+b−b+b−
  30+?=32−?=7
  =b=b=b=b=
  ?−3=?+?=?`,
          answer: [38, 9, 92, 17, 44, 1, 54, 93, 2, 25, 25, 22, 64, 86]
        },
        {
          text: `?−57=?+21=?
  −b−b−b+b−
  ?−16=27−?=20
  =b=b=b=b=
  53−?=?+28=?
  −b+b−b−b−
  8+?=11+?=18
  =b=b=b=b=
  ?−44=?+?=?`,
          answer: [96, 39, 60, 43, 7, 41, 12, 40, 3, 7, 45, 1, 21, 22]
        },
        {
          text: `?+12=?−17=?
  −b+b−b+b−
  ?−12=20+?=29
  =b=b=b=b=
  32+?=?−26=?
  +b−b+b+b+
  18−?=2−?=0
  =b=b=b=b=
  ?+8=?−?=?`,
          answer: [64, 76, 59, 32, 9, 24, 56, 30, 16, 2, 50, 58, 28, 30]
        },
        {
          text: `?−78=?+76=?
  −b−b−b−b−
  ?−1=11+?=21
  =b=b=b=b=
  82−?=?+66=?
  −b−b+b−b−
  29−?=0+?=59
  =b=b=b=b=
  ?−48=?+?=?`,
          answer: [94, 16, 92, 12, 10, 77, 5, 71, 29, 59, 53, 5, 7, 12]
        },
        {
          text: `?−33=?+39=?
  +b−b+b−b+
  ?+23=48−?=35
  =b=b=b=b=
  78−?=?+26=?
  −b+b−b−b−
  30+?=39+?=46
  =b=b=b=b=
  ?−19=?+?=?`,
          answer: [53, 20, 59, 25, 13, 10, 68, 94, 9, 7, 48, 29, 19, 48]
        }
      ]
    }
  ]
};
