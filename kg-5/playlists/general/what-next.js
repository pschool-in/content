export default {
  label: 'What Comes Next',
  id: 'what-next',
  list: [
    {
      type: 'whatNext',
      id: 'letters',
      label: 'Letters',
      lockAfter: 1,
      commonData: {
        type: 'letters'
      },
      data: [
        [
          ['A, B, C, D', 'E, F, G, C', '0,1'],
          ['D, E, F, G', 'H, I, J, K', '0,1'],
          ['S, T, U, V', 'W, X, Q, M', '0,1'],
          ['G, H, I , J', 'K, L, E, F', '0,1'],
          ['K, L, M, N', 'O, P, S, T', '0,1'],
          ['A, E, I, O', 'U, T, B, C']
        ],
        [
          ['A, a, B, b, C', 'c, D, b, B', '0,1'],
          ['D, d, E', 'e, F, g, E', '0,1'],
          ['K, k, L', 'l, M, m, n', '0,1'],
          ['S, s, T', 't, U, u, s', '0,1'],
          ['W, w, X', 'x, Y, y, z', '0,1']
        ],
        [
          ['A, B, A, B, A', 'B, A, C, D', '0,1'],
          ['U, V, U, V, U', 'V, U, W, w', '0,1'],
          ['c, d, c, d, c', 'd, c, e, f', '0,1'],
          ['g, h, g, h, g', 'h, g, i, j', '0,1'],
          ['X, Y, X, Y, X', 'Y, X, W, Z', '0,1']
        ],
        [
          ['A, C, E', 'G, I, H, F', '0,1'],
          ['H, J, L', 'N, P, M, O', '0,1'],
          ['D, F, H', 'J, L, K, M', '0,1'],
          ['K, M, O', 'Q, S, R, P', '0,1'],
          ['R, T, V', 'X, Z, W, Q', '0,1']
        ],
        [
          ['G, F, E', 'D, C, H, E', '0,1'],
          ['E, D, C', 'B, A, E, F', '0,1'],
          ['H, G, F', 'E, D, I, A', '0,1'],
          ['X, W, V', 'U, T, S, R', '0,1'],
          ['M, L, K', 'J, I, N, O', '0,1']
        ],
        [
          ['a, a, b, c, c', 'd, e, f, g', '0, 1'],
          ['z, y, x, v', 'u, t, s, r', '0, 1, 2'],
          ['M, O, Q', 'S, U, W, Z', '0, 1, 2'],
          ['l, M, n, O', 'p, Q, P, q', '0,1'],
          ['r, S, t', 'U, v, V, W', '0,1']
        ]
      ]
    },
    {
      type: 'whatNext',
      id: 'numbers',
      label: 'Numbers',
      lockAfter: 1,
      commonData: {
        type: 'letters'
      },
      data: [
        [
          ['1, 3, 5, 7', '9, 11, 19, 12', '0,1'],
          ['13, 15, 17', '19, 21, 20, 22', '0,1'],
          ['4, 6, 8', '10, 12, 7, 6', '0,1'],
          ['12, 14, 16', '18,20, 22, 16', '0,1,2'],
          ['24, 26, 28', '30, 32, 28, 34', '0,1']
        ],
        [
          ['20, 18, 16', '14, 12, 10, 22', '0,1'],
          ['15, 13, 11', '9, 7, 8, 10', '0,1'],
          ['29, 27, 25', '23, 21, 19, 17', '0,1,2'],
          ['24, 22, 20', '18, 16, 14, 20', '0,1, 2'],
          ['31, 29, 27', '25, 23, 21, 29', '0,1, 2']
        ],
        [
          ['3, 6, 9', '12, 15, 18, 16', '0,1,2'],
          ['5, 10, 15', '20, 25, 30, 40', '0,1,2'],
          ['4, 8, 12', '16, 20, 24, 22', '0,1,2'],
          ['7, 14, 21', '28, 35, 42, 39', '0,1,2'],
          ['6, 12, 18', '24, 30, 36, 33', '0,1,2']
        ],
        [
          ['30, 27, 24', '21, 18, 15, 16', '0,1,2'],
          ['50, 45, 40', '35, 30, 25, 10', '0,1,2'],
          ['40, 36, 32', '28, 24,20, 22', '0,1,2'],
          ['60, 54, 48', '42, 36, 30, 48', '0,1,2'],
          ['80, 72, 64', '56, 48, 40, 44', '0,1,2']
        ],
        [
          ['14, 17, 20', '23, 26, 27, 22', '0,1'],
          ['51, 54, 57', '60, 63, 48, 58', '0,1'],
          ['32, 35, 38', '41, 44, 45, 42', '0,1'],
          ['12, 16, 20', '24, 28, 26, 30', '0,1'],
          ['30, 34, 38', '42, 46, 44, 40', '0,1']
        ],
        [
          ['32, 29, 26', '23, 20, 21, 24', '0,1'],
          ['50, 47, 44', '41, 38, 35, 37', '0,1'],
          ['43, 40, 37', '34, 31, 28, 30 ', '0,1'],
          ['55, 51, 47', '43, 39, 35, 37 ', '0,1'],
          ['76, 72, 68', '64, 60, 56,65', '0,1']
        ]
      ]
    },
    {
      type: 'whatNext',
      id: 'color',
      label: 'Color Based',
      lockAfter: 1,
      commonData: {
        type: 'colorBased'
      },
      data: [
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: ['#FFA858', '#21B0DF', '#FFA858', '#21B0DF'],
            options: ['#FFA858', '#21B0DF', '#B84BE5'],
            ans: [0, 1, 0, 1]
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: ['#2a9d8f', '#e76f51', '#2a9d8f', '#e76f51'],
            options: ['#2a9d8f', '#e76f51', '#e9c46a'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: ['#DCBF4D', '#D01C16', '#DCBF4D', '#D01C16'],
            options: ['#DCBF4D', '#D01C16', 'pink'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#9843F0', '#FF64DB', '#9843F0', '#FF64DB'],
            options: ['#9843F0', '#FF64DB', '#FFA858'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: ['#fe6d73', '#17c3b2', '#fe6d73', '#17c3b2'],
            options: ['#fe6d73', '#17c3b2', '#227c9d'],
            ans: [0, 1]
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: ['#01A100', '#4762DC', '#01A100', '#4762DC'],
            options: ['#01A100', '#4762DC', '#DCBF4D'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: ['#C367DD', '#ED569B', '#C367DD', '#ED569B'],
            options: ['#C367DD', '#ED569B', '#F56200'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: ['#FF00FF', '#9400F5', '#FF00FF', '#9400F5'],
            options: ['#FF00FF', '#9400F5', '#00007C'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: ['#DCBF4D', '#686868', '#DCBF4D', '#686868'],
            options: ['#DCBF4D', '#686868', '#01A100'],
            ans: [0, 1]
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#623000', '#ED569B', '#623000', '#ED569B'],
            options: ['#623000', '#ED569B', '#F56200'],
            ans: [0, 1]
          }
        ],
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: ['#FFA858', '#21B0DF', '#2a9d8f', '#FFA858', '#21B0DF'],
            options: ['#2a9d8f', '#FFA858', '#21B0DF'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: ['#2a9d8f', '#e76f51', '#e9c46a', '#2a9d8f', '#e76f51'],
            options: ['#e9c46a', '#2a9d8f', '#e76f51'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: ['#DCBF4D', '#D01C16', 'pink', '#DCBF4D', '#D01C16'],
            options: ['pink', '#DCBF4D', '#D01C16'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#9843F0', '#FF64DB', '#FFA858', '#9843F0', '#FF64DB'],
            options: ['#FFA858', '#9843F0', '#FF64DB'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: ['#fe6d73', '#17c3b2', '#227c9d', '#fe6d73', '#17c3b2'],
            options: ['#227c9d', '#fe6d73', '#17c3b2'],
            ans: [0, 1, 2]
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: ['#01A100', '#4762DC', '#DCBF4D', '#01A100', '#4762DC'],
            options: ['#DCBF4D', '#01A100', '#4762DC'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: ['#C367DD', '#ED569B', '#F56200', '#C367DD', '#ED569B'],
            options: ['#F56200', '#C367DD', '#ED569B'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: ['#FF00FF', '#9400F5', '#00007C', '#FF00FF', '#9400F5'],
            options: ['#00007C', '#FF00FF', '#9400F5'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: ['#DCBF4D', '#686868', '#01A100', '#DCBF4D', '#686868'],
            options: ['#01A100', '#DCBF4D', '#686868'],
            ans: [0, 1, 2]
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#623000', '#ED569B', '#F56200', '#623000', '#ED569B'],
            options: ['#F56200', '#623000', '#ED569B'],
            ans: [0, 1, 2]
          }
        ],
        [
          {
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: [
              '#FFA858',
              '#FFA858',
              '#21B0DF',
              '#FFA858',
              '#FFA858',
              '#21B0DF',
              '#FFA858',
              '#FFA858'
            ],
            options: ['#21B0DF', '#FFA858', '#B84BE5'],
            ans: [0, 1, 1]
          },
          {
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: [
              '#2a9d8f',
              '#2a9d8f',
              '#e76f51',
              '#2a9d8f',
              '#2a9d8f',
              '#e76f51',
              '#2a9d8f'
            ],
            options: ['#2a9d8f', '#e76f51', '#e9c46a'],
            ans: [0, 1, 0]
          },
          {
            list: [
              {
                d:
                  'M 39 113 C 36 128 71 137 67 113 C 91 81 27 74 37 112 M 133 112 C 130 127 165 136 161 112 C 185 80 121 73 131 111',
                fill: 'black',
                stroke: 'none'
              },
              {
                d:
                  'M 11 120 L 39 121 C 29 88 76 84 69 122 L 129 122 C 123 85 168 85 165 124 L 197 123 C 201 75 180 52 155 56 C 169 27 150 11 103 8 C 59 6 33 24 45 58 C 8 61 13 85 11 120 ',
                fill: 'variable'
              },
              {
                d:
                  'M 106 19 L 106 55 L 145 56 C 153 39 156 16 105 21 M 96 53 L 55 56 C 43 15 79 20 95 17 L 96 52 ',
                fill: 'white'
              }
            ],
            scale: 0.3,
            width: 200,
            height: 130,
            colors: [
              '#DCBF4D',
              '#D01C16',
              '#D01C16',
              '#DCBF4D',
              '#D01C16',
              '#D01C16'
            ],
            options: ['#DCBF4D', '#D01C16', 'pink'],
            ans: [0, 1, 1]
          },
          {
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#9843F0',
              '#9843F0',
              '#FF64DB',
              '#9843F0',
              '#9843F0',
              '#FF64DB',
              '#9843F0',
              '#9843F0'
            ],
            options: ['#FF64DB', '#9843F0', 'FFA858'],
            ans: [0, 1, 1]
          },
          {
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: [
              '#fe6d73',
              '#fe6d73',
              '#17c3b2',
              '#fe6d73',
              '#fe6d73',
              '#17c3b2'
            ],
            options: ['#fe6d73', '#17c3b2', '#227c9d'],
            ans: [0, 0, 1]
          }
        ],
        [
          {
            list: [
              {
                d: 'M 36 16 C 69 -12 93 32 33 82 C -16 45 -1 -27 37 16',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 80,
            height: 80,
            colors: [
              '#01A100',
              '#01A100',
              '#4762DC',
              '#01A100',
              '#01A100',
              '#4762DC',
              '#01A100',
              '#01A100'
            ],
            options: ['#4762DC', '#01A100', '#DCBF4D'],
            ans: [0, 1, 1]
          },
          {
            list: [
              {
                d: 'M 1 57 L 53 57 L 22 5 L 1 57',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 55,
            height: 70,
            colors: [
              '#C367DD',
              '#ED569B',
              '#ED569B',
              '#C367DD',
              '#ED569B',
              '#ED569B',
              '#C367DD'
            ],
            options: ['#ED569B', '#C367DD', '#F56200'],
            ans: [0, 0, 1]
          },
          {
            list: [
              {
                d: 'M 30 30 L 30 60 A 30 30 90 1 1 60 30 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 65,
            height: 65,
            colors: [
              '#FF00FF',
              '#9400F5',
              '#9400F5',
              '#FF00FF',
              '#9400F5',
              '#9400F5'
            ],
            options: ['#FF00FF', '#9400F5', '#00007C'],
            ans: [0, 1, 1]
          },
          {
            list: [
              {
                d: 'M 60 50 A 25 50  0 1 1 60 49',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 100,
            colors: [
              '#DCBF4D',
              '#DCBF4D',
              '#686868',
              '#DCBF4D',
              '#DCBF4D',
              '#686868',
              '#DCBF4D'
            ],
            options: ['#DCBF4D', '#686868', '#01A100'],
            ans: [0, 1, 0]
          },
          {
            list: [
              {
                d:
                  'M 33 3 L 41 15 L 54 12 L 51 25 L 63 33 L 51 41 L 54 54 L 41 51 L 33 63 L 25 51 L 12 54 L 15 41 L 3 33 L 15 25 L 12 12 L 25 15 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#623000',
              '#ED569B',
              '#ED569B',
              '#623000',
              '#ED569B',
              '#ED569B'
            ],
            options: ['#623000', '#ED569B', '#F56200'],
            ans: [0, 1, 1]
          }
        ]
      ]
    },
    {
      type: 'whatNext',
      id: 'color-question',
      label: 'Question based Problem',
      data: {
        type: 'colorBased',
        arr: [
          {
            question:
              'A set of balls are arranged in a series. If the pattern is repeated, what is the color of the 9th ball?',
            list: [
              {
                d: 'M 25 60 C 57 60 57 0 25 0 M 39 5 C 27 15 28 44 42 51',
                fill: 'variable'
              },
              {
                d: 'M 25 60 C -7 60 -7 0 25 0 M 11 5 C 23 15 22 44 8 51 ',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: ['#5c5cd1', 'yellow', '#ED569B', '#0eddf0', '#14f914'],
            options: ['#0eddf0', 'yellow', '#ED569B', '#14f914']
          },
          {
            question:
              'The bottles are on a shelf in the below order. What is the color of the 15th bottle?',
            list: [
              {
                d: 'M 20 0 L 20 25 L 30 40 V 80 H 0 V 40 L 10 25 L 10 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 35,
            height: 90,
            colors: [
              '#5c5cd1',
              'yellow',
              '#ED569B',
              '#009900',
              '#5c5cd1',
              'yellow',
              '#ED569B',
              '#009900'
            ],
            options: ['#ED569B', '#5c5cd1', 'yellow', '#009900']
          },
          {
            question:
              'The bottles are on a shelf. If the pattern is reversed after the 8th bottle, then the 11th bottle will be in what color?',
            list: [
              {
                d: 'M 20 0 L 20 25 L 30 40 V 80 H 0 V 40 L 10 25 L 10 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 35,
            height: 90,
            colors: [
              '#623000',
              '#ED569B',
              '#F56200',
              '#009900',
              '#623000',
              '#ED569B',
              '#F56200',
              '#009900'
            ],
            options: ['#ED569B', '#623000', '#F56200']
          },
          {
            question:
              'A set of balls are arranged in a series. If the pattern is reversed after the 6th ball, what will be color of the 9th ball?',
            list: [
              {
                d: 'M 25 60 C 57 60 57 0 25 0 M 39 5 C 27 15 28 44 42 51',
                fill: 'variable'
              },
              {
                d: 'M 25 60 C -7 60 -7 0 25 0 M 11 5 C 23 15 22 44 8 51 ',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#FFA858',
              '#21B0DF',
              '#14f914',
              '#FFA858',
              '#21B0DF',
              '#14f914'
            ],
            options: ['#FFA858', '#21B0DF', '#14f914']
          },
          {
            question:
              'A set of balls are arranged in a series. If the pattern is reversed after the 9th ball, what will be color of the 10th ball?',
            list: [
              {
                d: 'M 25 60 C 57 60 57 0 25 0 M 39 5 C 27 15 28 44 42 51',
                fill: 'variable'
              },
              {
                d: 'M 25 60 C -7 60 -7 0 25 0 M 11 5 C 23 15 22 44 8 51 ',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#FFA858',
              '#21B0DF',
              '#14f914',
              '#FFA858',
              '#21B0DF',
              '#14f914'
            ],
            options: ['#14f914', '#FFA858', '#21B0DF']
          }
        ]
      }
    },
    {
      type: 'whatNext',
      id: 'color-pattern',
      label: 'Find the Pattern',
      data: {
        type: 'colorBased',
        arr: [
          {
            question:
              'Observe the pattern and decide what pattern they represent.',
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: ['#FFA858', '#21B0DF', '#FFA858', '#21B0DF'],
            options: ['ABAB', 'AABB', 'ABBA', 'BBAA'],
            isTextOptions: true
          },
          {
            question:
              'Observe the pattern and decide what pattern they represent.',
            list: [
              {
                d: 'M 72 32 L 16 121 L 69 157 L 135 64 C 164 13 103 -19 67 39 ',
                fill: 'variable'
              },
              {
                d: 'M 37 134 L 3 184 L 15 193 L 49 145 ',
                fill: 'brown'
              }
            ],
            width: 150,
            height: 200,
            scale: 0.3,
            colors: [
              '#2a9d8f',
              '#e76f51',
              '#e9c46a',
              '#2a9d8f',
              '#e76f51',
              '#e9c46a'
            ],
            options: ['ABCABC', 'AABBCC', 'ABABAB', 'ABCCBA'],
            isTextOptions: true
          },
          {
            question:
              'Observe the pattern and decide what pattern they represent.',
            list: [
              {
                d: 'M 60 30 A 30 30 0 1 1 20 2 A 15 15 0  0 0 60 30',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 60,
            height: 60,
            colors: [
              '#9843F0',
              '#FF64DB',
              '#FFA858',
              '#FFA858',
              '#FF64DB',
              '#9843F0'
            ],
            options: ['ABCCBA', 'ABCABC', 'AABBCC', 'ABABAB'],
            isTextOptions: true
          },
          {
            question:
              'Observe the pattern and decide what pattern they represent.',
            list: [
              {
                d:
                  'M 42 0 L 51 28 L 80 28 L 56 45 L 66 72 L 42 55 L 18 72 L 28 45 L 4 28 L 33 28 L 42 0 Z',
                fill: 'variable'
              }
            ],
            scale: 1,
            width: 75,
            height: 75,
            colors: ['#fe6d73', '#17c3b2', '#17c3b2', '#17c3b2'],
            options: ['ABBB', 'AAAB', 'ABAB', 'XYXY'],
            isTextOptions: true
          },
          {
            question:
              'Observe the pattern and decide what pattern they represent.',
            list: [
              {
                d: 'M 34 4 C 84 5 82 112 34 111 C 2 110 -10 5 34 4 ',
                fill: 'variable'
              },
              {
                d: 'M 59 199 C 35 181 53 126 34 111 L 24 117'
              }
            ],
            width: 75,
            height: 200,
            scale: 0.6,
            colors: [
              '#FFA858',
              '#21B0DF',
              '#21B0DF',
              '#FFA858',
              '#21B0DF',
              '#21B0DF'
            ],
            options: ['ABBABB', 'AABAAB', 'ABCABC', 'AABBCC'],
            isTextOptions: true
          }
        ]
      }
    },
    {
      type: 'whatNext',
      id: 'rotation',
      label: 'Rotation',
      lockAfter: 1,
      commonData: {
        title: 'What comes next ? (based on rotation)',
        type: 'rotationBased'
      },
      data: [
        [
          {
            //d: 'M 50 10 A 40 40 0 1 0 90 50 L 50 50 Z',
            d: 'M 40 0 A 40 40 0 1 0 80 40 L 40 40 Z',
            angles: [0, 90, 180],
            options: [270, 0, 90],
            ans: [0, 1]
          },
          {
            d: 'M 80 20 L 20 80 L 20 60 M 20 80 L 40 80',
            angles: [0, 45, 90],
            options: [135, 180, 225, 90],
            ans: [0, 1]
          },
          {
            d:
              'M 30 19 C 60 -20 126 22 83 65 L 64 45 L 13 98 L 3 86 L 55 37 L 31 18 ',
            angles: [0, 45, 90],
            options: [135, 180, 225, 90],
            ans: [0, 1]
          },
          {
            d: 'M 21 43 C 0 -9 98 -15 68 44 L 48 93 L 19 42 L 72 34 ',
            angles: [0, 90, 180],
            options: [270, 0, 90, 180],
            ans: [0, 1]
          },
          {
            d:
              'M 5 5 L 95 4 L 95 33 L 61 32 L 63 97 L 33 95 L 31 33 L 3 32 L 3 3 ',
            angles: [0, 90, 180],
            options: [270, 0, 90, 180],
            ans: [0, 1]
          }
        ],
        [
          {
            d: 'M 5 5 L 95 5 L 55 50 L 95 95 L 5 95 L 45 50 L 5 5 ',
            angles: [0, 45, 90],
            options: [135, 180, 270, 45],
            ans: [0, 1]
          },
          {
            d: 'M 0 80 L 80 80 L 80 40 L 40 0 L 0 40 L 0 80 ',
            angles: [0, 90, 180],
            options: [270, 0, 90, 180],
            ans: [0, 1]
          },
          {
            d: 'M 100 50 A 50 25 0 1 1 100 49',
            angles: [0, 45, 90],
            options: [135, 180, 270, 45],
            ans: [0, 1]
          },
          {
            d: 'M 35 0 A 40 40 270 0 1 35 80 L 0 80 L 0 0 Z ',
            angles: [0, 90, 180],
            options: [270, 0, 90, 180],
            ans: [0, 1]
          },
          {
            d: 'M 0 0 V 80 H 80 L 0 0 L 40 80',
            angles: [0, 90, 180],
            options: [270, 360, 90, 180],
            ans: [0, 1]
          }
        ],
        [
          {
            d: 'M 40 0 A 40 40 0 1 0 80 40 L 40 40 Z',
            angles: [270, 180, 90],
            options: [0, 270, 180, 90],
            ans: [0, 1]
          },
          {
            d: 'M 80 20 L 20 80 L 20 60 M 20 80 L 40 80',
            angles: [270, 225, 180],
            options: [135, 90, 45, 0],
            ans: [0, 1]
          },
          {
            d:
              'M 30 19 C 60 -20 126 22 83 65 L 64 45 L 13 98 L 3 86 L 55 37 L 31 18 ',
            angles: [270, 180, 90],
            options: [0, 270, 90, 180],
            ans: [0, 1]
          },
          {
            d: 'M 21 43 C 0 -9 98 -15 68 44 L 48 93 L 19 42 L 72 34 ',
            angles: [270, 180, 90],
            options: [0, 270, 90, 180],
            ans: [0, 1]
          },
          {
            d:
              'M 5 5 L 95 4 L 95 33 L 61 32 L 63 97 L 33 95 L 31 33 L 3 32 L 3 3 ',
            angles: [270, 180, 90],
            options: [0, 270, 180, 90],
            ans: [0, 1]
          }
        ],
        [
          {
            d: 'M 5 5 L 95 5 L 55 50 L 95 95 L 5 95 L 45 50 L 5 5 ',
            angles: [135, 90, 45],
            options: [0, 315, 45, 270],
            ans: [0, 1]
          },
          {
            d: 'M 0 80 L 80 80 L 80 40 L 40 0 L 0 40 L 0 80 ',
            angles: [270, 180, 90],
            options: [0, 270, 180, 90],
            ans: [0, 1]
          },
          {
            d: 'M 100 50 A 50 25 0 1 1 100 49',
            angles: [135, 90, 45],
            options: [0, 315, 270, 225],
            ans: [0, 1]
          },
          {
            d: 'M 35 0 A 40 40 270 0 1 35 80 L 0 80 L 0 0 Z ',
            angles: [270, 180, 90],
            options: [0, 270, 180, 90],
            ans: [0, 1]
          },
          {
            d: 'M 0 0 V 80 H 80 L 0 0 L 40 80',
            angles: [270, 180, 90],
            options: [0, 270, 180, 90],
            ans: [0, 1]
          }
        ]
      ]
    }
  ]
};
