export default {
  label: 'Introduction to Algebra (NIOS - level c)',
  id: 'algebra-intro-nios',
  lockAfter: 100,
  list: [
    {
      id: 'template',
      label: 'Multiple Choice Question',
      type: 'mcq',
      data: {
        title: 'Find the right option.',
        fontSize: '1.5rem',
        fracFontSize: '1rem',
        questions: [
          {
            qText: 'In 𝑥+5=𝑦, 𝑥 and 𝑦 are',
            options: `variables, alphabets, equation, quantities`
          },
          {
            qText: `Raman's age is double the age of his younger sister. Which of the below equation represents this?`,
            options: `𝑥 = 2𝑦, 𝑥 = 𝑦 + 2, 𝑥 + 2 = 𝑦, 2𝑥 = 2𝑦`
          },
          {
            qText: `One-fourth the length of a rod can be given by the expression`,
            options: `L/4, 1/4L, 1/4, 4L`
          },
          {
            qText: `The co-efficient of the term -3𝑥 is ____.`,
            options: `-3, 3, -3𝑥, 𝑥`
          },
          {
            qText: `The co-efficient of the term 𝑥/5 is ____.`,
            options: `1/5, 5, 𝑥/5, 𝑥`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Algebraic Expression',
      commonData: {
        title: 'Math Machine',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 2𝑥
0 | ?0
1 | ?1
2 | ?2
4 | ?3
7 | ?4
10 | ?5
0, 2, 4, 8, 14, 20`
            }
          ]
        },
        {
          title: 'For the given side of a square, find its perimeter.',
          list: [
            {
              widths: '160, 160',
              text: `Side | Perimeter
a | 4a
1 ^km | ?0 ^km
2 ^km | ?1 ^km
5 ^km | ?2 ^km
10 ^km  | ?3 ^km
7 ^km  | ?4 ^km
4, 8, 20, 40, 28`
            }
          ]
        },
        {
          title:
            'The quantity of cakes are given. Each cake costs ₹ 20. Also, ₹ 10 added for package. Find the price for each case.',
          list: [
            {
              widths: '160, 160',
              text: `No. of Cakes | Price
𝑥 | 20𝑥 + 10
1 | ₹ ?0 
3| ₹ ?1 
4 | ₹ ?2 
6 | ₹ ?3 
10  | ₹ ?4 
30, 70, 90, 130, 210`
            }
          ]
        }
      ]
    },
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
            text: `𝑥 , -2𝑥
1/3 n , - 1/3 n
~5𝑦2 , ~-7𝑦2
7d , d/7
7q/10 , -1/5 q
1/4 m , m`
          },
          {
            name: 'Unlike Terms',
            text: `𝑥 , -6𝑧
1/2 𝑥 , -3𝑦
~2𝑥2 , 3𝑥
3𝑥 , -3/5 𝑦
b , -1/3 a
2/3 𝑦 , 1/2 𝑧`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'find-coeff',
      label: 'Find the co-efficient',
      data: {
        title: 'Find the co-efficient for the following term',
        // type: 'word-problem',
        firstLineFontSize: '2rem',
        fontSize: '1.2rem',
        fracFontSize: '1.5rem',
        isSentence: true,
        algebra: true,
        list: [
          `3𝑧
Ans = ?0
3`,
          {
            text: `-5t
  Ans = ?0
-5`,
            vars: 'rst'
          },
          {
            text: `3/5 q
  Ans = ?0
3/5`,
            vars: 'pqr'
          },

          {
            text: `7.5m
  Ans = ?0
7.5`,
            vars: 'kmn'
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'stmt-exp',
      label: 'Answer the following question',
      commonData: {
        title: 'Answer the following question',
        // type: 'word-problem',
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        algebra: true
      },
      data: [
        {
          list: [
            `Age of a girl is 𝑥 years. After 3 years, her age will be ____ years.
            Ans = ?0
            𝑥+3`,

            `Vinit's age is 𝑥 years. After 𝑦 years, his age will be _____ years.
            Ans = ?0
            𝑥+𝑦 `,

            `Age of a boy is 𝑦 years. 5 years ago, his age was _____ years.
            Ans = ?0
            𝑦-5 `,

            `Vinay distributed 𝑥 toffees to 𝑦 children on his birthday. Each child got ______ toffees.
            Ans = ?0
            𝑥/𝑦 `,

            `Prity's age is 2 years more than three times the age of Anju. If Anju's age is 𝑥, then what is Prity's age.
            Ans = ?0
            3𝑥+2 `
          ]
        },
        {
          title:
            ' Express the following statements by using fundamental operations:',
          list: [
            `Subtract 5 from the sum of 𝑥 and 𝑦.
Ans = ?0
𝑥+𝑦-5`,
            {
              text: `Add 2 times p to three times q.
Ans = ?0
2p+3q`,
              vars: 'pqr'
            },
            {
              text: `Add three times the product of a and b to half of d.
Ans = ?0 + ?1
3ab, d/2`,
              vars: 'abd'
            },
            {
              text: `Divide the difference of l and m by the difference of p and q.
Ans = {?0}/{?1}
l-m, p-q`,
              vars: 'lmpq'
            }
          ]
        },
        //Example Problems
        {
          title:
            ' Express the following statements by using fundamental operations:',
          list: [
            {
              text: `Add two variables p and q.
Ans = ?0
p+q`,
              vars: 'pqr'
            },
            `Subtract 2 from 𝑧.
Ans = ?0
𝑧-2`,
            `Add 3 to the product of 7 and 𝑧.
Ans = ?0
7𝑧+3`,
            `Multiplying 𝑥 by 3, and subtract 2 from the product
Ans = ?0
3𝑥-2`,
            {
              text: `Divide the difference of p and q by 3.
Ans = {?0}/{?1}
p-q, 3`,
              vars: 'lmpq'
            }
          ]
        }
      ]
    },

    {
      type: 'numberInput',
      id: 'add',
      label: 'Add the terms',
      data: {
        title: 'Add the terms',
        // type: 'word-problem',
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.5rem',
        isSentence: false,
        algebra: true,
        list: [
          {
            text: `1/2 q ,  1/2 q 
Ans = ?0
q`,
            vars: 'pqr'
          },
          `𝑥 , -2𝑦 
Ans = ?0
𝑥-2𝑦`,
          {
            text: `3a ,  -b , -2b 
Ans = ?0
3a-3b`,
            vars: 'abc'
          },
          `7 , 3𝑥 , 2
Ans = ?0
3𝑥+9`,

          // example (page 13)
          `~𝑥 , ~2𝑥 
Ans = ?0
3𝑥`,

          `~5𝑥 , ~-2𝑥 
Ans = ?0
3𝑥`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'sub',
      label: 'Subtract the terms',
      data: {
        title: 'Subtract the second term from the first',
        // type: 'word-problem',
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.5rem',
        isSentence: false,
        algebra: true,
        list: [
          // page 13 (example problems)
          `𝑥 , 2𝑥
Ans = ?0
-𝑥`,

          `5𝑥 , -2𝑥
Ans = ?0
7𝑥`,

          // additional problems

          `7𝑦 , 2𝑦
Ans = ?0
5𝑦`,

          `3𝑥 , -2𝑦
Ans = ?0
3𝑥+2𝑦`,

          `3𝑥 , -11𝑥
Ans = ?0
14𝑥`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiply the terms',
      data: {
        title: 'Multiply the terms',
        // type: 'word-problem',
        fontSize: '1.3rem',
        firstLineFontSize: '2rem',
        fracFontSize: '1.5rem',
        isSentence: false,
        algebra: true,
        list: [
          {
            text: `p , r 
Ans = ?0
pr`,
            vars: 'pqr'
          },
          `𝑦 , -𝑥 
Ans = ?0
-𝑥𝑦`,
          {
            text: `~-a2 ,  a  
Ans = ?0
-a3`,
            vars: 'abc'
          },
          `~-2𝑥2/5 ,  ~-5𝑥/2 
Ans = ?0
𝑥3`,
          // example problems
          `4𝑥 , 3𝑦 
Ans = ?0
12𝑥𝑦`,

          {
            text: `25p , -1/5 p 
Ans = ?0
-5p2`,
            vars: 'pqr'
          },
          {
            text: `-2/3 ~r2 , ~-3r3
Ans = ?0
2r5`,
            vars: 'pqr'
          },
          {
            text: `-2/3 s , -3/2 t
Ans = ?0
st`,
            vars: 'rst'
          }
        ]
      }
    }
  ]
};
