export default {
  label: 'Exponents and Powers',
  id: 'exponents-powers',
  lockAfter: 100,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Pointers',
        text: [
          `Large numbers can be written in a shorter form using exponents.`,
          {
            type: 'html',
            text: ` Eg: 10000 = 10<sup>4</sup>`
          },
          'Multiplying powers with the same base:',
          {
            type: 'html',
            text: `𝑥<sup>m</sup> × 𝑥<sup>n</sup> = 𝑥<sup>m+n</sup>`
          },
          'Dividing Powers with the same base:',
          {
            type: 'html',
            text: `𝑥<sup>m</sup> ÷ 𝑥<sup>n</sup> = 𝑥<sup>m-n</sup>`
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        fracFontSize: '1rem',
        types: [
          {
            name: 'True',
            text: `1.3 = 1 + 3/10
0.125 = 1/10 + 2/100 + 5/1000
5.05 = 5/100 + 5`
          },
          {
            name: 'False',

            text: `7.05 = 7 + 5/10
            900.9 = 9 + 100 + 9/100`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'base-power',
      label: 'Find the Base & Power',
      data: {
        title: 'Find the base and power of the below number.',
        type: 'word-problem',
        answerBox: false,
        firstLineFontSize: '2.5rem',
        algebra: true,
        vars: ['𝘢', '𝘣', '𝘤'],
        list: [
          `~6^5
base = ?0
power = ?1
6, 5`,

          `~(-3)^7
base = ?0
power = ?1
-3, 7`,

          `~(-1)^4
base = ?0
power = ?1
-1, 4`,

          `~7^<-9>
base = ?0
power = ?1
7, -9`,

          `~(-8)^<-3>
base = ?0
power = ?1
-8, -3`,

          `~(-𝘢)^𝘣
base = ?0
power = ?1
-𝘢, 𝘣`
        ]
      }
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match the Equals',
      commonData: {
        title: 'Match the equal terms',
        fontSize: '1.8rem'
      },
      data: [
        `~2~2, 4
~2~3, 8
~2~1, 2
~2~5, 32
~2~4, 16`,

        `~2~6, 64
~2~10, 1024
~2~7, 128
~2~9, 512
~2~8, 256`,

        `~3~1, 3
~3~2, 9
~3~3, 27
~3~4, 81
~3~5, 243`,

        `~4~1, 4
~4~2, 16
~4~3, 64
~4~4, 256
~4~5, 1024`,

        `~5~1, 5
~5~2, 25
~5~3, 125
~5~4, 625
~5~0, 1`,

        `~10~3, 1000
~10~5, 100000
~10~1, 10
~10~4, 10000
~10~2, 100`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-power',
      label: 'Find the Power',
      commonData: {
        title: 'Find the Power',
        type: 'word-problem',
        answerBox: false,
        isSentence: false,
        fontSize: '2rem',
        inputType: 'small'
      },
      data: [
        `3 × 3 × 3 = ~3?0~ | 3
2 × 2 × 2 × 2 × 2 = ~2?0~ | 5
7 × 7 × 7 × 7  = ~7?0~ | 4
9 × 9 = ~9?0~ | 2
5 × 5 × 5 × 5 × 5 = ~5?0~ | 5`,
        [
          `~4*4*4
= 4 ?0~
3`,

          `~6*6*6*6*6
= 6 ?0~
5`,

          `~9*9*9*9*9*9*9
= 9 ?0~
7`,

          `~𝘢*𝘢*𝘢*𝘢
= 𝘢 ?0~
4`,

          `~𝘣*𝘣*𝘣*𝘣*𝘣*𝘣
= 𝘣 ?0~
6`
        ],

        `𝑥 × 𝑥 × 𝑥 = ~𝑥?0~ | 3
𝑦 × 𝑦 × 𝑦 × 𝑦  = ~𝑦?0~ | 4
𝑥 × 𝑥 = ~𝑥?0~ | 2
a × a × a × a × a = ~a?0~ | 5
𝑦 × 𝑦 × 𝑦 × 𝑦 × 𝑦 = ~𝑦?0~ | 5`
      ]
    },

    {
      type: 'numberInput',
      id: 'power-of-10',
      label: 'Power of 10',
      commonData: {
        title: 'Power of 10',
        type: 'word-problem',
        answerBox: false,
        isSentence: false,
        fontSize: '2rem',
        inputType: 'small'
      },
      data: [
        `3000 = 3 × ~10?0~ | 3
70000 = 7 × ~10?0~ | 4
900 = 9 × ~10?0~ | 2
600000 = 6 × ~10?0~ | 5
5000 = 5 × ~10?0~ | 3`,

        `6500 = 6.5 × ~10?0~ | 3
7200 = 72 × ~10?0~ | 2
10000 = 1 × ~10?0~ | 4
25000 = 2.5 × ~10?0~ | 4
840000 = 8.4 × ~10?0~ | 5`,

        `5500 = ?0 × ~10~3 | 5.5
7200 = ?0 × ~10~4 | 0.72
99 = ?0 × ~10~2 | 0.99
25000 = ?0 × ~10~3 | 25
840000 = ?0 × ~10~5 | 8.4`
      ]
    },
    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiplication',
      commonData: {
        title: 'Multiply',
        type: 'word-problem',
        fontSize: '2rem',
        answerBox: false,
        isSentence: false,
        inputType: 'small'
      },
      data: [
        /*
        0. just multiplying same number many times
        1. Adding two terms
        2. Adding 3 terms and power can be one
        */

        `~7^2*7^5 = 7 ?0~ | 7
        ~3^5*3^5 = 3 ?0~ | 10
        ~2^7*2^6 = 2 ?0~ | 13
        ~5^4*5^5 = 5 ?0~ | 9
        ~8^8*8^9 = 8 ?0~ | 17`,

        `~7^3*7^4*7 = 7 ?0~ | 8
        ~11*11*11^9 = 11 ?0~ | 11
        ~3^3*3^4*3^5 = 3 ?0~ | 12
        ~2^7*2^4*2^2 = 2 ?0~ | 13
        ~5^7*5*5^2 = 5 ?0~ | 10`,

        `~𝑥3*𝑥4=𝑥 ?0~ | 7
~a5*a3=a ?0~ | 8
~n2*n=n ?0~ | 3
~𝑦4*𝑦5=𝑦 ?0~ | 9
~𝑥*𝑥4=𝑥 ?0~ | 5
~𝑦7*𝑦3=𝑦 ?0~ | 10`
      ]
    },
    {
      type: 'numberInput',
      id: 'divide',
      label: 'Division',
      commonData: {
        title: 'Division',
        type: 'word-problem',
        fontSize: '2rem',
        answerBox: false,
        inputType: 'small'
      },
      data: [
        `~5^8÷5^5 = 5 ?0~ | 3
        ~7^7÷7^2 = 7 ?0~ | 5
        ~2^11÷2^3 = 2 ?0~ | 8
        ~9^4÷9 = 9 ?0~ | 3
        ~8^8÷8^2 = 8 ?0~ | 6`,

        `~15^8÷15^15 = 15 ?0~ | -7
        ~7^5÷7^5 = 7 ?0~ | 0
        ~6^20÷6^6 = 6 ?0~ | 14
        ~1÷5^5 = 5 ?0~ | -5
        ~3÷3^9 = 3 ?0~ | -8`,

        `~2^8÷16 = 2 ?0~ | 4
        ~49÷7^7 = 7 ?0~ | -5
        ~27÷3^9 = 6 ?0~ | -6
        ~4^10÷16 = 4 ?0~ | 8
        ~1÷9^7 = 9 ?0~ | -7`,

        `~𝑥5÷𝑥2=𝑥 ?0~ | 3
~a5÷a3=a ?0~ | 2
~n4÷n=n ?0~ | 3
~𝑦7÷𝑦2=𝑦 ?0~ | 5
~𝑥6÷𝑥4=𝑥 ?0~ | 2
~𝑦7÷𝑦3=𝑦 ?0~ | 4`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x-multi-step',
      label: 'Fill in the Blanks',
      commonData: {
        title: 'Fill in the blank with the right exponent.',
        type: 'word-problem',
        inputType: 'small',
        answerBox: false,
        isSentence: false,
        fontSize: '2rem',
        fracFontSize: '1.5rem'
      },
      data: [
        `~7^4*7^3/7 = 7 ?0~ | 6
        ~3^4*3^3/~3^2 = 3 ?0~ | 5
        ~2^8*2^5/~2^2 = 2 ?0~ | 11
        ~5^2*5/~5^3 = 5 ?0~ | 0
        ~8^5*8^6/~8^10 = 8 ?0~ | 1`,

        `~6^4*6^3/~6^2*6 = 6 ?0~ | 4
        ~9^4*9^9/~9^2*9^3 = 9 ?0~ | 8
        ~2^9*2^4/~2^5*2^3 = 2 ?0~ | 5
        ~5^9*5/~5^3*5^3 = 5 ?0~ | 4
        ~6^5*6^6/~6^10*6 = 6 ?0~ | 0`,

        `~𝑥7*𝑥4/~𝑥3*𝑥4 = ~𝑥?0~ | 4
~a7*a3/~a5*a2 = ~a?0~ | 3
~n8*n/~n2*n2 = ~n?0~ | 5
~𝑦4*𝑦5/~𝑦2*𝑦3 = ~𝑦?0~ | 4
~𝑥6*𝑥4/~𝑥*𝑥3 = ~𝑥?0~ | 6`,

        `{~𝑥?0~ × ~𝑥4}/{~𝑥3*𝑥4} = ~𝑥4 | 7
~a7*a?0~/~a5*a2 = ~a3 | 3
{~n8*n}/{~n?0~ × ~n2} = ~n5 | 2
~𝑦4*𝑦5/~𝑦2*𝑦?0~ = ~𝑦4 | 3
~𝑥6*𝑥?0~/~𝑥*𝑥3 = ~𝑥6 | 4`
      ]
    },
    //

    {
      type: 'numberInput',
      id: 'answer',
      label: 'Answer the following ',
      commonData: {
        title: 'Answer the following',
        type: 'word-problem',
        fontSize: '2rem',
        fracFontSize: '1.5rem',
        inputType: 'small'
      },
      data: [
        [
          `~10^3 = ?0 
          1000`,
          `~10^1 = ?0 
          10`,
          `~10^<-2> = ?0 
          0.01`,
          `~10^<-1> = ?0 
          0.1`,
          `~10^<-4> = ?0 
          0.0001`
        ],
        {
          text: `~2^5 = ?0 | 32
          ~4^3 = ?0 | 64
          ~7^2 = ?0 | 49
          ~1^2+2^2+3^2 = ?0 | 14
          ~5^3 = ?0 | 125
          64 = 2 ?0~ | 6`,

          answerBox: false
        },

        [
          `{7 ?0~}/{7} = 49
          3`,

          `{4 ?0~}/{~4^2} = 64
          5`,

          `{11 ?0~}/{11} = 121
          3`,

          ` {2 ?0~}/{~2^3} = 1024
          13`,

          `{3 ?0~}/{~3^3} = 81
          7`
        ],

        [
          `{~5^8 }/{5 ?0~} = 25
          6`,
          `{~3^8 }/{3 ?0~} = 27
          5`,

          `{~5^5 }/{5 ?0~} = 125
          2`,

          `{~2^13 }/{2 ?0~} = 64
          7`,
          `{~8^5 }/{8 ?0~} = 1
          5`
        ],

        [
          `~(-11)^2 × ~(-10)^3 
          = ?0 × ?1
          = ?2
          121, -1000, -121000`,

          `{~(2^5)^2 × ~7^3}/{~8^3 × 7} 
           = {~2 ?0~ × ~7^3}/{~2 ?1~ × 7} 
          = 2 ?2~ × 7 ?3~
          = ?4
            10, 9, 1, 2, 98`
        ]
      ]
    },
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
              qText: 'The exponential form of 10000 is ',
              options: `~10^4, ~10^3, ~10^5, ~10^10`
            },
            {
              qText: 'The exponential form of 125 is _____.',
              options: `~5^3, ~5^4, ~5^5, ~5^2`
            },
            {
              qText: 'The value of ~(-2)^3 is _____.',
              options: `-8, 8, -6, 6`
            },
            {
              qText: 'The value of ~(-2)^4 is _____.',
              options: `16, -16, 8, -8`
            },
            {
              qText: 'What is the base in ~8^2 ?',
              options: `8, 2, 64, 10`
            }
          ]
        },

        {
          questions: [
            {
              qText: 'What is the exponent in ~7^5 ?',
              options: `5, 7, 35, -7`
            },
            {
              qText: 'What is the value of ~(-1)^𝘢 ? Here 𝘢 is an even number.',
              options: `1, -1, 0, a`
            },
            {
              qText: 'What is the value of ~(-1)^𝘢 ? Here 𝘢 is an odd number.',
              options: `-1, 1, 0, a`
            },
            {
              qText: 'If ~2^3*2^4 = ~2^a, then a = ___',
              options: `7, 12, 9, 16`
            },
            {
              qText: '~2^7÷2^3 =',
              options: `~2^4, ~2^21, ~2^10, ~2^<-4>`
            }
          ]
        },
        {
          questions: [
            {
              qText: '100000000000 in standard form is _____',
              options: `~1×10^11, ~10×10^11, ~10×10^10, ~1×10^10`
            },
            {
              qText: '1353000000 in standard form is ______',
              options: `~1.353×10^9, ~1353×10^9, ~1.353×10^6, ~1.353×10^10`
            },

            {
              qText: '~a^m÷b^m = _____',
              options: `~!( a/b ~!)^m, a/b, ~a^m/b, ~a^m*m^b `
            },
            {
              qText: '~(a*b)^m = _____',
              options: `~a^m*b^m, ~a^m*b, ~a*b^m, ~a*b*m`
            },
            {
              qText: '~(-2a)^3 = ____',
              options: `~-8a^3, ~8a^3, ~-6a^3, ~6a^3`
            }
          ]
        },
        {
          questions: [
            {
              qText: '~(2^2*2)^2 = ____',
              options: `~2^6, ~2^4, ~2^5, ~2^2`
            },
            {
              qText: 'Which of the following is true?',
              options: `~2^0 = ~100^0, ~10^2 × ~10^8 = ~10^16, ~2^2*3^3 = 65, ~2^3 > ~3^2`
            },
            {
              qText: '~3^0+4^0+5^0 = ____',
              options: `1, 3, 0, 12`
            },
            {
              qText: '~3^0 = ____',
              options: `3, 1, 0, 9`
            }
          ]
        }
      ]
    }
  ]
};
