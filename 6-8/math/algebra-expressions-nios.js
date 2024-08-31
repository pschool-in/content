export default {
  label: 'Algebraic Expressions and Operations (NIOS - level c)',
  id: 'algebra-expressions-nios',
  lockAfter: 100,
  list: [
    {
      label: 'Number of Terms',
      id: 'no-of-terms',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the number of terms in the below expression.',
        fontSize: '1.5rem',
        fracFontSize: '1.2rem',
        textAlign: 'center',
        variableOptions: true
      },
      data: [
        //example (page 2)
        `~-7𝑥 | 1, 0, 2
2/f + q | 2, 1, 3
~3𝑥2-𝑦𝑧+6 | 3, 2, 1
4t + 1/2 ~ft2 | 2, 3, 4
~abc+2fgh-af2-bg2-ch2 | 5, 4, 3`,

        //exercise (page 2)

        `3t | 1, 0, 2
~𝑥2+3𝑥𝑦 | 2, 1, 3
~t2+3t + 1/~t2 | 3, 2, 4, 5
~a3-b3+3 | 3, 2, 4, 5
ab+bc-ca | 3, 2, 1, 5
~𝑥2+𝑦2+𝑧2-2h𝑥𝑦 |  4, 2, 3`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-coeff',
      label: 'Find the co-efficient',
      data: {
        title: 'Find the co-efficient',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          {
            text: `Find the co-efficient of t in the term 't'?
Ans = ?0
1`,
            vars: 'rst'
          },
          {
            text: `Find the co-efficient of m in the term
2/3 ~m2n2 ?
Ans = ?0
2mn2/3`,
            vars: 'kmn'
          },

          `Find the co-efficient of ~𝑥2 in the term
~-25𝑥3𝑦𝑧 ?
Ans = ?0
-25𝑥𝑦𝑧`,

          `Find the co-efficient of ~𝑦𝑧 in the term
~-25𝑥3𝑦𝑧 ?
Ans = ?0
-25𝑥3`,
          `Find the co-efficient of ~5𝑥𝑦𝑧 in the term
~-25𝑥3𝑦𝑧 ?
Ans = ?0
-5𝑥2`,

          // Exercise problems (5.2 (1) pno - 5)

          {
            text: `Find the co-efficient of ~a2 in the term ~a2𝑦2𝑧 ?
Ans = ?0
𝑦2𝑧`,
            vars: 'a𝑥𝑦𝑧'
          },
          {
            text: `Find the co-efficient of st in the term ~3s3t3/7 ?
Ans = ?0
3s2t2/7`,
            vars: 'rst'
          },
          {
            text: `Find the co-efficient of 5t in the term ~-15qr2t2 ?
Ans = ?0
-3qr2t`,
            vars: 'qrst'
          },
          {
            text: `Find the co-efficient of ~𝑥3𝑦2 in the term ~7𝑥5𝑦3𝑧2 ?
Ans = ?0
7𝑥2𝑦𝑧2`,
            vars: '𝑥𝑦𝑧'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'numerical-factors',
      label: 'Numerical factors',
      data: {
        title: 'Find the numerical factors in the below expression.',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          `~3𝑦2/~𝑥2 + 5
Ans = ?0 and ?1
3, 5`,
          `5/𝑥 - 3
Ans = ?0 and ?1
5, -3`,
          {
            text: `~2a2b - 1/7
Ans = ?0 and ?1
2, -1/7`,
            vars: 'abc'
          },

          {
            text: `~-3st3/7 - 5/7
Ans = ?0 and ?1
-3/7, -5/7`,
            vars: 'rst'
          }
        ]
      }
    },
    //exercise 5.2 (3) page 5
    {
      id: 'classify-like-unlike',
      label: 'Like vs Unlike Terms',
      type: 'classifySentence',
      data: {
        title: 'Classify the below pairs as like and unlike terms.',
        fracFontSize: '1.5rem',
        fontSize: '2rem',
        textAlign: 'center',
        types: [
          {
            name: 'Like Terms',
            text: `𝑥/𝑦 , -7𝑥/𝑦 , 𝑥/7𝑦
~a2b2c2 , ~-b2c2a2`
          },
          {
            name: 'Unlike Terms',
            text: `1 , t
𝑥 , 𝑦 
1/3 ~𝑥2𝑦 , ~-𝑦2𝑥 , 5𝑥𝑦`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Simplify',
      data: {
        title: 'Simplify the expression by merging the like terms.',
        // type: 'word-problem',
        fontSize: '1.5rem',
        fracFontSize: '1.3rem',
        isSentence: true,
        algebra: true,
        list: [
          `~𝑥2-𝑦2+3𝑥2-4𝑥𝑦
Ans = ?0
4𝑥2-𝑦2-4𝑥𝑦`,

          `~5𝑥-3𝑦+ 3𝑥/5 +5
Ans = ?0
28𝑥/5-3𝑦+5`,

          `~𝑥𝑦𝑧-𝑦𝑧𝑥+𝑧𝑥𝑦+𝑥2𝑦𝑧
Ans = ?0
𝑥𝑦𝑧+𝑥2𝑦𝑧`,
          // example 5.2 (page 4)
          `𝑥 + 1/𝑥 + 1/7 𝑥 - 1/𝑥𝑦
Ans = ?0
8𝑥/7+1/𝑥-1/𝑥𝑦`,

          {
            text: `~a2𝑦2-2a2𝑦2+𝑦- 7/𝑦
Ans = ?0
-a2𝑦2+𝑦-7/𝑦`,
            vars: 'a𝑥𝑦'
          },
          {
            text: `~5mn-3m3n3+5m2n2 + 1/2 mn
Ans = ?0
11mn/2-3m3n3+5m2n2`,
            vars: 'kmn'
          },
          //page 9
          `7𝑥+2𝑦+3𝑥
Ans = ?0
10𝑥+2𝑦`,

          //page 10
          `~2[𝑥+5(𝑥+2)]-6
= 2[ ?0 + ?1 ] - 6
= ?2
6𝑥, 10, 12𝑥+14`,

          `( ~2𝑥3+7𝑥2𝑦2+9𝑥𝑦3 )
+ ( ~6+𝑥2𝑦2-3𝑥𝑦3 )
Ans = ?0
2𝑥3+8𝑥2𝑦2+6𝑥𝑦3+6 | 8𝑥2𝑦2+6𝑥𝑦3+2𝑥3+6`,

          `~2[4𝑥+3{2+(𝑥+1)} + 𝑥]
= 2[4𝑥+ ?0 + ?1 + 𝑥]
= 2[ ?2 + ?3 ]
= ?4
3𝑥, 9, 8𝑥, 9, 16𝑥+18`,

          //page 13
          `~𝑦𝑧2-(7𝑥-2𝑦)-10𝑦𝑧2
Ans = ?0
-7𝑥+2𝑦-9𝑦𝑧2 | -9𝑦𝑧2-7𝑥+2𝑦`,

          `~7-2[4𝑥-(1-3𝑥)]
= 7 - 2[ ?0 ]
= 7 - ?1
= ?2
7𝑥-1, 14𝑥-2, -14𝑥+9|9-14𝑥 `,

          `-2(3𝑥-𝑧)-(𝑧-𝑦)+5(𝑥+2𝑦)
= ?0 -(𝑧-𝑦) + ?1
= ?2
-6𝑥+2𝑧, 5𝑥+10𝑦, -𝑥+11𝑦+𝑧`,
          `(𝑥-1)(𝑥+1)(𝑥-2)(𝑥+2)
We know (𝑥-a)(𝑥+a) = ~𝑥2-a2
= ( ~𝑥2-1 ) × ( ?0 )
= ~𝑥2 ( ??0 ) -1 ( ??0 )
= ?1 + ?2
= ?3
𝑥2-4, 𝑥4-4𝑥2, -𝑥2+4, 𝑥4-5𝑥2+4`
        ]
      }
    },
    {
      id: 'classify-poly',
      label: 'Classify Polynomial',
      type: 'classifySentence',
      commonData: {
        title: 'Classify the Algebraic Expression',
        fracFontSize: '1.5rem',
        fontSize: '2rem',
        textAlign: 'center',
        types: ['Monomial', 'Binomial', 'Trinomial']
      },
      data: [
        [
          `~-7𝑥3𝑦𝑧
-1`,

          `3t+ 2/5 ~st2
~3𝑥2-5
p+q
~u2v+9v3
~a3-9b3
~3t2p+5
~4𝑥4𝑦3+3𝑧5`,

          `~at2+2hst+bs2
~a2+2ab+b2
~a3-b3-2abc
~3p-qr+s
~m2+m+2
~𝑥2+𝑦2-𝑧2`
        ],
        [
          `0`,
          `~3𝑧+7
~p-3q`,
          `~t2-5t+2
~𝑥3-3𝑥𝑦+𝑦3`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'find-degree',
      label: 'Find the Degree',
      data: {
        title: 'Find the Degree of the below algebraic expression',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        list: [
          ` ~4𝑥2𝑦
Ans = ?0
3`,

          ` ~2𝑥2
Ans = ?0
2`,

          ` 8
Ans = ?0
1`,
          ` ~3𝑥2𝑦+7𝑥𝑦-5𝑥+6
Ans = ?0
3`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'find-value',
      label: 'Find the Value',
      data: {
        title: 'Find the value of the below algebraic expression',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        list: [
          `For 𝑥 = 1, 𝑦 = -1, find the value of
~𝑦𝑥2-{1}/{3}~𝑥𝑦2+3
= ?0 + ?1/?2 + ?3
= ?4/?5
-1, -1, 3, 3, 5, 3`,

          `For 𝑦 = 0, 𝑧 = -1, find the value of
~5𝑦-𝑧
Ans = ?0
1`,

          `For 𝑥=2, 𝑦=-1 and 𝑧=-2, find the value of 
-𝑥𝑦+𝑦𝑧+𝑧𝑥
= ?0 + ?1 + ?2
= ?3
2, 2, -4, 0`,

          `For a= 1 and b= 2, find the value of 
2a/b
= ?0/?1
= ?2
2, 2, 1`,

          `For a=3 and b=2, find the value of 
(a+b)(a-b)
= ?0 × ?1
= ?2
5, 1, 5`,

          `For 𝑥=3, 𝑦=-1 and 𝑧=-3, find the value of
𝑥𝑦𝑧+𝑦𝑧𝑥+𝑧𝑥𝑦
= ?0 + ?1 + ?2
= ?3
9, 9, 9, 27`,

          `For 𝑥=-1, 𝑦=-1 and 𝑧=2, find the value of
~2𝑥3𝑦-3𝑥𝑦2+𝑧
= ?0 + ?1 + ?2
= ?3
2, 3, 2, 7`,

          `For a=b=c=d=2, find the value of 
~a2+b2+c2-3d2
= ?0 + ?1 + ?2 + ?3
= ?4
4, 4, 4, -12, 0`,

          // page 13
          `For 𝑥=5 and 𝑦=12, find the value of 
~𝑥2+𝑦2-169
= ?0 + ?1 - 169
= ?2 - 169
= ?3
25, 144, 169, 0`,

          `For s=5 and t=3, find the value of 
~(s+t)(s-t)
= ?0 × ?1
= ?2
8, 2, 16`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'add',
      label: 'Addition',
      data: {
        title: 'Add the following expressions',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          {
            text: `4a+3b–12c 
2a-5c
Ans = ?0
6a+3b-17c`,
            vars: 'abc'
          },
          {
            text: `7-14𝑥
5𝑥-a-3
Ans = ?0
4-9𝑥-a | -9𝑥-a+4 | -9𝑥+4-a`,
            vars: '𝑥𝑦a'
          },
          {
            text: `4a+3b-12c
b+2c
6a-c
Ans = ?0
10a+4b-11c`,
            vars: 'abc'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'sub',
      label: 'Subtraction',
      data: {
        title: 'Subtract the second expression from the first.',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          `7𝑥+2𝑦
3𝑥
Ans = ?0
4𝑥+2𝑦`,
          {
            text: `4a+3b–12c 
2a-5c
Ans = ?0
2a+3b-7c`,
            vars: 'abc'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'mul',
      label: 'Multiply Algebraic Expression',
      data: {
        title: 'Multiplication',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          {
            text: `Multiply (s+2) by 5
Ans = ?0
5s+10`,
            vars: 'stu'
          },
          `Multiply 2𝑥 and ~𝑥2-2𝑥+1
Ans = ?0
2𝑥3-4𝑥2+2𝑥`,

          `Multiply 2𝑥+5 and 2𝑥+3
Ans = 2𝑥(2𝑥+3) + 5(2𝑥+3)
= ?0 + ?1
= ?2
4𝑥2+6𝑥, 10𝑥+15, 4𝑥2+16𝑥+15`,

          `𝑦 ( ~3𝑦2+5𝑦-6 )
Ans = ?0 
3𝑦3+5𝑦2-6𝑦`,

          {
            text: `( ~a2-b2 )ab
Ans = ?0 
a3b-ab3`,
            vars: 'abc'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'stmt-prog',
      label: 'Write the Statements',
      data: {
        title: 'Convert the statements into expression.',
        // type: 'word-problem',
        fontSize: '1rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          `Lets take a number 𝑥.
Multiply it by 2 : ?0
Add the double of the second number (𝑦): ?1
Subtract 4 : ?2
Divide by 2 : ?3
Subtract 𝑦 : ?4
Add 2 : ?5
2𝑥, 2𝑥+2𝑦, 2𝑥+2𝑦-4, 𝑥+𝑦-2, 𝑥-2, 𝑥`,

          `Think of a number 𝑥.
Multiply it by 3 : ?0
In it add a number which is 1 more than the original number : ?1
Add 7 to it : ?2
Divide by 4 : ?3
Subtract 2 : ?4
3𝑥, 4𝑥+1, 4𝑥+8, 𝑥+2, 𝑥`
        ]
      }
    },
    //p no: 13
    {
      id: 'classify-poly-2',
      label: 'Classify Polynomials',
      type: 'classifySentence',
      data: {
        title: 'Classify the Polynomials',
        fracFontSize: '1.5rem',
        fontSize: '2rem',
        textAlign: 'center',
        types: [
          {
            name: 'Monomial',
            text: `0`
          },
          {
            name: 'Binomial',
            text: `~ut + 1/2 ~gt2
~v2-u2`
          },
          {
            name: 'Trinomial',
            text: `~𝑥2+𝑦2-a2
~a𝑥2+2h𝑥𝑦+b𝑦2
~p2+2pq+q2`
          }
        ]
      }
    }
  ]
};
