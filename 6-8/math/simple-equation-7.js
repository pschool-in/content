export default {
  label: 'Simple Equation - 7',
  id: 'simple-equation-7',
  lockAfter: 100,
  list: [
    {
      label: 'Yes or No (Exercise 4.1)',
      id: 'classify',
      type: 'classifySentence',
      commonData: {
        fracFontSize: '1.2rem'
      },
      data: [
        {
          title: 'Say, whether the Equation is satisfied.',

          types: [
            {
              name: 'Yes',
              text: `~𝑥+3=0 ; 𝑥 = -3
~𝑥-7=1 ; 𝑥 = 8
~5𝑥=25 ; 𝑥 = 5
𝑚/3 = 2 ; 𝑚 = 6`
            },
            {
              name: 'No',
              text: `~𝑥+3=0 ; 𝑥 = 3
~𝑥+3 = 0 ; 𝑥 = 0
~𝑥-7 = 1 ; 𝑥 = 7
5𝑥 = 25 ; 𝑥 = 0
5𝑥 = 25 ; 𝑥 = -5
𝑚/3 = 2 ; 𝑚 = -6
𝑚/3 = 2 ; 𝑚 = 0`
            }
          ]
        },
        {
          title:
            'Check whether the value given in the brackets is a solution to the given equation or not:',

          types: [
            {
              name: 'Yes',
              text: `~7𝑛+5=19 ( 𝑛 = 2 )`
            },
            {
              name: 'No',
              text: `~𝑛+5=19  ( 𝑛 = 1 )
~7𝑛+5=19 ( 𝑛 = -2 )
~4𝑝-3=13 ( 𝑝 = 1 )
~4𝑝-3=13 ( 𝑝 = -4 )
~4𝑝-3=13 ( 𝑝 = 13 )`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ex-4-1',
      label: 'Answer the Following',
      commonData: {
        bigKeys: false,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        allowFrac: false,
        algebra: true,
        title: 'Answer the following:'
      },
      data: [
        {
          title: 'Solve the following equations by trial and error method:',
          list: [
            `~5𝑝+2=17
𝑝 = ?0
3`,

            `~3𝑚-14=4
𝑚 = ?0
6`
          ]
        },
        {
          title: 'Write equations for the following statements',
          vars: '𝑥𝑦𝑧=',
          list: [
            `The sum of numbers 𝑥 and 4 is 9.
Ans = ?0
𝑥+4=9`,

            `2 subtracted from 𝑦 is 8
Ans = ?0
𝑦-2=8`,

            {
              text: `Ten times 𝑎 is 70
Ans = ?0
10𝑎=70`,
              vars: '𝑎𝑏𝑐='
            },
            {
              text: `The number 𝑏 divided by 5 gives 6.
Ans = ?0
𝑏/5=6`,
              vars: '𝑎𝑏𝑐='
            },
            {
              text: `Three-fourth of 𝑡 is 15.
Ans = ?0
3𝑡/4=15`,
              vars: '𝑠𝑡𝑢='
            }
          ]
        },
        {
          title: 'Write equations for the following statements',
          vars: '𝑥𝑦𝑧=',
          list: [
            {
              text: `Seven times 𝑚 plus 7 gets you 77
Ans = ?0
7𝑚+7=77`,
              vars: '𝑙𝑚𝑛='
            },

            `One-fourth of a number 𝑥 minus 4 gives 4.
Ans = ?0
𝑥/4-4=4`,

            `If you take away 6 from 6 times 𝑦, you get 60.
Ans = ?0
6𝑦-6=60`,

            `If you add 3 to one-third of 𝑧, you get 30.
Ans = ?0
𝑧/3+3=30`
          ]
        },
        {
          //ex 4.1.6
          title: 'Set up an equation in the following cases:',
          vars: '𝑥𝑦𝑧=',
          list: [
            {
              text: `Irfan says that he has 7 marbles more than five times the marbles Parmit has. Irfan has 37 marbles. (Take 𝑚 to be the number of Parmit’s marbles.)
Ans = ?0
5𝑚+7=37`,
              vars: '𝑙𝑚𝑛='
            },

            `Laxmi's father is 49 years old. He is 4 years older than three times Laxmi's age. (Take Laxmi's age to be 𝑦 years.)
Ans = ?0
3𝑦+4=49`,

            {
              text: `The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. The highest score is 87. (Take the lowest score to be 𝑙.)
Ans = ?0
2𝑙+7=87`,
              vars: '𝑙𝑚𝑛='
            },

            {
              text: `In an isosceles triangle, the vertex angle is twice either base angle. (Let the base angle be b in degrees. Remember that the sum of angles of a triangle is 180 degrees).
Ans = ?0
4𝑏=180`,
              vars: '𝑎𝑏𝑐='
            }
          ]
        }
      ]
    },
    {
      type: 'makeSentence',
      label: 'Make statements',
      id: 'make-sentence',
      commonData: {
        title: 'Write the following equations in statement forms.',
        extras: ''
      },
      data: [
        `~𝑝+4=15 |  sum of 𝑝 and 4 is 15
~𝑚-7=3 | 7 subtracted from 𝑚 is 3
~2𝑚=7 | twice a number 𝑚 is 7
𝑚/5 = 3 | one fifth of a number 𝑚 is 3`,

        `3𝑚/5 = 6 |  three fifth of a number 𝑚 is 6
~3𝑝+4=25 | three times a number 𝑝 when added to 4 gives 25
~4𝑝-2=18 | 2 subtracted from four times a number 𝑝 is 18
𝑝/2 + 2 = 8 | add 2 to half of a number 𝑝 to get 8 , add half of a number 𝑝 to 2 to get 8`
      ]
    },
    {
      type: 'numberInput',
      id: 'ex-4-2',
      label: 'Exercise 4.2',
      commonData: {
        bigKeys: false,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        algebra: true,
        title: 'Answer the following:'
      },
      data: [
        {
          //ex 4.2.1
          title:
            'Give first the step you will use to separate the variable and then solve the equation:',
          vars: '𝑥𝑦𝑧=',
          list: [
            `𝑥 – 1 = 0
Add ?0 to both sides
𝑥 = ?1
1, 1`,
            `𝑥 + 1 = 0
Subtract ?0 from both sides
𝑥 = ?1
1, -1`,
            `𝑥 – 1 = 5
Add ?0 to both sides
𝑥 = ?1
1, 6`,

            `𝑥 + 6 = 2
Subtract ?0 from both sides
𝑥 = ?1
6, -4`,

            `𝑦 – 4 = – 7
Add ?0 to both sides
𝑦 = ?1
4, -3`,

            `𝑦 – 4 = 4
Add ?0 to both sides
𝑦 = ?1
4, 8`,

            `𝑦 + 4 = 4
Subtract ?0 from both sides
𝑦 = ?1
4, 0`,

            `𝑦 + 4 = – 4
Subtract ?0 from both sides
𝑦 = ?1
4, -8`
          ]
        },
        {
          //ex 4.2.2
          title:
            'Give first the step you will use to separate the variable and then solve the equation:',
          vars: '𝑥𝑦𝑧=',
          list: [
            {
              text: `3𝑙 = 42
Divide both sides by ?0
𝑙 = ?1
3, 14`,
              vars: '𝑙𝑚𝑛'
            },
            {
              text: `𝑏/2 = 6
Multiply both sides by ?0
𝑏 = ?1
2, 12`,
              vars: '𝑎𝑏𝑐='
            },
            {
              text: `𝑝/7 = 4
Multiply both sides by ?0
𝑝 = ?1
7, 28`,
              vars: '𝑝𝑞𝑟='
            },
            `~4𝑥=25
Divide both sides by ?0
𝑥 = ?1
4, 25/4`,
            `~8𝑦=36
Divide both sides by ?0
𝑦 = ?1
8, 36/8 | 9/2 | 4.5`,
            `𝑧/3 = 5/4
Multiply both sides by ?0
𝑧 = ?1
3, 15/4 | 3.75`,
            {
              text: `𝑎/5 = 7/15
Multiply both sides by ?0
𝑎 = ?1
5, 7/3`,
              vars: '𝑎𝑏𝑐='
            },
            {
              text: `~20𝑡=-10
Divide both sides by ?0
𝑡 = ?1
20, -1/2`,
              vars: '𝑠𝑡𝑢='
            }
          ]
        },
        {
          //ex 4.2.2
          title:
            'Give the steps you will use to separate the variable and then solve the equation:',
          vars: '𝑥𝑦𝑧=',
          fontSize: '1rem',
          inputType: 'small',
          list: [
            {
              text: `~3𝑛-2=46
Step 1: Add ?0 to both sides
We get ?1
Step 2: Divide both sides by ?2
𝑛 = ?3
2, 3𝑛=48, 3, 16`,
              vars: '𝑙𝑚𝑛='
            },
            {
              text: `~5𝑚+7=17
Step 1: Subtract ?0 from both sides
We get ?1
Step 2: Divide both sides by ?2;
𝑚 = ?3
7, 5𝑚=10, 5, 2`,
              vars: '𝑙𝑚𝑛='
            },
            {
              text: `~20𝑝/3 = 40
Step 1: Multiply both sides by ?0
We get ?1
Step 2: Divide both sides by ?2
𝑝 = ?3
3, 20𝑝=120 , 20, 6`,
              vars: '𝑝𝑞𝑟='
            },
            {
              text: `~3𝑝/10 = 6
Step 1: Multiply both sides by ?0
We get ?1
Step 2: Divide both sides by ?2
𝑝 = ?3
10, 3𝑝=60, 3, 20`,
              vars: '𝑝𝑞𝑟='
            }
          ]
        },
        {
          //ex 4.2.4
          title: 'Solve the following equations:',
          vars: '𝑝𝑞𝑟𝑠=',
          fontSize: '1.5rem',
          list: [
            `~10𝑝=100
𝑝= ?0
10`,

            `~10𝑝+10=100
~10𝑝= ?0
𝑝 = ?1
90, 9`,

            `𝑝/4 = 5
𝑝 = ?0
20`,

            `-𝑝/3 = 5
-𝑝 = ?0
𝑝 = ?1
15, -15`,

            `3𝑝/4 = 6
3𝑝 = ?0
𝑝 = ?1
24, 8`,

            `~3𝑠=-9
𝑠 = ?0
-3`
          ]
        },
        {
          //ex 4.2.4
          title: 'Solve the following equations:',
          vars: '𝑝𝑞𝑟𝑠=',
          fontSize: '1.5rem',
          list: [
            `~3𝑠+12=0
~3𝑠= ?0
~𝑠= ?1
-12, -4`,

            `~3𝑠=0
~𝑠= ?0
0`,

            `~2𝑞=6
~𝑞= ?0
3`,

            `~2𝑞-6=0
~2𝑞= ?0
~𝑞= ?1
6, 3`,

            `~2𝑞+6=0
~2𝑞= ?0
~𝑞= ?1
-6, -3`,

            `~2𝑞+6=12
~2𝑞= ?0
~𝑞= ?1
6, 3`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'ex-4-3',
      label: 'Exercise 4.3',
      commonData: {
        bigKeys: false,
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1.2rem',
        algebra: 'true',
        //vars: '𝑥𝑦𝑧=',
        title: 'Solve the following equations:'
      },
      data: [
        {
          list: [
            `~2𝑦+ 5/2 = 37/2
            ~2𝑦= ?0
𝑦 = ?1
16, 8`,
            `~5𝑡+28=10
~5𝑡= ?0
𝑡 = ?1
-18 , -18/5`,

            `𝑎/5 + 3 = 2
𝑎/5 = ?0
𝑎 = ?1
-1, -5`,

            `𝑞/4 + 7 = 5
𝑞/4 = ?0
𝑞 = ?1
-2, -8`,

            `5𝑥/2 = -5
5𝑥 = ?0
𝑥 = ?1
-10, -2`
          ]
        },
        {
          list: [
            `5𝑥/2 = 25/4
5𝑥 = { ?0 }/{ ?1 }
𝑥 = ?2
25, 2, 5/2`,

            `7𝑚 + 19/2 = 13
7𝑚 = { ?0 - ?1 }/{2}
7𝑚 = ?2
𝑚 = ?3
26, 19, 7/2, 1/2`,

            `~6𝑧+10=-2
~6𝑧= ?0
~𝑧= ?1
-12, -2`,

            `3𝑙/2 = 2/3
3𝑙 = { ?0 }/{ ?1 }
𝑙 = ?2
4, 3, 4/9`,

            `2𝑏/3 - 5 = 3
2𝑏/3 = ?0
2𝑏 = ?1
𝑏 = ?2
8, 24 , 12`
          ]
        },
        {
          list: [
            `~2(𝑥+4)=12
~2𝑥+ ?0 = ?1
~2𝑥= ?2
𝑥 = ?3
8, 12, 4, 2`,

            `~3(𝑛-5)=21
~3𝑛- ?0 = ?1
~3𝑛= ?2
𝑛 = ?3
15, 21, 36, 12`,

            `~3(𝑛-5)=-21
~3𝑛- ?0 = ?1
~3𝑛= ?2
𝑛 = ?3
15, -21, -6, -2`,

            `~-4(2+𝑥)=8
?0 ~-4𝑥 = ?1
~-4𝑥= ?2
𝑥 = ?3
-8, 8, 16, -4`,

            `~4(2-𝑥)=8
?0 ~-4𝑥 = ?1
~-4𝑥= ?2
𝑥 = ?3
8, 8, 0, 0`
          ]
        },
        {
          list: [
            `~4=5(𝑝-2)
~5𝑝= ?0
𝑝 = ?1
14, 14/5`,

            `~-4=5(𝑝-2)
~5𝑝= ?0
𝑝 = ?1
6, 6/5`,

            `~16=4+3(𝑡+2)
~3(𝑡+2)= ?0
~𝑡+2= ?1
𝑡 = ?2
12, 4, 2`,

            `~4+5(𝑝-1)=34
~5(𝑝-1)= ?0
~𝑝-1= ?1
𝑝 = ?2
30, 6, 7`,

            `~0=16+4(𝑚-6)
~4(𝑚-6)= ?0
~𝑚-6= ?1
𝑚 = ?2
-16, -4, 2`
          ]
        }
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
              qText:
                'Write the following statement in the form of an equation: The sum of three times 𝑥 and 10 is 13.',
              options: `~3𝑥+10=13, ~3+𝑥=10, ~3+x=13, ~3𝑥+13=10`
            },
            {
              qText:
                'Write the following statement in the form of an equation: If you subtract 3 from 6 times a number, you get 9.',
              options: `~6𝑥-3=9, ~3𝑥-6=9,~6𝑥+3=9, ~3𝑥+6=9`
            },
            {
              qText:
                'Write the following statement in the form of an equation: One fourth of n is 3 more than 2',
              options: `~n/4 ~-2=3, ~n/4 ~2=3, ~n/2 ~-4=3, ~n/2 ~+4=3`
            },
            {
              qText:
                'Write the following statement in the form of an equation: Taking away 5 from 𝑥 gives 10',
              options: `~𝑥-5=10, ~𝑥+5=10, ~𝑥-10=5, ~𝑥+10=5`
            },
            {
              qText:
                'Write the following statement in the form of an equation: The number b divided by 6 gives 5.',
              options: `~b/6 ~=5, ~b-5=6, ~6/b ~=5, ~5/b ~=6`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The solution of the equation 𝑥+3=0 is',
              options: `-3, 3, 0, 1`
            },
            {
              qText: 'The solution of the equation 𝑥–6=1 is',
              options: `7, -7, 6, 1`
            },
            {
              qText: 'The solution of the equation 5𝑥=10 is',
              options: `2, 1, 5, 10`
            },
            {
              qText: `The solution of the equation ~m/2 ~=3 is`,
              options: `6, 12, 3, 2`
            },
            {
              qText: 'The solution of the equation 7n+5=12 is',
              options: `1, -1, 0, 5`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The solution of the equation 4p–3=9 is',
              options: `3, 4, 1, 2`
            },
            {
              qText: 'The solution of the equation 0=4+4(m+1) is',
              options: `-2, 2, -1, 1`
            },
            {
              qText: 'The solution of the equation –4=2(p–2) is',
              options: `0, 1, 2, 4`
            },
            {
              qText: 'The solution of the equation -4(2+𝑥)=4 is',
              options: `-3, -4, -2, -1`
            },
            {
              qText: 'The solution of the equation 4(2+𝑥)=4 is',
              options: `3, 4, 2, 1`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The solution of the equation 5/2 𝑥=15 is',
              options: `6, 4, 2, 10`
            },
            {
              qText: 'The solution of the equation 2(m+3)=8 is',
              options: `1, 2, 3, 4`
            },
            {
              qText: 'The solution of the equation 12p–11=13 is',
              options: `2, 1, 3, 4`
            },
            {
              qText: 'The solution of the equation 10p=10 is',
              options: `1, -1, 10, -10`
            },
            {
              qText: 'The solution of the equation 10p+10=110 is',
              options: `10, -10, 100, 110`
            }
          ]
        }
      ]
    }
  ]
};
