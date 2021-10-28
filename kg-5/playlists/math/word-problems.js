export default {
  label: 'Word Problems',
  id: 'word-problems',
  list: [
    {
      label: 'Type of Problem',
      type: 'classifySentence',
      id: 'classify',
      lockAfter: 2,
      commonData: {
        title:
          'Classify the below problem as addition, subtraction, multiplication, division',
        types: ['+', '−', '×', '÷'],
        optionFontSize: '3rem'
      },
      data: [
        [
          `A school had 450 boys and 524 girls. Find the number of students in this school.
Dora got ₹ 325 from her father and ₹ 222 from her mother. How much does she have in total?
Gary played a car game and scored 453 points in first round and 523 points in second round. How many points did he have after two rounds?`,
          `A shopkeeper bought 240 eggs and sold 148 eggs. How many eggs were left unsold?
An animal care society tested 365 pet animals. 128 were found to have diseases. Find the number of healthy pet animals remaining.
In sports day function, 674 students participated. Out of them 345 were boys. Find the number of girls who participated.`,
          `There are 127 pencils in a box. How many pencils will be there in total in 9 boxes?
A basket of eggs contains 12 eggs. How many eggs will be there in 17 baskets?`,

          `Nila has 36 potatoes. She puts 6 potatoes in a basket. How many baskets will she need to put all the potatoes?
Jonah has  275 coins. One pencil cost 5 coins. How many pencils can Jonah buy?`
        ],
        [
          `Subbu got a new camera. She took 131 pictures of her friends. She took 68 pictures of her family. How many pictures did she take in all?
Jack spent 172 minutes in reading last week. He read for 111 minutes this week. How many minutes did he read in all?
Simbu collects stamps. He has 354 stamps in a box. He has 235 more stamps in a book. How many stamps does he have in all?`,
          `Rita has a book that has 750 pages. She read 567 pages. How many pages are left unread?
In a cricket match, Australia made 356 runs. India has made 268 runs. How many more runs does India need to win?
Selvi had ₹ 978 in her purse. She bought a book for ₹ 357. How much money is left in her purse?`,
          `The cost of one bat is ₹ 245. What is the total cost of 7 bats?
There are 25 fruits on a tree. How many fruits will be there on 16 trees?`,
          `There are 117 students going for a picnic in cars. 9 students can go in one car. How many cars will be required for all students?
Gagan has to sell 672 dolls. He sells 7 dolls in one day. How many days will he take to sell all the dolls?`
        ],
        [
          `The car dealer has 125 cars in the lot. The owner just ordered 142 new cars. When the new cars come, what will be the total number of cars in the lot?
        Kasim has 23 blue marbles and 17 red marbles in a box. How many marbles does he have all together?`,
          `A restaurant made 478 sandwiches. 367 sandwiches were served. How many sandwiches remain?
        There are 350 apple trees and 670 banana trees in Kumar's garden. How many less apple trees are there than the banana trees?`,
          `A box of chocolates has 46 chocolates. How many chocolates will be there in 16 boxes?
        Every classroom in a school has 35 students. How many students are there in 23 classrooms?
        The price of a plate is ₹ 114. What will be the total price of 8 plates?`,
          `A teacher has 342 notebooks. She has to make bundles of 3 notebooks. How many bundles can she make?
        One packet of pencils contains 8 pencils. If there are a total of 512 pencils, how many packets of pencils can we make?
        Richa has 84 erasers to give. If she gives 2 erasers to each of her class friends, how many class friends will get erasers?`
        ],
        [
          `Janis sings 12 songs on Monday and 20 songs on Tuesday. How many songs did she sing in all?
Pooja has 56 black balls and 77 blue balls. How many balls does she have in all?`,
          `Kayal had ₹ 789. She spent ₹ 399 on a bag. How much money is left with her?
Lalaji has to write 76 pages in a notebook. He writes 54 pages. How many more pages does he have to write?`,
          `One bus ticket from Pune to Mumbai costs ₹ 455. What will be the cost of 5 tickets from Pune to Mumbai?
A teacher gives 12 pencils to each student in a classroom. How many pencils will she give in total to 18 students?
Every girl in a house has 18 clothes. What is the total number of clothes 13 girls will have?`,
          `A teacher has 96 notebooks to give to 8 students. How many notebooks will each student get?
A mother gives ₹ 465 equally to her 5 sons. How much money does each son get?
On his birthday, Jagga buys 600 toffees for school. He wants to put them equally in 4 packets. How many toffees should he put in one packet?`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Answer the Word Problem.',
      lockAfter: 2,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `A school had 450 boys and 500 girls. Find the number of students in this school. | 950
Dora got ₹ 333 from her father and ₹ 222 from her mother. How much does she have in total? | ₹ ?0 | 555
Gary played a car game and scored 400 points in first round and 600 points in second round. How many points did he have after two rounds? | 1000
A shopkeeper bought 250 eggs and sold 150 eggs. How many eggs were left unsold? | 100
An animal care society tested 365 pet animals. 165 were found to have diseases. Find the number of healthy pet animals remaining. | 200`,

        `In sports day function, 645 students participated. Out of them 345 were boys. Find the number of girls who participated. | 300
There are 200 pencils in a box. How many pencils will be there in total in 9 boxes? | 1800
A basket of eggs contains 12 eggs. How many eggs will be there in 8 baskets? | 96
Nila has 42 potatoes. She puts 6 potatoes in a basket. How many baskets will she need to put all the potatoes? | 7
Jonah has  300 coins. One pencil cost 10 coins. How many pencils can Jonah buy? | 30`,

        `Subbu got a new camera. She took 130 pictures of her friends. She took 70 pictures of her family. How many pictures did she take in all? | 200
Jack spent 180 minutes in reading last week. He read for 120 minutes this week. How many minutes did he read in all? | 300
Simbu collects stamps. He has 350 stamps in a box. He has 150 more stamps in a book. How many stamps does he have in all? | 500
Rita has a book that has 750 pages. She read 500 pages. How many pages are left unread? | 250
In a cricket match, Australia made 356 runs. India has made 256 runs. How many more runs does India need to win? | 101`,

        `Selvi had ₹ 1000 in her purse. She bought a book for ₹ 300. How much money is left in her purse? | ₹ ?0 | 700
The cost of one bat is ₹ 500. What is the total cost of 4 bats? | ₹ ?0 | 2000
There are 25 fruits on a tree. How many fruits will be there on 8 trees? | 200
There are 45 students going for a picnic in cars. 5 students can go in one car. How many cars will be required for all students? | 9
Gagan has to sell 500 dolls. He sells 10 dolls in one day. How many days will he take to sell all the dolls? | 50`,

        `The car dealer has 125 cars in the lot. The owner just ordered 100 new cars. When the new cars come, what will be the total number of cars in the lot? | 225
Kasim has 25 blue marbles and 15 red marbles in a box. How many marbles does he have all together? | 40
A restaurant made 400 sandwiches. 360 sandwiches were served. How many sandwiches remain? | 40
There are 350 apple trees and 600 banana trees in Kumar's garden. How many less apple trees are there than the banana trees? | 250
A box of chocolates has 40 chocolates. How many chocolates will be there in 5 boxes? | 200`,

        `Every classroom in a school has 35 students. How many students are there in 4 classrooms? | 140
The price of a plate is ₹ 50. What will be the total price of 8 plates? | ₹ ?0 | 400
A teacher has 300 notebooks. She has to make bundles of 15 notebooks. How many bundles can she make? | 20
One packet of pencils contains 10 pencils. If there are a total of 500 pencils, how many packets of pencils can we make? | 50
Richa has 80 erasers to give. If she gives 2 erasers to each of her class friends, how many class friends will get erasers? | 40`,

        `Janis sings 30 songs on Monday and 20 songs on Tuesday. How many songs did she sing in all? | 50
Pooja has 50 black balls and 75 blue balls. How many balls does she have in all? | 125
Kayal had ₹ 700. She spent ₹ 400 on a bag. How much money is left with her? | ₹ ?0 | 300
Lalaji has to write 75 pages in a notebook. He writes 55 pages. How many more pages does he have to write? | 20
One bus ticket from Pune to Mumbai costs ₹ 500. What will be the cost of 5 tickets from Pune to Mumbai? | ₹ ?0 | 2500`,

        `A teacher gives 10 pencils to each student in a classroom. How many pencils will she give in total to 18 students? | 180
Every girl in a house has 15 clothes. What is the total number of clothes 5 girls will have? | 75
A teacher has 96 notebooks to give to 8 students. How many notebooks will each student get? | 12
A mother gives ₹ 250 equally to her 5 sons. How much money does each son get? | ₹ ?0 | 50
On his birthday, Jaggu buys 600 toffees for school. He wants to put them equally in 4 packets. How many toffees should he put in one packet? | 150`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Word Problem with steps',
      lockAfter: 1,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `The cost of 3 pens is ₹ 18. What is the cost of 5 pens?
solution:
The cost of 1 pen = ₹ ?0
The cost of 5 pens = ₹ ?1
6, 30`,

            `Sam had ₹ 100. He bought an ice-cream for ₹ 40 and candies for ₹ 20. How much does he have as balance?
solution:
Total spending = ₹ ?0
Balance in hand = ₹ ?1
60, 40`,

            `Sam's car can cover 150 km in 3 hr. How much time will it take to cover 500 km?
solution:
Distance covered in 1 hr = ?0 km
Time taken for 500 km = ?1 hr
50, 10`,

            `48 balls can be packed in 6 boxes. How many balls can be packed in 9 boxes?
solution:
No. of balls in 1 box = ?0
No. of balls in 9 boxes = ?1
8, 72`,

            `The cost of 5 notebooks is ₹ 150. What is the cost of 12 notebooks?
solution:
Cost of 1 notebook = ₹ ?0
Cost of 12 notebooks = ₹ ?1
30, 360`
          ]
        },

        {
          list: [
            `John had ₹ 1000. He bought a toy for ₹ 200, a book for ₹ 100 and a waterbottle for ₹ 50. How much does he have as balance?
solution:
Total spending = ₹ ?0
Balance in hand = ₹ ?1
350, 650`,

            `Geeta went for shopping by booking a taxi. She bought clothes for ₹ 1000 and snacks for ₹ 200 and returned home. She spent ₹ 1500 in total. How much she spent for taxi?
solution:
Total spending = ₹ ?0
Total spending minus taxi fare = ₹ ?1
Taxi fare = ₹ ?2
1500, 1200, 300`,

            `Sam's car can cover 100 km in 2 hr. How much time will it take to cover 250 km?
solution:
Distance covered in 1 hr = ?0 km
Time taken for 250 km = ?1 hr
50, 5`,

            `100 apples can be packed in 5 boxes. How many apples can be packed in 8 boxes?
solution:
No. of apples in 1 box = ?0
No. of apples in 8 boxes = ?1
20, 160`,

            `The cost of 5 apples is ₹ 150. What is the cost of 20 apples?
solution:
Cost of 1 apple = ₹ ?0
Cost of 20 apples = ₹ ?1
30, 600`
          ]
        },

        {
          list: [
            `Simon went to buy eggs. He gave ₹ 100 and got ₹ 20 as balance and bought 10 eggs. What is the cost of an egg?
solution:
Cost of 10 eggs = ₹ ?0
Cost of 1 egg = ₹ ?1
80, 8`,

            `You can buy 20 candies for ₹ 60. How many candies can you buy for ₹ 90.
solution:
Cost of 1 candy = ₹ ?0
No. of candies for  ₹ 90 = ?1
3, 30`,

            `Selvi's car needs 5 litre of petrol for 100 km. How many litre of petrol does she need to cover 240 km?
solution:
Distance covered by 1 litre = ?0 km
Petrol needed for 240 km = ?1 litre
20, 12`,

            `75 oranges can be packed in 5 boxes. How many oranges can be packed in 12 boxes?
solution:
No. of oranges in 1 box = ?0
No. of oranges in 12 boxes = ?1
15, 180`,

            `The cost of 25 candies is ₹ 50. What is the cost of 15 candies?
solution:
Cost of 1 candy = ₹ ?0
Cost of 15 candies = ₹ ?1
2, 30`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-factors',
      label: 'Word Problem factors',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `Ramu has a 21 ft long cloth. He wants to cut the cloth into equal pieces of 3 ft length. How much cloth will be left?
            solution:
            Number of 3 ft cloth = ?0 ft
            Cloth left = ?1 ft
            7, 0`,

            `John has 2 clothes 12 ft and 15 ft long. What could be the length ruler scale in ft by which he can measure both the cloth? 
            solution:
            The smallest length of the ruler = ?0 ft
            The biggest length of the ruler = ?1 ft
            1, 3`,

            `There are 24 bangles. We need to put the bangles in 8 boxes. Can we put them equally without any bangles being left?
            solution:
            Number Bangles in each box = ?0
            Bangles left = ?1
            3, 0`,

            `Dave has 20 cookies. He wants to keep the cookies in a jar. He has 2 different types of Jars which can contain 4 cookies or 3 cookies.
            If he wants to keep an equal amount of cookies in each Jar, how many Jars will he require? Note - Dave can only use one type of Jar.
            solution:
            Number of Jars required = ?0
            Each Jar have = ?1 cookies
            5, 4`,

            `Teacher has 20 Pencils and 10 erasers. These can be divided equally to maximum how many students?
            solution:
            Each student will get = ?0 Pencils
            Each student will get = ?1 Erasers
            Number of Students = ?2
            2, 1, 10`
          ]
        },
        `A class had 90 pencils. If these pencils are divided among 15 students equally, how many pencils each student will get? | 6
        Kittu wants to buy chocolates. She has ₹ 18. If each chocolate cost ₹ 4, how many chocolates will she be able to buy? | 4
        I can put 30 balls equally in 10 buckets, each bucket will have 3 balls. If I have only 5 buckets, how many balls will be present in each bucket? | 6
        Neelu wants to give chocolates to his 4 friends. If he wants to give equally to his friends, how many should he buy, 20 or 30? | 20
        What is the least number of saplings which can be arranged in rows of 4, 5 and 6? | 60`,

        `Find the length of the rope in cm which can be cut into pieces of 10 cm, 15 cm, 20 cm? | 30
        A shopkeeper sells candles in packs of 8 and candle stands in packs of 6. What is the least number of candles and candle stands Chintu should buy so that each candle will have a candle stand? | 24
        To print a paper a printer takes 3 seconds. How long does the printer need to print 180 pages? Find the time in minutes. | 9
        Babar plays football every 3 days, runs every 5 days and cycles every 6 days. If he has done all together today, then after how many days will he do all the 3 activities together again? | 30
        John saves ₹ 6 each day. If he wants to get his savings converted to ₹ 100 denomination. How many days does he need to wait to convert the whole savings to ₹ 100 denomination? | 50`,

      ]
    }
  ]
};
