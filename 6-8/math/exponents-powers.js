export default {
  label: 'Exponents and Powers',
  id: 'exponents-powers',
  list: [
    {
      type: 'match',
      id: 'match',
      label: 'Match the Equals',
      commonData: {
        title: 'Match the equal terms',
        fontSize: '1.8rem'
      },
      data: [
        `~a2*a4, ~a6
~a*a*a2, ~a4
~a5*a5, ~a10
~a3*a2, ~a5
~a4*a3, ~a7`,

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

        `2 × 4 × 8 = 2 ?0~ | 6
4 × 4 × 4 × 4 = 2 ?0~ | 8
9 × 9 × 9 = 3 ?0~ | 6
8 × 8 × 8 = 2 ?0~ | 9
3 × 9 × 27 = 3 ?0~ | 6`,

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
        `~𝑥3*𝑥4=𝑥?0~ | 7
~a5*a3=a?0~ | 8
~n2*n=n?0~ | 3
~𝑦4*𝑦5=𝑦?0~ | 9
~𝑥*𝑥4=𝑥?0~ | 5
~𝑦7*𝑦3=𝑦?0~ | 10`,

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
        type: 'word-problem',
        fontSize: '2rem',
        answerBox: false,
        inputType: 'small'
      },
      data: [
        `~𝑥5÷𝑥2=𝑥?0~ | 3
~a5÷a3=a?0~ | 2
~n4÷n=n?0~ | 3
~𝑦7÷𝑦2=𝑦?0~ | 5
~𝑥6÷𝑥4=𝑥?0~ | 2
~𝑦7÷𝑦3=𝑦?0~ | 4`,

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
      id: 'find-x-multi-step',
      label: 'Fill in the Blanks',
      commonData: {
        title: 'Fill in the blank with the right exponent.',
        type: 'word-problem',
        inputType: 'small',
        answerBox: false,
        isSentence: false,
        fontSize: '1.5rem'
      },
      data: [
        `~𝑥7*𝑥4/~𝑥3*𝑥4 = ~𝑥?0~ | 4
~a7*a3/~a5*a2 = ~a?0~ | 3
~n8*n/~n2*n2 = ~n?0~ | 5
~𝑦4*𝑦5/~𝑦2*𝑦3 = ~𝑦?0~ | 4
~𝑥6*𝑥4/~𝑥*𝑥3 = ~𝑥?0~ | 6`,

        `~𝑥?0~*𝑥4/~𝑥3*𝑥4 = ~𝑥4 | 7
~a7*a?0~/~a5*a2 = ~a3 | 3
~n8*n/~n?0~*n2 = ~n5 | 2
~𝑦4*𝑦5/~𝑦2*𝑦?0~ = ~𝑦4 | 3
~𝑥6*𝑥?0~/~𝑥*𝑥3 = ~𝑥6 | 4`
      ]
    }
  ]
};
