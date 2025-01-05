export default {
  label: 'Factorization',
  id: 'factorization-8',
  lockAfter: 100,
  list: [
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'simplify',
      label: 'Extract Common Factor',
      commonData: {
        title: 'Extract Common Factor',
        firstLineFontSize: '2rem',
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true
      },
      data: [
        {
          list: [
            `~2𝑥+4 | ?0 ( ?1 ) | 2, 𝑥+2`,
            `~5𝑥𝑦+10𝑥 | ?0 ( ?1 ) | 5𝑥, 𝑦+2`,
            {
              text: `~12𝑎2𝑏+15𝑎𝑏2 | ?0 ( ?1 ) | 3𝑎𝑏, 4𝑎+5𝑏`,
              vars: '𝑎𝑏𝑐'
            },
            `~10𝑥2-18𝑥3+14𝑥4 | ?0 ( ?1 ) | 2𝑥2, 5-9𝑥+7𝑥2`
          ]
        },
        {
          list: [
            `~12𝑥+36 | ?0 ( ?1 ) | 12, 𝑥+3`,
            `~22𝑦-33𝑧 | ?0 ( ?1 ) | 11, 2𝑦-3𝑧`,
            {
              text: `~14𝑝𝑞 + 35𝑝𝑞𝑟 | ?0 ( ?1 ) | 7𝑝𝑞, 2+5𝑟`,
              vars: '𝑝𝑞𝑟'
            }
          ]
        },

        //page 4 - exercise

        {
          list: [
            `~7𝑥-42 | ?0 ( ?1 ) | 7, 𝑥-6`,
            {
              text: `~6𝑝-12𝑞 | ?0 ( ?1 ) | 6, 𝑝-2𝑞`,
              vars: '𝑝𝑞𝑟'
            },
            {
              text: `~7𝑎2+14𝑎 | ?0 ( ?1 ) | 7𝑎, 𝑎+2`,
              vars: '𝑎𝑏𝑐'
            },
            `~-16𝑧+20𝑧3 | ?0 ( ?1 ) | 4𝑧, -4+5𝑧2`,
            {
              text: `~20𝑙2𝑚+30𝑎𝑙𝑚 | ?0 ( ?1 ) | 10𝑙𝑚, 2𝑙+3𝑎`,
              vars: '𝑎𝑙𝑚'
            }
          ]
        },

        {
          list: [
            `~5𝑥2𝑦-15𝑥𝑦2 | ?0 ( ?1 ) | 5𝑥𝑦, 𝑥-3𝑦`,
            {
              text: `~10𝑎2-15𝑏2+20𝑐2 | ?0 ( ?1 ) | 5, 2𝑎2-3𝑏2+4𝑐2`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~-4𝑎2+4𝑎𝑏-4𝑐𝑎 | ?0 ( ?1 ) | 4𝑎, -𝑎+𝑏-𝑐`,
              vars: '𝑎𝑏𝑐'
            },
            `~𝑥2𝑦z+𝑥𝑦2z+𝑥𝑦z2 | ?0 ( ?1 ) | 𝑥𝑦z, 𝑥+𝑦+z`,
            {
              text: `~𝑎𝑥2𝑦+𝑏𝑥𝑦2+𝑐𝑥𝑦z | ?0 ( ?1 ) | 𝑥𝑦, 𝑎𝑥+𝑏𝑦+𝑐z`,
              vars: '𝑎𝑏𝑐𝑥𝑦z'
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'gcf',
      label: 'Common Factor',
      commonData: {
        title: 'Find the common factors of the given terms.',
        isSentence: false,
        firstLineFontSize: '2rem',
        fontSize: '1rem',
        algebra: true,
        bigKeys: false
      },
      data: [
        //Exercise 14.1 (page 4)
        `12𝑥 , 36 | 12
3𝑥 , 33𝑥 | 3𝑥
~14𝑥𝑦 , ~28𝑥2𝑦2 | 14𝑥𝑦
~2𝑦 , ~3𝑦2 , ~4 | 1
~6𝑥𝑦𝑧 , ~24𝑥𝑦2 , ~12𝑥2𝑦 | 6𝑥𝑦`,

        `~16𝑦3 , ~-4𝑦2 , ~32𝑦 | 4𝑦
~10𝑥𝑦 , ~20𝑦𝑧 , ~30𝑥𝑧 | 10
~3𝑥2𝑦3 ,  ~10𝑥3𝑦2,  ~6𝑥2𝑦2𝑧 |  𝑥2𝑦2`
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'simp-regroup',
      label: 'Factorize by Regrouping',
      data: {
        title: 'By regrouping, factorize the below expression.',
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        isSentence: true,
        inputType: 'small',
        list: [
          // example
          {
            text: `~2𝑥𝑦+2𝑦+3𝑥+3
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
2𝑦, 𝑥+1, 3, 𝑥+1, (2𝑦+3)(𝑥+1) |(𝑥+1)(2𝑦+3)`,

            vars: '𝑥𝑦()'
          },
          {
            text: `~6𝑥𝑦-4𝑦+6-9𝑥
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
2𝑦, 3𝑥-2, -3, 3𝑥-2, (2𝑦-3)(3𝑥-2) |(3𝑥-2)(2𝑦-3)`,

            vars: '𝑥𝑦()'
          },
          //exercise
          {
            text: `~𝑥2+𝑥𝑦+8𝑥+8𝑦
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
𝑥, 𝑥+𝑦, 8, 𝑥+𝑦, (𝑥+8)(𝑥+𝑦) |(𝑥+𝑦)(𝑥+8)`,

            vars: '𝑥𝑦()'
          },

          {
            text: `~15𝑥𝑦-6𝑥+5𝑦-2
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
3𝑥, 5𝑦-2, 1, 5𝑦-2, (3𝑥+1)(5𝑦-2) |(5𝑦-2)(3𝑥+1)`,

            vars: '𝑥𝑦()'
          },
          {
            text: `~𝑎𝑥+𝑏𝑥-𝑎𝑦-𝑏𝑦
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
𝑥, 𝑎+𝑏, -𝑦, 𝑎+𝑏, (𝑥-𝑦)(𝑎+𝑏) |(𝑎+𝑏)(𝑥-𝑦)`,

            vars: '𝑥𝑦𝑎𝑏()'
          },
          {
            text: `~15𝑝𝑞+15+9𝑞+25𝑝
This can be rearranged as
~15𝑝𝑞+25𝑝+9𝑞+15
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
5𝑝, 3𝑞+5, 3, 3𝑞+5, (5𝑝+3)(3𝑞+5) |(3𝑞+5)(5𝑝+3)`,

            vars: '𝑝𝑞()'
          },
          {
            text: `~𝑧-7+7𝑥𝑦-𝑥𝑦𝑧
This can be rearranged as
~7𝑥𝑦-𝑥𝑦𝑧+𝑧-7
= ?0 ( ?1 ) + ?2 ( ?3 )
= ?4
𝑥𝑦, 7-𝑧, -1, 7-𝑧, (𝑥𝑦-1)(7-𝑧) |(7-𝑧)(𝑥𝑦-1)`,

            vars: '𝑥𝑦𝑧()'
          }
        ]
      }
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'simp-regroup-2',
      label: 'Factorize using Identities',
      data: {
        title: 'Factorize using Identities',
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        isSentence: true,
        list: [
          {
            text: `~𝑥2+8𝑥+16 | (𝑥+4)2`,
            vars: '𝑥()'
          },
          {
            text: `~4𝑦2-12𝑦+9 | (4𝑦+3)2`,
            vars: '𝑥𝑦()'
          },
          {
            text: `~49𝑝2-36 
Ans = ?0
(7𝑝-6)(7𝑝+6)|(7𝑝+6)(7𝑝-6)`,
            vars: '𝑝𝑞()'
          },
          {
            text: `~𝑎2-2𝑎𝑏+𝑏2-𝑐2
= ?0 ~-𝑐2 
= ?1
(𝑎-𝑏)2, (𝑎-𝑏+𝑐)(𝑎-𝑏-𝑐)|(𝑎-𝑏-𝑐)(𝑎-𝑏+𝑐)`,
            vars: '𝑎𝑏𝑐()'
          },
          {
            text: `~𝑚4-256
= ~(m2-16)( ?0 )
= ~(m-4)( ?1 )( ??0 )
𝑚2+16, 𝑚+4`,
            vars: '𝑚𝑛'
          }
        ]
      }
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'simp-regroup-3',
      label: 'Factors in the form (𝑥+𝑎)(𝑥+𝑏)',
      data: {
        title: 'Factorize',
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true,
        list: [
          {
            text: `~𝑥2+5𝑥+6
= ~𝑥2+2𝑥+ ?0 ~+6 
= ?1 ~(𝑥+2) + ?2 ~(𝑥+2)
= ?3
3𝑥, 𝑥, 3, (𝑥+3)(𝑥+2)|(𝑥+2)(𝑥+3)`,
            vars: '𝑥()'
          },
          {
            text: `~𝑦2-7𝑦+12
= ~𝑦2-3𝑦+ ?0 ~+12 
= ?1 ~(𝑦-3) + ?2 ~(𝑦-3)
= ?3
-4𝑦, 𝑦, -4, (𝑦-3)(𝑦-4)|(𝑦-4)(𝑦-3)`,
            vars: '𝑥𝑦()'
          },
          {
            text: `~𝑧2-4𝑧-12
= ~𝑧2-6𝑧+ ?0 ~-12 
= ?1 ~(𝑧-6) + ?2 ~(𝑧-6)
= ?3
2𝑧, 𝑧, 2, (𝑧-6)(𝑧+2)|(𝑧+2)(𝑧-6)`,
            vars: '𝑥𝑦𝑧()'
          },
          {
            text: `~3𝑚2+9𝑚+6
= ~3( ?0 )
= ~3(𝑚2+𝑚+ ?1 ~+2)
= ~3( ?2 ~(𝑚+1) + ?3 ~(𝑚+1))
= ?4
𝑚2+3𝑚+2, 2𝑚, 𝑚, 2, 3(𝑚+2)(𝑚+1)|3(𝑚+1)(𝑚+2)`,
            vars: '𝑙𝑚𝑛()'
          }
        ]
      }
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-14-2',
      label: 'Exercise Problems (14.2)',
      commonData: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true
      },
      data: [
        {
          title: 'Factorise the following expression',
          list: [
            {
              text: `~𝑎2+8𝑎+16
= ~𝑎2 + (2 × ?0 × ?1 ) + ?2 ~^2
= ?3
𝑎, 4, 4, (𝑎+4)2`,
              vars: '𝑎𝑏𝑐()'
            },
            {
              text: `~𝑝2-10𝑝+25
= ~𝑝2 − (2 × ?0 × ?1 ) + ?2 ~^2
= ?3
𝑝, 5, 5, (𝑝-5)2`,
              vars: '𝑝𝑞()'
            },
            {
              text: `~25𝑚2+30𝑚+9
= ?0 ~^2 + (2 × ?1 × ?2 ) + ?3 ~^2
= ?4
5𝑚, 5𝑚, 3, 3, (5𝑚+3)2`,
              vars: '𝑚𝑛()'
            },
            {
              text: `~49𝑦2+84𝑦𝑧+36𝑧2
= ?0 ~^2 + (2 × ?1 × ?2 ) + ?3 ~^2
= ?4
7𝑦, 7𝑦, 6𝑧, 6𝑧, (7𝑦+6𝑧)2`,
              vars: '𝑥𝑦𝑧()'
            }
          ]
        },
        {
          title: 'Factorise the following expression',
          list: [
            {
              text: `~4𝑥2-8𝑥+4
= 4 ( ?0 )
= 4 ( ~𝑥2 - (2 × 𝑥 × ?1 ) + ?2 ~^2 )
= ?3
𝑥2-2𝑥+1, 1, 1, 4(𝑥-1)2`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~121𝑏2-88𝑏𝑐+16𝑐2
= ( ?0 ) ~^2 − (2 × ?1 × ?2 ) + ( ?3 ) ~^2
= ?4
11𝑏, 11𝑏, 4𝑐, 4𝑐, (11𝑏-4𝑐)2`,
              vars: '𝑎𝑏𝑐()'
            },
            {
              text: `~(𝑙+𝑚)2-4𝑙𝑚
= ~𝑙2+ ?0 ~+𝑚2-4𝑙𝑚
= ~𝑙2+ ?1 ~+𝑚2
= ?2
2𝑙𝑚, -2𝑙𝑚, (𝑙-𝑚)2`,
              vars: '𝑙𝑚()'
            },
            {
              text: `~𝑎4+2𝑎2𝑏2+𝑏4
= ( ?0 ) ~^2 ~+2𝑎2𝑏2 + ( ?1 ) ~^2
= ?2
𝑎2, 𝑏2, (𝑎2+𝑏2)2`,
              vars: '𝑎𝑏𝑐()'
            }
          ]
        },
        {
          title: 'Factorise',
          list: [
            {
              text: `~4𝑝2-9𝑞2
= ( ?0 ~)^2 − ( ?1 ~)^2
= ?2
2𝑝, 3𝑞, (2𝑝-3𝑞)(2𝑝+3𝑞)|(2𝑝+3𝑞)(2𝑝-3𝑞)`,
              vars: '𝑝𝑞()'
            },
            {
              text: `~63𝑎2-112𝑏2
= 7 ( ?0 )
= 7 (( ?1 ~)^2 − ( ?2 ~)^2 )
= ?3
9𝑎2-16𝑏2, 3𝑎, 4𝑏, 7(3𝑎-4𝑏)(3𝑎+4𝑏)|7(3𝑎+4𝑏)(3𝑎-4𝑏)`,
              vars: '𝑎𝑏𝑐()'
            },
            {
              text: `~49𝑥2-36
= ( ?0 ~)^2 − ( ?1 ~)^2
= ?2
7𝑥, 6, (7𝑥-6)(7𝑥+6)|(7𝑥+6)(7𝑥-6)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~16𝑥5-144𝑥3
= ~16𝑥3 ( ?0 )
= ~16𝑥3 ( ?1 ~^2 − ?2 ~^2 )
= ?3
𝑥2-9, 𝑥, 3, 16𝑥3(𝑥-3)(𝑥+3)|16𝑥3(𝑥+3)(𝑥-3)`,
              vars: '𝑥𝑦𝑧()'
            }
          ]
        },
        {
          title: 'Factorise',
          list: [
            {
              text: `~(𝑙+𝑚)2-(𝑙-𝑚)2
= ~𝑙2+𝑚2+2𝑙𝑚 − ( ?0 )
= ?1
𝑙2+𝑚2-2𝑙𝑚, 4𝑙𝑚`,
              vars: '𝑙𝑚()'
            },
            {
              text: `~9𝑥2𝑦2-16
= ( ?0 ~)^2 − ( ?1 ~)^2
= ?2
3𝑥𝑦, 4, (3𝑥𝑦-4)(3𝑥𝑦+4)|(3𝑥𝑦+4)(3𝑥𝑦-4)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~(𝑥2-2𝑥𝑦+𝑦2)-𝑧2
= ( ?0 ~)^2-𝑧2
= ?1
𝑥-𝑦, (𝑥-𝑦-𝑧)(𝑥-𝑦+𝑧)|(𝑥-𝑦+𝑧)(𝑥-𝑦-𝑧)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~25𝑎2-4𝑏2+28𝑏𝑐-49𝑐2
= ~25𝑎2-( ?0 )
= ( ?1 ~)^2 - (( ?2 ~)2-28𝑏𝑐+( ?3 ~)2)
= ( ??1 ~)^2 - ?4
= ?5
4𝑏2-28𝑏𝑐+49𝑐2, 5𝑎, 2𝑏, 7𝑐,  (2𝑏-7𝑐)2, (5𝑎-2𝑏+7𝑐)(5𝑎+2𝑏-7𝑐)|(5𝑎+2𝑏-7𝑐)(5𝑎-2𝑏+7𝑐)`,
              vars: '𝑎𝑏𝑐()'
            }
          ]
        },
        {
          title: 'Factorise the expressions',
          list: [
            {
              text: `~𝑎𝑥2+𝑏𝑥
= ?0 ( ?1 )
𝑥, 𝑎𝑥+𝑏`,
              vars: '𝑥𝑦𝑎𝑏'
            },
            {
              text: `~7𝑝2+21𝑞2
= ?0 ( ?1 )
7, 𝑝2+3𝑞2`,
              vars: '𝑝𝑞()'
            },
            `~2𝑥3+2𝑥𝑦2+2𝑥𝑧2
= ?0 ( ?1 )
2𝑥, 𝑥2+𝑦2+𝑧2`,
            {
              text: `~𝑎𝑚2+𝑏𝑚2+𝑏𝑛2+𝑎𝑛2
= ?0 ~(𝑎+𝑏) + ?1 ~(𝑎+𝑏)
= ?2
𝑚2, 𝑛2, (𝑚2+𝑛2)(𝑎+𝑏)|(𝑎+𝑏)(𝑚2+𝑛2)`,
              vars: '𝑎𝑏𝑚𝑛()'
            },
            {
              text: `~(𝑙𝑚+𝑙)+𝑚+𝑙
= ?0 ~(𝑚+1) + ?1 ~(𝑚+1)
= ?2
𝑙, 1, (𝑚+1)(𝑙+1)|(𝑙+1)(𝑚+1)`,
              vars: '𝑙𝑚𝑛()'
            }
          ]
        },
        {
          title: 'Factorise the expressions',
          list: [
            {
              text: `~𝑦(𝑦+𝑧)+9(𝑦+𝑧)
= ?0 
(𝑦+𝑧)(𝑦+9)|(𝑦+9)(𝑦+𝑧)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~5𝑦2-20𝑦-8𝑧+2𝑦𝑧
= ?0 ~(𝑦-4) + ?1 ~(𝑦-4)
= ?2
5𝑦, 2𝑧, (5𝑦+2𝑧)(𝑦-4)|(𝑦-4)(5𝑦+2𝑧)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~10𝑎𝑏+4𝑎+5𝑏+2
= ?0 ( ?1 ) + ?2 ( ??1 )
= ?3
2𝑎, 5𝑏+2, 1, (2𝑎+1)(5𝑏+2)|(5𝑏+2)(2𝑎+1)`,
              vars: '𝑎𝑏()'
            },
            {
              text: `~6𝑥𝑦-4𝑦+6-9𝑥
= ?0 ( ?1 ) + ?2 ( ??1 )
= ?3
2𝑦, 3𝑥-2, -3, (2𝑦-3)(3𝑥-2)|(3𝑥-2)(2𝑦-3)`,
              vars: '𝑥𝑦()'
            }
          ]
        },
        {
          title: 'Factorise',
          list: [
            {
              text: `~𝑎4-𝑏4
= ( ?0 ~)2 − ( ?1 ~)2
= ( ?2 ~)(𝑎2+𝑏2)
= ?3
𝑎2, 𝑏2, 𝑎2-𝑏2, (𝑎-𝑏)(𝑎+𝑏)(𝑎2+𝑏2)|(𝑎+𝑏)(𝑎-𝑏)(𝑎2+𝑏2)`,
              vars: '𝑎𝑏()'
            },
            {
              text: `~𝑝4-81
= ( ?0 ~)2 − ?1 ~^2
= ~(𝑝2-9)( ?2 ~)
= ?3
𝑝2, 9, 𝑝2+9| 𝑝2+3^2, (𝑝-3)(𝑝+3)(𝑝2+9)|(𝑝+3)(𝑝-3)(𝑝2+9)`,
              vars: '𝑝𝑞()'
            },
            {
              text: `~𝑥4-(𝑦+𝑧)4
= ~(𝑥2-(𝑦+𝑧)2)( ?0 )
= ?1 ( ??0 )
𝑥2+(𝑦+𝑧)2 , (𝑥-𝑦-𝑧)(𝑥+𝑦+𝑧)|(𝑥+𝑦+𝑧)(𝑥-𝑦-𝑧)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~𝑥4-(𝑥-𝑧)4
=  ~(𝑥2-(𝑥-𝑧)2)(𝑥2+(𝑥-𝑧)2)
= ~(𝑥-𝑥+𝑧)(𝑥+𝑥-𝑧) ~(𝑥2+𝑥2-2𝑥𝑧+𝑧2)
= 𝑧( ?0 )( ?1 )
2𝑥-𝑧, 2𝑥2-2𝑥𝑧+𝑧2`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `~𝑎4-2𝑎2𝑏2+𝑏4
=  ~(𝑎2)2-2𝑎2𝑏2+(𝑏2)2
= ( ?0 ~)2
= ~(𝑎-𝑏)2 ?1
𝑎2-𝑏2, (𝑎+𝑏)2`,
              vars: '𝑎𝑏()'
            }
          ]
        },
        {
          title: 'Factorise the following expressions',
          list: [
            {
              text: `~𝑝2+6𝑝+8
= ~𝑝2+2𝑝+ ?0 ~+8
= ?1 ~(𝑝+2) + ?2 ~(𝑝+2)
= ?3
4𝑝, 𝑝, 4, (𝑝+2)(𝑝+4)|(𝑝+4)(𝑝+2)`,
              vars: '𝑝𝑞()'
            },
            {
              text: `~𝑞2-10𝑞+21
= ~𝑞2-3𝑞+ ?0 ~+21
= ?1 ~(𝑞-3) + ?2 ~(𝑞-3)
= ?3
-7𝑞, 𝑞, -7, (𝑞-3)(𝑞-7)|(𝑞-7)(𝑞-3)`,
              vars: '𝑝𝑞()'
            },
            {
              text: `~𝑝2+6𝑝-16
= ~𝑝2+8𝑝+ ?0 ~+8
= ?1 ~(𝑝+8) + ?2 ~(𝑝+8)
= ?3
-2𝑝, 𝑝, -2, (𝑝+8)(𝑝-2)|(𝑝-2)(𝑝+8)`,
              vars: '𝑝𝑞()'
            }
          ]
        }
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'division-eg',
      label: 'Division (Example Problems)',
      commonData: {
        fontSize: '1.2rem',
        bigKeys: false,
        algebra: true,
        inputType: 'small',
        isSentence: true
      },
      data: [
        {
          title: 'Division of a monomial by another monomial',
          list: [
            `~6𝑥3÷2𝑥
            Ans = ?0
            3𝑥2`,

            `~-20𝑥4÷10𝑥2
            Ans = ?0
            -2𝑥2`,

            `~7𝑥2𝑦2𝑧2÷14𝑥𝑦𝑧
            Ans = ?0
            𝑥𝑦𝑧/2`,

            `~24𝑥𝑦2𝑧3÷6𝑦𝑧2
            Ans = ?0
            4𝑥𝑦𝑧`,
            {
              text: `~63𝑎2𝑏4𝑐6÷7𝑎2𝑏2𝑐3
Ans = ?0
9𝑏2𝑐3`,
              vars: '𝑎𝑏𝑐()'
            }
          ]
        },
        {
          title: 'Division of a polynomial by a monomial',
          list: [
            `~(4𝑦3+5𝑦2+6𝑦)÷2𝑦
            Ans = ?0 + ?1 + ?2
            2𝑦2, 5𝑦/2, 3`,
            {
              text: `~24(𝑥2𝑦𝑧+𝑥𝑦2𝑧+𝑥𝑦𝑧2)÷8𝑥𝑦𝑧
              Ans = ?0
              3(𝑥+𝑦+𝑧)`,
              vars: '𝑥𝑦𝑧()'
            }
          ]
        },
        {
          title: 'Polynomial ÷ Polynomial',
          list: [
            `~(7𝑥2+14𝑥)÷(𝑥+2)
            If we factorise the first term, we get
             = ?0 ( ?1 )
            Ans = ?2
            7𝑥, 𝑥+2, 7𝑥`,

            {
              text: `Divide ~44(𝑥4-5𝑥3-24𝑥2) by ~11𝑥(𝑥-8)
              Factorise the first term
              = ?0 ( ?1 )
              = ??0 ( ~𝑥2-8𝑥+ ?2 ~-24 )
              = ??0 ( ?3 ~(𝑥-8)+ ?4 ~(𝑥-8))
              = ?5
              Ans = ?6
              44𝑥2, 𝑥2-5𝑥-24, 3𝑥, 𝑥, 3, 44𝑥2(𝑥-8)(𝑥+3)|44𝑥2(𝑥+3)(𝑥-8), 4𝑥(𝑥+3)`,
              vars: '𝑥𝑦𝑧()'
            },
            {
              text: `Divide ~𝑧(5𝑧2-80) by ~5𝑧(𝑧+4)
              Factorise the first term
              = 5𝑧 ( ?0 )
              = 5𝑧 ( ~𝑧2 - ?1 ~^2 )
              = 5𝑧 ?2
              Ans = ?3
             𝑧2-16, 4, (𝑧-4)(𝑧+4)|(𝑧+4)(𝑧-4), 𝑧-4`,
              vars: '𝑥𝑦𝑧()'
            }
          ]
        }
      ]
    },
    /*
{
type: 'numberInput',
id: 'gcf-2',
label: 'Greatest Common Factor',
commonData: {
title: 'Fill in the boxes and complete the solution',
type: 'word-problem',
isSentence: false,
fontSize: '1.5rem',
algebra: true
},
data: []
},*/
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      commonData: {
        title: 'Find the right option.',
        fontSize: '1.5rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          questions: [
            {
              qText:
                'Which of the following is the common factor of ~21𝑥2𝑦 and ~35𝑥𝑦2 ?',
              options: `~7𝑥𝑦, ~7𝑥2𝑦2, ~𝑥𝑦, ~35𝑥2𝑦2`
            },
            {
              qText: 'Which of the following are the factors of ~1-𝑥2 ?',
              options: `1-𝑥, 1+𝑥
1-𝑥, 1-𝑥
1+𝑥, 1+𝑥
𝑥-1, 𝑥+1`
            },
            {
              qText: 'What is the common factor of: ~5𝑥𝑦, ~3p𝑞r and ~40𝑥𝑦𝑧 ?',
              options: `1, 0, 5, 𝑥𝑦`
            },
            {
              qText:
                'Which of the following is quotient obtained on dividing ~-18𝑥𝑦𝑧2 by ~-3𝑥𝑧 ?',
              options: `~6𝑦𝑧, ~-6𝑦𝑧, ~6𝑥, ~-6𝑧`
            },
            {
              qText:
                'Which of the following is quotient obtained on dividing ~(𝑥2-b)(𝑥-a) by ~-(𝑥-a) ?',
              options: `~-(𝑥2-b), ~(𝑥2-b), ~(𝑥-a), ~(𝑥2+b)`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'What are the factors of ~ab-a-b+1 ? ',
              options: `(a-1), (b-1)
(a+1), (b-1)
(a-1), (b+1)
(a+1), (b+1)`
            },
            {
              qText: 'Which of the following are the factors of ~a2+ab+bc+ca ?',
              options: `(a+b), (a+c)
(b+c), (c+a)
a(a+b+c)
(a+b), (b+c)`
            },
            {
              qText: 'Which of the following is equal to ~𝑥3-225𝑥 ?',
              options: `~𝑥(𝑥-15)(𝑥+15), ~𝑥(1-15𝑥)(1+15𝑥), ~𝑥(𝑥-15)(𝑥-15),  ~𝑥(𝑥+15)(𝑥+15)`
            },
            {
              qText: 'Which of the following is the factorisation of ~𝑥3-𝑥 ?',
              options: `~𝑥(𝑥+1)(𝑥-1), ~𝑥(𝑥-𝑥2), ~𝑥2(𝑥-1), ~𝑥(𝑥-1)(𝑥-1)`
            },
            {
              qText: '~(𝑦–𝑥)(𝑦+𝑥) is equal to which of the following:',
              options: `~𝑦2-𝑥2, ~𝑦2+𝑥2, ~𝑥2-𝑦2, ~𝑥𝑦-𝑦2`
            }
          ]
        },
        {
          questions: [
            {
              qText: `Factorise: 
~6𝑥𝑦-4𝑦+6-9𝑥 `,
              options: `~(3𝑥-2)(2𝑦-3), ~(2𝑥-3)(3𝑦-2), ~2𝑦-3, ~3𝑥-2`
            },
            {
              qText: 'Find the common factors of 12𝑥 and 36.',
              options: `~12, ~36, ~12𝑥, ~𝑥`
            },
            {
              qText:
                'When we factorise an expression, we write it as a ________ of factors.',
              options: `product, sum, difference, equality`
            },
            {
              qText: `Correct the errors in the following mathematical statement.
~4(𝑥-5)=4𝑥-5`,
              options: `~4(𝑥-5)=4x-20
~4(𝑥-5)=4𝑥-16
~4(𝑥-5)=4𝑥-25
~4(𝑥-5)=4𝑥+5`
            },
            {
              qText: `Divide:
~26𝑥𝑦(𝑥+5)(𝑦–4)÷13𝑥(𝑦–4)`,
              options: `~2𝑦(𝑥+5), ~2𝑦, ~(𝑥+5), ~26xy`
            }
          ]
        }
      ]
    }
  ]
};
