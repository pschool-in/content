export default {
  label: 'Money - 2',
  id: 'money-2',
  list: [
    {
      type: 'counter',
      id: 'count',
      label: 'Count Money',
      commonData: {
        title: 'Count the total money.'
      },
      data: [
        //kg-2 - level 1
        {
          width: 80,
          type: 'money',
          rs: [1],
          arr: [2, 5, 3, 6, 4, 8, 10, 7]
        },
        {
          width: 80,
          type: 'money',
          rs: [2],
          arr: [1, 3, 6, 4, 2, 5, 8, 10, 7]
        },
        {
          width: 80,
          type: 'money',
          rs: [5],
          arr: [2, 1, 5, 3, 6, 4, 7, 10, 9]
        },
        {
          width: 80,
          type: 'money',
          rs: [10],
          arr: [3, 2, 1, 6, 5, 4, 7, 10, 9]
        },
        {
          width: 80,
          type: 'money',
          rs: [100],
          arr: [2, 1, 5, 3, 6, 4, 9, 10, 7]
        }
      ]
    },
    {
      type: 'counter',
      id: 'count-2',
      label: 'Count Money - 2',
      commonData: {
        title: 'Count the total money.'
      },
      data: [
        //kg-2 - level 2
        {
          width: 80,
          type: 'money',
          rs: [2, 1],
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
          rs: [5, 1],
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
          rs: [1, 10],
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
          rs: [100, 10],
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
      type: 'numberInput',
      id: 'table',
      label: 'Get the Balance',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `You went to a shop and buy something. You didn't have the exact money, so you gave more and get some balance. Find the balance in the below table.
Price | Money Paid | Balance
₹ 18  | ₹ 20 | ₹  ?0
₹ 15  | ₹ 20 | ₹ ?1
₹ 12  | ₹ 20 | ₹  ?2
₹ 10 | ₹ 20 | ₹ ?3
₹ 5 | ₹ 20 |  ₹ ?4
₹ 17 | ₹ 20 |  ₹ ?5
₹ 8 | ₹ 20 |  ₹ ?6
2, 5, 8, 10, 15, 3, 12`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `You went to a shop and buy something. You didn't have the exact money, so you gave more and get some balance. Find the balance in the below table.
Price | Money Paid | Balance
₹ 40  | ₹ 50 | ₹  ?0
₹ 35  | ₹ 50 | ₹ ?1
₹ 42  | ₹ 50 | ₹  ?2
₹ 25 | ₹ 50 | ₹ ?3
₹ 20 | ₹ 50 |  ₹ ?4
₹ 39 | ₹ 50 |  ₹ ?5
₹ 10 | ₹ 50 |  ₹ ?6
10, 15, 8, 25, 30, 11, 40`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `You went to a shop and buy something. You didn't have the exact money, so you gave more and get some balance. Find the balance in the below table.
Price | Money Paid | Balance
₹ 60  | ₹ 100 | ₹  ?0
₹ 85  | ₹ 100 | ₹ ?1
₹ 90  | ₹ 100 | ₹  ?2
₹ 55 | ₹ 100 | ₹ ?3
₹ 30 | ₹ 100 |  ₹ ?4
₹ 25 | ₹ 100 |  ₹ ?5
₹ 95 | ₹ 100 |  ₹ ?6
40, 15, 10, 45, 70, 75, 5`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Word Problems',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `Price of one candy is ₹ 2.
2 candies = ₹ ?0
3 candies = ₹ ?1
4 candies = ₹ ?2
5 candies = ₹ ?3
6 candies = ₹ ?4
10 candies = ₹ ?5
4, 6, 8, 10, 12, 20`,

            `Price of one apple is ₹ 5. 
2 apples = ₹ ?0
3 apples = ₹ ?1
4 apples = ₹ ?2
5 apples = ₹ ?3
6 apples = ₹ ?4
10 apples = ₹ ?5
10, 15, 20, 25, 30, 50`,

            `Price of one pencil is ₹ 3.
2 pencils = ₹ ?0
3 pencils = ₹ ?1
4 pencils = ₹ ?2
5 pencils = ₹ ?3
6 pencils = ₹ ?4
10 pencils = ₹ ?5
6, 9, 12, 15, 18, 30`,

            `Price of one banana is ₹ 4. 
4 bananas = ₹ ?0
5 bananas = ₹ ?1
6 bananas = ₹ ?2
8 bananas = ₹ ?3
9 bananas = ₹ ?4
10 bananas = ₹ ?5
16, 20, 24, 32, 36, 40`,

            `Price of one mango is ₹ 10.
2 mangoes = ₹ ?0
3 mangoes = ₹ ?1
4 mangoes = ₹ ?2
5 mangoes = ₹ ?3
6 mangoes = ₹ ?4
10 mangoes = ₹ ?5
20, 30, 40, 50, 60, 100`
          ]
        },
        {
          list: [
            `Price of one candy is ₹ 3. Price of one lollypop is ₹ 5.
1 candy + 1 lollypop = ₹ ?0
2 candies + 1 lollypop  = ₹ ?1
1 candy + 2 lollypops  = ₹ ?2
2 candies + 2 lollypops  = ₹ ?3
8, 11, 13, 16`,

            `Price of one apple is ₹ 10. Price of one banana is ₹ 2.
1 apple + 1 banana = ₹ ?0
2 apples + 1 banana  = ₹ ?1
1 apple + 2 bananas  = ₹ ?2
2 apples + 2 bananas  = ₹ ?3
12, 22, 14, 24`,

            `Price of one mango is ₹ 10. Price of one apple is ₹ 20.
1 apple + 1 mango = ₹ ?0
2 apples + 1 mango  = ₹ ?1
1 apple + 2 mangoes  = ₹ ?2
2 apples + 2 mangoes  = ₹ ?3
30, 50, 40, 60`,

            `Price of one egg is ₹ 5. Price of one lemon is ₹ 10.
1 egg + 1 lemon = ₹ ?0
2 eggs + 1 lemon  = ₹ ?1
1 egg + 2 lemons  = ₹ ?2
2 eggs + 2 lemons  = ₹ ?3
15, 20, 25, 30`,

            `Price of one pencil is ₹ 10. Price of one eraser is ₹ 5.
1 pencil + 3 erasers = ₹ ?0
2 pencils + 4 erasers  = ₹ ?1
5 pencils + 2 erasers  = ₹ ?2
3 pencils + 2 erasers  = ₹ ?3
25, 40, 60, 40`
          ]
        },
        {
          list: [
            `Price of 2 apples is ₹ 40. 
1 apple = ₹ ?0
5 apples = ₹ ?1
6 apples = ₹ ?2
8 apples = ₹ ?3
9 apples = ₹ ?4
10 apples = ₹ ?5
20, 100, 120, 160, 180, 200`,

            `Price of 3 pencils is ₹ 15.
1 pencil = ₹ ?0
2 pencils = ₹ ?1
4 pencils = ₹ ?2
5 pencils = ₹ ?3
6 pencils = ₹ ?4
10 pencils = ₹ ?5
5, 10, 20, 25, 30, 50`,

            `Price of 4 candies is ₹ 12.
1 candy = ₹ ?0
3 candies = ₹ ?1
2 candies = ₹ ?2
5 candies = ₹ ?3
6 candies = ₹ ?4
10 candies = ₹ ?5
3, 9, 6, 15, 18, 30`,

            `Price of 5 mangoes is ₹ 40.
1 mango = ₹ ?0
3 mangoes = ₹ ?1
4 mangoes = ₹ ?2
8 mangoes = ₹ ?3
6 mangoes = ₹ ?4
10 mangoes = ₹ ?5
8, 24, 32, 64, 48, 80`,

            `Price of 10 bananas is ₹ 70. 
4 bananas = ₹ ?0
5 bananas = ₹ ?1
6 bananas = ₹ ?2
8 bananas = ₹ ?3
9 bananas = ₹ ?4
3 bananas = ₹ ?5
28, 35, 42, 56, 63, 21`
          ]
        }
      ]
    },
    {
      type: 'denomination',
      id: 'denomination',
      label: 'Write the Denomination',
      commonData: {
        showImg: true
      },
      data: [
        {
          format: 'x',
          denos: [2, 1]
        },
        {
          format: 'x5',
          denos: [10, 5]
        },
        {
          format: 'x0x',
          denos: [100, 1]
        },
        {
          format: 'xx0',
          denos: [100, 10]
        },
        {
          format: 'x0',
          denos: [20, 10]
        },
        {
          format: '1x',
          denos: [5, 2, 1]
        }
      ]
    },
    {
      //repeat of showcase
      type: 'denomination',
      id: 'calulate',
      label: 'Calculate the total Money',
      commonData: {
        showImg: true,
        calculateMoney: true
      },
      data: [
        {
          format: 'a',
          denos: [2, 1]
        },
        {
          format: 'a',
          denos: [10, 5]
        },
        {
          format: 'a',
          denos: [100, 1]
        },
        {
          format: 'a',
          denos: [100, 10]
        },
        {
          format: 'a',
          denos: [20, 10]
        },
        {
          format: 'a',
          denos: [5, 2, 1]
        },
        {
          format: 'a',
          denos: [100, 10]
        }
      ]
    }
  ]
};
