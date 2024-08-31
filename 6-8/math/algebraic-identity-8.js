export default {
  label: 'Algebraic Identity',
  id: 'algebraic-identity-8',
  lockAfter: 100,
  list: [
    //Exericise (9.1)
    {
      id: 'classify',
      label: 'Classify Expression (Exercise 9.1)',
      type: 'classifySentence',
      data: {
        title: 'Classify the following polynomials (Exercise 9.1)',
        fracFontSize: '1.5rem',
        fontSize: '2rem',
        textAlign: 'center',
        types: [
          {
            name: 'Monomial',
            text: `1000
~𝑝𝑞𝑟`
          },
          {
            name: 'Binomial',
            text: `~𝑥+𝑦
~2𝑦-3𝑦2
~4𝑧-15𝑧2
~𝑝2𝑞+𝑝𝑞2
~2𝑝+2𝑞`
          },
          {
            name: 'Trinomial',
            text: `~7+𝑦+5𝑥
~2𝑦-3𝑦2+4𝑦3
~5𝑥-4𝑦+3𝑥𝑦`
          },
          {
            name: 'None',
            text: `~𝑥+𝑥2+𝑥3+𝑥4
~𝑎𝑏+𝑏𝑐+𝑐𝑑+𝑑𝑎`
          }
        ]
      }
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-9-1',
      label: 'Exercise Problems (9.1)',
      commonData: {
        bigKeys: false,
        algebra: true,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem'
      },
      data: [
        {
          title: 'Add the following',
          list: [
            {
              text: `~𝑎𝑏-𝑏𝑐 , ~𝑏𝑐-𝑐𝑎, ~𝑐𝑎-𝑎𝑏
Ans = ?0
0`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~𝑎-𝑏+𝑎𝑏 , ~𝑏-𝑐+𝑏𝑐 , ~𝑐-𝑎+𝑎𝑐
Ans = ?0
𝑎𝑏+𝑏𝑐+𝑐𝑎`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~2𝑝2𝑞2-3𝑝𝑞+4 , ~5+7𝑝𝑞-3𝑝2𝑞2
Ans = ?0
-𝑝2𝑞2+4𝑝𝑞+9`,
              vars: '𝑝𝑞r'
            },
            {
              text: `~𝑙2+𝑚2 , ~𝑚2+𝑛2 , ~𝑛2+𝑙2 , ~2𝑙𝑚+2𝑚𝑛+2𝑛𝑙
(Extract common terms)
Ans = ?0
2(𝑙2+𝑚2+𝑛2+𝑙𝑚+𝑚𝑛+𝑛𝑙)`,
              vars: '𝑙𝑚𝑛()'
            }
          ]
        },
        {
          title: 'Answer the following',
          list: [
            {
              text: `Subtract ~4𝑎-7𝑎𝑏+3𝑏+12 from ~12𝑎-9𝑎𝑏+5𝑏-3
Ans = ?0
8𝑎-2𝑎𝑏+2𝑏-15`,
              vars: '𝑎𝑏𝑐'
            },
            `Subtract ~3𝑥𝑦+5𝑦𝑧-7𝑧𝑥 from ~5𝑥𝑦-2𝑦𝑧-2𝑧𝑥+10𝑥𝑦𝑧
Ans = ?0
2𝑥𝑦-7𝑦𝑧+5𝑧𝑥+10𝑥𝑦𝑧`,
            {
              text: `Subtract ~4𝑝2𝑞-3𝑝𝑞+5𝑝𝑞2-8𝑝+7𝑞-10 from ~18-3𝑝-11𝑞+5𝑝𝑞-2𝑝𝑞2+5𝑝2𝑞
Ans = ?0
𝑝2𝑞+8𝑝𝑞-7𝑝𝑞2+5𝑝-18𝑞+28|𝑝2𝑞-7𝑝𝑞2+8𝑝𝑞+5𝑝-18𝑞+28`,
              vars: '𝑝𝑞r'
            }
          ]
        }
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-9-2',
      label: 'Exercise Problems (9.2)',
      commonData: {
        bigKeys: false,
        algebra: true,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem'
      },
      data: [
        {
          vars: '𝑝𝑞𝑟',
          title: 'Find the product of the following pairs of monomials',
          list: [
            `~4, ~7𝑝
Ans = ?0
28𝑝`,

            `~-4𝑝, ~7𝑝
Ans = ?0
-28𝑝2`,

            `~-4𝑝, ~7𝑝𝑞
Ans = ?0
-28𝑝2𝑞`,

            `~4𝑝3, ~-3𝑝
Ans = ?0
-12𝑝4`,

            `~4𝑝, 0
Ans = ?0
0`
          ]
        },
        {
          title:
            'Find the areas of rectangles with the following pairs of monomials as their lengths and breadths respectively',
          list: [
            {
              text: `~𝑝 , ~𝑞
Ans = ?0
𝑝𝑞`,
              vars: '𝑝𝑞𝑟'
            },
            {
              text: `~10𝑚 , ~5𝑛
Ans = ?0
50𝑚𝑛`,
              vars: '𝑚𝑛𝑝'
            },
            `~20𝑥2 , ~5𝑦2
Ans = ?0
100𝑥2𝑦2`,

            `~4𝑥 , ~3𝑥2
Ans = ?0
12𝑥3`,
            {
              text: `~3𝑚𝑛 , ~4𝑛𝑝
Ans = ?0
12𝑚𝑛2𝑝`,
              vars: '𝑚𝑛𝑝'
            }
          ]
        },
        {
          title: 'Complete the table of products.',
          inputType: 'small',
          list: [
            {
              widths: '80, 90, 100, 90',
              text: `| ~2𝑥 | ~-5𝑦 | ~3𝑥2
~2𝑥 | ?0 | ?1 | ?2
~-5𝑦 | ?3 | ?4 | ?5
~3𝑥2  | ?6 | ?7 | ?8
~-4𝑥𝑦 | ?9 | ?10 | ?11
~7𝑥2𝑦 | ?12 | ?13 | ?14
~-9𝑥2𝑦2 | ?15 | ?16 | ?17
4𝑥2, -10𝑥𝑦, 6𝑥3, -10𝑥𝑦, 25𝑦2, -15𝑥2𝑦, 6𝑥3, -15𝑥2𝑦, 9𝑥4, -8𝑥2𝑦, 20𝑥𝑦2, -12𝑥3𝑦, 14𝑥3𝑦, -35𝑥2𝑦2, 21𝑥4𝑦, -18𝑥3𝑦2, 45𝑥2𝑦3, -27𝑥4𝑦2`
            }
          ]
        },
        {
          title: 'Complete the table of products.',
          inputType: 'small',
          list: [
            {
              widths: '80, 90, 90, 100',
              text: `| ~-4𝑥𝑦 | ~7𝑥2𝑦 | ~-9𝑥2𝑦2
~2𝑥 | ?0 | ?1 | ?2
~-5𝑦 | ?3 | ?4 | ?5
~3𝑥2  | ?6 | ?7 | ?8
~-4𝑥𝑦 | ?9 | ?10 | ?11
~7𝑥2𝑦 | ?12 | ?13 | ?14
~-9𝑥2𝑦2 | ?15 | ?16 | ?17
-8𝑥2𝑦 , 14𝑥3𝑦, -18𝑥3𝑦2, 20𝑥𝑦2, -35𝑥2𝑦2, 45𝑥2𝑦3, -12𝑥3𝑦, 21𝑥4𝑦, -27𝑥4𝑦2,  16𝑥2𝑦2, -28𝑥3𝑦2, 36𝑥3𝑦3, -28𝑥3𝑦2, 49𝑥4𝑦2, -63𝑥4𝑦3, 36𝑥3𝑦3, -63𝑥4𝑦3, 81𝑥4𝑦4`
            }
          ]
        },
        {
          title:
            'Obtain the volume of rectangular boxes with the following length, breadth and height respectively.',
          list: [
            {
              text: `~5𝑎 , ~3𝑎2 , ~7𝑎4
volume = ?0
105𝑎7`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `2𝑝 , 4𝑞 , 8𝑟
volume = ?0
64𝑝𝑞𝑟`,
              vars: '𝑝𝑞𝑟'
            },
            `~𝑥𝑦 , ~2𝑥2𝑦 , ~2𝑥𝑦2
volume = ?0
4𝑥4𝑦4`,
            {
              text: `𝑎 , 2𝑏 ,  3𝑐
volume = ?0
6𝑎𝑏𝑐`,
              vars: '𝑎𝑏𝑐'
            }
          ]
        },
        {
          title: 'Obtain the product of',
          list: [
            `𝑥𝑦 , 𝑦𝑧 , 𝑧𝑥
Ans = ?0
𝑥2𝑦2𝑧2`,

            {
              text: `𝑎 , ~-𝑎2 , ~𝑎3
Ans = ?0
-𝑎6`,
              vars: '𝑎𝑏𝑐'
            },

            `2 , ~4𝑦 , ~8𝑦2 , ~16𝑦3
Ans = ?0
1024𝑦6`,

            {
              text: `~𝑎 , ~2𝑏 , ~3𝑐 , ~6𝑎𝑏𝑐
volume = ?0
36𝑎2𝑏2𝑐2`,
              vars: '𝑎𝑏𝑐'
            },
            {
              text: `~𝑚 , ~-𝑚𝑛 , ~𝑚𝑛𝑝
volume = ?0
-𝑚3𝑛2𝑝`,
              vars: '𝑚𝑛𝑝'
            }
          ]
        }
      ]
    },
    {
      //type: 'algebraicInput',
      type: 'numberInput',
      id: 'ex-9-3',
      label: 'Exercise Problems (9.3)',
      commonData: {
        bigKeys: false,
        algebra: true,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          vars: '𝑝𝑞𝑟𝑎𝑏',
          title:
            'Carry out the multiplication of the expressions in each of the following pairs.',
          list: [
            `~4𝑝 , ~𝑞+𝑟
Ans = ?0
4𝑝𝑞+4𝑝𝑟`,

            `~𝑎𝑏 , ~𝑎-𝑏
Ans = ?0
𝑎2𝑏-𝑎𝑏2`,

            `~𝑎+𝑏 , ~7𝑎2𝑏2
Ans = ?0
7𝑎3𝑏2+7𝑎2𝑏3`,

            `~𝑎2-9 , 4𝑎
Ans = ?0
4𝑎3-36𝑎`,

            `~𝑝𝑞+𝑝𝑟+𝑟𝑝 , 0
Ans = ?0
0`
          ]
        },
        {
          title: '2. Find the product of the two expressions',
          list: [
            {
              text: `~𝑎 , ~𝑏+𝑐+𝑑
Ans = ?0
𝑎𝑏+𝑎𝑐+𝑎𝑑`,
              vars: `𝑎𝑏𝑐𝑑`
            },
            `~𝑥+𝑦-5 , ~5𝑥𝑦
Ans = ?0
5𝑥2𝑦+5𝑥𝑦2-25𝑥𝑦`,
            {
              text: `~𝑝 , ~6𝑝2-7𝑝+5
Ans = ?0
6𝑝3-7𝑝2+5𝑝`,
              vars: `𝑝𝑞𝑟`
            },
            {
              text: `~4𝑝2𝑞2 , ~𝑝2-𝑞2
Ans = ?0
4𝑝4𝑞2-4𝑝2𝑞4`,
              vars: `𝑝𝑞𝑟`
            },
            {
              text: `~𝑎+𝑏+𝑐 , ~𝑎𝑏𝑐
Ans = ?0
𝑎2𝑏𝑐+𝑎𝑏2𝑐+𝑎𝑏𝑐2`,
              vars: `𝑎𝑏𝑐𝑑`
            }
          ]
        },
        {
          title: '3. Find the product',
          list: [
            {
              text: `~𝑎2*2𝑎22*4𝑎26
Ans = ?0
8𝑎50`,
              vars: `𝑎𝑏𝑐𝑑`
            },

            `~!( 2/3 ~𝑥𝑦 ~!)* ~!( -9/10 ~𝑥2𝑦2 ~!)
Ans = ?0/?1
-3𝑥3𝑦3 , 5`,

            {
              text: `~!( -10/3 ~𝑝𝑞3 ~!)*!( 6/5 ~𝑝3𝑞 ~!)
Ans = ?0
-4𝑝4𝑞4`,
              vars: `𝑝𝑞𝑟`
            },

            `~𝑥*𝑥2*𝑥3*𝑥4
Ans = ?0
𝑥10`
          ]
        },
        {
          fontSize: '1rem',
          list: [
            `4. Simplify ~3𝑥(4𝑥-5)+3 and find its value for 
(i) ~𝑥=3 and (ii) ~𝑥= 1/2 
Simplified expression = 
?0
(i) For ~𝑥=3, 
Ans = ?1 - ?2 + 3
= ?3
(ii) For ~𝑥= 1/2 , 
Ans = ?4 - ?5 + 3
= ?6
12𝑥2-15𝑥+3, 108, 45, 66, 3, 15/2 | 7.5, -3/2 | -1.5`,
            {
              text: `4. Simplify ~𝑎(𝑎2+𝑎+1)+5 and find its value for 
(i) ~𝑎=0 (ii) ~𝑎=1 (iii) ~𝑎=-1
Simplified expression = 
?0
(i) For ~𝑎=0, 
Ans = ?1
(ii) For ~𝑎=1, 
Ans = ?2
(ii) For ~𝑎=-1, 
Ans = ?3
𝑎3+𝑎2+𝑎+5, 5, 8, 4`,
              vars: `𝑎𝑏𝑐𝑑`
            },
            {
              text: `5(a). Add:
~𝑝(𝑝-𝑞) , ~𝑞(𝑞-𝑟) and ~𝑟(𝑟-𝑝)
First exp after simplifying
= ?0
Second exp after simplifying
= ?1
Third exp after simplifying
= ?2       
Ans = ?3
𝑝2-𝑝𝑞, 𝑞2-𝑞𝑟, 𝑟2-𝑟𝑝, 𝑝2+𝑞2+𝑟2-𝑝𝑞-𝑞𝑟-𝑟𝑝|𝑝2+𝑞2+𝑟2-𝑝𝑞-𝑞𝑟-𝑝𝑟`,
              vars: `𝑝𝑞𝑟`
            },
            `5(b). Add:
~2𝑥(𝑧-𝑥-𝑦) and ~2𝑦(𝑧-𝑦-𝑥)
First exp after simplifying
= ?0
Second exp after simplifying
= ?1  
Ans = ?2
2𝑥𝑧-2𝑥2-2𝑥𝑦, 2𝑦𝑧-2𝑦2-2𝑥𝑦, -2𝑥2-2𝑦2-4𝑥𝑦+2𝑥𝑧+2𝑦𝑧|2𝑥𝑧-2𝑥2-4𝑥𝑦+2𝑦𝑧-2𝑦2`,

            {
              text: `5(c). Subtract:
~3𝑙(𝑙-4𝑚+5𝑛) from ~4𝑙(10𝑛-3𝑚+2𝑙)
First exp after simplifying
= ?0
Second exp after simplifying
= ?1 
Ans = ?2
3𝑙2-12𝑙𝑚+15𝑙𝑛, 40𝑙𝑛-12𝑙𝑚+8𝑙2, 5𝑙2+25𝑙𝑛`,
              vars: `𝑙𝑚𝑛`
            }
          ]
        }
      ]
    },
    {
      id: 'template',
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
              qText: 'The coefficient of 𝑥 in the expression -7𝑥 + 5 is',
              options: `-7, 7, 5, -𝑥`
            },
            {
              qText:
                'The numerical coefficient of y in the expression 2𝑥+3𝑦+7𝑧 is',
              options: `3, 2, 7, 3𝑦`
            },
            {
              qText: 'The expression 𝑦+𝑧+100 is a',
              options: `trinomial, monomial, binomial, literal number`
            },
            {
              qText: 'The expression 7𝑥𝑦 has the factors',
              options: `7, 𝑥, 𝑦
𝑥, 𝑦
7, 𝑥
7, 𝑦`
            },
            {
              qText: 'The common factors of the terms 2𝑦 and 22𝑥𝑦 is',
              options: `2𝑦, 2, 𝑦, 𝑥𝑦`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The addition of ab-bc, bc-ca, ca-ab is',
              options: `0, 3ab+3bc+3ca, ab+bc+ca, ab-bc+ca`
            },
            {
              qText: 'Which of the following is a binomial?',
              options: `3𝑥𝑦+𝑧, 3𝑥𝑦𝑧, 3𝑥+𝑦+𝑧, 3+𝑥+𝑦+𝑧`
            },
            {
              qText:
                'The area of a rectangle is 𝑥𝑦 where 𝑥 is length and 𝑦 is breadth. If the length of rectangle is increased by 5 units and breadth is decreased by 3 units, the new area of the rectangle will be',
              options: `(𝑥+5)(𝑦-3), (𝑥-𝑦)(𝑥+3), 𝑥𝑦+15, 𝑥𝑦+5-3`
            },
            {
              qText: `Multiplication of pq+qr+rp and 'zero' is`,
              options: `0, pq+qr, pq+rp, pq+qr+rp`
            },
            {
              qText: 'The value of 3𝑥(4𝑥-5)+3 for 𝑥=3 ',
              options: `66, -6, 106, 0`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which of the following expression is a trinomial?',
              options: `x+y+z, xyz, xy+z, x+yz`
            },
            {
              qText: 'Which of the following expression is a monomial?',
              options: `pqr, x+1, pq+r, p+qr`
            },
            {
              qText: 'Subtracting 7𝑥+𝑦 from –𝑥+𝑦 gives',
              options: `-8𝑥, 8𝑥, 6𝑥+2𝑦, 8𝑥+2𝑦`
            },
            {
              qText: 'Find the value of 95 x 102 by suitable identity.',
              options: `9690, 10310, 10290, 10690`
            },
            {
              qText: 'The value of 2𝑥(-3𝑥) is',
              options: `~-6𝑥2, ~5𝑥2, ~-6𝑥, ~-5𝑥2`
            }
          ]
        },
        {
          questions: [
            {
              qText: `Area of rectangle of length '3𝑥' and breadth '5𝑦' is`,
              options: `15𝑥𝑦, 3𝑥+5𝑦, 15𝑥, 15𝑦`
            },
            {
              qText: 'Number of terms in the expression 𝑥𝑦𝑧+1 is ',
              options: `2, 1, 3, 4`
            },
            {
              qText: 'The product of -4p and 7p is',
              options: `~-28p2, ~28p, ~-28p, ~28p3`
            },
            {
              qText: 'Use suitable identity to evaluate ~99^2',
              options: `9801, 10199, 10201, 10001`
            },
            {
              qText: `Multiplication of 'ab' and 'a-b' is`,
              options: `~a2b-ab2, ~a2b-b, ~a2b+b, ~ba2b+ab2`
            }
          ]
        }
      ]
    }
  ]
};
