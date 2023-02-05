export default {
  label: 'Algebraic Expression',
  id: 'algebraic-expression-2',
  list: [
    {
      type: 'algebraicInput',
      id: 'simplify',
      label: 'Simplify Algebraic Expressions',
      commonData: {
        title: 'Simplify Algebraic Expressions',
        fontSize: '2rem'
      },
      data: [
        `4𝑦+11𝑦+2𝑦 | 17𝑦
3𝑥+7𝑥+2𝑥 | 12𝑥
2𝑥2+4𝑥2+3𝑥2 | 9𝑥2
10𝑥+5𝑥+12𝑥 | 27𝑥
4𝑦+2𝑦+6𝑦 | 12𝑦`,

        `4𝑦2+12𝑦2+4𝑦2 | 20𝑦2
2𝑦+6𝑦+10𝑦 | 18𝑦
6𝑥+3𝑥+10𝑥 | 19𝑥
5𝑥-𝑥-𝑥 | 3𝑥
15𝑥-10𝑥-5𝑥 | 0`,

        `12𝑥-6𝑥+4𝑥 | 10𝑥
14𝑥-5𝑥-4𝑥 | 5𝑥
5𝑦+4𝑦-3𝑦 | 6𝑦
𝑦-10𝑦+2𝑦 | -7𝑦
3𝑥-2𝑥-2𝑥 | -𝑥`,

        `7𝑥2-5𝑥2-4𝑥2 | -2𝑥2
10𝑦2-8𝑦2-5𝑦2 | -3𝑦2
5𝑥-4𝑥-4𝑥 | -3𝑥
-2𝑥-3𝑥-4𝑥 | -9𝑥
-3𝑦2-4𝑦2-2𝑦2 | -9𝑦2`,

        `𝑥+𝑥+10+5 | 2𝑥+15
𝑦2+𝑦2+10+2 | 2𝑦2+12
𝑥2+4𝑥2+1+4 | 5𝑥2+5
4𝑦+5𝑦+2+12 | 9𝑦+14
6𝑦2+𝑦2+5+15 | 7𝑦2+20`,

        `𝑥+𝑥+12-3 | 2𝑥+9
12𝑥+3𝑥+9-5 | 15𝑥+4
7𝑦+3𝑦+7-3 | 10𝑦+4
5𝑦2+6𝑦2+16-6 | 11𝑦2+10
4𝑦2+6𝑦2+9-2 | 10𝑦2+7`,

        `𝑥+4𝑥-10-20 |5𝑥-30
7𝑦+2𝑦-7-2 | 9𝑦-9
3𝑥2+13𝑥2-13-12 | 16𝑥2-25
4𝑦2+8𝑦2-6-6 | 12𝑦2-12
7𝑦+8𝑦-5-6 | 15𝑦-11`,

        `𝑥2+𝑥2+𝑥2 | 3𝑥2
𝑥2+𝑥2+𝑥 | 2𝑥2+𝑥
2𝑥+3𝑥+7𝑥 | 12𝑥
7𝑦+𝑦+𝑦 | 9𝑦
3𝑥+𝑦+𝑥 | 4𝑥+𝑦`,

        `3𝑥2+2𝑥2+5𝑥2 | 10𝑥2
4𝑥2+9𝑥2+4𝑥 | 13𝑥2+4𝑥
5𝑥+3𝑥+7𝑥 | 15𝑥
7𝑦+5𝑦+2𝑦 | 14𝑦
3𝑥+3𝑦+3𝑥 | 6𝑥+3𝑦`,

        `4𝑥2+2𝑥2+2+4 | 6𝑥2+6
9𝑥2+𝑥2+7+10 | 10𝑥2+17
3𝑥2+10𝑥2+𝑥2+11+9 | 14𝑥2+20
7𝑦2+4𝑦2+11+4 | 11𝑦2+15
3𝑦2+4𝑦2+5𝑦2 | 12𝑦2`,

        `4𝑦2+10-2𝑦2-5 | 2𝑦2+5
5𝑦2-𝑦2+5-1 | 4𝑦2+4
20𝑦2-10𝑦2+20-10 | 10𝑦2+10
2𝑦2-𝑦2-10-10 | 𝑦2-20
3𝑦2+2𝑦2-3-2 | 5𝑦2-5`,

        `4𝑥+5𝑥-3𝑦-2𝑦 | 9𝑥-5𝑦
5𝑥2+3𝑥2+5𝑦2-3𝑦2 | 8𝑥2+2𝑦2
4𝑥2+5𝑥2-2𝑦2-5𝑦2 |9𝑥2-7𝑦2
3𝑥2+𝑥2-𝑦2-𝑦2 | 4𝑥2-2𝑦2
7𝑥2+4𝑥2-7𝑦2+4𝑦2 | 11𝑥2-3𝑦2 `
      ]
    },
    {
      type: 'algebraicInput',
      id: 'add',
      label: 'Add the Algebraic Expressions',
      commonData: {
        title: 'Add the Algebraic Expressions',
        fontSize: '2rem'
      },
      data: [
        {
          list: [
            `~2𝑥+3
~3𝑥+5
−−−−−−
5𝑥+8`,

            `~7𝑥+5
~𝑥+1
−−−−−−
8𝑥+6`,

            `~10𝑥+3
~2𝑥+31
−−−−−−
12𝑥+34`,

            `~5𝑥+8
~4𝑥+3
−−−−−−
9𝑥+11`,

            `~4𝑥+3
~2𝑥+8
−−−−−−
6𝑥+11`
          ]
        },

        {
          list: [
            `~3𝑥-3
~7𝑥-9
−−−−−−
10𝑥-12`,

            `~6𝑥-6
~𝑥-1
−−−−−−
7𝑥-7`,

            `~10𝑥-3
~2𝑥-9
−−−−−−
12𝑥-12`,

            `~7𝑥+8
~3𝑥-3
−−−−−−
10𝑥+5`,

            `~8𝑥+13
~3𝑥-3
−−−−−−
11𝑥+10`
          ]
        },
        {
          list: [
            `~𝑥2+2𝑥-3
~𝑥2+7𝑥-5
−−−−−−−−−
2𝑥2+9𝑥-8`,

            `~3𝑥2+7𝑥+3
~𝑥2+2𝑥+3
−−−−−−−−−
4𝑥2+9𝑥+6`,

            `~7𝑥2-9𝑥+8
~3𝑥2+7𝑥-7
−−−−−−−−−
10𝑥2-2𝑥+1`,

            `~4𝑥2+5𝑥-9
~2𝑥2+2𝑥-5
−−−−−−−−−
6𝑥2+7𝑥-14`,

            `~𝑥2-2𝑥-3
~8𝑥2-7𝑥-5
−−−−−−−−−
9𝑥2-9𝑥-8`
          ]
        },
        {
          list: [
            `~4𝑥+3
~2𝑥+3
~3𝑥+5
−−−−−−
9𝑥+11`,

            `~3𝑥+3
~7𝑥+5
~𝑥+1
−−−−−−
11𝑥+9`,

            `~4𝑥+8
~10𝑥+3
~2𝑥+31
−−−−−−
16𝑥+42`,

            `~5𝑥+8
~𝑥+1
~4𝑥+3
−−−−−−
10𝑥+12`,

            `~4𝑥+3
~2𝑥+8
~2𝑥+8   
−−−−−−
8𝑥+19`
          ]
        },
        {
          list: [
            `~𝑥+𝑦+2
~2𝑥+3𝑦+7
−−−−−−
3𝑥+4𝑦+9`,

            `~7𝑥+2𝑦+4
~2𝑥+4𝑦+5
−−−−−−
9𝑥+6𝑦+9`,

            `~3𝑥+6𝑦+5
~6𝑥+3𝑦+4
−−−−−−
9𝑥+9𝑦+9`,

            `~7𝑥+4𝑦+15
~8𝑥+3𝑦+5
−−−−−−
15𝑥+7𝑦+20`,

            `~6𝑥+2𝑦+7
~5𝑥+9𝑦+9
−−−−−−
11𝑥+11𝑦+16`
          ]
        },
        {
          list: [
            `~𝑥-3𝑦-5
~3𝑥-5𝑦-7
−−−−−−
4𝑥-8𝑦-12`,

            `~2𝑥-5𝑦+15
~7𝑥+5𝑦-17
−−−−−−
9𝑥-2`,

            `~5𝑥+5𝑦-9
~2𝑥-3𝑦+9
−−−−−−
7𝑥+2𝑦`,

            `~4𝑥-5𝑦+6
~3𝑥+8𝑦-11
−−−−−−
7𝑥+3𝑦-5`,

            `~9𝑥-7𝑦-7
~4𝑥+7𝑦-7
−−−−−−
13𝑥-14`
          ]
        },
        {
          list: [
            `~𝑥+𝑦+1
~2𝑥+4𝑦+5
~4𝑥+5𝑦+3
−−−−−−
7𝑥+10𝑦+9`,

            `~2𝑥+3𝑦+4
~3𝑥+2𝑦+7
~5𝑥+4𝑦+3
−−−−−−
10𝑥+9𝑦+14`,

            `~6𝑥-2𝑦+7
~5𝑥+4𝑦+6
~2𝑥+3𝑦-3
−−−−−−
13𝑥+5𝑦+10`,

            `~3𝑥-2𝑦+5
~4𝑥-6𝑦-6
~𝑥+3𝑦-3
−−−−−−
8𝑥-5𝑦-4`,

            `~9𝑥-4𝑦+7
~2𝑥+2𝑦+3
~3𝑥+3𝑦+2
−−−−−−
14𝑥+𝑦+12`
          ]
        },
        {
          list: [
            `~𝑥-𝑦-1
~3𝑥-3𝑦+5
~6𝑥+4𝑦-3
−−−−−−
10𝑥+1`,

            `~2𝑥-3𝑦+4
~3𝑥+2𝑦-7
~5𝑥-4𝑦+3
−−−−−−
10𝑥-5𝑦`,

            `~3𝑥-2𝑦+10
~5𝑥+4𝑦-7
~2𝑥-3𝑦-3
−−−−−−
10𝑥-𝑦`,

            `~3𝑥-3𝑦+4
~8𝑥-4𝑦-3
~𝑥+7𝑦-1
−−−−−−
12𝑥`,

            `~5𝑥-6𝑦-7
~𝑥+2𝑦+7
~3𝑥+4𝑦+12
−−−−−−
9𝑥+12`
          ]
        },
        {
          list: [
            `~𝑥2+2𝑥+3
~4𝑥2+7𝑥+3
~𝑥2+7𝑥+5
−−−−−−−−−
6𝑥2+16𝑥+11`,

            `~3𝑥2+7𝑥+3
~2𝑥2+3𝑥+4
~3𝑥2+2𝑥+3
−−−−−−−−−
8𝑥2+12𝑥+10`,

            `~2𝑥2+3𝑥+4
~7𝑥2+2𝑥+4
~3𝑥2+7𝑥+4
−−−−−−−−−
12𝑥2+12𝑥+12`,

            `~3𝑥2+4𝑥+1
~4𝑥2+5𝑥+9
~2𝑥2+2𝑥+2
−−−−−−−−−
9𝑥2+11𝑥+12`,

            `~2𝑥2-3𝑥-4
~𝑥2-2𝑥-3
~8𝑥2-7𝑥-5
−−−−−−−−−
11𝑥2-12𝑥-12`
          ]
        },

        {
          list: [
            `~𝑦2-2𝑦+3
~𝑦2+7𝑦-6
~𝑦2-3𝑦+5
−−−−−−−−−
3𝑦2+2𝑦+2`,

            `~𝑦2-5𝑦-3
~2𝑦2+4𝑦-4
~2𝑦2-2𝑦+5
−−−−−−−−−
5𝑦2-3𝑦-2`,

            `~2𝑦2-3𝑦+9
~7𝑦2+2𝑦-4
~3𝑦2+7𝑦-3
−−−−−−−−−
12𝑦2+6𝑦+2`,

            `~3𝑦2-2𝑦+1
~4𝑦2-3𝑦+5
~2𝑦2+4𝑦+2
−−−−−−−−−
9𝑦2-𝑦+8`,

            `~2𝑦2-3𝑦-4
~𝑦2+2𝑦-3
~5𝑦2-4𝑦+5
−−−−−−−−−
8𝑦2-5𝑦-2`
          ]
        }
      ]
    },
    {
      type: 'algebraicInput',
      id: 'subtract',
      label: 'Subtraction',
      commonData: {
        title: 'Subtract the second from the first.',
        fontSize: '2rem'
      },
      data: [
        {
          list: [
            `~5𝑥+8
  ~3𝑥+5
  −−−−−−
 2𝑥+3`,

            `~7𝑥+5
  ~𝑥+1
  −−−−−−
 6𝑥+4`,

            `~10𝑥+31
  ~2𝑥+11
  −−−−−−
8𝑥+20`,

            `~5𝑥+8
  ~3𝑥+3
  −−−−−−
2𝑥+5`,

            `~4𝑥+13
  ~2𝑥+8
  −−−−−−
2𝑥+5`
          ]
        },

        {
          list: [
            `~13𝑥-3
  ~7𝑥-9
  −−−−−−
6𝑥+6`,

            `~6𝑥-6
  ~𝑥-1
  −−−−−−
5𝑥-5`,

            `~10𝑥-3
  ~2𝑥-7
  −−−−−−
8𝑥+4`,

            `~7𝑥+8
  ~3𝑥-3
  −−−−−−
 4𝑥+11`,

            `~8𝑥+13
  ~3𝑥-3
  −−−−−−
  5𝑥+16`
          ]
        },
        {
          list: [
            `~9𝑥2+9𝑥+9
        ~𝑥2+7𝑥+5
        −−−−−−−−−
        8𝑥2+2𝑥+4`,

            `~5𝑥2+7𝑥+3
        ~𝑥2+2𝑥+1
        −−−−−−−−−
        4𝑥2+5𝑥+2`,

            `~7𝑥2+9𝑥+8
        ~𝑥2+2𝑥+7
        −−−−−−−−−
       6𝑥2+7𝑥+1`,

            `~3𝑥2+5𝑥+9
        ~2𝑥2+2𝑥+5
        −−−−−−−−−
        𝑥2+3𝑥+4`,

            `~11𝑥2+12𝑥+6
        ~8𝑥2+7𝑥+5
        −−−−−−−−−
        3𝑥2+5𝑥+1`
          ]
        },
        {
          list: [
            `~3𝑥2+2𝑥-3
  ~𝑥2+7𝑥-5
  −−−−−−−−−
  2𝑥2-5𝑥+2`,

            `~3𝑥2-7𝑥+3
  ~𝑥2+2𝑥+1
  −−−−−−−−−
 2𝑥2-9𝑥+2`,

            `~7𝑥2-9𝑥+8
  ~3𝑥2+7𝑥-7
  −−−−−−−−−
4𝑥2-16𝑥+15`,

            `~4𝑥2+5𝑥-9
  ~2𝑥2+2𝑥-5
  −−−−−−−−−
2𝑥2+3𝑥-4`,

            `~11𝑥2-2𝑥-3
  ~8𝑥2-7𝑥-5
  −−−−−−−−−
3𝑥2+5𝑥+2`
          ]
        },
        {
          list: [
            `~6𝑥2+2𝑥-6
        ~𝑥2+2𝑥-5
        −−−−−−−−−
        5𝑥2-1`,

            `~2𝑥2+7𝑥+13
        ~2𝑥2+5𝑥+1
        −−−−−−−−−
      2𝑥+12`,

            `~9𝑥2-9𝑥+6
        ~3𝑥2-9𝑥-6
        −−−−−−−−−
      6𝑥2+12`,

            `~9𝑥2+7𝑥-9
        ~6𝑥2+2𝑥-9
        −−−−−−−−−
      3𝑥2+5𝑥`,

            `~9𝑥2-2𝑥-7
        ~8𝑥2-5𝑥-5
        −−−−−−−−−
      𝑥2+3𝑥-2`
          ]
        },
        {
          list: [
            `~5𝑥+3𝑦+2
      ~2𝑥+3𝑦+7
      −−−−−−
      3𝑥-5`,

            `~7𝑥+2𝑦+4
      ~2𝑥+4𝑦+5
      −−−−−−
      5𝑥-2𝑦-1`,

            `~7𝑥+6𝑦+5
      ~6𝑥+3𝑦+4
      −−−−−−
      𝑥+3𝑦+1`,

            `~17𝑥+4𝑦+15
      ~8𝑥+3𝑦+5
      −−−−−−
      9𝑥+𝑦+10`,

            `~6𝑥+2𝑦+7
      ~5𝑥+9𝑦+9
      −−−−−−
      𝑥-7𝑦-2`
          ]
        },
        {
          list: [
            `~5𝑥-3𝑦-5
      ~3𝑥-5𝑦-7
      −−−−−−
      2𝑥+2𝑦+2`,

            `~12𝑥-5𝑦+15
      ~7𝑥+5𝑦-7
      −−−−−−
      5𝑥-10𝑦+22`,

            `~5𝑥+5𝑦-9
      ~2𝑥-3𝑦-9
      −−−−−−
      3𝑥+8𝑦`,

            `~4𝑥-5𝑦+6
      ~3𝑥+8𝑦-11
      −−−−−−
      𝑥-13𝑦+17`,

            `~7𝑥-7𝑦-7
      ~4𝑥+7𝑦-7
      −−−−−−
      3𝑥-14𝑦`
          ]
        }
      ]
    },
    {
      type: 'algebraicInput',
      id: 'multiply',
      label: 'Multiply',
      commonData: {
        title: 'Multiply',
        fontSize: '2rem'
      },
      data: [
        `2⋅3𝑥 | 6𝑥
3⋅4𝑦 | 12𝑦
6⋅11𝑦 | 66𝑦
7⋅7𝑥 | 49𝑥
10⋅12𝑦 | 120𝑦`,

        `3⋅4𝑥2 | 12𝑥2
4⋅2𝑦2 | 8𝑦2
2⋅8𝑥2 | 16𝑥2
7⋅11𝑥2 | 77𝑥2
5⋅5𝑦2 | 25𝑦2`,

        `2𝑥⋅4𝑥 | 8𝑥2
4𝑥⋅6𝑥 | 24𝑥2
12𝑥⋅2𝑥 | 24𝑥2
5𝑥⋅6𝑥 | 30𝑥2
3𝑥⋅7𝑥 | 21𝑥2`,

        `2𝑥⋅3𝑦 | 6𝑥𝑦
10𝑥⋅5𝑦 | 50𝑥𝑦
4𝑦⋅2𝑥 | 8𝑥𝑦
3𝑦⋅7𝑥 | 21𝑥𝑦
9𝑦⋅6𝑥 | 54𝑥𝑦`,

        `3𝑥⋅4𝑥2 | 12𝑥3
5𝑦⋅3𝑦2 | 15𝑦3
4𝑦⋅4𝑦2 | 16𝑦3
7𝑥⋅4𝑥2 | 28𝑥3
11𝑥⋅3𝑥2 | 33𝑥3`,

        `4(𝑥+3) | 4𝑥+12
7(2𝑥+7) | 14𝑥+49
3(6𝑥+5) | 18𝑥+15
2(20𝑦+10) | 40𝑦+20
5(9𝑦+12) | 45𝑦+60`,

        `3(𝑦-5) | 3𝑦-15
6(2𝑥-5) | 12𝑥-30
8(6𝑥-4) | 48𝑥-32
11(4𝑦-9) | 44𝑦-99
9(9𝑥-8) | 81𝑥-72`,

        `4(2𝑥2+3𝑥+4) | 8𝑥2+12𝑥+16
5(3𝑥+2𝑦+4) | 15𝑥+10𝑦+20
7(4𝑦2+𝑦+2) | 28𝑦2+7𝑦+14
3(7𝑦2+4𝑦+9) | 21𝑦2+12𝑦+27
2(9𝑥-3𝑦+2) | 18𝑥-6𝑦+4`,

        `4(4𝑥2-3𝑥-2) | 16𝑥2-12𝑥-8
5(4𝑥2-3𝑦2+15) | 20𝑥2-15𝑦2+75
11(4𝑦2+7𝑦-2) | 44𝑦2+77𝑦-22
9(𝑥-𝑦-5) | 9𝑥-9𝑦-45
20(4𝑥+3𝑦-5) | 80𝑥+60𝑦-100`,

        `2𝑥(2𝑥+3) | 4𝑥2+6𝑥
3𝑦(3𝑦+5) | 9𝑦2+15𝑦
3𝑥(7𝑥+8) | 21𝑥2+24𝑥
5𝑦(9𝑦-11) | 45𝑦2-55𝑦
7𝑦(6𝑦-5) | 42𝑦2-35𝑦`,

        `4𝑥(2𝑥2+4𝑥-3) | 8𝑥3+16𝑥2-12𝑥
2𝑦(7𝑦2+4𝑦+5) | 14𝑦3+8𝑦2+10𝑦
6𝑥(2𝑥2-4𝑥-6) | 12𝑥3-24𝑥2-36𝑥
𝑦(𝑦2-𝑦-1) | 𝑦3-𝑦2-𝑦
3𝑦(6𝑦2-5𝑦+9) | 18𝑦3-15𝑦2+27𝑦`,

        `𝑥2(5𝑥+99) | 5𝑥3+99𝑥2
3𝑦2(3𝑦-9) | 9𝑦3-27𝑦2
2𝑥2(3𝑥+5) | 6𝑥3+10𝑥2
5𝑦2(6𝑦+4) | 30𝑦3+20𝑦2
9𝑦2(9𝑦-7) | 81𝑦3-63𝑦2`
      ]
    },

    {
      type: 'algebraicInput',
      id: 'mult-2',
      label: 'Multiply-2',
      commonData: {
        title: 'Multiply',
        fontSize: '2rem'
      },
      data: [
        `3𝑦⋅4𝑥2 | 12𝑥2𝑦
7𝑥⋅3𝑦2 | 21𝑥𝑦2
4𝑥⋅6𝑦 | 24𝑥𝑦
5𝑥2⋅2𝑦2 | 10𝑥2𝑦2
4𝑥2⋅9𝑦 | 36𝑥2𝑦`,

        `2𝑥⋅4𝑥𝑦 | 8𝑥2𝑦
3𝑥⋅9𝑥𝑦 | 27𝑥2𝑦
10𝑦⋅10𝑥𝑦 | 100𝑥𝑦2
4𝑥⋅5𝑥2𝑦 | 20𝑥3𝑦
6𝑦⋅3𝑥2𝑦2 | 18𝑥2𝑦3`,

        `3𝑦⋅4𝑥2 | 12𝑥2𝑦
7𝑥2⋅5𝑦2 | 35𝑥2𝑦2
11𝑥2⋅5𝑦 | 55𝑥2𝑦
5𝑦2⋅10𝑥3 | 50𝑥3𝑦2
20𝑥2⋅10𝑥𝑦 | 200𝑥3𝑦`,

        `2𝑦⋅(2𝑥+3) | 4𝑥𝑦+6𝑦
4𝑥⋅(5𝑦-6) | 20𝑥𝑦-24𝑥
7𝑥⋅(7𝑦-8) | 49𝑥𝑦-56𝑥
8𝑦⋅(4𝑥+1) | 32𝑥𝑦+8𝑦
2𝑦⋅(5𝑥-9) | 10𝑥𝑦-18𝑦`,

        `4𝑦(2𝑥2+4𝑥-3) | 8𝑥2𝑦+16𝑥𝑦-12𝑦
5𝑥⋅(2𝑦2-4𝑦+3) | 10𝑥𝑦2-20𝑥𝑦+15𝑥
7𝑥⋅(𝑦2+2𝑦-10) | 7𝑥𝑦2+14𝑥𝑦-70𝑥
8𝑦⋅(5𝑥2-6𝑥+9) | 40𝑥2𝑦-48𝑥𝑦+72𝑦
4𝑦⋅(3𝑥2-8𝑥-8) | 12𝑥2𝑦-32𝑥𝑦-32𝑦`,

        `2𝑦2⋅(3𝑥+5) | 6𝑥𝑦2+10𝑦2
𝑥2⋅(21𝑦-27) | 21𝑥2𝑦-27𝑥2
5𝑦2⋅(5𝑥+9) | 25𝑥𝑦2+45𝑦2
9𝑥2⋅(3𝑦-8) | 27𝑥2𝑦-72𝑥2
7𝑦2⋅(7𝑥-4) | 49𝑥𝑦2-28𝑦2`,

        `2𝑦2⋅(2𝑥2+3𝑥+5) | 4𝑥2𝑦2+6𝑥𝑦2+10𝑦2
2𝑦2⋅(𝑥2-9𝑥-5) | 2𝑥2𝑦2-18𝑥𝑦2-10𝑦2
5𝑥2⋅(4𝑦2-7𝑦+8) | 20𝑥2𝑦2-35𝑥2𝑦+40𝑥2
7𝑦2⋅(3𝑥2-5𝑥-11) | 21𝑥2𝑦2-35𝑥𝑦2-77𝑦2
9𝑥2⋅(2𝑦2-7𝑦+5) | 18𝑥2𝑦2-63𝑥2𝑦+45𝑥2`,

        `4𝑦⋅(2𝑥+4𝑦-3) | 8𝑥𝑦+16𝑦2-12𝑦
5𝑥⋅(5𝑥-6𝑦+8) | 25𝑥2-30𝑥𝑦+40𝑥
3𝑥⋅(9𝑥+2𝑦-5) | 27𝑥2+6𝑥𝑦-15𝑥
8𝑦⋅(6𝑥+6𝑦-9) | 48𝑥𝑦+48𝑦2-72𝑦
7𝑦⋅(5𝑥+4𝑦-8) | 35𝑥𝑦+28𝑦2-56𝑦`
      ]
    },
    {
      type: 'algebraicInput',
      id: 'division',
      label: 'Division',
      commonData: {
        title: 'Division',
        fontSize: '2rem'
      },
      data: [
        `8𝑥/2 | 4𝑥
12𝑦/4 | 3𝑦
66𝑦/6 | 11𝑦
49𝑥/7 | 7𝑥
120𝑦/10 | 12𝑦`,

        `20𝑥2/5 | 4𝑥2
8𝑦2/4 | 2𝑦2
16𝑥2/2 | 8𝑥2
77𝑥2/7 | 11𝑥2
25𝑦2/5 | 5𝑦2`,

        `8𝑥/2𝑥 | 4
24𝑥/4𝑥 | 6
22𝑥/2𝑥 | 11
30𝑥/6𝑥 | 5
21𝑥/7𝑥 | 3`,

        `4𝑥2/𝑥 | 4𝑥
15𝑦2/5𝑦 | 3𝑦
4𝑦2/4𝑦 | 𝑦
28𝑥2/7𝑥 | 4𝑥
33𝑥2/3𝑥 | 11𝑥`,

        `4𝑥+12/4 | 𝑥+3
14𝑥+49/7 | 2𝑥+7
18𝑥+15/3 | 6𝑥+5 
40𝑦+20/2 | 20𝑦+10
45𝑦+60/5 | 9𝑦+12`,

        `3𝑦-15/3 | 𝑦-5
12𝑥-30/6 | 2𝑥-5
48𝑥-32/8 | 6𝑥-4 
44𝑦-99/11 | 4𝑦-9
81𝑥-72/9 | 9𝑥-8`,

        `8𝑥2+12𝑥+16/4 | 2𝑥2+3𝑥+4
15𝑥+10𝑦+20/5 | 3𝑥+2𝑦+4
28𝑦2+7𝑦+14/7 | 4𝑦2+𝑦+2
21𝑦2+12𝑦+27/3 | 7𝑦2+4𝑦+9
18𝑥-6𝑦+4/2 | 9𝑥-3𝑦+2`,

        `16𝑥2-12𝑥-8/4 | 4𝑥2-3𝑥-2
20𝑥2-15𝑦2+75/5 | 4𝑥2-3𝑦2+15
44𝑦2+77𝑦-22/11 | 4𝑦2+7𝑦-2
9𝑥-9𝑦-45/9 | 𝑥-𝑦-5
80𝑥+60𝑦-100/20 | 4𝑥+3𝑦-5`,

        `4𝑥2+6𝑥/~2𝑥 | 2𝑥+3
9𝑦2+15𝑦/~3𝑦 | 3𝑦+5
21𝑥2+24𝑥/~3𝑥 | 7𝑥+8
45𝑦2-55𝑦/~5𝑦 | 9𝑦-11
42𝑦2-35𝑦/~7𝑦 | 6𝑦-5`,

        `8𝑥3+16𝑥2-12𝑥/~4𝑥 | 2𝑥2+4𝑥-3
14𝑦3+8𝑦2+10𝑦/~2𝑦 | 7𝑦2+4𝑦+5
12𝑥3-24𝑥2-36𝑥/~6𝑥 | 2𝑥2-4𝑥-6
𝑦3-𝑦2-𝑦/~𝑦 | 𝑦2-𝑦-1
18𝑦3-15𝑦2+27𝑦/~3𝑦 | 6𝑦2-5𝑦+9`,

        `5𝑥3+99𝑥2/~𝑥2 | 5𝑥+99
9𝑦3-27𝑦2/~3𝑦2 | 3𝑦-9
6𝑥3+10𝑥2/~2𝑥2 | 3𝑥+5
30𝑦3+20𝑦2/~5𝑦2 | 6𝑦+4
81𝑦3-63𝑦2/~9𝑦2 | 9𝑦-7`,

        `3𝑥⋅(𝑥+1)/~𝑥+1 | 3𝑥
7𝑦⋅(𝑥-5)/~𝑥-5 | 7𝑦
(3𝑥-5)⋅(4𝑥+5)/~4𝑥+5 | 3𝑥-5
4𝑦⋅(𝑥+4)/~𝑥+4 | 4𝑦
9𝑦⋅(𝑥+1)/~3𝑦 | 3𝑥+3`
      ]
    }
  ]
};
