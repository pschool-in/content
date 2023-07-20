export default {
  label: 'Money',
  id: 'money',
  list: [
    {
      type: 'counter',
      id: 'count',
      label: 'Count the Total Money',
      commonData: {
        title: 'Count the total money.'
      },
      data: [
        // 3-5 - level 1
        {
          width: 80,
          type: 'money',
          rs: [20],
          arr: [3, 2, 1, 6, 5, 4, 7, 10, 9]
        },
        {
          width: 80,
          type: 'money',
          rs: [50],
          arr: [2, 1, 5, 3, 6, 4, 9, 10, 7]
        },
        {
          width: 80,
          type: 'money',
          rs: [200],
          arr: [3, 2, 1, 6, 5, 4, 7, 10, 9]
        },
        {
          width: 80,
          type: 'money',
          rs: [500],
          arr: [2, 1, 5, 3, 6, 4, 9, 10, 7]
        },
        {
          width: 80,
          type: 'money',
          rs: [2000],
          arr: [2, 1, 5, 3, 6, 4, 9, 10, 7]
        },
        {
          width: 80,
          type: 'money',
          rs: [5, 2],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        },
        {
          width: 80,
          type: 'money',
          rs: [5, 2, 1],
          arr: [
            [3, 4, 5],
            [2, 3, 2],
            [2, 5, 1],
            [4, 2, 2],
            [5, 3, 4]
          ]
        },
        {
          width: 100,
          type: 'money',
          rs: [20, 10],
          arr: [
            [3, 4],
            [2, 3],
            [2, 5],
            [4, 2],
            [5, 3]
          ]
        }
      ]
    },
    {
      label: 'Simple Word Problems',
      type: 'mcq',
      id: 'word-problem',
      commonData: {
        title: 'Pick the correct answer for the word problem.'
      },
      data: [
        {
          questions: [
            {
              qText: `I bought a pencil for ₹ 10 and an eraser for ₹ 5. How much do I have to pay?`,
              options: `₹ 15, ₹ 20, ₹ 25, ₹ 10`
            },
            {
              qText: `I bought an apple for ₹ 30 and an orange for ₹ 20. How much do I have to pay?`,
              options: `₹ 50, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 3 chocolates. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 60, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought a notebook for ₹ 40 and an ice-cream for ₹ 50. How much do I have to pay?`,
              options: `₹ 90, ₹ 60, ₹ 50,  ₹ 70`
            },
            {
              qText: `I bought items for ₹ 70. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 30, ₹ 60, ₹ 50,  ₹ 70`
            }
          ]
        },
        {
          questions: [
            {
              qText: `I bought items for ₹ 92. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 8, ₹ 20, ₹ 12, ₹ 10`
            },
            {
              qText: `I bought items for ₹ 40. I gave a note of ₹ 100. How much should the shopkeeper return?`,
              options: `₹ 60, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 4 packets of biscuits. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 80, ₹ 50, ₹ 45, ₹ 70`
            },
            {
              qText: `I bought 3 chocolates. Each costs ₹ 20. How much do I have to pay?`,
              options: `₹ 60, ₹ 90, ₹ 50,  ₹ 70`
            },
            {
              qText: `I bought a packet of sketch for ₹ 90 and a pen for ₹ 50. How much do I have to pay?`,
              options: `₹ 140, ₹ 160, ₹ 130,  ₹ 150`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The cost of one apple is ₹ 20. What is the cost of 5 apples?`,
              options: `₹ 100, ₹ 120, ₹ 80, ₹ 110`
            },
            {
              qText: `The cost of one pencil is ₹ 5. What is the cost of 8 pencils?`,
              options: `₹ 40, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `The cost of one notebook is ₹ 40. What is the cost of 5 notebooks?`,
              options: `₹ 200, ₹ 150, ₹ 145, ₹ 170`
            },
            {
              qText: `The cost of one ice-cream is ₹ 30. What is the cost of 5 ice-creams?`,
              options: `₹ 150, ₹ 130, ₹ 160,  ₹ 170`
            },
            {
              qText: `The cost of one ride is ₹ 20. What is the cost of 4 rides?`,
              options: `₹ 80, ₹ 60, ₹ 50,  ₹ 70`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The cost of 5 ice-ceams is ₹ 200. How much does 1 ice-cream cost?`,
              options: `₹ 40, ₹ 20, ₹ 25, ₹ 30`
            },
            {
              qText: `The cost of 3 notebooks is ₹ 150. How much does 1 notebook cost?`,
              options: `₹ 50, ₹ 60, ₹ 45, ₹ 70`
            },
            {
              qText: `The cost of 3 rides is ₹ 90. How much does 1 ride cost?`,
              options: `₹ 30, ₹ 60, ₹ 50, ₹ 45`
            },
            {
              qText: `The cost of 10 pencils is ₹ 150. How much does 1 pencil cost?`,
              options: `₹ 15, ₹ 10, ₹ 20,  ₹ 18`
            },
            {
              qText: `The cost of 6 apples is ₹ 120. How much does 1 apple cost?`,
              options: `₹ 20, ₹ 30, ₹ 25,  ₹ 15`
            }
          ]
        }
      ]
    },
    {
      //present in showcase
      type: 'denomination',
      id: 'denomination',
      label: 'Write Denomination',
      commonData: {
        showImg: true
      },
      data: [
        {
          format: 'aa0',
          denos: [100, 10]
        },
        {
          format: 'xx',
          denos: [10, 2, 1]
        },
        {
          format: 'xx5',
          denos: [100, 10, 5]
        },
        {
          format: 'xx0',
          denos: [200, 100, 10]
        },
        {
          format: 'xx0',
          denos: [100, 50, 10]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'denomination-2',
      label: 'Calculate the total Money',
      commonData: {
        showImg: true,
        calculateMoney: true
      },
      data: [
        {
          format: 'a',
          denos: [10, 2, 1]
        },
        {
          format: 'a',
          denos: [100, 10, 5]
        },
        {
          format: 'a',
          denos: [200, 100, 10]
        },
        {
          format: 'a',
          denos: [100, 50, 10]
        },
        {
          format: 'b',
          denos: [2, 1]
        },
        {
          format: 'b',
          denos: [10, 5]
        },
        {
          format: 'b',
          denos: [100, 1]
        },
        {
          format: 'b',
          denos: [100, 10]
        },
        {
          format: 'b',
          denos: [20, 10]
        },
        {
          format: 'b',
          denos: [5, 2, 1]
        },
        {
          format: 'b',
          denos: [100, 10]
        },
        {
          format: 'b',
          denos: [10, 2, 1]
        },
        {
          format: 'b',
          denos: [100, 10, 5]
        },
        {
          format: 'b',
          denos: [200, 100, 10]
        },
        {
          format: 'b',
          denos: [100, 50, 10]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'denomination-3',
      label: 'Write Denomination',
      data: [
        {
          format: 'xxx',
          denos: [100, 50, 10, 5, 1]
        },
        {
          format: 'xxxx',
          denos: [500, 100, 20, 10, 2, 1]
        },
        {
          format: 'ax0x',
          denos: [500, 100, 5, 2, 1]
        },
        {
          format: 'xxx',
          denos: [500, 100, 50, 20, 10, 5, 1]
        }
      ]
    },

    {
      type: 'denomination',
      id: 'calculate-2',
      label: 'Calculate the total Money',
      commonData: {
        calculateMoney: true
      },
      data: [
        //3-5
        {
          format: 'a',
          denos: [100, 50, 10, 5, 1]
        },
        {
          format: 'a',
          denos: [500, 100, 20, 10, 2, 1]
        },
        {
          format: 'a',
          denos: [500, 100, 5, 2, 1]
        },
        {
          format: 'a',
          denos: [500, 100, 50, 20, 10, 5, 1]
        },
        {
          format: 'x',
          denos: [100, 50, 10, 5, 1]
        },
        {
          format: 'x',
          denos: [500, 100, 20, 10, 2, 1]
        },
        {
          format: 'x',
          denos: [500, 100, 5, 2, 1]
        },
        {
          format: 'x',
          denos: [500, 100, 50, 20, 10, 5, 1]
        }
        //6-8
      ]
    },
    {
      //activity book - g4
      type: 'numberInput',
      id: 'word-problem-2',
      label: 'Word Problems',
      data: {
        type: 'word-problem',
        title: 'Word Problems',
        fontSize: '1.5rem',
        text: `Cost of 2 pairs of socks is ₹ 60. What is the cost of 1 pair of socks? | 30
        Cost of 6 tooth brushes is ₹ 180. What is the cost of 1 tooth brush? | 30
        Cost of 4 pizza is ₹ 840. What is the cost of 1 pizza? | 410
        Cost of 9 cricket balls is ₹ 810. What is the cost of 1 cricket ball? | 90
        Cost of 4 shirts is ₹ 4096. What is the cost of 1 shirt? | 1024`
      }
    }
  ]
};
