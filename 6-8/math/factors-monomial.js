export default {
  label: 'Factors of Monomial',
  id: 'factors-monomial',
  list: [
    {
      type: 'numberInput',
      id: 'factors-count',
      label: 'Number of Factors',
      commonData: {
        title: 'Find the number of factors in the below monomial',
        fracFontSize: '1.6rem',
        firstLineFontSize: '2rem',
        fontSize: '1.5rem'
        //answerBox: false
      },
      data: [
        {
          list: [
            {
              text: `6
No. of Factors = ?0
2`,

              feedback: `2 × 3`
            },
            {
              text: `9
No. of Factors = ?0
2`,

              feedback: `3 × 3`
            },
            {
              text: `12
No. of Factors = ?0
3`,

              feedback: `2 × 2 × 3`
            },
            {
              text: `15
No. of Factors = ?0
2`,

              feedback: `3 × 5`
            },
            {
              text: `30
No. of Factors = ?0
3`,

              feedback: `2 × 3 × 5`
            }
          ]
        },
        {
          list: [
            {
              text: `~2𝑥 
No. of Factors = ?0
2`,

              feedback: `2 × 𝑥`
            },
            {
              text: `~4𝑥
No. of Factors = ?0
3`,

              feedback: `2 × 2 × 𝑥`
            },
            {
              text: `~4𝑥𝑦
No. of Factors = ?0
4`,

              feedback: `2 × 2 × 𝑥 × 𝑦`
            },
            {
              text: `~-2𝑦2
No. of Factors = ?0
3`,

              feedback: `-2 × 𝑦 × 𝑦`
            },
            {
              text: `~21𝑦2
No. of Factors = ?0
4`,

              feedback: `3 × 7 × 𝑦 × 𝑦`
            }
          ]
        },
        {
          list: [
            {
              text: `~10𝑥2𝑦𝑧 
No. of Factors = ?0
6`,

              feedback: `2 × 5 × 𝑥 × 𝑥 × 𝑦 × 𝑧`
            },
            {
              text: `~-22𝑥𝑦2
No. of Factors = ?0
5`,

              feedback: `2 × 11 × 𝑥 × 𝑦 × 𝑦`
            },
            {
              text: `~-18𝑦3 
No. of Factors = ?0
6`,

              feedback: `-2 × 3 × 3 × 𝑦 × 𝑦 × 𝑦`
            },
            {
              text: `~16𝑦2𝑧
No. of Factors = ?0
7`,

              feedback: `2 × 2 × 2 × 2 × 𝑦 × 𝑦 × 𝑧`
            },
            {
              text: `~42𝑥
No. of Factors = ?0
4`,

              feedback: `2 × 3 × 7 × 𝑥`
            }
          ]
        },
        {
          list: [
            {
              text: `~20𝑥2𝑦2𝑧
No. of Factors = ?0
8`,

              feedback: `2 × 2 × 5 × 𝑥 × 𝑥 × 𝑦 × 𝑦 × 𝑧`
            },
            {
              text: `~4𝑥2𝑦2𝑧2
No. of Factors = ?0
8`,

              feedback: `2 × 2 × 𝑥 × 𝑥 × 𝑦 × 𝑦 × 𝑧 × 𝑧`
            },
            {
              text: `~27𝑥𝑦𝑧
No. of Factors = ?0
6`,

              feedback: `3 × 3 × 3 × 𝑥 × 𝑦 × 𝑧`
            },
            {
              text: `~18𝑥𝑦2
No. of Factors = ?0
6`,

              feedback: `2 × 3 × 3 × 𝑥 × 𝑦 × 𝑦`
            },
            {
              text: `~7𝑥2𝑦2𝑧2
No. of Factors = ?0
7`,

              feedback: `7 × 𝑥 × 𝑥 × 𝑦 × 𝑦 × 𝑧 × 𝑧`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'hcf-lcm',
      label: 'HCF & LCM',
      commonData: {
        title: 'Find the HCF and LCM for the given set of monomials.',
        fracFontSize: '1.6rem',
        firstLineFontSize: '2rem',
        fontSize: '1.2rem',
        algebra: true
        //answerBox: false
      },
      data: [
        {
          list: [
            ` ~2𝑥 , 4
            HCF = ?0
            LCM = ?1
            2, 4𝑥`,

            `~5𝑥𝑦 , ~10𝑥
            HCF = ?0
            LCM = ?1
           5𝑥, 10𝑥𝑦`,

            {
              text: ` ~12𝑎2𝑏 , ~15𝑎𝑏2
            HCF = ?0
            LCM = ?1
            3𝑎𝑏, 60𝑎2𝑏2 `,
              vars: '𝑎𝑏'
            },

            `~10𝑥2 , ~-18𝑥3 , ~14𝑥4
            HCF = ?0
            LCM = ?1
            2𝑥2, 630𝑥4`,

            `~12𝑥 , 36 
            HCF = ?0
            LCM = ?1
            12, 36𝑥`
          ]
        },

        {
          list: [
            `~22𝑦 , ~-33𝑧
            HCF = ?0
            LCM = ?1
            11, 66𝑦𝑧`,

            {
              text: `~14𝑝𝑞 , ~35𝑝𝑞𝑟
          HCF = ?0
          LCM = ?1
          7𝑝𝑞 , 70𝑝𝑞𝑟`,
              vars: '𝑝𝑞𝑟'
            },

            `~7𝑥 , ~-42 
            HCF = ?0
            LCM = ?1
            7, 42𝑥`,

            {
              text: ` ~7𝑎2 , ~14𝑎
            HCF = ?0
            LCM = ?1
            7𝑎, 14𝑎2 `,
              vars: '𝑎𝑏'
            },

            `~-16𝑧 , ~20𝑧3
            HCF = ?0
            LCM = ?1
            4𝑧, 80𝑧3`
          ]
        },

        {
          list: [
            {
              text: `~20𝑙2𝑚 , ~30𝑎𝑙𝑚
          HCF = ?0
          LCM = ?1
          10𝑙𝑚 , 60𝑎𝑙2𝑚`,
              vars: '𝑎𝑙𝑚'
            },

            `~5𝑥2𝑦 , ~15𝑥𝑦2
            HCF = ?0
            LCM = ?1
           5𝑥𝑦, 15𝑥2𝑦2`,

            {
              text: `~10𝑎2 , ~-15𝑏2 , ~20𝑐2
        HCF = ?0
        LCM = ?1
        5 , 60𝑎2𝑏2𝑐2`,
              vars: '𝑎𝑏𝑐'
            },

            {
              text: `~-4𝑎2 , ~4𝑎𝑏 , ~-4𝑐𝑎
        HCF = ?0
        LCM = ?1
        4𝑎 , 4𝑎2𝑏𝑐 |  4𝑐𝑎2𝑏`,
              vars: '𝑎𝑏𝑐'
            },

            ` ~𝑥2𝑦𝑧 , ~𝑥𝑦2𝑧 , ~𝑥𝑦𝑧2
            HCF = ?0
            LCM = ?1
            𝑥𝑦𝑧 , 𝑥2𝑦2𝑧2`
          ]
        },

        {
          list: [
            `~2𝑥 , ~4𝑥 , ~8𝑥
            HCF = ?0
            LCM = ?1
            2𝑥, 8𝑥`,

            `~3𝑥2 , ~6𝑥2 , ~12𝑥2
            HCF = ?0
            LCM = ?1
           3𝑥2, 12𝑥2`,

            `~2𝑥𝑦 , ~3𝑥𝑦 , ~4𝑥𝑦
            HCF = ?0
            LCM = ?1
            𝑥𝑦, 12𝑥𝑦 `,

            `~4𝑦 , ~5𝑦 , ~-4𝑦 
            HCF = ?0
            LCM = ?1
            𝑦, 20𝑦`,

            `~14𝑦2 , ~21𝑦2 , ~-2𝑦2
            HCF = ?0
            LCM = ?1
            𝑦2, 42𝑦2`
          ]
        },

        {
          list: [
            `~8𝑥2𝑦 , ~16𝑥𝑦 , ~24𝑥2𝑦
            HCF = ?0
            LCM = ?1
            8𝑥𝑦, 48𝑥2𝑦`,

            `~-22𝑥𝑦2 , ~5𝑥𝑦2 , ~11𝑥𝑦2
            HCF = ?0
            LCM = ?1
           𝑥𝑦2, 110𝑥𝑦2`,

            `~5𝑥𝑦 , ~5𝑦𝑧 , ~5𝑧𝑥
            HCF = ?0
            LCM = ?1
            5, 5𝑥𝑦𝑧`,

            `~10𝑥2𝑦𝑧 , ~15𝑥𝑦2𝑧 , ~20𝑥𝑦𝑧2 
            HCF = ?0
            LCM = ?1
            5𝑥𝑦𝑧, 60𝑥2𝑦2𝑧2`,

            `~15𝑦2 , ~-6𝑦 , ~-18𝑦3
            HCF = ?0
            LCM = ?1
            3𝑦, 90𝑦3`
          ]
        },

        {
          list: [
            `~21𝑥 , ~42𝑥 , ~14
            HCF = ?0
            LCM = ?1
            7 , 42𝑥`,

            `~20𝑥2𝑦2𝑧 , ~2𝑥𝑦2𝑧2 , ~4𝑥2𝑦2𝑧2
            HCF = ?0
            LCM = ?1
           2𝑥𝑦2𝑧, 20𝑥2𝑦2𝑧2`,

            `~12𝑦2𝑧2 , ~36𝑦2𝑧2 , ~18𝑦2𝑧
            HCF = ?0
            LCM = ?1
            6𝑦2𝑧, 36𝑦2𝑧2`,

            `~27𝑥𝑦𝑧 , ~9𝑥𝑦2𝑧 , ~18𝑥𝑦2
            HCF = ?0
            LCM = ?1
            9𝑥𝑦, 54𝑥𝑦2𝑧`,

            `~4𝑥2𝑦 , ~28𝑥𝑦2 , ~7𝑥2𝑦2𝑧2
            HCF = ?0
            LCM = ?1
            𝑥𝑦, 28𝑥2𝑦2𝑧2`
          ]
        }
      ]
    }
  ]
};
