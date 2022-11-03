export default {
  label: 'Profit and Loss',
  id: 'profit-loss',
  list: [
    {
      label: 'Profit or Loss',
      id: 'profit-loss',
      type: 'classifySentence',
      commonData: {
        title:
          'Based the given cost price and selling price, find whether there is Profit or Loss.',
        types: ['Profit', 'Loss']
      },
      data: [
        [
          `Gopal bought a box of Mangoes for ₹ 500 and sold it for ₹ 600.
Ashok bought a 10 kg box of Apple for ₹ 1000 and sold them at the price of ₹ 115 per kg.
A TV was bought for ₹ 21,450 and sold for ₹ 22,150.`,

          `Gopal bought a box of Mangoes for ₹ 500 but some of them got spoiled  due to rain. He sold them for ₹ 400.
Arjun bought ice-creams for ₹ 75 and sold them for ₹ 55`
        ],
        [
          `Arjun bought a pack of 100 pens for ₹ 1000 and sold each pen for ₹ 11.
The store owner bought notebooks for ₹ 45 and sold them for ₹ 50.`,

          `The vegetable seller sold tomatoes for ₹ 10 / kg, which he bought for  ₹ 12 / kg.
Gopal bought a dozen eggs for ₹ 60 and sold them for ₹ 4 each.
Kadhar bought a jackfruit for ₹ 200 and sold it for ₹ 180.`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Find the Missing',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Cost Price (CP) is given. Some are sold for profit and some for loss. Find the Selling Price.
C P | profit or loss| S P
₹ 50  | ₹ 10 profit | ₹  ?0
₹ 100  | ₹ 30 profit | ₹ ?1
₹ 150  | ₹ 50 profit | ₹  ?2
₹ 100 | ₹ 15 loss | ₹ ?3
₹ 120 | ₹ 20 loss |  ₹ ?4
60, 130, 200, 85, 100`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Cost Price (CP) is given. Some are sold for profit and some for loss. Find the Selling Price.
C P | profit or loss| S P
₹ 50  | ₹ 10 loss | ₹  ?0
₹ 100  | ₹ 30 loss | ₹ ?1
₹ 150  | ₹ 50 loss | ₹  ?2
₹ 100 | ₹ 15 profit | ₹ ?3
₹ 120 | ₹ 20 profit |  ₹ ?4
40, 70, 100, 115, 140`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Selling Price (SP) is given. Some are sold for profit and some for loss. Find the Cost Price.
C P | profit or loss| S P
₹ ?0  | ₹ 3 profit | ₹ 13
₹ ?1  | ₹ 2 loss | ₹ 18
₹ ?2  | ₹ 9 profit | ₹ 50 
₹ ?3 | ₹ 7 loss | ₹ 43
₹ ?4 | ₹ 15 loss |  ₹ 80
10, 20, 41, 50, 95`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Fill the missing values.
C P | profit or loss| S P
₹ ?0  | ₹ 20 profit | ₹ 100
₹ 135  | ₹ ?1 profit | ₹ 150
₹ 71  | ₹ ?2 profit | ₹ 78 
₹ 95 | ₹ ?3 loss | ₹ 81
₹ ?4 | ₹ 22 loss |  ₹ 88
80, 15, 7, 14, 110`
            }
          ]
        },
        {
          list: [
            {
              widths: '80, 130, 80',
              text: `Fill the missing values.
C P | profit or loss| S P
₹ 150  | ₹ ?0 loss | ₹ 115
₹ 185  | ₹ ?1 loss | ₹ 160
₹ 74  | ₹ 24 profit | ₹ ?2
₹ ?3 | ₹ 9 loss | ₹ 81
₹ 500 | ₹ 50 loss |  ₹ ?4
35, 25, 98, 90, 450`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Word Problem with Steps',
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `Gopal sold onions for ₹ 30 per kg, and got a profit of ₹ 5 per kg. He sold 50 kg of onions. What is his CP and total Profit?
solution:
Profit per kg = ₹ ?0
Total Profit in selling 50 kg = ₹ ?1
CP per kg = ₹ ?2
CP of 50 kg = ₹ ?3
5, 250, 25, 1250 `,
            `Ravi bought a pack of 10 pens for ₹ 100. He sold each pen for ₹ 12. What is his profit?
solution:
SP of one pen = ₹ ?0
SP of 10 pens = ₹ ?1
CP of 10 pens  = ₹ ?2
Profit = ₹ ?3
12, 120, 100, 20`,

            `Ashok bought a 10 kg box of apple for ₹ 1000 and sold them at the price of ₹ 115 per kg. What is his profit?
solution:
SP of 1 kg of apple = ₹ ?0
SP of 10 kg = ₹ ?1
CP of 10 kg = ₹ ?2
Profit = ₹ ?3
115, 1150, 1000, 150`,

            `Kadar bought 100 kg of mangoes for ₹ 10000 and spent ₹ 1000 for transportation. He sold them at ₹ 120 per kg. What is his profit.
solution:
CP of 100 kg of mangoes = ₹ ?0
Transportation cost = ₹ ?1
So, Total CP = ₹ ?2
SP of 1 kg = ₹ ?3
SP of 100 kg = ₹ ?4
Profit = ₹ ?5
10000, 1000, 11000, 120, 12000, 1000`,

            `A TV was bought for ₹ 30000 and sold at the loss of ₹ 3000. What is the SP?
solution:
CP = ₹ ?0
Loss = ₹ ?1
SP = CP - Loss
= ?2 - ?3
= ?4
30000, 3000, 30000, 3000, 27000`
          ]
        },
        {
          list: [
            `Ravi bought a pencil and rubber for ₹ 15. He sold the pencil for ₹ 12 and sold the rubber for ₹ 6. What is his profit?
Solution:
Total CP of pencil and rubber = ₹ ?0
Total SP of pencil and rubber = ₹ ?1
Profit = SP - CP = ₹ ?2
15, 18, 3`,

            `Gopal bought 100 kg of mangoes for ₹ 5000. He sold the first 80 kg for ₹ 60 per kg. As the business got slow, he sold the remaining 20 kg for ₹ 30 per kg. What is his profit?
SP of the first 80 kg = ₹ ?0
SP of the last 20 kg = ₹ ?1
Total SP = ₹ ?2
Profit = ₹ ?3
4800, 600, 5400, 400`,

            `Rani bought a dozen egg for ₹ 100 and sold them for ₹10 each. What was her profit?
Solution:
CP of a dozen egg = ₹ ?0
SP of a dozen egg = ₹ ?1
Profit = ₹ ?2
100, 120, 20`,

            `Sumi bought a table for ₹ 12000 and sold it at a loss of ₹ 1500. What is the SP?
CP = ?0
Loss = ?1
SP = CP - Loss = ?2
12000, 1500, 10500`,

            `The cost price of 6 pencils is equal to the selling price of 5 pencils. Each pencil was sold for ₹ 12. What is the CP of 1 pencil.
Solution:
SP of 5 pencils = ₹ ?0
CP of 6 pencils = ₹ ?1
CP of 1 pencil = ₹ ?2
60, 60, 10`
          ]
        }
      ]
    }
  ]
};
