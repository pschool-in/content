export default {
  label: 'Algebraic Expression',
  id: 'algebraic-expression-7',
  lockAfter: 100,
  list: [
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-12-1',
      label: 'Exercise Problems (12.1)',
      commonData: {
        bigKeys: false,
        algebra: true,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        title: 'Answer the following:'
      },
      data: [
        {
          title:
            'Get the algebraic expressions in the following cases using variables, constants and arithmetic operations.',
          list: [
            `Subtraction of 𝑧 from 𝑦.
Ans = ?0
𝑦-𝑧`,
            `One-half of the sum of numbers 𝑥 and 𝑦.
Ans = { ?0 }/{ ?1 }
𝑥+𝑦, 2`,
            `The number 𝑧 multiplied by itself
Ans = ?0
𝑧2`,
            {
              text: `One-fourth of the product of numbers 𝑝 and 𝑞. 
Ans = ?0
𝑝𝑞/4`,
              vars: '𝑝𝑞'
            },
            `Numbers 𝑥 and 𝑦 both squared and added.
Ans = ?0
𝑥2+𝑦2`,
            {
              text: `Number 5 added to three times the product of numbers 𝑚 and 𝑛.
Ans = ?0
3𝑚𝑛+5|`,
              vars: '𝑚𝑛'
            },
            `Product of numbers 𝑦 and 𝑧 subtracted from 10
Ans = ?0
10-𝑦𝑧`,
            {
              text: `Sum of numbers 𝑎 and 𝑏 subtracted from their product.
Ans = ?0
𝑎𝑏-𝑎-𝑏`,
              vars: '𝑎𝑏'
            }
          ]
        },
        {
          title:
            'Identify terms which contain 𝑥 and write the coefficient of 𝑥.',
          list: [
            {
              widths: '200, 160',
              text: `expression | Co-efficient of 𝑥
~𝑦2𝑥+𝑦 | ?0
~13𝑦2-8𝑥𝑦 | ?1
~𝑥+𝑦+2 | ?2
~5+𝑧+𝑧𝑥 | ?3
~1+𝑥+𝑥𝑦 | ?4
~12𝑥𝑦2+15 | ?5
~7𝑥+𝑥𝑦2 | ?6
𝑦2, -8𝑦, 1, 𝑧, 1+𝑦| 𝑦+1, 12𝑦2, 7+𝑦2|𝑦2+7`
            }
          ]
        },
        {
          title: `Identify terms which contain ~𝑦2 and give the coefficient of ~𝑦2`,
          list: [
            {
              widths: '200, 160',
              text: `expression | Co-efficient of ~𝑦2
~8-𝑥𝑦2 | ?0
~5𝑦2+7𝑥 | ?1
~2𝑥2𝑦-15𝑥𝑦2+7𝑦2 | ?2
-𝑥, 5, -15𝑥`
            }
          ]
        }
      ]
    },
    {
      label: 'Classify Expression',
      id: 'classify',
      type: 'classifySentence',
      data: {
        title: 'Classify the below expression.',
        types: [
          {
            name: 'Monomial',
            text: `~𝑦2
100
7𝑚𝑛`
          },
          {
            name: 'Binomial',
            text: `~4𝑦-7𝑧
~5-3𝑡
~4𝑝2𝑞-4𝑝𝑞2
~𝑎2+𝑏2
𝑧2+𝑧`
          },
          {
            name: 'Trinomial',
            text: `~𝑥+𝑦-𝑥𝑦
~𝑎𝑏-𝑎-𝑏
~𝑧2-3𝑧+8
~1+𝑥+𝑥2`
          }
        ]
      }
    },
    {
      label: 'Classify Like and Unlike Terms',
      id: 'classify-1',
      type: 'classifySentence',
      data: {
        title: 'Classify the below pair of terms as like and unlike terms.',
        textAlign: 'center',
        fracFontSize: '1rem',
        types: [
          {
            name: 'Like',
            text: `1 , 100
-7𝑥 , 5𝑥/2
14𝑥𝑦, 42𝑦𝑥`
          },
          {
            name: 'Unlike',
            text: `-29𝑥 , -29𝑦
~4𝑚2𝑝 , ~4𝑚𝑝2
~12𝑥𝑧 , ~12𝑥2𝑧2 `
          }
        ]
      }
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Like Terms',
      commonData: {
        title: 'Match Like Terms',
        fracFontSize: '1rem'
      },
      data: [
        `~-𝑥𝑦2 , ~2𝑥𝑦2
~-4𝑦𝑥2 , ~20𝑥2𝑦
~8𝑥2 , ~-11𝑥2
~7𝑦 , ~𝑦
~-100𝑥 , ~𝑥/2`,

        ` ~-11𝑦𝑥 , ~2𝑥𝑦
~-6𝑥2 , ~𝑥2
~3𝑥, ~-𝑥
~4𝑧𝑥 , ~𝑥𝑧/2
~3𝑥2𝑦 , ~7𝑦𝑥2`,

        `~10𝑝𝑞 , ~-7𝑞𝑝
~7𝑝 , ~2405𝑝
8𝑞 , -100𝑞
-23 , 41
~12𝑞2𝑝2, ~𝑞2𝑝2/2`,

        `~-5𝑝2 , ~701𝑝2
~78𝑞𝑝 , ~𝑞𝑝
~13𝑝2𝑞, ~-𝑝2𝑞
~𝑞𝑝2, ~2𝑞𝑝2`
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-12-2',
      label: 'Exercise Problems (12.2)',
      commonData: {
        bigKeys: false,
        algebra: true,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        title: 'Answer the following:'
      },
      data: [
        {
          title: 'Simplify combining like terms:',
          list: [
            {
              text: `~21𝑏-32+7𝑏-20𝑏
Ans = ?0
8𝑏-32`,
              vars: '𝑎𝑏𝑐'
            },
            `~-𝑧2+13𝑧2-5𝑧+7𝑧3-15𝑧
Ans = ?0
7𝑧3+12𝑧2-20𝑧`,
            {
              text: `~𝑝-(𝑝-𝑞)-𝑞-(𝑞-𝑝)
After removing brackets, we get
?0
Ans = ?1
𝑝-𝑝+𝑞-𝑞-𝑞+𝑝, 𝑝-𝑞`,
              vars: '𝑝𝑞𝑟'
            },
            {
              text: `~3𝑎-2𝑏-𝑎𝑏-(𝑎-𝑏+𝑎𝑏)+3𝑎𝑏+𝑏-𝑎
After removing brackets, we get
?0
Ans = ?1
3𝑎-2𝑏-𝑎𝑏-𝑎+𝑏-𝑎𝑏+3𝑎𝑏+𝑏-𝑎, 𝑎+𝑎𝑏`,
              vars: '𝑎𝑏𝑐'
            },
            `~5𝑥2𝑦-5𝑥2+3𝑦𝑥2-3𝑦2+𝑥2-𝑦2+8𝑥𝑦2-3𝑦2
Ans = ?0
8𝑥2𝑦-4𝑥2-7𝑦2+8𝑥𝑦2|8𝑥2𝑦+8𝑥𝑦2-4𝑥2-7𝑦2`,

            `~(3𝑦2+5𝑦-4)-(8𝑦-𝑦2-4)
After removing brackets, we get
?0
Ans = ?1
3𝑦2+5𝑦-4-8𝑦+𝑦2+4, 4𝑦2-3𝑦`
          ]
        },
        {
          title: 'Add :',
          list: [
            {
              text: `~3𝑚𝑛 , ~-5𝑚𝑛 , ~8𝑚𝑛 , ~-4𝑚𝑛
Ans = ?0
2𝑚𝑛`,
              vars: '𝑚𝑛'
            },
            {
              text: `~𝑡-8𝑡𝑧 , ~3𝑡𝑧-𝑧 , ~𝑧-𝑡
Ans = ?0
-5𝑡𝑧`,
              vars: '𝑡𝑧'
            },
            {
              text: `~-7𝑚𝑛+5 , ~12𝑚𝑛+2 , ~9𝑚𝑛-8 , ~-2𝑚𝑛-3
Ans = ?0
12𝑚𝑛-4`,
              vars: '𝑚𝑛'
            },
            {
              text: `~𝑎+𝑏-3 , ~𝑏-𝑎+3 , ~𝑎-𝑏+3
Ans = ?0
𝑎+𝑏+3`,
              vars: '𝑎𝑏𝑐'
            },
            `~14𝑥+10𝑦-12𝑥𝑦-13 , ~18-7𝑥-10𝑦+8𝑥𝑦 , ~4𝑥𝑦
Ans = ?0
7𝑥+5`
          ]
        },
        {
          title: 'Add :',
          list: [
            {
              text: `~5𝑚-7𝑛 , ~3𝑛-4𝑚+2 , ~2𝑚-3𝑚𝑛-5
Ans = ?0
3𝑚-4𝑛-3𝑚𝑛-3`,
              vars: '𝑚𝑛'
            },
            `~4𝑥2𝑦 , ~-3𝑥𝑦2 , ~-5𝑥𝑦2 , ~5𝑥2𝑦
A𝑛s = ?0
9𝑥2𝑦-8𝑥𝑦2`,
            {
              text: `~3𝑝2𝑞2-4𝑝𝑞+5 , ~-10𝑝2𝑞2 , ~15+9𝑝𝑞+7𝑝2𝑞2
Ans = ?0
5𝑝𝑞+20`,
              vars: '𝑝𝑞'
            },
            {
              text: `~𝑎𝑏-4𝑎 , 4𝑏-𝑎𝑏 , 4𝑎-4𝑏
Ans = ?0
0`,
              vars: '𝑎𝑏'
            },
            `~𝑥2-𝑦2-1 , ~𝑦2-1-𝑥2 , ~1-𝑥2-𝑦2
Ans = ?0
-𝑥2-𝑦2-1`
          ]
        },

        {
          title: 'Subtract :',
          list: [
            `~-5𝑦2 from ~𝑦2
Ans = ?0
6𝑦2`,
            `~6𝑥𝑦 from -12𝑥𝑦
Ans = ?0
-18𝑥𝑦`,
            {
              text: `~(𝑎-𝑏) from ~(𝑎+𝑏)
Ans = ?0
2𝑏`,
              vars: '𝑎𝑏'
            },
            {
              text: `~𝑎(𝑏-5) from ~𝑏(5-𝑎)
~𝑏(5-𝑎)-𝑎(𝑏-5)
Removing brackets we get
?0
Ans = ?1
5𝑏-𝑎𝑏-𝑎𝑏+5𝑎, 5𝑎+5𝑏-2𝑎𝑏|5𝑏-2𝑎𝑏+5𝑎`,
              vars: '𝑎𝑏'
            }
          ]
        },
        {
          title: 'Subtract :',
          list: [
            {
              text: `~-𝑚2+5𝑚𝑛 from ~4𝑚2-3𝑚𝑛+8
= ~4𝑚2-3𝑚𝑛+8 ?0
Ans = ?1
+𝑚2-5𝑚𝑛, 5𝑚2-8𝑚𝑛+8`,
              vars: '𝑚𝑛'
            },
            `~-𝑥2+10𝑥-5 from ~5𝑥-10
~5𝑥-10 ?0
Ans = ?1
+𝑥2-10𝑥+5, 𝑥2-5𝑥-5`,
            {
              text: `~5𝑎2-7𝑎𝑏+5𝑏2 from ~3𝑎𝑏-2𝑎2-2𝑏2
~3𝑎𝑏-2𝑎2-2𝑏2 ?0
Ans = ?1
-5𝑎2+7𝑎𝑏-5𝑏2, 10𝑎𝑏-7𝑎2-7𝑏2`,
              vars: '𝑎𝑏'
            },
            {
              text: `~4𝑝𝑞-5𝑞2-3𝑝2 from ~5𝑝2+3𝑞2-𝑝𝑞
~5𝑝2+3𝑞2-𝑝𝑞 ?0
Ans = ?1
-4𝑝𝑞+5𝑞2+3𝑝2, 8𝑝2+8𝑞2-5𝑝𝑞`,
              vars: '𝑝𝑞'
            }
          ]
        },
        {
          title: 'Answer the following',
          fontSize: '1rem',
          list: [
            `What should be added to ~𝑥2+𝑥𝑦+𝑦2 to obtain ~2𝑥2+3𝑥𝑦 ?
We should subtract the first expression from the second.
~2𝑥2+3𝑥𝑦 ?0
Ans = ?1
-𝑥2-𝑥𝑦-𝑦2 , 𝑥2+2𝑥𝑦-𝑦2`,
            {
              text: `What should be subtracted from ~2𝑎+8𝑏+10 to get ~-3𝑎+7𝑏+16 ?
We should subtract the second expression from the first.
~2𝑎+8𝑏+10 ?0
Ans = ?1
3𝑎-7𝑏-16, 5𝑎+𝑏-6`,
              vars: '𝑎𝑏'
            },
            `What should be taken away from ~3𝑥2-4𝑦2+5𝑥𝑦+20 to obtain ~-𝑥2-𝑦2+6𝑥𝑦+20?
We should subtract the second expression from the first.
~3𝑥2-4𝑦2+5𝑥𝑦+20 ?0
Ans = ?1
+𝑥2+𝑦2-6𝑥𝑦-20, 4𝑥2-3𝑦2-𝑥𝑦`,
            `Find the sum of ~3𝑥-𝑦+11 and ~-𝑦-11, subtract ~3𝑥-𝑦-11.
If we add the first two expression, we get
?0
Lets subtract the third expression
??0 ?1
Ans = ?2
3𝑥-2𝑦, -3𝑥+𝑦+11, -𝑦+11`,
            `From the sum of ~4+3𝑥 and ~5-4𝑥+2𝑥2, subtract the sum of ~3𝑥2-5𝑥 and ~-𝑥2+2𝑥+5
Sum of first 2 terms
= ?0
Sum of last 2 terms
= ?1
Ans = ??0 - ( ??1 )
= ??0 ?2
= ?3
9-𝑥+2𝑥2 , 2𝑥2-3𝑥+5, -2𝑥2+3𝑥-5, 2𝑥+4`
          ]
        }
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-12-3',
      label: 'Exercise Problems (12.3)',
      commonData: {
        bigKeys: false,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        allowFrac: false,
        title: 'Answer the following:'
      },
      data: [
        {
          title: 'If 𝑚 = 2, find the value of:',
          list: [
            {
              widths: '220, 100',
              text: `expression | value
~𝑚-2 | ?0
~3𝑚-5 | ?1
~9-5𝑚 | ?2
~3𝑚2-2𝑚-7 | ?3
~5𝑚/2 ~-4 | ?4
0, 1, -1, 1, 1`
            }
          ]
        },
        {
          title: 'If 𝑝 = -2, find the value of:',
          list: [
            {
              widths: '220, 100',
              text: `expression | value
~4𝑝+7 | ?0
~-3𝑝2+4𝑝+7 | ?1
~-2𝑝3 | ?2
~-2𝑝3-3𝑝2 | ?3
~-2𝑝3-3𝑝2+4𝑝+7 | ?4
-1 , -13, 16, 4, 3`
            }
          ]
        },
        {
          title: 'Find the value of the following expressions, when 𝑥 = -1 :',
          list: [
            {
              widths: '220, 100',
              text: `expression | value
~2𝑥-7 | ?0
~-𝑥+2 | ?1
~𝑥2+2𝑥+1 | ?2
~2𝑥2-𝑥-2 | ?3
-9 , 3, 0, 1`
            }
          ]
        },
        {
          title: 'If a = 2, b = -2, find the value of  :',
          list: [
            {
              widths: '220, 100',
              text: `expression | value
~a2+b2 | ?0
~a2+ab+b2 | ?1
~a2-b2 | ?2
8, 4, 0`
            }
          ]
        },
        {
          title:
            'When a = 0 , b = -1, find the value of the given expressions :',
          list: [
            {
              widths: '220, 100',
              text: `expression | value
~2a+2b | ?0
~2a2+b2+1 | ?1
~2a2b+2ab2+ab | ?2
~a2+ab+2 | ?3
-2, 2, 0, 2`
            }
          ]
        },

        {
          title:
            'Simplify the expressions and find the value if 𝑥 is equal to 2.',
          isSentence: true,
          fontSize: '1rem',
          algebra: true,
          list: [
            `~𝑥+7+4(𝑥-5)
After Simplifying, the expression becomes
?0
value = ?1
5𝑥-13, -3`,

            `~3(𝑥+2)+5𝑥-7
After Simplifying, the expression becomes
?0
value = ?1
8𝑥-1, 15`,

            `~6𝑥+5(𝑥-2)
After Simplifying, the expression becomes
?0
value = ?1
11𝑥-10, 12`,

            `~4(2𝑥-1)+3𝑥+11
After Simplifying, the expression becomes
?0
value = ?1
11𝑥+7, 29`
          ]
        },
        {
          title:
            'Simplify these expressions and find their values if 𝑥 = 3, a = – 1, b = – 2.',
          isSentence: true,
          fontSize: '1rem',
          algebra: true,
          list: [
            `~3𝑥-5-𝑥+9
After Simplifying, the expression becomes
?0
value = ?1
2𝑥+4 , 10`,

            `~2-8𝑥+4𝑥+4
After Simplifying, the expression becomes
?0
value = ?1
-4𝑥+6 | 6-4𝑥 , -6`,

            {
              text: `~3𝑎+5-8𝑎+1
After Simplifying, the expression becomes
?0
value = ?1
-5𝑎+6|6-5𝑎, 11`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~10-3𝑏-4-5𝑏
After Simplifying, the expression becomes
?0
value = ?1
6-8𝑏, 22`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~2𝑎-2𝑏-4-5+𝑎
After Simplifying, the expression becomes
?0
value = ?1
3𝑎-2𝑏-9, -8`,
              vars: '𝑎𝑏𝑐'
            }
          ]
        },
        {
          title: 'Answer the following',
          isSentence: true,
          fontSize: '1rem',
          algebra: true,
          list: [
            `If 𝑧 = 10, find the value of
~𝑧3-3(𝑧-10)
~𝑧3 = ?0
~3(𝑧-10) = ?1
Ans = ?2
1000, 0, 1000`,

            ` If 𝑝 = –10, find the value of 
~𝑝2-2𝑝-100
~𝑝2-2𝑝 = ?0
Ans = ?1
120, 20`,

            `What should be the value of a if the value of ~2𝑥2+𝑥-a equals to 5, when 𝑥=0 ?
Ans = ?0
-5`,

            {
              text: `Simplify the expression and find its value when 𝑎=5 and 𝑏=-3.
~2(𝑎2+𝑎𝑏)+3-𝑎𝑏
After simplifying we get
?0
value = ?1
2𝑎2+𝑎𝑏+3, 38`,
              vars: '𝑎𝑏𝑐'
            }
          ]
        }
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      commonData: {
        title: 'Find the right option.',
        fontSize: '1.1rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          questions: [
            {
              qText: 'How many terms are there in the expression ~2𝑥2𝑦 ?',
              options: `1, 2, 3, 4`
            },
            {
              qText: 'How many terms are there in the expression ~2𝑦+5 ?',
              options: `2, 1, 3, 4`
            },
            {
              qText:
                'How many terms are there in the expression 1.2𝑎b – 2.4𝑏 + 3.6𝑎 ?',
              options: `3, 1, 2, 4`
            },
            {
              qText:
                'How many terms are there in the expression –2𝑝3 – 3𝑝2 + 4𝑝 + 7 ?',
              options: `4, 1, 2, 3`
            },
            {
              qText: 'What is the coefficient of 𝑥 in the expression 4𝑥 + 3𝑦?',
              options: `4, 4𝑥, 3, 3𝑦`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'What is the coefficient of ~𝑦2 in the expression ~2𝑥2𝑦-10𝑥𝑦2+5𝑦2? ',
              options: `5-10𝑥, 5, 10𝑥, -10𝑥`
            },
            {
              qText:
                'Which of the following pairs of terms is a pair of like terms?',
              options: `1, 10
𝑦, -𝑥𝑦
𝑧², 𝑧
𝑧², 8`
            },
            {
              qText: ' Add: 2𝑚𝑛, -4𝑚𝑛, 8𝑚𝑛, -6𝑚𝑛',
              options: `0, 2𝑚𝑛,10𝑚𝑛, -2𝑚𝑛`
            },
            {
              qText: 'Add: a + b – 1, b – a + 1, 1 – 2b',
              options: `1, -1, 0, -2`
            },
            {
              qText: 'Simplify: 𝑝 + (𝑝 – 𝑞) + 𝑞 + (𝑞 – 𝑝)',
              options: `𝑝 + 𝑞, 2𝑝 + 2𝑞, 𝑝 - 𝑞, 2𝑝 - 2𝑞`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Simplify: ~𝑧2+11𝑧2-5𝑧-11𝑧2+5𝑧',
              options: `~𝑧2, ~-𝑧2, ~12𝑧2, ~-12𝑧2`
            },
            {
              qText: 'Subtract –𝑥𝑦 from 𝑥𝑦',
              options: `2𝑥𝑦, 0, 𝑦, -𝑥`
            },
            {
              qText: 'Find the value of the expression 𝑥+2 for 𝑥=-2',
              options: `0, 4, 2, -2`
            },
            {
              qText: 'Find the value of the expression 4𝑥–3 for 𝑥=1',
              options: `1, 0, 7, 4`
            },
            {
              qText:
                'If the value of the expression ~𝑥2-5𝑥+𝑘 for 𝑥 = 0 is 5, then the value of 𝑘 is',
              options: `5, 0, -5, 1`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Find the value of the expression ~𝑎3+𝑏3+𝑐3-3𝑎𝑏𝑐 for 𝑎=2, 𝑏=3, 𝑐=4',
              options: `27, 3, 6, 9`
            },
            {
              qText: 'Find the value of the expression 3𝑝+7 for 𝑝=-2',
              options: `1, -1, 2, -2`
            },
            {
              qText: 'Find the value of the expression –𝑥+2 for 𝑥=-2',
              options: `4, 0, -2, 1`
            },
            {
              qText: 'Find the value of the expression ~𝑧3-2(𝑧-10) for 𝑧 = 10',
              options: `1000, 10000, 9000, 900`
            },
            {
              qText: 'Find the value of the expression ~3𝑥+5(𝑥-2) for 𝑥 = 2',
              options: `6, 8, 4, 16`
            }
          ]
        }
      ]
    }
  ]
};
