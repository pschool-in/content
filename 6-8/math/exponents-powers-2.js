export default {
  label: 'Exponents and Powers',
  id: 'exponents-powers-2',
  lockAfter: 100,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Laws of Exponents',
        text: [
          `# Product of Powers Rule`,
          {
            type: 'html',
            text: `𝑥<sup>m</sup> × 𝑥<sup>n</sup> = 𝑥<sup>m+n</sup>`
          },
          `# Quotient of Powers Rule`,
          {
            type: 'html',
            text: `𝑥<sup>m</sup> ÷ 𝑥<sup>n</sup> = 𝑥<sup>m-n</sup>`
          },
          `# Power of Power Rule`,
          {
            type: 'html',
            text: `(𝑥<sup>m</sup>)<sup>n</sup> = 𝑥<sup>m×n</sup>`
          },
          `# Power of Product Rule`,
          {
            type: 'html',
            text: `(𝑥×𝑦)<sup>m</sup> = 𝑥<sup>m</sup> × 𝑦<sup>m</sup>`
          },
          `# Power of Quotient Rule`,
          {
            type: 'html',
            text: `(𝑥÷𝑦)<sup>m</sup> = 𝑥<sup>m</sup> ÷ 𝑦<sup>m</sup>`
          },
          `# Zero Power Rule`,
          {
            type: 'html',
            text: `𝑥<sup>0</sup> = 1`
          },
          `# Negative Exponent Rule`,
          {
            type: 'html',
            text: `𝑥<sup>-n</sup> = (1/𝑥)<sup>n</sup>`
          }
        ]
      }
    },
    /*
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
          //todo: Add 5

          `~(𝘢+3)^<𝘣+2>
  base = ?0
  power = ?1
  𝘢+3, 𝘣+2`,

          `~(𝘢+3)^<𝘣+2>
  base = ?0
  power = ?1
  𝘢+3, 𝘣+2`
        ]
      }
    },
    */
    {
      type: 'match',
      id: 'match',
      label: 'Match the Equals',
      data: {
        title: 'Match the equal terms',
        fontSize: '1.8rem',
        text: `~a2*a4, ~a6
~a*a*a2, ~a4
~a5*a5, ~a10
~a3*a2, ~a5
~a4*a3, ~a7`
      }
    },
    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiplication',
      commonData: {
        title: 'Multiply',
        fontSize: '2rem',
        answerBox: false,
        isSentence: false
      },
      data: [
        `~3𝑥2*4𝑥4=?0𝑥?1~ | 12, 6 
~2a4*a3=?0a?1~ | 2, 7
~2n2*3n3=?0n?1~ | 6, 5
~7𝑦4*5𝑦5=?0𝑦?1~ | 35, 9
~𝑥*4𝑥4=?0𝑥?1~ | 4, 5
~𝑦7*9𝑦3=?0𝑦?1~ | 9, 10`,

        `~𝑥3𝑦2*𝑥4𝑦2=𝑥?0~𝑦?1~ | 7, 4
~a5b4*a3b=a?0~b?1~ | 8, 5
~m3n2*mn=m?0~n?1~ | 4, 3
~𝑥𝑦4*𝑥𝑦5=𝑥?0~𝑦?1~ | 2, 9
~𝑥𝑦*𝑥4𝑦4=𝑥?0~𝑦?1~ | 5, 5
~𝑥9𝑦7*𝑥𝑦3=𝑥?0~𝑦?1~ | 10, 10`
      ]
    },

    {
      type: 'numberInput',
      id: 'divide',
      label: 'Division',
      commonData: {
        title: 'Division',
        fontSize: '2rem',
        answerBox: false,
        isSentence: false,
        inputType: 'small'
      },
      data: [
        `~12𝑥6÷4𝑥4=?0𝑥?1~ | 3, 2
~2a7÷a3=?0a?1~ | 2, 4
~9n6÷3n3=?0n?1~ | 3, 3
~8𝑦7÷2𝑦5=?0𝑦?1~ | 4, 2
~7𝑥10÷𝑥4=?0𝑥?1~ | 7, 6
~14𝑦7÷2𝑦3=?0𝑦?1~ | 7, 4`,

        `~𝑥3𝑦3÷𝑥𝑦=𝑥?0~𝑦?1~ | 2, 2
~a5b4÷a3b=a?0~b?1~ | 2, 3
~m3n5÷mn=m?0~n?1~ | 2, 4
~𝑥3𝑦7÷𝑥𝑦5=𝑥?0~𝑦?1~ | 2, 2
~𝑥8𝑦7÷𝑥𝑦=𝑥?0~𝑦?1~ | 7, 6
~𝑥9𝑦7÷𝑥𝑦3=𝑥?0~𝑦?1~ | 8, 4`
      ]
    },

    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Simplify',
      data: {
        title: 'Write the following in exponential form',
        firstLineFontSize: '2rem',
        fontSize: '1.2rem',
        type: 'word-problem',
        algebra: true,
        bigKeys: false,
        isSentence: false,
        answerFontSize: '2rem',
        list: [
          `𝑥 × 𝑥 × 𝑥 × 𝑥 × 𝑥 | 𝑥5`,
          {
            text: `5 × 5 × a × a × a | 25a3`,
            vars: 'abc'
          },
          `~2𝑥2+4𝑥2+3𝑥2 | 9𝑥2`,
          `~10𝑥+5𝑥+12𝑥 | 27𝑥`,
          `~4𝑦+2𝑦+6𝑦 | 12𝑦`
        ]
      }
    },
    /*
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Base and Power',
      data: {
        title: 'Write the base and power for each of the following.',
        type: 'word-problem',
        fontSize: '1.5rem',
        isSentence: false,
        fracFontSize: '1.2rem',
        list: [
          [
            {
              type: 'html',
              text: '<div style="font-size: 2.5rem;\n"></div><div class="frac"><div class="num">1</div><div class="den">5</div></div><div><div><span style="font-size: 2.5rem;">)</span><span class="sup" style="top: -1.5rem;">3</span></div></div>'
            },
            `base = ?0/?1
power = ?2
1,5,3`
          ]
        ]
      }
    },*/
    {
      id: 'type-side',
      label: 'true-false',
      type: 'classifySentence',
      commonData: {
        title: 'True or False'
      },
      data: [
        {
          fracFontSize: '1rem',
          types: [
            {
              name: 'True',
              text: `~2^<-5> = ~1/~2^5
~3𝑥+3/3 = ~𝑥+1
~[(-7)^3]^2 = ~(-7)^6`
            },
            {
              name: 'False',

              text: `~𝑥2+𝑦2/𝑥×𝑦 = ~𝑥𝑦
~2^7 = 64`
            }
          ]
        },
        {
          fracFontSize: '1rem',
          types: [
            {
              name: 'True',
              text: `( ~𝑥5 ~)^10 = ~𝑥50
~𝑥3𝑦3/~𝑥3 = ~𝑦3`
            },
            {
              name: 'False',

              text: `~(5^3 ~)^2 = ~5^5
              ~2𝑥+2/2 = ~𝑥+2
~[(-7)^3]^2 = ~-7^6`
            }
          ]
        },
        {
          imageType: 'svg',
          types: [
            {
              name: 'True',
              list: [
                `M 27 16 C 16 30 15 46 26 65 M 38 16 C 49 30 50 46 39 65 M 22 39 L 40 39 M 74 41 L 92 41 
3 | 26 | 16
2 | 81 | 15
= | 56 | 26
2 | 25 | 40
3 | 79 | 41
-1 | 45 | 10 | 0 | 10px`,

                `M 27 16 C 16 30 15 46 26 65 M 38 16 C 49 30 50 46 39 65 M 22 39 L 40 39 M 74 41 L 92 41   
1 | 25 | 16 
1 | 78 | 16
= | 53 | 26
2 | 25 | 41 
2 |78 | 42 
4 | 43 | 9 | 0 | 10px
4 | 86 | 42 | 0 | 10px`,

                `M 27 16 C 16 30 15 46 26 65 M 82 18 C 71 32 70 48 81 67 M 38 16 C 49 30 50 46 39 65 M 97 19 C 108 33 109 49 98 68 M 22 39 L 40 39 M 79 41 L 97 41 
2 | 26 | 16
3 | 85 | 15
× | 54 | 28
= | 123 | 27
1 | 146 | 26
3 | 25 | 40
2 | 83 | 42
3 | 46 | 8 | 0 | 10px
3 | 105 | 10 | 0 | 10px`
              ]
            },
            {
              name: 'False',
              list: [
                `M 27 16 C 16 30 15 46 26 65 M 38 16 C 49 30 50 46 39 65 M 22 39 L 40 39 M 79 41 L 97 41 
1 | 26 | 16
1 | 85 | 15
= | 56 | 26
2 | 25 | 40
16 | 78 | 42
5 | 46 | 8 | 0 | 10px`,

                `M 27 16 C 16 30 15 46 26 65 M 38 16 C 49 30 50 46 39 65 M 22 39 L 40 39 M 74 41 L 92 41   
-1 | 25 | 16 
-1 | 78 | 16
= | 53 | 26
5 | 25 | 41 
5 | 78 | 42 
6 | 43 | 9 | 0 | 10px
6 | 86 | 42 | 0 | 10px`
              ]
            }
          ]
        },

        {
          imageType: 'svg',
          types: [
            {
              name: 'True',
              list: [
                `M 31 14 C 20 28 19 44 30 63 M 51 14 C 62 28 63 44 52 63 M 31 38 L 49 38 M 99 37 L 117 37 
4 | 36 | 14
= | 75 | 24
1 | 104 | 13
2 | 102 | 38
8 | 35 | 39
n | 63 | 9 | 0 | 12px
n | 112 | 32 | 0 | 12px`,

                `M 31 14 C 20 28 19 44 30 63 M 51 14 C 62 28 63 44 52 63 M 31 38 L 49 38 
4 | 36 | 14
= | 75 | 24
2 | 103 | 24
2 | 35 | 39
n | 62 | 9 | 0 | 12px
n | 117 | 16 | 0 | 12px`,

                `M 40 25 C 29 39 28 55 39 74 M 160 26 L 173 26 L 174 80 L 160 80 M 32 22 L 19 22 L 18 76 L 32 76 M 118 27 C 107 41 106 57 117 76 M 62 24 C 73 38 74 54 63 73 M 136 26 C 147 40 148 56 137 75 M 41 47 L 59 47 M 117 48 L 135 48 M 211 49 L 229 49 
1 | 46 | 23
1 | 122 | 26
1 | 217 | 25
= | 183 | 38
× | 86 | 37
2 | 217 | 54
2 | 46 | 48
2 | 122 | 49
2 | 73 | 24 | 0 | 10px
2 | 147 | 24 | 0 | 10px
2 | 178 | 19 | 0 | 10px
8 | 229 | 51 | 0 | 10px`
              ]
            },
            {
              name: 'False',
              list: [
                `M 82 18 C 71 32 70 48 81 67 M 97 19 C 108 33 109 49 98 68 M 79 41 L 97 41 
5 | 31 | 27
1 | 85 | 15
+ | 54 | 28
= | 123 | 27
1 | 146 | 26
5 | 83 | 42
4 | 43 | 20 | 0 | 10px
4 | 105 | 10 | 0 | 10px`,

                `M 31 14 C 20 28 19 44 30 63 M 51 14 C 62 28 63 44 52 63 M 31 38 L 49 38 M 99 37 L 117 37 
2 | 36 | 14
= | 75 | 24
8 | 104 | 13
9 | 102 | 38
3 | 35 | 39
3 | 62 | 9 | 0 | 10px`
              ]
            }
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
              qText: 'The value of  ~2^5 is ____.',
              options: '32, 3, 10, 7'
            },
            {
              qText: 'The Base in the expression ~10^24 is',
              options: `10, 24, 1, 0`
            },
            {
              qText: 'Multiplicative inverse of ~7^<-2> is _____.',
              options: `49, -49, 1, 14`
            },
            {
              qText:
                'Fill in the blank ~a^m*a^n = ~a^__ where m and n are natural numbers',
              options: `m+n, mn, m-n, m/n`
            },
            {
              qText: 'The value of 1/~3^<-2> is equal to ___.',
              options: `9, 1, -6, 1/3`
            }
          ]
        },
        {
          questions: [
            {
              qText: '1 micron is equals to ________.',
              options: `~10^<-6> ^m, 1/10000 ^m, ~10^6 ^m, ~10^<-9> ^m `
            },
            {
              qText:
                'The approximate distance of moon from the earth is 384,467,000 ^m and in exponential form, this distance can be written as ____.',
              options: `~3.84467*10^8 ^m, ~3.84467*10^5 ^m, ~3.84467*10^9 ^m, ~384.467*10^8 ^m`
            },
            {
              qText:
                '~7*10^<-5> ^m is the standard form of which of the following',
              options: `0.00007 ^m,  0.0007 ^m,  0.000007 ^m, 0.0000007 ^m`
            },
            {
              qText: 'The value of ~8^2÷2^3 is given by _____',
              options: `~8, 1/~8, ~-8, ~1/4`
            },
            {
              qText: 'The value of ~2^0*3^0*4^0 is _____',
              options: `1, 3, 9, 24`
            }
          ]
        },
        {
          questions: [
            {
              qText: '64 is the multiplicative inverse of ____.',
              options: `~1/~8^2, ~2^<-8>, ~8^2, ~2^4`
            },
            {
              qText: 'Which one of the following is the value of ~1^15 ?',
              options: `1, 0, 15, -15`
            },
            {
              qText: 'Value of ~(3^0+2^0 ~)*5^0 is ____.',
              options: `2, 0, 1, 25`
            },
            {
              qText: 'The value of ~7^2 is ___.',
              options: `49, 7, 2, 14`
            },
            {
              qText: 'Multiplicative inverse of ~5^<-2> is ____.',
              options: `25, -10, 3, 7`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The value of ~(2^3 ~)^2 is given by ____.',
              options: `64, 32, 12, 16`
            },
            {
              qText: 'Which one of the following is the value of ~3^5 ?',
              options: `243, 24, 15, 81`
            },
            {
              qText:
                '~13x10^<-7> ^Km is the standard form of which of the following',
              options: `0.0000013 ^Km, 0.000000013 ^Km, 0.000000000013 ^Km,  0.00000000013 ^Km`
            },
            {
              qText:
                'The expression ~(5^<-1>+7^<-1>+3^<-1>)^0 is equal to ____.',
              options: `~1, ~15^<-3>, ~-3, ~15^<-1>`
            },
            {
              qText: 'In exponential form, 140,000,000,000 Kg is given by ___',
              options: `~1.4*10^11, ~14*10^11, ~0.14*10^11, ~1.4*10^10`
            }
          ]
        }
      ]
    }
  ]
};
