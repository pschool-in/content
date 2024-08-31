export default {
  label: 'Testing Templates',
  id: 'numberInput',
  list: [
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Simplify ',
      data: {
        title: 'Answer the following',
        type: 'word-problem',
        fontSize: '2rem',
        fracFontSize: '1.5rem',
        inputType: 'small',
        list: [
          `{11 ?0~}/{11} = 121
                3`,

          `{2 ?0~}/{~2^3} = 1024
                13`,

          `{3 ?0~}/{~3^3} = 81
                7`,

          `{~5^5 }/{5 ?0~} = 125
                2`,

          `{~2^13 }/{2 ?0~} = 64
                7`,

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
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Testing calculator',
      data: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following',
        list: [
          `Add: 45+123+7.34
          = ?0 ##<add, 45, 123, 7.34>
          Sub: 100-11
          = ?1 ##<sub, 100, 11>
          
          Sub: 90-0.09
          = ?2 ##<sub, 90, 0.09>
          175.34, 89, 89.91`,

          `{x + y}/{z}
          = ?0
          10`,

          `4500 divided by 5
          = ?0 ##<div, 4500, 5>
          25 multiplied by 5
          = ?1 ##<mul, 25, 5>
          HCF of 24, 72 and 36
          = ?2 ##<hcf, 24, 72, 36>
          LCM of 12, 15, 5, 6
          =  ?3 ##<lcm, 12, 15, 5, 6>
          Square Root of 1522756
          = ?4 ##<sqrt, 1522756>
          900, 125, 12, 60, 1234`,

          `LCM of 300, 400, 800 
= ?0 ##<lcm, 300, 400, 800>

HCF of 300, 400, 800 
= ?1 ##<hcf, 300, 400, 800>
2400, 100`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Testing table',
      data: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following',
        list: [
          {
            //A table can have paragraphs in the middle.
            widths: '160, 160',
            text: ` Some more text goes here. More instruction buddy.
      Input | Output
𝑥 | 𝑥 + 5
10 | ?0
25 | ?1
45 | ?2
If I come in the middle, do I still work
20 | ?3
55 | ?4
15 | ?5
And also what should happen if I come in the end
15, 30, 50, 25, 60, 20`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Testing calculator, and dropdown',
      data: {
        isSentence: true,
        fontSize: '1rem',
        fracFontSize: '1rem',
        title: 'Answer the following',
        list: [
          /*
`before {num + ?0}/{deno + minator} after 
= ?1
5, 10`,
*/

          `CP = 100
SP = 120
Profit = ?0
The user gets #< ?1, Profit, Loss>
20, Profit`
        ]
      }
    }
  ]
};
