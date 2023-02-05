export default {
  label: 'Math Machine',
  id: 'math-machine',
  list: [
    {
      type: 'numberInput',
      id: 'add',
      label: 'Addition',
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
𝑥 | 𝑥 + 5
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
15, 30, 50, 25, 60, 20`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 10
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
20, 35, 55, 30, 65, 25`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 3
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
13, 28, 48, 23, 58, 18`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 7
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
17, 32, 52, 27, 62, 22`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 9
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
19, 34, 54, 29, 64, 24`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'subtract',
      label: 'Subtraction',
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
𝑥 | 𝑥 − 5
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
5, 20, 40, 15, 50, 10`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 10
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
0, 15, 35, 10, 45, 5`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 3
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
7, 22, 42, 17, 52, 12`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 7
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
3, 18, 38, 13, 48, 8`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 9
10 | ?0
25 | ?1
45 | ?2
20 | ?3
55 | ?4
15 | ?5
1, 16, 36, 11, 46, 6`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'multiply',
      label: 'Multiply',
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
𝑥 | 𝑥 × 3
3 | ?0
7 | ?1
10 | ?2
5 | ?3
9 | ?4
8 | ?5
9, 21, 30, 15, 27, 24`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 5
10 | ?0
2 | ?1
8 | ?2
5 | ?3
9 | ?4
7 | ?5
50, 10, 40, 25, 45, 35`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 7
10 | ?0
2 | ?1
8 | ?2
5 | ?3
9 | ?4
7 | ?5
70, 14, 56, 35, 63, 49`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 4
10 | ?0
2 | ?1
8 | ?2
5 | ?3
9 | ?4
7 | ?5
40, 8, 32, 20, 36, 28`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 6
10 | ?0
2 | ?1
8 | ?2
5 | ?3
9 | ?4
7 | ?5
60, 12, 48, 30, 54, 42`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'add-2',
      label: 'Addition - 2',
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
𝑥 | 𝑥 + 5
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
15, 45, 0, 30, 37, 23`
            }
          ]
        },
        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 10
?0 | 20  
?1 | 50  
?2 | 15  
?3 | 35  
?4 | 42  
?5 | 28  
10, 40, 5, 25, 32, 18`
            }
          ]
        },
        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 3
?0 | 20  
?1 | 50  
?2 | 15  
?3 | 35  
?4 | 42  
?5 | 28  
17, 47, 12, 32, 39, 25`
            }
          ]
        },
        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 7
?0 | 20  
?1 | 50  
?2 | 15  
?3 | 35  
?4 | 42  
?5 | 28  
13, 43, 8, 28, 35, 21`
            }
          ]
        },
        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 + 9
?0 | 20  
?1 | 50  
?2 | 15  
?3 | 35  
?4 | 42  
?5 | 28  
11, 41, 6, 26, 33, 19`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'subtract-2',
      label: 'Subtraction - 2',
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
𝑥 | 𝑥 − 5
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
25, 55, 10, 40, 47, 33`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 10
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
30, 60, 15, 45, 52, 38`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 3
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
23, 53, 8, 38, 45, 31`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 7
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
27, 57, 12, 42, 49, 35`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 − 9
?0 | 20  
?1 | 50  
?2 | 5  
?3 | 35  
?4 | 42  
?5 | 28  
29, 59, 14, 44, 51, 37`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'multiply-2',
      label: 'Multiply - 2',
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
𝑥 | 𝑥 × 3
?0 | 9  
?1 | 21  
?2 | 30  
?3 | 15  
?4 | 27  
?5 | 24 
3, 7, 10, 5, 9, 8`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 5
?0 | 50  
?1 | 10  
?2 | 40  
?3 | 25  
?4 | 45  
?5 | 35 
10, 2, 8, 5, 9, 7`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 7
?0 | 70  
?1 | 14  
?2 | 56  
?3 | 35  
?4 | 63  
?5 | 49 
10, 2, 8, 5, 9, 7`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 4
?0 | 40  
?1 | 8  
?2 | 32  
?3 | 20  
?4 | 36  
?5 | 28 
10, 2, 8, 5, 9, 7`
            }
          ]
        },

        {
          list: [
            {
              widths: '160, 160',
              text: `Input | Output
𝑥 | 𝑥 × 6
?0 | 12  
?1 | 60  
?2 | 48  
?3 | 30  
?4 | 54  
?5 | 42 
2, 10, 8, 5, 9, 7`
            }
          ]
        }
      ]
    }
  ]
};
