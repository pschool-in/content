export default {
  label: 'Rational Numbers - 8',
  id: 'rational-numbers-8',
  list: [
    {
      type: 'numberInput',
      id: 'ratio',
      label: 'Intext Questions 7.1',
      commonData: {
        isSentence: true,
        fracFontSize: '1rem',
        title: 'Using appropriate properties find.'
      },
      data: [
        {
          list: [
            `− 2/3 × 3/5 + 5/2 − 3/5 × 1/6
            = ?0/?1 + 5/2 + ?2/?3
            = ?4/?5 + 5/2 + ?6/?7
            = {?8 + ?9 + ?10}/{?11}
            = ?12
            -6, 15, -3, 30, -2, 5, -1, 10, -4, 25, -1, 10, 2`,

            `2/5 × ~!( − 3/7 ~!) − 1/6 × 3/2 + 1/14 × 2/5
            = ?0/?1 − ?2/?3 + ?4/?5
            = ??0/??1 − ?6/?7 + ?8/?9
            = {?10 − ?11 + ?12}/{?13}
            = ?14/??13 = ?15/?16
            -6, 35, 3, 12, 2, 70, 1, 4, 1, 35, -24, 35, 4, 140, -55, -11, 28`,

            `Verify that −(−𝑥) = 𝑥 for
            𝑥 = 11/15
            −𝑥 = ?0/15
            −(−𝑥) = ?1/15
            -11, 11`,

            `Verify that −(−𝑥) = 𝑥 for
            𝑥 = − 13/17
            −𝑥 = ?0/17
            −(−𝑥) = ?1/17
            13, -13`
          ]
        },
        {
          title: 'Write the additive inverse of the following.',
          firstLineFontSize: '2rem',
          fracFontSize: '1.5rem',
          list: [
            `2/8
            Ans = ?0/?1
            -2, 8`,

            `−5/9
            Ans = ?0/?1
            5, 9`,

            `−6/−5
            Ans = ?0/?1
            -6, 5`,

            `2/−9
            Ans = ?0/?1
            2, 9`,

            `19/−6
            Ans = ?0/?1
            19, 6`
          ]
        },
        {
          title: 'Find the multiplicative inverse of the following.',
          firstLineFontSize: '2rem',
          fracFontSize: '1.5rem',
          list: [
            `−13
            Ans = ?0/?1
            -1, 13`,

            `−13/19
            Ans = ?0/?1
            -19, 13`,

            `1/5
            Ans = ?0
            5`,

            `−5/8 × −3/7
            = ?0/?1
            Ans = ?2/?3
            15, 56, 56, 15`,

            `−1 × −2/5
            = ?0/?1
            Ans = ?2/?3
            2, 5, 5, 2`,

            `−1
            Ans = ?0
            -1`
          ]
        },
        {
          list: [
            `Multiply 6/13 by the reciprocal of −7/16
            Reciprocal of −7/16
            = ?0/?1
            Ans = 6/13 × ??0/??1
            = ?2/?3
            -16, 7, -96, 91`,
            `Is 8/9 the multiplicative inverse of −1 1/8 ? Why or why not?
            −1 1/8 = ?0/?1
            Product = 8/9 × ??0/??1
            = ?2
            So 8/9 is #< ?3, the, not the> multiplicative inverse of −1 1/8
             -9, 8, -1, not the`,

            `Is 0.3 the multiplicative inverse of 3 1/3 ? Why or why not?
             0.3 = ?0/?1
             3 1/3 = ?2/?3
             Product = ??0/??1 × ??2/??3
              = ?4
               So 0.3 is #< ?5, the, not the> multiplicative inverse of 3 1/3
             3, 10, 10, 3, 1, the`,

            `Write the rational number that does not have a reciprocal.
             Ans = ?0
             0`,

            `Write the rational numbers that are equal to their reciprocals.
             (Write the smallest number first)
             Ans = ?0 , ?1
             -1, 1`,

            `Write the rational number that is equal to its negative.
             Ans = ?0
             0`
          ]
        }
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
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
              qText: `Name the property under multiplication used in the following.
              −4/5 × 1 = 1 × −4/5 = −4/5`,
              options: `Multiplicative Identity, Multiplicative Inverse, Commutative Property, Associative Property`
            },
            {
              qText: `Name the property under multiplication used in the following.
              −13/17 × −2/7 = −2/7 × −13/17`,
              options: `Commutative Property, Associative Property, Distributive Property`
            },
            {
              qText: `Name the property under multiplication used in the following.
              −19/29 × 29/−19 = 1`,
              options: `Multiplicative Inverse, Multiplicative Identity, Reciprocal Property`
            },
            {
              qText: `Tell what property allows you to compute
              1/3 × ~!( 6 × 4/3  ~!) as 
              ~!( 1/3 × 6  ~!) × 4/3`,
              options: ` Associative Property, Distributive Property, Commutative Property`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Zero has ________ reciprocal.',
              options: `no, one, a few`
            },
            {
              qText: 'The numbers ____ and ___ are their own reciprocals.',
              options: `1 and −1, 0 and 1, 0 and −1`
            },
            {
              qText: 'The reciprocal of –5 is ________.',
              options: `−1/5, 1/5, ~5, ~-5`
            },
            {
              qText: 'Reciprocal of 1/𝑥, where 𝑥 ≠ 0 is _____.',
              options: `~𝑥, ~–𝑥, –1/𝑥, ~1`
            },
            {
              qText: 'The product of two rational numbers is always _____.',
              options: `a rational number, an integer, a whole number`
            },
            {
              qText: 'The reciprocal of a positive rational number is ____.',
              options: `positive, negative, positive or negative`
            }
          ]
        }
      ]
    },
    {
      id: 'midpoint',
      label: 'Find the Mid Point',
      type: 'dragAndDrop',
      commonData: {
        height: 350,
        title:
          'Write the mid points in the number lines. (Write the fraction in the simplest form.)',
        noOptions: true,
        mathKeypad: true,
        width: 320,
        textStyle: {
          width: 40
        },
        wordWidth: 40,
        wordHeight: 22,
        svg: {
          paths: [
            'M 0 30 L 450 30 M 50 35 V 25 M 150 35 V 25 M 250 35 V 25',

            'M 0 140 L 450 140 M 50 145 V 135 M 150 145 V 135 M 250 145 V 135',

            'M 0 250 L 450 250 M 50 255 V 245 M 150 255 V 245 M 250 255 V 245',

            'M 40 56 h 20 M 130 58 h 40 M 240 56 h 20 ',

            'M 40 166 h 20 M 130 168 h 40 M 240 166 h 20 ',

            'M 40 276 h 20 M 130 278 h 40 M 240 276 h 20 '
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
            { str: '8', x: 30, y: 55 },
            { str: '9', x: 230, y: 35 },
            { str: '8', x: 230, y: 55 },

            { str: '6', x: 30, y: 145 },
            { str: '7', x: 30, y: 165 },
            { str: '16', x: 230, y: 145 },
            { str: '7', x: 230, y: 165 },

            { str: '4', x: 30, y: 255 },
            { str: '11', x: 30, y: 275 },
            { str: '10', x: 230, y: 255 },
            { str: '11', x: 230, y: 275 }
          ],
          words: [
            { word: '7', x: 130, y: 35 },
            { word: '8', x: 130, y: 60 },
            { word: '11', x: 130, y: 145 },
            { word: '7', x: 130, y: 170 },
            { word: '7', x: 130, y: 255 },
            { word: '11', x: 130, y: 280 }
          ]
        },
        {
          texts: [
            { str: '1', x: 30, y: 35 },
            { str: '4', x: 30, y: 55 },
            { str: '1', x: 230, y: 35 },
            { str: '2', x: 230, y: 55 },

            { str: '-2', x: 30, y: 145 },
            { str: '5', x: 30, y: 165 },
            { str: '1', x: 230, y: 145 },
            { str: '5', x: 230, y: 165 },

            { str: '-3', x: 30, y: 255 },
            { str: '4', x: 30, y: 275 },
            { str: '-1', x: 230, y: 255 },
            { str: '4', x: 230, y: 275 }
          ],
          words: [
            { word: '3', x: 130, y: 35 },
            { word: '8', x: 130, y: 60 },
            { word: '-1', x: 130, y: 145 },
            { word: '10', x: 130, y: 170 },
            { word: '-1', x: 130, y: 255 },
            { word: '2', x: 130, y: 280 }
          ]
        },
        {
          texts: [
            { str: '1', x: 30, y: 35 },
            { str: '6', x: 30, y: 55 },
            { str: '1', x: 230, y: 35 },
            { str: '3', x: 230, y: 55 },

            { str: '11', x: 30, y: 145 },
            { str: '3', x: 30, y: 165 },
            { str: '17', x: 230, y: 145 },
            { str: '3', x: 230, y: 165 },

            { str: '-1', x: 30, y: 255 },
            { str: '2', x: 30, y: 275 },
            { str: '-1', x: 230, y: 255 },
            { str: '10', x: 230, y: 275 }
          ],
          words: [
            { word: '1', x: 130, y: 35 },
            { word: '4', x: 130, y: 60 },
            { word: '14', x: 130, y: 145 },
            { word: '3', x: 130, y: 170 },
            { word: '-3', x: 130, y: 255 },
            { word: '10', x: 130, y: 280 }
          ]
        }
      ]
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Find the right option.',
        fontSize: '1.2rem',
        fracFontSize: '1rem'
      },
      data: [
        {
          questions: [
            {
              qText: 'What should be added to −5/4 to get −1?',
              options: `~1/4, ~-1/4, ~1, ~-3/4`
            },
            {
              qText: 'What should be subtracted from −5/4 to get −1?',
              options: ` ~-1/4, ~1/4, ~1, ~-3/4`
            },
            {
              qText: 'Which of the following is the additive identity element?',
              options: `0, 1, −1, 11`
            },
            {
              qText:
                'Which of the following is the multiplicative identity for rational numbers?',
              options: `1, −1, 0, 10`
            },
            {
              qText: 'Which of the following lies between 0 and −1?',
              options: `~-2/3, ~-3, ~0, ~4/3`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which of the following is the product of 7/8 and −4/21 ?',
              options: `~-1/6, ~1/12, ~-16/63, ~-147/16 `
            },
            {
              qText: 'Which of the following is the product of 2/4 and −1/2 ?',
              options: `~-1/4, ~2/8, ~-2/4, ~-1/2 `
            },
            {
              qText:
                'Which of the following is the reciprocal of the reciprocal of a rational number?',
              options: `The number itself, −1, 1, 0`
            },
            {
              qText:
                'Write the rational number that is equal to its reciprocal.',
              options: `*~1
              *~-1
              ~1/2
               ~0`
            },
            {
              qText: 'Sum of two rational numbers is a _______.',
              options: `rational number, negative number, irrational number, positive number`
            }
          ]
        },
        {
          questions: [
            {
              qText: `For any three rational numbers a, b and c, 
                  a + (b + c) = ___.`,
              options: `(a + b) + c, (a + b) − c,  (a − b) − c, (a − b) + c`
            },
            {
              qText: `Name the property under multiplication used in
              −1/5 × 1 = 1 × −1/5 = −1/5`,
              options: `Multiplicative identity, Associative property, Commutative property, Distributive property `
            },
            {
              qText: 'What is the multiplicative inverse of 1/4 ?',
              options: `4, 1, −1, −4`
            },
            {
              qText: '1/4 × 1 = __',
              options: `1/4, 2/4, 1/2, ~4`
            },
            {
              qText: 'What is the multiplicative inverse of −13 ?',
              options: `−1/13, ~13, ~ −13, ~12 `
            }
          ]
        }
      ]
    }
  ]
};
